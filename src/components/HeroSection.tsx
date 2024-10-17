import React from 'react';
import { Stethoscope } from 'lucide-react';

interface HeroSectionProps {
  scrollY: number;
}

const HeroSection: React.FC<HeroSectionProps> = ({ scrollY }) => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-primary to-accent text-white">
      <div className="container mx-auto px-4 z-10">
        <div className="text-center">
          <div className="mb-8">
            <img src="/steth-logo.png" alt="Steth Logo" className="w-40 h-40 mx-auto filter drop-shadow-lg" />
          </div>
          <h1 
            className="text-5xl md:text-6xl font-bold mb-4 parallax"
            style={{ transform: `translateY(${scrollY * 0.3}px)` }}
          >
            Empowering Doctors, Connecting Minds
          </h1>
          <p 
            className="text-xl md:text-2xl mb-8 parallax"
            style={{ transform: `translateY(${scrollY * 0.2}px)` }}
          >
            Join Steth: A professional networking platform exclusively for doctors
          </p>
          <a href="https://docs.google.com/forms/d/e/1FAIpQLSe91woPehz3EZptvKBgf115QwmxnVTI3SP6aeVqiuBRvt0RAg/viewform?usp=sf_link" target="_blank" rel="noopener noreferrer">
  <button className="bg-button hover:bg-white hover:text-accent text-white font-bold py-3 px-8 rounded-full transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-110">
    Join the Waitlist
  </button>
</a>
        </div>
      </div>
      <div className="absolute inset-0 flex items-center justify-center opacity-10">
        <Stethoscope size={400} className="animate-pulse" />
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-gray-50 to-transparent"></div>
    </section>
  );
};

export default HeroSection;