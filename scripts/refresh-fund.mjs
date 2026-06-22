#!/usr/bin/env node
// Scrape the live ZAO Fund page and (optionally) update app/dashboard/data.ts.
// Usage:
//   node scripts/refresh-fund.mjs          # scrape + print what it found (no write)
//   node scripts/refresh-fund.mjs --write  # also update app/dashboard/data.ts
//
// Uses the gstack `browse` headless binary because Artizen is client-rendered (Bubble.io),
// so plain HTTP fetch returns nothing. Non-destructive: only rewrites a field when it
// confidently parses a value; leaves everything else untouched.

import { execFileSync } from 'node:child_process';
import { existsSync, readFileSync, writeFileSync } from 'node:fs';
import { homedir } from 'node:os';
import { join } from 'node:path';

const FUND_URL = 'https://artizen.fund/index/mf/zao-fund-for-emerging-culture?season=6';
const DATA_FILE = new URL('../app/dashboard/data.ts', import.meta.url).pathname;
const WRITE = process.argv.includes('--write');

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
try {
  run('goto', FUND_URL);
  try { run('wait', '--networkidle'); } catch { /* best effort */ }
  // give the SPA a moment to render
  execFileSync('sleep', ['4']);
} catch (e) {
  console.error('navigation failed:', e.message);
}

let text = '';
try {
  text = run('text');
} catch (e) {
  console.error('could not read page text:', e.message);
  process.exit(1);
}
try { run('stop'); } catch { /* ignore */ }

// Parse the fund-level stats from the concatenated Bubble text.
const parseNum = (re) => {
  const m = text.match(re);
  return m ? Number(m[1].replace(/,/g, '')) : null;
};
const parseStr = (re) => {
  const m = text.match(re);
  return m ? m[1] : null;
};

const found = {
  rank: parseNum(/RANK#?(\d+)/i),
  scoreLabel: parseStr(/SCORE([\d.,]+)/i),
  prizeUsd: parseNum(/PRIZE\$([\d,]+)/i),
  matchDeployedUsd: parseNum(/RAISED\$([\d,]+)/i),
  matchRemainingUsd: parseNum(/AVAILABLE\$([\d,]+)/i),
  poolUsd: parseNum(/\$([\d,]+)Total/i),
};

console.log('\nParsed:');
for (const [k, v] of Object.entries(found)) console.log(`  ${k}: ${v ?? '(not found)'}`);

if (!WRITE) {
  console.log('\nDry run. Re-run with --write to update app/dashboard/data.ts.');
  process.exit(0);
}

// Non-destructive update: only replace fields we confidently parsed.
let src = readFileSync(DATA_FILE, 'utf8');
const today = new Date().toISOString().slice(0, 10);
const repl = (key, value) => {
  if (value === null || value === undefined) return;
  const valStr = typeof value === 'string' ? `'${value}'` : String(value);
  const re = new RegExp(`(\\n\\s*${key}:\\s*)([^,\\n]+)(,)`);
  if (re.test(src)) src = src.replace(re, `$1${valStr}$3`);
};
repl('rank', found.rank);
repl('scoreLabel', found.scoreLabel);
repl('prizeUsd', found.prizeUsd);
repl('poolUsd', found.poolUsd);
repl('matchDeployedUsd', found.matchDeployedUsd);
repl('matchRemainingUsd', found.matchRemainingUsd);
repl('lastUpdated', today);
src = src.replace(/(\n\s*updatedBy:\s*)'[^']*'/, `$1'auto-refresh'`);
writeFileSync(DATA_FILE, src);
console.log('\nUpdated', DATA_FILE, `(lastUpdated ${today}).`);
console.log('Review the diff, then: npx next build && npx vercel --prod --yes');
