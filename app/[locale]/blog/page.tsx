import React from 'react';
import type { Metadata } from 'next';
import prisma from '@/lib/prisma';
import BlogClient from './blog-client';
import { BlogPostData } from '@/components/BlogCard';

export function generateStaticParams() {
  return [{ locale: 'ku' }, { locale: 'ar' }, { locale: 'en' }];
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;

  const titles: Record<string, string> = {
    ku: 'بلۆگ و تێڕوانینە ستراتیژییەکان | دەروازەی دیجیتاڵیی عێراق (IDG)',
    ar: 'المدونة والرؤى الاستراتيجية | بوابة العراق الرقمية (IDG)',
    en: 'Blog & Strategic Insights | Iraq Digital Gateway (IDG)',
  };

  const descriptions: Record<string, string> = {
    ku: 'دوایین وتارەکان، تێڕوانینە ستراتیژییەکان، و پێشکەوتنە تەکنەلۆژییەکانی دەروازەی دیجیتاڵیی عێراق (IDG).',
    ar: 'أحدث المقالات والرؤى الاستراتيجية والتطورات التقنية من بوابة العراق الرقمية (IDG).',
    en: 'Latest strategic perspectives, technology architecture, and digital transformation insights from Iraq Digital Gateway (IDG).',
  };

  return {
    title: titles[locale] || titles.ku,
    description: descriptions[locale] || descriptions.ku,
    alternates: {
      canonical: `/${locale}/blog`,
      languages: {
        ku: `/ku/blog`,
        ar: `/ar/blog`,
        en: `/en/blog`,
      },
    },
    openGraph: {
      title: titles[locale] || titles.ku,
      description: descriptions[locale] || descriptions.ku,
      url: `https://idggov.tech/${locale}/blog`,
    },
  };
}

export default async function BlogPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  let posts: BlogPostData[] = [];

  if (prisma) {
    try {
      const dbPosts = await prisma.blogPost.findMany({
        where: { locale },
        orderBy: { publishedAt: 'desc' },
      });

      posts = dbPosts.map((p) => ({
        id: p.id,
        title: p.title,
        slug: p.slug,
        excerpt: p.excerpt,
        content: p.content,
        author: p.author || 'IDG Team',
        publishedAt: p.publishedAt ? p.publishedAt.toISOString() : null,
        featured: p.featured,
        tags: p.tags || [],
        locale: p.locale,
      }));
    } catch (err) {
      console.warn('Could not fetch posts from database, checking fallback:', err);
    }
  }

  return <BlogClient locale={locale} posts={posts} />;
}
