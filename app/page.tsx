import { Metadata } from 'next';
import HomeContent from '@/components/pages/HomeContent';

export const metadata: Metadata = {
  title: 'Lilli Palmer Building Contracting',
  description: 'Lilli Palmer provides elite building contracting services including HVAC, electrical, plumbing, painting, and architectural construction.',
};

export default function HomePage() {
  return <HomeContent />;
}
