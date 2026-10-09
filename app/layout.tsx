import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter', display: 'swap' });

export const metadata: Metadata = {
  metadataBase: new URL('https://za-oartizen.vercel.app'),
  title: 'ZArtizen - archived',
  description:
    'The ZAO\'s Artizen work is archived. The Artizen platform wound down in October 2026.',
  openGraph: {
    title: 'ZArtizen - archived',
    description:
      'The ZAO\'s Artizen work is archived. The Artizen platform wound down in October 2026.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ZArtizen - archived',
    description:
      'The ZAO\'s Artizen work is archived. The Artizen platform wound down in October 2026.',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="bg-[#0a1628] text-white antialiased">
        {children}
      </body>
    </html>
  );
}
