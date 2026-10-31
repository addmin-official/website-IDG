import type { MetadataRoute } from 'next';
import prisma from '@/lib/prisma';
import { FALLBACK_BLOG_POSTS } from '@/lib/blog-data';
import { getAllJobPostingIds } from '@/lib/job-postings';
import { SERVICES_LIST } from '@/lib/services-data';
import { getAllTeamMemberSlugs } from '@/lib/team-data';

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
  { path: '/products/economic-knowledge-graph', priority: 0.85, changeFrequency: 'weekly', lastModified: new Date() },
  { path: '/portfolio', priority: 0.85, changeFrequency: 'weekly' },
  { path: '/about', priority: 0.8, changeFrequency: 'monthly' },
  { path: '/team', priority: 0.8, changeFrequency: 'monthly' },
  { path: '/governance', priority: 0.8, changeFrequency: 'monthly' },
  { path: '/vision', priority: 0.8, changeFrequency: 'monthly' },
  { path: '/help', priority: 0.75, changeFrequency: 'weekly' },
  { path: '/contact', priority: 0.75, changeFrequency: 'monthly' },
  { path: '/blog', priority: 0.8, changeFrequency: 'weekly' },
  { path: '/insights', priority: 0.8, changeFrequency: 'weekly' },
  { path: '/news', priority: 0.8, changeFrequency: 'weekly' },
  { path: '/careers', priority: 0.7, changeFrequency: 'weekly' },
  { path: '/faq', priority: 0.7, changeFrequency: 'weekly' },
  { path: '/stakeholders', priority: 0.65, changeFrequency: 'monthly' },
  { path: '/legal/privacy', priority: 0.4, changeFrequency: 'monthly' },
  { path: '/legal/terms', priority: 0.4, changeFrequency: 'monthly' },
  { path: '/legal/sovereign-data', priority: 0.5, changeFrequency: 'monthly' },
  { path: '/legal/accessibility', priority: 0.4, changeFrequency: 'monthly' },
  { path: '/design-system', priority: 0.3, changeFrequency: 'monthly' },
  { path: '/logo-preview', priority: 0.3, changeFrequency: 'monthly' },
];

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const entries: MetadataRoute.Sitemap = [];
  const now = new Date();

  // 1. Static Core Routes (across all 3 locales)
  for (const locale of LOCALES) {
    for (const route of ROUTE_CONFIGS) {
      entries.push({
        url: `${BASE_URL}/${locale}${route.path}`,
        lastModified: route.lastModified || now,
        changeFrequency: route.changeFrequency,
        priority: route.priority,
        alternates: {
          languages: {
            'ckb-IQ': `${BASE_URL}/ku${route.path}`,
            ku: `${BASE_URL}/ku${route.path}`,
            'ar-IQ': `${BASE_URL}/ar${route.path}`,
            ar: `${BASE_URL}/ar${route.path}`,
            en: `${BASE_URL}/en${route.path}`,
            'x-default': `${BASE_URL}/ku${route.path}`,
          },
        },
      });
    }
  }

  // 2. Dynamic Blog Posts (/blog/[slug])
  let blogSlugs: Array<{ slug: string; locale?: string; updatedAt?: Date }> = [];
  if (prisma) {
    try {
      const posts = await prisma.blogPost.findMany({
        select: { slug: true, locale: true, updatedAt: true },
      });
      if (posts.length > 0) {
        blogSlugs = posts.map((p) => ({
          slug: p.slug,
          locale: p.locale,
          updatedAt: p.updatedAt,
        }));
      }
    } catch {
      // Prisma offline or build environment, use fallbacks below
    }
  }

  if (blogSlugs.length === 0) {
    blogSlugs = FALLBACK_BLOG_POSTS.map((p) => ({
      slug: p.slug,
      locale: p.locale || 'ku',
      updatedAt: p.publishedAt ? new Date(p.publishedAt) : now,
    }));
  }

  for (const post of blogSlugs) {
    for (const locale of LOCALES) {
      const path = `/blog/${post.slug}`;
      entries.push({
        url: `${BASE_URL}/${locale}${path}`,
        lastModified: post.updatedAt || now,
        changeFrequency: 'weekly',
        priority: 0.8,
        alternates: {
          languages: {
            'ckb-IQ': `${BASE_URL}/ku${path}`,
            ku: `${BASE_URL}/ku${path}`,
            'ar-IQ': `${BASE_URL}/ar${path}`,
            ar: `${BASE_URL}/ar${path}`,
            en: `${BASE_URL}/en${path}`,
            'x-default': `${BASE_URL}/ku${path}`,
          },
        },
      });
    }
  }

  // 3. Dynamic Career Opportunities (/careers/[id])
  const jobIds = getAllJobPostingIds();
  for (const id of jobIds) {
    for (const locale of LOCALES) {
      // Base ID
      const basePath = `/careers/${id}`;
      entries.push({
        url: `${BASE_URL}/${locale}${basePath}`,
        lastModified: now,
        changeFrequency: 'weekly',
        priority: 0.7,
        alternates: {
          languages: {
            ku: `${BASE_URL}/ku${basePath}`,
            ar: `${BASE_URL}/ar${basePath}`,
            en: `${BASE_URL}/en${basePath}`,
            'x-default': `${BASE_URL}/ku${basePath}`,
          },
        },
      });

      // Localized ID suffix matching generateStaticParams
      const localizedPath = `/careers/${id}-${locale}`;
      entries.push({
        url: `${BASE_URL}/${locale}${localizedPath}`,
        lastModified: now,
        changeFrequency: 'weekly',
        priority: 0.65,
        alternates: {
          languages: {
            ku: `${BASE_URL}/ku${localizedPath}`,
            ar: `${BASE_URL}/ar${localizedPath}`,
            en: `${BASE_URL}/en${localizedPath}`,
            'x-default': `${BASE_URL}/ku${localizedPath}`,
          },
        },
      });
    }
  }

  // 4. Dynamic Technical Services (/services/[slug])
  for (const service of SERVICES_LIST) {
    for (const locale of LOCALES) {
      // Base slug
      const basePath = `/services/${service.slug}`;
      entries.push({
        url: `${BASE_URL}/${locale}${basePath}`,
        lastModified: now,
        changeFrequency: 'weekly',
        priority: 0.85,
        alternates: {
          languages: {
            ku: `${BASE_URL}/ku${basePath}`,
            ar: `${BASE_URL}/ar${basePath}`,
            en: `${BASE_URL}/en${basePath}`,
            'x-default': `${BASE_URL}/ku${basePath}`,
          },
        },
      });

      // Localized slug suffix matching generateStaticParams
      const localizedPath = `/services/${service.slug}-${locale}`;
      entries.push({
        url: `${BASE_URL}/${locale}${localizedPath}`,
        lastModified: now,
        changeFrequency: 'weekly',
        priority: 0.8,
        alternates: {
          languages: {
            ku: `${BASE_URL}/ku${localizedPath}`,
            ar: `${BASE_URL}/ar${localizedPath}`,
            en: `${BASE_URL}/en${localizedPath}`,
            'x-default': `${BASE_URL}/ku${localizedPath}`,
          },
        },
      });
    }
  }

  // 5. Dynamic Leadership Profiles (/team/[slug])
  const teamSlugs = getAllTeamMemberSlugs();
  for (const slug of teamSlugs) {
    for (const locale of LOCALES) {
      const basePath = `/team/${slug}`;
      entries.push({
        url: `${BASE_URL}/${locale}${basePath}`,
        lastModified: now,
        changeFrequency: 'monthly',
        priority: 0.7,
        alternates: {
          languages: {
            ku: `${BASE_URL}/ku${basePath}`,
            ar: `${BASE_URL}/ar${basePath}`,
            en: `${BASE_URL}/en${basePath}`,
            'x-default': `${BASE_URL}/ku${basePath}`,
          },
        },
      });

      const localizedPath = `/team/${slug}-${locale}`;
      entries.push({
        url: `${BASE_URL}/${locale}${localizedPath}`,
        lastModified: now,
        changeFrequency: 'monthly',
        priority: 0.65,
        alternates: {
          languages: {
            ku: `${BASE_URL}/ku${localizedPath}`,
            ar: `${BASE_URL}/ar${localizedPath}`,
            en: `${BASE_URL}/en${localizedPath}`,
            'x-default': `${BASE_URL}/ku${localizedPath}`,
          },
        },
      });
    }
  }

  return entries;
}
