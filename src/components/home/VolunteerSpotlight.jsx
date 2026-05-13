import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';
import SectionHeader from '../SectionHeader';

const VolunteerSpotlight = () => {
  const [index, setIndex] = React.useState(0);
  
  const volunteers = [
    {name:'Anita Sharma', role:'Health Volunteer', img:'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=600&h=800&fit=crop', quote:'Being part of EmpowerHope gave me purpose and the chance to make a real difference.'},
    {name:'Rahul Verma', role:'Education Mentor', img:'https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=600&h=800&fit=crop', quote:'I love seeing kids light up when they grasp new concepts. It’s rewarding beyond words.'},
    {name:'Priya Das', role:'Skill Trainer', img:'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=600&h=800&fit=crop', quote:'Teaching women new skills and seeing them become independent is the best feeling.'},
    {name:'Siddharth Rao', role:'Youth Mentor', img:'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=600&h=800&fit=crop', quote:'Helping the next generation find their path is my way of giving back to society.'},
  ];

  const next = () => setIndex((prev) => (prev + 1) % volunteers.length);

  return (
    <section className="volunteer-spotlight section-padding">
      <div className="container spotlight-stack-container">
        <div className="spotlight-text-side">
          <SectionHeader subtitle="Our Heroes" title="Volunteer Spotlight" />
          <p className="spotlight-intro">Discover the stories of the amazing people who make our mission possible every day.</p>
          <div className="stack-controls">
            <button onClick={next} className="stack-next-btn">
              Next Story <ArrowRight size={20} />
            </button>
            <div className="stack-counter">
              <span>{index + 1}</span> / {volunteers.length}
            </div>
          </div>
        </div>

        <div className="spotlight-stack-side">
          <div className="stack-deck">
            <AnimatePresence mode="popLayout">
              <motion.div 
                key={index}
                initial={{ x: 300, opacity: 0, rotate: 10, scale: 0.8 }}
                animate={{ x: 0, opacity: 1, rotate: 0, scale: 1 }}
                exit={{ x: -300, opacity: 0, rotate: -10, scale: 0.8 }}
                transition={{ duration: 0.5, ease: "backOut" }}
                className="stack-card-main"
              >
                <div className="stack-card-inner">
                  <div className="stack-img">
                    <img src={volunteers[index].img} alt={volunteers[index].name} />
                  </div>
                  <div className="stack-info">
                    <p className="stack-quote">"{volunteers[index].quote}"</p>
                    <div className="stack-author">
                      <h4>{volunteers[index].name}</h4>
                      <span>{volunteers[index].role}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
            {/* Background card for depth */}
            <div className="stack-card-bg" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default VolunteerSpotlight;
