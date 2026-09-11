# ZArtizen

**The ZAO's operating home for the Artizen Fund for Emerging Culture.** Research, strategy, playbooks, and a live 7-page Next.js site that powers how The ZAO shows up on Artizen as a fund manager, creator, and community.

Graduated out of the ZAOOS monorepo (2026-06-13) into its own repo under ZADEVZ so work stands alone. Research provenance lives in ZAOOS (PR #844); this repo is the operating home.

---

## One-line summary

Run the ZAO Fund well, run the ZAO portfolio as creators across multiple Artizen funds, and prove we bootstrap communities - then take that track record to René for the Accelerator.

---

## Status (updated 2026-07-13)

**The site works.** Two projects live on Artizen:
- **ZAO Festivals** ($25k goal, free community music events, flagship ZAOstock Oct 3 2026 Ellsworth Maine)
- **BetterCallZaal Strategies** (patronage model: "My fund to help artists full-time")

**The ZAO Fund for Emerging Culture** is active (rank #19 of 82+ funds, 36 projects curated, mid "Daybreak Fund Drive #7"). Season 7 is live now (through roughly Dec 2026/Jan 2027).

**Research:** complete + audited (16 docs: platform mechanics, 79-fund directory, on-chain endowment check, strategy decisions).

**Kit:** drafted and ready to use (outreach templates, submissions, daily spotlights, operating rhythm).

---

## Stack

- **Framework:** Next.js 16 (React 19, TypeScript)
- **Styling:** Tailwind v4
- **Deployment:** Vercel (manual deploy via `npx vercel --prod --yes`)
- **Data source:** hardcoded in `app/dashboard/data.ts`; scraped from Artizen via `scripts/refresh-fund.mjs`

---

## Quick start

```bash
npm install
npm run dev          # http://localhost:3000
npm run build        # production build
npm run lint         # biome check (configured in biome.json)
```

### Deploy

```bash
# Manual deploy to Vercel (requires authed CLI)
npx vercel --prod --yes

# Or: scrape live Artizen data, update dashboard, and deploy
scripts/refresh.sh
```

Note: auto-deploy is NOT wired - git pushes do not trigger Vercel builds. Deploy manually after changes.

---

## Site pages

Live at **https://zaoartizen.vercel.app**

| Route | What | Audience |
|---|---|---|
| `/` | ZAO Fund hub - featured project, searchable roster, join path | Everyone |
| `/dashboard` | Live ZAO Fund scoreboard - rank, match deployed/remaining, backed projects | Operations |
| `/leaderboard` | Season 6 field (35 projects) with ZAO ties flagged | Community |
| `/rally` | 3-step crew CTA - sign up, buy $10 Artifact, boost | Shareable |
| `/apply` | Artist-facing - what the fund backs, how to get in | Applicants |
| `/festivals` | ZAO Festivals umbrella - events, where it fits, how to join | Community |
| `/proposal` | Decision page - create a fund vs curate into existing | Zaal/team |
| `/playbook` | How Artizen works + how to win (rank = money raised; boosts win the Boost Bonus) | Creators |
| `/community` | ZAO bloc on Artizen with verified badges | Showcase |
| `/sponsor` | Sponsor pitch for ZAO Festivals Fund match pool | Partners |
| `/curate` | How to get curated into the ZAO Fund | Creators |
| `/about` | Plain-English Artizen explainer | New visitors |
| `/funds` | Fund directory + ZAO stacking map | Research |

---

## Repo map

### Operating surface (start here)

| File | What |
|---|---|
| `TEAM-PLAYBOOK.md` | How Artizen works, how we win, strategy, roles (mechanics link to `research/mechanics-canonical.md`) |
| `PLAN-1-MEET-PROJECTS.md` | North star: meet as many projects as possible (five circles, weekly rhythm, meet tracker) |
| `PLAN-2-PROJECTS.md` | Run ZAO Festivals + BetterCallZaal Strategies (Thursday loop, artifact plan, proofs) |
| `PLAN-3-ZAO-FUND.md` | Manage the ZAO Fund (curation pipeline, engagement rules, the flywheel) |
| `RECAP.md` | Full record: what was built, what was decided, what is next (Session 1 through 2026-07-03) |

### Reference docs

| Path | What |
|---|---|
| `research/844-artizen-platform-deep-study/` | Platform mechanics, sentiment, competition |
| `research/845-artizen-art-token-endowment-economics/` | ART token + Endowment on-chain check (contradicted by Juicebox read) |
| `research/846-zao-festivals-funding-strategy/` | Fund stacking, off-Artizen grants, budget |
| `research/847-ecosystem-participation-playbook/` | Console, visibility, IRL presence |
| `research/849-execution-build-plan-kit-overview/` | Full kit inventory |
| `research/850-create-run-zao-festivals-fund/` | Fund manager playbook (if we build a second fund) |
| `research/851-artizen-season6-close-season7-launch/` | Season framing: S6 closed July 9 ($8.3M platform-wide), S7 live now |
| `research/fund-directory.md` | All 79 funds + ZAO stacking map + cross-backing targets |
| `research/priority-funds.md` | Deep renders: Global Music, Bonfires, We're Loud |
| `research/research-audit.md` | Corrections (white-space, dormancy), gaps, next steps |
| `research/art-token-onchain.md` | On-chain check of ART token Juicebox |
| `research/rene-pinnell-digest.md` | René's thesis, roadmap, trackable targets |
| `research/community-fund-playbook.md` | How the best funds run + fill (model for ZAO) |
| `research/mechanics-canonical.md` | **The one source for platform mechanics**, reconciled against the live Playbook v34 (2026-09-04) |
| `research/artizen-mechanics-verified-telegram.md` | Mechanics sourced from Artizen fund-director TG (2026-07-03, partly superseded) |

### Ready-to-use kit

| File | What |
|---|---|
| `kit/season7-transition-checklist.md` | Copy-paste to-do list (payout forms, artifact refresh, fund-director comp) |
| `kit/fund-targets-and-directors.md` | Fund targets + director contact map |
| `kit/outreach-drafts.md` | René/Nate DMs, cross-curation requests, member rally copy |
| `kit/submission-template.md` | Project submission template + artifact specs |
| `kit/artifact-briefs.md` | Square GIF/video brief for WaveWarZ, COC, Thy Revolution |
| `kit/sponsor-onepager.md` | Sponsor pitch (ZAO Festivals Fund match pool) |
| `kit/daily-spotlights.md` | 32-post daily spotlight series (projects from ZAO Fund) |
| `kit/launch-posts.md` | Share copy for hub + festivals umbrella (multi-platform) |
| `kit/operating-rhythm.md` | Daily/weekly/seasonal cadence + metrics |
| `kit/standings-tracker.md` | Live Season 7 ZAO Fund standings (rank #19, 36 projects) |
| `kit/pitch-deck-outline/` | HTML pitch deck for sponsor/partner conversations |

### Code

| Path | What |
|---|---|
| `app/` | Next.js 16 pages (see Site Pages table above) |
| `app/dashboard/data.ts` | Live ZAO Fund scoreboard data - update after each drive |
| `scripts/refresh.sh` | Scrape live Artizen data -> update dashboard -> deploy |
| `scripts/refresh-fund.mjs` | Headless browser scraper (renders Artizen.fund, extracts rankings) |
| `.env.example` | No sensitive env vars needed for the frontend |

---

## How to continue

### Current focus (Season 7, through Dec 2026/Jan 2027)

**What's working:** The site ships, strategy is locked, kit is ready, research is complete.

**What needs Zaal/operators (human-only actions):**

1. **Payout claims (Season 6 close)** - Complete the Grow app payout form for every ZAO-fund-backed project (KYC + payment method).
2. **Artifact refresh (Season 7)** - BCZ + ZAO Festivals each need a fresh Season 7 Artifact (square, GIF/video, no text); projects carry over automatically from Season 6, no resubmission required.
3. **Weekly Funders Forum** - Attend Mondays 11am PT; Season 7 curation/match-cap policy decided live with directors.
4. **First-hour buyers** - Line up 3-5 core people per project, timed to drive start, for early velocity.
5. **Community votes** - Each member makes an Artizen profile (free 100-vote boost), votes in waves (free, no capital required).
6. **Track proof metrics** - Log match deployed, distinct buyers, sales, leaderboard rank for future Accelerator pitch.

**Code changes needed (low priority):**

- Fix auto-deploy (wire `vercel git connect` so pushes trigger builds).
- Dashboard data currently hardcoded - consider a lightweight scraper that auto-updates on merge.
- ART token contract date conflict (Oct 2023 vs Oct 2025) - ask Venus/René for clarification before quoting.

### Future horizon (2027+)

- **Prove the bootstrap thesis** - log 3-6 months of proof metrics (match deployed, distinct buyers, community participation) for an Accelerator pitch to René.
- **ZAO Festivals Fund** (later, bigger step) - only if ZAO wants to host other organizers under it. Proposal in `app/proposal/page.tsx`.
- **Cross-fund stacking** - replicate the ZAO stack model (WaveWarZ, ZAOstock, Thy Revolution in Global Music + Bonfires + We're Loud + Greenpill + ZAO Emerging Culture).

---

## Key concepts

### The win condition (live Artizen Playbook, v34, 2026-09-04)

**Rank = money raised: sales + match unlocked. Prizes follow rank.** Boosts win a share of a separate weekly
Boost Bonus pot. This replaced the multiplicative `Boost Score = (sales + match) x boost points / 100` on
2026-08-21 (Playbook v21). Full detail, sources and open questions: `research/mechanics-canonical.md`.

The lever is still the community doing two things, now for two different payouts:
- **Buy:** Collect $10 Artifacts (plus a 10% fee added at checkout) - moves rank, the prize and the match
- **Boost:** Cast boosts - moves the project's share of the Boost Bonus pot. Boost Points come from donating to the Endowment ($1 = 100) and holding ART (balance / 10 each drive)

The winning Artifact formula: square, video/GIF, no text. Proof: doc 887.

### Artizen platform facts

- **Client-rendered (Bubble.io)** - WebFetch returns empty JS shells; use headless browser scraper or hand-check for live data. (The Playbook at play.artizen.fund is not Bubble and is readable - see the canonical file.)
- **Seasons:** Season 6 closed July 9, 2026. **Season 7 is live now**, ending around January 7, 2027 (Playbook FAQ).
- **Curated projects carry over** - only need a fresh Season 7 Artifact per project, no resubmission.
- **Fund director compensation:** 20% of fresh sponsor dollars brought into the fund - now written in the Playbook (v3, 2026-07-22). None on launch capital, Endowment match or prizes.
- **Match mechanics:** each $1 of sales unlocks match from the Endowment and every fund backing the project, at that week's Match Multiple (set by Artizen, changes weekly), up to the project's cap. Match stacks across funds.

### The ZAO position

The ZAO runs the **ZAO Fund for Emerging Culture** (rank #19, 36 projects curated, ~$188 pool). Strategy:

1. **Curate into existing funds, don't rush to build a second one** - The "music white space" is gone (We're Loud, Global Music, Greenpill already fund music events, and six ZAO music projects are in Global Music).
2. **Run the whole portfolio as creators** - WaveWarZ, ZAOstock, Zaoville, Thy Revolution, ZABAL Gamez cohort each submit as projects.
3. **Stack across funds** - each project curates into 3-5 funds (see fund directory). Put ZOE/Hermes in the **Bonfires Fund** (our knowledge-graph partner).
4. **Activate the ZAO Fund** - it is active but needs community engagement to deploy match.
5. **Show up** - Console, Artizen LIVE, IRL events (DWeb Camp Village, Berlin Jul 8-12), relationships (René, Bonfires, Edge City).

---

## Contact + resources

- **Artizen:** https://artizen.fund (client-rendered Bubble.io app)
- **Playbook:** https://play.artizen.fund (official machine-readable resource)
- **ZAO on Artizen:** https://zaoartizen.vercel.app
- **Key contacts:**
  - René Pinnell (@RJPinnell) - founder
  - Nate Van Cleve - Head of Product
  - Venus - Artizen's in-platform team account
  - Wadooah Wali (wadooah@newcanvas.co) - Artizen LIVE producer
  - Channels: Funders Forum (Mondays 11am PT), the Playbook version history, Venus's email to fund directors, Grow Chat. The public Artizen Telegram closed 2026-09-01; there was never a separate director Telegram (Venus, 2026-09-10)
- **Our fund-director comp:** 20% of fresh sponsor dollars raised - in writing in the Playbook since v3 (2026-07-22)

---

## Gotchas + notes

- **Artizen is fast-moving.** Facts change per drive cycle (boosts, match allocation, fund standings). Never trust a cached number - re-verify before quoting.
- **Endowment claims are self-reported.** The old "on-chain check" traced a Juicebox contract that Venus confirmed (2026-09-10) was never ART; current ART is `0x44c4...f8Ec` on Base, per the Playbook. Re-trace before quoting any endowment figure. Treat any single figure as a per-fund pool claim, not gospel. Keep ZAO treasury OFF the ART token.
- **No Artizen MCP server or agent API exists.** Play.artizen.fund (the Playbook) is Artizen's own recommended machine-readable source.
- **Headless scraper note:** `scripts/refresh-fund.mjs` uses gstack `browse` (headless Chromium) to render Artizen pages. Requires bun on PATH: `export PATH="$HOME/.bun/bin:$PATH"`.

---

## CLAUDE.md

For context on working in this repo (collaborators, agents, conventions), see `CLAUDE.md`.
