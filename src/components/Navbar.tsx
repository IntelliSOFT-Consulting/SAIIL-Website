import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const navItems = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'What We Do', href: '/what-we-do' },
  { label: 'Test Bed', href: '/test-bed' },
  { label: 'Resources', href: '/resources' },
  { label: 'Countries & Partners', href: '/countries' },
  { label: 'Contact', href: '/contact' },
];

const transparentRoutes = [
  '/',
  '/about',
  '/what-we-do',
  '/test-bed',
  '/resources',
  '/countries',
  '/contact',
];

export const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const isTransparentRoute = transparentRoutes.includes(location.pathname);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setScrolled(false);
    setMobileMenuOpen(false);
  }, [location.pathname]);

  const isTransparent = isTransparentRoute && !scrolled;

  const isActive = (href: string) => {
    if (href === '/') {
      return location.pathname === '/';
    }
    return location.pathname.startsWith(href);
  };

  return (
    <header className={`navbar ${isTransparent ? 'navbar-transparent' : 'navbar-solid'}`}>
      <div className="navbar-container">
        <div className="navbar-inner">
          <Link to="/" className="navbar-logo">
            SAIIL
          </Link>

          <nav className="navbar-links saiil-desktop">
            {navItems.map((item) => {
              const active = isActive(item.href);
              return (
                <Link
                  key={item.href}
                  to={item.href}
                  className={`navbar-link ${active ? 'active' : ''}`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          <div className="navbar-actions">
            <Link to="/test-bed-access" className="btn-test-bed saiil-desktop">
              Access Test Bed
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </Link>

            <button
              onClick={() => setMobileMenuOpen((prev) => !prev)}
              className="navbar-mobile-toggle saiil-mobile"
              aria-label="Toggle menu"
            >
              <div className="hamburger-box">
                {[0, 1, 2].map((idx) => (
                  <span
                    key={idx}
                    className={`hamburger-line line-${idx} ${mobileMenuOpen ? 'open' : ''}`}
                  />
                ))}
              </div>
            </button>
          </div>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="navbar-mobile-menu">
          {navItems.map((item) => {
            const active = isActive(item.href);
            return (
              <Link
                key={item.href}
                to={item.href}
                className={`navbar-mobile-link ${active ? 'active' : ''}`}
              >
                {item.label}
              </Link>
            );
          })}
          <Link to="/test-bed-access" className="btn-test-bed mobile">
            Access Test Bed
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      )}
    </header>
  );
};

export default Navbar;
