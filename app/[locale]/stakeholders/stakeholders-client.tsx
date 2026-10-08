'use client';

import React, { useState } from 'react';
import { translations, Language } from '@/lib/translations';
import Navbar from '@/components/Navbar';
import Stakeholders from '@/components/Stakeholders';
import ContactModal from '@/components/ContactModal';
import Footer from '@/components/Footer';

export default function StakeholdersClient({ locale }: { locale: string }) {
  const [isContactOpen, setIsContactOpen] = useState(false);
  const lang: Language = locale === 'ar' || locale === 'en' ? locale : 'ku';
  const isRtl = lang === 'ku' || lang === 'ar';
  const t = translations[lang] || translations.ku;

  return (
    <div dir={isRtl ? 'rtl' : 'ltr'} lang={lang} className="min-h-screen bg-slate-50">
      <Navbar lang={lang} onLanguageChange={() => {}} t={t} onOpenContact={() => setIsContactOpen(true)} />
      <main id="main-content" className="pt-20">
        <Stakeholders t={t} isRtl={isRtl} onOpenContact={() => setIsContactOpen(true)} />
      </main>
      <Footer t={t} isRtl={isRtl} onOpenContact={() => setIsContactOpen(true)} />
      <ContactModal isOpen={isContactOpen} onClose={() => setIsContactOpen(false)} t={t} />
    </div>
  );
}
