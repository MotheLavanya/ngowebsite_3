import React from 'react';
import { motion } from 'framer-motion';
import { FileText, Download, CheckCircle } from 'lucide-react';
import SectionHeader from '../components/SectionHeader';
import './Transparency.css';

const Transparency = () => {
  const reports = [
    { title: 'Annual Report 2024-25', size: '2.4 MB' },
    { title: 'Financial Audit 2024', size: '1.8 MB' },
    { title: 'Annual Report 2023-24', size: '3.1 MB' },
    { title: 'Tax Exemption (80G)', size: '0.5 MB' },
  ];

  return (
    <div className="transparency-page">
      <section className="transparency-hero-v5">
        <div className="container v5-hero-grid">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            className="v5-hero-text"
          >
            <span className="v5-kicker">TRUST & ACCOUNTABILITY</span>
            <h1>Radical <span>Transparency.</span> <br/> Total <span>Impact.</span></h1>
            <p>We are committed to the highest standards of financial honesty. Every rupee donated is a seed of change, and we ensure you see it grow.</p>
          </motion.div>
          
          <div className="v5-hero-visual">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
              className="v5-portal-main"
            >
              <img src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=800" alt="Financial Integrity" />
            </motion.div>
            <div className="v5-accent-ring" />
          </div>
        </div>
      </section>

      <section className="reports-section section-padding">
        <div className="container">
          <SectionHeader subtitle="Trust & Ethics" title="Our Financial Reports" />
          <div className="reports-grid">
            {reports.map((report) => (
              <div key={report.title} className="report-card">
                <FileText size={32} className="icon" />
                <div className="report-info">
                  <h3>{report.title}</h3>
                  <span>{report.size}</span>
                </div>
                <button className="download-btn"><Download size={20} /></button>
              </div>
            ))}
          </div>

          <div className="trust-badges">
            <div className="badge-item">
              <CheckCircle size={24} />
              <span>Section 8 Registered</span>
            </div>
            <div className="badge-item">
              <CheckCircle size={24} />
              <span>FCRA Compliant</span>
            </div>
            <div className="badge-item">
              <CheckCircle size={24} />
              <span>NITI Aayog Registered</span>
            </div>
          </div>
        </div>
      </section>

      <style>{`
        .transparency-page .page-header {
          padding: 10rem 0 6rem;
          background: #f8fafc;
          text-align: center;
        }

        .reports-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 1.5rem;
          max-width: 800px;
          margin: 0 auto 4rem;
        }

        .report-card {
          display: flex;
          align-items: center;
          padding: 1.5rem;
          background: white;
          border-radius: 1rem;
          box-shadow: var(--shadow);
          border: 1px solid var(--border);
        }

        .report-card .icon {
          color: var(--primary);
          margin-right: 1.5rem;
        }

        .report-info h3 {
          font-size: 1.1rem;
          margin-bottom: 0.25rem;
        }

        .report-info span {
          font-size: 0.85rem;
          color: var(--text-muted);
        }

        .download-btn {
          margin-left: auto;
          background: #f1f5f9;
          width: 44px;
          height: 44px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--text-main);
          transition: var(--transition);
        }

        .download-btn:hover {
          background: var(--primary);
          color: white;
        }

        .trust-badges {
          display: flex;
          justify-content: center;
          gap: 3rem;
          flex-wrap: wrap;
        }

        .badge-item {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          color: var(--primary);
          font-weight: 700;
        }
      `}</style>
    </div>
  );
};

export default Transparency;
