import type { MetadataRoute } from 'next';

const BASE = 'https://za-oartizen.vercel.app';

export default function sitemap(): MetadataRoute.Sitemap {
  // /contacts is deliberately NOT here. It is the creator contact book - 40 real
  // people plus our own internal outreach notes about them - and it sits behind
  // Basic auth in middleware.ts. Listing it would ask search engines to index a
  // page they cannot fetch, and would publish the URL of a private CRM. Do not
  // add it back.
  // The site is archived (2026-10-09): only the notice is listed.
  return [{ url: `${BASE}/`, changeFrequency: 'yearly', priority: 1 }];
}
