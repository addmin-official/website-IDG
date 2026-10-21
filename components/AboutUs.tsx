'use client';

import React from 'react';
import { TranslationData } from '@/lib/translations';
import {
  ShieldCheck,
  CheckCircle2,
  Cpu,
  Layers,
  Sparkles,
  ArrowRight,
  ArrowLeft,
} from 'lucide-react';

interface AboutUsProps {
  t: TranslationData;
  isRtl?: boolean;
  onOpenContact?: () => void;
}

export default function AboutUs({ t, isRtl = true, onOpenContact }: AboutUsProps) {
  const a = t.about;
  const ArrowIcon = isRtl ? ArrowLeft : ArrowRight;

  return (
    <section className="py-10 sm:py-16 md:py-20 lg:py-28 bg-[#060D1A] text-slate-100 border-b border-[#102447] w-full overflow-hidden" id="about">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Header */}
        <div className="max-w-4xl mx-auto text-center mb-10 sm:mb-16 md:mb-20">
          <div
            className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-400 bg-[#102447] px-3 py-1.5 rounded-full border border-[#193B73] mb-3 sm:mb-4"
            id="about-badge"
          >
            <ShieldCheck className="w-3.5 h-3.5 text-blue-400" />
            <span>{a.badge}</span>
          </div>
          <h2
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-slate-100 tracking-tight leading-tight mb-4 sm:mb-6"
            id="about-heading"
          >
            {a.heading}
          </h2>
          <p
            className="text-sm sm:text-base md:text-lg lg:text-xl text-slate-400 leading-relaxed font-normal max-w-3xl mx-auto"
            id="about-subheading"
          >
            {a.subheading}
          </p>
        </div>

        {/* Vision 2035, Mission & Invariant Values Grid */}
        <div className="grid md:grid-cols-2 gap-6 sm:gap-8 md:gap-12 items-center mb-12 sm:mb-20 md:mb-28" id="about-vision-mission-values-grid">
          <div className="bg-[#0B172E] p-5 sm:p-6 md:p-8 rounded-xl sm:rounded-2xl border border-[#102447]" id="about-vision-mission-card">
            <h3 className="text-2xl font-bold text-slate-100 mb-4">
              <span aria-hidden="true" className="me-2">👁️</span>
              <span>{a.visionTitle.replace(' 👁️', '').replace('👁️', '').trim()}</span>
            </h3>
            <p className="text-slate-400 mb-6 leading-relaxed" id="about-vision-description">
              {a.visionDesc}
            </p>
            <h3 className="text-2xl font-bold text-slate-100 mb-4">
              <span aria-hidden="true" className="me-2">🎯</span>
              <span>{a.missionTitle.replace(' 🎯', '').replace('🎯', '').trim()}</span>
            </h3>
            <p className="text-slate-400 leading-relaxed">
              {a.missionDesc}
            </p>
          </div>
          <div className="space-y-6" id="about-values-list-card">
            <h3 className="text-xl font-bold text-slate-100">{a.coreValuesTitle}</h3>
            <ul className="space-y-4 text-slate-300">
              {a.coreValuesList.map((item, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <span className="text-blue-400 font-bold">✓</span>
                  <span><strong>{item.label}</strong>{item.text}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Transforming Complexity into Reliable Capabilities - Pipeline */}
        <div className="bg-[#0B172E] text-slate-100 rounded-3xl p-8 sm:p-12 md:p-16 relative overflow-hidden shadow-2xl border border-[#102447]" id="about-transformation-pipeline">
          <div className="max-w-3xl mb-12">
            <div className="inline-flex items-center gap-2 text-xs font-bold text-blue-400 uppercase tracking-widest bg-[#102447] px-3 py-1.5 rounded-md border border-[#193B73] mb-4">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Operational Capability Transformation</span>
            </div>
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-100 mb-4 leading-tight" id="about-trans-title">
              {a.transformationTitle}
            </h3>
            <p className="text-sm sm:text-base text-slate-400 leading-relaxed" id="about-trans-desc">
              {a.transformationDesc}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6" id="about-stages-grid">
            {a.transformationStages.map((stage, idx) => (
              <div
                key={idx}
                className="bg-[#060D1A] rounded-2xl p-6 border border-[#102447] flex flex-col justify-between hover:border-[#1D5BD8] transition group"
                id={`about-stage-card-${idx}`}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-mono text-2xl sm:text-3xl font-extrabold text-blue-400">
                      {stage.step}
                    </span>
                    <div className="w-8 h-8 rounded-lg bg-[#102447] text-slate-300 flex items-center justify-center group-hover:bg-[#1D5BD8] group-hover:text-white transition">
                      {idx === 0 ? <Layers className="w-4 h-4" /> : idx === 1 ? <Cpu className="w-4 h-4" /> : idx === 2 ? <ShieldCheck className="w-4 h-4" /> : <CheckCircle2 className="w-4 h-4" />}
                    </div>
                  </div>
                  <h4 className="text-lg font-bold text-slate-100 mb-1.5" id={`about-stage-title-${idx}`}>
                    {stage.title}
                  </h4>
                  <p className="text-xs font-semibold text-blue-400 mb-3" id={`about-stage-sub-${idx}`}>
                    {stage.subtitle}
                  </p>
                  <p className="text-xs text-slate-400 leading-relaxed mb-4" id={`about-stage-desc-${idx}`}>
                    {stage.desc}
                  </p>
                </div>

                <div className="pt-4 border-t border-[#102447]">
                  <span className="text-[11px] font-semibold text-slate-500 block mb-1">
                    Operational Deliverable:
                  </span>
                  <span className="text-xs font-bold text-slate-200 block" id={`about-stage-outcome-${idx}`}>
                    {stage.outcome}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom Action Note */}
          <div className="mt-12 pt-8 border-t border-[#102447] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
            <p>
              Transforming complex multi-agency procedures into auditable, instant digital transactions across Iraq.
            </p>
            {onOpenContact && (
              <button
                type="button"
                onClick={onOpenContact}
                className="inline-flex items-center gap-2 text-white font-bold bg-[#1D5BD8] hover:bg-blue-600 px-5 py-2.5 rounded-xl transition cursor-pointer text-xs shrink-0"
                id="btn-about-partnership"
              >
                <span>Request Architectural Assessment</span>
                <ArrowIcon className="w-4 h-4" />
              </button>
            )}
          </div>
        </div>

      </div>
    </section>
  );
}
