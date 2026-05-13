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
import JoinRibbon from '../components/home/JoinRibbon';
import VolunteerSpotlight from '../components/home/VolunteerSpotlight';
import WaysToHelp from '../components/home/WaysToHelp';
import Newsletter from '../components/home/Newsletter';
import CTA from '../components/home/CTA';

const Home = () => {
  return (
    <div className="home-page">
      <Hero />
      <Stats />
      <ImpactStories />
      <JoinRibbon />
      <Testimonials />
      <Partners />
      <UpcomingEvents />
      <VolunteerSpotlight />
      <WaysToHelp />
      <Newsletter />
      <CTA />
    </div>
  );
};

export default Home;
