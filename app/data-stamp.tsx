'use client';

import { useEffect, useState } from 'react';

// "Data as of ..." stamp for any page that shows scraped Artizen numbers (rank, match, funding).
// The Artizen board moves daily and this site is scraped by hand (scripts/refresh.sh) and
// redeployed manually, so a snapshot can be days old while the page still looks authoritative.
//
// Staleness is computed in the BROWSER, not at build time: a statically built page would otherwise
// bake in "fresh" forever. Server render + first paint show the date only; the age and the warning
// appear after hydration, which keeps the markup deterministic.

const STALE_AFTER_HOURS = 48;

const MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

// Formatted in UTC on purpose - toLocaleDateString would differ between the build machine and the
// viewer's timezone and trip a hydration mismatch.
function formatUtc(iso: string): string {
  const d = new Date(iso);
  if (Number.isNaN(d.getTime())) return iso;
  return `${MONTHS[d.getUTCMonth()]} ${d.getUTCDate()}, ${d.getUTCFullYear()}`;
}

function ageLabel(hours: number): string {
  if (hours < 1) return 'under an hour old';
  if (hours < 24) return `${Math.floor(hours)}h old`;
  const days = Math.floor(hours / 24);
  return `${days} day${days === 1 ? '' : 's'} old`;
}

export interface DataStampProps {
  scrapedAt: string; // ISO 8601, e.g. '2026-06-22T00:00:00Z'
  className?: string;
  children?: React.ReactNode; // extra context rendered after the stamp (links, caveats)
}

export function DataStamp({ scrapedAt, className = '', children }: DataStampProps) {
  const [ageHours, setAgeHours] = useState<number | null>(null);

  useEffect(() => {
    const scraped = new Date(scrapedAt).getTime();
    if (Number.isNaN(scraped)) return;
    const tick = () => setAgeHours((Date.now() - scraped) / 3_600_000);
    tick();
    // Drives run for hours with the tab left open - keep the stamp honest without a reload.
    const id = setInterval(tick, 5 * 60_000);
    return () => clearInterval(id);
  }, [scrapedAt]);

  const asOf = `Data as of ${formatUtc(scrapedAt)}`;
  const stale = ageHours !== null && ageHours > STALE_AFTER_HOURS;

  if (stale) {
    return (
      <div
        role="status"
        className={`rounded-lg border border-[#ff6b57]/50 bg-[#ff6b57]/10 px-3 py-2 text-xs text-[#ffb3a6] ${className}`}
      >
        <span className="mr-2 rounded bg-[#ff6b57]/25 px-1.5 py-0.5 font-semibold uppercase tracking-wide text-[#ff6b57]">
          Stale
        </span>
        <span className="font-medium text-white/80">{asOf}</span> - {ageLabel(ageHours)}, past the{' '}
        {STALE_AFTER_HOURS}h freshness window. Re-check the live fund before quoting these numbers
        (<code className="text-white/60">scripts/refresh.sh</code>).
        {children ? <div className="mt-1 text-[#ffb3a6]/80">{children}</div> : null}
      </div>
    );
  }

  return (
    <p className={`text-xs text-white/40 ${className}`}>
      {asOf}
      {ageHours !== null ? ` (${ageLabel(ageHours)})` : ''} - numbers move daily.
      {children ? <> {children}</> : null}
    </p>
  );
}
