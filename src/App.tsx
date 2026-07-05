import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Koleksi from './components/Koleksi';
import Advantages from './components/Advantages';
import CaraPesan from './components/CaraPesan';
import TestimonialSection from './components/TestimonialSection';
import CheckoutSection from './components/CheckoutSection';
import CartModal from './components/CartModal';
import Footer from './components/Footer';
import { CartItem, Product } from './types';

export default function App() {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  // Handle Scroll Spy to highlight correct Navbar Link
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'koleksi', 'tentang', 'cara-pesan', 'checkout'];
      const scrollPosition = window.scrollY + 150; // offset for top navbar

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Smooth Navigation Handler
  const handleNavigate = (sectionId: string) => {
    const targetElement = document.getElementById(sectionId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  // Cart Functions
  const handleAddToCart = (product: Product) => {
    setCart((prevCart) => {
      const existing = prevCart.find((item) => item.product.id === product.id);
      if (existing) {
        return prevCart.map((item) =>
          item.product.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prevCart, { product, quantity: 1 }];
    });
  };

  const handleUpdateQuantity = (productId: string, quantity: number) => {
    if (quantity <= 0) {
      handleRemoveItem(productId);
      return;
    }
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.product.id === productId ? { ...item, quantity } : item
      )
    );
  };

  const handleRemoveItem = (productId: string) => {
    setCart((prevCart) => prevCart.filter((item) => item.product.id !== productId));
  };

  const handleCheckoutTransition = () => {
    setIsCartOpen(false);
    // Slight delay to allow smooth transition after closing the cart drawer
    setTimeout(() => {
      handleNavigate('checkout');
    }, 200);
  };

  return (
    <div className="min-h-screen bg-beige-light font-sans text-navy-dark select-none selection:bg-gold/35 selection:text-navy-dark">
      {/* Floating Header */}
      <Navbar
        cart={cart}
        onCartClick={() => setIsCartOpen(true)}
        onNavigate={handleNavigate}
        activeSection={activeSection}
      />

      {/* Main Sections */}
      <main>
        {/* Hero Banner Section */}
        <Hero onNavigate={handleNavigate} />

        {/* Brand Showcase & Story (Tentang Kami) */}
        <About />

        {/* 6 Best Sellers Grid (Koleksi Unggulan) */}
        <Koleksi onAddToCart={handleAddToCart} />

        {/* Core Advantages (Mengapa Memilih Amaze) */}
        <Advantages />

        {/* How to Order Guide */}
        <CaraPesan />

        {/* Customer Testimonials */}
        <TestimonialSection />

        {/* Checkout Form & Cart Calculations */}
        <CheckoutSection cart={cart} onNavigate={handleNavigate} />
      </main>

      {/* Slide-out Cart Drawer Overlay */}
      <CartModal
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cart={cart}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
        onCheckout={handleCheckoutTransition}
      />

      {/* Clean Luxury Footer with Official Links */}
      <Footer />
    </div>
  );
}
