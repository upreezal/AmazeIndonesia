import React from 'react';
import { motion } from 'motion/react';
import { ChevronRight, Phone } from 'lucide-react';

interface HeroProps {
  onNavigate: (sectionId: string) => void;
}

export default function Hero({ onNavigate }: HeroProps) {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Background Image with Dark Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="/src/assets/images/hero_fashion_banner_1783237464960.jpg"
          alt="Amaze Indonesia Hero Banner"
          className="w-full h-full object-cover object-center scale-105 animate-subtleZoom"
          referrerPolicy="no-referrer"
        />
        {/* Gradients for high contrast premium feel */}
        <div className="absolute inset-0 bg-gradient-to-r from-navy-dark/90 via-navy-dark/70 to-transparent md:block hidden" />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-dark/95 via-navy-dark/65 to-navy-dark/40 md:hidden block" />
      </div>

      {/* Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-20 sm:py-32 flex flex-col items-start justify-center text-left">
        <div className="max-w-2xl text-white">
          {/* Subheader Accent */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="inline-flex items-center space-x-2 border border-gold/30 bg-gold/5 px-4 py-1.5 rounded-none mb-6 backdrop-blur-xs"
          >
            <span className="w-1.5 h-1.5 bg-gold rounded-full" />
            <span className="text-xs font-mono tracking-widest uppercase text-gold">
              NEW SEASON • 2026
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl sm:text-5xl lg:text-7xl font-serif font-semibold tracking-tight leading-tight text-[#F4F4F4] mb-6"
          >
            Elevate Your <br className="hidden sm:inline" />
            <span className="text-gold italic font-normal">Modest</span> Style
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-base sm:text-lg text-white/80 mb-10 leading-relaxed font-sans font-light max-w-xl"
          >
            Premium Gamis & Jubah dengan bahan terbaik pilihan. Dirancang khusus untuk memberikan keanggunan, kenyamanan, dan rasa percaya diri di setiap momen spesial Anda.
          </motion.p>

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 w-full sm:w-auto"
          >
            <button
              onClick={() => onNavigate('koleksi')}
              className="px-8 py-4 bg-gold hover:bg-gold-dark text-black font-mono text-xs uppercase tracking-widest rounded-none shadow-xl transition-all duration-300 hover:shadow-gold/20 hover:-translate-y-0.5 cursor-pointer flex items-center justify-center space-x-2 group"
            >
              <span>Lihat Koleksi</span>
              <ChevronRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </button>

            <button
              onClick={() => onNavigate('checkout')}
              className="px-8 py-4 bg-transparent hover:bg-white/10 text-white border border-white/20 hover:border-gold font-mono text-xs uppercase tracking-widest rounded-none transition-all duration-300 cursor-pointer flex items-center justify-center space-x-2"
            >
              <Phone className="w-4 h-4 text-gold" />
              <span>Pesan via WhatsApp</span>
            </button>
          </motion.div>
        </div>
      </div>

      {/* Elegant Bottom Border Accent */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-gold via-beige-light to-gold-dark" />
    </section>
  );
}
