import { SITE_HOST } from '../site';
import { ImageResponse } from 'next/og';

export const alt = 'The ZAO Fund on Artizen - the creator playbook';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default function PlaybookOG() {
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
          ZAO Fund x Artizen
        </div>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <div style={{ display: 'flex', fontSize: 88, fontWeight: 800, lineHeight: 1.05 }}>The creator</div>
          <div style={{ display: 'flex', fontSize: 88, fontWeight: 800, lineHeight: 1.05, color: '#f5a623' }}>playbook</div>
          <div style={{ display: 'flex', marginTop: 24, fontSize: 32, color: 'rgba(255,255,255,0.72)' }}>
            How Artizen works + how to finish the season strong. In plain English.
          </div>
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: 28, color: 'rgba(255,255,255,0.55)' }}>
          <div style={{ display: 'flex' }}>{SITE_HOST}/playbook</div>
          <div style={{ display: 'flex', color: '#f5a623' }}>Keep 100% of your sales</div>
        </div>
      </div>
    ),
    { ...size },
  );
}
