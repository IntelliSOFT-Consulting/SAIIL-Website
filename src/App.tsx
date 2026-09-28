import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { Layout } from './components/Layout';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { WhatWeDo } from './pages/WhatWeDo';
import { TestBed } from './pages/TestBed';
import { TestBedAccess } from './pages/TestBedAccess';
import { Resources } from './pages/Resources';
import { ResourceDetail } from './pages/ResourceDetail';
import { Countries } from './pages/Countries';
import { Contact } from './pages/Contact';

const ScrollToTop: React.FC = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

export const App: React.FC = () => {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="what-we-do" element={<WhatWeDo />} />
          <Route path="test-bed" element={<TestBed />} />
          <Route path="test-bed-access" element={<TestBedAccess />} />
          <Route path="resources" element={<Resources />} />
          <Route path="resources/detail" element={<ResourceDetail />} />
          <Route path="countries" element={<Countries />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
