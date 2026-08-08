import Link from 'next/link';

// Shared top nav - connects the zaoartizen pages into one funnel + a persistent Artizen CTA.

const FUND_URL = 'https://artizen.thezao.com/';

const LINKS: { href: string; label: string }[] = [
  { href: '/about', label: 'About' },
  { href: '/curate', label: 'Curate' },
  { href: '/funds', label: 'Funds' },
  { href: '/playbook', label: 'Playbook' },
  { href: '/community', label: 'Projects' },
  { href: '/videos', label: 'Videos' },
  { href: '/sponsor', label: 'Sponsor' },
  { href: '/dashboard', label: 'Dashboard' },
];

export function Nav() {
  return (
    <header className="sticky top-0 z-40 border-b border-white/[0.08] bg-[#0a1628]/95 backdrop-blur-md">
      <div className="mx-auto flex max-w-5xl items-center justify-between gap-4 px-5 py-3">
        <Link href="/" className="shrink-0 text-sm font-bold tracking-tight">
          ZArtizen
        </Link>
        <nav className="flex min-w-0 flex-1 items-center gap-4 overflow-x-auto">
          {LINKS.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="shrink-0 text-[13px] text-white/60 transition-colors hover:text-[#f5a623]"
            >
              {l.label}
            </Link>
          ))}
        </nav>
        <a
          href={FUND_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="shrink-0 rounded-lg bg-[#f5a623] px-3 py-1.5 text-[13px] font-semibold text-[#0a1628]"
        >
          Back the fund
        </a>
      </div>
    </header>
  );
}
