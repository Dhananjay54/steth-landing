import React from 'react';
import { Linkedin, Instagram } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white py-12">
        <div className="mt-8 pt-8 border-t border-gray-700 text-center">
          <div className="flex justify-center space-x-4 mb-4">
            <a href="https://www.linkedin.com/company/stethapp/" className="text-gray-400 hover:text-white transition"><Linkedin size={24} /></a>
            <a href="#" className="text-gray-400 hover:text-white transition"><Instagram size={24} /></a>
          </div>
          <p className="text-gray-400">&copy; {new Date().getFullYear()} Steth. All rights reserved.</p>
        </div>
    </footer>
  );
};

export default Footer;