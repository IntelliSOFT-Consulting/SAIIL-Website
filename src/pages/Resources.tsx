import { useState } from 'react';
import { PageHero } from '../components/PageHero';

interface ResourceItem {
  type: string;
  title: string;
  desc: string;
  date: string;
  cat: string;
}

const CATEGORIES = ['All', 'Concept Notes', 'Implementation Guides', 'Technical', 'Documentation'];

const RESOURCES_DATA: ResourceItem[] = [
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

  const normalizedQuery = searchQuery.trim().toLowerCase();
  const filteredList = RESOURCES_DATA.filter((item) => {
    const matchesCat = selectedCat === 'All' || item.cat === selectedCat;
    const matchesQuery =
      normalizedQuery === '' ||
      item.title.toLowerCase().includes(normalizedQuery) ||
      item.desc.toLowerCase().includes(normalizedQuery);
    return matchesCat && matchesQuery;
  });

  return (
    <div className="resources-page">
      <PageHero
        eyebrow="Resource Library"
        headline="Resources"
        intro="Guides, concept notes, technical documentation and learning resources from SAIIL."
        imageUrl="https://images.unsplash.com/photo-1707157284454-553ef0a4ed0d?w=1600&h=700&fit=crop&auto=format"
      />

      <section className="resources-section">
        <div className="resources-container">
          {/* Filter Toolbar */}
          <div className="resources-toolbar">
            <div className="resources-search-wrap">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" strokeWidth="1.5" className="resources-search-icon">
                <circle cx="11" cy="11" r="8" />
                <path d="m21 21-4.35-4.35" />
              </svg>
              <input
                type="search"
                aria-label="Search resources"
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
                  type="button"
                  aria-pressed={selectedCat === cat}
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
          <div className="resources-grid" aria-live="polite" aria-atomic="true">
            {filteredList.map((item) => (
              <article key={item.title} className="resource-card">
                <div className="resource-card-meta">
                  <span className={getBadgeClass(item.type)}>{item.type}</span>
                  <span className="resource-card-date">{item.date}</span>
                </div>
                <h3 className="resource-card-title">{item.title}</h3>
                <p className="resource-card-desc">{item.desc}</p>
              </article>
            ))}
            {filteredList.length === 0 && (
              <div className="resources-empty">
                <h2>No resources found</h2>
                <p>Try another search or choose a different category.</p>
                <button type="button" onClick={() => { setSearchQuery(''); setSelectedCat('All'); }}>
                  Clear filters
                </button>
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Resources;
