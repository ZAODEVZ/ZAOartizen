# Research audit - 2026-06-13 (updated 2026-07-13, see addendum at bottom)

A critical pass over the zartizen research set after the full 79-fund Artizen search. Goal: flag what's
now wrong, stale, or missing - not rubber-stamp it. Two high-impact corrections.

## CORRECTION 1 (high) - the "white space" claim is false

**Where:** doc 850 (festivals fund), the /festivals page ("no other fund is built for music festivals"),
the fund-proposal kit, the launch posts.

**Reality:** the live fund list has a **We're Loud Fund for DIY Music Festivals**, plus Global Music
Fund, Music + Healing Fund, Resonate Fund for Sonic Pioneers, SoundEscape (female sound pioneers),
Confession Sessions (underground music), Rising Voices of Cascadia (musicians). Music + festival funding
is a CROWDED category, not open white space.

**Action:** (a) fix the public claim on /festivals immediately (done in this batch - softened to "a fund
run by people who throw the festivals" rather than "the only one"). (b) Re-decide the Festivals Fund:
curating ZAOstock/Zaoville INTO We're Loud + Greenpill + Global Music may beat creating an 80th fund.
This is a Zaal decision; doc 850's premise needs revisiting.

## CORRECTION 2 (high) - the ZAO fund is dormant, not strong

**Where:** docs 843-850 lean on "ZAO Fund ranks #2" as a strength.

**Reality:** standings are PER-DRIVE. In the current Frontier drive the ZAO fund is **#23 with $188
raised** (29 projects, ~nobody collecting). The "#2" was a prior drive. The fund only ranks when its
projects sell - and they aren't this drive.

**Action:** the real, urgent problem is **activating the existing projects** (rally collects/boosts this
drive), not adding funds or pages. This reframes the whole priority stack: execution > more building.

## STALENESS (high) - standings are volatile, docs go stale in hours

The fund-directory written earlier today (~17 funds, ZAO "#4") was already wrong by this evening (79
funds, ZAO "#23"). Per-drive scoring churns the leaderboard completely.

**Action:** every doc that cites a rank/raised number now carries a "per-drive snapshot, re-render before
quoting" warning. Do not put live standings in the shipped site copy. Consider a small fetch script
instead of static numbers (see "what else").

## GAPS (medium)

- **Per-fund rosters:** only ZAO + Greenpill fully rendered. The new priority funds (We're Loud, Global
  Music, Bonfires) need their rosters + curators captured for cross-curation + outreach.
- **Endowment unverified:** the $14M endowment is still Artizen-self-reported. The on-chain ART token is
  tiny (72 holders); the real USDC backing sits in a Juicebox project treasury we haven't located. Find
  Artizen's JB project ID to verify (or puncture) the claim.
- **ART economics drift:** mechanics (mint cycles, drive rules, match multiples) changed between renders
  ("2x means your match directly" wording change). High-churn; re-verify before quoting.

## CONSISTENCY

- Doc 843's roster $ figures are from June 11; the current drive resets per-fund/per-project numbers. The
  roster names are stable; the $ are not. Treat 843 as a names+structure reference, not live numbers.
- The /artizen hub page shows snapshot numbers with a "live fund is canonical" disclaimer - that's the
  right pattern; keep it, don't hardcode ranks.

## What's solid (keep)

- The platform mechanics (match, fluid QF, seasons, $10 artifacts, 0% fee) - verified, stable.
- The ART = Juicebox Revnet finding - on-chain verified.
- The kit (outreach, submissions, daily series, operating rhythm) - all still valid + actionable.
- The cross-curation + stacking strategy - now STRONGER (79 funds = more stacking options per project).

## What else to do (next)

1. **Render We're Loud + Global Music + Bonfires fund pages** - rosters, curators, how-to-join. These are
   now the priority funds for ZAOstock/Zaoville (music events) and the ZAO agents (Bonfires = our partner).
2. **Locate Artizen's Juicebox project ID** and verify the endowment treasury on-chain - the one thing
   that confirms or punctures the $14M.
3. **Re-decide the Festivals Fund** (curate-into vs create) - feed Zaal the corrected landscape.
4. **Activate the ZAO fund this drive** - the highest-leverage action; the fund is dormant.
5. **Consider a live-fetch** for standings (a tiny script or note) since static numbers rot in hours.

## Overall

The research is broad, well-sourced, and the kit is genuinely actionable. But the platform moves fast
enough that two load-bearing claims (white-space, fund-strength) went stale within a day. Corrected here.
The strategy still holds - run the fund, stack across many funds - it's the specific numbers + the
"unique music fund" framing that needed fixing.

## ADDENDUM - 2026-07-13 corrections pass (see [Doc 851](851-artizen-season6-close-season7-launch/) for full detail)

A DEEP-tier refresh one month after the June 13 audit. Six web-research agents mostly hit a JS wall
(Artizen is Bubble.io; the newsletter has gone quiet since Feb 12 2026). The live signal came from
reading the fund-director Telegram directly. Three more corrections:

**CORRECTION 3 (high) - the season count moved: it's Season 6 closing, Season 7 starting, not 7/8.**
Season 6 wrapped July 9 2026 (creators raised a corrected $8,331,351 - a platform season-counter bug had
been undercounting by $1.4M+ since a May upgrade). Season 7 started July 9, runs ~5 months, targets $20M
raised / $100M+ endowment. If any doc or conversation referenced "Season 7 ending / Season 8 starting,"
that was premature - re-anchor on Season 6 -> Season 7.

**CORRECTION 4 (medium) - a new payout system launched: the Grow app.** Season 6 payouts now run through
grow.artizen.fund (KYC + bank/USDC payout), not the old flow. Any creator outreach about getting paid
should point here.

**CORRECTION 5 (medium) - the endowment on-chain check still hasn't found the real vehicle.** Doc 845's
JBv4 Revnet claim (ART contract `0x59fbbc7d9c579547b47f3669aab2aec5b58d63de`) and this pass's on-chain
search (which found an unrelated JBv2 project, "Artizen Fund" #587, treasury 0.01 ETH) are two different
projects. Venus states the endowment is "on track to hit ~$17M" (Season 6 close) heading to "$100M+"
(Season 7 target) - self-reported, still not independently verified on-chain. Don't call it "punctured";
call it "unresolved."

**Also flagged, unresolved:** whether "Venus" (previously understood as Artizen's in-platform AI bot) is
now formally Co-founder & CEO as an AI persona, or a human posting under that account - ambiguous in the
Telegram post, needs Zaal's own read before it appears in any public ZAO copy.
