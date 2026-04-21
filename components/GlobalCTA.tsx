import React from 'react';
import Link from 'next/link';
import { ArrowRight, Phone, MessageCircle } from 'lucide-react';
import { pushToDataLayer } from '@/lib/gtm';

const GlobalCTA: React.FC = () => {
  const phoneNumber = "+971507098676";
  const whatsappUrl = `https://wa.me/971507098676?text=${encodeURIComponent("Hello, I am interested in your services.")}`;

  return (
    <section className="bg-[#111111] py-32 px-6">
      <div className="container mx-auto text-center max-w-4xl">
        <h2 className="text-4xl md:text-6xl font-light text-white uppercase tracking-tight mb-8">
          Start Your Project Today
        </h2>
        <p className="text-gray-400 text-lg md:text-xl font-light mb-12 max-w-2xl mx-auto">
          Ready to transform your space? Contact our team of experts for a comprehensive consultation and transparent pricing.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
          <a 
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => pushToDataLayer('whatsapp_click', { location: 'global_cta' })}
            className="w-full sm:w-auto bg-[#25D366] text-white px-10 py-5 flex items-center justify-center gap-3 hover:bg-[#1DA851] transition-all uppercase tracking-[0.2em] font-bold text-[11px]"
          >
            <MessageCircle size={18} /> WhatsApp Us
          </a>
          <a 
            href={`tel:${phoneNumber}`}
            onClick={() => pushToDataLayer('phone_click', { location: 'global_cta' })}
            className="w-full sm:w-auto bg-white text-[#111111] px-10 py-5 flex items-center justify-center gap-3 hover:bg-[#EBEBEB] transition-all uppercase tracking-[0.2em] font-bold text-[11px]"
          >
            <Phone size={18} /> Call Now
          </a>
        </div>
      </div>
    </section>
  );
};

export default GlobalCTA;
