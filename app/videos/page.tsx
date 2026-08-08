import type { Metadata } from 'next';
import { videos } from './data';
import { VideoCard } from './video-embed';

// /videos - the ZAO Artizen video series. videos[0] is the featured episode and is also
// embedded on the homepage. Add new episodes in app/videos/data.ts.

const FUND_URL = 'https://artizen.thezao.com/';

export const metadata: Metadata = {
  title: 'Videos - The ZAO on Artizen',
  description:
    'The ZAO Artizen video series: conversations with the creators, funders, and builders behind the ZAO Fund for Emerging Culture.',
};

export default function VideosPage() {
  const [featured, ...rest] = videos;

  return (
    <main className="mx-auto max-w-3xl px-5 py-12">
      <header className="mb-8">
        <p className="text-xs font-semibold uppercase tracking-widest text-[#f5a623]">
          The ZAO on Artizen
        </p>
        <h1 className="mt-2 text-3xl font-bold sm:text-4xl">Videos</h1>
        <p className="mt-3 max-w-2xl text-sm leading-relaxed text-white/70 sm:text-base">
          Conversations with the creators, funders, and builders around the ZAO Fund for Emerging
          Culture. New episodes land here first.
        </p>
      </header>

      <VideoCard video={featured} featured />

      {rest.length > 0 ? (
        <section className="mt-10">
          <h2 className="mb-4 text-lg font-bold sm:text-xl">More episodes</h2>
          <div className="grid gap-6">
            {rest.map((v) => (
              <VideoCard key={v.youtubeId} video={v} />
            ))}
          </div>
        </section>
      ) : (
        <p className="mt-8 text-sm text-white/50">
          More episodes are on the way. This is episode 1.
        </p>
      )}

      <section className="mt-12 rounded-2xl border border-[#f5a623]/40 bg-[#f5a623]/10 p-6">
        <h2 className="text-lg font-bold">Back the work you just watched</h2>
        <p className="mt-2 text-sm leading-relaxed text-white/80">
          Every $10 Artifact collected on a ZAO Fund project unlocks matching from the fund, paid
          straight to the creator. Supporting a project and supporting the fund are the same action.
        </p>
        <div className="mt-5 flex flex-wrap gap-3">
          <a
            href={FUND_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-[#f5a623] px-5 py-2.5 text-sm font-semibold text-[#0a1628] transition hover:brightness-110"
          >
            Back the fund
          </a>
          <a
            href="/rally"
            className="rounded-full border border-[#f5a623]/40 px-5 py-2.5 text-sm font-semibold text-[#f5a623] transition hover:bg-[#f5a623]/10"
          >
            Rally the crew
          </a>
        </div>
      </section>
    </main>
  );
}
