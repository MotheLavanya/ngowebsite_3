import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, Mail, Phone, MapPin, Globe, Share2, Play } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          {/* Brand Info */}
          <div className="footer-brand">
            <Link to="/" className="footer-logo">
              <Heart className="logo-icon" size={28} fill="var(--primary)" />
              <span className="logo-text">Empower<span>Hope</span></span>
            </Link>
            <p className="footer-desc">
              Dedicated to creating sustainable change in communities across Hyderabad and Telangana through education, healthcare, and empowerment.
            </p>
            <div className="social-links">
              <a href="#" className="social-icon" title="Instagram"><Share2 size={20} /></a>
              <a href="#" className="social-icon" title="Twitter"><Globe size={20} /></a>
              <a href="#" className="social-icon" title="Facebook"><Globe size={20} /></a>
              <a href="#" className="social-icon" title="Youtube"><Play size={20} /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="footer-links">
            <h3>Quick Links</h3>
            <ul>
              <li><Link to="/about">Our Story</Link></li>
              <li><Link to="/programs">Programs</Link></li>
              <li><Link to="/impact">Impact Stories</Link></li>
              <li><Link to="/volunteer">Get Involved</Link></li>
              <li><Link to="/transparency">Transparency</Link></li>
            </ul>
          </div>

          {/* Support */}
          <div className="footer-links">
            <h3>Support Us</h3>
            <ul>
              <li><Link to="/donate">Donate Now</Link></li>
              <li><Link to="/volunteer">Volunteer</Link></li>
              <li><Link to="/contact">Partner with Us</Link></li>
              <li><Link to="/blog">Latest News</Link></li>
              <li><Link to="/contact">Contact Us</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="footer-contact">
            <h3>Contact Us</h3>
            <div className="contact-item">
              <MapPin size={20} className="icon" />
              <span>123 Hope Avenue, Jubilee Hills, Hyderabad, 500033</span>
            </div>
            <div className="contact-item">
              <Phone size={20} className="icon" />
              <span>+91 40 1234 5678</span>
            </div>
            <div className="contact-item">
              <Mail size={20} className="icon" />
              <span>hello@empowerhope.org</span>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {currentYear} EmpowerHope Foundation. Registered Section 8 Company.</p>
          <div className="footer-legal">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
            <a href="#">Refund Policy</a>
          </div>
        </div>
      </div>

      <style>{`
        .footer {
          background: #f8fafc;
          padding: 5rem 0 2rem;
          border-top: 1px solid var(--border);
        }

        .footer-grid {
          display: grid;
          grid-template-columns: repeat(1, 1fr);
          gap: 3rem;
          margin-bottom: 4rem;
        }

        @media (min-width: 768px) {
          .footer-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (min-width: 1024px) {
          .footer-grid {
            grid-template-columns: 2fr 1fr 1fr 1.5fr;
          }
        }

        .footer-logo {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          margin-bottom: 1.5rem;
        }

        .footer-desc {
          color: var(--text-muted);
          font-size: 0.95rem;
          max-width: 320px;
          margin-bottom: 1.5rem;
        }

        .social-links {
          display: flex;
          gap: 1rem;
        }

        .social-icon {
          width: 40px;
          height: 40px;
          border-radius: 50%;
          background: white;
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--text-muted);
          border: 1px solid var(--border);
          transition: var(--transition);
        }

        .social-icon:hover {
          background: var(--primary);
          color: white;
          transform: translateY(-3px);
          border-color: var(--primary);
        }

        .footer-links h3, .footer-contact h3 {
          font-family: 'Outfit', sans-serif;
          font-size: 1.25rem;
          margin-bottom: 1.5rem;
          color: var(--text-main);
        }

        .footer-links ul {
          list-style: none;
        }

        .footer-links li {
          margin-bottom: 0.75rem;
        }

        .footer-links a {
          color: var(--text-muted);
          font-size: 0.95rem;
        }

        .footer-links a:hover {
          color: var(--primary);
          padding-left: 5px;
        }

        .footer-contact {
          display: flex;
          flex-direction: column;
          gap: 1.25rem;
        }

        .contact-item {
          display: flex;
          gap: 1rem;
          color: var(--text-muted);
          font-size: 0.95rem;
        }

        .contact-item .icon {
          color: var(--primary);
          flex-shrink: 0;
        }

        .footer-bottom {
          padding-top: 2rem;
          border-top: 1px solid var(--border);
          display: flex;
          flex-direction: column;
          gap: 1rem;
          align-items: center;
          text-align: center;
        }

        @media (min-width: 768px) {
          .footer-bottom {
            flex-direction: row;
            justify-content: space-between;
            text-align: left;
          }
        }

        .footer-bottom p {
          color: var(--text-muted);
          font-size: 0.85rem;
        }

        .footer-legal {
          display: flex;
          gap: 1.5rem;
        }

        .footer-legal a {
          color: var(--text-muted);
          font-size: 0.85rem;
        }

        .footer-legal a:hover {
          color: var(--primary);
        }
      `}</style>
    </footer>
  );
};

export default Footer;
