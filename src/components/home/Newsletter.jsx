import React, { useState } from 'react';
import { Send, CheckCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Newsletter = () => {
  const [status, setStatus] = useState('idle'); // idle | sending | sent

  const handleSubscribe = (e) => {
    e.preventDefault();
    setStatus('sending');
    setTimeout(() => {
      setStatus('sent');
      e.target.reset();
      setTimeout(() => setStatus('idle'), 5000);
    }, 1000);
  };

  return (
    <section className="newsletter-simple">
      <div className="container">
        <div className="newsletter-flex">
          <div className="newsletter-text">
            <h3>Subscribe to Our Updates</h3>
            <p>Get the latest impact stories and community news.</p>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', minWidth: '320px' }}>
            <AnimatePresence mode="wait">
              {status === 'sent' ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  style={{
                    display: 'flex', alignItems: 'center', gap: '0.6rem',
                    padding: '0.85rem 1.25rem',
                    background: '#f0fdf4', border: '1px solid #86efac',
                    borderRadius: '0.75rem', color: '#15803d', fontWeight: 700,
                    fontSize: '0.95rem'
                  }}
                >
                  <CheckCircle size={18} />
                  You're subscribed! Watch your inbox. 📬
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  className="newsletter-simple-form"
                  onSubmit={handleSubscribe}
                  initial={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  <input type="email" placeholder="Your email address" required />
                  <button type="submit" disabled={status === 'sending'}>
                    {status === 'sending' ? 'Joining...' : 'Join Now'}
                  </button>
                </motion.form>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
