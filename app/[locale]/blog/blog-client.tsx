'use client';

import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Breadcrumbs from '@/components/Breadcrumbs';
import { useLocale } from '@/lib/locale-context';

export default function BlogClient({ locale }: { locale: string }) {
  const { isRtl } = useLocale();

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

        <div className="mt-8">
          <h1 className="text-3xl sm:text-4xl font-extrabold text-white mb-4 tracking-tight">
            {locale === 'ku' ? 'بلۆگ و تێڕوانینەکان' : locale === 'ar' ? 'المدونة والرؤى' : 'Blog & Insights'}
          </h1>
          <p className="text-slate-400 text-sm sm:text-base max-w-2xl mb-10">
            {locale === 'ku'
              ? 'دوایین وتارەکان، تێڕوانینە ستراتیژییەکان، و پێشکەوتنە تەکنەلۆژییەکانی دەروازەی دیجیتاڵیی عێراق.'
              : locale === 'ar'
              ? 'أحدث المقالات والرؤى الاستراتيجية والتطورات التقنية من بوابة العراق الرقمية.'
              : 'Latest strategic insights, technology analysis, and national digital perspectives from Iraq Digital Gateway.'}
          </p>

          <div className="rounded-2xl border border-[#102447] bg-[#0B172E]/60 p-8 sm:p-12 text-center">
            <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-[#102447] flex items-center justify-center text-[#60A5FA]">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
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
        </div>
      </main>

      <Footer />
    </div>
  );
}
