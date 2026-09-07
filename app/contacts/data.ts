// The ZAO Fund creator contact book - every project curated into the ZAO Fund for Emerging Culture,
// who owns it, how to reach them, and whether we have actually spoken to them.
//
// WHY THIS EXISTS: the fund curates 40 projects and has almost never talked to any of them. 35 of 36
// projects showed $0 four days into Season 7. Curation without relationship is the whole problem.
// PLAN-1-MEET-PROJECTS.md is the strategy; this file is the ledger.
//
// HOW TO ADD A CONTACT: append a row below. Rules for keeping it honest:
//   - identity 'verified' means a named human or org was confirmed by research, with a source.
//   - identity 'partial' means the project is real but the person behind the handle is not pinned down.
//   - identity 'unknown' means the handle returns nothing anywhere. Say so; do not guess.
//   - status 'relationship' requires a real prior exchange, not a shared Telegram group.
//   - status 'drafted' means copy exists in kit/meet-outreach-pack.md and has NOT been sent.
//   - When a message actually goes out, move the row to 'contacted' and set contactedOn.
//   - Log the reply in PLAN-1-MEET-PROJECTS.md's meet tracker, not here.
//
// Sources: research/843 (Season 6 roster, 2026-06-11), research/851 (Season 7 roster, 2026-07-13),
// app/leaderboard/data.ts (2026-06-21 snapshot), research/bloc-projects.md, kit/meet-outreach-pack.md.
// Creator identities and contact routes verified by web research 2026-08-26.

export type OutreachStatus = 'relationship' | 'contacted' | 'drafted' | 'cold';
export type IdentityConfidence = 'verified' | 'partial' | 'unknown';

export interface RosterContact {
  /** Project name as it appears on Artizen. */
  project: string;
  /** Who owns it. The handle, plus the real name where research confirmed one. */
  owner: string;
  category: string;
  /** Which seasons of the ZAO Fund this project appears in. */
  seasons: number[];
  /** Season 6 artifact sales, 2026-06-21 snapshot. null = joined in Season 7, no S6 figure. */
  s6SalesUsd: number | null;
  identity: IdentityConfidence;
  /** Contact routes, best first. Empty array means no route found - that is a real gap, not laziness. */
  contacts: string[];
  status: OutreachStatus;
  /** ISO date a message actually went out. Only set when status is 'contacted'. */
  contactedOn?: string;
  /** True = there is enough here to write a specific first line today. */
  shortlist?: boolean;
}

export const SNAPSHOT = '2026-08-26';
export const S6_SNAPSHOT = '2026-06-21';
export const FUND_URL = 'https://artizen.thezao.com/';

export const roster: RosterContact[] = [
  {
    project: 'InfiniteZero Network',
    owner: 'Dr. Abraham Nash',
    category: 'DeSci / AI',
    seasons: [6, 7],
    s6SalesUsd: 46021,
    identity: 'verified',
    contacts: [
      'github.com/abrahamnash',
      'cs.ox.ac.uk/people/abraham.nash',
      'github.com/InfiniteZeroFoundation',
      'collaborations@decentralized-ai.org',
    ],
    status: 'cold',
    shortlist: true,
  },
  {
    project: 'Edge Esmeralda 2026',
    owner: 'Telamon Ardavanis',
    category: 'Human flourishing',
    seasons: [6, 7],
    s6SalesUsd: 30569,
    identity: 'verified',
    contacts: ['telamon@edgecity.live', 'edgecity.live', 'substack.com/@telamonardavanis'],
    status: 'relationship',
    shortlist: true,
  },
  {
    project: 'Edge City Fellowship',
    owner: 'Telamon Ardavanis',
    category: 'Fellowship',
    seasons: [6, 7],
    s6SalesUsd: 10567,
    identity: 'verified',
    contacts: ['telamon@edgecity.live', 'edgecity.live'],
    status: 'relationship',
  },
  {
    project: 'Voices of the Land',
    owner: 'Yessie',
    category: 'Music',
    seasons: [6, 7],
    s6SalesUsd: 23336,
    identity: 'unknown',
    contacts: [],
    status: 'cold',
  },
  {
    project: 'Regen Reef',
    owner: 'MesoReefDAO',
    category: 'ReFi',
    seasons: [6, 7],
    s6SalesUsd: 9627,
    identity: 'partial',
    contacts: ['mesoreefdao.org'],
    status: 'cold',
  },
  {
    project: 'Gaian Temple / Gaia Sound Temple',
    owner: 'NAOBA (appears in the fund-director Telegram as "Tamara | NAOBA")',
    category: 'Sound',
    seasons: [6, 7],
    s6SalesUsd: 7797,
    identity: 'partial',
    contacts: ['Artizen fund-director Telegram (the only confirmed channel)'],
    status: 'cold',
  },
  {
    project: 'Coralverse: Reef Revival',
    owner: 'ZCreative Media',
    category: 'Gaming',
    seasons: [6, 7],
    s6SalesUsd: 7756,
    identity: 'verified',
    contacts: ['zcreativemedia.tv', 'coralverse.world', 'reef-revival.com'],
    status: 'cold',
    shortlist: true,
  },
  {
    project: 'Memethology',
    owner: 'Colton (Colton Art), co-created with Kinley Orr',
    category: 'Community / TCG',
    seasons: [6, 7],
    s6SalesUsd: 6684,
    identity: 'verified',
    contacts: [
      'x.com/colton_art',
      'memethology.com',
      'news.memethology.com',
      'vip.memethology.com',
    ],
    status: 'cold',
    shortlist: true,
  },
  {
    project: "The Owl's Nest",
    owner: 'Eska',
    category: 'Regenerative culture',
    seasons: [6, 7],
    s6SalesUsd: 5890,
    identity: 'verified',
    contacts: ['acorujeira.pt'],
    status: 'cold',
    shortlist: true,
  },
  {
    project: 'HERITAGE COLLECTION',
    owner: 'Gneric',
    category: 'Fashion',
    seasons: [6],
    s6SalesUsd: 5810,
    identity: 'unknown',
    contacts: ['Artizen project comments'],
    status: 'drafted',
  },
  {
    project: 'ToGather Project',
    owner: 'Sharon',
    category: 'Community',
    seasons: [6, 7],
    s6SalesUsd: 5712,
    identity: 'partial',
    contacts: ['togatherproject.eu (the link between this site and "Sharon" is unconfirmed)'],
    status: 'cold',
  },
  {
    project: 'HOPE (also listed as InSync)',
    owner: 'JED XO',
    category: 'Music',
    seasons: [6, 7],
    s6SalesUsd: 5665,
    identity: 'unknown',
    contacts: [],
    status: 'cold',
  },
  {
    project: 'ENTERTAINMENT EVOLVED',
    owner: 'Matthew Chan',
    category: '360 experience',
    seasons: [6],
    s6SalesUsd: 4910,
    identity: 'unknown',
    contacts: [],
    status: 'cold',
  },
  {
    project: 'Cinemetropolis',
    owner: 'Jeff Desom',
    category: 'Mixed reality',
    seasons: [6],
    s6SalesUsd: 3645,
    identity: 'verified',
    contacts: ['jeffdesom.com', 'vimeo.com/jeffdesom', 'instagram.com/jeffdesom', 'imdb.com/name/nm2088989'],
    status: 'cold',
    shortlist: true,
  },
  {
    project: 'Sonic Sanctuary',
    owner: 'Plexonerz',
    category: 'Electronic music',
    seasons: [6],
    s6SalesUsd: 3562,
    identity: 'unknown',
    contacts: [],
    status: 'cold',
  },
  {
    project: 'International Artists Project',
    owner: 'International Artists Project (org)',
    category: 'Community',
    seasons: [6],
    s6SalesUsd: 3215,
    identity: 'verified',
    contacts: ['internationalartistsproject.org'],
    status: 'cold',
  },
  {
    project: 'CHAINWARS .wtf',
    owner: 'Fly you fools .wtf',
    category: 'Journalism',
    seasons: [6, 7],
    s6SalesUsd: 2532,
    identity: 'unknown',
    contacts: [],
    status: 'cold',
  },
  {
    project: 'THE NEW VANGUARD',
    owner: 'Enrico',
    category: 'Photography',
    seasons: [6, 7],
    s6SalesUsd: 1965,
    identity: 'unknown',
    contacts: [],
    status: 'cold',
  },
  {
    project: 'DeSci Asia',
    owner: 'Swift Evo',
    category: 'DeSci',
    seasons: [6, 7],
    s6SalesUsd: 1870,
    identity: 'partial',
    contacts: ['desciasia.org', 'Gitcoin and DeSci community channels'],
    status: 'cold',
    shortlist: true,
  },
  {
    project: 'The Space (Israel-Palestine)',
    owner: 'Sapirs55',
    category: 'Peacebuilding',
    seasons: [6, 7],
    s6SalesUsd: 1800,
    identity: 'unknown',
    contacts: [],
    status: 'cold',
  },
  {
    project: 'Participatory Spatial Music Show',
    owner: 'Joel DeJong',
    category: 'Participatory art',
    seasons: [6],
    s6SalesUsd: 1375,
    identity: 'verified',
    contacts: ['linkedin.com/in/joeldejong1', 'Crowdsource Choir'],
    status: 'cold',
    shortlist: true,
  },
  {
    project: 'HuRya Empowerment Foundation',
    owner: 'Moses (Poly Raiders)',
    category: 'Impact',
    seasons: [6, 7],
    s6SalesUsd: 1200,
    identity: 'verified',
    contacts: ['x.com/ProlificMoses', 'x.com/polyraiders'],
    status: 'relationship',
  },
  {
    project: 'The Creator Block',
    owner: 'KOSBAAR (also written KOSBAA)',
    category: 'Creator economy',
    seasons: [6, 7],
    s6SalesUsd: 1140,
    identity: 'unknown',
    contacts: ['Artizen project comments'],
    status: 'drafted',
  },
  {
    project: 'THE ART FACTORY',
    owner: 'Gidzeey',
    category: 'Music / theatre',
    seasons: [6, 7],
    s6SalesUsd: 978,
    identity: 'unknown',
    contacts: [],
    status: 'cold',
  },
  {
    project: 'The MOTHERLand Project',
    owner: 'Tarzaa Gerald Caesar (CZA OF REM)',
    category: 'Infrastructure',
    seasons: [6, 7],
    s6SalesUsd: 950,
    identity: 'unknown',
    contacts: [],
    status: 'cold',
  },
  {
    project: 'America 250: Echoes of Freedom',
    owner: 'Trish Gianakis (trishGia)',
    category: 'Augmented reality',
    seasons: [6, 7],
    s6SalesUsd: 910,
    identity: 'verified',
    contacts: ['trishgia.art', 'Saint Peter\'s University faculty directory, Jersey City NJ'],
    status: 'cold',
    shortlist: true,
  },
  {
    project: 'Artisanal Intelligence',
    owner: 'KNOTTO (Anneleen Bertels)',
    category: 'Craftsmanship',
    seasons: [6, 7],
    s6SalesUsd: 675,
    identity: 'verified',
    contacts: ['knotto.world', 'linkedin.com/in/anneleen-bertels-174b3742'],
    status: 'cold',
    shortlist: true,
  },
  {
    project: 'Hip-Hop Africa',
    owner: 'David George Bunna, founder and creative director',
    category: 'Multi-media',
    seasons: [6, 7],
    s6SalesUsd: 550,
    identity: 'verified',
    contacts: ['hiphopafrica.net', 'company emails follow the @hiphopafrica.net pattern'],
    status: 'cold',
    shortlist: true,
  },
  {
    project: 'Ear of Dionysus',
    owner: 'The Decentralised Cult of Quantum Listening',
    category: 'Sound',
    seasons: [6, 7],
    s6SalesUsd: 550,
    identity: 'unknown',
    contacts: [],
    status: 'cold',
  },
  {
    project: 'Thread of Hope',
    owner: 'whyldwanderer',
    category: "Women's empowerment",
    seasons: [6, 7],
    s6SalesUsd: 215,
    identity: 'partial',
    contacts: [],
    status: 'cold',
  },
  {
    project: 'ANFT',
    owner: 'Amin',
    category: 'Digital art',
    seasons: [6, 7],
    s6SalesUsd: 80,
    identity: 'unknown',
    contacts: [],
    status: 'cold',
  },
  {
    project: 'The Impact Concerts',
    owner: 'EZinCrypto / EDInCrypto',
    category: 'Music',
    seasons: [6, 7],
    s6SalesUsd: 30,
    identity: 'unknown',
    contacts: [],
    status: 'drafted',
  },
  {
    project: 'Novelty Scented Candles',
    owner: 'Naphisa',
    category: 'Craftsmanship',
    seasons: [6, 7],
    s6SalesUsd: 0,
    identity: 'unknown',
    contacts: [],
    status: 'cold',
  },
  {
    project: 'CD, Album de Kunarevolution',
    owner: 'Sidsagi',
    category: 'Music',
    seasons: [6, 7],
    s6SalesUsd: 0,
    identity: 'unknown',
    contacts: [],
    status: 'cold',
  },
  {
    project: 'Baraza TV',
    owner: 'Aziz Motomoto',
    category: 'Africa media',
    seasons: [6, 7],
    s6SalesUsd: 0,
    identity: 'partial',
    contacts: ['Artizen fund-director channels'],
    status: 'relationship',
  },
  {
    project: 'POIDH',
    owner: 'Kenny Vidinich (co-creator Rhovian)',
    category: 'Onchain bounties',
    seasons: [7],
    s6SalesUsd: null,
    identity: 'verified',
    contacts: ['poidh.xyz', 'x.com/poidhxyz', 'x.com/kennyistyping', 'farcaster.xyz/kenny'],
    status: 'relationship',
  },
  {
    project: 'COC ConcertZ',
    owner: 'Thy Revolution (COC owns and operates it)',
    category: 'Live music',
    seasons: [7],
    s6SalesUsd: null,
    identity: 'verified',
    contacts: ['cocconcertz.com', 'x.com/thyrevolution', 'farcaster @c_o_c_official'],
    status: 'relationship',
  },
  {
    project: "Marie Chain's New Album",
    owner: 'Marie Chain',
    category: 'Music',
    seasons: [7],
    s6SalesUsd: null,
    identity: 'verified',
    contacts: [
      'mariechain.bandcamp.com',
      'facebook.com/mariechainmusic',
      'ra.co/dj/mariechain',
      'beatport.com/artist/marie-chain/306077',
    ],
    status: 'relationship',
    shortlist: true,
  },
  {
    project: 'Kismet Casa',
    owner: 'Unknown',
    category: 'Residency',
    seasons: [7],
    s6SalesUsd: null,
    identity: 'unknown',
    contacts: [],
    status: 'cold',
  },
  {
    project: 'Oasis of Rhythm',
    owner: 'Unknown',
    category: 'Music',
    seasons: [7],
    s6SalesUsd: null,
    identity: 'unknown',
    contacts: [],
    status: 'cold',
  },
];

/** Two of the 36 Season 7 projects were never captured in the live render of 2026-07-13. */
export const UNCAPTURED_S7 = 2;

export const STATUS_LABEL: Record<OutreachStatus, string> = {
  relationship: 'relationship',
  contacted: 'contacted',
  drafted: 'drafted, unsent',
  cold: 'not contacted',
};

export const STATUS_BLURB: Record<OutreachStatus, string> = {
  relationship: 'A genuine prior line: a partner, an ally, or a collaborator. Not just a shared group chat.',
  contacted: 'A message actually went out. Log the reply in PLAN-1 meet tracker.',
  drafted: 'Copy exists in kit/meet-outreach-pack.md and has not been sent. Blocked on Zaal since 2026-07-03.',
  cold: 'No message, no draft, no logged conversation. In the fund, never spoken to.',
};

export function countBy(status: OutreachStatus): number {
  return roster.filter((r) => r.status === status).length;
}

export function identifiedOwners(): number {
  return roster.filter((r) => r.identity === 'verified').length;
}
