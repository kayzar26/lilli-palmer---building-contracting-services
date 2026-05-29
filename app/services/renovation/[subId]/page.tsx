import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { SERVICES } from '@/constants';
import SubServiceContent from '@/components/pages/SubServiceContent';

type Props = {
  params: Promise<{ subId: string }>;
};

const renovationService = SERVICES.find(s => s.id === 'renovation');
const subServices = renovationService?.subServices || [];

export async function generateStaticParams() {
  return subServices.map((sub) => ({
    subId: sub.id,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { subId } = await params;
  const sub = subServices.find(s => s.id === subId);
  if (!sub) return { title: 'Service Not Found' };

  return {
    title: `${sub.title} in Dubai | Lilli Palmer Building Contracting`,
    description: sub.description,
    alternates: {
      canonical: `https://www.lillipalmer.com/services/renovation/${subId}`,
    },
  };
}

export default async function SubServicePage({ params }: Props) {
  const { subId } = await params;
  const sub = subServices.find(s => s.id === subId);

  if (!sub) {
    notFound();
  }

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: sub.title,
    description: sub.description,
    provider: {
      '@type': 'Organization',
      name: 'Lilli Palmer Building Contracting',
      url: 'https://www.lillipalmer.com',
    },
    image: sub.image,
    url: `https://www.lillipalmer.com/services/renovation/${sub.id}`,
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
        name: 'Renovation',
        item: 'https://www.lillipalmer.com/services/renovation',
      },
      {
        '@type': 'ListItem',
        position: 4,
        name: sub.title,
        item: `https://www.lillipalmer.com/services/renovation/${sub.id}`,
      },
    ],
  };

  const faqJsonLd = sub.faqs && sub.faqs.length > 0 ? {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: sub.faqs.map(faq => ({
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
        service={sub}
        backLink="/services/renovation"
        backLabel="Back to Renovation"
      />
    </>
  );
}
