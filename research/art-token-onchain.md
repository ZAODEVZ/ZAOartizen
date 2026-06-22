# ART token - on-chain reality check

Primary-source verification of Artizen's ART token against Etherscan, to sanity-check the marketing
(the "$14M endowment -> $1T" narrative). Fetched 2026-06-13 from the token contract.

## What's verified on-chain

Contract: `0x59fbbc7d9c579547b47f3669aab2aec5b58d63de` (Ethereum mainnet), token "Artizen (ART)".

| Fact | On-chain value |
|---|---|
| Contract type | **JBToken** - a Juicebox project token (constructor takes a `projectId`) |
| Standard | ERC-20 + **ERC20Votes** (governance-capable), 18 decimals |
| Compiler | Solidity v0.8.16, source verified |
| **Max total supply** | **~2,711.89 ART** |
| **Holders** | **72** |
| **Transfers** | minimal (0 in the 24h at fetch) |
| Market / DEX pairs | none listed on Etherscan |

## What this confirms

- **The Revnet/Juicebox architecture is real.** ART is literally a Juicebox token (JBToken), matching
  doc 845's finding that Artizen's ART is a Revnet built on Juicebox. The structure checks out.
- It is governance-capable (ERC20Votes) - consistent with a treasury-backed/community token.

## What this tempers (read honestly)

- The on-chain footprint is **tiny and very early**: ~2,712 tokens, **72 holders**, near-zero transfer
  activity, no exchange/DEX market. This is a seed-stage token, not a liquid asset.
- The grand figures - "$14M endowment," "$10M by EOY," "$1T by year 12" - are **Artizen's own reported
  numbers** (the newsletter), not verifiable from the token's holders/supply/transfers. The USDC backing
  (the actual endowment) would sit in the **Juicebox project treasury**, which needs the Juicebox
  project ID to inspect - not visible from the token page alone.
- Reconcile the math: the fund page showed ART around sub-cent mint/floor ($0.0001 / $0.000134). ~2,712
  tokens at sub-cent prices is a rounding error against a "$14M endowment" - so the endowment is NOT the
  token market cap. The two numbers measure different things, and only Artizen's side of it is public.

## Bottom line for ZAO

- The platform + token mechanics are genuine (real Juicebox Revnet, verified contract).
- The financial narrative is **early-stage and self-reported** - 72 holders is the real current scale.
- This reinforces [doc 845](845-artizen-art-token-endowment-economics/) + the René digest: **keep the ZAO
  treasury out of the ART curve** until (a) the Juicebox treasury USDC backing is independently
  verifiable and (b) there's a published stress test. Run the fund, skip the token bet.

## UPDATE 2026-06-14 - found the Juicebox project, and the $14M is not there

The ART contract's embedded projectId is **587** (`0x24b`). Rendered Juicebox project 587:
**"Artizen Fund" (@artizenfund), owned by nene.eth, created Oct 27 2023, total raised ~34.21 ETH
(~$57k), 61 payments, last activity a year+ ago - dormant.** (v4/587 = 404; it's the v2 project.)

So the on-chain Juicebox project the ART token points to holds **~34 ETH and is inactive** - nowhere near
the **"$14,158,798 endowment"** shown on artizen.fund. The $14M is therefore **self-reported and not
verifiable on-chain** in the project the token references. Possible explanations: the marketed endowment
is a separate/off-chain or other-contract treasury, an aspirational/projected figure, or a different
accounting. Either way, it is not confirmed by the on-chain footprint.

**Hardened bottom line:** the platform mechanics are real, but the headline financial figure ($14M
endowment) does not reconcile with on-chain reality (a 34-ETH, dormant JB project + a 72-holder token).
Keep the ZAO treasury entirely out of ART, and do not repeat the $14M figure as fact in ZAO materials -
attribute it to Artizen ("Artizen reports a ~$14M endowment") if cited at all.

## Earlier follow-up (now resolved above)

- ~~Find the Juicebox projectId and inspect the treasury.~~ Done: project 587, ~34 ETH, dormant.

## Update 2026-06-22 - canonical Base contract + the endowment Revnet (the decisive check)

The 0x59fbbc check above was the **Ethereum-mainnet** ART (72 holders, ~2,711 supply). But the official
Playbook (play.artizen.fund) says ART launched first on **Base** - the canonical contract. Verified that day:

- **Base ART `0x44c4516768e47cd97cfF2561B81a74699F23f8Ec`** (Basescan): supply ~959,607,599 ART, **237 holders**,
  **no listed market price / market cap** ($0.00), **0 transfers in 24h**. Thin, illiquid, unpriced.
- **The endowment itself = the Revnet `revnet.app/v5:base:6`** (operator `artizenendowment.eth`): on-chain
  balance **$96.96**, **261 owners**, last activity ~2 months ago. **The on-chain endowment holds under $100.**
- The legacy Juicebox `@artizenfund` (34.21 ETH, dormant since ~2024) is the OLD vehicle - NOT today's endowment.

**Verdict: the "$14M endowment" is refuted as an on-chain / liquid figure.** On-chain, the Revnet holds <$100;
the $14M is almost entirely a claim about off-chain reserves (insured USD, BTC/ETH/SOL, Artifact copies) that
cannot be verified. Decision unchanged + reinforced: keep ZAO treasury OFF ART; the real money is sales + match
in USDC; ART prizes are illiquid. Full capture: ZAOOS research doc 887 (the Artizen Playbook).

## Sources

- [FULL] Etherscan token page - `etherscan.io/token/0x59fbbc7d9c579547b47f3669aab2aec5b58d63de` (Ethereum ART), fetched 2026-06-13.
- [FULL] Basescan - `basescan.org/token/0x44c4516768e47cd97cfF2561B81a74699F23f8Ec` (Base ART, canonical), 2026-06-22.
- [FULL] `revnet.app/v5:base:6` (the endowment Revnet, $96.96 balance) + `juicebox.money/@artizenfund` (legacy 34.21 ETH), scraped 2026-06-22.
- Cross-ref: research/845 (ART/Endowment economics), ZAOOS doc 887 (Artizen Playbook).
