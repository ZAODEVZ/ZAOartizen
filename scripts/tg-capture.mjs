#!/usr/bin/env node
// Telegram capture bot: pulls messages handed to the bot and appends them to meetings/raw/.
//
// Usage:
//   node scripts/tg-capture.mjs            # poll, write, save the offset
//   node scripts/tg-capture.mjs --dry-run  # poll and print, write nothing (offset not saved)
//
// Runs from .github/workflows/telegram-capture.yml on a schedule. No server, no hosting - the
// workflow polls getUpdates and commits whatever landed, so every capture is a visible commit.
//
// WHAT IT CAPTURES, AND WHY IT IS NARROW
// Only messages deliberately handed to the bot:
//   - /note <text> in a group, or /note replying to a message (captures the replied-to message)
//   - any message that @-mentions the bot
//   - any reply to something the bot said
//   - anything sent or forwarded to the bot in a direct message
// This is also exactly what Telegram gives a group bot under DEFAULT privacy mode, so no BotFather
// privacy change is needed. That is deliberate: ZAODEVZ/ZAOartizen is a PUBLIC repo, and the
// Artizen fund-director group is a private, invite-only room of ~266 people who did not agree to
// being mirrored in public. Explicit-handoff capture means a human chose every message that lands.
// CAPTURE_ALL=1 disables that and takes the whole firehose - see meetings/telegram-bot.md before
// you set it, and do not set it for someone else's group.

import { readFileSync, writeFileSync, existsSync, mkdirSync, appendFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const REPO_ROOT = join(dirname(fileURLToPath(import.meta.url)), '..');
const RAW_DIR = join(REPO_ROOT, 'meetings/raw');
const OFFSET_FILE = join(REPO_ROOT, 'meetings/.telegram-offset.json');
const DRY_RUN = process.argv.includes('--dry-run');

const TOKEN = process.env.TELEGRAM_BOT_TOKEN;
if (!TOKEN) {
  console.error('TELEGRAM_BOT_TOKEN is not set. See meetings/telegram-bot.md.');
  process.exit(1);
}

// Allowlist. A bot username is public, so anyone can add this bot to any group and start
// /note-ing things into the repo. Refuse to run without at least one allowlist set - an open
// write path into a public repo is not an acceptable default.
const parseList = (v) => (v || '').split(',').map((s) => s.trim()).filter(Boolean);
const ALLOWED_CHATS = parseList(process.env.TELEGRAM_ALLOWED_CHATS);
const ALLOWED_USERS = parseList(process.env.TELEGRAM_ALLOWED_USERS).map((u) => u.replace(/^@/, '').toLowerCase());
const CAPTURE_ALL = process.env.CAPTURE_ALL === '1';

if (ALLOWED_CHATS.length === 0 && ALLOWED_USERS.length === 0) {
  console.error('Refusing to run: set TELEGRAM_ALLOWED_CHATS and/or TELEGRAM_ALLOWED_USERS.');
  console.error('Without one, anyone who finds the bot could write to this public repo.');
  console.error('See meetings/telegram-bot.md for how to find your chat id.');
  process.exit(1);
}

const api = async (method, params = {}) => {
  const res = await fetch(`https://api.telegram.org/bot${TOKEN}/${method}`, {
    method: 'POST',
    headers: { 'content-type': 'application/json' },
    body: JSON.stringify(params),
  });
  const body = await res.json().catch(() => ({}));
  if (!res.ok || !body.ok) {
    throw new Error(`${method} failed: ${res.status} ${body.description || '(no description)'}`);
  }
  return body.result;
};

const me = await api('getMe');
const BOT_USERNAME = (me.username || '').toLowerCase();
console.log(`Bot: @${me.username} (id ${me.id})`);

// getUpdates is incremental: Telegram replays everything until you acknowledge with an offset,
// and DROPS anything older than 24h. So a gap longer than a day loses messages - that is a
// property of the transport, not a bug here. The workflow's schedule is the real guard.
let offset = 0;
if (existsSync(OFFSET_FILE)) {
  try {
    offset = JSON.parse(readFileSync(OFFSET_FILE, 'utf8')).offset || 0;
  } catch {
    console.error(`Could not read ${OFFSET_FILE}, starting from 0 (may re-capture recent messages).`);
  }
}

const updates = await api('getUpdates', {
  offset,
  timeout: 0,
  allowed_updates: ['message', 'channel_post'],
});
console.log(`Fetched ${updates.length} update(s) from offset ${offset}.`);

const isAllowed = (msg) => {
  const chatId = String(msg.chat?.id ?? '');
  const from = (msg.from?.username || '').toLowerCase();
  const fromId = String(msg.from?.id ?? '');
  if (ALLOWED_CHATS.includes(chatId)) return true;
  if (ALLOWED_USERS.includes(from) || ALLOWED_USERS.includes(fromId)) return true;
  return false;
};

// Did a human deliberately hand this to the bot?
const captureReason = (msg) => {
  if (CAPTURE_ALL) return 'firehose';
  if (msg.chat?.type === 'private') return 'direct message';
  const text = msg.text || msg.caption || '';
  if (/^\/note(@\w+)?\b/i.test(text)) return '/note';
  if (BOT_USERNAME && text.toLowerCase().includes(`@${BOT_USERNAME}`)) return 'mention';
  if (msg.reply_to_message?.from?.id === me.id) return 'reply to bot';
  return null;
};

// A /note that replies to something captures the thing it replied to - that is how you grab a
// Venus or Rene post without mirroring the whole room.
const resolveTarget = (msg) => {
  const own = msg.text || msg.caption || '';
  const isNote = /^\/note(@\w+)?\b/i.test(own);
  const replied = msg.reply_to_message;
  if (isNote && replied && (replied.text || replied.caption)) {
    const comment = own.replace(/^\/note(@\w+)?\s*/i, '').trim();
    return { body: replied.text || replied.caption, author: replied.from, comment, quoted: true };
  }
  const body = isNote ? own.replace(/^\/note(@\w+)?\s*/i, '').trim() : own;
  return { body, author: msg.from, comment: '', quoted: false };
};

const describeAuthor = (msg, author) => {
  // A forward keeps the original author in forward_origin; that is who actually said it.
  const origin = msg.forward_origin;
  if (origin?.type === 'user' && origin.sender_user) {
    const u = origin.sender_user;
    return `${[u.first_name, u.last_name].filter(Boolean).join(' ')}${u.username ? ` (@${u.username})` : ''} [forwarded]`;
  }
  if (origin?.sender_user_name) return `${origin.sender_user_name} [forwarded]`;
  if (origin?.chat?.title) return `${origin.chat.title} [forwarded]`;
  if (!author) return 'unknown';
  return `${[author.first_name, author.last_name].filter(Boolean).join(' ')}${author.username ? ` (@${author.username})` : ''}`;
};

// Tag anything that smells like a mechanics change, so the reconcile pass in meetings/README.md
// has something to grep for. A tag is a hint to a human, never a decision.
const MECHANICS_WORDS = /\b(match|multiple|multiplier|boost|season|drive|prize|curation|curate|payout|endowment|artifact|quest|cap|fund director)\b/i;

const entries = [];
let maxUpdateId = offset ? offset - 1 : 0;

for (const update of updates) {
  maxUpdateId = Math.max(maxUpdateId, update.update_id);
  const msg = update.message || update.channel_post;
  if (!msg) continue;

  if (!isAllowed(msg)) {
    console.log(`  skip: chat ${msg.chat?.id} / @${msg.from?.username || '?'} not allowlisted`);
    continue;
  }
  const reason = captureReason(msg);
  if (!reason) continue;

  const { body, author, comment, quoted } = resolveTarget(msg);
  if (!body) {
    console.log(`  skip: message ${msg.message_id} has no text to capture`);
    continue;
  }

  entries.push({
    at: new Date((msg.date || Math.floor(Date.now() / 1000)) * 1000).toISOString().replace('T', ' ').slice(0, 16),
    chat: msg.chat?.title || (msg.chat?.type === 'private' ? 'direct message' : String(msg.chat?.id)),
    chatId: msg.chat?.id,
    messageId: msg.message_id,
    author: describeAuthor(msg, author),
    capturedBy: `${[msg.from?.first_name, msg.from?.last_name].filter(Boolean).join(' ')}${msg.from?.username ? ` (@${msg.from.username})` : ''}`,
    reason,
    quoted,
    comment,
    body,
    mechanics: MECHANICS_WORDS.test(body),
  });
}

if (entries.length === 0) {
  console.log('Nothing to capture.');
} else {
  // One file per month, so raw/ does not become thousands of files.
  const byFile = new Map();
  for (const e of entries) {
    const file = join(RAW_DIR, `telegram-${e.at.slice(0, 7)}.md`);
    if (!byFile.has(file)) byFile.set(file, []);
    byFile.get(file).push(e);
  }

  for (const [file, group] of byFile) {
    let out = '';
    if (!existsSync(file)) {
      const month = group[0].at.slice(0, 7);
      out += `# Telegram capture - ${month}\n\n`;
      out += 'Written by `scripts/tg-capture.mjs`. Each entry was deliberately handed to the bot by a\n';
      out += 'person (/note, a mention, a reply, or a DM) - this is not a mirror of any group.\n\n';
      out += 'Raw evidence: do not edit entries after they land. Work mechanics changes into\n';
      out += '`../mechanics-changelog.md` and then `../../research/mechanics-canonical.md`.\n';
    }
    for (const e of group) {
      out += `\n## ${e.at} UTC - ${e.author}\n\n`;
      out += `Chat: ${e.chat} | message ${e.messageId} | captured via ${e.reason}`;
      if (e.quoted) out += ` by ${e.capturedBy}`;
      out += `\n`;
      if (e.mechanics) out += `Tags: possible-mechanics-change (grep hint, not a verdict)\n`;
      out += `\n`;
      for (const line of e.body.split('\n')) out += `> ${line}\n`;
      if (e.comment) out += `\nNote from ${e.capturedBy}: ${e.comment}\n`;
    }

    if (DRY_RUN) {
      console.log(`\n--- would append to ${file} ---\n${out}`);
    } else {
      mkdirSync(RAW_DIR, { recursive: true });
      appendFileSync(file, out);
      console.log(`  wrote ${group.length} entr${group.length === 1 ? 'y' : 'ies'} to ${file}`);
    }
  }
}

if (DRY_RUN) {
  console.log('\nDry run - offset NOT saved, so the same updates come back next run.');
} else if (updates.length > 0) {
  // Acknowledge everything fetched, including messages we chose not to capture. Otherwise
  // Telegram replays them forever and the log fills with the same skip lines.
  writeFileSync(OFFSET_FILE, `${JSON.stringify({ offset: maxUpdateId + 1, updatedAt: new Date().toISOString() }, null, 2)}\n`);
  console.log(`Offset saved: ${maxUpdateId + 1}.`);
}

const captured = entries.length;
console.log(`\nDone. ${captured} captured, ${updates.length - captured} ignored.`);
