'use client';

import React from 'react';
import { Calendar, Sparkles, CheckCircle2 } from 'lucide-react';

interface TimelineProps {
  locale: string;
}

export default function Timeline({ locale }: TimelineProps) {
  const content = {
    ku: {
      badge: 'مێژوو و قۆناغەکان • Historical Milestones',
      title: 'ڕێڕەوی گەشەکردن: لە بیرۆکەوە بۆ ژێرخانی سەروەر',
      subtitle: 'هەنگاوە سەرەکییەکانی گەشەکردنی دەروازەی دیجیتاڵیی عێراق لە دروستبوونییەوە تا ئەمرۆ.',
      milestones: [
        {
          year: '٢٠١٥',
          title: 'دامەزراندن وەک دیدگایەکی سەروەر',
          subtitle: 'دەستپێکی داڕشتنی بیرۆکەی سەربەخۆیی تەکنەلۆژیا',
          description:
            'دەستپێکردنی لێکۆڵینەوەیەکی مەیدانی بۆ تێگەیشتن لە ئاستەنگە بونیادییەکانی بەردەم بەدیجیتاڵیکردنی دامەزراوەکانی عێراق و دارشتنی نەخشەڕێگای سەربەخۆیی داتا.',
          tag: 'قۆناغی دیدگا',
        },
        {
          year: '٢٠١٨',
          title: 'خستنەگەڕی یەکەمین بەرهەم و سیستەمەکان',
          subtitle: 'تەلارسازیی پرۆتۆکۆڵە سەرەتاییەکانی بەیەکەوەبەستن',
          description:
            'خستنەگەڕی یەکەمین پرۆتۆتایپی پلاتفۆرمە دامەزراوەییەکان لە هەرێمی کوردستان و بەغدا، بە مەبەستی تاقیکردنەوەی خێرایی و متمانەپێکراوی لە ژینگەی واقعدا.',
          tag: 'تاقیکردنەوەی مەیدانی',
        },
        {
          year: '٢٠٢١',
          title: 'فراوانبوون بۆ سەرجەم پارێزگاکانی عێراق',
          subtitle: 'دامەزراندنی هاوبەشیی ستراتیژی لەگەڵ کەرتی گشتی و تایبەت',
          description:
            'فراوانکردنی خزمەتگوزارییەکان بۆ کەرتی گومرگ، دەروازە سنورییەکان، و ژێرخانی ترانزێت؛ یەکخستنی سیستەمی کۆنترۆڵی پارێزراو لەنێوان وەزارەتەکان.',
          tag: 'فراوانبوونی نیشتمانی',
        },
        {
          year: '٢٠٢٤',
          title: 'بونیادنانی ژێرخانی تەکنەلۆژیای سەروەر',
          subtitle: 'مۆدێلی ستۆدیۆی وەبەرهێنان (Venture Studio)',
          description:
            'پەرەپێدانی پڕۆژە نیشتمانییە ستراتیژییەکان وەک پەنجەرەی یەکگرتووی نیشتمانیی عێراق (INSW) بە ستاندارد و داتاسەنتەری خۆجێیی بەرز.',
          tag: 'سەروەریی تەواو',
        },
        {
          year: '٢٠٢٥',
          title: 'ڕاگەیاندنی ZaNa Academy و پلاتفۆرمی AI Gate',
          subtitle: 'پێگەیاندنی نەوەی نوێ و ئۆتۆمەیشنی پێشکەوتوو',
          description:
            'دەستپێکردنی ئەکادیمیای ZaNa بۆ پەروەردەی پسپۆڕانی عێراقی، لەپاڵ خستنەگەڕی مۆدێلە خۆماڵییەکانی ژیریی دەستکرد بۆ خزمەتگوزارییە گشتییەکان.',
          tag: 'ژیریی دەستکرد و پەروەردە',
        },
      ],
    },
    ar: {
      badge: 'المسار الزمني • Historical Milestones',
      title: 'محطات النمو: من الرؤية إلى البنية التحتية السيادية',
      subtitle: 'أبرز المراحل المفصلية في مسيرة بناء بوابة العراق الرقمية وتطور قدراتها المؤسسية.',
      milestones: [
        {
          year: '2015',
          title: 'التأسيس كرؤية سيادية مستقلة',
          subtitle: 'الانطلاق نحو صياغة مفهوم الاستقلال التكنولوجي',
          description:
            'إجراء دراسات معمقة لتحديد الفجوات الهيكلية في الأنظمة الحكومية واللوجستية العراقية ووضع المخطط الأولي لحوكمة وتوطين البيانات.',
          tag: 'مرحلة التأسيس',
        },
        {
          year: '2018',
          title: 'إطلاق النماذج التشغيلية الأولى',
          subtitle: 'اختبار كفاءة بروتوكولات الربط الموحد',
          description:
            'نشر أولى المنظومات التجريبية لأتمتة الإجراءات المشتركة في إقليم كوردستان وبغداد للتحقق من أداء وموثوقية الأنظمة ميدانياً.',
          tag: 'التجريب الميداني',
        },
        {
          year: '2021',
          title: 'التوسع الإقليمي والوطني الشامل',
          subtitle: 'شراكات استراتيجية مع القطاعين العام والخاص',
          description:
            'توسيع نطاق العمليات ليشمل المنافذ الحدودية والقطاعات اللوجستية والكمركية وتنسيق تدفق البيانات الآمنة بين مختلف الهيئات.',
          tag: 'التوسع الوطني',
        },
        {
          year: '2024',
          title: 'إرساء البنية التحتية السيادية واستوديو المشاريع',
          subtitle: 'نموذج الشركة الأم والمشاريع الوطنية الكبرى',
          description:
            'تطوير مشاريع البنية التحتية الكبرى كالنافذة الوطنية الموحدة للتجارة (INSW) وتأسيس مراكز بيانات سيادية مطابقة لأعلى المعايير.',
          tag: 'السيادة المؤسسية',
        },
        {
          year: '2025',
          title: 'إطلاق أكاديمية زانا (ZaNa) ومنصة AI Gate',
          subtitle: 'بناء الكوادر الوطنية وأتمتة الذكاء الاصطناعي',
          description:
            'تدشين الذراع التعليمي لتأهيل نخبة المهندسين العراقيين ونشر نماذج الذكاء الاصطناعي التطبيقي لخدمة المؤسسات الوطنية.',
          tag: 'الذكاء الاصطناعي والكفاءات',
        },
      ],
    },
    en: {
      badge: 'Timeline • Historical Milestones',
      title: 'Evolutionary Arc: From Vision to Sovereign Infrastructure',
      subtitle: 'The foundational chronology of Iraq Digital Gateway’s transformation into a sovereign tech holding company.',
      milestones: [
        {
          year: '2015',
          title: 'Conception as a Sovereign Vision',
          subtitle: 'Identifying structural dependencies in national IT',
          description:
            'Conducting extensive empirical research to map systemic vulnerabilities across Iraqi institutional networks, formulating the initial thesis for domestic data residency.',
          tag: 'Inception Horizon',
        },
        {
          year: '2018',
          title: 'First Operational Deployments',
          subtitle: 'Deploying secure proof-of-concept pipelines',
          description:
            'Releasing initial operational software pilots connecting key administrative nodes in the Kurdistan Region and Baghdad, validating sub-second latency and zero data-loss guarantees.',
          tag: 'Field Validation',
        },
        {
          year: '2021',
          title: 'Nationwide Expansion & Public-Private Partnerships',
          subtitle: 'Scaling cross-border and cross-agency integrations',
          description:
            'Expanding operational capacity across borders, customs checkpoints, and financial clearing conduits, establishing inter-agency data protocols.',
          tag: 'National Expansion',
        },
        {
          year: '2024',
          title: 'Institutional Venture Studio & Sovereign Architecture',
          subtitle: 'Incubating mission-critical national flagships',
          description:
            'Formalizing the institutional venture studio model and advancing the Iraq National Single Window (INSW) alongside sovereign data hosting.',
          tag: 'Sovereign Maturity',
        },
        {
          year: '2025',
          title: 'Launch of ZaNa Academy & AI Gate Platform',
          subtitle: 'Cultivating domestic talent & applied sovereign AI',
          description:
            'Establishing ZaNa Academy to train Iraqi software architects, paired with the rollout of the AI Gate machine learning automation platform.',
          tag: 'AI & Capacity Era',
        },
      ],
    },
  };

  const t = content[locale as 'ku' | 'ar' | 'en'] || content.ku;

  return (
    <section className="py-16 sm:py-24 bg-[#060D1A] border-b border-[#102447]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#102447]/60 border border-[#193B73] text-xs font-semibold text-[#60A5FA] mb-4">
            <Calendar className="w-3.5 h-3.5" />
            <span>{t.badge}</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-black text-white tracking-tight mb-4">
            {t.title}
          </h2>
          <p className="text-sm sm:text-base text-slate-400 leading-relaxed">
            {t.subtitle}
          </p>
        </div>

        {/* Timeline Path */}
        <div className="relative">
          {/* Vertical central/side line */}
          <div className="absolute top-0 bottom-0 start-4 sm:start-1/2 w-0.5 bg-gradient-to-b from-blue-500 via-[#1D5BD8] to-transparent -translate-x-1/2 rtl:translate-x-1/2 opacity-30 sm:opacity-50" />

          <div className="space-y-12">
            {t.milestones.map((m, idx) => {
              const isEven = idx % 2 === 0;

              return (
                <div
                  key={m.year}
                  className={`relative flex flex-col sm:flex-row items-start sm:items-center ${
                    isEven ? 'sm:flex-row-reverse' : ''
                  }`}
                >
                  {/* Central Node Indicator */}
                  <div className="absolute start-4 sm:start-1/2 -translate-x-1/2 rtl:translate-x-1/2 w-9 h-9 rounded-full bg-[#0B172E] border-2 border-blue-500 flex items-center justify-center text-xs font-bold text-white shadow-lg shadow-blue-500/20 z-10">
                    <span className="w-3 h-3 rounded-full bg-blue-400 animate-pulse" />
                  </div>

                  {/* Content Container */}
                  <div
                    className={`w-full sm:w-1/2 ms-10 sm:ms-0 ${
                      isEven ? 'sm:pe-12 text-start' : 'sm:ps-12 text-start'
                    }`}
                  >
                    <div className="bg-[#0B172E] border border-[#102447] hover:border-[#1D5BD8] rounded-2xl p-6 sm:p-7 transition-all duration-300 shadow-xl group hover:-translate-y-0.5">
                      <div className="flex items-center justify-between gap-3 mb-2 flex-wrap">
                        <span className="font-mono text-2xl font-black text-[#60A5FA]">
                          {m.year}
                        </span>
                        <span className="text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-[#102447] text-blue-300 border border-[#193B73]">
                          {m.tag}
                        </span>
                      </div>

                      <h3 className="text-lg font-bold text-white mb-1 group-hover:text-blue-300 transition-colors">
                        {m.title}
                      </h3>

                      <p className="text-xs font-semibold text-slate-400 mb-3">
                        {m.subtitle}
                      </p>

                      <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
                        {m.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
