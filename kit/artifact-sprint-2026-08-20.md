# Artifact sprint - Fund Drive #12 closes Thursday 2026-08-20

Written 2026-08-18 by the zao-artizen lane. This is the execution card. The concepts already exist
(`kit/artifact-briefs.md`) and the picks are already made (`kit/season7-artifact-plan.md`, 2026-07-03) -
this file exists because that plan was written for a weekend in July that passed, and the situation it
was written for has changed.

## Why this is urgent, with the numbers

Read live off `artizen.fund/index/leaderboard/?season=7` on 2026-08-17 (raw Playwright, 26,186 chars
captured; evidence and the parse caveat are in ZAOOS research doc 2309):

| | |
|---|---|
| ZAO Fund for Emerging Culture | **rank #45 of 101 funds** |
| Score | 0.01 |
| **Sales** | **$0** |
| **Match deployed** | **$0** |
| Prize / Raised | $100 / $100 |
| Projects / Sponsors | 12 / 22 |

45 of the 101 funds carry a numbered rank; 56 show "-". **#45 is the lowest numbered rank on the
board** - the ZAO Fund is the last fund with any recorded Season 7 activity at all.

**Fund drive #12, the "Flywheel Fund Drive", ends Thursday August 20th at 2:00pm.** Pot: $2,709,753 in
match funding, $288,980 in cash prizes. Drive-wide raised so far $900,897 against a $2.1M goal.

The page does not state a timezone. Artizen runs on PT elsewhere (the Funders Forum is 11am PT), so
**assume 2:00pm PT and treat anything after Wednesday night as late.** Do not gamble the drive on a
timezone this lane could not verify.

## The one-sentence version

Season 7 has been open for five weeks, neither project has a Season 7 Artifact, so there has been
nothing for anyone to buy - which is the entire reason sales and deployed match are both $0. Two
Artifacts is the whole unblock.

Match deployed is the single metric `TEAM-PLAYBOOK.md` calls "the true KPI of a good fund" and the proof
we intended to take to René. Right now that proof reads as a dormant fund.

## Spec (do not deviate - doc 887, René-confirmed)

- **Square 1:1**, minimum 1000x1000
- **Video or GIF beats static.** Image/GIF up to 10MB; square video up to 45s / 90MB
- **NO text, no logo overlay.** Graphic art is fine only where it IS the artwork
- Fresh per season - the Season 6 Artifact cannot be reused
- $10, 100% to creator, 0% fee

## The two, minimum-viable

Both picks were already decided in July. Do not re-litigate them tonight; shoot them.

**BetterCallZaal Strategies - "Hands in Flow."** Phone propped at 45 degrees over the desk, one lamp
warm on one side, screen glow on the other. Shoot 60 seconds of real typing during actual work. Crop
square, keep the best 3-10 seconds. No grading if the lamp does the contrast. **~10 minutes.** Creator
credit: BetterCallZaal.

**ZAO Festivals - a real crowd moment.** Pull the best raw crowd clip from the ZAO-CHELLA / WaveWarZ
LIVE / ZAO-PALOOZA footage already on hand. Crop 1:1, trim to 3-15 seconds of peak energy - hands up,
stage light. Zero text. **~15 minutes**, assuming the footage is reachable. Creator credit: whoever shot
it (AttaBotty / DaNici if theirs).

## What is dead for this drive - decide now, not Thursday

**The "Crowd Light Surge" AE composite upgrade path is off the table for Thursday.** It scores highest
(46/50 in `kit/artifact-briefs.md`) and it needs an After Effects composite plus an archive pull from
AttaBotty. That is a multi-day dependency and this is a two-day window. Ship the raw crowd clip now and
keep the composite as the *next* drive's Artifact - Season 7 runs to roughly Dec 2026, so there are more
drives after this one.

The AttaBotty archive ask is still worth sending on its own merits (it also unblocks the Festivals
teaser and the devcon reel/deck) - it is just no longer on this critical path.

## Upload

Console > Artifact > Upload, per issue ZAODEVZ/ZAOartizen#16.

While you are in there: claims ship a **5-slot collaborators section** (ZAOOS doc 852). Fill all five on
each project. "Get a crew for every project" was guest advice on Artizen LIVE #85 (Ben Erwin,
2026-08-06), **not** an Artizen rule - nothing enforces it - but the slots exist and empty slots are
wasted surface.

## Order of taps

1. Tonight: shoot the hands loop. It is the one with no dependencies at all.
2. Tonight: locate the festival clip. If the archive is not reachable in 15 minutes, use any usable
   crowd footage you already have locally - a real moment beats the best moment.
3. Wednesday: crop both square, trim, upload both via Console.
4. Wednesday: fill the collaborator slots on both.
5. Then, and only then, rally - the crew CTA at `/rally` and the Boost mechanic are worthless while
   there is nothing to buy.

Boost reminder, because it is half the engine: rank = `(sales + match unlocked) x boost points / 100`.
It is **multiplicative**. Buying without boosting, or boosting without buying, leaves most of the value
on the floor. Ask for both in the same message.

## What this lane cannot do

Minting, uploading, and the Console itself are account actions - they are Zaal's. This card exists to
make them one tap each. Nothing here has been sent or submitted.

## Sources

- Live fund standing + drive close: `artizen.fund/index/leaderboard/?season=7`, rendered 2026-08-17 via
  raw Playwright (`domcontentloaded` + 25s settle). Full evidence: ZAOOS research doc 2309.
- Artifact spec: doc 887 via `TEAM-PLAYBOOK.md`; carry-over rule + no-reuse: `CLAUDE.md`, doc 851.
- Collaborator slots + the Ben Erwin clarification: ZAOOS doc 852.
- Concepts and picks: `kit/artifact-briefs.md`, `kit/season7-artifact-plan.md`.
- Upload path: ZAODEVZ/ZAOartizen#16.

**Do not trust `scripts/refresh.sh` or `refresh-fund.mjs` to re-check these numbers.** Both are broken -
gstack `browse` (ZAOOS#3065) and, independently, the leaderboard URL now redirects and its card layout
inverted. Re-render with Playwright until that script is rewritten.
