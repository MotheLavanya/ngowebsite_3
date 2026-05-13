import React from 'react';
import './Home.css';

// Import homepage sections
import Hero from '../components/home/Hero';
import Stats from '../components/home/Stats';
import Programs from '../components/home/Programs';
import Testimonials from '../components/home/Testimonials';
import Partners from '../components/home/Partners';
import ImpactStories from '../components/home/ImpactStories';
import UpcomingEvents from '../components/home/UpcomingEvents';
import VolunteerSpotlight from '../components/home/VolunteerSpotlight';
import WaysToHelp from '../components/home/WaysToHelp';
import CTA from '../components/home/CTA';

const Home = () => {
  return (
    <div className="home-page">
      <Hero />
      <Stats />
      <ImpactStories />
      <Testimonials />
      <Partners />
      <UpcomingEvents />
      <VolunteerSpotlight />
      <WaysToHelp />
      <CTA />
    </div>
  );
};

export default Home;
