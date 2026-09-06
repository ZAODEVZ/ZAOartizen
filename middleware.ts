import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

// Gate /contacts behind HTTP Basic auth.
//
// WHY THIS EXISTS. PR #25 shipped the ZAO Fund creator contact book: 40 real
// people, their personal sites, their X handles, their university affiliations,
// and - the part that is not public - our own internal outreach commentary about
// each of them. "Trish Gianakis, never contacted." "Baraza TV, the claim in the
// drafted email is not confirmed." That is a working CRM, and the PR wired it
// into app/sitemap.ts, which asks search engines to index every row of it.
//
// Zaal's call on 2026-09-06 was "merge it behind auth". This is that auth. The
// sitemap entry is also removed and the page carries robots: noindex, because a
// page that is gated but still advertised is a URL leak waiting on a
// misconfiguration.
//
// FAIL CLOSED. If CONTACTS_PASSWORD is not set in the environment, this denies
// everyone rather than allowing everyone. That is deliberate and it is the whole
// safety property: a missing env var on a fresh deploy must not silently publish
// the contact book. If /contacts returns 503 in production, the fix is to set
// the variable in Vercel - not to relax this check.
//
// The password is NOT in this repository and must never be committed here. Set
// it in the Vercel project settings for both Preview and Production.

const REALM = 'ZAO Fund contact book';

// Constant-time string compare. The edge runtime has no crypto.timingSafeEqual,
// and a plain === leaks the shared secret one character at a time to anyone
// willing to measure. Compares every byte regardless of where the first
// mismatch is.
function safeEqual(a: string, b: string): boolean {
  const enc = new TextEncoder();
  const ab = enc.encode(a);
  const bb = enc.encode(b);
  // Length itself is not secret enough to branch on cheaply, so fold it in.
  let diff = ab.length ^ bb.length;
  const len = Math.max(ab.length, bb.length);
  for (let i = 0; i < len; i++) {
    diff |= (ab[i] ?? 0) ^ (bb[i] ?? 0);
  }
  return diff === 0;
}

function challenge(): NextResponse {
  return new NextResponse('Authentication required.', {
    status: 401,
    headers: {
      'WWW-Authenticate': `Basic realm="${REALM}", charset="UTF-8"`,
      'Cache-Control': 'no-store',
      'X-Robots-Tag': 'noindex, nofollow',
    },
  });
}

export function middleware(request: NextRequest) {
  const expected = process.env.CONTACTS_PASSWORD;

  if (!expected) {
    // No password configured. Deny, and say why in a way that does not hint at
    // the contents of the page.
    return new NextResponse(
      'This page is not available. CONTACTS_PASSWORD is not configured for this deployment.',
      {
        status: 503,
        headers: { 'Cache-Control': 'no-store', 'X-Robots-Tag': 'noindex, nofollow' },
      },
    );
  }

  const header = request.headers.get('authorization');
  if (!header?.startsWith('Basic ')) return challenge();

  let decoded: string;
  try {
    decoded = atob(header.slice('Basic '.length));
  } catch {
    return challenge();
  }

  // Only the password is checked; any username is accepted, so the whole team
  // can share one secret without agreeing on a user name first.
  const password = decoded.slice(decoded.indexOf(':') + 1);
  if (!safeEqual(password, expected)) return challenge();

  const res = NextResponse.next();
  // Belt and braces: even authenticated responses tell crawlers to stay out.
  res.headers.set('X-Robots-Tag', 'noindex, nofollow');
  return res;
}

export const config = {
  matcher: ['/contacts', '/contacts/:path*'],
};
