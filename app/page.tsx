import { Metadata } from 'next';
import HomeContent from '@/components/pages/HomeContent';

export const metadata: Metadata = {
  title: 'Lilli Palmer | Renovation & Building Contracting Dubai',
  description: 'Lilli Palmer provides premium building contracting services including MEP, HVAC, electrical, plumbing, painting, and construction.',
};

export default function HomePage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'HomeAndConstructionBusiness',
    name: 'Lilli Palmer Building Contracting',
    url: 'https://www.lillipalmer.ae',
    logo: 'https://www.lillipalmer.ae/icon.png',
    image: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&q=80&w=1200',
    description: 'Lilli Palmer provides elite building contracting services including HVAC, electrical, plumbing, painting, and architectural construction in Dubai.',
    telephone: '+971 50 709 8676',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '702, Garhoud Views Building, Al Garhoud',
      addressLocality: 'Dubai',
      addressRegion: 'Dubai',
      addressCountry: 'AE',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: '25.2486',
      longitude: '55.3512',
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: [
          'Monday',
          'Tuesday',
          'Wednesday',
          'Thursday',
          'Friday',
          'Saturday'
        ],
        opens: '08:00',
        closes: '18:00',
      }
    ],
    sameAs: [
      'https://www.instagram.com/lillipalmer.ae/',
      'https://www.facebook.com/people/Lilli-Palmer-Building-Contracting/61584535720704/',
      'https://www.linkedin.com/company/lilli-palmer/',
      'https://www.tiktok.com/@lillipalmer.ae'
    ],
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '5',
      reviewCount: '19',
    },
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
