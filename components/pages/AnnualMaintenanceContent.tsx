"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Check, X, Phone, ShieldCheck, Plus, Minus } from 'lucide-react';
import Link from 'next/link';
import { Breadcrumbs, BreadcrumbItem } from '@/components/ui/Breadcrumbs';

const luxuryEasing = [0.16, 1, 0.3, 1] as const;

const fadeUpVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.8, ease: luxuryEasing }
  }
};

const plans = [
  {
    name: "Bronze",
    subtitle: "ESSENTIAL CARE",
    price: "1,199",
    hex: "#CD7F32",
    features: [
      "2 A/C Services per year",
      "Emergency Plumbing (2 callouts)",
      "Emergency Electrical (2 callouts)",
      "60-minute response time",
      "Handyman services (Pay per visit)"
    ],
    unavailable: ["Water tank cleaning"]
  },
  {
    name: "Silver",
    subtitle: "COMPLETE COMFORT",
    price: "2,499",
    hex: "#9E9E9E", 
    popular: true,
    features: [
      "3 A/C Services per year",
      "Unlimited Plumbing Callouts",
      "Unlimited Electrical Callouts",
      "30-minute response time",
      "2 Handyman visits",
      "1 Water tank cleaning"
    ],
    unavailable: []
  },
  {
    name: "Gold",
    subtitle: "ULTIMATE PEACE OF MIND",
    price: "3,999",
    hex: "#D4AF37",
    features: [
      "4 A/C Services per year",
      "Unlimited Plumbing & Electrical",
      "Immediate Priority Response",
      "Unlimited Handyman services",
      "2 Water tank cleanings",
      "AC Duct Cleaning"
    ],
    unavailable: []
  }
];

const AccordionItem = ({ question, answer }: { question: string; answer: string }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border border-gray-200 rounded-lg bg-white overflow-hidden shadow-sm">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-10 py-6 flex items-center justify-between text-left focus:outline-none hover:bg-gray-50 transition-colors"
      >
        <span className="font-medium text-gray-800 pr-8 text-lg">{question}</span>
        {isOpen ? <Minus className="text-[#6C8D9B] shrink-0" size={24} /> : <Plus className="text-[#6C8D9B] shrink-0" size={24} />}
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="overflow-hidden bg-gray-50"
          >
            <div className="px-10 pb-10 pt-8 text-gray-600 font-light leading-relaxed text-lg border-t border-gray-100">
              {answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const AnnualMaintenanceContent: React.FC = () => {
  const breadcrumbItems: BreadcrumbItem[] = [
    { label: 'Home', url: '/' },
    { label: 'Services', url: '/services' },
    { label: 'Annual Maintenance Contract' }
  ];

  return (
    <div className="pt-44 pb-20 bg-[#F5F5F5]">
      
      {/* Hero Section */}
      <section className="px-6 mb-20 text-center">
         <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeUpVariants}
            className="max-w-4xl mx-auto"
         >
            <div className="flex justify-center">
              <Breadcrumbs items={breadcrumbItems} />
            </div>
            <p className="text-[#BBA899] font-bold tracking-[0.3em] uppercase mb-6 text-sm">LILLI PALMER BUILDING CONTRACTING</p>
            <h1 className="text-5xl md:text-7xl font-light text-[#111] mb-6 tracking-tight leading-[1.1]">
              Premium <span className="text-[#6C8D9B] italic font-normal">Annual Maintenance Contract</span> in Dubai
            </h1>
            <p className="text-gray-500 text-lg md:text-xl font-light leading-relaxed max-w-3xl mx-auto">
              Protect your home and peace of mind with our essential maintenance packages. Choose an annual maintenance contract that fits your lifestyle with guaranteed 24/7 annual maintenance support.
            </p>
         </motion.div>
      </section>

      {/* SEO Context Section */}
      <section className="container mx-auto px-6 mb-24 max-w-6xl">
         <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: luxuryEasing }}
            className="bg-white rounded-2xl shadow-lg border border-gray-100 p-10 md:p-14 text-center md:text-left flex flex-col md:flex-row gap-12 items-center"
         >
             <div className="md:w-1/2 space-y-6">
                <h2 className="text-3xl font-light text-gray-800 leading-snug">Why an <span className="font-medium text-[#6C8D9B]">Annual Maintenance Contract</span> is Critical in Dubai</h2>
                <p className="text-gray-500 font-light leading-relaxed text-lg">
                  Dubai's extreme climate puts immense strain on your property's infrastructure. By securing a reliable annual maintenance contract, you invest in proactive, essential maintenance that prevents catastrophic A/C and plumbing failures during peak summer heat.
                </p>
             </div>
             <div className="md:w-1/2 space-y-6">
                <p className="text-gray-500 font-light leading-relaxed text-lg">
                  Avoid paying exorbitant emergency call-out fees. Our comprehensive packages offer rapid 24/7 annual maintenance response times, prioritizing your comfort around the clock. Whether you are a homeowner or tenant, professional annual maintenance ensures the longevity of your assets.
                </p>
             </div>
         </motion.div>
      </section>

      {/* Pricing Cards */}
      <section className="container mx-auto px-6 mb-32">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, duration: 1, ease: luxuryEasing }}
              className={`relative bg-white rounded-2xl overflow-hidden shadow-xl border border-gray-100 p-8 flex flex-col hover:shadow-2xl transition-shadow duration-500 ${plan.popular ? 'ring-2 ring-[#6C8D9B] shadow-2xl scale-105 z-10' : ''}`}
            >
              {plan.popular && (
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 bg-[#6C8D9B] text-white text-[10px] uppercase font-bold tracking-widest px-6 py-2 rounded-b-lg">
                  Most Popular
                </div>
              )}
              
              <div className="mb-8 text-center pt-4">
                 <div 
                    className="w-12 h-12 mx-auto mb-4 rounded-full flex items-center justify-center"
                    style={{ backgroundColor: `${plan.hex}1A` }} // 10% opacity
                 >
                    <ShieldCheck className="w-6 h-6" style={{ color: plan.hex }} />
                 </div>
                 <h3 className="text-3xl font-serif text-gray-800 mb-2">{plan.name}</h3>
                 <p className="text-[10px] uppercase tracking-[0.2em] text-gray-400 font-bold mb-6">{plan.subtitle}</p>
                 <div className="flex items-baseline justify-center gap-1">
                    <span className="text-sm text-gray-400 font-light">AED</span>
                    <span className="text-5xl font-light text-gray-900 tracking-tight">{plan.price}</span>
                    <span className="text-sm text-gray-400 font-light">/ year</span>
                 </div>
              </div>

              <div className="space-y-4 mb-10 flex-grow">
                 {plan.features.map((feature, i) => (
                    <div key={i} className="flex items-start gap-3">
                       <Check size={16} className="text-[#6C8D9B] mt-1 flex-shrink-0" />
                       <span className="text-gray-600 text-sm font-light leading-relaxed">{feature}</span>
                    </div>
                 ))}
                 {plan.unavailable.map((item, i) => (
                    <div key={i} className="flex items-start gap-3 opacity-40">
                       <X size={16} className="text-gray-300 mt-1 flex-shrink-0" />
                       <span className="text-gray-400 text-sm font-light leading-relaxed">{item}</span>
                    </div>
                 ))}
              </div>

              <a 
                href={`https://wa.me/971507098676?text=${encodeURIComponent(`I want to know more about ${plan.name} maintenance package`)}`}
                target="_blank"
                rel="noopener noreferrer"
                className={`w-full py-4 text-center text-xs uppercase font-bold tracking-widest transition-all duration-300 rounded-lg block ${plan.popular ? 'bg-[#6C8D9B] text-white hover:bg-[#5a7684]' : 'bg-gray-100 text-gray-800 hover:bg-gray-200'}`}
              >
                 Select {plan.name}
              </a>
            </motion.div>
          ))}
        </div>
      </section>

      {/* FAQ Accordion Section */}
      <section className="container mx-auto px-6 mb-32 max-w-4xl">
         <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: luxuryEasing }}
            className="text-center mb-16"
         >
            <h2 className="text-4xl md:text-5xl font-light text-gray-800">Frequently Asked Questions</h2>
            <p className="text-gray-500 mt-6 font-light text-lg">Everything you need to know about our essential maintenance coverage.</p>
         </motion.div>
         
         <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2, ease: luxuryEasing }}
            className="space-y-4"
         >
            {[
              { 
                q: "What is included in an annual maintenance contract?", 
                a: "Our annual maintenance contract covers essential maintenance for your property, including regular AC servicing, emergency plumbing, and electrical callouts available via our 24/7 annual maintenance teams." 
              },
              { 
                q: "Why do I need annual maintenance in Dubai?", 
                a: "The demanding climate makes annual maintenance crucial to prevent major HVAC and plumbing failures. A structured annual maintenance contract ensures system longevity, reduces emergency repair costs, and guarantees 24/7 priority support." 
              },
              { 
                q: "Do you offer 24/7 annual maintenance emergency support?", 
                a: "Yes! Our Silver and Gold annual maintenance contracts include 24/7 annual maintenance dispatch with priority emergency response times as fast as 30 minutes." 
              }
            ].map((faq, i) => (
              <AccordionItem key={i} question={faq.q} answer={faq.a} />
            ))}
         </motion.div>
      </section>

      {/* Contact Strip */}
      <section className="bg-[#111] py-20 px-6">
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-10">
           <div className="text-white">
              <h2 className="text-3xl font-light mb-4 text-white">Have questions or want a custom package?</h2>
              <p className="text-gray-400 font-light">Get tailored solutions for residential and commercial properties.</p>
           </div>
           <Link 
              href="/contact"
              className="px-10 py-5 bg-white text-black text-xs font-bold uppercase tracking-widest hover:bg-[#BBA899] transition-colors duration-300 whitespace-nowrap"
           >
              Contact Us
           </Link>
        </div>
      </section>

    </div>
  );
};

export default AnnualMaintenanceContent;
