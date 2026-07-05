import React, { useState, useEffect } from 'react';
import { ShoppingBag, Menu, X } from 'lucide-react';
import { CartItem } from '../types';

interface NavbarProps {
  cart: CartItem[];
  onCartClick: () => void;
  onNavigate: (sectionId: string) => void;
  activeSection: string;
}

export default function Navbar({ cart, onCartClick, onNavigate, activeSection }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

  const navLinks = [
    { label: 'Home', id: 'home' },
    { label: 'Koleksi', id: 'koleksi' },
    { label: 'Tentang Kami', id: 'tentang' },
    { label: 'Cara Pesan', id: 'cara-pesan' },
  ];

  const handleLinkClick = (id: string) => {
    setIsOpen(false);
    onNavigate(id);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-beige-light/95 backdrop-blur-md border-b border-beige-dark shadow-sm py-4'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div 
            className="flex flex-col cursor-pointer group"
            onClick={() => handleLinkClick('home')}
          >
            <span className="font-serif text-2xl sm:text-3xl font-bold tracking-widest text-navy-dark group-hover:text-gold transition-colors duration-300">
              AMAZE
            </span>
            <span className="text-[9px] font-sans tracking-[0.25em] text-gold uppercase font-medium -mt-1 ml-0.5">
              INDONESIA
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8 items-center">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleLinkClick(link.id)}
                className={`font-sans text-sm tracking-wider uppercase transition-all duration-300 hover:text-gold relative py-1 cursor-pointer ${
                  activeSection === link.id
                    ? 'text-gold font-medium'
                    : 'text-navy-dark/80'
                }`}
              >
                {link.label}
                {activeSection === link.id && (
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-gold rounded-full" />
                )}
              </button>
            ))}
          </div>

          {/* Right Action Icons (Cart & Mobile Toggle) */}
          <div className="flex items-center space-x-4">
            {/* Cart Button */}
            <button
              onClick={onCartClick}
              className="relative p-2.5 rounded-full hover:bg-beige-dark/50 text-navy-dark hover:text-gold transition-all duration-300 cursor-pointer flex items-center justify-center border border-transparent hover:border-beige-dark"
              aria-label="Keranjang Belanja"
            >
              <ShoppingBag className="w-5 h-5" />
              {totalItems > 0 && (
                <span className="absolute -top-1 -right-1 bg-gold text-white text-[11px] font-sans font-bold w-5 h-5 flex items-center justify-center rounded-full border border-beige-light shadow-md animate-pulse">
                  {totalItems}
                </span>
              )}
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 rounded-md text-navy-dark hover:text-gold transition-colors cursor-pointer"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-beige-light border-b border-beige-dark shadow-lg animate-fadeIn">
          <div className="px-4 pt-2 pb-6 space-y-3 sm:px-3 flex flex-col">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleLinkClick(link.id)}
                className={`w-full text-left py-3 px-4 rounded-lg font-sans text-sm tracking-wider uppercase transition-colors ${
                  activeSection === link.id
                    ? 'bg-beige-dark text-gold font-medium border-l-4 border-gold'
                    : 'text-navy-dark hover:bg-beige-dark/40 hover:text-gold'
                }`}
              >
                {link.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
