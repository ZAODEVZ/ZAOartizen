#!/usr/bin/env node
// Scrape the live ZAO Fund rank/score and (optionally) update app/dashboard/data.ts.
// Usage:
//   node scripts/refresh-fund.mjs          # scrape + print what it found (no write)
//   node scripts/refresh-fund.mjs --write  # also update app/dashboard/data.ts
//
// Uses the gstack `browse` headless binary because Artizen is client-rendered (Bubble.io),
// so plain HTTP fetch returns nothing. Non-destructive: only rewrites a field when it
// confidently parses a value; leaves everything else untouched.
//
// IMPORTANT (found 2026-07-13): the ZAO Fund's own page (index/mf/zao-fund-for-emerging-culture)
// does NOT display its own rank/score/prize/raised anywhere in its text - those only exist on
// the platform-wide fund-vs-fund leaderboard (index/matchfunds), one row per fund. Scraping
// that page and grabbing the FIRST "RANK#.../SCORE.../PRIZE$.../RAISED$..." match is wrong -
// it silently grabs whichever fund happens to render first, not the ZAO Fund. Anchor the parse
// to the "ZAO Fund for Emerging Culture" substring specifically (see findFundBlock below).
// Also: the `browse` server persists a session between runs - if `goto` silently fails (network
// hiccup), `text` returns whatever page was ALREADY loaded, which reads as valid data but is
// stale/wrong. Always verify `browse url` matches the target before trusting `text`.

import { execFileSync } from 'node:child_process';
import { existsSync, readFileSync, writeFileSync } from 'node:fs';
import { homedir } from 'node:os';
import { join } from 'node:path';

const LEADERBOARD_URL = 'https://artizen.fund/index/matchfunds';
const FUND_NAME = 'ZAO Fund for Emerging Culture';
const DATA_FILE = new URL('../app/dashboard/data.ts', import.meta.url).pathname;
const WRITE = process.argv.includes('--write');

// Find the browse binary; ensure bun is on PATH (browse needs it).
const browse = join(homedir(), '.claude/skills/gstack/browse/dist/browse');
if (!existsSync(browse)) {
  console.error('browse binary not found at', browse, '- install gstack browse first.');
  process.exit(1);
}
const env = { ...process.env, PATH: `${join(homedir(), '.bun/bin')}:${process.env.PATH}` };

function run(...args) {
  return execFileSync(browse, args, { env, encoding: 'utf8', timeout: 60000 });
}

console.log('Scraping', LEADERBOARD_URL, '...');
// Note: deliberately NOT calling `browse restart` here - it repeatedly triggered a
// "server crashed twice in a row" loop on an already-healthy session during testing
// (2026-07-13). The URL + FUND_NAME checks below are the real safety net: they abort
// rather than trust stale/wrong content, which is what restart was meant to prevent.
// The server can also take a moment to spin up cold, so goto gets up to 2 attempts.
const isOnLeaderboard = () => /artizen\.fund\/index\/(matchfunds|leaderboard)/.test(run('url').trim());
let landed = false;
for (let attempt = 1; attempt <= 2 && !landed; attempt++) {
  try {
    run('goto', LEADERBOARD_URL);
    try { run('wait', '--networkidle'); } catch { /* best effort */ }
    execFileSync('sleep', ['5']); // give the SPA a moment to render
  } catch (e) {
    console.error(`navigation attempt ${attempt} failed:`, e.message);
  }
  try {
    landed = isOnLeaderboard();
  } catch { /* server not up yet - loop will retry */ }
  if (!landed && attempt === 1) {
    console.error('not on the leaderboard page yet, retrying once more...');
    execFileSync('sleep', ['5']);
  }
}

if (!landed) {
  const actualUrl = (() => { try { return run('url').trim(); } catch { return '(unreadable)'; } })();
  console.error(`URL mismatch after goto - expected the matchfunds/leaderboard page, got ${actualUrl}. Aborting (stale/failed navigation, not trusting page text).`);
  try { run('stop'); } catch { /* ignore */ }
  process.exit(1);
}

let text = '';
try {
  text = run('text');
} catch (e) {
  console.error('could not read page text:', e.message);
  process.exit(1);
}
try { run('stop'); } catch { /* ignore */ }

if (!text.includes(FUND_NAME)) {
  console.error(`"${FUND_NAME}" not found on the rendered page - fund may have been renamed, or the page didn't fully render. Aborting.`);
  process.exit(1);
}

// Anchor parsing to the ZAO Fund's own block: everything between its name and the next fund's
// name (each fund's block on this leaderboard runs Name...RANK#N...SCORE...SALES...MATCH...PRIZE...RAISED$N).
const startIdx = text.indexOf(FUND_NAME);
const block = text.slice(startIdx, startIdx + 400); // one fund's block is well under 400 chars

const parseNum = (re) => {
  const m = block.match(re);
  return m ? Number(m[1].replace(/,/g, '')) : null;
};
const parseStr = (re) => {
  const m = block.match(re);
  return m ? m[1] : null;
};

const found = {
  rank: parseNum(/RANK#?(\d+)/i),
  scoreLabel: parseStr(/SCORE([\d.,]+)/i),
  prizeUsd: parseNum(/PRIZE\$([\d,]+)/i),
  matchDeployedUsd: parseNum(/MATCH\$([\d,]+)/i),
  raisedUsd: parseNum(/RAISED\$([\d,]+)/i),
};

console.log('\nParsed (from the ZAO Fund block on the leaderboard):');
for (const [k, v] of Object.entries(found)) console.log(`  ${k}: ${v ?? '(not found)'}`);
console.log('\nNote: pool size and match-remaining are not on this leaderboard page - they need');
console.log('the fund\'s own Sponsors/About tab or a logged-in view. Not auto-updated by this script.');

if (!WRITE) {
  console.log('\nDry run. Re-run with --write to update app/dashboard/data.ts.');
  process.exit(0);
}

// Non-destructive update: only replace fields we confidently parsed.
let src = readFileSync(DATA_FILE, 'utf8');
const today = new Date().toISOString().slice(0, 10);
const repl = (key, value) => {
  if (value === null || value === undefined) return;
  const valStr = typeof value === 'string' ? `'${value}'` : String(value);
  const re = new RegExp(`(\\n\\s*${key}:\\s*)([^,\\n]+)(,)`);
  if (re.test(src)) src = src.replace(re, `$1${valStr}$3`);
};
repl('rank', found.rank);
repl('scoreLabel', found.scoreLabel);
repl('prizeUsd', found.prizeUsd);
repl('poolUsd', found.poolUsd);
repl('matchDeployedUsd', found.matchDeployedUsd);
repl('matchRemainingUsd', found.matchRemainingUsd);
repl('lastUpdated', today);
src = src.replace(/(\n\s*updatedBy:\s*)'[^']*'/, `$1'auto-refresh'`);
writeFileSync(DATA_FILE, src);
console.log('\nUpdated', DATA_FILE, `(lastUpdated ${today}).`);
console.log('Review the diff, then: npx next build && npx vercel --prod --yes');
