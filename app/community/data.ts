// ZAO community projects on Artizen - projects owned by ZAO members (people who have supported
// The ZAO). These are the "ZAO bloc": back them all (buy + boost) so the whole set climbs together.
// Curate them into the ZAO Fund + adjacent funds for stacked match. Edit this list as members launch projects.

export interface CommunityProject {
  name: string;
  owner: string; // the ZAO member who runs it
  slug: string; // artizen.fund/index/p/<slug>
  note: string; // their tie to the ZAO / what it is
  verified: boolean; // research-confirmed (true) vs project details still being confirmed (false)
  status?: string; // Artizen traction if known (e.g. "~$5.8k sales")
}

export const ARTIZEN_PROJECT_BASE = 'https://artizen.fund/index/p/';

export const communityProjects: CommunityProject[] = [
  // Notes verified 2026-06-26 - see research/bloc-projects.md for confidence + sources. Items marked
  // "(confirming)" were not web-verifiable; keep neutral until Zaal confirms.
  { name: 'The Impact Concerts', owner: 'EDInCrypto (EZ)', slug: 'impact-concerts', note: 'Impact-driven music events; ZAO supporter.', verified: true },
  { name: 'POIDH', owner: 'Kenny Vidinich', slug: 'poidh', note: 'Non-custodial on-chain bounty platform on Base; BCZ/ZAO run creative bounty rounds on it (zpoidh).', verified: true },
  { name: 'Fellenz Tourz North America', owner: 'Tom Fellenz', slug: 'fellenz-tourz-north-america', note: 'Tom Fellenz - veteran event producer + ZAOstock advisor, 20+ events.', verified: true },
  { name: 'COC Concertz', owner: 'Thy Revolution', slug: 'cocconcertz', note: '50/50 ZAO x COC live-concert JV - Thy Rev leads, COC owns it. 5 shows, multi-platform stream.', verified: true },
  { name: 'Heritage Collection', owner: 'Gneric', slug: 'heritage-collection', note: 'Fashion, music + blockchain showcase. In the ZAO Fund.', verified: true, status: '~$5.8k sales' },
  { name: 'InSync', owner: 'JED XO', slug: 'insync', note: 'Music by JED XO (also the HOPE EP); ZAO community artist.', verified: true, status: '~$5.7k sales' },
  { name: 'HuRya Empowerment Foundation', owner: 'PolyRaiders (Moses)', slug: 'hurya-empowerment-foundation', note: 'Web3 art funding dignity for girls in Nigeria - 767 Base mints reached 1,000 girls; building a vocational center. Close ZAO ally.', verified: true, status: '767 mints -> 1,000 girls' },
  { name: 'The Creator Block', owner: 'KOSBAAR', slug: 'the-creator-block', note: 'Summit where creators showcase + learn to own their work on-chain.', verified: true },
  { name: 'Ecoes of Freedom', owner: 'Trish', slug: 'ecoes-of-freedom', note: 'America 250 - site-specific AR public art + history tour, Jersey City.', verified: true },
  { name: 'Baraza TV', owner: 'Motomoto (Aziz)', slug: 'baraza-tv', note: 'Africa-focused media network out of Nairobi; pays African creators. ZAO Fund supporter.', verified: true },
  { name: "Marie Chain's New Album", owner: 'Marie Chain', slug: 'marie-chain-new-album', note: 'Berlin soul/pop/jazz singer-songwriter (German Songwriting Award winner) completing a new album.', verified: true },
];

// Artizen neighbors - projects we met in the Artizen creator community (the private TG group) and back
// as part of the meet-projects push (PLAN-1). Not ZAO-member projects; good people building adjacent
// things. Slugs taken from links they shared themselves (2026-07-03). Backing neighbors is the give
// that opens doors: boost first, ask second.
export const neighborProjects: CommunityProject[] = [
  { name: 'CALMA', owner: 'G3R', slug: 'calma', note: 'Sound library from Misiones, Argentina - a creative and educational trigger. Active voice in the creator community.', verified: true },
  { name: 'Tune In Show', owner: 'Brooke', slug: 'tune-in-show', note: 'Show + companion book with a standout artifact video; running an NYC sweepstakes with magazine tie-ins.', verified: true },
  { name: 'Reset and Rise', owner: 'community creator', slug: 'reset-and-rise', note: 'Live group emotional-transformation experiences in community.', verified: true },
  { name: 'Back to School', owner: 'Chidi', slug: 'back-to-school', note: 'Sponsoring out-of-school children in Nigeria back into classrooms.', verified: true },
  { name: 'Solar-Powered Clean Water', owner: 'Chidi', slug: 'solar-powered-clean-water-project', note: 'Clean-water access for 17 communities; $5,000 covers one community.', verified: true },
  { name: 'Crystal Sovereigns', owner: 'community creator', slug: 'crystal-sovereigns', note: 'Mythic future where five elemental guardians stop humanity from unplugging itself amid the rise of AI.', verified: true },
  { name: "The Oracle: The Earth's Guardian", owner: 'Paloma', slug: 'the-oracle-the-earths-guardian-1', note: 'Presented at Artizen LIVE; earth-guardian storytelling.', verified: true },
  { name: 'Uganda Web3 Revolution', owner: 'community creator', slug: 'strengthening-community-resilience-through-environmental-conservation-soci', note: 'Ugandan communities restoring ecosystems while earning crypto rewards.', verified: true },
];
