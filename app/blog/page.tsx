import { Metadata } from 'next';
import BlogContent from '@/components/pages/BlogContent';

export const metadata: Metadata = {
  title: 'Journal | Lilli Palmer',
  description: 'Read the latest insights and updates from Lilli Palmer.',
};

export default function BlogPage() {
  return <BlogContent />;
}
