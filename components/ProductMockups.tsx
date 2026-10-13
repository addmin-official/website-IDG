'use client';

import React, { useState } from 'react';
import dynamic from 'next/dynamic';
import { Language } from '@/lib/translations';

const StudentDashboard = dynamic(
  () => import('@/components/StudentDashboard'),
  { ssr: false, loading: () => <div className="h-64 bg-[#0B172E] rounded-lg animate-pulse" /> }
);
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
  const [zanaTab, setZanaTab] = useState<'dashboard' | 'tutor'>('dashboard');

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
      <div className="space-y-3 font-sans">
        {/* ZaNa View Mode Switcher */}
        <div className="flex flex-wrap items-center justify-between gap-2 p-2.5 rounded-xl bg-slate-900 border border-slate-800">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-purple-500 animate-pulse" />
            <span className="text-xs font-mono font-bold text-purple-300">
              {lang === 'ku' ? 'ئەکادیمیای زانا — پلاتفۆرمی زیرەکی خوێندن' : lang === 'ar' ? 'أكاديمية زانا — المنصة التعليمية الذكية' : 'ZaNa Academy — Smart Learning Platform'}
            </span>
          </div>

          <div className="inline-flex p-1 bg-slate-950 rounded-lg border border-slate-800 text-xs font-medium">
            <button
              type="button"
              onClick={() => setZanaTab('dashboard')}
              className={`px-3 py-1.5 rounded-md transition flex items-center gap-1.5 ${
                zanaTab === 'dashboard'
                  ? 'bg-purple-600 text-white font-bold shadow-xs'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              <span>📊</span>
              <span>{lang === 'ku' ? 'داشبۆردی قوتابی' : lang === 'ar' ? 'لوحة متابعة الطالب' : 'Student Dashboard'}</span>
            </button>
            <button
              type="button"
              onClick={() => setZanaTab('tutor')}
              className={`px-3 py-1.5 rounded-md transition flex items-center gap-1.5 ${
                zanaTab === 'tutor'
                  ? 'bg-purple-600 text-white font-bold shadow-xs'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              <span>🎓</span>
              <span>{lang === 'ku' ? 'هۆکاری زیرەک' : lang === 'ar' ? 'المعلم الذكي' : 'AI Tutor Workspace'}</span>
            </button>
          </div>
        </div>

        {zanaTab === 'dashboard' ? (
          <StudentDashboard lang={lang} onBackToTutor={() => setZanaTab('tutor')} />
        ) : (
          <div className="rounded-xl bg-slate-950 border border-slate-800 text-slate-100 p-4 sm:p-6 shadow-inner font-sans overflow-hidden">
            {/* Mockup Topbar */}
            <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-slate-800 text-xs">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500/80" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                <span className="font-mono text-slate-400 ms-2 text-[11px]">
                  new-vs-zana.zana-platform.workers.dev [IDG-SOV-02]
                </span>
              </div>
              <div className="flex items-center gap-2">
                <span className="inline-flex items-center gap-1 bg-purple-950 text-purple-400 border border-purple-800 px-2.5 py-0.5 rounded text-[11px] font-mono">
                  <GraduationCap className="w-3 h-3" />
                  <span>
                    {lang === 'ku'
                      ? 'هۆکاری ژیریی دەستکرد — AI Tutor'
                      : lang === 'ar'
                      ? 'المعلم الذكي — AI Tutor'
                      : 'AI Tutor — Smart Companion'}
                  </span>
                </span>
                <span className="inline-flex items-center gap-1 bg-blue-950 text-blue-400 border border-blue-800 px-2 py-0.5 rounded text-[11px] font-mono">
                  <span>ACTIVE</span>
                </span>
              </div>
            </div>

            {/* Metrics row */}
            <div className="grid grid-cols-3 gap-2 my-4 text-center font-mono text-xs">
              <div className="bg-slate-900/90 border border-slate-800 p-2.5 rounded-lg">
                <span className="text-[10px] text-slate-400 block font-sans">
                  {lang === 'ku' ? 'لاپەڕەی کتێب' : lang === 'ar' ? 'صفحات الكتاب' : 'Textbook Pages'}
                </span>
                <span className="text-base font-extrabold text-blue-400">
                  {lang === 'ku' ? '٣٧١ لاپەڕە' : lang === 'ar' ? '٣٧١ صفحة' : '371 Pages'}
                </span>
              </div>
              <div className="bg-slate-900/90 border border-slate-800 p-2.5 rounded-lg">
                <span className="text-[10px] text-slate-400 block font-sans">
                  {lang === 'ku' ? 'بەندی کیمیا' : lang === 'ar' ? 'فصول الكيمياء' : 'Chemistry Chapters'}
                </span>
                <span className="text-base font-extrabold text-purple-400">
                  {lang === 'ku' ? '١٢ بەند' : lang === 'ar' ? '١٢ فصلاً' : '12 Chapters'}
                </span>
              </div>
              <div className="bg-slate-900/90 border border-slate-800 p-2.5 rounded-lg">
                <span className="text-[10px] text-slate-400 block font-sans">
                  {lang === 'ku' ? 'تاقیکردنەوە' : lang === 'ar' ? 'الاختبارات' : 'Assessments'}
                </span>
                <span className="text-base font-extrabold text-emerald-400">
                  {lang === 'ku' ? '١٦٣ تاقیکردنەوە' : lang === 'ar' ? '١٦٣ اختباراً' : '163 Tests'}
                </span>
              </div>
            </div>

            {/* Main Panel & Side Panel Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {/* Main Panel: Student Q&A */}
              <div className="md:col-span-2 bg-slate-900/90 rounded-lg p-4 border border-slate-800 flex flex-col justify-between space-y-3">
                <div>
                  <div className="flex items-center justify-between mb-3 pb-2 border-b border-slate-800/80">
                    <span className="text-xs font-bold text-slate-200 flex items-center gap-1.5">
                      <BookOpen className="w-4 h-4 text-purple-400" />
                      <span>
                        {lang === 'ku'
                          ? 'قوتابی پرسیار دەکات'
                          : lang === 'ar'
                          ? 'سؤال الطالب'
                          : 'Student Asks AI'}
                      </span>
                    </span>
                    <span className="text-[10px] font-mono bg-purple-900/50 text-purple-300 px-2 py-0.5 rounded">
                      {lang === 'ku' ? 'پۆلی ١٢ زانستی' : lang === 'ar' ? 'الصف ١٢ العلمي' : 'Grade 12 Science'}
                    </span>
                  </div>

                  {/* Sample Q&A */}
                  <div className="space-y-3 text-xs">
                    {/* Question */}
                    <div className="p-3 rounded bg-slate-950/90 border border-slate-800 space-y-1">
                      <div className="flex justify-between items-center text-[10px] text-slate-400">
                        <span className="font-semibold text-blue-400">
                          {lang === 'ku' ? 'پرسیاری قوتابی:' : lang === 'ar' ? 'استفسار الطالب:' : 'Student Inquiry:'}
                        </span>
                        <span className="font-mono text-slate-500">
                          {lang === 'ku' ? 'کیمیا — بەندی ٣، پرسیارەکانی ٥' : lang === 'ar' ? 'الكيمياء — الفصل ٣، أسئلة ٥' : 'Chemistry — Chapter 3, Question 5'}
                        </span>
                      </div>
                      <p className="text-slate-200 text-[11px] leading-relaxed pt-1">
                        {lang === 'ku'
                          ? 'چۆن خێراییی کارلێکی کیمیایی بە بەکارهێنانی کاتالیست دەگۆڕێت و کاریگەریی چییە لەسەر وزەی چالاککردن؟'
                          : lang === 'ar'
                          ? 'كيف تتغير سرعة التفاعل الكيميائي باستخدام العامل الحفاز وما هو أثره على طاقة التنشيط؟'
                          : 'How does a catalyst alter the rate of a chemical reaction and what is its specific effect on activation energy?'}
                      </p>
                    </div>

                    {/* Answer */}
                    <div className="p-3 rounded bg-purple-950/30 border border-purple-800/60 space-y-1.5">
                      <div className="flex justify-between items-center text-[10px]">
                        <span className="font-bold text-purple-300 flex items-center gap-1">
                          <Sparkles className="w-3.5 h-3.5 text-purple-400" />
                          <span>{lang === 'ku' ? 'وەڵام لە کتێبی فەرمی' : lang === 'ar' ? 'الإجابة من الكتاب الرسمي' : 'Answer from Official Textbook'}</span>
                        </span>
                        <span className="font-mono text-emerald-400 bg-emerald-950/60 px-1.5 py-0.5 rounded border border-emerald-800/80 text-[10px]">
                          {lang === 'ku' ? 'سەرچاوە: لاپەڕە ٤٧' : lang === 'ar' ? 'المصدر: صفحة ٤٧' : 'Source: Page 47'}
                        </span>
                      </div>
                      <p className="text-slate-200 text-[11px] leading-relaxed">
                        {lang === 'ku'
                          ? 'کاتالیست خێراییی کارلێک زیاد دەکات بە دابینکردنی ڕێڕەوێکی جێگرەوە کە پێویستی بە وزەی چالاککردنی کەمترە، بەبێ ئەوەی کاتالیستەکە لە کارلێکەکەدا بەکارببرێت یان بڕی بەرهەم بگۆڕێت.'
                          : lang === 'ar'
                          ? 'يزيد العامل الحفاز من سرعة التفاعل عن طريق توفير مسار بديل بطاقة تنشيط أقل، دون أن يُستهلك الحفاز أثناء التفاعل أو يغير من كمية النواتج.'
                          : 'A catalyst accelerates the reaction by providing an alternative mechanism with a lower activation energy, without being consumed or altering total product yield.'}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Bottom: Progress Bar */}
                <div className="pt-3 border-t border-slate-800">
                  <div className="flex justify-between items-center text-[11px] text-slate-300 mb-1.5">
                    <span className="font-semibold flex items-center gap-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                      <span>{lang === 'ku' ? 'پێشکەوتنی گشتی' : lang === 'ar' ? 'التقدم الإجمالي' : 'Overall Progress'}</span>
                    </span>
                    <button
                      type="button"
                      onClick={() => setZanaTab('dashboard')}
                      className="font-mono text-purple-400 hover:text-purple-300 font-bold underline text-[11px]"
                    >
                      {lang === 'ku' ? 'کردنەوەی داشبۆردی تەواو ↗' : lang === 'ar' ? 'فتح لوحة المتابعة الكاملة ↗' : 'Open Full Dashboard ↗'}
                    </button>
                  </div>
                  <div className="w-full h-2 bg-slate-950 rounded-full overflow-hidden border border-slate-800">
                    <div className="h-full bg-gradient-to-r from-blue-500 to-emerald-500 rounded-full w-[65%]" />
                  </div>
                </div>
              </div>

              {/* Side Panel: Parent Report */}
              <div className="bg-slate-900/90 rounded-lg p-4 border border-slate-800 flex flex-col justify-between space-y-3">
                <div>
                  <div className="flex items-center justify-between mb-3 pb-2 border-b border-slate-800/80 text-xs font-bold text-slate-200">
                    <span className="flex items-center gap-1.5">
                      <BadgeCheck className="w-4 h-4 text-blue-400" />
                      <span>{lang === 'ku' ? 'ڕاپۆرتی دایک و باوک' : lang === 'ar' ? 'تقرير أولياء الأمور' : 'Parent Report'}</span>
                    </span>
                    <span className="text-[10px] font-mono text-emerald-400 bg-emerald-950/60 px-1.5 py-0.5 rounded border border-emerald-800">
                      {lang === 'ku' ? 'ئەمڕۆ' : lang === 'ar' ? 'اليوم' : 'Today'}
                    </span>
                  </div>

                  <div className="space-y-2.5 text-xs">
                    <div className="flex justify-between items-center p-2 rounded bg-slate-950 border border-slate-800/60">
                      <span className="text-slate-400 text-[11px]">
                        {lang === 'ku' ? 'کاتی خوێندن:' : lang === 'ar' ? 'وقت المذاكرة:' : 'Study Time:'}
                      </span>
                      <span className="font-mono text-blue-400 font-bold text-[11px]">
                        {lang === 'ku' ? '٤٥ خولەک ئەمڕۆ' : lang === 'ar' ? '٤٥ دقيقة اليوم' : '45 mins today'}
                      </span>
                    </div>

                    <div className="flex justify-between items-center p-2 rounded bg-slate-950 border border-slate-800/60">
                      <span className="text-slate-400 text-[11px]">
                        {lang === 'ku' ? 'وانەی تەواوکراو:' : lang === 'ar' ? 'الدروس المكتملة:' : 'Lessons Completed:'}
                      </span>
                      <span className="font-mono text-purple-400 font-bold text-[11px]">
                        {lang === 'ku' ? '٣ وانە' : lang === 'ar' ? '٣ دروس' : '3 lessons'}
                      </span>
                    </div>

                    <div className="flex justify-between items-center p-2 rounded bg-slate-950 border border-slate-800/60">
                      <span className="text-slate-400 text-[11px]">
                        {lang === 'ku' ? 'ئاست:' : lang === 'ar' ? 'المستوى:' : 'Overall Rating:'}
                      </span>
                      <span className="font-semibold text-emerald-400 text-[11px] bg-emerald-950/40 px-2 py-0.5 rounded border border-emerald-800/60">
                        {lang === 'ku' ? 'باش' : lang === 'ar' ? 'جيد' : 'Good'}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="p-2.5 rounded bg-slate-950 border border-slate-800 text-[11px] space-y-1">
                  <span className="text-slate-400 block font-bold">
                    {lang === 'ku' ? 'تێبینیی سیستەم:' : lang === 'ar' ? 'ملاحظة المنظومة:' : 'System Note:'}
                  </span>
                  <span className="text-slate-300 leading-snug block text-[10px]">
                    {lang === 'ku'
                      ? 'قوتابی لە کاتی خۆیدا وانەکانی بەندەکە تەواو دەکات و پرسیارە وردەکان دەپرسێت.'
                      : lang === 'ar'
                      ? 'يكمل الطالب الدروس بالوقت المحدد ويطرح الأسئلة المنهجية بدقة.'
                      : 'Student is finishing chapter assignments on schedule and asking targeted curriculum questions.'}
                  </span>
                </div>
              </div>
            </div>
          </div>
        )}
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
            nsw.iq/trade-gateway [IRAQ NSW]
          </span>
        </div>
        <div className="flex items-center gap-2">
          <span className="inline-flex items-center gap-1 bg-blue-950 text-blue-400 border border-blue-800 px-2.5 py-0.5 rounded text-[11px] font-mono">
            <Building2 className="w-3 h-3" />
            <span>WCO Data Model v3.10 Compliant</span>
          </span>
          <span className="inline-flex items-center gap-1 bg-emerald-950 text-emerald-400 border border-emerald-800 px-2 py-0.5 rounded text-[11px] font-mono">
            <span>Zero-Trust Enabled</span>
          </span>
        </div>
      </div>

      {/* Metrics Row (4 Cards) */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-2.5 mt-4 text-[11px] font-mono text-center">
        <div className="bg-slate-900/90 p-2.5 rounded-lg border border-slate-800">
          <span className="text-slate-400 block text-[10px]">
            {lang === 'ku' ? 'کاتی پاکتاو' : lang === 'ar' ? 'زمن التخليص' : 'Clearance Time'}
          </span>
          <span className="text-emerald-400 font-bold text-xs block mt-0.5">7h (was 48h)</span>
          <span className="text-emerald-500 text-[10px] font-bold">↓85%</span>
        </div>
        <div className="bg-slate-900/90 p-2.5 rounded-lg border border-slate-800">
          <span className="text-slate-400 block text-[10px]">
            {lang === 'ku' ? 'تێچووی ڕاگەیاندن' : lang === 'ar' ? 'تكلفة البيان' : 'Cost/Declaration'}
          </span>
          <span className="text-blue-400 font-bold text-xs block mt-0.5">$400 (was $1k)</span>
          <span className="text-blue-500 text-[10px] font-bold">↓60%</span>
        </div>
        <div className="bg-slate-900/90 p-2.5 rounded-lg border border-slate-800">
          <span className="text-slate-400 block text-[10px]">
            {lang === 'ku' ? 'شەفافیەت' : lang === 'ar' ? 'الشفافية' : 'Transparency'}
          </span>
          <span className="text-purple-400 font-bold text-xs block mt-0.5">90%+ (was 10%)</span>
          <span className="text-purple-500 text-[10px] font-bold">↑9x</span>
        </div>
        <div className="bg-slate-900/90 p-2.5 rounded-lg border border-slate-800">
          <span className="text-slate-400 block text-[10px]">
            {lang === 'ku' ? 'کەمکردنەوەی گەندەڵی' : lang === 'ar' ? 'مكافحة الفساد' : 'Corruption'}
          </span>
          <span className="text-emerald-400 font-bold text-xs block mt-0.5">0% (was 40%)</span>
          <span className="text-emerald-500 text-[10px] font-bold">↓100%</span>
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
                    ? 'ڕێڕەوی پاکتاوی یەکگرتووی سنوری (گومرگ + ستاندارد + بانک)'
                    : lang === 'ar'
                    ? 'مسار التخليص الجمركي الموحد (الجمارك + المعايير + التسوية البنكية)'
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
                <span className="block text-[10px]">{lang === 'ku' ? 'مانیفێستی ئەلیکترۆنی' : lang === 'ar' ? 'البيان الجمركي' : 'E-Manifest'}</span>
                <span className="text-[9px] text-emerald-400 font-bold">VERIFIED</span>
              </div>
              <div className="p-2 rounded bg-emerald-950/60 border border-emerald-800 text-emerald-300">
                <CheckCircle2 className="w-3.5 h-3.5 mx-auto mb-1 text-emerald-400" />
                <span className="block text-[10px]">{lang === 'ku' ? 'پشکنینی ستاندارد' : lang === 'ar' ? 'فحص المعايير' : 'Standards Check'}</span>
                <span className="text-[9px] text-emerald-400 font-bold">APPROVED</span>
              </div>
              <div className="p-2 rounded bg-blue-950/60 border border-blue-800 text-blue-300">
                <Activity className="w-3.5 h-3.5 mx-auto mb-1 text-blue-400 animate-spin" />
                <span className="block text-[10px]">{lang === 'ku' ? 'پاکتاوی باج' : lang === 'ar' ? 'التعرفة والرسوم' : 'Tariff Calc'}</span>
                <span className="text-[9px] text-blue-400 font-bold">CALCULATED</span>
              </div>
              <div className="p-2 rounded bg-emerald-950/60 border border-emerald-800 text-emerald-300">
                <CheckCircle2 className="w-3.5 h-3.5 mx-auto mb-1 text-emerald-400" />
                <span className="block text-[10px]">{lang === 'ku' ? 'پارەدانی RTGS' : lang === 'ar' ? 'تسوية RTGS' : 'RTGS Settlement'}</span>
                <span className="text-[9px] text-emerald-400 font-bold">SETTLED</span>
              </div>
            </div>

            {/* Declaration Content Sample */}
            <div className="p-3 rounded bg-slate-950 border border-slate-800 text-[11px] space-y-1.5">
              <div className="flex justify-between items-center text-slate-400 border-b border-slate-800 pb-1">
                <span>{lang === 'ku' ? 'دەروازەی تاقیکاری:' : lang === 'ar' ? 'منفذ التشغيل التجريبي:' : 'Pilot Border:'} بەندەری ئوم قەسر (Umm Qasr South)</span>
                <span className="text-emerald-400 font-mono">Zero-Trust: ACTIVE</span>
              </div>
              <p className="text-slate-300 leading-relaxed">
                {lang === 'ku'
                  ? 'کەمکردنەوەی کاتی پاکتاوی گومرگی لە ٤٨ کاتژمێرەوە بۆ ٧ کاتژمێر، کەمکردنەوەی تێچوو لە $١،٠٠٠ بۆ $٤٠٠، و بەرزکردنەوەی شەفافیەت لە ١٠٪ بۆ ٩٠٪+ بە یەکخستنی ١٠ دەروازەی سنوری لەگەڵ هەرێمی کوردستان.'
                  : lang === 'ar'
                  ? 'تقليص زمن التخليص الجمركي من ٤٨ ساعة إلى ٧ ساعات، وتخفيض التكلفة من ١,٠٠٠$ إلى ٤٠٠$، ورفع الشفافية من ١٠٪ إلى ٩٠٪+ عبر توحيد ١٠ منافذ حدودية مع إقليم كردستان.'
                  : 'Slashes clearance time from 48h to 7h (85% faster), cuts costs from $1,000 to $400, and elevates transparency from 10% to 90%+ across 10 unified borders plus KRG.'}
              </p>
            </div>
          </div>

          {/* Implementation Status Section */}
          <div className="mt-4 pt-3 border-t border-slate-800 text-[11px] space-y-2">
            <div className="flex justify-between items-center text-xs">
              <span className="font-bold text-slate-300">
                {lang === 'ku'
                  ? 'قۆناغی ٨/٩: جێبەجێکردنی تاقیکاری (ئوم قەسر) — مانگی ١١-١٢'
                  : lang === 'ar'
                  ? 'المرحلة ٨/٩: التشغيل التجريبي (أم قصر) — الشهر ١١-١٢'
                  : 'Phase 8/9: Pilot Deployment (Umm Qasr) — Month 11-12'}
              </span>
              <span className="font-mono text-emerald-400 font-bold">70%</span>
            </div>
            <div className="w-full h-2 bg-slate-950 rounded-full overflow-hidden border border-slate-800">
              <div className="h-full bg-emerald-500 rounded-full w-[70%]" />
            </div>
            <div className="flex justify-between items-center text-[10px] text-slate-400 font-mono">
              <span>{lang === 'ku' ? 'داهاتوو: فراوانکردن بۆ هەموو دەروازەکان (مانگی ١٣-١٨)' : lang === 'ar' ? 'التالي: التوسع لكافة المنافذ (الشهر ١٣-١٨)' : 'Next: Scaling to All Borders (Month 13-18)'}</span>
              <span className="text-purple-400 font-bold">Budget: $180M | ROI: 420%</span>
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

              <div>
                <div className="flex justify-between text-[11px] text-slate-400 mb-1">
                  <span>{lang === 'ku' ? 'گومرگی هەرێمی کوردستان (KRG)' : lang === 'ar' ? 'جمارك إقليم كردستان (KRG)' : 'KRG Customs'}</span>
                  <span className="font-mono text-emerald-400">Connected</span>
                </div>
                <div className="w-full h-1.5 bg-slate-950 rounded-full overflow-hidden">
                  <div className="h-full bg-emerald-500 rounded-full w-full" />
                </div>
              </div>
            </div>
          </div>

          <div className="p-2.5 rounded bg-slate-950 border border-slate-800 text-[11px] space-y-1">
            <span className="text-slate-400 block font-bold">{lang === 'ku' ? 'ئامانجە داراییەکان:' : lang === 'ar' ? 'المؤشرات المالية:' : 'Financial Targets:'}</span>
            <span className="text-slate-200 leading-snug block">
              {lang === 'ku'
                ? 'بودجەی گشتی: $١٨٠ ملیۆن | ماوە: ١٨ مانگ | قۆناغی بێ‌قازانج‌وزەرەر: مانگی ١٨ | قازانجی ساڵی ٣: $٣٩ ملیۆن/ساڵ | ROI: ٤٢٠٪.'
                : lang === 'ar'
                ? 'الميزانية الإجمالية: ١٨٠ مليون دولار | المدة: ١٨ شهراً | نقطة التعادل: الشهر ١٨ | أرباح السنة الثالثة: ٣٩ مليون دولار/سنوياً | العائد: ٤٢٠٪.'
                : 'Total Budget: $180M | Timeline: 18 Months | Break-even: Month 18 | Year 3 Profit: $39M/yr | ROI: 420%.'}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
