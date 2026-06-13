# CLAUDE.md - ZArtizen

Context for any collaborator or agent working in this repo.

## What this is

ZArtizen is The ZAO's operating home for everything Artizen (artizen.fund) - the Web3 match-funding
platform. It graduated out of the ZAOOS monorepo (2026-06-13) into its own repo under the ZADEVZ org.
This repo holds the research, the strategy, the ready-to-use kit, and the page that power how The ZAO
shows up on Artizen as a fund manager + creator + community.

## The goal in one line

Make The ZAO one of the most effective communities on Artizen: run two funds (Emerging Culture +
a new Festivals Fund), run the whole ZAO project portfolio as creators, stack across funds, and show
up on Console + IRL.

## Repo layout

- `research/` - the 8 source docs (843-850 + 760). Read these for the why. Numbered to match the
  ZAOOS research library (provenance lives there too, PR #844).
- `kit/` - the actionable, copy-paste material: fund proposal, outreach drafts, submission template,
  daily spotlight series, plus call brief + sponsor one-pager.
- `page/artizen-page.tsx` - the zaoos.com/artizen hub component (Next.js server component). Lives
  canonically in ZAOOS; copy here for porting / reference.
- `README.md` - front door. `HANDOFF.md` - what to do next + cold-start.

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

See HANDOFF.md. Gated on the René call: send `kit/outreach-drafts.md` #1, then submit
`kit/fund-proposal.md`. Daily series (`kit/daily-spotlights.md`) can start anytime.

## Key facts

- ZAO Fund for Emerging Culture: live, Season 6, ~$22k raised, 32 projects. URL: artizen.thezao.com.
- Artifacts: $10, 100% to creator, 0% fee, Ethereum mainnet. ART token + Endowment (~$14M) fund the platform.
- Contacts: René Pinnell (@RJPinnell), Nate Van Cleve (Head of Product). News: news.artizen.fund.
