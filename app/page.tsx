'use client';

import React, { useState } from 'react';
import { translations, Language } from '@/lib/translations';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Purpose from '@/components/Purpose';
import Portfolio from '@/components/Portfolio';
import Governance from '@/components/Governance';
import Stakeholders from '@/components/Stakeholders';
import Vision2035 from '@/components/Vision2035';
import ProductModal from '@/components/ProductModal';
import ContactModal from '@/components/ContactModal';
import Footer from '@/components/Footer';

export default function Home() {
  // Kurdish (Sorani) is the strictly enforced 100% primary and default language
  const [lang, setLang] = useState<Language>('ku');
  const [selectedProductId, setSelectedProductId] = useState<string | null>(null);
  const [isNSWSelected, setIsNSWSelected] = useState<boolean>(false);
  const [isContactOpen, setIsContactOpen] = useState<boolean>(false);

  const t = translations[lang];
  const isRtl = lang === 'ku' || lang === 'ar';

  const handleOpenProduct = (productId: string) => {
    setIsNSWSelected(false);
    setSelectedProductId(productId);
  };

  const handleOpenNSW = () => {
    setSelectedProductId(null);
    setIsNSWSelected(true);
  };

  const handleCloseModal = () => {
    setSelectedProductId(null);
    setIsNSWSelected(false);
  };

  return (
    <div
      dir={isRtl ? 'rtl' : 'ltr'}
      lang={lang}
      className={`min-h-screen bg-slate-50 text-slate-900 ${isRtl ? 'text-right' : 'text-left'} transition-all`}
      id="idg-app-root"
    >
      {/* Official Corporate Navigation */}
      <Navbar
        lang={lang}
        onLanguageChange={setLang}
        t={t}
        onOpenContact={() => setIsContactOpen(true)}
      />

      {/* Main Content Sections */}
      <main id="main-content">
        {/* 1. Sovereign Hero Section */}
        <Hero t={t} isRtl={isRtl} />

        {/* 2. Core Purpose (4 Pillars: هاوسەنگی، توانا، متمانە، بەردەوامی) */}
        <Purpose t={t} />

        {/* 3. Governed Portfolio & Architecture (with Header, Product Philosophy, Portfolio Assets & Strategic Initiative) */}
        <Portfolio
          t={t}
          isRtl={isRtl}
          onSelectProduct={handleOpenProduct}
          onSelectNSW={handleOpenNSW}
        />

        {/* 5. Corporate Governance Chain (Context -> Evidence -> Decision -> Impact -> Risk -> Next Step) */}
        <Governance t={t} isRtl={isRtl} />

        {/* 6. Target Stakeholders & Mandates */}
        <Stakeholders t={t} />

        {/* 7. Vision 2035 Strategic Horizon */}
        <Vision2035 t={t} />
      </main>

      {/* Corporate Footer */}
      <Footer t={t} onOpenContact={() => setIsContactOpen(true)} />

      {/* Deep Dossier Modal for Governed Portfolio Assets & Iraq NSW */}
      <ProductModal
        productId={selectedProductId}
        isOpen={selectedProductId !== null || isNSWSelected}
        onClose={handleCloseModal}
        t={t}
        lang={lang}
        isNSW={isNSWSelected}
      />

      {/* Official Institutional Contact Dialog */}
      <ContactModal
        isOpen={isContactOpen}
        onClose={() => setIsContactOpen(false)}
        t={t}
      />
    </div>
  );
}
