# ZArtizen

The ZAO's home for everything Artizen: how The ZAO operates inside the Artizen ecosystem as a
fund manager, a creator, and a community - plus the research, the playbooks, and the ready-to-use
kit to execute.

Graduated out of the ZAOOS monorepo (2026-06-13) into its own repo under ZADEVZ so the work stops
colliding with parallel sessions and stands on its own. Research provenance still lives in ZAOOS
(PR #844); this repo is the operating home.

## Start here: the three plans (consolidated 2026-07-03)

The operating surface is THREE plans. Everything else in the repo is reference behind them.
The north star: **meet as many projects on Artizen as possible** - the fundraise follows the relationships.

| Plan | What it runs |
|---|---|
| [PLAN-1-MEET-PROJECTS.md](PLAN-1-MEET-PROJECTS.md) | The north star. Five circles (fund roster, TG group, directors, Artizen LIVE, IRL), the reciprocity engine, the weekly rhythm, the meet tracker. |
| [PLAN-2-PROJECTS.md](PLAN-2-PROJECTS.md) | The two live projects (BetterCallZaal Strategies + ZAO Festivals): the Thursday drive loop, page upkeep, canonical proof numbers, Season 7 artifacts. |
| [PLAN-3-ZAO-FUND.md](PLAN-3-ZAO-FUND.md) | The ZAO Fund for Emerging Culture: engagement rule, curation pipeline, the flywheel (boost the fund), sponsors. |

Launch-era and absorbed kit files moved to `kit/archive/` (nothing deleted). Mechanics ground truth:
[research/artizen-mechanics-verified-telegram.md](research/artizen-mechanics-verified-telegram.md).
Fund targets + director DMs: [kit/fund-targets-and-directors.md](kit/fund-targets-and-directors.md).

> Background reading: [TEAM-PLAYBOOK.md](TEAM-PLAYBOOK.md) - how Artizen works, how we win
> (Boost Score = (sales + match) x boost points - buy AND boost), our permissionless-first strategy, and who does what.

## What Artizen is (60 seconds)

Web3 match-funding platform for art / science / tech / culture, founded by René Pinnell. Creators
mint $10 open-edition "Artifact" NFTs (100% to creator, 0% platform fee, Ethereum mainnet). Every
$1 of sales instantly unlocks $1 from each community Fund backing the project - match stacks across
funds. Runs in seasons (Curate -> Compete). On top sits an ART token and claimed endowment
- but on-chain that token's Juicebox project holds ~34 ETH and is dormant, so treat any single endowment
number as unverified per-fund pool claim (see [research/art-token-onchain.md](research/art-token-onchain.md)). 
Full deep-dive: [research/844](research/844-artizen-platform-deep-study/), [research/845](research/845-artizen-art-token-endowment-economics/).

## The ZAO position (the strategy - updated 2026-07-03; season facts refreshed 2026-07-13, see [research/851](research/851-artizen-season6-close-season7-launch/))

The ZAO already runs the **ZAO Fund for Emerging Culture**. Season 6 closed July 9, 2026 (creators raised
$8.3M platform-wide); **Season 7 is live now**, running through roughly Dec 2026/Jan 2027. Curated projects
carry over automatically into Season 7 - only a fresh per-project Artifact is required, no resubmission.
A full scan (79 funds) changed the plan - the proposal is now under team review ([/proposal](app/proposal/page.tsx)):

1. **Curate into existing funds, don't rush to build a second one.** The "music white space" is gone -
   We're Loud Fund (DIY music festivals), Global Music Fund, and Greenpill already fund music events,
   and **six ZAO music projects are already stacked in the Global Music Fund**. So stack ZAOstock +
   Zaoville into We're Loud + Global Music + Greenpill + ZAO Emerging Culture rather than create an 80th fund.
2. **Run the whole portfolio as creators** - WaveWarZ, SongJam, ZAOstock, Zaoville, Thy Revolution, the
   ZABAL Games cohort each submit as projects.
3. **Stack across funds** - each project curates into 3-5 funds (see the stacking map in
   [research/fund-directory.md](research/fund-directory.md)). Put ZOE/Hermes in the **Bonfires Fund**
   (our knowledge-graph partner - Arun's DreamStarter + Abraham Nash are already there).
4. **Activate the existing ZAO fund** - it is dormant this drive (~#23, ~$188); the real bottleneck is
   getting people to collect its projects, not adding funds.
5. **Show up** - Console (the social layer), Artizen LIVE, DWeb Camp Village (Berlin, Jul 8-12), and the
   René / Bonfires / Edge City relationships.
6. **A dedicated ZAO Festivals Fund is a later, bigger step** - only if ZAO wants to host other
   organizers under it. Pending team input via [/proposal].

## Repo map

| Path | What |
|---|---|
| `research/843` | The ZAO Fund full Season 6 roster (32 projects) |
| `research/844` | Platform deep study (mechanics, sentiment, competition) |
| `research/845` | ART token + Endowment economics + René's thesis |
| `research/846` | ZAO Festivals funding strategy (fund stacking, off-Artizen + grants) |
| `research/847` | Ecosystem participation playbook (Console, visibility, IRL) |
| `research/849` | Execution build plan + kit overview |
| `research/850` | Create + run the ZAO Festivals Fund (manager playbook) |
| `research/760` | InfiniteZero / DIN (the #1 project in the ZAO fund - context) |
| `kit/season7-transition-checklist.md` | Copy-paste to-do list for the Season 6->7 handoff (payouts, Artifact refresh, fund-director comp, Funders Forum) |
| `kit/fund-proposal.md` | Ready-to-submit ZAO Festivals Fund proposal + 3 Qs for René |
| `kit/make-festivals-on-artizen.md` | Step-by-step: submit ZAOstock + Zaoville today, create the fund after the call |
| `kit/artifact-briefs.md` | Paste-ready submissions for WaveWarZ, SongJam, COC, Thy Revolution |
| `kit/rene-call-brief.md` | Agenda + asks + talking points for the René call |
| `kit/sponsor-onepager.md` | Sponsor pitch for the ZAO Festivals Fund match pool |
| `kit/outreach-drafts.md` | René/Nate DM, DWeb Village app, cross-curation DM, member rally |
| `kit/submission-template.md` | Project submission template + artifact specs + first cohort |
| `kit/daily-spotlights.md` | 32-post daily project-spotlight series |
| `kit/launch-posts.md` | Share copy for the hub + Festivals umbrella (Farcaster/X/Console/TG/LinkedIn) |
| `kit/operating-rhythm.md` | Daily/weekly/seasonal cadence + metrics to track |
| `research/fund-directory.md` | Full 79-fund landscape + ZAO stacking map + cross-backing targets |
| `research/priority-funds.md` | Deep renders of Global Music + Bonfires funds + the Festivals re-decision |
| `research/research-audit.md` | Critical audit: corrections (white-space, dormancy), gaps, next steps |
| `research/art-token-onchain.md` | On-chain check: ART token + the unverified $14M endowment |
| `research/rene-pinnell-digest.md` | René's thesis, roadmap, trackable targets, track record |
| `research/community-fund-playbook.md` | How the best funds run + fill, as a model for ZAO |
| `CLAUDE.md` | Repo context for collaborators + agents |

## Live site pages

The app (Next.js, live at **https://zaoartizen.vercel.app**) ships these pages:

| Route | What |
|---|---|
| `/` (`app/page.tsx`) | The ZAO Fund hub - daily featured project, searchable roster, like-minded funds, join path |
| `/dashboard` (`app/dashboard/page.tsx`) | **Live ZAO Fund scoreboard** - rank, match deployed/remaining, backed projects, cross-back targets, proof log. Data in `app/dashboard/data.ts`; refresh with `scripts/refresh.sh` |
| `/leaderboard` (`app/leaderboard/page.tsx`) | Season 6 field snapshot (all 35 projects), ZAO ties flagged |
| `/rally` (`app/rally/page.tsx`) | **GC-shareable 3-step crew CTA** - sign up, buy the $10 Artifact, boost |
| `/apply` (`app/apply/page.tsx`) | **Artist-facing** - what the fund backs, eligibility, how to get in. Send to applicants |
| `/festivals` (`app/festivals/page.tsx`) | The ZAO Festivals umbrella - events (ZAOstock, Zaoville), where it fits, how to join |
| `/proposal` (`app/proposal/page.tsx`) | Shareable decision page - create a fund vs curate into existing |

## Run + deploy the site

ZArtizen is a standalone Next.js 16 app (the homepage is the ZAO Fund hub). To run it:

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build (verified green)
```

To deploy + share with the Artizen community:
- Connect `ZAODEVZ/ZAOartizen` to Vercel (Import Project) - it auto-builds on every push, no config needed.
- Or from the repo: `npx vercel --prod` (requires a Vercel login).

The homepage rotates a featured "Project of the day" automatically (server-side, by date), lists the
full fund roster, shows the like-minded funds, and has a "join the fund" submit path.

## Status (updated 2026-07-13, see [research/851](research/851-artizen-season6-close-season7-launch/))

- Research: complete + audited (16 docs incl. full 79-fund directory, on-chain checks, and a deep
  fund-director-Telegram pass covering Season 6 close / Season 7 launch).
- Site: live (`/`, `/festivals`, `/proposal`) at zaoartizen.vercel.app.
- Kit: drafted, ready to use.
- Strategy: **Two projects on Artizen carried into Season 7 automatically:** ZAO Festivals ($25k goal) and
  BetterCallZaal Strategies (patronage model). Season 6 closed July 9, 2026; Season 7 is live now (through
  roughly Dec 2026/Jan 2027). Each project needs a fresh Season 7 Artifact - no resubmission required.
- ZAO Fund: active curation underway, 188-member community as voting engine. Fund director is entitled to
  20% of sponsor dollars raised for the fund (Telegram-confirmed by Venus/René, not yet in writing - follow
  up before relying on it).
- Season 6 payouts: run through the new Grow app (grow.artizen.fund) - complete the payout form there for
  every ZAO-fund-backed project.

## Next steps

1. **Complete the Season 6 payout form in the Grow app** for every ZAO-fund-backed project.
2. **Refresh the Season 7 Artifact** for BCZ + ZAO Festivals (square, GIF/video, no text) - projects stay
   curated automatically, only the Artifact needs updating.
3. **Attend the weekly Funders Forum** (Mondays, 11am PT) - Season 7 curation/match-cap policy is being
   decided live with fund directors.
4. **Line up first-hour buyers and mobilize community votes** (48-hour launch plan in `research/artizen-share-and-accept-playbook.md`).
5. **Run the improvement loop** - test rewards, iterate engagement, log proof metrics for future Accelerator / Rene conversation.

## Open questions

- Whether the ART token contract at `0x59fbbc...5b58d63de` is still the live one - on-chain trace found it
  deployed Oct 2023, conflicting with Doc 845's "launched Oct 2025" claim. Ask Venus/René directly.
- The $17M-$100M endowment claim is now contradicted by an on-chain read of that same contract (linked
  Juicebox project holds ~0.01 ETH) - treat as unconfirmed until resolved.
- Verify per-fund match pool mechanics: confirm each fund's 90% match / 10% prize split.
- Track recurring metrics: distinct buyers mobilized, projects curated, match deployed (for future Accelerator pitch).
