import React from 'react';

export const CtaBand: React.FC = () => {
  return (
    <section className="cta-band">
      <div className="wrap">
        <h2>Ready to build systems that actually talk to each other?</h2>
        <p>Whether you&rsquo;re a ministry, an implementer, or a funding partner &mdash; there&rsquo;s a place to start.</p>
        <div className="cta-row">
          <a href="#contact" className="btn btn-primary">Get in touch &rarr;</a>
          <a href="#sandbox" className="btn btn-outline">Start with the sandbox</a>
        </div>
      </div>
    </section>
  );
};
