import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ProblemSection } from './components/ProblemSection';
import { FourTsSection } from './components/FourTsSection';
import { AiLayerSection } from './components/AiLayerSection';
import { SandboxSection } from './components/SandboxSection';
import { Lightbox } from './components/Lightbox';
import { ApproachBand } from './components/ApproachBand';
import { PartnersSection } from './components/PartnersSection';
import { CtaBand } from './components/CtaBand';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { galleryItems } from './data/gallery';

export const App: React.FC = () => {
  const [activeLightboxIndex, setActiveLightboxIndex] = useState<number | null>(null);

  const handleOpenLightbox = (index: number) => {
    setActiveLightboxIndex(index);
  };

  const handleCloseLightbox = () => {
    setActiveLightboxIndex(null);
  };

  const handlePrevLightbox = () => {
    if (activeLightboxIndex === null) return;
    setActiveLightboxIndex((activeLightboxIndex - 1 + galleryItems.length) % galleryItems.length);
  };

  const handleNextLightbox = () => {
    if (activeLightboxIndex === null) return;
    setActiveLightboxIndex((activeLightboxIndex + 1) % galleryItems.length);
  };

  const activeItem = activeLightboxIndex !== null ? galleryItems[activeLightboxIndex] : null;

  return (
    <div className="app-container">
      <Navbar />
      <main>
        <Hero />
        <ProblemSection />
        <FourTsSection />
        <AiLayerSection />
        <SandboxSection onOpenLightbox={handleOpenLightbox} />
        <ApproachBand />
        <PartnersSection />
        <CtaBand />
        <ContactSection />
      </main>
      <Footer />
      <Lightbox
        isOpen={activeLightboxIndex !== null}
        item={activeItem}
        onClose={handleCloseLightbox}
        onPrev={handlePrevLightbox}
        onNext={handleNextLightbox}
      />
    </div>
  );
};

export default App;
