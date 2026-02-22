'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';

export default function Nav() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setMenuOpen((prev) => {
      document.body.style.overflow = prev ? '' : 'hidden';
      return !prev;
    });
  };

  const closeMenu = () => {
    setMenuOpen(false);
    document.body.style.overflow = '';
  };

  const links = [
    { href: '/', label: 'Home' },
    { href: '/products', label: 'Products' },
    { href: '/about', label: 'About' },
    { href: '/contact', label: 'Contact' },
  ];

  return (
    <>
      {/* Announcement bar */}
      <div className="announcement-bar" role="banner">
        <strong>Verified Trade Accounts Only</strong> — All purchases require practitioner licence verification &nbsp;·&nbsp; CE-Certified &amp; FDA-compliant products &nbsp;·&nbsp; Cold-chain guaranteed delivery
      </div>

      {/* Main nav */}
      <nav className={`nav${scrolled ? ' scrolled' : ''}`} role="navigation" aria-label="Main navigation">
        <div className="nav__inner">
          <Link href="/" className="nav__logo" aria-label="AestheFill Pro — Home">
            <div className="nav__logo-mark" aria-hidden="true">A</div>
            <span className="nav__logo-text">
              AestheFill<span> Pro</span>
            </span>
          </Link>

          <ul className="nav__links" role="list">
            {links.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`nav__link${pathname === link.href ? ' active' : ''}`}
                  aria-current={pathname === link.href ? 'page' : undefined}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          <Link href="/contact#enquire" className="nav__cta" aria-label="Enquire about wholesale pricing">
            Enquire to Purchase →
          </Link>

          <button
            className="nav__hamburger"
            onClick={toggleMenu}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          >
            <span aria-hidden="true" />
            <span aria-hidden="true" />
            <span aria-hidden="true" />
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <div
        id="mobile-menu"
        className={`mobile-menu${menuOpen ? ' open' : ''}`}
        role="dialog"
        aria-modal="true"
        aria-label="Mobile navigation"
      >
        {links.map((link) => (
          <Link key={link.href} href={link.href} className="mobile-menu__link" onClick={closeMenu}>
            {link.label}
          </Link>
        ))}
        <div style={{ marginTop: '2rem' }}>
          <Link
            href="/contact#enquire"
            className="btn btn--primary btn--lg"
            style={{ width: '100%', justifyContent: 'center' }}
            onClick={closeMenu}
          >
            Enquire to Purchase →
          </Link>
        </div>
      </div>
    </>
  );
}
