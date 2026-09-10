#!/usr/bin/env node
// Retired-names guard. Fails the build if a retired partner name reappears anywhere new.
//
// Why: Zaal, 2026-07-31 - "no longer working with magnetiq please do not reference it again or
// songjam". The retirement had to land twice in this repo (PR #29, then PR #33 for the three kit
// files #29 missed), and the rule itself was once lost from CLAUDE.md. A second manual pass is not a
// control; this is.
//
// How it works: some files keep the names ON PURPOSE - CLAUDE.md states the rule, and research/ plus
// kit/archive/ keep old work readable. Those are frozen below with the number of matching LINES each
// has today. The check fails if:
//   - any file NOT in the list mentions a retired name, or
//   - a listed file gains matching lines beyond its frozen count.
// So the old record stays readable, and nothing new can cite them.
//
// Runs automatically before `npm run build` (the `prebuild` script), which is also what Vercel runs,
// so a violation blocks a deploy. Run by hand with `npm run check:names`.
//
// Lowering a count (deleting an old mention) is always fine - then lower the number here too.
// Raising one, or adding a file, needs a reason recorded in the PR.

import { execSync } from 'node:child_process';
import { readdirSync, readFileSync, statSync } from 'node:fs';
import { join, relative, sep } from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = join(fileURLToPath(new URL('.', import.meta.url)), '..');
const SELF = 'scripts/check-retired-names.mjs';

// Magnetiq and SongJam, any case. SANG only in caps as a whole word: it was SongJam's token, and the
// lowercase word is ordinary English.
const PATTERN = /magnetiq|songjam|\bSANG\b/i;
const matches = (line) => /magnetiq|songjam/i.test(line) || /\bSANG\b/.test(line);

// path -> matching lines allowed (frozen 2026-09-10 at main 86df4d4)
const FROZEN = {
  'CLAUDE.md': 2,
  'kit/archive/make-festivals-on-artizen.md': 1,
  'kit/archive/operating-rhythm.md': 1,
  'kit/archive/outreach-drafts.md': 1,
  'kit/archive/rene-call-brief.md': 1,
  'research/847-zao-in-artizen-ecosystem-playbook/README.md': 7,
  'research/849-zao-artizen-execution-build-plan/README.md': 5,
  'research/850-zao-festivals-fund-creation-manager-playbook/README.md': 3,
  'research/community-fund-playbook.md': 1,
  'research/fund-directory.md': 1,
  'research/synergies-zaostock-artizen.md': 2,
};

// Vercel CLI deploys upload files without .git, so fall back to walking the tree.
const SKIP_DIRS = new Set(['node_modules', '.next', '.git', '.vercel', 'out', 'dist', '.handoffs', '.serena', '.gstack']);
const SKIP_EXT = /\.(png|jpe?g|gif|webp|ico|pdf|mp4|mov|woff2?|ttf|otf|zip|tsbuildinfo)$/i;

function listFiles() {
  try {
    const out = execSync('git ls-files -z', { cwd: ROOT, stdio: ['ignore', 'pipe', 'ignore'] });
    return out.toString('utf8').split('\0').filter(Boolean);
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
  const allowed = FROZEN[file] ?? 0;
  if (hits.length > allowed) {
    problems.push({ file, allowed, hits });
  }
}

if (problems.length > 0) {
  console.error('\nRETIRED NAMES FOUND - Magnetiq, SongJam and SANG are retired (Zaal, 2026-07-31).');
  console.error('Do not cite them as a partner, portfolio project or sponsor target.\n');
  for (const { file, allowed, hits } of problems) {
    console.error(`  ${file}  (${hits.length} line(s), ${allowed} allowed)`);
    for (const [n, l] of hits) console.error(`    ${n}: ${l.trim().slice(0, 140)}`);
  }
  console.error(`\nRemove the mention, or - only for a historical record - freeze it in ${SELF}.\n`);
  process.exit(1);
}

console.log(`check-retired-names: ok (${Object.keys(FROZEN).length} historical files frozen)`);
