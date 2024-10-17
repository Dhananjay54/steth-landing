import React from 'react';

const CtaSection: React.FC = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-primary to-accent text-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold mb-8">Join the Steth Community</h2>
        <p className="text-xl mb-12 max-w-2xl mx-auto">
          Get early access to Steth and be a part of the exclusive community for medical professionals.
        </p>
        <a href="https://docs.google.com/forms/d/e/1FAIpQLSe91woPehz3EZptvKBgf115QwmxnVTI3SP6aeVqiuBRvt0RAg/viewform?usp=sf_link" target="_blank" rel="noopener noreferrer">
  <button className="bg-button hover:bg-white hover:text-accent text-white font-bold py-3 px-8 rounded-full transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-110">
    Join the Waitlist
  </button>
</a>
      </div>
    </section>
  );
};

export default CtaSection;