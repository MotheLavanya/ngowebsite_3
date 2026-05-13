import React from 'react';
import { motion } from 'framer-motion';
import { Users, Book, Award, Heart } from 'lucide-react';
import SectionHeader from '../components/SectionHeader';
import Button from '../components/Button';

const Volunteer = () => {
  return (
    <div className="volunteer-page">
      <section className="page-header">
        <div className="container">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            Become a Volunteer
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            Join our community of change-makers and contribute your skills to empower others.
          </motion.p>
        </div>
      </section>

      <section className="volunteer-content section-padding">
        <div className="container">
          <div className="roles-grid">
            <div className="role-card">
              <Book size={40} className="icon" />
              <h3>Teaching & Mentoring</h3>
              <p>Help children with their studies, digital literacy, or spoken English in our weekend camps.</p>
            </div>
            <div className="role-card">
              <Award size={40} className="icon" />
              <h3>Skill Development</h3>
              <p>Train women in vocational skills like tailoring, marketing, or basic accounting.</p>
            </div>
            <div className="role-card">
              <Users size={40} className="icon" />
              <h3>Event Management</h3>
              <p>Assist in organizing health camps, awareness drives, and fundraising events.</p>
            </div>
            <div className="role-card">
              <Heart size={40} className="icon" />
              <h3>Digital Advocacy</h3>
              <p>Help us spread the word through social media, photography, or content writing.</p>
            </div>
          </div>

          <div className="application-section">
            <SectionHeader subtitle="Apply Now" title="Join the EmpowerHope Family" />
            <form className="volunteer-form">
              <div className="form-grid">
                <input type="text" placeholder="Full Name" />
                <input type="email" placeholder="Email Address" />
                <input type="tel" placeholder="Phone Number" />
                <select>
                  <option>Select Area of Interest</option>
                  <option>Education</option>
                  <option>Healthcare</option>
                  <option>Women Empowerment</option>
                  <option>Environment</option>
                </select>
              </div>
              <textarea placeholder="Tell us about yourself and why you want to volunteer"></textarea>
              <Button size="lg">Submit Application</Button>
            </form>
          </div>
        </div>
      </section>

      <style>{`
        .volunteer-page .page-header {
          padding: 10rem 0 6rem;
          background: #f8fafc;
          text-align: center;
        }

        .roles-grid {
          display: grid;
          grid-template-columns: repeat(1, 1fr);
          gap: 2rem;
          margin-bottom: 6rem;
        }

        @media (min-width: 768px) {
          .roles-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (min-width: 1024px) {
          .roles-grid {
            grid-template-columns: repeat(4, 1fr);
          }
        }

        .role-card {
          background: white;
          padding: 2.5rem;
          border-radius: 1.5rem;
          text-align: center;
          box-shadow: var(--shadow);
          transition: var(--transition);
        }

        .role-card:hover {
          transform: translateY(-5px);
          border-color: var(--primary);
        }

        .role-card .icon {
          color: var(--primary);
          margin-bottom: 1.5rem;
        }

        .role-card h3 {
          margin-bottom: 1rem;
        }

        .role-card p {
          color: var(--text-muted);
          font-size: 0.95rem;
          margin-bottom: 0;
        }

        .application-section {
          max-width: 800px;
          margin: 0 auto;
        }

        .volunteer-form {
          background: white;
          padding: 3rem;
          border-radius: 2rem;
          box-shadow: var(--shadow-lg);
        }

        .form-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1.5rem;
          margin-bottom: 1.5rem;
        }

        @media (max-width: 640px) {
          .form-grid {
            grid-template-columns: 1fr;
          }
        }

        .volunteer-form input, .volunteer-form select, .volunteer-form textarea {
          width: 100%;
          padding: 1rem;
          border-radius: 0.75rem;
          border: 1px solid #e2e8f0;
          background: #f8fafc;
          outline: none;
          font-family: inherit;
        }

        .volunteer-form textarea {
          height: 150px;
          margin-bottom: 2rem;
        }
      `}</style>
    </div>
  );
};

export default Volunteer;
