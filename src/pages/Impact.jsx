import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, Users, Heart, Globe, Shield, Activity } from 'lucide-react';
import Button from '../components/Button';
import SectionHeader from '../components/SectionHeader';
import './Impact.css';

const Impact = () => {
  const stats = [
    { label: 'Total Beneficiaries', value: '150,000', span: '+', class: 'bento-main' },
    { label: 'Rural Districts', value: '18', span: '', class: 'bento-small' },
    { label: 'Active Volunteers', value: '2,500', span: '+', class: 'bento-small' },
    { label: 'Success Stories', value: '12K', span: '+', class: 'bento-wide' },
  ];

  const stories = [
    {
      name: 'Rohan Sharma',
      location: 'Hyderabad',
      quote: 'I never thought I could go to school. EmpowerHope gave me the books and the confidence I needed.',
      role: 'Student, Grade 10',
      image: 'https://images.unsplash.com/photo-1503917988258-f197e2f3baaf?q=80&w=1974&auto=format&fit=crop',
      avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=1974&auto=format&fit=crop'
    },
    {
      name: 'Priya Reddy',
      location: 'Mahbubnagar',
      quote: 'The tailoring workshop changed my life. I now run a small shop and support my children’s education.',
      role: 'Small Business Owner',
      image: 'https://images.unsplash.com/photo-1489980507514-f51a6042c108?q=80&w=2070&auto=format&fit=crop',
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1974&auto=format&fit=crop'
    },
    {
      name: 'Meera Bai',
      location: 'Medak',
      quote: 'The literacy program helped me understand my rights. I am no longer afraid to speak up for my village.',
      role: 'Community Advocate',
      image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1976&auto=format&fit=crop',
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=2070&auto=format&fit=crop'
    },
    {
      name: 'Lokesh G.',
      location: 'Medak',
      quote: 'The mobile health unit saved my grandfather during a crisis. We are forever grateful for the immediate care.',
      role: 'Health Beneficiary',
      image: 'https://images.unsplash.com/photo-1584432810601-6c7f27d2362b?q=80&w=2083&auto=format&fit=crop',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=2070&auto=format&fit=crop'
    },
    {
      name: 'Savitri Devi',
      location: 'Nalgonda',
      quote: 'Through the micro-loan program, our collective of 10 women started an organic farm that feeds 100 families.',
      role: 'Farmer & Leader',
      image: 'https://images.unsplash.com/photo-1500937386664-56d1dfef3854?q=80&w=2070&auto=format&fit=crop',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=2042&auto=format&fit=crop'
    },
    {
      name: 'Arjun V.',
      location: 'Vikarabad',
      quote: 'Clean water was a distant dream for us. Now, the community is healthy and thriving thanks to the new solar wells.',
      role: 'Village Sarpanch',
      image: 'https://images.unsplash.com/photo-1510519133418-24353c78f1c5?q=80&w=2070&auto=format&fit=crop',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1974&auto=format&fit=crop'
    }
  ];

  return (
    <div className="impact-page">
      {/* ── Asymmetric Geometric Hero ── */}
      <section className="impact-hero-v3">
        <div className="container impact-v3-container">
          <div className="impact-v3-content">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <span className="v3-kicker">THE LEGACY</span>
              <h1>Real <span>Transformation</span> <br/> in Real Time.</h1>
              <p>Witness the tangible results of our mission. Every data point here represents a life changed, a community strengthened, and a future secured.</p>
              <div className="v3-hero-actions">
                <Button to="/donate" variant="primary">Invest in Change</Button>
                <div className="v3-live-tag">
                  <div className="pulse-dot" />
                  <span>Live Impact Feed</span>
                </div>
              </div>
            </motion.div>
          </div>

          <div className="impact-v3-visual">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
              className="v3-portal-main"
            >
              <img src="/hero_impact_foundation_1778653399978.png" alt="Community Impact" />
            </motion.div>
            <motion.div 
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="v3-portal-sub s1"
            >
              <img src="/programs_hero_education_1778921539494.png" alt="Education" />
            </motion.div>
            <motion.div 
              animate={{ y: [0, 20, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
              className="v3-portal-sub s2"
            >
              <img src="/programs_hero_healthcare_1778921577563.png" alt="Healthcare" />
            </motion.div>
            <div className="v3-accent-blob" />
          </div>
        </div>
      </section>

      {/* ── High-Contrast Impact Bar ── */}
      <section className="impact-stats-section-v4">
        <div className="container">
          <div className="impact-stats-row-v4">
            {stats.map((s, i) => (
              <motion.div 
                key={s.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="stat-card-v4"
              >
                <div className="stat-value-v4">
                  <h3>{s.value}</h3>
                  <span>{s.span}</span>
                </div>
                <p className="stat-label-v4">{s.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Expanding Vertical Bars V7 ── */}
      <section className="impact-vertical-stories-v7">
        <div className="container">
          <div className="stories-v5-header">
            <span className="impact-kicker">THE HUMAN ELEMENT</span>
            <h2>Voices of <span>Change</span></h2>
            <div className="header-bg-text">STORIES</div>
          </div>
          
          <div className="v7-accordion-container">
            {stories.map((story, i) => (
              <div 
                key={story.name}
                className="v7-panel"
              >
                <div className="v7-panel-bg">
                  <img src={story.image} alt={story.name} />
                  <div className="v7-panel-overlay" />
                </div>
                
                <div className="v7-panel-content">
                  <div className="v7-collapsed-info">
                    <img src={story.avatar} alt={story.name} />
                    <span className="v7-vertical-name">{story.name}</span>
                  </div>
                  
                  <div className="v7-expanded-info">
                    <div className="v7-quote-mark">“</div>
                    <p>"{story.quote}"</p>
                    <div className="v7-author-footer">
                      <h4>{story.name}</h4>
                      <span>{story.role} • {story.location}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Modern Growth Timeline ── */}
      <section className="impact-timeline-section">
        <div className="container">
          <div className="timeline-header">
            <span className="impact-kicker">OUR JOURNEY</span>
            <h2>Scaling the Future</h2>
          </div>
          <div className="timeline-row">
            {[
              { year: '2021', title: 'The Genesis', desc: 'Founded with a mission to empower 1,000 children in Hyderabad.' },
              { year: '2022', title: 'Districts Reached', desc: 'Expanded to 5 districts; launched Swasthya Health Camps.' },
              { year: '2023', title: '50K+ Lives', desc: 'Major milestone reached; introduced Nari Shakti micro-loans.' },
              { year: '2024', title: 'Digital Villages', desc: '15+ villages connected via new Digital Literacy centers.' },
            ].map((m, i) => (
              <motion.div 
                key={m.year}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="milestone-card"
              >
                <div className="m-year">{m.year}</div>
                <h4>{m.title}</h4>
                <p>{m.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── High-Density Impact Metrics ── */}
      <section className="impact-metrics-mini-section">
        <div className="container">
          <div className="metrics-bento-grid">
            {[
              { icon: <Globe />, label: 'Solar Wells', value: '500+', color: '#3b82f6' },
              { icon: <Heart />, label: 'Literacy Kits', value: '45K+', color: '#ec4899' },
              { icon: <Activity />, label: 'Health Units', value: '200+', color: '#10b981' },
              { icon: <Shield />, label: 'Micro-Loans', value: '15K+', color: '#f59e0b' },
            ].map((m, i) => (
              <motion.div 
                key={m.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="metric-mini-card"
              >
                <div className="metric-icon-wrap" style={{ color: m.color, background: `${m.color}15` }}>
                  {m.icon}
                </div>
                <div className="metric-data">
                  <h3>{m.value}</h3>
                  <p>{m.label}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Moments of Hope Mosaic Gallery ── */}
      <section className="impact-mosaic-gallery-v5">
        <div className="container mosaic-gallery-grid-v5">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="mosaic-gallery-text-v5"
          >
            <span className="impact-kicker">PHOTO GALLERY</span>
            <h2>Moments of <span>Hope</span>.</h2>
            <p>A visual journey through the lives we touch and the communities we build together.</p>
            <Button to="/volunteer" variant="outline" style={{ marginTop: '2rem' }}>Join the Journey</Button>
          </motion.div>

          <div className="mosaic-gallery-collage-v5">
            <motion.img 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              src="https://images.unsplash.com/photo-1509099836639-18ba1795216d?q=80&w=800" 
              className="gallery-img-v5 g1" 
              alt="Community" 
            />
            <motion.img 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              src="https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?q=80&w=400" 
              className="gallery-img-v5 g2" 
              alt="Education" 
            />
            <motion.img 
              initial={{ opacity: 0, y: -30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              src="https://images.unsplash.com/photo-1500937386664-56d1dfef3854?q=80&w=400" 
              className="gallery-img-v5 g3" 
              alt="Health" 
            />
          </div>
        </div>
      </section>

      {/* ── Transparency & Reach ── */}
      <section className="transparency-section">
        <div className="container">
          <div className="transparency-box">
            <span className="impact-kicker">TRANSPARENCY & TRUST</span>
            <h2>How your support is utilized</h2>
            <div className="transparency-grid">
              <div className="trans-item">
                <Shield size={32} strokeWidth={1} />
                <h4>92%</h4>
                <p>Funds directed to Programs</p>
              </div>
              <div className="trans-item">
                <Globe size={32} strokeWidth={1} />
                <h4>150+</h4>
                <p>Villages Empowered</p>
              </div>
              <div className="trans-item">
                <Activity size={32} strokeWidth={1} />
                <h4>Daily</h4>
                <p>On-ground Impact Reports</p>
              </div>
            </div>
            <div style={{ marginTop: '2.5rem' }}>
              <Button to="/donate" variant="primary">Invest in a Future</Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Impact;

