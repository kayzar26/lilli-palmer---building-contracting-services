import { Metadata } from 'next';
import { OFFICE_RENOVATION_SUB_SERVICE } from '@/constants';
import SubServiceContent from '@/components/pages/SubServiceContent';

export const metadata: Metadata = {
  title: 'Office Renovation in Dubai | Lilli Palmer Building Contracting',
  description: 'Premium office renovation and commercial fit-out services in Dubai. Executive boardroom design, workspace optimization, and IT infrastructure integration.',
  alternates: {
    canonical: 'https://www.lillipalmer.com/services/office-renovation',
  },
};

export default function OfficeRenovationPage() {
  const service = OFFICE_RENOVATION_SUB_SERVICE;

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: service.title,
    description: service.description,
    provider: {
      '@type': 'Organization',
      name: 'Lilli Palmer Building Contracting',
      url: 'https://www.lillipalmer.com',
    },
    image: service.image,
    url: 'https://www.lillipalmer.com/services/office-renovation',
    areaServed: {
      '@type': 'Country',
      name: 'United Arab Emirates',
    },
  };

  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: 'https://www.lillipalmer.com',
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Services',
        item: 'https://www.lillipalmer.com/services',
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: 'Office Renovation',
        item: 'https://www.lillipalmer.com/services/office-renovation',
      },
    ],
  };

  const faqJsonLd = service.faqs && service.faqs.length > 0 ? {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: service.faqs.map(faq => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  } : null;

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      {faqJsonLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
        />
      )}
      <SubServiceContent
        service={service}
        backLink="/services"
        backLabel="Back to Services"
      />
    </>
  );
}
