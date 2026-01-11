"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Check, X, Phone, ShieldCheck } from 'lucide-react';
import Link from 'next/link';

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

const AnnualMaintenanceContent: React.FC = () => {
  return (
    <div className="pt-32 pb-20 bg-[#F5F5F5]">
      
      {/* Hero Section */}
      <section className="px-6 mb-20 text-center">
         <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeUpVariants}
            className="max-w-3xl mx-auto"
         >
            <p className="text-[#BBA899] font-bold tracking-[0.3em] uppercase mb-6 text-sm">LILLI PALMER BUILDING CONTRACTING</p>
            <h1 className="text-5xl md:text-7xl font-light text-[#111] mb-6 tracking-tight">
              Maintenance Made <span className="text-[#6C8D9B] italic font-normal">Simple</span>
            </h1>
            <p className="text-gray-500 text-lg md:text-xl font-light leading-relaxed max-w-2xl mx-auto">
              Protect your home and peace of mind with our comprehensive Annual Maintenance Contracts (AMC). Choose the plan that fits your lifestyle.
            </p>
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
