import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, HeartPulse, Sparkles, Sprout, ArrowRight, TrendingUp, Users, MapPin, Globe } from 'lucide-react';
import SectionHeader from '../components/SectionHeader';
import Button from '../components/Button';
import './Programs.css';

const Programs = () => {
  const programs = [
    {
      title: 'Project Shiksha',
      subtitle: 'Knowledge for all',
      kicker: 'EDUCATION',
      desc: 'Breaking the cycle of poverty by providing quality primary education and digital learning tools to children in underserved communities.',
      stats: [
        { label: 'Students', value: '5,000+' },
        { label: 'Schools', value: '12+' }
      ],
      icon: BookOpen,
      color: '#f97316',
      image: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&q=80&w=800'
    },
    {
      title: 'Swasthya Camp',
      subtitle: 'Health as a Right',
      kicker: 'HEALTHCARE',
      desc: 'Mobile healthcare units bringing diagnostic tools, essential medicine, and professional care to remote villages and urban slums.',
      stats: [
        { label: 'Villages', value: '150+' },
        { label: 'Checkups', value: '25K+' }
      ],
      icon: HeartPulse,
      color: '#2563eb',
      image: 'https://images.unsplash.com/photo-1584515933487-779824d29309?auto=format&fit=crop&q=80&w=800'
    },
    {
      title: 'Nari Shakti',
      subtitle: 'Empowered Leaders',
      kicker: 'WOMEN EMPOWERMENT',
      desc: 'Providing vocational training and micro-loans to women, fostering financial independence and community leadership.',
      stats: [
        { label: 'Women', value: '1,200+' },
        { label: 'Startups', value: '300+' }
      ],
      icon: Sparkles,
      color: '#8b5cf6',
      image: 'https://images.unsplash.com/photo-1533221216134-c3309f30dd52?auto=format&fit=crop&q=80&w=800'
    },
    {
      title: 'Green Telangana',
      subtitle: 'Nature Recovery',
      kicker: 'ENVIRONMENT',
      desc: 'Massive afforestation and water conservation projects designed to restore local ecosystems and promote sustainable farming.',
      stats: [
        { label: 'Trees', value: '50K+' },
        { label: 'Liters', value: '1M+' }
      ],
      icon: Sprout,
      color: '#0ea5e9',
      image: 'https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?auto=format&fit=crop&q=80&w=800'
    }
  ];

  return (
    <div className="programs-page">
      {/* ── Ultra-Creative Mosaic Hero ── */}
      <section className="programs-hero-v5">
        <div className="v5-hero-background" />
        
        <div className="container v5-hero-container">
          <div className="v5-content-wrap">
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
              className="v5-text-box"
            >
              <span className="v5-kicker">OUR IMPACT PORTFOLIO</span>
              <h1>Designing <span>Destiny.</span> <br/> Transforming <span>Generations.</span></h1>
              <p>Beyond charity. Beyond aid. We are building the infrastructure of hope through tech-enabled, human-centric initiatives.</p>
              <div className="v5-hero-actions">
                <Button to="/donate" variant="primary">Start an Initiative</Button>
                <div className="v5-stats-mini">
                  <div className="v5-s-item"><strong>50K</strong><span>Lives</span></div>
                  <div className="v5-s-item"><strong>15+</strong><span>Districts</span></div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Floating Mosaic Elements */}
          <div className="v5-mosaic-wrap">
            <motion.div 
              animate={{ y: [0, -20, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="v5-bubble b1"
            >
              <img src="https://images.unsplash.com/photo-1542810634-71277d95dcbb?q=80&w=400" alt="I1" />
            </motion.div>
            <motion.div 
              animate={{ y: [0, 30, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
              className="v5-bubble b2"
            >
              <img src="https://images.unsplash.com/photo-1594708767771-a7502209ff51?q=80&w=400" alt="I2" />
            </motion.div>
            <motion.div 
              animate={{ x: [0, 20, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="v5-bubble b3"
            >
              <img src="https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?q=80&w=400" alt="I3" />
            </motion.div>
            <motion.div 
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
              className="v5-orb orb-1" 
            />
            <motion.div 
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 2 }}
              className="v5-orb orb-2" 
            />
          </div>
        </div>
      </section>

      {/* ── Main List ── */}
      <section className="programs-grid-section">
        <div className="container programs-container">
          {programs.map((program, idx) => (
            <motion.div 
              key={program.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className={`program-card-v3 ${idx % 2 === 1 ? 'reverse' : ''}`}
            >
              {/* Image Side */}
              <div className="program-image-v3">
                <img src={program.image} alt={program.title} />
                <div className="impact-floating-badge" style={{ '--accent': program.color }}>
                  <div className="badge-icon"><TrendingUp size={16} /></div>
                  <span>IMPACT FOCUS</span>
                </div>
              </div>

              {/* Content Side */}
              <div className="program-content-v3">
                <span className="program-kicker" style={{ color: program.color }}>{program.kicker}</span>
                <h2>{program.title}</h2>
                <p>{program.desc}</p>
                
                <div className="program-stats-row">
                  {program.stats.map(s => (
                    <div key={s.label} className="p-stat">
                      <h4>{s.value}</h4>
                      <span>{s.label}</span>
                    </div>
                  ))}
                </div>

                <div className="program-actions-v3">
                  <Button to="/donate" variant="primary">Support Project</Button>
                  <Button to="/volunteer" variant="outline">Learn More</Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ── Final CTA ── */}
      <section className="programs-final-cta">
        <div className="container">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="cta-box-v3"
          >
            <h2>Ready to be the change?</h2>
            <p>Join our mission and help us scale these programs to reach more lives across the nation.</p>
            <div className="program-actions-v3" style={{ justifyContent: 'center' }}>
              <Button to="/volunteer" variant="primary">Become a Volunteer</Button>
              <Button to="/donate" variant="outline">Partner with Us</Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Programs;

