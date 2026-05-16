import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Heart } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  // Initialize Google Translate
  useEffect(() => {
    if (!document.getElementById('google-translate-script')) {
      window.googleTranslateElementInit = () => {
        if (window.google && window.google.translate) {
          new window.google.translate.TranslateElement(
            { pageLanguage: 'en', autoDisplay: false },
            'google_translate_element'
          );
        }
      };

      const script = document.createElement('script');
      script.id = 'google-translate-script';
      script.src = '//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
      script.async = true;
      document.body.appendChild(script);
    }
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Programs', path: '/programs' },
    { name: 'Impact', path: '/impact' },
    { name: 'Get Involved', path: '/volunteer' },
    { name: 'Blog', path: '/blog' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''} ${isOpen ? 'menu-open' : ''}`}>
      <div className="container nav-container">
        <Link to="/" className="logo-container">
          <Heart className="logo-icon" size={32} fill="var(--primary)" />
          <span className="logo-text"><span>Empower</span>Hope</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="desktop-links">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              to={link.path} 
              className={`nav-link ${location.pathname === link.path ? 'active' : ''}`}
            >
              {link.name}
            </Link>
          ))}
        </div>

        <div className="nav-actions">
          <div id="google_translate_element" className="translate-widget"></div>
          <Link to="/donate" className="btn-donate-nav">
            Donate Now
          </Link>
          {/* Mobile Toggle */}
          <button className="mobile-toggle" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="mobile-menu"
          >
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                to={link.path} 
                className={`mobile-link ${location.pathname === link.path ? 'active' : ''}`}
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <Link to="/donate" className="btn-donate-mobile" onClick={() => setIsOpen(false)}>
              Donate Now
            </Link>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        .navbar {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          height: 80px;
          display: flex;
          align-items: center;
          z-index: 1000;
          transition: var(--transition);
          background: transparent;
        }

        .navbar.scrolled {
          height: 70px;
          background: var(--glass);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          box-shadow: var(--shadow-sm);
          border-bottom: 1px solid var(--border);
        }

        .nav-container {
          display: flex;
          justify-content: space-between;
          align-items: center;
          width: 100%;
        }

        .logo-container {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          text-decoration: none;
          flex: 1;
        }

        .logo-icon {
          color: var(--primary);
        }

        .logo-text {
          font-family: 'Outfit', sans-serif;
          font-size: 1.6rem;
          font-weight: 900;
          color: var(--primary) !important;
          letter-spacing: -1px;
          text-transform: capitalize;
        }

        .logo-text span {
          color: #1e3a8a !important;
        }

        .desktop-links {
          display: none;
          align-items: center;
          justify-content: center;
          gap: 2rem;
        }

        @media (min-width: 1024px) {
          .desktop-links {
            display: flex;
          }
          
          .nav-actions {
            flex: 1;
            justify-content: flex-end;
          }
        }

        .nav-actions {
          display: flex;
          align-items: center;
          gap: 1rem;
        }

        @media (max-width: 1024px) {
          .translate-widget {
            position: absolute;
            top: 520px; /* Position inside the open mobile menu below the donate button */
            left: 2rem;
            z-index: 2000;
            opacity: 0;
            pointer-events: none;
            transition: opacity 0.3s ease;
          }
          
          .navbar.menu-open .translate-widget {
            opacity: 1;
            pointer-events: auto;
          }
        }

        .nav-link {
          font-weight: 500;
          color: var(--text-main);
          font-size: 0.95rem;
          position: relative;
        }

        .nav-link:hover, .nav-link.active {
          color: var(--primary);
        }

        .nav-link.active::after {
          content: '';
          position: absolute;
          bottom: -5px;
          left: 0;
          width: 100%;
          height: 2px;
          background: var(--primary);
          border-radius: 2px;
        }

        .btn-donate-nav {
          display: none;
          background: var(--primary);
          color: white;
          padding: 0.6rem 1.5rem;
          border-radius: var(--radius-md);
          font-weight: 600;
          font-size: 0.95rem;
          white-space: nowrap;
          box-shadow: 0 4px 14px 0 rgba(16, 185, 129, 0.39);
        }

        @media (min-width: 1024px) {
          .btn-donate-nav {
            display: inline-block;
          }
        }

        .btn-donate-nav:hover {
          background: var(--primary-dark);
          transform: translateY(-2px);
          box-shadow: 0 6px 20px rgba(16, 185, 129, 0.23);
        }

        .mobile-toggle {
          display: flex;
          align-items: center;
          justify-content: center;
          color: #0f172a !important; /* Force dark color so it's always visible */
          z-index: 50;
          padding: 0.5rem;
          margin-right: -0.5rem; /* Offset padding */
        }

        @media (min-width: 1024px) {
          .mobile-toggle {
            display: none !important;
          }
        }

        .mobile-menu {
          position: absolute;
          top: 80px;
          left: 0;
          right: 0;
          background: white;
          padding: 2rem 2rem 6rem 2rem; /* Extra padding at bottom for translate widget */
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
          box-shadow: var(--shadow-lg);
          border-bottom: 1px solid var(--border);
        }

        .mobile-link {
          font-size: 1.1rem;
          font-weight: 600;
          color: var(--text-main);
        }

        .mobile-link.active {
          color: var(--primary);
        }

        .btn-donate-mobile {
          background: var(--primary);
          color: white;
          padding: 1rem;
          text-align: center;
          border-radius: var(--radius-md);
          font-weight: 700;
        }
      `}</style>
    </nav>
  );
};

export default Navbar;
