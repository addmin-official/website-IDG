'use client';

import React from 'react';
import { TranslationData } from '@/lib/translations';
import { Shield, ChevronDown, CheckCircle2, ArrowLeft, ArrowRight } from 'lucide-react';

interface HeroProps {
  t: TranslationData;
  isRtl: boolean;
}

export default function Hero({ t, isRtl }: HeroProps) {
  return (
    <section className="relative bg-[#060D1A] text-white pt-10 sm:pt-16 md:pt-20 lg:pt-24 pb-12 sm:pb-16 md:pb-20 overflow-hidden border-b border-[#102447]" id="hero">
      {/* Subtle Sovereign Mesh Pattern */}
      <div className="absolute inset-0 opacity-[0.07] bg-[radial-gradient(#1D5BD8_1px,transparent_1px)] [background-size:20px_20px] pointer-events-none" />
      
      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        {/* Parent Authority Pill */}
        <div className="inline-flex items-center gap-2 px-3 sm:px-3.5 py-1.5 rounded-full bg-[#0B172E] border border-[#102447] text-xs text-[#60A5FA] font-medium mb-6 sm:mb-8" id="hero-sovereign-tag">
          <Shield className="w-3.5 h-3.5 text-[#60A5FA]" />
          <span>{t.parentBadge}</span>
          <span className="w-1 h-1 rounded-full bg-slate-500" />
          <span className="text-slate-300">{t.hero.stats.stat1Val}</span>
        </div>

        {/* Headline */}
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black leading-[1.25] sm:leading-[1.18] tracking-tight text-white mb-6 sm:mb-8" id="hero-main-title">
          {t.hero.headline}
        </h1>

        {/* Subhead */}
        <p className="text-sm sm:text-base md:text-lg lg:text-xl text-slate-300 mb-8 sm:mb-12 max-w-3xl mx-auto leading-relaxed font-normal" id="hero-subhead">
          {t.hero.subhead}
        </p>

        {/* Action CTAs */}
        <div className="flex flex-col sm:flex-row justify-center items-stretch sm:items-center gap-3 sm:gap-4 mb-10 sm:mb-16" id="hero-actions-container">
          <a
            href="#portfolio"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#1D5BD8] hover:bg-[#193B73] text-white font-semibold py-3 px-6 sm:px-8 rounded-xl transition-all shadow-md hover:shadow-blue-900/30 text-sm sm:text-base border border-[#1D5BD8]/40 min-h-[46px]"
            id="btn-hero-explore-portfolio"
          >
            <span>{t.hero.exploreBtn}</span>
            {isRtl ? <ArrowLeft className="w-4 h-4" /> : <ArrowRight className="w-4 h-4" />}
          </a>
          <a
            href="#vision"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#0B172E] hover:bg-[#102447] border border-[#102447] text-slate-200 hover:text-white font-semibold py-3 px-6 sm:px-8 rounded-xl transition-colors text-sm sm:text-base min-h-[46px]"
            id="btn-hero-vision"
          >
            <span>{t.hero.visionBtn}</span>
            <ChevronDown className="w-4 h-4 text-slate-400" />
          </a>
        </div>

        {/* Sovereign Architecture Proof Strip */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 pt-6 sm:pt-8 border-t border-[#102447] max-w-4xl mx-auto w-full" id="hero-proof-strip">
          <div
            className="p-4 sm:p-5 rounded-xl bg-[#0B172E] border border-[#102447] flex flex-col items-center gap-1 w-full"
            aria-label={`${t.hero.stats.stat1Label}: ${t.hero.stats.stat1Val}`}
          >
            <span className="text-[11px] uppercase tracking-widest text-slate-500 font-semibold text-center">
              {t.hero.stats.stat1Label}
            </span>
            <span className="text-2xl sm:text-3xl font-black text-white tabular-nums">
              {t.hero.stats.stat1Val}
            </span>
            <CheckCircle2 className="w-3.5 h-3.5 text-[#059669] mt-0.5" aria-hidden="true" />
          </div>

          <div
            className="p-4 sm:p-5 rounded-xl bg-[#0B172E] border border-[#102447] flex flex-col items-center gap-1 w-full"
            aria-label={`${t.hero.stats.stat2Label}: ${t.hero.stats.stat2Val}`}
          >
            <span className="text-[11px] uppercase tracking-widest text-slate-500 font-semibold text-center">
              {t.hero.stats.stat2Label}
            </span>
            <span className="text-2xl sm:text-3xl font-black text-white tabular-nums">
              {t.hero.stats.stat2Val}
            </span>
            <CheckCircle2 className="w-3.5 h-3.5 text-[#1D5BD8] mt-0.5" aria-hidden="true" />
          </div>

          <div
            className="p-4 sm:p-5 rounded-xl bg-[#0B172E] border border-[#102447] flex flex-col items-center gap-1 w-full"
            aria-label={`${t.hero.stats.stat3Label}: ${t.hero.stats.stat3Val}`}
          >
            <span className="text-[11px] uppercase tracking-widest text-slate-500 font-semibold text-center">
              {t.hero.stats.stat3Label}
            </span>
            <span className="text-2xl sm:text-3xl font-black text-white tabular-nums">
              {t.hero.stats.stat3Val}
            </span>
            <CheckCircle2 className="w-3.5 h-3.5 text-[#60A5FA] mt-0.5" aria-hidden="true" />
          </div>
        </div>

      </div>
    </section>
  );
}
