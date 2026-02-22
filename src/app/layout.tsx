import type { Metadata, Viewport } from 'next';
import { Cormorant_Garamond, Inter } from 'next/font/google';
import './globals.css';

const cormorantGaramond = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  style: ['normal', 'italic'],
  variable: '--font-display',
  display: 'swap',
});

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-body',
  display: 'swap',
});

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#fdfaf9',
};

export const metadata: Metadata = {
  metadataBase: new URL('https://www.yourdomain.com'),
  title: {
    default: 'Dermal Fillers Wholesale Supplier | CE-Certified Hyaluronic Acid Fillers | USA & Europe',
    template: '%s | AestheFill Pro',
  },
  description:
    'Licensed wholesale supplier of premium CE-certified dermal fillers and hyaluronic acid injectables. Trusted by aesthetic clinics and practitioners across the USA and Europe. Enquire for trade pricing.',
  keywords: [
    'dermal fillers wholesale',
    'hyaluronic acid fillers supplier',
    'CE certified dermal fillers',
    'aesthetic injectables wholesale',
    'buy dermal fillers bulk',
    'filler supplier USA',
    'filler supplier Europe',
    'HA fillers wholesale',
  ],
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
  openGraph: {
    type: 'website',
    siteName: 'AestheFill Pro',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${cormorantGaramond.variable} ${inter.variable}`}>
      <body>{children}</body>
    </html>
  );
}
