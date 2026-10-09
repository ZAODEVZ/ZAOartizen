import Link from 'next/link';

// 404 for the archived site: one way back, to the notice.

export default function NotFound() {
  return (
    <main className="mx-auto flex min-h-screen max-w-xl flex-col justify-center px-5 py-12">
      <div style={{ letterSpacing: 4 }} className="text-sm font-bold uppercase text-[#f5a623]">
        Archived
      </div>
      <h1 className="mt-3 text-4xl font-bold">That page is not here.</h1>
      <p className="mt-3 text-white/60">This site is archived.</p>
      <Link href="/" className="mt-6 w-fit rounded-full border border-white/20 px-4 py-2 text-sm font-semibold text-white/80 transition hover:border-[#f5a623]/40 hover:text-[#f5a623]">
        Read the notice
      </Link>
    </main>
  );
}
