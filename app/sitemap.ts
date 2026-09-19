import type { MetadataRoute } from 'next';

const BASE = 'https://zaoartizen.vercel.app';

export default function sitemap(): MetadataRoute.Sitemap {
  // /contacts is deliberately NOT here. It is the creator contact book - 40 real
  // people plus our own internal outreach notes about them - and it sits behind
  // Basic auth in middleware.ts. Listing it would ask search engines to index a
  // page they cannot fetch, and would publish the URL of a private CRM. Do not
  // add it back.
  const routes = ['', '/dashboard', '/leaderboard', '/rally', '/apply', '/festivals', '/proposal', '/videos'];
  return routes.map((path) => ({
    url: `${BASE}${path}`,
    changeFrequency: path === '/dashboard' || path === '/leaderboard' ? 'daily' : 'weekly',
    priority: path === '' ? 1 : 0.8,
  }));
}
