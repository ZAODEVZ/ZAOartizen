import type { Metadata } from 'next';

// /proposal - a shareable decision page for ZAO Festivals teammates to weigh in on:
// create our own Artizen Festivals Fund, or curate into existing funds? Provenance:
// research/priority-funds.md + research/research-audit.md + research/fund-directory.md.

const CONTACT = 'mailto:zaal@thezao.com?subject=ZAO%20Festivals%20Artizen%20proposal%20-%20my%20input';
const REPO = 'https://github.com/ZAODEVZ/ZAOartizen';

export const metadata: Metadata = {
  title: 'ZAO Festivals on Artizen - proposal for team input',
  description:
    'Should ZAO create its own Artizen Festivals Fund, or curate our events into existing funds? The findings, the options, and a recommendation - we want your input.',
  openGraph: {
    title: 'ZAO Festivals on Artizen - proposal for team input',
    description: 'Create our own fund, or curate into existing ones? Read the findings and weigh in.',
    type: 'website',
  },
};

interface OptionRow {
  label: string;
  pros: string[];
  cons: string[];
}

const OPTION_A: OptionRow = {
  label: 'Option A - Create our own ZAO Festivals Fund',
  pros: [
    'Our own branded home for festivals on Artizen',
    'We curate who gets in; we can recruit other organizers under us',
    'Up to $50K Artizen seed if approved',
  ],
  cons: [
    'Needs René approval + an ongoing curation commitment (an 80th fund in a crowded field)',
    'The "white space" is gone - We\'re Loud, Global Music, and Greenpill already fund music events',
    'Splits attention while our existing ZAO Fund is already dormant this drive',
  ],
};

const OPTION_B: OptionRow = {
  label: 'Option B - Curate our events into existing funds (recommended)',
  pros: [
    'Same match, none of the overhead - stack ZAOstock/Zaoville into 3-4 funds at once',
    'Cross-curation already works: 6 ZAO music projects are ALREADY in the Global Music Fund',
    'We can start this drive, no approval needed',
    'Focuses energy on activating the projects, which is the real bottleneck',
  ],
  cons: [
    'No ZAO-branded festivals fund (less ownership / visibility)',
    'We rely on other curators accepting our projects',
  ],
};

const FINDINGS: string[] = [
  'Artizen has ~79 community funds right now - a fast-moving, crowded field.',
  'Music + festival funds already exist: We\'re Loud Fund for DIY Music Festivals, Global Music Fund, Greenpill Regen Gatherings, plus several more. The "no fund for music festivals" idea was wrong.',
  'Cross-curation already happens for us: six ZAO-fund music projects (Voices of the Land, Gaian Temple, HERITAGE, Sonic Sanctuary, International Artists Project, MOTHERLand) are also in the Global Music Fund.',
  'Our ZAO Fund for Emerging Culture was dormant this drive as of June 22 (rank ~#23, ~$188 at that snapshot) - it only ranks when our projects actually sell.',
  'Friendly funds are run by people we know: the Bonfires Fund (our knowledge-graph partner) already hosts Arun\'s DreamStarter and Abraham Nash\'s project.',
  'Platform caution: Artizen\'s "$14M endowment" is not visible on-chain in the Juicebox project its token points to (~34 ETH, dormant a year+). Keep ZAO treasury out of the ART token for now.',
];

function NavBar() {
  return (
    <nav className="sticky top-0 z-20 border-b border-white/10 bg-[#0a1628]/90 backdrop-blur">
      <div className="mx-auto flex max-w-4xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        <a href="/" className="text-sm font-bold tracking-tight transition hover:text-[#f5a623]">ZArtizen</a>
        <div className="flex items-center gap-4 text-xs text-white/70">
          <a href="/" className="hidden transition hover:text-white sm:inline">Home</a>
          <a href="/festivals" className="hidden transition hover:text-white sm:inline">Festivals</a>
          <a href={CONTACT} className="rounded-full bg-[#f5a623] px-3 py-1.5 font-semibold text-[#0a1628] transition hover:brightness-110">
            Give input
          </a>
        </div>
      </div>
    </nav>
  );
}

function OptionCard({ opt, recommended }: { opt: OptionRow; recommended?: boolean }) {
  return (
    <div
      className={
        recommended
          ? 'rounded-2xl border border-[#f5a623]/50 bg-[#f5a623]/10 p-6'
          : 'rounded-2xl border border-white/10 bg-white/5 p-6'
      }
    >
      <div className="flex items-baseline justify-between gap-2">
        <h3 className="text-base font-bold sm:text-lg">{opt.label}</h3>
        {recommended ? (
          <span className="rounded-full bg-[#f5a623]/20 px-2 py-0.5 text-[10px] uppercase tracking-wide text-[#f5a623]">
            Recommended
          </span>
        ) : null}
      </div>
      <div className="mt-4 grid gap-4 sm:grid-cols-2">
        <div>
          <h4 className="text-xs font-semibold uppercase tracking-wide text-white/50">Pros</h4>
          <ul className="mt-2 space-y-1.5">
            {opt.pros.map((p) => (
              <li key={p} className="flex gap-2 text-sm text-white/75"><span className="mt-1 text-[#f5a623]">+</span><span>{p}</span></li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="text-xs font-semibold uppercase tracking-wide text-white/50">Cons</h4>
          <ul className="mt-2 space-y-1.5">
            {opt.cons.map((c) => (
              <li key={c} className="flex gap-2 text-sm text-white/75"><span className="mt-1 text-white/40">-</span><span>{c}</span></li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default function ProposalPage() {
  return (
    <main className="min-h-screen bg-[#0a1628] text-white">
      <NavBar />
      <div className="mx-auto max-w-4xl px-4 py-10 sm:px-6 lg:px-8">
        <header className="mb-10">
          <p className="text-xs font-semibold uppercase tracking-widest text-[#f5a623]">
            ZAO Festivals on Artizen - proposal for team input
          </p>
          <h1 className="mt-2 text-3xl font-bold leading-tight sm:text-4xl">
            Create our own fund, or curate into existing ones?
          </h1>
          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-white/70 sm:text-base">
            We want to get ZAOstock, Zaoville, and our other events funded on Artizen. After a full scan
            of the platform (~79 funds), the original plan - create our own ZAO Festivals Fund - looks
            less obvious than it did. This page lays out what we found and two paths. Tell us what you think.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a href={CONTACT} className="rounded-full bg-[#f5a623] px-5 py-2.5 text-sm font-semibold text-[#0a1628] transition hover:brightness-110">
              Give your input
            </a>
            <a href={REPO} target="_blank" rel="noopener noreferrer" className="rounded-full border border-white/20 px-5 py-2.5 text-sm font-semibold text-white/80 transition hover:bg-white/5">
              Read the full research
            </a>
          </div>
        </header>

        <section className="mb-12">
          <h2 className="text-lg font-bold sm:text-xl">What we found</h2>
          <ul className="mt-4 space-y-2.5">
            {FINDINGS.map((f) => (
              <li key={f} className="flex gap-2 text-sm leading-relaxed text-white/75">
                <span className="mt-1 text-[#f5a623]">-</span><span>{f}</span>
              </li>
            ))}
          </ul>
        </section>

        <section className="mb-12 space-y-4">
          <h2 className="text-lg font-bold sm:text-xl">The two options</h2>
          <OptionCard opt={OPTION_A} />
          <OptionCard opt={OPTION_B} recommended />
        </section>

        <section className="mb-12 rounded-2xl border border-white/10 bg-white/5 p-6">
          <h2 className="text-lg font-bold sm:text-xl">The recommendation (open to change)</h2>
          <p className="mt-3 text-sm leading-relaxed text-white/70">
            Start with <span className="text-white">Option B</span>: curate ZAOstock + Zaoville into
            We're Loud, Global Music, Greenpill, and our own ZAO Fund. It gets our events funded now, with
            no approval and no new overhead - and it puts our energy on the real bottleneck, which is
            getting people to collect our projects this drive. We can still create a dedicated ZAO
            Festivals Fund later if we want to host other organizers under us. But that is a bigger, second
            step, not the starting move.
          </p>
        </section>

        <section id="input" className="mb-12 scroll-mt-20 rounded-2xl border border-[#f5a623]/30 bg-white/5 p-6">
          <h2 className="text-lg font-bold sm:text-xl">We want your input</h2>
          <p className="mt-3 text-sm leading-relaxed text-white/70">
            This is a proposal, not a decision. If you are on a ZAO Festivals team - ZAOstock, Zaoville,
            COC, or any ZAO event - tell us: does Option A or B feel right? What are we missing? Which
            funds should our events go into? Who do you know who runs a fund we should talk to?
          </p>
          <div className="mt-5 flex flex-wrap gap-3">
            <a href={CONTACT} className="rounded-full bg-[#f5a623] px-5 py-2.5 text-sm font-semibold text-[#0a1628] transition hover:brightness-110">
              Email your take
            </a>
            <a href={REPO} target="_blank" rel="noopener noreferrer" className="rounded-full border border-white/20 px-5 py-2.5 text-sm font-semibold text-white/80 transition hover:bg-white/5">
              Open an issue on GitHub
            </a>
          </div>
        </section>

        <footer className="border-t border-white/10 pt-8">
          <nav className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-xs text-white/60">
            <a href="/" className="transition hover:text-white">ZArtizen home</a>
            <a href="/festivals" className="transition hover:text-white">ZAO Festivals</a>
            <a href={REPO} target="_blank" rel="noopener noreferrer" className="transition hover:text-white">GitHub</a>
            <a href="https://artizen.thezao.com/" target="_blank" rel="noopener noreferrer" className="transition hover:text-white">The fund</a>
          </nav>
          <p className="mt-5 text-center text-[11px] leading-relaxed text-white/35">
            A ZAO Festivals working proposal. Findings are a 2026-06-14 snapshot of a fast-moving platform.
          </p>
        </footer>
      </div>
    </main>
  );
}
