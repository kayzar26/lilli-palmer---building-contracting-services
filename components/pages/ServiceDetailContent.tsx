"use client";

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { SERVICES } from '@/constants';
import { Service } from '@/types';
import { ArrowLeft, ArrowRight, CheckCircle2 } from 'lucide-react';

interface ServiceDetailContentProps {
  service: Service;
}

const ServiceDetailContent: React.FC<ServiceDetailContentProps> = ({ service }) => {
  const otherServices = SERVICES.filter(s => s.id !== service.id).slice(0, 3);

  return (
    <div className="pt-52 pb-20">
      <div className="container mx-auto px-6">
        {/* Header Section */}
        <div className="mb-16 relative z-[50]">
          <Link href="/services" className="inline-flex items-center gap-2 text-xs font-bold tracking-widest text-gray-400 hover:text-[#BBA899] transition-colors mb-8 uppercase">
            <ArrowLeft size={16} /> Back to Services
          </Link>
          <p className="text-h1-custom text-[#BBA899] mb-4 uppercase tracking-[0.3em]">EXCELLENCE IN {service.title.split(' ')[0]}</p>
          <h1 className="text-5xl md:text-8xl font-light tracking-tighter text-gray-800 uppercase">{service.title}</h1>
        </div>

        {/* Hero Image */}
        <div className="relative h-[400px] md:h-[600px] mb-24 overflow-hidden rounded-sm">
          <Image 
            src={service.image} 
            alt={service.title} 
            fill
            priority
            className="object-cover grayscale brightness-90"
          />
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 lg:gap-24 mb-12 lg:mb-18">
          <div className="lg:col-span-2 space-y-20">
            {/* Main Description */}
            <div className="space-y-8">
              <h2 className="text-3xl md:text-5xl font-light text-gray-800 leading-tight">
                {service.extendedContent}
              </h2>
            </div>
            
            {/* Why Choose Us - Enhanced Section */}
            {service.whyChooseUs && (
               <div className="border-l-4 border-[#BBA899] pl-8 py-2 bg-gray-50 rounded-r-sm">
                 <h3 className="text-xs font-bold tracking-[0.3em] text-[#BBA899] mb-4 uppercase">Why Select Us</h3>
                 <p className="text-lg text-gray-700 font-light italic leading-relaxed">"{service.whyChooseUs}"</p>
               </div>
            )}

            {/* Benefits Grid */}
            {service.benefits && service.benefits.length > 0 && (
              <div>
                 <h3 className="text-xl font-bold tracking-widest text-gray-800 mb-10 uppercase border-b border-gray-200 pb-4">Key Advantages</h3>
                 <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-12">
                   {service.benefits.map((benefit, idx) => (
                     <div key={idx} className="space-y-3">
                       <h4 className="text-sm font-bold tracking-wide text-gray-900 uppercase">{benefit.title}</h4>
                       <p className="text-sm text-gray-500 font-light leading-relaxed">{benefit.description}</p>
                     </div>
                   ))}
                 </div>
              </div>
            )}

            {/* Process / Steps */}
            {service.process && service.process.length > 0 && (
              <div>
                 <h3 className="text-xl font-bold tracking-widest text-gray-800 mb-10 uppercase border-b border-gray-200 pb-4">Our Process</h3>
                 <div className="space-y-12">
                   {service.process.map((step, idx) => (
                     <div key={idx} className="flex gap-6">
                       <span className="text-4xl font-light text-[#BBA899]/30 -mt-2">0{idx + 1}</span>
                       <div className="space-y-2 border-b border-gray-100 pb-8 w-full">
                         <h4 className="text-lg font-medium tracking-wide text-gray-800 uppercase">{step.title}</h4>
                         <p className="text-base text-gray-500 font-light leading-relaxed">{step.description}</p>
                       </div>
                     </div>
                   ))}
                 </div>
              </div>
            )}

            {/* Legacy/Fallback Sections (Usage: AMC & backward compatibility) */}
            {(!service.benefits && !service.process) && (
                <div className="grid grid-cols-1 md:grid-cols-1 gap-12">
                  {service.sections.map((section, idx) => (
                    <div key={idx} className="border-t border-gray-200 pt-10">
                      <h3 className="text-xl font-bold tracking-widest text-gray-800 mb-4 uppercase">{section.title}</h3>
                      <p className="text-xl text-gray-500 font-light leading-relaxed">
                        {section.text}
                      </p>
                    </div>
                  ))}
                </div>
            )}
          </div>

          <div className="space-y-12">
            <div className="bg-white p-10 rounded-sm shadow-sm border border-gray-100">
              <h4 className="text-xs font-bold tracking-[0.3em] text-gray-400 mb-8 uppercase">Service Features</h4>
              <ul className="space-y-6">
                {service.features.map(feature => (
                  <li key={feature} className="flex items-center gap-4 text-[13px] font-bold tracking-[0.1em] text-gray-700 uppercase">
                    <CheckCircle2 size={18} className="text-[#BBA899]" />
                    {feature}
                  </li>
                ))}
              </ul>
              
              <Link href="/contact" className="mt-12 w-full bg-[#191919] text-white py-5 flex items-center justify-center gap-3 hover:bg-[#BBA899] transition-all uppercase tracking-[0.3em] font-bold text-[10px]">
                Enquire Now <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>

        {/* SEO Content Section */}
        {service.seoContent && (
          <div className="mb-16 lg:mb-24 border-t border-gray-200 pt-8 lg:pt-12">
            <div className="max-w-4xl">
              <h2 className="text-l font-bold tracking-[0.3em] text-[#BBA899] mb-8 uppercase">About Our {service.title}</h2>
              <p className="text-lg text-gray-600 font-light leading-[1.9]">
                {service.seoContent}
              </p>
            </div>
          </div>
        )}

        {/* CTA Banner */}
        {service.cta && (
          <div className="mb-24 bg-[#191919] rounded-sm overflow-hidden">
            <div className="px-10 py-16 md:px-20 md:py-24 flex flex-col md:flex-row items-start md:items-center justify-between gap-12">
              <div className="space-y-5 max-w-2xl">
                <h2 className="text-3xl md:text-4xl font-light text-white leading-tight tracking-tight">
                  {service.cta.heading}
                </h2>
                <p className="text-gray-400 text-lg font-light leading-relaxed">
                  {service.cta.description}
                </p>
              </div>
              <Link 
                href="/contact" 
                className="shrink-0 bg-[#BBA899] text-white px-12 py-5 flex items-center gap-3 hover:bg-white hover:text-[#191919] transition-all duration-500 uppercase tracking-[0.2em] font-bold text-[11px]"
              >
                {service.cta.buttonText} <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        )}

        {/* Other Services Section */}
        <div className="border-t border-gray-300 pt-24">
          <h2 className="text-h1-custom text-black mb-12 uppercase tracking-[0.3em]">Explore Other Expertise</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {otherServices.map(s => (
              <Link key={s.id} href={`/services/${s.id}`} className="group block">
                <div className="aspect-video relative overflow-hidden mb-4 rounded-sm">
                  <Image src={s.image} alt={s.title} fill className="object-cover grayscale group-hover:grayscale-0 transition-all duration-500 group-hover:scale-105" />
                </div>
                <h3 className="text-[11px] font-bold tracking-widest text-gray-800 uppercase group-hover:text-[#BBA899]">{s.title}</h3>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetailContent;
