'use client';

import { useMemo, useState } from 'react';
import type { RosterContact, OutreachStatus } from './data';
import { STATUS_LABEL } from './data';

const STATUS_ORDER: OutreachStatus[] = ['relationship', 'contacted', 'drafted', 'cold'];

const STATUS_STYLE: Record<OutreachStatus, string> = {
  relationship: 'bg-emerald-500/15 text-emerald-400 ring-emerald-500/30',
  contacted: 'bg-sky-500/15 text-sky-400 ring-sky-500/30',
  drafted: 'bg-[#f5a623]/15 text-[#f5a623] ring-[#f5a623]/30',
  cold: 'bg-rose-500/10 text-rose-400/90 ring-rose-500/25',
};

const IDENTITY_STYLE: Record<RosterContact['identity'], string> = {
  verified: 'text-emerald-400/80',
  partial: 'text-[#f5a623]/80',
  unknown: 'text-white/35',
};

const IDENTITY_LABEL: Record<RosterContact['identity'], string> = {
  verified: 'owner confirmed',
  partial: 'partly confirmed',
  unknown: 'owner unknown',
};

function usd(n: number): string {
  return `$${n.toLocaleString('en-US')}`;
}

function href(contact: string): string | null {
  if (contact.includes('@') && !contact.includes(' ') && !contact.includes('/')) {
    return `mailto:${contact}`;
  }
  if (/^[a-z0-9.-]+\.[a-z]{2,}(\/|$)/i.test(contact)) return `https://${contact}`;
  return null;
}

interface Props {
  roster: RosterContact[];
}

export function ContactsExplorer({ roster }: Props) {
  const [query, setQuery] = useState('');
  const [status, setStatus] = useState<OutreachStatus | 'all'>('all');
  const [season, setSeason] = useState<'all' | 6 | 7>('all');
  const [shortlistOnly, setShortlistOnly] = useState(false);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return roster.filter((r) => {
      if (status !== 'all' && r.status !== status) return false;
      if (season !== 'all' && !r.seasons.includes(season)) return false;
      if (shortlistOnly && !r.shortlist) return false;
      if (!q) return true;
      return (
        r.project.toLowerCase().includes(q) ||
        r.owner.toLowerCase().includes(q) ||
        r.category.toLowerCase().includes(q) ||
        r.contacts.join(' ').toLowerCase().includes(q) ||
        (r.research ?? '').toLowerCase().includes(q)
      );
    });
  }, [roster, query, status, season, shortlistOnly]);

  return (
    <div>
      <div className="sticky top-[53px] z-20 -mx-5 mb-5 border-b border-white/[0.08] bg-[#0a1628]/95 px-5 py-3 backdrop-blur-md">
        <div className="flex flex-wrap items-center gap-2">
          <input
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search project, owner, contact, note"
            aria-label="Search the contact book"
            className="min-w-[200px] flex-1 rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-sm text-white placeholder:text-white/30 focus:border-[#f5a623]/60 focus:outline-none focus:ring-1 focus:ring-[#f5a623]/40"
          />
          <select
            value={season}
            onChange={(e) => setSeason(e.target.value === 'all' ? 'all' : (Number(e.target.value) as 6 | 7))}
            aria-label="Filter by season"
            className="rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-sm text-white focus:border-[#f5a623]/60 focus:outline-none"
          >
            <option value="all">All seasons</option>
            <option value="7">Season 7</option>
            <option value="6">Season 6</option>
          </select>
          <button
            type="button"
            onClick={() => setShortlistOnly((v) => !v)}
            aria-pressed={shortlistOnly}
            className={`rounded-lg px-3 py-2 text-sm font-semibold transition ${
              shortlistOnly
                ? 'bg-[#f5a623] text-[#0a1628]'
                : 'border border-white/10 bg-white/5 text-white/70 hover:text-white'
            }`}
          >
            Ready to send
          </button>
        </div>

        <div className="mt-2 flex flex-wrap items-center gap-1.5">
          <button
            type="button"
            onClick={() => setStatus('all')}
            className={`rounded-full px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wide transition ${
              status === 'all' ? 'bg-white/15 text-white' : 'text-white/45 hover:text-white/80'
            }`}
          >
            All {roster.length}
          </button>
          {STATUS_ORDER.map((s) => {
            const n = roster.filter((r) => r.status === s).length;
            if (n === 0) return null;
            return (
              <button
                key={s}
                type="button"
                onClick={() => setStatus(status === s ? 'all' : s)}
                className={`rounded-full px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wide ring-1 transition ${
                  status === s ? STATUS_STYLE[s] : 'text-white/45 ring-white/10 hover:text-white/80'
                }`}
              >
                {STATUS_LABEL[s]} {n}
              </button>
            );
          })}
        </div>
      </div>

      <p className="mb-3 text-xs text-white/35">
        Showing {filtered.length} of {roster.length}. Open a row for contact routes and what research found.
      </p>

      <div className="flex flex-col gap-2">
        {filtered.map((r) => (
          <details
            key={r.project}
            className="group rounded-xl border border-white/10 bg-white/[0.03] transition open:border-[#f5a623]/30 open:bg-[#f5a623]/[0.04] hover:border-white/20"
          >
            <summary className="flex cursor-pointer list-none flex-wrap items-center gap-x-3 gap-y-1 px-4 py-3 [&::-webkit-details-marker]:hidden">
              <span className="min-w-0 flex-1">
                <span className="block font-semibold leading-tight">{r.project}</span>
                <span className="block text-[13px] text-[#f5a623]/75">{r.owner}</span>
              </span>
              {r.shortlist ? (
                <span className="shrink-0 text-[10px] font-semibold uppercase tracking-wide text-[#f5a623]">
                  ready
                </span>
              ) : null}
              <span className={`shrink-0 text-[11px] ${IDENTITY_STYLE[r.identity]}`}>
                {IDENTITY_LABEL[r.identity]}
              </span>
              <span className="shrink-0 tabular-nums text-[11px] text-white/35">
                {r.s6SalesUsd === null ? 'new in S7' : usd(r.s6SalesUsd)}
              </span>
              <span
                className={`shrink-0 rounded-full px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide ring-1 ${STATUS_STYLE[r.status]}`}
              >
                {STATUS_LABEL[r.status]}
              </span>
              <span className="shrink-0 text-white/25 transition group-open:rotate-90" aria-hidden="true">
                &rsaquo;
              </span>
            </summary>

            <div className="border-t border-white/[0.08] px-4 py-3 text-sm">
              <p className="text-white/70">{r.statusNote}</p>

              <div className="mt-3 flex flex-wrap items-baseline gap-x-2 gap-y-1">
                <span className="text-[11px] uppercase tracking-wide text-white/35">Reach them</span>
                {r.contacts.length === 0 ? (
                  <span className="text-[13px] text-rose-400/80">
                    No route found. That is a real gap, not laziness.
                  </span>
                ) : (
                  r.contacts.map((c) => {
                    const h = href(c);
                    return h ? (
                      <a
                        key={c}
                        href={h}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="rounded border border-white/10 bg-white/5 px-2 py-0.5 text-[12px] text-[#f5a623] transition hover:border-[#f5a623]/50"
                      >
                        {c}
                      </a>
                    ) : (
                      <span
                        key={c}
                        className="rounded border border-white/10 bg-white/5 px-2 py-0.5 text-[12px] text-white/55"
                      >
                        {c}
                      </span>
                    );
                  })
                )}
              </div>

              {r.research ? (
                <p className="mt-3 text-[13px] leading-relaxed text-white/55">{r.research}</p>
              ) : null}

              <p className="mt-3 text-[11px] text-white/30">
                {r.category} &middot; Season {r.seasons.join(' and ')}
                {r.contactedOn ? ` · contacted ${r.contactedOn}` : ''}
              </p>
            </div>
          </details>
        ))}
      </div>

      {filtered.length === 0 ? (
        <p className="rounded-xl border border-white/10 bg-white/[0.03] px-4 py-8 text-center text-sm text-white/45">
          Nothing matches that filter. Clear the search or pick another status.
        </p>
      ) : null}
    </div>
  );
}
