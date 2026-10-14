'use client';

import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Breadcrumbs from '@/components/Breadcrumbs';
import { useLocale } from '@/lib/locale-context';

export default function NewsClient({ locale }: { locale: string }) {
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
              label: locale === 'ku' ? 'هەواڵەکان' : locale === 'ar' ? 'الأخبار' : 'News',
            },
          ]}
        />

        <div className="mt-8">
          <h1 className="text-3xl sm:text-4xl font-extrabold text-white mb-4 tracking-tight">
            {locale === 'ku' ? 'هەواڵ و ڕاگەیاندنە فەرمییەکان' : locale === 'ar' ? 'الأخبار والبيانات الرسمية' : 'News & Official Announcements'}
          </h1>
          <p className="text-slate-400 text-sm sm:text-base max-w-2xl mb-10">
            {locale === 'ku'
              ? 'دوایین هەواڵە دامەزراوەییەکان، دەستپێشخەرییە نیشتمانییەکان، و ڕاگەیاندنە فەرمییەکانی IDG.'
              : locale === 'ar'
              ? 'آخر البيانات المؤسسية والمبادرات الوطنية والإعلانات الرسمية الصادرة عن بوابة العراق الرقمية.'
              : 'Official press releases, partnership declarations, and milestone updates from Iraq Digital Gateway.'}
          </p>

          <div className="rounded-2xl border border-[#102447] bg-[#0B172E]/60 p-8 sm:p-12 text-center">
            <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-[#102447] flex items-center justify-center text-[#60A5FA]">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
              </svg>
            </div>
            <h2 className="text-xl font-bold text-white mb-2">
              {locale === 'ku' ? 'بەردەوام دەبێت لەم نزیکانەدا...' : locale === 'ar' ? 'قريباً...' : 'Coming soon...'}
            </h2>
            <p className="text-sm text-slate-400 max-w-md mx-auto">
              {locale === 'ku'
                ? 'ژووری هەواڵ و ڕاگەیاندنی فەرمی لە قۆناغی بڵاوکردنەوەی نوێترین بابەتەکانیدایە.'
                : locale === 'ar'
                ? 'غرفة الأخبار والبيانات الصحفية ستنشر المستجدات والاتفاقيات الرسمية هنا قريباً.'
                : 'The official press and institutional newsroom is being prepared for upcoming releases.'}
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
