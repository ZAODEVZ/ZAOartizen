import { ImageResponse } from 'next/og';

export const alt = 'How it works - back real artists on Artizen';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default function AboutOG() {
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
          How it works
        </div>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <div style={{ display: 'flex', fontSize: 72, fontWeight: 800, lineHeight: 1.05 }}>
            $10, matched
          </div>
          <div style={{ display: 'flex', fontSize: 72, fontWeight: 800, lineHeight: 1.05, color: '#f5a623' }}>
            for the artist
          </div>
          <div style={{ display: 'flex', marginTop: 28, fontSize: 32, color: 'rgba(255,255,255,0.72)' }}>
            Back an artist, your support gets matched, the community lifts each other. Real work, no middlemen.
          </div>
        </div>
        <div style={{ display: 'flex', fontSize: 28, color: 'rgba(255,255,255,0.55)' }}>
          zaoartizen.vercel.app/about
        </div>
      </div>
    ),
    { ...size },
  );
}
