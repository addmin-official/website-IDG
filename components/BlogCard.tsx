'use client';

import React from 'react';
import Link from 'next/link';
import { Calendar, User, ArrowRight, ArrowLeft, Sparkles, Tag } from 'lucide-react';

export interface BlogPostData {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content?: string;
  author: string;
  publishedAt: string | null;
  featured: boolean;
  tags?: string[];
  locale?: string;
}

interface BlogCardProps {
  post: BlogPostData;
  locale: string;
  isRtl?: boolean;
  onTagClick?: (tag: string) => void;
}

export default function BlogCard({ post, locale, isRtl = false, onTagClick }: BlogCardProps) {
  const ArrowIcon = isRtl ? ArrowLeft : ArrowRight;

  const formattedDate = post.publishedAt
    ? new Date(post.publishedAt).toLocaleDateString(
        locale === 'ar' ? 'ar-IQ' : locale === 'ku' ? 'ckb-IQ' : 'en-US',
        {
          year: 'numeric',
          month: 'short',
          day: 'numeric',
        }
      )
    : null;

  return (
    <article className="group flex flex-col justify-between bg-[#0B172E] border border-[#102447] hover:border-[#1D5BD8] rounded-2xl p-6 sm:p-7 transition-all duration-300 hover:shadow-xl hover:shadow-[#1D5BD8]/10 hover:-translate-y-1">
      <div>
        <div className="flex items-center justify-between text-xs text-slate-400 mb-4 gap-2 flex-wrap">
          <div className="flex items-center gap-1.5">
            <User className="w-3.5 h-3.5 text-blue-400 shrink-0" />
            <span className="font-medium text-slate-300">{post.author}</span>
          </div>
          {formattedDate && (
            <div className="flex items-center gap-1.5 text-slate-400">
              <Calendar className="w-3.5 h-3.5 text-slate-500 shrink-0" />
              <time dateTime={post.publishedAt || ''}>{formattedDate}</time>
            </div>
          )}
        </div>

        {post.featured && (
          <div className="mb-3">
            <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-[#D97706]/15 text-[#F59E0B] border border-[#D97706]/30">
              <Sparkles className="w-3 h-3" />
              {locale === 'ku' ? 'تایبەت' : locale === 'ar' ? 'مميز' : 'Featured'}
            </span>
          </div>
        )}

        <h2 className="text-xl font-bold text-white group-hover:text-[#60A5FA] transition-colors leading-snug mb-3">
          <Link href={`/${locale}/blog/${post.slug}`}>
            {post.title}
          </Link>
        </h2>

        <p className="text-sm text-slate-300 leading-relaxed mb-6 font-normal line-clamp-3">
          {post.excerpt}
        </p>

        {post.tags && post.tags.length > 0 && (
          <div className="flex flex-wrap gap-1.5 mb-5">
            {post.tags.map((tag) => (
              <button
                key={tag}
                type="button"
                onClick={(e) => {
                  if (onTagClick) {
                    e.preventDefault();
                    onTagClick(tag);
                  }
                }}
                className={`inline-flex items-center gap-1 text-[11px] font-medium px-2 py-0.5 rounded-md transition-colors ${
                  onTagClick
                    ? 'bg-[#102447] text-slate-300 hover:bg-[#193B73] hover:text-white cursor-pointer'
                    : 'bg-[#102447] text-slate-400 cursor-default'
                }`}
              >
                <Tag className="w-2.5 h-2.5 text-blue-400" />
                <span>{tag}</span>
              </button>
            ))}
          </div>
        )}
      </div>

      <div className="pt-4 border-t border-[#102447]/60 flex items-center justify-between">
        <Link
          href={`/${locale}/blog/${post.slug}`}
          className="inline-flex items-center gap-2 text-sm font-semibold text-[#60A5FA] group-hover:text-white transition-colors"
        >
          <span>
            {locale === 'ku' ? 'درێژەی وتار' : locale === 'ar' ? 'اقرأ المزيد' : 'Read Article'}
          </span>
          <ArrowIcon className="w-4 h-4 transition-transform group-hover:translate-x-1 rtl:group-hover:-translate-x-1" />
        </Link>
      </div>
    </article>
  );
}
