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
    <section className="py-24 bg-slate-900 text-white border-b border-slate-800" id="vision">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-bold text-blue-400 uppercase tracking-widest px-3 py-1 bg-slate-800 border border-slate-700 rounded-md mb-3" id="badge-vision-era">
            IDG Strategic Horizon
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4" id="vision-heading">
            {v.heading}
          </h2>
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal" id="vision-subheading">
            {v.subheading}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8" id="vision-phases-grid">
          {v.phases.map((phase, idx) => {
            const isCurrent = idx === 0;
            return (
              <div
                key={phase.era}
                className={`p-8 rounded-2xl border flex flex-col justify-between transition-all ${
                  isCurrent
                    ? 'bg-slate-800/90 border-blue-500/80 shadow-lg relative'
                    : 'bg-slate-950/60 border-slate-800 hover:border-slate-700'
                }`}
                id={`vision-phase-${idx}`}
              >
                {isCurrent && (
                  <span className="absolute -top-3 right-6 bg-blue-600 text-white text-[11px] font-bold px-3 py-0.5 rounded-full uppercase tracking-wider">
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
