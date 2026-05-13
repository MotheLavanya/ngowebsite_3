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
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="container nav-container">
        <Link to="/" className="logo-container">
          <Heart className="logo-icon" size={32} fill="var(--primary)" />
          <span className="logo-text">Empower<span>Hope</span></span>
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
          <Link to="/donate" className="btn-donate-nav">
            Donate Now
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button className="mobile-toggle" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
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
              >
                {link.name}
              </Link>
            ))}
            <Link to="/donate" className="btn-donate-mobile">
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
        }

        .logo-icon {
          color: var(--primary);
        }

        .logo-text {
          font-family: 'Outfit', sans-serif;
          font-size: 1.5rem;
          font-weight: 800;
          color: var(--text-main);
          letter-spacing: -0.5px;
        }

        .logo-text span {
          color: var(--primary);
        }

        .desktop-links {
          display: none;
          align-items: center;
          gap: 2rem;
        }

        @media (min-width: 1024px) {
          .desktop-links {
            display: flex;
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
          background: var(--primary);
          color: white;
          padding: 0.6rem 1.5rem;
          border-radius: var(--radius-md);
          font-weight: 600;
          font-size: 0.95rem;
          box-shadow: 0 4px 14px 0 rgba(16, 185, 129, 0.39);
        }

        .btn-donate-nav:hover {
          background: var(--primary-dark);
          transform: translateY(-2px);
          box-shadow: 0 6px 20px rgba(16, 185, 129, 0.23);
        }

        .mobile-toggle {
          display: block;
          color: var(--text-main);
        }

        @media (min-width: 1024px) {
          .mobile-toggle {
            display: none;
          }
        }

        .mobile-menu {
          position: absolute;
          top: 80px;
          left: 0;
          right: 0;
          background: white;
          padding: 2rem;
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
