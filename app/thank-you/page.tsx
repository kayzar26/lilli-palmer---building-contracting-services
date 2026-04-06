'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { CheckCircle, ArrowLeft } from 'lucide-react';

export default function ThankYouPage() {
  const luxuryEasing = [0.16, 1, 0.3, 1] as const;

  return (
    <div className="min-h-screen pt-40 pb-32 bg-[#EBEBEB] flex items-center justify-center">
      <div className="container mx-auto px-6 text-center max-w-2xl">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: luxuryEasing }}
          className="bg-white p-12 md:p-20 rounded-[5px] shadow-[0_20px_50px_rgba(0,0,0,0.05)]"
        >
          <div className="w-20 h-20 rounded-full bg-[#BBA899]/10 flex items-center justify-center mx-auto mb-10 text-[#BBA899]">
            <CheckCircle size={40} strokeWidth={1.5} />
          </div>
          
          <h1 className="text-4xl md:text-6xl font-light tracking-tighter text-gray-800 leading-tight mb-6 uppercase">
            Thank You.
          </h1>
          
          <p className="text-xl text-gray-500 font-light mb-12 leading-relaxed">
            Your enquiry has been received. Our property consultants will review your vision and contact you within 24 business hours.
          </p>
          
          <div className="flex flex-col items-center gap-6">
            <Link 
              href="/"
              className="inline-flex items-center gap-3 bg-[#191919] text-white px-10 py-5 rounded-[5px] hover:bg-[#BBA899] transition-all duration-500 uppercase tracking-[0.3em] font-bold text-[11px] shadow-lg hover:shadow-[#BBA899]/20"
            >
              <ArrowLeft size={16} /> Return Home
            </Link>
          </div>
        </motion.div>
        
        <p className="mt-12 text-[10px] tracking-[0.3em] text-gray-400 uppercase font-bold">
          Lilli Palmer Building Contracting LLC
        </p>
      </div>
    </div>
  );
}
