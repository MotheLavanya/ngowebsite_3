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

  // Duplicate testimonials to create an endless loop
  const marqueeItems = [...testimonials, ...testimonials, ...testimonials, ...testimonials];

  return (
    <section className="testimonials-section section-padding" style={{ overflow: 'hidden' }}>
      <div className="container">
        <SectionHeader 
          subtitle="Voices of Change" 
          title="What Our Beneficiaries Say" 
        />
      </div>

      <div className="marquee-container">
        <div className="marquee-track">
          {marqueeItems.map((t, i) => (
            <div key={i} className="marquee-card">
              <div className="marquee-header">
                <div className="marquee-img">
                  <img src={t.image} alt={t.name} />
                </div>
                <div className="marquee-stars">
                  {[...Array(5)].map((_, idx) => <Star key={idx} size={14} fill="currentColor" />)}
                </div>
              </div>
              <div className="marquee-body">
                <Quote className="marquee-quote" size={32} />
                <p>"{t.text}"</p>
              </div>
              <div className="marquee-footer">
                <h4>{t.name}</h4>
                <span>{t.role}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
