import React, { useState } from 'react';
import { ShoppingBag, Check } from 'lucide-react';
import { Product } from '../types';
import { PRODUCTS } from '../data';

interface KoleksiProps {
  onAddToCart: (product: Product) => void;
}

export default function Koleksi({ onAddToCart }: KoleksiProps) {
  const [activeTab, setActiveTab] = useState<'Semua' | 'Pria' | 'Wanita'>('Semua');
  const [addedItems, setAddedItems] = useState<{ [id: string]: boolean }>({});

  const filteredProducts = PRODUCTS.filter((product) => {
    if (activeTab === 'Semua') return true;
    return product.category === activeTab;
  });

  const handleAddClick = (product: Product) => {
    onAddToCart(product);
    setAddedItems((prev) => ({ ...prev, [product.id]: true }));
    setTimeout(() => {
      setAddedItems((prev) => ({ ...prev, [product.id]: false }));
    }, 1500);
  };

  const formatRupiah = (number: number) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(number);
  };

  return (
    <section id="koleksi" className="py-24 bg-beige-light relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Title */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-mono tracking-[0.25em] text-gold uppercase font-semibold">
            BEST SELLER & EXCLUSIVE SERIES
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-ink mt-2 tracking-tight">
            Koleksi Unggulan Kami
          </h2>
          <div className="h-1 w-20 bg-gold mx-auto mt-4" />
          <p className="font-sans text-sm text-ink/70 mt-5 font-light">
            Sempurnakan penampilan syar'i Anda dengan pilihan mahakarya busana terbaik. Didesain secara eksklusif dengan material premium.
          </p>
        </div>

        {/* Categories Tab */}
        <div className="flex justify-center space-x-2 sm:space-x-4 mb-12">
          {(['Semua', 'Pria', 'Wanita'] as const).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-6 py-2.5 font-mono text-xs tracking-widest uppercase transition-all duration-300 border cursor-pointer rounded-none ${
                activeTab === tab
                  ? 'bg-gold text-black border-gold shadow-md font-medium'
                  : 'bg-panel text-ink/70 border-beige-dark hover:bg-beige-dark hover:text-ink'
              }`}
            >
              {tab === 'Semua' ? 'Semua Seri' : tab === 'Pria' ? 'Koleksi Pria' : 'Koleksi Wanita'}
            </button>
          ))}
        </div>

        {/* Product Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="group flex flex-col bg-panel border border-beige-dark/40 overflow-hidden hover:shadow-2xl hover:border-gold/30 transition-all duration-500 rounded-none relative"
            >
              {/* Image Container with Badges */}
              <div className="aspect-[3/4] overflow-hidden bg-beige-dark/30 relative">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover object-top transition-all duration-700 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                
                {/* Elegant overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Category Badge */}
                <span className="absolute top-4 left-4 bg-black/80 border border-beige-dark/50 text-gold text-[9px] font-mono font-bold uppercase tracking-widest px-3 py-1">
                  {product.category}
                </span>

                {/* Exclusive series badge */}
                <span className="absolute top-4 right-4 bg-gold text-black text-[9px] font-mono font-bold uppercase tracking-widest px-3 py-1">
                  Eksklusif
                </span>
              </div>

              {/* Product Information */}
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="font-serif text-lg sm:text-xl font-bold text-ink tracking-tight mb-2 group-hover:text-gold transition-colors duration-300">
                  {product.name}
                </h3>
                
                {/* Price tag */}
                <div className="text-gold font-mono text-sm tracking-wide mb-3">
                  {formatRupiah(product.price)}
                </div>

                {/* Specs / Sub-description */}
                {product.subDescription && (
                  <p className="text-[11px] font-mono tracking-wide text-gold/80 mb-3 bg-gold/5 border-l-2 border-gold px-2.5 py-1">
                    {product.subDescription}
                  </p>
                )}

                {/* Product Description */}
                <p className="font-sans text-xs text-ink/75 leading-relaxed mb-6 flex-grow font-light">
                  {product.description}
                </p>

                {/* Action Button */}
                <button
                  onClick={() => handleAddClick(product)}
                  className={`w-full py-3.5 px-4 font-mono text-xs uppercase tracking-widest transition-all duration-300 flex items-center justify-center space-x-2 border cursor-pointer rounded-none ${
                    addedItems[product.id]
                      ? 'bg-emerald-600 border-emerald-600 text-white font-semibold'
                      : 'bg-gold border-gold text-black font-semibold hover:bg-gold-dark hover:border-gold-dark hover:shadow-lg'
                  }`}
                >
                  {addedItems[product.id] ? (
                    <>
                      <Check className="w-4 h-4" />
                      <span>Berhasil Ditambahkan</span>
                    </>
                  ) : (
                    <>
                      <ShoppingBag className="w-4 h-4" />
                      <span>Tambah ke Keranjang</span>
                    </>
                  )}
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
