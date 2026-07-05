import React from 'react';
import { motion } from 'motion/react';
import { Sparkles, ShieldCheck, Heart } from 'lucide-react';

export default function About() {
  return (
    <section id="tentang" className="py-24 sm:py-32 bg-beige-light relative overflow-hidden">
      {/* Decorative background shape */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-beige-dark/20 rounded-full filter blur-3xl -z-10" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gold/5 rounded-full filter blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          
          {/* Visual Side */}
          <div className="lg:col-span-5 relative order-last lg:order-first">
            <div className="relative z-10 border border-beige-dark/40 p-3 bg-panel shadow-xl max-w-sm mx-auto lg:mx-0">
              <div className="aspect-[3/4] overflow-hidden">
                <img
                  src="/src/assets/images/abaya_dubai_syari_1783237487008.jpg"
                  alt="Amaze Indonesia Premium Design"
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="mt-4 text-center">
                <p className="font-serif text-lg italic text-ink">"Keanggunan yang Sempurna"</p>
                <p className="font-mono text-[10px] uppercase tracking-widest text-gold font-medium mt-1">Abaya Dubai Syar'i</p>
              </div>
            </div>
            
            {/* Absolute accent card */}
            <div className="absolute -bottom-6 -right-6 md:right-10 lg:-right-8 bg-panel text-ink p-6 shadow-2xl max-w-[200px] z-20 hidden sm:block border border-beige-dark/40">
              <p className="font-serif text-4xl text-gold font-bold">100%</p>
              <p className="font-mono text-[10px] uppercase tracking-wider text-ink/75 mt-2 font-semibold">Premium Silk & Cotton</p>
              <div className="h-[1px] bg-gold/20 my-3" />
              <p className="font-sans text-[10px] text-ink/60">Setiap helai dijahit dengan presisi butik eksklusif.</p>
            </div>
          </div>

          {/* Content Side */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            <div className="mb-4">
              <span className="text-xs font-mono tracking-[0.25em] text-gold uppercase font-semibold">
                OUR LEGACY & COMMITMENT
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-ink mt-2 tracking-tight">
                Keanggunan dalam Kesederhanaan
              </h2>
              <div className="h-1 w-20 bg-gold mt-4" />
            </div>

            <p className="font-sans text-ink/85 text-base leading-relaxed mb-6 font-light">
              Lahir dari dedikasi tinggi terhadap busana modest premium, <strong>AMAZE INDONESIA</strong> hadir sebagai jawaban untuk pria dan wanita yang menginginkan busana muslim berkelas tanpa mengorbankan kenyamanan. 
            </p>
            
            <p className="font-sans text-ink/75 text-sm leading-relaxed mb-8">
              Kami percaya bahwa modest fashion bukan hanya tentang berpakaian tertutup, melainkan sebuah bentuk rasa hormat pada diri sendiri dan keagungan nilai. Oleh karena itu, setiap jubah, gamis, dan abaya yang kami rilis melewati proses kurasi bahan super premium yang dingin, ringan, serta dijahit dengan ketelitian butik kelas dunia.
            </p>

            {/* Micro Pillars */}
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="p-2 bg-gold/10 text-gold rounded-none mt-1">
                  <Sparkles className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="font-sans font-semibold text-sm text-ink">Koleksi Desain Terbatas (Eksklusif)</h4>
                  <p className="font-sans text-xs text-ink/65">Kami merancang koleksi eksklusif dalam jumlah terbatas untuk menjaga keistimewaan gaya Anda.</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <div className="p-2 bg-gold/10 text-gold rounded-none mt-1">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="font-sans font-semibold text-sm text-ink">Garansi Kualitas Jahitan</h4>
                  <p className="font-sans text-xs text-ink/65">Garansi jahitan kuat, presisi, dan nyaman. Standard butik ekspor mewah.</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
