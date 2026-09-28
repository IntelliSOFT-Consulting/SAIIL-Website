import React, { useEffect } from 'react';
import { GalleryItem } from '../data/gallery';

interface LightboxProps {
  isOpen: boolean;
  item: GalleryItem | null;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}

export const Lightbox: React.FC<LightboxProps> = ({ isOpen, item, onClose, onPrev, onNext }) => {
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') onPrev();
      if (e.key === 'ArrowRight') onNext();
    };

    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose, onPrev, onNext]);

  if (!isOpen || !item) return null;

  return (
    <div
      className={`lightbox ${isOpen ? 'is-open' : ''}`}
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label="Image Preview"
    >
      <button
        type="button"
        className="lightbox-nav lightbox-prev"
        onClick={(e) => {
          e.stopPropagation();
          onPrev();
        }}
        aria-label="Previous screenshot"
      >
        &larr;
      </button>

      <div className="lightbox-frame" onClick={(e) => e.stopPropagation()}>
        <button type="button" className="lightbox-close" onClick={onClose} aria-label="Close preview">
          &times;
        </button>
        <div className="lightbox-img-wrap">
          <img src={item.src} alt={item.alt} />
        </div>
        <div className="lightbox-cap">
          <span className="step">{item.step}</span>
          <p>{item.desc}</p>
        </div>
      </div>

      <button
        type="button"
        className="lightbox-nav lightbox-next"
        onClick={(e) => {
          e.stopPropagation();
          onNext();
        }}
        aria-label="Next screenshot"
      >
        &rarr;
      </button>
    </div>
  );
};
