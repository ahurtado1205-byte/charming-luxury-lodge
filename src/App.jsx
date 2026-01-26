import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import StickyCTA from './components/StickyCTA';

// Pages
import Home from './pages/Home';
import Lodge from './pages/Lodge';
import Suites from './pages/Suites';
import Experiences from './pages/Experiences';
import Stag from './pages/Stag';
import Offers from './pages/Offers';
import Location from './pages/Location';
import Contact from './pages/Contact';
import Events from './pages/Events';
import Wellness from './pages/Wellness';
import Gallery from './pages/Gallery';
import RomanticMonth from './pages/promos/RomanticMonth';

// Scroll to top on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

// Reveal animation on scroll observer
const useReveal = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    }, observerOptions);

    const elements = document.querySelectorAll('.reveal');
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, [pathname]);
};

const AppContent = () => {
  useReveal();
  return (
    <div className="app-container">
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/lodge" element={<Lodge />} />
          <Route path="/suites" element={<Suites />} />
          <Route path="/experiences" element={<Experiences />} />
          <Route path="/stag" element={<Stag />} />
          <Route path="/offers" element={<Offers />} />
          <Route path="/location" element={<Location />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/events" element={<Events />} />
          <Route path="/wellness" element={<Wellness />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/promo/mes-de-los-enamorados" element={<RomanticMonth />} />
        </Routes>
      </main>
      <Footer />
      <StickyCTA />
    </div>
  );
};

function App() {
  return (
    <Router basename="/charming-luxury-lodge">
      <ScrollToTop />
      <AppContent />
    </Router>
  );
}

export default App;
