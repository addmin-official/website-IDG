'use client';
import { useLocale } from '@/lib/locale-context';
import Navbar from '@/components/Navbar';
import Vision2035 from '@/components/Vision2035';
import Footer from '@/components/Footer';

export default function VisionPage() {
  const { lang, isRtl, t } = useLocale();
  const pageTitle = `${t.nav.vision} | ${t.companyName}`;
  const pageDescription = t.vision?.subheading || t.tagline;

  return (
    <div dir={isRtl ? 'rtl' : 'ltr'} lang={lang} className="min-h-screen bg-slate-50">
      <title>{pageTitle}</title>
      <meta name="description" content={pageDescription} />
      <meta property="og:title" content={pageTitle} />
      <meta property="og:description" content={pageDescription} />
      <Navbar lang={lang} onLanguageChange={() => {}} t={t} onOpenContact={() => {}} />
      <main id="main-content" className="pt-20">
        <Vision2035 t={t} />
      </main>
      <Footer t={t} isRtl={isRtl} onOpenContact={() => {}} />
    </div>
  );
}
