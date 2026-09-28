import React from 'react';
import { Link } from 'react-router-dom';

export const Footer: React.FC = () => {
  return (
    <footer className="site-footer">
      <div className="footer-container">
        <div className="footer-grid">
          <div className="footer-col-brand">
            <div className="footer-brand-title">
              <span className="footer-brand-name">
                SAIIL
              </span>
            </div>
            <p className="footer-brand-desc">
              Standards, AI &amp; Interoperability Lab. Building the infrastructure for connected health systems across
              Africa.
            </p>
          </div>

          <div className="footer-col">
            <h4 className="footer-heading">
              Organisation
            </h4>
            {[
              { label: 'About', href: '/about' },
              { label: 'What We Do', href: '/what-we-do' },
              { label: 'Test Bed', href: '/test-bed' },
            ].map((item) => (
              <div key={item.label} className="footer-link-item">
                <Link to={item.href} className="footer-link">
                  {item.label}
                </Link>
              </div>
            ))}
          </div>

          <div className="footer-col">
            <h4 className="footer-heading">
              Resources
            </h4>
            {[
              { label: 'Resources', href: '/resources' },
              { label: 'Countries & Partners', href: '/countries' },
              { label: 'Contact', href: '/contact' },
            ].map((item) => (
              <div key={item.label} className="footer-link-item">
                <Link to={item.href} className="footer-link">
                  {item.label}
                </Link>
              </div>
            ))}
          </div>

          <div className="footer-col">
            <h4 className="footer-heading">
              Test Bed
            </h4>
            <Link to="/test-bed-access" className="footer-btn-test-bed">
              Access Test Bed
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </Link>
            <p className="footer-btn-desc">
              FHIR validation &amp; conformance testing for health systems.
            </p>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="footer-copyright">
            &copy; 2025 SAIIL Africa. All rights reserved.
          </p>
          <div className="footer-legal-links">
            {['Privacy Policy', 'Terms of Use', 'Accessibility'].map((item) => (
              <span key={item} className="footer-legal-item">
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
