import { ImageResponse } from 'next/og';
import { fundStats } from './data';

export const alt = 'ZAO Fund Dashboard - the scoreboard';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default function DashboardOG() {
  const rank = fundStats.rank === null ? 'TBD' : `#${fundStats.rank}`;
  const headroom =
    fundStats.matchRemainingUsd === null ? 'TBD' : `$${fundStats.matchRemainingUsd.toLocaleString('en-US')}`;
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
          <div style={{ display: 'flex', fontSize: 80, fontWeight: 800, lineHeight: 1.05 }}>
            The scoreboard
          </div>
          <div style={{ display: 'flex', marginTop: 24, gap: 48 }}>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <div style={{ display: 'flex', fontSize: 26, color: 'rgba(255,255,255,0.55)' }}>Fund rank</div>
              <div style={{ display: 'flex', fontSize: 64, fontWeight: 800, color: '#f5a623' }}>{rank}</div>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <div style={{ display: 'flex', fontSize: 26, color: 'rgba(255,255,255,0.55)' }}>Match to unlock</div>
              <div style={{ display: 'flex', fontSize: 64, fontWeight: 800, color: '#f5a623' }}>{headroom}</div>
            </div>
          </div>
        </div>
        <div style={{ display: 'flex', fontSize: 28, color: 'rgba(255,255,255,0.55)' }}>
          zaoartizen.vercel.app/dashboard
        </div>
      </div>
    ),
    { ...size },
  );
}
