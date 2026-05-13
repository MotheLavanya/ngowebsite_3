import React from 'react';
import { motion } from 'framer-motion';
import SectionHeader from '../components/SectionHeader';
import Button from '../components/Button';

const Blog = () => {
  const posts = [
    {
      title: 'Digital Literacy in Rural Schools',
      date: 'May 10, 2024',
      image: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&q=80&w=800',
      excerpt: 'How we are bridging the digital divide in Telangana schools with solar-powered tablets.'
    },
    {
      title: 'Success Story: Meet Laxmi',
      date: 'April 25, 2024',
      image: 'https://images.unsplash.com/photo-1509099836639-18ba1795216d?auto=format&fit=crop&q=80&w=800',
      excerpt: 'From a village girl to a certified beautician, Laxmi’s journey of financial independence.'
    },
    {
      title: 'Healthy Hyderabad Campaign',
      date: 'April 12, 2024',
      image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=800',
      excerpt: 'Highlighting the impact of our mobile health clinics in city slums.'
    }
  ];

  return (
    <div className="blog-page">
      <section className="page-header">
        <div className="container">
          <h1>Latest Updates & News</h1>
          <p>Read about our ongoing projects, success stories, and community events.</p>
        </div>
      </section>

      <section className="blog-list section-padding">
        <div className="container">
          <div className="blog-grid">
            {posts.map((post) => (
              <div key={post.title} className="blog-card">
                <div className="card-image">
                  <img src={post.image} alt={post.title} />
                </div>
                <div className="card-content">
                  <span className="date">{post.date}</span>
                  <h3>{post.title}</h3>
                  <p>{post.excerpt}</p>
                  <Button variant="outline">Read More</Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <style>{`
        .blog-page .page-header {
          padding: 10rem 0 6rem;
          background: #f8fafc;
          text-align: center;
        }

        .blog-grid {
          display: grid;
          grid-template-columns: repeat(1, 1fr);
          gap: 2.5rem;
        }

        @media (min-width: 768px) {
          .blog-grid {
            grid-template-columns: repeat(3, 1fr);
          }
        }

        .blog-card {
          background: white;
          border-radius: 1.5rem;
          overflow: hidden;
          box-shadow: var(--shadow);
          border: 1px solid var(--border);
        }

        .blog-card .card-image {
          height: 200px;
        }

        .blog-card .card-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .card-content {
          padding: 2rem;
        }

        .card-content .date {
          display: block;
          font-size: 0.85rem;
          color: var(--primary);
          font-weight: 700;
          margin-bottom: 0.75rem;
        }

        .card-content h3 {
          font-size: 1.25rem;
          margin-bottom: 1rem;
        }

        .card-content p {
          color: var(--text-muted);
          font-size: 0.95rem;
          margin-bottom: 1.5rem;
        }
      `}</style>
    </div>
  );
};

export default Blog;
