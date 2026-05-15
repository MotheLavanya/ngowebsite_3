import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CreditCard, Heart, ShieldCheck, Zap, ArrowRight, CheckCircle } from 'lucide-react';
import confetti from 'canvas-confetti';
import SectionHeader from '../components/SectionHeader';
import Button from '../components/Button';

const Donate = () => {
  const [amount, setAmount] = useState('1000');
  const [frequency, setFrequency] = useState('once');
  const [paymentStatus, setPaymentStatus] = useState('idle'); // idle | processing | success

  const handleDonate = (e) => {
    e.preventDefault();
    setPaymentStatus('processing');
    
    // Cinematic Confetti
    const duration = 3 * 1000;
    const animationEnd = Date.now() + duration;
    const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };

    const randomInRange = (min, max) => Math.random() * (max - min) + min;

    const interval = setInterval(() => {
      const timeLeft = animationEnd - Date.now();

      if (timeLeft <= 0) {
        setPaymentStatus('success');
        setTimeout(() => setPaymentStatus('idle'), 6000);
        return clearInterval(interval);
      }

      const particleCount = 50 * (timeLeft / duration);
      confetti({ ...defaults, particleCount, origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 } });
      confetti({ ...defaults, particleCount, origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 } });
    }, 250);
  };

  const presetAmounts = ['500', '1000', '2500', '5000', '10000'];

  return (
    <div className="donate-page">
      <section className="page-header">
        <div className="container">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            Support Our Mission
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            Your contribution provides education, healthcare, and a chance at a better life for those in need.
          </motion.p>
        </div>
      </section>

      <section className="donate-section section-padding">
        <div className="container donate-grid">
          {/* Donation Form */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="donation-card"
          >
            <div className="form-header">
              <div className="frequency-toggle">
                <button 
                  className={frequency === 'once' ? 'active' : ''} 
                  onClick={() => setFrequency('once')}
                >
                  One-time
                </button>
                <button 
                  className={frequency === 'monthly' ? 'active' : ''} 
                  onClick={() => setFrequency('monthly')}
                >
                  Monthly
                </button>
              </div>
            </div>

            <div className="amount-selection">
              <label>Select Amount (INR)</label>
              <div className="preset-grid">
                {presetAmounts.map(amt => (
                  <button 
                    key={amt}
                    className={amount === amt ? 'active' : ''}
                    onClick={() => setAmount(amt)}
                  >
                    ₹{amt}
                  </button>
                ))}
              </div>
              <div className="custom-amount">
                <span>₹</span>
                <input 
                  type="number" 
                  placeholder="Other Amount" 
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                />
              </div>
            </div>

            <div className="donor-details">
              <div className="input-group">
                <label>Full Name</label>
                <input type="text" placeholder="John Doe" />
              </div>
              <div className="input-group">
                <label>Email Address</label>
                <input type="email" placeholder="john@example.com" />
              </div>
            </div>

            <AnimatePresence mode="wait">
              {paymentStatus === 'success' ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  style={{
                    padding: '1.5rem',
                    background: '#f0fdf4',
                    border: '1px solid #86efac',
                    borderRadius: '1rem',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '0.75rem',
                    color: '#15803d',
                    fontWeight: 700,
                    textAlign: 'center'
                  }}
                >
                  <CheckCircle size={32} />
                  Contribution of ₹{amount} Received! <br />
                  <span style={{ fontSize: '0.9rem', color: '#166534', fontWeight: 500 }}>Thank you for your generous support.</span>
                </motion.div>
              ) : (
                <motion.div key="button" initial={{ opacity: 1 }} exit={{ opacity: 0 }}>
                  <Button size="lg" className="btn-full" icon={CreditCard} onClick={handleDonate} disabled={paymentStatus === 'processing'}>
                    {paymentStatus === 'processing' ? 'Processing...' : 'Proceed to Payment'}
                  </Button>
                </motion.div>
              )}
            </AnimatePresence>
            <div className="form-footer">
              <ShieldCheck size={16} />
              <span>Secure encrypted transaction via Razorpay</span>
            </div>
          </motion.div>

          {/* Impact Info */}
          <div className="donation-info">
            <SectionHeader 
              subtitle="Your Impact" 
              title="How Your Donation Helps" 
              alignment="left"
            />
            <div className="impact-list">
              <div className="impact-card">
                <div className="impact-icon education"><Zap size={24} /></div>
                <div>
                  <h4>₹1,000</h4>
                  <p>Provides a full school kit (bags, books, uniforms) for one child.</p>
                </div>
              </div>
              <div className="impact-card">
                <div className="impact-icon health"><Heart size={24} /></div>
                <div>
                  <h4>₹2,500</h4>
                  <p>Covers full health check-up and medicines for a family of four.</p>
                </div>
              </div>
              <div className="impact-card">
                <div className="impact-icon livelihood"><ShieldCheck size={24} /></div>
                <div>
                  <h4>₹5,000</h4>
                  <p>Funds vocational training for one woman for an entire month.</p>
                </div>
              </div>
            </div>

            <div className="tax-benefits">
              <h4>Tax Benefits (India)</h4>
              <p>All donations to EmpowerHope are eligible for 50% tax deduction under Section 80G of the Income Tax Act.</p>
              <div className="tax-logos">
                <span>80G</span>
                <span>12A</span>
                <span>CSR Compliant</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <style>{`
        .donate-page .page-header {
          padding: 10rem 0 6rem;
          background: #fcfcfc;
          text-align: center;
        }

        .donate-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 4rem;
          align-items: flex-start;
        }

        @media (min-width: 1024px) {
          .donate-grid {
            grid-template-columns: 1.1fr 1fr;
          }
        }

        .donation-card {
          background: white;
          padding: 2.5rem;
          border-radius: 2rem;
          box-shadow: var(--shadow-lg);
          border: 1px solid var(--border);
        }

        .frequency-toggle {
          display: flex;
          background: #f1f5f9;
          padding: 0.4rem;
          border-radius: 100px;
          margin-bottom: 2.5rem;
        }

        .frequency-toggle button {
          flex: 1;
          padding: 0.8rem;
          border-radius: 100px;
          font-weight: 700;
          font-size: 0.95rem;
          color: var(--text-muted);
        }

        .frequency-toggle button.active {
          background: white;
          color: var(--primary);
          box-shadow: var(--shadow-sm);
        }

        .amount-selection label, .donor-details label {
          display: block;
          font-weight: 700;
          margin-bottom: 1rem;
          color: var(--text-main);
          font-size: 0.9rem;
          text-transform: uppercase;
          letter-spacing: 1px;
        }

        .preset-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 0.75rem;
          margin-bottom: 1rem;
        }

        .preset-grid button {
          padding: 1rem;
          border-radius: var(--radius-md);
          border: 2px solid #e2e8f0;
          font-weight: 700;
          font-size: 1.1rem;
          color: var(--text-main);
        }

        .preset-grid button.active {
          border-color: var(--primary);
          background: #fff1f2;
          color: var(--primary);
        }

        .custom-amount {
          position: relative;
          margin-bottom: 2.5rem;
        }

        .custom-amount span {
          position: absolute;
          left: 1rem;
          top: 50%;
          transform: translateY(-50%);
          font-weight: 700;
          font-size: 1.25rem;
          color: var(--text-muted);
        }

        .custom-amount input {
          width: 100%;
          padding: 1rem 1rem 1rem 2.5rem;
          border-radius: var(--radius-md);
          border: 2px solid #e2e8f0;
          font-size: 1.25rem;
          font-weight: 700;
          outline: none;
        }

        .custom-amount input:focus {
          border-color: var(--primary);
        }

        .donor-details {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1.5rem;
          margin-bottom: 2.5rem;
        }

        .input-group input {
          width: 100%;
          padding: 1rem;
          border-radius: var(--radius-md);
          border: 1px solid #e2e8f0;
          background: #f8fafc;
          outline: none;
        }

        .btn-full {
          width: 100%;
        }

        .form-footer {
          margin-top: 1.5rem;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.5rem;
          color: var(--text-muted);
          font-size: 0.85rem;
        }

        .impact-list {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
          margin-bottom: 3rem;
        }

        .impact-card {
          display: flex;
          gap: 1.5rem;
          align-items: center;
          padding: 1.5rem;
          background: #f8fafc;
          border-radius: 1.25rem;
        }

        .impact-icon {
          width: 50px;
          height: 50px;
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          flex-shrink: 0;
        }

        .impact-icon.education { background: var(--primary); }
        .impact-icon.health { background: #ec4899; }
        .impact-icon.livelihood { background: var(--secondary); }

        .impact-card h4 {
          font-size: 1.25rem;
          margin-bottom: 0.25rem;
        }

        .impact-card p {
          font-size: 0.95rem;
          color: var(--text-muted);
          margin-bottom: 0;
        }

        .tax-benefits h4 {
          margin-bottom: 0.75rem;
        }

        .tax-benefits p {
          color: var(--text-muted);
          font-size: 0.95rem;
          margin-bottom: 1.5rem;
        }

        .tax-logos {
          display: flex;
          gap: 1rem;
        }

        .tax-logos span {
          background: linear-gradient(135deg, #be123c10 0%, #fde04710 100%);
          padding: 0.5rem 1rem;
          border-radius: 0.5rem;
          font-weight: 700;
          font-size: 0.75rem;
          color: var(--text-main);
          text-transform: uppercase;
        }
      `}</style>
    </div>
  );
};

export default Donate;
