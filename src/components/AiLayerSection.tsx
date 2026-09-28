import React from 'react';

export const AiLayerSection: React.FC = () => {
  return (
    <section className="section ai-layer" id="ai">
      <div className="wrap">
        <div className="section-head">
          <div className="eyebrow">Where AI fits</div>
          <h2>Intelligence layered on standards, not instead of them</h2>
          <p>
            FHIR and IHE profiles set the rules. AI helps teams get there faster &mdash; suggesting mappings, explaining
            failures in plain language, and catching data-quality issues before they reach the test bed. The standard
            stays the source of truth; the ministry stays in control.
          </p>
        </div>

        <div className="ai-grid">
          <div className="ai-panel" aria-hidden="true">
            <svg viewBox="0 0 450 300">
              <g className="ai-mesh">
                <line x1="40" y1="30" x2="225" y2="15" />
                <line x1="40" y1="30" x2="225" y2="80" />
                <line x1="40" y1="95" x2="225" y2="80" />
                <line x1="40" y1="95" x2="225" y2="145" />
                <line x1="40" y1="160" x2="225" y2="145" />
                <line x1="40" y1="160" x2="225" y2="210" />
                <line x1="40" y1="225" x2="225" y2="210" />
                <line x1="40" y1="225" x2="225" y2="275" />
                <line x1="225" y1="15" x2="410" y2="80" />
                <line x1="225" y1="80" x2="410" y2="80" />
                <line x1="225" y1="80" x2="410" y2="150" />
                <line x1="225" y1="145" x2="410" y2="80" />
                <line x1="225" y1="145" x2="410" y2="150" />
                <line x1="225" y1="145" x2="410" y2="220" />
                <line x1="225" y1="210" x2="410" y2="150" />
                <line x1="225" y1="210" x2="410" y2="220" />
                <line x1="225" y1="275" x2="410" y2="220" />
              </g>

              <path
                className="ai-pulse-path"
                pathLength={1}
                d="M40 95 L225 80 L410 80"
                stroke="#7FD9C9"
                style={{ animationDelay: '0.1s' }}
              />
              <path
                className="ai-pulse-path"
                pathLength={1}
                d="M40 160 L225 145 L410 150"
                stroke="#E2A33B"
                style={{ animationDelay: '0.5s' }}
              />
              <path
                className="ai-pulse-path"
                pathLength={1}
                d="M40 225 L225 210 L410 220"
                stroke="#8FD08A"
                style={{ animationDelay: '0.9s' }}
              />

              <circle className="ai-node" cx="40" cy="30" r="6" stroke="#7FD9C9" />
              <circle className="ai-node" cx="40" cy="95" r="6" stroke="#7FD9C9" />
              <circle className="ai-node" cx="40" cy="160" r="6" stroke="#7FD9C9" />
              <circle className="ai-node" cx="40" cy="225" r="6" stroke="#7FD9C9" />

              <circle className="ai-node" cx="225" cy="15" r="6" stroke="#E2A33B" />
              <circle className="ai-node" cx="225" cy="80" r="6" stroke="#E2A33B" />
              <circle className="ai-node ai-node-active" cx="225" cy="145" r="7.5" stroke="#E2A33B" strokeWidth="1.8" />
              <circle className="ai-node" cx="225" cy="210" r="6" stroke="#E2A33B" />
              <circle className="ai-node" cx="225" cy="275" r="6" stroke="#E2A33B" />
              <path
                d="M225 141 L226.3 143.7 L229 145 L226.3 146.3 L225 149 L223.7 146.3 L221 145 L223.7 143.7 Z"
                fill="#E2A33B"
              />

              <circle className="ai-node" cx="410" cy="80" r="6" stroke="#8FD08A" />
              <circle className="ai-node" cx="410" cy="150" r="6" stroke="#8FD08A" />
              <circle className="ai-node" cx="410" cy="220" r="6" stroke="#8FD08A" />

              <text className="node-label" x="40" y="256" textAnchor="middle">
                SYSTEMS
              </text>
              <text className="node-label" x="225" y="294" textAnchor="middle" fill="#E2A33B">
                AI INFERENCE
              </text>
              <text className="node-label" x="410" y="248" textAnchor="middle">
                FHIR OUTPUT
              </text>
            </svg>
          </div>

          <ul className="ai-list">
            <li className="ai-item">
              <span className="ai-ico">
                <svg viewBox="0 0 24 24" fill="none" stroke="#0F6E64" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="5" cy="12" r="2" />
                  <circle cx="19" cy="12" r="2" />
                  <path d="M7 12 H14 M12 8.5 L16 12 L12 15.5" />
                </svg>
              </span>
              <div>
                <h4>Smart mapping</h4>
                <p>
                  AI analyzes existing FHIR R4 resources and implementation requirements to recommend mappings to profiles,
                  extensions, and value sets, helping implementers accelerate FSH-based implementation guide development.
                </p>
              </div>
            </li>
            <li className="ai-item">
              <span className="ai-ico">
                <svg viewBox="0 0 24 24" fill="none" stroke="#0F6E64" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 5.5h16a1.5 1.5 0 011.5 1.5v7a1.5 1.5 0 01-1.5 1.5H10l-4.5 3.5V15.5H4A1.5 1.5 0 012.5 14V7A1.5 1.5 0 014 5.5z" />
                  <path d="M8 10h8 M8 12.5h5" strokeWidth="1.5" />
                </svg>
              </span>
              <div>
                <h4>Conformance copilot</h4>
                <p>
                  When validation fails, AI explains why in plain language &mdash; not just an error code &mdash; and
                  points to the specific rule in the implementation guide.
                </p>
              </div>
            </li>
            <li className="ai-item">
              <span className="ai-ico">
                <svg viewBox="0 0 24 24" fill="none" stroke="#0F6E64" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M2 13h4l2.5-7 3 12 2.5-9 2 4h6" />
                </svg>
              </span>
              <div>
                <h4>Anomaly detection</h4>
                <p>
                  Pattern recognition flags likely data-quality issues &mdash; duplicate identifiers, coding drift, missing
                  references &mdash; before they ever reach the test bed.
                </p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};
