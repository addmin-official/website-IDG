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
    <div dir={isRtl ? 'rtl' : 'ltr'} lang={lang} className="min-h-screen bg-slate-50">
      <Navbar lang={lang} onLanguageChange={() => {}} t={t} onOpenContact={() => {}} />
      <main id="main-content" className="pt-20">
        <div className="max-w-7xl mx-auto px-4 md:px-6 pt-6 pb-2 space-y-3">
          <AIUseDisclosure lang={lang} />
          <div className="flex items-center justify-between flex-wrap gap-2 text-xs text-slate-500 font-mono bg-white p-3 rounded-xl border border-slate-200">
            <span>
              {lang === 'ku'
                ? 'کاتی وەڵامدانەوەی فەرمی: ٢٤ - ٤٨ کاتژمێری کارکردن'
                : lang === 'ar'
                ? 'وقت الاستجابة الرسمي: ٢٤ - ٤٨ ساعة عمل'
                : 'Official Response Protocol: 24-48 business hours'}
            </span>
            <EvidenceBadge status="verified" lang={lang} source="IDG SLA Protocol 2026" />
          </div>
        </div>
        <div id="governance-escalation">
          <ContactSection t={t} isRtl={isRtl} />
        </div>
      </main>
      <Footer t={t} isRtl={isRtl} onOpenContact={() => {}} />
    </div>
  );
}
