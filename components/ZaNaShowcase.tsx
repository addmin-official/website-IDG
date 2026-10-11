'use client';

import React from 'react';
import Link from 'next/link';
import { useLocale } from '@/lib/locale-context';
import {
  GraduationCap,
  ExternalLink,
  Sparkles,
  BookOpen,
  ShieldCheck,
  UserCheck,
  CheckCircle2,
  ArrowRight,
  ArrowLeft,
  Bot,
  Zap,
} from 'lucide-react';

interface ZaNaShowcaseProps {
  onInspectDossier?: () => void;
  className?: string;
}

export default function ZaNaShowcase({
  onInspectDossier,
  className = '',
}: ZaNaShowcaseProps) {
  const { lang, isRtl } = useLocale();
  const ArrowIcon = isRtl ? ArrowLeft : ArrowRight;

  const ZANA_LIVE_URL = 'https://new-vs-zana.zana-platform.workers.dev/';

  // Localized copy based on locale
  const copy = {
    ku: {
      badge: 'پلاتفۆرمی پەروەردەیی دیجیتاڵ · بەرهەمی ٠٠٢',
      nameEn: 'ZaNa Academy',
      nameLocal: 'ئەکادیمیای زانا',
      tagline: 'هاوڕێی زیرەکی فێربوونی تۆ',
      description:
        'پلاتفۆرمی پەروەردەیی زیرەکی دەستکرد کە بە شێوەیەکی تایبەت بۆ خوێندنی کوردی و قۆناغی دواناوەندی داڕێژراوە؛ یارمەتیدەری زیرەکی ٢٤/٧ بۆ تێگەیشتنی قووڵ لە وانەکان.',
      launchCta: 'چوونەژوورەوە بۆ زانا',
      moreInfoCta: 'زانیاری زیاتر دەربارەی پلاتفۆرم',
      liveStatus: 'سیستەم کارایە و ئۆنلاینە',
      featuresTitle: 'تایبەتمەندییە سەرەکییەکانی زانا:',
      features: [
        {
          title: 'مامۆستای ژیریی دەستکرد بە کوردی',
          desc: 'دیالۆگی ڕوون و زانستی بە زمانی کوردیی پاراو بەبێ هەڵەی زاراوەیی.',
          icon: Bot,
        },
        {
          title: 'کیمیا پۆلی ١٢ — ٣٧١ لاپەڕە',
          desc: 'شیرازی تەواوی کتێبی وەزارەتی پەروەردە بە پرسیار و شیکارییەوە.',
          icon: BookOpen,
        },
        {
          title: 'Firebase Auth — قوتابی و ئادمین',
          desc: 'چوونەژوورەوەی پارێزراو بە ئەکاونتی تایبەتی بۆ هەر قوتابییەک.',
          icon: UserCheck,
        },
        {
          title: 'سیستەمی پاراستن — ٣ چین',
          desc: 'حوکمڕانی و ئاسایشی تەواوی داتای قوتابیان لەسەر خاکی هەرێم و عێراق.',
          icon: ShieldCheck,
        },
      ],
      mockStudentQuestion: 'مامۆستا، خێرایی کارلێک چۆن کاریگەر دەبێت بە پلەی گەرمی؟',
      mockAiResponse:
        'بەپێی بەشی سێیەم (لاپەڕە ٨٤): بە بەرزبوونەوەی پلەی گەرمی، وزەی جووڵەی گەردەکان زیاد دەکات و ژمارەی پێکدادانی کاریگەر زیاتر دەبێت.',
      mockReferenceBadge: 'سەرچاوە: کتێبی کیمیای پۆلی ١٢ (وەزارەتی پەروەردە)',
    },
    ar: {
      badge: 'المنصة التعليمية الرقمية · المنتج ٠٠٢',
      nameEn: 'ZaNa Academy',
      nameLocal: 'أكاديمية زانا',
      tagline: 'رفيقك الذكي في التعلّم',
      description:
        'أول منصة ذكاء اصطناعي تعليمية وطنية في العراق وكردستان؛ مرافقة تفاعلية ذكية على مدار الساعة للطلبة لتيسير الفهم العميق للمناهج الدراسية.',
      launchCta: 'الدخول إلى زانا',
      moreInfoCta: 'مزيد من المعلومات عن المنصة',
      liveStatus: 'المنصة نشطة ومتاحة مباشرة',
      featuresTitle: 'المزايا الأساسية لأكاديمية زانا:',
      features: [
        {
          title: 'معلم ذكاء اصطناعي تفاعلي باللغة الكردية',
          desc: 'حوار تعليمي مبسط ودقيق علمياً يراعي خصوصية اللغة الكردية.',
          icon: Bot,
        },
        {
          title: 'كيمياء الصف 12 — 371 صفحة معالجة بالكامل',
          desc: 'تغطية شاملة لكتاب وزارة التربية مع شروحات وحلول نموذجية.',
          icon: BookOpen,
        },
        {
          title: 'Firebase Auth — بوابات متخصصة للطلاب والإدارة',
          desc: 'مصادقة موثوقة تحفظ سجل تقدم الطالب ونتائجه بأمان كامل.',
          icon: UserCheck,
        },
        {
          title: 'حماية بيانات سيادية — بنية أمنية من 3 طبقات',
          desc: 'حوكمة مشددة تضمن بقاء بيانات الطلبة محمية ومملوكة محلياً.',
          icon: ShieldCheck,
        },
      ],
      mockStudentQuestion: 'أستاذ، كيف تؤثر درجة الحرارة على سرعة التفاعل الكيميائي؟',
      mockAiResponse:
        'بحسب الفصل الثالث (صفحة 84): يؤدي ارتفاع درجة الحرارة إلى زيادة الطاقة الحركية للجزيئات ومضاعفة عدد التصادمات الفعالة.',
      mockReferenceBadge: 'المرجع: منهج كيمياء الصف الثاني عشر (وزارة التربية)',
    },
    en: {
      badge: 'Sovereign EdTech Platform · Product 002',
      nameEn: 'ZaNa Academy',
      nameLocal: 'ZaNa Academy',
      tagline: 'Your Intelligent Learning Companion',
      description:
        'The premier K-12 educational AI platform tailored for Kurdish curriculum students; providing 24/7 personalized, intelligent tutoring and deep conceptual mastery.',
      launchCta: 'Launch ZaNa',
      moreInfoCta: 'Explore Platform Architecture',
      liveStatus: 'Platform Live & Operational',
      featuresTitle: 'Key Architecture & Capabilities:',
      features: [
        {
          title: 'Kurdish-Native Conversational AI Tutor',
          desc: 'Culturally fluent, pedagogical dialogue tailored to local curriculum.',
          icon: Bot,
        },
        {
          title: 'Grade 12 Chemistry — 371 Indexed Pages',
          desc: 'Complete Ministry of Education syllabus with deep conceptual Q&A.',
          icon: BookOpen,
        },
        {
          title: 'Firebase Auth — Dedicated Student & Admin Portals',
          desc: 'Strict role-based access ensuring student session isolation.',
          icon: UserCheck,
        },
        {
          title: '3-Layer Security & Sovereign Data Protection',
          desc: 'Zero external telemetry leak; full student data governance under IDG.',
          icon: ShieldCheck,
        },
      ],
      mockStudentQuestion: 'Teacher, how does temperature directly impact reaction rates?',
      mockAiResponse:
        'According to Chapter 3 (Page 84): Increasing temperature increases molecular kinetic energy, exponentially multiplying effective collision frequency.',
      mockReferenceBadge: 'Reference: Grade 12 Chemistry (Ministry of Education)',
    },
  }[lang] || {
    badge: 'Sovereign EdTech Platform',
    nameEn: 'ZaNa Academy',
    nameLocal: 'ZaNa Academy',
    tagline: 'Your Intelligent Learning Companion',
    description: 'Premier Kurdish AI educational platform.',
    launchCta: 'Launch ZaNa',
    moreInfoCta: 'Learn More',
    liveStatus: 'Live Online',
    featuresTitle: 'Key Capabilities:',
    features: [],
    mockStudentQuestion: '',
    mockAiResponse: '',
    mockReferenceBadge: '',
  };

  return (
    <section
      id="zana-showcase"
      className={`py-14 md:py-24 bg-[#060D1A] text-slate-900 relative overflow-hidden ${className}`}
      dir={isRtl ? 'rtl' : 'ltr'}
      aria-label="ZaNa Academy Platform Showcase"
    >
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 start-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#1D5BD8]/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Pre-heading */}
        <div className="mb-6 flex items-center justify-between flex-wrap gap-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#102447] border border-[#193B73] text-[#60A5FA] text-xs font-bold tracking-wide">
            <Sparkles className="w-3.5 h-3.5 text-[#60A5FA]" />
            <span>{copy.badge}</span>
          </div>

          <div className="inline-flex items-center gap-2 text-xs font-semibold text-emerald-400 bg-emerald-950/60 px-3 py-1 rounded-full border border-emerald-800/50">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>{copy.liveStatus}</span>
          </div>
        </div>

        {/* ── MAIN LIGHT SHOWCASE CARD (ZaNa Login Page Inspired) ── */}
        <div className="rounded-3xl bg-gradient-to-br from-[#EFF6FF] via-white to-[#EEF2FF] border border-blue-100/90 shadow-[0_20px_60px_-15px_rgba(29,91,216,0.25)] p-6 sm:p-10 md:p-14 transition-all">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left Column: Brand Identity, Pitch, Features & CTAs (7 cols) */}
            <div className="lg:col-span-7 flex flex-col justify-center">
              
              {/* Brand Header */}
              <div className="flex items-center gap-4 mb-5">
                <div className="w-16 h-16 rounded-2xl bg-[#1D5BD8] text-white flex items-center justify-center shadow-lg shadow-blue-600/30 shrink-0 ring-4 ring-blue-100">
                  <GraduationCap className="w-8 h-8" />
                </div>
                <div>
                  <div className="flex items-baseline gap-2">
                    <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                      {copy.nameEn}
                    </h2>
                    {lang !== 'en' && (
                      <span className="text-lg sm:text-xl font-bold text-slate-600">
                        ({copy.nameLocal})
                      </span>
                    )}
                  </div>
                  <p className="text-sm sm:text-base font-semibold text-[#1D5BD8] mt-0.5">
                    {copy.tagline}
                  </p>
                </div>
              </div>

              {/* Description */}
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-6 font-normal">
                {copy.description}
              </p>

              {/* 4 Key Features Grid */}
              <div className="mb-8">
                <h3 className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-3">
                  {copy.featuresTitle}
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  {copy.features.map((feat, idx) => {
                    const IconComp = feat.icon;
                    return (
                      <div
                        key={idx}
                        className="p-3.5 rounded-xl bg-white/80 border border-slate-200/80 shadow-xs hover:border-blue-300 hover:shadow-sm transition-all flex items-start gap-3"
                      >
                        <div className="p-2 rounded-lg bg-blue-50 text-[#1D5BD8] shrink-0 mt-0.5">
                          <IconComp className="w-4 h-4" />
                        </div>
                        <div className="min-w-0">
                          <h4 className="text-xs sm:text-sm font-bold text-slate-900 leading-snug">
                            {feat.title}
                          </h4>
                          <p className="text-[11px] sm:text-xs text-slate-500 mt-0.5 leading-relaxed">
                            {feat.desc}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 pt-2">
                {/* Primary CTA: Launch ZaNa (Opens in new tab) */}
                <a
                  href={ZANA_LIVE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2.5 bg-[#1D5BD8] hover:bg-[#193B73] text-white font-bold text-sm sm:text-base py-3.5 px-7 rounded-xl shadow-md hover:shadow-lg transition-all text-center group cursor-pointer"
                  id="btn-launch-zana-showcase"
                >
                  <span>{copy.launchCta}</span>
                  <ExternalLink className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>

                {/* Secondary CTA: More Info (Navigates to #zana or inspects dossier) */}
                {onInspectDossier ? (
                  <button
                    type="button"
                    onClick={onInspectDossier}
                    className="inline-flex items-center justify-center gap-2 bg-white hover:bg-slate-50 text-slate-700 font-semibold text-xs sm:text-sm py-3.5 px-6 rounded-xl border border-slate-300 hover:border-slate-400 transition-colors shadow-2xs text-center cursor-pointer"
                    id="btn-inspect-zana-dossier"
                  >
                    <span>{copy.moreInfoCta}</span>
                    <ArrowIcon className="w-4 h-4 text-slate-400" />
                  </button>
                ) : (
                  <Link
                    href={`/${lang}/portfolio#zana`}
                    className="inline-flex items-center justify-center gap-2 bg-white hover:bg-slate-50 text-slate-700 font-semibold text-xs sm:text-sm py-3.5 px-6 rounded-xl border border-slate-300 hover:border-slate-400 transition-colors shadow-2xs text-center cursor-pointer"
                    id="btn-link-zana-details"
                  >
                    <span>{copy.moreInfoCta}</span>
                    <ArrowIcon className="w-4 h-4 text-slate-400" />
                  </Link>
                )}
              </div>
            </div>

            {/* Right Column: Simulated Live Interaction Mockup (5 cols) */}
            <div className="lg:col-span-5">
              <div className="bg-white/95 rounded-2xl p-5 sm:p-6 border border-slate-200/90 shadow-xl relative">
                
                {/* Mockup Topbar */}
                <div className="flex items-center justify-between pb-4 border-b border-slate-100 mb-4">
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-lg bg-[#1D5BD8] text-white flex items-center justify-center font-bold text-xs">
                      ZN
                    </div>
                    <div>
                      <p className="text-xs font-bold text-slate-900 leading-none">
                        ZaNa Interactive Assistant
                      </p>
                      <p className="text-[10px] text-emerald-600 font-medium mt-0.5">
                        ● Online · Chemistry 12
                      </p>
                    </div>
                  </div>
                  <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-blue-50 text-[#1D5BD8] border border-blue-100">
                    Kurdish AI
                  </span>
                </div>

                {/* Mock Dialogue */}
                <div className="space-y-3.5">
                  {/* Student Question Bubble */}
                  <div className="p-3.5 rounded-xl bg-slate-100 text-slate-800 text-xs sm:text-sm border border-slate-200/60 flex items-start gap-2.5">
                    <div className="w-6 h-6 rounded-full bg-slate-300 text-slate-700 flex items-center justify-center text-[10px] font-bold shrink-0 mt-0.5">
                      Q
                    </div>
                    <p className="leading-relaxed">
                      {copy.mockStudentQuestion}
                    </p>
                  </div>

                  {/* AI Tutor Response Bubble */}
                  <div className="p-3.5 rounded-xl bg-blue-50/80 text-slate-900 text-xs sm:text-sm border border-blue-200/80 shadow-2xs flex items-start gap-2.5">
                    <div className="w-6 h-6 rounded-full bg-[#1D5BD8] text-white flex items-center justify-center text-[10px] font-bold shrink-0 mt-0.5">
                      <Zap className="w-3.5 h-3.5" />
                    </div>
                    <div className="space-y-2">
                      <p className="leading-relaxed">
                        {copy.mockAiResponse}
                      </p>
                      <div className="inline-flex items-center gap-1.5 px-2 py-1 rounded bg-white text-[10px] font-medium text-slate-600 border border-blue-100">
                        <CheckCircle2 className="w-3 h-3 text-emerald-600 shrink-0" />
                        <span>{copy.mockReferenceBadge}</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Live Platform Quick Launch Footer */}
                <div className="mt-5 pt-4 border-t border-slate-100 flex items-center justify-between text-xs">
                  <span className="text-[11px] text-slate-400 font-medium">
                    new-vs-zana.zana-platform.workers.dev
                  </span>
                  <a
                    href={ZANA_LIVE_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-bold text-[#1D5BD8] hover:text-[#193B73] flex items-center gap-1 group"
                  >
                    <span>Launch</span>
                    <ExternalLink className="w-3 h-3 transition-transform group-hover:translate-x-0.5" />
                  </a>
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
