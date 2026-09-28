import { Link } from 'react-router-dom';

const STAFF_FEATURES = [
  'Production FHIR validator',
  'Full Implementation Guide suite',
  'Conformance certification',
  'Project team dashboards'
];

const PUBLIC_FEATURES = [
  'FHIR R4 resource validation',
  'Core and sample IG profiles',
  'Sandbox environment',
  'No approval required'
];

export function TestBedAccess() {
  return (
    <div className="tbaccess-page">
      <div className="tbaccess-container">
        <div className="tbaccess-header">
          <span className="tbaccess-eyebrow">Test Bed Access</span>
          <h1 className="tbaccess-title">How would you like to access the Test Bed?</h1>
          <p className="tbaccess-subtitle">
            SAIIL operates two separate Test Bed environments. Choose the one that matches your role.
          </p>
        </div>

        <div className="tbaccess-grid">
          {/* Staff Access Card */}
          <div className="tbaccess-card-staff">
            <div className="tbaccess-card-watermark-staff" />
            <div className="tbaccess-badge-staff">Production Environment</div>
            <div className="tbaccess-icon-box-staff">
              <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#B96A45" strokeWidth="1.5">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                <path d="m9 12 2 2 4-4" />
              </svg>
            </div>
            <h2 className="tbaccess-card-title-staff">Staff Access</h2>
            <p className="tbaccess-card-desc-staff">
              For authorised SAIIL staff and project teams. Access the production Test Bed environment with full validation suites, reporting and certification capabilities.
            </p>
            <ul className="tbaccess-list-staff">
              {STAFF_FEATURES.map((item, idx) => (
                <li key={idx} className="tbaccess-item-staff">
                  <span className="tbaccess-dot-staff" />
                  {item}
                </li>
              ))}
            </ul>
            <a href="#staff-login" className="tbaccess-btn-staff">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4" />
                <polyline points="10 17 15 12 10 7" />
                <line x1="15" y1="12" x2="3" y2="12" />
              </svg>
              Staff Login
            </a>
          </div>

          {/* Public Test Bed Card */}
          <div className="tbaccess-card-public">
            <div className="tbaccess-card-watermark-public" />
            <div className="tbaccess-badge-public">Public Environment</div>
            <div className="tbaccess-icon-box-public">
              <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#3F7770" strokeWidth="1.5">
                <circle cx="12" cy="12" r="10" />
                <line x1="2" y1="12" x2="22" y2="12" />
                <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
              </svg>
            </div>
            <h2 className="tbaccess-card-title-public">Public Test Bed</h2>
            <p className="tbaccess-card-desc-public">
              For developers, implementers and organisations who want to explore and experiment with interoperability testing. Free access with a public account.
            </p>
            <ul className="tbaccess-list-public">
              {PUBLIC_FEATURES.map((item, idx) => (
                <li key={idx} className="tbaccess-item-public">
                  <span className="tbaccess-dot-public" />
                  {item}
                </li>
              ))}
            </ul>
            <div className="tbaccess-btn-group-public">
              <a href="#create-account" className="tbaccess-btn-create">
                Create Account
              </a>
              <a href="#public-login" className="tbaccess-btn-login">
                Public Login
              </a>
            </div>
          </div>
        </div>

        <p className="tbaccess-footer-note">
          Not sure which environment is right for you?{' '}
          <Link to="/contact" className="tbaccess-footer-link">
            Contact SAIIL
          </Link>
        </p>
      </div>
    </div>
  );
}

export default TestBedAccess;
