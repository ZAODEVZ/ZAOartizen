import type { Metadata } from 'next';
import { fundStats, horse, backedProjects } from '../dashboard/data';

// /rally - the "what do I do right now" surface. Drop this URL in the GC. Shows the live
// drive + unspent match (urgency), who to back, and the 3-step crew CTA. Provenance: research 886 + kit/crew-mobilization.md.

const FUND_URL = 'https://artizen.thezao.com/';

export const metadata: Metadata = {
  title: 'Rally - back our artists on Artizen',
  description: 'The 3-step crew rally: sign up, buy a $10 Artifact, boost. Every $10 unlocks matched funding.',
};

function usd(n: number | null): string {
  return n === null ? '' : `$${n.toLocaleString('en-US')}`;
}

// Pick the horse: explicit pick, else the lowest-ranked ZAO-tied project that's in/entering the fund
// (the one with the most room to climb that we can actually push).
function pickHorse(): string {
  if (horse.project) return horse.project;
  const candidates = backedProjects.filter((p) => p.inFund !== 'no' || p.rank !== null);
  const sorted = [...candidates].sort((a, b) => (b.rank ?? 0) - (a.rank ?? 0));
  return sorted[0]?.name ?? 'our top project';
}

export default function RallyPage() {
  const theHorse = pickHorse();
  const headroom = fundStats.matchRemainingUsd;

  return (
    <main className="mx-auto max-w-2xl px-5 py-12">
      <header className="mb-8">
        <h1 className="text-3xl font-bold sm:text-4xl">Rally for our artists</h1>
        <p className="mt-2 text-white/60">
          3 minutes. Every $10 you spend gets matched $1-for-$1 from the{' '}
          <a href={FUND_URL} className="text-[#f5a623] underline">
            ZAO Fund
          </a>
          . The project that sells the most wins a cash prize. We win by showing up together.
        </p>
      </header>

      {headroom !== null && headroom > 0 ? (
        <div className="mb-8 rounded-xl border border-[#f5a623]/40 bg-[#f5a623]/10 p-4">
          <div className="text-lg font-semibold text-[#f5a623]">
            {usd(headroom)} in match is waiting to be unlocked
          </div>
          <div className="mt-1 text-sm text-white/70">
            {fundStats.activeDrive ? `${fundStats.activeDrive}` : 'Active drive'}
            {fundStats.driveDeadline ? ` - ${fundStats.driveDeadline}` : ''}. Spend before it closes.
          </div>
        </div>
      ) : null}

      <ol className="mb-8 space-y-4">
        <li className="rounded-xl border border-white/10 bg-white/5 p-4">
          <div className="text-sm font-semibold text-white/50">STEP 1</div>
          <div className="mt-1 font-medium">
            Sign up at{' '}
            <a href={FUND_URL} className="text-[#f5a623] underline">
              artizen.thezao.com
            </a>
          </div>
          <div className="text-sm text-white/60">Signing up alone gives you voting power that helps us rank.</div>
        </li>
        <li className="rounded-xl border border-[#f5a623]/30 bg-[#f5a623]/5 p-4">
          <div className="text-sm font-semibold text-[#f5a623]">STEP 2 - the one that counts</div>
          <div className="mt-1 font-medium">
            Buy the $10 Artifact for <span className="text-[#f5a623]">{theHorse}</span>
          </div>
          <div className="text-sm text-white/60">$10. That is it. The more buyers, the higher we climb.</div>
        </li>
        <li className="rounded-xl border border-white/10 bg-white/5 p-4">
          <div className="text-sm font-semibold text-white/50">STEP 3</div>
          <div className="mt-1 font-medium">Boost it + reshare</div>
          <div className="text-sm text-white/60">Hit boost on the project and repost so your friends see it.</div>
        </li>
      </ol>

      <div className="rounded-xl border border-white/10 bg-white/5 p-4 text-sm text-white/70">
        Why it matters: every $1 a fan spends gets doubled by our fund (and stacks with other funds). 0% fees,
        100% to the artist. A real crowd buying $10 each beats a few big checks - that is our edge.
      </div>

      <footer className="mt-8 text-xs text-white/40">
        See the{' '}
        <a href="/dashboard" className="text-[#f5a623] underline">
          dashboard
        </a>{' '}
        and{' '}
        <a href="/leaderboard" className="text-[#f5a623] underline">
          the field
        </a>
        . Edit the horse in <code>app/dashboard/data.ts</code>.
      </footer>
    </main>
  );
}
