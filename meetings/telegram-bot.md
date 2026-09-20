# Telegram capture bot - setup

A bot that writes to this repo. You hand it a message in Telegram; a scheduled GitHub Action picks
it up within ~15 minutes and commits it to `meetings/raw/telegram-YYYY-MM.md`.

- Bot logic: `scripts/tg-capture.mjs`
- Schedule: `.github/workflows/telegram-capture.yml`
- No server, no hosting. GitHub Actions does the polling and the committing.

## What it captures

Only messages deliberately handed to it:

| How | What lands |
|---|---|
| `/note <text>` in a group | your text |
| `/note` as a **reply** to someone's message | that message, plus your note as a comment |
| a message that `@`-mentions the bot | that message |
| a reply to something the bot said | that message |
| anything sent or forwarded to the bot in a DM | that message, crediting the original author |

Everything else is ignored. It does not read the room.

That is not a limitation to work around, it is the design. **ZAODEVZ/ZAOartizen is a public repo**,
and the Artizen fund-director group is a private, invite-only room of roughly 266 people who never
agreed to being mirrored in public. Explicit handoff means a person chose every message that lands.
It also happens to be exactly what Telegram gives a group bot under default privacy settings, so
there is nothing to configure in BotFather.

`CAPTURE_ALL=1` turns the whole firehose on. Do not set it for the Artizen group. If you ever want
full capture of The ZAO's own group, tell the group first - and consider whether it should go to a
private repo instead.

## Setup, about 10 minutes

### 1. Create the bot

In Telegram, message **@BotFather**:

- `/newbot`, then pick a name and a username ending in `bot`.
- BotFather replies with a **token** that looks like `123456789:AAF...`. That is a password. Do not
  paste it in a chat, a commit, or a file in this repo.
- Optional, nicer in a group: `/setcommands`, choose your bot, then paste:
  ```
  note - capture this message into the ZAO repo
  ```

Leave privacy mode alone. The default (on) is what you want.

### 2. Add it where you want to capture from

Add the bot to the group as a normal member. It cannot read history from before it joined, only new
messages. For DM capture, just message it directly and press start.

### 3. Find the chat id

Send `/note hello` in the group, then open in a browser (replace `<TOKEN>`):

```
https://api.telegram.org/bot<TOKEN>/getUpdates
```

Look for `"chat":{"id":-1001234567890,...}`. Group ids are negative, including the `-100`. Copy it.

### 4. Put the secrets in GitHub

In **Settings > Secrets and variables > Actions** on `ZAODEVZ/ZAOartizen`:

- **Secrets** tab, New repository secret:
  - `TELEGRAM_BOT_TOKEN` = the BotFather token.
- **Variables** tab, New repository variable (at least one of these is required):
  - `TELEGRAM_ALLOWED_CHATS` = the chat id from step 3, comma-separated for several.
  - `TELEGRAM_ALLOWED_USERS` = your Telegram username or numeric id, comma-separated.

**Set both.** A direct message's chat id is *your own user id*, not the group's, so if you only set
`TELEGRAM_ALLOWED_CHATS` to the group, DM and forward capture silently does nothing - the log says
`skip: chat <your id> ... not allowlisted`. Setting `TELEGRAM_ALLOWED_USERS` to your username covers
DMs and forwards. Setting both is the normal configuration.

The allowlist is not optional ceremony. A bot username is public, so without it anyone who finds the
bot could add it to a group and commit to this public repo. The script refuses to run if both are
empty.

### 5. Merge and run it

The workflow only runs from the default branch - GitHub ignores schedules on other branches - so
**nothing fires until this is merged to `main`**.

Once merged: **Actions > Telegram capture > Run workflow**, with `dry_run` checked the first time.
Read the log, confirm it found your message and would write what you expect, then run it again
without dry run. After that the schedule takes over every 15 minutes.

## Testing locally

```bash
export TELEGRAM_BOT_TOKEN='123456789:AAF...'
export TELEGRAM_ALLOWED_CHATS='-1001234567890'
node scripts/tg-capture.mjs --dry-run
```

Dry run prints what it would append and does **not** save the offset, so the same messages come back
on the next run. Drop `--dry-run` to write for real.

## After capture: the part that matters

A captured message sitting in `raw/` has not been ingested. Follow steps 4 to 6 in
[README.md](README.md): index it, changelog any mechanics change, and reconcile it into
[`../research/mechanics-canonical.md`](../research/mechanics-canonical.md). Entries the bot thinks
touch mechanics are tagged `possible-mechanics-change` as a grep hint - that is a hint for a human,
not a verdict.

## Known limits

- **24-hour window.** Telegram's `getUpdates` drops anything older than 24 hours. If the workflow is
  broken or the repo is paused for more than a day, those messages are gone. The workflow fails
  loudly rather than skipping quietly, so watch for red runs.
- **Scheduled runs drift.** GitHub delays cron under load, sometimes well past 15 minutes. Fine for
  notes, not a real-time pipe.
- **No history.** The bot only sees messages sent after it joined.
- **Media is not captured**, only text and captions. A screenshot of a Venus post captures the
  caption, not the image - type out anything that matters.
- **getUpdates and webhooks are mutually exclusive.** If you ever point this bot at a webhook, the
  polling here stops working until you call `deleteWebhook`.
