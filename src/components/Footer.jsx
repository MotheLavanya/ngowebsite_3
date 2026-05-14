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
            <Link to="/privacy-policy">Privacy Policy</Link>
            <Link to="/terms-of-service">Terms of Service</Link>
            <Link to="/contact">Refund Policy</Link>
          </div>
        </div>
      </div>

      <style>{`
        .footer {
          background: #0f172a;
          padding: 4rem 0 2rem;
          color: #f8fafc;
        }

        .footer-grid {
          display: grid;
          grid-template-columns: repeat(1, 1fr);
          gap: 2rem;
          margin-bottom: 2.5rem;
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
          gap: 0.75rem;
          margin-bottom: 1.25rem;
          text-decoration: none;
        }

        .logo-text {
          color: #fff;
          font-size: 1.4rem;
          font-weight: 800;
        }

        .footer-desc {
          color: #94a3b8;
          font-size: 0.95rem;
          line-height: 1.6;
          max-width: 320px;
          margin-bottom: 1.5rem;
        }

        .social-links {
          display: flex;
          gap: 0.75rem;
        }

        .social-icon {
          width: 40px;
          height: 40px;
          border-radius: 0.75rem;
          background: rgba(255, 255, 255, 0.05);
          display: flex;
          align-items: center;
          justify-content: center;
          color: #94a3b8;
          border: 1px solid rgba(255, 255, 255, 0.1);
          transition: all 0.3s ease;
        }

        .social-icon:hover {
          background: var(--primary);
          color: white;
          transform: translateY(-5px);
          border-color: var(--primary);
          box-shadow: 0 10px 20px rgba(37, 99, 235, 0.2);
        }

        .footer-links h3, .footer-contact h3 {
          font-family: 'Outfit', sans-serif;
          font-size: 0.9rem;
          font-weight: 800;
          text-transform: uppercase;
          letter-spacing: 2px;
          margin-bottom: 1.5rem;
          color: #fff;
        }

        .footer-links ul {
          list-style: none;
        }

        .footer-links li {
          margin-bottom: 0.6rem;
        }

        .footer-links a {
          color: #94a3b8;
          font-size: 0.95rem;
          transition: all 0.3s ease;
          text-decoration: none;
        }

        .footer-links a:hover {
          color: var(--primary);
          padding-left: 8px;
        }

        .footer-contact {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .contact-item {
          display: flex;
          gap: 1rem;
          color: #94a3b8;
          font-size: 0.95rem;
          line-height: 1.4;
        }

        .contact-item .icon {
          color: var(--primary);
          flex-shrink: 0;
        }

        .footer-bottom {
          padding-top: 1.5rem;
          border-top: 1px solid rgba(255, 255, 255, 0.05);
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
          color: #64748b;
          font-size: 0.9rem;
        }

        .footer-legal {
          display: flex;
          gap: 2rem;
        }

        .footer-legal a {
          color: #64748b;
          font-size: 0.9rem;
          text-decoration: none;
          transition: color 0.3s ease;
        }

        .footer-legal a:hover {
          color: #fff;
        }
      `}</style>
    </footer>
  );
};

export default Footer;
