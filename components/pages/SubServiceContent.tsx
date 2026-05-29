import React from 'react';
import Link from 'next/link';
import { SubService } from '@/types';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import GlobalCTA from '@/components/GlobalCTA';
import { StackingSlider } from '@/components/ui/StackingSlider';
import { Breadcrumbs, BreadcrumbItem } from '@/components/ui/Breadcrumbs';
import { FAQSection } from '@/components/ui/FAQSection';

interface SubServiceContentProps {
  service: SubService;
  backLink: string;
  backLabel: string;
}

const SubServiceContent: React.FC<SubServiceContentProps> = ({ service, backLink, backLabel }) => {
  // Map carousel strings to slider format
  const sliderImages = service.carouselImages?.map((img, idx) => ({
    id: `img-${idx}`,
    title: `${service.title} Project ${idx + 1}`,
    image: img
  })) || [];

  const breadcrumbItems: BreadcrumbItem[] = [
    { label: 'Home', url: '/' },
    { label: 'Services', url: '/services' },
  ];

  if (backLink.includes('renovation')) {
    breadcrumbItems.push({ label: 'Renovation', url: '/services/renovation' });
  }

  breadcrumbItems.push({ label: service.title });

  return (
    <div className="bg-white">
      {/* Page Header */}
      <div className="container mx-auto px-6 md:px-12 pt-40 md:pt-56 pb-12">
        {/* Breadcrumbs */}
        <div className="mb-12">
          <Breadcrumbs items={breadcrumbItems} />
        </div>

        {/* Title Section */}
        <div className="max-w-3xl">
          <div className="w-16 h-[2px] bg-[#BBA899] mb-6" />
          <h1 className="text-4xl md:text-7xl font-light text-gray-900 tracking-tight leading-tight uppercase mb-4">
            {service.title}
          </h1>
          <p className="text-base md:text-lg text-gray-500 font-light leading-relaxed max-w-xl">
            {service.description}
          </p>
        </div>

        {/* Stacking Slider Section */}
        <div className="mt-20">
          <StackingSlider images={sliderImages} />
        </div>
      </div>

      {/* Content Body */}
      <div className="container mx-auto px-6 md:px-12">

        {/* Accent divider */}
        <div className="py-16 md:py-24">
          <div className="w-16 h-[2px] bg-[#BBA899] mb-10" />
          <p className="text-xs font-bold tracking-[0.3em] text-[#BBA899] uppercase mb-6">Bespoke {service.title}</p>
          <h2 className="text-3xl md:text-5xl font-light text-gray-800 leading-tight">
            {service.whyChooseUs}
          </h2>
        </div>

        {/* Content Sections */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16 pb-20 md:pb-28 border-b border-gray-200">
          {service.sections.map((section, idx) => (
            <div key={idx} className="space-y-4">
              <div className="flex items-start gap-4">
                <span className="text-3xl font-light text-[#BBA899]/30 leading-none">0{idx + 1}</span>
                <div>
                  <h3 className="text-sm font-bold tracking-widest text-gray-800 uppercase mb-3">{section.title}</h3>
                  <p className="text-base text-gray-500 font-light leading-relaxed">{section.text}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Benefits Grid */}
        <div className="py-20 md:py-28">
          <p className="text-xs font-bold tracking-[0.3em] text-[#BBA899] uppercase mb-4">Key Advantages</p>
          <h2 className="text-3xl md:text-4xl font-light text-gray-800 tracking-tight mb-16">Why Clients Choose Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {service.benefits.map((benefit, idx) => (
              <div key={idx} className="space-y-4 border-t border-gray-200 pt-8">
                <CheckCircle2 size={20} className="text-[#BBA899]" />
                <h4 className="text-sm font-bold tracking-wide text-gray-900 uppercase">{benefit.title}</h4>
                <p className="text-sm text-gray-500 font-light leading-relaxed">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Process Steps */}
        <div className="pb-20 md:pb-28 border-b border-gray-200">
          <p className="text-xs font-bold tracking-[0.3em] text-[#BBA899] uppercase mb-4">Our Process</p>
          <h2 className="text-3xl md:text-4xl font-light text-gray-800 tracking-tight mb-16">How We Deliver</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {service.process.map((step, idx) => (
              <div key={idx} className="relative">
                <span className="text-6xl font-light text-[#BBA899]/15 absolute -top-4 left-0">0{idx + 1}</span>
                <div className="pt-12 space-y-3">
                  <h4 className="text-sm font-bold tracking-widest text-gray-800 uppercase">{step.title}</h4>
                  <p className="text-sm text-gray-500 font-light leading-relaxed">{step.description}</p>
                </div>
                {idx < service.process.length - 1 && (
                  <div className="hidden md:block absolute top-16 -right-4">
                    <ArrowRight size={16} className="text-[#BBA899]/30" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* SEO Content */}
        <div className="py-16 md:py-24">
          <div className="max-w-4xl">
            <p className="text-xs font-bold tracking-[0.3em] text-[#BBA899] uppercase mb-8">About Our {service.title}</p>
            <p className="text-lg text-gray-600 font-light leading-[1.9]">{service.seoContent}</p>
          </div>
        </div>

        {/* FAQs Section */}
        {service.faqs && service.faqs.length > 0 && (
          <FAQSection faqs={service.faqs} />
        )}

        {/* CTA Banner */}
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

        {/* GlobalCTA */}
        <div className="mb-16">
          {/* <GlobalCTA /> */}
        </div>
      </div>
    </div>
  );
};

export default SubServiceContent;
