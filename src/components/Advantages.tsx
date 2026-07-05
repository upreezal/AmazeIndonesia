import React from 'react';
import { Sparkles, Layers, Heart, Scissors } from 'lucide-react';
import { ADVANTAGES } from '../data';

export default function Advantages() {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Sparkles':
        return <Sparkles className="w-8 h-8 text-gold" />;
      case 'Layers':
        return <Layers className="w-8 h-8 text-gold" />;
      case 'Heart':
        return <Heart className="w-8 h-8 text-gold" />;
      case 'Scissors':
        return <Scissors className="w-8 h-8 text-gold" />;
      default:
        return <Sparkles className="w-8 h-8 text-gold" />;
    }
  };

  return (
    <section className="py-24 bg-navy-dark text-white relative overflow-hidden">
      {/* Visual luxury accent lines */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-gold/30 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-gold/30 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Title */}
        <div className="text-center max-w-2xl mx-auto mb-20">
          <span className="text-xs font-mono tracking-[0.25em] text-gold uppercase font-semibold">
            THE AMZ EXPERIENCE
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-white mt-2 tracking-tight">
            Mengapa Memilih Amaze?
          </h2>
          <div className="h-1 w-20 bg-gold mx-auto mt-4" />
          <p className="font-sans text-sm text-ink/70 mt-5 font-light">
            Setiap detail kami rancang dengan penuh cinta dan dedikasi tinggi demi memberikan kepuasan serta kesempurnaan penampilan islami Anda.
          </p>
        </div>

        {/* Advantages Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {ADVANTAGES.map((item, idx) => (
            <div
              key={idx}
              className="group p-8 bg-panel border border-beige-dark/50 hover:border-gold/30 rounded-none transition-all duration-500 flex flex-col items-center text-center relative"
            >
              {/* Gold Top Accent Line on hover */}
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-gold scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-center" />

              {/* Icon Container */}
              <div className="mb-6 p-4 bg-white/[0.02] group-hover:bg-gold/10 rounded-none transition-colors duration-500 border border-white/5 group-hover:border-gold/20 flex items-center justify-center">
                {getIcon(item.icon)}
              </div>

              {/* Content */}
              <h3 className="font-serif text-lg font-bold tracking-wide text-white mb-3 group-hover:text-gold transition-colors duration-300">
                {item.title}
              </h3>
              
              <p className="font-sans text-xs text-ink/70 leading-relaxed font-light">
                {item.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
