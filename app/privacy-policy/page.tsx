import { Metadata } from 'next';
import PrivacyPolicyContent from '@/components/pages/PrivacyPolicyContent';

export const metadata: Metadata = {
  title: 'Privacy Policy | Lilli Palmer Building Contracting Dubai',
  description: 'Our privacy policy outlines how Lilli Palmer Building Contracting LLC collects, uses, and protects your personal information.',
  alternates: {
    canonical: 'https://www.lillipalmer.com/privacy-policy',
  },
};

export default function PrivacyPolicyPage() {
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
        name: 'Privacy Policy',
        item: 'https://www.lillipalmer.com/privacy-policy',
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <PrivacyPolicyContent />
    </>
  );
}
