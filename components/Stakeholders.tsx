'use client';

import React from 'react';
import { TranslationData } from '@/lib/translations';

interface StakeholdersProps {
  t: TranslationData;
  isRtl?: boolean;
  onOpenContact?: () => void;
}

export default function Stakeholders({ t, isRtl = true, onOpenContact }: StakeholdersProps) {
  const s = t.stakeholders;

  const items = s.items && s.items.length > 0 ? s.items : [
    {
      icon: '🏛️',
      title: 'حکومەت',
      desc: 'هاوبەشی ستراتیژی بۆ گۆڕانکاری و خزمەتگوزاریی گشتی. ئامانجمان بەرزکردنەوەی توانای دامەزراوەیی، لێپرسینەوە، هاوکاریی سیستەمەکان و سەروەریی نیشتمانییە.',
      actionText: 'داواکردنی کۆبوونەوەی ستراتیژی ←',
    },
    {
      icon: '🏢',
      title: 'کەرتی تایبەت',
      desc: 'پلاتفۆرم و بازاڕی متمانەپێکراو. یارمەتی کۆمپانیاکان دەدەین بۆ بەرهەمهێنان، مامەڵەی شەفاف، دەستڕاگەیشتن بە بازاڕ و ژیریی کارپێکردن.',
      actionText: 'ئاشنابوون بە چارەسەرەکان ←',
    },
    {
      icon: '📈',
      title: 'سەرمایەگوزاران',
      desc: 'لۆژیکی پۆرتفۆلیۆی دیسپلینکراو. دابینکردنی ئابوورییەکی متمانەپێکراو، مەترسیی شەفاف، و دروستکردنی بەهای درێژخایەن لە بازاڕی عێراقدا.',
      actionText: 'بینینی ماتریکسی وەبەرهێنان ←',
    },
    {
      icon: '🎓',
      title: 'زانکۆکان و توێژینەوە',
      desc: 'بەستەرێکی بەهێز لەنێوان زانیاری و پێداویستییە نیشتمانییەکان. بەرهەمهێنانی توێژینەوەی بەکارهاتوو، ستانداردی هاوبەش و گەشەپێدانی بەهرە.',
      actionText: 'پرۆگرامەکانی توێژینەوە ←',
    },
    {
      icon: '🌍',
      title: 'ڕێکخراوە نێودەوڵەتییەکان',
      desc: 'بەرنامەی خاوەندارێتی ناوخۆیی و گەیاندنی بەرپرسیارانە. کاردەکەین بۆ یارمەتیی تەکنیکی، ستاندارد و توانای دامەزراوەیی سەلمێنراو.',
      actionText: 'هاوبەشییەکانی گەشەپێدان ←',
    },
    {
      icon: '👥',
      title: 'هاووڵاتیان و کۆمەڵگە',
      desc: 'ئەزموونی دیجیتاڵی بەسوود و پارێزراو. مسۆگەرکردنی سیستەمی دەستڕاگەیشتوو، مافە پارێزراوەکان، و بەشداریکردنی شەفاف بۆ خاوەن مافەکان.',
      actionText: 'پێوەرەکانی متمانە ←',
    },
  ];

  return (
    <div
      className="bg-[#060D1A] text-slate-100 min-h-screen font-sans w-full overflow-hidden"
      dir={isRtl ? 'rtl' : 'ltr'}
      id="stakeholders"
    >
      {/* Hero Section */}
      <section className="bg-[#0B172E] text-white py-10 sm:py-14 md:py-20 border-b border-[#102447]" id="stakeholders-hero">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center md:text-start">
          <h1
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4 leading-tight text-slate-100"
            id="stakeholders-hero-title"
          >
            {s.heroTitle}
          </h1>
          <p
            className="text-sm sm:text-base md:text-lg text-slate-300 max-w-3xl leading-relaxed mx-auto md:mx-0"
            id="stakeholders-hero-desc"
          >
            {s.heroDesc}
          </p>
        </div>
      </section>

      {/* Stakeholders Grid */}
      <section className="py-10 sm:py-14 md:py-20 bg-[#060D1A]" id="stakeholders-grid-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8"
            id="stakeholders-cards-grid"
          >
            {items.map((item, idx) => (
              <div
                key={idx}
                className="p-5 sm:p-6 md:p-8 bg-[#0B172E] rounded-xl sm:rounded-2xl border border-[#102447] hover:border-[#1D5BD8] hover:shadow-lg transition group flex flex-col justify-between"
                id={`stakeholder-card-${idx}`}
              >
                <div>
                  <div className="text-4xl mb-4" id={`stakeholder-icon-${idx}`}>
                    {item.icon}
                  </div>
                  <h3
                    className="text-xl md:text-2xl font-bold text-slate-100 mb-3"
                    id={`stakeholder-title-${idx}`}
                  >
                    {item.title}
                  </h3>
                  <p
                    className="text-sm md:text-base text-slate-400 mb-4 leading-relaxed"
                    id={`stakeholder-desc-${idx}`}
                  >
                    {item.desc}
                  </p>
                </div>

                <button
                  type="button"
                  onClick={() => onOpenContact && onOpenContact()}
                  className={`text-blue-400 hover:text-blue-300 font-semibold text-sm group-hover:underline cursor-pointer inline-flex items-center gap-1.5 transition mt-2 text-start p-0 bg-transparent border-0`}
                  id={`stakeholder-action-${idx}`}
                >
                  <span>{item.actionText}</span>
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partnership Rules */}
      <section className="py-12 md:py-20 bg-[#060D1A] border-t border-[#102447]" id="partnership-rules-section">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div
            className="bg-[#0B172E] rounded-2xl p-6 md:p-10 shadow-sm border border-[#102447]"
            id="partnership-rules-card"
          >
            <h2
              className="text-2xl font-bold text-slate-100 mb-4"
              id="partnership-rules-title"
            >
              {s.rulesTitle}
            </h2>
            <p
              className="text-slate-400 mb-6 max-w-4xl leading-relaxed text-sm md:text-base"
              id="partnership-rules-desc"
            >
              {s.rulesDesc}
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
