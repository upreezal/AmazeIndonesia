import React from 'react';
import { ShoppingBag, FileText, CheckSquare, Send } from 'lucide-react';

export default function CaraPesan() {
  const steps = [
    {
      num: '01',
      title: 'Pilih Koleksi Terbaik',
      description: 'Pilih busana premium muslim pilihan Anda dari galeri koleksi di atas, lalu klik tombol "Tambah ke Keranjang".',
      icon: <ShoppingBag className="w-5 h-5 text-gold" />
    },
    {
      num: '02',
      title: 'Review Keranjang Belanja',
      description: 'Buka ikon keranjang belanja di navbar kanan atas untuk meninjau kuantitas, ukuran, dan total estimasi belanja.',
      icon: <CheckSquare className="w-5 h-5 text-gold" />
    },
    {
      num: '03',
      title: 'Lengkapi Detail Formulir',
      description: 'Scroll ke bagian Formulir Pemesanan. Tuliskan nama lengkap, nomor WhatsApp aktif, dan alamat lengkap pengiriman.',
      icon: <FileText className="w-5 h-5 text-gold" />
    },
    {
      num: '04',
      title: 'Kirim Pesanan via WhatsApp',
      description: 'Klik tombol hijau WhatsApp. Anda akan diarahkan langsung ke admin CS kami dengan formulir yang telah terisi otomatis.',
      icon: <Send className="w-5 h-5 text-gold" />
    }
  ];

  return (
    <section id="cara-pesan" className="py-24 bg-beige-light/70 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-sans tracking-[0.25em] text-gold uppercase font-semibold">
            SIMPLE & FAST ORDER PROCESS
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-navy-dark mt-2 tracking-tight">
            Bagaimana Cara Memesan?
          </h2>
          <div className="h-1 w-20 bg-gold mx-auto mt-4" />
          <p className="font-sans text-sm text-navy-dark/65 mt-5 font-light">
            Ikuti 4 langkah mudah berikut ini untuk melakukan pemesanan busana modest premium di AMAZE INDONESIA.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, idx) => (
            <div
              key={idx}
              className="bg-white border border-beige-dark/50 p-8 flex flex-col justify-between hover:shadow-lg transition-all duration-300 relative group"
            >
              {/* Number indicator */}
              <span className="absolute top-6 right-6 font-serif text-3xl font-bold text-beige-dark/40 group-hover:text-gold/20 transition-colors duration-300">
                {step.num}
              </span>

              {/* Step Icon */}
              <div className="w-10 h-10 bg-beige-light border border-beige-dark/40 flex items-center justify-center mb-6">
                {step.icon}
              </div>

              {/* Step info */}
              <div>
                <h3 className="font-serif text-base font-bold text-navy-dark tracking-wide mb-3">
                  {step.title}
                </h3>
                <p className="font-sans text-xs text-navy-dark/75 leading-relaxed font-light">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
