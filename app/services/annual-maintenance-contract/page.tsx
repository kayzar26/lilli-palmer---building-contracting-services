import { Metadata } from 'next';
import AnnualMaintenanceContent from '@/components/pages/AnnualMaintenanceContent';

export const metadata: Metadata = {
  title: 'Annual Maintenance Contract | Lilli Palmer',
  description: 'Secure an Annual Maintenance Contract in Dubai starting from AED 1,199. Expert 24/7 annual maintenance for essential plumbing, electrical, and AC upkeep.',
  alternates: {
    canonical: 'https://www.lillipalmer.com/services/annual-maintenance-contract',
  },
};

export default function AnnualMaintenancePage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'What is included in an annual maintenance contract?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Our annual maintenance contract covers essential maintenance for your property, including regular AC servicing, emergency plumbing, and electrical callouts available via our 24/7 annual maintenance teams.',
        },
      },
      {
        '@type': 'Question',
        name: 'Why do I need annual maintenance in Dubai?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'The demanding climate makes annual maintenance crucial to prevent major HVAC and plumbing failures. A structured annual maintenance contract ensures system longevity, reduces emergency repair costs, and guarantees 24/7 priority support.',
        },
      },
      {
        '@type': 'Question',
        name: 'Do you offer 24/7 annual maintenance emergency support?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes! Our Silver and Gold annual maintenance contracts include 24/7 annual maintenance dispatch with priority emergency response times as fast as 30 minutes.',
        },
      }
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <AnnualMaintenanceContent />
    </>
  );
}
