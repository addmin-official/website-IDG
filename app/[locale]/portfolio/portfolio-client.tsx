'use client';

import React, { useState } from 'react';
import dynamic from 'next/dynamic';
import { translations, Language } from '@/lib/translations';
import Navbar from '@/components/Navbar';
import Portfolio from '@/components/Portfolio';
import ZaNaShowcase from '@/components/ZaNaShowcase';
import Footer from '@/components/Footer';

const ProductModal = dynamic(() => import('@/components/ProductModal'), {
  ssr: false,
});
const ContactModal = dynamic(() => import('@/components/ContactModal'), {
  ssr: false,
});

export default function PortfolioClient({ locale }: { locale: string }) {
  const [selectedProductId, setSelectedProductId] = useState<string | null>(null);
  const [isNSWSelected, setIsNSWSelected] = useState(false);
  const [isContactOpen, setIsContactOpen] = useState(false);

  const lang: Language = locale === 'ar' || locale === 'en' ? locale : 'ku';
  const isRtl = lang === 'ku' || lang === 'ar';
  const t = translations[lang] || translations.ku;

  return (
    <div dir={isRtl ? 'rtl' : 'ltr'} lang={lang} className="min-h-screen bg-[#060D1A] text-slate-100 overflow-x-hidden w-full max-w-full">
      <Navbar lang={lang} onLanguageChange={() => {}} t={t} onOpenContact={() => setIsContactOpen(true)} />
      <main id="main-content">
        <Portfolio
          t={t}
          isRtl={isRtl}
          onSelectProduct={(id) => {
            setIsNSWSelected(false);
            setSelectedProductId(id);
          }}
          onSelectNSW={() => {
            setSelectedProductId(null);
            setIsNSWSelected(true);
          }}
        />
        <ZaNaShowcase
          onInspectDossier={() => {
            setIsNSWSelected(false);
            setSelectedProductId('zana');
          }}
        />
      </main>
      <Footer t={t} isRtl={isRtl} onOpenContact={() => setIsContactOpen(true)} />
      <ProductModal
        productId={selectedProductId}
        isOpen={selectedProductId !== null || isNSWSelected}
        onClose={() => {
          setSelectedProductId(null);
          setIsNSWSelected(false);
        }}
        t={t}
        lang={lang}
        isNSW={isNSWSelected}
      />
      <ContactModal isOpen={isContactOpen} onClose={() => setIsContactOpen(false)} t={t} />
    </div>
  );
}
