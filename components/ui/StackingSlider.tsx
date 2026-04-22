'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { ArrowLeft, ArrowRight } from 'lucide-react';

interface SliderItem {
  id: string;
  title: string;
  image: string;
}

interface StackingSliderProps {
  images?: SliderItem[];
}

const DEFAULT_ITEMS: SliderItem[] = [
  { id: '1', title: 'Luxury Transformation', image: '/images/services/villa_renovation.png' },
  { id: '2', title: 'Modern Aesthetic', image: '/images/services/apartment_renovation.png' },
  { id: '3', title: 'Bespoke Design', image: '/images/services/kitchen_renovation.png' },
  { id: '4', title: 'Premium Finish', image: '/images/services/bathroom_renovation.png' },
  { id: '5', title: 'Elite Spaces', image: '/images/services/office_renovation.png' },
];

export const StackingSlider: React.FC<StackingSliderProps> = ({ images = DEFAULT_ITEMS }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const prev = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  // We show 3 cards in the stack to maintain depth without clutter
  const visibleCards = [
    images[currentIndex % images.length],
    images[(currentIndex + 1) % images.length],
    images[(currentIndex + 2) % images.length],
  ];

  return (
    <div className="relative w-full py-10 md:py-20 select-none flex flex-col items-center overflow-visible">
      <div className="relative h-[250px] sm:h-[350px] md:h-[450px] w-full max-w-[700px] flex items-center justify-center">
        {/* We use mode="popLayout" to ensure exiting cards don't jump position */}
        <AnimatePresence mode="popLayout" initial={false}>
          {visibleCards.map((item, index) => {
            const isTop = index === 0;
            
            return (
              <motion.div
                key={item.id}
                className="absolute w-[88vw] sm:w-[500px] md:w-[650px] aspect-[4/3] rounded-2xl md:rounded-3xl overflow-hidden shadow-2xl bg-white border border-white/20 cursor-pointer"
                style={{
                  zIndex: 3 - index,
                  transformOrigin: 'bottom left',
                }}
                initial={{ opacity: 0, scale: 0.9, x: 20, rotate: 0 }}
                animate={{
                  opacity: 1,
                  scale: 1 - index * 0.05,
                  x: index * 12,
                  y: index * 12,
                  rotate: 0, // Ensure cards in the stack are ALWAYS straight
                  filter: isTop ? 'blur(0px)' : 'blur(1px)',
                }}
                exit={{
                  x: -800, // Force a clean exit to the left
                  opacity: 0,
                  rotate: -15, // Deliberate tilt on exit
                  scale: 0.9,
                  transition: { 
                    duration: 0.5, 
                    ease: [0.32, 0.72, 0, 1] 
                  }
                }}
                onClick={isTop ? next : undefined}
              >
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 90vw, 650px"
                  priority={isTop}
                />
                
                {/* Visual indicator of depth */}
                {index > 0 && (
                  <div className="absolute inset-0 bg-black/10 transition-opacity duration-500" />
                )}

                {/* Info Overlay for the active card */}
                {isTop && (
                  <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="absolute bottom-0 left-0 right-0 p-5 md:p-10 bg-gradient-to-t from-black/90 via-black/40 to-transparent text-white"
                  >
                    <p className="text-[10px] md:text-xs font-bold tracking-[0.4em] uppercase opacity-60 mb-2">
                      Tap to change project
                    </p>
                    <h3 className="text-lg md:text-2xl font-light tracking-tight leading-tight">
                      {item.title}
                    </h3>
                  </motion.div>
                )}
              </motion.div>
            );
          })}
        </AnimatePresence>
      </div>

      {/* Navigation Controls */}
      <div className="flex flex-col items-center gap-8 mt-28 md:mt-24 w-full px-6">
        <div className="flex items-center gap-6">
          <button
            onClick={prev}
            className="w-14 h-14 rounded-full border border-gray-200 flex items-center justify-center hover:bg-black hover:text-white transition-all active:scale-90"
            aria-label="Previous project"
          >
            <ArrowLeft size={22} strokeWidth={1.5} />
          </button>
          
          <div className="flex items-center gap-3">
            <span className="text-lg font-bold text-gray-900">0{currentIndex + 1}</span>
            <div className="w-10 h-[1px] bg-gray-200" />
            <span className="text-lg font-bold text-gray-300">0{images.length}</span>
          </div>

          <button
            onClick={next}
            className="w-14 h-14 rounded-full bg-black text-white flex items-center justify-center hover:bg-[#BBA899] transition-all shadow-lg active:scale-90"
            aria-label="Next project"
          >
            <ArrowRight size={22} strokeWidth={1.5} />
          </button>
        </div>

        <p className="text-[11px] font-bold tracking-[0.3em] text-[#BBA899] uppercase text-center max-w-[200px] leading-relaxed">
          Bespoke Renovation Portfolio
        </p>
      </div>
    </div>
  );
};
