// The site's own address, in ONE place.
//
// Why this exists: until 2026-09-13 the URL was hard-coded in 14 files (metadataBase, robots.ts,
// sitemap.ts and every opengraph-image route). Two Vercel hosts one hyphen apart then served builds
// months apart, and every share card from the correct build pointed at the stale one. One constant
// means the final domain is a one-line change, or an env var, and nothing can drift out of step.
//
// PLACEHOLDER until Zaal sets the production domain on the new Vercel project. Either set
// NEXT_PUBLIC_SITE_URL in the project's environment variables, or change the fallback below.
export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://artizen-hq.vercel.app';

// Display form (no scheme), for the footer line on social cards.
export const SITE_HOST = new URL(SITE_URL).host;
