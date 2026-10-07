'use client';
import { useLocale } from '@/lib/locale-context';
import Navbar from '@/components/Navbar';
import FAQ from '@/components/FAQ';
import Footer from '@/components/Footer';

export default function FAQPage() {
  const { lang, isRtl, t } = useLocale();
  const pageTitle = `${t.nav.faq} | ${t.companyName}`;
  const pageDescription = t.faq?.subheading || t.tagline;

  return (
    <div dir={isRtl ? 'rtl' : 'ltr'} lang={lang} className="min-h-screen bg-slate-50">
      <Navbar lang={lang} onLanguageChange={() => {}} t={t} onOpenContact={() => {}} />
      <main id="main-content" className="pt-20">
        <FAQ t={t} isRtl={isRtl} onOpenContact={() => {}} />
      </main>
      <Footer t={t} isRtl={isRtl} onOpenContact={() => {}} />
    </div>
  );
}
