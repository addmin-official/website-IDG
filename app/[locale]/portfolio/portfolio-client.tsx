'use client';

import React, { useState } from 'react';
import { translations, Language } from '@/lib/translations';
import Navbar from '@/components/Navbar';
import Portfolio from '@/components/Portfolio';
import ProductModal from '@/components/ProductModal';
import ContactModal from '@/components/ContactModal';
import Footer from '@/components/Footer';

export default function PortfolioClient({ locale }: { locale: string }) {
  const [selectedProductId, setSelectedProductId] = useState<string | null>(null);
  const [isNSWSelected, setIsNSWSelected] = useState(false);
  const [isContactOpen, setIsContactOpen] = useState(false);

  const lang: Language = locale === 'ar' || locale === 'en' ? locale : 'ku';
  const isRtl = lang === 'ku' || lang === 'ar';
  const t = translations[lang] || translations.ku;

  return (
    <div dir={isRtl ? 'rtl' : 'ltr'} lang={lang} className="min-h-screen bg-slate-50">
      <Navbar lang={lang} onLanguageChange={() => {}} t={t} onOpenContact={() => setIsContactOpen(true)} />
      <main id="main-content" className="pt-20">
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
