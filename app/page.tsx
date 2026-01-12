import { Metadata } from 'next';
import HomeContent from '@/components/pages/HomeContent';

export const metadata: Metadata = {
  title: 'Lilli Palmer Building Contracting',
  description: 'Lilli Palmer provides elite building contracting services including HVAC, electrical, plumbing, painting, and architectural construction.',
};

export default function HomePage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Lilli Palmer Building Contracting',
    url: 'https://www.lillipalmer.ae',
    logo: 'https://www.lillipalmer.ae/icon.png',
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+971 50 709 8676',
      contactType: 'customer service',
      areaServed: 'AE',
      availableLanguage: 'en',
    },
    sameAs: [
      // Add social profiles here if available
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <HomeContent />
    </>
  );
}
