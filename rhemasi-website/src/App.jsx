import { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import ScrollToTop from './components/ScrollToTop.jsx';
import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import Services from './pages/Services.jsx';
import Process from './pages/Process.jsx';
import Partners from './pages/Partners.jsx';
import Atlas from './pages/Atlas.jsx';
import Contact from './pages/Contact.jsx';

/**
 * Sets up an IntersectionObserver that adds the "is-revealed" class to any
 * element with the "reveal" class when it scrolls into view. Re-scans on
 * every route change so newly-mounted page elements get observed.
 */
function useScrollReveal() {
  const location = useLocation();
  useEffect(() => {
    if (typeof window === 'undefined' || !('IntersectionObserver' in window)) return;
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduced) {
      document.querySelectorAll('.reveal').forEach((el) => el.classList.add('is-revealed'));
      return;
    }
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('is-revealed');
            obs.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -8% 0px' }
    );
    // Defer slightly so pages have a chance to mount/render
    const id = window.setTimeout(() => {
      document.querySelectorAll('.reveal:not(.is-revealed)').forEach((el) => obs.observe(el));
    }, 30);
    return () => {
      window.clearTimeout(id);
      obs.disconnect();
    };
  }, [location.pathname]);
}

export default function App() {
  useScrollReveal();
  return (
    <>
      <ScrollToTop />
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/our-process" element={<Process />} />
          <Route path="/partners" element={<Partners />} />
          <Route path="/property-atlas" element={<Atlas />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}
