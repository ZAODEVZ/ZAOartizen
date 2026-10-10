# Artizen: a history (2025-2026)

> **Unofficial community record.** This repo belongs to The ZAO, a music and creator community that
> ran a fund and two projects on Artizen. It is **not** an Artizen repo and does not speak for Artizen.
> Written 2026-10-09 from public Artizen pages, saved copies of the Playbook, The ZAO's own records,
> and public community discussion. Each fact names its source and date. Anything only reported by
> community members is marked **UNVERIFIED**. Companion page:
> [Artizen wind-down guide](artizen-wind-down-guide.md).

## What Artizen was

Artizen (artizen.fund) was a match-funding platform for art, science and technology projects, run by
**Artizen Works, Inc.**, a Delaware C-Corporation (Terms, 2026-10-02 and 2026-10-09). Its founder was
René Pinnell. Creators sold **$10 Artifacts** (open-edition digital collectibles). Each sale could
unlock **match funding** from Artizen's Endowment and from community-run **Funds** that backed the
project, and the best performers won **prizes**. Play ran in **Seasons**, split from mid-2026 into
weekly **Fund Drives**.

The rules lived in the **Artizen Playbook** at play.artizen.fund. The Playbook text said only three
people worked on Artizen full time in October 2026: René Pinnell, Nate Van Cleve (Head of Product), and
Venus, listed as "Co-founder and CEO" (Playbook, 2026-10-02).

### Before the Playbook era

- René Pinnell was co-founder and CEO of **Kaleidoscope**, which a 2021 interview says became Artizen
  ([TechvangArt, 2021-04-13](https://techvangart.com/2021/04/13/grants-for-artists-with-one-click/)).
  Earlier he founded Hurricane Party, an app launched at SXSW 2011 (search snippets of his own
  newsletter and Crunchbase; not read directly).
- In May 2023 Artizen announced a **$2.2M** raise from Consensys Mesh, Animoca Brands and Protocol Labs,
  plus individual investors ([Yahoo Finance, 2023-05-11](https://finance.yahoo.com/news/artizen-fund-raises-2-2-130102080.html)).
  Later rounds and funding totals differ between data sites and are not confirmed here.
- In a 2025 interview the founder said Artizen charged no platform fees, only tips
  ([Blockleaders, 2025-05-02](https://blockleaders.io/rene-pinnell-is-building-a-more-honest-internet-for-artists/)).
  The 2026 Playbook described a 10% team share of each contribution (below).
- A 2025 Bubble case study says Artizen cut its monthly burn from $150,000 to $25,000 by replacing a
  dev team with one Bubble builder ([Bubble, 2025-03-05](https://bubble.io/blog/artizen/); company-supplied figures).

### The Endowment and ART

Per the Playbook (2026-10-02):
- **ART** was a token on the Base network, issued through a Revnet on Juicebox.
- Each contribution was split 60% to buyers as ART, 10% to the Artizen team and 30% into the
  Endowment.
- ART followed a fixed issuance schedule (Stage 1 from 2025-09-18, Stage 2 from 2026-01-01) and could
  be redeemed against a floor, with a 10% exit fee.
- An earlier ART contract was replaced after a security scan found vulnerabilities, and new tokens
  were airdropped to holders.
- The Endowment and Team SAFE multisig addresses were published on 2026-08-24.
- **On-chain, 2026-10-10:** The ZAO read the balances of the two addresses the Playbook published,
  directly from public Base nodes. The Endowment SAFE (`0xbB96A6D3D251dFDA76F96d1650f9Cfd53b41c8d1`)
  held about 305.8M ART and 100.00 USDC. The Team SAFE (`0x2DACE53f4E18D9ED29B65B218C6aa55965a05F85`)
  held no ART and no USDC. This is a balance at one moment, not a transaction history.
- **Liquidity deposits, read 2026-10-10 from Basescan (public pages, no login):** the Endowment address
  sent ART and USDC into a Uniswap v4 liquidity pool twice, and received a position NFT each time:
  - 2026-07-20 (block 48896867): about 10.80M ART and $1,000 USDC.
    [transaction](https://basescan.org/tx/0x65a5f60abe793f341a143ccd1b0fdb2060ada1cb21e1a98741534849279e621a)
  - 2026-09-04 (block 50849988): about 15.00M ART and $2,900 USDC.
    [transaction](https://basescan.org/tx/0xf3c353459956bc0ce041e19024edc2635242d429275739852393bbe2d6737513)
  - Both position NFTs (#2864727 and #3005243, #3005244) still show the Endowment as owner, and their
    only recorded activity is the mint.
  - In the first 12 transfers we read, from the Endowment's ERC-20 list, no token came back from the
    pool. Basescan hides some transfers by default (suspicious tokens, zero-value), and older rows were
    not read. So this does not show whether the liquidity is still in the pool.
  - These are not sales. A position can be withdrawn without its NFT moving, so the NFT owner alone
    does not show whether the money is still locked.
  - The Playbook says Endowment money goes to match funding. How pool deposits fit that is not explained
    in any source we hold.
- Press in October 2026 described the Endowment as "over $14 million" (Wisevoter, 2026-10-06). How
  the displayed Endowment figure relates to on-chain balances is not explained in any source we hold.

The Terms also said: "Some rules are immutable (like Endowment mechanics coded into smart contracts)."

## How the rules changed

Artizen keeps an archived copy of its Playbook at artizen.fund/playbook. The ZAO also holds dated community copies; publishing them here is on hold until we confirm we may.

| When | What the Playbook said | Source |
|---|---|---|
| Around 2026-04-02 (Season 6) | Community votes as signal, fund admins approve. Sales Sprints and Boosts as time-limited power-ups. Match first-come-first-served, capped at about 30% of a Fund per project. Season-end cash prizes. | April 2 copy (community, held) |
| 2026-07-09 | Season 6 closed; Season 7 began, scheduled to end around 2027-01-07. | Playbook 2026-10-02; The ZAO's records |
| Around 2026-07-01 to 07-12 | Voting replaced by weekly Fund Drives (Thursday to Thursday). Boost Points from donating to the Endowment ($1 = 100) or holding ART. A weekly Match Multiple set by Artizen. Rank by a multiplicative Boost Score. A creator could **"Rage Quit"**: project archived, Artifact sales paid, match and cash prizes forfeited. | July 1 copy (community, held) |
| 2026-07-21 to 2026-09-04 | 34 dated entries in the Playbook's own version history. Highlights: **2026-08-21** rank became money raised (sales plus match unlocked) and Boosts moved to a separate weekly Boost Bonus pot. **2026-09-01** Artizen's public Telegram closed and chat moved to the Grow app. **2026-09-04** "Rage Quit" renamed **"Early Exit"**, still a creator's choice, and payout timing softened to "most within 60 days of active review". | Version history, from a community transcript of the Playbook made 2026-10-07; The ZAO's [`research/mechanics-canonical.md`](../research/mechanics-canonical.md) |
| 2026-09-18 and 2026-09-22 | Silent edits with no version-history entry. The Playbook's database shows the Projects section last edited 2026-09-18 and the Terms and FAQ sections last edited **2026-09-22** (about 22:19 UTC). | Playbook database response saved by the Wayback Machine on 2026-10-02 ([capture](https://web.archive.org/web/20261002113139id_/https://cwpjbvyexwgfqtbukvxa.supabase.co/rest/v1/playbook_content?select=*&published=eq.true&type=eq.section&or=%28page_type.eq.playbook%2Cpage_type.is.null%29&order=sort_order.asc)) |
| 2026-10-02 (last live copy we hold) | Adds: **Artizen itself may elect Early Exit** for any or all projects. A **Platform Continuity** section. A **"Full satisfaction and release"** clause: once the sales amount is paid, the creator releases Artizen Works Inc. | Oct 2 copy (community, held) |
| 2026-10-05 | The Playbook becomes "an archived copy ... kept for reference" on a new Artizen Payouts site, which adds a claim deadline and a wallet-withdrawal deadline of **2026-11-30, 11:59 PM PT**. | Terms as printed 2026-10-05 (community copy) |
| 2026-10-09 | The Terms add: before payout you confirm the total owed across all your projects, and "Once that total is paid, no further amounts are due." | Oct 9 Terms copy (community, held) |

**When was "Artizen may elect Early Exit" added?** It is **not established** by any source we hold.
- The Playbook's own version history ends at 2026-09-04, and that version describes Early Exit only as
  a creator's choice.
- The ZAO's mechanics file was checked against Playbook v34 on 2026-09-10 and against Venus's email of
  2026-09-11. It also records Early Exit only as a creator's choice. That is what The ZAO recorded, not
  proof the other text was absent: The ZAO did not save the full Terms page at the time.
- The earliest copy we hold with the Artizen-elected wording is from **2026-10-02**.
- **New, 2026-10-10:** the Playbook loaded its text from a database, and the Wayback Machine saved
  that database response on 2026-10-02. It records when each section was last edited. The Terms
  section, which holds the Artizen-elected wording, Platform Continuity and the release clause, was
  last edited on **2026-09-22 at 22:19 UTC**. So the wording was in place **by 2026-09-22 at the
  latest**. Whether it was added in that edit or an earlier one cannot be told from one snapshot.
- These September edits got no entry in the Playbook's version history, which stops at 2026-09-04.
- Community members have said it appeared "after September 11" or around 22-23 September, and a
  community site quotes Artizen support (2026-10-08) saying the provisions "were added in September
  2026". Both fit the database dates. **UNVERIFIED** quotes.

Note on this repo's `CLAUDE.md`: it is The ZAO's working notes for its own collaborators, not a record
of the Playbook. Use the dated copies above instead.

## How it ended

| Date | Event | Source |
|---|---|---|
| Late September 2026 | Season 6 payouts slow; Artizen's regular calls cancelled; slower replies from Artizen's account | Community reports, UNVERIFIED |
| 2026-10-04 to 10-05 | The Grow app disappears and redirects to the main site or a payouts page | Community reports |
| 2026-10-05 | The founder emails creators that Artizen will **stop operations**. "We're paying out Artifact sales, but not match funding or cash prizes." He says his remaining time goes to payouts and that "it'll take longer than anyone wants". Payout questions go to venus@artizen.fund. | Founder email, as pasted in community groups 2026-10-05 |
| 2026-10-05 to 10-09 | The Artizen Payouts site takes claims (USDC on Base, or bank via Mercury) | Terms 2026-10-05 and 2026-10-09; community reports |
| 2026-10-06 | Artizen's account tells a creator that Artizen "is closing, not pausing" | Relayed by a community member, UNVERIFIED |
| 2026-10-09 | play.artizen.fund redirects to artizen.fund, now titled "Artizen Payouts: creator payouts, claimed and tracked in one place." The live Playbook is gone. | curl of both URLs by The ZAO, 2026-10-09 |

Community groups formed to support each other, collect documents and discuss what comes next.

Press coverage, all dated 2026-10-06, reported the payout-only mode and said Artizen had given no
public reason: Crypto Briefing, KuCoin news, Wisevoter, plus community write-ups on Substack and
Paragraph. Up to 2026-10-10 we found no further public statement from Artizen, its founder or its
Head of Product (searched the web and press; not searched: X directly, which needs a login).
Artizen's newsletter posts at news.artizen.fund now redirect to artizen.fund (checked 2026-10-10).

## Platform totals (as claimed, not verified)

- **Season 6:** creators raised $8,331,351 (Artizen, 2026-07-13, via The ZAO's research 851).
- **Older pitch deck (circulated, early 2026):** "over $3.8M invested in creators" and "over 100,000
  Artifacts sold".

None of these figures has been independently verified.

## The ZAO's part

The ZAO ran the **ZAO Fund for Emerging Culture** and the projects ZAO Festivals and BetterCallZaal
Strategies. It also ran a Telegram group for creators on Artizen. Its full record, including what it
was owed, is in [`ARCHIVE.md`](../ARCHIVE.md).

## Where else records live

- **The Wayback Machine.** It holds captures of play.artizen.fund from 2025-10-13 to 2026-10-02. The
  Playbook loaded its text from a database, so captures may show an empty page. UNVERIFIED for each
  capture.
- **Community-built tools.** artizen.fyi is a stats site of Artizen projects (live 2026-10-10: 1,212
  projects, about $13.0M raised, with Artizen's own "Venus" purchases shown in a separate column); its
  project list was captured by the Wayback Machine on 2026-10-05. artizen-creator-resources.pages.dev is a creator
  resources and claims hub. Both were built by community members, not Artizen.
- **Artizen's public accounts.** YouTube @artizenfund and GitHub artizenfund were reported still
  online on 2026-10-05 to 10-06. Instagram and LinkedIn were reported gone on 2026-10-06.
