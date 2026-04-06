"use client";

import { useEffect } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';
import { pushToDataLayer } from '@/lib/gtm';

export default function GTMPageView() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    // We wait for the Next.js transition to truly finish
    const url = pathname + (searchParams?.toString() ? `?${searchParams.toString()}` : '');
    
    // Pushing a clear page_view event to the dataLayer
    pushToDataLayer('page_view', {
      page_path: url,
      page_title: document.title,
    });
  }, [pathname, searchParams]);

  return null;
}
