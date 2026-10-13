'use client';

import React, { useState } from 'react';
import dynamic from 'next/dynamic';
import { translations, Language } from '@/lib/translations';
import Navbar from '@/components/Navbar';
import Vision2035 from '@/components/Vision2035';
import Footer from '@/components/Footer';
import Breadcrumbs from '@/components/Breadcrumbs';
import RelatedPages from '@/components/RelatedPages';

const ContactModal = dynamic(() => import('@/components/ContactModal'), {
  ssr: false,
});

export default function VisionClient({ locale }: { locale: string }) {
  const [isContactOpen, setIsContactOpen] = useState(false);
  const lang: Language = locale === 'ar' || locale === 'en' ? locale : 'ku';
  const isRtl = lang === 'ku' || lang === 'ar';
  const t = translations[lang] || translations.ku;

  const relatedPages = [
    {
      href: `/${lang}/about`,
      title: lang === 'ku' ? 'دەربارەی ئێمە' : lang === 'ar' ? 'من نحن' : 'About Us',
      description: lang === 'ku' ? 'تەلارسازی و شوناسی نیشتمانیی IDG.' : lang === 'ar' ? 'المعمارية المؤسسية والسيادية لمجموعة IDG.' : 'Corporate blueprint and foundation of IDG.',
    },
    {
      href: `/${lang}/portfolio`,
      title: lang === 'ku' ? 'پۆرتفۆلیۆ و بەرهەمەکان' : lang === 'ar' ? 'محفظة المنتجات' : 'Portfolio & Products',
      description: lang === 'ku' ? 'بەرهەمە کارپێکراوەکان بۆ بەدیهێنانی دیدگای ٢٠٣٥.' : lang === 'ar' ? 'الأنظمة التشغيلية الداعمة للرؤية الوطنية.' : 'Active sovereign systems powering the 2035 transformation.',
    },
    {
      href: `/${lang}/governance`,
      title: lang === 'ku' ? 'حوکمڕانی و دیسپلین' : lang === 'ar' ? 'الحوكمة والانضباط' : 'Governance & Discipline',
      description: lang === 'ku' ? 'چوارچێوەی بەڵگەنەویستی و خاوەندارێتیی بەرپرسیار.' : lang === 'ar' ? 'مصفوفة الحوكمة الصارمة وسلسلة الأدلة البرمجية.' : 'Evidence chains and non-delegable accountability.',
    },
  ];

  return (
    <div dir={isRtl ? 'rtl' : 'ltr'} lang={lang} className="min-h-screen bg-[#060D1A] text-slate-100 overflow-x-hidden w-full max-w-full">
      <Navbar lang={lang} onLanguageChange={() => {}} t={t} onOpenContact={() => setIsContactOpen(true)} />
      <main id="main-content">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6">
          <Breadcrumbs
            items={[
              {
                label: lang === 'ku' ? 'دیدگای ٢٠٣٥' : lang === 'ar' ? 'رؤية 2035' : 'Vision 2035',
              },
            ]}
          />
        </div>
        <Vision2035 t={t} />
        <RelatedPages pages={relatedPages} />
      </main>
      <Footer t={t} isRtl={isRtl} onOpenContact={() => setIsContactOpen(true)} />
      <ContactModal isOpen={isContactOpen} onClose={() => setIsContactOpen(false)} t={t} />
    </div>
  );
}
