"use client";

import React, { useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import CircularText from '@/components/CircularText';
import { SERVICES, TESTIMONIALS } from '@/constants';
import { ArrowLeft, ArrowRight, Star } from 'lucide-react';

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
  const scrollTestimonialsContainerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = direction === 'left' ? -400 : 400;
      scrollContainerRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  const scrollTestimonials = (direction: 'left' | 'right') => {
    if (scrollTestimonialsContainerRef.current) {
      const scrollAmount = direction === 'left' ? -400 : 400;
      scrollTestimonialsContainerRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <div className="flex flex-col">
      <h1 className="sr-only">Lilli Palmer Building Contracting</h1>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-end justify-between pb-24 px-6 overflow-hidden">
        {/* Background Image with Parallax-like effect */}
        {/* <motion.div 
          initial={{ scale: 1.2 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1, ease: luxuryEasing }}
          className="absolute inset-0 z-0"
        > */}
        {/* Background Image — no scale animation, plain fade for fastest LCP */}
        <div className="absolute inset-0 z-0 animate-fade-in">
          <Image 
            src="/images/hero-image.avif"
            alt="Lilli Palmer Building Contracting — Dubai" 
            fill
            className="object-cover brightness-[0.65]"
            priority
            sizes="100vw"
            quality={85}
          />
          <div className="absolute inset-0 bg-black/20"></div>
        </div>

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
              transition={{ delay: 1, duration: 1 }}
              className="text-white/70 text-h1-custom mt-6 tracking-[0.6em] uppercase"
            >
              Building Excellence, Maintaining Comfort
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
              src="/images/luxury-construction.webp" 
              alt="Luxury Construction" 
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
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
                    sizes="(max-width: 768px) 350px, 600px"
                    className="object-cover grayscale brightness-90 transition-transform duration-[1.5s] ease-luxury group-hover:scale-110 group-hover:grayscale-0 group-hover:brightness-100"
                  />
                  <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700 flex items-center justify-center">
                    <span className="text-white text-[11px] font-bold tracking-[0.4em] border border-white/40 px-10 py-4 bg-black/20 backdrop-blur-md uppercase">Explore Service</span>
                  </div>
                </div>
                <div className="flex justify-between items-start px-4">
                  <div className="space-y-2">
                    <h3 className="text-gray-800 text-lg font-light tracking-[0.1em] uppercase">{service.title}</h3>
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

      {/* Testimonials Section */}
      <section className="bg-[#EBEBEB] py-40 overflow-hidden relative">
        <div className="container mx-auto px-6 mb-20">
          <motion.div 
            variants={fadeUpVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex flex-col md:flex-row md:items-end justify-between gap-12"
          >
            <h2 className="text-gray-800 text-4xl md:text-6xl font-light leading-tight uppercase tracking-tighter max-w-3xl">
              TRUSTED BY<br /><span className="text-[#BBA899]">THE BEST.</span>
            </h2>
            <div className="hidden md:flex gap-4">
              <button 
                onClick={() => scrollTestimonials('left')}
                className="w-12 h-12 border border-gray-400 rounded-full flex items-center justify-center hover:bg-[#191919] hover:text-white hover:border-[#191919] transition-all duration-300"
                aria-label="Scroll Left"
              >
                <ArrowLeft size={16} />
              </button>
              <button 
                onClick={() => scrollTestimonials('right')}
                className="w-12 h-12 border border-gray-400 rounded-full flex items-center justify-center hover:bg-[#191919] hover:text-white hover:border-[#191919] transition-all duration-300"
                aria-label="Scroll Right"
              >
                <ArrowRight size={16} />
              </button>
            </div>
          </motion.div>
        </div>
        
        {/* Testimonials Carousel Container */}
        <div 
          ref={scrollTestimonialsContainerRef}
          className="flex gap-8 px-6 overflow-x-auto hide-scrollbar pb-8 snap-x snap-mandatory"
        >
          {TESTIMONIALS.map((testimonial, idx) => (
            <motion.div 
              key={testimonial.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: idx * 0.1, duration: 0.8, ease: luxuryEasing }}
              viewport={{ once: true, margin: "0px 0px -50px 0px" }}
              className="min-w-[320px] md:min-w-[450px] bg-white p-10 md:p-12 shadow-[0_15px_40px_rgba(0,0,0,0.04)] snap-center flex flex-col justify-between rounded-[2px]"
            >
              <div>
                <div className="flex text-[#BBA899] mb-8 gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={16} fill="currentColor" />
                  ))}
                </div>
                <p className="text-xl text-gray-700 font-light leading-relaxed mb-10 italic">"{testimonial.text}"</p>
              </div>
              <div>
                <h3 className="text-gray-900 text-lg font-bold tracking-tight uppercase">{testimonial.name}</h3>
                <div className="flex flex-col md:flex-row md:items-center gap-1 md:gap-3 mt-2 text-[10px] uppercase font-bold tracking-[0.2em] text-gray-400">
                  <span>{testimonial.stats}</span>
                  <span className="hidden md:inline">•</span>
                  <span>{testimonial.time}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Mobile Navigation Buttons */}
        <div className="container mx-auto px-6 flex md:hidden justify-center gap-4 mt-12">
            <button 
              onClick={() => scrollTestimonials('left')}
              className="w-12 h-12 border border-gray-400 rounded-full flex items-center justify-center hover:bg-[#191919] hover:text-white transition-all duration-300"
              aria-label="Scroll Left"
            >
              <ArrowLeft size={16} />
            </button>
            <button 
              onClick={() => scrollTestimonials('right')}
              className="w-12 h-12 border border-gray-400 rounded-full flex items-center justify-center hover:bg-[#191919] hover:text-white transition-all duration-300"
              aria-label="Scroll Right"
            >
              <ArrowRight size={16} />
            </button>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="bg-white pb-24 px-6">
        <div className="container mx-auto">
          <motion.div
            variants={fadeUpVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex flex-col items-center text-center max-w-4xl mx-auto space-y-8"
          >
            <div className="h-[2px] w-24 bg-[#BBA899]"></div>
            <h2 className="text-gray-800 text-2xl md:text-3xl font-light leading-relaxed tracking-wide">
              <span className="text-[#BBA899] font-normal uppercase text-sm tracking-[0.3em] block mb-4">Why Choose Us</span>
              "Unlike standard maintenance apps, we are fully licensed building contractors. <br className="hidden md:block" />
              <span className="font-normal">We don't just patch it; we build it.</span>"
            </h2>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default HomeContent;
