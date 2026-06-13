import type { Metadata } from 'next';

// /festivals - the ZAO Festivals Fund. A second, dedicated ZAO fund (in proposal
// with Artizen) for music + artist-led real-world events. Provenance: research/850.

const FUND_URL = 'https://artizen.thezao.com/';
const SUBMIT_URL = 'https://artizen.fund/submit';
const CONTACT = 'mailto:zaal@thezao.com?subject=ZAO%20Festivals%20Fund';

export const metadata: Metadata = {
  title: 'ZAO Festivals Fund - back live culture',
  description:
    'A community match fund for music festivals, concerts, and artist-led real-world activations. The open lane on Artizen - artist-first, IRL, community-powered.',
  openGraph: {
    title: 'ZAO Festivals Fund',
    description:
      'A match fund for music festivals and artist-led real-world activations. Artist-first, IRL, community-powered.',
    type: 'website',
  },
};

interface Lane {
  fund: string;
  owns: string;
}

const LANES: Lane[] = [
  { fund: 'Greenpill Regen Gatherings', owns: 'regenerative / ecovillage gatherings' },
  { fund: 'Terminus', owns: 'sovereign communities, network states' },
  { fund: 'Hubs / Third Place', owns: 'permanent physical spaces' },
  { fund: 'ZAO Festivals Fund', owns: 'music + artist-led IRL festivals and activations' },
];

interface FestEvent {
  name: string;
  when: string;
  where: string;
  blurb: string;
  flagship?: boolean;
}

// Events under the ZAO Festivals umbrella. ZAOstock = flagship; Zaoville needs support too.
const EVENTS: FestEvent[] = [
  {
    name: 'ZAOstock 2026',
    when: 'October 2026',
    where: 'Franklin St Parklet, Ellsworth, Maine',
    blurb:
      'The flagship - a one-day independent-artist festival where a crypto-native music community throws a real small-town Maine festival. Community-curated lineup, artists paid fairly, free and open.',
    flagship: true,
  },
  {
    name: 'Zaoville',
    when: 'Summer 2026',
    where: 'DC metro area',
    blurb:
      'A ZAO day-party hosted with Dcoop - and a live dry run for the ZAOstock model. The umbrella in action ahead of the flagship.',
  },
  {
    name: 'Your event',
    when: 'Rolling',
    where: 'Anywhere',
    blurb:
      'Running a festival, concert, show, or gathering that fits the ZAO spirit? Bring it under ZAO Festivals and tap the fund + the community.',
  },
];

const ELIGIBILITY: string[] = [
  'Produces a real-world gathering or live cultural activation - festival, concert, show, residency, tour, exhibition',
  'Creator / organizer owned and independently operated',
  'Meaningful community participation, not a top-down production',
  'Builds in public - shares process, progress, lineup, outcomes',
  'Fair compensation for the artists involved',
  'Culminates in something public people can show up to',
];

interface CohortItem {
  name: string;
  blurb: string;
}

const COHORT: CohortItem[] = [
  { name: 'COC Concertz', blurb: 'Community-owned concert promotion and artist showcases.' },
  { name: 'Artist tours + residencies', blurb: 'ZAO-incubated artists taking the work on the road and into rooms.' },
  { name: 'ZABAL Games activations', blurb: 'Live demos, showcases, and workshops from the bootcamp world.' },
  { name: 'Independent organizers', blurb: 'Anyone running live culture who wants a fund that actually gets it.' },
];

function NavBar() {
  return (
    <nav className="sticky top-0 z-20 border-b border-white/10 bg-[#0a1628]/90 backdrop-blur">
      <div className="mx-auto flex max-w-4xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        <a href="/" className="text-sm font-bold tracking-tight transition hover:text-[#f5a623]">
          ZArtizen
        </a>
        <div className="flex items-center gap-4 text-xs text-white/70">
          <a href="/" className="hidden transition hover:text-white sm:inline">Home</a>
          <a href="#events" className="hidden transition hover:text-white sm:inline">Events</a>
          <a href="#fund" className="hidden transition hover:text-white sm:inline">What we fund</a>
          <a href="#join" className="hidden transition hover:text-white sm:inline">Join</a>
          <a
            href={CONTACT}
            className="rounded-full bg-[#f5a623] px-3 py-1.5 font-semibold text-[#0a1628] transition hover:brightness-110"
          >
            Get involved
          </a>
        </div>
      </div>
    </nav>
  );
}

export default function FestivalsPage() {
  return (
    <main className="min-h-screen bg-[#0a1628] text-white">
      <NavBar />
      <div className="mx-auto max-w-4xl px-4 py-10 sm:px-6 lg:px-8">
        {/* Hero */}
        <header className="mb-10">
          <p className="text-xs font-semibold uppercase tracking-widest text-[#f5a623]">
            A ZAO umbrella + fund on Artizen - launching
          </p>
          <h1 className="mt-2 text-3xl font-bold leading-tight sm:text-4xl">ZAO Festivals</h1>
          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-white/70 sm:text-base">
            ZAO Festivals presents music festivals, concerts, and artist-led real-world activations -
            ZAOstock, Zaoville, and more - and backs them with a community match fund so organizers get
            funded without losing ownership. Artist-first, IRL, community-powered.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href={CONTACT}
              className="rounded-full bg-[#f5a623] px-5 py-2.5 text-sm font-semibold text-[#0a1628] transition hover:brightness-110"
            >
              Bring your festival
            </a>
            <a
              href={CONTACT}
              className="rounded-full border border-white/20 px-5 py-2.5 text-sm font-semibold text-white/80 transition hover:bg-white/5"
            >
              Sponsor the fund
            </a>
          </div>
        </header>

        {/* Status banner */}
        <div className="mb-12 rounded-2xl border border-[#f5a623]/30 bg-[#f5a623]/5 p-5 text-sm leading-relaxed text-white/80">
          <span className="font-semibold text-[#f5a623]">Status:</span> in proposal with Artizen. We are
          lining up the first festivals and sponsors now so the fund launches with momentum. Get in
          early - the earliest organizers and backers set the tone.
        </div>

        {/* Events under the umbrella */}
        <section id="events" className="mb-12 scroll-mt-20">
          <h2 className="text-lg font-bold sm:text-xl">Our events</h2>
          <p className="mt-2 text-sm leading-relaxed text-white/70">
            ZAO Festivals is the umbrella. Each event is its own project that the community backs, and
            the fund matches. ZAOstock is the flagship - Zaoville is the dry run - and the door is open
            for more.
          </p>
          <ul className="mt-4 grid gap-3 sm:grid-cols-3">
            {EVENTS.map((e) => (
              <li
                key={e.name}
                className={
                  e.flagship
                    ? 'flex flex-col rounded-xl border border-[#f5a623]/50 bg-[#f5a623]/10 p-4'
                    : 'flex flex-col rounded-xl border border-white/10 bg-white/5 p-4'
                }
              >
                <div className="flex items-baseline justify-between gap-2">
                  <h3 className={e.flagship ? 'text-sm font-bold text-[#f5a623]' : 'text-sm font-bold'}>
                    {e.name}
                  </h3>
                  {e.flagship ? (
                    <span className="rounded-full bg-[#f5a623]/20 px-2 py-0.5 text-[9px] uppercase tracking-wide text-[#f5a623]">
                      Flagship
                    </span>
                  ) : null}
                </div>
                <p className="mt-1 text-[11px] uppercase tracking-wide text-white/45">
                  {e.when} - {e.where}
                </p>
                <p className="mt-2 text-xs leading-relaxed text-white/70">{e.blurb}</p>
              </li>
            ))}
          </ul>
        </section>

        {/* The open lane */}
        <section className="mb-12">
          <h2 className="text-lg font-bold sm:text-xl">The open lane</h2>
          <p className="mt-2 text-sm leading-relaxed text-white/70">
            Artizen already has great community funds - but none for music and artist-led live events.
            That is the gap the ZAO Festivals Fund fills.
          </p>
          <ul className="mt-4 grid gap-3 sm:grid-cols-2">
            {LANES.map((l) => {
              const isZao = l.fund === 'ZAO Festivals Fund';
              return (
                <li
                  key={l.fund}
                  className={
                    isZao
                      ? 'rounded-xl border border-[#f5a623]/50 bg-[#f5a623]/10 p-4'
                      : 'rounded-xl border border-white/10 bg-white/5 p-4'
                  }
                >
                  <h3 className={isZao ? 'text-sm font-semibold text-[#f5a623]' : 'text-sm font-semibold'}>
                    {l.fund}
                  </h3>
                  <p className="mt-1 text-xs text-white/60">{l.owns}</p>
                </li>
              );
            })}
          </ul>
        </section>

        {/* What we fund */}
        <section id="fund" className="mb-12 scroll-mt-20 rounded-2xl border border-white/10 bg-white/5 p-6">
          <h2 className="text-lg font-bold sm:text-xl">What we fund</h2>
          <ul className="mt-3 space-y-1.5">
            {ELIGIBILITY.map((item) => (
              <li key={item} className="flex gap-2 text-sm text-white/70">
                <span className="mt-1 text-[#f5a623]">-</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* How it works */}
        <section className="mb-12">
          <h2 className="text-lg font-bold sm:text-xl">How the match works</h2>
          <p className="mt-3 text-sm leading-relaxed text-white/70">
            On Artizen, supporters collect a project&apos;s $10 open-edition Artifact (100% to the
            creator). Every dollar of sales unlocks a matching dollar from each fund backing the
            project. Curate your festival into the ZAO Festivals Fund and other aligned funds, and the
            same sale multiplies. The ZAO community shows up to collect and boost - that is the edge.
          </p>
        </section>

        {/* Cohort */}
        <section className="mb-12">
          <h2 className="text-lg font-bold sm:text-xl">Who it is for</h2>
          <ul className="mt-4 grid gap-3 sm:grid-cols-2">
            {COHORT.map((c) => (
              <li key={c.name} className="rounded-xl border border-white/10 bg-white/5 p-4">
                <h3 className="text-sm font-semibold">{c.name}</h3>
                <p className="mt-1 text-xs leading-relaxed text-white/60">{c.blurb}</p>
              </li>
            ))}
          </ul>
        </section>

        {/* Join */}
        <section id="join" className="mb-12 scroll-mt-20 rounded-2xl border border-[#f5a623]/30 bg-white/5 p-6">
          <h2 className="text-lg font-bold sm:text-xl">Get in early</h2>
          <p className="mt-3 text-sm leading-relaxed text-white/70">
            Running a festival or live event? Reach out and we will line you up for the fund&apos;s
            first season. Want to sponsor live culture and let the community direct it? Same - let&apos;s talk.
          </p>
          <div className="mt-5 flex flex-wrap gap-3">
            <a
              href={CONTACT}
              className="rounded-full bg-[#f5a623] px-5 py-2.5 text-sm font-semibold text-[#0a1628] transition hover:brightness-110"
            >
              Bring your festival
            </a>
            <a
              href={CONTACT}
              className="rounded-full border border-white/20 px-5 py-2.5 text-sm font-semibold text-white/80 transition hover:bg-white/5"
            >
              Sponsor the fund
            </a>
            <a
              href={SUBMIT_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-white/20 px-5 py-2.5 text-sm font-semibold text-white/80 transition hover:bg-white/5"
            >
              Submit on Artizen
            </a>
          </div>
        </section>

        <footer className="border-t border-white/10 pt-8">
          <div className="flex flex-col items-center gap-5 text-center">
            <nav className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-xs text-white/60">
              <a href="/" className="transition hover:text-white">ZArtizen home</a>
              <a href={FUND_URL} target="_blank" rel="noopener noreferrer" className="transition hover:text-white">The ZAO Fund</a>
              <a href="https://artizen.fund" target="_blank" rel="noopener noreferrer" className="transition hover:text-white">Artizen</a>
              <a href="https://zaoos.com" target="_blank" rel="noopener noreferrer" className="transition hover:text-white">The ZAO</a>
            </nav>
            <p className="text-[11px] leading-relaxed text-white/35">
              ZAO Festivals Fund - in proposal with Artizen. Built by The ZAO.
            </p>
          </div>
        </footer>
      </div>
    </main>
  );
}
