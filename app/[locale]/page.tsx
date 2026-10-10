'use client';

import React, { useState } from 'react';
import { useLocale } from '@/lib/locale-context';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import AboutUs from '@/components/AboutUs';
import Purpose from '@/components/Purpose';
import Portfolio from '@/components/Portfolio';
import Governance from '@/components/Governance';
import Stakeholders from '@/components/Stakeholders';
import Vision2035 from '@/components/Vision2035';
import Careers from '@/components/Careers';
import ContactSection from '@/components/ContactSection';
import FAQ from '@/components/FAQ';
import dynamic from 'next/dynamic';
import ScrollProgressBar from '@/components/ScrollProgressBar';
import BackToTop from '@/components/BackToTop';
import Footer from '@/components/Footer';

const ProductModal = dynamic(() => import('@/components/ProductModal'), {
  ssr: false,
});
const ContactModal = dynamic(() => import('@/components/ContactModal'), {
  ssr: false,
});

export default function LocaleHomePage() {
  const { lang, isRtl, t } = useLocale();
  const [selectedProductId, setSelectedProductId] = useState<string | null>(null);
  const [isNSWSelected, setIsNSWSelected] = useState<boolean>(false);
  const [isContactOpen, setIsContactOpen] = useState<boolean>(false);

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
      className={`min-h-screen bg-[#060D1A] text-slate-200 ${isRtl ? 'text-right' : 'text-left'} transition-all`}
      id="idg-app-root"
    >
      <ScrollProgressBar isRtl={isRtl} />

      <Navbar
        lang={lang}
        onLanguageChange={() => {}}
        t={t}
        onOpenContact={() => setIsContactOpen(true)}
      />

      <main id="main-content">
        <Hero
          t={t}
          isRtl={isRtl}
        />

        <AboutUs
          t={t}
          isRtl={isRtl}
          onOpenContact={() => setIsContactOpen(true)}
        />

        <Purpose t={t} />

        <Portfolio
          t={t}
          isRtl={isRtl}
          onSelectProduct={handleOpenProduct}
          onSelectNSW={handleOpenNSW}
        />

        <Governance t={t} isRtl={isRtl} />

        <Stakeholders
          t={t}
          isRtl={isRtl}
          onOpenContact={() => setIsContactOpen(true)}
        />

        <Vision2035 t={t} />

        <Careers t={t} isRtl={isRtl} />

        <ContactSection t={t} isRtl={isRtl} />

        <FAQ
          t={t}
          isRtl={isRtl}
          onOpenContact={() => setIsContactOpen(true)}
        />
      </main>

      <Footer
        t={t}
        isRtl={isRtl}
        onOpenContact={() => setIsContactOpen(true)}
      />

      <ProductModal
        productId={selectedProductId}
        isOpen={selectedProductId !== null || isNSWSelected}
        onClose={handleCloseModal}
        t={t}
        lang={lang}
        isNSW={isNSWSelected}
      />

      <ContactModal
        isOpen={isContactOpen}
        onClose={() => setIsContactOpen(false)}
        t={t}
      />

      <BackToTop label={t.backToTop} />
    </div>
  );
}
