import React, { useState, useEffect } from 'react';

const testimonials = [
  { name: 'Dr. Sarah Johnson', role: 'Cardiologist', quote: 'Steth has transformed how we collaborate on complex cases.' },
  { name: 'Dr. Michael Chen', role: 'Neurologist', quote: 'The CME opportunities on Steth have been invaluable for my professional growth.' },
  { name: 'Dr. Emily Rodriguez', role: 'Pediatrician', quote: 'The Steth community has been a game-changer for discussing challenging pediatric cases.' },
];

const TestimonialSection: React.FC = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-accent">What Doctors Say</h2>
        <div className="max-w-3xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className={`transition-opacity duration-500 ${
                index === currentTestimonial ? 'opacity-100' : 'opacity-0 absolute'
              }`}
            >
              <blockquote className="text-2xl font-light italic text-center mb-8">
                "{testimonial.quote}"
              </blockquote>
              <div className="text-center">
                <p className="font-semibold text-lg">{testimonial.name}</p>
                <p className="text-gray-600">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;