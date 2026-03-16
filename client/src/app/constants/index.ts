export const CATEGORIES = [
  'technology',
  'business',
  'science',
  'health',
  'entertainment',
  'sports',
  'general',
] as const;

export const COUNTRIES = [
  { code: 'us', name: 'United States' },
  { code: 'id', name: 'Indonesia' },
  { code: 'gb', name: 'United Kingdom' },
  { code: 'au', name: 'Australia' },
  { code: 'jp', name: 'Japan' },
  { code: 'cn', name: 'China' },
  { code: 'de', name: 'Germany' },
  { code: 'fr', name: 'France' },
  { code: 'in', name: 'India' },
  { code: 'br', name: 'Brazil' },
] as const;

export type Category = (typeof CATEGORIES)[number];
