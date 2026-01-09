"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Send, MapPin, Phone, Mail } from 'lucide-react';

const ContactContent: React.FC = () => {
  const luxuryEasing = [0.16, 1, 0.3, 1] as const;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.8, ease: luxuryEasing }
    }
  };

  const formElementVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.7, ease: luxuryEasing } 
    }
  };

  return (
    <div className="pt-40 pb-32 bg-[#EBEBEB]">
      <div className="container mx-auto px-6">
        <motion.div 
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start"
        >
          {/* Contact Information */}
          <div className="w-full">
            <motion.p variants={itemVariants} className="text-h1-custom text-[#BBA899] mb-6 uppercase tracking-[0.4em]">Connect</motion.p>
            <motion.h1 variants={itemVariants} className="text-5xl md:text-8xl font-light tracking-tighter text-gray-800 leading-[0.9] mb-16 break-words uppercase">
              LET'S START A<br />CONVERSATION.
            </motion.h1>
            
            <div className="space-y-12">
              <motion.div variants={itemVariants} className="flex gap-6 group">
                <div className="w-12 h-12 rounded-full border border-gray-300 flex items-center justify-center group-hover:border-[#BBA899] group-hover:bg-[#BBA899] group-hover:text-white transition-all duration-500 shrink-0">
                  <Mail size={18} />
                </div>
                <div>
                  <p className="text-[10px] tracking-[0.3em] text-gray-400 uppercase mb-2 font-bold">Email Enquiries</p>
                  <a href="mailto:contact@lillipalmer.com" className="text-xl text-gray-700 font-light group-hover:text-[#BBA899] transition-colors">contact@lillipalmer.com</a>
                </div>
              </motion.div>

              <motion.div variants={itemVariants} className="flex gap-6 group">
                <div className="w-12 h-12 rounded-full border border-gray-300 flex items-center justify-center group-hover:border-[#BBA899] group-hover:bg-[#BBA899] group-hover:text-white transition-all duration-500 shrink-0">
                  <Phone size={18} />
                </div>
                <div>
                  <p className="text-[10px] tracking-[0.3em] text-gray-400 uppercase mb-2 font-bold">Studio Line</p>
                  <a href="tel:+971507098676" className="text-xl text-gray-700 font-light group-hover:text-[#BBA899] transition-colors">+971 50 709 8676</a>
                </div>
              </motion.div>

              <motion.div variants={itemVariants} className="flex gap-6 group">
                <div className="w-12 h-12 rounded-full border border-gray-300 flex items-center justify-center group-hover:border-[#BBA899] group-hover:bg-[#BBA899] group-hover:text-white transition-all duration-500 shrink-0">
                  <MapPin size={18} />
                </div>
                <div>
                  <p className="text-[10px] tracking-[0.3em] text-gray-400 uppercase mb-2 font-bold">Studio Address</p>
                  <p className="text-xl text-gray-700 font-light group-hover:text-[#BBA899] transition-colors">
                    702, Garhoud Views Building, Al Garhoud, Dubai
                  </p>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Form Card */}
          <motion.div 
            variants={itemVariants}
            className="w-full bg-white p-8 md:p-16 rounded-[5px] shadow-[0_20px_50px_rgba(0,0,0,0.05)]"
          >
            <motion.h3 variants={formElementVariants} className="text-3xl font-light mb-12 text-gray-800 tracking-tight">Tell us about your property vision.</motion.h3>
            
            <motion.form 
              variants={containerVariants}
              className="space-y-8" 
              onSubmit={(e) => e.preventDefault()}
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="flex flex-col gap-2">
                  <motion.label variants={formElementVariants} className="text-[10px] font-bold tracking-[0.2em] text-gray-400 uppercase ml-1">First Name</motion.label>
                  <motion.input 
                    variants={formElementVariants}
                    type="text" 
                    className="bg-gray-50 border border-transparent border-b-gray-200 px-5 py-4 rounded-[5px] focus:bg-white focus:border-[#BBA899] focus:ring-0 outline-none transition-all text-gray-800 placeholder-gray-300 font-light text-base ease-luxury" 
                    placeholder="Lilli" 
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <motion.label variants={formElementVariants} className="text-[10px] font-bold tracking-[0.2em] text-gray-400 uppercase ml-1">Last Name</motion.label>
                  <motion.input 
                    variants={formElementVariants}
                    type="text" 
                    className="bg-gray-50 border border-transparent border-b-gray-200 px-5 py-4 rounded-[5px] focus:bg-white focus:border-[#BBA899] focus:ring-0 outline-none transition-all text-gray-800 placeholder-gray-300 font-light text-base ease-luxury" 
                    placeholder="Palmer" 
                  />
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <motion.label variants={formElementVariants} className="text-[10px] font-bold tracking-[0.2em] text-gray-400 uppercase ml-1">Email Address</motion.label>
                <motion.input 
                  variants={formElementVariants}
                  type="email" 
                  className="bg-gray-50 border border-transparent border-b-gray-200 px-5 py-4 rounded-[5px] focus:bg-white focus:border-[#BBA899] focus:ring-0 outline-none transition-all text-gray-800 placeholder-gray-300 font-light text-base ease-luxury" 
                  placeholder="contact@lillipalmer.com" 
                />
              </div>

              <div className="flex flex-col gap-2">
                <motion.label variants={formElementVariants} className="text-[10px] font-bold tracking-[0.2em] text-gray-400 uppercase ml-1">Service Required</motion.label>
                <motion.div variants={formElementVariants} className="relative">
                  <select className="appearance-none w-full bg-gray-50 border border-transparent border-b-gray-200 px-5 py-4 rounded-[5px] focus:bg-white focus:border-[#BBA899] focus:ring-0 outline-none transition-all text-gray-800 font-light text-base ease-luxury cursor-pointer">
                    <option>HVAC Solutions</option>
                    <option>Full Construction</option>
                    <option>Boutique Renovation</option>
                    <option>Electrical Repair</option>
                    <option>Professional Plumbing</option>
                    <option>Painting Services</option>
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-5 text-gray-400">
                    <svg className="h-4 w-4 fill-current" viewBox="0 0 20 20"><path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" /></svg>
                  </div>
                </motion.div>
              </div>

              <div className="flex flex-col gap-2">
                <motion.label variants={formElementVariants} className="text-[10px] font-bold tracking-[0.2em] text-gray-400 uppercase ml-1">Project Details</motion.label>
                <motion.textarea 
                  variants={formElementVariants}
                  rows={4} 
                  className="bg-gray-50 border border-transparent border-b-gray-200 px-5 py-4 rounded-[5px] focus:bg-white focus:border-[#BBA899] focus:ring-0 outline-none transition-all text-gray-800 placeholder-gray-300 font-light text-base resize-none ease-luxury" 
                  placeholder="Tell us about the project milestones, budget, or specific needs..."
                ></motion.textarea>
              </div>

              <motion.button 
                variants={formElementVariants}
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.99 }}
                className="w-full bg-[#191919] text-white py-6 rounded-[5px] flex items-center justify-center gap-4 hover:bg-[#BBA899] shadow-lg hover:shadow-[#BBA899]/20 transition-all duration-500 uppercase tracking-[0.3em] font-bold text-[11px]"
              >
                Submit Enquiry <Send size={16} />
              </motion.button>
              
              <motion.p variants={formElementVariants} className="text-center text-[10px] text-gray-400 tracking-widest uppercase mt-6">
                Our studio will respond within 24 business hours.
              </motion.p>
            </motion.form>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default ContactContent;
