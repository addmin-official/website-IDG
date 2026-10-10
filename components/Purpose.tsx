'use client';

import React from 'react';
import { TranslationData } from '@/lib/translations';
import { Scale, Cpu, ShieldCheck, Layers } from 'lucide-react';

interface PurposeProps {
  t: TranslationData;
}

const pillarIcons = [Scale, Cpu, ShieldCheck, Layers];

export default function Purpose({ t }: PurposeProps) {
  return (
    <section className="py-24 bg-[#060D1A] text-slate-100 border-b border-[#102447] w-full overflow-hidden" id="purpose">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block text-xs font-bold text-blue-400 uppercase tracking-widest px-3 py-1 bg-[#102447] border border-[#193B73] rounded-md mb-4" id="badge-purpose-mission">
            IDG Core Purpose
          </div>
          <h2 className="text-2xl sm:text-4xl font-bold text-slate-100 mb-6 leading-tight" id="purpose-heading">
            {t.purpose.heading}
          </h2>
          <p className="text-base sm:text-lg text-slate-400 leading-relaxed font-normal" id="purpose-subheading">
            {t.purpose.subheading}
          </p>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6" id="purpose-pillars-grid">
          {t.purpose.pillars.map((pillar, idx) => {
            const Icon = pillarIcons[idx] || ShieldCheck;
            return (
              <div
                key={pillar.title}
                className="p-8 bg-[#0B172E] hover:bg-[#102447]/60 rounded-xl border border-[#102447] hover:border-[#1D5BD8] transition-all shadow-xs flex flex-col justify-between"
                id={`purpose-card-${idx}`}
              >
                <div>
                  <div className="w-12 h-12 rounded-lg bg-[#102447] text-blue-400 border border-[#193B73] flex items-center justify-center mb-6">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-100 mb-3" id={`purpose-card-title-${idx}`}>
                    {pillar.title}
                  </h3>
                  <p className="text-slate-400 text-sm leading-relaxed" id={`purpose-card-desc-${idx}`}>
                    {pillar.desc}
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-[#102447] text-xs font-semibold text-slate-500 font-mono">
                  0{idx + 1} / 04
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
