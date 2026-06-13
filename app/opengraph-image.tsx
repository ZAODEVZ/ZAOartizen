import { ImageResponse } from 'next/og';

export const alt = 'ZArtizen - The ZAO Fund for Emerging Culture on Artizen';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default function OpengraphImage() {
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
          The ZAO on Artizen
        </div>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <div style={{ display: 'flex', fontSize: 84, fontWeight: 800, lineHeight: 1.05 }}>
            ZAO Fund for
          </div>
          <div style={{ display: 'flex', fontSize: 84, fontWeight: 800, lineHeight: 1.05, color: '#f5a623' }}>
            Emerging Culture
          </div>
          <div style={{ display: 'flex', marginTop: 28, fontSize: 32, color: 'rgba(255,255,255,0.7)' }}>
            A community match fund backing 32 projects at the intersection of art, tech, and community.
          </div>
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: 28, color: 'rgba(255,255,255,0.55)' }}>
          <div style={{ display: 'flex' }}>zartizen.vercel.app</div>
          <div style={{ display: 'flex', color: '#f5a623' }}>artizen.thezao.com</div>
        </div>
      </div>
    ),
    { ...size },
  );
}
