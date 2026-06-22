# ZArtizen

The ZAO's home for everything Artizen: how The ZAO operates inside the Artizen ecosystem as a
fund manager, a creator, and a community - plus the research, the playbooks, and the ready-to-use
kit to execute.

Graduated out of the ZAOOS monorepo (2026-06-13) into its own repo under ZADEVZ so the work stops
colliding with parallel sessions and stands on its own. Research provenance still lives in ZAOOS
(PR #844); this repo is the operating home.

> **New to this? Start with [TEAM-PLAYBOOK.md](TEAM-PLAYBOOK.md)** - how Artizen works, how we win
> (most Artifacts sold, not boosts), our permissionless-first strategy, and who does what.

## What Artizen is (60 seconds)

Web3 match-funding platform for art / science / tech / culture, founded by René Pinnell. Creators
mint $10 open-edition "Artifact" NFTs (100% to creator, 0% platform fee, Ethereum mainnet). Every
$1 of sales instantly unlocks $1 from each community Fund backing the project - match stacks across
funds. Runs in seasons (Curate -> Compete). On top sits an ART token + a self-reported "$14M endowment"
- but on-chain that token's Juicebox project holds ~34 ETH and is dormant, so treat the $14M as
unverified (see [research/art-token-onchain.md](research/art-token-onchain.md)). Full deep-dive:
[research/844](research/844-artizen-platform-deep-study/), [research/845](research/845-artizen-art-token-endowment-economics/).

## The ZAO position (the strategy - updated 2026-06-14)

The ZAO already runs the **ZAO Fund for Emerging Culture** (Season 6). A full scan (79 funds) changed
the plan - the proposal is now under team review ([/proposal](app/proposal/page.tsx)):

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

The app (Next.js, deploy to Vercel) ships three shareable pages:

| Route | What |
|---|---|
| `/` (`app/page.tsx`) | The ZAO Fund hub - daily featured project, searchable 32-project roster, like-minded funds, join path |
| `/festivals` (`app/festivals/page.tsx`) | The ZAO Festivals umbrella - events (ZAOstock, Zaoville), where it fits, how to join |
| `/proposal` (`app/proposal/page.tsx`) | **Shareable decision page for ZAO Festivals teammates** - create a fund vs curate into existing, with a call for input |

## Run + deploy the site

ZArtizen is a standalone Next.js 16 app (the homepage is the ZAO Fund hub). To run it:

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build (verified green)
```

To deploy + share with the Artizen community:
- Connect `ZAODEVZ/zartizen` to Vercel (Import Project) - it auto-builds on every push, no config needed.
- Or from the repo: `npx vercel --prod` (requires a Vercel login).

The homepage rotates a featured "Project of the day" automatically (server-side, by date), lists the
full fund roster, shows the like-minded funds, and has a "join the fund" submit path.

## Status (2026-06-14)

- Research: complete + audited (15 docs incl. full 79-fund directory + on-chain checks).
- Site: live (`/`, `/festivals`, `/proposal`) at zartizen.vercel.app.
- Kit: drafted, ready to use.
- Strategy: pivoted to **curate-into existing funds** (proposal under team review at `/proposal`).
- ZAO Fund: dormant this drive - needs its projects activated.

## Next steps

1. **Get team input on the proposal** - share `/proposal` (zartizen.vercel.app/proposal) with ZAO Festivals teammates.
2. **Activate the ZAO fund this drive** - rally the community to collect its projects (`kit/outreach-drafts.md` #4).
3. **Stack the events** - submit ZAOstock + Zaoville (`kit/make-festivals-on-artizen.md`) into We're Loud + Global Music + Greenpill + ZAO Emerging Culture.
4. **Put ZOE/Hermes in the Bonfires fund** (warm partner).
5. **Send the René DM** (`kit/outreach-drafts.md` #1) - only pursue a dedicated Festivals Fund if the team wants to host other organizers.

## Open questions

- Team: Option A (create a fund) or Option B (curate into existing)? Weigh in at `/proposal`.
- We're Loud Fund roster + curator contact (slug unresolved).
- Verify the $14M endowment: render Juicebox project 587's full treasury (the ART token points there; it shows ~34 ETH on-chain).
