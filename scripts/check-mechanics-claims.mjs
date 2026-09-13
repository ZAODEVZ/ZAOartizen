#!/usr/bin/env node
// Mechanics-claims guard. Fails the build on an UNCONDITIONAL match claim in site or kit copy.
//
// Why: match is not a flat promise. Per research/mechanics-canonical.md (Playbook v34, confirmed by
// Venus 2026-09-10) it is scaled by that week's Match Multiple, capped per project, and limited to
// 100% of a fund per week. "Every $10 unlocks match" kept drifting back after PR #32 fixed it (vault
// caught it again on #43 and #44), and "$1 becomes $3+" hardcoded one week's multiple. A pass by eye
// is not a control; this is.
//
// Rule: a line in app/ or kit/ (not kit/archive) that claims match is unlocked, drawn or matched must
// carry a qualifier on the same line or the next one (a weekly rate, a cap, "while ... lasts",
// "can unlock", ...). "becomes $N" is never allowed - it hardcodes a multiple.
// Runs in prebuild after check-retired-names. By hand: node scripts/check-mechanics-claims.mjs

import { execSync } from 'node:child_process';
import { readFileSync } from 'node:fs';
import { join } from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = join(fileURLToPath(new URL('.', import.meta.url)), '..');
const CLAIM = /\bunlock(s|ed)?\b[^.]{0,40}\bmatch|\bdraws on it\b|\bmatched \$\d/i;
const HARDCODED = /\bbecomes \$\d/i;
const QUALIFIER =
  /while|lasts|up to|match multiple|each week|weekly|that week|this week|a rate|match rate|\bcap\b|can unlock|\bcould\b|was wrong|were wrong|retired|\bif\b/i;

let files = [];
try {
  files = execSync('git ls-files -z --cached --others --exclude-standard -- app kit', { cwd: ROOT })
    .toString('utf8').split('\0').filter(Boolean);
} catch {
  console.error('check-mechanics-claims: git not available - skipping (Vercel CLI uploads carry no .git)');
  process.exit(0);
}
files = files.filter((f) => !f.startsWith('kit/archive/') && /\.(tsx?|md)$/.test(f) && !f.endsWith('check-mechanics-claims.mjs'));

const problems = [];
for (const f of files) {
  const lines = readFileSync(join(ROOT, f), 'utf8').split('\n');
  lines.forEach((line, i) => {
    const window = `${line} ${lines[i + 1] ?? ''}`;
    if (HARDCODED.test(line)) problems.push([f, i + 1, line, 'hardcoded multiple ("becomes $N")']);
    else if (CLAIM.test(line) && !QUALIFIER.test(window)) problems.push([f, i + 1, line, 'unconditional match claim']);
  });
}

if (problems.length) {
  console.error('\nUNCONDITIONAL MATCH CLAIMS - match scales weekly, caps per project, and runs out.');
  console.error('Qualify each (e.g. "at that week\'s Match Multiple", "while its match lasts", "can unlock").\n');
  for (const [f, n, l, why] of problems) console.error(`  ${f}:${n}  [${why}]\n    ${l.trim().slice(0, 150)}`);
  console.error('\nSource: research/mechanics-canonical.md section 2.\n');
  process.exit(1);
}
console.log(`check-mechanics-claims: ok (${files.length} files)`);
