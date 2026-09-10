# Standings tracker - the ZAO Fund scoreboard

Update this each drive. It is the proof we bring to Rene in Phase 2: not how much we deposited, but how much
match we DEPLOYED and how big a crowd we moved. Numbers come from the live Artizen dashboard - re-check before
quoting (standings move daily).

**Last updated: `2026-09-08` by the artizen lane, read live off the fund page.**
**RE-CHECK BY: the next drive close, or before quoting any figure here.** Artizen numbers move mid-drive;
two of the figures below changed inside 24 hours (boosts 23 -> 29, bonus $664.95 -> $688.42).

> **FIXED 2026-09-10: `scripts/refresh-fund.mjs` now reads the fund's own page.** That page carries a
> Fund Drive card for the fund race (RANK, PRIZE, BOOSTS, BONUS, drive name, RAISED, AVAILABLE, plus the
> lifetime Total and the Competition/Curation counts). So fund rank IS measurable again, whenever the fund
> has activity in the current drive. At a drive's open it reads `RANK -`, and the scraper writes TBD, not
> an old number. **"Projects curated" is the page's Competition count; the Curation count is submitted
> plus removed projects, not curated ones** (41 = 8 + 33 on 2026-09-10). Dry run: `node scripts/refresh-fund.mjs`. Everything below this line is the 2026-09-08
> diagnosis, kept as history.
>
> **`scripts/refresh-fund.mjs` IS BROKEN AND DID NOT PRODUCE THIS UPDATE. Read this before running it.**
>
> **Artizen moved the leaderboard.** `index/matchfunds` now 302s to `index/leaderboard/?season=7`, and the
> scraper's URL guard correctly refuses rather than trusting the page - it aborts with
> *"URL mismatch after goto... not trusting page text."* **The guard is right and should not be removed**;
> it is the thing that stops a silent wrong answer. What needs fixing is the expected URL.
>
> **Worse, and the reason the rank field below is empty:** the destination is the **project** leaderboard,
> one row per project. `?tab=funds`, `index/funds` and `index/matchfunds/?season=7` all redirect to the same
> project view, and **"ZAO Fund" does not appear on any of them.** The fund-vs-fund leaderboard the old
> `#19 of ~82` number came from **could not be found on 2026-09-08.** Until someone finds it or Artizen
> restores it, **fund rank is not measurable** - do not carry the old number forward as if it still holds.

## ZAO Fund - current (Season 7, Resonance Fund Drive, ends Thu 10 Sept 11:00 PT)

| Field | Value |
|-------|-------|
| Fund rank (among all funds) | **NOT MEASURABLE 2026-09-08** - the fund-vs-fund leaderboard is gone (see box above). The fund's own page shows `RANK -`. The old `#19 of ~82` is from 2026-07-13 and must not be requoted |
| Fund total | **`$20,563`** |
| Match DEPLOYED so far | **`$0` raised this drive** <- the KPI, and it is zero |
| Match remaining (undeployed) | **`$2,561`** |
| Projects curated in | **`19`** - the fund page's **Competition** count (live 2026-09-10 16:15 EDT; the scraper read 18 an hour earlier). **CORRECTED 2026-09-10: this row said `40`, which was the Curation count - that tab lists 8 submissions awaiting a decision plus 33 removed projects, not curated ones.** |
| Boosts received (fund-level) | **`29`** - was 23 on 09-07. Near zero either way |
| Bonus (estimated) | **`$688.42`** - was $664.95 on 09-07 |
| Active drive + multiplier | **Resonance Fund Drive, `3x` match** |
| Drive deadline | **`2026-09-10, 11:00 PT`** |

**The number that matters and the one to fix: `$2,561` of match is sitting undeployed with the drive closing
in two days, and the fund has raised `$0` this drive.** Match only moves when someone buys an artifact on a
curated project - you cannot buy a fund - so undeployed match is a distribution problem, not a funding one.

**A live disagreement, unresolved:** Venus reported **$6,974** match unused on 2026-09-06; the fund page said
**$2,561** on 09-07 and still says $2,561 on 09-08. Either ~$4.4k deployed in a day, or the two measure
different things (season-wide unused vs remaining in this drive). **Asked her directly; awaiting her answer.
Do not quote either figure as settled.**

## Projects we back - live Season 7 standings, top of the roster (read 2026-09-08)

Match / Sales as displayed on the fund page. **These are platform-wide totals per project across every fund
backing it, not the ZAO Fund's own contribution** - do not present them as our numbers.

| # | Project | Owner | Match | Sales |
|---|---------|-------|-------|-------|
| 1 | civil monkey ecosystem weaving | civil | $27,307 | $55,123 |
| 2 | Crypto Endowment Network (MfT Studio) | James Magee | $14,006 | $43,555 |
| 3 | Building Tomorrow (HuRya) | Poly Raiders | $5,060 | $14,479 |
| 4 | HERITAGE COLLECTION | Gneric | $14,140 | $5,800 |
| 5 | HOPE | JED XO | $11,293 | $5,180 |
| 6 | The Music Onboarding Machine | José Cabrera | $1,077 | $4,102 |
| 7 | PerkOS | JulioMCruz | $4,813 | $2,270 |
| 8 | Baraza TV | Aziz Motomoto | $890 | $1,930 |
| 9 | The Creator Block | KOSBAAR | $4,529 | $1,500 |
| 10 | **ZAO Festivals** | Zaal | $1,200 | $830 |
| 11 | **WaveWarZ** | WaveWarZ | $500 | $500 |
| 12-17 | International Artists Project, Memethology, Kismet Casa, poidh, The Impact Concerts | | $50-$120 | |
| 18 | **COC Concertz** | +communityofcommunities | **$0** | **$0** |

**Two long-open questions this render answered for free:**

- **A fund director CAN curate their own project into their own fund.** ZAO Festivals sits at #10 in our own
  roster. CLAUDE.md carried this as an open "ask Venus" item; it is settled by observation.
- **The WaveWarZ project exists now.** Zaal told William on 2026-07-21 *"we don't have a full, well-done
  artist project out there for WaveWarZ."* It is #11.

**Note the platform spells it `COCConcertZ`**, against our own glossary (**COC Concertz**). Worth fixing at
the source next time the listing is edited.

## This drive's horse

**Standing rule, Zaal 2026-09-07: "always boost and buy community projects."** Both actions, always, on the
projects the fund curates. This supersedes the older "support the fund, no per-drive picks" default, which
was unexecutable - there is no button that buys a fund.

- **Boosts -> the fund itself.** Possible, and currently at 29, which is near zero.
- **Buys -> named projects**, chosen where a dollar does the most: hard deadlines, projects at $0, and ZAO
  ecosystem partners. Not the roster's top earners, who do not need it.

## Running proof log (newest first)

| Drive | Horse | Buyers moved | Rank change | Match deployed | Win? |
|-------|-------|--------------|-------------|----------------|------|
| Resonance (ends 09-10) | none named | `[#]` | rank not measurable | **$0 so far** | `[ ]` |
| Daybreak #7 (Jul, closed) | `[none]` | `[#]` | `[#->#]` | `$0` | n |

> Phase 2 pitch to Rene reads straight off this table: "across N drives we moved X buyers and deployed $Y in
> match - we bootstrap communities really well."
>
> **Honest state of that pitch as of 2026-09-08: two drives logged, $0 match deployed in both.** The table is
> the proof, and right now it proves the gap rather than the case. That is worth knowing before anyone
> schedules the Rene conversation - and the strategy is permissionless-first *then* Rene anyway.
