import React from 'react';
import { motion } from 'framer-motion';
import './Legal.css';

const RefundPolicy = () => {
  return (
    <div className="legal-page">
      <section className="legal-header">
        <div className="container">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            Refund Policy
          </motion.h1>
          <p className="text-center">Last Updated: May 2024</p>
        </div>
      </section>

      <section className="legal-content">
        <div className="container">
          <div className="legal-body">
            <h2>1. Donation Refunds</h2>
            <p>EmpowerHope Foundation is grateful for your support. As a general rule, all donations are non-refundable. However, we recognize that errors can occur during the donation process.</p>

            <h2>2. Exceptional Circumstances</h2>
            <p>We will consider requests for a refund in the following situations:</p>
            <ul>
              <li><strong>Technical Errors:</strong> A technical glitch resulted in a duplicate donation or an incorrect amount being processed.</li>
              <li><strong>Unauthorized Use:</strong> If your card or payment method was used fraudulently to make a donation.</li>
              <li><strong>Incorrect Amount:</strong> If you accidentally entered an extra zero or made a significant typographical error.</li>
            </ul>

            <h2>3. Timeframe for Requests</h2>
            <p>Refund requests must be submitted within <strong>15 days</strong> of the donation date. Any request made after this period will not be eligible for a refund.</p>

            <h2>4. Documentation Required</h2>
            <p>To process a refund, we may require a copy of your donation receipt and a brief explanation of the error. If a tax-deductible receipt (80G) has already been issued, the refund process may involve additional compliance steps as per Indian Tax Laws.</p>

            <h2>5. Processing Time</h2>
            <p>Approved refunds will be credited back to the original payment method within 7-10 business days, depending on your bank's policies.</p>

            <h2>6. Contact Us</h2>
            <p>For any refund-related inquiries, please email our finance team at: <strong>finance@empowerhope.org</strong></p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default RefundPolicy;
