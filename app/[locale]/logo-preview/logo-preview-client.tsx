'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { translations, Language } from '@/lib/translations';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import dynamic from 'next/dynamic';
import IDGLogoFull from '@/components/IDGLogoFull';
import IDGLogoIcon from '@/components/IDGLogoIcon';

const ContactModal = dynamic(() => import('@/components/ContactModal'), {
  ssr: false,
});

export default function LogoPreviewClient({ locale }: { locale: string }) {
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [activeVariant, setActiveVariant] = useState<'full' | 'compact'>('full');
  const [activeColorScheme, setActiveColorScheme] = useState<'blueprint' | 'teal'>('blueprint');
  const [selectedBg, setSelectedBg] = useState<'canvas' | 'surface' | 'navbar' | 'light'>('canvas');

  const lang: Language = locale === 'ar' || locale === 'en' ? locale : 'ku';
  const isRtl = lang === 'ku' || lang === 'ar';
  const t = translations[lang] || translations.ku;

  const bgClasses = {
    canvas: 'bg-[#060D1A] border-[#102447]',
    surface: 'bg-[#0B172E] border-[#193B73]',
    navbar: 'bg-[#0B172E]/95 backdrop-blur-md border-[#193B73]',
    light: 'bg-slate-50 border-slate-300 shadow-inner',
  };

  const isLight = selectedBg === 'light';

  return (
    <div
      dir={isRtl ? 'rtl' : 'ltr'}
      lang={lang}
      className="min-h-screen bg-[#060D1A] text-slate-100 overflow-x-hidden w-full max-w-full"
    >
      <Navbar lang={lang} onLanguageChange={() => {}} t={t} onOpenContact={() => setIsContactOpen(true)} />

      <main id="main-content" className="pt-20">
        {/* ── HEADER ────────────────────────────────────────── */}
        <section className="border-b border-[#102447] bg-[#0B172E]/80 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
            <div className="flex flex-wrap items-center gap-3 mb-4">
              <span className="inline-flex items-center px-2.5 py-0.5 rounded text-[10px] font-bold tracking-widest uppercase bg-[#1D5BD8]/20 text-[#60A5FA] border border-[#1D5BD8]/40">
                OFFICIAL REFINEMENT
              </span>
              <span className="inline-flex items-center px-2.5 py-0.5 rounded text-[10px] font-bold tracking-widest uppercase bg-emerald-950/60 text-emerald-400 border border-emerald-800/50">
                BLUEPRINT ALIGNED
              </span>
              <span className="inline-flex items-center px-2.5 py-0.5 rounded text-[10px] font-bold tracking-widest uppercase bg-amber-950/60 text-amber-400 border border-amber-800/50">
                INTER TYPOGRAPHY
              </span>
            </div>

            <h1 className="text-3xl md:text-5xl font-extrabold text-white mb-4 tracking-tight">
              {lang === 'ku'
                ? 'پێداچوونەوەی فەرمیی لۆگۆی IDG — دیزاینی نوێکراوە'
                : lang === 'ar'
                ? 'المراجعة الرسمية لشعار IDG — التصميم المحدّث'
                : 'IDG Official Logo Refinement & Specification'}
            </h1>

            <p className="text-[#94A3B8] text-base md:text-lg max-w-3xl leading-relaxed">
              {lang === 'ku'
                ? 'لۆگۆ بەپێی شێوازی فەرمیی عێراق نوێکرایەوە: ڕەنگەکان بە Blueprint Status Gold (#D97706) و Institutional Blue (#1D5BD8) ڕێکخران، فۆنت کرایە Inter، و وەشانێکی تایبەت بە ئایکۆن بۆ Favicon و قەبارەی بچووک (16px) تەرخانکرا.'
                : lang === 'ar'
                ? 'تم تحديث الشعار وفق معايير الهوية الوطنية: استبدال الألوان الذهبية بـ Status Gold (#D97706) والأزرق المؤسسي (#1D5BD8)، اعتماد خط Inter، وتخصيص أيقونة مبسطة للمقاسات الدقيقة (16px).'
                : 'National Digital Gateway mark refined with Blueprint tokens (Status Gold #D97706, Institutional Blue #1D5BD8 / Light Blue #60A5FA), Inter typography, and dual-layer architecture: Version A (Full Lockup) and Version B (Icon Only).'}
            </p>
          </div>
        </section>

        {/* ── 4 RESOLVED ISSUES STATUS ────────────────────────── */}
        <section className="border-b border-[#102447] bg-[#060D1A]/90 py-6">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="p-4 rounded-xl bg-[#0B172E] border border-[#102447]">
                <div className="text-xs font-bold text-emerald-400 mb-1">✓ ISSUE 1 FIXED</div>
                <div className="text-white text-sm font-semibold">Blueprint Color Sync</div>
                <div className="text-[#94A3B8] text-xs mt-1">
                  #18B7B0 → #60A5FA, #087E91 → #1D5BD8, #E5B653 → #D97706. Optional Teal preserved.
                </div>
              </div>

              <div className="p-4 rounded-xl bg-[#0B172E] border border-[#102447]">
                <div className="text-xs font-bold text-emerald-400 mb-1">✓ ISSUE 2 FIXED</div>
                <div className="text-white text-sm font-semibold">Inter Typography</div>
                <div className="text-[#94A3B8] text-xs mt-1">
                  Replaced Arial with Inter, system-ui across all headings & descriptors.
                </div>
              </div>

              <div className="p-4 rounded-xl bg-[#0B172E] border border-[#102447]">
                <div className="text-xs font-bold text-emerald-400 mb-1">✓ ISSUE 3 FIXED</div>
                <div className="text-white text-sm font-semibold">16px Favicon Icon</div>
                <div className="text-[#94A3B8] text-xs mt-1">
                  Simplified icon with NO tiny gold bar and NO noise dots. Pure gateway clarity.
                </div>
              </div>

              <div className="p-4 rounded-xl bg-[#0B172E] border border-[#102447]">
                <div className="text-xs font-bold text-emerald-400 mb-1">✓ ISSUE 4 FIXED</div>
                <div className="text-white text-sm font-semibold">AI Gate Harmony</div>
                <div className="text-[#94A3B8] text-xs mt-1">
                  Matching rx=28 rounded square, arched gateway curvature, and mathematical alignment.
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── INTERACTIVE CONTROLS STRIP ─────────────────────── */}
        <section className="py-4 border-b border-[#102447] bg-[#0B172E]/50 sticky top-20 z-30 backdrop-blur-md">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <span className="text-xs font-bold text-[#94A3B8] uppercase tracking-wider">Palette:</span>
              <button
                type="button"
                onClick={() => setActiveColorScheme('blueprint')}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                  activeColorScheme === 'blueprint'
                    ? 'bg-[#1D5BD8] text-white shadow-sm ring-1 ring-[#60A5FA]'
                    : 'bg-[#102447] text-[#94A3B8] hover:text-white'
                }`}
              >
                Blueprint Blue (Recommended)
              </button>
              <button
                type="button"
                onClick={() => setActiveColorScheme('teal')}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                  activeColorScheme === 'teal'
                    ? 'bg-[#087E91] text-white shadow-sm ring-1 ring-[#18B7B0]'
                    : 'bg-[#102447] text-[#94A3B8] hover:text-white'
                }`}
              >
                Supplemental Teal
              </button>
            </div>

            <div className="flex items-center gap-2">
              <span className="text-xs font-bold text-[#94A3B8] uppercase tracking-wider">Variant:</span>
              <button
                type="button"
                onClick={() => setActiveVariant('full')}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                  activeVariant === 'full'
                    ? 'bg-[#1D5BD8] text-white'
                    : 'bg-[#102447] text-[#94A3B8] hover:text-white'
                }`}
              >
                Full (+ Tagline)
              </button>
              <button
                type="button"
                onClick={() => setActiveVariant('compact')}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                  activeVariant === 'compact'
                    ? 'bg-[#1D5BD8] text-white'
                    : 'bg-[#102447] text-[#94A3B8] hover:text-white'
                }`}
              >
                Compact (Mark Only)
              </button>
            </div>

            <div className="flex items-center gap-2">
              <span className="text-xs font-bold text-[#94A3B8] uppercase tracking-wider">Background:</span>
              {(['canvas', 'surface', 'navbar', 'light'] as const).map((bg) => (
                <button
                  key={bg}
                  type="button"
                  onClick={() => setSelectedBg(bg)}
                  className={`px-2.5 py-1 rounded text-xs font-semibold capitalize transition-all ${
                    selectedBg === bg
                      ? 'bg-slate-200 text-slate-900 font-bold'
                      : 'bg-[#102447] text-[#94A3B8] hover:text-white'
                  }`}
                >
                  {bg}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* ── VERSION A: FULL LOCKUP ─────────────────────────── */}
        <section className="py-12 md:py-16 border-b border-[#102447]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-6">
              <span className="text-[#60A5FA] text-xs font-bold tracking-widest uppercase">
                VERSION A — FULL LOCKUP
              </span>
              <h2 className="text-2xl md:text-3xl font-bold text-white mt-1">
                components/IDGLogoFull.tsx
              </h2>
              <p className="text-[#94A3B8] text-sm mt-1">
                For header navigation, hero statements, print documentation, and corporate dossiers.
              </p>
            </div>

            {/* Interactive Stage */}
            <div className={`p-8 md:p-14 rounded-2xl border transition-all duration-300 flex flex-col items-center justify-center relative ${bgClasses[selectedBg]}`}>
              <div className="w-full max-w-[560px] flex items-center justify-center py-4">
                <IDGLogoFull
                  width={560}
                  variant={activeVariant}
                  colorScheme={activeColorScheme}
                  theme={isLight ? 'light' : 'dark'}
                />
              </div>
              <div className="mt-4 text-[11px] font-mono text-[#94A3B8]">
                Mode: {activeColorScheme.toUpperCase()} · Variant: {activeVariant.toUpperCase()} · Background: {selectedBg.toUpperCase()}
              </div>
            </div>

            {/* Multi-Size Matrix for Full Lockup */}
            <div className="mt-8">
              <h3 className="text-sm font-bold text-slate-300 uppercase tracking-wider mb-4">
                Full Lockup Scale Testing
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className={`p-6 rounded-xl border flex flex-col items-center justify-center gap-3 ${bgClasses[selectedBg]}`}>
                  <IDGLogoFull
                    width={360}
                    variant={activeVariant}
                    colorScheme={activeColorScheme}
                    theme={isLight ? 'light' : 'dark'}
                  />
                  <span className={`text-xs font-mono ${isLight ? 'text-slate-600' : 'text-[#94A3B8]'}`}>
                    360px (Hero / Large)
                  </span>
                </div>

                <div className={`p-6 rounded-xl border flex flex-col items-center justify-center gap-3 ${bgClasses[selectedBg]}`}>
                  <IDGLogoFull
                    width={280}
                    height={80}
                    variant={activeVariant}
                    colorScheme={activeColorScheme}
                    theme={isLight ? 'light' : 'dark'}
                  />
                  <span className={`text-xs font-mono ${isLight ? 'text-slate-600' : 'text-[#94A3B8]'}`}>
                    280px × 80px (Standard Default)
                  </span>
                </div>

                <div className={`p-6 rounded-xl border flex flex-col items-center justify-center gap-3 ${bgClasses[selectedBg]}`}>
                  <IDGLogoFull
                    width={190}
                    variant={activeVariant}
                    colorScheme={activeColorScheme}
                    theme={isLight ? 'light' : 'dark'}
                  />
                  <span className={`text-xs font-mono ${isLight ? 'text-slate-600' : 'text-[#94A3B8]'}`}>
                    190px (Compact Header)
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── VERSION B: ICON ONLY ────────────────────────────── */}
        <section className="py-12 md:py-16 border-b border-[#102447] bg-[#0B172E]/20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-6">
              <span className="text-emerald-400 text-xs font-bold tracking-widest uppercase">
                VERSION B — SIMPLIFIED ICON
              </span>
              <h2 className="text-2xl md:text-3xl font-bold text-white mt-1">
                components/IDGLogoIcon.tsx
              </h2>
              <p className="text-[#94A3B8] text-sm mt-1">
                Optimized for micro-dimensions: 16px Favicon, 32px Tab Icon, and 44px Mobile Navbar.
              </p>
            </div>

            {/* Icon Scale Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
              <div className={`p-6 rounded-xl border flex flex-col items-center justify-between gap-4 ${bgClasses[selectedBg]}`}>
                <IDGLogoIcon size={120} colorScheme={activeColorScheme} />
                <div className="text-center">
                  <div className={`text-xs font-bold ${isLight ? 'text-slate-900' : 'text-white'}`}>120px</div>
                  <div className={`text-[10px] ${isLight ? 'text-slate-600' : 'text-[#94A3B8]'}`}>App Store / PWA</div>
                </div>
              </div>

              <div className={`p-6 rounded-xl border flex flex-col items-center justify-between gap-4 ${bgClasses[selectedBg]}`}>
                <IDGLogoIcon size={72} colorScheme={activeColorScheme} />
                <div className="text-center">
                  <div className={`text-xs font-bold ${isLight ? 'text-slate-900' : 'text-white'}`}>72px</div>
                  <div className={`text-[10px] ${isLight ? 'text-slate-600' : 'text-[#94A3B8]'}`}>Card / Dashboard</div>
                </div>
              </div>

              <div className={`p-6 rounded-xl border flex flex-col items-center justify-between gap-4 ${bgClasses[selectedBg]}`}>
                <IDGLogoIcon size={44} colorScheme={activeColorScheme} />
                <div className="text-center">
                  <div className={`text-xs font-bold ${isLight ? 'text-slate-900' : 'text-white'}`}>44px (Default)</div>
                  <div className={`text-[10px] ${isLight ? 'text-slate-600' : 'text-[#94A3B8]'}`}>Mobile Navbar</div>
                </div>
              </div>

              <div className={`p-6 rounded-xl border flex flex-col items-center justify-between gap-4 ${bgClasses[selectedBg]}`}>
                <IDGLogoIcon size={32} colorScheme={activeColorScheme} />
                <div className="text-center">
                  <div className={`text-xs font-bold ${isLight ? 'text-slate-900' : 'text-white'}`}>32px</div>
                  <div className={`text-[10px] ${isLight ? 'text-slate-600' : 'text-[#94A3B8]'}`}>Browser Tab Icon</div>
                </div>
              </div>

              <div className={`p-6 rounded-xl border flex flex-col items-center justify-between gap-4 ${bgClasses[selectedBg]}`}>
                <div className="p-2.5 bg-[#060D1A] rounded-md border border-[#193B73]">
                  <IDGLogoIcon size={16} colorScheme={activeColorScheme} />
                </div>
                <div className="text-center">
                  <div className="text-emerald-400 text-xs font-bold">16px</div>
                  <div className={`text-[10px] ${isLight ? 'text-slate-600' : 'text-[#94A3B8]'}`}>Favicon Test</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── SIDE-BY-SIDE COLOR PALETTE COMPARISON ─────────── */}
        <section className="py-12 md:py-16 border-b border-[#102447]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-white mb-2">
              Color Variations Comparison
            </h2>
            <p className="text-[#94A3B8] text-sm mb-8">
              Side-by-side verification of the Blueprint Palette vs. Supplemental Teal Palette.
            </p>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Card 1: Blueprint */}
              <div className="p-8 rounded-2xl bg-[#0B172E] border border-[#1D5BD8]/50 shadow-xl">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-sm font-bold text-[#60A5FA]">
                    Variation 1: Blueprint Blue Palette
                  </span>
                  <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-[#1D5BD8] text-white">
                    PRIMARY BLUEPRINT
                  </span>
                </div>
                <div className="py-4 flex items-center justify-center bg-[#060D1A] rounded-xl border border-[#102447] mb-6">
                  <IDGLogoFull width={380} colorScheme="blueprint" variant="full" />
                </div>
                <div className="grid grid-cols-3 gap-2 text-xs">
                  <div className="p-2 rounded bg-[#102447]">
                    <div className="text-[#60A5FA] font-bold">#60A5FA</div>
                    <div className="text-[#94A3B8] text-[10px]">Light Blue</div>
                  </div>
                  <div className="p-2 rounded bg-[#102447]">
                    <div className="text-[#60A5FA] font-bold">#1D5BD8</div>
                    <div className="text-[#94A3B8] text-[10px]">Institutional Blue</div>
                  </div>
                  <div className="p-2 rounded bg-[#102447]">
                    <div className="text-amber-400 font-bold">#D97706</div>
                    <div className="text-[#94A3B8] text-[10px]">Status Gold</div>
                  </div>
                </div>
              </div>

              {/* Card 2: Teal */}
              <div className="p-8 rounded-2xl bg-[#0B172E] border border-[#087E91]/50 shadow-xl">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-sm font-bold text-[#18B7B0]">
                    Variation 2: Supplemental Teal Palette
                  </span>
                  <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-[#087E91] text-white">
                    SUPPLEMENTAL
                  </span>
                </div>
                <div className="py-4 flex items-center justify-center bg-[#060D1A] rounded-xl border border-[#102447] mb-6">
                  <IDGLogoFull width={380} colorScheme="teal" variant="full" />
                </div>
                <div className="grid grid-cols-3 gap-2 text-xs">
                  <div className="p-2 rounded bg-[#102447]">
                    <div className="text-[#18B7B0] font-bold">#18B7B0</div>
                    <div className="text-[#94A3B8] text-[10px]">Accent Teal</div>
                  </div>
                  <div className="p-2 rounded bg-[#102447]">
                    <div className="text-[#18B7B0] font-bold">#087E91</div>
                    <div className="text-[#94A3B8] text-[10px]">Deep Teal</div>
                  </div>
                  <div className="p-2 rounded bg-[#102447]">
                    <div className="text-amber-400 font-bold">#D97706</div>
                    <div className="text-[#94A3B8] text-[10px]">Status Gold</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── STATIC EXPORTS READY IN PUBLIC ─────────────────── */}
        <section className="py-12 md:py-16 border-b border-[#102447]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="p-8 rounded-2xl bg-[#0B172E] border border-[#193B73] flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
              <div>
                <h3 className="text-xl font-bold text-white">
                  Static Assets Exported & Live
                </h3>
                <p className="text-[#94A3B8] text-sm mt-1 max-w-xl">
                  Static vector & favicon files are published directly in <code className="text-[#60A5FA] font-mono">public/</code> for external consumers, metadata, and browser discovery.
                </p>
              </div>

              <div className="flex flex-wrap gap-3">
                <a
                  href="/idg-logo.svg"
                  download="idg-logo.svg"
                  className="px-4 py-2.5 rounded-lg text-xs font-bold bg-[#1D5BD8] text-white hover:bg-[#1D5BD8]/80 transition-colors"
                >
                  Download Full SVG
                </a>
                <a
                  href="/idg-logo-icon.svg"
                  download="idg-logo-icon.svg"
                  className="px-4 py-2.5 rounded-lg text-xs font-bold bg-[#102447] text-[#60A5FA] border border-[#193B73] hover:border-[#1D5BD8] transition-colors"
                >
                  Download Icon SVG
                </a>
                <a
                  href="/favicon.ico"
                  download="favicon.ico"
                  className="px-4 py-2.5 rounded-lg text-xs font-bold bg-[#102447] text-slate-300 border border-[#193B73] hover:text-white transition-colors"
                >
                  Download Favicon (.ico)
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* ── RETURN FOOTER ───────────────────────────────────── */}
        <div className="py-8 text-center">
          <Link
            href={`/${lang}`}
            className="inline-flex items-center gap-1.5 text-[#60A5FA] text-sm font-medium hover:text-white transition-colors"
          >
            ← {lang === 'ku' ? 'گەڕانەوە بۆ پەڕەی سەرەکی' : lang === 'ar' ? 'العودة إلى الرئيسية' : 'Back to Home'}
          </Link>
        </div>
      </main>

      <Footer t={t} isRtl={isRtl} onOpenContact={() => setIsContactOpen(true)} />
      <ContactModal isOpen={isContactOpen} onClose={() => setIsContactOpen(false)} t={t} />
    </div>
  );
}
