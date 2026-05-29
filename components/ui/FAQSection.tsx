'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';

export interface FAQItem {
  question: string;
  answer: string;
}

interface FAQSectionProps {
  faqs: FAQItem[];
  title?: string;
  subtitle?: string;
}

const AccordionItem = ({ question, answer }: { question: string; answer: string }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="bg-white rounded-sm border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden px-6 md:px-8">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-6 flex items-center justify-between text-left focus:outline-none hover:text-[#BBA899] transition-colors group"
      >
        <span className="font-light text-gray-800 pr-8 text-lg md:text-xl uppercase tracking-tight group-hover:text-[#BBA899] transition-colors">{question}</span>
        {isOpen ? <Minus className="text-[#BBA899] shrink-0" size={20} /> : <Plus className="text-[#BBA899] shrink-0" size={20} />}
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="overflow-hidden"
          >
            <div className="pb-6 pt-4 text-gray-500 font-light leading-relaxed text-base md:text-lg border-t border-gray-100">
              {answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export const FAQSection: React.FC<FAQSectionProps> = ({ 
  faqs, 
  title = "Frequently Asked Questions", 
  subtitle = "Find answers to common questions about our services." 
}) => {
  if (!faqs || faqs.length === 0) return null;

  return (
    <section id="faq" className="py-20 border-t border-gray-200">
      <div className="max-w-4xl">
        <p className="text-xs font-bold tracking-[0.3em] text-[#BBA899] uppercase mb-4">FAQ</p>
        <h2 className="text-3xl md:text-5xl font-light text-gray-800 uppercase tracking-tight mb-4">{title}</h2>
        {subtitle && <p className="text-gray-500 font-light text-base md:text-lg mb-12">{subtitle}</p>}
        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <AccordionItem key={i} question={faq.question} answer={faq.answer} />
          ))}
        </div>
      </div>
    </section>
  );
};
