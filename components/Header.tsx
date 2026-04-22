"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import dynamic from 'next/dynamic';
import { ChevronDown, ArrowRight, ChevronRight } from 'lucide-react';
import { SERVICES } from '@/constants';

const HamburgerMenu = dynamic(() => import("./HamburgerMenu"), { ssr: false });

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);
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

  // Sync state with body attribute
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

  // Group services for the mega menu
  const engineeringServices = SERVICES.filter(s => ['hvac', 'electrical', 'plumbing', 'painting', 'mep-contracting', 'annual-maintenance-contract'].includes(s.id));
  const projectServices = SERVICES.filter(s => ['renovation', 'office-renovation', 'construction'].includes(s.id));

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

  const dropdownVariants = {
    hidden: { opacity: 0, y: 10, visibility: 'hidden' as const },
    visible: { 
      opacity: 1, 
      y: 0, 
      visibility: 'visible' as const,
      transition: { duration: 0.3, ease: [0.16, 1, 0.3, 1] }
    }
  };

  return (
    <header className="fixed top-0 left-0 w-full z-[10000]">
      {/* Background Layer */}
      <div 
        className={`absolute inset-0 transition-opacity duration-300 bg-white/95 backdrop-blur-md shadow-sm opacity-100`}
      />

      {/* Main Container */}
      <div className={`max-w-7xl w-full mx-auto px-6 flex justify-between items-center relative z-20 transition-all duration-300 ${isScrolled ? 'py-4' : 'py-10 md:py-12'} min-h-[110px]`}>
        
        {/* LOGO */}
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
            <span className={`text-xl md:text-2xl font-light tracking-[0.2em] transition-colors text-black group-hover:text-[#BBA899]`}>LILLI PALMER</span>
            <span className={`text-[9px] tracking-[0.4em] uppercase -mt-1 transition-colors text-gray-400`}>Building Contracting LLC</span>
          </Link>
        </div>

        {/* Navigation */}
        <nav className="hidden md:flex gap-10">
          {navLinks.map((link) => (
            <div 
              key={link.path}
              className="relative"
              onMouseEnter={() => link.name === 'SERVICES' && setIsDropdownOpen(true)}
              onMouseLeave={() => link.name === 'SERVICES' && setIsDropdownOpen(false)}
            >
              <Link 
                href={link.path}
                prefetch={false}
                className={`text-[11px] font-bold tracking-[0.2em] transition-colors hover:text-[#BBA899] flex items-center gap-1 ${
                  pathname === link.path || (link.name === 'SERVICES' && pathname.startsWith('/services')) ? 'text-[#BBA899]' : 'text-gray-500'
                }`}
              >
                {link.name}
                {link.name === 'SERVICES' && (
                  <ChevronDown size={12} className={`transition-transform duration-300 ${isDropdownOpen ? 'rotate-180' : ''}`} />
                )}
              </Link>
            </div>
          ))}
        </nav>



        {/* Hamburger */}
        <div className="md:hidden relative z-50">
          <HamburgerMenu 
            isOpen={isMenuOpen} 
            onToggle={() => setIsMenuOpen(!isMenuOpen)} 
            color="#000000"
            size={34}
          />
        </div>
      </div>

      {/* Desktop Dropdown (Mega Menu) - Standalone for perfect centering */}
      <div className="hidden lg:block">
        <AnimatePresence>
          {isDropdownOpen && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="fixed top-[85px] left-1/2 z-[10001] pointer-events-auto"
              onMouseEnter={() => setIsDropdownOpen(true)}
              onMouseLeave={() => setIsDropdownOpen(false)}
            >
              <div 
                className="bg-white shadow-[0_30px_100px_rgba(0,0,0,0.15)] rounded-sm p-10 border border-gray-50 mx-auto"
                style={{ 
                  width: '850px',
                  display: 'grid',
                  gridTemplateColumns: '1fr 1fr 1.1fr',
                  gap: '2.5rem'
                }}
              >
                {/* Column 1: Engineering */}
                <div className="min-w-0" style={{ display: 'flex', flexDirection: 'column' }}>
                  <p className="text-[9px] font-bold tracking-[0.4em] text-[#BBA899] uppercase mb-6 border-b border-gray-100 pb-3 whitespace-nowrap">Maintenance & Engineering</p>
                  <ul className="space-y-4" style={{ listStyle: 'none', padding: 0 }}>
                    {engineeringServices.map((service) => (
                      <li key={service.id}>
                        <Link 
                          href={`/services/${service.id}`}
                          className="text-[13px] text-gray-500 hover:text-black hover:translate-x-1 transition-all flex items-center gap-2 group whitespace-nowrap"
                          onClick={() => setIsDropdownOpen(false)}
                        >
                          <span className="w-1.5 h-[1px] bg-gray-300 group-hover:w-3 group-hover:bg-[#BBA899] transition-all" />
                          {service.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Column 2: Projects */}
                <div className="min-w-0" style={{ display: 'flex', flexDirection: 'column' }}>
                  <p className="text-[9px] font-bold tracking-[0.4em] text-[#BBA899] uppercase mb-6 border-b border-gray-100 pb-3 whitespace-nowrap">Specialized Projects</p>
                  <ul className="space-y-4" style={{ listStyle: 'none', padding: 0 }}>
                    {projectServices.map((service) => (
                      <li key={service.id}>
                        <Link 
                          href={`/services/${service.id}`}
                          className="text-[13px] text-gray-500 hover:text-black hover:translate-x-1 transition-all flex items-center gap-2 group whitespace-nowrap"
                          onClick={() => setIsDropdownOpen(false)}
                        >
                          <span className="w-1.5 h-[1px] bg-gray-300 group-hover:w-3 group-hover:bg-[#BBA899] transition-all" />
                          {service.title}
                        </Link>
                      </li>
                    ))}
                    <li className="pt-4 mt-4 border-t border-gray-50">
                      <Link 
                        href="/services"
                        className="text-[10px] font-bold tracking-[0.2em] text-black flex items-center gap-2 hover:text-[#BBA899] transition-colors uppercase group whitespace-nowrap"
                        onClick={() => setIsDropdownOpen(false)}
                      >
                        Explore All Services 
                        <ArrowRight size={12} className="group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </li>
                  </ul>
                </div>

                {/* Column 3: Experience Excellence */}
                <div className="bg-[#F9F9F9] -m-10 p-10 flex flex-col justify-between border-l border-gray-100 min-w-0">
                  <div>
                    <p className="text-[9px] font-bold tracking-[0.4em] text-[#BBA899] uppercase mb-6 pb-3 whitespace-nowrap">Experience Excellence</p>
                    <p className="text-[13px] text-gray-600 font-light leading-relaxed mb-6">
                      Precision engineering and bespoke transformations for Dubai's most prestigious properties.
                    </p>
                    <div className="space-y-3">
                      <div className="flex items-center gap-2 text-[9px] font-bold tracking-widest text-gray-400 uppercase whitespace-nowrap">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#BBA899]" />
                        Licensed Contractors
                      </div>
                      <div className="flex items-center gap-2 text-[9px] font-bold tracking-widest text-gray-400 uppercase whitespace-nowrap">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#BBA899]" />
                        24/7 Priority Support
                      </div>
                    </div>
                  </div>
                  <Link 
                    href="/contact"
                    className="bg-black text-white text-[9px] font-bold tracking-[0.3em] uppercase py-4 px-6 text-center hover:bg-[#BBA899] transition-all mt-8 whitespace-nowrap"
                    onClick={() => setIsDropdownOpen(false)}
                  >
                    Request a Quote
                  </Link>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* MOBILE OVERLAY */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial="closed"
            animate="open"
            exit="closed"
            variants={menuVariants}
            className="fixed inset-0 bg-[#EBEBEB] z-[10] flex flex-col items-center pt-32 pb-20 overflow-y-auto"
          >
            <div className="flex flex-col items-center gap-8 w-full px-6">
              {navLinks.map((link, i) => (
                <motion.div key={link.path} custom={i} variants={linkVariants} className="w-full text-center">
                  {link.name === 'SERVICES' ? (
                    <div className="flex flex-col items-center">
                      <button 
                        onClick={() => setIsMobileServicesOpen(!isMobileServicesOpen)}
                        className={`text-5xl md:text-8xl font-light tracking-tighter transition-colors uppercase flex items-center gap-4 ${isMobileServicesOpen ? 'text-[#BBA899]' : 'text-gray-800'}`}
                      >
                        {link.name}
                        <ChevronDown size={32} className={`transition-transform duration-500 ${isMobileServicesOpen ? 'rotate-180' : ''}`} />
                      </button>
                      
                      {/* Mobile Accordion */}
                      <AnimatePresence>
                        {isMobileServicesOpen && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            className="overflow-hidden w-full"
                          >
                            <div className="flex flex-col items-center gap-4 py-8 bg-black/5 rounded-xl mt-4">
                              {SERVICES.map((service) => (
                                <Link
                                  key={service.id}
                                  href={`/services/${service.id}`}
                                  onClick={() => {
                                    setIsMenuOpen(false);
                                    setIsMobileServicesOpen(false);
                                  }}
                                  className="text-xl text-gray-600 font-light tracking-tight hover:text-black transition-colors"
                                >
                                  {service.title}
                                </Link>
                              ))}
                              <Link
                                href="/services"
                                onClick={() => {
                                  setIsMenuOpen(false);
                                  setIsMobileServicesOpen(false);
                                }}
                                className="text-sm font-bold tracking-[0.2em] text-[#BBA899] uppercase mt-4 flex items-center gap-2"
                              >
                                View All <ArrowRight size={14} />
                              </Link>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ) : (
                    <Link 
                      href={link.path}
                      prefetch={false}
                      onClick={() => setIsMenuOpen(false)}
                      className={`text-5xl md:text-8xl font-light tracking-tighter hover:text-[#BBA899] transition-colors uppercase ${pathname === link.path ? 'text-[#BBA899]' : 'text-gray-800'}`}
                    >
                      {link.name}
                    </Link>
                  )}
                </motion.div>
              ))}
            </div>
            
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-center space-y-2 mt-20"
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
