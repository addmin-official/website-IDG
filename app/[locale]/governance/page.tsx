'use client';
import { useLocale } from '@/lib/locale-context';
import Navbar from '@/components/Navbar';
import Governance from '@/components/Governance';
import Footer from '@/components/Footer';

export default function GovernancePage() {
  const { lang, isRtl, t } = useLocale();
  const pageTitle = `${t.nav.governance} | ${t.companyName}`;
  const pageDescription = t.governance?.subheading || t.tagline;

  return (
    <div dir={isRtl ? 'rtl' : 'ltr'} lang={lang} className="min-h-screen bg-slate-50">
      <Navbar lang={lang} onLanguageChange={() => {}} t={t} onOpenContact={() => {}} />
      <main id="main-content" className="pt-20">
        <Governance t={t} isRtl={isRtl} />
      </main>
      <Footer t={t} isRtl={isRtl} onOpenContact={() => {}} />
    </div>
  );
}
