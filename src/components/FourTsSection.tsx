import React from 'react';

interface Pillar {
  number: string;
  title: string;
  tag: string;
  description: string;
}

const pillars: Pillar[] = [
  {
    number: '01',
    title: 'Teaming',
    tag: 'People before platforms',
    description:
      'Cross-functional cohorts of developers, clinical informaticians, and ministry representatives come together in structured mentorship cycles - typically 8–12 weeks - learning to build and govern interoperable systems together, not in isolation.',
  },
  {
    number: '02',
    title: 'Tooling',
    tag: 'Shared infrastructure',
    description:
      'Every team gets access to pre-configured, open-source interoperability infrastructure - HAPI FHIR, the SAIIL Test Bed, and FSH/SUSHI authoring environments - so no one starts from zero.',
  },
  {
    number: '03',
    title: 'Testing',
    tag: 'Trust, but verify',
    description:
      'Systems are tested - automatically and repeatedly - against national and international FHIR standards using the SAIIL sandbox. Conformance isn’t declared. It’s demonstrated.',
  },
  {
    number: '04',
    title: 'Training',
    tag: 'Fundamentals to production',
    description:
      'A phased curriculum takes teams from FHIR basics through profile authoring to full cross-system integration testing - contextualised to African health system realities, delivered low-bandwidth and train-the-trainer ready.',
  },
];

export const FourTsSection: React.FC = () => {
  return (
    <section className="section fourTs" id="approach">
      <div className="wrap">
        <div className="section-head">
          <div className="eyebrow">Our approach</div>
          <h2>Four pillars, one methodology</h2>
          <p>
            Every SAIIL engagement moves through the same sequence &mdash; each pillar building on the one before it: people
            first, then tools, then proof, then transfer of knowledge.
          </p>
        </div>

        <div className="t-sequence">
          {pillars.map((pillar) => (
            <div className="t-row" key={pillar.number}>
              <div className="t-num">
                {pillar.number}
                <b>T</b>
              </div>
              <div>
                <h3>{pillar.title}</h3>
                <span className="t-tag">{pillar.tag}</span>
              </div>
              <p>{pillar.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
