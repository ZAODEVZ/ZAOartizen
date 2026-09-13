import { SITE_HOST } from '../site';
import { ImageResponse } from 'next/og';

export const alt = 'ZAO Festivals on Artizen - proposal for team input';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default function ProposalOpengraphImage() {
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
        <div style={{ display: 'flex', color: '#f5a623', fontSize: 28, fontWeight: 700, letterSpacing: 4, textTransform: 'uppercase' }}>
          ZAO Festivals on Artizen - proposal
        </div>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <div style={{ display: 'flex', fontSize: 70, fontWeight: 800, lineHeight: 1.05 }}>
            Create our own fund,
          </div>
          <div style={{ display: 'flex', fontSize: 70, fontWeight: 800, lineHeight: 1.05, color: '#f5a623' }}>
            or curate into existing?
          </div>
          <div style={{ display: 'flex', marginTop: 28, fontSize: 32, color: 'rgba(255,255,255,0.7)' }}>
            The findings, two options, a recommendation - we want your input.
          </div>
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: 28, color: 'rgba(255,255,255,0.55)' }}>
          <div style={{ display: 'flex' }}>{SITE_HOST}/proposal</div>
          <div style={{ display: 'flex', color: '#f5a623' }}>ZAO Festivals</div>
        </div>
      </div>
    ),
    { ...size },
  );
}
