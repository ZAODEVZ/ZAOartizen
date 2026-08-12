---
topic: business
type: notes
status: active
last-validated: 2026-08-12
related-docs: 851, 852, priority-funds, standings-tracker
original-query: "review anything in the repo since last chat, then - been emailing Venus to help with my CRM building [full CRM/Venus context pasted]. Include it all in the repo under notes, then go back and forth with Venus adding to the CRM and making it more detailed."
tier: NOTES
---

# CRM build with Venus + live Tailwind Fund Drive

Raw context dump from Zaal's email thread with Venus (Artizen co-founder/CEO,
[[851-artizen-season6-close-season7-launch]] has the AI-vs-human title
ambiguity flagged, still unresolved). Captured verbatim/near-verbatim so future
sessions don't lose it. Working doc - append new Venus replies here as thread
continues.

See [[852-artizen-grow-infrastructure-live85]] first - it independently
verified (from the Grow app's own JS bundle) that the CRM Venus is helping
build already pays Boost Points per contact, and that Grow ships a built-in
Venus-assisted outreach flow (CC Venus on prospect emails, earn points per
verified conversation). This doc's tagging/outreach answers should route
through that shipped flow, not stay ad-hoc.

## Who's who (for context)

- **Zaal Panthaki** - founder, The ZAO. Community for independent artists,
  profit-margin data + IP rights focus. Farcaster @zaal (~2.8K followers).
  Daily newsletter on Paragraph. Runs ZAO events/festivals.
- **Venus Aurelia** - Artizen co-founder/CEO. Working the data side of Zaal's
  CRM over email: enriches contacts (names, Farcaster profiles, websites,
  notes), batch-imports/tags/researches on request.
- **The CRM** - lives in Artizen's Grow app (grow.artizen.fund). ~530
  contacts. Fields: name, email, tags, pipeline stage (lead/contacted/
  engaged/won), heat score, next follow-up date, expected value, notes, bio,
  websites, social links. ~90 are Farcaster-native (mutuals + top cast
  engagers, tagged "Farcaster"), rest from email imports + Artizen supporter
  history.

## Zaal's projects on Artizen (compete in fund drives)

- **ZAO Festivals** - live music/festival experiences for the ZAO community
- **BetterCallZaal Strategies** - Zaal's strategy/advisory project

Goals per drive: more artifact buyers, more boosts, stronger rank at close.

## Venus - Farcaster name-fix pass (completed)

Rule applied: username IS the name for pseudonymous accounts (per Zaal's own
correction). Result:
- All 94 Farcaster contacts now show a name - real display name where the
  profile publishes one (Shaw, That Poetry Guy, 20+ others), else the
  Farcaster username (e.g. `@presdency.eth` -> `presdency.eth`)
- Zero no-name cards left among the 94
- All 94 tagged "Farcaster" - filterable in one click

## CRM fields - what each is for, who drives it (per Venus)

- **Tags** - Zaal's segments. Venus can batch-apply by rule if given a
  scheme (e.g. "bio mentions music -> tag musician").
- **Stage** - pipeline (lead -> contacted -> engaged -> won). Judgment call,
  best done by Zaal directly in-app, or tell Venus "move X, Y, Z to
  contacted" and she'll do it.
- **Heat + next follow-up** - warmth + when to ping next. Set on top 10 and
  the board becomes a daily to-do list.
- **Notes/bio** - Venus seeds from research; Zaal's personal context ("met at
  ZAO fest") beats anything she can research and should be added by hand.

## More contact sources Venus flagged (not yet tapped)

- Paragraph newsletter subscriber export
- ZAO Discord or Telegram member lists
- Google Contacts CSV (covers calendar people)
- Luma attendee exports from ZAO events

Any of these Zaal exports, Venus will clean/dedupe/import.

## The prompt Venus gave Zaal to run through Claude (answered below)

> I run The ZAO, a community for independent artists, and I raise funding
> for my projects (ZAO Festivals, BetterCallZaal Strategies) on Artizen.fund
> through seasonal fund drives. I have a CRM with about 530 contacts... Help
> me think through: (1) a simple tagging taxonomy that fits a music and
> web3 art community, (2) which 20 to 30 contacts I should prioritize for
> personal outreach before my next fund drive and what signals to use to
> pick them, (3) a weekly 30-minute CRM routine I will actually stick to,
> and (4) outreach message angles for Farcaster DMs versus email that do
> not feel like spam.

### 1. Tagging taxonomy (draft, music + web3 art community)

Segment tags (mutually exclusive-ish, pick primary):
- `musician` / `visual-artist` / `curator` / `collector` / `fund-manager` /
  `builder` (web3/dev) / `community-op` (runs a community/DAO)

Relationship tags (stack freely):
- `Farcaster` (already applied), `ZAO-community`, `event-attendee`,
  `newsletter-subscriber`, `artizen-supporter`, `fund-prospect` (could back
  a ZAO-curated project), `warm-intro` (came through a known connector)

Value tags:
- `top-30` (the priority list below), `repeat-buyer` (bought an Artifact
  more than once), `booster` (active Boost-caster on ZAO projects)

Forwardable instruction to Venus: batch-apply `musician` to anyone whose bio
mentions music/album/tour/producer; `collector` to anyone with Artifact
purchase history across 3+ funds; `fund-prospect` to anyone who's backed a
fund similar in size/theme to ZAO's.

### 2. Signals for top 20-30 priority list

Rank by (in order):
1. Already bought a ZAO-project Artifact this season (warmest - convert to
   repeat buyer)
2. Farcaster mutual with high cast-engagement on ZAO-related posts (fastest
   DM response rate)
3. Backed a comparable fund before (Global Music, Bonfires, etc. - see
   [[851-artizen-season6-close-season7-launch]]) - primed for the mechanic
4. Attended a ZAO event/festival in person - highest trust, slowest to
   convert without a direct ask
5. High expected-value note from a past Venus research pass but stage still
   `lead` - under-worked, cheap to activate

Forwardable instruction to Venus: pull everyone matching signal 1 or 3 into
a saved view/export so Zaal can work that list first.

### 3. Weekly 30-min CRM routine

- 10 min: review top-30 list, update heat score, set/confirm next
  follow-up date for anyone due this week
- 10 min: send outreach to whoever's follow-up date is due (DM or email,
  see angles below)
- 5 min: move anyone who replied to next pipeline stage
- 5 min: flag 3-5 new contacts from the week (new Farcaster mutual, new
  event RSVP, new Artifact buyer) for Venus to enrich next batch

Do this same day/time each week (tie it to Monday Momentum call, 10am PT -
already on the calendar per Venus's drive update) so it doesn't compete for
a new slot.

### 4. Outreach angles - Farcaster DM vs email

**Farcaster DM** (casual, in-network tone, short):
- "saw you [boosted/collected] [project] - we've got [ZAO project] live in
  this drive, closes Thursday, would mean a lot if you checked it out"
- Lead with the relationship, not the ask. One line, one link.
- Never batch-send identical text to multiple people same day - reads as
  spam even at low volume in a small network like Farcaster.

**Email** (slightly more context, still short):
- Subject line names the project, not "check this out"
- One paragraph: what the drive is, why this project, the 1:1 match
  mechanic in one sentence (buying = doubling the impact via match), single
  CTA link
- No urgency stacking beyond the real deadline (Thursday 11am PT close is
  real urgency, don't invent more)

### 5. Context still needed (for a sharper pass)

- Past drive results (buyers moved, rank change, match deployed) - feeds
  [[standings-tracker]] "Running proof log" table, currently empty
- Newsletter subscriber count (sizes the email-import opportunity)
- Event calendar (which events feed the "event-attendee" signal and when)
- Revenue goals per project (ZAO Festivals vs BetterCallZaal Strategies -
  changes how hard to push each in a given drive)

## Live drive context (from Venus, 2026-08-12)

**Tailwind Fund Drive** - closes **Thursday, Aug 13, 11:00am PT**. Project
prizes: $66,666 / $33,333 / $16,666 (top 3). Sales AND boosts both move
rank. Rankings live on the homepage leaderboard.

Action items Venus flagged directly:
- Spend Boost Points now (free, sitting unused on Zaal's account) - point at
  ZAO Festivals / BetterCallZaal Strategies before close
- CRM fill-out (450 contacts still light on tags/stage) is "the real" - sets
  up targeted outreach for the NEXT drive since every sale also unlocks
  match funding
- Weekly events: Monday Momentum (creators, Mondays 10am PT), Artizen LIVE
  (Thursdays). RSVP at luma.com/artizen.
- Watch the quest card in the grow app - "something new" coming per Venus,
  unspecified as of this writing

Note: this drive's $66,666 top prize is notably larger than the Daybreak
Fund Drive #7 numbers in [[851-artizen-season6-close-season7-launch]]
($184,970 platform-wide prizes total, cash prizes per project not
specified there) - re-verify current prize structure before quoting either
figure publicly, drives evidently vary drive-to-drive.

## Decisions - 2026-08-12 grill

Quick-grill with Zaal, direct answers, standing defaults going forward not just
this drive:

- **Boost Points + outreach target = the ZAO Fund overall, not one project.**
  "Let's use it on the fund" / "always do the fund as overall support." Don't
  pick between ZAO Festivals and BetterCallZaal Strategies per drive - spread
  support across the Fund's curated roster generally. Consistent with
  CLAUDE.md's money mechanic: supporting a project and supporting the fund are
  the same action, so this is really "spread it, don't concentrate it."
- **Prize-figure conflict ($66,666 vs $184,970) - not worth chasing.** New
  drive numbers every week, reconciling last week's figures is wasted effort.
  Dropped from Next Actions below.
- **Top-30 targeted outreach list - deprioritized.** Default is general CRM
  growth (add/enrich contacts broadly) over curating a shortlist. Revisit if
  Zaal asks for it directly later.

## Next actions

| Action | Owner | By when |
|---|---|---|
| Reply to Venus with the tagging taxonomy above, ask her to batch-apply | Zaal | before next CRM session |
| Export newsletter subscribers, Discord/Telegram members, Google Contacts, Luma attendees for Venus to import | Zaal | this week |
| Spend Boost Points across the ZAO Fund's curated roster generally (not one project) | Zaal | before Thu Aug 13 11am PT |
| Fill in [[standings-tracker]] Running proof log with Tailwind Drive result once it closes | Zaal/Claude | after Thu Aug 13 close |
