import type { MetadataRoute } from 'next';

const BASE = 'https://zaoartizen.vercel.app';

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ['', '/dashboard', '/leaderboard', '/rally', '/apply', '/festivals', '/proposal', '/videos'];
  return routes.map((path) => ({
    url: `${BASE}${path}`,
    changeFrequency: path === '/dashboard' || path === '/leaderboard' ? 'daily' : 'weekly',
    priority: path === '' ? 1 : 0.8,
  }));
}
