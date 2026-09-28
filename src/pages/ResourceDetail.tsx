import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

const HEADER_OFFSET = 64;
const SCROLL_OFFSET = HEADER_OFFSET + 16;

interface SectionItem {
  id: string;
  title: string;
  level: number;
}

const SECTIONS: SectionItem[] = [
  { id: 'sec-1', title: '1. Introduction', level: 1 },
  { id: 'sec-1-1', title: '1.1 Background', level: 2 },
  { id: 'sec-1-2', title: '1.2 Scope', level: 2 },
  { id: 'sec-2', title: '2. Technical Context', level: 1 },
  { id: 'sec-2-1', title: '2.1 FHIR R4 Overview', level: 2 },
  { id: 'sec-2-2', title: '2.2 Profile Constraints', level: 2 },
  { id: 'sec-3', title: '3. Resource Definitions', level: 1 },
  { id: 'sec-3-1', title: '3.1 Patient Profile', level: 2 },
  { id: 'sec-3-2', title: '3.2 Encounter Profile', level: 2 },
  { id: 'sec-3-3', title: '3.3 Observation Profile', level: 2 },
  { id: 'sec-4', title: '4. Conformance Requirements', level: 1 },
  { id: 'sec-5', title: '5. Terminology Bindings', level: 1 },
  { id: 'sec-6', title: '6. Examples', level: 1 }
];

const DOC_INFO = [
  { label: 'Type', value: 'Concept Note' },
  { label: 'Published', value: '2026' },
  { label: 'Pages', value: '21' },
  { label: 'Status', value: 'Current' },
  { label: 'Publisher', value: 'SAIIL Africa' },
  { label: 'Language', value: 'English' }
];

export function ResourceDetail() {
  const [activeSec, setActiveSec] = useState('sec-1');
  const [fontSize, setFontSize] = useState(16);
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    observerRef.current?.disconnect();
    const elements = SECTIONS.map((s) => document.getElementById(s.id)).filter(Boolean) as HTMLElement[];

    observerRef.current = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visible.length > 0) {
          setActiveSec(visible[0].target.id);
        }
      },
      {
        rootMargin: `-${SCROLL_OFFSET}px 0px -60% 0px`,
        threshold: 0
      }
    );

    elements.forEach((el) => observerRef.current?.observe(el));
    return () => observerRef.current?.disconnect();
  }, []);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (!el) return;
    const top = el.getBoundingClientRect().top + window.scrollY - SCROLL_OFFSET;
    window.scrollTo({ top, behavior: 'smooth' });
    setActiveSec(id);
  };

  return (
    <div className="resdetail-page">
      {/* Breadcrumb Bar */}
      <div className="resdetail-breadcrumb-bar">
        <div className="resdetail-breadcrumb-container">
          <Link to="/resources" className="resdetail-breadcrumb-link">
            Resources
          </Link>
          <span className="resdetail-breadcrumb-sep">/</span>
          <span className="resdetail-breadcrumb-current">
            SAIIL Next Generation: Concept Note
          </span>
        </div>
      </div>

      <div className="resdetail-layout">
        {/* Left Sidebar: Table of Contents */}
        <aside className="resdetail-toc-sidebar">
          <div className="resdetail-toc-title">Table of Contents</div>
          {SECTIONS.map((sec) => {
            const isActive = activeSec === sec.id;
            return (
              <button
                key={sec.id}
                onClick={() => scrollToSection(sec.id)}
                className={`resdetail-toc-btn ${
                  sec.level === 1 ? 'resdetail-toc-btn-l1' : 'resdetail-toc-btn-l2'
                } ${isActive ? 'resdetail-toc-btn-active' : 'resdetail-toc-btn-inactive'}`}
              >
                {sec.title}
              </button>
            );
          })}
        </aside>

        {/* Main Article Content */}
        <main className="resdetail-main">
          <div className="resdetail-meta-bar">
            <div className="resdetail-meta-text">Concept Note · 2026 · 21 pages</div>
            <div className="resdetail-font-controls">
              <button
                onClick={() => setFontSize((s) => Math.max(13, s - 1))}
                className="resdetail-font-btn"
                title="Decrease font size"
              >
                A-
              </button>
              <button
                onClick={() => setFontSize((s) => Math.min(20, s + 1))}
                className="resdetail-font-btn"
                title="Increase font size"
              >
                A+
              </button>
            </div>
          </div>

          <article className={`resdetail-article font-size-${fontSize}`}>
            <h1 className="resdetail-title">SAIIL Next Generation: Concept Note</h1>
            <p className="resdetail-subtitle">
              From a Standards Lab to Africa's Interoperability &amp; Innovation Engine
            </p>

            <div className="resdetail-badges-row">
              <span className="resdetail-pill-type">Concept Note</span>
              <span className="resdetail-pill-meta">2026</span>
              <span className="resdetail-pill-meta">21 pages</span>
            </div>

            <h2 id="sec-1" className="resdetail-sec-h2 resdetail-sec-h2-first">
              1. Introduction
            </h2>
            <p className="resdetail-paragraph">
              SAIIL was established to address a specific and persistent failure in African digital health: well-intentioned systems that cannot exchange data. This concept note describes SAIIL's evolution from a four-service standards laboratory to a seven-service interoperability and innovation engine positioned within the Digital Public Infrastructure for Health.
            </p>

            <h3 id="sec-1-1" className="resdetail-sec-h3">
              1.1 Background
            </h3>
            <p className="resdetail-paragraph">
              The Standards &amp; Interoperability Lab (SIL) was launched in Kigali in 2022, hosted by HealthTech Hub Africa, with four foundational services: Testing, Training, Tooling and Teaming. In 2024, the AI dimension was incorporated: smart mapping, a conformance copilot and anomaly detection, making interoperability work intelligently. SAIIL 2.0 adds three further services and repositions the organisation as core digital public infrastructure.
            </p>

            <h3 id="sec-1-2" className="resdetail-sec-h3">
              1.2 Scope
            </h3>
            <p className="resdetail-paragraph">
              This concept note covers the 7T + Innovation framework, the case for each new service, SAIIL's positioning within Digital Public Infrastructure for Health, and the strategic roadmap to 2027.
            </p>

            <h2 id="sec-2" className="resdetail-sec-h2">
              2. Technical Context
            </h2>
            <p className="resdetail-paragraph">
              SAIIL's technical work is grounded in FHIR R4, IHE profiles and the OpenHIE architecture. All Implementation Guides produced by SAIIL are published under open licences and aligned with WHO SMART Guidelines, ensuring that African health data assets meet global interoperability requirements while addressing continent-specific constraints.
            </p>

            <h3 id="sec-2-1" className="resdetail-sec-h3">
              2.1 FHIR R4 Overview
            </h3>
            <p className="resdetail-paragraph">
              Fast Healthcare Interoperability Resources (FHIR) R4 is the global standard for health data exchange. SAIIL's test beds, tooling and training are all FHIR-native, enabling conformance testing at the resource, profile and Implementation Guide level.
            </p>

            <h3 id="sec-2-2" className="resdetail-sec-h3">
              2.2 Profile Constraints
            </h3>
            <p className="resdetail-paragraph">
              African FHIR profiles extend the base specification with locally required identifiers, terminology bindings and cardinality constraints. SAIIL is expanding profile development across Rwanda, Zambia, Ethiopia and Burkina Faso.
            </p>

            <div className="resdetail-code-box">
              <div className="resdetail-code-comment"># Example: RW-Core Patient (JSON)</div>
              <div>
                <span className="resdetail-code-key">"resourceType"</span>:{' '}
                <span className="resdetail-code-str">"Patient"</span>,
              </div>
              <div>
                <span className="resdetail-code-key">"meta"</span>:{' '}
                <span className="resdetail-code-key">&#123; "profile": [</span>
                <span className="resdetail-code-str">"https://fhir.moh.gov.rw/StructureDefinition/RW-Core-Patient"</span>
                <span className="resdetail-code-key">] &#125;</span>,
              </div>
              <div>
                <span className="resdetail-code-key">"identifier"</span>:{' '}
                <span className="resdetail-code-key">[&#123; "system": </span>
                <span className="resdetail-code-str">"https://fhir.moh.gov.rw/id/national-id"</span>,{' '}
                <span className="resdetail-code-key">"value": </span>
                <span className="resdetail-code-str">"12345678"</span>
                <span className="resdetail-code-key"> &#125;]</span>,
              </div>
              <div>
                <span className="resdetail-code-key">"birthDate"</span>:{' '}
                <span className="resdetail-code-str">"1985-04-12"</span>
              </div>
            </div>

            <h2 id="sec-3" className="resdetail-sec-h2">
              3. Resource Definitions
            </h2>
            <p className="resdetail-paragraph">
              The following sections define SAIIL's seven service areas, the 7T + Innovation framework. Each service addresses a specific gap in the interoperability implementation lifecycle.
            </p>

            <h3 id="sec-3-1" className="resdetail-sec-h3">
              3.1 Patient Profile
            </h3>
            <p className="resdetail-paragraph">
              The RW-Core-Patient profile constrains FHIR Patient with required national identifier, mandatory birth date and recommended district-level address. Encounter and DiagnosticReport resources link to the patient via standard references.
            </p>

            <h3 id="sec-3-2" className="resdetail-sec-h3">
              3.2 Encounter Profile
            </h3>
            <p className="resdetail-paragraph">
              RW-Core-Encounter constrains the base Encounter resource with a required facility identifier and mandatory encounter class binding to the OpenHIE ActEncounterCode value set.
            </p>

            <h3 id="sec-3-3" className="resdetail-sec-h3">
              3.3 Observation Profile
            </h3>
            <p className="resdetail-paragraph">
              Clinical observations in the RW-Core IG are bound to LOINC codes with a required binding strength. SAIIL maintains mapping guidance between LOINC and national terminology systems.
            </p>

            <h2 id="sec-4" className="resdetail-sec-h2">
              4. Conformance Requirements
            </h2>
            <p className="resdetail-paragraph">
              Systems claiming conformance to the SAIIL Rwanda Implementation Guide must pass all SHALL constraints in the SAIIL Test Bed before claiming conformance. SHOULD constraints are tracked as warnings. Systems are encouraged to re-run validation after major version updates to the IG.
            </p>

            <h2 id="sec-5" className="resdetail-sec-h2">
              5. Terminology Bindings
            </h2>
            <p className="resdetail-paragraph">
              SAIIL maintains terminology servers for SNOMED CT, LOINC, ICD-10 and country-specific code systems. The Translation service (T7) extends this to mapped terminologies in French, Portuguese, Arabic and Kiswahili, enabling pan-African deployment of standards-aligned systems.
            </p>

            <h2 id="sec-6" className="resdetail-sec-h2">
              6. Examples
            </h2>
            <p className="resdetail-paragraph">
              Complete worked examples for Patient, Encounter and Observation resources are available in the SAIIL Test Bed. Each example can be submitted directly to the validation endpoint and will produce a detailed conformance report.
            </p>
            <p className="resdetail-paragraph">
              Access the live examples at{' '}
              <span className="resdetail-live-link">
                testbed.saiil.africa/examples/rw-core
              </span>.
            </p>
          </article>
        </main>

        {/* Right Sidebar: Document Info */}
        <aside className="resdetail-info-sidebar">
          <div className="resdetail-info-title">Document Info</div>
          {DOC_INFO.map(({ label, value }) => (
            <div key={label} className="resdetail-info-row">
              <span className="resdetail-info-label">{label}</span>
              <span className="resdetail-info-value">{value}</span>
            </div>
          ))}

          <Link to="/resources" className="resdetail-back-link">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M19 12H5M12 5l-7 7 7 7" />
            </svg>
            Back to Resources
          </Link>
        </aside>
      </div>
    </div>
  );
}

export default ResourceDetail;
