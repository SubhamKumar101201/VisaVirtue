import React, { useLayoutEffect } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import './index.css';

// Pages
import Home from './pages/Home';
import Services from './pages/Services';
import About from './pages/About';
import Blog from './pages/Blog';
import Contact from './pages/Contact';
import ScrollToTopButton from './components/ScrollToTopButton';
import BlogDetail from './pages/BlogDetail';

// ScrollToTop
function ScrollToTop() {
  const { pathname } = useLocation();
  useLayoutEffect(() => {
    window.scrollTo({ top: 0, behavior: 'auto' });
  }, [pathname]);
  return null;
}

// Page transition (fade only – no Y movement to prevent flicker)
const pageTransition = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
  transition: { duration: 0.25, ease: 'easeInOut' },
};

// Main App Component
function App() {
  const location = useLocation();

  return (
    <>
      <ScrollToTop />
      <Navbar />
      {/* AnimatePresence with mode='sync' prevents blank flicker */}
      <AnimatePresence mode="sync">
        <motion.div
          key={location.pathname}
          {...pageTransition}
          style={{ minHeight: '80vh' }} // ensure content space
        >
          <Routes location={location}>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/about" element={<About />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:slug" element={<BlogDetail />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </motion.div>
      </AnimatePresence>
      <Footer />
      {/* Scroll-to-top button always visible on all pages */}
      <ScrollToTopButton />
    </>
  );
}

// Wrapped with Router
export default function WrappedApp() {
  return (
    <Router>
      <App />
    </Router>
  );
}
