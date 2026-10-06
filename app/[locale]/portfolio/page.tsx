'use client';
import { useState } from 'react';
import { useLocale } from '@/lib/locale-context';
import Navbar from '@/components/Navbar';
import Portfolio from '@/components/Portfolio';
import ProductModal from '@/components/ProductModal';
import Footer from '@/components/Footer';

export default function PortfolioPage() {
  const { lang, isRtl, t } = useLocale();
  const [selectedProductId, setSelectedProductId] = useState<string | null>(null);
  const [isNSWSelected, setIsNSWSelected] = useState(false);
  const pageTitle = `${t.nav.portfolio} | ${t.companyName}`;
  const pageDescription = t.portfolio?.subheading || t.portfolio?.headerDesc || t.tagline;

  return (
    <div dir={isRtl ? 'rtl' : 'ltr'} lang={lang} className="min-h-screen bg-slate-50">
      <title>{pageTitle}</title>
      <meta name="description" content={pageDescription} />
      <meta property="og:title" content={pageTitle} />
      <meta property="og:description" content={pageDescription} />
      <Navbar lang={lang} onLanguageChange={() => {}} t={t} onOpenContact={() => {}} />
      <main id="main-content" className="pt-20">
        <Portfolio
          t={t}
          isRtl={isRtl}
          onSelectProduct={(id) => { setIsNSWSelected(false); setSelectedProductId(id); }}
          onSelectNSW={() => { setSelectedProductId(null); setIsNSWSelected(true); }}
        />
      </main>
      <Footer t={t} isRtl={isRtl} onOpenContact={() => {}} />
      <ProductModal
        productId={selectedProductId}
        isOpen={selectedProductId !== null || isNSWSelected}
        onClose={() => { setSelectedProductId(null); setIsNSWSelected(false); }}
        t={t}
        lang={lang}
        isNSW={isNSWSelected}
      />
    </div>
  );
}
