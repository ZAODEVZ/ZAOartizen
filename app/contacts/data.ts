// The ZAO Fund creator contact book - SCHEMA ONLY. The rows live in the private vault.
//
// WHY THIS FILE IS EMPTY: this repo is PUBLIC. The roster held 38 real people with their names,
// contact routes and our notes about them, and scripts/refresh.sh ends in `npx vercel --prod --yes`,
// so the next routine dashboard refresh would have published all of it as a live web page.
// Zaal's call, 2026-09-07: the rows move to ~/zao-vault, the repo keeps the template.
//
// WHERE THE ROWS ARE: ~/zao-vault/projects/zao-fund-roster-private.json (38 rows, same shape as
// RosterContact below). Internal prose is in zao-fund-roster-internal-notes.md. Neither is public.
//
// WHY THIS EXISTS AT ALL: the fund curates its projects and has almost never talked to any of them.
// Curation without relationship is the whole problem. PLAN-1-MEET-PROJECTS.md is the strategy.
//
// HOW TO ADD A CONTACT: add it to the private JSON in the vault, NOT here. Never put a real
// person's name, contact route or your assessment of them in this repo. Rules for keeping it honest:
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
  // Intentionally empty. This repo is public; the 38 real rows live in the private vault at
  // ~/zao-vault/projects/zao-fund-roster-private.json. Do not paste them back in.
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
