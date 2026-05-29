import { Metadata } from 'next';
import BlogContent from '@/components/pages/BlogContent';

export const metadata: Metadata = {
  title: 'Blog | Lilli Palmer',
  description: 'Read the latest insights and updates from Lilli Palmer.',
};

export default function BlogPage() {
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
        name: 'Blog',
        item: 'https://www.lillipalmer.com/blog',
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <BlogContent />
    </>
  );
}
