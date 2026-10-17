'use client';

import React from 'react';
import { Target, Eye, Sparkles, CheckCircle2 } from 'lucide-react';

interface MissionVisionProps {
  locale: string;
}

export default function MissionVision({ locale }: MissionVisionProps) {
  const content = {
    ku: {
      badge: 'ئەرک و دیدگا • Mission & Vision',
      title: 'ئامانجی دامەزراندن و ئاسۆی داهاتوو',
      subtitle: 'ئاڕاستەی ستراتیژیمان بۆ داهاتووی دیجیتاڵیی عێراق و بونیادنانی ژێرخانی سەربەخۆ.',
      missionTitle: 'ئەرکی سەرەکیمان (Our Mission)',
      missionQuote: 'گەیاندنی تەکنۆلۆژیای ستراتیژی و سەروەردانی بۆ عێراق بۆ بەرەوپێشبردن و خودمێتیی نیشتمانی.',
      missionDesc:
        'کار دەکەین لەسەر گۆڕینی ئاڵۆزییە بیرۆکراتی و ئیدارییەکان بۆ سیستەمی بەیەکەوەبەستراوی پارێزراو. هێنانەکایەی تەکنەلۆژیا و بەڕێوەبردنی بەدەستی کادری عێراقی دەبێتە هۆی گەشەی ئابووری و سەربەخۆیی نیشتمانی.',
      missionPoints: [
        'بەنیشتمانیکردنی تەکنەلۆژیا و ڕاهێنانی ئەندازیارانی ناوخۆ',
        'بڕینی خەرجی و کەمکردنەوەی پشتبەستن بە سۆفتوێری دەرەکی',
        'پاراستنی سەرجەم داتا و مامەڵە دارایی و گشتییەکان لەناو عێراق',
      ],
      visionTitle: 'دیدگای داهاتوو (Our Vision)',
      visionQuote: 'عێراقێکی دیجیتاڵیی سەروەر کە خودی خۆی خاوەندارێتی و بەڕێوەبردنی ژێرخانی تەکنەلۆژیای خۆی دەکات.',
      visionDesc:
        'تا ساڵی ٢٠٣٥، عێراق خاوەنی تۆڕێکی دەوڵەمەندی ژێرخانی ئەلیکترۆنیی متمانەپێکراو دەبێت کە بە تەلارسازیی Zero-Trust کار دەکات؛ هەموو هاووڵاتییەک، دامەزراوەیەک، و سەرمایەگوزارێک لە کەشێکی دیجیتاڵیی سەلامەت و شەفافدا خزمەتگوزاری وەردەگرن.',
      visionPoints: [
        'ژێرخانی دیجیتاڵیی یەکگرتوو بە ستانداردی سەروەریی جیهانی',
        'پێشەنگی لە خزمەتگوزارییەکانی ژیریی دەستکردی نیشتمانی',
        'سەروەریی تەواوی داتا بەبێ دەستێوەردان و پشتبەستنی دەرەکی',
      ],
    },
    ar: {
      badge: 'الرسالة والرؤية • Mission & Vision',
      title: 'الغاية التأسيسية والآفاق المستقبلية',
      subtitle: 'توجهنا المؤسسي الاستراتيجي نحو الرقمنة الشاملة والسيادة التكنولوجية للعراق.',
      missionTitle: 'رسالتنا المؤسسية (Our Mission)',
      missionQuote: 'توصيل التكنولوجيا الاستراتيجية والحوكمة الرقمية إلى العراق لتحقيق التقدم الوطني والاعتماد الذاتي.',
      missionDesc:
        'تحويل التحديات والتعقيدات البيروقراطية إلى منظومات رقمية مؤتمتة وموثوقة، تمكّن المؤسسات الحكومية والخاصة من تقديم خدمات استثنائية وفق أعلى معايير الشفافية والمساءلة.',
      missionPoints: [
        'توطين التكنولوجيا وبناء الكفاءات البرمجية العراقية',
        'تقليص التكاليف والاعتماد على الحلول الخارجية المغلقة',
        'ضمان بقاء وتشفير البيانات الوطنية داخل الأراضي العراقية',
      ],
      visionTitle: 'رؤيتنا المستقبلية (Our Vision)',
      visionQuote: 'عراق رقمي ذو سيادة يمتلك ويدير بنيته التحتية التكنولوجية بنفسه.',
      visionDesc:
        'بحلول عام 2035، نسعى لترسيخ منظومة وطنية موحدة للبيانات والذكاء الاصطناعي السيادي، حيث تعمل كافة المؤسسات بكفاءة رقمية متكاملة تضمن استقلالية القرار الوطني وحماية المقدرات الرقمية للبلاد.',
      visionPoints: [
        'بنية تحتية رقمية موحدة وفق معايير الحوكمة الرشيدة',
        'ريادة إقليمية في تطبيقات الذكاء الاصطناعي السيادي',
        'استقلال تقني كامل يصون الأمن القومي والاقتصادي',
      ],
    },
    en: {
      badge: 'Mission & Vision • Institutional Anchor',
      title: 'Foundational Purpose & Horizon Vision',
      subtitle: 'Our permanent strategic roadmap for sovereign digitization and self-reliant technological capability.',
      missionTitle: 'Our Mission',
      missionQuote: 'Delivering strategic technology and digital governance to Iraq for national progress and self-reliance.',
      missionDesc:
        'Engineering connected, trusted enterprise platforms that bridge policy, sovereign data, and institutional venture creation, systematically eliminating friction from public and private sector operations.',
      missionPoints: [
        'Domesticating core platforms and developing local software talent',
        'Eliminating recurring foreign licensing dependencies and vendor lock-in',
        'Guaranteeing strict in-country data residency and zero-trust security',
      ],
      visionTitle: 'Our Vision',
      visionQuote: 'A digitally sovereign Iraq that owns and operates its own technology infrastructure.',
      visionDesc:
        'By 2035, Iraq will stand as an autonomous, high-resilience digital nation where national infrastructure is securely owned, governed by accountable Iraqi engineers, and delivering frictionless services across the economy.',
      visionPoints: [
        'Unified sovereign cloud and transactional infrastructure',
        'National leadership in applied artificial intelligence and automation',
        'Enduring institutional capability built for multi-decade stability',
      ],
    },
  };

  const t = content[locale as 'ku' | 'ar' | 'en'] || content.ku;

  return (
    <section className="py-16 sm:py-24 bg-[#060D1A] border-b border-[#102447]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#102447]/60 border border-[#193B73] text-xs font-semibold text-[#60A5FA] mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>{t.badge}</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-black text-white tracking-tight mb-4">
            {t.title}
          </h2>
          <p className="text-sm sm:text-base text-slate-400 leading-relaxed">
            {t.subtitle}
          </p>
        </div>

        {/* Two-Column Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Mission Card */}
          <div className="relative group bg-[#0B172E] border border-[#102447] hover:border-[#1D5BD8] rounded-3xl p-8 sm:p-10 transition-all duration-300 shadow-xl shadow-black/40 flex flex-col justify-between">
            <div>
              <div className="w-14 h-14 rounded-2xl bg-blue-500/10 border border-blue-500/20 text-blue-400 flex items-center justify-center mb-6 group-hover:scale-105 transition-transform">
                <Target className="w-7 h-7" />
              </div>

              <span className="text-xs font-bold text-blue-400 uppercase tracking-widest block mb-2">
                MISSION STATEMENT
              </span>

              <h3 className="text-xl sm:text-2xl font-black text-white mb-4">
                {t.missionTitle}
              </h3>

              <blockquote className="p-4 rounded-xl bg-[#060D1A] border-s-4 border-[#2563EB] text-sm sm:text-base font-semibold text-slate-200 leading-relaxed mb-6 italic">
                “{t.missionQuote}”
              </blockquote>

              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed mb-6">
                {t.missionDesc}
              </p>
            </div>

            <ul className="space-y-2.5 pt-6 border-t border-[#102447]">
              {t.missionPoints.map((point, idx) => (
                <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Vision Card */}
          <div className="relative group bg-[#0B172E] border border-[#102447] hover:border-[#1D5BD8] rounded-3xl p-8 sm:p-10 transition-all duration-300 shadow-xl shadow-black/40 flex flex-col justify-between">
            <div>
              <div className="w-14 h-14 rounded-2xl bg-amber-500/10 border border-amber-500/20 text-[#F59E0B] flex items-center justify-center mb-6 group-hover:scale-105 transition-transform">
                <Eye className="w-7 h-7" />
              </div>

              <span className="text-xs font-bold text-[#F59E0B] uppercase tracking-widest block mb-2">
                VISION 2035 HORIZON
              </span>

              <h3 className="text-xl sm:text-2xl font-black text-white mb-4">
                {t.visionTitle}
              </h3>

              <blockquote className="p-4 rounded-xl bg-[#060D1A] border-s-4 border-[#F59E0B] text-sm sm:text-base font-semibold text-slate-200 leading-relaxed mb-6 italic">
                “{t.visionQuote}”
              </blockquote>

              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed mb-6">
                {t.visionDesc}
              </p>
            </div>

            <ul className="space-y-2.5 pt-6 border-t border-[#102447]">
              {t.visionPoints.map((point, idx) => (
                <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-[#F59E0B] shrink-0 mt-0.5" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
