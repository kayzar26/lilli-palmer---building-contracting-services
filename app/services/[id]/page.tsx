import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { SERVICES } from '@/constants';
import ServiceDetailContent from '@/components/pages/ServiceDetailContent';

type Props = {
  params: Promise<{ id: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const service = SERVICES.find(s => s.id === id);
  if (!service) return { title: 'Service Not Found' };
  
  return {
    title: `${service.title} | Lilli Palmer`,
    description: service.description,
  };
}

export default async function ServiceDetailPage({ params }: Props) {
  const { id } = await params;
  const service = SERVICES.find(s => s.id === id);
  
  if (!service) {
    notFound();
  }
  
  return <ServiceDetailContent service={service} />;
}
