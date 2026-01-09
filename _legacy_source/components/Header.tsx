
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1],
        when: "afterChildren"
      }
    },
    open: {
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1],
        when: "beforeChildren"
      }
    }
  };

  const linkVariants = {
    closed: { y: 50, opacity: 0 },
    open: (i: number) => ({
      y: 0,
      opacity: 1,
      transition: {
        delay: 0.3 + i * 0.1,
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1]
      }
    })
  };

  return (
    <header 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/95 backdrop-blur-sm py-4 shadow-sm' : 'bg-transparent py-8'
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center relative z-50">
        <Link to="/" className="flex flex-col group">
          <span className={`text-xl md:text-2xl font-light tracking-[0.2em] transition-colors ${isMenuOpen ? 'text-black' : (isScrolled ? 'text-black' : 'text-white')} group-hover:text-[#BBA899]`}>LILLI PALMER</span>
          <span className={`text-[9px] tracking-[0.4em] uppercase -mt-1 transition-colors ${isMenuOpen ? 'text-gray-400' : (isScrolled ? 'text-gray-400' : 'text-white/60')}`}>Building Contracting Services</span>
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden md:flex gap-10">
          {navLinks.map((link) => (
            <Link 
              key={link.path} 
              to={link.path}
              className={`text-[11px] font-bold tracking-[0.2em] transition-colors hover:text-[#BBA899] ${
                location.pathname === link.path ? 'text-[#BBA899]' : (isScrolled ? 'text-gray-500' : 'text-white/80')
              }`}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* High-End Animated Hamburger Toggle */}
        <button 
          className="md:hidden flex flex-col gap-1.5 p-2 justify-center items-center group overflow-hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle Menu"
        >
          <motion.span 
            animate={isMenuOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className={`w-6 h-[1.5px] block ${isMenuOpen || isScrolled ? 'bg-black' : 'bg-white'}`}
          ></motion.span>
          <motion.span 
            animate={isMenuOpen ? { x: 40, opacity: 0 } : { x: 0, opacity: 1 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className={`w-6 h-[1.5px] block ${isScrolled ? 'bg-black' : 'bg-white'}`}
          ></motion.span>
          <motion.span 
            animate={isMenuOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className={`w-6 h-[1.5px] block ${isMenuOpen || isScrolled ? 'bg-black' : 'bg-white'}`}
          ></motion.span>
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial="closed"
            animate="open"
            exit="closed"
            variants={menuVariants}
            className="fixed inset-0 bg-[#EBEBEB] z-40 flex flex-col items-center justify-center gap-8"
          >
            <div className="flex flex-col items-center gap-6">
              {navLinks.map((link, i) => (
                <motion.div key={link.path} custom={i} variants={linkVariants}>
                  <Link 
                    to={link.path}
                    onClick={() => setIsMenuOpen(false)}
                    className={`text-5xl font-light tracking-tighter hover:text-[#BBA899] transition-colors uppercase ${location.pathname === link.path ? 'text-[#BBA899]' : 'text-gray-800'}`}
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
              <p className="text-[10px] tracking-[0.4em] text-gray-400 uppercase font-bold">Dubai • Sydney • London</p>
              <a href="tel:+971507098676" className="block text-sm tracking-widest text-gray-600">+971 50 709 8676</a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
