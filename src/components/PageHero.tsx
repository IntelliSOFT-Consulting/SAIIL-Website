import React from 'react';
import { Link } from 'react-router-dom';

export interface PageHeroProps {
  eyebrow: string;
  headline: string;
  intro: string;
  button?: {
    label: string;
    href: string;
    icon?: boolean;
  };
  imageUrl?: string;
}

export const PageHero: React.FC<PageHeroProps> = ({
  eyebrow,
  headline,
  intro,
  button,
  imageUrl = 'https://images.unsplash.com/photo-1666886573531-48d2e3c2b684?w=1600&h=700&fit=crop&auto=format',
}) => {
  return (
    <section className="page-hero">
      {imageUrl && (
        <img
          src={imageUrl}
          alt=""
          aria-hidden="true"
          className="page-hero-bg"
        />
      )}
      <div className="page-hero-overlay" />
      <div className="page-hero-content">
        <span className="page-hero-eyebrow">{eyebrow}</span>
        <h1 className="page-hero-headline">{headline}</h1>
        <p className={`page-hero-intro ${button ? 'has-button' : ''}`}>{intro}</p>
        {button && (
          <Link to={button.href} className="page-hero-button">
            {button.label}
            {button.icon !== false && (
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            )}
          </Link>
        )}
      </div>
    </section>
  );
};

export default PageHero;
