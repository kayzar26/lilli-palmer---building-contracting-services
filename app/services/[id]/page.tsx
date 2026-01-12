import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { SERVICES } from '@/constants';
import ServiceDetailContent from '@/components/pages/ServiceDetailContent';

type Props = {
  params: Promise<{ id: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const service = SERVICES.find(s => s.id === id);
  if (!service) return { title: 'Service Not Found' };
  
  return {
    title: `${service.title} | Lilli Palmer`,
    description: service.description,
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
      url: 'https://www.lillipalmer.ae',
    },
    image: service.image,
    url: `https://www.lillipalmer.ae/services/${service.id}`,
    areaServed: {
      '@type': 'Country',
      name: 'United Arab Emirates',
    },
  };
  
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ServiceDetailContent service={service} />
    </>
  );
}
