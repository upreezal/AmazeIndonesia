import React, { useState } from 'react';
import { Send, ShoppingBag, MapPin, User, Phone } from 'lucide-react';
import { CartItem, CheckoutForm } from '../types';

interface CheckoutSectionProps {
  cart: CartItem[];
  onNavigate: (sectionId: string) => void;
}

export default function CheckoutSection({ cart, onNavigate }: CheckoutSectionProps) {
  const [form, setForm] = useState<CheckoutForm>({
    name: '',
    whatsapp: '',
    address: '',
    notes: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const totalPayment = cart.reduce((sum, item) => sum + item.product.price * item.quantity, 0);

  const formatRupiah = (number: number) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(number);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (cart.length === 0) return;

    setIsSubmitting(true);

    // Build the formatted structured message for WhatsApp
    let productDetailsText = '';
    cart.forEach((item, idx) => {
      productDetailsText += `${idx + 1}. *${item.product.name}*\n   Qty: ${item.quantity} x ${formatRupiah(item.product.price)}\n   Subtotal: *${formatRupiah(item.product.price * item.quantity)}*\n\n`;
    });

    const message = `*FORMULIR PEMESANAN AMAZE INDONESIA*
━━━━━━━━━━━━━━━━━━━━━━━━

*DATA PEMESAN:*
👤 *Nama Lengkap:* ${form.name}
📱 *No. WhatsApp:* ${form.whatsapp}
📍 *Alamat Lengkap:* ${form.address}
📝 *Catatan:* ${form.notes || '-'}

━━━━━━━━━━━━━━━━━━━━━━━━

*DETAIL PESANAN:*
${productDetailsText}*TOTAL PEMBAYARAN:* *${formatRupiah(totalPayment)}*

━━━━━━━━━━━━━━━━━━━━━━━━
_Terima kasih telah berbelanja di AMAZE INDONESIA._
_Mohon tunggu konfirmasi admin kami untuk ketersediaan stok & perhitungan ongkos kirim._`;

    // WhatsApp API URL with the phone number +62 851-5899-3182
    const targetPhone = '6285158993182'; // Formatted without '+' or leading '0'
    const waUrl = `https://api.whatsapp.com/send?phone=${targetPhone}&text=${encodeURIComponent(message)}`;

    // Open WhatsApp in a new tab
    window.open(waUrl, '_blank');
    setIsSubmitting(false);
  };

  return (
    <section id="checkout" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-sans tracking-[0.25em] text-gold uppercase font-semibold">
            SECURE & EASY CHECKOUT
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-navy-dark mt-2 tracking-tight">
            Pemesanan & Detail Alamat
          </h2>
          <div className="h-1 w-20 bg-gold mx-auto mt-4" />
          <p className="font-sans text-sm text-navy-dark/65 mt-5 font-light">
            Silakan lengkapi formulir di bawah ini. Pesanan Anda akan dikirimkan langsung ke WhatsApp kami untuk proses kilat.
          </p>
        </div>

        {cart.length === 0 ? (
          /* Empty state for checkout section */
          <div className="max-w-xl mx-auto border border-beige-dark bg-beige-light/40 p-10 text-center space-y-6 shadow-sm">
            <div className="p-5 bg-beige-dark/30 inline-block rounded-full text-gold/80">
              <ShoppingBag className="w-10 h-10" />
            </div>
            <div>
              <h3 className="font-serif text-lg font-bold text-navy-dark">Keranjang Belanja Kosong</h3>
              <p className="font-sans text-xs text-navy-dark/65 mt-2 leading-relaxed">
                Anda belum memilih produk apa pun. Silakan lihat koleksi busana premium terbaik kami terlebih dahulu untuk melakukan pemesanan.
              </p>
            </div>
            <button
              onClick={() => onNavigate('koleksi')}
              className="px-6 py-3 bg-navy-dark hover:bg-gold text-white hover:text-navy-dark font-sans text-xs font-semibold uppercase tracking-wider transition-colors duration-300 cursor-pointer"
            >
              Lihat Koleksi
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            
            {/* Left: Input Form */}
            <div className="lg:col-span-7 bg-beige-light/40 border border-beige-dark/60 p-8 sm:p-10 shadow-sm">
              <h3 className="font-serif text-xl font-bold text-navy-dark mb-6 tracking-tight border-b border-beige-dark/50 pb-4">
                Formulir Penerima
              </h3>

              <form onSubmit={handleSubmit} className="space-y-6">
                
                {/* Full Name */}
                <div className="space-y-2">
                  <label htmlFor="name" className="block text-xs font-sans font-semibold text-navy-dark tracking-wider uppercase">
                    Nama Lengkap <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <span className="absolute inset-y-0 left-0 pl-3.5 flex items-center text-navy-dark/40 pointer-events-none">
                      <User className="w-4 h-4" />
                    </span>
                    <input
                      type="text"
                      name="name"
                      id="name"
                      required
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Masukkan nama lengkap Anda"
                      className="block w-full pl-10 pr-4 py-3 bg-white border border-beige-dark/80 focus:border-gold focus:ring-1 focus:ring-gold text-sm font-sans text-navy-dark placeholder-navy-dark/30 outline-none transition-all"
                    />
                  </div>
                </div>

                {/* WhatsApp Number */}
                <div className="space-y-2">
                  <label htmlFor="whatsapp" className="block text-xs font-sans font-semibold text-navy-dark tracking-wider uppercase">
                    Nomor WhatsApp <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <span className="absolute inset-y-0 left-0 pl-3.5 flex items-center text-navy-dark/40 pointer-events-none">
                      <Phone className="w-4 h-4" />
                    </span>
                    <input
                      type="tel"
                      name="whatsapp"
                      id="whatsapp"
                      required
                      value={form.whatsapp}
                      onChange={handleChange}
                      placeholder="Contoh: 081234567890"
                      className="block w-full pl-10 pr-4 py-3 bg-white border border-beige-dark/80 focus:border-gold focus:ring-1 focus:ring-gold text-sm font-sans text-navy-dark placeholder-navy-dark/30 outline-none transition-all"
                    />
                  </div>
                </div>

                {/* Address */}
                <div className="space-y-2">
                  <label htmlFor="address" className="block text-xs font-sans font-semibold text-navy-dark tracking-wider uppercase">
                    Alamat Lengkap Pengiriman <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <span className="absolute top-3.5 left-3.5 text-navy-dark/40 pointer-events-none">
                      <MapPin className="w-4 h-4" />
                    </span>
                    <textarea
                      name="address"
                      id="address"
                      required
                      rows={4}
                      value={form.address}
                      onChange={handleChange}
                      placeholder="Tulis alamat lengkap Anda (Nama Jalan, RT/RW, Desa/Kelurahan, Kecamatan, Kabupaten/Kota, Provinsi, Kode Pos)"
                      className="block w-full pl-10 pr-4 py-3 bg-white border border-beige-dark/80 focus:border-gold focus:ring-1 focus:ring-gold text-sm font-sans text-navy-dark placeholder-navy-dark/30 outline-none transition-all resize-none"
                    />
                  </div>
                </div>

                {/* Notes */}
                <div className="space-y-2">
                  <label htmlFor="notes" className="block text-xs font-sans font-semibold text-navy-dark/65 tracking-wider uppercase">
                    Catatan Tambahan (Opsional)
                  </label>
                  <textarea
                    name="notes"
                    id="notes"
                    rows={2}
                    value={form.notes}
                    onChange={handleChange}
                    placeholder="Contoh: Ukuran L, warna navy cadangan hitam, kirim jam kerja, dll."
                    className="block w-full px-4 py-3 bg-white border border-beige-dark/80 focus:border-gold focus:ring-1 focus:ring-gold text-sm font-sans text-navy-dark placeholder-navy-dark/30 outline-none transition-all resize-none"
                  />
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 px-6 bg-[#25D366] hover:bg-[#20ba56] text-white font-sans font-bold text-sm uppercase tracking-wider shadow-lg hover:shadow-emerald-500/20 transition-all duration-300 flex items-center justify-center space-x-3 cursor-pointer disabled:opacity-50"
                >
                  <Send className="w-4 h-4" />
                  <span>Kirim Pesanan via WhatsApp</span>
                </button>
              </form>
            </div>

            {/* Right: Order Summary Sidebar */}
            <div className="lg:col-span-5 bg-beige-light border border-beige-dark p-6 sm:p-8">
              <h3 className="font-serif text-lg font-bold text-navy-dark mb-6 tracking-tight border-b border-beige-dark/50 pb-4">
                Ringkasan Belanja
              </h3>

              {/* Items List */}
              <div className="space-y-4 max-h-72 overflow-y-auto mb-6 pr-1">
                {cart.map((item) => (
                  <div key={item.product.id} className="flex items-start space-x-3 text-xs">
                    <div className="w-12 aspect-[3/4] flex-shrink-0 bg-beige-dark/20 overflow-hidden border border-beige-dark/30">
                      <img
                        src={item.product.image}
                        alt={item.product.name}
                        className="w-full h-full object-cover object-top"
                        referrerPolicy="no-referrer"
                      />
                    </div>
                    <div className="flex-grow">
                      <h4 className="font-serif font-bold text-navy-dark line-clamp-1">
                        {item.product.name}
                      </h4>
                      <p className="font-sans text-navy-dark/50 mt-0.5">
                        {item.quantity} x {formatRupiah(item.product.price)}
                      </p>
                    </div>
                    <span className="font-sans font-semibold text-navy-dark/80 flex-shrink-0">
                      {formatRupiah(item.product.price * item.quantity)}
                    </span>
                  </div>
                ))}
              </div>

              {/* Summary Calculations */}
              <div className="border-t border-beige-dark/60 pt-4 space-y-3">
                <div className="flex justify-between text-xs text-navy-dark/60 font-sans">
                  <span>Subtotal Produk</span>
                  <span>{formatRupiah(totalPayment)}</span>
                </div>
                <div className="flex justify-between text-xs text-navy-dark/60 font-sans">
                  <span>Ongkos Kirim</span>
                  <span className="italic text-gold font-medium">Dihitung otomatis via admin</span>
                </div>
                
                {/* Bold Total */}
                <div className="flex justify-between items-center border-t border-beige-dark/60 pt-4 font-sans">
                  <span className="text-xs font-semibold text-navy-dark uppercase tracking-wider">Total Estimasi</span>
                  <span className="text-lg font-bold text-gold">{formatRupiah(totalPayment)}</span>
                </div>
              </div>

              {/* Mini trust points */}
              <div className="mt-8 bg-white/50 border border-beige-dark/40 p-4 space-y-2.5">
                <div className="flex items-center space-x-2 text-[11px] text-navy-dark/70 font-sans">
                  <span className="text-gold">✔</span>
                  <span>Stok Premium Terbatas</span>
                </div>
                <div className="flex items-center space-x-2 text-[11px] text-navy-dark/70 font-sans">
                  <span className="text-gold">✔</span>
                  <span>Admin Fast Response 08.00 - 21.00</span>
                </div>
              </div>
            </div>

          </div>
        )}

      </div>
    </section>
  );
}
