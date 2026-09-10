import { ImageResponse } from 'next/og';

export const alt = 'Sponsor the ZAO Fund for Emerging Culture';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default function SponsorOG() {
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
            Back the next
          </div>
          <div style={{ display: 'flex', fontSize: 84, fontWeight: 800, lineHeight: 1.05, color: '#f5a623' }}>
            wave of culture
          </div>
          <div style={{ display: 'flex', marginTop: 28, fontSize: 32, color: 'rgba(255,255,255,0.72)' }}>
            Sponsor the ZAO Fund. Matched giving, with top billing.
          </div>
        </div>
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            fontSize: 28,
            color: 'rgba(255,255,255,0.55)',
          }}
        >
          <div style={{ display: 'flex' }}>zaoartizen.vercel.app/sponsor</div>
          <div style={{ display: 'flex', color: '#f5a623' }}>100% to creators. 0% fees.</div>
        </div>
      </div>
    ),
    { ...size },
  );
}
