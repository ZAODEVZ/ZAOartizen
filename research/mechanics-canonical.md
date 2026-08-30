# Artizen mechanics - CANONICAL

**This is the single source of truth for Artizen platform mechanics in this repo.**
Every other doc, page, and kit file should LINK here instead of restating a formula, a match
ratio, a season date, or a prize rule. If you find mechanics restated somewhere else, replace
the restatement with a link to this file - one wrong copy is worse than one missing copy.

Last reconciled: 2026-08-30. Reconciled against: `research/artizen-mechanics-verified-telegram.md`
(2026-07-03), `research/851-artizen-season6-close-season7-launch/README.md` (2026-07-13),
`research/852-artizen-grow-infrastructure-live85/README.md` (2026-08-07),
`research/artizen-funds-how-they-work.md` (2026-06-28), `CLAUDE.md`, `TEAM-PLAYBOOK.md`.

> **Not yet reconciled against the meeting notes.** `meetings/raw/` (the Monday Momentum and
> Funders Forum notes, Apr-Aug 2026) and `meetings/mechanics-changelog.md` do not exist in this
> repo yet. When they land, re-run the audit against this file and update the Supersession log.

## How to read this

| Tag | Meaning |
|---|---|
| CONFIRMED | Stated by Rene or Venus in a primary channel (fund-director Telegram, Funders Forum recap, the official playbook), with the source and date given. |
| TODO-VERIFY | Repo docs disagree, or the claim has no dated primary source. Do NOT quote publicly. Check the live Artizen Playbook at play.artizen.fund, or ask Venus in the fund-director Telegram, then update this file. |

Artizen changes mechanics mid-season and announces it in the Telegram and on the weekly calls,
not in writing. A claim here is only as good as its date - check the date before you quote it.

---

## 1. How you win: the Boost Score

**Boost Score = (total sales + total match unlocked) x total boost points received / 100**

CONFIRMED - the official playbook (play.artizen.fund), restated by Venus in the fund-director
Telegram 2026-07-03.

It is **multiplicative**, and that is the whole strategy:

- Big sales with almost no boosts stays capped. Lots of boosts with no sales stays capped.
- The playbook's own worked example: the project that sold the most dollars finished LAST because
  it had almost no boosts; a project with fewer dollars and a boost-rich crowd took #1.
- Both factors floor at 1.
- So a rally has to move TWO things together: **$10 Artifact buys AND Boosts** (boosting is free).

This supersedes the older "most sales wins" / "top seller" framing that predates 2026-07-03. Any
doc still saying rank or the fund prize goes to the biggest seller is wrong - it goes to the top
**Boost Score**.

## 2. The money

| Mechanic | Detail | Status |
|---|---|---|
| Artifact price | $10 open-edition collectible. Creator keeps 100%, 0% platform fee, Ethereum mainnet. | CONFIRMED (CLAUDE.md, `/playbook`) |
| Match ratio | **$1 of Artifact sales unlocks $1 of match from EACH fund** curating that project, while that fund's pool lasts. So a $10 Artifact unlocks $10 per fund. | TODO-VERIFY - see conflict M1 below |
| Stacking | Match stacks across every fund a project is curated into. One project in 3 funds matches 3x on the same sales. This is the single biggest lever a creator controls. | CONFIRMED (`artizen-funds-how-they-work.md`) |
| Endowment adds on top | The Artizen Endowment adds a further ~$1+ per $1, so ~$3+ total per $1 in a 1-fund case. | TODO-VERIFY - figure is from 2026-06-28 research, no dated primary source |
| Endowment fee | 10% on Artifact purchases, **added on top at checkout** ($10 Artifact = $1 to the Endowment). Not deducted from the creator's 100%. | CONFIRMED - Venus, Telegram, 2026-07-03 |
| Fund capital split | 90% of a fund's capital is match; 10% is an end-of-season cash prize for the fund's top-ranked project (by Boost Score - see section 1). | CONFIRMED (`artizen-funds-how-they-work.md`, 2026-06-28) |
| Available match depletes in REAL TIME | Shared pool per fund. Act early in a drive; a hot fund can run dry, and once dry, newly curated projects get no match. | CONFIRMED - Venus, Telegram, 2026-07-03 |
| Raised vs Prize | "Raised" (sales + unlocked match) is LOCKED once made. "Prize" fluctuates until the drive closes. | CONFIRMED - Venus, Telegram, 2026-07-03 |
| Prize curve | #1 largest, #2 = 50% of #1, #3 = 50% of #2, then flatter; everyone ranked earns something. Rene was optimizing the lower leaderboard as of early July 2026. | CONFIRMED - Venus, Telegram, 2026-07-03 |
| Match caps | Weekly and seasonal caps on match per project are being refined so no single project drains a fund's pool. Not a fixed published number. | TODO-VERIFY - "in progress" as of 2026-07-13 (doc 851) |
| Fund prize flywheel | A fund's weekly prize does NOT pay out as cash - it rolls into that fund's match pool for the next drive. Boosting or sponsoring the ZAO Fund compounds match for every project it curates. | CONFIRMED - Venus, Telegram, 2026-07-03 |
| Sponsorships vs sales | Sales = Artifact buys on a project. Sponsorships = money into a FUND's match pool. "Presented By" on a project names the top sponsors of the funds backing it, not its buyers. | CONFIRMED - Venus, Telegram, 2026-07-03 |

## 3. Fund drives

- **Season 7 runs roughly 19 weekly fund drives, Friday to Thursday** (Venus, 2026-07-13, doc 851).
  This supersedes the earlier "Thursday to Thursday" (Venus, 2026-07-03) - the day shifted with the
  Season 7 rollover.
- One drive is always live; no gaps. Timing can shift around a season close.
- The **weekly leaderboard resets** each drive. Point balances do not - see section 4.
- **Joining a fund mid-drive** can start applying during that drive (curation status is computed at
  drive start/end), but applying early positions strongest for the next one.
- Match share follows trailing activity, so consistent week-over-week engagement beats one splash -
  while still saving firepower for a couple of concentrated pushes (Venus to a fund director, 2026-07-13).

## 4. Boost Points

- **Boost Points never expire.** They carry over drive to drive and season to season. The only way to
  lose them is to spend them. CONFIRMED - Rene, directly, relayed in doc 851 (2026-07-13).
  - This CORRECTS Venus's earlier statement (2026-07-03) that unused points reset at each drive close,
    which caused people to panic-spend. Only the weekly leaderboard competition resets.
- Points come from holding ART, donating to the Endowment, completing your profile, and attending
  events. TODO-VERIFY - no dated primary source in the repo for this list; check play.artizen.fund.
- Known point awards, all CONFIRMED from doc 851 (2026-07-13) unless noted:
  - **25,000** for attending a Funders Forum live (Mondays 11am PT).
  - **250,000 each** to referrer and referee when a referred community leader starts a fund and applies
    with the referrer's Artizen email.
  - **100,000** airdropped to every creator and fund director during the Frontier drive - a one-off gift,
    not a standing rule (Telegram, 2026-07-03). Check your balance at each drive open; when an airdrop
    lands, deploy it, because Boost Score is multiplicative.
  - Grow CRM contacts and verified outreach conversations each pay points - see section 8.

## 5. Seasons

The authoritative season timeline, from Venus and Rene in the fund-director Telegram (doc 851,
2026-07-13). Do not estimate season dates from doc dates - use this.

| Season | Window | Length | Note |
|---|---|---|---|
| Season 4 | Sep 2024 - late Jan 2025 | ~4.5 months | ~4-month pause before Season 5 |
| Season 5 | late May 2025 - Jan 22, 2026 | ~8 months | |
| Season 6 | Jan 22, 2026 - Jul 9, 2026 | ~5.5 months | Started the day Season 5 closed |
| Season 7 | Jul 9, 2026 - est. Dec 2026 / Jan 2027 | ~5-6 months | **Live now.** Started the day Season 6 closed |

Season cadence is not fixed - Venus: "Each season's timing is shaped by what's being built and learned
between chapters rather than a fixed calendar." Season 8's start is not predictable from the pattern.

**Season rollover rules** (all CONFIRMED, Rene direct, docs 851 + `artizen-mechanics-verified-telegram.md`):

- **Funds carry over.** Unused fund balances roll into the next season. Nothing is stranded at close.
- **Projects carry over.** A project already curated into a fund stays curated when the season rolls.
  No re-submission, no new project profile.
- **A fresh Artifact per season IS required.** That is the only mandatory per-project action at rollover.
- **Boost Points carry over** (section 4). Weekly accrual starts fresh on top of the carried balance.
- **Funds only close by director choice.** No automatic expiry. Directors can edit their fund's
  description and requirements at any time - not locked at creation.
- **The final week of a season counts the FULL season** of boosts, votes, sales and match unlocked, not
  just that week - and that week's prizes pay out partly in ART tokens on top of the regular payout.

**Season 6 result:** creators raised **$8,331,351** (corrected figure). The homepage season counter had
been undercounting since a May 2026 platform upgrade; project-level numbers and payouts were always
correct. Treat any Season-6-era screenshot from before this correction as stale. CONFIRMED - Venus,
doc 851, 2026-07-13.

**Season 7 stated goals:** $20M raised by creators, $100M+ endowment. These are team targets, not
guarantees - do not quote them as facts. See conflict M3 on the endowment.

## 6. Curation and submission

- **Curation happens WITHIN each fund.** A project competes only against others in the same fund, not
  the whole platform. So every fund you stack into is a separate curation pool AND a separate
  competition - and a small aligned fund is easier to place in.
- **Top ~30% of projects by votes** advance from the curation phase into competition.
  TODO-VERIFY - from `artizen-funds-how-they-work.md` (2026-06-28), no later confirmation; check
  whether Season 7 still runs a distinct curation phase at all.
- **Voting:** new users get up to 100 points for completing a profile; $1 contributed = 10 votes; you
  earn votes by showing up (events, quests). Every vote is clicked manually, even by whales - "time is
  the equalizer." TODO-VERIFY - same 2026-06-28 source; the relationship between votes and Boost Points
  is not stated anywhere in this repo.
- **Season-end airdrop flywheel:** raising $1,000 this season is said to yield 10,000 votes next season.
  TODO-VERIFY - same source and caveat.
- **There is no tag-based fund search.** The fund index is scroll-and-read; matching is organic by
  design. Best practice per Venus: read a fund's existing lineup rather than its description, then DM
  the director directly with a one-line fit. The platform does not notify either party about a
  submission, and no response does NOT mean rejected - curation is rolling all season.
- **Curation ethics policy is still being written**, collaboratively with fund directors on the weekly
  Funders Forum. Live as of 2026-07-13: whether a director may curate a project they are involved in
  (resolved toward transparency + community accountability over rigid policing, with existing funds
  grandfathered), match-funding caps, and a clearer definition of "association."
  TODO-VERIFY - this is exactly what the Funders Forum notes in `meetings/raw/` should settle.

## 7. Payouts

- Payouts run through the **Grow app** (grow.artizen.fund), launched 2026-07-13. Sign in with the
  Artizen account email; complete a payout form per funded project (7 steps, ~5 min): KYC plus a
  payment method - USD to a bank account or USDC to a wallet, with a test transaction.
- Creators are paid **at season end**: sales + match + any prize, as one payout.
- Payout reliability is reported good by creators (Trustpilot and creator reports, per CLAUDE.md).

## 8. Grow, CRM and Quests

Grow is no longer just the payout app. Verified 2026-08-07 by reading its production JS bundle
(doc 852) - Grow is Vite/React + Supabase, not Bubble, so its bundle is readable with curl + grep for
future verification. What is actually shipped:

- **CRM:** every contact added earns Boost Points; a more complete profile earns more, up to a cap per
  person. Free Boost Score.
- **Outreach:** Venus-assisted personalized emails. Email a sponsor prospect about your fund, CC Venus,
  and every verified conversation earns Boost Points.
- **Pipeline:** submissions and claims move through gated review stages - Venus reviews, Rene approves.
- **Quests:** six categories - Karma, Outreach, Network, Sprint, Raffle, Event - with cash pots. Hourly
  Raffle vault pots start at $500 and grow dollar-for-dollar with that hour's sales; the Collector's Cup
  pays the top 3 up to $12,000. Winnings are paid as Venus buying the winners' Artifacts. The Raffle
  draw is provably fair (hash published in advance, seeds after) and drawn live on the Thursday show.
- **Collaborators:** a claim ships a 5-slot collaborators section (name + email + context required per
  person to count). Fill all five - it costs nothing.
  - "Get a crew for every project" (Artizen LIVE #85, 2026-08-06) was a **suggestion by guest Ben Erwin,
    not an Artizen rule.** Nothing in the app enforces it - the word "crew" appears zero times in the
    bundle. Do not repeat it as policy.

## 9. Fund director economics

- **20% of sponsor dollars raised for your fund** (match and prize money excluded), payable as
  contractor payment, nonprofit donation, crypto, or check. CONFIRMED by Venus in a June/July 2026
  Funders Forum recap (doc 851, 2026-07-13) - but **not found in any official written Artizen doc**.
  - This reinstates the "20%" figure that `artizen-funds-how-they-work.md` (2026-06-28) had marked
    outdated in favour of "tips from sponsors + Artifacts." The later Funders Forum source wins on date;
    the two models may also coexist. TODO-VERIFY the claiming process.
- **Accelerator for Community Funds:** an application, not a given. 20 spots, ~3 months (described
  elsewhere as 12 weeks), up to $10,000 to launch a community fund, plus mentorship. A separate
  "$1M for Community Funds" post says up to $50,000 - likely two programs or a changed figure.
  TODO-VERIFY the amount and the program length at artizen.link/apply before citing either.
- **Sponsor tiers** (from the Console case, medium confidence, 2026-06-28): Presenting ~$20k+ (fund
  naming, voting power, dashboard, top billing), Supporting ~$5k (voting power, brand listing),
  Contributor ~$1k (Artifacts + recognition). TODO-VERIFY before quoting to a sponsor.

## 10. Artifact spec

Square 1:1 (min 1000x1000). Video or GIF performs best. **No text or graphic overlay.** Capture the
project's current milestone. CONFIRMED - Venus, 2026-07-13 (doc 851), consistent with the earlier spec.

## 11. Open conflicts - TODO-VERIFY register

Resolve these at play.artizen.fund or by asking Venus in the fund-director Telegram, then update this
file and delete the conflict entry.

**M1 - the match ratio.** Docs disagree on how much match a $10 Artifact unlocks per fund.
- `research/artizen-funds-how-they-work.md`, `TEAM-PLAYBOOK.md`, `/playbook`, `/about`, `/rally` and
  `/dashboard` all say **1:1** - $1 of sales unlocks $1 of match per fund, so $10 unlocks $10.
- `CLAUDE.md` says a $10 Artifact unlocks **$1** of match per fund.
- Note that $1 per $10 Artifact is exactly the separately-documented 10% Endowment fee (section 2),
  so the two figures may have been conflated somewhere. This file carries 1:1 as the working answer
  because that is what the weight of dated sources says - but it is NOT confirmed against the live
  playbook, and the ZAO's whole crew pitch ("your $10 becomes $20+") rests on it. Verify first.

**M2 - boost point sources.** The "holding ART / donating to the Endowment / completing profile /
attending events" list has no dated primary source in this repo. Only the specific awards in section 4
are confirmed.

**M3 - the Endowment and the ART token.** Not a mechanic the ZAO depends on, but repeatedly quoted:
Artizen self-reports $4M (Oct 2025) growing to ~$17M at Season 6 close and targets $100M+ for Season 7.
Tracing the ART contract's own code (`0x59fbbc7d9c579547b47f3669aab2aec5b58d63de`) found it hardcodes
Juicebox project #587, treasury ~0.01 ETH, deployed **October 2023** - conflicting with doc 845's
"launched Oct 2025." ART was also relaunched (V6 migration + airdrop) around mid/late June 2026.
Do not quote the endowment figure or the launch date. **Keep the ZAO treasury OFF ART regardless** -
that caution stands independent of how the conflict resolves. See `research/art-token-onchain.md`.

**M4 - curation phase in Season 7.** The "top ~30% by votes advance" model and the vote economy
(section 6) are all sourced to 2026-06-28 and have not been reconfirmed since. It is not clear from
this repo whether Season 7 still runs a separate curation phase or whether rolling curation replaced it.

**M5 - the meeting notes.** `meetings/raw/` (Monday Momentum + Funders Forum, Apr-Aug 2026) is not in
this repo. Several items above - curation ethics, match caps, the prize curve rework - were explicitly
"being decided on the weekly calls." Those calls are the missing primary source for this file.

## Supersession log

Chronological record of mechanics claims this repo has had to correct. Add a row whenever a dated
source overrides an earlier one.

| Date of correction | Claim | Was | Now | Source |
|---|---|---|---|---|
| 2026-07-03 | How rank is decided | "Most Artifact sales wins" | Boost Score = (sales + match) x boost points / 100, multiplicative | Official playbook via Telegram, ZAOOS research 887 |
| 2026-07-13 | Boost Point expiry | Venus: unused points reset each drive close | Points never expire; only the weekly leaderboard resets | Rene, direct correction (doc 851) |
| 2026-07-13 | Season numbering | "Season 7 closing / Season 8 launching" | Season 6 closed Jul 9 2026; Season 7 live now | Venus (doc 851) |
| 2026-07-13 | Season 7 re-submission | Projects must be re-submitted for the new season | Curated projects carry over automatically; only a fresh Artifact is required | Rene, correcting Venus (doc 851) |
| 2026-07-13 | Season 6 creator total | ~$7-8M (platform counter) | $8,331,351 - the counter had undercounted since a May 2026 upgrade | Venus (doc 851) |
| 2026-07-13 | Drive window | Thursday to Thursday | Friday to Thursday for Season 7 | Venus (doc 851) |
| 2026-07-13 | Fund director pay | "20% is outdated, it's tips + Artifacts" (2026-06-28) | 20% of sponsor dollars raised, match and prize excluded | Venus, Funders Forum recap (doc 851) |
| 2026-08-07 | "Every project must have a crew" | Reported as a new Artizen requirement from LIVE #85 | A guest's suggestion, not policy; nothing enforces it, but claims ship 5 collaborator slots | Grow bundle read (doc 852) |
