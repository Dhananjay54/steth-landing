import React, { useEffect, useState } from 'react';
import HeroSection from './components/HeroSection';
import FeaturesSection from './components/FeaturesSection';
import AboutSection from './components/AboutSection';
import CtaSection from './components/CtaSection';
import Footer from './components/Footer';

function App() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      <HeroSection scrollY={scrollY} />
      <FeaturesSection />
      <AboutSection />
      <CtaSection />
      <Footer />
    </div>
  );
}

export default App;