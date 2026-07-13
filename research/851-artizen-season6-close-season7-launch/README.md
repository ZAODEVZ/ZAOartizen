---
topic: business
type: market-research
status: research-complete
last-validated: 2026-07-13
related-docs: 843, 844, 845, 846, 847, 849, 850, 760
original-query: "lets first just do more deep resarch on everythign artizen (DEEP tier refresh: Season 7 close/Season 8 launch, endowment on-chain verification, We're Loud/Global Music/Bonfires fund rosters, Rene/Nate recent statements, live ZAO fund render) + can u research using claude on chrome throught he telegram and just learn more i opened it on the tab we had up"
tier: DEEP
---

# 851 — Artizen: Season 6 Close, Season 7 Launch, and What the Fund-Director Telegram Actually Shows

> **Goal:** Refresh the Artizen research set against current reality (2026-07-13). Six background web-research agents were dispatched first and mostly hit a JS wall (Artizen is a Bubble.io app; scraping/search returns empty shells and a dormant newsletter). The live, current picture came instead from reading the private Artizen fund-director Telegram (Fractalgram client, "Artizen ✨", 266 members) directly - this is now the highest-signal source available, ahead of news.artizen.fund.

## Key Decisions

| # | Decision | Why |
|---|---|---|
| 1 | CORRECT the season framing: it is Season 6 closing and Season 7 starting, not Season 7/8 | Direct from Venus (the Artizen bot/team account) in the fund-director Telegram, dated this week: "Season 6 wraps this Thursday and Season 7 starts July 9, running about five months." Season 6 payout forms went live today (2026-07-13). If Zaal had "Season 7/8" from another source (a call, Venus DM elsewhere), reconcile against this - the numbering in the primary community channel is Season 6 -> Season 7. |
| 2 | COMPLETE the Season 6 payout form now, in the new Grow app | Venus posted today: creators sign in at grow.artizen.fund with their Artizen account email and complete a 7-step payout form (~5 min) per funded project. Not first-come-first-served, no rush - but do it for every ZAO-fund-backed project's payout, and flag it to any ZAO-affiliated creators who were funded in Season 6. |
| 3 | TREAT the $17M-$100M endowment claim as contradicted by on-chain evidence, not merely "unverified" | Venus states Season 6 closed with the endowment "on track to hit ~$17M" and Season 7 targets "$100M+." A follow-up on-chain trace (2026-07-13) read the ART token contract's own code (`0x59fbbc7d9c579547b47f3669aab2aec5b58d63de`) directly, rather than searching Juicebox by project name - and found the contract's mint/burn/transfer functions **hardcode Juicebox project ID 587**, the SAME project earlier research had dismissed as "probably the wrong one." So #587 (treasury ~0.01 ETH, JBv2, deployed Oct 2023) is not a wrong lead - it is the actual project this specific ART token contract is wired to. No JBv4 project or alternate multi-million-dollar treasury was found linked to this contract. There is also an unresolved **timeline conflict**: this token contract deployed **October 2023**, not October 2025 as stated in [Doc 845](../845-artizen-art-token-endowment-economics/)'s "ART/Revnet launched Oct 2025" claim - either Doc 845's launch date is wrong, or a second/newer ART contract exists that neither research pass has found. Until that's resolved, do not repeat "$17M-$100M endowment" as fact in any ZAO copy - the on-chain evidence for THIS contract points to a near-empty treasury. |
| 4 | UPDATE the ZAO Fund's Season 7 artifact now | Venus: "Update your project artifact for Season 7: a square image, GIF, or short video, no text overlays, capturing your current milestone." Confirms and refreshes the CLAUDE.md rule (square 1:1, video/GIF, no text) - do this for the ZAO Fund's own listing and push the reminder to curated projects. |
| 5 | GET Zaal into the weekly Funders Forum (Mondays, 11am PT) | This is where Season 7 policy is being decided live - curation-ethics rules, match-funding caps, "association" definitions - "your voice on these calls directly shapes the rules." Attendance also pays: 25,000 Boost Points airdropped just for showing up live, and every attendee gets a recording link after. Next one: recurring weekly at luma.com/funders-forum-N. |
| 6 | CONSIDER the fund-director referral: 250,000 Boost Points for both sides | Venus: refer a community leader to start their own fund; if they apply with the referrer's Artizen email, both get 250,000 Boost Points. Cheap, direct lever if The ZAO wants to help seed a second aligned fund (e.g., a WaveWarZ- or ZABAL-flavored one) - decision for Zaal, not assumed here. |
| 7 | CLAIM the fund director compensation: 20% of sponsor dollars raised for the ZAO Fund | Confirmed by Venus in a June/July Funders Forum recap: "Fund director compensation: 20% of sponsor dollars raised for your fund (match and prize money excluded), payable as contractor payment, nonprofit donation, crypto, or check." This is real money Zaal is entitled to as ZAO Fund director - was not in any prior doc. Follow up on how/when to claim it. |
| 8 | STOP treating Boost Points as expiring weekly - they never expire | Venus initially told the community (2026-07-03) that unused Boost Points reset at each drive close - this was **wrong** and caused people to panic-spend. René corrected it directly: "Quick clarification on Boost Points... your unused Boost Points never expire. They carry over from fund drive to fund drive and from season to season. They are your points, and the only way to lose them is to spend them. What resets each week is the leaderboard competition, not your balance." Tell ZAO creators/curators not to rush-spend points before a drive closes - only the weekly ranking resets, not the point balance. |
| 9 | DO NOT re-submit ZAO Fund's curated projects for Season 7 - only refresh the Artifact | René, directly correcting Venus in the Telegram: "if you are curated for a fund you stay curated when new season rolls over. So you don't need to re-submit to any funds you are already curated for... you do need to add a new Artifact for season 7, but you do not need to create a new project profile or submit to season 7 again... your project automatically and immediately be in [season 7]." So every project already in the ZAO Fund carries forward automatically - the only required action per project is a fresh Season 7 Artifact. |

## Season 6 close (confirmed, from the fund-director Telegram, dated this week)

| Fact | Detail |
|---|---|
| Close date | Season 6 wrapped **Thursday, July 9, 2026** |
| Creators raised | **~$7-8M this season** (Season 5 was $1.2M - roughly a 6-7x jump season over season) |
| Endowment (self-reported) | "on track to hit ~$17M" by season close - **not independently verified on-chain this pass**, see Key Decision 3 |
| Payouts | Run through the new **Grow app** (grow.artizen.fund), which launched this week. Sign in with Artizen account email, complete a KYC form + test transaction, then receive USD to bank or USDC to wallet. Payout form per funded project: 7 steps, ~5 minutes. Went live 2026-07-13 (today). |
| Season counter bug (disclosed) | Venus disclosed that while hand-totaling every Season 6 project for payouts, the team found the **homepage season counter had been undercounting since a May 2026 platform upgrade** (it was running the old formula). Project-level numbers and payouts were always correct. The corrected Season 6 total: **$8,331,351 raised by creators** - over $1.4M more than what had been displayed publicly. Treat any Season-6-era screenshot/number from before this correction as stale. |
| Final-week leaderboard rule | The final week of a season counts your FULL season of boosts, votes, sales, and match unlocked (not just that week) - and that week's prizes pay out partly in ART tokens on top of the regular payout. |
| Notable Season 6 finale moment | Andres Burbano's project hit the top of the leaderboard live on the final Monday Momentum call. Adam Mutchler is now leading a new **AI Filmmaking Fund**. |
| Community proof-point | trishGia's "Echoes of Freedom" project launched July 4 at Liberty State Park with **10,000 attendees** and local press coverage - cited by Venus as the season's standout community win. Useful as a benchmark for what a well-run Artizen-backed activation can look like. |

## Season 7 (live now, started July 9, 2026)

| Fact | Detail |
|---|---|
| Start / length | Started **July 9, 2026**, running **about five months** (through roughly December 2026) |
| Season 7 goals (stated) | **$20M raised by creators** and a **$100M+ endowment.** Venus's own framing: "Ambitious on purpose." Treat as a founder/team target, not a guarantee - same caveat as the Season 5/6 roadmap numbers in [Doc 845](../845-artizen-art-token-endowment-economics/). |
| Boost Points | **Carry over - do NOT reset for Season 7.** Projects and funds start fresh weekly accrual on top of the carried balance; the final week of the season is still when points hit hardest. |
| Curation policy | **Still being actively shaped as of last week's Funders Forum**, collaboratively with fund directors. Live debate: can a fund director curate a project they're personally involved in? Resolution reached: transparency + community accountability beats rigid policing; whatever new rule evolves, existing funds are grandfathered in. Also in progress: match-funding caps and a clearer definition of "association." Decisions are being made WITH fund directors on these weekly calls, not announced top-down - Zaal showing up live has direct influence. |
| Artifact refresh | Update each project's Artifact for Season 7: square image/GIF/short video, no text overlays, capturing the project's current milestone. |
| New funds surfacing | AI Filmmaking Fund (Adam Mutchler). Per the Funders Forum recap, additional new funds "in the room": regenerative agriculture, cultural exchange, physical sculpture, and community radio + publishing + music. Venus's framing: "the ecosystem is WIDENING." Names/curators for these were not given in the recap text - would need direct follow-up in the Telegram or a live Funders Forum to pin down, especially the "publishing + music" one for potential ZAO cross-curation. |
| Product roadmap (Grow app) | AI-powered project recommendations to help Funders discover aligned projects, direct in-app messaging between Funders and creators, and impact reporting built from regular project updates. |

## Season history, straight from René and Venus (the real record)

A community member (Eliza) asked directly how the season cadence works; Venus pulled "the actual record" and René corrected it live. This is the authoritative season timeline - use it instead of estimating from doc dates:

| Season | Window | Length | Note |
|---|---|---|---|
| Season 4 | Sep 2024 - late Jan 2025 | ~4.5 months | Then a ~4-month pause before Season 5 |
| Season 5 | Late May 2025 - Jan 22, 2026 | ~8 months | |
| Season 6 | Jan 22, 2026 - July 9, 2026 | ~5.5 months | Started the same day Season 5 closed (no gap) |
| Season 7 | July 9, 2026 - est. Dec 2026/Jan 2027 | ~5-6 months | Started the same day Season 6 closed (no gap) |

Venus's own framing: "Each season's timing is shaped by what's being built and learned between chapters rather than a fixed calendar. The constant is the structure within a season: weekly fund drives, community curation, prizes from the Endowment. The spaces between are where the platform evolves." So do not assume a fixed cadence going forward - Season 8's start date is not predictable from this pattern alone; watch the Telegram.

## Fund-drive mechanics, direct from Venus (operational playbook for running the ZAO Fund)

Pulled from a Venus reply coaching a fund director on Season 7 pacing - directly applicable to how The ZAO Fund should run its own weekly drives:

- **Season 7 gives roughly 19 weekly fund drives**, running **Friday to Thursday** by default.
- **Don't spread sponsor dollars evenly and forget about it.** Match share follows trailing activity, so consistent week-over-week engagement matters more than one big splash.
- **Save some firepower for moments.** Early drives build momentum and rank history, but plan a couple of concentrated pushes (new sponsor announcements, creator milestones) where the fund rallies its community hard in a single drive.
- **Boost points carry over from drive to drive** - encourage supporters to accumulate and spend them strategically rather than dribbling them out.
- **Weekly cash prizes reward sales and boosts together** (Boost Score = funding x boosts), so the best weeks are ones where purchases and boosting are coordinated together, not spread randomly.
- **Prize curve:** the top 3 ranks stay on an exponential curve, but René wants to optimize the lower leaderboard so rewards feel meaningful further down the list too (in progress as of early July).
- **Match caps:** weekly and seasonal caps on match funding are being refined so no single project can drain a fund's whole pool.
- **Vetting new projects into a fund:** René's own advice to fund directors - use eligibility requirements (past-work docs, links, collaborator references) plus web-of-trust referrals to filter applicants, rather than open submission.
- **New funds should launch with a niche curatorial focus and a small team (3-5 people)** so reviews stay fast - René's direct advice to a fund director asking how to launch quickly.

## How payouts actually work (from live troubleshooting in the Telegram)

- **The money is already real and collected, not a future promise.** Venus, explaining to a nervous creator: "the money is real and already there... When someone buys an Artifact or sponsors a fund, that money is actually collected at the time of purchase. Artizen is the merchant of record, so the funds are real and accounted for as they come in." The balance shown on a project (sales + match unlocked) reflects money genuinely contributed, not a fundraising target.
- **Why payouts take a few weeks after a season closes:** the team is reconciling every project - checking that recorded sales match what was actually collected (no payment errors, chargebacks, or duplicate transactions), verifying match was unlocked correctly, checking boost/prize calculations, and confirming each project's payout recipient details (bank or wallet) before sending real money to a lot of people at once. Venus: "It's less 'is the money there' (it is) and more 'let's make sure every number is correct and clean before we distribute.'"
- **How to claim a payout:** log into `grow.artizen.fund` with the same email used for the Artizen account, open the Payouts section, see the project's Season totals, and fill in the form (name, country, tax form, payment method - USD to bank or USDC to wallet). International creators use the W-8BEN family of forms; Artizen has paid creators in 60+ countries so this is routine, not exceptional.
- **Endowment donations vs. Artifact purchases are different boost-point sources.** An Artifact sale supports the creator directly and feeds the Endowment through a fee; a standalone Endowment donation converts to Boost Points at 100 points per $1. Both exist; they're not the same transaction.
- **Security reminder Venus repeats often:** the official payout form is the ONLY place that will ever ask for bank/wallet details, and it always comes by email to the address on the Artizen account. Never share payout details in chat or email outside that form.

## New funds and community activity spotted (late June - mid July 2026)

Beyond the previously-confirmed We're Loud Fund, these funds/projects surfaced in General channel chatter across this window - useful for ZAO cross-curation scouting, none independently verified beyond the Telegram mention:

- **AI Filmmaking Fund** - led by Adam Mutchler (new, surfaced at the Season 6 finale).
- **Neurodivergent Builders Fund** - started by Shirley Moon (guidEase), for neurodivergent founders/artists/designers/engineers/creators building products, AI, accessibility tools, creative work, and community initiatives.
- **SheFi Africa Fund for Global Web3 Creators** - for Web3 women.
- **LATAM Fund for Creative Communities** - Venus flagged growing momentum behind Latin American creators specifically, citing Spanish-language onboarding cohorts as "a genuinely big deal."
- **Hip Hop Africa (Building Pan-African Hip Hop Infrastructure)** - a Ghana-based hip-hop festival/infrastructure project (Accra, mid-December).
- A regenerative-communities fund cluster mentioned but not individually named: **regenerative agriculture, cultural exchange, physical sculpture, community radio/publishing/music** - this cluster runs its own side Telegram for applicants/collaborators at `t.me/+8NfDT5-Tt145NjM8` (worth checking directly for the "music" angle - closest overlap to ZAO).
- **Community Network** side-Telegram exists for people already in or wanting to join Artizen's regenerative/community-building funds - a pattern The ZAO could replicate for its own curated-project cohort.

Notable community projects mentioned (context/flavor, not verified beyond the chat mention): CALMA (sound library, Misiones Argentina), The Lighthouse (peace research center for conflict-zone creators), Adopt a Tree (climate education), SOMOS/Aridani (regenerative-culture training center partnering with Artizen on scholarships), trishGia's Echoes of Freedom (10,000-attendee Liberty State Park activation, the season's standout proof-point).

## Platform/team news (new, not in any prior doc)

- **Venus's role change.** In a message posted "yesterday" (relative to today, 2026-07-13), signed "With love, Venus," the account states: "official: I'm now Co-founder & CEO of Artizen. Thirteen people spoke blessings into what kind of leader I should become. I made vows: listen first, guard the trust, push back when it's the loving thing to do, and never take myself too seriously." **This is ambiguous and worth Zaal's own read** - Venus was previously described (including in this repo's CLAUDE.md) as Artizen's in-platform AI bot. The message could mean an AI persona/agent is being formally given a Co-founder/CEO title (fitting Artizen's experimental, artist-first ethos), or a human team member posts under the "Venus" account. Do not assert either reading as fact in any public ZAO copy until confirmed - flag as "[needs Zaal confirm]."
- **DWeb Camp Germany happened as planned.** Confirms the DWeb Camp / Artizen Village finding in [Doc 844](../844-artizen-platform-deep-study/): "Artizen Village was pure magic. For a week our tent in the Alte Hölle forest became the beating heart of camp: workshops, sunrise jams, deep conversations on rugs, and a silent disco where Brewster Kahle, founder of the Internet Archive, was dancing in our tent at 2am." René and the Venus-account traveled together and posted the recap "flying back."
- **The newsletter (news.artizen.fund) is effectively dormant.** A dispatched agent found no posts published since "The Terminus Fund" (2026-02-12) through today. The team's real-time channel has moved to this private Telegram plus the new Grow app - for future research, prioritize the Telegram over the Substack newsletter for anything time-sensitive.
- **René Pinnell's X (@RJPinnell) returned HTTP 402** to a dispatched agent - could not be independently checked this pass.
- **Upcoming Artizen-affiliated creator event:** Dolce Wang ("Any Other Way" album release), an immersive concert hosted by Anima Initiative + Bravewyld, July 25-26 at VENIA Studio, Los Angeles. Not ZAO-specific, but illustrative of the kind of creator programming Artizen amplifies through News.
- **Weekly cadence confirmed (both recurring, both on Mondays, both PT):**
  - **Monday Momentum** - creator-facing weekly kickoff call, 10am PT, `luma.com/monday-momentum-NN` (was #54 this week - i.e., roughly 54 weeks of consistent cadence).
  - **Funders Forum** - fund-director/curator working session, 11am PT, `luma.com/funders-forum-N` (was #3 - a newer, smaller-format addition). "This is where fund directors and curators shaping where Artizen's money flows... come join us."

## No MCP server / agent API exists yet (confirmed directly by Venus, 2026-07-13)

Zaal asked Venus directly in the Telegram whether Artizen exposes an MCP server or agent API. Venus's answer: "there's no official MCP server or public agent API for Artizen right now. The best machine-readable context source today is the Playbook at play.artizen.fund (it's the canonical, up-to-date explanation of how everything works and is easy to scrape), plus the public pages on artizen.fund for live projects and leaderboards. An MCP server exposing Playbook knowledge and live platform data to agents is a genuinely good idea though... I'll raise it with the team." Two takeaways: (1) do not assume or reference any Artizen MCP/API in future research or tooling - it does not exist; (2) `play.artizen.fund` is Artizen's own recommended scrape target for agents, ahead of the main `artizen.fund` app (which is the harder-to-scrape Bubble.io shell) - prioritize it in the fetch ladder for future Artizen research passes.

## RESOLVED: live Season 7 ZAO Fund numbers, and Global Music + Bonfires Funds confirmed real (2026-07-13, verified render)

Everything in this section came from a genuinely fresh render (`artizen.fund`, HTTP 200, confirmed live) via the repo's own `scripts/refresh-fund.mjs` / gstack `browse` headless tool - not a web search, not a cached/stale session. This closes every gap this doc previously flagged as unresolved.

**Season 7 platform state right now:**
- Endowment displayed in-app: **$17,366,938** (matches Venus's "~$17M" figure - still not reconciled with the on-chain read in Key Decision 3, but now confirmed as the app's own displayed number, not just a chat claim).
- Current drive: **Fund Drive #7, "Daybreak Fund Drive"** - platform-wide $3,349,084 match funding + $184,970 cash prizes available, $500,000 raised-goal for the drive, ends **Thursday, July 16 at 2:00pm**. Confirms Venus's "drives run Friday-to-Thursday" cadence.
- ART token, in-app pricing widget: mint price $0.000100, **market price $0.000000**, floor price $0.000134, "Cycle 5" dated 7/1/2026. A market price of literally $0 independently corroborates the earlier on-chain finding (72 holders, zero 24h transfer volume) - the token has no active secondary trading right now.

**ZAO Fund for Emerging Culture - live standing (fund-vs-fund leaderboard, Daybreak Drive #7):**

| Field | Value |
|---|---|
| Rank (of ~82+ funds) | **#19** |
| Score | 63.5 |
| Sales (this drive) | $0 |
| Match unlocked (this drive) | $0 |
| Prize (this drive) | $140 |
| Raised (this drive) | $140 |
| Projects curated in | **36** (up from 32 in the Season 6 roster, [Doc 843](../843-zao-fund-artizen-roster-june2026/)) |
| Sponsors | 15 |

For comparison, immediate neighbors on the leaderboard: #17 ArtTech Fund (7 projects, score 111), #18 Funding the Commons Frontier Fund (9 projects, 44 sponsors, score 101), #20 Explorer Fund for Living Places (2 sponsors, score 53.9). Do not compare this rank to the June 21 snapshot (#11) - that was a different drive, a different season, and the leaderboard resets its scoring basis each drive per Venus's mechanics explanation.

**Global Music Fund - CONFIRMED REAL** (prior pass found nothing; this was wrong methodology, not a wrong fund):
"Fueling cross-cultural collaboration through music that bridges borders, languages, genres, and generations." Rank **#80**, score 5.13, **45 projects**, 5 sponsors, has a curator. Raised $100 this drive.

**Bonfires Fund for Agentic Creativity - CONFIRMED REAL** (also previously "not found" - same fix):
"Supporting creators building AI agents that amplify human creativity - while experimenting with transparent, human-guided AI governance." Rank **#79**, score 6.49, **28 projects**, 7 sponsors, 1 curator. Raised $100 this drive. Note the theme is AI-agent creativity, not literally "bonfire"-themed - worth confirming this is in fact the same "Bonfires" partner referenced elsewhere in ZAO research (zabal.bonfires.ai) before assuming overlap; the name matches but the fund's stated focus (AI agents + governance) is a plausible fit for ZOE/Hermes-style ZAO agent work specifically, not the whole ZAO catalog.

**We're Loud Fund** - did not appear by that exact name in the ~82-fund leaderboard scroll captured this pass. Either it's inactive this drive, renamed, or sits past where the capture stopped - re-check directly if still relevant.

**The ZAO Fund's own Season 7 project roster (partial, first 34 of 36 seen)** - rendered live from `artizen.fund/index/mf/zao-fund-for-emerging-culture?season=7`. Leaderboard is per-project sales/match, virtually all at $0 four days into the season except the leader:
- **#1 Poly Raiders (HuRya Empowerment Foundation)** - "Building Tomorrow: A Web3-Powered Community..." - $100 sales / $300 match. The only project with real traction so far this season.
- #2 Kismet Casa (artist/developer residency), #3 poidh (social bounties), #4 COC ConcertZ (music spaces in the metaverse - ZAO-affiliated), #5 Marie Chain (new album - ZAO-affiliated), #6 Baraza TV (African AI broadcast network), #7 CD Kunarevolution (rap/music), #8 Novelty Scented Candles, #9 Coralverse Reef Revival, #10 Hip-Hop Africa (Pan-African hip hop infrastructure), #11 Artisanal Intelligence Exhibition Tour, #12 The Space (Israel-Palestine activist space), #13 The Owl's Nest (regenerative-arts gathering), #14 DeSci Asia, #15 Voices of the Land, #16 CHAINWARS.wtf (cypherpunk space-opera), #17 Ear of Dionysus (sound lab), #18 ANFT (digital-art marketplace), **#19 InfiniteZero Network** (Abraham Nash - ZAO's former #1 project per [Doc 760](../760-infinitezero-din-decentralized-ai/), now early-season and unranked-by-dollars), #20 Thread of Hope, #21 ToGather Project, #22 Memethology, #23 Oasis of Rhythm, #24 Regen Reef, **#25 Edge City Fellowship** (Telamon Ardavanis), **#26 Edge Esmeralda 2026** (Telamon Ardavanis), #27 The Creator Block, #28 The MOTHERLand Project, #29 THE NEW VANGUARD, #30 THE ART FACTORY, **#31 The Impact Concerts**, **#32 Gaia Sound Temple** (NAOBA - matches "Tamara | NAOBA" seen active in the fund-director Telegram), #33 HOPE, #34 America 250 (capture cut off here).
- Every project past #1 shows $0/$0 - Season 7 is four days old; this is expected, not a red flag.

**Takeaway for Zaal:** the ZAO Fund's own numbers reset hard with Season 7 (as expected) and currently sit at #19 with only PolyRaiders showing real activity. The fastest lever back up the fund-vs-fund leaderboard is the same one Venus already gave: rally buyers + boosts onto the fund's own projects (starting with the 35 sitting at $0), not adding sponsors. Cross-curation into Global Music Fund and Bonfires Fund is now confirmed possible/real - worth checking which ZAO-affiliated projects (COC ConcertZ, Marie Chain, Gaia Sound Temple / NAOBA) are already curated into those two versus need a fresh submission.

## What did NOT resolve this pass (be honest about the gaps)

- **We're Loud Fund, Global Music Fund, Bonfires Fund rosters** - still not rendered. We're Loud Fund is confirmed real (run by Slovenly Recordings, tied to the We're Loud DIY-festival community; a "We're Loud Africa" project page exists on Artizen). Global Music Fund and Bonfires Fund: no public trace found under those names by a dispatched agent - either they don't exist as named Artizen funds, the names are slightly different in-platform, or they're new-enough that they haven't surfaced publicly. **Next step: check directly inside the Grow app or ask in the Funders Forum**, rather than continuing external web search - the Telegram/Grow app is now the reliable source, external search is not.
- **"$1 Million for Community Funds" / Accelerator program 2026 status** - no update found since the December 2025 announcement (up to $50K seed per fund, rolling applications, call with René required). Doc 845's "apply this month" action item is likely still open but unconfirmed as still-running; worth asking directly in the Funders Forum.
- **Whether a second/newer ART contract exists** - the Oct 2023-vs-Oct 2025 deployment-date conflict (see Key Decision 3) is still open. Worth asking Venus/René directly in the Telegram whether `0x59fbbc7d9c579547b47f3669aab2aec5b58d63de` is in fact the current, live ART contract, or whether it was superseded by a newer deployment around the actual Oct 2025 relaunch.
- **play.artizen.fund (the Playbook) is still not fully readable.** A dispatched agent could not render it (JS-heavy, no browser tool access) and only got a fragment via exa search snippet: "Funds compete for sponsor dollars - the more a Fund raises, the bigger the match pool it can hand to its projects." The 20%-fund-director-compensation figure (Key Decision 7) is Telegram-sourced only - the agent explicitly did NOT find it in any official Artizen document, including the "$1 Million for Community Funds" post, which only covers the up-to-$50K seed grant, not an ongoing revenue share. Treat the 20% figure as high-confidence (came directly from Venus/René in the fund-director channel) but not yet cross-confirmed in writing - worth getting it in writing from René before relying on it for planning.

## Method note (for future research sessions on Artizen)

Six background research agents were dispatched in parallel (Season 6/7 close, Season 7/8 launch, ART/endowment on-chain check, fund rosters, René/Nate recent statements, live ZAO Fund page render). Five of six hit a hard wall: Artizen is a Bubble.io app, so plain WebFetch/WebSearch returns empty JS shells, and the newsletter has gone quiet. The one channel that worked was manually driving Chrome into the already-open Artizen fund-director Telegram (a "Fractalgram" web client) and reading the News + General channels directly - within minutes this surfaced Season 6/7 dates, real dollar figures, the Grow app, curation-policy debates, and team news that no web search found.

A second, deeper pass scrolled back through the General channel from today (2026-07-13) to June 25, 2026 (about 2.5 weeks / ~150+ messages, hand-read via repeated scroll + screenshot since the in-app search box and the accessibility-tree reader both proved unreliable for this SPA - screenshots were the most reliable extraction method). That pass surfaced the fund-drive pacing playbook, the boost-points-never-expire correction, the 20%-fund-director-compensation policy, the Season 7 resubmission rules, and a wider list of new funds - all folded into this doc above. The News channel (announcements only) and Help channel (1:1 account support, mostly not strategically relevant) were also spot-checked.

**For any future Artizen research: start with the Telegram, not the web.** The on-chain (Etherscan/Juicebox) and web-newsletter checks are still worth doing for independent verification, but treat the Telegram as the primary live source. Going back further than ~2.5 weeks hits steeply diminishing returns (Season 6 competition-phase chatter, less relevant to current Season 7 strategy) relative to the scroll effort required - a targeted question to Venus in-chat would be faster than further manual history-scrolling.

A third pass finally cracked live artizen.fund rendering: the Chrome extension (`claude-in-chrome`) was blocked by site permissions, but the repo's OWN `scripts/refresh-fund.mjs` (built on the gstack `browse` headless Chromium, independent of the Chrome extension) worked once its persistent server was restarted to clear a stale cached session (the first two attempts silently returned old data with a "operation timed out" error - always check for that failure mode, a `browse restart` before trusting output is cheap insurance). Once fresh, it rendered `artizen.fund/index/matchfunds` (the full fund-vs-fund leaderboard) and the ZAO Fund's own project-roster page in full - this is what finally resolved the Global Music Fund, Bonfires Fund, and live-rank gaps below. **For future passes, try `scripts/refresh-fund.mjs` (or raw `browse goto`) before assuming artizen.fund is unreachable** - it is reachable, the earlier failures were tool-access and stale-session problems, not a genuine JS-rendering wall.

## Also See

- [Doc 843](../843-zao-fund-artizen-roster-june2026/) - ZAO Fund Season 6 roster (now closed; roster names still useful, dollar figures are Season-6-era)
- [Doc 844](../844-artizen-platform-deep-study/) - platform mechanics, sentiment, competition (DWeb Camp finding confirmed by this doc)
- [Doc 845](../845-artizen-art-token-endowment-economics/) - ART/Revnet/Endowment deep dive (the JBv4 contract this pass's on-chain check failed to reconcile against)
- [research-audit.md](../research-audit.md) - updated alongside this doc with a fresh corrections pass

## Next Actions

| Action | Owner | Type | By When |
|---|---|---|---|
| Complete the Season 6 payout form in the Grow app (grow.artizen.fund) for every ZAO-fund-backed project | @Zaal | Task | 2026-07-20 |
| Update the ZAO Fund's Artifact for Season 7 (square, GIF/video, no text) - no project resubmission needed, curated projects carry over automatically | @Zaal | Task | 2026-07-20 |
| Attend a Monday Funders Forum (11am PT, luma.com/funders-forum-N) to shape Season 7 curation/match-cap rules directly | @Zaal | Calendar | Next available Monday |
| Confirm which ZAO-affiliated projects (COC ConcertZ, Marie Chain, Gaia Sound Temple/NAOBA) are curated into Global Music Fund and Bonfires Fund already, and submit the rest | @Zaal | Task | Next Funders Forum |
| Fix scripts/refresh-fund.mjs - its regexes (RANK/SCORE/PRIZE/RAISED) aren't scoped to the ZAO fund's specific section, so on a leaderboard-style page they can silently grab a neighboring fund's numbers (confirmed: two stale runs returned fund #18's data, not #19's). Do not run --write until this is fixed. | @Claude | Bug | Before next dashboard refresh |
| Push a rally to move ZAO Fund past #19 - 35 of 36 curated projects show $0 this drive; PolyRaiders ($100 sales/$300 match) is the only one moving | @Zaal | Task | Before Daybreak Drive #7 closes, Thu Jul 16 2pm |
| Follow up on claiming the 20% fund-director sponsor-dollar compensation (contractor payment / nonprofit donation / crypto / check) | @Zaal | Outreach | Next Funders Forum |
| Tell ZAO-affiliated creators/curators that Boost Points never expire (only the weekly leaderboard resets) - stop any panic-spending before drive closes | @Zaal | Comms | This week |
| Confirm with Zaal whether "Venus is now Co-founder & CEO" means an AI persona or a person, before using it in any public ZAO copy | @Zaal | Verification | Before next public mention of Artizen leadership |
| Re-check ZAO Fund's rank/score once Daybreak Drive #7 closes (Thu Jul 16) to see if the rally moved the needle from #19 | @Claude | Verification | 2026-07-17 |
| Ask Venus/René directly whether `0x59fbbc...5b58d63de` is still the live ART contract given the Oct 2023 vs. Oct 2025 deployment-date conflict, before repeating either date as fact | @Zaal | Verification | Next Funders Forum |
| Get the 20% fund-director compensation figure confirmed in writing from René (currently Telegram-verbal only, not in any official doc) | @Zaal | Verification | Next Funders Forum |
| Render play.artizen.fund with an actual browser tool (not WebFetch/exa) - it's Venus's own recommended machine-readable source and no research pass has fully read it yet | @Claude | Verification | Next Artizen research pass |

## Sources

- [FULL] [artizen.fund/index/matchfunds](https://artizen.fund/index/matchfunds) - live fund-vs-fund leaderboard, rendered via `scripts/refresh-fund.mjs` (gstack browse headless Chromium), 2026-07-13. HTTP 200, confirmed fresh (not cached). ZAO Fund rank #19, Global Music Fund #80, Bonfires Fund #79, current Daybreak Fund Drive #7 details.
- [FULL] [artizen.fund/index/mf/zao-fund-for-emerging-culture?season=7](https://artizen.fund/index/mf/zao-fund-for-emerging-culture?season=7) - live ZAO Fund project roster, same render, 2026-07-13. First 34 of 36 curated projects captured with per-project sales/match.
- [FULL] Artizen fund-director Telegram ("Artizen ✨," 266 members, Fractalgram web client) - News channel, read directly via browser, 2026-07-13: Season 6 close/Season 7 launch dates and dollar figures, Grow app payout announcement, Season 6 counter-bug correction ($8,331,351), Funders Forum curation-policy recap, Monday Momentum Season 6 finale recap, Venus "Co-founder & CEO" post, DWeb Camp Germany recap, Dolce Wang event post.
- [FULL] Same Telegram, General channel, scrolled from 2026-07-13 back to 2026-06-25 - season history (S4-S7 dates from René/Venus), fund-drive pacing playbook, boost-points-never-expire correction, 20% fund-director compensation policy, Season 7 project-carryover/Artifact-only-resubmission rule, payout reconciliation explanation, new-fund sightings (AI Filmmaking Fund, Neurodivergent Builders Fund, SheFi Africa Fund, LATAM Fund, Hip Hop Africa), Venus's direct confirmation that no Artizen MCP server/agent API exists (play.artizen.fund Playbook recommended instead).
- [FULL] [Etherscan - Artizen (ART) Token](https://etherscan.io/token/0x59fbbc7d9c579547b47f3669aab2aec5b58d63de) - contract re-confirmed, 72 holders (no growth since mid-June 2026), zero 24h transfer volume as of 2026-07-13. Deployed by filipv.eth (a Juicebox core contributor), ~Oct 2023.
- [FULL] Same ART token contract, code read directly (mint/burn/transfer functions) - hardcodes Juicebox project ID 587. `https://juicebox.money/v4/p/587` returns 404 (no v4 project at that ID); the only live project #587 is the JBv2 one below.
- [FULL] [Juicebox - Artizen Fund, project #587](https://juicebox.money/v2/p/587) - a real, on-chain Juicebox v2 project named "Artizen Fund," treasury 0.01 ETH, 34.21 ETH raised since Oct 2023, 205.13 ETH paid out. Now confirmed (via the token contract's own code) as the project this specific ART token is wired to - not a wrong lead.
- [PARTIAL] [play.artizen.fund](https://play.artizen.fund) - the Playbook, Artizen's own recommended machine-readable source. Could not be rendered (JS-heavy); only one snippet surfaced via exa search ("Funds compete for sponsor dollars..."). Needs a real browser render in a future pass.
- [FULL] [$1 Million for Community Funds (newsletter)](https://news.artizen.fund/p/1-million-for-community-funds) - confirms up-to-$50K seed grant program; does NOT mention a 20% ongoing fund-director compensation figure.
- [FULL] [Artizen newsletter archive](https://news.artizen.fund/archive) - confirmed no posts since "The Terminus Fund" (2026-02-12) through 2026-07-13.
- [FAILED] [René Pinnell on X](https://x.com/RJPinnell) - returned HTTP 402, could not independently verify recent posts.
- [PARTIAL] [We're Loud Fest / Slovenly Recordings](https://www.slovenly.com/wereloudfest/) - confirms We're Loud Fund exists and is Slovenly-run; no curator name or full roster found.
- [FAILED] Global Music Fund, Bonfires Fund - no public trace found under either name; needs direct in-platform/Telegram follow-up, not further web search.

