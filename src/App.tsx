import React, { Suspense, lazy, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import AppLoader from './components/AppLoader';
import SuspenseFallback from './components/SuspenseFallback';
import { LoaderProvider } from './context/LoaderContext';
import { useRoutePulseLoader } from './hooks/useRoutePulseLoader';
import type { JSX } from 'react';

// 🔹 AOS imports (added)
import 'aos/dist/aos.css';
import AOS from 'aos';

// Lazy-load pages
const Home = lazy(() => import('./pages/Home'));
const AboutUs = lazy(() => import('./pages/AboutUs'));
const ContactUs = lazy(() => import('./pages/ContactUs'));
const FAQ = lazy(() => import('./pages/FAQ'));
const BlogNews = lazy(() => import('./pages/BlogNews'));

function AppShell(): JSX.Element {
  // Show loader briefly on every route change
  useRoutePulseLoader(1000); // tweak duration (ms) as you like

  // 🔹 Refresh AOS on route changes
  const location = useLocation();

  // 🔹 Init AOS once
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: false,
      easing: 'ease',
      offset: 60,
      mirror: false,
    });

    const onLoad = () => AOS.refresh();
    window.addEventListener('load', onLoad);
    return () => window.removeEventListener('load', onLoad);
  }, []);

  // 🔹 Re-scan DOM after navigation
  useEffect(() => {
    AOS.refresh(); // or AOS.refreshHard() if you add/remove many nodes dynamically
  }, [location.pathname]);

  return (
    <>
      {/* One global overlay controlled by context */}
      <AppLoader />

      <Navbar />
      <main className="min-h-screen px-4 py-8">
        {/* Keep loader visible while lazy chunks are loading */}
        <Suspense fallback={<SuspenseFallback />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/contact" element={<ContactUs />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/blog-news" element={<BlogNews />} />
          </Routes>
        </Suspense>
      </main>
      <Footer />
    </>
  );
}

export default function App(): JSX.Element {
  return (
    <Router>
      <LoaderProvider>
        <AppShell />
      </LoaderProvider>
    </Router>
  );
}
