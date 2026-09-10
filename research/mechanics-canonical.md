# Artizen mechanics - CANONICAL

**This is the single source of truth for Artizen platform mechanics in this repo.**
Every other doc, page, and kit file should LINK here instead of restating a formula, a match
ratio, a season date, or a prize rule. If you find mechanics restated somewhere else, replace
the restatement with a link to this file - one wrong copy is worse than one missing copy.

**Last reconciled: 2026-09-10, against the live Artizen Playbook at version 34 (2026-09-04).**
Also against Venus's weekly "how this week works" post (2026-09-09) and the dated repo sources the
first pass used (`research/artizen-mechanics-verified-telegram.md` 2026-07-03, doc 851 2026-07-13,
doc 852 2026-08-07, `research/artizen-funds-how-they-work.md` 2026-06-28).

> **The biggest correction in this pass: rank is no longer the Boost Score.** Since the Playbook's
> version 21 (2026-08-21), rank is **money raised = sales + match unlocked**, prizes follow rank, and
> boosts win a share of a **separate weekly Boost Bonus pot**. The multiplicative
> `(sales + match) x boost points / 100` formula this repo taught from July is retired. See section 1
> and conflict M6.

## How to re-verify this file (the Playbook is readable)

`play.artizen.fund` is a Vite/React single-page app, so `curl` returns an empty shell - but it is
**not** Bubble. Its text lives in a Supabase table that the page reads with its own public client:
section content in `playbook_content`, and a **dated changelog in `playbook_versions`** (one row per
edit, with a one-line summary). Rendering the page in a headless browser shows the same text. The
changelog is the fastest check: read the newest versions and see whether anything below moved.

## How to read this

| Tag | Meaning |
|---|---|
| CONFIRMED | Stated in the live Playbook (with its version and date), or by Rene or Venus in a primary channel, with the source and date given. |
| TODO-VERIFY | Sources disagree, or the claim has no dated primary source. Do NOT quote publicly. Check the Playbook changelog, or ask Venus, then update this file. |

Artizen changes mechanics mid-season - version 21 even shipped as a "one-week experiment" and then
stayed. A claim here is only as good as its date. Check the date before you quote it.

---

## 1. How you win: rank is money raised

CONFIRMED - Playbook v34 (2026-09-04), Quickstart, Gameplay, Projects, Funds and FAQ all agree.
Introduced in v21 (2026-08-21).

- **Two leaderboards run every Fund Drive:** projects against projects, Funds against Funds.
- **Your rank is your money raised: sales + match unlocked.** The more you raise, the higher you rank.
- **Prizes follow rank.** Every ranked project and Fund wins some cash, but most of the pool goes to
  the top: #1 takes the biggest prize, #2 gets half of #1, #3 gets half of #2, then the prizes flatten
  out so everyone further down earns a steadier share. Prizes come from the Artizen Endowment.
- **Boosts no longer multiply your rank.** They win a share of a **separate weekly Boost Bonus pot**,
  split among the boosted projects and Funds on a *"deliberately gentle curve so bonus money spreads
  wide."* The pot starts at $50,000 and steps up with collective fundraising milestones for the week
  ($500K raised -> $100,000, $1M -> $150,000, $1.5M -> $200,000, $2M -> $250,000).
- **Season-long totals roll up** to an end-of-season prize when the season closes.

**What this changes for the ZAO's crew pitch.** The crowd still does two things, but they now earn
two different payouts: **buying Artifacts moves rank and the prize**; **boosting moves the Boost
Bonus share.** The Playbook's own worked example: the project that raised the most ranks #1 with
only a sliver of the Boost Bonus, while boost-rich projects further down collect the biggest Boost
Bonus shares. So "a top seller with no boosts LOSES" is no longer true - it wins the rank and the
prize and leaves the bonus on the table.

**Retired:** `Boost Score = (sales + match unlocked) x boost points / 100`, multiplicative. That was
CONFIRMED from the Playbook via the fund-director Telegram on 2026-07-03 and was right until
2026-08-21. Any doc or page still saying rank multiplies by boosts, or that the prize goes to the top
Boost Score, is out of date.

## 2. The money

| Mechanic | Detail | Status |
|---|---|---|
| Artifact price | **$10 plus applicable fees at checkout.** Artizen adds a 10% fee on top of both Artifact sales and sponsorship sales. Open-edition, Ethereum mainnet. | CONFIRMED - Playbook v34. The 10%-on-top fee matches Venus, Telegram, 2026-07-03 |
| Match unlock | **Every $1 of sales (and every $1 of sponsorship) unlocks match from the curated Funds and the Endowment, scaled by that week's Match Multiple set by Artizen**, up to the project's available cap. At a 3x multiple, $1 unlocks $3 of match, $4 raised on that dollar. | CONFIRMED - Playbook v34. **Resolves conflict M1** |
| Match Multiple changes weekly | The multiple and any per-project cap are set per drive. The Resonance drive (to 2026-09-10) ran **3x, capped at $6,000 of match per project** for that drive. Venus: *"do not quote a number for next week yet"* - it is announced at each drive open. | CONFIRMED - Venus weekly post, 2026-09-09. RE-CHECK every drive |
| Where available match comes from | Every approved project is auto-added to the Endowment for a **baseline** match. Each Fund that curates you adds **a slice of its own available match.** | CONFIRMED - Playbook v34 |
| How a Fund's slice is sized | By **your sales over the last 4 weeks compared with the other projects in that Fund.** Each Fund has a floor and a ceiling percentage per project, set by how many projects it curates. No more than 100% of a Fund is handed out in a week. Your pool is reserved for you for the whole drive; the number on your Fund Drive card is exactly what your community needs to unlock. | CONFIRMED - Playbook v34. Replaces the older "shared pool depletes in real time, act early" framing (Telegram, 2026-07-03) |
| Stacking | Get curated by as many Funds as you can; each adds to your available match. There is no minimum - a single curation makes your sales eligible for that Fund's match. | CONFIRMED - Playbook v34 |
| Quest money adds, never multiplies | Quest matches and the drive match add together. A quest mirror is its own line; mirrors show as sales on the board but are **not matched again**. | CONFIRMED - Venus weekly post, 2026-09-09 |
| Fund prize flywheel | A Fund's cash prize is not paid out as cash - it rolls into that Fund's match pool for the next drive. | CONFIRMED - Playbook v34 (first reported by Venus, Telegram, 2026-07-03) |
| Raised vs Prize | "Raised" (sales + unlocked match) is locked once made; "Prize" fluctuates until the drive closes. | CONFIRMED - Venus, Telegram, 2026-07-03. Not restated in v34 |
| Fund capital split | "90% of a Fund's capital is match, 10% is an end-of-season prize for its top project." | **TODO-VERIFY, likely superseded** - 2026-06-28 source; v34 says prizes come from the Endowment and a Fund's own prize rolls into its match pool. See M8 |
| Sponsorships vs sales | Sales = Artifact buys on a project. Sponsorships = money into a FUND's match pool, and sponsor dollars unlock match too. | CONFIRMED - Playbook v34; Venus, Telegram, 2026-07-03 |
| Early Exit | A creator can take their Artifact sales and close out at any time, including during the post-season payout period. Renamed from "Rage Quit" in v32. | CONFIRMED - Playbook v34 |

## 3. Fund drives

- **One Fund Drive a week, always live.** The Resonance drive closed Thursday 2026-09-10 at 11:00 AM
  Pacific (18:00 UTC) and the next opened at that moment, with its theme and multiple announced then
  (Venus, 2026-09-09).
- **The window is stated two ways inside the Playbook itself** - Quickstart and Gameplay say "Thursday
  to Thursday", the FAQ says "Friday through Thursday". Conflict M7. The close is Thursday 11:00 AM
  Pacific either way.
- **Fair Finish:** at the scheduled close, drives and Sprints start a fresh 5-minute timer that resets
  only on an actual lead flip - not for other sales or activity (Playbook v15, 2026-08-09).
- The **weekly leaderboard resets** each drive. Boost Point balances do not - see section 4.
- Sponsor and sales dollars unlock match instantly for curated projects mid-drive (Playbook v34).

## 4. Boost Points

- **Boost Points never expire.** They carry over drive to drive and season to season; you only lose
  them by spending them. CONFIRMED - Playbook v34 FAQ; Rene, direct correction, doc 851 (2026-07-13).
- **Where they come from** - CONFIRMED, Playbook v34 (resolves most of conflict M2):
  - **Donating to the Endowment: $1 = 100 Boost Points** ($10 = 1,000). Money spent on boosts in the
    WIN box counts as an Endowment donation and earns the same (Venus, 2026-09-09).
  - **Holding ART:** at the start of every Fund Drive you receive Boost Points equal to **your ART
    balance divided by 10**, added on top of what you hold - cumulative since v31 (2026-09-04). No ART
    price lookup, no dollar conversion (v30, 2026-09-03).
  - Crypto donations earn ART plus Boost Points; card and bank donations earn Boost Points only (v16).
  - "Everyone gets some for free" and there are "limited free boosts" - the free amount is not stated.
- **Still TODO-VERIFY (M2, narrowed):** points for completing a profile and for attending events are
  not in Playbook v34. The specific awards reported in doc 851 (2026-07-13) - **25,000** for attending
  a Funders Forum live, **250,000 each** for a fund-director referral, a one-off **100,000** airdrop in
  the Frontier drive - are dated reports, not current Playbook rules.
- **Casting:** the WIN tile on the Fund Drive card computes the cheapest mix of Boost Points and money
  to put a project or Fund into first place (v18). The BLAST and MAX buttons were removed 2026-08-24
  (v26).
- Grow CRM contacts and verified outreach conversations pay points - see section 8.

## 5. Seasons

| Season | Window | Note |
|---|---|---|
| Season 4 | Sep 2024 - late Jan 2025 | ~4-month pause before Season 5 |
| Season 5 | late May 2025 - Jan 22, 2026 | |
| Season 6 | Jan 22, 2026 - Jul 9, 2026 | Started the day Season 5 closed |
| Season 7 | Jul 9, 2026 - **around January 7, 2027** | **Live now.** Playbook v34 FAQ: *"the exact date may shift a week or two in either direction."* RE-CHECK 2026-12-01 |

Seasons 4-6 from Venus and Rene, doc 851 (2026-07-13). Season cadence is not fixed; Season 8's start
is not predictable from the pattern.

**Season rollover rules** (CONFIRMED, Rene direct, doc 851 + `artizen-mechanics-verified-telegram.md`):

- **Funds carry over.** Unused fund balances roll into the next season.
- **Projects carry over.** A project already curated into a fund stays curated. No re-submission.
- **A fresh Artifact per season IS required.** The only mandatory per-project action at rollover.
- **Boost Points carry over** (section 4).
- **Funds only close by director choice.** Directors can edit description and requirements any time.
  Directorship can be transferred, to an entity or an individual, handled with Artizen (Playbook v2).
- **At season close, all sales, match funding and prizes are finalized, and payouts follow** (v34 FAQ).

**Season 6 result:** creators raised **$8,331,351** (corrected figure; the homepage counter had
undercounted since a May 2026 upgrade). CONFIRMED - Venus, doc 851, 2026-07-13.

**Season 7 stated goals:** $20M raised by creators, $100M+ endowment. Team targets, not facts. See M3.

## 6. Curation and submission

- **Anyone can submit, for free. Fund admins curate the projects that fit.** CONFIRMED - Playbook v34.
- **The 5:1 rule for curating your own work** (Playbook v1, 2026-07-21, still in v34): for every 5
  projects a Fund curates, 1 may be a project the Fund's team is involved in - 5 allow 1, 10 allow 2.
  **"Involved" means a creator account listed on the project is the same account as one of the Fund's
  curators, including the Director.** A studio project that pays named creators as contractors is
  clear as long as none of its listed creator accounts are curators on that Fund.
  - **This bears directly on the ZAO Fund:** any project listing Zaal's account as a creator (ZAO
    Festivals, BetterCallZaal Strategies) counts against the ZAO Fund's own-work limit, so the fund
    needs five curated projects for each one. Accepting projects from the curation queue raises the
    allowance.
- **The Curation tab count includes removed projects as well as pending ones**, so it can read higher
  than the queue actually waiting for review (Playbook v34, 2026-09-04).
- **The vote-based curation phase is gone from the Playbook.** "Top ~30% by votes advance",
  "$1 = 10 votes" and "$1,000 raised yields 10,000 votes next season" (all 2026-06-28) do not appear
  anywhere in v34 - the word "vote" does not occur. Treat them as retired unless reconfirmed.
  Conflict M4 is closed on that basis.
- **There is no tag-based fund search.** Read a fund's existing lineup rather than its description,
  then DM the director with a one-line fit. No response does NOT mean rejected - curation is rolling
  (Venus, 2026-07-13).

## 7. Payouts

CONFIRMED - Playbook v7, v12, v20, v32, all current at v34.

- Payouts run through the **Grow app** (grow.artizen.fund): sign in with the Artizen account email,
  complete the payout form per funded project - KYC ("Know Your Creator") plus a payment method, USD
  to a bank or USDC to a wallet, with a test payment.
- **Every funded project completes an Impact Report before its payout completes.** It is built in the
  Impact Report editor on the payout page and holds: links to the work, **at least 5 images**, a
  **recorded interview** (four questions, in your own voice), **people who know the work**, and a
  narrative of the season's progress. It feeds a feature essay, published with the creator's
  permission. **Returning creators complete a fresh one each season they are funded.**
- **Timing: most payouts clear within 60 days of *active review*** - the days the payout is in
  Artizen's hands **with the Impact Report complete.** The clock pauses whenever Artizen is waiting on
  the creator (a form, a confirmation, a test payment, Impact Report materials) and resumes when they
  respond. Smaller payouts go first. Payouts above $10,000, or needing deeper verification, get
  enhanced review and can take longer; Artizen says so before day 60.
- **Practical consequence:** an unfinished Impact Report does not just delay a payout, it keeps the
  60-day clock from starting.

## 8. Grow, CRM, Quests and the community chat

- **The Artizen Telegram group is closed.** Community conduct now points to the **community chat in
  the Grow app** (Playbook v29, 2026-09-01); questions go to Venus in Help. **TODO-VERIFY whether
  that is the same group as the private fund-director Telegram ("Artizen") this repo cites as its
  live source** - if it is, every "confirmed in the Telegram" line below is now a closed channel and
  the Grow chat is where new mechanics get announced.
- **Quests: seven categories** as of v13 (2026-08-09) - Event, Karma, Sprint, Raffle, and Match
  Quests among them (qualifying fresh sales trigger extra Artifact purchases on the same project while
  the pool lasts). Karma mini-games include Fund a Friend, Back the Backers and First Believer.
  Examples live in the week of 2026-09-09: Call and Response Match, Crescendo Boost Sprint, 24 Golden
  Hours (Venus). **Quest terms change weekly - read grow.artizen.fund/quests, do not quote old pots.**
- **Raffles:** keys minted from Artifact sales (one key per $10 of sales in a sales raffle), a live
  provably fair draw, a pot that grows on misses, a guaranteed winner (v10).
- **Sprint prizes are paid as Artifact buys** (v11). Only real purchases count as a project's First
  Believer sale - prize awards and Venus's mirror or match purchases never do (v14).
- **CRM:** every contact added earns Boost Points; a fuller profile earns more, up to a cap (doc 852,
  2026-08-07, read from the Grow bundle).
- **Collaborators:** a claim ships a 5-slot collaborators section. Fill all five. "Get a crew for every
  project" (Artizen LIVE #85, 2026-08-06) was a guest's suggestion, not an Artizen rule.

## 9. Fund director economics

- **20% of fresh sponsor dollars brought into your Fund.** A $1,000 sponsorship = $200 to the director
  and $800 to the match pool. **No compensation on launch capital, Endowment match, or prizes.**
  CONFIRMED - **now written in the Playbook** (v3, 2026-07-22). This closes the old "confirmed in
  Telegram, not in any official doc" caveat.
- **Accelerator for Community Funds:** an application, not a given. 20 spots, ~3 months, up to
  $10,000, plus mentorship; a separate "$1M for Community Funds" post says up to $50,000.
  TODO-VERIFY at artizen.link/apply before citing either figure.
- **Sponsor tiers** (Console case, medium confidence, 2026-06-28): Presenting ~$20k+, Supporting
  ~$5k, Contributor ~$1k. TODO-VERIFY before quoting to a sponsor.

## 10. Artifact spec

Square 1:1 (min 1000x1000). Video or GIF performs best. **No text or graphic overlay.** Capture the
project's current milestone. CONFIRMED - Venus, 2026-07-13 (doc 851). Playbook v34: an Artifact is
*"any media that marks a milestone and channels the vibe of a project"* - not the project itself.

## 11. Open conflicts - TODO-VERIFY register

Resolve at the Playbook changelog or by asking Venus, then update this file and move the entry to the
closed list.

**M3 - the Endowment and the ART token.** Artizen self-reports $4M (Oct 2025) growing to ~$17M at
Season 6 close and targets $100M+. Tracing the ART contract (`0x59fbbc7d9c579547b47f3669aab2aec5b58d63de`)
found it hardcodes Juicebox project #587, treasury ~0.01 ETH, deployed **October 2023**. Since then
the Playbook has published the ART integration (v16, 2026-08-13, replacing a stale V5 contract and
Revnet links), an Endowment SAFE and a Team SAFE multisig (v22-v24, 2026-08-24) and a distributions
page. **Those newer addresses have not been re-traced by this repo** - so the 2023 finding may
describe a superseded contract. Do not quote the endowment figure or a launch date until someone
re-traces the v16 addresses. **Keep the ZAO treasury OFF ART regardless.** See
`research/art-token-onchain.md`.

**M5 - the meeting notes.** The Monday Momentum and Funders Forum notes (Apr-Aug 2026) are not in
this repo and **should not be** - the repo is public and those notes carry other people's names and
discussion. Any mechanics learned from them belong here, cited by date, with no personal content.

**M6 - is the money-raised ranking permanent?** v21 introduced it as a *"one-week experiment with
explicit rollback"* for the Harvest drive (Aug 20-27). Every section of v34 now states it as the rule,
and Venus's 2026-09-09 post describes prizes "by sales plus match" with a separate Boost Bonus pot, so
this file treats it as live. Confirm with Venus that the rollback is off the table before building a
season-long strategy on it.

**M7 - drive window.** Playbook v34 says "Thursday to Thursday" in Quickstart and Gameplay and
"Friday through Thursday" in the FAQ. The close time (Thursday 11:00 AM Pacific) is not in dispute.

**M8 - where fund prizes come from.** The 2026-06-28 note says 10% of a Fund's capital is an
end-of-season prize for its top project. v34 says weekly prizes come from the Endowment, and that a
Fund's own prize rolls into its match pool. These may describe different prizes (weekly vs
end-of-season); confirm before quoting either.

**Closed this pass:** **M1** (match ratio - resolved by the Match Multiple rule, section 2; neither
"$1 of match per $10 Artifact" nor a flat "1:1 per fund" was right); **M2** mostly (Boost Point
sources - section 4, with profile and event awards still open); **M4** (curation phase - the vote
economy is gone from the Playbook, section 6).

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
| 2026-07-13 | Fund director pay | "20% is outdated, it's tips + Artifacts" (2026-06-28) | 20% of sponsor dollars raised, match and prize excluded | Venus, Funders Forum recap (doc 851); written into Playbook v3, 2026-07-22 |
| 2026-08-07 | "Every project must have a crew" | Reported as a new Artizen requirement from LIVE #85 | A guest's suggestion, not policy; claims ship 5 collaborator slots | Grow bundle read (doc 852) |
| 2026-08-21 | How rank is decided | Boost Score, multiplicative | **Rank = money raised (sales + match unlocked); prizes follow rank; boosts win a share of a separate Boost Bonus pot** | Playbook v21, still the rule at v34 (2026-09-04) - M6 |
| 2026-09-01 | Live community channel | The fund-director Telegram | Telegram group closed; the community chat lives in the Grow app | Playbook v29 |
| 2026-09-04 | Match ratio | "$10 unlocks $1 per fund" vs "$1 unlocks $1 per fund" (M1) | $1 unlocks match at that week's Match Multiple, from the Endowment baseline plus each curated Fund's slice, up to cap | Playbook v34 |
| 2026-09-04 | Boost Point sources | ART, Endowment, profile, events (undated) | Endowment donation $1 = 100 BP; ART balance / 10 at each drive open, cumulative | Playbook v30-v31 |
| 2026-09-04 | Payout timing | "Paid at season end" | 60 days of active review, clock runs only with the Impact Report complete | Playbook v7, v20, v32 |
| 2026-09-04 | Curation | Top ~30% by votes advance; $1 = 10 votes | Fund admins curate; no vote economy in the Playbook; 5:1 own-work rule | Playbook v1, v34 |
| 2026-09-04 | Season 7 end | "est. Dec 2026 / Jan 2027" | Around January 7, 2027, may shift a week or two | Playbook v34 FAQ |
