'use client';

import React from 'react';
import { translations, Language } from '@/lib/translations';
import Navbar from '@/components/Navbar';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

export default function ContactClient({ locale }: { locale: string }) {
  const lang: Language = locale === 'ar' || locale === 'en' ? locale : 'ku';
  const isRtl = lang === 'ku' || lang === 'ar';
  const t = translations[lang] || translations.ku;

  return (
    <div dir={isRtl ? 'rtl' : 'ltr'} lang={lang} className="min-h-screen bg-slate-50">
      <Navbar lang={lang} onLanguageChange={() => {}} t={t} onOpenContact={() => {}} />
      <main id="main-content" className="pt-20">
        <ContactSection t={t} isRtl={isRtl} />
      </main>
      <Footer t={t} isRtl={isRtl} onOpenContact={() => {}} />
    </div>
  );
}
