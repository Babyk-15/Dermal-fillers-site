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

  const toggle = (id: string) => setExpandedId((prev) => (prev === id ? null : id));

  return (
    <>
      <Nav />
      <main id="main-content">

        {/* ── PAGE HERO ── */}
        <section className="page-hero" aria-labelledby="page-heading">
          <div className="container">
            <nav className="breadcrumb" aria-label="Breadcrumb">
              <Link href="/">Home</Link>
              <span className="breadcrumb__sep" aria-hidden="true">›</span>
              <span aria-current="page">Products</span>
            </nav>
            <h1 id="page-heading">Our Product Catalogue</h1>
            <p>
              50 CE-certified dermal fillers, skinboosters, collagen stimulators, and mesotherapy
              products — sourced from the world&apos;s most trusted aesthetic brands.
            </p>
          </div>
        </section>

        {/* ── FILTERS ── */}
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
            {/* Search */}
            <div style={{ marginBottom: 'var(--space-4)' }}>
              <input
                className="form-input"
                type="search"
                placeholder="Search by product name, brand, or treatment area…"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                aria-label="Search products"
                style={{ maxWidth: 480, fontSize: '0.9375rem' }}
              />
            </div>

            {/* Category pills */}
            <div
              style={{
                display: 'flex',
                gap: 'var(--space-2)',
                flexWrap: 'wrap',
                marginBottom: 'var(--space-3)',
              }}
              role="group"
              aria-label="Filter by category"
            >
              {ALL_CATEGORIES.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  style={{
                    padding: '7px 16px',
                    borderRadius: 'var(--radius-pill)',
                    border: '1.5px solid',
                    fontSize: 'var(--text-xs)',
                    fontWeight: 600,
                    letterSpacing: '0.04em',
                    cursor: 'pointer',
                    transition: 'all 0.18s',
                    borderColor:
                      activeCategory === cat ? 'var(--color-rose)' : 'var(--color-border)',
                    background:
                      activeCategory === cat ? 'var(--color-rose)' : 'var(--color-white)',
                    color: activeCategory === cat ? '#fff' : 'var(--color-slate-700)',
                    whiteSpace: 'nowrap',
                  }}
                  aria-pressed={activeCategory === cat}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Brand pills */}
            <div
              style={{
                display: 'flex',
                gap: 'var(--space-2)',
                flexWrap: 'wrap',
                alignItems: 'center',
              }}
              role="group"
              aria-label="Filter by brand"
            >
              <span
                style={{
                  fontSize: 'var(--text-xs)',
                  color: 'var(--color-text-muted)',
                  fontWeight: 600,
                  letterSpacing: '0.06em',
                  textTransform: 'uppercase',
                  flexShrink: 0,
                }}
              >
                Brand:
              </span>
              <button
                onClick={() => setActiveBrand('All')}
                style={{
                  padding: '5px 14px',
                  borderRadius: 'var(--radius-pill)',
                  border: '1.5px solid',
                  fontSize: 'var(--text-xs)',
                  fontWeight: 600,
                  cursor: 'pointer',
                  transition: 'all 0.18s',
                  borderColor:
                    activeBrand === 'All' ? 'var(--color-champagne)' : 'var(--color-border)',
                  background:
                    activeBrand === 'All' ? 'var(--color-champagne-pale)' : 'var(--color-white)',
                  color:
                    activeBrand === 'All' ? 'var(--color-champagne)' : 'var(--color-slate-700)',
                  whiteSpace: 'nowrap',
                }}
                aria-pressed={activeBrand === 'All'}
              >
                All Brands
              </button>
              {BRANDS.map((b) => (
                <button
                  key={b}
                  onClick={() => setActiveBrand(b)}
                  style={{
                    padding: '5px 14px',
                    borderRadius: 'var(--radius-pill)',
                    border: '1.5px solid',
                    fontSize: 'var(--text-xs)',
                    fontWeight: 600,
                    cursor: 'pointer',
                    transition: 'all 0.18s',
                    borderColor:
                      activeBrand === b ? 'var(--color-champagne)' : 'var(--color-border)',
                    background:
                      activeBrand === b ? 'var(--color-champagne-pale)' : 'var(--color-white)',
                    color:
                      activeBrand === b ? 'var(--color-champagne)' : 'var(--color-slate-700)',
                    whiteSpace: 'nowrap',
                  }}
                  aria-pressed={activeBrand === b}
                >
                  {b}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* ── RESULTS COUNT ── */}
        <section className="section--sm" style={{ background: 'var(--color-cream)' }}>
          <div className="container">
            <p
              style={{
                fontSize: 'var(--text-sm)',
                color: 'var(--color-text-muted)',
                marginBottom: 'var(--space-8)',
              }}
            >
              Showing <strong style={{ color: 'var(--color-plum)' }}>{filtered.length}</strong>{' '}
              {filtered.length === 1 ? 'product' : 'products'}
              {activeCategory !== 'All' && ` in ${activeCategory}`}
              {activeBrand !== 'All' && ` · ${activeBrand}`}
              {search && ` matching "${search}"`}
            </p>

            {/* ── PRODUCT GRID ── */}
            {filtered.length === 0 ? (
              <div style={{ textAlign: 'center', padding: 'var(--space-20) 0' }}>
                <p style={{ fontSize: 'var(--text-xl)', color: 'var(--color-text-muted)' }}>
                  No products match your filters.
                </p>
                <button
                  onClick={() => {
                    setActiveCategory('All');
                    setActiveBrand('All');
                    setSearch('');
                  }}
                  className="btn btn--outline-navy"
                  style={{ marginTop: 'var(--space-6)' }}
                >
                  Clear all filters
                </button>
              </div>
            ) : (
              <div className="grid-3" style={{ gap: 'var(--space-6)' }}>
                {filtered.map((product) => (
                  <ProductCard
                    key={product.id}
                    product={product}
                    expanded={expandedId === product.id}
                    onToggle={() => toggle(product.id)}
                  />
                ))}
              </div>
            )}
          </div>
        </section>

        {/* ── CTA ── */}
        <section className="section section--dark" aria-labelledby="products-cta-heading">
          <div className="container" style={{ textAlign: 'center' }}>
            <span className="eyebrow" style={{ color: 'var(--color-champagne-light)' }}>
              Ready to Order?
            </span>
            <h2
              id="products-cta-heading"
              style={{
                color: 'var(--color-white)',
                marginTop: 'var(--space-3)',
                marginBottom: 'var(--space-4)',
                maxWidth: 600,
                marginInline: 'auto',
              }}
            >
              Trade Pricing Available to Verified Accounts Only.
            </h2>
            <p
              style={{
                color: 'rgba(255,255,255,0.70)',
                maxWidth: 480,
                marginInline: 'auto',
                marginBottom: 'var(--space-8)',
              }}
            >
              Submit your trade enquiry and receive personalised pricing within 24 hours. Licence
              verification completed within 1 business day.
            </p>
            <div className="btn-group" style={{ justifyContent: 'center' }}>
              <Link href="/contact#enquire" className="btn btn--primary btn--lg">
                Submit Trade Enquiry →
              </Link>
              <Link href="/contact" className="btn btn--secondary-white btn--lg">
                Contact Us
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <StickyCTA />
    </>
  );
}

/* ─────────────────────────────────────────
   PRODUCT CARD component
───────────────────────────────────────── */
function ProductCard({
  product,
  expanded,
  onToggle,
}: {
  product: Product;
  expanded: boolean;
  onToggle: () => void;
}) {
  const hasLidocaine = product.lidocaine;

  return (
    <article
      className="product-card"
      style={expanded ? { boxShadow: 'var(--shadow-lg)', borderColor: 'rgba(196,135,154,0.40)' } : {}}
      aria-label={product.name}
    >
      {/* Image */}
      <div
        className="product-card__image"
        style={{ position: 'relative', overflow: 'hidden', background: 'var(--color-slate-50)' }}
      >
        <Image
          src={product.image}
          alt={product.name}
          width={480}
          height={320}
          style={{
            width: '100%',
            height: 220,
            objectFit: 'contain',
            padding: '12px',
            background: 'var(--color-white)',
          }}
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />

        {/* Category badge */}
        {product.categories.includes('Bestsellers') && (
          <span
            className="product-card__badge"
            style={{ background: 'var(--color-champagne)', color: 'var(--color-plum)' }}
          >
            Bestseller
          </span>
        )}
        {!product.categories.includes('Bestsellers') &&
          product.categories.includes('Korean Products') && (
            <span className="product-card__badge">Korean</span>
          )}

        {/* Lidocaine tag */}
        {hasLidocaine && (
          <span
            style={{
              position: 'absolute',
              bottom: 'var(--space-3)',
              right: 'var(--space-3)',
              fontSize: '0.65rem',
              fontWeight: 700,
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              padding: '3px 8px',
              borderRadius: 'var(--radius-pill)',
              background: 'rgba(196,135,154,0.15)',
              color: 'var(--color-rose)',
              border: '1px solid rgba(196,135,154,0.25)',
            }}
          >
            + Lidocaine
          </span>
        )}
      </div>

      {/* Body */}
      <div className="product-card__body" style={{ padding: 'var(--space-5)' }}>
        {/* Brand + country */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginBottom: 'var(--space-2)',
          }}
        >
          <span className="product-card__category">{product.brand}</span>
          <span
            style={{
              fontSize: 'var(--text-xs)',
              color: 'var(--color-text-muted)',
            }}
          >
            {product.countryOfOrigin}
          </span>
        </div>

        {/* Name */}
        <h3
          className="product-card__name"
          style={{ fontSize: 'clamp(1.1rem, 2.5vw, 1.375rem)', marginBottom: 'var(--space-3)' }}
        >
          {product.name}
        </h3>

        {/* Category pills */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 'var(--space-1)', marginBottom: 'var(--space-4)' }}>
          {product.categories.filter(c => c !== 'Bestsellers').map((cat) => (
            <span key={cat} className="spec-pill" style={{ fontSize: '0.65rem' }}>
              {cat}
            </span>
          ))}
        </div>

        {/* Description (truncated unless expanded) */}
        <p
          className="product-card__description"
          style={{
            fontSize: 'var(--text-sm)',
            display: '-webkit-box',
            WebkitLineClamp: expanded ? 'unset' : 3,
            WebkitBoxOrient: 'vertical',
            overflow: expanded ? 'visible' : 'hidden',
            marginBottom: 'var(--space-4)',
          }}
        >
          {product.description}
        </p>

        {/* Expanded details */}
        {expanded && (
          <div style={{ marginBottom: 'var(--space-4)', display: 'flex', flexDirection: 'column', gap: 'var(--space-4)' }}>

            {/* Treatment areas */}
            <div>
              <p
                style={{
                  fontSize: 'var(--text-xs)',
                  fontWeight: 700,
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                  color: 'var(--color-rose)',
                  marginBottom: 'var(--space-2)',
                }}
              >
                Treatment Areas
              </p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 'var(--space-1)' }}>
                {product.treatmentAreas.map((area) => (
                  <span key={area} className="spec-pill">
                    {area}
                  </span>
                ))}
              </div>
            </div>

            {/* Ingredients */}
            {product.ingredients.length > 0 && (
              <div>
                <p
                  style={{
                    fontSize: 'var(--text-xs)',
                    fontWeight: 700,
                    letterSpacing: '0.08em',
                    textTransform: 'uppercase',
                    color: 'var(--color-rose)',
                    marginBottom: 'var(--space-2)',
                  }}
                >
                  Key Ingredients
                </p>
                <ul style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                  {product.ingredients.map((ing) => (
                    <li
                      key={ing}
                      style={{ fontSize: 'var(--text-xs)', color: 'var(--color-slate-700)', display: 'flex', alignItems: 'flex-start', gap: '6px' }}
                    >
                      <span style={{ color: 'var(--color-rose)', flexShrink: 0 }}>·</span>
                      {ing}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Benefits */}
            {product.benefits.length > 0 && (
              <div>
                <p
                  style={{
                    fontSize: 'var(--text-xs)',
                    fontWeight: 700,
                    letterSpacing: '0.08em',
                    textTransform: 'uppercase',
                    color: 'var(--color-rose)',
                    marginBottom: 'var(--space-2)',
                  }}
                >
                  Key Benefits
                </p>
                <ul style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                  {product.benefits.map((b) => (
                    <li
                      key={b}
                      style={{ fontSize: 'var(--text-xs)', color: 'var(--color-slate-700)', display: 'flex', alignItems: 'flex-start', gap: '6px' }}
                    >
                      <span style={{ color: 'var(--color-rose)', flexShrink: 0 }}>✓</span>
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Pack contents */}
            {product.packContents.length > 0 && (
              <div>
                <p
                  style={{
                    fontSize: 'var(--text-xs)',
                    fontWeight: 700,
                    letterSpacing: '0.08em',
                    textTransform: 'uppercase',
                    color: 'var(--color-rose)',
                    marginBottom: 'var(--space-2)',
                  }}
                >
                  Pack Contents
                </p>
                <ul style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                  {product.packContents.map((item) => (
                    <li
                      key={item}
                      style={{ fontSize: 'var(--text-xs)', color: 'var(--color-slate-700)', display: 'flex', alignItems: 'flex-start', gap: '6px' }}
                    >
                      <span style={{ color: 'var(--color-rose)', flexShrink: 0 }}>·</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* CE compliance notice */}
            <div
              style={{
                background: 'var(--color-champagne-pale)',
                border: '1px solid rgba(201,164,108,0.25)',
                borderRadius: 'var(--radius-md)',
                padding: 'var(--space-3) var(--space-4)',
              }}
            >
              <p style={{ fontSize: 'var(--text-xs)', color: 'var(--color-text-muted)' }}>
                <strong style={{ color: 'var(--color-champagne)' }}>CE Marked · MDR 2017/745</strong>
                {' '}— Full compliance documentation, batch certificates, and cold-chain records included with every order.
              </p>
            </div>
          </div>
        )}

        {/* Toggle button */}
        <button
          onClick={onToggle}
          style={{
            width: '100%',
            background: 'none',
            border: '1px solid var(--color-border)',
            borderRadius: 'var(--radius-md)',
            padding: 'var(--space-2) var(--space-4)',
            fontSize: 'var(--text-xs)',
            fontWeight: 600,
            color: 'var(--color-slate-500)',
            cursor: 'pointer',
            transition: 'all 0.18s',
            marginBottom: 'var(--space-3)',
            letterSpacing: '0.04em',
          }}
          aria-expanded={expanded}
          aria-controls={`details-${product.id}`}
        >
          {expanded ? '▲ Hide Details' : '▾ View Details'}
        </button>
      </div>

      {/* Footer */}
      <div className="product-card__footer">
        <div>
          {product.price ? (
            <span
              style={{
                fontSize: 'var(--text-lg)',
                fontFamily: 'var(--font-display)',
                fontWeight: 700,
                color: 'var(--color-plum)',
              }}
            >
              {product.price}
            </span>
          ) : (
            <span style={{ fontSize: 'var(--text-xs)', color: 'var(--color-text-muted)' }}>
              Price on enquiry
            </span>
          )}
          <span
            style={{
              display: 'block',
              fontSize: '0.65rem',
              color: 'var(--color-text-muted)',
              marginTop: '2px',
            }}
          >
            {product.volume} · {product.manufacturer}
          </span>
        </div>
        <Link
          href="/contact#enquire"
          className="btn btn--primary btn--sm"
          aria-label={`Enquire about ${product.name}`}
        >
          Enquire →
        </Link>
      </div>
    </article>
  );
}
