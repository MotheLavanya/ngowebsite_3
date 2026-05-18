import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Heart, Calendar, Users, Globe, ArrowRight, Briefcase, Megaphone, Gift } from 'lucide-react';
import SectionHeader from '../SectionHeader';

const WaysToHelp = () => {
  const navigate = useNavigate();
  const [activeIdx, setActiveIdx] = React.useState(0);
  
  const ways = [
    { 
      title: 'One-time Donation', 
      desc: 'Support our immediate needs with a single gift.', 
      icon: Heart,
      image: 'https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?auto=format&fit=crop&q=80&w=400'
    },
    { 
      title: 'Monthly Giving', 
      desc: 'Provide steady support by becoming a recurring donor.', 
      icon: Calendar,
      image: 'https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?auto=format&fit=crop&q=80&w=400'
    },
    { 
      title: 'Volunteer Time', 
      desc: 'Share your skills and passion directly on the ground.', 
      icon: Users,
      image: 'https://images.unsplash.com/photo-1559027615-cd4628902d4a?auto=format&fit=crop&q=80&w=400'
    },
    { 
      title: 'Corporate Partner', 
      desc: 'Engage your company in meaningful social impact.', 
      icon: Briefcase,
      image: 'https://images.unsplash.com/photo-1431540015161-0bf868a2d407?auto=format&fit=crop&q=80&w=400'
    },
    { 
      title: 'Social Advocacy', 
      desc: 'Use your voice to raise awareness for our causes.', 
      icon: Megaphone,
      image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=400'
    },
    { 
      title: 'Legacy Giving', 
      desc: 'Leave a lasting impact for generations to come.', 
      icon: Gift,
      image: 'https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&q=80&w=400'
    }
  ];

  return (
    <section className="ways-to-give section-padding">
      <div className="container ways-split-layout">
        <div className="ways-text-side">
          <SectionHeader subtitle="Make an Impact" title="Multiple Ways You Can Help" />
          <p className="ways-intro">Every contribution, no matter the size, helps us bring hope and change to those who need it most. Discover how you can be the difference today.</p>
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="get-involved-btn"
            onClick={() => navigate('/volunteer')}
          >
            Get Involved Now
          </motion.button>
        </div>

        <div className="ways-circle-side">
          <div className="circle-main-wrapper">
            {/* Central Content Box */}
            <AnimatePresence mode="wait">
              <motion.div 
                key={activeIdx}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 1.2 }}
                className="circle-center-content"
                style={{
                  backgroundImage: `linear-gradient(rgba(15, 23, 42, 0.82), rgba(15, 23, 42, 0.82)), url(${ways[activeIdx].image})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  color: '#ffffff',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  transition: 'background-image 0.4s ease-in-out'
                }}
              >
                <div 
                  className="center-icon"
                  style={{
                    background: 'rgba(249, 115, 22, 0.15)',
                    color: 'var(--primary)',
                    border: '1px solid rgba(249, 115, 22, 0.3)',
                    marginBottom: '1rem'
                  }}
                >
                  {React.createElement(ways[activeIdx].icon, { size: 32 })}
                </div>
                <h4 style={{ color: '#ffffff', fontWeight: '800', marginBottom: '0.5rem' }}>{ways[activeIdx].title}</h4>
                <p style={{ color: '#e2e8f0', fontSize: '0.85rem', lineHeight: '1.4' }}>{ways[activeIdx].desc}</p>
              </motion.div>
            </AnimatePresence>

            {/* Orbiting Icons */}
            <div className="orbiting-icons-layer">
              {ways.map((way, idx) => {
                const angle = (idx * 360) / ways.length;
                return (
                  <div 
                    key={idx} 
                    className={`orbit-icon-node ${activeIdx === idx ? 'active' : ''}`}
                    style={{ '--node-angle': `${angle}deg` }}
                    onClick={() => setActiveIdx(idx)}
                  >
                    <div className="node-inner">
                      <way.icon size={22} />
                    </div>
                  </div>
                );
              })}
            </div>
            
            {/* Visual Rings */}
            <div className="circle-ring-bg" />
            <div className="circle-ring-pulse" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default WaysToHelp;
