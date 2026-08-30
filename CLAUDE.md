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

## How we win

Rank = **Boost Score**, and it is multiplicative - boosts multiply dollars, you need BOTH. A project that
sells the most dollars but gets few boosts LOSES (the playbook's own example). So the lever is the crowd
doing two things: buy $10 Artifacts AND cast Boosts (free).

**The formula, the match ratio, season rules, prize rules and every open question about them live in
one file: `research/mechanics-canonical.md`.** Do not restate mechanics here or in any other doc - link
to that file and update it there. It carries the source and date for every claim, plus a TODO-VERIFY
register of what this repo cannot confirm.

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
- Money mechanic: collecting a project's Artifact unlocks match from each fund backing it, so supporting
  a project and supporting the fund are the same action. The exact ratio is DISPUTED between this repo's
  docs - see conflict M1 in `research/mechanics-canonical.md`. Verify at play.artizen.fund before
  quoting a number to anyone.
- Human-only actions (sending DMs, submitting projects, Console, buying artifacts, IRL) are the
  operator's - the repo gives the copy + the plan.

## Status + next steps

Permissionless-first (no René gate): mobilize the crew (share `/rally`), curate ZAO artists in
(Marie Chain, COC Concertz, PolyRaiders, WaveWarZ Zambia), run the bootstrap motion, log the proof on
`/dashboard`. THEN take the track record to René (the Accelerator for Community Funds: 20 spots, 3mo,
up to $10k). ETH Boulder + Ven is a warm intro path. See TEAM-PLAYBOOK.md + research 886 (in ZAOOS).

## Key facts

**Platform mechanics are NOT listed here.** Season dates and rollover rules, the Boost Score, the match
ratio, Boost Point expiry, payouts, Grow/CRM/Quests, fund director compensation, the Artifact spec, and
the ART/Endowment conflict all live in `research/mechanics-canonical.md`, each with its source and date.
Read that file before quoting any of them. What follows is ZAO-specific context only.

- **(Season-6-era snapshot, superseded - kept for trend reference only)** ZAO Fund for Emerging Culture on
  2026-06-21: rank #11 among funds, pool $10,547, match deployed $4,262, match remaining $6,331, score
  522.19. ZAO-tied projects then: InfiniteZero #1 ($46k), Edge Esmeralda #2, Edge City #4, PolyRaiders/HuRya
  #22 ($1.2k), Impact Concerts #32.
- Venus = Artizen's in-platform bot/team account, now stated to hold the title "Co-founder & CEO" (ambiguous
  whether AI persona or human - unconfirmed, do not assert either way publicly). Ask it the exact
  boost/score formula + platform mechanics - it is far more responsive than the newsletter (dormant since
  Feb 2026) or GitHub. No official Artizen MCP server or agent API exists; `play.artizen.fund` (the
  Playbook) is Artizen's own recommended machine-readable source.
- Contacts: René Pinnell (@RJPinnell), Nate Van Cleve (Head of Product). News: news.artizen.fund (dormant).
  Live channel: the private fund-director Telegram ("Artizen ✨").
