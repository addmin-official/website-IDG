'use client';

import React, { useState } from 'react';
import dynamic from 'next/dynamic';
import { translations, Language } from '@/lib/translations';
import Navbar from '@/components/Navbar';
import FAQ from '@/components/FAQ';
import Footer from '@/components/Footer';
import Breadcrumbs from '@/components/Breadcrumbs';
import RelatedPages from '@/components/RelatedPages';

const ContactModal = dynamic(() => import('@/components/ContactModal'), {
  ssr: false,
});

export default function FAQClient({ locale }: { locale: string }) {
  const [isContactOpen, setIsContactOpen] = useState(false);
  const lang: Language = locale === 'ar' || locale === 'en' ? locale : 'ku';
  const isRtl = lang === 'ku' || lang === 'ar';
  const t = translations[lang] || translations.ku;

  const relatedPages = [
    {
      href: `/${lang}/help`,
      title: lang === 'ku' ? 'ناوەندی هاوکاری و بەڵگەنامەکان' : lang === 'ar' ? 'مركز المساعدة والوثائق' : 'Help & Documentation',
      description: lang === 'ku' ? 'ڕێبەری تەکنیکی، بەڵگەنامەی فەرمی و فێرکارییە ڤیدیۆییەکان.' : lang === 'ar' ? 'الأدلة الفنية والوثائق القابلة للتنزيل والشروحات المرئية.' : 'Technical blueprints, downloadable PDFs, and tutorials.',
    },
    {
      href: `/${lang}/governance`,
      title: lang === 'ku' ? 'حوکمڕانی و دیسپلین' : lang === 'ar' ? 'الحوكمة والانضباط' : 'Governance Matrix',
      description: lang === 'ku' ? 'پێوەرەکانی ڕێکخستنی داتا و چاودێریی سیستمەکان.' : lang === 'ar' ? 'مصفوفة الحوكمة والضوابط الصارمة لسيادة البيانات.' : 'Data governance policies and sovereign security controls.',
    },
    {
      href: `/${lang}/contact`,
      title: lang === 'ku' ? 'پەیوەندیی فەرمی' : lang === 'ar' ? 'تواصل معنا' : 'Contact Us',
      description: lang === 'ku' ? 'ئەگەر پرسیارەکەت نەدۆزییەوە، ڕاستەوخۆ پەیوەندیمان پێوە بکە.' : lang === 'ar' ? 'إذا كانت لديك استفسارات إضافية، تواصل مباشرة مع فريقنا.' : 'Reach out directly for specialized institutional inquiries.',
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
                label: lang === 'ku' ? 'پرسیارە باوەکان' : lang === 'ar' ? 'الأسئلة الشائعة' : 'FAQ',
              },
            ]}
          />
        </div>
        <FAQ t={t} isRtl={isRtl} onOpenContact={() => setIsContactOpen(true)} />
        <RelatedPages pages={relatedPages} />
      </main>
      <Footer t={t} isRtl={isRtl} onOpenContact={() => setIsContactOpen(true)} />
      <ContactModal isOpen={isContactOpen} onClose={() => setIsContactOpen(false)} t={t} />
    </div>
  );
}
