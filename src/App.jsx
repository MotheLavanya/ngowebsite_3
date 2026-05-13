import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// Lazy loading pages for performance
const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
const Programs = lazy(() => import('./pages/Programs'));
const Impact = lazy(() => import('./pages/Impact'));
const Donate = lazy(() => import('./pages/Donate'));
const Volunteer = lazy(() => import('./pages/Volunteer'));
const Transparency = lazy(() => import('./pages/Transparency'));
const Blog = lazy(() => import('./pages/Blog'));
const Contact = lazy(() => import('./pages/Contact'));

// Loading component
const Loading = () => (
  <div style={{ 
    height: '100vh', 
    display: 'flex', 
    justifyContent: 'center', 
    alignItems: 'center',
    background: 'var(--bg-main)',
    color: 'var(--primary)',
    fontSize: '1.5rem',
    fontFamily: 'Outfit'
  }}>
    Loading EmpowerHope...
  </div>
);

function App() {
  return (
    <Router>
      <div className="app-container">
        <Navbar />
        <main>
          <Suspense fallback={<Loading />}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/programs" element={<Programs />} />
              <Route path="/impact" element={<Impact />} />
              <Route path="/donate" element={<Donate />} />
              <Route path="/volunteer" element={<Volunteer />} />
              <Route path="/transparency" element={<Transparency />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </Suspense>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
