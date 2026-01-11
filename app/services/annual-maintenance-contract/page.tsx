import { Metadata } from 'next';
import AnnualMaintenanceContent from '@/components/pages/AnnualMaintenanceContent';

export const metadata: Metadata = {
  title: 'Annual Maintenance Contracts | Lilli Palmer',
  description: 'Comprehensive property maintenance packages starting from AED 1,199. Fully licensed building contracting support for your peace of mind.',
};

export default function AnnualMaintenancePage() {
  return <AnnualMaintenanceContent />;
}
