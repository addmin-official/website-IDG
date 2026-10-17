'use client';

import React from 'react';
import Link from 'next/link';
import { Layers, ArrowRight, ArrowLeft, ShieldCheck, Sparkles, Building } from 'lucide-react';
import Button from '@/components/ui/Button';

interface ServicesHeroProps {
  locale: string;
  isRtl: boolean;
  onOpenContact?: () => void;
}

export default function ServicesHero({ locale, isRtl, onOpenContact }: ServicesHeroProps) {
  const ArrowIcon = isRtl ? ArrowLeft : ArrowRight;

  const content = {
    ku: {
      badge: 'خزمەتگوزارییە دامەزراوەییەکان • Sovereign Solutions',
      title: 'چارەسەرە دیجیتاڵییە پێشکەوتووەکانمان بۆ عێراق',
      description:
        'شەش خزمەتگوزاری و پلاتفۆرمی سەرەکی بۆ بەدیجیتاڵیکردنی پرۆسە حکومییەکان، دەستەبەرکردنی ئاسایشی سایبەری، ناسنامەی پارێزراو، ژیریی دەستکرد، پەروەردەی پسپۆڕان، و وەبەرهێنانی سەروەر.',
      tagline: 'بەردەوامیی ٩٩.٩٨٪ • تەلارسازیی Zero-Trust • خاوەندارێتیی نیشتمانی',
      ctaContact: 'داواکردنی ڕاوێژی تەکنیکی',
      ctaExplore: 'گەڕان لە خزمەتگوزارییەکان',
    },
    ar: {
      badge: 'الخدمات والحلول المؤسسية • Sovereign Solutions',
      title: 'حلولنا الرقمية المتقدمة لتمكين العراق',
      description:
        'ست منظومات وحلول رئيسية مصممة لأتمتة العمليات الحكومية، الدفاع السيبراني الشامل، الهوية الرقمية السيادية، الذكاء الاصطناعي التطبيقي، أكاديمية بناء المهارات، واستوديو المشاريع الوطنية.',
      tagline: 'استمرارية 99.98% • نموذج انعدام الثقة • ملكية وطنية 100%',
      ctaContact: 'طلب استشارة معمارية',
      ctaExplore: 'استعراض الخدمات',
    },
    en: {
      badge: 'Institutional Services • Sovereign Solutions',
      title: 'Our Sovereign Digital Solutions for Iraq',
      description:
        'Six flagship institutional platforms engineering government cloud infrastructure, zero-trust cybersecurity, digital identity, applied AI, sovereign talent cultivation, and venture incubation.',
      tagline: '99.98% SLA • Zero-Trust Architecture • 100% In-Country Ownership',
      ctaContact: 'Request Architecture Consultation',
      ctaExplore: 'Explore Solutions',
    },
  };

  const t = content[locale as 'ku' | 'ar' | 'en'] || content.ku;

  return (
    <section className="relative pt-12 pb-16 sm:pt-20 sm:pb-20 overflow-hidden border-b border-[#102447]">
      {/* Background Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] sm:w-[900px] h-[350px] bg-gradient-to-tr from-blue-600/15 via-[#1D5BD8]/10 to-transparent rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#102447]/80 border border-[#193B73] text-xs font-bold text-[#60A5FA] mb-6 shadow-sm shadow-blue-900/20">
          <Layers className="w-4 h-4 text-blue-400 shrink-0" />
          <span>{t.badge}</span>
        </div>

        {/* Headline */}
        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-tight sm:leading-tight mb-6 max-w-4xl mx-auto">
          {t.title}
        </h1>

        {/* Subtitle */}
        <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-3xl mx-auto mb-6 font-normal">
          {t.description}
        </p>

        {/* Tagline */}
        <div className="flex items-center justify-center gap-2 text-xs sm:text-sm font-semibold text-blue-400 mb-8">
          <Sparkles className="w-4 h-4 shrink-0" />
          <span>{t.tagline}</span>
        </div>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          {onOpenContact ? (
            <Button
              variant="primary"
              size="lg"
              onClick={onOpenContact}
              className="w-full sm:w-auto px-8 py-3.5 text-sm font-bold shadow-lg shadow-blue-600/25"
              icon={<ArrowIcon className="w-4 h-4" />}
            >
              {t.ctaContact}
            </Button>
          ) : (
            <Link
              href={`/${locale}/contact`}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl bg-[#2563EB] hover:bg-blue-600 text-white font-bold text-sm shadow-lg shadow-blue-600/25 transition-all"
            >
              <span>{t.ctaContact}</span>
              <ArrowIcon className="w-4 h-4" />
            </Link>
          )}

          <a
            href="#services-grid"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-[#0B172E] hover:bg-[#102447] border border-[#193B73] text-slate-200 hover:text-white font-semibold text-sm transition-all"
          >
            <Building className="w-4 h-4 text-blue-400" />
            <span>{t.ctaExplore}</span>
          </a>
        </div>
      </div>
    </section>
  );
}
