'use client';

import React from 'react';
import { Language } from '@/lib/translations';
import {
  ShieldCheck,
  CheckCircle2,
  Cpu,
  Database,
  Activity,
  Server,
  Layers,
  Sparkles,
  BookOpen,
  GraduationCap,
  Leaf,
  Recycle,
  Trees,
  Truck,
  FileCheck,
  Building2,
  Lock,
  ArrowRight,
  ArrowLeft,
  Search,
  BadgeCheck,
} from 'lucide-react';

interface MockupProps {
  type: 'aigate' | 'zana' | 'greenbelt' | 'nsw';
  lang: Language;
}

export default function ProductMockups({ type, lang }: MockupProps) {
  const isRtl = lang === 'ku' || lang === 'ar';
  const Arrow = isRtl ? ArrowLeft : ArrowRight;

  if (type === 'aigate') {
    return (
      <div className="rounded-xl bg-slate-950 border border-slate-800 text-slate-100 p-4 sm:p-6 shadow-inner font-sans overflow-hidden">
        {/* Mockup Topbar */}
        <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-slate-800 text-xs">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-red-500/80" />
            <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
            <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
            <span className="font-mono text-slate-400 ms-2 text-[11px]">
              aigate.iq/institutional-console [IDG-SOV-01]
            </span>
          </div>
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center gap-1 bg-blue-950 text-blue-400 border border-blue-800 px-2.5 py-0.5 rounded text-[11px] font-mono">
              <ShieldCheck className="w-3 h-3" />
              <span>{lang === 'ku' ? 'داتای سێرڤەری ناوخۆیی عێراق' : lang === 'ar' ? 'بيانات سيادية داخل العراق' : 'Sovereign On-Premise'}</span>
            </span>
            <span className="inline-flex items-center gap-1 bg-emerald-950 text-emerald-400 border border-emerald-800 px-2 py-0.5 rounded text-[11px] font-mono">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              <span>LIVE</span>
            </span>
          </div>
        </div>

        {/* Dashboard Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
          {/* Main Document & Decision Reasoning Panel */}
          <div className="md:col-span-2 bg-slate-900/90 rounded-lg p-4 border border-slate-800 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-bold text-slate-300 flex items-center gap-1.5">
                  <FileCheck className="w-4 h-4 text-blue-400" />
                  <span>{lang === 'ku' ? 'شیکاریی بەڵگەی دەستپێشخەریی کارگێڕی' : lang === 'ar' ? 'تحليل أدلة القرار الإداري' : 'Administrative Decision Evidence Analysis'}</span>
                </span>
                <span className="text-[10px] font-mono bg-blue-900/50 text-blue-300 px-2 py-0.5 rounded">
                  DOC-IQ-2026-884
                </span>
              </div>

              {/* Document verification card */}
              <div className="p-3 rounded bg-slate-950/80 border border-slate-800/80 mb-3 space-y-2 text-xs">
                <div className="flex justify-between items-center text-[11px] text-slate-400 border-b border-slate-800 pb-1.5">
                  <span>{lang === 'ku' ? 'ناوەڕۆکی دۆسیە:' : lang === 'ar' ? 'محتوى المعاملة:' : 'Case Context:'} {lang === 'ku' ? 'ڕاپۆرتی خەرجی و پێداویستیی کەرتی تەندروستی' : lang === 'ar' ? 'تقرير التوريد والمطابقة لقطاع الصحة' : 'Health Procurement Compliance Report'}</span>
                  <span className="text-emerald-400 font-mono font-bold">OCR: 99.4% (KRD/ARA)</span>
                </div>
                <p className="text-slate-300 text-xs leading-relaxed">
                  {lang === 'ku'
                    ? 'پشکنینی بەراوردکاری: بەڵگەکان پیشانی دەدەن کە هاوسەنگیی خەرجییەکان ٩٤٪ لەگەڵ ڕێنماییەکانی بودجەی پەسەندکراو دەگونجێت. پێویست بە پەسەندکردنی دەستەی چاودێری هەیە.'
                    : lang === 'ar'
                    ? 'المطابقة التحليلية: تشير الأدلة الموثقة إلى تطابق الإنفاق بنسبة ٩٤٪ مع معايير التدقيق المالي المعتمدة. يتطلب مصادقة المشرف البشري.'
                    : 'Evidence Cross-Check: Verified 94% alignment with approved institutional procurement guidelines. Requires final human supervisor sign-off.'}
                </p>
              </div>

              {/* Human-in-the-Loop decision lock */}
              <div className="p-2.5 rounded bg-amber-950/30 border border-amber-800/50 text-amber-200 text-xs flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Lock className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                  <span className="text-[11px]">
                    {lang === 'ku'
                      ? 'مەرجی حوکمڕانیی IDG: بڕیاری کۆتایی لە دەسەڵاتی بەڕێوەبەری مرۆییدایە.'
                      : lang === 'ar'
                      ? 'شرط حوكمة IDG: القرار النهائي محصور بالصلاحية البشرية المسؤولة.'
                      : 'IDG Governance Rule: Final executive decision strictly reserved for human authority.'}
                  </span>
                </div>
                <span className="text-[10px] bg-amber-900/60 text-amber-300 px-2 py-0.5 rounded font-mono">
                  LOCKED
                </span>
              </div>
            </div>

            {/* Audit metrics bottom bar */}
            <div className="grid grid-cols-3 gap-2 mt-4 pt-3 border-t border-slate-800 text-[11px] font-mono text-center">
              <div className="bg-slate-950 p-2 rounded border border-slate-800/60">
                <span className="text-slate-400 block text-[10px]">{lang === 'ku' ? 'کاتژمێری شیکاری' : lang === 'ar' ? 'زمن الاستجابة' : 'Latency'}</span>
                <span className="text-blue-400 font-bold">180ms</span>
              </div>
              <div className="bg-slate-950 p-2 rounded border border-slate-800/60">
                <span className="text-slate-400 block text-[10px]">{lang === 'ku' ? 'شەفافیەتی بەڵگە' : lang === 'ar' ? 'سلسلة التدقيق' : 'Audit Trail'}</span>
                <span className="text-emerald-400 font-bold">100% Hash</span>
              </div>
              <div className="bg-slate-950 p-2 rounded border border-slate-800/60">
                <span className="text-slate-400 block text-[10px]">{lang === 'ku' ? 'مۆدێلی ناوخۆیی' : lang === 'ar' ? 'النموذج المحلي' : 'Local Engine'}</span>
                <span className="text-purple-400 font-bold">KurdoArabic-70B</span>
              </div>
            </div>
          </div>

          {/* Side Telemetry & Real-Time Monitoring Panel */}
          <div className="bg-slate-900/90 rounded-lg p-4 border border-slate-800 flex flex-col justify-between space-y-3">
            <div>
              <div className="flex items-center justify-between mb-3 text-xs font-bold text-slate-300">
                <span className="flex items-center gap-1.5">
                  <Activity className="w-4 h-4 text-emerald-400" />
                  <span>{lang === 'ku' ? 'چاودێریی سیستم' : lang === 'ar' ? 'مؤشرات النظام' : 'System Telemetry'}</span>
                </span>
                <span className="text-[10px] text-emerald-400 font-mono">HEALTHY</span>
              </div>

              <div className="space-y-2.5 text-xs">
                <div>
                  <div className="flex justify-between text-[11px] text-slate-400 mb-1">
                    <span>{lang === 'ku' ? 'دڵنیایی شیکاری' : lang === 'ar' ? 'دقة المطابقة' : 'Model Confidence'}</span>
                    <span className="font-mono text-slate-200">98.2%</span>
                  </div>
                  <div className="w-full h-1.5 bg-slate-950 rounded-full overflow-hidden">
                    <div className="h-full bg-blue-500 rounded-full w-[98.2%]" />
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-[11px] text-slate-400 mb-1">
                    <span>{lang === 'ku' ? 'تەلارسازیی سەروەر' : lang === 'ar' ? 'العزل السيادي' : 'Isolation Level'}</span>
                    <span className="font-mono text-emerald-400">100% Air-Gapped</span>
                  </div>
                  <div className="w-full h-1.5 bg-slate-950 rounded-full overflow-hidden">
                    <div className="h-full bg-emerald-500 rounded-full w-full" />
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-[11px] text-slate-400 mb-1">
                    <span>{lang === 'ku' ? 'داواکارییەکانی ئەمڕۆ' : lang === 'ar' ? 'طلبات التدقيق' : 'Daily Audits'}</span>
                    <span className="font-mono text-slate-200">14,289</span>
                  </div>
                  <div className="w-full h-1.5 bg-slate-950 rounded-full overflow-hidden">
                    <div className="h-full bg-purple-500 rounded-full w-[76%]" />
                  </div>
                </div>
              </div>
            </div>

            <div className="p-2.5 rounded bg-slate-950 border border-slate-800 text-[11px] space-y-1">
              <span className="text-slate-400 block font-bold">{lang === 'ku' ? 'خاوەندارێتی و ئەنجام:' : lang === 'ar' ? 'الجهة المسؤولة والنتيجة:' : 'Authority Result:'}</span>
              <span className="text-slate-200 leading-snug block">
                {lang === 'ku'
                  ? 'بڕیار دراوە بە کەمکردنەوەی کەلێنی داتا و دابینکردنی سەروەری لە سەرانسەری ١٨ پارێزگادا.'
                  : lang === 'ar'
                  ? 'تم تقليص زمن إعداد دراسات الجدوى بنسبة ٦٥٪ مع توثيق السجلات بالكامل.'
                  : 'Accelerated procurement analysis by 65% while enforcing 100% institutional tamper-proof audit trails.'}
              </span>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (type === 'zana') {
    return (
      <div className="rounded-xl bg-slate-950 border border-slate-800 text-slate-100 p-4 sm:p-6 shadow-inner font-sans overflow-hidden">
        {/* Mockup Topbar */}
        <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-slate-800 text-xs">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-red-500/80" />
            <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
            <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
            <span className="font-mono text-slate-400 ms-2 text-[11px]">
              zana.iq/student-app [K12-SORANI]
            </span>
          </div>
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center gap-1 bg-purple-950 text-purple-400 border border-purple-800 px-2.5 py-0.5 rounded text-[11px] font-mono">
              <GraduationCap className="w-3 h-3" />
              <span>
                {lang === 'ku'
                  ? 'زانا — هاوڕێی زیرەکی فێربوونی تۆ'
                  : lang === 'ar'
                  ? 'زانا — رفيقك الذكي للتعلم'
                  : 'ZaNa — Your Smart Learning Companion'}
              </span>
            </span>
            <span className="inline-flex items-center gap-1 bg-emerald-950 text-emerald-400 border border-emerald-800 px-2 py-0.5 rounded text-[11px] font-mono">
              <ShieldCheck className="w-3 h-3" />
              <span>{lang === 'ku' ? '٣ چینی پاراستن' : lang === 'ar' ? '٣ طبقات حماية' : '3-Layer Protected'}</span>
            </span>
          </div>
        </div>

        {/* Key Metrics Bar */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 my-4">
          <div className="bg-slate-900/90 border border-slate-800 p-2.5 rounded-lg text-center">
            <span className="text-[10px] text-slate-400 block font-medium">
              {lang === 'ku' ? 'لاپەڕەی کتێبی فەرمی' : lang === 'ar' ? 'صفحات الكتاب المعتمد' : 'Textbook Pages'}
            </span>
            <span className="text-base sm:text-lg font-extrabold text-blue-400 font-mono">
              {lang === 'ku' ? '٣٧١ لاپەڕە' : lang === 'ar' ? '٣٧١ صفحة' : '371 Pages'}
            </span>
            <span className="text-[9px] text-slate-500 block">
              {lang === 'ku' ? 'کیمیای پۆلی ١٢' : lang === 'ar' ? 'كيمياء الصف ١٢' : 'Grade 12 Chemistry'}
            </span>
          </div>
          <div className="bg-slate-900/90 border border-slate-800 p-2.5 rounded-lg text-center">
            <span className="text-[10px] text-slate-400 block font-medium">
              {lang === 'ku' ? 'بەندەکانی پرۆگرام' : lang === 'ar' ? 'فصول المنهج' : 'Curriculum Chapters'}
            </span>
            <span className="text-base sm:text-lg font-extrabold text-purple-400 font-mono">
              {lang === 'ku' ? '١٢ بەند' : lang === 'ar' ? '١٢ فصلاً' : '12 Chapters'}
            </span>
            <span className="text-[9px] text-slate-500 block">
              {lang === 'ku' ? 'بە کوردیی سۆرانی' : lang === 'ar' ? 'بالكردية السورانية' : 'Sorani Kurdish'}
            </span>
          </div>
          <div className="bg-slate-900/90 border border-slate-800 p-2.5 rounded-lg text-center">
            <span className="text-[10px] text-slate-400 block font-medium">
              {lang === 'ku' ? 'تاقیکردنەوە و ڕاهێنان' : lang === 'ar' ? 'الاختبارات التفاعلية' : 'Adaptive Quizzes'}
            </span>
            <span className="text-base sm:text-lg font-extrabold text-emerald-400 font-mono">
              {lang === 'ku' ? '١٦٣ تاقیکردنەوە' : lang === 'ar' ? '١٦٣ اختباراً' : '163 Tests'}
            </span>
            <span className="text-[9px] text-slate-500 block">
              {lang === 'ku' ? 'تۆمارکراو لە D1' : lang === 'ar' ? 'محفوظ في D1' : 'Synced to D1'}
            </span>
          </div>
          <div className="bg-slate-900/90 border border-slate-800 p-2.5 rounded-lg text-center">
            <span className="text-[10px] text-slate-400 block font-medium">
              {lang === 'ku' ? 'سیستەمی پاراستن' : lang === 'ar' ? 'طبقات الحماية' : 'Security Defense'}
            </span>
            <span className="text-base sm:text-lg font-extrabold text-cyan-400 font-mono">
              {lang === 'ku' ? '٣ چین' : lang === 'ar' ? '٣ طبقات' : '3-Layer'}
            </span>
            <span className="text-[9px] text-slate-500 block">
              UI + Route + Server
            </span>
          </div>
        </div>

        {/* Learning Console Grid: Student Q&A Demo + Parent Report & Progress */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          {/* Main: Student asking AI Demo */}
          <div className="lg:col-span-2 bg-slate-900/90 rounded-lg p-4 border border-slate-800 flex flex-col justify-between space-y-3">
            <div>
              <div className="flex items-center justify-between mb-3 pb-2 border-b border-slate-800/80">
                <span className="text-xs font-bold text-slate-200 flex items-center gap-1.5">
                  <BookOpen className="w-4 h-4 text-purple-400" />
                  <span>
                    {lang === 'ku'
                      ? 'دیالۆگی قوتابی لەگەڵ مامۆستای زیرەکی زانا (وەڵامدانەوە لە کتێبی فەرمی)'
                      : lang === 'ar'
                      ? 'حوار الطالب مع معلم زانا الذكي (إجابة حصرية من الكتاب المدرسي)'
                      : 'Student Q&A with ZaNa AI Tutor (Grounded in Official Textbook)'}
                  </span>
                </span>
                <span className="text-[10px] font-mono bg-blue-900/50 text-blue-300 px-2 py-0.5 rounded">
                  {lang === 'ku' ? 'کیمیا - بەندی ٤' : lang === 'ar' ? 'الكيمياء - الفصل ٤' : 'Chemistry - Ch 4'}
                </span>
              </div>

              {/* Chat Demo Interaction */}
              <div className="space-y-3 text-xs">
                {/* Student Question */}
                <div className="flex items-start gap-2.5">
                  <div className="w-6 h-6 rounded-full bg-slate-800 text-slate-300 flex items-center justify-center text-[10px] font-bold shrink-0 mt-0.5">
                    {lang === 'ku' ? 'ق' : lang === 'ar' ? 'ط' : 'S'}
                  </div>
                  <div className="bg-slate-800/80 p-2.5 rounded-2xl rounded-tr-none text-slate-200 max-w-[85%] border border-slate-700/60 leading-relaxed text-[11px]">
                    <span className="font-bold text-slate-400 block text-[10px] mb-0.5">
                      {lang === 'ku' ? 'قوتابی (شەرم نەکردن لە پرسیار):' : lang === 'ar' ? 'الطالب (بدون تردد أو إحراج):' : 'Student inquiry:'}
                    </span>
                    {lang === 'ku'
                      ? 'مامۆستا زانا، جیاوازی چییە لە نێوان هاوسەنگیی هاوجنس و ناهۆجنس بەپێی یاسای لۆشاتلییە؟ کەمێک بە سادەیی بۆم ڕوون بکەرەوە.'
                      : lang === 'ar'
                      ? 'أستاذ زانا، ما هو الفرق بين الاتزان المتجانس وغير المتجانس وفق قاعدة لوشاتيليه؟ وضحها لي بأسلوب مبسط من الكتاب.'
                      : 'Teacher ZaNa, what is the exact difference between homogeneous and heterogeneous equilibria under Le Chatelier’s principle from our textbook? Please explain simply.'}
                  </div>
                </div>

                {/* AI Tutor Answer Grounded in Textbook */}
                <div className="flex items-start gap-2.5">
                  <div className="w-6 h-6 rounded-full bg-purple-700 text-white flex items-center justify-center text-[10px] font-bold shrink-0 mt-0.5 shadow-sm">
                    <Sparkles className="w-3.5 h-3.5" />
                  </div>
                  <div className="bg-purple-950/40 p-3 rounded-2xl rounded-tl-none text-slate-100 max-w-[90%] border border-purple-800/60 leading-relaxed text-[11px] space-y-1.5">
                    <div className="flex items-center justify-between text-[10px] text-purple-300 font-medium">
                      <span>{lang === 'ku' ? 'وەڵامی زانا (دەرهێنراو لە لاپەڕە ١١٤ی کتێب):' : lang === 'ar' ? 'إجابة زانا (مقتبسة من الصفحة ١١٤ بالكتاب):' : 'ZaNa AI Tutor (Sourced from Textbook p. 114):'}</span>
                      <span className="font-mono text-emerald-400 text-[9px]">✔ مۆڵەتپێدراو لە پرۆگرام</span>
                    </div>
                    <p className="text-slate-200 text-[11px]">
                      {lang === 'ku'
                        ? 'لە هاوسەنگیی هاوجنسدا هەموو ماددە کارلێککردوو و بەرهەمهاتووەکان لە یەک دۆخی فیزیکیدان (بۆ نموونە هەموویان گازن)، بەڵام لە ناهۆجنسدا زیاتر لە دۆخێک هەیە. لە یاسای لۆشاتلییەدا ماددە ڕەق و شلە پەتییەکان لە هاوکێشەی هاوسەنگیدا ناژمێردرێن چون خەستییان نەگۆڕە.'
                        : lang === 'ar'
                        ? 'في الاتزان المتجانس تكون جميع المواد المتفاعلة والناتجة في حالة فيزيائية واحدة (كالغازات)، بينما في غير المتجانس توجد أكثر من حالة. ووفق قاعدة لوشاتيليه لا تُحسب المواد الصلبة والسائلة النقية لثبات تركيزها.'
                        : 'In homogeneous equilibrium, all reactants and products share the same physical phase (e.g. all gases). In heterogeneous equilibrium, multiple phases coexist. Under Le Chatelier’s principle, pure solids and liquids are omitted because their concentrations remain constant.'}
                    </p>
                    <div className="p-1.5 bg-slate-950/70 rounded border border-purple-900/60 flex items-center justify-between text-[10px] font-mono text-purple-300">
                      <span>{lang === 'ku' ? 'تاقیکردنەوەی خێرا: ئایا ئامادەیت بۆ پرسیارێک دەربارەی پەستان؟' : lang === 'ar' ? 'اختبار سريع: هل أنت جاهز لسؤال تطبيقي عن تأثير الضغط؟' : 'Quick Check: Ready for an adaptive question on pressure?'}</span>
                      <span className="text-emerald-400 cursor-pointer font-bold">بەڵێ / Yes</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Differentiators vs generic AI */}
            <div className="pt-3 border-t border-slate-800 grid grid-cols-2 sm:grid-cols-4 gap-2 text-[10px] font-mono text-slate-300">
              <div className="flex items-center gap-1 bg-slate-950 p-1.5 rounded border border-slate-800">
                <CheckCircle2 className="w-3 h-3 text-emerald-400 shrink-0" />
                <span>{lang === 'ku' ? 'قوتابی دەناسێت' : lang === 'ar' ? 'يفهم مستوى الطالب' : 'Knows Student'}</span>
              </div>
              <div className="flex items-center gap-1 bg-slate-950 p-1.5 rounded border border-slate-800">
                <CheckCircle2 className="w-3 h-3 text-emerald-400 shrink-0" />
                <span>{lang === 'ku' ? 'دۆزینەوەی هەڵەکان' : lang === 'ar' ? 'رصد أخطاء التعلم' : 'Error Detection'}</span>
              </div>
              <div className="flex items-center gap-1 bg-slate-950 p-1.5 rounded border border-slate-800">
                <CheckCircle2 className="w-3 h-3 text-emerald-400 shrink-0" />
                <span>{lang === 'ku' ? 'گونجاندنی قورسی' : lang === 'ar' ? 'تكييف الصعوبة' : 'Adaptive Difficulty'}</span>
              </div>
              <div className="flex items-center gap-1 bg-slate-950 p-1.5 rounded border border-slate-800">
                <CheckCircle2 className="w-3 h-3 text-emerald-400 shrink-0" />
                <span>{lang === 'ku' ? 'پاراستنی مافی ناوەڕۆک' : lang === 'ar' ? 'حفظ حقوق المناهج' : 'Curriculum Grounded'}</span>
              </div>
            </div>
          </div>

          {/* Right Column: Parent Report & Progress Tracking Widget */}
          <div className="space-y-4 flex flex-col justify-between">
            {/* Parent Report Widget */}
            <div className="bg-slate-900/90 rounded-lg p-3.5 border border-slate-800 space-y-2.5">
              <div className="flex items-center justify-between text-xs font-bold text-slate-200 pb-2 border-b border-slate-800">
                <span className="flex items-center gap-1.5">
                  <BadgeCheck className="w-4 h-4 text-blue-400" />
                  <span>{lang === 'ku' ? 'ڕاپۆرتی دایک و باوک (هەفتانە)' : lang === 'ar' ? 'تقرير أولياء الأمور (الأسبوعي)' : 'Parent Progress Report'}</span>
                </span>
                <span className="text-[10px] text-emerald-400 font-mono bg-emerald-950/60 px-1.5 py-0.5 rounded border border-emerald-800">
                  {lang === 'ku' ? 'ئاگاداریی نوێ' : lang === 'ar' ? 'إشعار فوري' : 'Live Sync'}
                </span>
              </div>

              <div className="space-y-2 text-[11px]">
                <div className="flex justify-between text-slate-300">
                  <span>{lang === 'ku' ? 'ئاستی تێگەیشتنی گشتی:' : lang === 'ar' ? 'معدل الاستيعاب العام:' : 'Overall Comprehension:'}</span>
                  <span className="font-mono text-emerald-400 font-bold">٨٨٪ (نایاب)</span>
                </div>
                <div className="w-full h-1.5 bg-slate-950 rounded-full overflow-hidden">
                  <div className="h-full bg-emerald-500 rounded-full w-[88%]" />
                </div>

                <div className="p-2 bg-slate-950 rounded border border-slate-800/80 text-[10px] space-y-1 text-slate-300">
                  <div className="text-slate-400 font-semibold">{lang === 'ku' ? 'خاڵی بەهێز:' : lang === 'ar' ? 'نقاط القوة:' : 'Strengths:'}</div>
                  <div className="text-emerald-300">✔ {lang === 'ku' ? 'یاسای گازەکان و هاوسەنگیی کیمیایی (١٠٠٪)' : lang === 'ar' ? 'قوانين الغازات والاتزان الكيميائي (١٠٠٪)' : 'Gas Laws & Equilibrium (100%)'}</div>
                  <div className="text-slate-400 font-semibold pt-1">{lang === 'ku' ? 'پێویستی بە پێداچوونەوە:' : lang === 'ar' ? 'بحاجة لمراجعة:' : 'Needs Review:'}</div>
                  <div className="text-amber-300">⚠ {lang === 'ku' ? 'هاوکێشەی کاتالیست لە گەرمیی بەرزدا' : lang === 'ar' ? 'معادلات الحفازات في الحرارة العالية' : 'Catalyst kinetics at high temp'}</div>
                </div>
              </div>
            </div>

            {/* Architecture & Storage Widget */}
            <div className="bg-slate-900/90 rounded-lg p-3.5 border border-slate-800 space-y-2 text-[11px]">
              <div className="flex items-center justify-between text-xs font-bold text-slate-300">
                <span className="flex items-center gap-1.5">
                  <Database className="w-3.5 h-3.5 text-purple-400" />
                  <span>{lang === 'ku' ? 'ژێرخانی تۆمارکردن و ئاسایش' : lang === 'ar' ? 'البنية التقنية والحماية' : 'Platform Architecture'}</span>
                </span>
                <span className="font-mono text-[10px] text-purple-400">D1 + FIREBASE</span>
              </div>
              <div className="space-y-1.5 text-[10px] font-mono text-slate-400">
                <div className="flex justify-between bg-slate-950 p-1.5 rounded border border-slate-800/60">
                  <span>Authentication</span>
                  <span className="text-blue-400 font-semibold">Firebase Auth (Role-based)</span>
                </div>
                <div className="flex justify-between bg-slate-950 p-1.5 rounded border border-slate-800/60">
                  <span>Textbook AI Grounding</span>
                  <span className="text-purple-400 font-semibold">Gemini File API (371 pp)</span>
                </div>
                <div className="flex justify-between bg-slate-950 p-1.5 rounded border border-slate-800/60">
                  <span>Quiz Storage & Sync</span>
                  <span className="text-emerald-400 font-semibold">Cloudflare D1 SQL</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (type === 'greenbelt') {
    return (
      <div className="rounded-xl bg-slate-950 border border-slate-800 text-slate-100 p-4 sm:p-6 shadow-inner font-sans overflow-hidden">
        {/* Mockup Topbar */}
        <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-slate-800 text-xs">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-red-500/80" />
            <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
            <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
            <span className="font-mono text-slate-400 ms-2 text-[11px]">
              greenbelt.iq/telemetry-hub [IDG-SOV-03]
            </span>
          </div>
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center gap-1 bg-emerald-950 text-emerald-400 border border-emerald-800 px-2.5 py-0.5 rounded text-[11px] font-mono">
              <Leaf className="w-3 h-3" />
              <span>{lang === 'ku' ? 'ئابووریی بازنەیی و چاودێریی ژینگە' : lang === 'ar' ? 'اقتصاد دائري ورصد بيئي' : 'Circular Economy Hub'}</span>
            </span>
            <span className="inline-flex items-center gap-1 bg-teal-950 text-teal-400 border border-teal-800 px-2 py-0.5 rounded text-[11px] font-mono">
              <span>IOT-SYNCED</span>
            </span>
          </div>
        </div>

        {/* Circular Economy Console Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
          {/* Main Waste Diversion & Composting Lifecycle */}
          <div className="md:col-span-2 bg-slate-900/90 rounded-lg p-4 border border-slate-800 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-bold text-slate-300 flex items-center gap-1.5">
                  <Recycle className="w-4 h-4 text-emerald-400" />
                  <span>
                    {lang === 'ku'
                      ? 'سووڕی کۆکردنەوە و بەرهەمهێنانی کۆمپۆستی بەغدا'
                      : lang === 'ar'
                      ? 'دورة تدوير المخلفات العضوية وإنتاج السماد لمدينة بغداد'
                      : 'Baghdad Organic Diversion & Composting Pipeline'}
                  </span>
                </span>
                <span className="text-[10px] font-mono bg-emerald-900/50 text-emerald-300 px-2 py-0.5 rounded">
                  ZONE-BG-EAST
                </span>
              </div>

              {/* Progress and sensor stage display */}
              <div className="grid grid-cols-3 gap-2 mb-3 text-xs">
                <div className="p-2.5 bg-slate-950 rounded border border-slate-800">
                  <span className="text-slate-400 text-[10px] block">{lang === 'ku' ? 'پاشماوەی وەرگیراو' : lang === 'ar' ? 'النفايات المحولة' : 'Diverted Waste'}</span>
                  <span className="text-lg font-bold text-emerald-400 font-mono">1,420 <span className="text-xs">تەن</span></span>
                </div>
                <div className="p-2.5 bg-slate-950 rounded border border-slate-800">
                  <span className="text-slate-400 text-[10px] block">{lang === 'ku' ? 'پلەی گەرمی کۆمپۆست' : lang === 'ar' ? 'حرارة المعالجة' : 'Compost Temp'}</span>
                  <span className="text-lg font-bold text-amber-400 font-mono">56.4°C</span>
                </div>
                <div className="p-2.5 bg-slate-950 rounded border border-slate-800">
                  <span className="text-slate-400 text-[10px] block">{lang === 'ku' ? 'ڕێژەی شێداری' : lang === 'ar' ? 'نسبة الرطوبة' : 'Moisture Level'}</span>
                  <span className="text-lg font-bold text-blue-400 font-mono">62%</span>
                </div>
              </div>

              {/* Real-time telemetry map / route note */}
              <div className="p-2.5 rounded bg-slate-950 border border-slate-800 text-[11px] space-y-1.5">
                <div className="flex justify-between items-center text-slate-400 border-b border-slate-800/80 pb-1">
                  <span>{lang === 'ku' ? 'ناوچەی چاودێری:' : lang === 'ar' ? 'منطقة الرصد:' : 'Monitored Sector:'} کەرتی کەمەربەندی سەوزی شاری بەغدا</span>
                  <span className="text-emerald-400 font-mono">٩٤.٢٪ ڕێژەی ژیانی نەمامەکان</span>
                </div>
                <p className="text-slate-300 leading-relaxed">
                  {lang === 'ku'
                    ? 'تەکنەلۆژیای هەستەوەری لۆکاڵی (IoT) پەیوەستە بە بنکەی داتای ناوخۆیی. هەموو تەنێک پاشماوەی خۆراک دۆکیۆمێنت دەکرێت و بەپێی ستانداردەکان دەگۆڕدرێت بۆ خاکی بەپیت.'
                    : lang === 'ar'
                    ? 'أجهزة الاستشعار الذكية ترسل قراءات الرطوبة وحيوية التربة مباشرة إلى قاعدة البيانات المحلية. يتم توثيق مسار كل شحنة للحد من انبعاثات الميثان.'
                    : 'Edge IoT telemetry continuously samples soil hydration and microbial activity across designated perimeter green belts.'}
                </p>
              </div>
            </div>

            {/* Ecological metrics bottom bar */}
            <div className="grid grid-cols-3 gap-2 mt-4 pt-3 border-t border-slate-800 text-[11px] font-mono text-center">
              <div className="bg-slate-950 p-2 rounded border border-slate-800/60">
                <span className="text-slate-400 block text-[10px]">{lang === 'ku' ? 'دارە چێنراوەکان' : lang === 'ar' ? 'الأشجار المزروعة' : 'Trees Planted'}</span>
                <span className="text-emerald-400 font-bold">120,000+</span>
              </div>
              <div className="bg-slate-950 p-2 rounded border border-slate-800/60">
                <span className="text-slate-400 block text-[10px]">{lang === 'ku' ? 'کەمکردنەوەی CO2' : lang === 'ar' ? 'عزل الكربون' : 'CO2 Offset'}</span>
                <span className="text-teal-400 font-bold">2,850 T</span>
              </div>
              <div className="bg-slate-950 p-2 rounded border border-slate-800/60">
                <span className="text-slate-400 block text-[10px]">{lang === 'ku' ? 'بەرهەمی کۆمپۆست' : lang === 'ar' ? 'إنتاج السماد' : 'Bio-Compost'}</span>
                <span className="text-amber-400 font-bold">480 T</span>
              </div>
            </div>
          </div>

          {/* Environmental Telemetry Panel */}
          <div className="bg-slate-900/90 rounded-lg p-4 border border-slate-800 flex flex-col justify-between space-y-3">
            <div>
              <div className="flex items-center justify-between mb-3 text-xs font-bold text-slate-300">
                <span className="flex items-center gap-1.5">
                  <Trees className="w-4 h-4 text-emerald-400" />
                  <span>{lang === 'ku' ? 'تۆڕی هەستەوەرەکان' : lang === 'ar' ? 'شبكة المجسات البيئية' : 'Eco-Sensor Grid'}</span>
                </span>
                <span className="text-[10px] text-emerald-400 font-mono">48 NODES</span>
              </div>

              <div className="space-y-2.5 text-xs">
                <div>
                  <div className="flex justify-between text-[11px] text-slate-400 mb-1">
                    <span>{lang === 'ku' ? 'پێنوێنی خۆڵبارین و هەوا' : lang === 'ar' ? 'مؤشر نقاء الهواء' : 'Air Quality Index'}</span>
                    <span className="font-mono text-emerald-400">AQI: 42 (Good)</span>
                  </div>
                  <div className="w-full h-1.5 bg-slate-950 rounded-full overflow-hidden">
                    <div className="h-full bg-emerald-500 rounded-full w-[82%]" />
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-[11px] text-slate-400 mb-1">
                    <span>{lang === 'ku' ? 'خۆڕاگریی ئاودێری' : lang === 'ar' ? 'كفاءة الري الذكي' : 'Smart Irrigation'}</span>
                    <span className="font-mono text-blue-400">91%</span>
                  </div>
                  <div className="w-full h-1.5 bg-slate-950 rounded-full overflow-hidden">
                    <div className="h-full bg-blue-500 rounded-full w-[91%]" />
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-[11px] text-slate-400 mb-1">
                    <span>{lang === 'ku' ? 'پێکەوەبەستنی لۆکاڵی' : lang === 'ar' ? 'التكامل مع البلديات' : 'Municipal Sync'}</span>
                    <span className="font-mono text-amber-400">100% Active</span>
                  </div>
                  <div className="w-full h-1.5 bg-slate-950 rounded-full overflow-hidden">
                    <div className="h-full bg-amber-500 rounded-full w-full" />
                  </div>
                </div>
              </div>
            </div>

            <div className="p-2.5 rounded bg-slate-950 border border-slate-800 text-[11px] space-y-1">
              <span className="text-slate-400 block font-bold">{lang === 'ku' ? 'کێشەی چارەسەرکراو:' : lang === 'ar' ? 'المشكلة المعالجة:' : 'Problem Solved:'}</span>
              <span className="text-slate-200 leading-snug block">
                {lang === 'ku'
                  ? 'وەستاندنی بەفیڕۆچوونی مەترسیداری زبڵی ئەندامی و کەمکردنەوەی گازی میسان لە ڕێگەی داتای وردی ژینگەییەوە.'
                  : lang === 'ar'
                  ? 'القضاء على التخلص العشوائي من المخلفات وبناء درع بيئي ذكي يوثق جهود مكافحة التصحر.'
                  : 'Transforming urban organic waste into restorative carbon sinks backed by sovereign telemetry.'}
              </span>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Iraq NSW (National Single Window)
  return (
    <div className="rounded-xl bg-slate-950 border border-slate-800 text-slate-100 p-4 sm:p-6 shadow-inner font-sans overflow-hidden">
      {/* Mockup Topbar */}
      <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-slate-800 text-xs">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-red-500/80" />
          <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
          <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
          <span className="font-mono text-slate-400 ms-2 text-[11px]">
            nsw.iq/customs-trade-gateway [IDG-STRAT-NSW]
          </span>
        </div>
        <div className="flex items-center gap-2">
          <span className="inline-flex items-center gap-1 bg-blue-950 text-blue-400 border border-blue-800 px-2.5 py-0.5 rounded text-[11px] font-mono">
            <Building2 className="w-3 h-3" />
            <span>WCO Data Model v3.10 Compliant</span>
          </span>
          <span className="inline-flex items-center gap-1 bg-emerald-950 text-emerald-400 border border-emerald-800 px-2 py-0.5 rounded text-[11px] font-mono">
            <span>PORTAL READY</span>
          </span>
        </div>
      </div>

      {/* Single Window Architecture Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
        {/* Main Clearance Pipeline */}
        <div className="md:col-span-2 bg-slate-900/90 rounded-lg p-4 border border-slate-800 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs font-bold text-slate-300 flex items-center gap-1.5">
                <Truck className="w-4 h-4 text-blue-400" />
                <span>
                  {lang === 'ku'
                    ? 'ڕێڕەوی پاکتاوی یەکگرتووی سنوری (گومرگ + تەندروستی + بانک)'
                    : lang === 'ar'
                    ? 'مسار التخليص الجمركي الموحد (الجمارك + الرقابة + التسوية البنكية)'
                    : 'Unified Border Clearance Pipeline (Customs + Standards + Banking)'}
                </span>
              </span>
              <span className="text-[10px] font-mono bg-blue-900/50 text-blue-300 px-2 py-0.5 rounded">
                MANIFEST #IQ-88349-UMM_QASR
              </span>
            </div>

            {/* Clearance pipeline steps */}
            <div className="grid grid-cols-4 gap-2 mb-3 text-center text-xs font-mono">
              <div className="p-2 rounded bg-emerald-950/60 border border-emerald-800 text-emerald-300">
                <CheckCircle2 className="w-3.5 h-3.5 mx-auto mb-1 text-emerald-400" />
                <span className="block text-[10px]">{lang === 'ku' ? 'مانفێستی ئەلیکترۆنی' : lang === 'ar' ? 'البيان الجمركي' : 'E-Manifest'}</span>
                <span className="text-[9px] text-emerald-400 font-bold">VERIFIED</span>
              </div>
              <div className="p-2 rounded bg-emerald-950/60 border border-emerald-800 text-emerald-300">
                <CheckCircle2 className="w-3.5 h-3.5 mx-auto mb-1 text-emerald-400" />
                <span className="block text-[10px]">{lang === 'ku' ? 'پشکنینی پێوانە' : lang === 'ar' ? 'السيطرة النوعية' : 'Standards'}</span>
                <span className="text-[9px] text-emerald-400 font-bold">APPROVED</span>
              </div>
              <div className="p-2 rounded bg-blue-950/60 border border-blue-800 text-blue-300">
                <Activity className="w-3.5 h-3.5 mx-auto mb-1 text-blue-400 animate-spin" />
                <span className="block text-[10px]">{lang === 'ku' ? 'پاکتاوی باج' : lang === 'ar' ? 'التعرفة والرسوم' : 'Tariff Calc'}</span>
                <span className="text-[9px] text-blue-400 font-bold">CALCULATED</span>
              </div>
              <div className="p-2 rounded bg-emerald-950/60 border border-emerald-800 text-emerald-300">
                <CheckCircle2 className="w-3.5 h-3.5 mx-auto mb-1 text-emerald-400" />
                <span className="block text-[10px]">{lang === 'ku' ? 'پارەدانی بانکی' : lang === 'ar' ? 'الدفع الإلكتروني' : 'RTGS Settlement'}</span>
                <span className="text-[9px] text-emerald-400 font-bold">SETTLED</span>
              </div>
            </div>

            {/* Declaration Content Sample */}
            <div className="p-3 rounded bg-slate-950 border border-slate-800 text-[11px] space-y-1.5">
              <div className="flex justify-between items-center text-slate-400 border-b border-slate-800 pb-1">
                <span>{lang === 'ku' ? 'بەندەری دەستپێک:' : lang === 'ar' ? 'ميناء الدخول:' : 'Port of Entry:'} بەندەری ئوم قەسر (Umm Qasr South)</span>
                <span className="text-emerald-400 font-mono">زەمانەتی ئەلیکترۆنی: کارا</span>
              </div>
              <p className="text-slate-300 leading-relaxed">
                {lang === 'ku'
                  ? 'سیستەمی NSW کاتی پاکتاوی بار لە ٩ ڕۆژەوە کەم دەکاتەوە بۆ کەمتر لە ٦ کاتژمێر بە یەکخستنی داتا بەبێ پێویستی بە دۆکیومێنتی کاغەزی و دەستێوەردانی چەندبارە.'
                  : lang === 'ar'
                  ? 'تعمل المنصة على تقليص زمن الإفراج الجمركي من ٩ أيام إلى أقل من ٦ ساعات من خلال الربط الإلكتروني المباشر بين هيئة المنافذ والجمارك والبنك المركزي.'
                  : 'Harmonizes disparate regulatory declarations into an encrypted single-window flow, preventing tariff leakages and expediting freight release.'}
              </p>
            </div>
          </div>

          {/* National Gateway Metrics */}
          <div className="grid grid-cols-3 gap-2 mt-4 pt-3 border-t border-slate-800 text-[11px] font-mono text-center">
            <div className="bg-slate-950 p-2 rounded border border-slate-800/60">
              <span className="text-slate-400 block text-[10px]">{lang === 'ku' ? 'کاتی پاکتاو' : lang === 'ar' ? 'زمن التخليص' : 'Clearance Time'}</span>
              <span className="text-emerald-400 font-bold">-75% Time</span>
            </div>
            <div className="bg-slate-950 p-2 rounded border border-slate-800/60">
              <span className="text-slate-400 block text-[10px]">{lang === 'ku' ? 'دەروازە بەستراوەکان' : lang === 'ar' ? 'المنافذ المستهدفة' : 'Connected Ports'}</span>
              <span className="text-blue-400 font-bold">22 Border Points</span>
            </div>
            <div className="bg-slate-950 p-2 rounded border border-slate-800/60">
              <span className="text-slate-400 block text-[10px]">{lang === 'ku' ? 'سەروەریی داتا' : lang === 'ar' ? 'سيادة البيانات' : 'Sovereignty'}</span>
              <span className="text-purple-400 font-bold">100% National</span>
            </div>
          </div>
        </div>

        {/* Stakeholder Single Window Integration Panel */}
        <div className="bg-slate-900/90 rounded-lg p-4 border border-slate-800 flex flex-col justify-between space-y-3">
          <div>
            <div className="flex items-center justify-between mb-3 text-xs font-bold text-slate-300">
              <span className="flex items-center gap-1.5">
                <Layers className="w-4 h-4 text-blue-400" />
                <span>{lang === 'ku' ? 'تۆڕی دەسەڵاتە بەستراوەکان' : lang === 'ar' ? 'الجهات المرتبطة' : 'Federated Authorities'}</span>
              </span>
              <span className="text-[10px] text-blue-400 font-mono">SECURE</span>
            </div>

            <div className="space-y-2.5 text-xs">
              <div>
                <div className="flex justify-between text-[11px] text-slate-400 mb-1">
                  <span>{lang === 'ku' ? 'دەستەی گشتیی گومرگ' : lang === 'ar' ? 'الهيئة العامة للجمارك' : 'Customs Authority'}</span>
                  <span className="font-mono text-emerald-400">Integrated</span>
                </div>
                <div className="w-full h-1.5 bg-slate-950 rounded-full overflow-hidden">
                  <div className="h-full bg-emerald-500 rounded-full w-full" />
                </div>
              </div>

              <div>
                <div className="flex justify-between text-[11px] text-slate-400 mb-1">
                  <span>{lang === 'ku' ? 'بانکی ناوەندیی عێراق (CBI)' : lang === 'ar' ? 'البنك المركزي العراقي' : 'Central Bank of Iraq'}</span>
                  <span className="font-mono text-blue-400">Connected</span>
                </div>
                <div className="w-full h-1.5 bg-slate-950 rounded-full overflow-hidden">
                  <div className="h-full bg-blue-500 rounded-full w-full" />
                </div>
              </div>

              <div>
                <div className="flex justify-between text-[11px] text-slate-400 mb-1">
                  <span>{lang === 'ku' ? 'کۆمپانیای گشتی بەندەرەکان' : lang === 'ar' ? 'موانئ العراق والمنافذ' : 'Ports & Terminals'}</span>
                  <span className="font-mono text-purple-400">Online</span>
                </div>
                <div className="w-full h-1.5 bg-slate-950 rounded-full overflow-hidden">
                  <div className="h-full bg-purple-500 rounded-full w-full" />
                </div>
              </div>
            </div>
          </div>

          <div className="p-2.5 rounded bg-slate-950 border border-slate-800 text-[11px] space-y-1">
            <span className="text-slate-400 block font-bold">{lang === 'ku' ? 'سەروەری و دیسپلین:' : lang === 'ar' ? 'الانضباط والسيادة:' : 'Sovereign Protocol:'}</span>
            <span className="text-slate-200 leading-snug block">
              {lang === 'ku'
                ? 'کۆتاییهێنان بە بەفیڕۆچوونی داهاتی نیشتمانی لە ڕێگەی شیکاری و چاودێریی تۆکمەی دیجیتاڵییەوە.'
                : lang === 'ar'
                ? 'منع الهدر المالي وحماية المنافذ الحدودية بنظام موحد يراعي متطلبات الأمن القومي.'
                : 'Guarantees end-to-end auditability across national import/export corridors.'}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
