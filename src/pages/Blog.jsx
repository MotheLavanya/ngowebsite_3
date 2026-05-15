import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Heart, Users, Calendar, CheckCircle } from 'lucide-react';
import Button from '../components/Button';
import './Blog.css';

const Blog = () => {
  const [subStatus, setSubStatus] = useState('idle');

  const handleSubscribe = (e) => {
    e.preventDefault();
    setSubStatus('sending');
    setTimeout(() => {
      setSubStatus('sent');
      e.target.reset();
      setTimeout(() => setSubStatus('idle'), 5000);
    }, 1200);
  };

  const posts = [
    {
      id: 1,
      category: 'Education',
      title: 'Digital Frontier: Solar Labs Reach 50 Villages',
      date: 'May 10, 2024',
      result: '5,000+ Students',
      image: 'https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?q=80&w=800',
      excerpt: 'Our mission to bridge the digital divide has hit a new milestone in rural Telangana.'
    },
    {
      id: 2,
      category: 'Empowerment',
      title: 'Laxmi’s Journey: From Homemaker to CEO',
      date: 'April 25, 2024',
      result: 'Success Story',
      image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=800',
      excerpt: 'Witness how micro-financing is transforming lives at the grassroots level.'
    },
    {
      id: 3,
      category: 'Healthcare',
      title: 'Slum Health: Mobile Clinic Impact Report',
      date: 'April 12, 2024',
      result: '1,200 Patients',
      image: 'https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?q=80&w=800',
      excerpt: 'Providing primary care to the most underserved urban communities this quarter.'
    },
    {
      id: 4,
      category: 'Environment',
      title: 'Solar Wells: Clean Water for Every Household',
      date: 'March 30, 2024',
      result: '500 Families',
      image: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?q=80&w=800',
      excerpt: 'No more walking miles for water. Solar technology is providing constant access.'
    },
    {
      id: 5,
      category: 'Volunteers',
      title: 'Join our Weekend Mentorship Program',
      date: 'March 15, 2024',
      result: 'Join Us',
      image: 'https://images.unsplash.com/photo-1559027615-cd4628902d4a?q=80&w=800',
      excerpt: 'Spend your weekends shaping the future of a child. Volunteer orientation next week.'
    },
    {
      id: 6,
      category: 'Nurture',
      title: 'The Power of Collective: Self-Help Groups',
      date: 'March 05, 2024',
      result: '25 SHGs Formed',
      image: 'https://images.unsplash.com/photo-1528605248644-14dd04022da1?q=80&w=800',
      excerpt: 'Building resilient community structures to ensure long-term sustainable growth.'
    }
  ];

  return (
    <div className="blog-page">
      {/* ── Mosaic Hero ── */}
      <section className="blog-mosaic-hero">
        <div className="container mosaic-hero-grid">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            className="mosaic-hero-text"
          >
            <h1>Voices of <span>Hope</span>, Stories of <span>Impact</span>.</h1>
            <p>Every story here is a testament to the power of community. Dive into our latest field reports, success stories, and updates from our mission.</p>
          </motion.div>

          <div className="v5-hero-visual">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="v5-portal-wrap"
            >
              <img src="https://images.unsplash.com/photo-1504711434969-e33886168f5c?q=80&w=800" alt="Blog Hero" className="v5-portal-image" />
              <div className="v5-floating-accent" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Community Masonry Grid ── */}
      <section className="community-grid-section">
        <div className="container">
          <div className="masonry-blog-grid">
            {posts.map((post, i) => (
              <motion.div 
                key={post.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="impact-story-card"
              >
                <div className="story-thumb">
                  <img src={post.image} alt={post.title} />
                  <span className="story-badge">{post.category}</span>
                </div>
                <div className="story-content">
                  <span className="date">{post.date}</span>
                  <h3>{post.title}</h3>
                  <p>{post.excerpt}</p>
                  <div className="story-action">
                    <span className="action-link">Full Story <ArrowRight size={14} /></span>
                    <span className="impact-result">{post.result}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* ── High Trust Newsletter ── */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="trust-newsletter"
          >
            <h2>Stay in the Circle</h2>
            <p>Join 10,000+ supporters who receive our monthly impact digest and exclusive field reports.</p>
            <AnimatePresence mode="wait">
              {subStatus === 'sent' ? (
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
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '0.75rem',
                    color: '#15803d',
                    fontWeight: 600,
                    maxWidth: '500px',
                    margin: '0 auto'
                  }}
                >
                  <CheckCircle size={20} />
                  Welcome to the Circle! Check your inbox soon.
                </motion.div>
              ) : (
                <motion.form 
                  key="form"
                  onSubmit={handleSubscribe} 
                  className="newsletter-box"
                  initial={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  <input type="email" placeholder="Your email address" required />
                  <Button variant="primary" size="lg" disabled={subStatus === 'sending'}>
                    {subStatus === 'sending' ? 'Subscribing...' : 'Subscribe'}
                  </Button>
                </motion.form>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Blog;
