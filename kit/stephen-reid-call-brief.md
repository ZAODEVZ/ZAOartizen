# Stephen Reid - call brief

**Thu 2026-08-27, 9:30-9:45am ET (15:30 CET - he is in Stockholm). 15 minutes.**
Cal Video: https://app.cal.com/video/tW4HeWm5GJ899rFrrU37Fk

Prepped 2026-08-19 by the zao-artizen lane. Everything below was fetched, not recalled. It is 15
minutes - the asks are at the bottom and there are only three.

## Who he is

Stephen Reid, Stockholm. GitHub `stephenreid321` since 2008, 38 public repos, 67 followers. Site
`stephenreid.net`. Prior work skews metacrisis / systems / learning (`metacrisisxyz`, `lifeaspractice`,
`substack_surfacer`) plus Ruby tooling (`activate-admin`, `activate-tools`). He is a builder, not a
crypto guy - pitch him on data and systems, not tokens.

## What he built, and why it is better than what Artizen ships

**artizen.fyi** - public leaderboards for artizen.fund. Season 7 currently shows **$5,131,600 raised**,
**804 projects**, **119 funds**, 6 drives, with season filters back to Season 0.

The repo `stephenreid321/artizen-fyi` was **created 2026-08-19 at 16:21 UTC** - hours before this brief,
and two days after Zaal's email. Cloudflare Worker + KV, hourly cron, TypeScript. His README says
**"PRs are welcome."**

**The thing that makes his tool genuinely better: he separates Venus from real sales.** His column
header states it plainly - *"Project raised = sales + Venus + match + prize. Sales excludes Venus
artifact buys."*

We verified that arithmetic against Artizen's own fund page, and it reconciles exactly:

| Project | artizen.fund "Sales" | his Sales | his Venus | check |
|---|---|---|---|---|
| HOPE | $4,540 | $2,990 | $1,550 | 2,990 + 1,550 = **4,540** |
| HERITAGE COLLECTION | $3,750 | $2,850 | $900 | 2,850 + 900 = **3,750** |
| The Creator Block | $1,500 | $1,500 | $0 | exact |

Match figures agree to the dollar on every project we checked.

**So: Artizen's headline "Sales" number includes Venus's own artifact purchases.** For HOPE, **34% of
its apparent sales is the platform buying, not fans.** Venus pays quest and raffle winnings by buying
the winners' Artifacts (doc 852), so this is structural, not an anomaly. Any fund director reading
Artizen's own numbers is overestimating organic demand. He is the only person publishing the split.

**Lead with this.** It tells him we actually used the tool and understood the one thing in it that is
hard to see.

## The bigger find, from his source

His crawler hits **`https://artizen.fund/api/1.1/obj`** - Bubble's standard Data API. We tested it live
on 2026-08-19: **HTTP 200, unauthenticated, 239 funds, constraint + cursor queries work.** Pulling our
own fund by slug returns `Funding $ - total season: 15672.53`, `Funding - current: 3450.59`, plus
director, admins and slug fields.

**This obsoletes a conclusion in our own research** (docs 844 and 852: "no official Artizen public API
exists"). There is one. It has been there the whole time, and he found it.

Two consequences:
- Our `scripts/refresh-fund.mjs` renders a Bubble SPA with headless Playwright. It works, but it is the
  wrong tool now - the API returns clean JSON. **Rewrite it again against the API.** Say this to him
  plainly; engineers respect someone who says "you were right, we're changing it."
- It is also the answer to a thing we know someone else needs - **do not raise that on this call**
  (see gates).

## Our honest standing - say it if asked, do not lead with it

ZAO Fund for Emerging Culture, read 2026-08-19: **rank #57 of 101 ranked funds**, Season 7 total
**~$15.4k** (page) / **$15,672** (API), 15 projects, $1,272 of match unused, current drive at **$0**.
The rank has gone **#45 -> #55 -> #57 in three days** - not from losing anything, but because other
funds activated during the drive while ours did not.

**And the part not to hide:** the ZAO's own five projects are the bottom of the ZAO's own fund
(ZAO Festivals $40 match, then COCConcertZ, Baraza TV, Memethology, WaveWarZ at $0). The fund raises
real money - for other people. He can see all of this in his own tool, so pretending otherwise is worse
than useless. If it comes up: "we run it better for other people than for ourselves, and we're fixing
our end this week."

## What we bring that he does not have

- **The Boost Score model.** Rank = `(sales + match unlocked) x boost points / 100`, multiplicative
  (Artizen's own playbook, `play.artizen.fund`). His leaderboards show dollars and percentiles but no
  boost dimension - and boosts are half the ranking function. This is a real gap in his tool and we can
  hand him the formula.
- **The fund-director seat.** He has the data; we have the view from inside running a fund - what
  directors actually decide, and what they cannot see.

## The three asks (15 minutes, pick in this order)

1. **A JSON endpoint for the ZAO Fund.** He already crawls Bubble hourly into KV. If artizen.fyi
   exposed read-only JSON per fund, our `/dashboard` would read that instead of running a headless
   browser. Costs him a route; saves us a scraper. Cleanest mutual win on the list.
2. **Add the boost dimension.** Offer the Boost Score formula for artizen.fyi. His leaderboards
   currently rank on money alone, which is half the function - a project can lead on dollars and still
   place last. We can hand him the formula and the sources today.
3. **Ask what he wants.** He open-sourced the repo hours after Zaal's email and wrote "PRs are welcome."
   That is an invitation. Ask what he would most like help with, and whether he wants a contributor with
   fund-director access to test against. Cheapest possible yes.

**If only one lands, make it #1.**

## Questions worth asking him

- **Why 119 funds on artizen.fyi vs 101 on the Artizen board?** We count 101 on the Season 7 fund
  leaderboard. He may be including inactive or cross-season funds - either way he knows the data model
  better than we do.
- **Is ZAO Festivals' row cumulative or per-season?** His tool shows it at $510 sales / $1,040 match;
  the Season 7 fund page shows $10 / $40. Every Season-7-native project reconciled exactly, so the most
  likely explanation is that his row is all-seasons for an older project - unconfirmed, and he can
  settle it in one sentence.
- **Does he see Venus concentration patterns across funds?** He is the only person who can answer
  whether Venus buying is spread evenly or clustered on certain projects. That would change how we pick
  which project to push each drive.
- **Is the Bubble API documented or discovered?** Whether Artizen intends it to be public matters for
  how much anyone should build on it.

## Two courtesies

- **His repo has no LICENSE file** but says "PRs are welcome." Worth mentioning kindly - contributors
  cannot legally contribute without one, and he probably just has not got to it.
- **Do not ask him for anything requiring his Artizen credentials**, and do not offer ours.

## Gates - things NOT to raise on this call

- **Do not mention TheJollyLaMa or propose an introduction.** His reply satisfied gate 1 on card
  adb17c5b, but the hold stands until after this call goes well. A first 15-minute intro is not the
  place to broker a third party.
- **Nothing outbound is committed on this call.** Offering the scraper publicly, contributing code, or
  sharing fund data are all Zaal's calls to make in the moment, not commitments this brief makes for
  him.

## Sources

All fetched 2026-08-19. `stephenreid.net/artizen` (curl, 1,329,131 bytes, HTML-stripped);
`gh api users/stephenreid321`; `gh api users/stephenreid321/repos`; `repos/stephenreid321/artizen-fyi`
metadata, README, file tree, and `src/artizen.ts` (1,576 lines); live test of
`artizen.fund/api/1.1/obj/fund` (HTTP 200) and a slug-constrained query for our own fund. ZAO Fund
standing from `scripts/refresh-fund.mjs` the same day. Boost Score formula: `play.artizen.fund` via
`TEAM-PLAYBOOK.md` / doc 887. Venus-buys-winners'-Artifacts mechanic: doc 852.
