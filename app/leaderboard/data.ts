// Season 6 leaderboard - snapshot scraped from artizen.fund 2026-06-21 (Flourish Fund Drive).
// "Sales" = dollar value of Artifacts sold (the rank metric: most sales wins). Numbers move daily.
// zaoTie marks projects connected to the ZAO Fund / ecosystem.

export interface LeaderRow {
  rank: number;
  name: string;
  creator: string;
  salesUsd: number;
  matchUsd: number;
  category: string;
  zaoTie?: string;
}

export const snapshotDate = '2026-06-21';

export const leaderboard: LeaderRow[] = [
  { rank: 1, name: 'InfiniteZero Network', creator: 'Abraham Nash', salesUsd: 46021, matchUsd: 502, category: 'AI / Decentralized', zaoTie: 'in ZAO Fund (doc 760)' },
  { rank: 2, name: 'Edge Esmeralda 2026', creator: 'Telamon Ardavanis', salesUsd: 30569, matchUsd: 2677, category: 'Human Flourishing', zaoTie: 'Telamon (doc 674)' },
  { rank: 3, name: 'Voices of the Land', creator: 'Yessie', salesUsd: 23336, matchUsd: 0, category: 'Music' },
  { rank: 4, name: 'Edge City Fellowship', creator: 'Telamon Ardavanis', salesUsd: 10567, matchUsd: 1557, category: 'Fellowship', zaoTie: 'Telamon (doc 674)' },
  { rank: 5, name: 'Regen Reef', creator: 'MesoReefDAO', salesUsd: 9627, matchUsd: 50, category: 'ReFi' },
  { rank: 6, name: 'Gaian Temple', creator: 'NAOBA', salesUsd: 7797, matchUsd: 939, category: 'Sound' },
  { rank: 7, name: 'Coralverse - Reef Revival', creator: 'ZCreative Media', salesUsd: 7756, matchUsd: 0, category: 'Gaming', zaoTie: 'ZAO Fund supporter' },
  { rank: 8, name: 'Memethology', creator: 'Colton', salesUsd: 6684, matchUsd: 508, category: 'Community' },
  { rank: 9, name: "The Owl's Nest", creator: 'Eska', salesUsd: 5890, matchUsd: 0, category: 'Regenerative Culture' },
  { rank: 10, name: 'HERITAGE COLLECTION', creator: 'Gneric', salesUsd: 5810, matchUsd: 634, category: 'Fashion' },
  { rank: 11, name: 'ToGather Project', creator: 'Sharon', salesUsd: 5712, matchUsd: 45, category: 'Community' },
  { rank: 12, name: 'HOPE', creator: 'JED XO', salesUsd: 5665, matchUsd: 669, category: 'Discovery' },
  { rank: 13, name: 'ENTERTAINMENT EVOLVED', creator: 'Matthew Chan', salesUsd: 4910, matchUsd: 200, category: '360-experience' },
  { rank: 14, name: 'Cinemetropolis', creator: 'Jeff Desom', salesUsd: 3645, matchUsd: 615, category: 'Mixed Reality' },
  { rank: 15, name: 'Sonic Sanctuary', creator: 'Plexonerz', salesUsd: 3562, matchUsd: 270, category: 'Electronic Music' },
  { rank: 16, name: 'International Artists Project', creator: 'International Artists Project', salesUsd: 3215, matchUsd: 270, category: 'Community' },
  { rank: 17, name: 'CHAINWARS .wtf', creator: 'Fly you fools .wtf', salesUsd: 2532, matchUsd: 107, category: 'Journalism' },
  { rank: 18, name: 'THE NEW VANGUARD', creator: 'Enrico', salesUsd: 1965, matchUsd: 250, category: 'Photography' },
  { rank: 19, name: 'DeSci Asia', creator: 'Swift Evo', salesUsd: 1870, matchUsd: 0, category: 'DeSci' },
  { rank: 20, name: 'The Space (Israel-Palestine)', creator: 'Sapirs55', salesUsd: 1800, matchUsd: 0, category: 'Peacebuilding' },
  { rank: 21, name: 'Participatory Spatial Music Show', creator: 'Joel DeJong', salesUsd: 1375, matchUsd: 0, category: 'Participatory Art' },
  { rank: 22, name: 'HuRya Empowerment Foundation (Poly Raiders)', creator: 'Poly Raiders / Moses', salesUsd: 1200, matchUsd: 40, category: 'Impact', zaoTie: 'PolyRaiders - ZAO ally; curate in' },
  { rank: 23, name: 'The Creator Block', creator: 'KOSBAA', salesUsd: 1140, matchUsd: 500, category: 'Creator Economy' },
  { rank: 24, name: 'THE ART FACTORY', creator: 'Gidzeey', salesUsd: 978, matchUsd: 58, category: 'Music' },
  { rank: 25, name: 'The MOTHERLand Project', creator: 'Tarzaa Gerald Caesar', salesUsd: 950, matchUsd: 0, category: 'Infrastructure' },
  { rank: 26, name: 'America 250 - Echoes of Freedom', creator: 'Trishgiaart', salesUsd: 910, matchUsd: 0, category: 'Augmented Reality' },
  { rank: 27, name: 'Artisanal Intelligence', creator: 'KNOTTO', salesUsd: 675, matchUsd: 0, category: 'Craftsmanship' },
  { rank: 28, name: 'Hip-Hop Africa', creator: 'Hiphop Africa', salesUsd: 550, matchUsd: 80, category: 'Multi-Media' },
  { rank: 29, name: 'Ear of Dionysus', creator: 'The Decentralised Cult of Quantum Listening', salesUsd: 550, matchUsd: 0, category: 'Sound' },
  { rank: 30, name: 'Thread of Hope', creator: 'whyldwanderer', salesUsd: 215, matchUsd: 0, category: 'Women Empowerment' },
  { rank: 31, name: 'ANFT', creator: 'Amin', salesUsd: 80, matchUsd: 0, category: 'Digital Art' },
  { rank: 32, name: 'The Impact Concerts', creator: 'EZinCrypto', salesUsd: 30, matchUsd: 30, category: 'Music', zaoTie: 'in ZAO Fund; possible Jose tie (doc 745)' },
  { rank: 33, name: 'Novelty Scented Candles', creator: 'Naphisa', salesUsd: 0, matchUsd: 0, category: 'Craftsmanship' },
  { rank: 34, name: 'CD, Álbum de Kunarevolution', creator: 'Sidsagi', salesUsd: 0, matchUsd: 0, category: 'Musical' },
  { rank: 35, name: 'Baraza TV', creator: 'Aziz Motomoto', salesUsd: 0, matchUsd: 0, category: 'Africa', zaoTie: 'ZAO Fund supporter' },
];
