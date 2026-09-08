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
      className="bg-gray-50 text-gray-900 min-h-screen font-sans"
      dir={isRtl ? 'rtl' : 'ltr'}
      id="stakeholders"
    >
      {/* Hero Section */}
      <section className="bg-slate-900 text-white py-12 md:py-20" id="stakeholders-hero">
        <div className={`max-w-7xl mx-auto px-4 md:px-6 ${isRtl ? 'text-center md:text-right' : 'text-center md:text-left'}`}>
          <h1
            className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 leading-tight"
            id="stakeholders-hero-title"
          >
            {s.heroTitle}
          </h1>
          <p
            className="text-base md:text-lg text-slate-300 max-w-3xl leading-relaxed mx-auto md:mx-0"
            id="stakeholders-hero-desc"
          >
            {s.heroDesc}
          </p>
        </div>
      </section>

      {/* Stakeholders Grid */}
      <section className="py-12 md:py-20 bg-white" id="stakeholders-grid-section">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
            id="stakeholders-cards-grid"
          >
            {items.map((item, idx) => (
              <div
                key={idx}
                className="p-6 md:p-8 bg-slate-50 rounded-xl border border-slate-200 hover:border-blue-400 hover:shadow-lg transition group flex flex-col justify-between"
                id={`stakeholder-card-${idx}`}
              >
                <div>
                  <div className="text-4xl mb-4" id={`stakeholder-icon-${idx}`}>
                    {item.icon}
                  </div>
                  <h3
                    className="text-xl md:text-2xl font-bold text-slate-800 mb-3"
                    id={`stakeholder-title-${idx}`}
                  >
                    {item.title}
                  </h3>
                  <p
                    className="text-sm md:text-base text-slate-600 mb-4 leading-relaxed"
                    id={`stakeholder-desc-${idx}`}
                  >
                    {item.desc}
                  </p>
                </div>

                <button
                  type="button"
                  onClick={() => onOpenContact && onOpenContact()}
                  className={`text-blue-600 font-semibold text-sm group-hover:underline cursor-pointer inline-flex items-center gap-1.5 transition mt-2 text-start p-0 bg-transparent border-0`}
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
      <section className="py-12 md:py-20 bg-slate-100 border-t border-gray-200" id="partnership-rules-section">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div
            className="bg-white rounded-2xl p-6 md:p-10 shadow-sm border border-slate-200"
            id="partnership-rules-card"
          >
            <h2
              className="text-2xl font-bold text-slate-800 mb-4"
              id="partnership-rules-title"
            >
              {s.rulesTitle}
            </h2>
            <p
              className="text-slate-600 mb-6 max-w-4xl leading-relaxed text-sm md:text-base"
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
