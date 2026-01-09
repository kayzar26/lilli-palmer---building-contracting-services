"use client";

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { SERVICES } from '@/constants';
import { CheckCircle2, ArrowRight } from 'lucide-react';

const ServicesContent: React.FC = () => {
  const luxuryEasing = [0.16, 1, 0.3, 1] as const;

  return (
    <div className="pt-40 pb-20">
      <div className="container mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: luxuryEasing }}
          className="mb-24"
        >
          <p className="text-h1-custom text-[#BBA899] mb-4 uppercase tracking-[0.3em]">OUR CAPABILITIES</p>
          <h1 className="text-5xl md:text-8xl font-light tracking-tighter text-gray-800">SERVICES</h1>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-y-32 gap-x-12">
          {SERVICES.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 1.2, ease: luxuryEasing, delay: index % 2 === 0 ? 0 : 0.15 }}
            >
              <Link 
                href={`/services/${service.id}`}
                className={`flex flex-col group ${index % 2 === 1 ? 'md:mt-32' : ''}`}
              >
                <div className="relative h-[600px] mb-8 overflow-hidden rounded-[3px] shadow-lg">
                  <Image 
                    src={service.image} 
                    alt={service.title} 
                    fill
                    priority
                    className="object-cover grayscale brightness-90 group-hover:brightness-100 group-hover:grayscale-0 transition-all duration-[1.2s] ease-luxury group-hover:scale-105" 
                  />
                  <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-700 flex items-center justify-center">
                    <span className="text-white text-[11px] font-bold tracking-[0.3em] border border-white/40 px-10 py-4 bg-black/20 backdrop-blur-md uppercase">Explore Service</span>
                  </div>
                </div>
                <div className="flex items-start gap-6">
                  <span className="text-2xl font-light text-gray-300">0{index + 1}</span>
                  <div className="w-full">
                    <div className="flex justify-between items-center mb-6">
                      <h3 className="text-4xl font-light text-gray-800 group-hover:text-[#BBA899] transition-colors uppercase tracking-tight">{service.title}</h3>
                      <ArrowRight className="text-gray-300 group-hover:text-[#BBA899] transform group-hover:translate-x-3 transition-all duration-500" size={28} />
                    </div>
                    <p className="text-gray-500 text-lg mb-8 max-w-md font-light leading-relaxed">
                      {service.description}
                    </p>
                    <ul className="flex flex-wrap gap-x-8 gap-y-3">
                      {service.features.slice(0, 3).map(item => (
                        <li key={item} className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-[#BBA899]">
                          <CheckCircle2 size={12} /> {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServicesContent;
