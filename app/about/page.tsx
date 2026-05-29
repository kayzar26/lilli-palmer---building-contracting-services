import { Metadata } from 'next';
import AboutContent from '@/components/pages/AboutContent';

export const metadata: Metadata = {
  title: 'About Us | Lilli Palmer',
  description: 'Learn about Lilli Palmer, Dubai\'s premier destination for high-end building contracting and maintenance.',
  alternates: {
    canonical: 'https://www.lillipalmer.com/about',
  },
};

export default function AboutPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'AboutPage',
    mainEntity: {
      '@id': 'https://www.lillipalmer.com/about'
    },
    description: 'Learn about Lilli Palmer, Dubai\'s premier destination for high-end building contracting and maintenance.',
    url: 'https://www.lillipalmer.com/about'
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
        name: 'About Us',
        item: 'https://www.lillipalmer.com/about',
      },
    ],
  };

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
      <AboutContent />
    </>
  );
}
