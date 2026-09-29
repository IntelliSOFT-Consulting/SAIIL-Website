import React, { useState } from 'react';

export const ContactSection: React.FC = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    const formData = new FormData(e.currentTarget);

    try {
      const response = await fetch('https://formsubmit.co/ajax/davidmukungi@saiil.africa', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
        },
        body: formData,
      });

      if (response.ok) {
        setSubmitted(true);
      } else {
        // Fallback to standard form submit if fetch fails
        e.currentTarget.submit();
      }
    } catch {
      // Fallback
      e.currentTarget.submit();
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="section contact-section" id="contact">
      <div className="wrap">
        <div className="section-head">
          <div className="eyebrow">Contact</div>
          <h2>Get in touch</h2>
          <p>Ministry, implementer, or funding partner &mdash; send us a message and we&rsquo;ll follow up.</p>
        </div>
        <div className="contact-grid">
          <div className="contact-info">
            <h3>Email us directly</h3>
            <p>Prefer to write straight to our inbox? We read every message.</p>
            <a className="contact-email" href="mailto:davidmukungi@saiil.africa">
              davidmukungi@saiil.africa
            </a>
          </div>

          {submitted ? (
            <div className="stat-card" style={{ border: '1px solid var(--line)' }}>
              <h3 style={{ marginBottom: '10px', color: 'var(--teal)' }}>Thank you for reaching out!</h3>
              <p style={{ color: 'var(--slate)' }}>We have received your message and will get back to you shortly.</p>
            </div>
          ) : (
            <form
              className="contact-form"
              action="https://formsubmit.co/davidmukungi@saiil.africa"
              method="POST"
              onSubmit={handleSubmit}
            >
              <input type="hidden" name="_subject" value="New message from the SAIIL website" />
              <input type="hidden" name="_captcha" value="false" />
              <input type="text" name="_honey" style={{ display: 'none' }} tabIndex={-1} autoComplete="off" />

              <div>
                <label htmlFor="contact-name">Name</label>
                <input type="text" id="contact-name" name="name" required placeholder="Your full name" />
              </div>

              <div>
                <label htmlFor="contact-email-input">Email</label>
                <input type="email" id="contact-email-input" name="email" required placeholder="you@organization.org" />
              </div>

              <div>
                <label htmlFor="contact-message">Message</label>
                <textarea
                  id="contact-message"
                  name="message"
                  required
                  placeholder="Tell us about your organization and how we can collaborate..."
                ></textarea>
              </div>

              <button type="submit" className="btn btn-primary" disabled={isSubmitting}>
                {isSubmitting ? 'Sending...' : 'Send message →'}
              </button>

              {error && <div className="contact-form-status" style={{ color: 'var(--amber-d)' }}>{error}</div>}
            </form>
          )}
        </div>
      </div>
    </section>
  );
};
