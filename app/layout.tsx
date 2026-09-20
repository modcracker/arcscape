import type {Metadata} from 'next';
import { Outfit, Syne, Space_Mono } from 'next/font/google';
import './globals.css';

const outfit = Outfit({
  subsets: ['latin'],
  variable: '--font-sans',
  weight: ['300', '400', '500', '600', '700'],
});

const syne = Syne({
  subsets: ['latin'],
  variable: '--font-serif',
  weight: ['400', '500', '600', '700', '800'],
});

const spaceMono = Space_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
  weight: ['400', '700'],
});

export const metadata: Metadata = {
  title: 'arcscape.com is for sale | Premium Domain Portfolio',
  description: 'Acquire arcscape.com, the premier brand identity for spatial design, landscaping, architecture, and technology. Secure checkout with GoDaddy registrar.',
  keywords: [
    'arcscape.com',
    'domain for sale',
    'buy arcscape.com',
    'architecture domain',
    'spatial design brand',
    'premium domains',
    'landscape design',
    'virtual spaces',
  ],
  authors: [{ name: 'Arcscape Ventures' }],
  metadataBase: new URL('https://arcscape.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'arcscape.com is for sale | Premium Domain Portfolio',
    description: 'Acquire arcscape.com, the premier brand identity for spatial design, landscaping, architecture, and technology. Secure buyout hosted securely via GoDaddy.',
    url: 'https://arcscape.com',
    siteName: 'Arcscape Brand Portfolio',
    images: [
      {
        url: 'https://picsum.photos/seed/arcscape_hero/1200/630',
        width: 1200,
        height: 630,
        alt: 'Arcscape.com Premium Brand Showcase',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'arcscape.com is for sale | Premium Brand Domain',
    description: 'Acquire arcscape.com, the premier brand identity for spatial design, landscaping, architecture, and technology.',
    images: ['https://picsum.photos/seed/arcscape_hero/1200/630'],
  },
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en" className={`${outfit.variable} ${syne.variable} ${spaceMono.variable}`}>
      <body suppressHydrationWarning className="bg-[#0C0B09] text-[#E8E2D6] antialiased transition-colors duration-300">
        {children}
      </body>
    </html>
  );
}
