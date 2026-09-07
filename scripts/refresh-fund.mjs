#!/usr/bin/env node
// Scrape the live ZAO Fund figures and (optionally) update app/dashboard/data.ts.
//
// Usage:
//   node scripts/refresh-fund.mjs                 # scrape + print what it found (no write)
//   node scripts/refresh-fund.mjs --write         # also update app/dashboard/data.ts
//   node scripts/refresh-fund.mjs --json          # emit JSON to stdout (for other tools)
//   node scripts/refresh-fund.mjs --season 7      # override the season (default 7)
//   node scripts/refresh-fund.mjs --save-text out.txt   # dump the rendered text for debugging
//
// ---------------------------------------------------------------------------
// REWRITTEN 2026-08-19. The previous version could not work, for three
// independent reasons. All three are fixed here; none of them were its fault.
//
// 1. It drove the gstack `browse` binary, which is broken against heavy SPAs.
//    `browse`'s ensureServer() health-checks with a single 2s probe, which
//    cannot distinguish a busy daemon from a dead one, so it deletes the state
//    file and spawns a replacement at about:blank while the original keeps
//    running orphaned. `goto` succeeds and the very next command reads a blank
//    page. Root cause + three instances: ZAOOS#3065. Rule:
//    .claude/rules/liveness-probe-guard.md. Fixed upstream in gstack 1.62.0.0;
//    local is 0.9.2.0. We use Playwright directly instead of waiting for that.
//
// 2. It scraped https://artizen.fund/index/matchfunds, which now 302s to
//    /index/leaderboard/?season=N. Its own URL guard would have rejected the
//    redirect even if browse worked.
//
// 3. On that leaderboard each fund card's stats now PRECEDE its name, inverting
//    the old parse - and the SALES/MATCH columns there are scoped to the
//    CURRENT DRIVE, not the season. Reading them as season performance is a
//    silent, plausible, wrong answer (it produced exactly that mistake on
//    2026-08-17; see ZAOOS doc 2309).
//
// So this version scrapes the fund's OWN page instead. That page now
// self-reports RANK/SCORE/PRIZE/RAISED/AVAILABLE plus a season total and the
// full project roster - strictly more than the leaderboard, from one fetch,
// with no cross-card off-by-one risk. (The old header comment said the fund
// page does not show its own rank. That was true then; it is not true now.)
// ---------------------------------------------------------------------------

import { existsSync, readFileSync, writeFileSync } from 'node:fs';
import { createRequire } from 'node:module';
import { homedir } from 'node:os';
import { join } from 'node:path';

const argv = process.argv.slice(2);
const has = (f) => argv.includes(f);
const valOf = (f, dflt) => {
  const i = argv.indexOf(f);
  return i !== -1 && argv[i + 1] ? argv[i + 1] : dflt;
};

const WRITE = has('--write');
const JSON_OUT = has('--json');
const SEASON = valOf('--season', '7');
const SAVE_TEXT = valOf('--save-text', null);

const FUND_SLUG = 'zao-fund-for-emerging-culture';
const FUND_NAME = 'ZAO Fund for Emerging Culture';
const FUND_URL = `https://artizen.fund/index/mf/${FUND_SLUG}?season=${SEASON}`;
const DATA_FILE = new URL('../app/dashboard/data.ts', import.meta.url).pathname;

// The page polls, so `networkidle` NEVER resolves - do not use it. Both this lane
// and the ignite-radio lane measured the settle window as the one variable that
// matters (~23k chars at 3s vs ~26k at 25s on the leaderboard). A desktop user
// agent was once credited for a 41% gain; both lanes retracted that after
// re-measuring. Keep the wait, skip the UA theatre.
const SETTLE_MS = Number(valOf('--settle-ms', '25000'));
const MIN_TEXT_LEN = 500;

const die = (msg) => {
  console.error(`\nABORT: ${msg}`);
  console.error('Nothing was written. Re-run when the cause is fixed.');
  process.exit(1);
};

// --- Playwright resolution -------------------------------------------------
// Not a dependency of this repo (it would drag a browser download into a Next.js
// app). Try the normal resolution first, then known local checkouts. If it is
// missing we FAIL rather than fall back to a scraper that cannot render.
function loadChromium() {
  const require = createRequire(import.meta.url);
  const candidates = [
    'playwright',
    process.env.PLAYWRIGHT_PATH,
    join(homedir(), 'Documents/ZAO OS V1/node_modules/playwright'),
  ].filter(Boolean);
  for (const c of candidates) {
    try {
      return require(c).chromium;
    } catch { /* try the next one */ }
  }
  die(
    'could not load Playwright.\n' +
    '  Install it here:   npm i -D playwright && npx playwright install chromium\n' +
    '  Or point at one:   PLAYWRIGHT_PATH=/abs/path/to/node_modules/playwright node scripts/refresh-fund.mjs\n' +
    `  Tried: ${candidates.join(', ')}`
  );
}

// --- Fetch -----------------------------------------------------------------
async function fetchFundPageText() {
  const chromium = loadChromium();
  const browser = await chromium.launch();
  try {
    const page = await browser.newPage();
    const resp = await page.goto(FUND_URL, { waitUntil: 'domcontentloaded', timeout: 60000 });

    const status = resp ? resp.status() : null;
    if (status !== 200) die(`HTTP ${status ?? '(no response)'} from ${FUND_URL}`);

    await page.waitForTimeout(SETTLE_MS);

    const finalUrl = page.url();
    // Guard 1: we are on the right page. The site redirects freely, so check the
    // slug rather than the whole URL, and never trust text from somewhere else.
    if (!finalUrl.includes(FUND_SLUG)) {
      die(`redirected away from the fund page.\n  wanted a URL containing: ${FUND_SLUG}\n  landed on:               ${finalUrl}`);
    }

    const text = await page.innerText('body');

    // Guard 2: an empty body is a FAILURE, not a result. A 200 with a real final
    // URL and a non-throwing read is exactly how a scraper records "the fund has
    // no data" instead of "I could not read the page".
    // (.claude/rules/liveness-probe-guard.md, companion clause.)
    if (!text || text.length === 0) {
      die(`rendered an EMPTY body at ${finalUrl} (HTTP 200). This is a read failure, not a fund with no data.`);
    }
    if (text.length < MIN_TEXT_LEN) {
      die(`page text is only ${text.length} chars (floor ${MIN_TEXT_LEN}) - it did not finish rendering. Try --settle-ms 40000.`);
    }
    // Guard 3: the fund we asked for is actually the fund we got.
    if (!text.includes(FUND_NAME)) {
      die(`"${FUND_NAME}" not present in ${text.length} chars of rendered text at ${finalUrl}.\n  The fund may have been renamed, or the page rendered a shell.`);
    }

    return { text, finalUrl, status };
  } finally {
    await browser.close();
  }
}

// --- Parse -----------------------------------------------------------------
// Fund-page layout, verified 2026-08-18/19. NOTE the direction: on the FUND page
// the stats come AFTER the fund name. On the leaderboard they come BEFORE it.
// That inversion is exactly what makes cross-page parsing dangerous, so this
// script only ever reads the fund page.
//
//   <project roster...>
//   ZAO Fund for Emerging Culture     <- anchor
//   For the artists and builders of The ZAO
//   Curator
//   $15,431 / Total                   <- value BEFORE label
//   RANK / #55                        <- label BEFORE value
//   SCORE / 0.01
//   PRIZE / $100
//   Flywheel Fund Drive
//   Ends in 1 day
//   RAISED / $100
//   AVAILABLE / $1,272
//   $0 / Sales                        <- current DRIVE, not the season
//   $0 / Match unlocked               <- current DRIVE, not the season
//   $1,272 / Match remaining
const money = (s) => {
  if (s == null) return null;
  const m = String(s).match(/^\$?([\d,]+(?:\.\d+)?)$/);
  return m ? Number(m[1].replace(/,/g, '')) : null;
};

function parseFund(text) {
  const lines = text.split('\n').map((l) => l.trim()).filter(Boolean);
  const anchor = lines.findIndex((l) => l === FUND_NAME);
  if (anchor === -1) die(`could not anchor on a line exactly equal to "${FUND_NAME}".`);

  // Only look forward from the anchor, and only a bounded distance - so a later
  // fund or an unrelated widget can never leak into these numbers.
  const win = lines.slice(anchor, anchor + 80);
  const after = (label) => {
    const i = win.findIndex((l) => l.toUpperCase() === label.toUpperCase());
    return i !== -1 && i + 1 < win.length ? win[i + 1] : null;
  };
  const before = (label) => {
    const i = win.findIndex((l) => l.toUpperCase() === label.toUpperCase());
    return i > 0 ? win[i - 1] : null;
  };

  const rankRaw = after('RANK');
  const rank = rankRaw && /^#?\d+$/.test(rankRaw) ? Number(rankRaw.replace('#', '')) : null;

  const driveName = win.find((l) => /Fund Drive$/i.test(l)) ?? null;
  const driveEnds = win.find((l) => /^Ends\b/i.test(l)) ?? null;

  return {
    rank,
    scoreLabel: after('SCORE'),
    prizeUsd: money(after('PRIZE')),
    raisedUsd: money(after('RAISED')),
    availableUsd: money(after('AVAILABLE')),
    fundTotalUsd: money(before('Total')),
    driveSalesUsd: money(before('Sales')),
    driveMatchUnlockedUsd: money(before('Match unlocked')),
    driveMatchRemainingUsd: money(before('Match remaining')),
    driveName,
    driveEnds,
  };
}

// Roster rows sit BEFORE the fund name and read:
//   #1 / $10,693 / Match / $4,540 / Sales / HOPE / JED XO
// IMPORTANT: a project's Match and Sales are that project's PLATFORM-WIDE
// totals - a project can be curated into several funds at once. They are NOT
// this fund's contribution, so never sum them and call the result the ZAO
// Fund's deployed match.
function parseRoster(text) {
  const lines = text.split('\n').map((l) => l.trim()).filter(Boolean);
  const stop = lines.findIndex((l) => l === FUND_NAME);
  const scope = stop === -1 ? lines : lines.slice(0, stop);
  const out = [];
  for (let i = 0; i < scope.length; i++) {
    if (!/^#\d+$/.test(scope[i])) continue;
    if (scope[i + 2] !== 'Match' || scope[i + 4] !== 'Sales') continue;
    const matchUsd = money(scope[i + 1]);
    const salesUsd = money(scope[i + 3]);
    const name = scope[i + 5] ?? null;
    const creator = scope[i + 6] ?? null;
    if (matchUsd === null || salesUsd === null || !name) continue;
    out.push({ rank: Number(scope[i].slice(1)), name, creator, matchUsd, salesUsd });
    i += 6;
  }
  return out;
}

// --- Run -------------------------------------------------------------------
if (!JSON_OUT) console.log(`Rendering ${FUND_URL}\n  (settle ${SETTLE_MS}ms - the page polls, so networkidle never fires)`);

const { text, finalUrl, status } = await fetchFundPageText();
if (SAVE_TEXT) {
  writeFileSync(SAVE_TEXT, text);
  if (!JSON_OUT) console.log(`Saved rendered text to ${SAVE_TEXT}`);
}

const fund = parseFund(text);
const roster = parseRoster(text);
const scrapedAt = new Date().toISOString();

// Guard 4: rank is the canary. If it did not parse, the layout changed and every
// other field is suspect - refuse to write rather than write plausible garbage.
if (fund.rank === null) {
  die('could not parse RANK from the fund block - the page layout has probably changed.\n' +
      '  Re-run with --save-text /tmp/fund.txt and inspect before trusting anything else.');
}

if (JSON_OUT) {
  console.log(JSON.stringify({ url: finalUrl, status, scrapedAt, season: SEASON, fund, roster }, null, 2));
} else {
  console.log(`\nZAO Fund for Emerging Culture - Season ${SEASON}`);
  console.log(`  rank                    ${fund.rank === null ? '(not found)' : '#' + fund.rank}`);
  console.log(`  score                   ${fund.scoreLabel ?? '(not found)'}`);
  console.log(`  fund total ("Total")    ${fund.fundTotalUsd ?? '(not found)'}`);
  console.log(`  prize                   ${fund.prizeUsd ?? '(not found)'}`);
  console.log(`  raised                  ${fund.raisedUsd ?? '(not found)'}`);
  console.log(`  available (match left)  ${fund.availableUsd ?? '(not found)'}`);
  console.log(`\n  CURRENT DRIVE (not season totals - this is the distinction that matters)`);
  console.log(`  drive                   ${fund.driveName ?? '(not found)'}`);
  console.log(`  ends                    ${fund.driveEnds ?? '(not found)'}`);
  console.log(`  drive sales             ${fund.driveSalesUsd ?? '(not found)'}`);
  console.log(`  drive match unlocked    ${fund.driveMatchUnlockedUsd ?? '(not found)'}`);
  console.log(`  drive match remaining   ${fund.driveMatchRemainingUsd ?? '(not found)'}`);

  console.log(`\n  ROSTER (${roster.length} projects). Match/Sales are each project's PLATFORM-WIDE`);
  console.log(`  totals across every fund backing it - NOT this fund's contribution. Do not sum.`);
  for (const p of roster) {
    console.log(`   #${String(p.rank).padStart(2)}  ${p.name.slice(0, 44).padEnd(46)} match $${String(p.matchUsd).padStart(7)}  sales $${String(p.salesUsd).padStart(7)}   ${p.creator ?? ''}`);
  }
}

if (!WRITE) {
  if (!JSON_OUT) console.log('\nDry run. Re-run with --write to update app/dashboard/data.ts.');
  process.exit(0);
}

if (!existsSync(DATA_FILE)) die(`${DATA_FILE} does not exist.`);
let src = readFileSync(DATA_FILE, 'utf8');
const today = scrapedAt.slice(0, 10);

const repl = (key, value) => {
  if (value === null || value === undefined) return false;
  const valStr = typeof value === 'string' ? `'${value.replace(/'/g, "\\'")}'` : String(value);
  const re = new RegExp(`(\\n\\s*${key}:\\s*)([^,\\n]+)(,)`);
  if (!re.test(src)) return false;
  src = src.replace(re, `$1${valStr}$3`);
  return true;
};

const wrote = [];
const skip = [];
for (const [key, value] of [
  ['rank', fund.rank],
  ['scoreLabel', fund.scoreLabel],
  ['prizeUsd', fund.prizeUsd],
  ['poolUsd', fund.fundTotalUsd],
  // matchDeployedUsd is the KPI and it is SEASON-scoped in this file. The fund
  // page's "RAISED" is the closest published figure; the drive's "Match
  // unlocked" is NOT it and must never be written here (that conflation is the
  // 2026-08-17 bug). If Artizen ever publishes a season match figure, use it.
  ['matchDeployedUsd', fund.raisedUsd],
  ['matchRemainingUsd', fund.availableUsd ?? fund.driveMatchRemainingUsd],
  ['projectsCurated', roster.length || null],
  ['activeDrive', fund.driveName],
  // The fund page only gives a RELATIVE deadline ("Ends in 1 day"). Writing that
  // bare into a checked-in file means it still claims "Ends in 1 day" a week
  // later. Stamp it so a stale value is visibly stale.
  ['driveDeadline', fund.driveEnds ? `${fund.driveEnds} (as of ${today})` : null],
  ['lastUpdated', today],
]) {
  (repl(key, value) ? wrote : skip).push(key);
}
src = src.replace(/(\n\s*updatedBy:\s*)'[^']*'/, `$1'auto-refresh'`);

// Replace the provenance comment above fundStats. Leaving a stale "confirmed
// 2026-06-22" line sitting on top of today's numbers is its own small lie, and
// poolUsd deserves an explicit caveat rather than a silent interpretation.
const provenance =
  `// Live numbers scraped from ${finalUrl} on ${today} by scripts/refresh-fund.mjs.\n` +
  `// Standings move daily - re-scrape before quoting. poolUsd is the figure the fund page\n` +
  `// labels "Total" ($${fund.fundTotalUsd ?? '?'}); the page does not say whether that is deposits or\n` +
  `// cumulative raised, so treat it as "the fund's headline total", not a verified pool size.\n` +
  `// matchDeployedUsd is the page's RAISED. The CURRENT DRIVE figures (sales $${fund.driveSalesUsd ?? '?'}, match\n` +
  `// unlocked $${fund.driveMatchUnlockedUsd ?? '?'}) are deliberately NOT written here - drive scope and season\n` +
  `// scope are different things, and conflating them is a bug this repo has already shipped once.`;
src = src.replace(
  /\/\/ Live numbers[^\n]*\n(?:\/\/[^\n]*\n)*(?=export const fundStats)/,
  provenance + '\n'
);

writeFileSync(DATA_FILE, src);
console.log(`\nUpdated ${DATA_FILE}`);
console.log(`  wrote:   ${wrote.join(', ') || '(nothing)'}`);
if (skip.length) console.log(`  skipped: ${skip.join(', ')} (not parsed, or key absent - left untouched)`);
console.log('\nReview the diff, then: npx next build && npx vercel --prod --yes');
