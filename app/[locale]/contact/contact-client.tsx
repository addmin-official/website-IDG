'use client';

import React from 'react';
import { translations, Language } from '@/lib/translations';
import Navbar from '@/components/Navbar';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import AIUseDisclosure from '@/components/AIUseDisclosure';
import EvidenceBadge from '@/components/EvidenceBadge';

export default function ContactClient({ locale }: { locale: string }) {
  const lang: Language = locale === 'ar' || locale === 'en' ? locale : 'ku';
  const isRtl = lang === 'ku' || lang === 'ar';
  const t = translations[lang] || translations.ku;

  return (
    <div dir={isRtl ? 'rtl' : 'ltr'} lang={lang} className="min-h-screen bg-[#060D1A] text-slate-100 overflow-x-hidden w-full max-w-full">
      <Navbar lang={lang} onLanguageChange={() => {}} t={t} onOpenContact={() => {}} />
      <main id="main-content" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-10">
        <AIUseDisclosure lang={lang} className="mb-6" />
        <div className="mb-6 flex items-center justify-between flex-wrap gap-2 text-xs text-slate-400 font-mono bg-[#0B172E] p-3 rounded-xl border border-[#102447]">
          <span>
            {lang === 'ku'
              ? 'کاتی وەڵامدانەوەی فەرمی: ٢٤ - ٤٨ کاتژمێری کارکردن'
              : lang === 'ar'
              ? 'وقت الاستجابة الرسمي: ٢٤ - ٤٨ ساعة عمل'
              : 'Official Response Protocol: 24-48 business hours'}
          </span>
          <EvidenceBadge status="verified" lang={lang} source="IDG SLA Protocol 2026" />
        </div>
        <section id="governance-escalation">
          <ContactSection t={t} isRtl={isRtl} />
        </section>
      </main>
      <Footer t={t} isRtl={isRtl} onOpenContact={() => {}} />
    </div>
  );
}
