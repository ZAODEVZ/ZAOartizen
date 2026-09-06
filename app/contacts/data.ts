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
  /** One line on why the status is what it is. */
  statusNote: string;
  /** ISO date a message actually went out. Only set when status is 'contacted'. */
  contactedOn?: string;
  /** What research turned up. Present only where something real was found. */
  research?: string;
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
    statusNote: 'Top seller in the fund across all of Season 6. Never approached.',
    research:
      'Oxford CS PhD (Human Centred Computing), Cambridge MPhil, MBBS. Founder of Doctelligence. Works on data sovereignty through decentralised federated learning and peer-to-peer architecture, bridging healthcare and web infrastructure. InfiniteZero Foundation is a non-profit building an ownerless, validator-secured AI protocol that pushes compute and data to the edge. Same DIN project as ZAO research doc 760. An academic with published papers and a public GitHub, which makes him the easiest cold open on the list.',
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
    statusNote: 'Invited Zaal to Healdsburg. Warm-six note drafted 2026-07-03, still unsent.',
    research:
      'Co-founder of Edge City. Edge Esmeralda is a month-long popup village in Healdsburg, California, 500-plus people, alongside Edge City Lanna in Chiang Mai and Patagonia. Note the framing difference: Artizen is a Touch Grass Residency partner for Edge, not a crowdfunding ask, so treat Telamon as a peer institution rather than a grantee. Also the door into an Edge City house for the ZAO travel circuit.',
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
    statusNote: 'Same person as Edge Esmeralda, same drafted note. Funds under-25 builders for a month at Edge City.',
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
    statusNote: 'Number 3 in the fund by sales and the identity is still unresolved.',
    research:
      'The handle "Yessie" returns nothing tied to this project. Two unrelated Voices of the Land organisations exist (an Alberta library project and an environmental restoration initiative); neither matches. Artizen project comments are the only known route.',
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
    statusNote: 'Org confirmed, no named individual found.',
    research:
      'Supports community-driven biotech with tokenised reef patches that evolve with real-world data, plus an on-chain coral strain and protocol registry. Marine biotech, socio-ecological restoration and modular wet labs.',
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
    statusNote: 'Reachable today in a channel Zaal is already standing in. Free introduction, never taken.',
    research:
      'Temple of Sound: listening experiments, concerts and biosphere communication. No web presence matched the NAOBA name; the Telegram sighting is the only confirmed identity thread.',
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
    statusNote: 'Already flagged internally as a ZAO Fund supporter, never followed up.',
    research:
      'Austin, Texas media production studio: cinematic video, photography, branded content, event coverage and immersive work. Coralverse is a persistent interconnected multiverse blending generative AI, architecture and ocean conservation. Reef Revival is the quest layer where players restore virtual reef by collecting ocean plastics.',
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
    statusNote: 'The most commercially proven creator on the roster, never approached.',
    research:
      'A physical and digital trading card game about onchain lore and human flourishing, made by a former Spider-Man artist. The physical cards sold out twice and have generated over $70,000, and the game has been played in Tokyo, Argentina, Thailand and the USA. Combat blends Hearthstone flow with a Magic-style stack. He already knows how to sell a physical product to a crypto audience, which is the skill the fund\'s other 30-plus projects are missing.',
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
    statusNote: 'Closest structural match to ZAO Festivals anywhere in the fund. Never contacted.',
    research:
      'Eska stewards A Corujeira, a centre for regenerative arts in the mountains of northern Portugal. The gathering is five days off-grid with 50 makers, turning a reforestation site into a living sculpture garden with land art in clay and wood and a giant owl woven from branches. Camps host a sauna, teahouse, clayhouse and sculpture garden. All rental profits are reinvested into reforestation.',
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
    statusNote: 'Warm-six message written 2026-07-03, not sent. Also stacked in Global Music, so cross-curation is the hook.',
    research:
      'Multidisciplinary fashion, music and blockchain showcase. No real name or socials findable for Gneric. Fund inclusion is confirmed; any deeper ZAO relationship is not.',
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
    statusNote: 'Site found, person not pinned down.',
    research:
      'Documenting living systems: a platform turning community-building experience into the commons. EU-based.',
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
    statusNote: 'Called a ZAO community artist internally, but there is no logged contact and the naming is unresolved.',
    research:
      'An EP of five experimental tracks, ministering hope out of brokenness. RESOLVE BEFORE SENDING: the project appears as HOPE (research 843), as InSync (app/community/data.ts), and one screenshot credits a third name, "JBS RG". Confirm which is the real project and creator.',
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
    statusNote: 'Not seen in the Season 7 capture. Name too common to resolve.',
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
    statusNote: 'The most industry-credentialed creator in the fund, never contacted.',
    research:
      'Writer, director and BAFTA-nominated visual effects artist working between Luxembourg and Los Angeles. Credits include Everything Everywhere All at Once and Arcadian. Cinemetropolis uses AR to expand physical miniatures into one connected movie universe. One message here is worth more than ten to unresolvable handles.',
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
    statusNote: 'Not seen in the Season 7 capture. No match for the handle on any music platform.',
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
    statusNote: 'Not seen in the Season 7 capture.',
    research:
      'The World Album is the first album to feature artists born in every country on earth: 200 songs, 93 languages, 121 genres, 12.5 hours, released 2025-08-01, including three of the eleven people ever born in Antarctica. Artists keep 100% of ownership and royalties and are encouraged to direct half toward a cause in their home country.',
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
    statusNote: 'No web trace for the project or the handle.',
    research: 'Described as a cypherpunk space-opera docu-myth from inside crypto\'s war room.',
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
    statusNote: 'Unresolvable from the handle alone.',
    research: 'A cinematic archive of Nigerian identity plus Web3 cultural preservation.',
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
    statusNote: 'Real public footprint, never approached.',
    research:
      'DeSci Asia supports the decentralised science movement across Asia. Swift Evo has run X Spaces with Uncommons and the Global Chinese Community of Universal Digital Commons, and was an operator for the DeSci round in Gitcoin GG20. The legal name was not confirmed but the person is publicly reachable.',
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
    statusNote: 'No match for the handle.',
    research: 'A protected community space for justice and solidarity activists.',
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
    statusNote: 'Not seen in the Season 7 capture. Obvious ZAO Festivals programming fit.',
    research:
      'Founder and director of Crowdsource Choir, an immersive participatory singing experience built on guided group vocals and rhythm. Live, co-created entertainment. A festival slot is a concrete give rather than a generic ask.',
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
    statusNote: 'Close ally, shared Artizen learning group with Zaal and Thy Rev. Warm-six note drafted, unsent.',
    research:
      'Web3 art funding dignity for girls in Nigeria: 767 mints on Base reached 1,000 girls, and the project is now building a vocational centre. The only project in the fund with real traction in Season 7 ($100 sales / $300 match). Note that its artifacts are around $1.50 on Base, distinct from the $10 Artizen standard.',
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
    statusNote: 'Warm-six message including a testimonial trade, written 2026-07-03, not sent.',
    research:
      'A two-day summit where creators showcase work and learn to own it onchain. No findable web or social presence, so the description is our note only, not verified.',
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
    statusNote: 'No match.',
    research: 'One stage play a month telling Nigerian stories and paying creatives.',
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
    statusNote: 'No verified route under either name.',
    research: 'Women-led cultural infrastructure: music, film, AI tools, digital ownership.',
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
    statusNote: 'The most conspicuous gap in this file: Artizen\'s own standout win of the season, in our fund, never contacted.',
    research:
      'Award-winning immersive artist and professor at Saint Peter\'s University. A year-long AR project turning Liberty State Park into an interactive outdoor museum for the United States\' 250th anniversary: QR codes around the park trigger immersive digital installations and historical storytelling. Launched 2026-07-04 to roughly 10,000 attendees with local press coverage, and Artizen\'s own team cited it as the standout community win of Season 6.',
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
    statusNote: 'Institutionally the best-connected organisation in the fund, never contacted.',
    research:
      'KNOTTO curated an EU-wide open call for the European Union Pavilion at Expo 2025 Osaka, selecting five European artists and craftspeople for a one-month residency in Japan, each paired with a Japanese craftsperson. Results showed at Bridge Studio in Kyoto, then toured Europe including the Latvian National Museum of Art (Riga Bourse), 2026-04-10 to 2026-05-03. The premise is that ancestral craft knowledge can heal the fashion and textile industry.',
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
    statusNote: 'A functioning media company with named staff and a working contact route.',
    research:
      'A platform for African rap covering news, editorial and the Hip-Hop Africa Fest across East, North, South and West Africa. Hip-Hop Africa Radio, a 24-hour online station with interviews, freestyle sessions and cultural programming, went live 2025-12-01.',
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
    statusNote: 'No web trace under this name.',
    research: 'An immersive sound lab and sonic theatre staged at ancient sites. Listening as a frontier technology.',
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
    statusNote: 'Project traces to a real initiative, but the link to the handle is unconfirmed.',
    research:
      'Palestinian women in Cairo rebuilding identity through tatreez, the traditional Palestinian cross-stitch. A Cairo tatreez micro-business founded by Alaa Shaker is documented publicly and matches the description, but the connection to the whyldwanderer handle has not been confirmed. Verify before naming anyone.',
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
    statusNote: 'No match.',
    research: 'An authorship-first digital painting marketplace where you paint within the platform.',
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
    statusNote: 'Warm-six note written but explicitly gated on verifying who this actually is.',
    research:
      'RESOLVE BEFORE SENDING: three different "Impact Concert" entities exist and earlier notes conflated them. (1) The Artizen creator, handle EZinCrypto or EDInCrypto, unverified, no web presence. (2) impactconcerts.com, Drew Frankel and Peter Himberger, Mid-Hudson Valley NY, founded 2018, a different entity. (3) Jose Acabrera, a regen musician running a monthly Impact Concert on the 22nd.',
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
    statusNote: 'No match.',
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
    statusNote: 'No match.',
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
    statusNote: 'The fund\'s number 2 supporter by boost units (511). Known to Zaal, but the drafted email is ON HOLD.',
    research:
      'HOLD THE DRAFT: the drafted email claims an "AI broadcast network that pays African creators" and that is not confirmed. Baraza Media Lab in Nairobi (x.com/BarazaLab) is a media TRAINING HUB founded 2019, a different entity. Either the Artizen project is something else or our description is wrong. Confirm with Aziz directly before sending anything.',
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
    statusNote: 'BCZ runs POIDH bounty rounds. The zpoidh repo is the shared surface.',
    research:
      'A non-custodial on-chain bounty platform on Base, launched Spring 2024: post a bounty, claim it with photographic proof. Canonical ZAO home is github.com/bettercallzaal/zpoidh.',
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
    statusNote: '50/50 joint venture with The ZAO. Zaal runs the stream side until COC takes the infrastructure.',
    research:
      'A recurring free live-music series: live sets, artist talks and Web3 activations broadcast across Spatial.io, X Spaces, Twitch, TikTok and YouTube. Five shows produced. The ZAO does NOT own it - Thy Rev leads, COC owns and operates.',
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
    statusNote: 'Zaal made an intro DM. Curated in, no sales yet.',
    research:
      'Berlin singer, songwriter, pianist, DJ, producer and event organiser. Won the German Songwriting Award in 2023 for "Freedom". Soul, blues and house. Collaborations with Alligatoah, Kontra K, Porky of Deichkind and the Prague Metropolitan Orchestra; festivals include Cairo Jazz Festival, Rudolstadt, Classic Open Leipzig and APAP New York. No public announcement of the new album was found, so do not cite album specifics in copy.',
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
    statusNote: 'Ranked number 2 in the Season 7 fund roster and has zero notes anywhere in this repo.',
    research: 'An artist and developer residency. New in Season 7, never researched.',
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
    statusNote: 'New in Season 7, no repo notes.',
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
