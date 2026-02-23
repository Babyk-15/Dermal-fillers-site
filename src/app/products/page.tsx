'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState, useMemo } from 'react';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import StickyCTA from '@/components/StickyCTA';
import { products, ALL_CATEGORIES, getBrands, type Product } from '@/lib/products';

const BRANDS = getBrands();

export default function ProductsPage() {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [activeBrand, setActiveBrand] = useState<string>('All');
  const [search, setSearch] = useState('');
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const filtered = useMemo(() => {
    return products.filter((p) => {
      const matchCat = activeCategory === 'All' || p.categories.includes(activeCategory);
      const matchBrand = activeBrand === 'All' || p.brand === activeBrand;
      const q = search.toLowerCase();
      const matchSearch =
        !q ||
        p.name.toLowerCase().includes(q) ||
        p.brand.toLowerCase().includes(q) ||
        p.treatmentAreas.some((a) => a.toLowerCase().includes(q));
      return matchCat && matchBrand && matchSearch;
    });
  }, [activeCategory, activeBrand, search]);

  return (
    <>
      <Nav />
      <main id="main-content">

        {/* PAGE HERO */}
        <section className="page-hero" aria-labelledby="page-heading">
          <div className="container">
            <nav className="breadcrumb" aria-label="Breadcrumb">
              <Link href="/">Home</Link>
              <span className="breadcrumb__sep" aria-hidden="true">›</span>
              <span aria-current="page">Products</span>
            </nav>
            <h1 id="page-heading">Product Catalogue</h1>
            <p>50 CE-certified products. Top brands. Trade pricing for verified accounts.</p>
          </div>
        </section>

        {/* FILTERS */}
        <section
          style={{
            background: 'var(--color-white)',
            borderBottom: '1px solid var(--color-border)',
            padding: 'var(--space-5) 0',
            position: 'sticky',
            top: 'var(--nav-height)',
            zIndex: 40,
          }}
          aria-label="Product filters"
        >
          <div className="container">
            <div style={{ marginBottom: 'var(--space-3)' }}>
              <input
                className="form-input"
                type="search"
                placeholder="Search products, brands, or treatment areas…"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                aria-label="Search products"
                style={{ maxWidth: 440, fontSize: '0.9375rem' }}
              />
            </div>

            {/* Category filters */}
            <div
              style={{ display: 'flex', gap: 'var(--space-2)', flexWrap: 'wrap', marginBottom: 'var(--space-2)' }}
              role="group"
              aria-label="Filter by category"
            >
              {ALL_CATEGORIES.map((cat) => (
                <FilterPill
                  key={cat}
                  label={cat}
                  active={activeCategory === cat}
                  onClick={() => setActiveCategory(cat)}
                  color="rose"
                />
              ))}
            </div>

            {/* Brand filters */}
            <div
              style={{ display: 'flex', gap: 'var(--space-2)', flexWrap: 'wrap', alignItems: 'center' }}
              role="group"
              aria-label="Filter by brand"
            >
              <span style={{ fontSize: 'var(--text-xs)', color: 'var(--color-text-muted)', fontWeight: 600, letterSpacing: '0.06em', textTransform: 'uppercase', flexShrink: 0 }}>
                Brand:
              </span>
              <FilterPill label="All" active={activeBrand === 'All'} onClick={() => setActiveBrand('All')} color="gold" />
              {BRANDS.map((b) => (
                <FilterPill key={b} label={b} active={activeBrand === b} onClick={() => setActiveBrand(b)} color="gold" />
              ))}
            </div>
          </div>
        </section>

        {/* GRID */}
        <section className="section--sm" style={{ background: 'var(--color-cream)' }}>
          <div className="container">
            <p style={{ fontSize: 'var(--text-sm)', color: 'var(--color-text-muted)', marginBottom: 'var(--space-6)' }}>
              <strong style={{ color: 'var(--color-plum)' }}>{filtered.length}</strong> product{filtered.length !== 1 && 's'}
              {activeCategory !== 'All' && ` · ${activeCategory}`}
              {activeBrand !== 'All' && ` · ${activeBrand}`}
            </p>

            {filtered.length === 0 ? (
              <div style={{ textAlign: 'center', padding: 'var(--space-20) 0' }}>
                <p style={{ color: 'var(--color-text-muted)', marginBottom: 'var(--space-5)' }}>No products match your filters.</p>
                <button
                  onClick={() => { setActiveCategory('All'); setActiveBrand('All'); setSearch(''); }}
                  className="btn btn--outline-navy"
                >
                  Clear filters
                </button>
              </div>
            ) : (
              <div className="grid-3" style={{ gap: 'var(--space-5)' }}>
                {filtered.map((p) => (
                  <ProductCard
                    key={p.id}
                    product={p}
                    expanded={expandedId === p.id}
                    onToggle={() => setExpandedId(expandedId === p.id ? null : p.id)}
                  />
                ))}
              </div>
            )}
          </div>
        </section>

        {/* CTA */}
        <section className="section section--dark" aria-labelledby="products-cta-heading">
          <div className="container" style={{ textAlign: 'center' }}>
            <h2 id="products-cta-heading" style={{ color: 'var(--color-white)', marginBottom: 'var(--space-4)', maxWidth: 480, marginInline: 'auto' }}>
              Ready to Order?
            </h2>
            <p style={{ color: 'rgba(255,255,255,0.65)', maxWidth: 380, marginInline: 'auto', marginBottom: 'var(--space-8)' }}>
              Verified trade accounts receive personalised pricing within 24 hours.
            </p>
            <div className="btn-group" style={{ justifyContent: 'center' }}>
              <Link href="/contact#enquire" className="btn btn--primary btn--lg">Submit Trade Enquiry →</Link>
              <Link href="/contact" className="btn btn--secondary-white btn--lg">Contact Us</Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <StickyCTA />
    </>
  );
}

/* Filter pill */
function FilterPill({ label, active, onClick, color }: { label: string; active: boolean; onClick: () => void; color: 'rose' | 'gold' }) {
  const activeColor = color === 'rose' ? 'var(--color-rose)' : 'var(--color-champagne)';
  const activeBg   = color === 'rose' ? 'var(--color-rose)' : 'var(--color-champagne-pale)';
  const activeText = color === 'rose' ? '#fff' : 'var(--color-champagne)';
  return (
    <button
      onClick={onClick}
      style={{
        padding: '6px 14px',
        borderRadius: 'var(--radius-pill)',
        border: `1.5px solid ${active ? activeColor : 'var(--color-border)'}`,
        fontSize: 'var(--text-xs)',
        fontWeight: 600,
        cursor: 'pointer',
        transition: 'all 0.15s',
        background: active ? activeBg : 'var(--color-white)',
        color: active ? activeText : 'var(--color-slate-700)',
        whiteSpace: 'nowrap',
      }}
      aria-pressed={active}
    >
      {label}
    </button>
  );
}

/* Product card */
function ProductCard({ product: p, expanded, onToggle }: { product: Product; expanded: boolean; onToggle: () => void }) {
  return (
    <article
      className="product-card"
      style={expanded ? { boxShadow: 'var(--shadow-lg)', borderColor: 'rgba(196,135,154,0.40)' } : {}}
    >
      {/* Image */}
      <div style={{ position: 'relative', overflow: 'hidden', background: 'var(--color-white)' }}>
        <Image
          src={p.image}
          alt={p.name}
          width={480}
          height={260}
          style={{ width: '100%', height: 200, objectFit: 'contain', padding: '12px' }}
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
        {p.categories.includes('Bestsellers') && (
          <span className="product-card__badge" style={{ background: 'var(--color-champagne)', color: 'var(--color-plum)' }}>
            Bestseller
          </span>
        )}
        {p.lidocaine && (
          <span style={{
            position: 'absolute', bottom: 8, right: 8,
            fontSize: '0.65rem', fontWeight: 700, letterSpacing: '0.06em', textTransform: 'uppercase',
            padding: '3px 8px', borderRadius: 'var(--radius-pill)',
            background: 'rgba(196,135,154,0.12)', color: 'var(--color-rose)',
            border: '1px solid rgba(196,135,154,0.22)',
          }}>
            + Lidocaine
          </span>
        )}
      </div>

      {/* Body */}
      <div style={{ padding: 'var(--space-4) var(--space-5)' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 'var(--space-1)' }}>
          <span className="product-card__category">{p.brand}</span>
          <span style={{ fontSize: 'var(--text-xs)', color: 'var(--color-text-muted)' }}>{p.countryOfOrigin}</span>
        </div>
        <h3 style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--text-xl)', fontWeight: 600, color: 'var(--color-plum)', lineHeight: 1.2, marginBottom: 'var(--space-3)' }}>
          {p.name}
        </h3>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '4px', marginBottom: 'var(--space-3)' }}>
          {p.treatmentAreas.slice(0, 3).map((a) => (
            <span key={a} className="spec-pill" style={{ fontSize: '0.65rem' }}>{a}</span>
          ))}
          {p.treatmentAreas.length > 3 && (
            <span className="spec-pill" style={{ fontSize: '0.65rem', opacity: 0.7 }}>+{p.treatmentAreas.length - 3} more</span>
          )}
        </div>

        {/* Expanded details */}
        {expanded && (
          <div style={{ borderTop: '1px solid var(--color-border)', paddingTop: 'var(--space-4)', marginBottom: 'var(--space-3)', display: 'flex', flexDirection: 'column', gap: 'var(--space-4)' }}>
            <p style={{ fontSize: 'var(--text-sm)', color: 'var(--color-text-muted)', lineHeight: 1.65 }}>
              {p.description}
            </p>
            {p.ingredients.length > 0 && (
              <div>
                <p style={{ fontSize: 'var(--text-xs)', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--color-rose)', marginBottom: '6px' }}>
                  Key Ingredients
                </p>
                {p.ingredients.map((ing) => (
                  <p key={ing} style={{ fontSize: 'var(--text-xs)', color: 'var(--color-slate-700)', lineHeight: 1.6 }}>· {ing}</p>
                ))}
              </div>
            )}
            <div style={{ background: 'var(--color-champagne-pale)', border: '1px solid rgba(201,164,108,0.22)', borderRadius: 'var(--radius-md)', padding: 'var(--space-3) var(--space-4)' }}>
              <p style={{ fontSize: 'var(--text-xs)', color: 'var(--color-text-muted)' }}>
                <strong style={{ color: 'var(--color-champagne)' }}>CE · MDR 2017/745</strong> — Full compliance documentation included with every order.
              </p>
            </div>
          </div>
        )}

        <button
          onClick={onToggle}
          style={{
            width: '100%', background: 'none',
            border: '1px solid var(--color-border)', borderRadius: 'var(--radius-md)',
            padding: '8px', fontSize: 'var(--text-xs)', fontWeight: 600,
            color: 'var(--color-slate-500)', cursor: 'pointer', transition: 'all 0.15s',
          }}
          aria-expanded={expanded}
        >
          {expanded ? '▲ Less' : '▾ Details'}
        </button>
      </div>

      {/* Footer */}
      <div className="product-card__footer">
        <div>
          <span style={{ fontSize: p.price ? 'var(--text-lg)' : 'var(--text-xs)', fontFamily: p.price ? 'var(--font-display)' : 'inherit', fontWeight: p.price ? 700 : 400, color: p.price ? 'var(--color-plum)' : 'var(--color-text-muted)' }}>
            {p.price ?? 'Price on enquiry'}
          </span>
          <span style={{ display: 'block', fontSize: '0.65rem', color: 'var(--color-text-muted)', marginTop: '1px' }}>{p.volume}</span>
        </div>
        <Link href="/contact#enquire" className="btn btn--primary btn--sm">
          Enquire →
        </Link>
      </div>
    </article>
  );
}
