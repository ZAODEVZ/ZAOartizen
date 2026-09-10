import type { Metadata } from 'next';

// /apply - artist-facing page: what the ZAO Fund backs, who qualifies, how to get in.
// Eligibility + About text is the fund's own copy (scraped from artizen.thezao.com 2026-06-21).
// Send this to prospective applicants. Provenance: research 886.

const FUND_URL = 'https://artizen.thezao.com/';
const SUBMIT_URL = 'https://artizen.fund/submit';

export const metadata: Metadata = {
  title: 'Apply to the ZAO Fund for Emerging Culture',
  description:
    'How to get backed by the ZAO Fund for Emerging Culture on Artizen - what we fund, who qualifies, and how to apply.',
};

const ELIGIBILITY: string[] = [
  'Be creator-owned and independently operated',
  'Integrate emerging tech (blockchain, AI, decentralized tools, immersive media) in a meaningful way',
  'Demonstrate active collaboration or meaningful community participation',
  'Build in public - share process, progress, or outcomes openly',
  'Operate within a non-extractive, fair-compensation framework',
  'Culminate in a public-facing, real-world activation (performance, installation, gathering, exhibition, release, or showcase)',
];

interface Step {
  n: number;
  title: string;
  body: string;
}

const STEPS: Step[] = [
  { n: 1, title: 'Submit your project', body: 'Create your project on Artizen and submit it to the ZAO Fund for Emerging Culture.' },
  { n: 2, title: 'Get curated in', body: 'The ZAO community votes projects in during the curation phase (the vote runs in our Discord). Strong community fit + a clear public outcome win.' },
  { n: 3, title: 'Mint your Artifact', body: 'Publish a $10 open-edition Artifact - square, video/GIF, no text overlay performs best. 0% fees, 100% to you.' },
  { n: 4, title: 'Rally + sell', body: 'Every $1 a fan spends unlocks match from the ZAO Fund and the Artizen Endowment, at that week\'s Match Multiple (and stacks across any other fund backing you). Your rank is the money you raise, so the more people who buy, the higher you climb.' },
];

export default function ApplyPage() {
  return (
    <main className="mx-auto max-w-2xl px-5 py-12">
      <header className="mb-8">
        <h1 className="text-3xl font-bold sm:text-4xl">
          Apply to the <span className="text-[#f5a623]">ZAO Fund for Emerging Culture</span>
        </h1>
        <p className="mt-3 text-white/70">
          We back independent musicians, visual artists, technologists, and community organizers creating
          collaborative cultural experiences - work that bridges digital coordination and real-world activation.
          We back projects that use emerging tech not as a gimmick, but as infrastructure for shared ownership,
          fair pay, and vibrant community.
        </p>
      </header>

      <section className="mb-8">
        <h2 className="mb-3 text-sm font-semibold uppercase tracking-wide text-white/50">Who qualifies</h2>
        <ul className="space-y-2">
          {ELIGIBILITY.map((e) => (
            <li key={e} className="flex gap-2 rounded-lg border border-white/10 bg-white/5 p-3 text-sm text-white/80">
              <span className="text-[#f5a623]">-</span>
              <span>{e}</span>
            </li>
          ))}
        </ul>
        <p className="mt-3 text-xs text-white/40">
          Projects mainly seeking funding for personal expenses without a shared, public-facing outcome will not
          be approved. Community participation and real-world activation are strongly encouraged.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="mb-3 text-sm font-semibold uppercase tracking-wide text-white/50">How it works</h2>
        <ol className="space-y-3">
          {STEPS.map((s) => (
            <li key={s.n} className="rounded-xl border border-white/10 bg-white/5 p-4">
              <div className="text-sm font-semibold text-[#f5a623]">STEP {s.n}</div>
              <div className="mt-1 font-medium">{s.title}</div>
              <div className="text-sm text-white/60">{s.body}</div>
            </li>
          ))}
        </ol>
      </section>

      <div className="flex flex-wrap gap-3">
        <a
          href={SUBMIT_URL}
          className="rounded-lg bg-[#f5a623] px-5 py-3 font-semibold text-[#0a1628]"
          target="_blank"
          rel="noopener noreferrer"
        >
          Submit your project
        </a>
        <a
          href={FUND_URL}
          className="rounded-lg border border-white/20 px-5 py-3 font-semibold text-white"
          target="_blank"
          rel="noopener noreferrer"
        >
          See the fund
        </a>
      </div>

      <footer className="mt-8 text-xs text-white/40">
        Questions? Reach Zaal at zaal@thezao.com. Built in public - see the{' '}
        <a href="/dashboard" className="text-[#f5a623] underline">
          dashboard
        </a>
        .
      </footer>
    </main>
  );
}
