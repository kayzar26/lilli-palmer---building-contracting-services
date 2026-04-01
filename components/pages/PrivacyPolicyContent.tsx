"use client";

import React from 'react';
import { motion } from 'framer-motion';

const PrivacyPolicyContent: React.FC = () => {
  const luxuryEasing = [0.16, 1, 0.3, 1] as const;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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

  return (
    <div className="pt-40 pb-32 bg-white">
      <div className="container mx-auto px-6 max-w-4xl">
        <motion.div 
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="space-y-16"
        >
          {/* Header */}
          <div>
            <motion.p variants={itemVariants} className="text-h1-custom text-[#BBA899] mb-6 uppercase tracking-[0.4em]">Legal</motion.p>
            <motion.h1 variants={itemVariants} className="text-5xl md:text-8xl font-light tracking-tighter text-gray-800 leading-[0.9] mb-8 uppercase">
              PRIVACY<br />POLICY.
            </motion.h1>
            <motion.p variants={itemVariants} className="text-gray-400 text-sm tracking-widest uppercase font-bold">Last Updated: March 2026</motion.p>
          </div>

          {/* Content Sections */}
          <div className="space-y-12">
            <motion.section variants={itemVariants} className="space-y-6">
              <h2 className="text-2xl font-light text-gray-800 uppercase tracking-tight">1. Introduction</h2>
              <p className="text-gray-600 font-light leading-relaxed text-lg">
                At Lilli Palmer Building Contracting LLC ("Lilli Palmer", "we", "us", or "our"), we respect your privacy and are committed to protecting it through our compliance with this policy. This policy describes the types of information we may collect from you or that you may provide when you visit our website lillipalmer.com (our "Website") and our practices for collecting, using, maintaining, protecting, and disclosing that information.
              </p>
            </motion.section>

            <motion.section variants={itemVariants} className="space-y-6">
              <h2 className="text-2xl font-light text-gray-800 uppercase tracking-tight">2. Information We Collect</h2>
              <p className="text-gray-600 font-light leading-relaxed text-lg">
                We collect several types of information from and about users of our Website, including information:
              </p>
              <ul className="list-disc ml-6 space-y-4 text-gray-600 font-light text-lg">
                <li>By which you may be personally identified, such as name, postal address, e-mail address, telephone number, or any other identifier by which you may be contacted online or offline ("personal information").</li>
                <li>That is about you but individually does not identify you, such as your property type or service interests.</li>
                <li>About your internet connection, the equipment you use to access our Website, and usage details.</li>
              </ul>
            </motion.section>

            <motion.section variants={itemVariants} className="space-y-6">
              <h2 className="text-2xl font-light text-gray-800 uppercase tracking-tight">3. How We Use Your Information</h2>
              <p className="text-gray-600 font-light leading-relaxed text-lg">
                We use information that we collect about you or that you provide to us, including any personal information:
              </p>
              <ul className="list-disc ml-6 space-y-4 text-gray-600 font-light text-lg">
                <li>To present our Website and its contents to you.</li>
                <li>To provide you with information, products, or services that you request from us.</li>
                <li>To fulfill any other purpose for which you provide it.</li>
                <li>To carry out our obligations and enforce our rights arising from any contracts entered into between you and us.</li>
                <li>To notify you about changes to our Website or any products or services we offer or provide though it.</li>
              </ul>
            </motion.section>

            <motion.section variants={itemVariants} className="space-y-6">
              <h2 className="text-2xl font-light text-gray-800 uppercase tracking-tight">4. Data Protection</h2>
              <p className="text-gray-600 font-light leading-relaxed text-lg">
                We have implemented measures designed to secure your personal information from accidental loss and from unauthorized access, use, alteration, and disclosure. All information you provide to us is stored on our secure servers behind firewalls.
              </p>
              <p className="text-gray-600 font-light leading-relaxed text-lg italic bg-gray-50 p-6 border-l-2 border-[#BBA899]">
                Unfortunately, the transmission of information via the internet is not completely secure. Although we do our best to protect your personal information, we cannot guarantee the security of your personal information transmitted to our Website.
              </p>
            </motion.section>

            <motion.section variants={itemVariants} className="space-y-6">
              <h2 className="text-2xl font-light text-gray-800 uppercase tracking-tight">5. Third-Party Links</h2>
              <p className="text-gray-600 font-light leading-relaxed text-lg">
                Our Website may contain links to other sites. Please be aware that we are not responsible for the content or privacy practices of such other sites. We encourage our users to be aware when they leave our site and to read the privacy statements of any other site that collects personally identifiable information.
              </p>
            </motion.section>

            <motion.section variants={itemVariants} className="space-y-6">
              <h2 className="text-2xl font-light text-gray-800 uppercase tracking-tight">6. Your Rights</h2>
              <p className="text-gray-600 font-light leading-relaxed text-lg">
                You have the right to request access to, correct or delete any personal information that you have provided to us. You can do this by sending us an e-mail at contact@lillipalmer.com.
              </p>
            </motion.section>

            <motion.section variants={itemVariants} className="space-y-6">
              <h2 className="text-2xl font-light text-gray-800 uppercase tracking-tight">7. Contact Information</h2>
              <p className="text-gray-600 font-light leading-relaxed text-lg">
                To ask questions or comment about this privacy policy and our privacy practices, contact us at:
              </p>
              <div className="bg-[#EBEBEB] p-10 rounded-[2px] space-y-4 font-light text-gray-800 shadow-sm">
                <p className="font-bold uppercase tracking-widest text-[11px] text-[#BBA899]">Lilli Palmer Building Contracting LLC</p>
                <div className="space-y-1">
                  <p>702, Garhoud Views Building, Al Garhoud</p>
                  <p>Dubai, United Arab Emirates</p>
                </div>
                <div className="pt-4 space-y-2">
                  <p className="text-[10px] uppercase font-bold tracking-[0.2em] text-gray-400">Email Address</p>
                  <p><a href="mailto:contact@lillipalmer.com" className="text-xl text-gray-700 hover:text-[#BBA899] transition-colors">contact@lillipalmer.com</a></p>
                </div>
                <div className="pt-2 space-y-2">
                  <p className="text-[10px] uppercase font-bold tracking-[0.2em] text-gray-400">Phone Support</p>
                  <p><a href="tel:+971507098676" className="text-xl text-gray-700 hover:text-[#BBA899] transition-colors">+971 50 709 8676</a></p>
                </div>
              </div>
            </motion.section>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default PrivacyPolicyContent;
