'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { translations, Language } from '@/lib/translations';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Breadcrumbs from '@/components/Breadcrumbs';
import dynamic from 'next/dynamic';
import IDGLogoFull from '@/components/IDGLogoFull';
import IDGLogoIcon from '@/components/IDGLogoIcon';

const ContactModal = dynamic(() => import('@/components/ContactModal'), {
  ssr: false,
});

export default function LogoPreviewClient({ locale }: { locale: string }) {
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [activeVariant, setActiveVariant] = useState<'full' | 'compact'>('full');
  const [selectedBg, setSelectedBg] = useState<'canvas' | 'surface' | 'navbar' | 'light'>('canvas');

  const lang: Language = locale === 'ar' || locale === 'en' ? locale : 'ku';
  const isRtl = lang === 'ku' || lang === 'ar';
  const t = translations[lang] || translations.ku;

  const bgClasses = {
    canvas: 'bg-[#060D1A] border-[#102447]',
    surface: 'bg-[#0B172E] border-[#193B73]',
    navbar: 'bg-[#0B172E]/95 backdrop-blur-md border-[#193B73]',
    light: 'bg-slate-100 border-slate-300',
  };

  return (
    <div
      dir={isRtl ? 'rtl' : 'ltr'}
      lang={lang}
      className="min-h-screen bg-[#060D1A] text-slate-100 overflow-x-hidden w-full max-w-full"
    >
      <Navbar lang={lang} onLanguageChange={() => {}} t={t} onOpenContact={() => setIsContactOpen(true)} />

      <main id="main-content">
        {/* ── HEADER ────────────────────────────────────────── */}
        <section className="border-b border-[#102447] bg-[#0B172E]/80 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
            <Breadcrumbs
              items={[
                {
                  label:
                    lang === 'ku'
                      ? 'پێشبینینی لۆگۆ'
                      : lang === 'ar'
                      ? 'معاينة الشعار'
                      : 'Logo Preview',
                },
              ]}
            />
            <div className="flex flex-wrap items-center gap-3 mb-4">
              <span className="inline-flex items-center px-2.5 py-0.5 rounded text-[10px] font-bold tracking-widest uppercase bg-[#1D5BD8]/20 text-[#60A5FA] border border-[#1D5BD8]/40">
                OFFICIAL BRAND REFINEMENT
              </span>
              <span className="inline-flex items-center px-2.5 py-0.5 rounded text-[10px] font-bold tracking-widest uppercase bg-emerald-950/60 text-emerald-400 border border-emerald-800/50">
                BLUEPRINT ALIGNED
              </span>
              <span className="inline-flex items-center px-2.5 py-0.5 rounded text-[10px] font-bold tracking-widest uppercase bg-amber-950/60 text-amber-400 border border-amber-800/50">
                WCAG 2.2 AA VERIFIED
              </span>
            </div>

            <h1 className="text-3xl md:text-5xl font-extrabold text-white mb-4 tracking-tight">
              {lang === 'ku'
                ? 'پێداچوونەوە و ڕێکخستنی فەرمیی لۆگۆی IDG'
                : lang === 'ar'
                ? 'المراجعة والضبط الرسمي لشعار IDG'
                : 'IDG Official Logo Specification & Refinement'}
            </h1>

            <p className="text-[#94A3B8] text-base md:text-lg max-w-3xl leading-relaxed">
              {lang === 'ku'
                ? 'کۆنسێپتی دەروازەی نیشتمانی نوێکراوەتەوە: ڕەنگی زێڕین بە Blueprint Status Gold (#D97706) گۆڕدرا، فۆنت بۆ Inter دەستنیشانکرا، و وەشانی ئایکۆنی ڕوون بۆ Favicon (16px) و مۆبایل دروستکرا.'
                : lang === 'ar'
                ? 'تم تحديث مفهوم البوابة الرقمية الوطنية: استبدال اللون الذهبي بـ Status Gold (#D97706)، اعتماد خط Inter، وتخصيص نسخة أيقونة مبسطة ومثالية للمقاسات الصغيرة (16px).'
                : 'National Digital Gateway concept refined with IDG Blueprint palette (Status Gold #D97706, Accent Teal #18B7B0), Inter typography, and dual-layer architecture: Full Lockup & Icon-Only.'}
            </p>
          </div>
        </section>

        {/* ── 4 RESOLVED FIXES BADGE STRIP ───────────────────── */}
        <section className="border-b border-[#102447] bg-[#060D1A]/90 py-6">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="p-4 rounded-xl bg-[#0B172E] border border-[#102447]">
                <div className="flex items-center gap-2 text-xs font-bold text-emerald-400 mb-1">
                  <span>✓ ISSUE 1 FIXED</span>
                </div>
                <div className="text-white text-sm font-semibold">Blueprint Colors</div>
                <div className="text-[#94A3B8] text-xs mt-1">
                  Gold updated to Status Gold (#D97706). Distinctive Teal gradient preserved (#18B7B0 → #087E91).
                </div>
              </div>

              <div className="p-4 rounded-xl bg-[#0B172E] border border-[#102447]">
                <div className="flex items-center gap-2 text-xs font-bold text-emerald-400 mb-1">
                  <span>✓ ISSUE 2 FIXED</span>
                </div>
                <div className="text-white text-sm font-semibold">Inter Typography</div>
                <div className="text-[#94A3B8] text-xs mt-1">
                  Replaced Arial with Inter, system-ui for institutional sovereign precision.
                </div>
              </div>

              <div className="p-4 rounded-xl bg-[#0B172E] border border-[#102447]">
                <div className="flex items-center gap-2 text-xs font-bold text-emerald-400 mb-1">
                  <span>✓ ISSUE 3 FIXED</span>
                </div>
                <div className="text-white text-sm font-semibold">Dual Architectures</div>
                <div className="text-[#94A3B8] text-xs mt-1">
                  Version A (Full Lockup) for desktop/print + Version B (Simplified Icon) for 16px favicon.
                </div>
              </div>

              <div className="p-4 rounded-xl bg-[#0B172E] border border-[#102447]">
                <div className="flex items-center gap-2 text-xs font-bold text-emerald-400 mb-1">
                  <span>✓ ISSUE 4 FIXED</span>
                </div>
                <div className="text-white text-sm font-semibold">AI Gate Family Harmony</div>
                <div className="text-[#94A3B8] text-xs mt-1">
                  Matching rx=28 rounded square, arched gateway curvature, and mathematical stroke weights.
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── VERSION A: FULL LOCKUP SHOWCASE ─────────────────── */}
        <section className="py-12 md:py-16 border-b border-[#102447]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
              <div>
                <span className="text-[#60A5FA] text-xs font-bold tracking-widest uppercase">
                  VERSION A — COMPONENT & SVG
                </span>
                <h2 className="text-2xl md:text-3xl font-bold text-white mt-1">
                  IDG Full Lockup (<code className="text-sm font-mono text-[#60A5FA]">components/IDGLogoFull.tsx</code>)
                </h2>
                <p className="text-[#94A3B8] text-sm mt-1 max-w-2xl">
                  For corporate headers, hero sections, documentation dossiers, and official sovereign communications.
                </p>
              </div>

              {/* Variant toggle */}
              <div className="flex items-center gap-2 p-1 rounded-lg bg-[#0B172E] border border-[#102447]">
                <button
                  type="button"
                  onClick={() => setActiveVariant('full')}
                  className={`px-3 py-1.5 rounded text-xs font-bold transition-colors ${
                    activeVariant === 'full'
                      ? 'bg-[#1D5BD8] text-white'
                      : 'text-[#94A3B8] hover:text-white'
                  }`}
                >
                  Full (+ Descriptor)
                </button>
                <button
                  type="button"
                  onClick={() => setActiveVariant('compact')}
                  className={`px-3 py-1.5 rounded text-xs font-bold transition-colors ${
                    activeVariant === 'compact'
                      ? 'bg-[#1D5BD8] text-white'
                      : 'text-[#94A3B8] hover:text-white'
                  }`}
                >
                  Compact (Wordmark Only)
                </button>
              </div>
            </div>

            {/* Main Stage display */}
            <div className="p-8 md:p-14 rounded-2xl bg-[#0B172E] border border-[#193B73] shadow-2xl flex flex-col items-center justify-center relative overflow-hidden">
              <div className="absolute top-4 start-4 text-[11px] font-mono text-[#60A5FA]">
                Preview: 560px Master Vector
              </div>
              <div className="w-full max-w-[560px] py-4 flex items-center justify-center">
                <IDGLogoFull width={560} variant={activeVariant} />
              </div>
            </div>

            {/* Multi-Size Scale Strip */}
            <div className="mt-8">
              <h3 className="text-sm font-bold text-slate-300 uppercase tracking-wider mb-4">
                Responsive Responsive Scale Matrix (Full Lockup)
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="p-6 rounded-xl bg-[#0B172E]/70 border border-[#102447] flex flex-col items-center gap-3">
                  <div className="w-full flex items-center justify-center py-2">
                    <IDGLogoFull width={360} variant={activeVariant} />
                  </div>
                  <span className="text-xs font-mono text-[#94A3B8]">Large Desktop (360px)</span>
                </div>

                <div className="p-6 rounded-xl bg-[#0B172E]/70 border border-[#102447] flex flex-col items-center gap-3">
                  <div className="w-full flex items-center justify-center py-4">
                    <IDGLogoFull width={260} variant={activeVariant} />
                  </div>
                  <span className="text-xs font-mono text-[#94A3B8]">Header / Standard (260px)</span>
                </div>

                <div className="p-6 rounded-xl bg-[#0B172E]/70 border border-[#102447] flex flex-col items-center gap-3">
                  <div className="w-full flex items-center justify-center py-6">
                    <IDGLogoFull width={190} variant={activeVariant} />
                  </div>
                  <span className="text-xs font-mono text-[#94A3B8]">Compact / Sub-nav (190px)</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── VERSION B: ICON ONLY SHOWCASE ───────────────────── */}
        <section className="py-12 md:py-16 border-b border-[#102447] bg-[#0B172E]/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-8">
              <span className="text-emerald-400 text-xs font-bold tracking-widest uppercase">
                VERSION B — COMPONENT & SVG
              </span>
              <h2 className="text-2xl md:text-3xl font-bold text-white mt-1">
                IDG Icon Only (<code className="text-sm font-mono text-emerald-400">components/IDGLogoIcon.tsx</code>)
              </h2>
              <p className="text-[#94A3B8] text-sm mt-1 max-w-2xl">
                Micro-optimized architecture. Noise elements removed (no tiny gold bar, no unreadable sub-dots). Only the iconic teal arch, white inner pathway, and apex keystone.
              </p>
            </div>

            {/* Icon Scale Strip */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
              <div className="p-6 rounded-xl bg-[#0B172E] border border-[#102447] flex flex-col items-center justify-between gap-4">
                <IDGLogoIcon size={120} />
                <div className="text-center">
                  <div className="text-white text-xs font-bold">120px</div>
                  <div className="text-[#94A3B8] text-[10px]">App Icon / Hero</div>
                </div>
              </div>

              <div className="p-6 rounded-xl bg-[#0B172E] border border-[#102447] flex flex-col items-center justify-between gap-4">
                <IDGLogoIcon size={72} />
                <div className="text-center">
                  <div className="text-white text-xs font-bold">72px</div>
                  <div className="text-[#94A3B8] text-[10px]">Dashboard / Card</div>
                </div>
              </div>

              <div className="p-6 rounded-xl bg-[#0B172E] border border-[#102447] flex flex-col items-center justify-between gap-4">
                <IDGLogoIcon size={44} />
                <div className="text-center">
                  <div className="text-white text-xs font-bold">44px</div>
                  <div className="text-[#94A3B8] text-[10px]">Mobile Navbar</div>
                </div>
              </div>

              <div className="p-6 rounded-xl bg-[#0B172E] border border-[#102447] flex flex-col items-center justify-between gap-4">
                <IDGLogoIcon size={32} />
                <div className="text-center">
                  <div className="text-white text-xs font-bold">32px</div>
                  <div className="text-[#94A3B8] text-[10px]">Tab / Badge</div>
                </div>
              </div>

              <div className="p-6 rounded-xl bg-[#0B172E] border border-[#102447] flex flex-col items-center justify-between gap-4">
                <div className="p-3 bg-[#060D1A] rounded-md border border-[#193B73]">
                  <IDGLogoIcon size={16} />
                </div>
                <div className="text-center">
                  <div className="text-emerald-400 text-xs font-bold">16px</div>
                  <div className="text-[#94A3B8] text-[10px]">Favicon Legibility</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── CONTEXT & BACKGROUND TESTING ────────────────────── */}
        <section className="py-12 md:py-16 border-b border-[#102447]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
              <div>
                <h2 className="text-2xl font-bold text-white">
                  Multi-Background Context Test
                </h2>
                <p className="text-[#94A3B8] text-sm mt-1">
                  Testing contrast ratio across dark sovereign canvas, card surfaces, frosted headers, and print white.
                </p>
              </div>

              {/* Theme selector */}
              <div className="flex items-center gap-2 p-1 rounded-lg bg-[#0B172E] border border-[#102447]">
                {(['canvas', 'surface', 'navbar', 'light'] as const).map((mode) => (
                  <button
                    key={mode}
                    type="button"
                    onClick={() => setSelectedBg(mode)}
                    className={`px-3 py-1 rounded text-xs font-bold capitalize transition-colors ${
                      selectedBg === mode
                        ? 'bg-[#1D5BD8] text-white'
                        : 'text-[#94A3B8] hover:text-white'
                    }`}
                  >
                    {mode}
                  </button>
                ))}
              </div>
            </div>

            <div className={`p-8 md:p-12 rounded-2xl border transition-all duration-200 ${bgClasses[selectedBg]}`}>
              <div className="flex flex-col md:flex-row items-center justify-around gap-8">
                <div className="flex flex-col items-center gap-3">
                  <IDGLogoFull width={320} variant="full" />
                  <span className={`text-[11px] font-mono ${selectedBg === 'light' ? 'text-slate-600' : 'text-[#94A3B8]'}`}>
                    Full Lockup on {selectedBg}
                  </span>
                </div>

                <div className="h-px md:h-28 w-28 md:w-px bg-[#193B73]/40" />

                <div className="flex items-center gap-6">
                  <div className="flex flex-col items-center gap-2">
                    <IDGLogoIcon size={64} />
                    <span className={`text-[11px] font-mono ${selectedBg === 'light' ? 'text-slate-600' : 'text-[#94A3B8]'}`}>
                      Icon (64px)
                    </span>
                  </div>
                  <div className="flex flex-col items-center gap-2">
                    <IDGLogoIcon size={44} />
                    <span className={`text-[11px] font-mono ${selectedBg === 'light' ? 'text-slate-600' : 'text-[#94A3B8]'}`}>
                      Icon (44px)
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── COLOR PALETTE BREAKDOWN ─────────────────────────── */}
        <section className="py-12 md:py-16 border-b border-[#102447] bg-[#0B172E]/40">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-white mb-6">
              Official Color Tokens & Harmonization
            </h2>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
              <div className="p-4 rounded-xl bg-[#0B172E] border border-[#102447]">
                <div className="w-full h-12 rounded-lg bg-[#18B7B0] mb-3 shadow-inner" />
                <div className="text-white text-xs font-bold">Accent Teal</div>
                <div className="text-[#60A5FA] text-xs font-mono">#18B7B0</div>
                <div className="text-[#94A3B8] text-[10px] mt-1">Outer Gateway Arc</div>
              </div>

              <div className="p-4 rounded-xl bg-[#0B172E] border border-[#102447]">
                <div className="w-full h-12 rounded-lg bg-[#087E91] mb-3 shadow-inner" />
                <div className="text-white text-xs font-bold">Deep Teal</div>
                <div className="text-[#60A5FA] text-xs font-mono">#087E91</div>
                <div className="text-[#94A3B8] text-[10px] mt-1">Gradient Base Stop</div>
              </div>

              <div className="p-4 rounded-xl bg-[#0B172E] border border-[#102447]">
                <div className="w-full h-12 rounded-lg bg-[#D97706] mb-3 shadow-inner" />
                <div className="text-white text-xs font-bold">Status Gold</div>
                <div className="text-[#60A5FA] text-xs font-mono">#D97706</div>
                <div className="text-[#94A3B8] text-[10px] mt-1">IDG Blueprint Gold</div>
              </div>

              <div className="p-4 rounded-xl bg-[#0B172E] border border-[#102447]">
                <div className="w-full h-12 rounded-lg bg-[#0B172E] border border-[#193B73] mb-3 shadow-inner" />
                <div className="text-white text-xs font-bold">Surface Navy</div>
                <div className="text-[#60A5FA] text-xs font-mono">#0B172E</div>
                <div className="text-[#94A3B8] text-[10px] mt-1">Icon Rounded Shield</div>
              </div>

              <div className="p-4 rounded-xl bg-[#0B172E] border border-[#102447]">
                <div className="w-full h-12 rounded-lg bg-[#F1F5F9] mb-3 shadow-inner" />
                <div className="text-white text-xs font-bold">Sovereign White</div>
                <div className="text-[#60A5FA] text-xs font-mono">#F1F5F9</div>
                <div className="text-[#94A3B8] text-[10px] mt-1">Primary Wordmark</div>
              </div>

              <div className="p-4 rounded-xl bg-[#0B172E] border border-[#102447]">
                <div className="w-full h-12 rounded-lg bg-[#64748B] mb-3 shadow-inner" />
                <div className="text-white text-xs font-bold">Descriptor Slate</div>
                <div className="text-[#60A5FA] text-xs font-mono">#64748B</div>
                <div className="text-[#94A3B8] text-[10px] mt-1">Tagline Typography</div>
              </div>
            </div>
          </div>
        </section>

        {/* ── ASSET DOWNLOAD & PRODUCTION HANDOFF ─────────────── */}
        <section className="py-12 md:py-16 border-b border-[#102447]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="p-8 rounded-2xl bg-[#0B172E] border border-[#193B73]">
              <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
                <div>
                  <h3 className="text-xl font-bold text-white">
                    Exported Static Assets Ready in <code className="text-[#60A5FA] font-mono text-base">public/</code>
                  </h3>
                  <p className="text-[#94A3B8] text-sm mt-1 max-w-2xl">
                    All vector files have been written directly to the project root for deployment, SEO metadata, and favicon loading.
                  </p>
                </div>

                <div className="flex flex-wrap gap-3">
                  <a
                    href="/idg-logo.svg"
                    download="idg-logo.svg"
                    className="px-4 py-2 rounded-lg text-xs font-bold bg-[#1D5BD8] text-white hover:bg-[#1D5BD8]/80 transition-colors inline-flex items-center gap-1.5"
                  >
                    <span>Download Full SVG</span>
                  </a>
                  <a
                    href="/idg-logo-icon.svg"
                    download="idg-logo-icon.svg"
                    className="px-4 py-2 rounded-lg text-xs font-bold bg-[#102447] text-[#60A5FA] border border-[#193B73] hover:border-[#1D5BD8] transition-colors inline-flex items-center gap-1.5"
                  >
                    <span>Download Icon SVG</span>
                  </a>
                  <a
                    href="/favicon.ico"
                    download="favicon.ico"
                    className="px-4 py-2 rounded-lg text-xs font-bold bg-[#102447] text-slate-300 border border-[#193B73] hover:text-white transition-colors inline-flex items-center gap-1.5"
                  >
                    <span>Favicon (.ico)</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── BACK TO HOME ────────────────────────────────────── */}
        <div className="py-8 text-center">
          <Link
            href={`/${lang}`}
            className="inline-flex items-center gap-1.5 text-[#60A5FA] text-sm font-medium hover:text-white transition-colors"
          >
            ← {lang === 'ku' ? 'گەڕانەوە بۆ پەڕەی سەرەکی' : lang === 'ar' ? 'العودة إلى الصفحة الرئيسية' : 'Return to Home'}
          </Link>
        </div>
      </main>

      <Footer t={t} isRtl={isRtl} onOpenContact={() => setIsContactOpen(true)} />
      <ContactModal isOpen={isContactOpen} onClose={() => setIsContactOpen(false)} t={t} />
    </div>
  );
}
