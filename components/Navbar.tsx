
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        isScrolled ? 'bg-cream/90 backdrop-blur-md py-4 shadow-sm' : 'bg-transparent py-8'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <div className="flex-1">
          <button 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="text-2xl font-serif tracking-luxury hover:text-gold transition-colors text-left"
          >
            JK
          </button>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-12 items-center">
          {['About', 'Services', 'Portfolio', 'Reviews'].map((item) => (
            <button
              key={item}
              onClick={() => scrollToSection(item.toLowerCase())}
              className="text-xs uppercase tracking-luxury hover:text-gold transition-colors font-medium text-charcoal"
            >
              {item}
            </button>
          ))}
        </div>

        {/* Right Action */}
        <div className="flex-1 flex justify-end">
          <button 
            onClick={() => scrollToSection('contact')}
            className="border border-gold text-gold px-8 py-2 text-xs uppercase tracking-luxury hover:bg-gold hover:text-white transition-all duration-300"
          >
            Contact
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
