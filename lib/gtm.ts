export const GTM_ID = process.env.NEXT_PUBLIC_GTM_ID || 'GTM-TKZF3FBM';

export const pushToDataLayer = (event: string, data?: any) => {
  if (typeof window !== 'undefined' && (window as any).dataLayer) {
    (window as any).dataLayer.push({
      event,
      ...data,
    });
  }
};

export const formatToE164 = (phone: string): string => {
  const cleaned = phone.replace(/[^\d+]/g, '');
  if (!cleaned) return '';
  
  if (cleaned.startsWith('+')) {
    return cleaned;
  }
  if (cleaned.startsWith('00')) {
    return '+' + cleaned.slice(2);
  }
  if (cleaned.startsWith('0')) {
    return '+971' + cleaned.slice(1);
  }
  if (cleaned.startsWith('971')) {
    return '+' + cleaned;
  }
  if (cleaned.length === 9) {
    return '+971' + cleaned;
  }
  return '+' + cleaned;
};
