import type { MetadataRoute } from 'next';

const BASE_URL = 'https://idggov.tech';
const LOCALES = ['ku', 'ar', 'en'] as const;

interface RouteConfig {
  path: string;
  priority: number;
  changeFrequency: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never';
}

const ROUTE_CONFIGS: RouteConfig[] = [
  { path: '', priority: 1.0, changeFrequency: 'weekly' },
  { path: '/portfolio', priority: 0.9, changeFrequency: 'weekly' },
  { path: '/about', priority: 0.8, changeFrequency: 'monthly' },
  { path: '/governance', priority: 0.8, changeFrequency: 'monthly' },
  { path: '/vision', priority: 0.8, changeFrequency: 'monthly' },
  { path: '/help', priority: 0.7, changeFrequency: 'weekly' },
  { path: '/contact', priority: 0.7, changeFrequency: 'monthly' },
  { path: '/careers', priority: 0.6, changeFrequency: 'weekly' },
  { path: '/faq', priority: 0.6, changeFrequency: 'weekly' },
  { path: '/stakeholders', priority: 0.6, changeFrequency: 'monthly' },
  { path: '/legal/privacy', priority: 0.3, changeFrequency: 'monthly' },
  { path: '/legal/terms', priority: 0.3, changeFrequency: 'monthly' },
  { path: '/legal/sovereign-data', priority: 0.3, changeFrequency: 'monthly' },
  { path: '/legal/accessibility', priority: 0.3, changeFrequency: 'monthly' },
  { path: '/design-system', priority: 0.3, changeFrequency: 'monthly' },
  { path: '/logo-preview', priority: 0.3, changeFrequency: 'monthly' },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const entries: MetadataRoute.Sitemap = [];

  for (const locale of LOCALES) {
    for (const route of ROUTE_CONFIGS) {
      entries.push({
        url: `${BASE_URL}/${locale}${route.path}`,
        lastModified: new Date(),
        changeFrequency: route.changeFrequency,
        priority: route.priority,
        alternates: {
          languages: {
            ku: `${BASE_URL}/ku${route.path}`,
            ar: `${BASE_URL}/ar${route.path}`,
            en: `${BASE_URL}/en${route.path}`,
          },
        },
      });
    }
  }

  return entries;
}

