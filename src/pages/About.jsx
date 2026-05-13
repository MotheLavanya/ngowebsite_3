import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Target, Eye, ShieldCheck, Award, Zap, Globe, Sparkles, ArrowRight, Quote } from 'lucide-react';
import SectionHeader from '../components/SectionHeader';
import './About.css';

const About = () => {
  const values = [
    { title: 'Transparency', desc: 'Radical honesty in every donation and project.', icon: ShieldCheck, color: '#f59e0b' },
    { title: 'Inclusivity', desc: 'Empowering everyone, regardless of origin.', icon: Globe, color: '#3b82f6' },
    { title: 'Innovation', desc: 'Creative solutions for systemic challenges.', icon: Zap, color: '#8b5cf6' },
    { title: 'Excellence', desc: 'Maximum impact in every single initiative.', icon: Award, color: '#10b981' },
  ];

  return (
    <div className="about-v3-page">
      {/* Immersive Mosaic Hero */}
      <section className="about-v3-hero">
        <div className="container hero-v3-grid">
          <div className="hero-v3-text">
            <motion.span 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="v3-kicker"
            >
              Our Foundation
            </motion.span>
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
            >
              We are the <span>architects</span> of a new <span>future.</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              Established in 2015, we've grown from a local initiative into a nationwide movement for social equity and empowerment.
            </motion.p>
            <div className="v3-hero-stats">
              <div className="v3-stat"><strong>9+</strong> <span>Years</span></div>
              <div className="v3-stat"><strong>50K+</strong> <span>Lives</span></div>
              <div className="v3-stat"><strong>15+</strong> <span>Districts</span></div>
            </div>
          </div>
          <div className="hero-v3-visual">
            <motion.div 
              animate={{ y: [0, -20, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="v3-img-large"
            >
              <img src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=800" alt="Hope" />
            </motion.div>
            <motion.div 
              animate={{ y: [0, 20, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="v3-img-small"
            >
              <img src="https://images.unsplash.com/photo-1542810634-71277d95dcbb?q=80&w=400" alt="Impact" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* The Impact Canvas (Mission & Vision) */}
      <section className="manifesto-immersive">
        <div className="immersive-panels">
          <motion.div 
            whileHover={{ flex: 1.2 }}
            className="panel mission-panel"
          >
            <div className="panel-bg">
              <img src="https://images.unsplash.com/photo-1497633762265-9d179a990aa6?q=80&w=1000" alt="Mission" />
              <div className="panel-overlay" />
            </div>
            <div className="panel-content">
              <Target size={48} className="panel-icon" />
              <span>THE MISSION</span>
              <h2>Igniting <br />Change.</h2>
              <p>To disrupt the cycle of poverty through high-impact education, healthcare, and livelihood programs that empower the underserved.</p>
            </div>
          </motion.div>
          
          <motion.div 
            whileHover={{ flex: 1.2 }}
            className="panel vision-panel"
          >
            <div className="panel-bg">
              <img src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=1000" alt="Vision" />
              <div className="panel-overlay" />
            </div>
            <div className="panel-content">
              <Eye size={48} className="panel-icon" />
              <span>THE VISION</span>
              <h2>Building <br />Legacy.</h2>
              <p>A society where every individual has the opportunity to thrive and contribute to a prosperous nation with dignity.</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* The Pillars (Bento Style) */}
      <section className="pillars-bento section-padding">
        <div className="container">
          <SectionHeader subtitle="How We Work" title="Our Core Principles" />
          <div className="bento-values-grid">
            {values.map((v, idx) => (
              <motion.div 
                key={v.title}
                whileHover={{ y: -10 }}
                className={`bento-value-item item-${idx + 1}`}
                style={{ '--accent': v.color }}
              >
                <div className="bento-value-icon"><v.icon size={32} /></div>
                <div className="bento-value-text">
                  <h3>{v.title}</h3>
                  <p>{v.desc}</p>
                </div>
                <div className="bento-value-bg" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Creative Founder Section */}
      <section className="founder-asymmetric section-padding">
        <div className="container founder-grid-v3">
          <div className="founder-image-v3">
            <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=600" alt="Founder" />
            <div className="founder-name-tag">
              <h3>Dr. Anjali Rao</h3>
              <span>Founder & Chairperson</span>
            </div>
          </div>
          <div className="founder-quote-v3">
            <Quote size={64} className="quote-icon-v3" />
            <blockquote>
              "Transformation is not an event, it is a persistent effort. We are here to ensure that hope is never a luxury."
            </blockquote>
            <p>Dr. Rao left a decade-long corporate career in London to return to her roots in Hyderabad, driven by a single vision: to ensure that no child's future is determined by their birthplace.</p>
            <motion.button 
              whileHover={{ x: 10 }}
              className="read-story-btn"
            >
              Read Her Story <ArrowRight size={20} />
            </motion.button>
          </div>
        </div>
      </section>

      {/* Global Impact Recognition */}
      <section className="impact-recognition section-padding-compact">
        <div className="container">
          <div className="recognition-strip">
            <div className="rec-item">
              <ShieldCheck size={32} />
              <h4>80G Approved</h4>
            </div>
            <div className="rec-divider" />
            <div className="rec-item">
              <Award size={32} />
              <h4>ISO Certified</h4>
            </div>
            <div className="rec-divider" />
            <div className="rec-item">
              <Globe size={32} />
              <h4>Global Impact</h4>
            </div>
            <div className="rec-divider" />
            <div className="rec-item">
              <Sparkles size={32} />
              <h4>Platinum NGO</h4>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
