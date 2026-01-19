
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const categories = ['All', 'Bridal', 'Party', 'Celebrity'];

const images = [
  { id: 1, url: 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&q=80&w=800', cat: 'Bridal' },
  { id: 2, url: 'https://images.unsplash.com/photo-1512496015851-a90fb38ba796?auto=format&fit=crop&q=80&w=800', cat: 'Celebrity' },
  { id: 3, url: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&q=80&w=800', cat: 'Party' },
  { id: 4, url: 'https://images.unsplash.com/photo-1594465919760-441fe5908ab0?auto=format&fit=crop&q=80&w=800', cat: 'Bridal' },
  { id: 5, url: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&q=80&w=800', cat: 'Celebrity' },
  { id: 6, url: 'https://images.unsplash.com/photo-1519748771451-a94c59ad3a75?auto=format&fit=crop&q=80&w=800', cat: 'Party' },
];

const Portfolio: React.FC = () => {
  const [activeTab, setActiveTab] = useState('All');
  const filtered = activeTab === 'All' ? images : images.filter(img => img.cat === activeTab);

  return (
    <section id="portfolio" className="py-32 px-6 bg-cream">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <div>
            <span className="text-xs uppercase tracking-[0.3em] text-gold mb-4 block">Visual Stories</span>
            <h2 className="text-4xl md:text-6xl font-serif text-charcoal">The Portfolio</h2>
          </div>
          
          <div className="flex gap-8">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveTab(cat)}
                className={`text-xs uppercase tracking-luxury pb-2 transition-all border-b ${
                  activeTab === cat ? 'border-gold text-gold' : 'border-transparent text-charcoal/40'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <motion.div 
          layout
          className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8"
        >
          <AnimatePresence>
            {filtered.map((img) => (
              <motion.div
                key={img.id}
                layout
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="relative group overflow-hidden break-inside-avoid"
              >
                <img 
                  src={img.url} 
                  alt={img.cat} 
                  className="w-full grayscale group-hover:grayscale-0 transition-all duration-1000 transform group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                  <span className="text-white text-xs uppercase tracking-luxury border border-white px-6 py-2">
                    View Details
                  </span>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default Portfolio;
