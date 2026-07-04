# ZAOartizen loop - three-plan build loop

Armed 2026-07-03. Each wake runs CHECK, BUILD, UPDATE against the three plans (see README). Most high-value
Artizen actions need Zaal logged in, so the loop's job is to make every one of his clicks pre-loaded: copy
drafted, targets mapped, artifacts prepped, signals watched. Questions for Zaal go via ZOE Telegram
(fallback PushNotification), not just the terminal.

## CHECK (every wake, cheap)

| Signal | How | Trigger |
|---|---|---|
| Devcon Builder Discount ($349, "opens in July") | curl tickets.devcon.org, grep Builder context | OPEN -> ping Zaal immediately, beats everything |
| Devcon Ecosystem Program R2 | curl devcon.org/en/ecosystem-program | OPEN -> ping Zaal, application drafted in zaotravelz |
| bettercallzaal.com | curl -I | UP -> unblocks links in all pitch materials |
| New intel pasted by Zaal (TG dumps, Venus replies, screenshots) | conversation | Fold into research + plans same wake |

## BUILD backlog (one per wake, priority order)

1. DONE 2026-07-03: meet-outreach pack (warm-six nudges + remaining director DMs) -> kit/meet-outreach-pack.md
2. DONE 2026-07-03: BCZ pitch deck -> kit/bcz-deck.html + kit/bcz-deck.pdf (10 slides, 117KB, ready for the Artizen deck slot)
3. DONE 2026-07-03: Season 7 Artifact plan -> kit/season7-artifact-plan.md (hands-loop for BCZ, raw crowd clip for Festivals, weekend checklist)
4. Festivals teaser cut list: 15-30s square, shots from the CHELLA/PALOOZA reels, no text
5. Testimonial ask drafts (Hurric4n3Ike, Moses, Gneric, KOSBAAR, WaveWarZ crew) - one-line asks
6. zaoartizen.vercel.app community-page spotlight refresh (feature met projects, Plan 1 give)
7. Meet-tracker upkeep: log meets as Zaal reports them, keep PLAN-1 table current

## UPDATE (every wake)

- Commit anything built to main (this repo pushes direct, no PR needed)
- Keep PLAN files current when facts change; RECAP gets a line only for real milestones
- Report to Zaal: what changed, what is blocked on him (SHORT list)

## Cadence

Self-paced (ScheduleWakeup): ~30 min while building, ~60+ min when everything is blocked on Zaal.
Stop rule: Zaal says stop, or the backlog is empty and all signals are quiet.

## Blocked on Zaal (keep short, keep current)

1. Submit both projects to the target funds + fire the James/Pete/Telamon DMs (all drafted)
2. Send the warm-six nudges (drafted this wake)
3. BCZ page: 45s video, testimonials, goal decision
4. Artizen LIVE slot email to Wadooah (drafted)
5. Weekend shoot: hands loop (BCZ video slot + S7) + AttaBotty archive ask (unblocks 3 deliverables)
