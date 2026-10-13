'use client';

import React, { useState } from 'react';
import dynamic from 'next/dynamic';
import { translations, Language } from '@/lib/translations';
import Navbar from '@/components/Navbar';
import Stakeholders from '@/components/Stakeholders';
import Footer from '@/components/Footer';
import Breadcrumbs from '@/components/Breadcrumbs';
import RelatedPages from '@/components/RelatedPages';

const ContactModal = dynamic(() => import('@/components/ContactModal'), {
  ssr: false,
});

export default function StakeholdersClient({ locale }: { locale: string }) {
  const [isContactOpen, setIsContactOpen] = useState(false);
  const lang: Language = locale === 'ar' || locale === 'en' ? locale : 'ku';
  const isRtl = lang === 'ku' || lang === 'ar';
  const t = translations[lang] || translations.ku;

  const relatedPages = [
    {
      href: `/${lang}/about`,
      title: lang === 'ku' ? 'دەربارەی ئێمە' : lang === 'ar' ? 'من نحن' : 'About Us',
      description: lang === 'ku' ? 'تەلارسازی و مێژووی دامەزراندنی IDG لە عێراق.' : lang === 'ar' ? 'نبذة عن الشركة الأم والمعمارية السيادية للحلول الرقمية.' : 'Sovereign parent company background and architecture.',
    },
    {
      href: `/${lang}/careers`,
      title: lang === 'ku' ? 'هەلی کار و بەهرە' : lang === 'ar' ? 'الوظائف والفرص' : 'Careers & Fellowship',
      description: lang === 'ku' ? 'پەیوەندیکردن بە تیمە نیشتمانییەکان و زەمالەی ئەندازیاری.' : lang === 'ar' ? 'انضم إلى الكوادر الهندسية والزمالة الوطنية للابتكار.' : 'Join national engineering tracks and sovereign fellowship.',
    },
    {
      href: `/${lang}/contact`,
      title: lang === 'ku' ? 'پەیوەندیی فەرمی' : lang === 'ar' ? 'تواصل معنا' : 'Official Contact',
      description: lang === 'ku' ? 'دەستپێکردنی گفتوگۆی فەرمی لەگەڵ تیمی پەیوەندییە دامەزراوەییەکان.' : lang === 'ar' ? 'قنوات التنسيق مع القطاع الحكومي والشركات الاستراتيجية.' : 'Initiate formal inter-agency partnership protocols.',
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
                label: lang === 'ku' ? 'لایەنە ئامانجدارەکان' : lang === 'ar' ? 'الجهات المستهدفة' : 'Stakeholders',
              },
            ]}
          />
        </div>
        <Stakeholders t={t} isRtl={isRtl} onOpenContact={() => setIsContactOpen(true)} />
        <RelatedPages pages={relatedPages} />
      </main>
      <Footer t={t} isRtl={isRtl} onOpenContact={() => setIsContactOpen(true)} />
      <ContactModal isOpen={isContactOpen} onClose={() => setIsContactOpen(false)} t={t} />
    </div>
  );
}
