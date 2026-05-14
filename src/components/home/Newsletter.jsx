import React from 'react';
import { Send } from 'lucide-react';
import { toast } from 'react-hot-toast';

const Newsletter = () => {
  const handleSubscribe = (e) => {
    e.preventDefault();
    toast.success('Thank you for subscribing!', {
      icon: '📬',
      style: {
        borderRadius: '10px',
        background: '#333',
        color: '#fff',
      },
    });
    e.target.reset();
  };

  return (
    <section className="newsletter-simple">
      <div className="container">
        <div className="newsletter-flex">
          <div className="newsletter-text">
            <h3>Subscribe to Our Updates</h3>
            <p>Get the latest impact stories and community news.</p>
          </div>
          <form className="newsletter-simple-form" onSubmit={handleSubscribe}>
            <input type="email" placeholder="Your email address" required />
            <button type="submit">Join Now</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
