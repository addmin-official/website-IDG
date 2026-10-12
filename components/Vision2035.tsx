'use client';

import React from 'react';
import { TranslationData } from '@/lib/translations';
import { Calendar, Target, Compass, ChevronRight } from 'lucide-react';

interface Vision2035Props {
  t: TranslationData;
}

export default function Vision2035({ t }: Vision2035Props) {
  const v = t.vision;

  return (
    <section className="py-10 sm:py-16 md:py-24 bg-[#060D1A] text-white border-b border-[#102447]" id="vision">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="max-w-3xl mb-10 sm:mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-bold text-blue-400 uppercase tracking-widest px-3 py-1 bg-[#0B172E] border border-[#102447] rounded-md mb-3" id="badge-vision-era">
            IDG Strategic Horizon
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-3 sm:mb-4" id="vision-heading">
            {v.heading}
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-slate-300 leading-relaxed font-normal" id="vision-subheading">
            {v.subheading}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8" id="vision-phases-grid">
          {v.phases.map((phase, idx) => {
            const isCurrent = idx === 0;
            return (
              <div
                key={phase.era}
                className={`p-5 sm:p-6 md:p-8 rounded-xl sm:rounded-2xl border flex flex-col justify-between transition-all ${
                  isCurrent
                    ? 'bg-[#0B172E] border-[#1D5BD8] shadow-lg relative'
                    : 'bg-[#0B172E]/70 border-[#102447] hover:border-[#193B73]'
                }`}
                id={`vision-phase-${idx}`}
              >
                {isCurrent && (
                  <span className="absolute -top-3 start-6 bg-[#1D5BD8] text-white text-[11px] font-bold px-3 py-0.5 rounded-full uppercase tracking-wider">
                    قۆناغی چالاک
                  </span>
                )}
                
                <div>
                  <div className="flex items-center gap-2 text-blue-400 text-xs font-mono font-bold mb-3">
                    <Calendar className="w-4 h-4" />
                    <span>{phase.era}</span>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-3 leading-snug">
                    {phase.title}
                  </h3>

                  <div className="p-3 rounded-lg bg-slate-900/80 border border-slate-800 text-xs font-medium text-slate-300 mb-4">
                    <span className="text-blue-400 block mb-1 font-bold">ئامانجی پێوانەیی:</span>
                    {phase.target}
                  </div>

                  <p className="text-sm text-slate-400 leading-relaxed">
                    {phase.focus}
                  </p>
                </div>

                <div className="mt-8 pt-4 border-t border-slate-800 text-xs text-slate-500 flex justify-between items-center">
                  <span>دەستپێشخەریی ٢٠٣٥</span>
                  <span className="font-mono">PHASE-0{idx + 1}</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
