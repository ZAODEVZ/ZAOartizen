# ZArtizen - Handoff (current as of 2026-09-20)

> **Read the 2026-09-20 section at the bottom first.** Everything above it is the 2026-07-03
> handoff, kept as a record. It is Season 6 era and some of it is now wrong - the match ratio it
> implies does not exist, and it reads as though the bootstrap motion has run. It has not.

For whoever picks this up next (Zaal, a teammate, or a fresh session). Read TEAM-PLAYBOOK.md first, then
README.md for the full picture; this is the "where it stands + what to do next" layer.

## What this is

The ZAO's operating home for everything Artizen - research, strategy, a ready-to-use kit, and a live
7-page site at **https://zaoartizen.vercel.app**. Graduated out of the ZAOOS monorepo (2026-06-13).
Two projects are LIVE (Season 6): ZAO Festivals and BetterCallZaal Strategies (patronage model).

## Live site (deploy: `npx vercel --prod --yes`; or `scripts/refresh.sh` to scrape + update + deploy)

- **/** - the ZAO Fund hub (featured project, searchable roster; rank/pool read from dashboard data).
- **/dashboard** - live scoreboard: rank, match deployed/remaining, headroom alert, backed projects, cross-back targets, proof log. Data in `app/dashboard/data.ts`.
- **/leaderboard** - Season 6 field (all 35 projects), ZAO ties flagged.
- **/rally** - the GC-shareable 3-step crew CTA (sign up, buy the $10 Artifact, boost).
- **/apply** - artist-facing: what the fund backs, eligibility, how to get in. Send to applicants.
- **/festivals** - ZAO Festivals umbrella. **/proposal** - create-a-fund vs curate-into decision page.

## Strategy on record: two live projects, stack and iterate

Both projects (ZAO Festivals + BetterCallZaal Strategies) are LIVE and submitted into eligible funds. 
Patronage framing is set for BCZ ("My fund to help artists full-time"). Run the bootstrap motion each drive:
line up first-hour buyers, mobilize community votes, log proof metrics (match deployed, distinct buyers, 
leaderboard climb). Season 6 Finale ~July 9. After proof, approach René (Accelerator: 20 spots, 3mo, up to $10k)
from a position of strength.

## Tasks to absorb (priority order)

1. **Submit to all eligible funds** - BCZ and ZAO Festivals each need per-fund opening lines (see kit/outreach-drafts.md).
2. **Line up first-hour buyers** - 3-5 core people for each project, timed to drive start, for early velocity.
3. **Mobilize community votes** - each member makes an Artizen profile (free 100-vote boost), votes in waves.
4. **Deploy match and track proof metrics** - match deployed, distinct buyers, sales, leaderboard rank.
5. **Prepare fund submissions, testimonials, and Rene pitch** (post-Season-6-close) with proof log.

## Key findings / decisions on record (live, 2026-07-03)

- **Win condition - SUPERSEDED 2026-08-21.** This line used to read "Boost Score = (sales + match) x boost
  points / 100". Since Playbook v21, **rank = money raised (sales + match unlocked), prizes follow rank, and
  boosts win a share of a separate weekly Boost Bonus pot.** Current mechanics, with sources and dates:
  `research/mechanics-canonical.md`. Winning Artifact = square, video/GIF, no text.
- **BCZ Strategies = PATRONAGE, not consulting.** Tagline: "My fund to help artists full-time. Back it if 
  you would value me in your corner, and I will support however I can." One reward ("In Your Corner" / $10).
  Proof: 80+ repos, WaveWarZ 459 SOL / 950 battles / 7.8 SOL to artists, The ZAO 0 to 250+ in 3y, FarHack 2026 
  Snap, $1.5M robotics.
- **ZAO Festivals = PLACE + PROVEN ORGANIZERS.** Ellsworth, Maine, the gateway to Acadia. Steve Peer 430 
  house concerts since 1989. ZAO-PALOOZA NYC NFT NYC 2024 (12 artists). ZAO-CHELLA Wynwood Miami Dec 6 2024 
  at Art Basel (10 musicians, WaveWarZ LIVE). Flagship ZAOstock Oct 3 2026 Ellsworth (free, community-owned, $25k).
- **Endowment claims are unverified.** Artizen's self-reported endowment varies; on-chain ART token Juicebox 
  (587) holds ~34 ETH and is dormant. Treat any single number as a per-fund pool claim, not fact. Keep ZAO 
  treasury OFF the ART token. (research/art-token-onchain.md)
- Artizen is client-rendered (Bubble.io) - use headless `browse` scraper or hand-check, not WebFetch, for live data.
- Ecosystem allies run funds: Bonfires (our partner), Edge City (Telamon), DeSci Asia, Pressman Film.

## Open items

- **Auto-deploy is NOT wired.** Git pushes do NOT trigger Vercel builds - deploys have been manual
  (`npx vercel --prod` as bettercallzaal). Fix with `vercel git connect` so pushes ship themselves.
  Until then, after any change, run a manual deploy or the live site lags the repo.
- Season 6 Finale close and final match allocation date (est. ~July 9).
- Confirm per-fund match pool mechanics: verify 90% match / 10% prize split across all submitted funds.
- We're Loud Fund slug unresolved (couldn't render roster); curator = Pete Menchetti (We're Loud Fest).

## Repo layout

- `research/` - 15 docs incl. the full 79-fund directory, the audit, priority-fund renders, on-chain checks (see research/README.md).
- `kit/` - copy-paste outreach, submissions, fund proposal, daily spotlights, launch posts, operating rhythm.
- `app/` - the Next.js site (`/`, `/festivals`, `/proposal` + OG images). `npm install && npm run dev`.
- README.md (front door) + CLAUDE.md (agent/collaborator context) + this file.

## Cold-start for a new session

- Read README.md, then research/priority-funds.md + research/research-audit.md for the current strategy.
- Artizen is a Bubble.io app - curl/exa return empty shells; render fund pages with a headless browser.
- Standings change per-drive; never trust a cached number.
- Contacts: René Pinnell (@RJPinnell), Nate Van Cleve; Bonfires team (our partner); Pete Menchetti (We're Loud).
- Human-only actions (send DMs, submit projects, collect/boost, Console) are the operator's; the kit has the copy.

---

# 2026-09-20 handoff

One session, ten commits, all on `claude/zaoartizen-meetings-mechanics-wroeeu` and pushed. No PR
opened. `npx next build` is clean. Nothing is deployed - auto-deploy is still not wired.

## Do these first

1. **Merge the branch.** The Telegram bot's workflow cannot run until it is on `main` - GitHub
   ignores schedules on other branches.
2. **Stand the bot up** - `meetings/telegram-bot.md`, about 10 minutes. BotFather token into repo
   secrets, chat id and your username into repo variables, then run the workflow by hand with
   `dry_run` checked before letting the schedule take over.
3. **Re-run `scripts/refresh.sh` and redeploy.** The site's numbers are a 2026-06-22 snapshot, ~90
   days old across a season boundary, and every page showing them now says STALE in red. That is the
   guard working, but it is a live public site.

## What changed

**The match ratio does not exist.** This is the important one. Two different fixed ratios were in
circulation (1:1, and $1 per $10 Artifact); both were wrong in kind. The rate is set per drive by the
**Match Multiple** and changes weekly - which was already recorded from Venus on 2026-07-03 and never
joined up. Every fixed figure is gone from `/funds`, `/apply`, `/rally`, `/playbook`, `/dashboard`
and `/about`; they state the mechanic and the lever instead. `refresh-fund.mjs` now scrapes the
multiple, and it is the one field the scraper CLEARS on a miss rather than carrying forward.

**One canonical mechanics file.** `research/mechanics-canonical.md` is the source of truth - every
claim carries a source and a date, plus a TODO-VERIFY register and a supersession log. Roughly 30
files had drifting copies; they now link to it. Do not restate mechanics anywhere else.

**Staleness guard.** `scrapedAt` in the data files, `app/data-stamp.tsx` renders "Data as of [date]"
on every page showing rank, match or funding, and turns red past 48h. Age is computed in the browser,
so a static build cannot claim to be fresh forever.

**Meetings capture.** `meetings/` has the intake (`README.md`), an empty index and changelog, and the
Telegram bot. The Apr-Aug 2026 calls were never written down and are lost - do not reconstruct them.
The fix is forward-looking: capture the next Funders Forum.

**The honest status.** `proofLog` is empty, `horse` is null, the bootstrap motion has not run at
scale. RECAP.md says so now. Phase 2 is further off than the older sections of this file imply.

## Open, and deliberately not guessed

In `research/mechanics-canonical.md` section 11:

- **M1 remainder** - does the Match Multiple scale a base rate or set it outright, and where does a
  creator read the current drive's multiple?
- **M2** boost-point sources. **M3** the ART/Endowment on-chain conflict. **M4** whether Season 7
  runs a distinct curation phase at all (the "top ~30% by votes" claim was removed from `/playbook`
  rather than left unverified in front of creators).
- **The scraper's Match Multiple patterns are untested.** The `browse` binary is not installed in
  every environment, so there was no live page to match against. If the script prints `(not found)`
  while the multiple is visible on the page, fix `MULTIPLE_PATTERNS` rather than hand-editing
  `data.ts` every week.

## Conventions worth keeping

- Mechanics go in the canonical file with a source and a date, and nowhere else.
- Prefer deleting a stale claim over keeping a wrong one. Two claims were deleted this session rather
  than hedged.
- When two docs disagree on a constant, check whether the thing is a constant at all before picking a
  winner. That is what the ratio turned out to be.
