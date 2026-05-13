import React from 'react';
import { motion } from 'framer-motion';
import SectionHeader from '../SectionHeader';
import Button from '../Button';

const Programs = () => {
  const features = [
    {
      title: 'Education for All',
      desc: 'Providing quality education and school supplies to children in rural Telangana.',
      image: 'https://images.unsplash.com/photo-1497633762265-9d179a990aa6?q=80&w=800',
      tag: 'Education'
    },
    {
      title: 'Healthcare Access',
      desc: 'Mobile clinics and healthcare camps for underserved communities in Hyderabad.',
      image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=800',
      tag: 'Health'
    },
    {
      title: 'Women Empowerment',
      desc: 'Skill development and micro-finance programs for sustainable livelihoods.',
      image: 'https://images.unsplash.com/photo-1590650153855-d9e808231d41?q=80&w=800',
      tag: 'Livelihood'
    },
    {
      title: 'Digital Literacy',
      desc: 'Empowering the next generation with essential technology and coding skills.',
      image: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=800',
      tag: 'Technology'
    },
    {
      title: 'Clean Water Initiative',
      desc: 'Installing water filtration systems in remote villages for safe drinking water.',
      image: '/clean_water_impact_1778653137199.png',
      tag: 'Environment'
    },
    {
      title: 'Disaster Relief',
      desc: 'Rapid emergency response and long-term rehabilitation for crisis-hit areas.',
      image: 'https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?q=80&w=800',
      tag: 'Emergency'
    }
  ];

  return (
    <section className="mission-section section-padding">
      <div className="container">
        <SectionHeader 
          subtitle="What We Do" 
          title="Our Programs Driving Change" 
        />
        <div className="programs-grid">
          {features.map((feature, idx) => (
            <motion.div 
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2 }}
              className="program-card"
            >
              <div className="card-image">
                <img src={feature.image} alt={feature.title} />
                <span className="card-tag">{feature.tag}</span>
              </div>
              <div className="card-content">
                <h3>{feature.title}</h3>
                <p>{feature.desc}</p>
                <Button to="/programs" variant="outline" size="md">Learn More</Button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Programs;
