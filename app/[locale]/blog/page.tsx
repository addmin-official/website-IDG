import React from 'react';
import type { Metadata } from 'next';
import prisma from '@/lib/prisma';
import BlogClient, { BlogPostSummary } from './blog-client';

export const metadata: Metadata = {
  title: 'Blog - IDG',
  description: 'Latest insights from Iraq Digital Gateway',
};

export function generateStaticParams() {
  return [{ locale: 'ku' }, { locale: 'ar' }, { locale: 'en' }];
}

export default async function BlogPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  let posts: BlogPostSummary[] = [];

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
        author: p.author || 'IDG Editorial',
        publishedAt: p.publishedAt ? p.publishedAt.toISOString() : null,
        featured: p.featured,
      }));
    } catch (err) {
      console.warn('Could not fetch posts from database, rendering fallback:', err);
    }
  }

  return <BlogClient locale={locale} posts={posts} />;
}
