
import React from 'react';
import { motion } from 'framer-motion';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center pt-32 pb-20 px-6 bg-cream overflow-hidden">
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="text-center max-w-4xl w-full z-10"
      >
        <span className="text-xs uppercase tracking-[0.5em] text-gold mb-6 block">
          JK MAKEUP ARTISTRY
        </span>
        
        <h1 className="text-5xl md:text-8xl font-serif text-charcoal mb-12 leading-tight">
          Luxury Bridal & <br />
          <span className="italic">Celebrity</span> Makeup Artistry
        </h1>

        {/* Editorial Arched Image Container */}
        <div className="relative mx-auto w-full max-w-md aspect-[3/4] mb-12">
          <motion.div 
            initial={{ scale: 1.1, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1.8, ease: "easeOut" }}
            className="w-full h-full overflow-hidden arch-frame shadow-2xl"
          >
            <img 
              src="https://images.unsplash.com/photo-1596704017254-9b121068fb31?auto=format&fit=crop&q=80&w=1200" 
              alt="Luxury Bridal Makeup"
              className="w-full h-full object-cover"
            />
          </motion.div>
        </div>

        <p className="text-lg md:text-xl text-charcoal/70 max-w-2xl mx-auto font-light leading-relaxed mb-12">
          Providing excellence in bridal, celebrity, and premium event makeup services 
          tailored to your special moments.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
          <button className="bg-gold text-white px-10 py-4 text-xs uppercase tracking-luxury hover:bg-maroon transition-all duration-500 min-w-[240px]">
            Book Appointment
          </button>
          <button 
            onClick={() => document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' })}
            className="border border-charcoal text-charcoal px-10 py-4 text-xs uppercase tracking-luxury hover:bg-charcoal hover:text-white transition-all duration-500 min-w-[240px]"
          >
            View Portfolio
          </button>
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <div className="w-[1px] h-12 bg-gold/50 mx-auto"></div>
      </motion.div>
    </section>
  );
};

export default Hero;
