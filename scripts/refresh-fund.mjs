#!/usr/bin/env node
// Scrape the live ZAO Fund drive card and (optionally) update app/dashboard/data.ts.
// Usage:
//   node scripts/refresh-fund.mjs          # scrape + print what it found (no write)
//   node scripts/refresh-fund.mjs --write  # also update app/dashboard/data.ts
//
// Uses the gstack `browse` headless binary because artizen.fund is client-rendered (Bubble.io),
// so plain HTTP fetch returns nothing. Non-destructive: only rewrites a field when it confidently
// parses a value; leaves everything else untouched.
//
// REWRITTEN 2026-09-10 for Season 7. History, so nobody re-learns it:
// - Until 2026-09-08 this scraped the fund-vs-fund leaderboard at `index/matchfunds`. Artizen moved
//   that URL to the PROJECT leaderboard (`index/leaderboard/?season=7`), where "ZAO Fund" appears
//   nowhere, and the old URL guard correctly aborted.
// - The fund's OWN page now carries a Fund Drive card for the fund race, which it did not on
//   2026-07-13: RANK, PRIZE, BOOSTS, BONUS, the drive name, RAISED and AVAILABLE, plus a lifetime
//   "Total" and the Competition / Curation counts. So this reads the fund page directly.
// - Rank is money raised since Playbook v21 (2026-08-21). There is no SCORE any more, so
//   `scoreLabel` is left untouched - see research/mechanics-canonical.md section 1.
// - RANK shows "-" when the fund has no activity yet in the current drive. That is parsed as
//   "no rank" and does NOT overwrite the dashboard's last rank.
//
// Guards, both kept from the old script because they stop a silent wrong answer:
// - the `browse` server persists a session between runs, so if `goto` silently fails, `text`
//   returns whatever page was already loaded. The URL is checked before the text is trusted.
// - parsing is anchored to the fund's name followed by its drive card, never to the first
//   "RANK..." on the page (a project row or another fund could render first).
// RE-CHECK BY: 2026-10-01, or whenever Artizen next changes its URLs.

import { execFileSync } from 'node:child_process';
import { existsSync, readFileSync, writeFileSync } from 'node:fs';
import { homedir } from 'node:os';
import { join } from 'node:path';
import { pathToFileURL } from 'node:url';

const FUND_URL = 'https://artizen.fund/index/mf/zao-fund-for-emerging-culture?season=7';
const FUND_URL_RE = /artizen\.fund\/index\/mf\/zao-fund-for-emerging-culture/;
const FUND_NAME = 'ZAO Fund for Emerging Culture';
const DATA_FILE = new URL('../app/dashboard/data.ts', import.meta.url).pathname;
const WRITE = process.argv.includes('--write');

function main() {
  // Find the browse binary; ensure bun is on PATH (browse needs it).
  const browse = join(homedir(), '.claude/skills/gstack/browse/dist/browse');
  if (!existsSync(browse)) {
    console.error('browse binary not found at', browse, '- install gstack browse first.');
    process.exit(1);
  }
  const env = { ...process.env, PATH: `${join(homedir(), '.bun/bin')}:${process.env.PATH}` };

  function run(...args) {
    return execFileSync(browse, args, { env, encoding: 'utf8', timeout: 60000 });
  }

  console.log('Scraping', FUND_URL, '...');
  // Not calling `browse restart` - it looped on "server crashed twice in a row" during testing
  // (2026-07-13). The URL + anchor checks are the safety net. A cold server can take a moment, so
  // goto gets up to 2 attempts.
  const isOnFundPage = () => FUND_URL_RE.test(run('url').trim());
  let landed = false;
  for (let attempt = 1; attempt <= 2 && !landed; attempt++) {
    try {
      run('goto', FUND_URL);
      try { run('wait', '--networkidle'); } catch { /* best effort */ }
      execFileSync('sleep', ['5']); // give the SPA a moment to render
    } catch (e) {
      console.error(`navigation attempt ${attempt} failed:`, e.message);
    }
    try {
      landed = isOnFundPage();
    } catch { /* server not up yet - loop will retry */ }
    if (!landed && attempt === 1) {
      console.error('not on the fund page yet, retrying once more...');
      execFileSync('sleep', ['5']);
    }
  }

  if (!landed) {
    const actualUrl = (() => { try { return run('url').trim(); } catch { return '(unreadable)'; } })();
    console.error(`URL mismatch after goto - expected the ZAO Fund page, got ${actualUrl}. Aborting (stale/failed navigation, not trusting page text).`);
    try { run('stop'); } catch { /* ignore */ }
    process.exit(1);
  }

  let text = '';
  try {
    text = run('text');
  } catch (e) {
    console.error('could not read page text:', e.message);
    process.exit(1);
  }
  try { run('stop'); } catch { /* ignore */ }

  const found = parseFundPage(text);
  if (!found) {
    console.error(`"${FUND_NAME}" followed by its Fund Drive card was not found - the page did not fully render, or Artizen changed the layout. Aborting.`);
    process.exit(1);
  }

  console.log('\nParsed (from the ZAO Fund drive card):');
  for (const [k, v] of Object.entries(found)) console.log(`  ${k}: ${v ?? '(not found)'}`);
  console.log('\nNot written: `totalUsd` (lifetime "Total" - not verified to equal poolUsd), `boosts`, `bonusUsd`,');
  console.log('`inCuration`, `endsIn`. Printed so a human can carry them into kit/standings-tracker.md.');

  if (!WRITE) {
    console.log('\nDry run. Re-run with --write to update app/dashboard/data.ts.');
    process.exit(0);
  }

  // Non-destructive update: only replace fields we confidently parsed.
  let src = readFileSync(DATA_FILE, 'utf8');
  const now = new Date();
  const today = now.toISOString().slice(0, 10);
  // Whole-second ISO instant - the site's "Data as of" stamp reads this to flag data over 48h old.
  const nowIso = `${now.toISOString().slice(0, 19)}Z`;
  const repl = (key, value) => {
    if (value === null || value === undefined) return;
    const valStr = typeof value === 'string' ? `'${value.replace(/'/g, "\\'")}'` : String(value);
    const re = new RegExp(`(\\n\\s*${key}:\\s*)([^,\\n]+)(,)`);
    if (re.test(src)) src = src.replace(re, `$1${valStr}$3`);
  };
  const setNull = (key) => {
    const re = new RegExp(`(\\n\\s*${key}:\\s*)([^,\\n]+)(,)`);
    if (re.test(src)) src = src.replace(re, '$1null$3');
  };
  // RANK "-" means the fund has no activity yet this drive: RAISED and PRIZE read 0 because the
  // drive just opened, not because nothing was ever deployed. Keep the last drive's numbers then.
  const driveActive = found.rank !== null;
  if (driveActive) {
    repl('rank', found.rank);
    repl('prizeUsd', found.prizeUsd);
    repl('matchDeployedUsd', found.raisedUsd); // "RAISED" on the fund's drive card, this drive
  } else {
    // Do NOT keep the old numbers: scrapedAt below would then vouch for values from an earlier
    // drive. Null renders as "TBD" on the page, which is the true state until the fund ranks.
    for (const key of ['rank', 'prizeUsd', 'matchDeployedUsd']) setNull(key);
    console.log('\nRANK is "-" (no activity yet this drive) - rank, prize and raised set to null (TBD).');
  }
  // Fields this scraper cannot vouch for must not sit under a fresh scrapedAt:
  // scoreLabel - Artizen retired the score when rank became money raised (Playbook v21).
  // poolUsd - the page's lifetime "Total" is not verified to mean deposits; fill by hand if known.
  setNull('scoreLabel');
  setNull('poolUsd');
  if (found.endsIn) repl('driveDeadline', `${found.endsIn.toLowerCase()} (read ${today})`);
  repl('matchRemainingUsd', found.availableUsd); // "AVAILABLE" on the fund's drive card
  repl('projectsCurated', found.inCompetition);
  repl('activeDrive', found.activeDrive);
  repl('lastUpdated', today);
  repl('scrapedAt', nowIso);
  src = src.replace(/(\n\s*updatedBy:\s*)'[^']*'/, `$1'auto-refresh'`);
  writeFileSync(DATA_FILE, src);
  console.log('\nUpdated', DATA_FILE, `(lastUpdated ${today}, scrapedAt ${nowIso}).`);
  console.log('Review the diff, then: npx next build && npx vercel --prod --yes');
}

// Exported shape for testing: parseFundPage(text) -> fields, or null if the anchor is missing.
export function parseFundPage(pageText) {
  // The fund's own drive card: "<FUND_NAME><tagline>Curator$21,145TotalSubmit RANK-PRIZE$0BOOSTS0
  // BONUS$0.00Limitless Fund DriveEnds in 6 daysRAISED$0AVAILABLE$1,236..." (2026-09-10).
  // Take the first occurrence of the name that is followed by a RANK within 400 chars.
  let block = null;
  for (let i = pageText.indexOf(FUND_NAME); i !== -1; i = pageText.indexOf(FUND_NAME, i + 1)) {
    const candidate = pageText.slice(i, i + 700);
    const r = candidate.indexOf('RANK');
    if (r !== -1 && r < 400) { block = candidate; break; }
  }
  if (!block) return null;

  const num = (re) => {
    const m = block.match(re);
    return m ? Number(m[1].replace(/,/g, '')) : null;
  };
  const rankMatch = block.match(/RANK#?(\d+|-)/);
  const driveMatch = block.match(/BONUS\$[\d,.]+\s*([A-Z][A-Za-z ]*?Fund Drive)/);
  const endsMatch = block.match(/Fund Drive\s*(Ends in [^R$]*?)\s*RAISED/);
  const count = (label) => {
    const m = pageText.match(new RegExp(`${label}(\\d+)`));
    return m ? Number(m[1]) : null;
  };
  return {
    rank: rankMatch && rankMatch[1] !== '-' ? Number(rankMatch[1]) : null,
    prizeUsd: num(/PRIZE\$([\d,]+)/),
    boosts: num(/BOOSTS([\d,]+)/),
    bonusUsd: num(/BONUS\$([\d,.]+)/),
    activeDrive: driveMatch ? driveMatch[1].trim() : null,
    endsIn: endsMatch ? endsMatch[1].trim() : null,
    raisedUsd: num(/RAISED\$([\d,]+)/),
    availableUsd: num(/AVAILABLE\$([\d,]+)/),
    totalUsd: num(/\$([\d,]+)Total/),
    inCompetition: count('Competition'),
    inCuration: count('Curation'),
  };
}

// Run only when executed directly, so the parser can be imported and tested offline.
if (process.argv[1] && import.meta.url === pathToFileURL(process.argv[1]).href) main();
