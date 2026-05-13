import React from 'react';
import { motion } from 'framer-motion';
import { Quote, Star } from 'lucide-react';
import SectionHeader from '../SectionHeader';

const Testimonials = () => {
  const testimonials = [
    { 
      name: 'Anjali Sharma', 
      role: 'Vocational Graduate', 
      text: 'The tailoring program was a turning point for me. I now run a successful boutique and support my entire family with dignity.', 
      image: 'https://images.unsplash.com/photo-1594708767771-a7502209ff51?q=80&w=400' 
    },
    { 
      name: 'Aarav Mehta', 
      role: 'Student, Digital Literacy', 
      text: 'I used to think computers were magic. Now, I am learning to build my own apps. The foundation gave me a future I never imagined.', 
      image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=400' 
    },
    { 
      name: 'Meera Reddy', 
      role: 'Healthcare Beneficiary', 
      text: 'The mobile health clinic reached our village when we needed it most. Their doctors are like family to us now.', 
      image: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=400' 
    }
  ];

  return (
    <section className="testimonials-section section-padding">
      <div className="container">
        <SectionHeader 
          subtitle="Voices of Change" 
          title="What Our Beneficiaries Say" 
        />
        <div className="testimonials-grid-modern">
          {testimonials.map((t, i) => (
            <motion.div 
              key={i}
              whileHover={{ y: -15 }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="testimonial-v2-card"
            >
              <div className="t-v2-header">
                <div className="t-v2-img">
                  <img src={t.image} alt={t.name} />
                </div>
                <div className="t-v2-stars">
                  {[...Array(5)].map((_, idx) => <Star key={idx} size={14} fill="currentColor" />)}
                </div>
              </div>
              <div className="t-v2-body">
                <Quote className="t-v2-quote" size={32} />
                <p>"{t.text}"</p>
              </div>
              <div className="t-v2-footer">
                <h4>{t.name}</h4>
                <span>{t.role}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
