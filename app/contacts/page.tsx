import type { Metadata } from 'next';
import { ContactsExplorer } from './contacts-explorer';
import {
  roster,
  countBy,
  identifiedOwners,
  SNAPSHOT,
  S6_SNAPSHOT,
  STATUS_BLURB,
  FUND_URL,
} from './data';

// /contacts - the ZAO Fund creator contact book. Who owns every curated project, how to reach them,
// and whether we have actually spoken to them. Add new contacts in app/contacts/data.ts.

export const metadata: Metadata = {
  title: 'ZAO Fund contact book - who owns every project and who we have talked to',
  description:
    'Every project curated into the ZAO Fund for Emerging Culture, its owner, how to reach them, and the honest outreach status.',
  // The rows are no longer in this repo - they moved to the private vault on
  // 2026-09-07. The Basic auth in middleware.ts, the sitemap omission and this
  // noindex all stay, because they are the guardrails that let the rows ever come
  // back to a deployed page. Do not remove them and do not re-add the people.
  robots: { index: false, follow: false },
};

const STATS = [
  { n: String(roster.length), l: 'projects in the fund' },
  { n: String(identifiedOwners()), l: 'owners confirmed' },
  { n: String(countBy('relationship')), l: 'real relationships' },
  { n: String(countBy('drafted')), l: 'drafted, never sent' },
  { n: String(countBy('cold')), l: 'never contacted' },
];

export default function ContactsPage() {
  return (
    <main className="mx-auto max-w-4xl px-5 py-12">
      <header className="mb-8">
        <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#f5a623]">
          The ZAO Fund for Emerging Culture
        </p>
        <h1 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">The creator contact book</h1>
        <p className="mt-3 max-w-2xl text-white/70">
          Every project curated into the fund, who owns it, how to reach them, and whether we have actually
          spoken to them. The fund does the curation half of its job well. This page exists because it has
          barely started the relationship half.
        </p>
        <p className="mt-2 max-w-2xl text-sm text-white/45">
          The fund does the curation half of its job well and has barely started the relationship half.
          That is the direct cost of a roster we have never talked to.
        </p>
      </header>

      <div className="mb-8 grid grid-cols-2 gap-2 sm:grid-cols-5">
        {STATS.map((s) => (
          <div key={s.l} className="rounded-xl border border-white/10 bg-white/[0.03] px-3 py-3">
            <div className="text-2xl font-bold tabular-nums leading-none text-[#f5a623]">{s.n}</div>
            <div className="mt-1 text-[11px] uppercase tracking-wide text-white/40">{s.l}</div>
          </div>
        ))}
      </div>

      <section className="mb-8 rounded-xl border border-white/10 bg-white/[0.03] p-4">
        <h2 className="text-sm font-semibold uppercase tracking-wide text-white/60">
          What the statuses mean
        </h2>
        <dl className="mt-3 grid gap-2 text-[13px] sm:grid-cols-2">
          <div>
            <dt className="font-semibold text-emerald-400">relationship</dt>
            <dd className="text-white/55">{STATUS_BLURB.relationship}</dd>
          </div>
          <div>
            <dt className="font-semibold text-[#f5a623]">drafted, unsent</dt>
            <dd className="text-white/55">{STATUS_BLURB.drafted}</dd>
          </div>
          <div>
            <dt className="font-semibold text-rose-400/90">not contacted</dt>
            <dd className="text-white/55">{STATUS_BLURB.cold}</dd>
          </div>
          <div>
            <dt className="font-semibold text-sky-400">contacted</dt>
            <dd className="text-white/55">{STATUS_BLURB.contacted}</dd>
          </div>
        </dl>
      </section>

      {roster.length === 0 ? (
        <div className="rounded-xl border border-white/10 bg-white/[0.03] px-4 py-6 text-sm text-white/60">
          <p className="font-semibold text-white/80">The roster is not in this repository.</p>
          <p className="mt-2">
            This repo is public, and the contact book holds real people - their names, how to reach them,
            and our own notes about them. The rows live in the private vault instead. This page keeps the
            schema and the guardrails so the ledger can be rebuilt privately, not so it can be published.
          </p>
        </div>
      ) : (
        <ContactsExplorer roster={roster} />
      )}

      <footer className="mt-10 border-t border-white/10 pt-6 text-xs leading-relaxed text-white/40">
        Compiled {SNAPSHOT} from research/843 (Season 6 roster), research/851 (Season 7 roster),
        app/leaderboard/data.ts, research/bloc-projects.md, kit/meet-outreach-pack.md, LOOP.md and
        PLAN-1-MEET-PROJECTS.md, plus web research on each creator the same day. Sales figures are the{' '}
        {S6_SNAPSHOT} Season 6 snapshot and are historical: Season 7 reset every project to zero on July 9.
        Artizen is a Bubble.io app, so project pages are not fetchable and no identity here is confirmed from
        the platform itself.
        <br />
        <br />
        Add new contacts in <code className="rounded bg-white/10 px-1 py-0.5">app/contacts/data.ts</code>. Log
        replies in the PLAN-1 meet tracker, not here. Back the fund at{' '}
        <a href={FUND_URL} target="_blank" rel="noopener noreferrer" className="text-[#f5a623] underline">
          artizen.thezao.com
        </a>
        .
      </footer>
    </main>
  );
}
