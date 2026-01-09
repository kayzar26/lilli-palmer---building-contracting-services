"use client";

import React, { useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import CircularText from '@/components/CircularText';
import { SERVICES } from '@/constants';
import { ArrowLeft, ArrowRight } from 'lucide-react';

const luxuryEasing = [0.16, 1, 0.3, 1] as const;

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.3,
    },
  },
};

const wordVariants = {
  hidden: { opacity: 0, y: 60 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 1.2, ease: luxuryEasing },
  },
};

const fadeUpVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: luxuryEasing },
  },
};

const imageRevealVariants = {
  hidden: { scale: 1.15, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: { duration: 1.5, ease: luxuryEasing },
  },
};

const HomeContent: React.FC = () => {
  const heroWords = ["LILLI", "PALMER"];
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = direction === 'left' ? -400 : 400;
      scrollContainerRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-end justify-between pb-24 px-6 overflow-hidden">
        {/* Background Image with Parallax-like effect */}
        <motion.div 
          initial={{ scale: 1.2 }}
          animate={{ scale: 1 }}
          transition={{ duration: 2.5, ease: luxuryEasing }}
          className="absolute inset-0 z-0"
        >
          <Image 
            src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&q=80&w=1920" 
            alt="Hero Background" 
            fill
            className="object-cover brightness-[0.65]"
            priority
          />
          <div className="absolute inset-0 bg-black/20"></div>
        </motion.div>

        <div className="container mx-auto z-10 flex flex-col md:flex-row items-end justify-between gap-10">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1, duration: 1.2, ease: luxuryEasing }}
            className="hidden md:block"
          >
            <Link href="/contact" className="block cursor-pointer">
              <CircularText />
            </Link>
          </motion.div>
          
          <div className="text-right">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="flex flex-col items-end"
            >
              {heroWords.map((word, i) => (
                <div key={i} className="overflow-hidden">
                  <motion.span
                    variants={wordVariants}
                    className="block text-7xl md:text-[140px] font-light text-white leading-[0.85] tracking-tighter drop-shadow-2xl"
                  >
                    {word}
                  </motion.span>
                </div>
              ))}
            </motion.div>
            <motion.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 1.2, duration: 1.5 }}
              className="text-white/70 text-h1-custom mt-6 tracking-[0.6em] uppercase"
            >
              Property Excellence
            </motion.p>
          </div>
        </div>
      </section>

      {/* Slogan Section */}
      <section className="bg-[#111111] py-40 px-6">
        <div className="container mx-auto">
          <motion.div 
            variants={fadeUpVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-10% 0px -10% 0px" }}
            className="md:w-3/4 ml-auto text-right"
          >
            <p className="text-[11px] font-bold tracking-[0.4em] text-[#BBA899] mb-8 uppercase">Integrity • Durability • Vision</p>
            <h2 className="text-white text-4xl md:text-6xl font-light leading-tight uppercase tracking-tight">
              PRECISION IN EVERY DETAIL, <br className="hidden md:block" />
              ENSURING YOUR ARCHITECTURAL ASSETS <br className="hidden md:block" />
              REMAIN TIMELESS.
            </h2>
          </motion.div>
        </div>
      </section>

      {/* About Brief Section */}
      <section className="bg-[#EBEBEB] py-40 px-6 relative">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-32 items-center">
          <motion.div 
            variants={imageRevealVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="relative h-[800px] w-full overflow-hidden rounded-[2px] shadow-2xl group"
          >
            <Image 
              src="https://images.unsplash.com/photo-1517581177682-a085bb7ffb15?auto=format&fit=crop&q=80&w=1000" 
              alt="Luxury Construction" 
              fill
              className="object-cover grayscale brightness-90 group-hover:brightness-100 group-hover:grayscale-0 transition-all duration-1000 ease-luxury"
            />
          </motion.div>
          <motion.div 
            variants={fadeUpVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="space-y-12"
          >
            <p className="text-h1-custom text-[#BBA899] uppercase tracking-[0.3em]">The Philosophy</p>
            <h3 className="text-5xl md:text-7xl text-gray-800 font-light leading-[1.1] tracking-tighter uppercase">
              <b>CRAFTING HOMES,<br />PRESERVING<br />LEGACIES.</b>
            </h3>
            <p className="text-xl text-gray-500 font-light leading-relaxed max-w-xl">
              Lilli Palmer provides a comprehensive suite of elite building contracting services. 
              From the technical precision of HVAC systems to the broad scope of 
              architectural construction, our work is defined by uncompromised quality 
              and a dedicated approach to property maintenance.
            </p>
            <div className="pt-8">
              <Link href="/about" className="group inline-flex items-center gap-4 text-h1-custom text-black pb-2 border-b-2 border-black hover:text-[#BBA899] hover:border-[#BBA899] transition-all ease-luxury">
                EXPLORE OUR LEGACY
                <motion.span whileHover={{ x: 5 }} transition={{ type: "spring", stiffness: 400 }}>→</motion.span>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Carousel Section (Renamed from Projects) */}
      <section className="bg-white py-40 overflow-hidden">
        <div className="container mx-auto px-6 mb-20">
          <motion.div 
            variants={fadeUpVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex flex-col md:flex-row md:items-end justify-between gap-12"
          >
            <h2 className="text-gray-800 text-4xl md:text-6xl font-light leading-tight uppercase tracking-tighter max-w-3xl">
              INNOVATION AND DURABILITY <br />
              ACROSS EVERY DISCIPLINE.
            </h2>
            <Link href="/services" className="text-h1-custom text-black hover:text-[#BBA899] transition-colors pb-2 border-b-2 border-black uppercase tracking-widest">
              VIEW ALL SERVICES
            </Link>
          </motion.div>
        </div>
        
        {/* Carousel Container */}
        <div 
          ref={scrollContainerRef}
          className="flex gap-10 px-6 overflow-x-auto hide-scrollbar pb-16 snap-x snap-mandatory"
        >
          {SERVICES.map((service, idx) => (
            <motion.div 
              key={service.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.15, duration: 1, ease: luxuryEasing }}
              viewport={{ once: true, margin: "0px 0px -50px 0px" }}
              className="min-w-[350px] md:min-w-[600px] group cursor-pointer snap-center"
            >
              <Link href={`/services/${service.id}`} className="block">
                <div className="relative aspect-[4/5] overflow-hidden mb-8 rounded-[3px] shadow-lg">
                  <Image 
                    src={service.image} 
                    alt={service.title} 
                    fill
                    className="object-cover grayscale brightness-90 transition-transform duration-[1.5s] ease-luxury group-hover:scale-110 group-hover:grayscale-0 group-hover:brightness-100"
                  />
                  <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700 flex items-center justify-center">
                    <span className="text-white text-[11px] font-bold tracking-[0.4em] border border-white/40 px-10 py-4 bg-black/20 backdrop-blur-md uppercase">Explore Service</span>
                  </div>
                </div>
                <div className="flex justify-between items-start px-4">
                  <div className="space-y-2">
                    <h4 className="text-gray-800 text-lg font-light tracking-[0.1em] uppercase">{service.title}</h4>
                    <p className="text-[#BBA899] text-[10px] uppercase tracking-[0.3em] font-bold line-clamp-1">{service.description}</p>
                  </div>
                  <span className="text-gray-300 font-light text-2xl">0{idx + 1}</span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Navigation Buttons */}
        <div className="container mx-auto px-6 flex gap-4 mt-8">
            <button 
              onClick={() => scroll('left')}
              className="w-12 h-12 border border-gray-300 rounded-full flex items-center justify-center hover:bg-[#191919] hover:text-white hover:border-[#191919] transition-all duration-300"
              aria-label="Scroll Left"
            >
              <ArrowLeft size={16} />
            </button>
            <button 
              onClick={() => scroll('right')}
              className="w-12 h-12 border border-gray-300 rounded-full flex items-center justify-center hover:bg-[#191919] hover:text-white hover:border-[#191919] transition-all duration-300"
              aria-label="Scroll Right"
            >
              <ArrowRight size={16} />
            </button>
        </div>
      </section>
    </div>
  );
};

export default HomeContent;
