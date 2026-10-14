import type { MetadataRoute } from 'next';

const BASE_URL = 'https://idggov.tech';

const CRAWLERS = [
  '*',
  'Googlebot',
  'Bingbot',
  'YandexBot',
  'DuckDuckBot',
  'Baiduspider',
];

export default function robots(): MetadataRoute.Robots {
  return {
    rules: CRAWLERS.map((crawler) => ({
      userAgent: crawler,
      allow: '/',
      disallow: ['/api/', '/_next/', '/admin/'],
    })),
    sitemap: `${BASE_URL}/sitemap.xml`,
    host: BASE_URL,
  };
}

