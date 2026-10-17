'use client';

import React, { useState } from 'react';
import dynamic from 'next/dynamic';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Breadcrumbs from '@/components/Breadcrumbs';
import ServiceCard from '@/components/ServiceCard';
import { ServiceItem, SERVICES_LIST } from '@/lib/services-data';
import { translations, Language } from '@/lib/translations';
import { useLocale } from '@/lib/locale-context';
import {
  Server,
  ShieldCheck,
  Fingerprint,
  Brain,
  GraduationCap,
  Rocket,
  CheckCircle2,
  ArrowRight,
  ArrowLeft,
  Sparkles,
  Layers,
  Headphones,
  Lock,
  Building,
} from 'lucide-react';

const ContactModal = dynamic(() => import('@/components/ContactModal'), {
  ssr: false,
});

interface ServiceClientProps {
  locale: string;
  service: ServiceItem;
  relatedServices: ServiceItem[];
}

const iconMap = {
  Server,
  Shield: ShieldCheck,
  Fingerprint,
  Brain,
  GraduationCap,
  Rocket,
};

export default function ServiceClient({ locale, service, relatedServices }: ServiceClientProps) {
  const [isContactOpen, setIsContactOpen] = useState(false);
  const { isRtl } = useLocale();
  const ArrowIcon = isRtl ? ArrowRight : ArrowLeft;

  const langKey = (locale === 'ar' || locale === 'en' ? locale : 'ku') as 'ku' | 'ar' | 'en';
  const tData = translations[langKey] || translations.ku;

  const IconComponent = iconMap[service.iconName] || Server;

  const title = service.title[langKey];
  const subtitle = service.subtitle[langKey];
  const desc = service.description[langKey];
  const badge = service.badge[langKey];
  const features = service.features[langKey];
  const highlights = service.highlights[langKey];
  const fullContent = service.fullContent[langKey];

  // Helper to render simple markdown content
  const renderContentLines = (content: string) => {
    return content.split('\n').map((line, idx) => {
      const trimmed = line.trim();
      if (!trimmed) return <div key={idx} className="h-4" />;
      if (trimmed.startsWith('## ')) {
        return (
          <h2 key={idx} className="text-2xl sm:text-3xl font-extrabold text-white mt-8 mb-4 border-b border-[#102447] pb-2">
            {trimmed.replace('## ', '')}
          </h2>
        );
      }
      if (trimmed.startsWith('### ')) {
        return (
          <h3 key={idx} className="text-xl sm:text-2xl font-bold text-[#60A5FA] mt-6 mb-3">
            {trimmed.replace('### ', '')}
          </h3>
        );
      }
      if (/^\d+\.\s/.test(trimmed)) {
        const itemText = trimmed.replace(/^\d+\.\s/, '');
        return (
          <li key={idx} className="text-slate-300 leading-relaxed ms-6 list-decimal my-1.5 sm:text-base">
            {formatBold(itemText)}
          </li>
        );
      }
      if (trimmed.startsWith('* ') || trimmed.startsWith('- ')) {
        return (
          <li key={idx} className="text-slate-300 leading-relaxed ms-6 list-disc my-1 sm:text-base">
            {formatBold(trimmed.substring(2))}
          </li>
        );
      }
      return (
        <p key={idx} className="text-slate-300 leading-relaxed sm:text-base mb-4">
          {formatBold(trimmed)}
        </p>
      );
    });
  };

  const formatBold = (text: string) => {
    const parts = text.split(/(\*\*.*?\*\*)/g);
    return parts.map((part, i) => {
      if (part.startsWith('**') && part.endsWith('**')) {
        return <strong key={i} className="font-bold text-white">{part.slice(2, -2)}</strong>;
      }
      return part;
    });
  };

  return (
    <div
      dir={isRtl ? 'rtl' : 'ltr'}
      lang={locale}
      className="min-h-screen bg-[#060D1A] text-slate-100 overflow-x-hidden w-full max-w-full flex flex-col justify-between"
    >
      <Navbar t={tData} lang={langKey} onOpenContact={() => setIsContactOpen(true)} />

      <main id="main-content" className="flex-1 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10 w-full">
        {/* Breadcrumbs */}
        <Breadcrumbs
          items={[
            {
              label: locale === 'ku' ? 'خزمەتگوزارییەکان' : locale === 'ar' ? 'الخدمات' : 'Services',
              href: `/${locale}/services`,
            },
            {
              label: title,
            },
          ]}
        />

        {/* Back Link */}
        <div className="mt-6 mb-8">
          <Link
            href={`/${locale}/services`}
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-[#60A5FA] hover:text-white transition-colors"
          >
            <ArrowIcon className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
            <span>
              {locale === 'ku'
                ? 'گەڕانەوە بۆ لیستی خزمەتگوزارییەکان'
                : locale === 'ar'
                ? 'العودة إلى قائمة الخدمات'
                : 'Back to all services'}
            </span>
          </Link>
        </div>

        {/* Hero Header Card */}
        <header className="bg-[#0B172E] border border-[#102447] rounded-3xl p-8 sm:p-12 mb-12 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 end-0 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="flex items-center gap-3 mb-6">
            <div className="w-16 h-16 rounded-2xl bg-blue-500/15 border border-blue-500/30 text-[#60A5FA] flex items-center justify-center shrink-0">
              <IconComponent className="w-8 h-8" />
            </div>
            <span className="text-xs font-bold px-3 py-1 rounded-full bg-[#102447] text-blue-300 border border-[#193B73]">
              {badge}
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-tight mb-4 tracking-tight">
            {title}
          </h1>

          <p className="text-sm sm:text-lg font-semibold text-blue-400 mb-4 leading-relaxed">
            {subtitle}
          </p>

          <p className="text-xs sm:text-base text-slate-300 leading-relaxed font-normal mb-8 max-w-3xl">
            {desc}
          </p>

          {/* Highlights Metrics Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-5 rounded-2xl bg-[#060D1A] border border-[#102447] mb-8">
            {highlights.map((h, i) => (
              <div key={i} className="text-center p-2">
                <span className="text-xs text-slate-400 block mb-1 font-medium">{h.label}</span>
                <span className="text-base sm:text-lg font-black text-white font-mono">{h.value}</span>
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <button
              type="button"
              onClick={() => setIsContactOpen(true)}
              className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl bg-[#2563EB] hover:bg-blue-600 text-white font-bold text-sm shadow-lg shadow-blue-600/25 transition-all cursor-pointer"
            >
              <Headphones className="w-4 h-4" />
              <span>
                {locale === 'ku'
                  ? 'داواکردنی ڕاوێژی تەکنیکی'
                  : locale === 'ar'
                  ? 'طلب استشارة معمارية'
                  : 'Request Technical Assessment'}
              </span>
              <ArrowIcon className="w-4 h-4" />
            </button>

            <Link
              href={`/${locale}/contact`}
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-[#102447] hover:bg-[#193B73] border border-[#193B73] text-slate-200 hover:text-white font-semibold text-sm transition-all"
            >
              <span>{locale === 'ku' ? 'پەیوەندیی فەرمی' : locale === 'ar' ? 'التواصل الرسمي' : 'Official Channels'}</span>
            </Link>
          </div>
        </header>

        {/* Features Checklist Grid */}
        <section className="mb-14">
          <div className="flex items-center gap-2 mb-6">
            <CheckCircle2 className="w-5 h-5 text-blue-400" />
            <h2 className="text-2xl font-black text-white">
              {locale === 'ku' ? 'تایبەتمەندییە سەرەکییەکان' : locale === 'ar' ? 'المزايا التشغيلية الرئيسية' : 'Core Capabilities & Features'}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {features.map((feat, idx) => (
              <div
                key={idx}
                className="flex items-start gap-3 p-5 rounded-2xl bg-[#0B172E] border border-[#102447] hover:border-blue-500/40 transition-colors"
              >
                <div className="w-6 h-6 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 flex items-center justify-center shrink-0 mt-0.5 font-mono text-xs font-bold">
                  {idx + 1}
                </div>
                <span className="text-sm sm:text-base text-slate-200 font-medium leading-relaxed">{feat}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Detailed Architecture Section */}
        <section className="mb-14 p-8 sm:p-10 rounded-3xl bg-[#0B172E] border border-[#102447]">
          <div className="flex items-center gap-2 mb-4">
            <Layers className="w-5 h-5 text-blue-400" />
            <span className="text-xs font-bold text-blue-400 uppercase tracking-widest">
              SOVEREIGN ARCHITECTURE
            </span>
          </div>

          <div className="prose prose-invert max-w-none">
            {renderContentLines(fullContent)}
          </div>
        </section>

        {/* Related Services */}
        {relatedServices.length > 0 && (
          <section className="pt-10 border-t border-[#102447] mb-12">
            <div className="flex items-center gap-2 mb-8">
              <Sparkles className="w-5 h-5 text-blue-400" />
              <h2 className="text-2xl font-black text-white">
                {locale === 'ku' ? 'خزمەتگوزارییە پەیوەندیدارەکان' : locale === 'ar' ? 'خدمات ذات صلة' : 'Related Sovereign Services'}
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {relatedServices.map((rel) => (
                <ServiceCard
                  key={rel.id}
                  service={rel}
                  locale={locale}
                  isRtl={isRtl}
                />
              ))}
            </div>
          </section>
        )}
      </main>

      <Footer t={tData} isRtl={isRtl} onOpenContact={() => setIsContactOpen(true)} />

      <ContactModal
        isOpen={isContactOpen}
        onClose={() => setIsContactOpen(false)}
        t={tData}
      />
    </div>
  );
}
