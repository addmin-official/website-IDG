'use client';

import React from 'react';
import {
  ShieldCheck,
  Flag,
  Lightbulb,
  Award,
  Users,
  Eye,
  Sparkles,
} from 'lucide-react';

interface ValuesGridProps {
  locale: string;
}

export default function ValuesGrid({ locale }: ValuesGridProps) {
  const content = {
    ku: {
      badge: 'بەها بنچینەییەکانمان • Core Values',
      title: 'شەش بەهای نەگۆڕی دەروازەی دیجیتاڵیی عێراق',
      subtitle: 'بنەما نەگۆڕەکان کە ڕێنمایی هەموو تەلارسازی، بڕیار، و هاوبەشییەکی دامەزراوەییمان دەکەن.',
      values: [
        {
          id: 'sovereignty',
          title: 'سەروەری (Sovereignty)',
          subtitle: 'خودی پاسەپالانی ملی و بڕیاردانی سەربەخۆ',
          desc: 'پێشخستنی بەرژەوەندیی درێژخایەنی عێراق و سەروەریی تەواوی داتای نیشتمانی بەسەر قازانجی کورتخایەندا. هەموو داتایەک لە ناوخۆی عێراق پارێزراوە.',
          icon: ShieldCheck,
          accent: 'from-blue-600/20 to-blue-900/10 border-blue-500/30 text-blue-400',
        },
        {
          id: 'patriotism',
          title: 'نیشتمانپەروەری (Patriotism)',
          subtitle: 'خزمەت بە خاک و بەها باڵاکانی نەتەوە',
          desc: 'تەرخانکردنی تەواوی وزە و زانست بۆ پاراستنی بەرژەوەندییە باڵاکانی گەلی عێراق و بونیادنانی سیستەمێکی شایستە بە شکۆی وڵات.',
          icon: Flag,
          accent: 'from-emerald-600/20 to-emerald-900/10 border-emerald-500/30 text-emerald-400',
        },
        {
          id: 'innovation',
          title: 'داهێنان (Innovation)',
          subtitle: 'تەکنۆلۆژیای نوێ و ژیریی دەستکرد',
          desc: 'هێنانەکایەی تەکنەلۆژیای نەوەی نوێ و مۆدێلە پێشکەوتووەکانی ژیریی دەستکرد لەڕێگەی توێژینەوەی بەردەوام و ئەندازیاریی ئاست بەرز.',
          icon: Lightbulb,
          accent: 'from-amber-600/20 to-amber-900/10 border-amber-500/30 text-[#F59E0B]',
        },
        {
          id: 'excellence',
          title: 'دروستی (Excellence)',
          subtitle: 'کوالیتی بێ هاوتا و تەلارسازیی بێبەخشین',
          desc: 'جێبەجێکردنی بەرزترین ستانداردەکانی ئەندازیاری و ئەمنییەتی Zero-Trust کە بۆ دەیان ساڵ بەبێ کەموکوڕی خزمەت بکەن.',
          icon: Award,
          accent: 'from-purple-600/20 to-purple-900/10 border-purple-500/30 text-purple-400',
        },
        {
          id: 'community',
          title: 'کۆمەڵگە (Community)',
          subtitle: 'پێشخستنی بەرژەوەندیی گشتی و بەهرەکان',
          desc: 'وەبەرهێنان لە توانا مرۆییەکانی گەنجانی عێراق لەڕێگەی پڕۆژەکانی وەک ZaNa Academy و گرنگیدان بە خزمەتگوزاریی هاووڵاتیان.',
          icon: Users,
          accent: 'from-cyan-600/20 to-cyan-900/10 border-cyan-500/30 text-cyan-400',
        },
        {
          id: 'transparency',
          title: 'شەفافیەت (Transparency)',
          subtitle: 'ڕوونیی پرۆسەکان و بێ تەڵەکەبازی',
          desc: 'تۆماری نەگۆڕی مامەڵەکان، وردبینیی گشتی، و لێپرسینەوەی ڕوون بۆ سەرجەم پرۆسە دارایی، کارگێڕی، و پڕۆژە نیشتمانییەکان.',
          icon: Eye,
          accent: 'from-rose-600/20 to-rose-900/10 border-rose-500/30 text-rose-400',
        },
      ],
    },
    ar: {
      badge: 'القيم الجوهرية • Core Values',
      title: 'ست قيم غير قابلة للمساومة في IDG',
      subtitle: 'المبادئ التوجيهية التي تحكم كل قرار، معمارية هندسية، وشراكة استراتيجية نقوم بها.',
      values: [
        {
          id: 'sovereignty',
          title: 'السيادة (Sovereignty)',
          subtitle: 'حق تقرير المصير التكنولوجي واستقلال البيانات',
          desc: 'الحفاظ على أمن وسيادة البيانات الوطنية فوق كل اعتبار تجاري. لا تخضع أنظمتنا لأي ولايات قضائية أجنبية أو خوادم خارج الحدود.',
          icon: ShieldCheck,
          accent: 'from-blue-600/20 to-blue-900/10 border-blue-500/30 text-blue-400',
        },
        {
          id: 'patriotism',
          title: 'الوطنية (Patriotism)',
          subtitle: 'التفاني والالتزام الراسخ بخدمة العراق',
          desc: 'تسخير كافة القدرات الهندسية والاستثمارية لصالح الدولة والمجتمع العراقي وبناء بنى تحتية تفخر بها الأجيال القادمة.',
          icon: Flag,
          accent: 'from-emerald-600/20 to-emerald-900/10 border-emerald-500/30 text-emerald-400',
        },
        {
          id: 'innovation',
          title: 'الابتكار (Innovation)',
          subtitle: 'ريادة تقنيات الجيل القادم والذكاء الاصطناعي',
          desc: 'تبني وتطوير برمجيات حديثة ونماذج ذكاء اصطناعي سيادية مصممة خصيصاً للواقع المؤسسي العراقي وتحدياته التشغيلية.',
          icon: Lightbulb,
          accent: 'from-amber-600/20 to-amber-900/10 border-amber-500/30 text-[#F59E0B]',
        },
        {
          id: 'excellence',
          title: 'التميز (Excellence)',
          subtitle: 'معايير جودة وهندسة برمجية استثنائية',
          desc: 'تطبيق بروتوكولات الأمان الصارمة بنموذج انعدام الثقة (Zero-Trust) والالتزام بأعلى مقاييس الموثوقية والاستدامة التشغيلية.',
          icon: Award,
          accent: 'from-purple-600/20 to-purple-900/10 border-purple-500/30 text-purple-400',
        },
        {
          id: 'community',
          title: 'المجتمع (Community)',
          subtitle: 'الأولوية للنفع العام وبناء الطاقات البشرية',
          desc: 'تمكين الشباب والمطورين العراقيين عبر مبادرات نوعية كأكاديمية زانا (ZaNa) وتحسين جودة حياة المواطنين بالخدمات المؤتمتة.',
          icon: Users,
          accent: 'from-cyan-600/20 to-cyan-900/10 border-cyan-500/30 text-cyan-400',
        },
        {
          id: 'transparency',
          title: 'الشفافية (Transparency)',
          subtitle: 'وضوح الإجراءات والمساءلة المؤسسية الصريحة',
          desc: 'سجلات تدقيق غير قابلة للتلاعب، بروتوكولات تكامل معلنة، ووضوح كامل في الأداء والمسؤوليات دون غموض أو احتكار.',
          icon: Eye,
          accent: 'from-rose-600/20 to-rose-900/10 border-rose-500/30 text-rose-400',
        },
      ],
    },
    en: {
      badge: 'Core Values • Invariant Principles',
      title: 'Six Invariant Core Values Guiding IDG',
      subtitle: 'The institutional axioms governing every technical architecture, partnership, and operational deployment.',
      values: [
        {
          id: 'sovereignty',
          title: 'Sovereignty',
          subtitle: 'Technological self-determination and data residency',
          desc: 'Prioritizing national long-term independence and uncompromised data residency over transient commercial expedience. Iraqi data belongs on Iraqi soil.',
          icon: ShieldCheck,
          accent: 'from-blue-600/20 to-blue-900/10 border-blue-500/30 text-blue-400',
        },
        {
          id: 'patriotism',
          title: 'Patriotism',
          subtitle: 'Dedicated service to the sovereign nation',
          desc: 'Unwavering dedication to building foundational systems that elevate Iraq’s standing and empower future generations with autonomous capability.',
          icon: Flag,
          accent: 'from-emerald-600/20 to-emerald-900/10 border-emerald-500/30 text-emerald-400',
        },
        {
          id: 'innovation',
          title: 'Innovation',
          subtitle: 'Applied artificial intelligence and modern tooling',
          desc: 'Fostering breakthrough solutions, domain-adapted language models, and high-throughput pipelines engineered specifically for Iraqi realities.',
          icon: Lightbulb,
          accent: 'from-amber-600/20 to-amber-900/10 border-amber-500/30 text-[#F59E0B]',
        },
        {
          id: 'excellence',
          title: 'Excellence',
          subtitle: 'Rigorous engineering and zero-trust discipline',
          desc: 'Delivering production-grade, highly auditable architectures engineered to withstand intense stress and operate flawlessly for decades.',
          icon: Award,
          accent: 'from-purple-600/20 to-purple-900/10 border-purple-500/30 text-purple-400',
        },
        {
          id: 'community',
          title: 'Community',
          subtitle: 'Public benefit and national talent development',
          desc: 'Systematically cultivating local engineering capacity via ZaNa Academy and focusing digital platforms on transparent citizen welfare.',
          icon: Users,
          accent: 'from-cyan-600/20 to-cyan-900/10 border-cyan-500/30 text-cyan-400',
        },
        {
          id: 'transparency',
          title: 'Transparency',
          subtitle: 'Auditable pipelines and open operational governance',
          desc: 'Employing open standards, unalterable ledgers, and clear accountable ownership across every layer of the institutional matrix.',
          icon: Eye,
          accent: 'from-rose-600/20 to-rose-900/10 border-rose-500/30 text-rose-400',
        },
      ],
    },
  };

  const t = content[locale as 'ku' | 'ar' | 'en'] || content.ku;

  return (
    <section className="py-16 sm:py-24 bg-[#060D1A] border-b border-[#102447]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
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

        {/* 2x3 or 3x2 Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {t.values.map((val) => {
            const Icon = val.icon;
            return (
              <div
                key={val.id}
                className="relative group bg-[#0B172E] border border-[#102447] hover:border-[#1D5BD8] rounded-2xl p-7 transition-all duration-300 hover:shadow-xl hover:shadow-[#1D5BD8]/10 hover:-translate-y-1 flex flex-col justify-between"
              >
                <div>
                  <div
                    className={`w-12 h-12 rounded-xl bg-gradient-to-br ${val.accent} border flex items-center justify-center mb-5 group-hover:scale-105 transition-transform`}
                  >
                    <Icon className="w-6 h-6" />
                  </div>

                  <h3 className="text-lg sm:text-xl font-bold text-white mb-1.5">
                    {val.title}
                  </h3>

                  <p className="text-xs font-semibold text-blue-400 mb-3.5">
                    {val.subtitle}
                  </p>

                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
                    {val.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
