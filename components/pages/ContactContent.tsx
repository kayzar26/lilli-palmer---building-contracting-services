"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, MapPin, Phone, Mail, Loader2 } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { Breadcrumbs, BreadcrumbItem } from '@/components/ui/Breadcrumbs';
import { submitContactForm } from '@/app/actions/contact';
import { pushToDataLayer, formatToE164 } from '@/lib/gtm';

const ContactContent: React.FC = () => {
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const luxuryEasing = [0.16, 1, 0.3, 1] as const;

  const handleLinkClick = (type: 'phone' | 'email' | 'address') => {
    pushToDataLayer(`${type}_click`, { location: 'contact_page' });
  };

  const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    const formData = new FormData(e.currentTarget);
    
    try {
      const result = await submitContactForm(formData);
      
      if (result.success) {
        // Fire GTM Conversion Event
        pushToDataLayer('generate_lead', {
          form_name: 'contact_page_form',
          service: formData.get('service'),
          user_data: {
            email: (formData.get('email') as string || "").trim().toLowerCase(),
            phone_number: formatToE164(formData.get('phone') as string || ""),
            address: {
              first_name: (formData.get('firstName') as string || "").trim(),
              last_name: (formData.get('lastName') as string || "").trim(),
            }
          }
        });
        
        // Redirect to thank you page
        router.push('/thank-you');
      } else {
        setError(result.error || 'Something went wrong. Please try again.');
        setIsSubmitting(false);
      }
    } catch (err) {
      setError('An unexpected error occurred. Please try again.');
      setIsSubmitting(false);
    }
  };

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

  const breadcrumbItems: BreadcrumbItem[] = [
    { label: 'Home', url: '/' },
    { label: 'Contact Us' }
  ];

  return (
    <div className="pt-40 pb-32 bg-[#EBEBEB]">
      <div className="container mx-auto px-6">
        <Breadcrumbs items={breadcrumbItems} />
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
                  <a 
                    href="mailto:contact@lillipalmer.com" 
                    onClick={() => handleLinkClick('email')}
                    className="text-xl text-gray-700 font-light group-hover:text-[#BBA899] transition-colors no-capture"
                  >
                    contact@lillipalmer.com
                  </a>
                </div>
              </motion.div>

              <motion.div variants={itemVariants} className="flex gap-6 group">
                <div className="w-12 h-12 rounded-full border border-gray-300 flex items-center justify-center group-hover:border-[#BBA899] group-hover:bg-[#BBA899] group-hover:text-white transition-all duration-500 shrink-0">
                  <Phone size={18} />
                </div>
                <div>
                  <p className="text-[10px] tracking-[0.3em] text-gray-400 uppercase mb-2 font-bold">Phone Enquiries</p>
                  <a 
                    href="tel:+971507098676" 
                    onClick={() => handleLinkClick('phone')}
                    className="text-xl text-gray-700 font-light group-hover:text-[#BBA899] transition-colors no-capture"
                  >
                    +971 50 709 8676
                  </a>
                </div>
              </motion.div>

              <motion.div variants={itemVariants} className="flex gap-6 group">
                <div className="w-12 h-12 rounded-full border border-gray-300 flex items-center justify-center group-hover:border-[#BBA899] group-hover:bg-[#BBA899] group-hover:text-white transition-all duration-500 shrink-0">
                  <MapPin size={18} />
                </div>
                <div>
                  <p className="text-[10px] tracking-[0.3em] text-gray-400 uppercase mb-2 font-bold">Dubai Address</p>
                  <a 
                    href="https://maps.app.goo.gl/yKDKHBYmYQymwQXb7" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    onClick={() => handleLinkClick('address')}
                    className="text-xl text-gray-700 font-light group-hover:text-[#BBA899] transition-colors no-capture"
                  >
                    702, Garhoud Views Building, Al Garhoud, Dubai
                  </a>
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
              onSubmit={handleFormSubmit}
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="flex flex-col gap-2">
                  <motion.label variants={formElementVariants} className="text-[10px] font-bold tracking-[0.2em] text-gray-400 uppercase ml-1">First Name</motion.label>
                  <motion.input 
                    name="firstName"
                    required
                    variants={formElementVariants}
                    type="text" 
                    className="bg-gray-50 border border-transparent border-b-gray-200 px-5 py-4 rounded-[5px] focus:bg-white focus:border-[#BBA899] focus:ring-0 outline-none transition-all text-gray-800 placeholder-gray-300 font-light text-base ease-luxury" 
                    placeholder="Lilli" 
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <motion.label variants={formElementVariants} className="text-[10px] font-bold tracking-[0.2em] text-gray-400 uppercase ml-1">Last Name</motion.label>
                  <motion.input 
                    name="lastName"
                    variants={formElementVariants}
                    type="text" 
                    className="bg-gray-50 border border-transparent border-b-gray-200 px-5 py-4 rounded-[5px] focus:bg-white focus:border-[#BBA899] focus:ring-0 outline-none transition-all text-gray-800 placeholder-gray-300 font-light text-base ease-luxury" 
                    placeholder="Palmer" 
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="flex flex-col gap-2">
                  <motion.label variants={formElementVariants} className="text-[10px] font-bold tracking-[0.2em] text-gray-400 uppercase ml-1">Email Address</motion.label>
                  <motion.input 
                    name="email"
                    required
                    variants={formElementVariants}
                    type="email" 
                    className="bg-gray-50 border border-transparent border-b-gray-200 px-5 py-4 rounded-[5px] focus:bg-white focus:border-[#BBA899] focus:ring-0 outline-none transition-all text-gray-800 placeholder-gray-300 font-light text-base ease-luxury" 
                    placeholder="contact@lillipalmer.com" 
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <motion.label variants={formElementVariants} className="text-[10px] font-bold tracking-[0.2em] text-gray-400 uppercase ml-1">Phone Number</motion.label>
                  <motion.input 
                    name="phone"
                    required
                    variants={formElementVariants}
                    type="tel" 
                    className="bg-gray-50 border border-transparent border-b-gray-200 px-5 py-4 rounded-[5px] focus:bg-white focus:border-[#BBA899] focus:ring-0 outline-none transition-all text-gray-800 placeholder-gray-300 font-light text-base ease-luxury" 
                    placeholder="+971 50 --- ----" 
                  />
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <motion.label variants={formElementVariants} className="text-[10px] font-bold tracking-[0.2em] text-gray-400 uppercase ml-1">Service Required</motion.label>
                <motion.div variants={formElementVariants} className="relative">
                  <select 
                    name="service"
                    className="appearance-none w-full bg-gray-50 border border-transparent border-b-gray-200 px-5 py-4 rounded-[5px] focus:bg-white focus:border-[#BBA899] focus:ring-0 outline-none transition-all text-gray-800 font-light text-base ease-luxury cursor-pointer"
                  >
                    <option>HVAC Solutions</option>
                    <option>Full Construction</option>
                    <option>Home/Villa Renovation</option>
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
                  name="details"
                  variants={formElementVariants}
                  rows={4} 
                  className="bg-gray-50 border border-transparent border-b-gray-200 px-5 py-4 rounded-[5px] focus:bg-white focus:border-[#BBA899] focus:ring-0 outline-none transition-all text-gray-800 placeholder-gray-300 font-light text-base resize-none ease-luxury" 
                  placeholder="Tell us about the project milestones, budget, or specific needs..."
                ></motion.textarea>
              </div>

              {error && (
                <motion.p variants={formElementVariants} className="text-red-500 text-sm text-center font-medium">
                  {error}
                </motion.p>
              )}

              <motion.button 
                disabled={isSubmitting}
                variants={formElementVariants}
                whileHover={{ scale: isSubmitting ? 1 : 1.01 }}
                whileTap={{ scale: isSubmitting ? 1 : 0.99 }}
                className={`w-full bg-[#191919] text-white py-6 rounded-[5px] flex items-center justify-center gap-4 transition-all duration-500 uppercase tracking-[0.3em] font-bold text-[11px] ${isSubmitting ? 'opacity-70 cursor-not-allowed' : 'hover:bg-[#BBA899] shadow-lg hover:shadow-[#BBA899]/20'}`}
              >
                {isSubmitting ? (
                  <>Processing <Loader2 size={16} className="animate-spin" /></>
                ) : (
                  <>Submit Enquiry <Send size={16} /></>
                )}
              </motion.button>
              
              <motion.p variants={formElementVariants} className="text-center text-[10px] text-gray-400 tracking-widest uppercase mt-6">
                Our company will respond within 24 business hours.
              </motion.p>
            </motion.form>
          </motion.div>
        </motion.div>
      </div>

      {/* Embedded Map */}
      <div className="container mx-auto px-6 mt-20 md:mt-32">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={itemVariants}
          className="w-full h-[400px] md:h-[600px] bg-gray-200 rounded-[5px] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.05)]"
        >
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4501.591281937492!2d55.3399858!3d25.243952!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f5d5529afac99%3A0x6f1d4ab364118706!2sLilli%20Palmer%20Building%20Contracting!5e1!3m2!1sen!2sin!4v1771856256580!5m2!1sen!2sin" 
            width="100%" 
            height="100%" 
            style={{ border: 0 }} 
            allowFullScreen={false} 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
          />
        </motion.div>
      </div>
    </div>
  );
};

export default ContactContent;
