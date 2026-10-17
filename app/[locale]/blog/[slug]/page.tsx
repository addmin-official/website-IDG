import React from 'react';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import prisma from '@/lib/prisma';
import PostClient from './post-client';
import { BlogPostData } from '@/components/BlogCard';

interface PageProps {
  params: Promise<{
    locale: string;
    slug: string;
  }>;
}

// Fallback known slugs for static pre-rendering
const STATIC_SEED_SLUGS = [
  { locale: 'ku', slug: 'tech-delivery-iraq-ku' },
  { locale: 'ku', slug: 'internet-digitalization-iraq-ku' },
  { locale: 'ku', slug: 'digital-education-zana-academy-ku' },
  { locale: 'ku', slug: 'idg-venture-studio-model-ku' },
  { locale: 'ku', slug: 'sovereign-tech-infrastructure-ku' },
  { locale: 'ar', slug: 'tech-delivery-iraq-ar' },
  { locale: 'ar', slug: 'internet-digitalization-iraq-ar' },
  { locale: 'ar', slug: 'digital-education-zana-academy-ar' },
  { locale: 'ar', slug: 'idg-venture-studio-model-ar' },
  { locale: 'ar', slug: 'sovereign-tech-infrastructure-ar' },
  { locale: 'en', slug: 'tech-delivery-iraq-en' },
  { locale: 'en', slug: 'internet-digitalization-iraq-en' },
  { locale: 'en', slug: 'digital-education-zana-academy-en' },
  { locale: 'en', slug: 'idg-venture-studio-model-en' },
  { locale: 'en', slug: 'sovereign-tech-infrastructure-en' },
];

export async function generateStaticParams() {
  if (prisma) {
    try {
      const posts = await prisma.blogPost.findMany({
        select: { locale: true, slug: true },
      });
      if (posts.length > 0) {
        return posts.map((p) => ({
          locale: p.locale,
          slug: p.slug,
        }));
      }
    } catch (err) {
      console.warn('Prisma not available for generateStaticParams, using static slugs:', err);
    }
  }
  return STATIC_SEED_SLUGS;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale, slug } = await params;

  let postTitle = 'Blog Post - IDG';
  let postExcerpt = 'Latest insights from Iraq Digital Gateway';

  if (prisma) {
    try {
      const post = await prisma.blogPost.findUnique({
        where: { slug },
      });
      if (post) {
        postTitle = `${post.title} | IDG`;
        postExcerpt = post.excerpt;
      }
    } catch {
      // Fallback
    }
  }

  return {
    title: postTitle,
    description: postExcerpt,
    alternates: {
      canonical: `/${locale}/blog/${slug}`,
    },
    openGraph: {
      title: postTitle,
      description: postExcerpt,
      url: `https://idggov.tech/${locale}/blog/${slug}`,
      type: 'article',
      images: [
        {
          url: '/og-image.svg',
          width: 1200,
          height: 630,
          alt: postTitle,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: postTitle,
      description: postExcerpt,
    },
  };
}

export default async function SingleBlogPostPage({ params }: PageProps) {
  const { locale, slug } = await params;

  let post: BlogPostData | null = null;
  let relatedPosts: BlogPostData[] = [];

  if (prisma) {
    try {
      const dbPost = await prisma.blogPost.findUnique({
        where: { slug },
      });

      if (dbPost) {
        post = {
          id: dbPost.id,
          title: dbPost.title,
          slug: dbPost.slug,
          excerpt: dbPost.excerpt,
          content: dbPost.content,
          author: dbPost.author || 'IDG Team',
          publishedAt: dbPost.publishedAt ? dbPost.publishedAt.toISOString() : null,
          featured: dbPost.featured,
          tags: dbPost.tags || [],
          locale: dbPost.locale,
        };

        // Fetch related posts from the same locale
        const dbRelated = await prisma.blogPost.findMany({
          where: {
            locale: dbPost.locale,
            slug: { not: slug },
          },
          take: 2,
          orderBy: { publishedAt: 'desc' },
        });

        relatedPosts = dbRelated.map((r) => ({
          id: r.id,
          title: r.title,
          slug: r.slug,
          excerpt: r.excerpt,
          author: r.author || 'IDG Team',
          publishedAt: r.publishedAt ? r.publishedAt.toISOString() : null,
          featured: r.featured,
          tags: r.tags || [],
          locale: r.locale,
        }));
      }
    } catch (err) {
      console.warn('Could not query single post from DB:', err);
    }
  }

  if (!post) {
    notFound();
  }

  return <PostClient locale={locale} post={post} relatedPosts={relatedPosts} />;
}
