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

## Follow-up to verify properly

- Find the Juicebox `projectId` for Artizen (in the JBToken constructor / Juicebox directory) and inspect
  the project's treasury balance on juicebox.money or the JB contracts - that is where the real
  endowment USDC would show, and the only way to verify the $14M claim on-chain.

## Sources

- [FULL] Etherscan token page - `etherscan.io/token/0x59fbbc7d9c579547b47f3669aab2aec5b58d63de` (supply, holders, transfers, verified JBToken source), fetched 2026-06-13.
- Cross-ref: research/845 (ART/Endowment economics), research/rene-pinnell-digest.md.
