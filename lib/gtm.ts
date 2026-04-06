export const GTM_ID = process.env.NEXT_PUBLIC_GTM_ID || 'GTM-TKZF3FBM';

export const pushToDataLayer = (event: string, data?: any) => {
  if (typeof window !== 'undefined' && (window as any).dataLayer) {
    (window as any).dataLayer.push({
      event,
      ...data,
    });
  }
};
