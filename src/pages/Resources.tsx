import { useState } from 'react';
import { Link } from 'react-router-dom';
import { PageHero } from '../components/PageHero';

interface ResourceItem {
  type: string;
  title: string;
  sub?: string;
  desc: string;
  date: string;
  cat: string;
  featured?: boolean;
}

const CATEGORIES = ['All', 'Concept Notes', 'Implementation Guides', 'Technical', 'Documentation'];

const RESOURCES_DATA: ResourceItem[] = [
  {
    type: 'Concept Note',
    title: 'SAIIL Next Generation: Concept Note',
    sub: "From a Standards Lab to Africa's Interoperability & Innovation Engine",
    desc: "A 21-page concept note outlining SAIIL's evolution from a four-service standards lab to Africa's interoperability and innovation engine, introducing the 7T + Innovation framework and positioning SAIIL within Digital Public Infrastructure for Health.",
    date: '2026 · 21 pages',
    cat: 'Concept Notes',
    featured: true
  },
  {
    type: 'Implementation Guide',
    title: 'Zambia Digital Health Implementation Guide',
    desc: "FHIR profiles aligned with Zambia's national digital health architecture, covering core clinical resources and exchange patterns.",
    date: 'v0.9.1 · 2025',
    cat: 'Implementation Guides'
  },
  {
    type: 'Implementation Guide',
    title: 'Rwanda FHIR Implementation Guide',
    desc: 'FHIR R4 profiles for the Rwanda National Health Information Exchange, covering patient, encounter and diagnostic resources aligned with national standards.',
    date: 'v0.8 · 2024',
    cat: 'Implementation Guides'
  },
  {
    type: 'Concept Note',
    title: 'Interoperability Governance Frameworks for LMICs',
    desc: 'A concept note on establishing national interoperability governance structures across low- and middle-income country Ministries of Health (MoHs).',
    date: 'Dec 2024',
    cat: 'Concept Notes'
  },
  {
    type: 'Technical',
    title: 'OpenHIE Reference Architecture v3.0',
    desc: 'Complete technical reference for the Open Health Information Exchange architecture, including component specifications and integration patterns.',
    date: 'Nov 2024',
    cat: 'Technical'
  },
  {
    type: 'Documentation',
    title: 'FHIR Implementation Reference Guide',
    desc: 'A practitioner reference covering FHIR R4 resource types, profiles, extensions and RESTful API patterns for health interoperability teams.',
    date: 'Oct 2024',
    cat: 'Documentation'
  },
  {
    type: 'Concept Note',
    title: 'AI-Assisted Terminology Mapping: Principles & Safeguards',
    desc: 'Conceptual framework for deploying AI in health terminology mapping workflows, with governance and quality assurance guidance.',
    date: 'Sep 2024',
    cat: 'Concept Notes'
  },
  {
    type: 'Documentation',
    title: 'SAIIL Test Bed: User Guide',
    desc: 'Step-by-step guide to using the SAIIL Interoperability Test Bed for FHIR resource validation, IG conformance testing and reporting.',
    date: 'Aug 2024',
    cat: 'Documentation'
  },
  {
    type: 'Technical',
    title: 'FHIR Validator Configuration Reference',
    desc: 'Technical documentation for configuring the HAPI FHIR validator with SAIIL Test Bed profiles and custom terminology servers.',
    date: 'Jun 2024',
    cat: 'Technical'
  }
];

function getBadgeClass(type: string): string {
  switch (type) {
    case 'Implementation Guide':
      return 'resource-badge resource-badge-ig';
    case 'Concept Note':
      return 'resource-badge resource-badge-concept';
    default:
      return 'resource-badge resource-badge-default';
  }
}

export function Resources() {
  const [selectedCat, setSelectedCat] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const featured = RESOURCES_DATA[0];
  const filteredList = RESOURCES_DATA.slice(1).filter((item) => {
    const matchesCat = selectedCat === 'All' || item.cat === selectedCat;
    const matchesQuery =
      searchQuery === '' ||
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.desc.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCat && matchesQuery;
  });

  return (
    <div className="resources-page">
      <PageHero
        eyebrow="Resource Library"
        headline="Resources"
        intro="Guides, concept notes, technical documentation and learning resources from SAIIL."
        button={{
          label: 'Read the Concept Note',
          href: '/resources/detail'
        }}
        imageUrl="https://images.unsplash.com/photo-1707157284454-553ef0a4ed0d?w=1600&h=700&fit=crop&auto=format"
      />

      <section className="resources-section">
        <div className="resources-container">
          {/* Featured Resource Banner */}
          <div className="resources-featured-card">
            <div>
              <div className="resources-featured-tags">
                <span className="resources-featured-pill">Featured</span>
                <span className="resources-featured-type">{featured.type}</span>
                <span className="resources-featured-date">{featured.date}</span>
              </div>
              <h2 className="resources-featured-title">{featured.title}</h2>
              <p className="resources-featured-sub">{featured.sub}</p>
              <p className="resources-featured-desc">{featured.desc}</p>
              <Link to="/resources/detail" className="resources-featured-btn">
                Read Online
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </Link>
            </div>

            <div className="resources-featured-toc">
              <div className="resources-toc-head">Contents</div>
              <div>01 The case for SAIIL 2.0</div>
              <div>02 The 7T Framework</div>
              <div>03 Innovation as core</div>
              <div>04 DPI-H positioning</div>
              <div>05 Strategic roadmap</div>
              <div className="resources-toc-meta">21 pages · 2026</div>
            </div>
          </div>

          {/* Filter Toolbar */}
          <div className="resources-toolbar">
            <div className="resources-search-wrap">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" strokeWidth="1.5" className="resources-search-icon">
                <circle cx="11" cy="11" r="8" />
                <path d="m21 21-4.35-4.35" />
              </svg>
              <input
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search resources..."
                className="resources-search-input"
              />
            </div>

            <div className="resources-cat-btns">
              {CATEGORIES.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCat(cat)}
                  className={`resources-cat-btn ${
                    selectedCat === cat ? 'resources-cat-btn-active' : 'resources-cat-btn-inactive'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Resources Grid */}
          <div className="resources-grid">
            {filteredList.map((item, idx) => (
              <div key={idx} className="resource-card">
                <div className="resource-card-meta">
                  <span className={getBadgeClass(item.type)}>{item.type}</span>
                  <span className="resource-card-date">{item.date}</span>
                </div>
                <h3 className="resource-card-title">{item.title}</h3>
                <p className="resource-card-desc">{item.desc}</p>
                <Link to="/resources/detail" className="resource-card-btn">
                  Read Online
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Resources;
