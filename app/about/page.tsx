import type { Metadata } from 'next';

// /about - plain-language explainer for first-time visitors (esp. sponsors/donors who've never heard
// of Artizen). What this is, what Artizen is, how backing works, + a short FAQ. Provenance: doc 887.

const FUND_URL = 'https://artizen.thezao.com/';

export const metadata: Metadata = {
  title: 'How it works - The ZAO on Artizen',
  description:
    'Plain-English: what the ZAO Fund is, what Artizen is, and how backing an artist works. For first-time visitors, sponsors, and donors.',
};

interface QA {
  q: string;
  a: string;
}

const FAQ: QA[] = [
  {
    q: 'Is my gift tax-deductible?',
    a: 'It can be. We offer two separate paths: give through our 501(c)(3) partner for a tax-deductible donation, OR sponsor on Artizen where your gift is matched and you get top billing. Same dollar can only do one - we will point you to the right one for your goals.',
  },
  {
    q: 'Where does my money actually go?',
    a: 'Into the ZAO Fund as matching funds. When a fan buys a $10 collectible from an artist we back, your match unlocks on top - so you are doubling the artist’s own fundraising, not paying for overhead. Creators keep 100% of their sales; the platform takes 0% from them.',
  },
  {
    q: 'What do I get as a sponsor?',
    a: 'On the Artizen path, the top contributor to the fund is featured as the Presenting Sponsor on the fund page, plus the impact of every dollar being matched. We also offer recognition tiers tied to the festival.',
  },
  {
    q: 'What is Artizen, briefly?',
    a: 'A platform for funding art, music, science, and culture. Creators sell $10 digital collectibles ("Artifacts") to fans; every $1 of sales unlocks $1+ of matching funds from community Funds like ours. It is run in seasons, like a friendly competition where backing real work is how you win.',
  },
  {
    q: 'What is the catch?',
    a: 'No catch, but be clear-eyed: collectibles are not investments, payouts happen after a season ends, and most of the long-term value is the impact and the community, not financial return. We back real artists doing real work.',
  },
];

export default function AboutPage() {
  return (
    <main className="mx-auto max-w-2xl px-5 py-12">
      <header className="mb-8">
        <div style={{ letterSpacing: 4 }} className="text-sm font-bold uppercase text-[#f5a623]">
          How it works
        </div>
        <h1 className="mt-2 text-3xl font-bold sm:text-4xl">Back real artists, in plain English</h1>
        <p className="mt-3 text-white/70">
          The{' '}
          <a href={FUND_URL} className="text-[#f5a623] underline" target="_blank" rel="noopener noreferrer">
            ZAO Fund for Emerging Culture
          </a>{' '}
          helps independent musicians and artists raise money for their work - and lets you turn $10, or a
          sponsorship, into real support for them. Here is the whole idea in 60 seconds.
        </p>
      </header>

      <section className="mb-10 space-y-4">
        {[
          { n: 1, t: 'Artists make work + a collectible', b: 'A musician or artist we believe in puts up their project and a $10 digital collectible that captures it.' },
          { n: 2, t: 'Fans back them for $10', b: 'You (or their fans) buy the $10 collectible. 100% goes to the creator - the platform takes nothing from them.' },
          { n: 3, t: 'Your support gets matched', b: 'Every $1 raised unlocks matching funds from the ZAO Fund (and any other fund backing them). Your $10 becomes $20+ for the artist.' },
          { n: 4, t: 'The community lifts each other', b: 'People also "boost" the projects they love, which helps them rank and win cash prizes. We win by showing up for each other.' },
        ].map((s) => (
          <div key={s.n} className="flex gap-4 rounded-xl border border-white/10 bg-white/5 p-4">
            <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#f5a623] font-bold text-[#0a1628]">
              {s.n}
            </div>
            <div>
              <div className="font-semibold">{s.t}</div>
              <div className="text-sm text-white/60">{s.b}</div>
            </div>
          </div>
        ))}
      </section>

      <section className="mb-10 rounded-2xl border border-[#f5a623]/30 bg-[#f5a623]/5 p-6">
        <h2 className="text-lg font-semibold">Why it is different</h2>
        <p className="mt-2 text-sm text-white/70">
          Most platforms take a cut from creators and gatekeep who gets funded. Here, creators keep 100%, the
          community decides what to back, and a small gift gets multiplied. It is built so the people who fund
          the work are the people who care about it - not middlemen.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="mb-4 text-sm font-semibold uppercase tracking-wide text-white/50">Common questions</h2>
        <div className="space-y-3">
          {FAQ.map((f) => (
            <div key={f.q} className="rounded-xl border border-white/10 bg-white/5 p-4">
              <div className="font-medium text-white">{f.q}</div>
              <div className="mt-1 text-sm text-white/60">{f.a}</div>
            </div>
          ))}
        </div>
      </section>

      <div className="flex flex-wrap gap-3">
        <a href="/sponsor" className="rounded-lg bg-[#f5a623] px-5 py-3 font-semibold text-[#0a1628]">
          Ways to give
        </a>
        <a href="/community" className="rounded-lg border border-white/20 px-5 py-3 font-semibold text-white">
          See who we back
        </a>
      </div>
    </main>
  );
}
