import React from 'react';
import { galleryItems } from '../data/gallery';

interface SandboxSectionProps {
  onOpenLightbox: (index: number) => void;
}

export const SandboxSection: React.FC<SandboxSectionProps> = ({ onOpenLightbox }) => {
  return (
    <section className="section sandbox" id="sandbox">
      <div className="wrap">
        <div className="section-head">
          <div className="eyebrow">The sandbox</div>
          <h2 style={{ color: '#fff' }}>Test before you trust</h2>
          <p>
            Our Interoperability Test Bed validates that health systems conform to FHIR standards &mdash; before they
            ever connect to a live health information exchange.
          </p>
        </div>

        <div className="sandbox-grid">
          <div className="terminal">
            <div className="terminal-head">
              <span></span>
              <span></span>
              <span></span>
            </div>
            <div className="terminal-body">
              <div>
                <span className="t-comment">&gt; validating Claim resource against ke-eclaims-claim</span>
              </div>
              <div>&nbsp;</div>
              <div>
                <span className="t-key">"resourceType"</span>: <span className="t-str">"Claim"</span>,
              </div>
              <div>
                <span className="t-key">"status"</span>: <span className="t-str">"active"</span>{' '}
                <span className="t-pass">✓ valid</span>
              </div>
              <div>
                <span className="t-key">"type.coding.code"</span>: <span className="t-str">"institutional"</span>{' '}
                <span className="t-pass">✓ valid</span>
              </div>
              <div>
                <span className="t-key">"insurer.reference"</span>: <span className="t-str">"Organization/NHIF-KE"</span>{' '}
                <span className="t-pass">✓ valid</span>
              </div>
              <div>
                <span className="t-key">"diagnosis"</span>: [ ] <span className="t-fail">✗ required, min 1</span>
              </div>
              <div>&nbsp;</div>
              <div>
                <span className="t-comment">&gt; 3 of 4 checks passed &middot; 1 blocking error</span>
              </div>
            </div>
          </div>

          <div>
            <ul className="sandbox-list">
              <li>
                <span className="chk">01</span> Sends standardised requests against the relevant national FHIR Implementation
                Guide
              </li>
              <li>
                <span className="chk">02</span> Validates structure, coding, and referential integrity &mdash; not just
                presence of data
              </li>
              <li>
                <span className="chk">03</span> Returns specific, actionable results &mdash; not a vague pass or fail
              </li>
              <li>
                <span className="chk">04</span> Conformant systems receive a certificate, ready for connection to live exchange
              </li>
            </ul>
            <div style={{ marginTop: '32px' }}>
              <a href="#contact" className="btn btn-primary">
                Request sandbox access &rarr;
              </a>
            </div>
          </div>
        </div>

        <div className="sandbox-gallery">
          <div className="sandbox-gallery-head">
            <h3>Inside a real conformance run</h3>
            <p>Screenshots from the live Interoperability Test Bed &mdash; not mockups.</p>
          </div>
          <div className="gallery-scroll">
            {galleryItems.map((item, index) => (
              <div className="gallery-card" key={index}>
                <div className="gallery-chrome">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
                <button
                  type="button"
                  className="gallery-shot"
                  onClick={() => onOpenLightbox(index)}
                  aria-label={`Enlarge screenshot: ${item.step}`}
                >
                  <img src={item.src} alt={item.alt} />
                </button>
                <div className="gallery-cap">
                  <span className="step">{item.step}</span>
                  <p>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
