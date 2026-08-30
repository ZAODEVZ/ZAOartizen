import type { Metadata } from 'next';

// /playbook - a creator-facing page to send Artizen project owners to. Explains how Artizen works,
// how to finish the season strong, and how the ZAO Fund + Zaal add value.
//
// MECHANICS SOURCE: research/mechanics-canonical.md. Do not change a number or a rule on this page
// without changing it there first - that file carries the source and date for every claim, and the
// TODO-VERIFY register for the ones this repo cannot confirm (the match ratio is conflict M1; the
// "top ~30% by votes" curation step in STEPS below is conflict M4, unconfirmed since 2026-06-28).

const FUND_URL = 'https://artizen.thezao.com/';
const CONTACT = 'mailto:zaal@thezao.com?subject=ZAO%20Fund%20on%20Artizen';

export const metadata: Metadata = {
  title: 'The ZAO Fund on Artizen - the creator playbook',
  description:
    'How Artizen works, how to finish the season strong, and how the ZAO Fund for Emerging Culture helps you raise more. A plain-English guide for creators.',
};

interface Step {
  n: string;
  t: string;
  b: string;
}

const STEPS: Step[] = [
  { n: '1', t: 'Sponsors fund the pools', b: 'Brands + people back "Funds" - shared pools of match money. 100% goes to the Funds; Artizen takes no cut.' },
  { n: '2', t: 'You submit your project', b: 'Submit to every Fund you qualify for. The more Funds back you, the more match you can unlock.' },
  { n: '3', t: 'The community curates', b: 'Everyone votes. The top ~30% of projects by votes get curated into the competition.' },
  { n: '4', t: 'Fans buy $10 Artifacts', b: 'Your Artifact is a $10 open-edition collectible. You keep 100% of every sale.' },
  { n: '5', t: 'Each sale unlocks match', b: 'Every $10 in Artifact sales unlocks $10 of match - from EACH Fund backing you - while the pool lasts.' },
  { n: '6', t: 'The top-ranked project wins the prize', b: 'At season end you get one payout: your sales + match + any cash prize. 10% of each Fund is a prize for its top-ranked project - and rank is (sales + match) x boosts, not sales alone. Sell AND get boosted.' },
];

interface Tactic {
  t: string;
  b: string;
}

const TACTICS: Tactic[] = [
  { t: 'Qualify for multiple Funds', b: 'This is the biggest lever. One $10 sale matched by 3 Funds = $30 unlocked. Submit to every Fund you fit - the ZAO Fund included.' },
  { t: 'Make the Artifact amazing', b: 'Square, NO text or graphic overlays, and a GIF or video performs best. It is the single thing buyers see - make it iconic.' },
  { t: 'Say it simply', b: 'Few words, no jargon. Clearly: what it is and why it matters.' },
  { t: 'Promote in the first push', b: 'Bring your own fans AND the Artizen community. Early momentum compounds - a coordinated open beats a slow trickle.' },
  { t: 'Engage every comment', b: 'Reply to questions, take feedback, update your submission. Active projects climb; quiet ones stall.' },
];

const HELP: string[] = [
  'Curate your project into the ZAO Fund for Emerging Culture - that is another Fund matching your sales.',
  'Host you in a ZAO space, or join yours, to put your project in front of our community.',
  'Run a livestream together around your work and the drive.',
  'Write an article about your project to give it a signal boost.',
];

export default function PlaybookPage() {
  return (
    <main className="mx-auto max-w-3xl px-5 py-12">
      <header className="mb-10">
        <div style={{ letterSpacing: 4 }} className="text-sm font-bold uppercase text-[#f5a623]">
          ZAO Fund x Artizen
        </div>
        <h1 className="mt-2 text-3xl font-bold sm:text-4xl">The creator playbook</h1>
        <p className="mt-3 text-white/70">
          Everything you need to raise more on Artizen and finish the season strong - in plain English. Then how
          the{' '}
          <a href={FUND_URL} className="text-[#f5a623] underline" target="_blank" rel="noopener noreferrer">
            ZAO Fund for Emerging Culture
          </a>{' '}
          helps you do it.
        </p>
      </header>

      <section className="mb-12">
        <h2 className="mb-4 text-sm font-semibold uppercase tracking-wide text-white/50">How Artizen works</h2>
        <div className="space-y-3">
          {STEPS.map((s) => (
            <div key={s.n} className="flex gap-4 rounded-xl border border-white/10 bg-white/5 p-4">
              <div className="text-2xl font-bold text-[#f5a623]">{s.n}</div>
              <div>
                <div className="font-semibold">{s.t}</div>
                <div className="mt-0.5 text-sm text-white/60">{s.b}</div>
              </div>
            </div>
          ))}
        </div>
        <p className="mt-3 text-xs text-white/40">
          Source: Artizen&apos;s own Playbook + Guide (René Pinnell, news.artizen.fund). Creators keep 100% of
          sales; held until season end, then paid as one combined payout.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="mb-4 text-sm font-semibold uppercase tracking-wide text-white/50">
          Finish the season strong - 5 moves
        </h2>
        <div className="grid gap-3 sm:grid-cols-2">
          {TACTICS.map((t) => (
            <div key={t.t} className="rounded-xl border border-white/10 bg-white/5 p-4">
              <div className="font-semibold text-[#f5a623]">{t.t}</div>
              <div className="mt-1 text-sm text-white/60">{t.b}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-12 rounded-2xl border border-[#f5a623]/30 bg-gradient-to-br from-[#f5a623]/10 to-transparent p-6">
        <h2 className="text-lg font-semibold">How the ZAO Fund helps you</h2>
        <p className="mt-2 text-sm text-white/65">
          We are not just another Fund - we show up for the creators we back. If your work is at the intersection
          of art, music, technology, and community, we can:
        </p>
        <ul className="mt-3 space-y-2">
          {HELP.map((h) => (
            <li key={h} className="flex gap-2 text-sm text-white/75">
              <span className="text-[#f5a623]">-</span>
              <span>{h}</span>
            </li>
          ))}
        </ul>
        <p className="mt-3 text-sm text-white/55">
          Tell us what would actually help, and we will do what we can.
        </p>
      </section>

      <div className="flex flex-wrap gap-3">
        <a href={CONTACT} className="rounded-lg bg-[#f5a623] px-5 py-3 font-semibold text-[#0a1628]">
          Talk to us about the ZAO Fund
        </a>
        <a
          href={FUND_URL}
          className="rounded-lg border border-white/20 px-5 py-3 font-semibold text-white"
          target="_blank"
          rel="noopener noreferrer"
        >
          See the ZAO Fund on Artizen
        </a>
      </div>

      <footer className="mt-8 text-xs text-white/40">
        New to the ZAO Fund?{' '}
        <a href="/about" className="text-[#f5a623] underline">
          How it works
        </a>{' '}
        -{' '}
        <a href="/community" className="text-[#f5a623] underline">
          who we back
        </a>
        . Reach Zaal at zaal@thezao.com.
      </footer>
    </main>
  );
}
