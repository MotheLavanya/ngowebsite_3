import React from 'react';
import { motion } from 'framer-motion';

const SectionHeader = ({ title, subtitle, alignment = 'center', light = false }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className={`section-header ${alignment}`}
      style={{ 
        textAlign: alignment,
        marginBottom: '4rem',
        maxWidth: alignment === 'center' ? '700px' : '100%',
        margin: alignment === 'center' ? '0 auto 4rem' : '0 0 4rem'
      }}
    >
      <span className="subtitle">{subtitle}</span>
      <h2 className="title" style={{ color: light ? 'white' : 'var(--text-main)' }}>{title}</h2>
      <div className="accent-line" style={{ margin: alignment === 'center' ? '1.5rem auto 0' : '1.5rem 0 0' }}></div>

      <style>{`
        .section-header .subtitle {
          display: block;
          text-transform: uppercase;
          letter-spacing: 2px;
          font-weight: 700;
          font-size: 0.85rem;
          color: var(--primary);
          margin-bottom: 0.75rem;
        }

        .section-header .title {
          font-size: clamp(2rem, 5vw, 2.75rem);
          line-height: 1.1;
        }

        .section-header .accent-line {
          width: 60px;
          height: 4px;
          background: var(--secondary);
          border-radius: 2px;
        }
      `}</style>
    </motion.div>
  );
};

export default SectionHeader;
