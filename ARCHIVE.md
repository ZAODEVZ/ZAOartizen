# Archive: The ZAO on Artizen (2026)

**Status: ARCHIVED, past work.** The Artizen platform wound down and is stopping operations. On
2026-10-05 Zaal ruled The ZAO's Artizen work archived as past: The ZAO is no longer working with
Artizen, and Artizen is not a partner, funder or fund of The ZAO, now or in future. This file is the
historical record of what the work was and how it ended. Nothing in this repo is an active ask,
offer or promise.

Written 2026-10-09. Every fact below carries its source and the date it was true. Anything this repo
could not confirm is marked **UNVERIFIED**. Figures are snapshots; they were never re-read after the
date given.

---

## 1. What it was

Artizen (artizen.fund) was a Web3 match-funding platform for creative projects. Creators sold $10
Artifacts; each sale could unlock match money from Artizen's Endowment and from the community funds
backing the project, at a weekly Match Multiple Artizen set. Platform mechanics and how they changed
over 2026 are recorded in [`research/mechanics-canonical.md`](research/mechanics-canonical.md)
(last reconciled 2026-09-11 against Artizen Playbook v34).

The ZAO took part in three roles:

| Role | What | Source |
|---|---|---|
| Fund director | Ran the **ZAO Fund for Emerging Culture**, a community fund on Artizen, with Zaal as fund director. It curated projects so their sales could unlock match. | ZAOOS research 674 (2026-05-18), 843 (2026-06-11) |
| Creator | Fielded two projects: **ZAO Festivals** (the festival line behind ZAOstock) and **BetterCallZaal Strategies** (a project of the founder's business, launched 2026-06-29). | ZAOOS research 924 (2026-06-30); this repo, git log 2026-06-26 to 06-29 |
| Community | Rallied members to buy Artifacts and cast Boosts, and brought ZAO-adjacent projects into the fund (WaveWarZ, COC Concertz, HuRya / PolyRaiders, Baraza TV, The Music Onboarding Machine and others). | this repo: `kit/standings-tracker.md`, `app/leaderboard/data.ts` |

The plan of record was "permissionless-first, then René": run the fund well, prove the community can
bootstrap money, then take that track record to Artizen's founder for its Accelerator for Community
Funds ([`TEAM-PLAYBOOK.md`](TEAM-PLAYBOOK.md)). **The second phase never happened** (no meeting or
pitch is recorded in this repo; `kit/rene-comp-ask.md` stayed a draft).

## 2. Timeline

| Date | Event | Source |
|---|---|---|
| 2026-01-22 | Artizen Season 6 starts | `research/mechanics-canonical.md` |
| 2026-05-18 | Earliest ZAO research on Artizen; the ZAO Fund for Emerging Culture already has Season 6 grantees. **The fund's start date is UNVERIFIED.** | ZAOOS research 674 (PR #569) |
| 2026-06-11 | ZAO Fund roster: 32 projects in competition, fund total $10,000, fund rank #2 | ZAOOS research 843 |
| 2026-06-12 to 06-13 | Research docs 844-850 written; this repo created and graduated out of the ZAOOS monorepo (2026-06-13) | git log `8bcd972`; ZAOOS PR #844 |
| 2026-06-21 to 06-22 | Operating build: `TEAM-PLAYBOOK.md`, `/dashboard` scoreboard, `/leaderboard`, `/rally`, `/apply`, refresh scripts | git log |
| 2026-06-26 to 06-29 | ZAO Festivals and BetterCallZaal Strategies posted on Artizen | git log; `RECAP.md` |
| 2026-07-05 | Build loop paused | `LOOP.md` |
| 2026-07-09 | Season 6 closes; Season 7 starts (expected to run to about 2027-01-07) | research 851 (this repo); `research/mechanics-canonical.md` |
| 2026-07-13 to 07-14 | Season 6 close / Season 7 launch research and repo refresh (PRs #2-#10) | PR list |
| 2026-08-07 to 08-20 | Season 7 drives; Grow research (852); video series episode 1; CRM and fund-director notes (853) | PRs #18-#23 |
| 2026-08-21 | Artizen Playbook v21: rank becomes money raised (sales + match unlocked); Boosts move to a separate weekly Boost Bonus pot | `research/mechanics-canonical.md` |
| 2026-08-28 | Season 7 Impact Report drafts for ZAO Festivals and BetterCallZaal Strategies | PR #26; `docs/impact-reports/2026-season-7/` |
| 2026-09-01 | Artizen's public Telegram closes | `research/mechanics-canonical.md` section 8 |
| 2026-09-07 to 09-13 | Hygiene and correction sprint: contact roster moved out of the public repo, retired names removed, every tax-deductible claim removed (there was no fiscal sponsor), mechanics corrected to Playbook v34 (PRs #27-#47) | PR list |
| 2026-09-10 | Artizen states The ZAO's Season 6 claim (section 4) | finance-hq `capital/artizen-float-2026-09-09.md` |
| 2026-09-13 | ZAO Festivals Season 6 Impact Report submitted; Artizen confirmed receipt the same hour | finance-hq `capital/artizen-impact-state-2026-09-20.md` |
| 2026-09-19 | Last scoreboard data captured (section 3) | `app/dashboard/data.ts` |
| 2026-09-20 | Artizen pauses review on its side, no date given | finance-hq `capital/artizen-impact-state-2026-09-20.md` |
| 2026-09-21 | Last substantive merge: canonical mechanics file, meetings capture, Telegram capture bot (PR #48) | PR list |
| 2026-09-29 | Zaal pauses all Artizen work ("lets hold off on all things artizen right now") | zao-vault `MISTAKES.md`, 2026-09-29 entry (private, tracked) |
| 2026-08-19 | First message in the ZAO Artizen Telegram group | ZAO Artizen group export (private) |
| 2026-09-09 | Weekly Wednesday noon (US Eastern) group calls begin; run 09-09, 09-16, 09-23, 09-30 | same |
| 2026-10-03 | ZAOstock held in Ellsworth, Maine. No Artizen money had arrived. | finance-hq `capital/post-festival-2026-10-05.md` |
| 2026-10-05 | Artizen's founder's wind-down message reaches the group (04:27): operations stop; Artifact sales will be paid; match funding and cash prizes will not | ZAO Artizen group export (private) |
| 2026-10-05 | Artizen stopping operations. Zaal rules the work archived as past; Artizen removed as a partner from ZAO public surfaces (ZAOstock #447, ZAOOS #3713, zabalgames #753) | Zaal ruling 2026-10-05; PR search |
| 2026-10-09 | A payout claim process is open; The ZAO has not submitted its claim as of 11:01 | ZAO Artizen group export (private) |
| 2026-10-09 | This archive written | this file |

The wind-down message was first seen in the ZAO Artizen group on 2026-10-05. Its stated reason was
personal to Artizen's founder and is not recorded here. **UNVERIFIED:** the date it was first sent to
fund directors by email.

## 3. Outcomes

### ZAO Fund for Emerging Culture (fund level)

Ranks were measured on different scopes over time (fund vs project, single drive vs season), and the
ranking rule itself changed on 2026-08-21. Do not compare rows or quote a "final rank".

| Date | Figure | Source |
|---|---|---|
| 2026-06-11 | rank #2 of about 32 community funds; 32 projects in competition; fund total $10,000 | ZAOOS research 843 |
| 2026-06-22 | rank #13 in the Flourish drive (an earlier #11 / $4,262 reading was corrected the next day) | git history of `app/dashboard/data.ts` (`159d87c`, `c2f729d`) |
| 2026-07-13 | rank #19 of about 82 funds; 36 projects curated; $0 drive sales | research 851 (this repo) |
| 2026-08-20 | rank #67; $1,273 of match available and undeployed; 16 curated | `app/dashboard/data.ts` (`35d4db2`); `kit/artifact-sprint-2026-08-20.md` |
| 2026-09-08 | rank no longer measurable (Artizen removed the fund-vs-fund board) | `kit/standings-tracker.md` |
| 2026-09-19 | 21 curated; $0 raised this drive; $2,601 match available; $21,797 offered into the fund this season (offered, not unlocked) | `app/dashboard/data.ts`, last data point |

The repo's own honest-state line (2026-09-08): two drives logged, **$0 of match deployed in both**,
and the proof log the Accelerator pitch was meant to rest on stayed empty (`app/dashboard/data.ts`,
`proofLog = []`).

### ZAO projects

| Project | What happened | Source |
|---|---|---|
| ZAO Festivals | Season 6 claim of $1,610 stated by Artizen (section 4). Season 7: ranked #10 inside the ZAO Fund (2026-09-07); stated Season 7 total $7,277 (2026-09-10), never paid. Season 6 Impact Report submitted 2026-09-13. | finance-hq float file; `kit/standings-tracker.md` |
| BetterCallZaal Strategies | A project of the founder's business, not The ZAO's money. Season 6 claim stated by Artizen 2026-09-10; amounts are held in finance-hq. Its Impact Report was never submitted. | finance-hq impact-state file 2026-09-20 |
| HuRya / PolyRaiders (Building Tomorrow) | The only ZAO-tied project trading early in Season 7 (2026-07-13); #3 inside the fund on 2026-09-07 | research 851; `kit/standings-tracker.md` |
| The Music Onboarding Machine, Baraza TV, WaveWarZ, COC Concertz | In the fund in Season 7. Per-project platform totals on 2026-09-08 are in `kit/standings-tracker.md`; these are platform-wide, not ZAO Fund contribution. | `kit/standings-tracker.md` |

Platform context, as stated by Artizen and **not independently verified**: creators raised
$8,331,351 across Season 6 (research 851, 2026-07-13).

### What was built

- A 7-page Next.js site (hub, live fund scoreboard, leaderboard, rally, apply, festivals, proposal and
  later sponsor, community, curate, funds, playbook, videos).
- Research docs 843-853 plus the canonical mechanics file, the most complete public record of how
  Artizen's mechanics actually worked during Seasons 6 and 7.
- A copy-paste kit: artist briefs, fund proposals, submission packets, sponsor targets, outreach and
  call drafts. Most outreach drafts were never sent (their headers say so).
- Guards: a build check that blocks retired names and one that fails on unconditional match claims.
- Two Season 7 Impact Report drafts and one submitted Season 6 report.

## 4. Money: what was promised and not paid

On 2026-10-05 Zaal recorded, from Artizen's wind-down notice: **outstanding Artifact sales will be
paid out slowly; match funding and cash prizes will not be paid.** Stated plainly and without blame,
that means:

| Item | Amount | Status | Source |
|---|---|---|---|
| ZAO Festivals Season 6 Artifact sales | $410 | **Owed to The ZAO. The one live item.** See section 5. | Artizen claim state 2026-09-10, via finance-hq |
| ZAO Festivals Season 6 match | $1,180 | Will not be paid | same |
| ZAO Festivals Season 6 prize and ART rows | $20 | Will not be paid | same |
| ZAO Festivals Season 7 stated total | $7,277 | Will not be paid (Season 7 claims were to open only after the season closed) | same |
| ZAO Festivals Resonance drive prize | $2,342 shown on Artizen's page; $0 on Artizen's own sheet | Never settled; counted as $0 | same |
| BetterCallZaal Strategies (founder's business) | sales, match and Season 7 figures held in finance-hq | Match and Season 7 will not be paid; sales follow-up handled privately | finance-hq |
| ZAO Fund undeployed match | $2,601 available on 2026-09-19 | Never deployed; ended with the platform | `app/dashboard/data.ts` |

Plans that counted on Artizen match or prizes, including ZAOstock's 2026 budget, were revised to $0 on
2026-10-05 (finance-hq `capital/post-festival-2026-10-05.md`).

## 5. The one live item: Artifact sales payout

- **What:** the ZAO Festivals Season 6 Artifact sales, $410 as of Artizen's 2026-09-10 claim state.
- **Status:** Artizen is paying outstanding Artifact sales slowly, with no date. Artizen offered an
  advance of this same money on 2026-09-18; it was last recorded as **not landed on 2026-09-27**.
  **Whether anything has landed since is UNVERIFIED** (not re-read).
- **Claim (2026-10-09):** a payout claim process was open by 2026-10-09. The ZAO had not submitted
  its claim as of 2026-10-09 11:01 US Eastern; that decision is Zaal's. No payout to anyone is reported
  as received in the ZAO Artizen group through 2026-10-09 (that chat only).
- **Owner:** finance-hq tracks it (finance card 9715). Payout questions go to Artizen's payout contact
  named in the wind-down email. The amounts live there, not here.
- **UNVERIFIED:** whether Impact Reports still gate payout after the wind-down.

## 5a. The ZAO Artizen group (Telegram, 2026-08-19 to 2026-10-09)

Source: an export of the group taken 2026-10-09 (1,233 messages, 24 accounts posted), held privately.
Group-level facts only; members are not named here.

- Zaal ran the group for people running projects and funds on Artizen, to share strategy and
  questions (stated 2026-09-08). Its first message is dated 2026-08-19.
- From 2026-09-09 it held a weekly Wednesday noon (US Eastern) call, with extra calls on 2026-10-05
  and 2026-10-07.
- Its main activity was coordinated Artifact buying across members' projects during Artizen's hourly
  raffle and sales events. Members reported group-backed wins on 2026-09-07 and 2026-09-09, and ZAO
  Festivals won an hourly pot on 2026-09-08 (amount not stated).
- On 2026-09-10 a member estimated the group had raised over $50,000 across all its projects in about
  two weeks. **UNVERIFIED** (member estimate, no breakdown).
- From mid-September members noted slower replies from Artizen and cancelled Monday calls (2026-09-28).
- After the 2026-10-05 wind-down message the group discussed how payouts would be counted and the
  claim process. On 2026-10-09 a member read the Playbook's wind-down rule as counting only actual
  sales. **UNVERIFIED** against the Playbook.
- A livestream planned for 2026-10-07 was announced in the group on 2026-09-23 and 2026-09-30.
  **UNVERIFIED** whether it took place; the chat has no record of it.

## 6. Where everything lives

| Path | What | State |
|---|---|---|
| `ARCHIVE.md` | This record | current |
| `README.md`, `TEAM-PLAYBOOK.md`, `HANDOFF.md`, `CLAUDE.md` | Front door, strategy, cold-start, agent context | historical; each now points here |
| `RECAP.md`, `LOOP.md`, `PLAN-1/2/3-*.md` | Master recap through 2026-06-29; build loop; three operating plans | historical |
| `research/mechanics-canonical.md` | How Artizen worked, with sources, dates and a supersession log | historical, the best mechanics record |
| `research/843-*` to `research/853-*`, `research/*.md` | Roster, platform study, ART/Endowment, festivals strategy, ecosystem, build plan, fund playbook, Season 6 close, Grow, CRM notes, fund directory | historical |
| `kit/` | Copy-paste material, standings tracker, sponsor and outreach drafts; `kit/archive/` holds the launch-era kit | historical; drafts were never sent unless their header says so |
| `docs/impact-reports/2026-season-7/` | Impact Report drafts | historical |
| `meetings/` | Intake for call recordings. Nothing was ever ingested. | historical |
| `app/` | The Next.js site | historical; see Notes below |
| `scripts/` | Scraper, refresh-and-deploy, Playbook changelog check, guards, Telegram poller | historical; do not run `refresh.sh` (it deploys) |
| `.github/workflows/telegram-capture.yml` | Telegram capture bot on a 15-minute schedule | still scheduled; see Notes |
| ZAOOS research (bettercallzaal/ZAOOS) | Docs 674, 683, 843-850, 924, 1077, 1079, 1277, 2309, 2311. Doc numbers collide across repos, so cite by path. | historical |
| finance-hq (private) | The payout follow-up and all money detail | live for section 5 only |

Open issues #12 and #14-#17 in this repo are Season 7 tasks that no longer apply.

## 7. Notes for whoever closes this out

These are open decisions, not done by this archive:

- The site at `za-oartizen.vercel.app` still answered HTTP 200 on 2026-10-09 and its pages still carry
  live calls to action (`/rally`, `/apply`, `/sponsor`, "Back the fund" in the nav). The older host
  `zaoartizen.vercel.app` returned 404 the same day. Taking the site down or adding a banner is a
  public change for Zaal.
- `.github/workflows/telegram-capture.yml` still runs every 15 minutes. With no bot token set it skips
  and commits nothing (inferred from an empty secrets list and green runs, not proven). Disabling it
  is a settings change for Zaal.
- Whether to close the open issues, archive the GitHub repo, or make it private is Zaal's call.
