import React from 'react';
import { Users, Shield, TrendingUp } from 'lucide-react';

const AboutSection: React.FC = () => {
  return (
    <section className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-accent">About Steth</h2>
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-xl mb-8 text-gray-700">
            Steth is a professional space designed for doctors to collaborate, share, and grow together. Whether it's through discussing complex cases or staying up-to-date with industry standards, we provide a secure and exclusive platform for verified doctors.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div className="fade-in-up bg-white rounded-lg p-6 shadow-lg" style={{ animationDelay: '0.1s' }}>
              <Users className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2 text-accent">Exclusive Community</h3>
              <p className="text-gray-600">Connect with verified medical professionals</p>
            </div>
            <div className="fade-in-up bg-white rounded-lg p-6 shadow-lg" style={{ animationDelay: '0.2s' }}>
              <Shield className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2 text-accent">Secure Platform</h3>
              <p className="text-gray-600">Your data and discussions are protected</p>
            </div>
            <div className="fade-in-up bg-white rounded-lg p-6 shadow-lg" style={{ animationDelay: '0.3s' }}>
              <TrendingUp className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2 text-accent">Professional Growth</h3>
              <p className="text-gray-600">Access resources to advance your career</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;