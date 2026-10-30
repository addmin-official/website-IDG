import type { MetadataRoute } from 'next';

const BASE_URL = 'https://www.idggov.tech';
const LOCALES = ['ku', 'ar', 'en'] as const;

interface RouteConfig {
  path: string;
  priority: number;
  changeFrequency: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never';
  lastModified?: Date;
}

const ROUTE_CONFIGS: RouteConfig[] = [
  { path: '', priority: 1.0, changeFrequency: 'weekly' },
  { path: '/services', priority: 0.9, changeFrequency: 'weekly' },
  { path: '/products', priority: 0.95, changeFrequency: 'weekly', lastModified: new Date() },
  { path: '/products/impactiq', priority: 0.9, changeFrequency: 'weekly', lastModified: new Date() },
  { path: '/products/gateway-ai', priority: 0.9, changeFrequency: 'weekly', lastModified: new Date() },
  { path: '/products/economic-knowledge-graph', priority: 0.8, changeFrequency: 'weekly', lastModified: new Date() },
  { path: '/portfolio', priority: 0.8, changeFrequency: 'weekly' },
  { path: '/about', priority: 0.8, changeFrequency: 'monthly' },
  { path: '/team', priority: 0.8, changeFrequency: 'monthly' },
  { path: '/governance', priority: 0.8, changeFrequency: 'monthly' },
  { path: '/vision', priority: 0.8, changeFrequency: 'monthly' },
  { path: '/help', priority: 0.7, changeFrequency: 'weekly' },
  { path: '/contact', priority: 0.7, changeFrequency: 'monthly' },
  { path: '/blog', priority: 0.8, changeFrequency: 'weekly' },
  { path: '/insights', priority: 0.8, changeFrequency: 'weekly' },
  { path: '/news', priority: 0.8, changeFrequency: 'weekly' },
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
        lastModified: route.lastModified || new Date(),
        changeFrequency: route.changeFrequency,
        priority: route.priority,
        alternates: {
          languages: {
            'ckb-IQ': `${BASE_URL}/ku${route.path}`,
            ku: `${BASE_URL}/ku${route.path}`,
            'ar-IQ': `${BASE_URL}/ar${route.path}`,
            en: `${BASE_URL}/en${route.path}`,
            'x-default': `${BASE_URL}/ku${route.path}`,
          },
        },
      });
    }
  }

  return entries;
}
