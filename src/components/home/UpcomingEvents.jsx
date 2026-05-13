import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, ArrowRight } from 'lucide-react';
import SectionHeader from '../SectionHeader';

const UpcomingEvents = () => {
  const events = [
    {date:'12 Aug 2024', title:'Community Clean‑up', icon:<Calendar size={24} />},
    {date:'25 Sep 2024', title:'Health Awareness Workshop', icon:<Calendar size={24} />},
    {date:'10 Oct 2024', title:'Women Empowerment Meetup', icon:<Calendar size={24} />},
  ];

  return (
    <section className="event-section section-padding">
      <div className="container">
        <SectionHeader subtitle="Join Us" title="Upcoming Events" />
        
        <div className="events-modern-grid">
          {events.map((e, i) => (
            <motion.div 
              key={i} 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="modern-event-card"
            >
              <div className="event-card-top">
                <div className="event-date-pill">
                  <span className="d-day">{e.date.split(' ')[0]}</span>
                  <span className="d-month">{e.date.split(' ')[1]}</span>
                </div>
                <div className="event-icon-circle">{e.icon}</div>
              </div>
              
              <div className="event-card-body">
                <h4>{e.title}</h4>
                <p>Join us for an impactful day of community service and meaningful engagement.</p>
              </div>
              
              <div className="event-card-footer">
                <button className="event-action-link">
                  Register Now <ArrowRight size={16} />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UpcomingEvents;
