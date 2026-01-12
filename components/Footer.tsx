"use client";

import React from 'react';
import Link from 'next/link';
import { Instagram, Facebook, Linkedin, ArrowUp } from 'lucide-react';

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#E2E2E2] text-[#69727D] pt-24 pb-10">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-20">
          <div>
            <h2 className="text-3xl font-light tracking-[0.2em] text-black mb-10">LILLI PALMER</h2>
            <div className="space-y-2 text-[13px] uppercase tracking-widest leading-relaxed">
              <p>DUBAI BRANCH</p>
              <a href="https://maps.app.goo.gl/yKDKHBYmYQymwQXb7" className="hover:text-[#BBA899] transition-colors tracking-widest" target="_blank" rel="noopener noreferrer"> 
              <p>702, Garhoud Views Building</p>
              <p>Al Garhoud, Dubai, UAE</p>
              </a>
              <br />
              <p><a href="tel:+971507098676" className="hover:text-[#BBA899] transition-colors tracking-widest">+971 50 709 8676</a></p>
              <p><a href="mailto:contact@lillipalmer.com" className="hover:text-[#BBA899] transition-colors tracking-widest">contact@lillipalmer.com</a></p>
            </div>
            
            <div className="flex gap-4 mt-8">
              <a href="https://www.instagram.com/lillipalmer.ae/#" target="_blank" rel="noopener noreferrer" className="p-2 hover:bg-white/50 rounded-full transition-colors"><Instagram size={18} /></a>
              <a href="https://www.facebook.com/people/Lilli-Palmer-Building-Contracting/61584535720704/" target="_blank" rel="noopener noreferrer" className="p-2 hover:bg-white/50 rounded-full transition-colors"><Facebook size={18} /></a>
              <a href="https://www.linkedin.com/company/lilli-palmer/" target="_blank" rel="noopener noreferrer" className="p-2 hover:bg-white/50 rounded-full transition-colors"><Linkedin size={18} /></a>
              <a href="https://www.tiktok.com/@lillipalmer.ae" target="_blank" rel="noopener noreferrer" className="p-2 hover:bg-white/50 rounded-full transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
                </svg>
              </a>
            </div>
          </div>

          <div className="flex flex-col md:items-end justify-between">
            <nav className="flex flex-col md:items-end gap-4 text-4xl md:text-6xl font-light">
              <Link href="/" className="hover:text-[#BBA899] transition-colors">HOME</Link>
              <Link href="/services" className="hover:text-[#BBA899] transition-colors">SERVICES</Link>
              <Link href="/about" className="hover:text-[#BBA899] transition-colors">ABOUT</Link>
              <Link href="/contact" className="hover:text-[#BBA899] transition-colors">CONTACT</Link>
            </nav>
            
            <button 
              onClick={scrollToTop}
              className="mt-10 self-start md:self-end p-4 border border-gray-400 rounded-full hover:bg-white hover:border-white transition-all"
            >
              <ArrowUp size={24} />
            </button>
          </div>
        </div>

        <div className="border-t border-gray-400 pt-10 text-[10px] tracking-widest leading-loose flex flex-col md:flex-row justify-between uppercase">
          <p className="max-w-xl mb-4 md:mb-0">
            ALL IMAGES & INFORMATION SHOWN ON THIS WEBSITE ARE SUBJECT TO COPYRIGHT BY LILLI PALMER & MUST NOT BE USED WITHOUT WRITTEN CONSENT.
          </p>
          <p>
            CURATED BY <a href="https://www.instagram.com/_kayzar_" className="underline font-bold">KAYZAR</a> FOR LILLI PALMER
          </p>
        </div>
      </div>

      <div className="mt-20 overflow-hidden border-y border-gray-300 py-4">
        <div className="marquee-container">
          <div className="marquee-content inline-flex items-center gap-10 text-[12px] font-bold tracking-[0.2em] whitespace-nowrap">
            <span> LILLI PALMER ACKNOWLEDGES THE TRADITIONAL CUSTODIANS OF THE LAND ON WHICH WE LIVE AND WORK </span>
            <span className="text-lg">•</span>
            <span> HVAC • PLUMBING • ELECTRICAL • PAINTING • RENOVATION • CONSTRUCTION </span>
            <span className="text-lg">•</span>
            <span> BUILDING PROPERTY EXCELLENCE SINCE 2023 </span>
            <span className="text-lg">•</span>
            <span> UNITED ARAB EMIRATES </span>
            <span className="text-lg">•</span>
            <span> LILLI PALMER ACKNOWLEDGES THE TRADITIONAL CUSTODIANS OF THE LAND ON WHICH WE LIVE AND WORK </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
