'use client';

import React, { useState } from 'react';
import dynamic from 'next/dynamic';
import { translations, Language } from '@/lib/translations';
import Navbar from '@/components/Navbar';
import Careers from '@/components/Careers';
import Footer from '@/components/Footer';
import AIUseDisclosure from '@/components/AIUseDisclosure';
import Breadcrumbs from '@/components/Breadcrumbs';
import RelatedPages from '@/components/RelatedPages';

const ContactModal = dynamic(() => import('@/components/ContactModal'), {
  ssr: false,
});

export default function CareersClient({ locale }: { locale: string }) {
  const [isContactOpen, setIsContactOpen] = useState(false);
  const lang: Language = locale === 'ar' || locale === 'en' ? locale : 'ku';
  const isRtl = lang === 'ku' || lang === 'ar';
  const t = translations[lang] || translations.ku;

  const relatedPages = [
    {
      href: `/${lang}/about`,
      title: lang === 'ku' ? 'دەربارەی ئێمە' : lang === 'ar' ? 'من نحن' : 'About Us',
      description: lang === 'ku' ? 'فەلسەفەی کارکردن و ژینگەی ئەندازیاری لە IDG.' : lang === 'ar' ? 'فلسفة العمل والبيئة الهندسية في الشركة الأم.' : 'IDG engineering culture, values, and operating philosophy.',
    },
    {
      href: `/${lang}/stakeholders`,
      title: lang === 'ku' ? 'لایەنە ئامانجدارەکان' : lang === 'ar' ? 'الجهات المستهدفة' : 'Stakeholders & Fellowship',
      description: lang === 'ku' ? 'پێگەیاندنی بەهرە نیشتمانییەکان و بەرنامەی هاوبەشی نیشتمانی.' : lang === 'ar' ? 'بناء الكفاءات الوطنية وبرامج الزمالة المؤسسية.' : 'Talent stewardship and national engineering residencies.',
    },
    {
      href: `/${lang}/faq`,
      title: lang === 'ku' ? 'پرسیارە باوەکان' : lang === 'ar' ? 'الأسئلة الشائعة' : 'FAQ',
      description: lang === 'ku' ? 'وەڵامی پرسیارەکان سەبارەت بە پرۆسەی دامەزراندن و کارکردن.' : lang === 'ar' ? 'إرشادات التقديم ومعايير الاختيار الهندسي.' : 'Information regarding vetting, hiring, and work policies.',
    },
  ];

  return (
    <div dir={isRtl ? 'rtl' : 'ltr'} lang={lang} className="min-h-screen bg-[#060D1A] text-slate-100 overflow-x-hidden w-full max-w-full">
      <Navbar lang={lang} onLanguageChange={() => {}} t={t} onOpenContact={() => setIsContactOpen(true)} />
      <main id="main-content" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-10">
        <Breadcrumbs
          items={[
            {
              label: lang === 'ku' ? 'هەلی کار' : lang === 'ar' ? 'الوظائف' : 'Careers',
            },
          ]}
        />
        <AIUseDisclosure lang={lang} className="mb-6 max-w-4xl mx-auto" />
        <Careers t={t} isRtl={isRtl} />
        <RelatedPages pages={relatedPages} />
      </main>
      <Footer t={t} isRtl={isRtl} onOpenContact={() => setIsContactOpen(true)} />
      <ContactModal isOpen={isContactOpen} onClose={() => setIsContactOpen(false)} t={t} />
    </div>
  );
}
