import { useState } from 'react';
import { PageHero } from '../components/PageHero';

const AREAS_OF_INTEREST = [
  'Test Bed Access',
  'Implementation Guide Development',
  'FHIR Validation',
  'Capacity Building',
  'Country Programme',
  'Partnership',
  'Funding',
  'Other'
];

interface ContactFormState {
  name: string;
  org: string;
  email: string;
  audience: string;
  interest: string;
  message: string;
}

const CONTACT_API_URL = '/api/contact.php';
const CONTACT_EMAIL = 'davidmukungi@saiil.africa';

export function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [form, setForm] = useState<ContactFormState>({
    name: '',
    org: '',
    email: '',
    audience: '',
    interest: '',
    message: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    const payload = {
      name: form.name,
      email: form.email,
      organisation: form.org || 'Not specified',
      audience: form.audience || 'Not specified',
      area_of_interest: form.interest || 'Not specified',
      message: form.message,
      _subject: `New SAIIL Inquiry from ${form.name}`
    };

    try {
      const response = await fetch(CONTACT_API_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(payload)
      });

      const resData = await response.json().catch(() => null);

      if (response.ok && resData?.ok) {
        setSubmitted(true);
      } else {
        setError(resData?.error || 'Unable to send message. Please try again or email us directly.');
      }
    } catch (err) {
      console.error('Submission error:', err);
      setError(`Unable to connect to the mail service. Please contact us directly at ${CONTACT_EMAIL}.`);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="contact-page">
      <PageHero
        eyebrow="Contact"
        headline="Let's build systems that talk to each other."
        intro="Whether you want to access the Test Bed, discuss a country programme or explore a partnership, the SAIIL team is happy to talk."
        imageUrl="https://images.unsplash.com/photo-1600427652630-f97cc4db10cd?w=1600&h=700&fit=crop&auto=format"
      />

      <section className="contact-section">
        <div className="contact-container">
          {submitted ? (
            <div className="contact-success-card">
              <div className="contact-success-icon-wrap">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" strokeWidth="2">
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 1 1-18 0 9 9 0 0 1 18 0z" />
                </svg>
              </div>
              <h2 className="contact-success-title">Message sent.</h2>
              <p className="contact-success-desc">
                Thank you for reaching out. A member of the SAIIL team will be in touch within two working days.
              </p>
              <button
                type="button"
                onClick={() => {
                  setSubmitted(false);
                  setForm({
                    name: '',
                    org: '',
                    email: '',
                    audience: '',
                    interest: '',
                    message: ''
                  });
                }}
                className="contact-secondary-btn"
              >
                Send another message
              </button>
            </div>
          ) : (
            <div className="contact-form-card">
              <form onSubmit={handleSubmit} className="contact-form">
                <input type="text" name="_honey" style={{ display: 'none' }} tabIndex={-1} autoComplete="off" />

                {error && (
                  <div className="contact-error-box">
                    <span>{error}</span>{' '}
                    <a href={`mailto:${CONTACT_EMAIL}`}>Send email directly &rarr;</a>
                  </div>
                )}

                <div className="contact-field">
                  <label className="contact-label">I am contacting SAIIL as</label>
                  <div className="contact-select-wrap">
                    <select
                      name="audience"
                      value={form.audience}
                      onChange={(e) => setForm((prev) => ({ ...prev, audience: e.target.value }))}
                      required
                      className="contact-select"
                    >
                      <option value="">Select...</option>
                      <option>Government / Ministry of Health (MoH)</option>
                      <option>Implementing Partner</option>
                      <option>Developer / Technical Team</option>
                      <option>Funding Partner</option>
                      <option>Research / Academic</option>
                      <option>Other</option>
                    </select>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" strokeWidth="2" className="contact-select-chevron">
                      <polyline points="6 9 12 15 18 9" />
                    </svg>
                  </div>
                </div>

                <div className="contact-grid-row">
                  <div className="contact-field">
                    <label className="contact-label">Name</label>
                    <input
                      name="name"
                      value={form.name}
                      onChange={(e) => setForm((prev) => ({ ...prev, name: e.target.value }))}
                      required
                      className="contact-input"
                      placeholder="Full name"
                    />
                  </div>
                  <div className="contact-field">
                    <label className="contact-label">Organisation</label>
                    <input
                      name="org"
                      value={form.org}
                      onChange={(e) => setForm((prev) => ({ ...prev, org: e.target.value }))}
                      className="contact-input"
                      placeholder="Organisation name"
                    />
                  </div>
                </div>

                <div className="contact-field">
                  <label className="contact-label">Email</label>
                  <input
                    name="email"
                    type="email"
                    value={form.email}
                    onChange={(e) => setForm((prev) => ({ ...prev, email: e.target.value }))}
                    required
                    className="contact-input"
                    placeholder="email@organisation.org"
                  />
                </div>

                <div className="contact-field">
                  <label className="contact-label">Area of interest</label>
                  <div className="contact-select-wrap">
                    <select
                      name="interest"
                      value={form.interest}
                      onChange={(e) => setForm((prev) => ({ ...prev, interest: e.target.value }))}
                      className="contact-select"
                    >
                      <option value="">Select an area...</option>
                      {AREAS_OF_INTEREST.map((item) => (
                        <option key={item} value={item}>
                          {item}
                        </option>
                      ))}
                    </select>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" strokeWidth="2" className="contact-select-chevron">
                      <polyline points="6 9 12 15 18 9" />
                    </svg>
                  </div>
                </div>

                <div className="contact-field">
                  <label className="contact-label">Message</label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={(e) => setForm((prev) => ({ ...prev, message: e.target.value }))}
                    required
                    rows={5}
                    className="contact-textarea"
                    placeholder="Tell us about your project or question..."
                  />
                </div>

                <button type="submit" className="contact-submit-btn" disabled={isSubmitting}>
                  {isSubmitting ? (
                    <>
                      <span>Sending message...</span>
                      <span className="contact-spinner" />
                    </>
                  ) : (
                    <>
                      Send message
                      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <line x1="22" y1="2" x2="11" y2="13" />
                        <polygon points="22 2 15 22 11 13 2 9 22 2" />
                      </svg>
                    </>
                  )}
                </button>
              </form>
            </div>
          )}

          <div className="contact-sidebar">
            <div className="contact-sidebar-intro">
              <h3 className="contact-sidebar-title">Get in touch</h3>
              <p className="contact-sidebar-desc">
                Whether you want to access the Test Bed, discuss a country programme or explore a partnership, the SAIIL team is happy to talk.
              </p>
            </div>

            {[
              { label: 'General Enquiries', value: 'davidmukungi@saiil.africa' },
              { label: 'Test Bed Support', value: 'davidmukungi@saiil.africa' }
            ].map((contact, idx) => (
              <div key={idx} className="contact-info-item">
                <div className="contact-info-label">{contact.label}</div>
                <a href={`mailto:${contact.value}`} className="contact-info-link">
                  {contact.value}
                </a>
              </div>
            ))}

            <div className="contact-notice-box">
              <div className="contact-notice-title">Response Time</div>
              <p className="contact-notice-text">
                SAIIL responds to all enquiries within two working days. For urgent Test Bed support, email davidmukungi@saiil.africa with the subject line [URGENT].
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Contact;
