import React from 'react';
import { Instagram, ShoppingBag } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-navy-dark text-white py-16 relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-gold/20 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center text-center space-y-8">
        
        {/* Brand Signoff */}
        <div className="flex flex-col items-center">
          <span className="font-serif text-3xl font-bold tracking-widest text-gold">
            AMAZE INDONESIA
          </span>
          <span className="text-[10px] font-mono tracking-[0.3em] text-ink/60 uppercase font-medium mt-1">
            PREMIUM MODEST ATTIRE
          </span>
        </div>

        {/* Social and Shop Links */}
        <div className="flex justify-center space-x-6">
          {/* Instagram link */}
          <a
            href="https://www.instagram.com/amzindonesia/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 bg-white/[0.03] hover:bg-gold/10 border border-white/10 hover:border-gold/30 text-white hover:text-gold transition-all duration-300 flex items-center justify-center space-x-2.5 px-6 font-mono text-[10px] tracking-widest uppercase font-semibold cursor-pointer"
          >
            <Instagram className="w-4 h-4" />
            <span>Instagram</span>
          </a>

          {/* Shopee link */}
          <a
            href="https://shopee.co.id/amzindonesia"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 bg-white/[0.03] hover:bg-gold/10 border border-white/10 hover:border-gold/30 text-white hover:text-gold transition-all duration-300 flex items-center justify-center space-x-2.5 px-6 font-mono text-[10px] tracking-widest uppercase font-semibold cursor-pointer"
          >
            <ShoppingBag className="w-4 h-4" />
            <span>Shopee Indonesia</span>
          </a>
        </div>

        {/* Separator */}
        <div className="w-24 h-[1px] bg-gold/20" />

        {/* Copyright - Literal Match Requirement */}
        <div className="space-y-2">
          <p className="font-sans text-xs text-ink/50 tracking-wide">
            Copyright © AMZ | Website Developed By ArrizalGFX.
          </p>
          <p className="font-sans text-[10px] text-ink/40">
            Seluruh hak cipta dilindungi undang-undang. Desain pakaian dilindungi hak kekayaan intelektual AMZ.
          </p>
        </div>

      </div>
    </footer>
  );
}
