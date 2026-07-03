import type { Metadata } from 'next';

// /curate - the ZAO Fund curation hub: what the fund backs, eligibility (incl. ZAO collaboration),
// how to get curated, the real match math, and how to back the curated projects. Pushes people to Artizen.
// Mechanics verified from Artizen's own newsletter (news.artizen.fund) 2026-06-27. See research/bloc-projects.md.

const FUND_URL = 'https://artizen.thezao.com/';
const SUBMIT_URL = 'https://artizen.fund/submit';
const CONTACT = 'mailto:zaal@thezao.com?subject=ZAO%20Fund%20-%20get%20curated';

export const metadata: Metadata = {
  title: 'Get curated by the ZAO Fund for Emerging Culture',
  description:
    'What the ZAO Fund backs, who qualifies, and how to get curated. Every $1 becomes $3+ through fan, sponsor, and endowment match on Artizen.',
};

const CRITERIA: string[] = [
  'Collaborate with The ZAO in some way - and say how on your application (a performance, a cross-post, joining a ZAO space or livestream, building together, or another real collaboration)',
  'Creator-owned and independently operated',
  'Uses emerging tech (blockchain, AI, decentralized tools, immersive media) in a meaningful way',
  'Shows active collaboration or real community participation',
  'Builds in public - shares process, progress, or outcomes openly',
  'Operates within a non-extractive, fair-compensation framework',
  'Culminates in a public-facing, real-world activation (performance, installation, gathering, exhibition, release, or showcase)',
];

interface MatchPart {
  k: string;
  v: string;
}

const MATCH: MatchPart[] = [
  { k: '$1', v: 'from a fan buying your $10 Artifact (you keep 100%)' },
  { k: '+ $1', v: 'matched by each Fund backing you - including the ZAO Fund' },
  { k: '+ $1+', v: 'matched by the Artizen platform (when available)' },
];

export default function CuratePage() {
  return (
    <main className="mx-auto max-w-3xl px-5 py-12">
      <header className="mb-10">
        <div style={{ letterSpacing: 4 }} className="text-sm font-bold uppercase text-[#f5a623]">
          ZAO Fund for Emerging Culture
        </div>
        <h1 className="mt-2 text-3xl font-bold sm:text-4xl">Get curated</h1>
        <p className="mt-3 text-white/70">
          The ZAO Fund backs creators building collaborative culture at the intersection of art, emerging tech,
          and community - and who collaborate with The ZAO to do it. Get curated and your sales unlock match.
        </p>
      </header>

      {/* The match math */}
      <section className="mb-12">
        <h2 className="mb-4 text-sm font-semibold uppercase tracking-wide text-white/50">Every $1 becomes $3+</h2>
        <div className="grid gap-3 sm:grid-cols-3">
          {MATCH.map((m) => (
            <div key={m.v} className="rounded-xl border border-white/10 bg-white/5 p-4">
              <div className="text-2xl font-bold text-[#f5a623]">{m.k}</div>
              <div className="mt-1 text-sm text-white/60">{m.v}</div>
            </div>
          ))}
        </div>
        <p className="mt-3 text-xs text-white/40">
          Get curated by multiple Funds and the match stacks - one $10 sale can unlock $20, $30, or more depending on available platform support. Source:
          Artizen newsletter (news.artizen.fund).
        </p>
      </section>

      {/* Who qualifies */}
      <section className="mb-12">
        <h2 className="mb-4 text-sm font-semibold uppercase tracking-wide text-white/50">Who qualifies</h2>
        <ul className="space-y-2">
          {CRITERIA.map((c, i) => (
            <li
              key={c}
              className={`flex gap-3 rounded-lg border p-3 text-sm ${
                i === 0
                  ? 'border-[#f5a623]/40 bg-[#f5a623]/10 text-white/80'
                  : 'border-white/10 bg-white/5 text-white/70'
              }`}
            >
              <span className="text-[#f5a623]">-</span>
              <span>{c}</span>
            </li>
          ))}
        </ul>
        <p className="mt-3 text-xs text-white/40">
          The first one is what makes this fund different: tell us how you&apos;ll collaborate with The ZAO.
        </p>
      </section>

      {/* How to get curated */}
      <section className="mb-12">
        <h2 className="mb-4 text-sm font-semibold uppercase tracking-wide text-white/50">How to get curated</h2>
        <ol className="space-y-3">
          {[
            ['Submit your project on Artizen', 'Submit to the ZAO Fund (and every other Fund you qualify for - the match stacks).'],
            ['Make a great Artifact', 'Square, NO text, a GIF or video performs best. It is the one thing buyers see.'],
            ['Get votes + curated', 'The community votes; the top projects get curated into the competition.'],
            ['Tell us how you collaborate with The ZAO', 'Reach out - that is the difference-maker for this fund, and we will help you raise more.'],
          ].map(([t, b], i) => (
            <li key={t} className="flex gap-4 rounded-xl border border-white/10 bg-white/5 p-4">
              <div className="text-xl font-bold text-[#f5a623]">{i + 1}</div>
              <div>
                <div className="font-semibold">{t}</div>
                <div className="mt-0.5 text-sm text-white/60">{b}</div>
              </div>
            </li>
          ))}
        </ol>
      </section>

      <div className="flex flex-wrap gap-3">
        <a href={SUBMIT_URL} className="rounded-lg bg-[#f5a623] px-5 py-3 font-semibold text-[#0a1628]" target="_blank" rel="noopener noreferrer">
          Submit your project
        </a>
        <a href={CONTACT} className="rounded-lg border border-white/20 px-5 py-3 font-semibold text-white">
          Tell us how you collaborate
        </a>
        <a href={FUND_URL} className="rounded-lg border border-white/20 px-5 py-3 font-semibold text-white" target="_blank" rel="noopener noreferrer">
          See the ZAO Fund
        </a>
      </div>

      <footer className="mt-8 text-xs text-white/40">
        Already curated? See the{' '}
        <a href="/playbook" className="text-[#f5a623] underline">
          playbook
        </a>{' '}
        to finish the season strong, and the{' '}
        <a href="/community" className="text-[#f5a623] underline">
          projects we back
        </a>
        .
      </footer>
    </main>
  );
}
