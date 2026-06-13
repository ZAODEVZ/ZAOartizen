# ZArtizen - Handoff

Handoff for whoever picks this up next (Zaal, Iman, a fresh Claude session, or a teammate).
Written 2026-06-13. Read README.md first for the big picture; this is the "what to do + why it's
set up this way" layer.

## Why this repo exists

The Artizen work was done inside the ZAOOS monorepo, but parallel terminal sessions kept swapping
the shared git worktree out mid-task - twice a research doc got committed onto the wrong PR branch
and had to be reverted and re-landed. Graduating to a standalone repo (ZADEVZ/zartizen) ends that:
isolated checkout, no shared-branch races, and it matches the ZAO "monorepo as lab -> own repo"
pattern. The research docs also live in ZAOOS (PR #844) as institutional memory; this repo is the
operating home for execution.

## Tasks to absorb (priority order)

1. **Send the René + Nate DM** (`kit/outreach-drafts.md` #1). Books the call, asks the 3 open
   questions. Everything fund-creation-related is gated on this.
2. **Start the daily spotlight series** (`kit/daily-spotlights.md`). One project/day. Pure upside,
   no dependencies. Re-check the live fund for which projects have match remaining before posting.
3. **Submit the ZAO Festivals Fund proposal** (`kit/fund-proposal.md`) after the René call confirms
   two-fund governance + seed.
4. **Onboard the first cohort** (`kit/submission-template.md`): WaveWarZ, SongJam, ZAOstock, Thy
   Revolution - submit + cross-curate into multiple funds.
5. **Get on Console** (console.xyz) - Artizen's Artifact-gated social layer; ZAO has no presence yet.
6. **IRL**: Edge Esmeralda residency (live through Jun 27, Artizen team + Telamon on-site) and the
   DWeb Camp Village application (Berlin Jul 8-12, ~20 slots).

## Key decisions already made

- Create a SECOND fund (ZAO Festivals) - reverses the earlier "keep one fund" call (doc 846).
  Rationale: it's allowed, the festival lane is white space, and the manager playbook is in doc 850.
- Keep ZAO Fund for Emerging Culture too (distinct mission, shared community).
- ART token engagement: keep ZAO treasury OUT of the ART bonding curve until there's a public stress
  test (reflexivity risk - doc 845).
- The zaoos.com/artizen page stays in ZAOOS (it's a ZAO OS route); this repo holds a copy for porting.

## Current state

- 8 research docs (complete). zaoos.com/artizen hub page (shipped, ZAOOS PR #844). Kit (drafted).
- Fund proposal ready, NOT submitted. Daily series drafted, NOT posting. No Console presence yet.
- Live numbers move daily mid-drive; re-render the fund page before quoting any standing.

## Open questions (for the René call)

1. Can one org/director run two funds? 2. Can a director curate their own project into their own
fund? 3. Does a second fund get its own $50K seed?

## Cold-start for a new session

- Read README.md, then research/850 (fund creation) + research/849 (execution kit).
- The fund is at artizen.thezao.com (redirects to artizen.fund/index/mf/zao-fund-for-emerging-culture).
- Artizen is a Bubble.io app - curl/exa return empty shells; render with a headless browser to read
  fund rosters/standings.
- Contacts: René Pinnell (@RJPinnell), Nate Van Cleve (Head of Product). News: news.artizen.fund.

## Human-only actions (no agent can do these)

Send the DMs, submit the proposal + projects, set up Console, collect/boost artifacts (wallet),
attend IRL. The repo gives you the copy + the plan; the sends are yours.
