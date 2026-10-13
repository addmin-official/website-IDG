'use client';

import React, { useState } from 'react';
import dynamic from 'next/dynamic';
import { translations, Language } from '@/lib/translations';
import Navbar from '@/components/Navbar';
import Portfolio from '@/components/Portfolio';
import Footer from '@/components/Footer';
import Breadcrumbs from '@/components/Breadcrumbs';
import RelatedPages from '@/components/RelatedPages';

const ZaNaShowcase = dynamic(() => import('@/components/ZaNaShowcase'), {
  loading: () => <div className="h-96 bg-[#0B172E] animate-pulse rounded-2xl my-8 mx-4 border border-[#102447]/30" />,
});

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

  const relatedPages = [
    {
      href: `/${lang}/vision`,
      title: lang === 'ku' ? 'دیدگای ٢٠٣٥' : lang === 'ar' ? 'رؤية 2035' : 'Vision 2035',
      description: lang === 'ku' ? 'قۆناغەکانی گەشەپێدانی تەکنەلۆژیای نیشتمانی تا ٢٠٣٥.' : lang === 'ar' ? 'المراحل الاستراتيجية للتحول الرقمي والسيادة المؤسسية.' : 'Decade roadmap for sovereign digital and AI infrastructure.',
    },
    {
      href: `/${lang}/governance`,
      title: lang === 'ku' ? 'حوکمڕانی و شەفافیەت' : lang === 'ar' ? 'الحوكمة والامتثال' : 'Governance & Compliance',
      description: lang === 'ku' ? 'کۆنترۆڵی جێبەجێکردن و پێوەرەکانی تەلارسازیی Zero-Trust.' : lang === 'ar' ? 'معايير التدقيق ومصفوفة المساءلة لكافة المنتجات.' : 'Audit matrices and strict sovereign execution protocols.',
    },
    {
      href: `/${lang}/contact`,
      title: lang === 'ku' ? 'پەیوەندیی فەرمی' : lang === 'ar' ? 'تواصل رسمي' : 'Official Contact',
      description: lang === 'ku' ? 'پەیوەندی لەگەڵ دەستەی هاوبەشییە ستراتیژییەکانی IDG.' : lang === 'ar' ? 'بوابة التواصل مع فريق الشراكات المؤسسية والتنفيذية.' : 'Direct institutional engagement channel with IDG leadership.',
    },
  ];

  return (
    <div dir={isRtl ? 'rtl' : 'ltr'} lang={lang} className="min-h-screen bg-[#060D1A] text-slate-100 overflow-x-hidden w-full max-w-full">
      <Navbar lang={lang} onLanguageChange={() => {}} t={t} onOpenContact={() => setIsContactOpen(true)} />
      <main id="main-content">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6">
          <Breadcrumbs
            items={[
              {
                label: lang === 'ku' ? 'پۆرتفۆلیۆ' : lang === 'ar' ? 'المحفظة' : 'Portfolio',
              },
            ]}
          />
        </div>
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
        <RelatedPages pages={relatedPages} />
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
