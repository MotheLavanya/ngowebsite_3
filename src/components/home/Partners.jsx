import React from 'react';
import { motion } from 'framer-motion';

const Partners = () => {
  const partners = ['Microsoft', 'Google', 'UNICEF', 'TATA', 'Relience'];

  return (
    <section className="partners-section">
      <div className="container">
        <p className="partners-title">Trusted By Leading Organizations</p>
        <div className="marquee-wrapper">
          <motion.div 
            className="partners-marquee"
            animate={{ x: [0, -1000] }}
            transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
          >
            {[...partners, ...partners].map((p, idx) => (
              <div key={idx} className="partner-logo-box">
                {p}
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Partners;
