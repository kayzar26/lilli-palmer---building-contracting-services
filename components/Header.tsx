"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import dynamic from 'next/dynamic';

const HamburgerMenu = dynamic(() => import("./HamburgerMenu"), { ssr: false });

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  // Sync scroll state
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Sync state with body attribute (for potential external CSS use)
  useEffect(() => {
    if (isMenuOpen) {
      document.body.setAttribute('data-menu-open', 'true');
    } else {
      document.body.removeAttribute('data-menu-open');
    }
    return () => document.body.removeAttribute('data-menu-open');
  }, [isMenuOpen]);

  // Handle Resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768 && isMenuOpen) {
        setIsMenuOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
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
        duration: 0.3,
        ease: [0.16, 1, 0.3, 1] as const,
        when: "afterChildren"
      }
    },
    open: {
      y: 0,
      transition: {
        duration: 0.4,
        ease: [0.16, 1, 0.3, 1] as const,
        when: "beforeChildren"
      }
    }
  };

  const linkVariants = {
    closed: { opacity: 0, y: 30 },
    open: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.1 + i * 0.05,
        duration: 0.5,
        ease: [0.16, 1, 0.3, 1] as const
      }
    })
  };

  return (
    <header className="fixed top-0 left-0 w-full z-[10000]">
      {/* Background Layer */}
      <div 
        className={`absolute inset-0 transition-opacity duration-300 ${
          isScrolled || isMenuOpen ? 'bg-white/95 backdrop-blur-md shadow-sm opacity-100' : 'bg-transparent opacity-0 pointer-events-none'
        }`}
      />

      {/* Main Container */}
      <div className={`max-w-7xl w-full mx-auto px-6 flex justify-between items-center relative z-20 transition-all duration-300 ${isScrolled ? 'py-4' : 'py-10 md:py-16'} min-h-[110px]`}>
        
        {/* LOGO - Visually hidden when menu is open via definitive inline style to bypass CSS animation overrides */}
        <div 
          className="header-logo"
          style={{
            opacity: isMenuOpen ? 0 : 1,
            visibility: isMenuOpen ? 'hidden' : 'visible',
            pointerEvents: isMenuOpen ? 'none' : 'auto',
            transition: 'opacity 300ms ease, visibility 300ms ease'
          }}
        >
          <Link href="/" className="flex flex-col group animate-reveal" prefetch={false}>
            <span className={`text-xl md:text-2xl font-light tracking-[0.2em] transition-colors ${isScrolled ? 'text-black' : 'text-white'} group-hover:text-[#BBA899]`}>LILLI PALMER</span>
            <span className={`text-[9px] tracking-[0.4em] uppercase -mt-1 transition-colors ${isScrolled ? 'text-gray-400' : 'text-white/60'}`}>Building Contracting LLC</span>
          </Link>
        </div>

        {/* Navigation */}
        <nav className="hidden md:flex gap-10">
          {navLinks.map((link) => (
            <Link 
              key={link.path} 
              href={link.path}
              prefetch={false}
              className={`text-[11px] font-bold tracking-[0.2em] transition-colors hover:text-[#BBA899] ${
                pathname === link.path ? 'text-[#BBA899]' : (isScrolled ? 'text-gray-500' : 'text-white/80')
              }`}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Hamburger */}
        <div className="md:hidden relative z-50">
          <HamburgerMenu 
            isOpen={isMenuOpen} 
            onToggle={() => setIsMenuOpen(!isMenuOpen)} 
            color={isMenuOpen ? "#000000" : (isScrolled ? "#000000" : "#FFFFFF")}
            size={34}
          />
        </div>
      </div>

      {/* OVERLAY */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial="closed"
            animate="open"
            exit="closed"
            variants={menuVariants}
            className="fixed inset-0 bg-[#EBEBEB] z-[10] flex flex-col items-center justify-between pt-10 pb-20"
          >
            <div className="h-10 md:hidden" />

            <div className="flex flex-col items-center gap-6 md:gap-14 w-full">
              {navLinks.map((link, i) => (
                <motion.div key={link.path} custom={i} variants={linkVariants} className="w-full text-center">
                  <Link 
                    href={link.path}
                    prefetch={false}
                    onClick={() => setIsMenuOpen(false)}
                    className={`text-5xl md:text-8xl font-light tracking-tighter hover:text-[#BBA899] transition-colors uppercase ${pathname === link.path ? 'text-[#BBA899]' : 'text-gray-800'}`}
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
            </div>
            
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-center space-y-2 px-6"
            >
              <p className="text-[10px] tracking-[0.4em] text-gray-400 uppercase font-bold">United Arab Emirates</p>
              <a href="tel:+971507098676" className="block text-base tracking-widest text-gray-600 hover:text-black transition-colors">+971 50 709 8676</a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </header>
  );
};

export default Header;
