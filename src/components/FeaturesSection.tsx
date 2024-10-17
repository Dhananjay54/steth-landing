import React from 'react';
import { Stethoscope, BookOpen, BarChart2, Briefcase } from 'lucide-react';

const features = [
  { icon: Stethoscope, title: 'Case Discussions', description: 'Engage in insightful case discussions with top specialists.' },
  { icon: BookOpen, title: 'CME Opportunities', description: 'Access curated educational materials and earn CME credits.' },
  { icon: BarChart2, title: 'Surveys & Insights', description: 'Conduct or participate in paid surveys on industry trends.' },
  { icon: Briefcase, title: 'Jobs', description: 'Explore job opportunities from leading healthcare institutions.' },
];

const FeaturesSection: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-accent">Why Steth?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
              <div className="bg-secondary rounded-lg p-6 h-full hover-grow shadow-lg">
                <feature.icon className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-2 text-accent">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;