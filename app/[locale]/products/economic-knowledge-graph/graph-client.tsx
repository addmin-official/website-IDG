'use client';

import React from 'react';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Breadcrumbs from '@/components/Breadcrumbs';
import EconomicKnowledgeGraph from '@/src/features/intelligence/components/EconomicKnowledgeGraph';
import { Locale } from '@/src/features/intelligence/types';
import { ArrowLeft, ArrowRight, Network } from 'lucide-react';

interface GraphClientProps {
  locale: Locale;
}

const CLIENT_STRINGS = {
  ku: {
    badge: 'سیستەمی شیکاریی سەروەری نیشتمانی • IDG-INT-001',
    title: 'تۆڕی زانیاری ئابووری',
    subtitle: 'نیگارکێشانی پەیوەندی نێوان بەندەرەکان، گومرگ، کاڵا ستراتیژییەکان و بڕیارە مەنەفیستییە فیدراڵییەکان',
    portfolioLabel: 'پۆرتفۆلیۆ',
    currentLabel: 'تۆڕی زانیاری ئابووری',
    backBtn: 'گەڕانەوە بۆ پۆرتفۆلیۆ',
  },
  ar: {
    badge: 'منظومة التحليلات السيادية الوطنية • IDG-INT-001',
    title: 'الشبكة المعرفية الاقتصادية',
    subtitle: 'نظام تتبع الترابط المؤسسي والمنافذ والسلع اللوجستية والسياسات الاتحادية',
    portfolioLabel: 'المحفظة',
    currentLabel: 'الشبكة المعرفية الاقتصادية',
    backBtn: 'العودة إلى المحفظة',
  },
  en: {
    badge: 'SOVEREIGN NATIONAL ANALYTICS • IDG-INT-001',
    title: 'Economic Knowledge Graph',
    subtitle: 'Mapping relationships between maritime ports, customs terminals, strategic commodities, and federal trade policies',
    portfolioLabel: 'Portfolio',
    currentLabel: 'Economic Knowledge Graph',
    backBtn: 'Back to Portfolio',
  },
};

export default function EconomicKnowledgeGraphClient({ locale }: GraphClientProps) {
  const isRtl = locale === 'ku' || locale === 'ar';
  const str = CLIENT_STRINGS[locale] || CLIENT_STRINGS.en;
  const BackArrow = isRtl ? ArrowRight : ArrowLeft;

  return (
    <div className="min-h-screen bg-[#060D1A] text-slate-100 flex flex-col selection:bg-emerald-500/30 selection:text-emerald-300">
      <Navbar />

      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16">
        {/* Navigation Breadcrumb */}
        <Breadcrumbs
          items={[
            { label: str.portfolioLabel, href: `/${locale}/portfolio` },
            { label: str.currentLabel },
          ]}
        />

        {/* Header Hero Section */}
        <div className="mb-8 space-y-4">
          <div className="flex items-center justify-between flex-wrap gap-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-semibold tracking-wide">
              <Network className="w-3.5 h-3.5" />
              <span>{str.badge}</span>
            </div>

            <Link
              href={`/${locale}/portfolio`}
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-400 hover:text-emerald-400 transition-colors"
            >
              <BackArrow className="w-3.5 h-3.5" />
              <span>{str.backBtn}</span>
            </Link>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            {str.title}
          </h1>

          <p className="text-base sm:text-lg text-slate-300 max-w-3xl leading-relaxed">
            {str.subtitle}
          </p>
        </div>

        {/* Interactive Knowledge Graph */}
        <EconomicKnowledgeGraph locale={locale} />
      </main>

      <Footer />
    </div>
  );
}
