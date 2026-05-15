import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Users, Book, Award, Heart, CheckCircle, Send } from 'lucide-react';
import Button from '../components/Button';
import './Volunteer.css';

const Volunteer = () => {
  const [formStatus, setFormStatus] = useState('idle');

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormStatus('sending');
    setTimeout(() => {
      setFormStatus('sent');
      e.target.reset();
      setTimeout(() => setFormStatus('idle'), 6000);
    }, 1500);
  };

  const roles = [
    {
      icon: <Book />,
      title: "Teaching & Mentoring",
      desc: "Help children with their studies, digital literacy, or spoken English in our weekend camps.",
      number: "01"
    },
    {
      icon: <Award />,
      title: "Skill Development",
      desc: "Train women in vocational skills like tailoring, marketing, or basic accounting.",
      number: "02"
    },
    {
      icon: <Users />,
      title: "Event Management",
      desc: "Assist in organizing health camps, awareness drives, and fundraising events.",
      number: "03"
    },
    {
      icon: <Heart />,
      title: "Digital Advocacy",
      desc: "Help us spread the word through social media, photography, or content writing.",
      number: "04"
    }
  ];

  return (
    <div className="volunteer-page">

      {/* ── Hero ── */}
      <section className="volunteer-hero-v4">
        <div className="container volunteer-v4-container">
          <div className="v4-hero-content">
            <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }}>
              <span className="v4-kicker">BE THE CHANGE</span>
              <h1>Turn Your <span>Compassion</span> <br/> Into Action.</h1>
              <p>Join a community of 2,500+ dedicated volunteers making a tangible difference in rural India. Your skills, time, and heart can transform a generation.</p>
              <div className="v4-hero-actions">
                <Button to="#apply" variant="primary" size="lg">Join the Mission</Button>
              </div>
            </motion.div>
          </div>

          <div className="v4-hero-visual">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="v4-portal-wrap"
            >
              <img
                src="https://images.unsplash.com/photo-1593113598332-cd288d649433?q=80&w=2070&auto=format&fit=crop"
                alt="Volunteer Hero"
                className="v4-portal-image"
              />
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="v4-floating-badge"
              >
                <div className="v4-badge-icon"><CheckCircle size={20} /></div>
                <div className="v4-badge-info">
                  <h4>2,500+</h4>
                  <span>Active Volunteers</span>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Pillars ── */}
      <section className="roles-section-v4">
        <div className="container">
          <div className="v4-section-header" style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <span className="v4-kicker">OPPORTUNITIES</span>
            <h2 style={{ fontSize: '3rem', fontWeight: 950, color: '#0f172a' }}>Pillars of Impact</h2>
          </div>
          <div className="roles-v4-grid">
            {roles.map((role, i) => (
              <motion.div
                key={role.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="role-pillar-v4"
              >
                <span className="pillar-number">{role.number}</span>
                <div className="p-icon">{role.icon}</div>
                <div className="p-content">
                  <h3>{role.title}</h3>
                  <p>{role.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Application Form ── */}
      <section id="apply" className="apply-section-v4">
        <div className="v4-orb o1" />
        <div className="v4-orb o2" />

        <div className="container v4-form-container">
          <motion.div 
            className="v4-form-header"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2>Ready to Start?</h2>
            <p>Tell us about yourself and we'll find the perfect opportunity for you to make an impact.</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="v4-glass-form"
          >
            <AnimatePresence mode="wait">
              {formStatus === 'sent' ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  style={{ textAlign: 'center', padding: '4rem 2rem' }}
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: 'spring', stiffness: 200, delay: 0.1 }}
                    style={{
                      width: '80px', height: '80px',
                      background: '#f0fdf4', borderRadius: '50%',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      margin: '0 auto 2rem',
                    }}
                  >
                    <CheckCircle size={40} color="#16a34a" />
                  </motion.div>
                  <h3 style={{ fontSize: '1.75rem', fontWeight: 900, color: '#0f172a', marginBottom: '1rem' }}>
                    Application Submitted! 🎉
                  </h3>
                  <p style={{ color: '#64748b', fontSize: '1.1rem', maxWidth: '400px', margin: '0 auto' }}>
                    Thank you for applying! Our team will review your application and contact you within 2–3 business days.
                  </p>
                </motion.div>
              ) : (
                <motion.form key="form" onSubmit={handleSubmit}>
                  <div className="v4-form-row">
                    <div className="v4-input-group">
                      <input type="text" placeholder="Full Name" required />
                    </div>
                    <div className="v4-input-group">
                      <input type="email" placeholder="Email Address" required />
                    </div>
                  </div>
                  <div className="v4-form-row">
                    <div className="v4-input-group">
                      <input type="tel" placeholder="Phone Number" required />
                    </div>
                    <div className="v4-input-group">
                      <select
                        required
                        style={{ color: '#0f172a', background: '#ffffff', cursor: 'pointer' }}
                      >
                        <option value="" style={{ color: '#94a3b8' }}>Area of Interest</option>
                        <option value="education" style={{ color: '#0f172a' }}>Education</option>
                        <option value="health" style={{ color: '#0f172a' }}>Healthcare</option>
                        <option value="women" style={{ color: '#0f172a' }}>Women Empowerment</option>
                        <option value="digital" style={{ color: '#0f172a' }}>Digital Literacy</option>
                        <option value="environment" style={{ color: '#0f172a' }}>Environment</option>
                      </select>
                    </div>
                  </div>
                  <textarea placeholder="Why do you want to join our mission?" required></textarea>
                  <div className="v4-form-submit">
                    <Button variant="primary" size="lg" icon={Send} disabled={formStatus === 'sending'}>
                      {formStatus === 'sending' ? 'Submitting...' : 'Submit Application'}
                    </Button>
                  </div>
                </motion.form>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

    </div>
  );
};

export default Volunteer;
