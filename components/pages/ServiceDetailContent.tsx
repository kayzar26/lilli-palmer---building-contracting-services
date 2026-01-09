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
    <div className="pt-32 pb-20">
      <div className="container mx-auto px-6">
        {/* Header Section */}
        <div className="mb-16">
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
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-24 mb-32">
          <div className="lg:col-span-2 space-y-16">
            <div className="space-y-8">
              <h2 className="text-3xl md:text-5xl font-light text-gray-800 leading-tight">
                {service.extendedContent}
              </h2>
            </div>

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

        {/* Other Services Section */}
        <div className="border-t border-gray-300 pt-24">
          <h2 className="text-h1-custom text-black mb-12 uppercase tracking-[0.3em]">Explore Other Expertise</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {otherServices.map(s => (
              <Link key={s.id} href={`/services/${s.id}`} className="group block">
                <div className="aspect-video relative overflow-hidden mb-4 rounded-sm">
                  <Image src={s.image} alt={s.title} fill className="object-cover grayscale group-hover:grayscale-0 transition-all duration-500 group-hover:scale-105" />
                </div>
                <h4 className="text-[11px] font-bold tracking-widest text-gray-800 uppercase group-hover:text-[#BBA899]">{s.title}</h4>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetailContent;
