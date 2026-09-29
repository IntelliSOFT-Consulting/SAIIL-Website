import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { PageHero } from '../components/PageHero';

interface Stat {
  value: string;
  label: string;
}

const stats: Stat[] = [
  { value: '4', label: 'Expansion Countries' },
  { value: '4+', label: 'Systems Tested' },
  { value: '8+', label: 'Implementation Guides Published' },
  { value: '10', label: 'Technical Staff Trained' },
];

interface FrameworkService {
  id: string;
  name: string;
  desc: string;
  isNew: boolean;
}

const frameworkServices: FrameworkService[] = [
  {
    id: 'T1',
    name: 'Testing',
    desc: 'Conformance validation against FHIR, IHE and OpenHIE, with an AI copilot that explains failures.',
    isNew: false,
  },
  {
    id: 'T2',
    name: 'Training',
    desc: 'A phased FHIR curriculum, from fundamentals to production, through blended cohorts.',
    isNew: false,
  },
  {
    id: 'T3',
    name: 'Tooling',
    desc: 'Pre-configured open-source infrastructure: HAPI FHIR, test beds, FSH/SUSHI, AI mapping.',
    isNew: false,
  },
  {
    id: 'T4',
    name: 'Teaming',
    desc: '8-12-week cross-functional cohorts and a regional Community of Practice.',
    isNew: false,
  },
  {
    id: 'T5',
    name: 'Tracking',
    desc: 'Post-certification monitoring, dashboards and a country interoperability maturity index.',
    isNew: true,
  },
  {
    id: 'T6',
    name: 'Trust',
    desc: 'Security, privacy and AI-governance review, including bias and safety testing.',
    isNew: true,
  },
  {
    id: 'T7',
    name: 'Translation',
    desc: 'Terminology mapping and localised guides and curricula in French, Portuguese, Arabic and Kiswahili.',
    isNew: true,
  },
];

interface ServiceCardData {
  id: string;
  title: string;
  desc: string;
  icon: React.ReactNode;
}

const serviceGroups: { group: string; accentClass: string; accentColor: string; items: ServiceCardData[] }[] = [
  {
    group: 'Foundational',
    accentClass: 'foundational',
    accentColor: '#B88A3B',
    items: [
      {
        id: 'T1',
        title: 'Testing',
        desc: 'Conformance validation against FHIR, IHE and OpenHIE, with an AI copilot that explains failures.',
        icon: (
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M9 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V9" />
            <polyline points="9 3 9 9 15 9" />
            <path d="M9 12h6M9 16h4" />
          </svg>
        ),
      },
      {
        id: 'T2',
        title: 'Training',
        desc: 'A phased FHIR curriculum, from fundamentals to production, through blended cohorts.',
        icon: (
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
            <path d="M6 12v5c3 3 9 3 12 0v-5" />
          </svg>
        ),
      },
      {
        id: 'T3',
        title: 'Tooling',
        desc: 'Pre-configured open-source infrastructure: HAPI FHIR, test beds, FSH/SUSHI, AI mapping.',
        icon: (
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.77 3.77z" />
          </svg>
        ),
      },
      {
        id: 'T4',
        title: 'Teaming',
        desc: '8-12-week cross-functional cohorts and a regional Community of Practice.',
        icon: (
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
            <circle cx="9" cy="7" r="4" />
            <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
          </svg>
        ),
      },
    ],
  },
  {
    group: 'New',
    accentClass: 'new',
    accentColor: '#3F7770',
    items: [
      {
        id: 'T5',
        title: 'Tracking',
        desc: 'Post-certification monitoring, dashboards and a country interoperability maturity index.',
        icon: (
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
          </svg>
        ),
      },
      {
        id: 'T6',
        title: 'Trust',
        desc: 'Security, privacy and AI-governance review, including bias and safety testing.',
        icon: (
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
          </svg>
        ),
      },
      {
        id: 'T7',
        title: 'Translation',
        desc: 'Terminology mapping and localised guides and curricula in French, Portuguese, Arabic and Kiswahili.',
        icon: (
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="10" />
            <line x1="2" y1="12" x2="22" y2="12" />
            <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
          </svg>
        ),
      },
    ],
  },
];

interface DpiItem {
  level: string;
  scope: string;
  desc: string;
  icon: React.ReactNode;
}

const dpiItems: DpiItem[] = [
  {
    level: 'National',
    scope: 'MoHs',
    desc: 'SAIIL provides the conformance testing, tooling and technical guidance that MoHs need to mandate and verify interoperability across their health ecosystems.',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
        <polyline points="9 22 9 12 15 12 15 22" />
      </svg>
    ),
  },
  {
    level: 'Continental',
    scope: 'Africa CDC PHC Digitalization',
    desc: 'Through alignment with Africa CDC primary health care digitalization, SAIIL supports continental interoperability standards.',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <line x1="2" y1="12" x2="22" y2="12" />
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
      </svg>
    ),
  },
  {
    level: 'Global',
    scope: 'WHO standards alignment',
    desc: 'SAIIL implementations trace to WHO SMART Guidelines, HL7 FHIR and IHE profiles, ensuring African health data meets global interoperability standards.',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
      </svg>
    ),
  },
];

interface JourneyStep {
  era: string;
  year: string;
  title: string;
  location: string;
  desc: string;
  tag: string;
}

const journeySteps: JourneyStep[] = [
  {
    era: 'SIL',
    year: '2022',
    title: 'Standards & Interoperability Lab',
    location: 'Kigali, Rwanda',
    desc: 'Launched with four services: Testing, Training, Tooling and Teaming. Hosted by HealthTech Hub Africa, the lab began conformance testing and implementation guide development across East Africa.',
    tag: '4 services',
  },
  {
    era: 'SAIIL',
    year: '2024',
    title: 'AI Layer Added',
    location: 'Pan-African',
    desc: 'The AI dimension was incorporated: smart mapping, a conformance copilot and anomaly detection, making interoperability work intelligently.',
    tag: 'AI integrated',
  },
  {
    era: 'SAIIL 2.0',
    year: '2025',
    title: '7T + Innovation',
    location: 'Africa-wide',
    desc: 'Three new services added: Tracking, Trust and Translation. SAIIL repositioned as core infrastructure within Digital Public Infrastructure for Health, with Innovation as a cross-cutting engine.',
    tag: 'DPI-H',
  },
];

const countries = ['Rwanda', 'Zambia', 'Ethiopia', 'Burkina Faso'];

const BeforeAfterCard: React.FC = () => {
  return (
    <div className="before-after-card">
      <div className="before-after-title">
        Before vs After
      </div>
      <div className="before-after-flow">
        <div>
          <div className="before-after-col-header fragmented">
            Fragmented
          </div>
          {['EMR A', 'Lab System', 'HMIS', 'Pharmacy'].map((system, i) => (
            <div key={i} className="before-after-pill">
              {system}
            </div>
          ))}
        </div>

        <div className="before-after-arrow">
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </div>

        <div>
          <div className="before-after-col-header connected">
            Connected
          </div>
          {['EMR A', 'Lab System', 'HMIS', 'Pharmacy'].map((system, i) => (
            <div key={i} className="before-after-pill connected">
              {system}
              <span className="status-dot" />
            </div>
          ))}
          <div className="before-after-hub">
            FHIR Hub
          </div>
        </div>
      </div>
    </div>
  );
};

const FrameworkDiagram: React.FC = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div className="framework-diagram-container">
      <svg width="480" height="480" viewBox="0 0 480 480" className="framework-diagram-svg">
        <defs>
          <radialGradient id="hubGlow2" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#B96A45" stopOpacity="0.14" />
            <stop offset="100%" stopColor="#173F3A" stopOpacity="0" />
          </radialGradient>
        </defs>
        <circle cx={240} cy={240} r={210} fill="url(#hubGlow2)" />

        {frameworkServices.map((service, index) => {
          const angle = ((index * 360) / 7 - 90) * (Math.PI / 180);
          const targetX = 240 + 170 * Math.cos(angle);
          const targetY = 240 + 170 * Math.sin(angle);
          const isSelected = hoveredIndex === index;

          return (
            <line
              key={index}
              x1={240 + 54 * Math.cos(angle)}
              y1={240 + 54 * Math.sin(angle)}
              x2={targetX - 38 * Math.cos(angle)}
              y2={targetY - 38 * Math.sin(angle)}
              stroke={isSelected ? (service.isNew ? '#3F7770' : '#B88A3B') : 'rgba(185,106,69,0.18)'}
              strokeWidth={isSelected ? 1.5 : 0.8}
              className="framework-line"
            />
          );
        })}

        {frameworkServices.map((service, index) => {
          const angle = ((index * 360) / 7 - 90) * (Math.PI / 180);
          const posX = 240 + 170 * Math.cos(angle);
          const posY = 240 + 170 * Math.sin(angle);
          const isSelected = hoveredIndex === index;
          const strokeColor = service.isNew ? '#3F7770' : '#B88A3B';

          return (
            <g
              key={index}
              transform={`translate(${posX}, ${posY}) scale(${isSelected ? 1.08 : 1})`}
              className="framework-node-group"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              onClick={() => setHoveredIndex(hoveredIndex === index ? null : index)}
            >
              <circle
                r={38}
                fill={
                  isSelected
                    ? service.isNew
                      ? 'rgba(63,119,112,0.28)'
                      : 'rgba(184,138,59,0.28)'
                    : service.isNew
                    ? 'rgba(63,119,112,0.12)'
                    : 'rgba(184,138,59,0.12)'
                }
                stroke={strokeColor}
                strokeWidth={isSelected ? 1.8 : 1.2}
                className="framework-node-circle"
              />
              <text
                textAnchor="middle"
                dominantBaseline="central"
                fontSize="10"
                fontFamily='"IBM Plex Mono", monospace'
                fontWeight="600"
                fill={strokeColor}
                className="framework-node-text"
              >
                {service.name}
              </text>
            </g>
          );
        })}

        <circle cx={240} cy={240} r={54} fill="rgba(23,63,58,0.95)" stroke="#B96A45" strokeWidth="2" />
        <text
          x={240}
          y={231}
          textAnchor="middle"
          fontSize="9.5"
          fontFamily='"IBM Plex Mono", monospace'
          fontWeight="700"
          fill="#B96A45"
          letterSpacing="0.08em"
        >
          INNOVATION
        </text>
        <text
          x={240}
          y={247}
          textAnchor="middle"
          fontSize="8"
          fontFamily='"IBM Plex Mono", monospace'
          fill="rgba(255,255,255,0.45)"
        >
          core pillar
        </text>
      </svg>

      {hoveredIndex !== null && (
        <div
          className={`framework-diagram-tooltip ${frameworkServices[hoveredIndex].isNew ? 'new' : 'foundational'}`}
        >
          <div
            className={`framework-diagram-tooltip-header ${frameworkServices[hoveredIndex].isNew ? 'new' : 'foundational'}`}
          >
            {frameworkServices[hoveredIndex].id} · {frameworkServices[hoveredIndex].name}
          </div>
          <p className="framework-diagram-tooltip-desc">
            {frameworkServices[hoveredIndex].desc}
          </p>
        </div>
      )}
    </div>
  );
};

export const Home: React.FC = () => {
  return (
    <div>
      <PageHero
        eyebrow="Standards · AI · Interoperability"
        headline="Africa's interoperability and innovation engine for digital health."
        intro="SAIIL brings together standards, technology, testing and expertise to help health systems communicate, exchange data and work better together."
        button={{ label: 'Explore SAIIL', href: '/what-we-do' }}
        imageUrl="https://images.unsplash.com/photo-1666886573531-48d2e3c2b684?w=1600&h=700&fit=crop&auto=format"
      />

      {/* Stats Band */}
      <section className="home-stats-band">
        <div className="home-stats-container">
          <div className="home-stats-grid">
            {stats.map((stat, i) => (
              <div key={i} className="home-stat-card">
                <div className="home-stat-value">
                  {stat.value}
                </div>
                <div className="home-stat-label">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The Challenge Section */}
      <section className="home-challenge-section">
        <div className="home-challenge-container">
          <div className="home-challenge-grid">
            <div>
              <span className="home-challenge-eyebrow">
                The Challenge
              </span>
              <h2 className="home-challenge-heading">
                Health systems across Africa remain fragmented.
              </h2>
              <p className="home-challenge-p">
                A patient's record lives in five systems that cannot speak to each other. A Ministry of Health (MoH) cannot
                aggregate reliable data. A laboratory result never reaches the clinician who ordered it.
              </p>
              <p className="home-challenge-p">
                The infrastructure for digital health exists. The standards exist. What is missing is the implementation
                layer: conformance testing, shared tooling and technical capacity that makes those standards real.
              </p>
            </div>

            <BeforeAfterCard />
          </div>
        </div>
      </section>

      {/* Our Framework Section */}
      <section className="home-framework-section">
        <div className="home-framework-container">
          <div className="home-framework-head">
            <span className="home-framework-eyebrow">
              Our Framework
            </span>
            <h2 className="home-framework-heading">
              Seven services, one engine.
            </h2>
          </div>

          <div className="framework-diagram-wrapper">
            <FrameworkDiagram />
          </div>

          <p className="home-framework-caption">
            Innovation connects all seven: turning what we learn into new tools, solutions and ventures.
          </p>

          {/* Service Groups (Foundational & New) */}
          {serviceGroups.map((group) => (
            <div key={group.group} className="home-services-group">
              <div className="home-services-group-head">
                <span className={`home-services-group-badge ${group.accentClass}`}>
                  {group.group}
                </span>
                <div className={`home-services-group-divider ${group.accentClass}`} />
              </div>
              <div className={`home-services-grid ${group.accentClass}`}>
                {group.items.map((item) => (
                  <div key={item.id} className="home-service-card">
                    <div className={`home-service-icon ${group.accentClass}`}>
                      {item.icon}
                    </div>
                    <div className={`home-service-id ${group.accentClass}`}>
                      {item.id}
                    </div>
                    <h3 className="home-service-title">
                      {item.title}
                    </h3>
                    <p className="home-service-desc">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Digital Public Infrastructure for Health */}
      <section className="home-dpi-section">
        <div className="home-dpi-container">
          <div className="home-dpi-head">
            <span className="home-dpi-eyebrow">
              Digital Public Infrastructure
            </span>
            <h2 className="home-dpi-heading">
              Core infrastructure for Digital Public Infrastructure for Health.
            </h2>
          </div>

          <div className="home-dpi-grid">
            {dpiItems.map((item, i) => (
              <div key={i} className="home-dpi-card">
                <div className="home-dpi-card-header">
                  <div className="home-dpi-icon-wrap">
                    {item.icon}
                  </div>
                  <div>
                    <div className="home-dpi-level">
                      {item.level}
                    </div>
                    <div className="home-dpi-scope">{item.scope}</div>
                  </div>
                </div>
                <p className="home-dpi-desc">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Journey Section */}
      <section className="home-journey-section">
        <div className="home-journey-container">
          <div className="home-journey-head">
            <span className="home-journey-eyebrow">
              Our Journey
            </span>
            <h2 className="home-journey-heading">
              From a standards lab to Africa's interoperability engine.
            </h2>
          </div>

          <div className="saiil-timeline">
            <div className="saiil-timeline-line" />
            {journeySteps.map((step, i) => (
              <div key={i} className="saiil-timeline-step">
                <div className="journey-circle-wrap">
                  <div className="journey-circle">
                    <span className="journey-year">
                      {step.year}
                    </span>
                  </div>
                </div>

                <div className="journey-badges">
                  <span className="journey-era">
                    {step.era}
                  </span>
                  <span className="journey-tag">
                    {step.tag}
                  </span>
                </div>

                <h3 className="journey-title">
                  {step.title}
                </h3>
                <div className="journey-location">
                  {step.location}
                </div>
                <p className="journey-desc">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Test Bed Section */}
      <section className="home-testbed-section">
        <div className="home-testbed-container">
          <div className="home-testbed-head">
            <span className="home-testbed-eyebrow">
              Test Bed
            </span>
            <h2 className="home-testbed-heading">
              Test before you trust.
            </h2>
            <p className="home-testbed-subhead">
              Automated FHIR validation, conformance testing and diagnostic reporting for African health systems.
            </p>
          </div>

          <div className="testbed-console">
            <div className="testbed-console-header">
              <div className="console-dot red" />
              <div className="console-dot yellow" />
              <div className="console-dot green" />
              <span className="console-title">
                SAIIL Test Bed: Validation Console
              </span>
            </div>

            <div className="testbed-console-body">
              <div className="console-muted"># FHIR R4 Validation: Patient Resource</div>
              <div className="console-accent">Validating against KE-Core Patient profile...</div>
              <div>
                <span className="console-check pass">✓</span>
                <span className="console-text"> resourceType: Patient: valid</span>
              </div>
              <div>
                <span className="console-check pass">✓</span>
                <span className="console-text"> identifier[0].system: valid national ID</span>
              </div>
              <div>
                <span className="console-check pass">✓</span>
                <span className="console-text"> name[0].family: required field present</span>
              </div>
              <div>
                <span className="console-check fail">✗</span>
                <span className="console-text"> birthDate: required by KE-Core, not provided</span>
              </div>
              <div>
                <span className="console-check warn">⚠</span>
                <span className="console-text"> address[0].district: recommended, missing</span>
              </div>
              <div className="console-summary">
                Checked 48 constraints · 3 passed · 1 error · 1 warning
              </div>
            </div>
          </div>

          <div className="testbed-cta-wrap">
            <Link to="/test-bed" className="btn-testbed-outline">
              Learn about the Test Bed
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Geographic Reach */}
      <section className="home-reach-section">
        <div className="home-reach-container">
          <span className="home-reach-eyebrow">
            Geographic Reach
          </span>
          <div className="home-reach-header">
            <h2 className="home-reach-heading">
              Expanding across four African countries.
            </h2>
            <Link to="/countries" className="home-reach-link">
              View all countries &amp; partners
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </Link>
          </div>

          <div className="home-reach-pills">
            {countries.map((country, idx) => (
              <span key={idx} className="home-reach-pill">
                {country}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Band */}
      <section className="home-cta-section">
        <div className="home-cta-container">
          <h2 className="home-cta-heading">
            Ready to build systems that actually talk to each other?
          </h2>
          <p className="home-cta-desc">
            Whether you are an MoH, an implementer, a developer or a funder, SAIIL has the tools, standards and
            expertise to support you.
          </p>
          <div className="home-cta-buttons">
            <Link to="/contact" className="btn-cta-primary">
              Get in touch
            </Link>
            <Link to="/test-bed-access" className="btn-cta-secondary">
              Access the Test Bed
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
