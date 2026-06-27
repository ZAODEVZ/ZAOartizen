import type { Metadata } from 'next';

// /funds - the Artizen funds map. Submitting to multiple funds multiplies match. Shows verified funds
// (HIGH/MED confidence from research/artizen-funds-index.md, 2026-06-27) + the recommended ZAO stack.
// LOW-confidence funds are omitted from the public page until verified.

const DIRECTORY = 'https://artizen.fund/index/matchfunds';
const SUBMIT_URL = 'https://artizen.fund/submit';
const FUND_URL = 'https://artizen.thezao.com/';

export const metadata: Metadata = {
  title: 'Stack your match - the Artizen funds map',
  description:
    'Submit your project to multiple Artizen funds and the match multiplies. The funds that fit ZAO-type projects, and the recommended 3-fund stack.',
};

interface Fund {
  name: string;
  focus: string;
  fit: 'strong' | 'maybe';
}

// Verified funds (HIGH + MED confidence). Slugs verified before any deep-linking.
const FUNDS: Fund[] = [
  { name: 'ZAO Fund for Emerging Culture', focus: 'Music, art, tech + community - requires collaboration with The ZAO. Your home fund.', fit: 'strong' },
  { name: 'Commons Fund for Public Goods Pioneers', focus: 'Public goods, open-source, regenerative work (Funding the Commons).', fit: 'strong' },
  { name: 'Apollo Fund for the New Renaissance', focus: 'Artists, technologists, educators - share what you learn, build in public.', fit: 'strong' },
  { name: 'Filecoin Fund for Cultural Preservation', focus: 'Cultural heritage + archival projects, decentralized storage.', fit: 'strong' },
  { name: 'Cabin Fund for Regenerative Art', focus: 'Regenerative + sustainable community art.', fit: 'maybe' },
  { name: 'Juicebox Project Accelerator Fund', focus: 'Web3-native / tokenized creator projects.', fit: 'maybe' },
  { name: 'Console Fund for Community Builders', focus: 'Community projects co-creating products + art.', fit: 'maybe' },
];

export default function FundsPage() {
  return (
    <main className="mx-auto max-w-3xl px-5 py-12">
      <header className="mb-10">
        <div style={{ letterSpacing: 4 }} className="text-sm font-bold uppercase text-[#f5a623]">
          Stack your match
        </div>
        <h1 className="mt-2 text-3xl font-bold sm:text-4xl">The Artizen funds map</h1>
        <p className="mt-3 text-white/70">
          The biggest lever on Artizen: get your project curated by <strong>more than one fund</strong>. Every
          $10 Artifact sale unlocks $10 of match from <em>each</em> fund backing you - so a project in 3 funds
          matches 3x on the same sales. Here&apos;s where ZAO-type projects fit.
        </p>
      </header>

      <section className="mb-10 rounded-2xl border border-[#f5a623]/30 bg-gradient-to-br from-[#f5a623]/10 to-transparent p-6">
        <h2 className="text-lg font-semibold">The recommended ZAO stack</h2>
        <p className="mt-2 text-sm text-white/70">
          For a music / art / community project, submit to all three for 3x match:
        </p>
        <div className="mt-3 flex flex-wrap gap-2">
          {['ZAO Fund', 'Commons Fund', 'Apollo Fund'].map((s) => (
            <span key={s} className="rounded-full bg-[#f5a623]/15 px-3 py-1 text-sm font-semibold text-[#f5a623]">
              {s}
            </span>
          ))}
        </div>
        <p className="mt-3 text-xs text-white/45">
          Add Filecoin for archival/heritage music, or Cabin for regen-leaning art.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="mb-4 text-sm font-semibold uppercase tracking-wide text-white/50">Funds that fit ZAO projects</h2>
        <div className="space-y-3">
          {FUNDS.map((f) => (
            <div key={f.name} className="rounded-xl border border-white/10 bg-white/5 p-4">
              <div className="flex items-baseline justify-between gap-2">
                <span className="font-semibold">{f.name}</span>
                <span
                  className={`shrink-0 rounded-full px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide ${
                    f.fit === 'strong' ? 'bg-emerald-500/15 text-emerald-400' : 'bg-white/10 text-white/50'
                  }`}
                >
                  {f.fit === 'strong' ? 'strong fit' : 'maybe'}
                </span>
              </div>
              <div className="mt-1 text-sm text-white/60">{f.focus}</div>
            </div>
          ))}
        </div>
        <p className="mt-3 text-xs text-white/40">
          More funds exist each season - browse the full directory on Artizen. Match per fund is capped; unused
          match rolls to next season.
        </p>
      </section>

      <div className="flex flex-wrap gap-3">
        <a href={SUBMIT_URL} className="rounded-lg bg-[#f5a623] px-5 py-3 font-semibold text-[#0a1628]" target="_blank" rel="noopener noreferrer">
          Submit your project
        </a>
        <a href={DIRECTORY} className="rounded-lg border border-white/20 px-5 py-3 font-semibold text-white" target="_blank" rel="noopener noreferrer">
          Browse all funds
        </a>
        <a href={FUND_URL} className="rounded-lg border border-white/20 px-5 py-3 font-semibold text-white" target="_blank" rel="noopener noreferrer">
          See the ZAO Fund
        </a>
      </div>

      <footer className="mt-8 text-xs text-white/40">
        New here? Start with the{' '}
        <a href="/curate" className="text-[#f5a623] underline">
          get-curated guide
        </a>{' '}
        and the{' '}
        <a href="/playbook" className="text-[#f5a623] underline">
          playbook
        </a>
        .
      </footer>
    </main>
  );
}
