"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';

import { ScrollSmoother } from 'gsap/ScrollSmoother';
import HamburgerMenu from './HamburgerMenu';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menu when resizing to desktop to prevent scroll lock persistence
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768 && isMenuOpen) {
        setIsMenuOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [isMenuOpen]);

  // Lock scroll when menu is open using ScrollSmoother
  useEffect(() => {
    const smoother = ScrollSmoother.get();
    if (smoother) {
      smoother.paused(isMenuOpen);
    } else {
        // Fallback for when ScrollSmoother might not be active (e.g. standard scrolling)
        if (isMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
    }
    
    return () => {
        if (smoother) smoother.paused(false);
        document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  const navLinks = [
    { name: 'HOME', path: '/' },
    { name: 'SERVICES', path: '/services' },
    { name: 'ABOUT', path: '/about' },
    { name: 'BLOG', path: '/blog' },
    { name: 'CONTACT', path: '/contact' },
  ];

  const menuVariants = {
    closed: {
      y: "-100%",
      transition: {
        duration: 0.4, // Faster (was 0.8)
        ease: [0.16, 1, 0.3, 1] as const,
        when: "afterChildren"
      }
    },
    open: {
      y: 0,
      transition: {
        duration: 0.4, // Faster (was 0.8)
        ease: [0.16, 1, 0.3, 1] as const,
        when: "beforeChildren"
      }
    }
  };

  const linkVariants = {
    closed: { y: 20, opacity: 0 }, // Reduced y distance for snappier feel
    open: (i: number) => ({
      y: 0,
      opacity: 1,
      transition: {
        delay: 0.1 + i * 0.05, // Much faster stagger (was 0.3 + i * 0.1)
        duration: 0.4, // Faster (was 0.8)
        ease: [0.16, 1, 0.3, 1] as const
      }
    })
  };

  return (
    <header className="fixed top-0 left-0 w-full z-50">
      {/* Background Element - Handles styles that might create a containing block */}
      <div 
        className={`absolute inset-0 transition-all duration-300 ${
          isScrolled ? 'bg-white/95 backdrop-blur-sm shadow-sm' : 'bg-transparent'
        }`}
      />

      {/* Content Container */}
      <div className={`container mx-auto px-6 flex justify-between items-center relative z-20 transition-all duration-300 ${isScrolled ? 'py-4' : 'py-8'}`}>
        <Link href="/" className="flex flex-col group">
          <span className={`text-xl md:text-2xl font-light tracking-[0.2em] transition-colors ${isMenuOpen ? 'text-black' : (isScrolled ? 'text-black' : 'text-white')} group-hover:text-[#BBA899]`}>LILLI PALMER</span>
          <span className={`text-[9px] tracking-[0.4em] uppercase -mt-1 transition-colors ${isMenuOpen ? 'text-gray-400' : (isScrolled ? 'text-gray-400' : 'text-white/60')}`}>Building Contracting LLC</span>
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden md:flex gap-10">
          {navLinks.map((link) => (
            <Link 
              key={link.path} 
              href={link.path}
              className={`text-[11px] font-bold tracking-[0.2em] transition-colors hover:text-[#BBA899] ${
                pathname === link.path ? 'text-[#BBA899]' : (isScrolled ? 'text-gray-500' : 'text-white/80')
              }`}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* High-End Animated Hamburger Toggle */}
        <div className="md:hidden">
          <HamburgerMenu 
            isOpen={isMenuOpen} 
            onToggle={() => setIsMenuOpen(!isMenuOpen)} 
            color={isMenuOpen ? "#000000" : (isScrolled ? "#000000" : "#FFFFFF")}
            size={32}
          />
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial="closed"
            animate="open"
            exit="closed"
            variants={menuVariants}
            className="fixed inset-0 bg-[#EBEBEB] z-10 flex flex-col items-center justify-center gap-8"
          >
            <div className="flex flex-col items-center gap-6">
              {navLinks.map((link, i) => (
                <motion.div key={link.path} custom={i} variants={linkVariants}>
                  <Link 
                    href={link.path}
                    onClick={() => setIsMenuOpen(false)}
                    className={`text-5xl font-light tracking-tighter hover:text-[#BBA899] transition-colors uppercase ${pathname === link.path ? 'text-[#BBA899]' : 'text-gray-800'}`}
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
            </div>
            
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
              className="mt-20 text-center space-y-4"
            >
              <p className="text-[10px] tracking-[0.4em] text-gray-400 uppercase font-bold">United Arab Emirates</p>
              <a href="tel:+971507098676" className="block text-sm tracking-widest text-gray-600">+971 50 709 8676</a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
