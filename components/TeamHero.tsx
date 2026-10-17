'use client';

import React from 'react';
import Link from 'next/link';
import { Shield, Users, Award, Terminal, ArrowRight, ArrowLeft } from 'lucide-react';
import { useLocale } from '@/lib/locale-context';

interface TeamHeroProps {
  locale: string;
}

export default function TeamHero({ locale }: TeamHeroProps) {
  const { isRtl } = useLocale();
  const ArrowIcon = isRtl ? ArrowLeft : ArrowRight;

  const content = {
    ku: {
      badge: 'سەروەریی تەکنۆلۆژی و دەستەی نیشتمانی',
      title: 'سەرکردایەتی و ئەندازیارانی پشتی سەروەریی دیجیتاڵیی عێراق',
      subtitle:
        'دەستەیەکی باڵا لە تەلارسازانی سیستەم، پسپۆڕانی ئاسایشی سایبەری، یاساناسانی داتا، و بنیاتنەرانی تەکنەلۆژیای نیشتمانی کە پێکەوە ژێرخانی سەروەری داهاتووی عێراق بونیاد دەنێن.',
      stats: [
        { label: 'سەرکردە و پسپۆڕی باڵا', value: '١٣+', icon: Users },
        { label: 'کادری ١٠٠٪ عێراقی', value: '١٠٠٪', icon: Shield },
        { label: 'دەستەی جێبەجێکاری سەرەکی', value: '٤ سەرکردە', icon: Award },
        { label: 'تەلارسازیی سەروەر', value: 'Zero-Trust', icon: Terminal },
      ],
      exploreBtn: 'دەستەی سەرکردایەتی',
      careersBtn: 'هەلی کار لە IDG',
    },
    ar: {
      badge: 'السيادة التكنولوجية ورأس المال البشري الوطني',
      title: 'القيادة الهندسية والمعماريون خلف السيادة الرقمية للعراق',
      subtitle:
        'نخبة وطنية متخصصة في هندسة النظم الموزعة، الأمن السيبراني، حوكمة البيانات السيادية، واستوديو المشاريع التكنولوجية لبناء بنية تحتية مؤسسية مستدامة تحمي المصلحة العامة.',
      stats: [
        { label: 'قادة وخبراء متخصصون', value: '+13', icon: Users },
        { label: 'كوادر عراقية سيادية', value: '100%', icon: Shield },
        { label: 'المجلس التنفيذي', value: '4 قادة', icon: Award },
        { label: 'المعمارية الأمنية', value: 'Zero-Trust', icon: Terminal },
      ],
      exploreBtn: 'المجلس القيادي',
      careersBtn: 'فرص الانضمام للفريق',
    },
    en: {
      badge: 'Sovereign Talent & National Human Capital',
      title: 'Meet the Leadership & Architects Behind Iraq’s Digital Sovereignty',
      subtitle:
        'A dedicated assembly of systems architects, cybersecurity specialists, sovereign legal advisors, and venture builders engineering trusted, enduring institutional platforms for Iraq.',
      stats: [
        { label: 'Specialists & Leaders', value: '13+', icon: Users },
        { label: '100% Iraqi Sovereignty', value: '100%', icon: Shield },
        { label: 'Executive Council', value: '4 Leaders', icon: Award },
        { label: 'Security Architecture', value: 'Zero-Trust', icon: Terminal },
      ],
      exploreBtn: 'Explore Leadership',
      careersBtn: 'Careers at IDG',
    },
  }[locale === 'ar' || locale === 'en' ? locale : 'ku'];

  return (
    <section className="relative overflow-hidden pt-12 pb-16 lg:pt-16 lg:pb-24 border-b border-[#102447] bg-[#060D1A]">
      {/* Decorative Glow Elements */}
      <div className="absolute top-1/4 start-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-blue-600/10 blur-[130px] rounded-full pointer-events-none" />
      <div className="absolute top-1/2 start-10 w-72 h-72 bg-emerald-500/5 blur-[100px] rounded-full pointer-events-none" />

      {/* Grid Pattern Background */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(circle at 1px 1px, #ffffff 1px, transparent 0)',
          backgroundSize: '32px 32px',
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Badge */}
        <div className="flex justify-center mb-6">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#0B172E] border border-blue-500/30 text-blue-400 text-xs sm:text-sm font-medium shadow-inner">
            <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" />
            <span>{content.badge}</span>
          </div>
        </div>

        {/* Headline */}
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight sm:leading-snug">
            {content.title}
          </h1>
          <p className="mt-5 text-base sm:text-lg lg:text-xl text-slate-300 leading-relaxed font-normal">
            {content.subtitle}
          </p>

          {/* CTA Buttons */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <a
              href="#leadership"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold text-sm transition-all shadow-lg shadow-blue-600/25 hover:shadow-blue-600/40"
            >
              <span>{content.exploreBtn}</span>
              <ArrowIcon className="w-4 h-4" />
            </a>
            <Link
              href={`/${locale}/careers`}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#0B172E] hover:bg-[#102447] text-slate-200 hover:text-white font-semibold text-sm border border-[#102447] transition-all"
            >
              <span>{content.careersBtn}</span>
            </Link>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="mt-14 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          {content.stats.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <div
                key={idx}
                className="bg-[#0B172E]/70 backdrop-blur-sm border border-[#102447] rounded-2xl p-4 sm:p-5 flex items-center gap-3.5 hover:border-blue-500/40 transition-colors"
              >
                <div className="w-11 h-11 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 shrink-0">
                  <Icon className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-lg sm:text-xl font-bold text-white font-mono">{stat.value}</div>
                  <div className="text-xs sm:text-sm text-slate-400 leading-tight mt-0.5">{stat.label}</div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
