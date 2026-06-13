'use client';

import { useMemo, useState } from 'react';

export interface Project {
  rank: number;
  name: string;
  creator: string;
  sales: number;
  match: number;
  category: string;
  blurb: string;
  zaoTie?: string;
}

interface RosterExplorerProps {
  projects: Project[];
  fundUrl: string;
  snapshot: string;
}

function usd(n: number): string {
  return `$${n.toLocaleString('en-US')}`;
}

export function RosterExplorer({ projects, fundUrl, snapshot }: RosterExplorerProps) {
  const [query, setQuery] = useState('');
  const [category, setCategory] = useState<string>('All');

  const categories = useMemo(() => {
    const set = new Set(projects.map((p) => p.category));
    return ['All', ...Array.from(set).sort()];
  }, [projects]);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return projects.filter((p) => {
      if (category !== 'All' && p.category !== category) return false;
      if (!q) return true;
      return (
        p.name.toLowerCase().includes(q) ||
        p.creator.toLowerCase().includes(q) ||
        p.blurb.toLowerCase().includes(q) ||
        p.category.toLowerCase().includes(q)
      );
    });
  }, [projects, query, category]);

  return (
    <section id="projects" className="mb-12 scroll-mt-20">
      <div className="mb-4 flex flex-wrap items-baseline justify-between gap-2">
        <h2 className="text-lg font-bold sm:text-xl">The projects</h2>
        <span className="text-xs text-white/50">
          {filtered.length} of {projects.length} - ranked by sales, snapshot {snapshot}
        </span>
      </div>

      {/* Controls */}
      <div className="mb-5 space-y-3">
        <input
          type="search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search projects, creators, themes..."
          className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-2.5 text-sm text-white placeholder:text-white/40 outline-none transition focus:border-[#f5a623]/50"
        />
        <div className="flex flex-wrap gap-2">
          {categories.map((c) => (
            <button
              key={c}
              type="button"
              onClick={() => setCategory(c)}
              className={
                category === c
                  ? 'rounded-full bg-[#f5a623] px-3 py-1 text-xs font-semibold text-[#0a1628]'
                  : 'rounded-full border border-white/15 px-3 py-1 text-xs text-white/70 transition hover:border-[#f5a623]/50 hover:text-white'
              }
            >
              {c}
            </button>
          ))}
        </div>
      </div>

      {/* List */}
      {filtered.length === 0 ? (
        <p className="rounded-xl border border-white/10 bg-white/5 p-6 text-center text-sm text-white/50">
          No projects match. Try a different search or category.
        </p>
      ) : (
        <ul className="space-y-3">
          {filtered.map((p) => (
            <li key={p.rank}>
              <a
                href={fundUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Collect ${p.name} on Artizen`}
                className="group block rounded-xl border border-white/10 bg-white/5 p-4 transition hover:border-[#f5a623]/50 hover:bg-white/[0.07]"
              >
                <div className="flex gap-4">
                  <div className="shrink-0 text-lg font-bold text-white/30 tabular-nums">
                    {String(p.rank).padStart(2, '0')}
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="flex flex-wrap items-baseline gap-x-2 gap-y-1">
                      <h3 className="text-base font-semibold leading-snug transition group-hover:text-[#f5a623]">
                        {p.name}
                      </h3>
                      <span className="rounded-full bg-white/10 px-2 py-0.5 text-[10px] uppercase tracking-wide text-white/60">
                        {p.category}
                      </span>
                    </div>
                    <p className="mt-0.5 text-xs text-white/50">by {p.creator}</p>
                    <p className="mt-2 text-sm leading-relaxed text-white/70">{p.blurb}</p>
                    {p.zaoTie ? (
                      <p className="mt-2 text-xs font-medium text-[#f5a623]">ZAO link: {p.zaoTie}</p>
                    ) : null}
                    <div className="mt-2 flex items-center gap-4 text-xs text-white/50 tabular-nums">
                      <span>{usd(p.sales)} sales</span>
                      <span>{usd(p.match)} matched</span>
                      <span className="ml-auto font-semibold text-[#f5a623] opacity-0 transition group-hover:opacity-100">
                        Collect on Artizen →
                      </span>
                    </div>
                  </div>
                </div>
              </a>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}
