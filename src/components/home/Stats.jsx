import React from 'react';
import { motion } from 'framer-motion';
import { Users, GraduationCap, Heart, Globe } from 'lucide-react';

const Stats = () => {
  const stats = [
    { label: 'Lives Impacted', value: '10,000+', icon: Users, color: '#be123c' },
    { label: 'Schools Built', value: '50+', icon: GraduationCap, color: '#fde047' },
    { label: 'Volunteers', value: '1,200+', icon: Heart, color: '#1e293b' },
    { label: 'Projects', value: '25+', icon: Globe, color: '#0ea5e9' },
  ];

  return (
    <section className="stats-section">
      <div className="container">
        <div className="stats-grid">
          {stats.map((stat, idx) => (
            <motion.div 
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="stat-item"
            >
              <div className="stat-icon" style={{ backgroundColor: `${stat.color}15`, color: stat.color }}>
                <stat.icon size={28} />
              </div>
              <div className="stat-info">
                <h3>{stat.value}</h3>
                <p>{stat.label}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
