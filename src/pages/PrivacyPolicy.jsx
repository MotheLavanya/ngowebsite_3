import React from 'react';
import { motion } from 'framer-motion';
import './Legal.css';

const PrivacyPolicy = () => {
  return (
    <div className="legal-page">
      <section className="legal-header">
        <div className="container">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            Privacy Policy
          </motion.h1>
          <p>Last Updated: May 2024</p>
        </div>
      </section>

      <section className="legal-content">
        <div className="container">
          <div className="legal-body">
            <h2>1. Introduction</h2>
            <p>At EmpowerHope Foundation, we respect your privacy and are committed to protecting it through our compliance with this policy. This policy describes the types of information we may collect from you or that you may provide when you visit our website.</p>

            <h2>2. Information We Collect</h2>
            <p>We collect several types of information from and about users of our Website, including:</p>
            <ul>
              <li><strong>Personal Information:</strong> Name, postal address, e-mail address, and telephone number when provided via forms.</li>
              <li><strong>Donation Information:</strong> We do not store credit card details. All payments are processed via secure third-party payment gateways (Razorpay/Stripe).</li>
              <li><strong>Usage Data:</strong> Details of your visits to our Website, including traffic data, location data, and other communication data.</li>
            </ul>

            <h2>3. How We Use Your Information</h2>
            <p>We use information that we collect about you or that you provide to us:</p>
            <ul>
              <li>To present our Website and its contents to you.</li>
              <li>To provide you with information or services that you request from us.</li>
              <li>To process your donations and send you 80G tax certificates.</li>
              <li>To notify you about changes to our Website or any services we offer.</li>
            </ul>

            <h2>4. Data Security</h2>
            <p>We have implemented measures designed to secure your personal information from accidental loss and from unauthorized access, use, alteration, and disclosure. All information you provide to us is stored on our secure servers behind firewalls.</p>

            <h2>5. Contact Information</h2>
            <p>To ask questions or comment about this privacy policy and our privacy practices, contact us at: <strong>privacy@empowerhope.org</strong></p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PrivacyPolicy;
