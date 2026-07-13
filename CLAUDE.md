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

Rank = **Boost Score = (sales + match unlocked) x boost points received / 100** (official playbook,
play.artizen.fund). Multiplicative - boosts multiply dollars, you need BOTH. A project that sells the most
dollars but gets few boosts LOSES (playbook's own example). So the lever is the crowd doing two things:
buy $10 Artifacts AND cast Boosts (free). Boost points come from holding ART, donating to the Endowment,
completing profile, attending events. Winning Artifact = square 1:1, video/GIF, no text. (Doc 887 - this
corrects the earlier "most sales wins" framing.)

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

## Key facts (updated 2026-07-13, see research/851 - the June 21 fund-rank snapshot below is now Season-6-era, do not quote it)

- Season 6 closed July 9, 2026 (creators raised $8.3M platform-wide, corrected figure). **Season 7 is live
  now**, running through roughly Dec 2026/Jan 2027. Curated ZAO Fund projects carried over automatically -
  only a fresh per-project Artifact is needed for Season 7, no resubmission.
- Season 6 payouts run through the new Grow app (grow.artizen.fund) - sign in with the Artizen account
  email, complete the payout form per funded project (KYC + payment method: USD to bank or USDC to wallet).
- Fund director compensation: 20% of sponsor dollars raised for the fund (match/prize excluded) - confirmed
  by Venus/René in the fund-director Telegram, not yet found in any official written doc.
- Boost Points never expire - only the weekly leaderboard resets, not the point balance (Venus initially
  told the community the opposite; René corrected it directly).
- Artifacts: $10, 100% to creator, 0% fee, Ethereum mainnet. Payouts confirmed reliable by creators
  (Trustpilot/reports).
- The ART token + Endowment ("$17M-$100M" self-reported) is now contradicted, not just unverified: tracing
  the ART contract's own code found it hardcodes Juicebox project #587 (treasury ~0.01 ETH). That contract
  also deployed Oct 2023, conflicting with an earlier "launched Oct 2025" claim - unresolved, ask
  Venus/René directly before quoting either the launch date or the endowment figure. Keep ZAO treasury OFF
  ART regardless.
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
