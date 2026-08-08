// The ZAO on Artizen - video series.
// Ordered newest-first is NOT the rule here: `videos[0]` is the FEATURED video (the one
// embedded on the homepage). Add new entries below the featured one, or promote a new
// video to index 0 when it should take the homepage slot.
//
// youtubeId: the 11-char video id. For a live/premiere URL like
//   https://www.youtube.com/live/25ZoAcP23es  -> id is `25ZoAcP23es`
// Both /live/<id> and /watch?v=<id> share the same embed path: /embed/<id>.

export interface Video {
  youtubeId: string;
  title: string;
  guest: string;
  blurb: string;
  /** ISO date the episode aired. Displayed as-is, so keep it human-readable. */
  date: string;
  /** Optional: why this episode matters to the ZAO Fund / Artizen motion. */
  zaoTie?: string;
}

export const videos: Video[] = [
  {
    youtubeId: '25ZoAcP23es',
    title: 'ZABAL GAMEZ w/ Arun from DreamStarter',
    guest: 'Arun Philips, DreamStarter',
    blurb:
      'The first video in the ZAO Artizen series. Zaal sits down with Arun from DreamStarter to talk about funding creative work, building an audience before a token, and what independent creators actually need from a platform.',
    date: 'August 8, 2026',
    zaoTie: 'Opens the ZAO Artizen video series, the media arm of the fund motion.',
  },
];

/** The video embedded on the homepage. */
export const featuredVideo = videos[0];

export function youtubeEmbedUrl(id: string): string {
  // `rel=0` keeps suggested videos inside the ZAO channel where possible.
  return `https://www.youtube.com/embed/${id}?rel=0`;
}

export function youtubeWatchUrl(id: string): string {
  return `https://www.youtube.com/watch?v=${id}`;
}

export function youtubeThumbnailUrl(id: string): string {
  return `https://i.ytimg.com/vi/${id}/hqdefault.jpg`;
}
