# ZAO on Artizen, the full recap

The complete record of the ZAO x Artizen effort: what was built, where it lives, what was decided, and what is
next. Last updated 2026-06-29. Style note: no spaced hyphen dashes anywhere (house rule).

## Status at a glance
- **Two live Artizen projects** in Season 6:
  - **ZAO Festivals** (free community music festivals, flagship ZAOstock 2026, Oct 3 Ellsworth Maine). Goal $25k.
    Artifact: WaveWarZ at ZAO-CHELLA (square). Submitting into the music, festival, and gathering funds.
  - **BetterCallZaal Strategies** (Zaal going full-time as a builder for builders). The offer: **every Artifact
    you buy is one hour with Zaal on anything you want, online or in person.** Buy three, get three hours.
    Submitting into the builder and AI funds (Bonfires, Venture Miner, Mental Wealth, Apollo, etc). Copy:
    `kit/bcz-hour-per-artifact` (clipboard) rebuilt around this offer.
- **The ZAO Fund for Emerging Culture** is live (Zaal is curator). Logline updated to "For the artists and
  builders of The ZAO." Description and eligibility tightened, with the "collaborate with The ZAO" rule.
- **The site** zaoartizen.vercel.app is a full Artizen funnel (see Website below).
- The Crescendo drive ends in roughly 3 days from the live date. Match unlocks on sales during the drive.

## The two projects (operational packets)
- `kit/zaofestivals-artizen-submission.md` and `kit/this-weeks-fund-projects.md`: the ZAO Festivals + BCZ
  Strategies submission copy (title, logline, description, the four questions, rewards, tags, Artifact briefs).
- `kit/artifact-briefs.md`: 6 Artifact concepts from a 106-agent workflow (top 3 per project, with shot lists).
- The Artifact decision: a real festival photo or short clip, square, NO text or logo. The WaveWarZ frame (logo
  is integrated graphic art) was used for ZAO Festivals; a builder shot fits BCZ.

## The website (zaoartizen.vercel.app)
A connected funnel that pushes visitors toward Artizen. Shared nav on every page plus a "Back the fund" CTA.
Pages: home, /about (plain-English explainer), /curate (how to get curated, the $3+ match), /funds (the funds
map + the ZAO 3-fund stack), /playbook (how Artizen works + finish strong), /community (the ZAO bloc with
verified badges), /sponsor (the two giving rails + credibility), /dashboard (live fund standings), /festivals
(the ZAO Festivals umbrella with the ZAO-CHELLA reels), /rally, /apply, /leaderboard, /proposal. Share images
(opengraph) on the key pages.

## The research knowledge base (research/)
The institutional memory. Most useful, in order:
- `artizen-share-and-accept-playbook.md`: 13-agent playbook. The 48-hour launch plan, channels, the voting
  engine, fund-director outreach, per-fund framing, rewards, deck, sponsor pitches. THE execution doc.
- `artizen-funds-how-they-work.md`: how funds are framed and used (TL;DR at top). Short "For [X]" loglines,
  niche-by-community, $3+ match, within-fund curation, sponsor tiers, the Accelerator, success cases.
- `artizen-funds-index.md` + `fund-directory.md` + `priority-funds.md`: the funds and which fit ZAO projects.
- `artizen-artifact-best-practices.md`: what wins as an Artifact (motion wins, no text), with the drone vs
  cipher vs WaveWarZ analysis.
- `bloc-projects.md`: grounded profiles of the 10 ZAO bloc projects on Artizen (confidence tagged).
- `zaofestivals-learnings-ideas.md`: 8 passes of learnings and ideas, with a strategy summary at the top
  (the ZAO-[name] naming system, the ownership moat, the content engine, the protocol/chapter-anywhere model).
- `zaofestivals-brand-book.md`: the 1-page ZAO Festivals brand book (naming, palette, voice, do and don't).
- Numbered docs 843 to 850: the earlier deep studies (Artizen platform, token/endowment economics, funding
  strategy, ecosystem playbook, execution build plan, fund-creation manager playbook).
- `zaostock-grounded-reality.md` (in kit/): the CONFIRMED-vs-doc facts. Read before building on any "fact."

## The strategy, distilled (the top 5 moves)
From the playbook. Execute in order.
1. **Submit to every eligible fund** with a custom opening line per fund (each fund is a separate vote pool and
   match pool; stacking multiplies both).
2. **Line up 3 to 5 core people to buy in the first hour** (early velocity makes the project visible).
3. **Votes drive curation, not sales.** Mobilize the 188-member community to make an Artizen profile (100 free
   votes each) and click, in waves. This is the engine that advances a project.
4. **Pre-match before you ask:** buy or boost a couple of projects inside a fund, then warm-DM its director.
5. **Tiered outreach:** super core gets personal DMs, core gets a group ping, warm gets a public post.

## Key decisions and grounded facts
- Funding is pre-fundraising; the $10 to 25k for ZAOstock comes from warm local sponsors plus web3 sponsors plus
  this Artizen push. The old "Levitt grant" was a doc recommendation, not real.
- Local Maine is WARM: ZAOstock is part of Art of Ellsworth weekend and the team has a Heart of Ellsworth
  relationship.
- The lineup is mostly ZAO-community artists. The festival is artist-built and community-owned.
- Artizen match is roughly $3 per $1 (fan, sponsor, endowment). Curation is per-fund, top ~30% by votes.
- The two projects cover two different fund universes: festivals for the music and gathering funds, BCZ for the
  builder and AI funds.

## What is next
- Finish submitting both projects into their best-fit funds (lists in the kit and research docs).
- Make the Artifact move (a short square clip) when there is time; stills work for now.
- Run the 48-hour launch plan: line up first-hour buyers, mobilize the community to vote, post the thread, tag
  @ArtizenFund, work the bloc.
- Optionally apply to the Artizen Accelerator (community fund seed, amount unconfirmed) and build the fund's
  pitch deck and video.

## How to use this repo
Start here (RECAP.md). For execution, open `research/artizen-share-and-accept-playbook.md`. For copy to paste,
open the `kit/` files. For what is true vs aspirational, open `kit/zaostock-grounded-reality.md`. The website
code is in `app/`.
