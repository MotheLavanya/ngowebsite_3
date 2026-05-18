import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Heart, Award, Sparkles, ArrowRight, Quote, ShieldCheck, Sun, CheckCircle, Users, Eye } from 'lucide-react';
import { Link } from 'react-router-dom';
import SectionHeader from '../components/SectionHeader';
import Button from '../components/Button';
import './OurStory.css';

const OurStory = () => {
  const narrativeMilestones = [
    {
      year: '2015',
      title: 'A Humble Mango Tree',
      tagline: 'The Seed is Planted',
      desc: 'EmpowerHope was born under a small mango tree in a rural community outside Hyderabad. With only five active volunteers and a total starting fund of ₹5,000, we began by distributing books and teaching basic literacy classes to 15 eager children.',
      icon: Sun,
      color: '#ff9f43',
    },
    {
      year: '2018',
      title: 'Branching Into Tech',
      tagline: 'Bridging the Digital Divide',
      desc: 'Seeing the rapid shift in the modern economy, we opened our first digital classroom with five refurbished computers. This single step helped us train over 200 young women in computer fundamentals, changing their economic paths forever.',
      icon: BookOpen,
      color: '#06b6d4',
    },
    {
      year: '2021',
      title: 'Mobile Healing & Care',
      tagline: 'Healthcare Reaches the Forgotten',
      desc: 'Recognizing that poor health limits education, we launched our Mobile Health Camp. Our teams traveled to isolated villages without medical infrastructure, providing thousands of free diagnoses, medicines, and life-saving early treatments.',
      icon: Heart,
      color: '#ff5252',
    },
    {
      year: '2024',
      title: 'GuideStar Platinum Legacy',
      tagline: 'National Benchmark of Honesty',
      desc: 'Our relentless focus on transparency led us to receive the coveted GuideStar Platinum Status. This benchmark confirmed that 92% of all donation funds go directly into beneficiary services, making us one of India’s most trusted social enterprises.',
      icon: ShieldCheck,
      color: '#10b981',
    },
  ];

  const characterSpotlights = [
    {
      name: 'Rani Patel',
      role: 'From Village to Software Coder',
      impact: 'Digital Skills Graduate',
      quote: 'I was the first girl in my village to touch a computer. Today, I work as an associate software developer in Hyderabad, and I am putting my younger brother through college.',
      avatar: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&q=80&w=400',
    },
    {
      name: 'Laxmi Naidu',
      role: 'Mobile Clinic Breakthrough',
      impact: 'Healthcare Recipient',
      quote: 'There was no hospital within 40 kilometers of our home. During a routine EmpowerHope health camp, doctors caught a serious thyroid issue early. Their medical support literally saved my life.',
      avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=400',
    },
    {
      name: 'Saritha Reddy',
      role: 'Women Cooperative Leader',
      impact: 'Tailoring Program Success',
      quote: 'Through the Nari Shakti program, ten of us pooled our skills to start a tailoring cooperative. Today, we handle bulk school uniform orders, earning a highly independent livelihood.',
      avatar: 'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=crop&q=80&w=400',
    },
  ];

  return (
    <div className="our-story-page">
      {/* ── IMMERSIVE BACKGROUND GLOWS ── */}
      <div className="story-bg-orbs">
        <div className="orb orb-orange"></div>
        <div className="orb orb-teal"></div>
      </div>

      {/* ── CINEMATIC HERO SECTION ── */}
      <section className="story-hero">
        <div className="container">
          <div className="story-hero-content">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="story-badge"
            >
              <Sparkles size={14} className="sparkle" />
              <span>THE CHRONICLE OF EMPOWERMENT</span>
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
            >
              The Story of How We <br />
              <span>Cultivate Hope.</span>
            </motion.h1>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              Discover the history, the breakthrough milestones, and the real-life human stories of how a tiny seed planted in the soil of Hyderabad grew to shade over 50,000 lives.
            </motion.p>
          </div>
        </div>
      </section>

      {/* ── CORE ORIGIN BANNER ── */}
      <section className="origin-philosophy-section">
        <div className="container">
          <div className="philosophy-card">
            <div className="philosophy-icon-wrap">
              <Quote className="quote-icon" size={40} fill="var(--primary)" />
            </div>
            <h2>"We do not believe in temporary handouts; we believe in building permanent structures of self-reliance."</h2>
            <div className="philosophy-author">
              <strong>Dr. Anjali Rao</strong>
              <span>Founder, EmpowerHope Foundation</span>
            </div>
          </div>
        </div>
      </section>

      {/* ── MODERN LEGACY TIMELINE ── */}
      <section className="timeline-section section-padding">
        <div className="container">
          <SectionHeader 
            title="Our Path of Progress" 
            subtitle="THE JOURNEY OF MILESTONES" 
            alignment="center" 
          />

          <div className="story-timeline-grid">
            {narrativeMilestones.map((item, index) => (
              <motion.div 
                key={item.year}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`timeline-block ${index % 2 === 0 ? 'left' : 'right'}`}
              >
                <div className="timeline-dot" style={{ backgroundColor: item.color }}>
                  <item.icon size={20} className="dot-icon" />
                </div>
                
                <div className="timeline-content-card">
                  <span className="timeline-year" style={{ color: item.color }}>{item.year}</span>
                  <span className="timeline-tagline">{item.tagline}</span>
                  <h3>{item.title}</h3>
                  <p>{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CINEMATIC TESTIMONIAL STORIES (THE WOW GRID) ── */}
      <section className="lives-changed-section section-padding">
        <div className="container">
          <SectionHeader 
            title="Lives We Have Transformed" 
            subtitle="REAL BENEFICIARY PROFILES" 
            alignment="center" 
          />

          <div className="character-spotlight-grid">
            {characterSpotlights.map((profile, idx) => (
              <motion.div
                key={profile.name}
                initial={{ opacity: 0, scale: 0.95, y: 30 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.15 }}
                className="spotlight-story-card"
              >
                <div className="card-top-deco"></div>
                <div className="spotlight-profile">
                  <div className="avatar-frame">
                    <img src={profile.avatar} alt={profile.name} />
                  </div>
                  <div className="profile-identity">
                    <h4>{profile.name}</h4>
                    <span className="role">{profile.role}</span>
                    <span className="impact-tag">{profile.impact}</span>
                  </div>
                </div>
                
                <div className="quote-body">
                  <Quote className="inner-quote" size={24} />
                  <p>{profile.quote}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── STUNNING CALL TO ACTION BANNER ── */}
      <section className="story-cta-section section-padding">
        <div className="container">
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="story-cta-card"
          >
            <div className="cta-shapes">
              <div className="cta-circle-1"></div>
              <div className="cta-circle-2"></div>
            </div>
            
            <div className="cta-content">
              <h2>Become a Chapter of Our Growing Story</h2>
              <p>Every single child taught, family diagnosed, and community empowered began with one supportive individual. Join hands with us today to write the next chapter of hope.</p>
              
              <div className="cta-actions">
                <Button to="/donate" variant="primary" size="lg" icon={ArrowRight}>
                  Support With Donation
                </Button>
                <Button to="/volunteer" variant="outline" size="lg" className="cta-btn-alt">
                  Join as Volunteer
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default OurStory;
