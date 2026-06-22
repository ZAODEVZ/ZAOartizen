import type { Metadata } from 'next';
import { fundStats, backedProjects, horse, proofLog } from './data';

// /dashboard - the ZAO Fund scoreboard. Tracks the proof metrics (match DEPLOYED,
// buyers moved, projects climbed) that become the Phase 2 pitch to Rene. Data lives
// in ./data.ts - the team edits that file to update standings. Provenance: research 886.

const FUND_URL = 'https://artizen.thezao.com/';

export const metadata: Metadata = {
  title: 'ZAO Fund Dashboard - the scoreboard',
  description:
    'Live scoreboard for the ZAO Fund for Emerging Culture on Artizen: match deployed, projects backed, and the proof log.',
};

function usd(n: number | null): string {
  return n === null ? 'TBD' : `$${n.toLocaleString('en-US')}`;
}

function num(n: number | null): string {
  return n === null ? 'TBD' : n.toLocaleString('en-US');
}

function txt(s: string | null): string {
  return s === null || s === '' ? 'TBD' : s;
}

interface StatCardProps {
  label: string;
  value: string;
  hero?: boolean;
}

function StatCard({ label, value, hero }: StatCardProps) {
  return (
    <div
      className={`rounded-xl border p-4 ${
        hero ? 'border-[#f5a623] bg-[#f5a623]/10' : 'border-white/10 bg-white/5'
      }`}
    >
      <div className="text-xs uppercase tracking-wide text-white/50">{label}</div>
      <div className={`mt-1 text-2xl font-semibold ${hero ? 'text-[#f5a623]' : 'text-white'}`}>
        {value}
      </div>
    </div>
  );
}

export default function DashboardPage() {
  return (
    <main className="mx-auto max-w-5xl px-5 py-12">
      <header className="mb-8">
        <h1 className="text-3xl font-bold sm:text-4xl">ZAO Fund Dashboard</h1>
        <p className="mt-2 max-w-2xl text-white/60">
          The scoreboard for the{' '}
          <a href={FUND_URL} className="text-[#f5a623] underline">
            ZAO Fund for Emerging Culture
          </a>
          . We measure match <strong>deployed</strong> (not deposited) and the crowd we move - the proof we
          bring to Rene. Win condition: the project that sells the most Artifacts.
        </p>
        <p className="mt-2 text-xs text-white/40">
          Updated {fundStats.lastUpdated} by {fundStats.updatedBy}. Edit{' '}
          <code className="text-white/60">app/dashboard/data.ts</code> to update.
        </p>
      </header>

      <section className="mb-10">
        <h2 className="mb-3 text-sm font-semibold uppercase tracking-wide text-white/50">Fund - now</h2>
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
          <StatCard label="Match deployed" value={usd(fundStats.matchDeployedUsd)} hero />
          <StatCard label="Fund rank" value={fundStats.rank === null ? 'TBD' : `#${fundStats.rank}`} />
          <StatCard label="Pool (deposited)" value={usd(fundStats.poolUsd)} />
          <StatCard label="Match remaining" value={usd(fundStats.matchRemainingUsd)} />
          <StatCard label="Projects curated" value={num(fundStats.projectsCurated)} />
          <StatCard label="Signups driven" value={num(fundStats.signupsDriven)} />
          <StatCard
            label="Active drive"
            value={
              fundStats.activeDrive === null
                ? 'TBD'
                : `${fundStats.activeDrive}${fundStats.driveMultiplier ? ` (${fundStats.driveMultiplier})` : ''}`
            }
          />
          <StatCard label="Drive deadline" value={txt(fundStats.driveDeadline)} />
        </div>
      </section>

      <section className="mb-10">
        <h2 className="mb-3 text-sm font-semibold uppercase tracking-wide text-white/50">
          This drive's horse
        </h2>
        <div className="rounded-xl border border-white/10 bg-white/5 p-4">
          <div className="text-lg font-semibold text-[#f5a623]">{txt(horse.project)}</div>
          <div className="mt-1 text-sm text-white/60">Goal: {txt(horse.goal)}</div>
          <div className="text-sm text-white/60">Result: {txt(horse.result)}</div>
          <p className="mt-2 text-xs text-white/40">
            Pick one project per drive, aim the whole crew at it, climb the leaderboard.
          </p>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="mb-3 text-sm font-semibold uppercase tracking-wide text-white/50">
          Projects we back
        </h2>
        <div className="overflow-x-auto rounded-xl border border-white/10">
          <table className="w-full text-left text-sm">
            <thead className="bg-white/5 text-white/50">
              <tr>
                <th className="px-3 py-2 font-medium">Project</th>
                <th className="px-3 py-2 font-medium">In fund</th>
                <th className="px-3 py-2 font-medium">Other funds</th>
                <th className="px-3 py-2 font-medium">Sold</th>
                <th className="px-3 py-2 font-medium">Rank</th>
                <th className="px-3 py-2 font-medium">Notes</th>
              </tr>
            </thead>
            <tbody>
              {backedProjects.map((p) => (
                <tr key={p.name} className="border-t border-white/10">
                  <td className="px-3 py-2 font-medium">{p.name}</td>
                  <td className="px-3 py-2">
                    <span
                      className={
                        p.inFund === 'yes'
                          ? 'text-[#f5a623]'
                          : p.inFund === 'after vote'
                            ? 'text-white/50'
                            : 'text-white/40'
                      }
                    >
                      {p.inFund}
                    </span>
                  </td>
                  <td className="px-3 py-2 text-white/60">{p.otherFunds || '-'}</td>
                  <td className="px-3 py-2">{num(p.artifactsSold)}</td>
                  <td className="px-3 py-2">{p.rank === null ? 'TBD' : `#${p.rank}`}</td>
                  <td className="px-3 py-2 text-white/50">{p.notes}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="mb-3 text-sm font-semibold uppercase tracking-wide text-white/50">
          Proof log
        </h2>
        {proofLog.length === 0 ? (
          <p className="rounded-xl border border-dashed border-white/15 p-4 text-sm text-white/40">
            No drives logged yet. After each rally, add a row to <code>proofLog</code> in{' '}
            <code>app/dashboard/data.ts</code>: buyers moved, rank change, match deployed, win.
          </p>
        ) : (
          <div className="overflow-x-auto rounded-xl border border-white/10">
            <table className="w-full text-left text-sm">
              <thead className="bg-white/5 text-white/50">
                <tr>
                  <th className="px-3 py-2 font-medium">Drive</th>
                  <th className="px-3 py-2 font-medium">Horse</th>
                  <th className="px-3 py-2 font-medium">Buyers moved</th>
                  <th className="px-3 py-2 font-medium">Rank change</th>
                  <th className="px-3 py-2 font-medium">Match deployed</th>
                  <th className="px-3 py-2 font-medium">Win</th>
                </tr>
              </thead>
              <tbody>
                {proofLog.map((e, i) => (
                  <tr key={`${e.drive}-${i}`} className="border-t border-white/10">
                    <td className="px-3 py-2 font-medium">{e.drive}</td>
                    <td className="px-3 py-2">{e.horse}</td>
                    <td className="px-3 py-2">{num(e.buyersMoved)}</td>
                    <td className="px-3 py-2 text-white/60">{e.rankChange}</td>
                    <td className="px-3 py-2 text-[#f5a623]">{usd(e.matchDeployedUsd)}</td>
                    <td className="px-3 py-2">{e.win === null ? '-' : e.win ? 'yes' : 'no'}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </section>

      <footer className="border-t border-white/10 pt-6 text-xs text-white/40">
        Proof metrics feed the Phase 2 pitch to Rene: "across N drives we moved X buyers and deployed $Y in
        match." See <code>TEAM-PLAYBOOK.md</code> + <code>kit/standings-tracker.md</code>.
      </footer>
    </main>
  );
}
