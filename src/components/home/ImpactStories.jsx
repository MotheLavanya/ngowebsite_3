import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, ChevronLeft, ChevronRight, Target, Heart, ShieldCheck, Zap } from 'lucide-react';
import SectionHeader from '../SectionHeader';

const ImpactStories = () => {
  const navigate = useNavigate();
  const stories = [
    {
      title: 'Education for All',
      tag: 'Education',
      img: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=800',
      text: 'Empowering 5,000+ children with quality schooling and digital learning resources across rural Telangana.'
    },
    {
      title: 'Healthcare Access',
      tag: 'Health',
      img: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=800',
      text: 'Reaching 30,000+ villagers through our mobile clinics and specialized emergency healthcare camps.'
    },
    {
      title: 'Women Empowerment',
      tag: 'Livelihood',
      img: 'https://images.unsplash.com/photo-1583971663176-dd7180de1b76?q=80&w=2067&auto=format&fit=crop&ixlib=rb-4.1.0',
      text: 'Providing vocational training and micro-finance support to 1,200+ women to build sustainable futures.'
    },
    {
      title: 'Digital Literacy',
      tag: 'Technology',
      img: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=800',
      text: 'Training the next generation in essential coding and IT skills for the modern digital economy.'
    },
    {
      title: 'Clean Water Initiative',
      tag: 'Environment',
      img: '/clean_water_impact_1778653137199.png',
      text: 'Installed 50+ water filtration units providing safe drinking water to 10,000+ families.'
    },
    {
      title: 'Disaster Relief',
      tag: 'Emergency',
      img: 'https://plus.unsplash.com/premium_photo-1683140535496-101478a22e75?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.1.0',
      text: 'Rapid response and long-term rehabilitation support for communities hit by natural disasters.'
    }
  ];

  const [activeIndex, setActiveIndex] = React.useState(0);

  const nextSlide = () => setActiveIndex((prev) => (prev + 1) % stories.length);
  const prevSlide = () => setActiveIndex((prev) => (prev - 1 + stories.length) % stories.length);

  return (
    <section className="impact-section section-padding">
      <div className="container">
        <div className="impact-split-layout">
          {/* Left Side: Static Text */}
          <div className="impact-intro-side">
            <SectionHeader subtitle="What We Do" title="How We Can Help" />
            <p className="impact-intro-p">
              Every life touched by our foundation has a story to tell. These are just a few glimpses into the incredible journeys of the people we serve and the change we've witnessed together.
            </p>
            
            <div className="impact-stats-mini-row">
              <div className="mini-stat-card">
                <Heart className="stat-icon-s" size={24} />
                <div>
                  <h4>10k+</h4>
                  <span>Hearts Touched</span>
                </div>
              </div>
              <div className="mini-stat-card">
                <Zap className="stat-icon-s" size={24} />
                <div>
                  <h4>50+</h4>
                  <span>Active Programs</span>
                </div>
              </div>
            </div>

            <div className="impact-stats-mini-row">
              <div className="mini-stat-card">
                <ShieldCheck className="stat-icon-s" size={24} />
                <div>
                  <h4>100%</h4>
                  <span>Transparency</span>
                </div>
              </div>
            </div>

            <motion.button 
              whileHover={{ x: 10 }}
              onClick={() => navigate('/programs')}
              className="view-all-impact-btn"
            >
              Learn More About Our Programs <ArrowRight size={20} />
            </motion.button>
          </div>

          {/* Right Side: Compact Slider */}
          <div className="impact-slider-side">
            <div className="compact-impact-slider-box">
              <AnimatePresence mode="wait">
                <motion.div 
                  key={activeIndex}
                  initial={{ opacity: 0, scale: 0.95, x: 20 }}
                  animate={{ opacity: 1, scale: 1, x: 0 }}
                  exit={{ opacity: 0, scale: 1.05, x: -20 }}
                  transition={{ duration: 0.5 }}
                  className="split-slider-panel"
                >
                  <div className="split-panel-img">
                    <img src={stories[activeIndex].img} alt={stories[activeIndex].title} />
                  </div>
                  <div className="split-panel-content">
                    <span className="panel-tag">{stories[activeIndex].tag}</span>
                    <h4>{stories[activeIndex].title}</h4>
                    <p>{stories[activeIndex].text}</p>
                    <div className="slider-controls-overlay">
                      <button onClick={prevSlide} className="nav-icon-btn"><ChevronLeft size={20} /></button>
                      <span className="nav-count">{activeIndex + 1} / {stories.length}</span>
                      <button onClick={nextSlide} className="nav-icon-btn"><ChevronRight size={20} /></button>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImpactStories;
