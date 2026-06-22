# ZArtizen - Handoff (current as of 2026-06-22)

For whoever picks this up next (Zaal, a teammate, or a fresh session). Read TEAM-PLAYBOOK.md first, then
README.md for the full picture; this is the "where it stands + what to do next" layer.

## What this is

The ZAO's operating home for everything Artizen - research, strategy, a ready-to-use kit, and a live
7-page site at **https://zaoartizen.vercel.app**. Graduated out of the ZAOOS monorepo (2026-06-13).

## Live site (deploy: `npx vercel --prod --yes`; or `scripts/refresh.sh` to scrape + update + deploy)

- **/** - the ZAO Fund hub (featured project, searchable roster; rank/pool read from dashboard data).
- **/dashboard** - live scoreboard: rank, match deployed/remaining, headroom alert, backed projects, cross-back targets, proof log. Data in `app/dashboard/data.ts`.
- **/leaderboard** - Season 6 field (all 35 projects), ZAO ties flagged.
- **/rally** - the GC-shareable 3-step crew CTA (sign up, buy the $10 Artifact, boost).
- **/apply** - artist-facing: what the fund backs, eligibility, how to get in. Send to applicants.
- **/festivals** - ZAO Festivals umbrella. **/proposal** - create-a-fund vs curate-into decision page.

## Strategy on record: permissionless-first, then René

Do everything permissionless first (mobilize the crew, curate ZAO artists in, run the bootstrap motion,
log the proof on /dashboard), THEN take the track record to René (Accelerator: 20 spots, 3mo, up to $10k;
ETH Boulder + Ven = warm intro). Don't rush a second fund - curate ZAOstock/Zaoville into existing funds
(We're Loud, Global Music, Greenpill). Full reasoning: research 886 (ZAOOS).

## Tasks to absorb (priority order)

1. **Share /rally** with the crew + **/apply** with prospective artists.
2. **Curate ZAO artists in** via the Discord vote: Marie Chain, COC Concertz, PolyRaiders, WaveWarZ Zambia.
3. **Deploy the match** - ~$6.3k headroom on the Flourish drive (ends ~2026-06-24); rally buys + boosts.
4. **Fill the dashboard TBDs** - projectsCurated, signups, multiplier from the logged-in curator view.
5. **Ask Venus** (Artizen's AI bot) the exact boost/score formula + Season 7 timing; then the René path.

## Key findings / decisions on record (live, 2026-06-21)

- **Win condition: most Artifacts SOLD (count) wins the prize - NOT boosts.** Boosts = a separate visibility
  layer. Lever = many people each buying a $10 Artifact. Winning Artifact = square, video/GIF, no text.
- ZAO Fund (scraped live): rank **#11**, pool **$10,547**, match deployed **$4,262**, remaining **$6,331**.
  Standings move daily - re-scrape (`scripts/refresh.sh`) before quoting.
- PolyRaiders = HuRya Empowerment Foundation (Moses), **#22, ~$1,200** (call's "#17/$14k" was misheard).
- Payouts are reliable (creators confirm); the speculative risk is only the ART token/endowment - keep treasury OFF it.
- Artizen is client-rendered (Bubble.io) - use the headless `browse` scraper, not WebFetch, for live data.
- The "$14M endowment" is self-reported - on-chain, the ART token's Juicebox project (587) holds ~34 ETH
  and is dormant. Do NOT cite $14M as fact; keep ZAO treasury off the ART token. (research/art-token-onchain.md)
- Ecosystem allies run funds: Bonfires (our partner), Edge City (Telamon), DeSci Asia, Pressman Film.

## Open items

- **Auto-deploy is NOT wired.** Git pushes do NOT trigger Vercel builds - deploys have been manual
  (`npx vercel --prod` as bettercallzaal). Fix with `vercel git connect` so pushes ship themselves.
  Until then, after any change, run a manual deploy or the live site lags the repo.
- We're Loud Fund slug unresolved (couldn't render its roster); curator = Pete Menchetti (We're Loud Fest).
- Verify the $14M: render Juicebox project 587's full treasury (browser/subgraph) to settle it.

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
