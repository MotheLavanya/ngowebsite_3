import React from 'react';
import { motion } from 'framer-motion';
import './Legal.css';

const TermsOfService = () => {
  return (
    <div className="legal-page">
      <section className="legal-header">
        <div className="container">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            Terms of Service
          </motion.h1>
          <p className="text-center">Last Updated: May 2024</p>
        </div>
      </section>

      <section className="legal-content">
        <div className="container">
          <div className="legal-body">
            <h2>1. Acceptance of Terms</h2>
            <p>By accessing and using the EmpowerHope Foundation website, you accept and agree to be bound by the terms and provision of this agreement. Any participation in this service will constitute acceptance of this agreement.</p>

            <h2>2. User Conduct</h2>
            <p>Users are expected to use the website for lawful purposes only. You agree not to use the Website in any way that violates any applicable federal, state, local, or international law or regulation.</p>

            <h2>3. Donations and Payments</h2>
            <p>All donations made through our website are voluntary. EmpowerHope is a Section 8 registered NGO in India. Donations are eligible for tax benefits under Section 80G. Once a donation is processed, it is generally non-refundable except in cases of technical error.</p>

            <h2>4. Intellectual Property Rights</h2>
            <p>The Website and its entire contents, features, and functionality (including but not limited to all information, software, text, displays, images, video, and audio) are owned by EmpowerHope Foundation and are protected by international copyright, trademark, and other intellectual property laws.</p>

            <h2>5. Limitation of Liability</h2>
            <p>In no event will EmpowerHope Foundation be liable for damages of any kind, under any legal theory, arising out of or in connection with your use, or inability to use, the Website or any websites linked to it.</p>

            <h2>6. Governing Law</h2>
            <p>All matters relating to the Website and these Terms of Service shall be governed by and construed in accordance with the internal laws of India, specifically within the jurisdiction of Hyderabad, Telangana.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TermsOfService;
