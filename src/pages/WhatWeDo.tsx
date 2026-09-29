import { Link } from 'react-router-dom';
import { PageHero } from '../components/PageHero';

interface FeatureItem {
  n: string;
  title: string;
  sub: string;
  desc?: string;
  detail?: string[];
  cta?: {
    label: string;
    href: string;
  };
  isSeven?: boolean;
}

const FEATURES: FeatureItem[] = [
  {
    n: '01',
    title: 'Interoperability',
    sub: 'Connected systems, better care',
    desc: 'SAIIL works with governments, implementers and vendors to build the technical and governance foundations that make health data flow reliably across systems: from EMRs and laboratory platforms to national health information exchanges.',
    detail: [
      'OpenHIE component deployment and configuration',
      'National health information exchange architecture',
      'Shared patient, facility and provider registries',
      'Cross-system integration design and advisory'
    ]
  },
  {
    n: '02',
    title: 'AI & Standards',
    sub: 'Intelligence layered on standards',
    desc: 'AI accelerates implementation without replacing the standard as source of truth. SAIIL deploys AI to reduce friction in standards implementation: terminology mapping, conformance checking and anomaly detection, while keeping every suggestion grounded in FHIR, IHE profiles and relevant Implementation Guides.',
    detail: [
      'Smart Mapping: AI-assisted terminology alignment across ICD-10, SNOMED CT and LOINC',
      'Conformance Copilot: plain-language validation failure explanations and fixes',
      'Anomaly Detection: continuous monitoring of health data flows',
      'Standards-first approach: AI augments, never replaces the specification'
    ]
  },
  {
    n: '03',
    title: 'Testing',
    sub: 'Validate before you trust',
    desc: 'A standard only delivers value when systems conform to it. The SAIIL Interoperability Test Bed provides automated FHIR validation, IHE profile conformance testing and detailed diagnostic reporting, giving implementers and buyers reliable evidence that systems work as specified.',
    detail: [
      'FHIR R4 resource validation against core and African profiles',
      'Implementation Guide conformance testing',
      'Automated regression testing for connected systems',
      'Conformance certification reports for procurement processes'
    ],
    cta: {
      label: 'Explore the Test Bed',
      href: '/test-bed'
    }
  },
  {
    n: '04',
    title: 'Methodology',
    sub: 'Seven services. One engine.',
    isSeven: true
  }
];

interface ServicePillar {
  n: string;
  t: string;
  desc: string;
}

const FOUNDATIONAL_SERVICES: ServicePillar[] = [
  {
    n: '01',
    t: 'Teaming',
    desc: 'People before platforms. Interoperability is a coordination problem first. SAIIL helps build the multi-stakeholder coalitions: governments, implementers, vendors that make connected health systems possible.'
  },
  {
    n: '02',
    t: 'Tooling',
    desc: 'Shared infrastructure and practical implementation tools. Open, reusable technical tooling reduces duplication and gives every actor a common foundation to build on.'
  },
  {
    n: '03',
    t: 'Testing',
    desc: 'Validate systems before they enter production. Rigorous conformance testing ensures that standards-based promises are kept when systems go live.'
  },
  {
    n: '04',
    t: 'Training',
    desc: "Building the skills required to implement and sustain interoperable health systems. Technical capacity is the binding constraint across Africa's digital health ecosystem."
  }
];

const NEW_SERVICES: ServicePillar[] = [
  {
    n: '05',
    t: 'Tracking',
    desc: 'Testing proves a system is conformant on the day. Tracking shows whether it stays that way, through post-certification monitoring and a country interoperability maturity index.'
  },
  {
    n: '06',
    t: 'Trust',
    desc: 'Security, privacy and AI-governance review, so Ministries of Health (MoHs) can adopt AI-assisted tooling with confidence.'
  },
  {
    n: '07',
    t: 'Translation',
    desc: 'Localising standards, terminologies and curricula into French, Portuguese, Arabic and Kiswahili, so SAIIL can scale across the continent.'
  }
];

function ServiceCard({ item, variant }: { item: ServicePillar; variant: 'ochre' | 'teal' }) {
  return (
    <div className="what-service-card">
      <div className="what-service-card-head">
        <span className={`what-service-num what-service-num-${variant}`}>
          {item.n}
        </span>
        <h3 className="what-service-title">{item.t}</h3>
      </div>
      <p className="what-service-desc">{item.desc}</p>
    </div>
  );
}

function MethodologySection() {
  return (
    <div>
      <div className="what-methodology-eyebrow">Methodology: 7T + Innovation</div>
      <h2 className="what-methodology-heading">Seven services. One engine.</h2>
      <p className="what-methodology-intro">
        Technical standards are necessary but not sufficient. Building interoperability in practice takes seven services working in concert, connected by Innovation.
      </p>

      {/* Foundational Services */}
      <div className="what-tier-block">
        <div className="what-tier-header">
          <span className="what-tier-tag-ochre">Foundational</span>
          <div className="what-tier-line-ochre" />
        </div>
        <div className="what-cards-grid">
          {FOUNDATIONAL_SERVICES.map((item) => (
            <ServiceCard key={item.n} item={item} variant="ochre" />
          ))}
        </div>
      </div>

      {/* New Services */}
      <div className="what-tier-block">
        <div className="what-tier-header">
          <span className="what-tier-tag-teal">New</span>
          <div className="what-tier-line-teal" />
        </div>
        <div className="what-cards-grid">
          {NEW_SERVICES.map((item) => (
            <ServiceCard key={item.n} item={item} variant="teal" />
          ))}
        </div>
      </div>

      {/* Innovation Core Pillar */}
      <div className="what-innovation-card">
        <div>
          <div className="what-innovation-icon-wrap">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#B96A45" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="3" />
              <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" />
            </svg>
          </div>
        </div>
        <div>
          <div className="what-innovation-head">
            <span className="what-innovation-tag">Core Pillar</span>
            <h3 className="what-innovation-title">Innovation</h3>
          </div>
          <p className="what-innovation-desc">
            Innovation is the cross-cutting core. It connects all seven services, turning what SAIIL learns into new tools, solutions and ventures.
          </p>
        </div>
      </div>
    </div>
  );
}

function FeatureVisual({ index }: { index: number }) {
  if (index === 0) {
    const nodes = [
      { x: 15, y: 20, label: 'EMR', c: '#B96A45' },
      { x: 50, y: 10, label: 'HMIS', c: '#B88A3B' },
      { x: 85, y: 20, label: 'Lab', c: '#3F7770' },
      { x: 50, y: 45, label: 'FHIR Hub', c: '#FFFFFF', large: true },
      { x: 15, y: 65, label: 'HIE', c: '#3F7770' },
      { x: 50, y: 72, label: 'Gov.', c: '#B88A3B' },
      { x: 85, y: 65, label: 'PHC', c: '#B96A45' }
    ];
    const connections = [
      [0, 3], [1, 3], [2, 3], [3, 4], [3, 5], [3, 6]
    ];

    return (
      <div className="what-visual-topology">
        <div className="what-visual-topology-title">Health System Interoperability</div>
        <svg viewBox="0 0 100 80" className="what-visual-topology-svg">
          {nodes.map((node, i) => (
            <g key={i}>
              <circle
                cx={node.x}
                cy={node.y}
                r={node.large ? 8 : 5}
                fill="rgba(255,255,255,0.06)"
                stroke={node.c}
                strokeWidth={node.large ? 1.5 : 0.8}
              />
              {node.large && <circle cx={node.x} cy={node.y} r={3} fill="#B96A45" />}
              <text
                x={node.x}
                y={node.y + (node.large ? 13 : 9)}
                textAnchor="middle"
                fontSize={node.large ? 3.5 : 3}
                fill="rgba(255,255,255,0.7)"
                fontFamily="IBM Plex Mono, monospace"
              >
                {node.label}
              </text>
            </g>
          ))}
          {connections.map(([fromIdx, toIdx], i) => (
            <line
              key={i}
              x1={nodes[fromIdx].x}
              y1={nodes[fromIdx].y}
              x2={nodes[toIdx].x}
              y2={nodes[toIdx].y}
              stroke="rgba(63,119,112,0.3)"
              strokeWidth="0.4"
            />
          ))}
        </svg>
      </div>
    );
  }

  if (index === 1) {
    return (
      <div className="what-visual-copilot">
        <div className="what-visual-copilot-title">Conformance Copilot</div>
        <div className="what-visual-copilot-error-box">
          <div className="what-visual-copilot-error-head">✗ Patient.birthDate</div>
          <div className="what-visual-copilot-error-msg">
            Required by KE-Core-Patient (1..1). Not present in submitted resource.
          </div>
        </div>
        <div className="what-visual-copilot-sug-box">
          <div className="what-visual-copilot-sug-head">Suggestion:</div>
          <div className="what-visual-copilot-sug-msg">
            Add <span className="what-visual-copilot-highlight">"birthDate": "1985-04-12"</span>. Required by Section 3.2 of KE-Core IG.
          </div>
        </div>
      </div>
    );
  }

  if (index === 2) {
    const outputs = [
      { s: 'pass', m: 'resourceType: Patient: valid' },
      { s: 'pass', m: 'identifier[0].system: valid' },
      { s: 'pass', m: 'name[0].family: present' },
      { s: 'error', m: 'birthDate: required (1..1), missing' },
      { s: 'warn', m: 'address[0].district: recommended' }
    ];

    return (
      <div className="what-visual-output">
        <div className="what-visual-output-title">Validation Output</div>
        {outputs.map((row, i) => (
          <div key={i} className="what-visual-output-row">
            <span
              className={`what-visual-output-icon ${
                row.s === 'pass'
                  ? 'what-status-pass'
                  : row.s === 'error'
                  ? 'what-status-error'
                  : 'what-status-warn'
              }`}
            >
              {row.s === 'pass' ? '✓' : row.s === 'error' ? '✗' : '⚠'}
            </span>
            <span className="what-visual-output-text">{row.m}</span>
          </div>
        ))}
      </div>
    );
  }

  return null;
}

export function WhatWeDo() {
  return (
    <div className="what-page">
      <PageHero
        eyebrow="What We Do"
        headline="Standards, testing and interoperability for African health systems."
        intro="SAIIL works at the implementation layer: turning open standards into operational infrastructure that health systems can actually rely on."
        imageUrl="https://images.unsplash.com/photo-1723987135977-ae935608939e?w=1600&h=700&fit=crop&auto=format"
      />

      {FEATURES.map((item, idx) => (
        <section
          key={item.n}
          className={`what-section ${
            idx % 2 === 0 ? 'what-section-bg-paper' : 'what-section-bg-white'
          }`}
        >
          <div className="what-container">
            {item.isSeven ? (
              <MethodologySection />
            ) : (
              <div className="what-grid">
                <div
                  className={
                    idx % 2 === 1 ? 'what-order-content-odd' : 'what-order-content-even'
                  }
                >
                  <div className="what-num-wrap">
                    <span className="what-num">{item.n}</span>
                  </div>
                  <h2 className="what-title">{item.title}</h2>
                  <p className="what-sub">{item.sub}</p>
                  <p className="what-desc">{item.desc}</p>
                  {item.detail && (
                    <ul className="what-detail-list">
                      {item.detail.map((detail, dIdx) => (
                        <li key={dIdx} className="what-detail-item">
                          <svg
                            width="16"
                            height="16"
                            viewBox="0 0 24 24"
                            fill="none"
                            strokeWidth="2"
                            className="what-detail-icon"
                          >
                            <path d="M9 12l2 2 4-4" />
                            <circle cx="12" cy="12" r="10" />
                          </svg>
                          {detail}
                        </li>
                      ))}
                    </ul>
                  )}
                  {item.cta && (
                    <div className="what-cta-wrap">
                      <Link to={item.cta.href} className="what-cta-link">
                        {item.cta.label}
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                          <path d="M5 12h14M12 5l7 7-7 7" />
                        </svg>
                      </Link>
                    </div>
                  )}
                </div>

                <div
                  className={
                    idx % 2 === 1 ? 'what-order-visual-odd' : 'what-order-visual-even'
                  }
                >
                  <FeatureVisual index={idx} />
                </div>
              </div>
            )}
          </div>
        </section>
      ))}

      {/* CTA Section */}
      <section className="what-cta-section">
        <div className="what-cta-container">
          <h2 className="what-cta-heading">Ready to get started?</h2>
          <p className="what-cta-desc">
            Talk to SAIIL about how we can support your interoperability programme.
          </p>
          <div className="what-cta-btns">
            <Link to="/contact" className="what-cta-primary">
              Contact SAIIL
            </Link>
            <Link to="/test-bed-access" className="what-cta-secondary">
              Access the Test Bed
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default WhatWeDo;
