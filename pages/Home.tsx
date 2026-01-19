
import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Services from '../components/Services';
import Portfolio from '../components/Portfolio';
import { motion } from 'framer-motion';

const TrustStrip = () => (
  <div className="py-20 bg-white border-y border-soft-gray px-6">
    <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
      <div>
        <div className="text-gold mb-4 text-3xl font-serif italic">Expert Precision</div>
        <p className="text-charcoal/50 text-xs uppercase tracking-widest">Mastering every detail</p>
      </div>
      <div className="border-x-0 md:border-x border-soft-gray">
        <div className="text-gold mb-4 text-3xl font-serif italic">Personalized Care</div>
        <p className="text-charcoal/50 text-xs uppercase tracking-widest">A custom look for you</p>
      </div>
      <div>
        <div className="text-gold mb-4 text-3xl font-serif italic">Premium Products</div>
        <p className="text-charcoal/50 text-xs uppercase tracking-widest">Luxury global brands</p>
      </div>
    </div>
  </div>
);

const About = () => (
  <section id="about" className="py-32 px-6 bg-cream">
    <div className="max-w-4xl mx-auto text-center">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <span className="text-gold text-xs uppercase tracking-[0.5em] mb-8 block">Our Story</span>
        <h2 className="text-4xl md:text-5xl font-serif mb-12 italic">Crafting Timeless Beauty</h2>
        <p className="text-xl text-charcoal/70 font-light leading-relaxed mb-8">
          JK Makeup Artistry was born from a passion for editorial elegance and the delicate 
          beauty of the bridal aesthetic. With over a decade of experience in celebrity 
          green rooms and high-fashion runways, our mission is to provide more than just 
          makeup—we provide a calm, luxury experience for your most significant moments.
        </p>
        <div className="w-20 h-[1px] bg-gold mx-auto"></div>
      </motion.div>
    </div>
  </section>
);

const Testimonials = () => (
  <section id="reviews" className="py-32 px-6 bg-maroon text-cream">
    <div className="max-w-7xl mx-auto">
      <div className="text-center mb-20">
        <h2 className="text-4xl md:text-6xl font-serif italic">Kind Words</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
        {[
          { name: "Sophia Reynolds", text: "JK made me feel like royalty on my wedding day. The look was exactly what I dreamed of—sophisticated and timeless." },
          { name: "Isabella Chen", text: "The professionalism is unmatched. I've worked with many artists, but the level of detail here is simply on another level." },
          { name: "Elena Rossi", text: "An absolute dream to work with. Calming energy and flawless results. My makeup lasted through 12 hours of dancing!" }
        ].map((t, idx) => (
          <div key={idx} className="text-center italic">
            <p className="text-lg leading-loose mb-8">"{t.text}"</p>
            <div className="w-8 h-[1px] bg-gold mx-auto mb-4"></div>
            <p className="text-xs uppercase tracking-luxury text-gold">{t.name}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const Contact = () => (
  <section id="contact" className="py-32 px-6 bg-white">
    <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-24">
      <div>
        <span className="text-gold text-xs uppercase tracking-[0.3em] mb-6 block">Get in Touch</span>
        <h2 className="text-4xl md:text-6xl font-serif text-charcoal mb-12 leading-tight">
          Let’s Curate Your <br /><span className="italic">Perfect Look</span>
        </h2>
        <div className="space-y-8">
          <p className="text-charcoal/60 text-lg font-light max-w-md">
            Whether it's your wedding day or a major red carpet event, 
            we're here to ensure you look breathtaking.
          </p>
          <div className="space-y-4">
            <a href="tel:+1234567890" className="block text-2xl font-serif hover:text-gold transition-colors">+1 (234) 567 890</a>
            <a href="mailto:hello@jkmartistry.com" className="block text-2xl font-serif hover:text-gold transition-colors">hello@jkmartistry.com</a>
            <div className="flex gap-6 pt-4">
              <a href="#" className="text-xs uppercase tracking-luxury hover:text-gold">Instagram</a>
              <a href="#" className="text-xs uppercase tracking-luxury hover:text-gold">WhatsApp</a>
              <a href="#" className="text-xs uppercase tracking-luxury hover:text-gold">Facebook</a>
            </div>
          </div>
        </div>
      </div>

      <form className="space-y-8 bg-cream p-12 shadow-sm border border-soft-gray">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-2">
            <label className="text-[10px] uppercase tracking-luxury text-charcoal/50">Full Name</label>
            <input type="text" className="w-full bg-transparent border-b border-soft-gray py-2 focus:border-gold outline-none transition-colors" />
          </div>
          <div className="space-y-2">
            <label className="text-[10px] uppercase tracking-luxury text-charcoal/50">Phone Number</label>
            <input type="tel" className="w-full bg-transparent border-b border-soft-gray py-2 focus:border-gold outline-none transition-colors" />
          </div>
        </div>
        <div className="space-y-2">
          <label className="text-[10px] uppercase tracking-luxury text-charcoal/50">Event Date</label>
          <input type="date" className="w-full bg-transparent border-b border-soft-gray py-2 focus:border-gold outline-none transition-colors" />
        </div>
        <div className="space-y-2">
          <label className="text-[10px] uppercase tracking-luxury text-charcoal/50">Your Message</label>
          <textarea rows={4} className="w-full bg-transparent border-b border-soft-gray py-2 focus:border-gold outline-none transition-colors resize-none"></textarea>
        </div>
        <button className="w-full bg-charcoal text-white py-4 text-xs uppercase tracking-luxury hover:bg-gold transition-all duration-500">
          Send Enquiry
        </button>
      </form>
    </div>
  </section>
);

const Footer = () => (
  <footer className="py-20 px-6 bg-cream border-t border-soft-gray">
    <div className="max-w-7xl mx-auto text-center">
      <div className="text-3xl font-serif tracking-luxury mb-8">JK</div>
      <p className="text-[10px] uppercase tracking-[0.3em] text-charcoal/40">
        © 2024 JK Makeup Artistry. Luxury Defined. All Rights Reserved.
      </p>
    </div>
  </footer>
);

const Home: React.FC = () => {
  return (
    <div className="selection:bg-gold/30">
      <Navbar />
      <Hero />
      <TrustStrip />
      <About />
      <Services />
      <Portfolio />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
};

export default Home;
