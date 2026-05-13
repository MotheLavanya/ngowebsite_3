import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, Send, Globe, Share2, Play } from 'lucide-react';
import SectionHeader from '../components/SectionHeader';
import Button from '../components/Button';

const Contact = () => {
  return (
    <div className="contact-page">
      <section className="page-header">
        <div className="container">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            Get In Touch
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            Have questions about our programs or want to partner with us? We're here to help.
          </motion.p>
        </div>
      </section>

      <section className="contact-section section-padding">
        <div className="container contact-grid">
          {/* Contact Info */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="contact-info"
          >
            <SectionHeader 
              subtitle="Contact Details" 
              title="Visit Our Office in Hyderabad" 
              alignment="left"
            />
            
            <div className="info-items">
              <div className="info-item">
                <div className="icon-box"><MapPin /></div>
                <div>
                  <h3>Our Headquarters</h3>
                  <p>123 Hope Avenue, Road No. 36, Jubilee Hills, Hyderabad, Telangana 500033</p>
                </div>
              </div>

              <div className="info-item">
                <div className="icon-box"><Phone /></div>
                <div>
                  <h3>Phone Number</h3>
                  <p>+91 40 1234 5678</p>
                  <p>+91 98765 43210</p>
                </div>
              </div>

              <div className="info-item">
                <div className="icon-box"><Mail /></div>
                <div>
                  <h3>Email Address</h3>
                  <p>info@empowerhope.org</p>
                  <p>support@empowerhope.org</p>
                </div>
              </div>

              <div className="info-item">
                <div className="icon-box"><Clock /></div>
                <div>
                  <h3>Office Hours</h3>
                  <p>Monday - Saturday: 9:00 AM - 6:00 PM</p>
                  <p>Sunday: Closed</p>
                </div>
              </div>
            </div>

            <div className="social-connect">
              <h3>Follow Our Journey</h3>
              <div className="social-row">
                <a href="#" className="social-link" title="Instagram"><Share2 /></a>
                <a href="#" className="social-link" title="Twitter"><Globe /></a>
                <a href="#" className="social-link" title="Facebook"><Globe /></a>
                <a href="#" className="social-link" title="Youtube"><Play /></a>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="contact-form-container"
          >
            <form className="contact-form">
              <div className="form-row">
                <div className="form-group">
                  <label>First Name</label>
                  <input type="text" placeholder="John" />
                </div>
                <div className="form-group">
                  <label>Last Name</label>
                  <input type="text" placeholder="Doe" />
                </div>
              </div>
              
              <div className="form-group">
                <label>Email Address</label>
                <input type="email" placeholder="john@example.com" />
              </div>

              <div className="form-group">
                <label>Subject</label>
                <select>
                  <option>General Inquiry</option>
                  <option>Volunteer Opportunity</option>
                  <option>Donation Support</option>
                  <option>Partnership Proposal</option>
                </select>
              </div>

              <div className="form-group">
                <label>Your Message</label>
                <textarea rows="5" placeholder="How can we help you?"></textarea>
              </div>

              <Button size="lg" className="btn-full" icon={Send}>
                Send Message
              </Button>
            </form>
          </motion.div>
        </div>
      </section>

      {/* Map Section */}
      <section className="map-section">
        <iframe 
          title="Google Map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.750849319041!2d78.39893967590823!3d17.42371990176841!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb9158f201b205%3A0x11bbe7be7792411b!2sJubilee%20Hills%2C%20Hyderabad%2C%20Telangana!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin" 
          width="100%" 
          height="450" 
          style={{ border: 0 }} 
          allowFullScreen="" 
          loading="lazy" 
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </section>

      <style>{`
        .contact-page .page-header {
          padding: 10rem 0 6rem;
          background: #f8fafc;
          text-align: center;
        }

        .contact-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 4rem;
        }

        @media (min-width: 1024px) {
          .contact-grid {
            grid-template-columns: 1fr 1.2fr;
          }
        }

        .info-items {
          display: flex;
          flex-direction: column;
          gap: 2rem;
          margin-bottom: 3rem;
        }

        .info-item {
          display: flex;
          gap: 1.5rem;
          align-items: flex-start;
        }

        .info-item .icon-box {
          width: 48px;
          height: 48px;
          background: #f0fdf4;
          color: var(--primary);
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .info-item h3 {
          font-size: 1.15rem;
          margin-bottom: 0.5rem;
          color: var(--text-main);
        }

        .info-item p {
          color: var(--text-muted);
          margin-bottom: 0;
          font-size: 0.95rem;
          line-height: 1.5;
        }

        .social-connect h3 {
          font-size: 1.25rem;
          margin-bottom: 1.5rem;
        }

        .social-row {
          display: flex;
          gap: 1rem;
        }

        .social-link {
          width: 44px;
          height: 44px;
          border-radius: 50%;
          background: white;
          color: var(--text-muted);
          display: flex;
          align-items: center;
          justify-content: center;
          border: 1px solid var(--border);
          transition: var(--transition);
        }

        .social-link:hover {
          background: var(--primary);
          color: white;
          border-color: var(--primary);
          transform: translateY(-3px);
        }

        .contact-form-container {
          background: white;
          padding: 3rem;
          border-radius: 2rem;
          box-shadow: var(--shadow-lg);
          border: 1px solid var(--border);
        }

        .form-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1.5rem;
        }

        .form-group {
          margin-bottom: 1.5rem;
        }

        .form-group label {
          display: block;
          font-weight: 700;
          margin-bottom: 0.75rem;
          font-size: 0.9rem;
          color: var(--text-main);
        }

        .form-group input, .form-group select, .form-group textarea {
          width: 100%;
          padding: 1rem;
          border-radius: var(--radius-md);
          border: 1px solid #e2e8f0;
          background: #f8fafc;
          outline: none;
          font-family: inherit;
          font-size: 1rem;
        }

        .form-group input:focus, .form-group select:focus, .form-group textarea:focus {
          border-color: var(--primary);
          background: white;
        }

        .btn-full {
          width: 100%;
        }

        .map-section {
          line-height: 0;
          filter: grayscale(0.5);
          transition: var(--transition);
        }

        .map-section:hover {
          filter: grayscale(0);
        }
      `}</style>
    </div>
  );
};

export default Contact;
