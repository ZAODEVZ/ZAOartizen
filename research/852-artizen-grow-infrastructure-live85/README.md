---
topic: business
type: market-research
status: research-complete
last-validated: 2026-08-07
related-docs: 844, 847, 849, 851
original-query: "meeting notes from Artizen LIVE #85: get a crew mandatory for every project; new infrastructure = Artizen Grow (storefront + gamified fundraising), CRM, sales pipeline, hyper personalized outreach, the win button; study Dolce Wang, Rene Pinnell, Ben Erwin"
tier: DEEP
---

# 852 - Artizen Grow Is Now a Full Growth Stack: CRM, Pipeline, Quests, and Provably-Fair Prize Draws

> **Goal:** Verify and expand the ZAO meeting notes from Artizen LIVE #85 (2026-08-06, https://youtube.com/live/d0pMPoK9zsY, guests Ben Erwin and Dolce Wang, hosted by Rene Pinnell). Method: Artizen's public pages are JS shells to scrapers, but Grow (grow.artizen.fund) turned out to be a Vite/React + Supabase app - NOT Bubble - so its full production JS bundle was downloaded and read directly (`/assets/index-7yGTabQD.js`, ~1.2MB, fetched 2026-08-07). Every UI string quoted below is verbatim from that bundle: this is primary-source verification of what is actually shipped, ahead of any announcement copy.

## The headline

Doc 851 recorded Grow as "the Season 6 payout app" with a roadmap of AI recommendations + messaging + impact reporting. Three weeks later the shipped app is much bigger: Grow is now Artizen's full creator growth stack - a CRM that pays Boost Points for contacts, a staged submission/claims pipeline, Venus-assisted personalized email outreach, and a six-category Quest system with cash pots that Venus pays out by buying winners' Artifacts. The meeting notes' "new infrastructure" list is real and live.

## Key Decisions

| # | Decision | Why |
|---|---|---|
| 1 | LOAD every ZAO contact into the Grow CRM now | Verbatim from the app: "Every contact you add to your CRM earns points. The more complete the profile, the more you earn, up to N points per person." Boost Points multiply dollars (Boost Score formula, see CLAUDE.md), so populating the CRM is free score. First-mover bonus exists: "No credited contacts yet. Add someone to your CRM and be the first." |
| 2 | RUN outreach through Grow's Venus-assisted flow, not ad-hoc DMs | Outreach Quests pay Boost Points per verified email: "Email a sponsor prospect about your fund, CC [Venus], and every verified conversation earns Boost Points." The built-in prompt has Venus draft per-person emails: "I'll list people... and their relation to me. Please help me draft personalized outreach emails for each." This IS the "hyper personalized outreach" from the meeting notes - it is shipped, gamified, and verified via CC. Our kit/ outreach drafts should be adapted to route through it. |
| 3 | WORK the Quest board as the weekly operating rhythm | Six live quest categories (verbatim category lines below) replace guessing where effort goes. Sprint and Raffle quests have direct cash: Collector's Cup pays "up to $12,000 in purchases from Venus" for top 3; hourly Raffle pots "start at $500 and grow dollar-for-dollar with that hour's sales." Time ZAO crew pushes to quest windows, not arbitrary weeks. |
| 4 | TREAT "the win button" as the Raffle Quest spin mechanic until the replay says otherwise | No literal "Win Button" string ships in the bundle; the button is labeled "Spin": "One press = one committed spin: a sealed seed rolls the pot, then draws one key from every key minted this window." Guaranteed winner each draw, provably fair (hash published in advance, seeds published after), drawn live on the Thursday show. The meeting-note term is almost certainly this mechanic as pitched on air - verify exact wording against the LIVE #85 replay before using "Win Button" in ZAO copy. |
| 5 | TREAT "get a crew" as strong guest advice, not platform policy | Per the ZAO team's meeting notes, making a team/crew mandatory for every project was a SUGGESTION raised by guest Ben Erwin (founder of The Polys / Academy of Immersive Arts and Sciences) on LIVE #85 - not an announced Artizen rule. Consistent with the app: the word "crew" appears zero times in the Grow bundle, but claims DO ship a "people" section where projects add up to 5 collaborators (name + email + context all required to count). So team-ness is structurally rewarded even though nothing enforces it. Coach ZAO projects to fill all 5 collaborator slots regardless: it costs nothing and matches where the platform is pushing. |
| 6 | STUDY the two LIVE #85 guests as models, not celebrities | Ben Erwin: creator/EP of The Polys (WebXR Awards), co-founder of the Academy of Immersive Arts and Sciences, Metaverse Standards Forum board, 25+ years community-building (Powersimple, 1997). The model for awards-show-as-community-engine - directly relevant to WaveWarZ/ZABAL formats. Dolce Wang: LA musician/multidisciplinary artist (theme parks, film, spatial audio, interactive media), ran "Any Other Way" immersive album-release concert July 25-26 2026 at VENIA Studio DTLA with Anima Initiative (already noted in Doc 851 from the Telegram). The model for an independent artist packaging an ambitious project Artizen wants to amplify. |

## What the Grow bundle actually contains (verbatim strings, fetched 2026-08-07)

### CRM + contacts

- "Every contact you add to your CRM earns points. The more complete the profile, the more you earn, up to [N] points per person."
- "No credited contacts yet. Add someone to your CRM and be the first."
- Keyword counts in the bundle: contact/contacts ~325 hits, leads 9, CRM 3, pipeline 4, outreach 13.

### Pipeline (submissions and claims move through gated stages)

- Creator side: "Loading your pipeline..."
- Admin side: "Set stage" with "Escape hatch: jumps anywhere, skipping the pipeline gates. Setting a stage clears any action-needed flag."
- Claim records carry review stages including `venus_reviewed_at` and Rene-approval fields - claims are reviewed by Venus and approved up the chain, i.e. a real staged pipeline, not a form drop-box.

### Outreach (the hyper-personalized machine)

- Category line: "Outreach quests reward you for personally bringing your people into Artizen."
- "Email a sponsor prospect about your fund, CC [Venus], and every verified conversation earns Boost Points." (director variant; a creator variant exists for fans/friends)
- Built-in Venus prompt: "Let's collaborate on email outreach to my fans, friends, and b[ackers]... I'll list people... and their relation to me. Please help me draft personalized outreach emails for each. - Person name #1: relation to me and anything that helps personalize..."
- Outreach responses are tracked per-claim in-app ("Outreach responses (N)", "+ Add an outreach response note").

### The Quest system (the gamified fundraising layer)

| Category | Verbatim category line |
|---|---|
| Karma | "Karma quests reward you for lifting up other projects. Give, and it comes back." |
| Outreach | "Outreach quests reward you for personally bringing your people into Artizen." |
| Network | "Network quests reward you for building your network inside Grow. Your people are your power." |
| Sprint | "Sprint quests are timed competitions. Race the clock, climb the leaderboard, win prizes." |
| Raffle | "Raffle quests are games of chance. Every sale buys you a ticket; one draw takes the pot." |
| Event | Event Quests (title present; category line not captured this pass) |

Named mini-games in the bundle: Fund a Friend, Send Love Letters, Bring Your People, Collector's Cup, Golden Hours, First Believer.

### Raffle vault mechanics (the likely "win button")

- "[Every hour] until the drive closes, the vault opens: one key from ALL keys minted since the window opened is GUARANTEED to win the pot. Pots start at $500 and grow dollar-for-dollar with that hour's sales up to $2[k?]..."
- "One press = one committed spin: a sealed seed rolls the pot, then draws one key from every key minted this window. Winners repeat, spins are unlimited, the close is the hard stop." (button label: "Spin")
- Provably fair: "The winning spin was sealed before the show started. The hash below was published in advance; if anything about the draw had changed, it would no longer match. After the vault opens, the seeds are published so anyone can replay every spin."
- "each creator wins at most once per quest"; "Winnings land as Venus buying Artifacts on the winning key's project. The final hour's spins happen live on the show."
- Sprint flagship: "A race to the podium. Collect from fellow creators to climb the standings. Top 3 at the buzzer win up to $12,000 in purchases from Venus."

### Collaborators (the closest shipped thing to "crew")

- Claims include a "people" section: collaborators with name, email, and context, validated (all three required to count), up to 5 per claim.
- Admin RPC `admin_add_collaborator_response` exists - collaborator responses are tracked like outreach responses.

### Stack note

Grow is Vite/React + Supabase (auth including wallet sign-in for Ethereum and Solana, Postgres RPCs). It is NOT Bubble - unlike artizen.fund itself. This matters operationally: Grow's bundle is readable with curl + grep, so future research passes can re-verify shipped features directly. Re-fetch the bundle path from https://grow.artizen.fund (the hashed asset name changes per deploy).

## What remains unverified (needs the LIVE #85 replay or Telegram)

| Claim from the meeting notes | Status |
|---|---|
| "Get a crew - mandatory for every project" | RESOLVED: this was a suggestion by guest Ben Erwin on LIVE #85 (per the ZAO team's own meeting notes), not an Artizen platform rule. Nothing in the app enforces it; the 5-slot collaborators section is the closest shipped structure. |
| "The Win Button" as an official feature name | Term not in the bundle (button says "Spin"). Confirm exact on-air wording. |
| Grow as "storefront" | The word does not appear; "growth cockpit for Artizen creators and funders" is the official framing (site meta description). Projects/claims/leaderboards give it storefront-like function. |

## Sources

- Primary: https://grow.artizen.fund production bundle `/assets/index-7yGTabQD.js` (fetched 2026-08-07); site meta description.
- Artizen LIVE #85, 2026-08-06: https://youtube.com/live/d0pMPoK9zsY (2h07m; auto-captions exist but YouTube rate-limited extraction this pass - pull the transcript on a later pass to close the two unverified claims above).
- Ben Erwin: thepolys.com/profile/ben-erwin, linkedin.com/in/powersimple. Dolce Wang: linkedin.com/in/dolcewang, "Any Other Way" press (Send2Press, July 2026).
- Prior art: Doc 851 (Grow as payout app + roadmap), Doc 844 (platform mechanics), rene-pinnell-digest.md.
