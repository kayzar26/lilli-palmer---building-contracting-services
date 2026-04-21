"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { pushToDataLayer } from '@/lib/gtm';
import { Phone } from 'lucide-react';

const CallButton: React.FC = () => {
  const phoneNumber = "+971507098676";

  return (
    <motion.a
      href={`tel:${phoneNumber}`}
      onClick={() => pushToDataLayer('phone_click', { location: 'floating_button' })}
      className="fixed bottom-24 right-6 md:right-12 lg:right-16 z-[9999] flex items-center justify-center w-14 h-14 bg-[#191919] text-white rounded-full shadow-lg hover:shadow-xl hover:bg-[#BBA899] transition-all group"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ 
        type: "spring",
        stiffness: 260,
        damping: 20,
        delay: 1.1 
      }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      aria-label="Call us"
    >
      <Phone size={24} className="fill-current" />
    </motion.a>
  );
};

export default CallButton;
