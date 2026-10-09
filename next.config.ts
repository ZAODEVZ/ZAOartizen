import type { NextConfig } from 'next';

// The site is archived (Zaal, 2026-10-09). Every old page, including the apply, rally and sponsor
// pages, now sends visitors to the archived notice at /. /contacts stays behind its Basic-auth gate.
const ARCHIVED = [
  'about', 'apply', 'community', 'curate', 'dashboard', 'festivals', 'funds',
  'leaderboard', 'playbook', 'proposal', 'rally', 'sponsor', 'videos',
];

const nextConfig: NextConfig = {
  async redirects() {
    return ARCHIVED.flatMap((p) => [
      { source: `/${p}`, destination: '/', permanent: false },
      { source: `/${p}/:path*`, destination: '/', permanent: false },
    ]);
  },
};

export default nextConfig;
