import React from 'react';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import prisma from '@/lib/prisma';
import PostClient from './post-client';
import { BlogPostData } from '@/components/BlogCard';
import { getFallbackPost, getFallbackPostsByLocale, FALLBACK_BLOG_POSTS } from '@/lib/blog-data';

interface PageProps {
  params: Promise<{
    locale: string;
    slug: string;
  }>;
}

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
  return FALLBACK_BLOG_POSTS.map((p) => ({
    locale: p.locale || 'ku',
    slug: p.slug,
  }));
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
      // Fallback below
    }
  }

  // Fallback check
  if (postTitle === 'Blog Post - IDG') {
    const fallback = getFallbackPost(slug);
    if (fallback) {
      postTitle = `${fallback.title} | IDG`;
      postExcerpt = fallback.excerpt;
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
      console.warn('Could not query single post from DB, using fallback:', err);
    }
  }

  // Graceful fallback to static seed post if DB is offline or cold
  if (!post) {
    const fallback = getFallbackPost(slug);
    if (fallback) {
      post = fallback;
      relatedPosts = getFallbackPostsByLocale(locale)
        .filter((p) => p.slug !== slug)
        .slice(0, 2);
    }
  }

  if (!post) {
    notFound();
  }

  return <PostClient locale={locale} post={post} relatedPosts={relatedPosts} />;
}
