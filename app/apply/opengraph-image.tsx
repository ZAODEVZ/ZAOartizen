import { SITE_HOST } from '../site';
import { ImageResponse } from 'next/og';

export const alt = 'Apply to the ZAO Fund for Emerging Culture on Artizen';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default function ApplyOG() {
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
            Get your work
          </div>
          <div style={{ display: 'flex', fontSize: 80, fontWeight: 800, lineHeight: 1.05, color: '#f5a623' }}>
            backed by the crowd
          </div>
          <div style={{ display: 'flex', marginTop: 28, fontSize: 32, color: 'rgba(255,255,255,0.72)' }}>
            The ZAO Fund for Emerging Culture - independent artists, fair pay, real-world activation.
            Every $1 a fan spends gets doubled.
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
          <div style={{ display: 'flex' }}>{SITE_HOST}/apply</div>
          <div style={{ display: 'flex', color: '#f5a623' }}>0% fees. 100% to you.</div>
        </div>
      </div>
    ),
    { ...size },
  );
}
