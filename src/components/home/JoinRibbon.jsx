import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Users, HandHeart, ArrowRight } from 'lucide-react';

const JoinRibbon = () => {
  const steps = [
    { title: 'Donate Now', icon: Heart, color: '#f97316', desc: 'Support a cause.' },
    { title: 'Volunteer', icon: Users, color: '#2563eb', desc: 'Share your time.' },
    { title: 'Partner', icon: HandHeart, color: '#8b5cf6', desc: 'Collaborate with us.' },
  ];

  return (
    <section className="join-ribbon-section">
      <div className="container">
        <div className="join-ribbon-grid">
          {steps.map((step, idx) => (
            <motion.div 
              key={step.title}
              whileHover={{ scale: 1.02 }}
              className="join-step-box"
              style={{ '--step-color': step.color }}
            >
              <div className="step-icon">
                <step.icon size={24} />
              </div>
              <div className="step-info">
                <h4>{step.title}</h4>
                <p>{step.desc}</p>
              </div>
              <ArrowRight size={18} className="step-arrow" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default JoinRibbon;
