import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, HeartPulse, Sparkles, Sprout, ArrowRight } from 'lucide-react';
import SectionHeader from '../components/SectionHeader';
import Button from '../components/Button';

const Programs = () => {
  const programs = [
    {
      title: 'Project Shiksha',
      subtitle: 'Primary Education Initiative',
      desc: 'Project Shiksha focuses on providing quality primary education to children in urban slums and rural areas of Telangana. We provide uniforms, bags, books, and digital learning tools.',
      impact: '5,000+ Students enrolled',
      icon: BookOpen,
      color: '#f97316',
      image: 'https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&q=80&w=800'
    },
    {
      title: 'Swasthya Camp',
      subtitle: 'Healthcare for All',
      desc: 'Mobile healthcare units that visit remote villages every week, providing free check-ups, basic medicine, and hygiene workshops to families who lack access to hospitals.',
      impact: '150+ Villages covered',
      icon: HeartPulse,
      color: '#2563eb',
      image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=800'
    },
    {
      title: 'Nari Shakti',
      subtitle: 'Women Empowerment',
      desc: 'Vocational training in tailoring, beautician courses, and digital literacy for women. We also facilitate micro-loans to help them start their own small businesses.',
      impact: '1,200+ Women empowered',
      icon: Sparkles,
      color: '#8b5cf6',
      image: 'https://images.unsplash.com/photo-1509099836639-18ba1795216d?auto=format&fit=crop&q=80&w=800'
    },
    {
      title: 'Green Telangana',
      subtitle: 'Environmental Protection',
      desc: 'Community-led tree plantation drives and water conservation workshops. We aim to increase the green cover and promote sustainable farming practices in dry zones.',
      impact: '50,000+ Trees planted',
      icon: Sprout,
      color: '#0ea5e9',
      image: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&q=80&w=800'
    }
  ];

  return (
    <div className="programs-page">
      <section className="page-header">
        <div className="container">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            Our Impact Programs
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            Sustainable solutions designed to address the most pressing needs of our communities.
          </motion.p>
        </div>
      </section>

      <section className="programs-list section-padding">
        <div className="container">
          {programs.map((program, idx) => (
            <motion.div 
              key={program.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className={`program-item ${idx % 2 === 1 ? 'reverse' : ''}`}
            >
              <div className="program-image">
                <img src={program.image} alt={program.title} />
                <div className="impact-badge" style={{ backgroundColor: program.color }}>
                  {program.impact}
                </div>
              </div>
              <div className="program-content">
                <div className="icon-wrapper" style={{ color: program.color, backgroundColor: `${program.color}15` }}>
                  <program.icon size={32} />
                </div>
                <span className="subtitle" style={{ color: program.color }}>{program.subtitle}</span>
                <h2>{program.title}</h2>
                <p>{program.desc}</p>
                <div className="program-actions">
                  <Button to="/donate" variant="primary">Support This Project</Button>
                  <Button to="/volunteer" variant="outline">Volunteer</Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <style>{`
        .programs-page .page-header {
          padding: 10rem 0 6rem;
          background: #f8fafc;
          text-align: center;
        }

        .program-item {
          display: grid;
          grid-template-columns: 1fr;
          gap: 4rem;
          align-items: center;
          margin-bottom: 8rem;
        }

        @media (min-width: 1024px) {
          .program-item {
            grid-template-columns: 1fr 1fr;
          }
          .program-item.reverse {
            direction: rtl;
          }
          .program-item.reverse .program-content {
            direction: ltr;
            padding-left: 0;
            padding-right: 2rem;
          }
        }

        .program-image {
          position: relative;
          height: 450px;
          border-radius: 2rem;
          overflow: hidden;
          box-shadow: var(--shadow-lg);
        }

        .program-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.6s ease;
        }

        .program-item:hover .program-image img {
          transform: scale(1.05);
        }

        .impact-badge {
          position: absolute;
          bottom: 2rem;
          left: 2rem;
          color: white;
          padding: 0.75rem 1.5rem;
          border-radius: 1rem;
          font-weight: 700;
          font-size: 1rem;
          box-shadow: var(--shadow);
        }

        .program-content {
          padding-left: 1rem;
        }

        .icon-wrapper {
          width: 64px;
          height: 64px;
          border-radius: 1.25rem;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 1.5rem;
        }

        .program-content .subtitle {
          display: block;
          text-transform: uppercase;
          letter-spacing: 2px;
          font-weight: 700;
          font-size: 0.85rem;
          margin-bottom: 0.75rem;
        }

        .program-content h2 {
          font-size: clamp(2rem, 4vw, 2.75rem);
          margin-bottom: 1.5rem;
          color: var(--text-main);
        }

        .program-content p {
          font-size: 1.15rem;
          color: var(--text-muted);
          margin-bottom: 2.5rem;
          line-height: 1.7;
        }

        .program-actions {
          display: flex;
          gap: 1.5rem;
          flex-wrap: wrap;
        }
      `}</style>
    </div>
  );
};

export default Programs;
