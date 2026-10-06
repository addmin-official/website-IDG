'use client';
import { useLocale } from '@/lib/locale-context';
import Navbar from '@/components/Navbar';
import Stakeholders from '@/components/Stakeholders';
import Footer from '@/components/Footer';

export default function StakeholdersPage() {
  const { lang, isRtl, t } = useLocale();
  const pageTitle = `${t.nav.stakeholders} | ${t.companyName}`;
  const pageDescription = t.stakeholders?.subheading || t.tagline;

  return (
    <div dir={isRtl ? 'rtl' : 'ltr'} lang={lang} className="min-h-screen bg-slate-50">
      <title>{pageTitle}</title>
      <meta name="description" content={pageDescription} />
      <meta property="og:title" content={pageTitle} />
      <meta property="og:description" content={pageDescription} />
      <Navbar lang={lang} onLanguageChange={() => {}} t={t} onOpenContact={() => {}} />
      <main id="main-content" className="pt-20">
        <Stakeholders t={t} isRtl={isRtl} onOpenContact={() => {}} />
      </main>
      <Footer t={t} isRtl={isRtl} onOpenContact={() => {}} />
    </div>
  );
}
