import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer>
      <div className="wrap">
        <div className="footer-grid">
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '11px' }}>
              <img className="logo-mark-img" style={{ height: '50px' }} src="/saiil-logo-icon.png" alt="SAIIL" />
              <span className="logo-word" style={{ color: '#fff', fontSize: '20px' }}>
                SAIIL
              </span>
            </div>
            <p
              style={{
                marginTop: '14px',
                fontFamily: "'Fraunces', serif",
                fontStyle: 'italic',
                fontSize: '14.5px',
                color: '#7FD9C9',
                maxWidth: '260px',
              }}
            >
              Making interoperability in health, work intelligently.
            </p>
            <p
              style={{
                marginTop: '10px',
                fontSize: '13.5px',
                color: 'rgba(255, 255, 255, 0.5)',
                maxWidth: '260px',
              }}
            >
              Standards, Artificial Intelligence &amp; Interoperability Lab &mdash; building Africa&rsquo;s
              interoperability foundation.
            </p>
          </div>

          <div>
            <h4>Approach</h4>
            <ul>
              <li><a href="#approach">The 4Ts</a></li>
              <li><a href="#sandbox">The sandbox</a></li>
              <li><a href="#approach">Case studies</a></li>
            </ul>
          </div>

          <div>
            <h4>Resources</h4>
            <ul>
              <li><a href="#sandbox">FHIR implementation guides</a></li>
              <li><a href="#sandbox">Documentation</a></li>
              <li><a href="#contact">Get involved</a></li>
            </ul>
          </div>

          <div>
            <h4>Contact</h4>
            <ul>
              <li><a href="#contact">Talk to our team</a></li>
              <li><a href="mailto:davidmukungi@saiil.africa">davidmukungi@saiil.africa</a></li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <span>&copy; {new Date().getFullYear()} SAIIL</span>
          <span className="mono">v0.1</span>
        </div>
      </div>
    </footer>
  );
};
