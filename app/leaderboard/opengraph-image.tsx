import { ImageResponse } from 'next/og';
import { leaderboard } from './data';

export const alt = 'Artizen Season 6 Leaderboard - the field';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

const zaoCount = leaderboard.filter((r) => r.zaoTie).length;

export default function LeaderboardOG() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          backgroundColor: '#0a1628',
          padding: '72px',
          color: '#ffffff',
          fontFamily: 'sans-serif',
        }}
      >
        <div
          style={{
            display: 'flex',
            color: '#f5a623',
            fontSize: 30,
            fontWeight: 700,
            letterSpacing: 4,
            textTransform: 'uppercase',
          }}
        >
          The ZAO on Artizen
        </div>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <div style={{ display: 'flex', fontSize: 84, fontWeight: 800, lineHeight: 1.05 }}>
            Season 6
          </div>
          <div style={{ display: 'flex', fontSize: 84, fontWeight: 800, lineHeight: 1.05, color: '#f5a623' }}>
            the field
          </div>
          <div style={{ display: 'flex', marginTop: 24, fontSize: 32, color: 'rgba(255,255,255,0.72)' }}>
            {leaderboard.length} projects, ranked by Artifact sales. {zaoCount} ZAO-tied. Most sales wins.
          </div>
        </div>
        <div style={{ display: 'flex', fontSize: 28, color: 'rgba(255,255,255,0.55)' }}>
          zaoartizen.vercel.app/leaderboard
        </div>
      </div>
    ),
    { ...size },
  );
}
