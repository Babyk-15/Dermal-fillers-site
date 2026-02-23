import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import StickyCTA from '@/components/StickyCTA';
import ScrollReveal from '@/components/ScrollReveal';
import { products } from '@/lib/products';

export const metadata: Metadata = {
  title: 'Dermal Fillers Wholesale Supplier | CE-Certified | USA & Europe',
  description:
    'Licensed wholesale supplier of CE-certified dermal fillers from top brands. Trade pricing for licensed practitioners in the USA and Europe.',
  alternates: { canonical: 'https://www.yourdomain.com/' },
  openGraph: {
    title: 'Dermal Fillers Wholesale Supplier | CE-Certified | USA & Europe',
    description: 'CE-certified dermal fillers wholesale. Top brands. Cold-chain delivery. Trade pricing for licensed practitioners.',
    url: 'https://www.yourdomain.com/',
    images: [{ url: '/assets/og-home.jpg', width: 1200, height: 630 }],
  },
};

const featured = products.filter((p) => p.categories.includes('Bestsellers')).slice(0, 6);

const testimonials = [
  { quote: 'Switched our entire clinic 14 months ago. The compliance documentation is impeccable and the product consistency is exactly what we need.', name: 'Dr. S. Hartmann', location: 'Munich, Germany' },
  { quote: 'Cold-chain records included with every shipment. That level of traceability is rare — and it gives me confidence in every treatment.', name: 'Dr. C. Moreau', location: 'Paris, France' },
  { quote: "Haven't had a single stock-out since we moved to AestheFill Pro. US import was handled entirely on their end.", name: 'Dr. A. Reyes, MD', location: 'Miami, FL, USA' },
];

export default function HomePage() {
  return (
    <>
      <Nav />
      <main id="main-content">

        {/* ── HERO ── */}
        <section className="hero" aria-labelledby="hero-heading">
          <div className="container">
            <div className="hero__inner">

              <div className="hero__content">
                <span className="hero__eyebrow">Wholesale Aesthetic Injectables</span>
                <h1 id="hero-heading" className="hero__headline">
                  Premium Fillers.<br />
                  <em>Verified</em> Supply.
                </h1>
                <p className="hero__subheadline">
                  CE-certified products from the world&apos;s top brands — supplied wholesale to licensed practitioners across the USA and Europe.
                </p>
                <div className="hero__cta-group">
                  <Link href="/contact#enquire" className="btn btn--primary btn--lg">
                    Enquire to Purchase →
                  </Link>
                  <Link href="/products" className="btn btn--secondary btn--lg">
                    View Catalogue
                  </Link>
                </div>
                <div className="hero__trust-strip" aria-label="Key credentials">
                  <div className="hero__trust-item">
                    <strong>CE-Certified</strong>
                    <span>MDR 2017/745</span>
                  </div>
                  <div className="hero__trust-dot" aria-hidden="true" />
                  <div className="hero__trust-item">
                    <strong>Cold-Chain</strong>
                    <span>2–8 °C Guaranteed</span>
                  </div>
                  <div className="hero__trust-dot" aria-hidden="true" />
                  <div className="hero__trust-item">
                    <strong>48-Hour</strong>
                    <span>Dispatch</span>
                  </div>
                </div>
              </div>

              <div className="hero__image" aria-hidden="true">
                <div
                  className="img-placeholder img-placeholder--hero"
                  role="img"
                  aria-label="Hero: premium dermal filler syringes — flat-lay product photography"
                >
                  <div className="img-placeholder__label">
                    Hero Photography<br />
                    1400 × 900px WebP
                  </div>
                </div>
              </div>

            </div>
          </div>
          <div className="hero__decor" aria-hidden="true" />
        </section>

        {/* ── STATS ── */}
        <section className="section--sm section--dark" aria-label="Key numbers">
          <div className="container">
            <div className="stats-row">
              {[
                { number: '1,200+', label: 'Licensed Clinics' },
                { number: '25+',   label: 'Trusted Brands' },
                { number: '100%',   label: 'Cold-Chain Compliance' },
                { number: '48hrs',  label: 'Average Dispatch' },
              ].map((s, i) => (
                <ScrollReveal as="div" variant="scale" delay={(i + 1) as 1|2|3|4} className="stat-item" key={s.number}>
                  <div className="stat-item__number">{s.number}</div>
                  <div className="stat-item__label">{s.label}</div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* ── FEATURED PRODUCTS ── */}
        <section className="section section--slate" aria-labelledby="products-heading">
          <div className="container">
            <ScrollReveal className="section-header">
              <span className="eyebrow">Bestsellers</span>
              <h2 id="products-heading">Top Products from Our Catalogue</h2>
            </ScrollReveal>

            <div className="grid-3" style={{ gap: 'var(--space-5)' }}>
              {featured.map((p, i) => (
                <ScrollReveal
                  key={p.id}
                  as="article"
                  delay={(Math.min(i + 1, 5)) as 1|2|3|4|5}
                  className="product-card"
                  aria-label={p.name}
                >
                  <div style={{ background: 'var(--color-white)', overflow: 'hidden' }}>
                    <Image
                      src={p.image}
                      alt={p.name}
                      width={480}
                      height={280}
                      style={{ width: '100%', height: 200, objectFit: 'contain', padding: '12px', background: 'var(--color-white)' }}
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                  </div>
                  <div className="product-card__body" style={{ padding: 'var(--space-4) var(--space-5)' }}>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 'var(--space-1)' }}>
                      <span className="product-card__category">{p.brand}</span>
                      <span style={{ fontSize: 'var(--text-xs)', color: 'var(--color-text-muted)' }}>{p.volume}</span>
                    </div>
                    <h3 className="product-card__name" style={{ fontSize: 'var(--text-xl)', marginBottom: 'var(--space-2)' }}>{p.name}</h3>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '4px', marginBottom: 'var(--space-3)' }}>
                      {p.treatmentAreas.slice(0, 3).map((a) => (
                        <span key={a} className="spec-pill" style={{ fontSize: '0.65rem' }}>{a}</span>
                      ))}
                    </div>
                  </div>
                  <div className="product-card__footer">
                    <span style={{ fontSize: 'var(--text-sm)', fontWeight: 600, color: p.price ? 'var(--color-plum)' : 'var(--color-text-muted)' }}>
                      {p.price ?? 'Price on enquiry'}
                    </span>
                    <Link href="/contact#enquire" className="btn btn--primary btn--sm">Enquire →</Link>
                  </div>
                </ScrollReveal>
              ))}
            </div>

            <div style={{ textAlign: 'center', marginTop: 'var(--space-10)' }}>
              <Link href="/products" className="btn btn--outline-navy btn--lg">
                Browse All Products →
              </Link>
            </div>
          </div>
        </section>

        {/* ── PROOF STRIP ── */}
        <section className="section--sm proof-strip" style={{ background: 'var(--color-white)', borderTop: '1px solid var(--color-border)', borderBottom: '1px solid var(--color-border)' }}>
          <div className="container">
            <div className="proof-strip__grid" style={{ gap: 'var(--space-6)', textAlign: 'center' }}>
              {[
                { icon: '🛡️', title: 'CE Certified', sub: 'EU MDR 2017/745 on every product' },
                { icon: '🌡️', title: 'Cold-Chain Guaranteed', sub: '2–8 °C from warehouse to your door' },
                { icon: '📦', title: 'Full Documentation', sub: 'Batch certs & compliance records included' },
              ].map((item) => (
                <div key={item.title} style={{ padding: 'var(--space-4) var(--space-2)' }}>
                  <div style={{ fontSize: '1.75rem', marginBottom: 'var(--space-3)' }} aria-hidden="true">{item.icon}</div>
                  <h5 style={{ fontSize: 'var(--text-base)', fontWeight: 600, marginBottom: 'var(--space-1)', color: 'var(--color-plum)' }}>{item.title}</h5>
                  <p style={{ fontSize: 'var(--text-xs)', color: 'var(--color-text-muted)' }}>{item.sub}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── TESTIMONIALS ── */}
        <section className="section section--gold-pale" aria-labelledby="testimonials-heading">
          <div className="container">
            <ScrollReveal className="section-header">
              <span className="eyebrow">Trusted by Practitioners</span>
              <h2 id="testimonials-heading">What Clinics Say</h2>
            </ScrollReveal>
            <div className="grid-3">
              {testimonials.map((t, i) => (
                <ScrollReveal
                  as="blockquote"
                  delay={(i + 1) as 1|2|3}
                  className="testimonial-card"
                  key={t.name}
                >
                  <div className="testimonial-card__stars" aria-label="5 stars">★★★★★</div>
                  <p className="testimonial-card__quote">&ldquo;{t.quote}&rdquo;</p>
                  <footer className="testimonial-card__author">
                    <div className="testimonial-card__author-info">
                      <strong>{t.name}</strong>
                      <span>{t.location}</span>
                    </div>
                  </footer>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* ── CTA ── */}
        <section className="section section--dark" aria-labelledby="cta-heading">
          <div className="container" style={{ textAlign: 'center' }}>
            <h2 id="cta-heading" style={{ color: 'var(--color-white)', marginBottom: 'var(--space-4)', maxWidth: 520, marginInline: 'auto' }}>
              Ready to Place a Trade Enquiry?
            </h2>
            <p style={{ color: 'rgba(255,255,255,0.65)', marginBottom: 'var(--space-8)', maxWidth: 400, marginInline: 'auto' }}>
              Verified accounts receive pricing within 24 hours. Licence check completed in 1 business day.
            </p>
            <div className="btn-group" style={{ justifyContent: 'center' }}>
              <Link href="/contact#enquire" className="btn btn--primary btn--lg">Enquire to Purchase →</Link>
              <Link href="/products" className="btn btn--secondary-white btn--lg">View Products</Link>
            </div>
          </div>
        </section>

      </main>
      <Footer />
      <StickyCTA />
    </>
  );
}
