# ZAO Festivals - learnings + ideas log

A growing log from looping on ZAO Festivals. Each pass adds verified learnings + fresh ideas. Newest on top.

## Pass 4 - 2026-06-28 (community-owned models + roster)

### Learnings
- **zaostock.com/artists = the VISUAL-artist recruitment page** ("we are taking interest"), not the music
  lineup. Music lineup is a separate surface (/musicians). The artist data is DB-backed but the public split is
  visual vs music. (Zaal had earlier considered pulling the visual-artists page - it's still live.)
- **Community-owned festival/coop models (verified):** cooperative ownership uses CLASSES - artist-owners,
  worker-owners who earn lifelong membership through hours of service, each with elected board seats. The
  guiding principle is **"with, not for"** - the platform is defined by its users, self-determination built in.
  Free/DIY festivals run on negotiated venue deals + donations + **community crowdfunding** (validates the
  Artizen play exactly). Peer references: Subvert.fm (collectively-owned music marketplace), Artisans
  Cooperative (artist-owned Etsy alternative).

### Ideas
1. **"With, not for" as the brand principle** - sharper and more ownable than "community-owned." A festival
   built WITH artists and the crowd, not FOR them.
2. **Make "the crowd that funds it owns it" real with light ownership tiers:** artist-owners, crew-owners
   (volunteer hours -> standing), backer-owners. The artist CRM already has `volunteer_eligible` + `points_earned`
   - that is the SEED of worker-ownership. Formalize it even informally (a contributors' board, a say in the
   lineup, ZOLs-style credits).
3. **The Artizen crowdfund = the textbook "community crowdfunding a DIY festival"** - frame it that way to the
   web3 crowd; it's a proven model, not a novelty.
4. **Cite the peers** (Subvert, Artisans Coop) when pitching ZAO Festivals as artist-owned - shows it's a real
   movement, not a one-off.
5. **Resolve the /artists vs /musicians split** - one clear "artists" brand surface (music + visual), or clearly
   labeled lanes, so the brand reads cleanly.

## Pass 3 - 2026-06-28 (brand book shipped)

- Drafted the 1-page brand book -> `research/zaofestivals-brand-book.md` (naming system, palette, visual
  language, two-register voice, logo to-build, do/don't). Closes the "no documented system" gap.
- Still to learn: PALOOZA/CHELLA poster designs (brand history - need the actual files/screens), an existing
  ZAO Festivals logo if any, comparable COMMUNITY-OWNED festival brands (not the Coachella tier) as closer
  models, and the live artist roster (zaostock.com/artists, DB-gated).

## Pass 2 - 2026-06-28 (brand)

### Learnings
- **Current @zaofestivals voice:** casual + web3-native hype. "zm" is the house greeting (their "gm"),
  countdown-driven ("ZAO-STOCK in 195 days"), community-rallying ("Who's ready for the next ZAO-Festival??"),
  heavy on Spaces + RTs. The voice = hype, countdown, community-first.
- **Festival-brand principles (verified):** (1) a documented design SYSTEM - typography + primary/secondary
  colors + custom iconography + photo guidelines, in a brand book; (2) a MODULAR logo - a primary wordmark +
  a simple emblem that works tiny (avatar) to huge (stage scrim); (3) Instagram-worthy on-site moments are
  free branding (Coachella installations); (4) consistent storytelling recognizable at a glance.

### The ZAO Festivals brand, as it stands (read)
- **Signature device: the "ZAO-[pun]" naming system** - ZAO-PALOOZA, ZAO-CHELLA, ZAOville, ZAOstock. This is
  the strongest, most ownable brand asset already in hand. Lean all the way in: every chapter = ZAO + a
  festival name. Instantly recognizable, infinitely extensible.
- **Emerging visual language: navy #0a1628 + gold #f5a623, crowd silhouettes, stage light, hands up.** The
  106-agent Artifact pass converged on exactly this (the "Crowd Light Surge" aesthetic) - that IS the look.
- **Voice: "zm", countdown, community-first, hype** online - but LOCALLY (Ellsworth) flip to lead-with-music,
  zero-jargon. Two registers, same brand.

### Brand-building plan (ideas)
1. **Write a 1-page ZAO Festivals brand book:** the ZAO-[pun] naming rule, navy+gold palette, the silhouette/
   gold-light photo style, the "zm" voice + the local no-jargon register. One page so the 27-person team stays
   consistent. (Biggest gap - no documented system exists.)
2. **A modular mark:** a primary "ZAO Festivals" wordmark + a small emblem (works as an X avatar AND an Artifact
   corner). The naming is verbal equity; give it a visual anchor.
3. **A signature on-site moment at ZAOstock** - one Instagram installation (a gold-light arch, a WaveWarZ
   screen) people photograph = free branding toward the 4,000-resident goal.
4. **Codify "zm"** as the community ritual/greeting - small, but it's already organic; own it.
5. **Treat past posters (PALOOZA/CHELLA) as brand artifacts** - collect them; the lineage is brand equity.
6. **Consistent Artifact aesthetic across all ZAO projects** = a recognizable "ZAO on Artizen" look (navy/gold
   silhouettes) so the whole bloc reads as one family on the platform.

### To learn next (brand)
- Is there an existing ZAO Festivals logo/mark? (check zaostock.com assets)
- The PALOOZA/CHELLA poster designs (brand history).
- More of the voice (full post history via scraper).
- Comparable COMMUNITY-OWNED festival brands (not just Coachella) - closer models.

## Pass 1 - 2026-06-28

### Learnings (from the zaostock repo)
- **Artist pipeline is a real Supabase CRM.** Statuses: wishlist -> contacted -> interested -> confirmed ->
  travel_booked (+ declined). Plus a "cypher" feature (cypher_interested / cypher_role), artist points, and
  volunteer eligibility. The confirmed lineup lives in the DB (not in the repo).
- **The Grand is directly across the street from the Franklin Street Parklet** (the ZAOstock venue). Soul
  Benders played a Food-for-Health benefit there May 24; Zaal plugged in to build local relationships. It's a
  natural indoor stage / afterparty / co-programming partner.
- **Awareness goal: 4,000 of Ellsworth's ~8,000 residents** before Oct 3, via local relationships not ads.
  Local framing rule: lead with music, zero jargon, never mention web3/crypto to the Ellsworth crowd.
- The team has artist outreach templates, an artist rider, and a deal-memo template (docs/music/).

### Ideas (fresh)
1. **"Bring artists to the stage" maps 1:1 to the `travel_booked` pipeline.** The ZAO Festivals Artizen project
   should literally fund the travel line - "your $10 helps fly an artist to the stage." Concrete, honest, ties
   the ask to a real CRM stage.
2. **A ZAOstock Cypher** (the cypher feature) = recurring content + an Artifact source. Film a cypher, loop it,
   that's a moving Artifact + a teaser reel.
3. **The Grand co-programming** - an indoor afterparty / second stage across the street. Doubles the day, gives
   sponsors an indoor option, and deepens the local relationship.
4. **Two-audience Artizen split.** The crypto crowd backs via Artizen; the Ellsworth crowd never sees crypto -
   they get "free music festival Oct 3." Keep the two funnels separate (the site already does this).
5. **Per-artist Artifacts.** Each confirmed artist mints their own $10 Artifact (their face/sound) - they sell to
   their fans, the ZAO Fund matches. Turns every artist into a fundraiser + gives the festival a roster of
   Artifacts.
6. **Document every local show** (Soul Benders pattern) - the social-media-owner gap. Each local gig = content +
   3 new local relationships toward the 4,000 goal.
7. **Heart of Ellsworth weekend co-promo** - ZAOstock is part of Art of Ellsworth (Oct 2-5); ride the town's
   existing press + foot traffic instead of buying awareness.

### To learn next
- The actual confirmed artist count + names (DB-gated - need Zaal or a zaostock.com/artists read).
- What the "cypher" actually is (a rap cypher? a collab track?).
- The latest @zaofestivals / @bettercallzaal posts (scraper available).
- The run-of-show / program for Oct 3.
