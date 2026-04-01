import { Metadata } from 'next';
import ServicesContent from '@/components/pages/ServicesContent';

export const metadata: Metadata = {
  title: 'Our Services | Lilli Palmer',
  description: 'Explore the elite building contracting services offered by Lilli Palmer.',
  alternates: {
    canonical: 'https://www.lillipalmer.com/services',
  },
};

export default function ServicesPage() {
  return <ServicesContent />;
}
