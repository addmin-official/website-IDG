'use client';

import React, { useState } from 'react';
import dynamic from 'next/dynamic';
import { translations, Language } from '@/lib/translations';
import Navbar from '@/components/Navbar';
import Governance from '@/components/Governance';
import Footer from '@/components/Footer';
import Breadcrumbs from '@/components/Breadcrumbs';
import RelatedPages from '@/components/RelatedPages';

const ContactModal = dynamic(() => import('@/components/ContactModal'), {
  ssr: false,
});

export default function GovernanceClient({ locale }: { locale: string }) {
  const [isContactOpen, setIsContactOpen] = useState(false);
  const lang: Language = locale === 'ar' || locale === 'en' ? locale : 'ku';
  const isRtl = lang === 'ku' || lang === 'ar';
  const t = translations[lang] || translations.ku;

  const relatedPages = [
    {
      href: `/${lang}/about`,
      title: lang === 'ku' ? 'دەربارەی ئێمە' : lang === 'ar' ? 'من نحن' : 'About Us',
      description: lang === 'ku' ? 'تەلارسازی و مێژووی سەروەریی دیجیتاڵیی IDG.' : lang === 'ar' ? 'الرؤية التأسيسية والمعمارية السيادية للشركة الأم.' : 'IDG corporate blueprint and sovereign digital philosophy.',
    },
    {
      href: `/${lang}/faq`,
      title: lang === 'ku' ? 'پرسیارە باوەکان' : lang === 'ar' ? 'الأسئلة الشائعة' : 'Frequently Asked Questions',
      description: lang === 'ku' ? 'وەڵامی ڕوون بۆ پرسیارەکانی حوکمڕانی و ئاسایش.' : lang === 'ar' ? 'إجابات شاملة حول آليات الحوكمة والأمن السيبراني.' : 'Detailed answers on governance models and accountability.',
    },
    {
      href: `/${lang}/legal/sovereign-data`,
      title: lang === 'ku' ? 'سەروەریی داتا' : lang === 'ar' ? 'سيادة البيانات' : 'Sovereign Data Policy',
      description: lang === 'ku' ? 'سیاسەتی مانەوەی ١٠٠٪ی داتا لەناو خاکی عێراق.' : lang === 'ar' ? 'ميثاق توطين البيانات بنسبة ١٠٠٪ داخل العراق.' : '100% in-country data residency and sovereign compliance.',
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
                label: lang === 'ku' ? 'حوکمڕانی' : lang === 'ar' ? 'الحوكمة' : 'Governance',
              },
            ]}
          />
        </div>
        <Governance t={t} isRtl={isRtl} />
        <RelatedPages pages={relatedPages} />
      </main>
      <Footer t={t} isRtl={isRtl} onOpenContact={() => setIsContactOpen(true)} />
      <ContactModal isOpen={isContactOpen} onClose={() => setIsContactOpen(false)} t={t} />
    </div>
  );
}
