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
  
  return <BlogDetailContent blog={blog} />;
}
