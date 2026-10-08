import type { MetadataRoute } from 'next';

const BASE_URL = 'https://idg.iq';
const LOCALES = ['ku', 'ar', 'en'] as const;
const ROUTES = [
  '',
  '/about',
  '/governance',
  '/portfolio',
  '/stakeholders',
  '/vision',
  '/careers',
  '/contact',
  '/faq',
];

export default function sitemap(): MetadataRoute.Sitemap {
  const entries: MetadataRoute.Sitemap = [];

  for (const locale of LOCALES) {
    for (const route of ROUTES) {
      entries.push({
        url: `${BASE_URL}/${locale}${route}`,
        lastModified: new Date(),
        changeFrequency: route === '' ? 'weekly' : 'monthly',
        priority: route === '' ? 1.0 : 0.8,
        alternates: {
          languages: {
            ku: `${BASE_URL}/ku${route}`,
            ar: `${BASE_URL}/ar${route}`,
            en: `${BASE_URL}/en${route}`,
          },
        },
      });
    }
  }

  return entries;
}
