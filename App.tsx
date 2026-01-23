import React, { useEffect } from 'react';
import { HashRouter, Routes, Route, useLocation } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Plumbers from './pages/Plumbers';
import PropertyManagement from './pages/PropertyManagement';
import LinkedinGrowth from './pages/LinkedinGrowth';
import Solopreneur from './pages/Solopreneur';
import Enterprise from './pages/Enterprise';
import Pricing from './pages/Pricing';
import Contact from './pages/Contact';

// Scroll to top on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const App: React.FC = () => {
  return (
    <HashRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="plumbers" element={<Plumbers />} />
          <Route path="propertymanagement" element={<PropertyManagement />} />
          <Route path="linkedin" element={<LinkedinGrowth />} />
          <Route path="solopreneur" element={<Solopreneur />} />
          <Route path="enterprise" element={<Enterprise />} />
          <Route path="pricing" element={<Pricing />} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
    </HashRouter>
  );
};

export default App;