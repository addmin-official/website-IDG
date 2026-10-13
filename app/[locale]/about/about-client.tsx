'use client';

import React, { useState } from 'react';
import dynamic from 'next/dynamic';
import { translations, Language } from '@/lib/translations';
import Navbar from '@/components/Navbar';
import AboutUs from '@/components/AboutUs';
import Footer from '@/components/Footer';
import Breadcrumbs from '@/components/Breadcrumbs';
import RelatedPages from '@/components/RelatedPages';

const Purpose = dynamic(() => import('@/components/Purpose'), {
  loading: () => <div className="h-96 bg-[#060D1A] animate-pulse rounded-2xl my-8 mx-4 border border-[#102447]/30" />,
});

const ContactModal = dynamic(() => import('@/components/ContactModal'), {
  ssr: false,
});

export default function AboutClient({ locale }: { locale: string }) {
  const [isContactOpen, setIsContactOpen] = useState(false);
  const lang: Language = locale === 'ar' || locale === 'en' ? locale : 'ku';
  const isRtl = lang === 'ku' || lang === 'ar';
  const t = translations[lang] || translations.ku;

  const relatedPages = [
    {
      href: `/${lang}/portfolio`,
      title: lang === 'ku' ? 'پۆرتفۆلیۆ و بەرهەمەکان' : lang === 'ar' ? 'محفظة المنتجات السيادية' : 'Portfolio & Products',
      description: lang === 'ku' ? 'سیستەمە پێشکەوتووەکانی وەک AI Gate و ZaNa Academy.' : lang === 'ar' ? 'استعراض الأنظمة المؤسسية ومنصات الذكاء الاصطناعي.' : 'Explore sovereign assets including AI Gate Iraq and ZaNa.',
    },
    {
      href: `/${lang}/governance`,
      title: lang === 'ku' ? 'حوکمڕانی و شەفافیەت' : lang === 'ar' ? 'الحوكمة والمساءلة' : 'Governance Matrix',
      description: lang === 'ku' ? 'ماتریکسی بەرپرسیارێتی و بنەمای خاوەنی بەرپرسیار (Accountable Owner).' : lang === 'ar' ? 'مصفوفة الحوكمة ومبدأ الجهة المسؤولة بالاسم.' : 'Institutional accountability framework and measurable KPIs.',
    },
    {
      href: `/${lang}/stakeholders`,
      title: lang === 'ku' ? 'لایەنە ئامانجدارەکان' : lang === 'ar' ? 'الجهات المستهدفة' : 'Stakeholders',
      description: lang === 'ku' ? 'مۆدێلی خزمەتگوزاری بۆ کەرتی گشتی، تایبەت، و بەهرە نیشتمانییەکان.' : lang === 'ar' ? 'أطر الشراكة المؤسسية مع القطاعين الحكومي والخاص.' : 'Operational models serving government, enterprise, and talent.',
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
                label: lang === 'ku' ? 'دەربارەی ئێمە' : lang === 'ar' ? 'من نحن' : 'About Us',
              },
            ]}
          />
        </div>
        <AboutUs t={t} isRtl={isRtl} onOpenContact={() => setIsContactOpen(true)} />
        <Purpose t={t} />
        <RelatedPages pages={relatedPages} />
      </main>
      <Footer t={t} isRtl={isRtl} onOpenContact={() => setIsContactOpen(true)} />
      <ContactModal isOpen={isContactOpen} onClose={() => setIsContactOpen(false)} t={t} />
    </div>
  );
}
