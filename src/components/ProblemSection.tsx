import React from 'react';

export const ProblemSection: React.FC = () => {
  return (
    <section className="section problem">
      <div className="wrap">
        <p className="problem-quote">
          Africa carries <span>24% of the global disease burden</span> but a fraction of the world&rsquo;s accessible,
          structured health data. Not because the data doesn&rsquo;t exist &mdash; but because the systems holding it can&rsquo;t
          talk to each other.
        </p>
        <div className="stat-grid">
          <div className="stat-card">
            <div className="num">4+</div>
            <div className="lbl">Health systems tested for FHIR conformance</div>
          </div>
          <div className="stat-card">
            <div className="num">8+</div>
            <div className="lbl">National Implementation Guides published</div>
          </div>
          <div className="stat-card">
            <div className="num">10</div>
            <div className="lbl">Technical staff trained through SAIIL cohorts</div>
          </div>
        </div>
      </div>
    </section>
  );
};
