#!/usr/bin/env node
// Retired-names guard. Fails the build if a name Zaal ruled out reappears anywhere new.
//
// Two rulings, both Zaal's:
// - 2026-07-31, RETIRED: "no longer working with magnetiq please do not reference it again or
//   songjam" (plus SANG, SongJam's token). Recorded in CLAUDE.md "Retired - do not reference".
//   The retirement had to land twice in this repo (PR #29, then PR #33 for the three kit files #29
//   missed), and the rule itself was once lost from CLAUDE.md.
// - 2026-09-10, NOT PARTNERS: "enteract is not a partner neither is we 3 metal". Recorded in
//   zao-vault decisions/enteract-and-we3metal-are-not-partners.md, covering ENTERACT, Enteract,
//   Web3Metal, We3 Metal and We3Metal. PR #37 removed the last two claims ("production w/ ENTERACT",
//   "Web3Metal - ZAOstock's first official partner"); this stops them coming back.
// A second manual pass is not a control; this is.
//
// How it works: some files keep the names ON PURPOSE - CLAUDE.md states the rule, and research/ plus
// kit/archive/ keep old work readable. Each of those matching LINES is frozen below as a short hash
// of its whitespace-normalised text. The check fails if:
//   - any file NOT in the list mentions a retired name, or
//   - a listed file has a matching line whose hash is not frozen - a new mention, OR an old line
//     rewritten into a different one (a count would not see that substitution).
// So the old record stays readable, and nothing new can cite them.
//
// Runs automatically before `npm run build` (the `prebuild` script), which is also what Vercel runs,
// so a violation blocks a deploy. Run by hand with `npm run check:names`.
//
// Deleting an old mention is always fine (a frozen hash with no matching line is ignored - prune it
// when convenient). Adding a hash or a file needs a reason recorded in the PR. To print a file's hashes:
//   node scripts/check-retired-names.mjs --hashes <path>

import { execSync } from 'node:child_process';
import { createHash } from 'node:crypto';
import { readdirSync, readFileSync, statSync } from 'node:fs';
import { join, relative, sep } from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = join(fileURLToPath(new URL('.', import.meta.url)), '..');
const SELF = 'scripts/check-retired-names.mjs';

// Magnetiq, SongJam, Enteract, Web3Metal/We3Metal (with or without a space), any case. SANG only in
// caps as a whole word: it was SongJam's token, and the lowercase word is ordinary English.
const CASELESS = /magnetiq|songjam|enteract|web3\s?metal\b|we3\s?metal\b/i;
const PATTERN = new RegExp(`${CASELESS.source}|\\bSANG\\b`, 'i'); // cheap per-file prefilter
const matches = (line) => CASELESS.test(line) || /\bSANG\b/.test(line);

// path -> hashes of the matching lines allowed (frozen 2026-09-10 at main 2ea6179)
const FROZEN = {
  'CLAUDE.md': ['218a962976f64c48', 'fd921c6a6e2218f2'],
  'kit/archive/make-festivals-on-artizen.md': ['5baf482123bf4492'],
  'kit/archive/operating-rhythm.md': ['482d4724d1001434'],
  'kit/archive/outreach-drafts.md': ['2c2b78bc8b74ec87'],
  'kit/archive/rene-call-brief.md': ['db87820824846b18'],
  'research/847-zao-in-artizen-ecosystem-playbook/README.md': ['576b356367027a69', 'a149dce11efa42d6', '0fe0618940e9947c', '567b2deaaf89bdb4', '48b5a76f5bae9448', '7c90c05e0b3a6a33', '60aa4fe8a7504672'],
  'research/849-zao-artizen-execution-build-plan/README.md': ['406083ec6b43b498', '73bf48f649118c0a', 'cd43fc4a5071059d', '2c2b78bc8b74ec87', 'f6178d0a5acdc622'],
  'research/850-zao-festivals-fund-creation-manager-playbook/README.md': ['21b99abe99b3c697', '673ad135fa5285e0', 'c0cf602e9c1e85f5'],
  'research/community-fund-playbook.md': ['ac8e82058e39062f'],
  'research/fund-directory.md': ['ec1f51302a77e70b'],
  'research/synergies-zaostock-artizen.md': ['7b731c6c2343dca9', 'bcee687415d6c42a'],
};
const lineHash = (line) => createHash('sha256').update(line.split(/\s+/).filter(Boolean).join(' ')).digest('hex').slice(0, 16);

// Vercel CLI deploys upload files without .git, so fall back to walking the tree.
const SKIP_DIRS = new Set(['node_modules', '.next', '.git', '.vercel', 'out', 'dist', '.handoffs', '.serena', '.gstack']);
const SKIP_EXT = /\.(png|jpe?g|gif|webp|ico|pdf|mp4|mov|woff2?|ttf|otf|zip|tsbuildinfo)$/i;

function listFiles() {
  try {
    // Tracked plus untracked-but-not-ignored, so a new file is caught before it is ever committed.
    const out = execSync('git ls-files -z --cached --others --exclude-standard', { cwd: ROOT, stdio: ['ignore', 'pipe', 'ignore'] });
    return [...new Set(out.toString('utf8').split('\0').filter(Boolean))]
      .filter((f) => !f.split('/').some((seg) => SKIP_DIRS.has(seg)));
  } catch {
    const files = [];
    const walk = (dir) => {
      for (const name of readdirSync(dir)) {
        const abs = join(dir, name);
        const st = statSync(abs);
        if (st.isDirectory()) {
          if (!SKIP_DIRS.has(name)) walk(abs);
        } else {
          files.push(relative(ROOT, abs).split(sep).join('/'));
        }
      }
    };
    walk(ROOT);
    return files;
  }
}

if (process.argv[2] === '--hashes') {
  const f = process.argv[3];
  const hs = readFileSync(join(ROOT, f), 'utf8').split('\n').filter(matches).map(lineHash);
  console.log(`'${f}': [${hs.map((h) => `'${h}'`).join(', ')}],`);
  process.exit(0);
}

const problems = [];
for (const file of listFiles()) {
  if (file === SELF || SKIP_EXT.test(file)) continue;
  let text;
  try {
    text = readFileSync(join(ROOT, file), 'utf8');
  } catch {
    continue;
  }
  if (!PATTERN.test(text)) continue;
  const hits = text.split('\n').map((l, i) => [i + 1, l]).filter(([, l]) => matches(l));
  if (hits.length === 0) continue;
  const allowed = new Set(FROZEN[file] ?? []);
  const bad = hits.filter(([, l]) => !allowed.has(lineHash(l)));
  if (bad.length > 0) problems.push({ file, allowed: allowed.size, hits: bad });
}

if (problems.length > 0) {
  console.error('\nRULED-OUT NAMES FOUND.');
  console.error('  Magnetiq, SongJam, SANG - retired (Zaal, 2026-07-31; CLAUDE.md).');
  console.error('  Enteract, Web3Metal / We3 Metal - not partners (Zaal, 2026-09-10;');
  console.error('    zao-vault decisions/enteract-and-we3metal-are-not-partners.md).');
  console.error('Do not cite them as a partner, portfolio project, sponsor target or producer.\n');
  for (const { file, allowed, hits } of problems) {
    console.error(`  ${file}  (${hits.length} unfrozen line(s); ${allowed} frozen for this file)`);
    for (const [n, l] of hits) console.error(`    ${n}: ${l.trim().slice(0, 140)}`);
  }
  console.error(`\nRemove the mention, or - only for a historical record - freeze it in ${SELF}.\n`);
  process.exit(1);
}

console.log(`check-retired-names: ok (${Object.keys(FROZEN).length} historical files frozen)`);
