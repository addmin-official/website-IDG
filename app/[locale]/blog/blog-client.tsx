'use client';

import React from 'react';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Breadcrumbs from '@/components/Breadcrumbs';
import { useLocale } from '@/lib/locale-context';
import { Calendar, User, ArrowRight, ArrowLeft, Sparkles, BookOpen } from 'lucide-react';

export interface BlogPostSummary {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  author: string;
  publishedAt: string | null;
  featured: boolean;
}

interface BlogClientProps {
  locale: string;
  posts: BlogPostSummary[];
}

export default function BlogClient({ locale, posts }: BlogClientProps) {
  const { isRtl } = useLocale();
  const ArrowIcon = isRtl ? ArrowLeft : ArrowRight;

  return (
    <div
      dir={isRtl ? 'rtl' : 'ltr'}
      lang={locale}
      className="min-h-screen bg-[#060D1A] text-slate-100 flex flex-col justify-between overflow-x-hidden w-full max-w-full"
    >
      <Navbar />

      <main id="main-content" className="flex-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 w-full">
        <Breadcrumbs
          items={[
            {
              label: locale === 'ku' ? 'بلۆگ' : locale === 'ar' ? 'المدونة' : 'Blog',
            },
          ]}
        />

        <div className="mt-8 mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#102447]/60 border border-[#193B73] text-xs font-semibold text-[#60A5FA] mb-4">
            <BookOpen className="w-3.5 h-3.5" />
            <span>
              {locale === 'ku'
                ? 'دیدگا و بڵاوکراوە فەرمییەکان'
                : locale === 'ar'
                ? 'الرؤى والمنشورات الرسمية'
                : 'Official Perspectives & Editorial'}
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-4 tracking-tight">
            {locale === 'ku' ? 'بلۆگ و تێڕوانینەکان' : locale === 'ar' ? 'المدونة والرؤى' : 'Blog & Insights'}
          </h1>
          <p className="text-slate-400 text-sm sm:text-base max-w-2xl leading-relaxed">
            {locale === 'ku'
              ? 'دوایین وتارەکان، تێڕوانینە ستراتیژییەکان، و پێشکەوتنە تەکنەلۆژییەکانی دەروازەی دیجیتاڵیی عێراق لەسەر سەروەریی دیجیتاڵی و سیستەمە متمانەپێکراوەکان.'
              : locale === 'ar'
              ? 'أحدث المقالات والرؤى الاستراتيجية والتطورات التقنية من بوابة العراق الرقمية حول السيادة الرقمية والأنظمة الوطنية الموثوقة.'
              : 'Latest strategic insights, technology analysis, and national digital infrastructure perspectives from Iraq Digital Gateway.'}
          </p>
        </div>

        {posts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {posts.map((post) => (
              <article
                key={post.id}
                className="group flex flex-col justify-between bg-[#0B172E] border border-[#102447] hover:border-[#1D5BD8] rounded-2xl p-6 sm:p-7 transition-all duration-300 hover:shadow-xl hover:shadow-[#1D5BD8]/10 hover:-translate-y-1"
              >
                <div>
                  <div className="flex items-center justify-between text-xs text-slate-400 mb-4">
                    <div className="flex items-center gap-1.5">
                      <User className="w-3.5 h-3.5 text-slate-500" />
                      <span>{post.author}</span>
                    </div>
                    {post.publishedAt && (
                      <div className="flex items-center gap-1.5">
                        <Calendar className="w-3.5 h-3.5 text-slate-500" />
                        <time dateTime={post.publishedAt}>
                          {new Date(post.publishedAt).toLocaleDateString(locale === 'ar' ? 'ar-IQ' : locale === 'ku' ? 'ckb-IQ' : 'en-US', {
                            year: 'numeric',
                            month: 'short',
                            day: 'numeric',
                          })}
                        </time>
                      </div>
                    )}
                  </div>

                  {post.featured && (
                    <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-[#D97706]/15 text-[#F59E0B] border border-[#D97706]/30 mb-3">
                      <Sparkles className="w-3 h-3" />
                      {locale === 'ku' ? 'تایبەت' : locale === 'ar' ? 'مميز' : 'Featured'}
                    </span>
                  )}

                  <h2 className="text-xl font-bold text-white group-hover:text-[#60A5FA] transition-colors leading-snug mb-3">
                    {post.title}
                  </h2>

                  <p className="text-sm text-slate-300 leading-relaxed mb-6 font-normal">
                    {post.excerpt}
                  </p>
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
            ))}
          </div>
        ) : (
          <div className="rounded-2xl border border-[#102447] bg-[#0B172E]/60 p-8 sm:p-12 text-center">
            <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-[#102447] flex items-center justify-center text-[#60A5FA]">
              <BookOpen className="w-8 h-8" />
            </div>
            <h2 className="text-xl font-bold text-white mb-2">
              {locale === 'ku' ? 'بەردەوام دەبێت لەم نزیکانەدا...' : locale === 'ar' ? 'قريباً...' : 'Coming soon...'}
            </h2>
            <p className="text-sm text-slate-400 max-w-md mx-auto">
              {locale === 'ku'
                ? 'بەشی بڵاوکراوەکان لە قۆناغی ئامادەکردندایە و بەم زووانە بە بەرهەمی ناوازە دەوڵەمەند دەکرێت.'
                : locale === 'ar'
                ? 'قسم المنشورات قيد التجهيز وسيتم إطلاقه قريباً بمحتوى استراتيجي وتقني قيّم.'
                : 'Our editorial insights and publication pipeline are currently being prepared for launch.'}
            </p>
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
}
