import type { Metadata } from 'next';

// /sponsor - the sponsor/donor-facing page. Explains what the ZAO Fund backs, the two giving rails
// (tax-deductible 501c3 OR matched Artizen sponsorship - one or the other, per Rene 2026-06-22),
// what a gift does, recognition, and how to give. Provenance: research/synergies + doc 887.

const FUND_URL = 'https://artizen.thezao.com/';
const CONTACT = 'mailto:zaal@thezao.com?subject=Sponsoring%20the%20ZAO%20Fund';

export const metadata: Metadata = {
  title: 'Sponsor the ZAO Fund - back emerging culture',
  description:
    'Back independent artists through the ZAO Fund for Emerging Culture on Artizen. Two ways to give: tax-deductible, or matched with top billing.',
};

interface Rail {
  tag: string;
  title: string;
  body: string;
  best: string;
}

const RAILS: Rail[] = [
  {
    tag: 'Rail A',
    title: 'Tax-deductible',
    body: 'Give through our 501(c)(3) partner (Fractured Atlas / New Media Commons). A standard charitable donation with a tax receipt.',
    best: 'Best if the write-off matters most - foundations, businesses, larger gifts.',
  },
  {
    tag: 'Rail B',
    title: 'Matched + top billing',
    body: 'Sponsor the ZAO Fund on Artizen. Your gift unlocks matching funds from the platform endowment and deepens the pool behind every artist we back - and the top contributor is featured as Presenting Sponsor on the fund.',
    best: 'Best if amplified impact + brand visibility matter most.',
  },
];

interface Fact {
  k: string;
  v: string;
}

const FACTS: Fact[] = [
  { k: '100%', v: 'of every Artifact sale goes to the creator' },
  { k: '0%', v: 'platform fee taken from creators' },
  { k: '$1 : $1+', v: 'every dollar raised unlocks matching funds' },
  { k: '$10', v: 'the price of an Artifact - anyone can back an artist' },
];

export default function SponsorPage() {
  return (
    <main className="mx-auto max-w-3xl px-5 py-12">
      <header className="mb-8">
        <div style={{ letterSpacing: 4 }} className="text-sm font-bold uppercase text-[#f5a623]">
          The ZAO on Artizen
        </div>
        <h1 className="mt-2 text-3xl font-bold sm:text-4xl">Back the next wave of culture</h1>
        <p className="mt-3 text-white/70">
          The{' '}
          <a href={FUND_URL} className="text-[#f5a623] underline" target="_blank" rel="noopener noreferrer">
            ZAO Fund for Emerging Culture
          </a>{' '}
          backs independent musicians, artists, and technologists building collaborative cultural experiences -
          from a free festival in Maine to creators around the world. Sponsors and donors are how we deepen the
          support behind every artist we curate.
        </p>
      </header>

      <section className="mb-10 grid grid-cols-2 gap-3 sm:grid-cols-4">
        {FACTS.map((f) => (
          <div key={f.k} className="rounded-xl border border-white/10 bg-white/5 p-4">
            <div className="text-2xl font-semibold text-[#f5a623]">{f.k}</div>
            <div className="mt-1 text-xs text-white/55">{f.v}</div>
          </div>
        ))}
      </section>

      <section className="mb-10">
        <h2 className="mb-3 text-sm font-semibold uppercase tracking-wide text-white/50">Two ways to give</h2>
        <p className="mb-4 text-sm text-white/60">
          Pick the one that fits - they are separate paths, not combined. We will route you to the right one.
        </p>
        <div className="grid gap-3 sm:grid-cols-2">
          {RAILS.map((r) => (
            <div key={r.tag} className="rounded-xl border border-white/10 bg-white/5 p-5">
              <div className="text-xs uppercase tracking-wide text-[#f5a623]">{r.tag}</div>
              <div className="mt-1 text-lg font-semibold">{r.title}</div>
              <p className="mt-2 text-sm text-white/65">{r.body}</p>
              <p className="mt-2 text-xs text-white/45">{r.best}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-10 rounded-2xl border border-white/10 bg-white/5 p-6">
        <h2 className="text-lg font-semibold">What your support does</h2>
        <p className="mt-2 text-sm text-white/65">
          Sponsor dollars are pooled into the ZAO Fund as matching funds. When a fan buys a $10 Artifact from a
          project we back, your matching is unlocked on top - so your gift multiplies the artist&apos;s own
          fundraising rather than replacing it. You are not funding overhead; you are amplifying creators who are
          already showing up for their work.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="mb-3 text-sm font-semibold uppercase tracking-wide text-white/50">Where it goes</h2>
        <ul className="space-y-2 text-sm text-white/70">
          <li className="rounded-lg border border-white/10 bg-white/5 p-3">
            <strong className="text-white">ZAOstock 2026</strong> - a free, artist-built music festival in
            downtown Ellsworth, Maine (Oct 3), at the gateway to Acadia. Built by a 27-person team + the local
            community.
          </li>
          <li className="rounded-lg border border-white/10 bg-white/5 p-3">
            <strong className="text-white">The ZAO community of creators</strong> - musicians, filmmakers, and
            builders running projects on Artizen.{' '}
            <a href="/community" className="text-[#f5a623] underline">
              See who we back
            </a>
            .
          </li>
          <li className="rounded-lg border border-white/10 bg-white/5 p-3">
            <strong className="text-white">Live standings</strong> - we build in public.{' '}
            <a href="/dashboard" className="text-[#f5a623] underline">
              See the fund dashboard
            </a>
            .
          </li>
        </ul>
      </section>

      <div className="flex flex-wrap gap-3">
        <a
          href={CONTACT}
          className="rounded-lg bg-[#f5a623] px-5 py-3 font-semibold text-[#0a1628]"
        >
          Talk to us about sponsoring
        </a>
        <a
          href={FUND_URL}
          className="rounded-lg border border-white/20 px-5 py-3 font-semibold text-white"
          target="_blank"
          rel="noopener noreferrer"
        >
          See the fund on Artizen
        </a>
      </div>

      <footer className="mt-8 text-xs text-white/40">
        Questions? Reach Zaal at zaal@thezao.com. We will point you to the giving path that fits your goals.
      </footer>
    </main>
  );
}
