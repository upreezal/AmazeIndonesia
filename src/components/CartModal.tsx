import React from 'react';
import { X, Trash2, Plus, Minus, ShoppingBag, ArrowRight } from 'lucide-react';
import { CartItem } from '../types';

interface CartModalProps {
  isOpen: boolean;
  onClose: () => void;
  cart: CartItem[];
  onUpdateQuantity: (productId: string, quantity: number) => void;
  onRemoveItem: (productId: string) => void;
  onCheckout: () => void;
}

export default function CartModal({
  isOpen,
  onClose,
  cart,
  onUpdateQuantity,
  onRemoveItem,
  onCheckout,
}: CartModalProps) {
  if (!isOpen) return null;

  const subtotal = cart.reduce((sum, item) => sum + item.product.price * item.quantity, 0);

  const formatRupiah = (number: number) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(number);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-navy-dark/60 backdrop-blur-xs transition-opacity duration-300"
        onClick={onClose}
      />

      <div className="absolute inset-y-0 right-0 max-w-full flex pl-10">
        {/* Drawer Panel */}
        <div className="w-screen max-w-md bg-beige-light border-l border-beige-dark/40 shadow-2xl flex flex-col justify-between animate-slideLeft">
          
          {/* Header */}
          <div className="px-6 py-6 border-b border-beige-dark/40 flex items-center justify-between bg-panel">
            <div className="flex items-center space-x-2.5">
              <ShoppingBag className="w-5 h-5 text-gold" />
              <h2 className="font-serif text-lg font-bold text-ink tracking-wide">
                Keranjang Belanja
              </h2>
            </div>
            <button
              onClick={onClose}
              className="p-1 rounded-full text-ink/60 hover:text-gold hover:bg-beige-light transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Cart Contents */}
          <div className="flex-1 overflow-y-auto px-6 py-6 space-y-6">
            {cart.length === 0 ? (
              <div className="h-full flex flex-col items-center justify-center text-center space-y-4">
                <div className="p-6 bg-beige-dark/30 rounded-none text-gold/60">
                  <ShoppingBag className="w-12 h-12" />
                </div>
                <div>
                  <p className="font-serif text-lg font-semibold text-ink">Keranjang Anda Kosong</p>
                  <p className="font-sans text-xs text-ink/50 mt-1">
                    Silakan lihat koleksi terbaik kami dan tambahkan pakaian impian Anda.
                  </p>
                </div>
                <button
                  onClick={onClose}
                  className="mt-4 px-6 py-3 bg-gold text-black font-mono text-xs font-semibold uppercase tracking-widest hover:bg-gold-dark transition-all duration-300 cursor-pointer rounded-none"
                >
                  Mulai Belanja
                </button>
              </div>
            ) : (
              cart.map((item) => (
                <div
                  key={item.product.id}
                  className="flex space-x-4 bg-panel p-4 border border-beige-dark/40 shadow-xs relative group rounded-none"
                >
                  {/* Thumbnail */}
                  <div className="w-20 aspect-[3/4] flex-shrink-0 bg-beige-dark/20 overflow-hidden border border-beige-dark/30">
                    <img
                      src={item.product.image}
                      alt={item.product.name}
                      className="w-full h-full object-cover object-top"
                      referrerPolicy="no-referrer"
                    />
                  </div>

                  {/* Info */}
                  <div className="flex-1 flex flex-col justify-between py-0.5">
                    <div>
                      <h4 className="font-serif text-sm font-bold text-ink line-clamp-1 pr-6 font-medium">
                        {item.product.name}
                      </h4>
                      <p className="font-mono text-[10px] text-gold mt-0.5 uppercase tracking-widest">
                        {item.product.category}
                      </p>
                      <p className="font-mono text-xs text-ink/70 font-semibold mt-1">
                        {formatRupiah(item.product.price)}
                      </p>
                    </div>

                    {/* Quantity Selector & Trash */}
                    <div className="flex items-center justify-between mt-3">
                      {/* Counter */}
                      <div className="flex items-center border border-beige-dark/40 bg-beige-light">
                        <button
                          onClick={() => onUpdateQuantity(item.product.id, item.quantity - 1)}
                          className="px-2 py-1 text-ink/60 hover:text-gold hover:bg-beige-dark/20 transition-all cursor-pointer"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="px-3 py-0.5 font-mono text-xs text-ink font-medium">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => onUpdateQuantity(item.product.id, item.quantity + 1)}
                          className="px-2 py-1 text-ink/60 hover:text-gold hover:bg-beige-dark/20 transition-all cursor-pointer"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>

                      {/* Remove Button */}
                      <button
                        onClick={() => onRemoveItem(item.product.id)}
                        className="text-red-500 hover:text-red-400 p-1.5 hover:bg-red-500/10 transition-colors rounded-none cursor-pointer"
                        title="Hapus item"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Footer & Checkout Trigger */}
          {cart.length > 0 && (
            <div className="border-t border-beige-dark/40 px-6 py-6 bg-panel space-y-4">
              <div className="flex justify-between items-center">
                <span className="font-mono text-xs uppercase tracking-widest text-ink/60 font-semibold">
                  Subtotal
                </span>
                <span className="font-mono text-lg font-bold text-gold">
                  {formatRupiah(subtotal)}
                </span>
              </div>
              
              <p className="text-[10px] font-sans text-ink/50 leading-relaxed italic">
                *Pesanan akan diformat otomatis untuk dikirim ke WhatsApp Customer Service kami.
              </p>

              <button
                onClick={onCheckout}
                className="w-full py-4 bg-gold hover:bg-gold-dark text-black font-mono text-xs font-semibold uppercase tracking-widest transition-all duration-300 flex items-center justify-center space-x-2 cursor-pointer shadow-lg hover:shadow-gold/25 rounded-none"
              >
                <span>Lanjut ke Pemesanan</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          )}

        </div>
      </div>
    </div>
  );
}
