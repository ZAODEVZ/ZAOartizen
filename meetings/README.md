# Meetings

Capture for Artizen's two recurring calls, so platform mechanics stop living only in someone's memory:

- **Monday Momentum** - the weekly community call.
- **Funders Forum** - Mondays 11am PT, fund directors. Season policy (curation ethics, match caps,
  the prize curve) is decided live on this call, and attendance pays 25,000 Boost Points. This is the
  single highest-value call for The ZAO to be on.

Nothing has been ingested yet. `INDEX.md` and `mechanics-changelog.md` are live but empty, with the
formats below. See the note at the end for why.

## What goes where

| File | What it holds |
|---|---|
| `raw/` | One file per session, verbatim transcript or raw notes. Never edited after landing - it is the evidence. |
| `INDEX.md` | One section per session: date, key announcements, mechanics changes, ZAO action items. |
| `mechanics-changelog.md` | Chronological, one row per mechanics change, with date and source file. |
| `../research/mechanics-canonical.md` | The mechanics themselves. The changelog feeds it; it is not a second copy. |

## Intake: recording to committed notes

Artizen emails every Funders Forum attendee a recording link, and Artizen LIVE episodes are on
YouTube. Descript is connected to this repo's Claude sessions, so no bot or hosting is needed for
the call side:

1. **Drop the link.** Give Claude the recording URL (or the file) and the call name and date.
2. **Transcribe.** Claude calls Descript `import_media` to create a project, then `export_transcript`
   (markdown) once the job finishes. A YouTube URL for an Artizen LIVE episode works the same way.
3. **Land the raw file** at `raw/YYYY-MM-DD-<call>.md`, e.g. `raw/2026-09-14-funders-forum.md`.
   Prepend the source URL and who was on the call. Do not clean up the transcript - it is the record.
4. **Index it.** Add a section to `INDEX.md` in the format below.
5. **Changelog any mechanics change.** One row per change in `mechanics-changelog.md`.
6. **Reconcile.** If a change contradicts or postdates `../research/mechanics-canonical.md`, update
   that file and add a row to its supersession log, citing the meeting date. That reconciliation is
   the entire point of this directory - an ingested transcript that never reaches the canonical file
   has not been ingested.

If you only have your own notes and no recording, skip to step 3 and write them into `raw/` directly.
A thin note is worth more than a missing one.

## INDEX.md section format

```markdown
## YYYY-MM-DD - <Monday Momentum | Funders Forum | Artizen LIVE #N>

Source: `raw/YYYY-MM-DD-<call>.md` (<recording URL, or "notes only">). Present: <who>.

**Announcements**
- ...

**Mechanics changes** (also add each to mechanics-changelog.md)
- ...  or  "None."

**Action items for The ZAO** (ZAO Fund for Emerging Culture, ZAO Festivals, BetterCallZaal Strategies)
- [ ] ... (owner)
```

Mark anything you are not sure you heard correctly as TODO-VERIFY rather than smoothing it over.
A transcript is not a primary source about its own accuracy.

## mechanics-changelog.md row format

`| Date | Change | Detail | Source file | Canonical updated? |`

Date is the date of the call the change was announced on, not the date it was ingested.

## The Telegram capture bot (built - see telegram-bot.md)

The pipeline above catches the calls. It does not catch the private fund-director Telegram
("Artizen ✨"), which is where Venus and Rene post most mechanics corrections between calls - the
Boost Point expiry correction, the re-submission correction, and the Season 6 total correction all
landed there first, and this repo only has them because someone read the group by hand.

Built on 2026-09-20. Setup is in [telegram-bot.md](telegram-bot.md) - about 10 minutes, and it needs
no server: `scripts/tg-capture.mjs` runs from a scheduled GitHub Action that commits what it finds.

It does **not** mirror the group. It captures only what a person deliberately hands it: `/note`, an
`@`-mention, a reply to the bot, or a DM or forward. That is the answer to the question this section
used to flag as real rather than a formality - whether a private group's contents belong in a public
repo. With explicit handoff, a human chose every message that lands, and a `/note` replying to a
Venus or Rene post grabs exactly that post without touching anyone else's messages.

Captured messages land in `raw/telegram-YYYY-MM.md`, one file per month, tagged
`possible-mechanics-change` where the text looks relevant. That tag is a grep hint for a human, not
a verdict - a capture is only ingested once steps 4 to 6 above have carried it into the canonical file.
