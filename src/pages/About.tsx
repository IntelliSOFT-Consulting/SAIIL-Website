import { Link } from 'react-router-dom';
import { PageHero } from '../components/PageHero';

interface JourneyStep {
  era: string;
  year: string;
  title: string;
  location: string;
  desc: string;
  tag: string;
}

const JOURNEY_STEPS: JourneyStep[] = [
  {
    era: 'SIL',
    year: '2022',
    title: 'Standards & Interoperability Lab',
    location: 'Kigali, Rwanda',
    desc: 'Launched with four services: Testing, Training, Tooling and Teaming. Hosted by HealthTech Hub Africa, the lab began conformance testing and implementation guide development across East Africa.',
    tag: '4 services'
  },
  {
    era: 'SAIIL',
    year: '2024',
    title: 'AI Layer Added',
    location: 'Pan-African',
    desc: 'The AI dimension was incorporated: smart mapping, a conformance copilot and anomaly detection, making interoperability work intelligently.',
    tag: 'AI integrated'
  },
  {
    era: 'SAIIL 2.0',
    year: '2025',
    title: '7T + Innovation',
    location: 'Africa-wide',
    desc: 'Three new services added: Tracking, Trust and Translation. SAIIL repositioned as core infrastructure within Digital Public Infrastructure for Health, with Innovation as a cross-cutting engine.',
    tag: 'DPI-H'
  }
];

interface ValueProp {
  title: string;
  body: string;
}

const VALUE_PROPS: ValueProp[] = [
  {
    title: 'Why interoperability matters',
    body: 'When health systems cannot share data, patients are invisible across care settings. Clinicians make decisions without full context. MoHs cannot plan with incomplete information. Interoperability is not a technical nice-to-have: it is a patient safety imperative.'
  },
  {
    title: 'The problem with fragmented systems',
    body: 'Most African countries have invested in multiple digital health systems: EMRs, LMIS, disease surveillance platforms, health information exchanges. These were often procured separately, built on different standards and deployed without interoperability requirements. The result is data silos.'
  },
  {
    title: "SAIIL's role",
    body: 'SAIIL occupies the space between specification and implementation. We translate standards like FHIR, IHE profiles and OpenHIE architecture into operational infrastructure: test beds, implementation guides, training and shared tooling that implementation teams can actually use.'
  }
];

interface PartnerType {
  title: string;
  desc: string;
}

const PARTNER_TYPES: PartnerType[] = [
  {
    title: 'MoHs',
    desc: 'National digital health strategies, policy alignment, conformance requirements and governance frameworks.'
  },
  {
    title: 'Implementing Partners',
    desc: 'NGOs, contractors and consulting organisations deploying digital health systems across African health programmes.'
  },
  {
    title: 'Health Technology Vendors',
    desc: 'EMR, LMIS, laboratory and diagnostic companies building FHIR-compliant products for African markets.'
  },
  {
    title: 'Standards Bodies',
    desc: 'HL7 Affiliates, IHE International and regional standards organisations developing African implementation guides.'
  },
  {
    title: 'Funders',
    desc: 'Bilateral donors, foundations and multilateral organisations investing in digital health interoperability infrastructure.'
  },
  {
    title: 'Developers',
    desc: 'Individual health informatics professionals, FHIR developers and technical teams building connected health systems.'
  }
];

export function About() {
  return (
    <div className="about-page">
      <PageHero
        eyebrow="About SAIIL"
        headline="Africa's interoperability and innovation engine for digital health."
        intro="SAIIL is a technical standards organisation working across Africa to make digital health data interoperable: reliably, securely and at scale."
        imageUrl="https://images.unsplash.com/photo-1683109944202-e74e2adbc8cf?w=1600&h=700&fit=crop&auto=format"
      />

      {/* Who We Are */}
      <section className="about-intro-section">
        <div className="about-intro-container">
          <div className="about-intro-content">
            <span className="about-intro-eyebrow">Who We Are</span>
            <h2 className="about-intro-heading">An African standards and interoperability laboratory.</h2>
            <p className="about-intro-p">
              The Standards, AI &amp; Interoperability Lab (SAIIL) was founded to address a specific and persistent failure in African digital health: well-intentioned systems that cannot exchange data.
            </p>
            <p className="about-intro-p">
              We work at the implementation layer: building conformance testing infrastructure, shared tooling, training programmes and technical guidance that enable health systems to interoperate in practice, not just in principle.
            </p>
            <p className="about-intro-p about-intro-p-last">
              SAIIL is embedded in the African health ecosystem, partnering with Ministries of Health (MoHs), implementing organisations, standards bodies and funders across Sub-Saharan Africa.
            </p>
          </div>

          <div className="about-intro-cards">
            {VALUE_PROPS.map((prop, idx) => (
              <div key={idx} className="about-intro-card">
                <h3 className="about-intro-card-title">{prop.title}</h3>
                <p className="about-intro-card-desc">{prop.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Journey */}
      <section className="about-journey-section">
        <div className="about-journey-container">
          <div className="about-journey-header">
            <span className="about-journey-eyebrow">Our Journey</span>
            <h2 className="about-journey-heading">From a standards lab to Africa's interoperability engine.</h2>
          </div>

          <div className="about-timeline">
            <div className="about-timeline-line" />
            {JOURNEY_STEPS.map((step, idx) => (
              <div key={idx} className="about-timeline-step">
                <div className="about-timeline-circle-wrap">
                  <div className="about-timeline-circle">
                    <span className="about-timeline-year">{step.year}</span>
                  </div>
                </div>

                <div className="about-timeline-meta">
                  <span className="about-timeline-era">{step.era}</span>
                  <span className="about-timeline-tag">{step.tag}</span>
                </div>

                <h3 className="about-timeline-title">{step.title}</h3>
                <div className="about-timeline-location">{step.location}</div>
                <p className="about-timeline-desc">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partnerships */}
      <section className="about-partners-section">
        <div className="about-partners-container">
          <span className="about-partners-eyebrow">Partnerships</span>
          <h2 className="about-partners-heading">Who SAIIL works with.</h2>

          <div className="about-partners-grid">
            {PARTNER_TYPES.map((partner, idx) => (
              <div key={idx} className="about-partner-card">
                <div className="about-partner-icon-wrap">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                    <circle cx="9" cy="7" r="4" />
                    <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
                  </svg>
                </div>
                <h3 className="about-partner-title">{partner.title}</h3>
                <p className="about-partner-desc">{partner.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Work with SAIIL / CTA */}
      <section className="about-cta-section">
        <div className="about-cta-container">
          <h2 className="about-cta-heading">Work with SAIIL.</h2>
          <p className="about-cta-desc">
            If you are working on digital health interoperability in Africa, we want to hear from you.
          </p>
          <Link to="/contact" className="about-cta-btn">
            Get in touch
          </Link>
        </div>
      </section>
    </div>
  );
}

export default About;
