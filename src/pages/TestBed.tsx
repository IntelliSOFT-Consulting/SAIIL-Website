import { useState } from 'react';
import { Link } from 'react-router-dom';
import { PageHero } from '../components/PageHero';

interface JourneyStep {
  n: string;
  title: string;
  desc: string;
}

const JOURNEY_STEPS: JourneyStep[] = [
  {
    n: '01',
    title: 'Connect',
    desc: 'Register your system endpoint. SAIIL Test Bed supports REST API connections, file upload and manual FHIR resource entry.'
  },
  {
    n: '02',
    title: 'Run',
    desc: 'Select the Implementation Guide and profile set. Trigger automated validation runs across your FHIR resources.'
  },
  {
    n: '03',
    title: 'Diagnose',
    desc: 'Review detailed diagnostic output. Every failure includes the constraint, the failing value and a plain-language explanation.'
  },
  {
    n: '04',
    title: 'Fix',
    desc: 'Use Conformance Copilot suggestions or consult the linked specification directly. Fix and re-run incrementally.'
  },
  {
    n: '05',
    title: 'Certify',
    desc: 'Once all required constraints pass, generate a signed conformance report suitable for procurement or governance processes.'
  }
];

interface FeatureItem {
  title: string;
  desc: string;
}

const FEATURES: FeatureItem[] = [
  {
    title: 'FHIR Validation',
    desc: 'Structural and semantic validation of FHIR R4 resources against core profiles and African Implementation Guides.'
  },
  {
    title: 'Implementation Guide Testing',
    desc: 'Profile conformance testing against IGs published by SAIIL and partner HL7 Affiliates across Africa.'
  },
  {
    title: 'Automated Test Suites',
    desc: 'Pre-built test scenarios for common African health use cases: ANC, HIV, TB, immunisation, laboratory.'
  },
  {
    title: 'Diagnostic Reports',
    desc: 'Machine-readable and human-readable conformance reports with constraint-level granularity.'
  },
  {
    title: 'Conformance Certification',
    desc: 'Signed certificates for procurement, policy and governance submissions.'
  },
  {
    title: 'Regression Testing',
    desc: 'Track conformance over time. Catch regressions before they reach production environments.'
  }
];

const VALIDATION_TABS = [
  'Patient (3)',
  'Observation (12)',
  'Encounter (5)',
  'DiagnosticReport (2)'
];

const VALIDATION_RESULTS = [
  {
    status: 'pass',
    msg: 'resourceType: Patient: valid',
    path: 'Patient'
  },
  {
    status: 'pass',
    msg: 'identifier[0].system: recognized ZA national identifier',
    path: 'Patient.identifier[0]'
  },
  {
    status: 'error',
    msg: 'birthDate: required by ZA-Core-Patient (1..1), not present',
    path: 'Patient.birthDate'
  },
  {
    status: 'warning',
    msg: 'address[0].district: recommended by ZA-Core, missing',
    path: 'Patient.address[0]'
  },
  {
    status: 'pass',
    msg: 'name[0].family: required, present',
    path: 'Patient.name[0]'
  }
];

export function TestBed() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="testbed-page">
      <PageHero
        eyebrow="Test Bed"
        headline="Test before you trust."
        intro="The SAIIL Interoperability Test Bed provides automated FHIR validation, Implementation Guide conformance testing and diagnostic reporting for African health systems."
        button={{
          label: 'Access the Test Bed',
          href: '/test-bed-access'
        }}
        imageUrl="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1600&h=700&fit=crop&auto=format"
      />

      {/* Features */}
      <section className="testbed-features-section">
        <div className="testbed-features-container">
          <span className="testbed-features-eyebrow">What the Test Bed does</span>
          <h2 className="testbed-features-heading">Comprehensive conformance testing.</h2>

          <div className="testbed-features-grid">
            {FEATURES.map((feature, idx) => (
              <div key={idx} className="testbed-feature-card">
                <div className="testbed-feature-icon-wrap">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#3F7770" strokeWidth="1.5">
                    <path d="M9 12l2 2 4-4m6 2a9 9 0 1 1-18 0 9 9 0 0 1 18 0z" />
                  </svg>
                </div>
                <h3 className="testbed-feature-title">{feature.title}</h3>
                <p className="testbed-feature-desc">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testing Journey */}
      <section className="testbed-journey-section">
        <div className="testbed-journey-container">
          <div className="testbed-journey-header">
            <span className="testbed-journey-eyebrow">Testing Journey</span>
            <h2 className="testbed-journey-heading">Five steps to conformance.</h2>
          </div>

          <div className="testbed-journey-list">
            {JOURNEY_STEPS.map((step, idx) => (
              <div key={idx} className="testbed-journey-item">
                <div className="testbed-journey-step-col">
                  <span className="testbed-journey-num">{step.n}</span>
                  <span className="testbed-journey-title">{step.title}</span>
                </div>
                <div className="testbed-journey-body-col">
                  <p className="testbed-journey-desc">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Validation Interface */}
      <section className="testbed-demo-section">
        <div className="testbed-demo-container">
          <div className="testbed-demo-header">
            <h2 className="testbed-demo-heading">The validation interface.</h2>
            <p className="testbed-demo-sub">
              Detailed, actionable output for every validation run.
            </p>
          </div>

          <div className="testbed-browser-card">
            <div className="testbed-browser-bar">
              <div className="testbed-dot-red" />
              <div className="testbed-dot-yellow" />
              <div className="testbed-dot-green" />
              <div className="testbed-browser-url">testbed.saiil.africa/validate</div>
            </div>

            <div className="testbed-browser-body">
              <div className="testbed-browser-sidebar">
                <div className="testbed-sidebar-head">Validation Run</div>
                {VALIDATION_TABS.map((tab, idx) => (
                  <div
                    key={idx}
                    onClick={() => setActiveTab(idx)}
                    className={`testbed-sidebar-tab ${
                      activeTab === idx
                        ? 'testbed-sidebar-tab-active'
                        : 'testbed-sidebar-tab-inactive'
                    }`}
                  >
                    {tab}
                  </div>
                ))}
              </div>

              <div className="testbed-browser-main">
                <div className="testbed-results-header">
                  <div className="testbed-results-title">Patient Resource Validation</div>
                  <div className="testbed-results-pills">
                    <span className="testbed-pill-passed">31 passed</span>
                    <span className="testbed-pill-error">1 error</span>
                    <span className="testbed-pill-warn">1 warning</span>
                  </div>
                </div>

                {VALIDATION_RESULTS.map((res, idx) => (
                  <div key={idx} className="testbed-result-item">
                    <span
                      className={`testbed-result-item-icon ${
                        res.status === 'pass'
                          ? 'testbed-result-status-pass'
                          : res.status === 'error'
                          ? 'testbed-result-status-error'
                          : 'testbed-result-status-warn'
                      }`}
                    >
                      {res.status === 'pass' ? '✓' : res.status === 'error' ? '✗' : '⚠'}
                    </span>
                    <div>
                      <div className="testbed-result-item-msg">{res.msg}</div>
                      <div className="testbed-result-item-path">{res.path}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="testbed-cta-section">
        <div className="testbed-cta-container">
          <h2 className="testbed-cta-heading">Start testing today.</h2>
          <div className="testbed-cta-btns">
            <Link to="/test-bed-access" className="testbed-cta-primary">
              Access the Test Bed
            </Link>
            <Link to="/contact" className="testbed-cta-secondary">
              Request a demonstration
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default TestBed;
