import { Link } from 'react-router-dom';
import { PageHero } from '../components/PageHero';

const AFRICA_MAP_URL = '/assets/africa-saiil-light.svg';
const BURKINA_FASO_OUTLINE = '/assets/burkina-faso-outline.svg';
const ETHIOPIA_OUTLINE = '/assets/ethiopia-outline.svg';
const RWANDA_OUTLINE = '/assets/rwanda-outline.svg';
const ZAMBIA_OUTLINE = '/assets/zambia-outline.svg';

interface CountryItem {
  name: string;
  image: string;
}

const COUNTRIES: CountryItem[] = [
  { name: 'Rwanda', image: RWANDA_OUTLINE },
  { name: 'Zambia', image: ZAMBIA_OUTLINE },
  { name: 'Ethiopia', image: ETHIOPIA_OUTLINE },
  { name: 'Burkina Faso', image: BURKINA_FASO_OUTLINE }
];

interface PartnershipGroup {
  title: string;
  organisations: string[];
}

const PARTNERSHIP_GROUPS: PartnershipGroup[] = [
  {
    title: 'Network organisations',
    organisations: ['HELINA', 'AFENET']
  },
  {
    title: 'Regional and Member State organisations',
    organisations: ['Africa CDC', 'WHO AFRO', 'East African Community (EAC)', 'IGAD', 'SADC']
  }
];

function CountryOutline({ country }: { country: CountryItem }) {
  return (
    <img
      src={country.image}
      alt={`${country.name} map`}
      className="countries-map-img"
    />
  );
}

export function Countries() {
  return (
    <div className="countries-page">
      <PageHero
        eyebrow="Countries & Partners"
        headline="Where SAIIL is sailing"
        intro="SAIIL is expanding its work across Rwanda, Zambia, Ethiopia and Burkina Faso."
        imageUrl="https://images.unsplash.com/photo-1741991110666-88115e724741?w=1600&h=700&fit=crop&auto=format"
      />

      {/* Geographic Reach */}
      <section className="countries-reach-section">
        <div className="countries-reach-container">
          <div className="countries-reach-layout">
            <div>
              <span className="countries-reach-eyebrow">Geographic Reach</span>
              <h2 className="countries-reach-heading">Four expansion countries, one connected vision.</h2>
              <p className="countries-reach-text">
                SAIIL is building relationships and preparing standards, testing and capacity programmes across Eastern, Southern and Western Africa.
              </p>
              <div className="countries-reach-legend">
                <span className="countries-reach-dot" />
                SAIIL expansion countries
              </div>
            </div>

            <div className="countries-reach-map-card">
              <img
                src={AFRICA_MAP_URL}
                alt="Map of Africa highlighting Rwanda, Zambia, Ethiopia and Burkina Faso"
                className="countries-reach-map-img"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Country Outlines */}
      <section className="countries-grid-section">
        <div className="countries-grid-container">
          <span className="countries-grid-eyebrow">Countries & Partners</span>
          <h2 className="countries-grid-heading">Where SAIIL is sailing</h2>
          <p className="countries-grid-intro">
            SAIIL is expanding its work across Rwanda, Zambia, Ethiopia and Burkina Faso.
          </p>

          <div className="countries-outlines-grid">
            {COUNTRIES.map((c) => (
              <div key={c.name} className="countries-card">
                <CountryOutline country={c} />
                <div className="countries-card-name">{c.name}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Future Partnerships */}
      <section className="countries-partners-section">
        <div className="countries-partners-container">
          <span className="countries-partners-eyebrow">Partnership Outlook</span>
          <h2 className="countries-partners-heading">Future partnerships</h2>
          <p className="countries-partners-intro">
            SAIIL looks forward to formalising partnerships with network organisations and regional African Member State organisations.
          </p>

          <div className="countries-partnership-groups">
            {PARTNERSHIP_GROUPS.map((group) => (
              <div key={group.title} className="countries-partner-group">
                <h3 className="countries-partner-group-title">{group.title}</h3>
                <div className="countries-partner-orgs-grid">
                  {group.organisations.map((org) => (
                    <div key={org} className="countries-partner-org-badge">
                      {org}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="countries-cta-section">
        <div className="countries-cta-container">
          <h2 className="countries-cta-heading">Explore a future partnership.</h2>
          <p className="countries-cta-desc">
            SAIIL welcomes conversations with organisations working to strengthen digital health interoperability across Africa.
          </p>
          <Link to="/contact" className="countries-cta-btn">
            Contact SAIIL
          </Link>
        </div>
      </section>
    </div>
  );
}

export default Countries;
