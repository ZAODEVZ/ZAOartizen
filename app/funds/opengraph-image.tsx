import { SITE_HOST } from '../site';
import { ImageResponse } from 'next/og';

export const alt = 'Stack your match - the Artizen funds map';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default function FundsOG() {
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
          Stack your match
        </div>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <div style={{ display: 'flex', fontSize: 80, fontWeight: 800, lineHeight: 1.05 }}>
            The Artizen funds map
          </div>
          <div style={{ display: 'flex', marginTop: 24, fontSize: 38, fontWeight: 700, color: '#f5a623' }}>
            ZAO + Commons + Apollo = 3x match
          </div>
          <div style={{ display: 'flex', marginTop: 16, fontSize: 30, color: 'rgba(255,255,255,0.72)' }}>
            Get curated by multiple funds and the match multiplies on the same sales.
          </div>
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: 28, color: 'rgba(255,255,255,0.55)' }}>
          <div style={{ display: 'flex' }}>{SITE_HOST}/funds</div>
          <div style={{ display: 'flex', color: '#f5a623' }}>Submit to every fund you fit</div>
        </div>
      </div>
    ),
    { ...size },
  );
}
