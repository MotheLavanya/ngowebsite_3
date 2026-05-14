import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Heart, Users, Calendar } from 'lucide-react';
import { toast } from 'react-hot-toast';
import Button from '../components/Button';
import './Blog.css';

const Blog = () => {
  const handleSubscribe = (e) => {
    e.preventDefault();
    const loadingToast = toast.loading('Subscribing to impact...');
    
    setTimeout(() => {
      toast.dismiss(loadingToast);
      toast.success('Welcome to the Circle! Check your inbox soon.', {
        icon: '💌',
      });
      e.target.reset();
    }, 1200);
  };

  const posts = [
    {
      id: 1,
      category: 'Education',
      title: 'Digital Frontier: Solar Labs Reach 50 Villages',
      date: 'May 10, 2024',
      result: '5,000+ Students',
      image: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=800',
      excerpt: 'Our mission to bridge the digital divide has hit a new milestone in rural Telangana.'
    },
    {
      id: 2,
      category: 'Empowerment',
      title: 'Laxmi’s Journey: From Homemaker to CEO',
      date: 'April 25, 2024',
      result: 'Success Story',
      image: 'https://images.unsplash.com/photo-1503387762-592dea58ef23?q=80&w=800',
      excerpt: 'Witness how micro-financing is transforming lives at the grassroots level.'
    },
    {
      id: 3,
      category: 'Healthcare',
      title: 'Slum Health: Mobile Clinic Impact Report',
      date: 'April 12, 2024',
      result: '1,200 Patients',
      image: 'https://images.unsplash.com/photo-1516549655169-df83a0774514?q=80&w=800',
      excerpt: 'Providing primary care to the most underserved urban communities this quarter.'
    },
    {
      id: 4,
      category: 'Environment',
      title: 'Solar Wells: Clean Water for Every Household',
      date: 'March 30, 2024',
      result: '500 Families',
      image: 'https://images.unsplash.com/photo-1521618755572-156ae0cdd74d?q=80&w=800',
      excerpt: 'No more walking miles for water. Solar technology is providing constant access.'
    },
    {
      id: 5,
      category: 'Volunteers',
      title: 'Join our Weekend Mentorship Program',
      date: 'March 15, 2024',
      result: 'Join Us',
      image: 'https://images.unsplash.com/photo-1593113598332-cd288d649433?q=80&w=800',
      excerpt: 'Spend your weekends shaping the future of a child. Volunteer orientation next week.'
    },
    {
      id: 6,
      category: 'Nurture',
      title: 'The Power of Collective: Self-Help Groups',
      date: 'March 05, 2024',
      result: '25 SHGs Formed',
      image: 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=800',
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
              <img src="https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?q=80&w=800" alt="Blog Hero" className="v5-portal-image" />
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
            <form onSubmit={handleSubscribe} className="newsletter-box">
              <input type="email" placeholder="Your email address" required />
              <Button variant="primary" size="lg">Subscribe</Button>
            </form>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Blog;
