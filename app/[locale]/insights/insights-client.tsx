'use client';

import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Breadcrumbs from '@/components/Breadcrumbs';
import { useLocale } from '@/lib/locale-context';

export default function InsightsClient({ locale }: { locale: string }) {
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
              label: locale === 'ku' ? 'تێڕوانینەکان' : locale === 'ar' ? 'الرؤى والتحليلات' : 'Insights',
            },
          ]}
        />

        <div className="mt-8">
          <h1 className="text-3xl sm:text-4xl font-extrabold text-white mb-4 tracking-tight">
            {locale === 'ku' ? 'تێڕوانین و شرۆڤەی ستراتیژی' : locale === 'ar' ? 'الرؤى والتحليلات الاستراتيجية' : 'Insights & Strategic Perspectives'}
          </h1>
          <p className="text-slate-400 text-sm sm:text-base max-w-2xl mb-10">
            {locale === 'ku'
              ? 'تێڕوانینی قووڵ بۆ ژێرخانی سەروەریی دیجیتاڵی، ئاسایشی زانیاری، و داهاتووی ئابووریی عێراق.'
              : locale === 'ar'
              ? 'تحليلات معمقة للبنية التحتية الرقمية السيادية، وأمن البيانات، ومستقبل الاقتصاد الرقمي العراقي.'
              : 'Deep dives into sovereign infrastructure, zero-trust cybersecurity, and the modernization of Iraq’s digital economy.'}
          </p>

          <div className="rounded-2xl border border-[#102447] bg-[#0B172E]/60 p-8 sm:p-12 text-center">
            <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-[#102447] flex items-center justify-center text-[#60A5FA]">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>
            </div>
            <h2 className="text-xl font-bold text-white mb-2">
              {locale === 'ku' ? 'بەردەوام دەبێت لەم نزیکانەدا...' : locale === 'ar' ? 'قريباً...' : 'Coming soon...'}
            </h2>
            <p className="text-sm text-slate-400 max-w-md mx-auto">
              {locale === 'ku'
                ? 'پەڕەکانی لێکۆڵینەوە و شرۆڤەی پیشەیی پسپۆڕانی ئێمە بەم زووانە لێرە دەخرێنە ڕوو.'
                : locale === 'ar'
                ? 'أوراق البحث والتحليلات المؤسسية المتخصصة ستكون متاحة هنا قريباً.'
                : 'Research papers, executive briefs, and architectural blueprints are coming soon.'}
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
