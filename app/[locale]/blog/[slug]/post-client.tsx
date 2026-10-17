'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Breadcrumbs from '@/components/Breadcrumbs';
import BlogCard, { BlogPostData } from '@/components/BlogCard';
import { useLocale } from '@/lib/locale-context';
import {
  Calendar,
  User,
  ArrowRight,
  ArrowLeft,
  Share2,
  Copy,
  Check,
  Tag,
  Sparkles,
  BookOpen,
} from 'lucide-react';

interface PostClientProps {
  locale: string;
  post: BlogPostData;
  relatedPosts: BlogPostData[];
}

export default function PostClient({ locale, post, relatedPosts }: PostClientProps) {
  const { isRtl } = useLocale();
  const ArrowIcon = isRtl ? ArrowRight : ArrowLeft;
  const [copied, setCopied] = useState(false);

  const formattedDate = post.publishedAt
    ? new Date(post.publishedAt).toLocaleDateString(
        locale === 'ar' ? 'ar-IQ' : locale === 'ku' ? 'ckb-IQ' : 'en-US',
        {
          year: 'numeric',
          month: 'long',
          day: 'numeric',
        }
      )
    : null;

  const currentUrl = typeof window !== 'undefined'
    ? window.location.href
    : `https://idggov.tech/${locale}/blog/${post.slug}`;

  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(currentUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch (err) {
      console.error('Failed to copy URL:', err);
    }
  };

  const shareToTwitter = () => {
    const text = encodeURIComponent(`${post.title} — Iraq Digital Gateway`);
    window.open(`https://twitter.com/intent/tweet?text=${text}&url=${encodeURIComponent(currentUrl)}`, '_blank');
  };

  const shareToLinkedIn = () => {
    window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(currentUrl)}`, '_blank');
  };

  const shareToWhatsApp = () => {
    const text = encodeURIComponent(`${post.title}\n${currentUrl}`);
    window.open(`https://api.whatsapp.com/send?text=${text}`, '_blank');
  };

  // Convert simple markdown headings and lists into formatted elements
  const renderFormattedContent = (content: string) => {
    const lines = content.split('\n');
    return lines.map((line, idx) => {
      const trimmed = line.trim();
      if (!trimmed) {
        return <div key={idx} className="h-4" />;
      }
      if (trimmed.startsWith('## ')) {
        return (
          <h2
            key={idx}
            className="text-2xl sm:text-3xl font-extrabold text-white mt-8 mb-4 border-b border-[#102447] pb-2 leading-tight"
          >
            {trimmed.replace('## ', '')}
          </h2>
        );
      }
      if (trimmed.startsWith('### ')) {
        return (
          <h3
            key={idx}
            className="text-xl sm:text-2xl font-bold text-[#60A5FA] mt-6 mb-3 leading-snug"
          >
            {trimmed.replace('### ', '')}
          </h3>
        );
      }
      if (trimmed.startsWith('* ') || trimmed.startsWith('- ')) {
        const itemText = trimmed.substring(2);
        return (
          <li key={idx} className="text-slate-300 leading-relaxed ms-6 list-disc my-1">
            {formatBold(itemText)}
          </li>
        );
      }
      if (/^\d+\.\s/.test(trimmed)) {
        const itemText = trimmed.replace(/^\d+\.\s/, '');
        return (
          <li key={idx} className="text-slate-300 leading-relaxed ms-6 list-decimal my-1.5">
            {formatBold(itemText)}
          </li>
        );
      }
      return (
        <p key={idx} className="text-slate-300 leading-relaxed sm:text-lg mb-4 font-normal">
          {formatBold(trimmed)}
        </p>
      );
    });
  };

  // Helper to parse **bold** text
  const formatBold = (text: string) => {
    const parts = text.split(/(\*\*.*?\*\*)/g);
    return parts.map((part, i) => {
      if (part.startsWith('**') && part.endsWith('**')) {
        return (
          <strong key={i} className="font-bold text-white">
            {part.slice(2, -2)}
          </strong>
        );
      }
      return part;
    });
  };

  return (
    <div
      dir={isRtl ? 'rtl' : 'ltr'}
      lang={locale}
      className="min-h-screen bg-[#060D1A] text-slate-100 flex flex-col justify-between overflow-x-hidden w-full max-w-full"
    >
      <Navbar />

      <main id="main-content" className="flex-1 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 w-full">
        <Breadcrumbs
          items={[
            {
              label: locale === 'ku' ? 'بلۆگ' : locale === 'ar' ? 'المدونة' : 'Blog',
              href: `/${locale}/blog`,
            },
            {
              label: post.title,
            },
          ]}
        />

        {/* Back Link */}
        <div className="mt-6 mb-8">
          <Link
            href={`/${locale}/blog`}
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-[#60A5FA] hover:text-white transition-colors"
          >
            <ArrowIcon className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
            <span>
              {locale === 'ku'
                ? 'گەڕانەوە بۆ لیستی وتارەکان'
                : locale === 'ar'
                ? 'العودة إلى قائمة المقالات'
                : 'Back to all articles'}
            </span>
          </Link>
        </div>

        {/* Article Header */}
        <header className="mb-10 pb-8 border-b border-[#102447]">
          {post.featured && (
            <div className="mb-4">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-[#D97706]/15 text-[#F59E0B] border border-[#D97706]/30">
                <Sparkles className="w-3.5 h-3.5" />
                {locale === 'ku' ? 'وتاری تایبەت' : locale === 'ar' ? 'مقال مميز' : 'Featured Article'}
              </span>
            </div>
          )}

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-tight mb-6 tracking-tight">
            {post.title}
          </h1>

          {/* Metadata Bar */}
          <div className="flex flex-wrap items-center justify-between gap-4 p-4 rounded-xl bg-[#0B172E] border border-[#102447] text-xs text-slate-300">
            <div className="flex items-center gap-4 flex-wrap">
              <div className="flex items-center gap-2">
                <User className="w-4 h-4 text-blue-400" />
                <span className="font-semibold text-white">{post.author}</span>
              </div>
              {formattedDate && (
                <div className="flex items-center gap-2 text-slate-400">
                  <Calendar className="w-4 h-4 text-slate-500" />
                  <time dateTime={post.publishedAt || ''}>{formattedDate}</time>
                </div>
              )}
            </div>

            {/* Share Controls */}
            <div className="flex items-center gap-2">
              <span className="text-slate-400 font-medium hidden sm:inline">
                {locale === 'ku' ? 'هاوبەشکردن:' : locale === 'ar' ? 'مشاركة:' : 'Share:'}
              </span>
              <button
                type="button"
                onClick={handleCopyLink}
                className="p-1.5 rounded-lg bg-[#102447] text-slate-300 hover:text-white hover:bg-[#193B73] transition-colors relative"
                title="Copy link"
                aria-label="Copy Link"
              >
                {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
              </button>
              <button
                type="button"
                onClick={shareToTwitter}
                className="px-2 py-1 rounded-lg bg-[#102447] text-slate-300 hover:text-white hover:bg-[#193B73] transition-colors font-bold text-xs"
                title="Share on X"
              >
                𝕏
              </button>
              <button
                type="button"
                onClick={shareToLinkedIn}
                className="px-2 py-1 rounded-lg bg-[#102447] text-slate-300 hover:text-white hover:bg-[#193B73] transition-colors font-bold text-xs"
                title="Share on LinkedIn"
              >
                in
              </button>
              <button
                type="button"
                onClick={shareToWhatsApp}
                className="p-1.5 rounded-lg bg-[#102447] text-emerald-400 hover:bg-[#193B73] transition-colors"
                title="Share on WhatsApp"
              >
                <Share2 className="w-4 h-4" />
              </button>
            </div>
          </div>

          {copied && (
            <div className="mt-3 p-2 rounded-lg bg-emerald-950/60 border border-emerald-800 text-emerald-300 text-xs text-center animate-in fade-in">
              {locale === 'ku'
                ? 'بەستەری وتارەکە بە سەرکەوتوویی لەبەرگیرایەوە.'
                : locale === 'ar'
                ? 'تم نسخ رابط المقال بنجاح إلى الحافظة.'
                : 'Article link successfully copied to clipboard.'}
            </div>
          )}
        </header>

        {/* Article Body */}
        <article className="prose prose-invert max-w-none mb-12">
          {post.content ? (
            renderFormattedContent(post.content)
          ) : (
            <p className="text-slate-300 text-lg leading-relaxed">{post.excerpt}</p>
          )}
        </article>

        {/* Tags */}
        {post.tags && post.tags.length > 0 && (
          <div className="mb-12 pt-6 border-t border-[#102447] flex items-center gap-2 flex-wrap">
            <span className="text-xs font-semibold text-slate-400">
              {locale === 'ku' ? 'تاگە پەیوەندیدارەکان:' : locale === 'ar' ? 'الوسوم المتعلقة:' : 'Related Tags:'}
            </span>
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="inline-flex items-center gap-1 text-xs px-2.5 py-1 rounded-md bg-[#0B172E] border border-[#102447] text-blue-300"
              >
                <Tag className="w-3 h-3 text-blue-400" />
                <span>{tag}</span>
              </span>
            ))}
          </div>
        )}

        {/* Author Bio Card */}
        <div className="mb-14 p-6 rounded-2xl bg-[#0B172E] border border-[#102447] flex items-start gap-4">
          <div className="w-12 h-12 rounded-full bg-[#102447] flex items-center justify-center text-[#60A5FA] shrink-0 font-bold text-lg">
            <User className="w-6 h-6" />
          </div>
          <div>
            <h3 className="text-base font-bold text-white mb-1">{post.author}</h3>
            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
              {locale === 'ku'
                ? 'دەستەی نووسەران و ئەندازیارانی دەروازەی دیجیتاڵیی عێراق (IDG)، کاردەکەن بۆ شیکردنەوەی ئاستەنگە تەکنەلۆژییەکان و بونیادنانی ژێرخانی سەروەری نیشتمانی.'
                : locale === 'ar'
                ? 'فريق التحرير والمهندسين في بوابة العراق الرقمية (IDG)، يعملون على صياغة الرؤى الاستراتيجية وهندسة البنية التحتية السيادية المستقلة.'
                : 'The editorial board and engineering teams at Iraq Digital Gateway (IDG), committed to architecting sovereign digital infrastructure and institutional excellence.'}
            </p>
          </div>
        </div>

        {/* Related Posts Section */}
        {relatedPosts.length > 0 && (
          <section className="pt-10 border-t border-[#102447]">
            <div className="flex items-center gap-2 mb-6">
              <BookOpen className="w-5 h-5 text-blue-400" />
              <h2 className="text-2xl font-black text-white">
                {locale === 'ku' ? 'وتارە پەیوەندیدارەکان' : locale === 'ar' ? 'مقالات ذات صلة' : 'Related Articles'}
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {relatedPosts.map((related) => (
                <BlogCard
                  key={related.id}
                  post={related}
                  locale={locale}
                  isRtl={isRtl}
                />
              ))}
            </div>
          </section>
        )}
      </main>

      <Footer />
    </div>
  );
}
