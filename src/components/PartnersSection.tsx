import React from 'react';

export const PartnersSection: React.FC = () => {
  return (
    <section className="section partners" id="partners">
      <div className="wrap">
        <div className="section-head">
          <div className="eyebrow">Countries &amp; partners</div>
          <h2>Working alongside existing systems</h2>
          <p>SAIIL works with &mdash; not instead of &mdash; national institutions and existing digital health investments.</p>
        </div>
        <div className="partner-cols">
          <div className="partner-col">
            <span className="lbl">Governments</span>
            <div className="gov-logos">
              <div className="gov-logo gov-logo-kenya">
                <img src="/Partners/kenya-moh-logo.png" alt="Ministry of Health, Republic of Kenya" />
              </div>
              <div className="gov-logo gov-logo-rwanda">
                <img src="/Partners/rwanda-coat-of-arms.png" alt="Republic of Rwanda coat of arms" />
                <span>Ministry of Health, Rwanda</span>
              </div>
            </div>
          </div>
          <div className="partner-col">
            <span className="lbl">Implementing partners</span>
            <div className="ph">[Partner logos]</div>
          </div>
          <div className="partner-col">
            <span className="lbl">Standards bodies</span>
            <div className="ph">[HL7]</div>
          </div>
          <div className="partner-col">
            <span className="lbl">Funders</span>
            <div className="ph">[Funder logos]</div>
          </div>
        </div>
      </div>
    </section>
  );
};
