import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { SERVICES } from '@/constants';
import ServiceDetailContent from '@/components/pages/ServiceDetailContent';

type Props = {
  params: Promise<{ id: string }>;
};

export async function generateStaticParams() {
  return SERVICES.map((service) => ({
    id: service.id,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const service = SERVICES.find(s => s.id === id);
  if (!service) return { title: 'Service Not Found' };
  
  return {
    title: `${service.title} | Lilli Palmer`,
    description: service.description,
    alternates: {
      canonical: `https://www.lillipalmer.com/services/${id}`,
    },
  };
}

export default async function ServiceDetailPage({ params }: Props) {
  const { id } = await params;
  const service = SERVICES.find(s => s.id === id);
  
  if (!service) {
    notFound();
  }

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
    url: `https://www.lillipalmer.com/services/${service.id}`,
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
        name: service.title,
        item: `https://www.lillipalmer.com/services/${service.id}`,
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
      <ServiceDetailContent service={service} />
    </>
  );
}
