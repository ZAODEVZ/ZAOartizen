// Archived notice. The ZAO's Artizen work is past: the Artizen platform wound down in October 2026.
// Zaal ruled 2026-10-09 (vault decisions/grill-2026-10-09-seat-morning.md item 19) that this site
// shows only this notice. The old pages redirect here (next.config.ts). Their code stays in the
// repo as history; see ARCHIVE.md.

const REPO = 'https://github.com/ZAODEVZ/ZAOartizen';
const LINKS: { href: string; label: string; note: string }[] = [
  { href: `${REPO}/blob/main/docs/artizen-history.md`, label: 'Artizen: a history', note: 'How the platform worked and how its rules changed in 2026' },
  { href: `${REPO}/blob/main/docs/artizen-wind-down-guide.md`, label: 'Wind-down guide', note: 'What Artizen’s own Terms say about payouts and deadlines. Not legal advice.' },
  { href: `${REPO}/blob/main/ARCHIVE.md`, label: 'The ZAO’s archive', note: 'What The ZAO did on Artizen, with sources and dates' },
];

export default function Home() {
  return (
    <main className="mx-auto flex min-h-screen max-w-2xl flex-col justify-center px-5 py-16">
      <div style={{ letterSpacing: 4 }} className="text-sm font-bold uppercase text-[#f5a623]">
        Archived
      </div>
      <h1 className="mt-3 text-4xl font-bold leading-tight">The ZAO on Artizen is past work.</h1>
      <p className="mt-5 text-lg text-white/75">
        The Artizen platform wound down in October 2026. The ZAO ran the ZAO Fund for Emerging Culture
        and two projects there during 2026. That work is over, and The ZAO is not working with Artizen.
      </p>
      <p className="mt-4 text-white/60">
        This site is no longer active and takes no applications, sponsorships or support. It is not an
        Artizen site and does not speak for Artizen.
      </p>
      <ul className="mt-8 space-y-4">
        {LINKS.map((l) => (
          <li key={l.href}>
            <a
              href={l.href}
              className="block rounded-xl border border-white/15 px-5 py-4 transition hover:border-[#f5a623]/50"
            >
              <span className="font-semibold text-[#f5a623]">{l.label}</span>
              <span className="mt-1 block text-sm text-white/60">{l.note}</span>
            </a>
          </li>
        ))}
      </ul>
      <p className="mt-10 text-sm text-white/40">The ZAO, 2026.</p>
    </main>
  );
}
