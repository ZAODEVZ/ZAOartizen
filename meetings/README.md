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

## Phase 2: the Telegram capture bot (not built)

The pipeline above catches the calls. It does not catch the private fund-director Telegram
("Artizen ✨"), which is where Venus and Rene post most mechanics corrections between calls - the
Boost Point expiry correction, the re-submission correction, and the Season 6 total correction all
landed there first, and this repo only has them because someone read the group by hand.

Scope, if and when it gets built:

- A read-only bot or userbot in the group, capturing the Updates, Funders and Venus channels.
- Filter to messages from Venus and Rene, plus anything matching mechanics keywords (match, boost,
  season, drive, prize, curation, payout, multiple).
- Append to `raw/telegram-YYYY-MM.md`, one file per month, and open a PR so nothing lands unreviewed.
- Needs: group admin permission to add a bot (or a userbot on Zaal's account, which Telegram's ToS
  treats differently - check before building), somewhere to host it, and a decision on whether a
  private group's contents should sit in a public repo at all. That last one is a real question,
  not a formality.

Until then, when Venus or Rene posts something that changes mechanics, paste it into
`raw/telegram-YYYY-MM.md` by hand and run steps 4-6 above.
