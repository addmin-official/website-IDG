'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { translations, Language } from '@/lib/translations';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Breadcrumbs from '@/components/Breadcrumbs';
import SovereignBadge from '@/components/SovereignBadge';
import DocumentClassification from '@/components/DocumentClassification';
import EvidenceBadge from '@/components/EvidenceBadge';
import ContactModal from '@/components/ContactModal';
import {
  ShieldCheck,
  Activity,
  Cpu,
  Database,
  ArrowRight,
  FileCheck2,
  Lock,
  Layers,
  Sparkles,
  BarChart3,
  Server,
  Scale,
  CheckCircle2,
} from 'lucide-react';

export default function ImpactIQClient({ locale }: { locale: string }) {
  const [isContactOpen, setIsContactOpen] = useState(false);
  const lang: Language = locale === 'ar' || locale === 'en' ? locale : 'ku';
  const isRtl = lang === 'ku' || lang === 'ar';
  const t = translations[lang] || translations.ku;
  const product = t.portfolio.products.find((p) => p.id === 'impactiq');
  const details = t.portfolio.impactIQ;

  const content = {
    ku: {
      badge: 'دەستپێشخەریی ستراتیژی نیشتمانی • بەرهەمی ٠٠٤',
      title: 'ImpactIQ',
      tagline: 'پێوانەکردنی سەروەرانەی کاریگەریی نیشتمانی (Sovereign MEAL Engine)',
      lead: product?.description || details?.description || '',
      heroSub:
        'ژێرخانێکی سەروەرانەی شیکاری و پێوانەکردنی کاریگەری بە مۆدێلی ژیریی دەستکردی نیشتمانی، بە گەرەنتی مانەوەی ١٠٠٪ی داتا لە عێراق لەژێر ستانداردی ISO 27001.',
      architectureTitle: 'تەلارسازی و پایە سەرەکییەکانی سیستەم',
      architectureDesc:
        'ImpactIQ بڕیاردانی کارگێڕی لە پێشبینی ناڕوونەوە دەگۆڕێت بۆ زانستێکی بەڵگەنەویست کە بە تەواوی شیاوی وردبینی و لێپرسینەوەیە.',
      featuresHeading: 'تایبەتمەندییە سەرەکییەکان (Core Features)',
      techHeading: 'تەکنەلۆژیا و ژێرخانی سەروەر (Tech Stack)',
      governanceHeading: 'حوکمڕانی و ئاسایشی سەروەریی نیشتمانی',
      governanceNotice:
        'سەرجەم داتاکان بەپێی یاسای پاراستنی داتای سەروەری لە ناوخۆی سنووری کۆماری عێراق لەسەر ڕاژەکاری پارێزراو بە شێوازی Air-Gapped میوانداری دەکرێن.',
      returnToPortfolio: 'گەڕانەوە بۆ پۆرتفۆلیۆ',
      contactLeadership: 'پەیوەندی لەگەڵ دەستەی جێبەجێکار',
      stats: [
        { label: 'سەروەریی داتا', value: '١٠٠٪ لە عێراق' },
        { label: 'ستانداردی ئاسایش', value: 'ISO 27001 / Air-Gapped' },
        { label: 'وردبینی تۆمار', value: 'Cryptographic Hash' },
        { label: 'مۆدێلی AI', value: 'Sovereign KurdoArabic' },
      ],
    },
    ar: {
      badge: 'مبادرة استراتيجية وطنية • المنتج ٠٠٤',
      title: 'ImpactIQ',
      tagline: 'قياس الأثر الوطني السيادي الحقيقي (Sovereign MEAL Engine)',
      lead: product?.description || details?.description || '',
      heroSub:
        'بنية تحتية سيادية لتحليل وقياس الأثر التنموي تعتمد على الذكاء الاصطناعي الوطني، بضمان ١٠٠٪ لبقاء البيانات داخل العراق وفق معايير ISO 27001.',
      architectureTitle: 'الهندسة المعمارية والركائز الأساسية للمنظومة',
      architectureDesc:
        'تحويل عملية اتخاذ القرار من التقدير غير المؤكد إلى علم الأدلة الرقمية الدقيقة القابلة للتدقيق والمساءلة القانونية.',
      featuresHeading: 'الميزات والقدرات الأساسية (Core Features)',
      techHeading: 'حزمة التقنيات والسيادة التشغيلية (Tech Stack)',
      governanceHeading: 'الحوكمة والأمن السيادي المطبق',
      governanceNotice:
        'تتم استضافة ومعالجة كافة سجلات الأثر داخل مراكز بيانات سيادية محصورة على الأراضي العراقية بعزل تام (Air-Gapped).',
      returnToPortfolio: 'العودة إلى المحفظة',
      contactLeadership: 'التواصل مع القيادة التنفيذية',
      stats: [
        { label: 'سيادة البيانات', value: '١٠٠٪ داخل العراق' },
        { label: 'معيار الأمن', value: 'ISO 27001 / Air-Gapped' },
        { label: 'سجل التدقيق', value: 'Cryptographic Hash' },
        { label: 'نماذج الذكاء', value: 'KurdoArabic السيادية' },
      ],
    },
    en: {
      badge: 'Strategic National Initiative • Product 004',
      title: 'ImpactIQ',
      tagline: 'Measuring True National Impact (Sovereign MEAL Engine)',
      lead: product?.description || details?.description || '',
      heroSub:
        'A sovereign impact measurement and analytics platform powered by national AI models, enforcing 100% in-country data residency under ISO 27001 standards.',
      architectureTitle: 'Architectural Framework & Sovereign Pillars',
      architectureDesc:
        'Transforming public and enterprise oversight from ambiguous projections into an auditable, verifiable empirical science.',
      featuresHeading: 'Core Features & Sovereign Capabilities',
      techHeading: 'Technology Stack & Air-Gapped Topology',
      governanceHeading: 'Governance, Compliance & Sovereign Security',
      governanceNotice:
        'All impact logs, audit chains, and decision traces reside exclusively within sovereign Iraqi data center infrastructure.',
      returnToPortfolio: 'Return to Portfolio',
      contactLeadership: 'Engage Institutional Directorate',
      stats: [
        { label: 'Data Residency', value: '100% In-Country' },
        { label: 'Security Anchor', value: 'ISO 27001 / Air-Gapped' },
        { label: 'Audit Integrity', value: 'Cryptographic Hash' },
        { label: 'AI Architecture', value: 'Sovereign KurdoArabic' },
      ],
    },
  }[lang];

  return (
    <div dir={isRtl ? 'rtl' : 'ltr'} lang={lang} className="min-h-screen bg-[#060D1A] text-slate-100 overflow-x-hidden w-full max-w-full">
      <Navbar lang={lang} onLanguageChange={() => {}} t={t} onOpenContact={() => setIsContactOpen(true)} />

      <main id="main-content" className="pt-6 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumbs */}
          <Breadcrumbs
            items={[
              { label: t.nav.portfolio, href: `/${lang}/portfolio` },
              { label: 'ImpactIQ (IDG-PRD-004)' },
            ]}
          />

          {/* Hero Section */}
          <section className="mt-8 p-6 sm:p-10 md:p-12 rounded-2xl bg-[#0B172E] border border-sky-500/40 ring-1 ring-sky-500/30 shadow-2xl shadow-sky-500/10 relative overflow-hidden">
            <div className="absolute -top-24 -end-24 w-96 h-96 bg-sky-500/10 rounded-full blur-3xl pointer-events-none" />

            <div className="flex flex-wrap items-center gap-3 mb-4">
              <SovereignBadge label="IDG-PRD-004" variant="primary" size="md" />
              <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-sky-500/10 text-sky-400 border border-sky-500/30 text-xs font-semibold">
                <Sparkles className="w-3.5 h-3.5 text-sky-400" />
                <span>⭐ NEW</span>
              </span>
              <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-slate-800 border border-slate-700 text-xs font-semibold text-slate-300">
                <ShieldCheck className="w-3.5 h-3.5 text-slate-400" />
                <span>{content.badge}</span>
              </span>
              <DocumentClassification level="public" lang={lang} />
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-3">
              {content.title}
            </h1>
            <p className="text-lg sm:text-xl font-medium text-sky-300 mb-5">
              {content.tagline}
            </p>
            <p className="text-sm sm:text-base md:text-lg text-slate-300 max-w-4xl leading-relaxed mb-8">
              {content.lead}
            </p>

            {/* Quick Metrics */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 pt-6 border-t border-[#102447]">
              {content.stats.map((stat, i) => (
                <div key={i} className="p-3.5 sm:p-4 rounded-xl bg-[#060D1A]/80 border border-[#102447]">
                  <span className="text-xs text-slate-400 block mb-1">{stat.label}</span>
                  <span className="text-sm sm:text-base font-bold text-slate-100">{stat.value}</span>
                </div>
              ))}
            </div>
          </section>

          {/* Core Features & Capabilities */}
          <section className="mt-12">
            <h2 className="text-xl sm:text-2xl font-bold text-slate-100 mb-6 flex items-center gap-2">
              <BarChart3 className="w-6 h-6 text-sky-400" />
              <span>{content.featuresHeading}</span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
              {(product?.keyFeatures || details?.features || []).map((feat, idx) => (
                <div key={idx} className="p-5 sm:p-6 rounded-xl bg-[#0B172E] border border-[#102447] hover:border-sky-500/40 transition">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-sky-400 shrink-0 mt-0.5" />
                    <span className="text-sm sm:text-base text-slate-200 leading-relaxed font-medium">{feat}</span>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Technology & Air-Gapped Stack */}
          <section className="mt-12">
            <h2 className="text-xl sm:text-2xl font-bold text-slate-100 mb-6 flex items-center gap-2">
              <Cpu className="w-6 h-6 text-sky-400" />
              <span>{content.techHeading}</span>
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {(product?.technologies || [
                'Sovereign Fine-Tuned NLP Models',
                'PostgreSQL & TimescaleDB',
                'Cryptographic Hash Ledger',
                'FastAPI & Next.js 15 App Router',
                'Air-Gapped Sovereign Infrastructure',
                'Zero-Trust mTLS Network Mesh',
              ]).map((tech, idx) => (
                <div key={idx} className="p-4 rounded-xl bg-[#0B172E] border border-[#102447] flex items-center gap-3">
                  <Server className="w-4 h-4 text-sky-400 shrink-0" />
                  <span className="text-xs sm:text-sm text-slate-300 font-mono">{tech}</span>
                </div>
              ))}
            </div>
          </section>

          {/* Sovereign Governance Notice */}
          <section className="mt-12 p-6 sm:p-8 rounded-2xl bg-slate-900/90 border border-slate-700/80">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-4">
              <div className="flex items-center gap-3">
                <ShieldCheck className="w-6 h-6 text-emerald-400 shrink-0" />
                <h3 className="text-base sm:text-lg font-bold text-slate-100">
                  {content.governanceHeading}
                </h3>
              </div>
              <EvidenceBadge status="verified" lang={lang} />
            </div>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-3xl mb-6">
              {content.governanceNotice}
            </p>

            <div className="flex flex-wrap items-center gap-3">
              <Link
                href={`/${lang}/portfolio`}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#1D5BD8] hover:bg-[#193B73] text-white text-xs sm:text-sm font-semibold transition"
              >
                <span>{content.returnToPortfolio}</span>
                <ArrowRight className="w-4 h-4 rtl:rotate-180" />
              </Link>
              <button
                type="button"
                onClick={() => setIsContactOpen(true)}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#0B172E] border border-[#102447] text-slate-200 hover:text-white hover:border-slate-500 text-xs sm:text-sm font-semibold transition cursor-pointer"
              >
                <span>{content.contactLeadership}</span>
              </button>
            </div>
          </section>
        </div>
      </main>

      <Footer t={t} isRtl={isRtl} onOpenContact={() => setIsContactOpen(true)} />
      <ContactModal isOpen={isContactOpen} onClose={() => setIsContactOpen(false)} t={t} />
    </div>
  );
}
