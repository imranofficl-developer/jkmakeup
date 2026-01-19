
import React from 'react';
import { motion } from 'framer-motion';

const services = [
  { title: "Bridal Makeup", desc: "Exquisite, long-lasting luxury for your most memorable day." },
  { title: "Celebrity & Red Carpet", desc: "High-fashion, camera-ready aesthetics for premium events." },
  { title: "Reception / Party", desc: "Sophisticated glam tailored for evening celebrations." },
  { title: "Engagement Makeup", desc: "Radiant, timeless looks for your proposal and shoot." },
  { title: "HD / Airbrush", desc: "Flawless, lightweight coverage with professional finish." },
  { title: "Editorial Shoots", desc: "Bold, creative artistry for commercial and fashion media." }
];

const Services: React.FC = () => {
  return (
    <section id="services" className="py-32 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-24">
          <span className="text-xs uppercase tracking-[0.3em] text-gold mb-4 block">Our Expertise</span>
          <h2 className="text-4xl md:text-6xl font-serif text-charcoal">The Signature Experience</h2>
          <div className="w-24 h-[1px] bg-gold mx-auto mt-8"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {services.map((service, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1, duration: 0.8 }}
              viewport={{ once: true }}
              className="group border border-soft-gray p-12 text-center hover:border-gold transition-all duration-700 hover:shadow-xl"
            >
              <h3 className="text-2xl font-serif mb-6 group-hover:text-gold transition-colors italic">
                {service.title}
              </h3>
              <div className="w-12 h-[1px] bg-soft-gray mx-auto mb-6 group-hover:bg-gold transition-colors"></div>
              <p className="text-charcoal/60 font-light leading-relaxed">
                {service.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
