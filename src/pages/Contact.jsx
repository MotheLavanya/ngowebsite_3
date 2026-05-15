import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin, Phone, Mail, Send, Globe, Share2, Play, Heart, CheckCircle } from 'lucide-react';
import SectionHeader from '../components/SectionHeader';
import Button from '../components/Button';
import './Contact.css';

const Contact = () => {
  const [formStatus, setFormStatus] = useState('idle'); // idle | sending | sent

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormStatus('sending');
    setTimeout(() => {
      setFormStatus('sent');
      e.target.reset();
      setTimeout(() => setFormStatus('idle'), 5000);
    }, 1500);
  };

  const pillars = [
    { 
      title: 'Global Outreach', 
      desc: 'Based in Hyderabad, serving across 15+ rural districts.', 
      icon: MapPin, 
      info: 'Road No. 36, Jubilee Hills, Hyderabad' 
    },
    { 
      title: 'Direct Line', 
      desc: 'Available Mon-Sat for immediate inquiries and support.', 
      icon: Phone, 
      info: '+91 40 1234 5678' 
    },
    { 
      title: 'Digital Support', 
      desc: 'We usually respond to all emails within 24 hours.', 
      icon: Mail, 
      info: 'hello@empowerhope.org' 
    }
  ];

  return (
    <div className="contact-page-v5">
      
      {/* ── Simple Header ── */}
      <section className="v5-simple-header">
        <div className="container">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            style={{ textAlign: 'center' }}
          >
            <h1>Get In <span>Touch</span>.</h1>
            <p>We're here to answer any questions and explore how we can work together.</p>
          </motion.div>
        </div>
      </section>

      {/* ── Split Layout Section ── */}
      <section className="contact-split-section-v6">
        <div className="container contact-split-grid-v6">
          
          {/* Left Side: Details */}
          <div className="contact-details-side">
            <SectionHeader subtitle="Connect with Us" title="Contact Details" alignment="left" />
            <div className="details-pillar-list">
              {pillars.map((p, i) => (
                <motion.div 
                  key={p.title}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="detail-item-v6"
                >
                  <div className="detail-icon"><p.icon size={24} /></div>
                  <div className="detail-text">
                    <h3>{p.title}</h3>
                    <p>{p.desc}</p>
                    <strong>{p.info}</strong>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="social-connect-v6">
              <h3>Follow Our Impact</h3>
              <div className="social-links-v6">
                <a href="#"><Globe size={20} /></a>
                <a href="#"><Share2 size={20} /></a>
                <a href="#"><Play size={20} /></a>
              </div>
            </div>
          </div>

          {/* Right Side: Form */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="contact-form-side"
          >
            <div className="v5-glass-form">
              <div style={{ marginBottom: '3rem' }}>
                <SectionHeader subtitle="Inquiry" title="Send a Message" alignment="left" />
              </div>

              <form onSubmit={handleSubmit}>
                <div className="v5-form-grid">
                  <div className="v5-input-group">
                    <label>Name</label>
                    <input type="text" placeholder="Your name" required />
                  </div>
                  <div className="v5-input-group">
                    <label>Email</label>
                    <input type="email" placeholder="Email address" required />
                  </div>
                </div>

                <div className="v5-input-group" style={{ marginBottom: '2rem' }}>
                  <label>Message</label>
                  <textarea placeholder="How can we help?" required></textarea>
                </div>

                <Button variant="primary" size="lg" icon={Send} className="btn-full" disabled={formStatus === 'sending'}>
                  {formStatus === 'sending' ? 'Sending...' : 'Send Message'}
                </Button>

                <AnimatePresence>
                  {formStatus === 'sent' && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0 }}
                      style={{
                        marginTop: '1.5rem',
                        padding: '1rem 1.5rem',
                        background: '#f0fdf4',
                        border: '1px solid #86efac',
                        borderRadius: '1rem',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.75rem',
                        color: '#15803d',
                        fontWeight: 600
                      }}
                    >
                      <CheckCircle size={20} />
                      Message sent! We'll get back to you within 24 hours.
                    </motion.div>
                  )}
                </AnimatePresence>
              </form>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── High-Impact Map ── */}
      <section className="v5-map-section">
        <div className="v5-map-container">
          <iframe 
            title="Location Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.750849319041!2d78.39893967590823!3d17.42371990176841!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb9158f201b205%3A0x11bbe7be7792411b!2sJubilee%20Hills%2C%20Hyderabad%2C%20Telangana!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin" 
            width="100%" 
            height="100%" 
            style={{ border: 0 }} 
            allowFullScreen="" 
            loading="lazy"
          ></iframe>
          
          <motion.div 
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="map-overlay-card"
          >
            <div className="pillar-icon-wrap" style={{ margin: '0 0 2rem 0' }}>
              <Heart />
            </div>
            <h3>Hyderabad HQ</h3>
            <p>Our central hub for innovation and rural impact programs across the state.</p>
            <div style={{ marginTop: '1.5rem', fontWeight: 900, fontSize: '0.8rem', opacity: 0.6 }}>
              OPEN MON - SAT, 9AM - 6PM
            </div>
          </motion.div>
        </div>
      </section>

    </div>
  );
};

export default Contact;
