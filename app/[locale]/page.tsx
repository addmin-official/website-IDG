'use client';

import React, { useState } from 'react';
import { useLocale } from '@/lib/locale-context';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import RecentlyViewed from '@/components/RecentlyViewed';
import AboutUs from '@/components/AboutUs';
import dynamic from 'next/dynamic';
import ScrollProgressBar from '@/components/ScrollProgressBar';
import BackToTop from '@/components/BackToTop';
import Footer from '@/components/Footer';

const Purpose = dynamic(() => import('@/components/Purpose'), {
  loading: () => <div className="h-96 bg-[#060D1A] animate-pulse rounded-2xl my-8 mx-4 border border-[#102447]/30" />,
});
const Portfolio = dynamic(() => import('@/components/Portfolio'), {
  loading: () => <div className="h-96 bg-[#0B172E] animate-pulse rounded-2xl my-8 mx-4 border border-[#102447]/30" />,
});
const Governance = dynamic(() => import('@/components/Governance'), {
  loading: () => <div className="h-96 bg-[#060D1A] animate-pulse rounded-2xl my-8 mx-4 border border-[#102447]/30" />,
});
const Stakeholders = dynamic(() => import('@/components/Stakeholders'), {
  loading: () => <div className="h-96 bg-[#0B172E] animate-pulse rounded-2xl my-8 mx-4 border border-[#102447]/30" />,
});
const Vision2035 = dynamic(() => import('@/components/Vision2035'), {
  loading: () => <div className="h-96 bg-[#060D1A] animate-pulse rounded-2xl my-8 mx-4 border border-[#102447]/30" />,
});
const Careers = dynamic(() => import('@/components/Careers'), {
  loading: () => <div className="h-96 bg-[#0B172E] animate-pulse rounded-2xl my-8 mx-4 border border-[#102447]/30" />,
});
const ContactSection = dynamic(() => import('@/components/ContactSection'), {
  loading: () => <div className="h-96 bg-[#060D1A] animate-pulse rounded-2xl my-8 mx-4 border border-[#102447]/30" />,
});
const FAQ = dynamic(() => import('@/components/FAQ'), {
  loading: () => <div className="h-96 bg-[#0B172E] animate-pulse rounded-2xl my-8 mx-4 border border-[#102447]/30" />,
});

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
      className="min-h-screen bg-[#060D1A] text-slate-200 text-start transition-all overflow-x-hidden w-full max-w-full"
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

        {/* SEO Disambiguation & Entity Authority Strip */}
        <section className="py-8 bg-[#0A141F] border-y border-[#102447]" id="seo-entity-authority">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <p className="text-sm text-slate-400 leading-relaxed max-w-4xl mx-auto">
              {lang === 'ku' && (
                <>
                  دەروازەی دیجیتاڵیی عێراق (Iraq Digital Gateway — IDG) 
                  کۆمپانیای دایکی سەروەریی تەکنەلۆژییە لە عێراق کە 
                  ژێرخانی دیجیتاڵی، سەروەریی داتا، ژیریی دەستکردی کارپێکراو، 
                  و چارەسەری دامەزراوەیی پێشکەش دەکات. لە هەولێر، 
                  هەرێمی کوردستان دامەزراوە.
                </>
              )}
              {lang === 'ar' && (
                <>
                  بوابة العراق الرقمية (IDG) هي الشركة الأم السيادية 
                  للتكنولوجيا في العراق، وتقدم البنية التحتية الرقمية 
                  وسيادة البيانات والذكاء الاصطناعي التطبيقي والحلول 
                  المؤسسية. يقع مقرها في أربيل، إقليم كردستان.
                </>
              )}
              {lang === 'en' && (
                <>
                  Iraq Digital Gateway (IDG) is Iraq&apos;s sovereign parent 
                  technology company providing digital infrastructure, 
                  data sovereignty, applied AI, and institutional 
                  solutions. Headquartered in Erbil, Kurdistan Region.
                </>
              )}
            </p>
          </div>
        </section>

        <RecentlyViewed />

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
