'use client';
import { useLocale } from '@/lib/locale-context';
import Navbar from '@/components/Navbar';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

export default function ContactPage() {
  const { lang, isRtl, t } = useLocale();
  const pageTitle = `${t.nav.contact} | ${t.companyName}`;
  const pageDescription = t.contactSection?.subheading || t.contactSection?.introText || t.tagline;

  return (
    <div dir={isRtl ? 'rtl' : 'ltr'} lang={lang} className="min-h-screen bg-slate-50">
      <Navbar lang={lang} onLanguageChange={() => {}} t={t} onOpenContact={() => {}} />
      <main id="main-content" className="pt-20">
        <ContactSection t={t} isRtl={isRtl} />
      </main>
      <Footer t={t} isRtl={isRtl} onOpenContact={() => {}} />
    </div>
  );
}
