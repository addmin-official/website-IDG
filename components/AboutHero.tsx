'use client';

import React from 'react';
import Link from 'next/link';
import { ShieldCheck, ArrowRight, ArrowLeft, Building2, Sparkles } from 'lucide-react';
import Button from '@/components/ui/Button';

interface AboutHeroProps {
  locale: string;
  isRtl: boolean;
  onOpenContact?: () => void;
}

export default function AboutHero({ locale, isRtl, onOpenContact }: AboutHeroProps) {
  const ArrowIcon = isRtl ? ArrowLeft : ArrowRight;

  const content = {
    ku: {
      badge: 'دەربارەی دەروازەی دیجیتاڵیی عێراق (IDG)',
      headline: 'دامەزراوەی تەکنەلۆژیای سەروەر و ستۆدیۆی وەبەرهێنانی نیشتمانی',
      description:
        'دەروازەی دیجیتاڵیی عێراق (IDG) کۆمپانیای دایکی سەربەخۆیە بۆ بونیادنانی ژێرخانی دیجیتاڵیی پارێزراو، یەکخستنی سیستەمە حکومی و بازرگانییەکان، و گۆڕینی ئاڵۆزییەکان بۆ توانای کارپێکردنی متمانەپێکراو لە سەرانسەری عێراق.',
      ctaPrimary: 'پەیوەندی بە دەستەی بەڕێوەبردن',
      ctaSecondary: 'پۆرتفۆلیۆی پڕۆژەکان',
      tagline: 'خاوەندارێتیی نیشتمانی • داتای پارێزراو • ئەندازیاریی سەردەم',
    },
    ar: {
      badge: 'عن بوابة العراق الرقمية (IDG)',
      headline: 'المؤسسة التكنولوجية السيادية واستوديو المشاريع الوطنية',
      description:
        'بوابة العراق الرقمية (IDG) هي شركة قابضة ومستقلة تعمل على بناء البنية التحتية الرقمية السيادية، وأتمتة وتوحيد المنظومات الحكومية والتجارية، وتحويل التعقيدات الإدارية إلى قدرات تشغيلية موثوقة في كافة أنحاء العراق.',
      ctaPrimary: 'التواصل مع الإدارة التنفيذية',
      ctaSecondary: 'محفظة المشاريع السيادية',
      tagline: 'ملكية وطنية • سيادة البيانات • هندسة متقدمة',
    },
    en: {
      badge: 'About Iraq Digital Gateway (IDG)',
      headline: 'Sovereign Technology Institution & National Venture Studio',
      description:
        'Iraq Digital Gateway (IDG) is an independent institutional holding company dedicated to architecting sovereign digital infrastructure, integrating mission-critical public and private systems, and turning complexity into trusted operational capability across Iraq.',
      ctaPrimary: 'Connect with Leadership',
      ctaSecondary: 'Explore Ecosystem',
      tagline: 'National Ownership • Sovereign Data • Modern Engineering',
    },
  };

  const t = content[locale as 'ku' | 'ar' | 'en'] || content.ku;

  return (
    <section className="relative pt-12 pb-16 sm:pt-20 sm:pb-24 overflow-hidden border-b border-[#102447]">
      {/* Background Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] sm:w-[900px] h-[350px] bg-gradient-to-tr from-blue-600/15 via-[#1D5BD8]/10 to-transparent rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -top-24 right-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Institutional Badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#102447]/80 border border-[#193B73] text-xs font-bold text-[#60A5FA] mb-6 shadow-sm shadow-blue-900/20">
          <ShieldCheck className="w-4 h-4 text-blue-400 shrink-0" />
          <span>{t.badge}</span>
        </div>

        {/* Main Headline */}
        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-tight sm:leading-tight mb-6 max-w-5xl mx-auto">
          {t.headline}
        </h1>

        {/* Mission Subtitle */}
        <p className="text-base sm:text-xl text-slate-300 leading-relaxed max-w-3xl mx-auto mb-8 font-normal">
          {t.description}
        </p>

        {/* Tagline Pills */}
        <div className="flex items-center justify-center gap-2 text-xs sm:text-sm font-semibold text-blue-400 mb-10">
          <Sparkles className="w-4 h-4 shrink-0" />
          <span>{t.tagline}</span>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          {onOpenContact ? (
            <Button
              variant="primary"
              size="lg"
              onClick={onOpenContact}
              className="w-full sm:w-auto px-8 py-3.5 text-sm font-bold shadow-lg shadow-blue-600/25"
              icon={<ArrowIcon className="w-4 h-4" />}
            >
              {t.ctaPrimary}
            </Button>
          ) : (
            <Link
              href={`/${locale}/contact`}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl bg-[#2563EB] hover:bg-blue-600 text-white font-bold text-sm shadow-lg shadow-blue-600/25 transition-all"
            >
              <span>{t.ctaPrimary}</span>
              <ArrowIcon className="w-4 h-4" />
            </Link>
          )}

          <Link
            href={`/${locale}/portfolio`}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-[#0B172E] hover:bg-[#102447] border border-[#193B73] text-slate-200 hover:text-white font-semibold text-sm transition-all"
          >
            <Building2 className="w-4 h-4 text-blue-400" />
            <span>{t.ctaSecondary}</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
