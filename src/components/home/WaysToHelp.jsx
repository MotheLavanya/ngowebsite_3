import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Heart, Calendar, Users, Globe, ArrowRight, Briefcase, Megaphone, Gift } from 'lucide-react';
import SectionHeader from '../SectionHeader';

const WaysToHelp = () => {
  const [activeIdx, setActiveIdx] = React.useState(0);
  
  const ways = [
    { title: 'One-time Donation', desc: 'Support our immediate needs with a single gift.', icon: Heart },
    { title: 'Monthly Giving', desc: 'Provide steady support by becoming a recurring donor.', icon: Calendar },
    { title: 'Volunteer Time', desc: 'Share your skills and passion directly on the ground.', icon: Users },
    { title: 'Corporate Partner', desc: 'Engage your company in meaningful social impact.', icon: Briefcase },
    { title: 'Social Advocacy', desc: 'Use your voice to raise awareness for our causes.', icon: Megaphone },
    { title: 'Legacy Giving', desc: 'Leave a lasting impact for generations to come.', icon: Gift }
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
              >
                <div className="center-icon">
                  {React.createElement(ways[activeIdx].icon, { size: 32 })}
                </div>
                <h4>{ways[activeIdx].title}</h4>
                <p>{ways[activeIdx].desc}</p>
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
                    onMouseEnter={() => setActiveIdx(idx)}
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
