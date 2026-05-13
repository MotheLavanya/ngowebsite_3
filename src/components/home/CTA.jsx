import React from 'react';
import { motion } from 'framer-motion';
import Button from '../Button';

const CTA = () => {
  return (
    <section className="cta-banner">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="cta-content"
        >
          <h2>Ready to make a difference?</h2>
          <p>Your small contribution can bring a massive change in someone's life. Join us today.</p>
          <div className="cta-btns">
            <Button to="/donate" variant="primary" size="lg">Become a Donor</Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTA;
