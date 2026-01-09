
import React from 'react';
import { ArrowUpRight } from 'lucide-react';

const CircularText: React.FC = () => {
  const text = "GET A FREE QUOTE • ";
  const characters = text.split("");

  return (
    <div className="relative w-[160px] h-[160px] flex items-center justify-center group cursor-pointer">
      {/* Spinning Ring */}
      <div className="absolute inset-0 animate-spin-slow">
        {characters.map((char, i) => {
          const angle = (i / characters.length) * 360;
          return (
            <span
              key={i}
              className="absolute top-1/2 left-1/2 text-[10px] font-bold tracking-widest text-white"
              style={{ 
                transform: `translate(-50%, -50%) rotate(${angle}deg) translateY(-60px)` 
              }}
            >
              {char}
            </span>
          );
        })}
      </div>
      
      {/* Static Icon */}
      <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
        <ArrowUpRight className="text-[#BBA899]" size={30} />
      </div>
    </div>
  );
};

export default CircularText;
