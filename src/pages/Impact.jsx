import React from 'react';
import { motion } from 'framer-motion';
import SectionHeader from '../components/SectionHeader';

const Impact = () => {
  const stories = [
    {
      name: 'Rohan’s Dream',
      location: 'Hyderabad',
      text: '“I never thought I could go to school. EmpowerHope gave me the books and the confidence I needed. Now I want to be a teacher!”',
      image: 'https://i.pravatar.cc/300?u=rohan'
    },
    {
      name: 'Priya’s Business',
      location: 'Mahbubnagar',
      text: '“The tailoring workshop changed my life. I now run a small shop from home and support my children’s education.”',
      image: 'https://i.pravatar.cc/300?u=priya'
    }
  ];

  return (
    <div className="impact-page">
      <section className="page-header">
        <div className="container">
          <h1>Stories of Change</h1>
          <p>Real people, real transformation. See the impact of your support.</p>
        </div>
      </section>

      <section className="stories-section section-padding">
        <div className="container">
          <div className="stories-grid">
            {stories.map((story, idx) => (
              <div key={story.name} className="story-card">
                <div className="quote-icon">“</div>
                <p className="story-text">{story.text}</p>
                <div className="story-author">
                  <img src={story.image} alt={story.name} />
                  <div>
                    <h4>{story.name}</h4>
                    <span>{story.location}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <style>{`
        .impact-page .page-header {
          padding: 10rem 0 6rem;
          background: #f8fafc;
          text-align: center;
        }

        .stories-grid {
          display: grid;
          grid-template-columns: repeat(1, 1fr);
          gap: 3rem;
          max-width: 900px;
          margin: 0 auto;
        }

        @media (min-width: 768px) {
          .stories-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        .story-card {
          background: white;
          padding: 3rem;
          border-radius: 2rem;
          box-shadow: var(--shadow-lg);
          position: relative;
          border: 1px solid var(--border);
        }

        .quote-icon {
          font-family: 'Outfit', sans-serif;
          font-size: 5rem;
          color: var(--primary);
          opacity: 0.15;
          position: absolute;
          top: 1rem;
          left: 2rem;
        }

        .story-text {
          font-size: 1.25rem;
          font-style: italic;
          color: var(--text-main);
          margin-bottom: 2rem;
          position: relative;
          z-index: 1;
        }

        .story-author {
          display: flex;
          align-items: center;
          gap: 1rem;
        }

        .story-author img {
          width: 60px;
          height: 60px;
          border-radius: 50%;
        }

        .story-author h4 {
          margin-bottom: 0;
          font-size: 1.1rem;
        }

        .story-author span {
          color: var(--text-muted);
          font-size: 0.9rem;
        }
      `}</style>
    </div>
  );
};

export default Impact;
