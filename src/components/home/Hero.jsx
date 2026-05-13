import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Heart, Play, Sparkles, CheckCircle } from 'lucide-react';
import Button from '../Button';

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <section className="hero-modern">
      {/* Background Animated Elements */}
      <div className="hero-bg-elements">
        <motion.div 
          animate={{ 
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0],
            x: [0, 50, 0],
            y: [0, -30, 0]
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          className="blob blob-1" 
        />
        <motion.div 
          animate={{ 
            scale: [1, 1.1, 1],
            rotate: [0, -45, 0],
            x: [0, -40, 0],
            y: [0, 20, 0]
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
          className="blob blob-2" 
        />
      </div>

      <div className="container hero-container">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="hero-image-modern"
        >
          <div className="layered-hero-collage">
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
              className="main-layered-img"
            >
              <img src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&q=80&w=800" alt="Education" />
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: 50, y: 50 }}
              animate={{ opacity: 1, x: 0, y: 0 }}
              transition={{ delay: 0.5, duration: 1 }}
              className="floating-layered-img img-small-1"
            >
              <img src="https://images.unsplash.com/photo-1542810634-71277d95dcbb?auto=format&fit=crop&q=80&w=400" alt="Healthcare" />
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: -50, y: -50 }}
              animate={{ opacity: 1, x: 0, y: 0 }}
              transition={{ delay: 0.8, duration: 1 }}
              className="floating-layered-img img-small-2"
            >
              <img src="https://images.unsplash.com/photo-1509099836639-18ba1795216d?auto=format&fit=crop&q=80&w=400" alt="Community" />
            </motion.div>
            
            {/* Decorative Elements */}
            <div className="hero-circle-deco" />
          </div>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="hero-content-modern"
        >
          <motion.div variants={itemVariants} className="hero-badge-modern">
            <Sparkles size={14} className="sparkle-icon" />
            <span>Making a Real Difference Since 2015</span>
          </motion.div>

          <motion.h1 variants={itemVariants}>
            Transforming <span className="text-gradient">Lives</span> <br />
            Building <span className="text-highlight">Futures.</span>
          </motion.h1>

          <motion.p variants={itemVariants}>
            EmpowerHope is dedicated to breaking the cycle of poverty in Hyderabad through sustainable education, healthcare, and grassroots community development.
          </motion.p>

          <motion.div variants={itemVariants} className="hero-btns-modern">
            <Button to="/donate" size="lg" icon={ArrowRight} className="btn-impact">
              Donate Now
            </Button>
            <div className="hero-video-link">
              <div className="play-btn-outer">
                <div className="play-btn-inner">
                  <Play fill="currentColor" size={16} />
                </div>
              </div>
              <span>See Our Story</span>
            </div>
          </motion.div>

          <motion.div variants={itemVariants} className="hero-trust-modern">
            <div className="trust-avatars">
              {[1,2,3,4].map(i => (
                <img key={i} src={`https://i.pravatar.cc/150?u=supporter${i}`} alt="Supporter" />
              ))}
              <div className="avatar-plus">+5k</div>
            </div>
            <div className="trust-text">
              <div className="stars">
                {[1,2,3,4,5].map(i => <Sparkles key={i} size={12} fill="var(--primary)" />)}
              </div>
              <p>Trusted by <span>5,000+</span> active donors</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
