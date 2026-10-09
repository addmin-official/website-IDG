'use client';

import React, { useState } from 'react';
import dynamic from 'next/dynamic';
import { translations, Language } from '@/lib/translations';
import Navbar from '@/components/Navbar';
import Careers from '@/components/Careers';
import Footer from '@/components/Footer';
import AIUseDisclosure from '@/components/AIUseDisclosure';

const ContactModal = dynamic(() => import('@/components/ContactModal'), {
  ssr: false,
});

export default function CareersClient({ locale }: { locale: string }) {
  const [isContactOpen, setIsContactOpen] = useState(false);
  const lang: Language = locale === 'ar' || locale === 'en' ? locale : 'ku';
  const isRtl = lang === 'ku' || lang === 'ar';
  const t = translations[lang] || translations.ku;

  return (
    <div dir={isRtl ? 'rtl' : 'ltr'} lang={lang} className="min-h-screen bg-slate-50">
      <Navbar lang={lang} onLanguageChange={() => {}} t={t} onOpenContact={() => setIsContactOpen(true)} />
      <main id="main-content" className="pt-24 max-w-7xl mx-auto px-4 md:px-6">
        <AIUseDisclosure lang={lang} className="mb-6 max-w-4xl mx-auto" />
        <Careers t={t} isRtl={isRtl} />
      </main>
      <Footer t={t} isRtl={isRtl} onOpenContact={() => setIsContactOpen(true)} />
      <ContactModal isOpen={isContactOpen} onClose={() => setIsContactOpen(false)} t={t} />
    </div>
  );
}
