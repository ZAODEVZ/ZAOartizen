// ZAO Fund dashboard data. EDIT THIS FILE to update the scoreboard - the page reads from it.
// Numbers come from the live Artizen dashboard (re-check before updating; standings move daily).
// Use null for anything not yet filled in - the page renders it as "TBD".

export interface FundStats {
  rank: number | null; // rank among all Artizen funds
  poolUsd: number | null; // total deposited into the fund
  matchDeployedUsd: number | null; // THE KPI - match actually unlocked by sales
  matchRemainingUsd: number | null; // undeployed match still in the pool
  projectsCurated: number | null;
  signupsDriven: number | null; // community signups we drove onto Artizen
  activeDrive: string | null; // e.g. "Frontier Fund Drive"
  driveMultiplier: string | null; // e.g. "2x"
  driveDeadline: string | null; // e.g. "2026-07-09"
  lastUpdated: string; // YYYY-MM-DD
  updatedBy: string;
}

export interface BackedProject {
  name: string;
  inFund: 'yes' | 'no' | 'after vote';
  otherFunds: string; // funds it is stacked into (or target)
  artifactsSold: number | null;
  rank: number | null;
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

export const fundStats: FundStats = {
  rank: null,
  poolUsd: null,
  matchDeployedUsd: null,
  matchRemainingUsd: null,
  projectsCurated: null,
  signupsDriven: null,
  activeDrive: null,
  driveMultiplier: null,
  driveDeadline: null,
  lastUpdated: '2026-06-21',
  updatedBy: 'Zaal',
};

export const backedProjects: BackedProject[] = [
  {
    name: 'InfiniteZero Network',
    inFund: 'yes',
    otherFunds: 'Funding the Commons',
    artifactsSold: null,
    rank: null,
    notes: '#1 historically; stacked ZAO Fund + FTC',
  },
  {
    name: 'PolyRaiders (Moses)',
    inFund: 'no',
    otherFunds: '',
    artifactsSold: null,
    rank: 17,
    notes: 'already ~$14k; curate in + boost push',
  },
  {
    name: 'Marie Chain',
    inFund: 'after vote',
    otherFunds: '',
    artifactsSold: null,
    rank: null,
    notes: 'applied; intro sent 2026-06-21',
  },
  {
    name: 'COC Concertz',
    inFund: 'after vote',
    otherFunds: "We're Loud / Global Music (target)",
    artifactsSold: null,
    rank: null,
    notes: 'Thy Rev leads; 50/50 JV',
  },
  {
    name: 'WaveWarZ Zambia',
    inFund: 'after vote',
    otherFunds: 'Global Music (target)',
    artifactsSold: null,
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
