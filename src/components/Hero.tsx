import React from 'react';

export const Hero: React.FC = () => {
  return (
    <header className="hero">
      <div className="wrap">
        <div>
          <div className="hero-eyebrow">Standards &middot; AI &middot; Interoperability</div>
          <h1>Building Africa&rsquo;s <em>interoperability</em> foundation</h1>
          <p className="hero-tagline">Making interoperability in health, work intelligently.</p>
          <p className="lead">
            We help African health technology teams move from fragmented, proprietary systems to standards-based,
            conformance-validated architectures &mdash; so health data can finally move where it&rsquo;s needed.
          </p>
          <div className="hero-ctas">
            <a href="#sandbox" className="btn btn-primary">Explore the sandbox &rarr;</a>
            <a href="#approach" className="btn btn-outline">See our approach</a>
          </div>
          <div className="hero-stats">
            <div className="hero-stat">
              <div className="num">3</div>
              <div className="lbl">Countries engaged</div>
            </div>
            <div className="hero-stat">
              <div className="num">4+</div>
              <div className="lbl">Systems tested</div>
            </div>
            <div className="hero-stat">
              <div className="num">8+</div>
              <div className="lbl">FHIR Implementation Guides published</div>
            </div>
          </div>
        </div>

        <div className="hero-visual" aria-hidden="true">
          <svg viewBox="0 0 460 440">
            <path className="link-path" d="M 90 70 L 230 130" stroke="#7FD9C9" style={{ animationDelay: '0.1s' }} />
            <path className="link-path" d="M 230 130 L 380 90" stroke="#7FD9C9" style={{ animationDelay: '0.3s' }} />
            <path className="link-path" d="M 230 130 L 150 240" stroke="#E2A33B" style={{ animationDelay: '0.5s' }} />
            <path className="link-path" d="M 230 130 L 330 250" stroke="#4A7C3C" style={{ animationDelay: '0.7s' }} />
            <path className="link-path" d="M 150 240 L 90 350" stroke="#7FD9C9" style={{ animationDelay: '0.9s' }} />
            <path className="link-path" d="M 150 240 L 330 250" stroke="#E2A33B" style={{ animationDelay: '1.05s' }} />
            <path className="link-path" d="M 330 250 L 300 370" stroke="#4A7C3C" style={{ animationDelay: '1.2s' }} />
            <path className="link-path" d="M 90 350 L 300 370" stroke="#7FD9C9" style={{ animationDelay: '1.4s' }} />

            <g className="node-dot" style={{ animationDelay: '0.05s' }}>
              <circle className="node-circle" cx="90" cy="70" r="20" />
              <circle className="node-ring" cx="90" cy="70" r="20" stroke="#7FD9C9" />
              <text className="node-label" x="90" y="46" textAnchor="middle">HOSPITAL</text>
            </g>
            <g className="node-dot" style={{ animationDelay: '0.25s' }}>
              <circle className="node-circle" cx="230" cy="130" r="24" />
              <circle className="node-ring" cx="230" cy="130" r="24" stroke="#E2A33B" strokeWidth="2" />
              <text className="node-label" x="230" y="176" textAnchor="middle" fill="#E2A33B">FHIR CORE</text>
            </g>
            <g className="node-dot" style={{ animationDelay: '0.35s' }}>
              <circle className="node-circle" cx="380" cy="90" r="18" />
              <circle className="node-ring" cx="380" cy="90" r="18" stroke="#4A7C3C" />
              <text className="node-label" x="380" y="68" textAnchor="middle">REGISTRY</text>
            </g>
            <g className="node-dot" style={{ animationDelay: '0.55s' }}>
              <circle className="node-circle" cx="150" cy="240" r="18" />
              <circle className="node-ring" cx="150" cy="240" r="18" stroke="#7FD9C9" />
              <text className="node-label" x="150" y="270" textAnchor="middle">LAB</text>
            </g>
            <g className="node-dot" style={{ animationDelay: '0.75s' }}>
              <circle className="node-circle" cx="330" cy="250" r="18" />
              <circle className="node-ring" cx="330" cy="250" r="18" stroke="#E2A33B" />
              <text className="node-label" x="330" y="230" textAnchor="middle">PHARMACY</text>
            </g>
            <g className="node-dot" style={{ animationDelay: '0.95s' }}>
              <circle className="node-circle" cx="90" cy="350" r="16" />
              <circle className="node-ring" cx="90" cy="350" r="16" stroke="#7FD9C9" />
              <text className="node-label" x="90" y="380" textAnchor="middle">MOBILE</text>
            </g>
            <g className="node-dot" style={{ animationDelay: '1.15s' }}>
              <circle className="node-circle" cx="300" cy="370" r="16" />
              <circle className="node-ring" cx="300" cy="370" r="16" stroke="#4A7C3C" />
              <text className="node-label" x="300" y="400" textAnchor="middle">CLAIMS</text>
            </g>
          </svg>
        </div>
      </div>
    </header>
  );
};
