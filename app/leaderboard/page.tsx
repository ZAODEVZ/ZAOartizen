import type { Metadata } from 'next';
import { leaderboard, snapshotDate } from './data';

// /leaderboard - Season 6 field snapshot (scraped). Shows where every project stands and
// flags ZAO-tied ones. Rank = most Artifact sales (the win metric). Provenance: research 886.

export const metadata: Metadata = {
  title: 'Season 6 Leaderboard - the field',
  description: 'Snapshot of the Artizen Season 6 leaderboard with ZAO-tied projects flagged.',
};

function usd(n: number): string {
  return `$${n.toLocaleString('en-US')}`;
}

const zaoCount = leaderboard.filter((r) => r.zaoTie).length;

export default function LeaderboardPage() {
  return (
    <main className="mx-auto max-w-5xl px-5 py-12">
      <header className="mb-6">
        <h1 className="text-3xl font-bold sm:text-4xl">Season 6 Leaderboard</h1>
        <p className="mt-2 max-w-2xl text-white/60">
          The whole field. Rank is by <strong>Artifact sales</strong> (the win metric - most sold takes the
          prize). {zaoCount} projects are ZAO-tied (gold). Use this to spot cross-back targets and see who the
          ZAO crowd should rally behind.
        </p>
        <p className="mt-2 text-xs text-white/40">
          Snapshot {snapshotDate} (Flourish Fund Drive). Numbers move daily - re-scrape before quoting. Edit{' '}
          <code className="text-white/60">app/leaderboard/data.ts</code>.
        </p>
      </header>

      <div className="overflow-x-auto rounded-xl border border-white/10">
        <table className="w-full text-left text-sm">
          <thead className="bg-white/5 text-white/50">
            <tr>
              <th className="px-3 py-2 font-medium">#</th>
              <th className="px-3 py-2 font-medium">Project</th>
              <th className="px-3 py-2 font-medium">Creator</th>
              <th className="px-3 py-2 font-medium">Sales</th>
              <th className="px-3 py-2 font-medium">Match</th>
              <th className="px-3 py-2 font-medium">Category</th>
            </tr>
          </thead>
          <tbody>
            {leaderboard.map((r) => (
              <tr
                key={r.rank}
                className={`border-t border-white/10 ${r.zaoTie ? 'bg-[#f5a623]/10' : ''}`}
              >
                <td className="px-3 py-2 text-white/50">{r.rank}</td>
                <td className="px-3 py-2 font-medium">
                  {r.name}
                  {r.zaoTie ? (
                    <span className="ml-2 rounded bg-[#f5a623]/20 px-1.5 py-0.5 text-[10px] uppercase tracking-wide text-[#f5a623]">
                      ZAO
                    </span>
                  ) : null}
                  {r.zaoTie ? <div className="text-[11px] text-[#f5a623]/70">{r.zaoTie}</div> : null}
                </td>
                <td className="px-3 py-2 text-white/60">{r.creator}</td>
                <td className="px-3 py-2 font-medium">{usd(r.salesUsd)}</td>
                <td className="px-3 py-2 text-white/50">{usd(r.matchUsd)}</td>
                <td className="px-3 py-2 text-white/50">{r.category}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <footer className="mt-6 border-t border-white/10 pt-6 text-xs text-white/40">
        Win metric confirmed: the board sorts by sales, not boosts - so the ZAO crowd buying many $10 Artifacts
        of one curated project is the lever. See <code>TEAM-PLAYBOOK.md</code>. Dashboard:{' '}
        <a href="/dashboard" className="text-[#f5a623] underline">
          /dashboard
        </a>
        .
      </footer>
    </main>
  );
}
