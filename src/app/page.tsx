import type { Metadata } from 'next';
import Link from 'next/link';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import StickyCTA from '@/components/StickyCTA';
import FAQAccordion from '@/components/FAQAccordion';
import ScrollReveal from '@/components/ScrollReveal';

export const metadata: Metadata = {
  title: 'Dermal Fillers Wholesale Supplier | CE-Certified Hyaluronic Acid Fillers | USA & Europe',
  description:
    'Licensed wholesale supplier of premium CE-certified dermal fillers and hyaluronic acid injectables. Trusted by aesthetic clinics and practitioners across the USA and Europe. Enquire for trade pricing.',
  alternates: { canonical: 'https://www.yourdomain.com/' },
  openGraph: {
    title: 'Dermal Fillers Wholesale Supplier | CE-Certified | USA & Europe',
    description:
      'Premium CE-certified dermal fillers for aesthetic clinics and practitioners. Wholesale pricing, cold-chain delivery, full compliance documentation.',
    url: 'https://www.yourdomain.com/',
    images: [{ url: '/assets/og-home.jpg', width: 1200, height: 630 }],
  },
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Who can purchase dermal fillers wholesale from AestheFill Pro?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Our products are available exclusively to licensed aesthetic practitioners, cosmetic clinics, plastic surgery centres, medical spas, and registered medical wholesalers. Valid professional credentials are required at account verification.',
      },
    },
    {
      '@type': 'Question',
      name: 'Are your dermal fillers CE-certified?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. All products in our catalogue carry CE marking under the EU Medical Device Regulation (MDR 2017/745) and meet FDA import requirements for the US market. Full compliance documentation is provided with every order.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the minimum order quantity?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Minimum order quantities vary by product line. We offer flexible entry-level volumes for new accounts and volume-based pricing tiers for established practices. Contact our trade team for a personalised quote.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do you ship internationally?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. We ship to the United States and across the European Union, UK, and EEA. All shipments are temperature-controlled and fully tracked, with cold-chain integrity documentation included.',
      },
    },
  ],
};

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <Nav />

      <main id="main-content">
        {/* ── HERO ── */}
        <section className="hero" aria-labelledby="hero-heading">
          <div className="container">
            <div className="hero__inner">
              <div className="hero__content">
                <span className="hero__eyebrow">Wholesale Aesthetic Injectables</span>
                <h1 id="hero-heading" className="hero__headline">
                  The Fillers <em>Serious</em><br />
                  Practitioners<br />
                  Trust.
                </h1>
                <p className="hero__subheadline">
                  CE-certified hyaluronic acid dermal fillers, supplied wholesale to licensed aesthetic
                  clinics and practitioners across the USA and Europe. Verified compliance. Cold-chain
                  delivery. Trade pricing by volume.
                </p>
                <div className="hero__cta-group">
                  <Link href="/contact#enquire" className="btn btn--primary btn--lg" aria-label="Enquire about wholesale purchasing">
                    Enquire to Purchase →
                  </Link>
                  <Link href="/products" className="btn btn--secondary btn--lg" aria-label="Browse our product catalogue">
                    View Products
                  </Link>
                </div>
                <div className="hero__trust-strip" aria-label="Key credentials">
                  <div className="hero__trust-item"><strong>CE-Certified</strong><span>MDR 2017/745</span></div>
                  <div className="hero__trust-dot" aria-hidden="true" />
                  <div className="hero__trust-item"><strong>FDA-Compliant</strong><span>US Import Ready</span></div>
                  <div className="hero__trust-dot" aria-hidden="true" />
                  <div className="hero__trust-item"><strong>Cold-Chain</strong><span>2–8 °C Guaranteed</span></div>
                </div>
              </div>

              <div className="hero__image" aria-hidden="true">
                <div
                  className="img-placeholder img-placeholder--hero"
                  role="img"
                  aria-label="Hero image placeholder: High-quality photograph of premium dermal filler syringes arranged on a clean clinical surface — 1400×900px WebP"
                >
                  <div className="img-placeholder__label">
                    Hero Product Photography<br />
                    Suggested: Overhead flat-lay of syringes on clean white marble — 1400×900px WebP
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="hero__decor" aria-hidden="true" />
        </section>

        {/* ── TRUST BAR ── */}
        <section className="trust-bar" aria-label="Trust credentials and certifications">
          <div className="container">
            <div className="trust-bar__inner">
              {[
                { label: <><strong>CE &amp; MDR Certified</strong> Medical Devices</> },
                { label: <>Shipping to <strong>USA &amp; Europe</strong></> },
                { label: <><strong>Cold-Chain Logistics</strong> 2–8 °C Maintained</> },
                { label: <><strong>Full Documentation</strong> With Every Order</> },
                { label: <><strong>Licensed Practitioners</strong> Only</> },
              ].map((item, i) => (
                <div className="trust-bar__item" key={i}>
                  <svg aria-hidden="true" focusable="false" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8} width={20} height={20}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                  <span>{item.label}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── PROBLEM / AGITATION ── */}
        <section className="section" aria-labelledby="problem-heading">
          <div className="container">
            <div className="grid-2" style={{ alignItems: 'center', gap: 'var(--space-20)' }}>
              <div>
                <span className="eyebrow">The Problem With Most Suppliers</span>
                <h2 id="problem-heading" style={{ marginTop: 'var(--space-3)', marginBottom: 'var(--space-6)' }}>
                  Your Patients Deserve Better Than What Most Distributors Are Selling.
                </h2>
                <p className="lead" style={{ marginBottom: 'var(--space-6)' }}>
                  Inconsistent batches. Missing compliance certificates. Suppliers who cut corners on
                  cold-chain logistics. For practitioners who take their results — and their licence —
                  seriously, this is not a minor inconvenience. It is a liability.
                </p>
                <p style={{ marginBottom: 'var(--space-8)' }}>
                  In a regulated aesthetic market, the traceability of every syringe you inject matters.
                  Regulators know it. Your patients are beginning to ask about it. And the practitioners
                  building the most respected clinics in the USA and Europe have already solved it — by
                  choosing a supplier with verifiable quality at every step of the supply chain.
                </p>
                <ul style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-4)' }}>
                  {[
                    { title: 'No More Certificate Chasing', body: 'Every product ships with its complete compliance documentation — CE, MDR, batch certificates, and cold-chain records — in one organised package.' },
                    { title: 'No Surprise Out-of-Stock Orders', body: 'Dedicated stock allocation for active trade accounts. You know exactly what\'s available before you plan your treatment calendar.' },
                    { title: 'No Grey-Market Risk', body: 'All products sourced directly from EU-approved manufacturers. Full supply chain traceability from production to your door.' },
                  ].map((item) => (
                    <li className="feature-item" key={item.title}>
                      <div className="feature-item__icon" aria-hidden="true">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} width={22} height={22}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                      </div>
                      <div className="feature-item__content">
                        <h4>{item.title}</h4>
                        <p>{item.body}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <div className="img-placeholder img-placeholder--wide" role="img" aria-label="Image placeholder: Clean clinical shelf with neatly organised filler product boxes with visible CE markings — 800×700px WebP">
                  <div className="img-placeholder__label">Problem/Solution Visual<br />Suggested: Clean clinical shelf with organised filler products — 800×700px WebP</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── STATS ── */}
        <section className="section--sm section--dark" aria-label="Company statistics">
          <div className="container">
            <div className="stats-row">
              {[
                { number: '1,200+', label: 'Licensed Clinics Supplied\nAcross USA & Europe' },
                { number: '18', label: 'Product SKUs Across\n3 Core HA Ranges' },
                { number: '100%', label: 'Cold-Chain Compliance\nOn Every Single Shipment' },
                { number: '48hrs', label: 'Average Dispatch Time\nAfter Order Confirmation' },
              ].map((stat, i) => (
                <ScrollReveal as="div" variant="scale" delay={(i + 1) as 1|2|3|4} className="stat-item" key={stat.number}>
                  <div className="stat-item__number">{stat.number}</div>
                  <div className="stat-item__label">{stat.label.split('\n').map((l, j) => <span key={j}>{l}{j === 0 && <br />}</span>)}</div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* ── PRODUCTS OVERVIEW ── */}
        <section className="section section--slate" aria-labelledby="products-heading">
          <div className="container">
            <ScrollReveal className="section-header">
              <span className="eyebrow">Our Product Ranges</span>
              <h2 id="products-heading">Precision-Engineered Fillers for Every Indication.</h2>
              <p>Three distinct hyaluronic acid ranges — formulated with varying viscosity and cross-linking densities — to match every anatomical zone and clinical technique.</p>
            </ScrollReveal>
            <div className="grid-3">
              {[
                {
                  badge: 'Superficial Lines',
                  badgeStyle: {},
                  category: 'Hyaluronic Acid — Fine',
                  name: 'AestheFill Soft',
                  desc: 'Low-viscosity, highly cohesive HA formula for superficial lines, periorbital correction, and lip definition. Delivers natural movement and consistent hydration.',
                  specs: ['16 mg/mL HA', '0.3 mL / 1.0 mL', '27G Needle Included', 'CE Certified'],
                  cta: 'btn--outline-navy',
                  id: 'soft',
                },
                {
                  badge: 'Most Requested',
                  badgeStyle: { background: 'var(--color-gold)', color: 'var(--color-navy)' },
                  category: 'Hyaluronic Acid — Medium',
                  name: 'AestheFill Volume',
                  desc: 'Mid-range viscosity for cheek augmentation, nasolabial folds, and midface volumisation. Engineered for lift, projection, and longevity.',
                  specs: ['22 mg/mL HA', '1.0 mL / 2.0 mL', '25G Needle Included', 'CE Certified'],
                  cta: 'btn--primary',
                  featured: true,
                  id: 'volume',
                },
                {
                  badge: 'Deep Tissue',
                  badgeStyle: {},
                  category: 'Hyaluronic Acid — Dense',
                  name: 'AestheFill Deep',
                  desc: 'High-density, highly cross-linked HA for deep structural correction, jawline contouring, and chin projection. Long-lasting results.',
                  specs: ['24 mg/mL HA', '1.0 mL / 2.0 mL', '23G Cannula Option', 'CE Certified'],
                  cta: 'btn--outline-navy',
                  id: 'deep',
                },
              ].map((product, i) => (
                <ScrollReveal
                  key={product.id}
                  as="article"
                  delay={(i + 1) as 1|2|3}
                  className="product-card"
                  aria-label={`${product.name} product range`}
                  style={product.featured ? { borderColor: 'rgba(196,135,154,0.40)', boxShadow: '0 0 0 2px rgba(196,135,154,0.15)' } : {}}
                >
                  <div className="product-card__image">
                    <div
                      className="img-placeholder img-placeholder--product"
                      role="img"
                      aria-label={`Product image placeholder: ${product.name} syringe and packaging — studio photograph — 600×400px WebP`}
                    >
                      <div className="img-placeholder__label">{product.name} Pack-Shot<br />600×400px WebP</div>
                    </div>
                    <span className="product-card__badge" style={product.badgeStyle}>{product.badge}</span>
                  </div>
                  <div className="product-card__body">
                    <div className="product-card__category">{product.category}</div>
                    <h3 className="product-card__name">{product.name}</h3>
                    <p className="product-card__description">{product.desc}</p>
                    <div className="product-card__specs" aria-label="Product specifications">
                      {product.specs.map((s) => <span key={s} className="spec-pill">{s}</span>)}
                    </div>
                  </div>
                  <div className="product-card__footer">
                    <span style={{ fontSize: 'var(--text-xs)', color: 'var(--color-text-muted)' }}>Trade pricing on enquiry</span>
                    <Link href="/contact#enquire" className={`btn ${product.cta} btn--sm`} aria-label={`Enquire about ${product.name} pricing`}>Enquire →</Link>
                  </div>
                </ScrollReveal>
              ))}
            </div>
            <div style={{ textAlign: 'center', marginTop: 'var(--space-12)' }}>
              <Link href="/products" className="btn btn--outline-navy btn--lg">View Full Product Catalogue →</Link>
            </div>
          </div>
        </section>

        {/* ── HOW IT WORKS ── */}
        <section className="section section--dark" aria-labelledby="process-heading">
          <div className="container">
            <ScrollReveal className="section-header section-header--light">
              <span className="eyebrow">How to Start Purchasing</span>
              <h2 id="process-heading">From Enquiry to First Delivery in 4 Simple Steps.</h2>
              <p>We make it straightforward for qualified practitioners and clinics to establish a verified trade account and receive their first order.</p>
            </ScrollReveal>
            <div className="process-steps">
              {[
                { n: 1, title: 'Submit Your Enquiry', body: 'Complete the trade enquiry form with your practice details and product interests. Takes under 3 minutes.' },
                { n: 2, title: 'Licence Verification', body: 'Our compliance team verifies your practitioner licence or business registration. Usually completed within 1 business day.' },
                { n: 3, title: 'Receive Your Trade Quote', body: 'A dedicated account manager provides your personalised pricing, MOQs, and available stock — tailored to your practice volume.' },
                { n: 4, title: 'Place & Track Your Order', body: 'Order confirmed, picked, packed in temperature-controlled conditions, and dispatched within 48 hours with full tracking.' },
              ].map((step) => (
                <div className="process-step" key={step.n}>
                  <div className="process-step__number" aria-label={`Step ${step.n}`}>{step.n}</div>
                  <h4>{step.title}</h4>
                  <p>{step.body}</p>
                </div>
              ))}
            </div>
            <div style={{ textAlign: 'center', marginTop: 'var(--space-12)' }}>
              <Link href="/contact#enquire" className="btn btn--primary btn--lg">Start My Trade Enquiry →</Link>
            </div>
          </div>
        </section>

        {/* ── BENEFITS ── */}
        <section className="section" aria-labelledby="benefits-heading">
          <div className="container">
            <div className="grid-2" style={{ alignItems: 'center', gap: 'var(--space-20)' }}>
              <div>
                <div className="img-placeholder img-placeholder--wide" role="img" aria-label="Image placeholder: Open insulated shipping box showing temperature strip, products and documentation — 800×640px WebP">
                  <div className="img-placeholder__label">Cold-Chain / Quality Assurance Visual<br />800×640px WebP</div>
                </div>
              </div>
              <div>
                <span className="eyebrow">Why Practices Choose Us</span>
                <h2 id="benefits-heading" style={{ marginTop: 'var(--space-3)', marginBottom: 'var(--space-8)' }}>
                  The Standard Every Regulated Clinic Should Demand.
                </h2>
                <ul style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-6)' }}>
                  {[
                    { title: 'CE-Certified Under MDR 2017/745', body: 'Every product in our catalogue holds valid CE marking under the EU Medical Device Regulation. Certificates provided on demand and included with every order shipment.' },
                    { title: 'Direct Manufacturer Relationships', body: 'We source exclusively from EU GMP-certified manufacturing facilities. No grey market. No parallel imports. Full supply chain documentation available on request.' },
                    { title: 'USA & Europe Delivery Network', body: 'Established logistics partnerships across both markets. Domestic warehousing in the EU for European orders. US import compliance handled by our operations team.' },
                    { title: 'Dedicated Account Management', body: 'Every verified trade account is assigned a dedicated account manager. Direct contact. Consistent pricing. Proactive stock availability updates before you need to ask.' },
                  ].map((item) => (
                    <li className="feature-item" key={item.title}>
                      <div className="feature-item__icon" aria-hidden="true">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} width={22} height={22}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <div className="feature-item__content">
                        <h4>{item.title}</h4>
                        <p>{item.body}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* ── TESTIMONIALS ── */}
        <section className="section section--gold-pale" aria-labelledby="testimonials-heading">
          <div className="container">
            <ScrollReveal className="section-header">
              <span className="eyebrow">What Practitioners Say</span>
              <h2 id="testimonials-heading">Trusted by Clinics Across Two Continents.</h2>
              <p>Hear from the aesthetic professionals who rely on AestheFill Pro for their practice every month.</p>
            </ScrollReveal>
            <div className="grid-3">
              {[
                { quote: '"We switched our entire clinic to AestheFill Pro 14 months ago. The documentation package alone has saved my compliance team hours every month. The product consistency across batches is exactly what I expect from a supplier in this category."', name: 'Dr. S. Hartmann', location: 'Aesthetic Medicine Specialist · Munich, Germany' },
                { quote: '"The cold-chain records that come with every shipment have become part of our patient file documentation. That level of traceability is rare. My patients notice the quality difference, and it gives me confidence in every treatment."', name: 'Dr. C. Moreau', location: 'Cosmetic Dermatologist · Paris, France' },
                { quote: '"Running a busy MedSpa in Miami means I cannot afford supply disruptions. My account manager knows our ordering cadence and we haven\'t had a stock-out since we moved to AestheFill Pro. The US import process was also completely handled on their end."', name: 'Dr. A. Reyes, MD', location: 'MedSpa Director · Miami, FL, USA' },
              ].map((t, i) => (
                <ScrollReveal as="blockquote" delay={(i + 1) as 1|2|3} className="testimonial-card" key={t.name} aria-label={`Testimonial from ${t.name}`}>
                  <div className="testimonial-card__stars" aria-label="5 out of 5 stars">★★★★★</div>
                  <p className="testimonial-card__quote">{t.quote}</p>
                  <footer className="testimonial-card__author">
                    <div className="testimonial-card__avatar">
                      <div className="img-placeholder" style={{ height: '100%', border: 'none', background: 'var(--color-slate-100)', borderRadius: '50%' }} role="img" aria-label={`Headshot placeholder: ${t.name} — 96×96px WebP circular`} />
                    </div>
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

        {/* ── COMPLIANCE ── */}
        <section className="section" aria-labelledby="compliance-heading">
          <div className="container container--narrow" style={{ textAlign: 'center' }}>
            <span className="eyebrow">Regulatory &amp; Compliance</span>
            <h2 id="compliance-heading" style={{ marginTop: 'var(--space-3)', marginBottom: 'var(--space-4)' }}>Every Standard Met. Every Document Available.</h2>
            <p className="lead" style={{ marginBottom: 'var(--space-12)' }}>In a regulated medical device category, compliance is not a value-add — it is the baseline.</p>
            <div className="grid-4" style={{ textAlign: 'left', marginBottom: 'var(--space-12)' }}>
              {[
                { icon: '🇪🇺', title: 'CE Mark\nMDR 2017/745', desc: 'All products certified under the current EU Medical Device Regulation' },
                { icon: '🇺🇸', title: 'FDA Import\nCompliance', desc: 'Documentation supporting US import requirements for each product' },
                { icon: '🌡️', title: 'Cold-Chain\nDocumentation', desc: 'Temperature monitoring records provided with every shipment' },
                { icon: '📋', title: 'Batch\nTraceability', desc: 'Full batch traceability from manufacturer to your clinic address' },
              ].map((item) => (
                <div key={item.icon} style={{ textAlign: 'center', padding: 'var(--space-6)', background: 'var(--color-off-white)', borderRadius: 'var(--radius-xl)', border: '1px solid var(--color-border)' }}>
                  <div style={{ fontSize: '2rem', marginBottom: 'var(--space-3)' }} aria-hidden="true">{item.icon}</div>
                  <h5 style={{ color: 'var(--color-navy)', marginBottom: 'var(--space-2)' }}>{item.title.split('\n').map((l, i) => <span key={i}>{l}{i === 0 && <br />}</span>)}</h5>
                  <p style={{ fontSize: 'var(--text-xs)', color: 'var(--color-text-muted)' }}>{item.desc}</p>
                </div>
              ))}
            </div>
            <div className="highlight-box" style={{ textAlign: 'left', maxWidth: 600, marginInline: 'auto' }}>
              <p><strong>Note for US Purchasers:</strong> All products are sold for practitioner use only. Import and administration must comply with applicable federal and state regulations. Our trade team can provide the specific documentation required in your jurisdiction.</p>
            </div>
          </div>
        </section>

        {/* ── FAQ ── */}
        <section className="section section--slate" aria-labelledby="faq-heading">
          <div className="container container--narrow">
            <div className="section-header">
              <span className="eyebrow">Frequently Asked Questions</span>
              <h2 id="faq-heading">What Practitioners Usually Ask Before Enquiring.</h2>
            </div>
            <FAQAccordion
              idPrefix="home-faq"
              items={[
                { q: 'Who can purchase dermal fillers wholesale from AestheFill Pro?', a: 'Our products are available exclusively to licensed aesthetic practitioners, cosmetic clinics, plastic surgery centres, medical spas, and registered medical wholesalers. Valid professional credentials — including a practitioner licence or business registration number — are verified before account activation. This is a regulatory requirement, not a commercial preference.' },
                { q: 'Are your dermal fillers CE-certified and FDA-compliant?', a: 'Yes. All products in our catalogue carry CE marking under EU MDR 2017/745, the current Medical Device Regulation applicable to all aesthetic injectables sold in the European Union and EEA. For the US market, we provide full import compliance documentation with each order. Certificates are included in every shipment and can be requested prior to purchase.' },
                { q: 'What is the minimum order quantity (MOQ)?', a: 'Minimum order quantities vary by product line and are designed to be accessible for both single-practitioner clinics and multi-location groups. We offer tiered pricing — the more you order, the better your unit economics. Your account manager will provide your personalised MOQ and pricing structure after licence verification. Enquire today to receive a quote specific to your practice volume.' },
                { q: 'How is cold-chain maintained during shipping?', a: 'All orders are packed in validated insulated packaging with temperature-monitoring devices included. Our logistics partners are vetted for healthcare cold-chain compliance. Temperature records from dispatch to delivery are provided with every order — documentation you can share with patients or regulatory inspectors if needed.' },
                { q: 'How long does account verification and first delivery take?', a: 'Licence verification is typically completed within 1 business day of receiving your credentials. Once your account is active and an order is placed, standard dispatch is within 48 hours. Delivery timelines vary by destination — typically 2–5 business days within Europe and 5–10 business days for US shipments, depending on customs.' },
                { q: 'Do you ship to countries outside the USA and EU?', a: 'Currently our primary distribution is the United States and European Union (including UK and EEA countries). We are expanding to additional markets. If your country is not listed, contact our trade team — we assess new markets on a case-by-case basis and may be able to accommodate your enquiry.' },
              ]}
            />
          </div>
        </section>

        {/* ── FINAL CTA ── */}
        <section className="section section--dark" aria-labelledby="final-cta-heading">
          <div className="container" style={{ textAlign: 'center' }}>
            <span className="eyebrow" style={{ color: 'var(--color-gold-light)' }}>Ready to Supply Your Practice?</span>
            <h2 id="final-cta-heading" style={{ color: 'var(--color-white)', marginTop: 'var(--space-3)', marginBottom: 'var(--space-4)', maxWidth: 680, marginInline: 'auto' }}>
              Join 1,200+ Licensed Clinics Who Chose Compliance Over Compromise.
            </h2>
            <p style={{ color: 'rgba(255,255,255,0.70)', fontSize: 'var(--text-xl)', maxWidth: 560, marginInline: 'auto', marginBottom: 'var(--space-8)' }}>
              Submit your trade enquiry today. Licence verification within 1 business day. Your account manager will contact you with pricing within 24 hours.
            </p>
            <div style={{ display: 'flex', justifyContent: 'center', gap: 'var(--space-4)', flexWrap: 'wrap', marginBottom: 'var(--space-8)' }}>
              <Link href="/contact#enquire" className="btn btn--primary btn--lg">Enquire to Purchase →</Link>
              <Link href="/products" className="btn btn--secondary-white btn--lg">Browse Products First</Link>
            </div>
            <p style={{ fontSize: 'var(--text-sm)', color: 'rgba(255,255,255,0.45)' }}>For licensed practitioners and registered clinics only. Professional credentials required.</p>
          </div>
        </section>
      </main>

      <Footer />
      <StickyCTA />
    </>
  );
}

