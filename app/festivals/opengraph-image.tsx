import { ImageResponse } from 'next/og';

export const alt = 'ZAO Festivals - back live culture on Artizen';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default function FestivalsOpengraphImage() {
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
          A ZAO umbrella + fund on Artizen
        </div>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <div style={{ display: 'flex', fontSize: 96, fontWeight: 800, lineHeight: 1.0, color: '#f5a623' }}>
            ZAO Festivals
          </div>
          <div style={{ display: 'flex', marginTop: 28, fontSize: 34, color: 'rgba(255,255,255,0.75)' }}>
            Back live culture - music festivals, concerts, and artist-led real-world events.
          </div>
          <div style={{ display: 'flex', marginTop: 16, fontSize: 26, color: 'rgba(255,255,255,0.5)' }}>
            ZAOstock - Zaoville - and more.
          </div>
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: 28, color: 'rgba(255,255,255,0.55)' }}>
          <div style={{ display: 'flex' }}>zartizen.vercel.app/festivals</div>
          <div style={{ display: 'flex', color: '#f5a623' }}>The ZAO</div>
        </div>
      </div>
    ),
    { ...size },
  );
}
