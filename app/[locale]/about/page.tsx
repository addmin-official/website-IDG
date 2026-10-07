'use client';
import { useLocale } from '@/lib/locale-context';
import Navbar from '@/components/Navbar';
import AboutUs from '@/components/AboutUs';
import Purpose from '@/components/Purpose';
import Footer from '@/components/Footer';

export default function AboutPage() {
  const { lang, isRtl, t } = useLocale();
  const pageTitle = `${t.nav.about} | ${t.companyName}`;
  const pageDescription = t.about?.subheading || t.tagline;

  return (
    <div dir={isRtl ? 'rtl' : 'ltr'} lang={lang} className="min-h-screen bg-slate-50">
      <Navbar lang={lang} onLanguageChange={() => {}} t={t} onOpenContact={() => {}} />
      <main id="main-content" className="pt-20">
        <AboutUs t={t} isRtl={isRtl} onOpenContact={() => {}} />
        <Purpose t={t} />
      </main>
      <Footer t={t} isRtl={isRtl} onOpenContact={() => {}} />
    </div>
  );
}
