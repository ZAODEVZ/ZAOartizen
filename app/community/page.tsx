import type { Metadata } from 'next';
import { communityProjects, ARTIZEN_PROJECT_BASE } from './data';

// /community - the ZAO bloc: every Artizen project run by a ZAO member. Back them all (buy + boost).
// Provenance: research 886 (cross-backing) + member list from Zaal 2026-06-23.

export const metadata: Metadata = {
  title: 'ZAO Community on Artizen - back the bloc',
  description:
    'Every Artizen project run by a ZAO member. Buy a $10 Artifact and boost - we climb together.',
};

export default function CommunityPage() {
  return (
    <main className="mx-auto max-w-3xl px-5 py-12">
      <header className="mb-8">
        <h1 className="text-3xl font-bold sm:text-4xl">The ZAO bloc on Artizen</h1>
        <p className="mt-3 text-white/70">
          {communityProjects.length} projects run by ZAO members - people who have shown up for The ZAO. Back
          the whole set: a project&apos;s rank = (sales + match) x boost points, so the move is to
          <strong> buy a $10 Artifact AND boost</strong> (boosting is free). When we back each other, the whole
          bloc climbs together.
        </p>
        <p className="mt-2 text-sm text-white/45">
          <span className="rounded-full bg-emerald-500/15 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-emerald-400">verified</span>{' '}
          = details checked.{' '}
          <span className="rounded-full bg-[#f5a623]/15 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-[#f5a623]">confirm</span>{' '}
          = project details still being nailed down. Tap any card to open it on Artizen.
        </p>
        <p className="mt-2 text-xs text-white/35">
          Notes verified as of June 26, 2026. Projects and details move - re-check before sharing.
        </p>
      </header>

      <div className="grid gap-3 sm:grid-cols-2">
        {communityProjects.map((p) => (
          <a
            key={p.slug}
            href={`${ARTIZEN_PROJECT_BASE}${p.slug}`}
            target="_blank"
            rel="noopener noreferrer"
            className="group rounded-xl border border-white/10 bg-white/5 p-4 transition hover:border-[#f5a623]/50 hover:bg-[#f5a623]/5"
          >
            <div className="flex items-baseline justify-between gap-2">
              <span className="font-semibold">{p.name}</span>
              <span
                className={`shrink-0 rounded-full px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide ${
                  p.verified
                    ? 'bg-emerald-500/15 text-emerald-400'
                    : 'bg-[#f5a623]/15 text-[#f5a623]'
                }`}
              >
                {p.verified ? 'verified' : 'confirm'}
              </span>
            </div>
            <div className="mt-0.5 text-sm text-[#f5a623]/80">{p.owner}</div>
            <div className="mt-1 text-sm text-white/55">{p.note}</div>
            <div className="mt-2 flex items-center justify-between gap-2">
              {p.status ? (
                <span className="text-[11px] text-white/40">{p.status}</span>
              ) : (
                <span />
              )}
              <span className="text-[11px] uppercase tracking-wide text-[#f5a623] opacity-0 transition group-hover:opacity-100">
                open on Artizen &rarr;
              </span>
            </div>
          </a>
        ))}
      </div>

      <footer className="mt-8 border-t border-white/10 pt-6 text-xs text-white/40">
        Tap any card to open it on Artizen. Curate these into the{' '}
        <a href="https://artizen.thezao.com/" className="text-[#f5a623] underline" target="_blank" rel="noopener noreferrer">
          ZAO Fund
        </a>{' '}
        + adjacent funds for stacked match. See the{' '}
        <a href="/rally" className="text-[#f5a623] underline">
          rally
        </a>{' '}
        page for the 3-step ask. Edit <code>app/community/data.ts</code> as members launch projects.
      </footer>
    </main>
  );
}
