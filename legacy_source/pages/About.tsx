
import React from 'react';
import { motion } from 'framer-motion';

const About: React.FC = () => {
  return (
    <div className="pt-32 pb-20">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center mb-32">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-h1-custom text-[#BBA899] mb-6 uppercase tracking-[0.3em]">OUR STORY</p>
            <h1 className="text-5xl md:text-8xl font-light tracking-tighter text-gray-800 leading-[1] mb-12">
              BUILDING<br />CONTRACTING<br />EXCELLENCE.
            </h1>
            <div className="space-y-8 text-gray-500 text-xl font-light leading-relaxed">
              <p>
                Founded on the principles of architectural integrity and uncompromising quality, Lilli Palmer is Dubai's premier destination for high-end building contracting and maintenance.
              </p>
              <p>
                We serve a discerning clientele who understand that property is more than an asset—it's a sanctuary. Our team of master tradespeople and project managers treat every project with a level of care usually reserved for heritage restorations.
              </p>
            </div>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="relative aspect-[3/4]"
          >
            <img 
              src="https://images.unsplash.com/photo-1487958449943-2429e8be8625?auto=format&fit=crop&q=80&w=800" 
              alt="Architectural Excellence" 
              className="w-full h-full object-cover rounded-sm grayscale" 
            />
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="absolute -bottom-10 -left-10 bg-[#BBA899] text-white p-12 hidden lg:block"
            >
              <span className="text-6xl font-light">12</span>
              <p className="text-[10px] tracking-[0.4em] mt-2 uppercase">Years of Perfection</p>
            </motion.div>
          </motion.div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 py-24 border-t border-gray-300">
          {[
            { label: 'PROPERTIES MAINTAINED', value: '850+' },
            { label: 'SPECIALIST TRADES', value: '24' },
            { label: 'ARCHITECT PARTNERS', value: '15' },
            { label: 'CLIENT RETENTION', value: '98%' },
          ].map((stat, idx) => (
            <motion.div 
              key={stat.label} 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              className="text-center md:text-left"
            >
              <p className="text-5xl md:text-6xl font-light text-gray-800 mb-4">{stat.value}</p>
              <p className="text-[10px] tracking-[0.3em] text-gray-400 uppercase font-bold">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
