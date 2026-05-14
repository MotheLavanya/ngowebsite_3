import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Target, Eye, ShieldCheck, Award, Zap, Globe, Sparkles, ArrowRight, Quote, Users, MapPin, Calendar, CheckCircle2, TrendingUp, Handshake } from 'lucide-react';
import SectionHeader from '../components/SectionHeader';
import './About.css';

const About = () => {
  const values = [
    { title: 'Transparency', desc: 'Radical honesty in every donation and project we undertake.', icon: ShieldCheck, color: '#f59e0b' },
    { title: 'Inclusivity', desc: 'Empowering everyone, regardless of origin, caste or gender.', icon: Globe, color: '#3b82f6' },
    { title: 'Innovation', desc: 'Creative, tech-driven solutions for systemic social challenges.', icon: Zap, color: '#8b5cf6' },
    { title: 'Excellence', desc: 'Maximum measurable impact in every single initiative.', icon: Award, color: '#10b981' },
    { title: 'Community', desc: 'Building lasting relationships with the people we serve.', icon: Users, color: '#f97316' },
    { title: 'Integrity', desc: 'Uncompromising ethical standards across all operations.', icon: CheckCircle2, color: '#06b6d4' },
  ];

  const timeline = [
    { year: '2015', title: 'Foundation Established', desc: 'Started with 5 volunteers and a vision to serve 100 families in Hyderabad.' },
    { year: '2017', title: 'First Major Grant', desc: 'Received ₹50L grant from national social welfare fund, expanding to 3 districts.' },
    { year: '2019', title: 'Digital Literacy Launch', desc: 'Launched our flagship digital skills program reaching 500+ rural youth.' },
    { year: '2021', title: 'National Recognition', desc: 'Awarded Platinum NGO status by GuideStar India for transparency and impact.' },
    { year: '2023', title: '50,000 Lives Milestone', desc: 'Crossed 50,000 beneficiaries across 15 districts in Telangana and Andhra Pradesh.' },
    { year: '2024', title: 'Global Partnerships', desc: 'Partnered with 3 international organizations to scale our healthcare programs.' },
  ];

  const team = [
    { name: 'Dr. Anjali Rao', role: 'Founder & Chairperson', img: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&w=600' },
    { name: 'Ravi Shankar', role: 'Executive Director', img: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=600' },
    { name: 'Priya Mehta', role: 'Head of Programs', img: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=600' },
    { name: 'Arun Kumar', role: 'Finance & Compliance', img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=600' },
  ];

  const impactStats = [
    { value: '50K+', label: 'Lives Impacted', icon: Heart, color: '#f97316' },
    { value: '15+', label: 'Districts Covered', icon: MapPin, color: '#3b82f6' },
    { value: '9+', label: 'Years of Service', icon: Calendar, color: '#8b5cf6' },
    { value: '200+', label: 'Active Volunteers', icon: Users, color: '#10b981' },
    { value: '₹2Cr+', label: 'Funds Distributed', icon: TrendingUp, color: '#f59e0b' },
    { value: '30+', label: 'Partner NGOs', icon: Handshake, color: '#06b6d4' },
  ];

  return (
    <div className="about-v3-page">

      {/* ── Hero ── */}
      <section className="about-v3-hero">
        <div className="container hero-v3-grid">
          <div className="hero-v3-text">
            <motion.span initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} className="v3-kicker">
              Our Foundation
            </motion.span>
            <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}>
              We are the <span>architects</span> of a new <span>future.</span>
            </motion.h1>
            <motion.p initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
              Established in 2015, we've grown from a local initiative into a nationwide movement for social equity and empowerment across Telangana and beyond.
            </motion.p>
            <div className="v3-hero-stats">
              <div className="v3-stat"><strong>9+</strong> <span>Years</span></div>
              <div className="v3-stat"><strong>50K+</strong> <span>Lives</span></div>
              <div className="v3-stat"><strong>15+</strong> <span>Districts</span></div>
            </div>
          </div>
          <div className="hero-v3-visual">
            <motion.div animate={{ y: [0, -20, 0] }} transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }} className="v3-img-large">
              <img src="https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?q=80&w=800" alt="Mission" />
            </motion.div>
            <motion.div animate={{ y: [0, 20, 0] }} transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }} className="v3-img-small">
              <img src="https://images.unsplash.com/photo-1542601906990-b4d3fb773b09?q=80&w=400" alt="Community" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Impact Numbers Strip ── */}
      <section className="about-impact-strip">
        <div className="container">
          <div className="impact-strip-grid">
            {impactStats.map((stat, idx) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="impact-strip-card"
                style={{ '--stat-color': stat.color }}
              >
                <div className="strip-icon"><stat.icon size={24} /></div>
                <div>
                  <h3>{stat.value}</h3>
                  <p>{stat.label}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Mission & Vision Highlight Bar (Modern & Minimal) ── */}
      <section className="mission-vision-highlight">
        <div className="container">
          <div className="mv-bar-wrapper">
            {/* Mission Half */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="mv-bar-half mission-half"
            >
              <div className="mv-bar-content">
                <div className="mv-glyph">M</div>
                <div className="mv-text">
                  <span className="mv-kicker">MISSION</span>
                  <h3>Igniting <span>Systemic</span> Change</h3>
                  <p>Empowering the underserved through high-impact education and healthcare programs.</p>
                </div>
                <Target className="mv-bar-icon" size={32} />
              </div>
            </motion.div>

            {/* Vision Half */}
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="mv-bar-half vision-half"
            >
              <div className="mv-bar-content">
                <div className="mv-glyph">V</div>
                <div className="mv-text">
                  <span className="mv-kicker">VISION</span>
                  <h3>Building <span>Resilient</span> Legacies</h3>
                  <p>A society where every individual has the opportunity to thrive with dignity.</p>
                </div>
                <Eye className="mv-bar-icon" size={32} />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Our Journey Timeline ── */}
      <section className="about-timeline section-padding">
        <div className="container">
          <SectionHeader subtitle="Our Journey" title="A Decade of Impact" />
          <div className="timeline-track">
            {timeline.map((item, idx) => (
              <motion.div
                key={item.year}
                initial={{ opacity: 0, x: idx % 2 === 0 ? -40 : 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className={`timeline-item ${idx % 2 === 0 ? 'left' : 'right'}`}
              >
                <div className="timeline-card">
                  <h4>{item.title}</h4>
                  <p>{item.desc}</p>
                </div>
                <div className="timeline-badge">
                  <span>{item.year}</span>
                </div>
              </motion.div>
            ))}
            <div className="timeline-line" />
          </div>
        </div>
      </section>

      {/* ── Core Principles Bento ── */}
      <section className="pillars-bento section-padding">
        <div className="container">
          <SectionHeader subtitle="How We Work" title="Our Core Principles" />
          <div className="bento-values-grid">
            {values.map((v, idx) => (
              <motion.div
                key={v.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.5 }}
                whileHover={{ y: -15, scale: 1.02 }}
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

      {/* ── Our Team ── */}
      <section className="about-team section-padding">
        <div className="container">
          <SectionHeader subtitle="The People Behind It" title="Meet Our Leadership" />
          <div className="team-grid">
            {team.map((member, idx) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.15 }}
                className="team-card-modern"
              >
                <div className="team-image-wrapper">
                  <img src={member.img} alt={member.name} />
                  <div className="team-card-overlay">
                    <div className="team-card-info">
                      <h4>{member.name}</h4>
                      <span>{member.role}</span>
                      <div className="team-social-placeholder" />
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Founder Section ── */}
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
            <ul className="founder-highlights">
              <li><CheckCircle2 size={16} /> Former Director at UNICEF India</li>
              <li><CheckCircle2 size={16} /> Forbes Social Entrepreneur of the Year 2022</li>
              <li><CheckCircle2 size={16} /> PhD in Social Policy, LSE London</li>
            </ul>
            <motion.button whileHover={{ x: 10 }} className="read-story-btn">
              Read Her Story <ArrowRight size={20} />
            </motion.button>
          </div>
        </div>
      </section>

      {/* ── Recognition Strip ── */}
      <section className="impact-recognition section-padding-compact">
        <div className="container">
          <div className="recognition-strip">
            <div className="rec-item"><ShieldCheck size={32} /><h4>80G Approved</h4></div>
            <div className="rec-divider" />
            <div className="rec-item"><Award size={32} /><h4>ISO Certified</h4></div>
            <div className="rec-divider" />
            <div className="rec-item"><Globe size={32} /><h4>Global Impact</h4></div>
            <div className="rec-divider" />
            <div className="rec-item"><Sparkles size={32} /><h4>Platinum NGO</h4></div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
