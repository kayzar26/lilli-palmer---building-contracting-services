import { Metadata } from 'next';
import ContactContent from '@/components/pages/ContactContent';

export const metadata: Metadata = {
  title: 'Contact Us | Lilli Palmer',
  description: 'Connect with Lilli Palmer for your property vision and building requirements.',
};

export default function ContactPage() {
  return <ContactContent />;
}
