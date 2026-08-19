# Artifact sprint - Fund Drive #12 closes Thursday 2026-08-20

Written 2026-08-18 by the zao-artizen lane. This is the execution card. The concepts already exist
(`kit/artifact-briefs.md`) and the picks are already made (`kit/season7-artifact-plan.md`, 2026-07-03) -
this file exists because that plan was written for a weekend in July that passed, and the situation it
was written for has changed.

## Why this is urgent, with the numbers

**Corrected 2026-08-18.** An earlier version of this card said the fund had "$0 sales, $0 match
deployed" in Season 7. That was a scope error - those leaderboard columns are scoped to the current
DRIVE, not the season. The real picture is narrower and more uncomfortable.

Fund page (`artizen.fund/index/mf/zao-fund-for-emerging-culture?season=7`), rendered 2026-08-18:

| | |
|---|---|
| ZAO Fund, Season 7 total | **$15,431** |
| Rank | #55 of 101 funds (57 ranked) |
| **Current drive (#12 Flywheel)** | **$0 sales, $0 match unlocked** |
| Match sitting unused | **$1,272** |
| Prize | $100 |

**The fund is not dormant. It raises real money - for other people.**

| # | Project | Creator | Match | Sales |
|---|---|---|---|---|
| 1 | HOPE | JED XO | $10,693 | $4,540 |
| 2 | HERITAGE COLLECTION | Gneric | $12,600 | $3,750 |
| 3 | The Creator Block | KOSBAAR | $4,529 | $1,500 |
| 4 | Building Tomorrow | Poly Raiders (HuRya) | $1,170 | $360 |

**The ZAO's own projects are the bottom of the ZAO's own fund:**

| # | Project | Match | Sales |
|---|---|---|---|
| 11 | ZAO Festivals | $40 | $10 |
| 12 | COCConcertZ | $0 | $0 |
| 13 | Baraza TV | $0 | $0 |
| 14 | Memethology | $0 | $0 |
| 15 | WaveWarZ | $0 | $0 |

Five ZAO projects, **$10 between them**, four at exactly zero. **BCZ Strategies is not in the fund's
roster at all** - worth checking whether that is deliberate.

**Fund drive #12, the "Flywheel Fund Drive", ends Thursday August 20th at 2:00pm.** The page's own
countdown read `1d 15h` when checked late Tuesday 2026-08-18, which resolves the timezone question the
earlier version of this card flagged: 2:00pm is displayed in local time, so **Thursday ~2:00pm EDT**.
Pot: $2,713,547 match, $288,960 cash prizes; drive-wide $952,410 raised against a $2.1M goal.

There is **$1,272 of match sitting unused** on this fund. Every $10 artifact collected pulls $1 of it
out. Nobody is collecting because there is nothing new to collect.

## The one-sentence version

The ZAO runs a fund that works, and does not use it: its own five projects have raised $10 between them
while the fund has moved $15,431 for everyone else. Two fresh Artifacts before Thursday is the cheapest
available fix.

Match deployed is the metric `TEAM-PLAYBOOK.md` calls "the true KPI of a good fund" and the proof we
intended to take to René. The proof is real - it just is not ours. A fund director whose own community
does not collect from their own fund is a harder story to tell than a slow quarter.

**Caveat worth resolving before Thursday:** ZAO Festivals shows $10 in sales for Season 7, so it may
already have a Season 7 Artifact. This lane cannot see artifact-level detail without an authenticated
session. Check the project page before re-minting - if it has one, the job is the other four projects
and BCZ Strategies, not this one.

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
