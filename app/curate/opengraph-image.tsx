import { ImageResponse } from 'next/og';

export const alt = 'Get curated by the ZAO Fund for Emerging Culture';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default function CurateOG() {
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
        <div style={{ display: 'flex', color: '#f5a623', fontSize: 30, fontWeight: 700, letterSpacing: 4, textTransform: 'uppercase' }}>
          ZAO Fund for Emerging Culture
        </div>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <div style={{ display: 'flex', fontSize: 88, fontWeight: 800, lineHeight: 1.05 }}>Get curated</div>
          <div style={{ display: 'flex', marginTop: 24, fontSize: 40, fontWeight: 700, color: '#f5a623' }}>
            Every $1 becomes $3+
          </div>
          <div style={{ display: 'flex', marginTop: 16, fontSize: 30, color: 'rgba(255,255,255,0.72)' }}>
            Your dollar + a sponsor&apos;s + platform match - stacked on every $10 Artifact.
          </div>
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: 28, color: 'rgba(255,255,255,0.55)' }}>
          <div style={{ display: 'flex' }}>zaoartizen.vercel.app/curate</div>
          <div style={{ display: 'flex', color: '#f5a623' }}>Collaborate with The ZAO</div>
        </div>
      </div>
    ),
    { ...size },
  );
}
