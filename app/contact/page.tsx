import { Metadata } from 'next';
import ContactContent from '@/components/pages/ContactContent';

export const metadata: Metadata = {
  title: 'Contact Us | Lilli Palmer',
  description: 'Connect with Lilli Palmer for your property vision and building requirements.',
  alternates: {
    canonical: 'https://www.lillipalmer.com/contact',
  },
};

export default function ContactPage() {
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
        name: 'Contact Us',
        item: 'https://www.lillipalmer.com/contact',
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <ContactContent />
    </>
  );
}
