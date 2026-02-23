import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Product Catalogue | CE-Certified Dermal Fillers & Injectables',
  description:
    'Browse our full wholesale catalogue of CE-certified dermal fillers, skinboosters, collagen stimulators, and mesotherapy products. Top brands including Juvederm, Restylane, Profhilo, Sculptra, Revolax, Belotero, and more. Trade pricing for licensed practitioners.',
  alternates: { canonical: 'https://www.yourdomain.com/products/' },
  openGraph: {
    title: 'Product Catalogue | CE-Certified Dermal Fillers Wholesale',
    description:
      'CE-certified dermal fillers and aesthetic injectables from the world\'s top brands. Wholesale pricing available to verified licensed practitioners in the USA and Europe.',
    url: 'https://www.yourdomain.com/products/',
    images: [{ url: '/assets/og-products.jpg', width: 1200, height: 630 }],
  },
};

export default function ProductsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
