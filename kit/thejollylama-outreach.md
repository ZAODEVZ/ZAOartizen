# TheJollyLaMa outreach (arti-ZEN_FUN-d / "The Match Garden")

Drafted 2026-08-17 by the zao-artizen lane. **Zaal sends. Nothing here has been sent.**

Full research: ZAOOS research doc **2309** (`research/business/2309-thejollylama-artizen-collab-scout/`).
This file is the copy-paste half; read the doc for the evidence and the UNVERIFIED list.

## Who / why now

`TheJollyLaMa` on GitHub - "Decent Agency", NYC, 54 public repos, vanilla-JS + Optimism + IPFS, no
framework, ships by filing an intent issue and letting Copilot implement it.

On **2026-08-15** he created **`arti-ZEN_FUN-d`** - "The Match Garden", an MIT-licensed educational
mini-game that teaches creators how Artizen Funds and match multiples work. It is careful, honest work:
every fund and project in it is fictional and labelled as such, and the contributor docs forbid
presenting simulated fund data as real.

Two days later he opened **issue #10 - "Connect Artizen account to load active projects on the home
screen"**. He wants real Artizen data behind the game. As far as we have been able to establish, there
is no public Artizen API or third-party OAuth, and the main site is Bubble and returns an empty shell to
a plain fetch. So he is stuck on something we happen to have already solved badly-but-workably.

That is the whole opening: **he needs the data layer, we need an onboarding surface for new artists.**

## Channel

**A comment on `github.com/TheJollyLaMa/arti-ZEN_FUN-d/issues/10`.** No email, X, Farcaster, or
Telegram handle for him could be verified - his GitHub profile lists none and his personal site has no
contact block. The draft below is written to work as a public GitHub comment.

If you have a warmer handle from the Artizen call, use that instead and cut the first line.

## The draft

> Hey - Zaal from The ZAO. I run the ZAO Fund for Emerging Culture on Artizen. Found The Match Garden
> and read through `game.js`; the garden-bed framing is genuinely the clearest explanation of fund fit
> I've seen anywhere, and the fact that a 75-scoring pitch still only clears ~70% of the time is the
> single most honest thing in it. Curation *is* a judgement call. Most explainers pretend otherwise.
>
> On this issue specifically: as far as I've been able to establish, there's no public Artizen API or
> third-party OAuth to hook into - the main site is Bubble and returns an empty shell to a plain fetch,
> so the account connection can't be made real the way this issue describes. Two things that might
> help:
>
> - We run a headless scraper against the fund leaderboard to keep our own dashboard current. Two
>   things it cost us to learn: parse anchored to the fund *name*, because grabbing the first
>   rank/score match on the page silently returns whichever fund rendered first; and re-check the
>   browser's URL after navigating before you trust the text, because a failed navigation leaves the
>   previous page loaded and it reads as perfectly valid data. Happy to just hand you the script.
> - `grow.artizen.fund` is a different stack from the main site - Vite/React on Supabase, not Bubble -
>   and its bundle is readable with curl. If there's a per-user surface reachable at all, I'd look
>   there first.
>
> One offer, if it's useful: the game teaches the match-unlock half of the engine, but standing on
> Artizen also runs through Boost Score - roughly `(sales + match unlocked) x boost points / 100`, per
> Artizen's own playbook. It's multiplicative, so a project can lead on dollars and still finish last
> with no boosts. A creator who plays this comes away understanding curation and sales, and would be
> blindsided by that. I'd be glad to write it up as a proper issue with the mechanic spelled out, if
> you want it in the game.
>
> Either way - nice work. Are you running a project or a fund on Artizen yourself?

## Before you send

- **Do not mention Stephen Reid** or propose any introduction between them until Stephen has replied to
  your 2026-08-17 email. If both land, the shape is obvious - Stephen is the data, Jolly is the
  surface, we're the fund-director's view in the middle - but that is a second conversation.
- **Do not quote a live ZAO Fund rank or score.** The reason changed mid-session. It is no longer that
  we cannot verify it - we finally rendered the board on 2026-08-17 and the ZAO Fund is **rank #45 of
  101 funds in Season 7, with $0 sales and $0 match deployed** (the lowest numbered rank on the board).
  Nothing in the draft needs a number, and opening a first contact with that one trades away the
  credibility the rest of the note earns. Fix the number, then quote it.
- **"Happy to hand you the script" commits us to sharing `scripts/refresh-fund.mjs`.** It is
  public-safe - no keys, no auth, reads a public page - but confirm you want it public before offering.
- The Boost Score formula is from `play.artizen.fund` via `TEAM-PLAYBOOK.md` / ZAOOS doc 887. If Venus
  has restated it since, use the newer version.
- **Match his register.** His repos are `DecentEscrow`, `Decent_NDA` ("#ProtectYoNeck"), `SHT_MON`. He
  is playful in public. The draft is warm and specific on purpose; do not corporate it up.

## Separate thread worth pulling (not part of this outreach)

His `DecentBusking` repo ships five GitHub Actions that form a **working paid-contribution pipeline**:
a merged PR closing a labelled issue auto-queues an on-chain payout, with a weekly audit for missed
close tags and a **20/80 idea-credit split** that pays whoever had the idea, not only whoever wrote the
code. That is the shape ZOLs have wanted to be. Worth reading regardless of whether this collab lands -
though note `DecentBusking` has no license file, so read for the pattern, ask before reusing code.
