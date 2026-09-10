#!/usr/bin/env node
// Print the live Artizen Playbook's changelog - the fastest way to see whether any mechanic in
// research/mechanics-canonical.md has moved.
//
// Usage:  node scripts/playbook-changelog.mjs        # newest 5 versions
//         node scripts/playbook-changelog.mjs 15     # newest 15
//
// How: play.artizen.fund is a Vite/React SPA backed by Supabase. Its page bundle carries the public
// Supabase URL and anon key it uses to read `playbook_content` and the dated `playbook_versions`. This
// reads the same public table the page reads, the same way. No key is stored here - it is taken from
// the live bundle at run time, so a key rotation on Artizen's side needs no change here.

const N = Number(process.argv[2] ?? 5);
const PLAYBOOK = 'https://play.artizen.fund/';

async function text(url) {
  const r = await fetch(url, { headers: { 'User-Agent': 'Mozilla/5.0 (ZAOartizen playbook-changelog)' } });
  if (!r.ok) throw new Error(`${url} -> HTTP ${r.status}`);
  return r.text();
}

function jwtRef(jwt) {
  try {
    const payload = JSON.parse(Buffer.from(jwt.split('.')[1], 'base64url').toString('utf8'));
    return payload.ref ?? null;
  } catch {
    return null;
  }
}

const html = await text(PLAYBOOK);
const bundlePath = html.match(/\/assets\/index-[\w-]+\.js/)?.[0];
if (!bundlePath) throw new Error('bundle path not found in play.artizen.fund HTML - the page layout changed');
const js = await text(new URL(bundlePath, PLAYBOOK).href);

// Pick the Supabase project whose anon key's `ref` matches its URL (the bundle also names an
// edge-functions project for the chatbot).
const refs = [...new Set([...js.matchAll(/https:\/\/([a-z0-9]{20})\.supabase\.co/g)].map((m) => m[1]))];
const keys = [...new Set(js.match(/eyJ[\w-]{10,}\.eyJ[\w-]{10,}\.[\w-]{10,}/g) ?? [])];
let base = null;
let key = null;
for (const k of keys) {
  const ref = jwtRef(k);
  if (ref && refs.includes(ref)) { base = `https://${ref}.supabase.co`; key = k; break; }
}
if (!base) throw new Error(`no anon key matched a Supabase URL in the bundle (urls: ${refs.join(', ')})`);

const res = await fetch(
  `${base}/rest/v1/playbook_versions?select=version,change_date,summary&order=version.desc&limit=${N}`,
  { headers: { apikey: key, Authorization: `Bearer ${key}` } },
);
if (!res.ok) throw new Error(`playbook_versions -> HTTP ${res.status}`);
const rows = await res.json();
if (!Array.isArray(rows) || rows.length === 0) throw new Error('playbook_versions returned no rows');

console.log(`Artizen Playbook - newest ${rows.length} versions (read ${new Date().toISOString().slice(0, 10)})\n`);
for (const r of rows) console.log(`v${r.version}  ${r.change_date}  ${r.summary}\n`);
console.log('Compare against the "Last reconciled" line in research/mechanics-canonical.md.');
