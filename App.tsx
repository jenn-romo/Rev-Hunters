import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Plumbers from './pages/Plumbers';
import PropertyManagement from './pages/PropertyManagement';
import LinkedinGrowth from './pages/LinkedinGrowth';
import Solopreneur from './pages/Solopreneur';
import Enterprise from './pages/Enterprise';
import Pricing from './pages/Pricing';
import Contact from './pages/Contact';
import PM from './pages/PM';
import Dentist from './pages/Dentist';
import HomeCare from './pages/HomeCare';
import Realtors from './pages/Realtors';
import PrivacyPolicy from './pages/PrivacyPolicy';
import Terms from './pages/Terms';

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
    <BrowserRouter>
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
          <Route path="pm" element={<PM />} />
          <Route path="dentist" element={<Dentist />} />
          <Route path="homecare" element={<HomeCare />} />
          <Route path="realtors" element={<Realtors />} />
          <Route path="privacy-policy" element={<PrivacyPolicy />} />
          <Route path="terms" element={<Terms />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;