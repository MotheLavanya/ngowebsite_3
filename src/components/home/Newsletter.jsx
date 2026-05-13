import React from 'react';
import { Send } from 'lucide-react';

const Newsletter = () => {
  return (
    <section className="newsletter-simple">
      <div className="container">
        <div className="newsletter-flex">
          <div className="newsletter-text">
            <h3>Subscribe to Our Updates</h3>
            <p>Get the latest impact stories and community news.</p>
          </div>
          <form className="newsletter-simple-form" onSubmit={(e) => e.preventDefault()}>
            <input type="email" placeholder="Your email address" required />
            <button type="submit">Join Now</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
