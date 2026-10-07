'use client';
import { useLocale } from '@/lib/locale-context';
import Navbar from '@/components/Navbar';
import Careers from '@/components/Careers';
import Footer from '@/components/Footer';

export default function CareersPage() {
  const { lang, isRtl, t } = useLocale();
  const pageTitle = `${t.nav.careers} | ${t.companyName}`;
  const pageDescription = t.careers?.subheading || t.tagline;

  return (
    <div dir={isRtl ? 'rtl' : 'ltr'} lang={lang} className="min-h-screen bg-slate-50">
      <Navbar lang={lang} onLanguageChange={() => {}} t={t} onOpenContact={() => {}} />
      <main id="main-content" className="pt-20">
        <Careers t={t} isRtl={isRtl} />
      </main>
      <Footer t={t} isRtl={isRtl} onOpenContact={() => {}} />
    </div>
  );
}
