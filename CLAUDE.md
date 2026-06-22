# CLAUDE.md - ZArtizen

Context for any collaborator or agent working in this repo.

## What this is

ZArtizen is The ZAO's operating home for everything Artizen (artizen.fund) - the Web3 match-funding
platform. It graduated out of the ZAOOS monorepo (2026-06-13) into its own repo under the ZADEVZ org.
This repo holds the research, the strategy, the ready-to-use kit, and the page that power how The ZAO
shows up on Artizen as a fund manager + creator + community.

## The goal in one line

Make The ZAO one of the most effective communities on Artizen: run the ZAO Fund for Emerging Culture
well, run the ZAO portfolio as creators, stack across funds, and prove we bootstrap communities - then
take that proof to René. Strategy = **permissionless-first, then René** (see TEAM-PLAYBOOK.md).

## Start here

**Read [TEAM-PLAYBOOK.md](TEAM-PLAYBOOK.md) first** - how Artizen works, how we win, the strategy, who
does what. The front door for humans and agents.

## Repo layout

- `app/` - the live Next.js 16 site (https://zaoartizen.vercel.app). Pages: `/` (hub), `/dashboard`
  (live ZAO Fund scoreboard - data in `app/dashboard/data.ts`), `/leaderboard` (Season 6 field,
  `app/leaderboard/data.ts`), `/rally` (crew CTA), `/apply` (artist-facing), `/festivals`, `/proposal`.
- `scripts/` - `refresh.sh` (scrape live numbers -> update dashboard -> deploy); `refresh-fund.mjs`
  (the scraper; `--write` updates `app/dashboard/data.ts`).
- `research/` - source docs (843-850 + 760) + reference (fund-directory, priority-funds, etc). The why.
- `kit/` - copy-paste material: TEAM-PLAYBOOK is the index; new-artist-briefs, crew-mobilization,
  standings-tracker, fund proposal, outreach drafts, daily spotlights, call brief, sponsor one-pager.
- `README.md` - front door. `HANDOFF.md` - cold-start.

## How we win (keep accurate)

The Artizen Prize goes to the project that **sells the most Artifacts (count)** - NOT the most boosts.
Boosts/voting are a separate visibility layer. So the lever is many people each buying a $10 Artifact
(the ZAO crowd advantage), not a few big checks. Winning Artifact = square 1:1, video/GIF, no text.

## Live site + deploy

- Live: **https://zaoartizen.vercel.app** (the old zartizen.vercel.app is dead).
- Deploy: `cd ~/Desktop/repos/ZAOartizen && npx vercel --prod --yes` (CLI authed as bettercallzaal).
  Auto-deploy is NOT wired - redeploy manually after changes.
- Commit as: `git -c user.email=zaalp99@gmail.com -c user.name=bettercallzaal commit ...`
- The `browse` headless tool needs bun on PATH: `export PATH="$HOME/.bun/bin:$PATH"`. Do NOT clobber
  PATH (keep /usr/local/bin so npx/node resolve).

## Working conventions

- Never use emojis or em dashes. Plain hyphens, text labels.
- Brand spellings are exact: The ZAO, WaveWarZ, ZABAL, ZAOstock, COC Concertz, SongJam, Thy Revolution.
- Artizen facts move daily mid-drive. It is a Bubble.io app - curl/exa return empty shells; render
  with a headless browser to read live fund rosters/standings. Re-verify any number before quoting.
- Money mechanic (keep accurate): collecting a project's $10 Artifact unlocks $1 of match from each
  fund backing it. Supporting a project and supporting the fund are the same action.
- Human-only actions (sending DMs, submitting projects, Console, buying artifacts, IRL) are the
  operator's - the repo gives the copy + the plan.

## Status + next steps

Permissionless-first (no René gate): mobilize the crew (share `/rally`), curate ZAO artists in
(Marie Chain, COC Concertz, PolyRaiders, WaveWarZ Zambia), run the bootstrap motion, log the proof on
`/dashboard`. THEN take the track record to René (the Accelerator for Community Funds: 20 spots, 3mo,
up to $10k). ETH Boulder + Ven is a warm intro path. See TEAM-PLAYBOOK.md + research 886 (in ZAOOS).

## Key facts (live, scraped 2026-06-21)

- ZAO Fund for Emerging Culture: rank **#11** among funds, pool **$10,547**, match deployed **$4,262**,
  match remaining **$6,331**, score 522.19. Active: Flourish Fund Drive (ends ~2026-06-24). URL: artizen.thezao.com.
- Artifacts: $10, 100% to creator, 0% fee, Ethereum mainnet. Payouts confirmed reliable by creators
  (Trustpilot/reports). The ART token + Endowment ("$14M" self-reported, on-chain ~34 ETH dormant) is the
  speculative layer - keep ZAO treasury OFF it.
- ZAO-tied projects: InfiniteZero #1 ($46k), Edge Esmeralda #2, Edge City #4, PolyRaiders/HuRya #22 ($1.2k),
  Impact Concerts #32. (PolyRaiders was misheard on the call as #17/$14k - real is #22/$1.2k.)
- Venus = Artizen's in-platform AI bot; ask it the exact boost/score formula + Season 7 timing (GitHub/newsletter dead ends).
- Contacts: René Pinnell (@RJPinnell), Nate Van Cleve (Head of Product). News: news.artizen.fund.
