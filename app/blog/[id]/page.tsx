import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { BLOGS } from '@/constants';
import BlogDetailContent from '@/components/pages/BlogDetailContent';

type Props = {
  params: Promise<{ id: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const blog = BLOGS.find(b => b.id === id);
  if (!blog) return { title: 'Article Not Found' };
  
  return {
    title: `${blog.title} | Lilli Palmer`,
    description: blog.excerpt,
  };
}

export default async function BlogDetailPage({ params }: Props) {
  const { id } = await params;
  const blog = BLOGS.find(b => b.id === id);
  
  if (!blog) {
    notFound();
  }

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: blog.title,
    image: blog.image,
    datePublished: new Date(blog.date).toISOString(), // Provided date string is parsed to ISO
    author: {
      '@type': 'Person',
      name: blog.author,
    },
    description: blog.excerpt,
    publisher: {
      '@type': 'Organization',
      name: 'Lilli Palmer Building Contracting',
      logo: {
        '@type': 'ImageObject',
        url: 'https://www.lillipalmer.ae/icon.png',
      },
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `https://www.lillipalmer.ae/blog/${blog.id}`,
    },
  };
  
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <BlogDetailContent blog={blog} />
    </>
  );
}
