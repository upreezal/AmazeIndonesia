import React from 'react';
import { Star, Quote } from 'lucide-react';
import { TESTIMONIALS } from '../data';

export default function TestimonialSection() {
  return (
    <section className="py-24 sm:py-32 bg-beige-light relative overflow-hidden">
      {/* Visual background accents */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-gold/5 rounded-full filter blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Title */}
        <div className="text-center max-w-2xl mx-auto mb-20">
          <span className="text-xs font-sans tracking-[0.25em] text-gold uppercase font-semibold">
            WHAT OUR VALUED CUSTOMERS SAY
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-navy-dark mt-2 tracking-tight">
            Testimoni Pelanggan
          </h2>
          <div className="h-1 w-20 bg-gold mx-auto mt-4" />
          <p className="font-sans text-sm text-navy-dark/65 mt-5 font-light">
            Pengalaman nyata dari mereka yang telah merasakan kelembutan bahan dan kemewahan desain AMAZE INDONESIA.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {TESTIMONIALS.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-white border border-beige-dark/60 p-8 sm:p-10 relative flex flex-col justify-between hover:shadow-xl transition-all duration-300"
            >
              {/* Quote Icon overlay */}
              <div className="absolute top-6 right-8 text-beige-dark/30">
                <Quote className="w-10 h-10" />
              </div>

              {/* Top part - Stars & Text */}
              <div>
                {/* 5 Stars */}
                <div className="flex space-x-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-gold text-gold" />
                  ))}
                </div>

                {/* Review Text */}
                <p className="font-sans text-navy-dark/80 text-sm leading-relaxed italic font-light mb-6">
                  "{testimonial.text}"
                </p>
              </div>

              {/* Bottom part - User details */}
              <div className="flex items-center space-x-4 border-t border-beige-dark/40 pt-6">
                {/* Avatar with initials */}
                <div className="w-11 h-11 bg-gold/15 border border-gold/30 text-gold rounded-full flex items-center justify-center font-serif text-sm font-bold">
                  {testimonial.initials}
                </div>
                
                {/* Details */}
                <div>
                  <h4 className="font-serif text-sm font-bold text-navy-dark">
                    {testimonial.name}
                  </h4>
                  <p className="font-sans text-[11px] text-navy-dark/60">
                    {testimonial.city} • <span className="text-gold/80 font-medium">Verified Buyer</span>
                  </p>
                  
                  {/* Purchased Product Tag */}
                  <span className="inline-block mt-1.5 text-[10px] font-sans font-medium px-2 py-0.5 bg-beige-light border border-beige-dark/50 text-navy-dark/70">
                    Produk: {testimonial.productName}
                  </span>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
