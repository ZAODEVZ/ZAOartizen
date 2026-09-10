// ZAO Fund dashboard data. EDIT THIS FILE to update the scoreboard - the page reads from it.
// Numbers come from the live Artizen dashboard (re-check before updating; standings move daily).
// Use null for anything not yet filled in - the page renders it as "TBD".

export interface FundStats {
  rank: number | null; // rank among all Artizen funds
  scoreLabel: string | null; // RETIRED - Artizen dropped the score when rank became money raised (Playbook v21, 2026-08-21). Unused; kept null.
  prizeUsd: number | null; // current prize for the fund's top project
  poolUsd: number | null; // total deposited into the fund
  matchDeployedUsd: number | null; // THE KPI - match actually unlocked by sales (the "raised" figure)
  matchRemainingUsd: number | null; // undeployed match still in the pool (the "available" figure)
  projectsCurated: number | null;
  signupsDriven: number | null; // community signups we drove onto Artizen
  activeDrive: string | null; // e.g. "Frontier Fund Drive"
  driveMultiplier: string | null; // e.g. "2x"
  driveDeadline: string | null; // e.g. "2026-07-09"
  lastUpdated: string; // YYYY-MM-DD (human-facing date of the last edit)
  // ISO 8601 UTC instant the numbers were scraped. Drives the "Data as of" stamp and the
  // stale warning on every page that shows rank/match/funding. When only the date is known,
  // use T00:00:00Z - that reads older than reality, which is the safe direction for a guard.
  scrapedAt: string;
  updatedBy: string;
}

export interface BackedProject {
  name: string;
  inFund: 'yes' | 'no' | 'after vote';
  otherFunds: string; // funds it is stacked into (or target)
  salesUsd: number | null; // dollar value of Artifacts sold (as Artizen displays it)
  rank: number | null; // season leaderboard rank
  notes: string;
}

export interface Horse {
  project: string | null; // the one project we are pushing this drive
  goal: string | null;
  result: string | null;
}

export interface ProofEntry {
  drive: string;
  horse: string;
  buyersMoved: number | null;
  rankChange: string; // e.g. "17 -> 9"
  matchDeployedUsd: number | null;
  win: boolean | null;
}

// --- EDIT BELOW ---

// Written by scripts/refresh-fund.mjs from the fund's own Artizen page (see scrapedAt). Null = TBD: the
// scraper nulls anything it cannot vouch for rather than leave an older value under a fresh date.
export const fundStats: FundStats = {
  rank: null,
  scoreLabel: null,
  prizeUsd: null,
  poolUsd: null,
  matchDeployedUsd: null, // "RAISED" on Artizen
  matchRemainingUsd: 1236, // "AVAILABLE" on Artizen
  projectsCurated: 19, // the fund page's "Competition" count = curated projects. NOT its "Curation" count, which is submitted + removed (41 = 8 + 33 on 2026-09-10)
  signupsDriven: null,
  activeDrive: 'Limitless Fund Drive',
  driveMultiplier: null, // confirm current multiplier
  driveDeadline: 'ends in 6 days (read 2026-09-10)',
  lastUpdated: '2026-09-10',
  scrapedAt: '2026-09-10T20:15:00Z',
  updatedBy: 'auto-refresh',
};

// Sales/ranks are season-leaderboard figures scraped 2026-06-21.
export const backedProjects: BackedProject[] = [
  {
    name: 'InfiniteZero Network',
    inFund: 'yes',
    otherFunds: 'Funding the Commons',
    salesUsd: 46021,
    rank: 1,
    notes: '#1 on the season board (Abraham Nash)',
  },
  {
    name: 'Edge Esmeralda 2026',
    inFund: 'yes',
    otherFunds: 'Human Flourishing',
    salesUsd: 30569,
    rank: 2,
    notes: 'Telamon Ardavanis (doc 674)',
  },
  {
    name: 'PolyRaiders (HuRya Empowerment Foundation)',
    inFund: 'no',
    otherFunds: '',
    salesUsd: 1200,
    rank: 22,
    notes: 'Moses; curate in + boost push. Cause: dignity for girls (pads, education)',
  },
  {
    name: 'The Impact Concerts',
    inFund: 'yes',
    otherFunds: '',
    salesUsd: 30,
    rank: 32,
    notes: 'EZinCrypto; possible Jose tie (doc 745)',
  },
  {
    name: 'Marie Chain',
    inFund: 'after vote',
    otherFunds: '',
    salesUsd: null,
    rank: null,
    notes: 'applied; intro sent 2026-06-21',
  },
  {
    name: 'COC Concertz',
    inFund: 'after vote',
    otherFunds: "We're Loud / Global Music (target)",
    salesUsd: null,
    rank: null,
    notes: 'Thy Rev leads; 50/50 JV',
  },
  {
    name: 'WaveWarZ Zambia',
    inFund: 'after vote',
    otherFunds: 'Global Music (target)',
    salesUsd: null,
    rank: null,
    notes: 'Iman lead; pilot one artist',
  },
];

export const horse: Horse = {
  project: null,
  goal: null,
  result: null,
};

export const proofLog: ProofEntry[] = [
  // Newest first. Add one row per drive after each rally.
  // { drive: 'Frontier', horse: 'PolyRaiders', buyersMoved: 0, rankChange: '17 -> 0', matchDeployedUsd: 0, win: false },
];

export interface CrossbackFund {
  fund: string;
  poolUsd: number | null; // pool from the fund-directory research (re-check live before quoting)
  fitFor: string; // which ZAO projects should stack into it
}

// Cross-back targets: funds to get ZAO projects curated into so each $1 sale stacks match.
// Pool sizes from research/fund-directory.md (79-fund scan); re-scrape before quoting publicly.
export const crossbackFunds: CrossbackFund[] = [
  { fund: 'Greenpill Fund (Regen Gatherings)', poolUsd: 37149, fitFor: 'ZAOstock, Zaoville' },
  { fund: "We're Loud Fund (DIY Music Festivals)", poolUsd: 3784, fitFor: 'COC Concertz, ZAOstock, WaveWarZ Zambia' },
  { fund: 'Global Music Fund', poolUsd: 256, fitFor: 'Thy Rev, COC Concertz, WaveWarZ Zambia, Impact Concerts' },
  { fund: 'Bonfires Fund (Agentic Creativity)', poolUsd: 104, fitFor: 'ZOE / Hermes (ZAO KG partner)' },
  { fund: 'Music + Healing Fund', poolUsd: 103, fitFor: 'COC Concertz' },
];
