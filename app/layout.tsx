import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { Nav } from './Nav';
import { SITE_URL } from './site';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter', display: 'swap' });

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: 'ZArtizen - The ZAO on Artizen',
  description:
    'The ZAO Fund for Emerging Culture on Artizen - a community match fund backing artists and technologists building collaborative cultural experiences.',
  openGraph: {
    title: 'ZArtizen - The ZAO Fund for Emerging Culture',
    description:
      'A community match fund backing projects at the intersection of art, emerging tech, and community.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ZArtizen - The ZAO Fund for Emerging Culture',
    description:
      'A community match fund backing projects at the intersection of art, emerging tech, and community.',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="bg-[#0a1628] text-white antialiased">
        <Nav />
        {children}
      </body>
    </html>
  );
}
