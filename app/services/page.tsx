import { Metadata } from 'next';
import ServicesContent from '@/components/pages/ServicesContent';

export const metadata: Metadata = {
  title: 'Our Services | Lilli Palmer',
  description: 'Explore the elite building contracting services offered by Lilli Palmer.',
  alternates: {
    canonical: 'https://www.lillipalmer.com/services',
  },
};

export default function ServicesPage() {
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
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <ServicesContent />
    </>
  );
}
