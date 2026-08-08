import { type Video, youtubeEmbedUrl, youtubeWatchUrl } from './data';

// Responsive 16:9 YouTube embed. Server component, no client JS.
// `lazy` loading keeps the homepage fast: the iframe only fetches when scrolled near.

export function VideoEmbed({ video, className = '' }: { video: Video; className?: string }) {
  return (
    <div
      className={`relative w-full overflow-hidden rounded-2xl border border-white/10 bg-black ${className}`}
      style={{ aspectRatio: '16 / 9' }}
    >
      <iframe
        src={youtubeEmbedUrl(video.youtubeId)}
        title={video.title}
        loading="lazy"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
        className="absolute inset-0 h-full w-full border-0"
      />
    </div>
  );
}

export function VideoCard({ video, featured = false }: { video: Video; featured?: boolean }) {
  return (
    <article
      className={
        featured
          ? 'rounded-2xl border border-[#f5a623]/40 bg-gradient-to-br from-[#f5a623]/10 to-transparent p-5 sm:p-6'
          : 'rounded-2xl border border-white/10 bg-white/5 p-5 sm:p-6'
      }
    >
      <VideoEmbed video={video} />
      <div className="mt-4 flex flex-wrap items-baseline gap-x-2 gap-y-1">
        <h3 className="text-lg font-bold leading-snug sm:text-xl">{video.title}</h3>
        {featured ? (
          <span className="rounded-full bg-[#f5a623]/20 px-2 py-0.5 text-[10px] uppercase tracking-wide text-[#f5a623]">
            Episode 1
          </span>
        ) : null}
      </div>
      <p className="mt-1 text-sm text-white/50">
        {video.guest} - {video.date}
      </p>
      <p className="mt-3 text-sm leading-relaxed text-white/80">{video.blurb}</p>
      {video.zaoTie ? (
        <p className="mt-2 text-xs font-medium text-[#f5a623]">{video.zaoTie}</p>
      ) : null}
      <a
        href={youtubeWatchUrl(video.youtubeId)}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-4 inline-block text-sm font-semibold text-[#f5a623] underline-offset-2 hover:underline"
      >
        Watch on YouTube
      </a>
    </article>
  );
}
