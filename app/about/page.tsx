import { Metadata } from 'next';
import AboutContent from '@/components/pages/AboutContent';

export const metadata: Metadata = {
  title: 'About Us | Lilli Palmer',
  description: 'Learn about Lilli Palmer, Dubai\'s premier destination for high-end building contracting and maintenance.',
};

export default function AboutPage() {
  return <AboutContent />;
}
