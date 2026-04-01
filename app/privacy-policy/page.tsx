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
  return <PrivacyPolicyContent />;
}
