'use client';

import React, { useState, useMemo } from 'react';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Breadcrumbs from '@/components/Breadcrumbs';
import JobShareCard from '@/components/JobShareCard';
import { getJobPostings } from '@/lib/job-postings';
import { translations, Language } from '@/lib/translations';
import { useLocale } from '@/lib/locale-context';
import {
  Briefcase,
  Search,
  Award,
  Mail,
  ArrowRight,
  ArrowLeft,
  Filter,
  CheckCircle2,
  Rocket,
  Users,
  TrendingUp,
  AlertTriangle,
  Sparkles,
} from 'lucide-react';

interface CareersClientProps {
  locale: string;
}

export default function CareersClient({ locale }: CareersClientProps) {
  const { isRtl } = useLocale();
  const ArrowIcon = isRtl ? ArrowLeft : ArrowRight;

  const lang: Language = locale === 'ar' || locale === 'en' ? (locale as Language) : 'ku';
  const t = translations[lang];
  const careersT = t.careers;

  const [selectedDept, setSelectedDept] = useState<string>('all');
  const [selectedLevel, setSelectedLevel] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const allJobs = useMemo(() => getJobPostings(locale), [locale]);

  const filteredJobs = useMemo(() => {
    return allJobs.filter((job) => {
      const matchDept = selectedDept === 'all' || job.department === selectedDept;
      const matchLevel = selectedLevel === 'all' || job.level === selectedLevel;
      const matchSearch =
        !searchQuery.trim() ||
        job.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        job.titleKu.toLowerCase().includes(searchQuery.toLowerCase()) ||
        job.titleAr.toLowerCase().includes(searchQuery.toLowerCase()) ||
        job.skills.some((s) => s.toLowerCase().includes(searchQuery.toLowerCase()));

      return matchDept && matchLevel && matchSearch;
    });
  }, [allJobs, selectedDept, selectedLevel, searchQuery]);

  return (
    <div className="min-h-screen bg-[#060D1A] text-white flex flex-col">
      <Navbar />

      <main className="flex-1">
        {/* Breadcrumbs */}
        <div className="bg-[#0B172E]/40 border-b border-[#102447]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
            <Breadcrumbs
              items={[
                {
                  label:
                    locale === 'ku' ? 'هەلی کار' : locale === 'ar' ? 'الوظائف والمسار المهني' : 'Careers',
                  href: `/${locale}/careers`,
                },
              ]}
            />
          </div>
        </div>

        {/* HERO */}
        <section className="relative overflow-hidden pt-12 pb-14 lg:pt-16 lg:pb-20 border-b border-[#102447] bg-[#060D1A]">
          <div className="absolute top-1/3 start-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[320px] bg-blue-600/10 blur-[130px] rounded-full pointer-events-none" />

          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#0B172E] border border-blue-500/30 text-blue-400 text-xs sm:text-sm font-medium mb-6 shadow-inner">
              <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" />
              <span>
                {locale === 'ku'
                  ? 'سەروەریی تەکنۆلۆژی و دەستی کاری نیشتمانی'
                  : locale === 'ar'
                  ? 'السيادة التكنولوجية والكفاءات الوطنية'
                  : 'Sovereign Tech & Human Capital'}
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight max-w-4xl mx-auto leading-tight sm:leading-snug">
              {locale === 'ku'
                ? 'پۆستەکانی کاری کراوە'
                : locale === 'ar'
                ? 'الوظائف المفتوحة'
                : 'Open Positions'}
            </h1>

            <p className="mt-4 text-base sm:text-lg lg:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
              {locale === 'ku'
                ? 'تیمی IDG بۆ بنیاتنانی سەروەریی تێکنۆلۆژی بۆ عێراق'
                : locale === 'ar'
                ? 'انضم إلى فريق IDG لبناء السيادة التكنولوجية للعراق'
                : 'Join IDG to build sovereign technology for Iraq'}
            </p>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <a
                href="#open-positions"
                className="inline-flex items-center gap-2 px-7 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold text-sm transition-all shadow-xl shadow-blue-600/30"
              >
                <Briefcase className="w-4 h-4" />
                <span>
                  {locale === 'ku'
                    ? 'بینینی پۆستە کراوەکان'
                    : locale === 'ar'
                    ? 'استعراض الوظائف الشاغرة'
                    : 'View Open Positions'}
                </span>
                <ArrowIcon className="w-4 h-4" />
              </a>
              <a
                href="mailto:careers@idggov.tech?subject=Co-founder%20Partner%20Application"
                className="inline-flex items-center gap-2 px-7 py-3 rounded-xl bg-[#0B172E] hover:bg-[#102447] text-slate-200 border border-[#102447] hover:border-blue-500/40 font-semibold text-sm transition-all"
              >
                <Mail className="w-4 h-4 text-amber-400" />
                <span>{careersT.ctaButton?.[lang] || 'Apply as Co-founder / Partner'}</span>
              </a>
            </div>
          </div>
        </section>

        {/* ⚠️ WARNING BANNER - CRITICAL */}
        <section className="bg-[#451a03] border-y sm:border-y-0 sm:border-l-4 sm:border-r-4 border-[#D97706] px-4 sm:px-6 lg:px-8 py-5 shadow-2xl">
          <div className="max-w-6xl mx-auto">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-[#D97706]/20 border border-[#D97706]/40 flex items-center justify-center shrink-0 mt-0.5">
                <AlertTriangle className="w-5 h-5 text-[#FBBF24]" />
              </div>
              <div className="flex-1">
                <h3 className="text-[#FBBF24] font-bold text-base sm:text-lg mb-1.5 flex items-center gap-2">
                  <span>
                    {locale === 'ku'
                      ? 'تێبینی گرنگ (قۆناغی سەرەتایی پێش-وەبەرهێنان)'
                      : locale === 'ar'
                      ? 'ملاحظة مهمة (مرحلة التأسيس المبكرة Pre-Seed)'
                      : 'Important Note (Early-Stage Pre-Seed Reality)'}
                  </span>
                </h3>
                <p className="text-amber-100 text-sm sm:text-base leading-relaxed">
                  {careersT.banner?.[lang]}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* WHY JOIN IDG */}
        <section className="py-16 lg:py-20 bg-[#081226] border-b border-[#102447]">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-semibold uppercase tracking-wider mb-3">
                <Sparkles className="w-3.5 h-3.5" />
                <span>
                  {locale === 'ku' ? 'بۆچی IDG؟' : locale === 'ar' ? 'لماذا IDG؟' : 'Why IDG?'}
                </span>
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight">
                {locale === 'ku'
                  ? 'بنیاتنانی سەروەریی دیجیتاڵ لەگەڵ هاوبەشە ڕاستەقینەکان'
                  : locale === 'ar'
                  ? 'بناء السيادة الرقمية مع شركاء مؤسسين حقيقيين'
                  : 'Build Sovereign Digital Capability as True Partners'}
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
              {/* Card 1 */}
              <div className="bg-[#0B172E] border border-[#102447] rounded-2xl p-6 sm:p-7 hover:border-blue-500/40 transition-colors flex flex-col justify-between">
                <div>
                  <div className="w-12 h-12 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 mb-5">
                    <Rocket className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">
                    {locale === 'ku' ? '🚀 پەیامی کاریگەر' : locale === 'ar' ? '🚀 رسالة مؤثرة' : '🚀 High-Impact Mission'}
                  </h3>
                  <p className="text-sm text-slate-300 leading-relaxed">
                    {locale === 'ku'
                      ? 'سەروەریی تێکنۆلۆژی بۆ عێراق تەنیا ئارەزوو نییە، بەڵکوو ڕێگای مسۆگەری نیشتمانە.'
                      : locale === 'ar'
                      ? 'السيادة التكنولوجية للعراق ليست مجرد رؤية، بل طريق الأمة نحو الاستقلال الرقمي.'
                      : 'Technological sovereignty for Iraq is not just a vision; it is an urgent national imperative.'}
                  </p>
                </div>
              </div>

              {/* Card 2 */}
              <div className="bg-[#0B172E] border border-[#102447] rounded-2xl p-6 sm:p-7 hover:border-amber-500/40 transition-colors flex flex-col justify-between">
                <div>
                  <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400 mb-5">
                    <Users className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">
                    {locale === 'ku' ? '🤝 هاوبەشیی واقیعی' : locale === 'ar' ? '🤝 شراكة حقيقية' : '🤝 True Partnership'}
                  </h3>
                  <p className="text-sm text-slate-300 leading-relaxed">
                    {locale === 'ku'
                      ? 'تۆ کارمەند نیت، بەڵکوو بنیاتنەری هاوبەشیت. پشکت لە کۆمپانیا دەبێت و دەنگت لە سەرکردایەتی.'
                      : locale === 'ar'
                      ? 'أنت لست مجرد موظف، بل شريك مؤسس. حصص ملكية في الشركة، وصوت حقيقي في القيادة.'
                      : 'You are not an employee; you are a co-founder. Meaningful equity vesting and executive authority.'}
                  </p>
                </div>
              </div>

              {/* Card 3 */}
              <div className="bg-[#0B172E] border border-[#102447] rounded-2xl p-6 sm:p-7 hover:border-emerald-500/40 transition-colors flex flex-col justify-between">
                <div>
                  <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 mb-5">
                    <TrendingUp className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">
                    {locale === 'ku' ? '📈 گەشە و سەرمایە' : locale === 'ar' ? '📈 التمويل والنمو' : '📈 Funding & Growth'}
                  </h3>
                  <p className="text-sm text-slate-300 leading-relaxed">
                    {locale === 'ku'
                      ? 'سەرمایەگوزاری نزیکە. دوای تەواوبوونی خولی سەرمایە: مووچەی کێبڕکێکار + پاداشتی ڕوون.'
                      : locale === 'ar'
                      ? 'التمويل قريب. بعد جولة الاستثمار: رواتب تنافسية ومكافآت مجزية ترتبط بالأداء.'
                      : 'Seed funding in progress. Post-funding: top-tier competitive salaries and milestone bonuses.'}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* OPEN POSITIONS */}
        <section id="open-positions" className="py-16 lg:py-24 bg-[#060D1A] scroll-mt-24 border-b border-[#102447]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10 pb-6 border-b border-[#102447]">
              <div>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                  {locale === 'ku'
                    ? 'پۆستەکانی کراوە'
                    : locale === 'ar'
                    ? 'الوظائف المتاحة'
                    : 'Available Positions'}
                </h2>
                <p className="mt-1 text-sm text-slate-400">
                  {filteredJobs.length}{' '}
                  {locale === 'ku' ? 'پۆست کراوەیە' : locale === 'ar' ? 'شواغر متوفرة' : 'open roles'}
                </p>
              </div>

              {/* Search Bar */}
              <div className="relative w-full md:w-80">
                <Search className="w-4 h-4 text-slate-400 absolute start-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder={
                    locale === 'ku'
                      ? 'گەڕان بۆ ناونیشان یان لێهاتوویی...'
                      : locale === 'ar'
                      ? 'البحث عن مسمى وظيفي أو مهارة...'
                      : 'Search job title or skills...'
                  }
                  className="w-full bg-[#0B172E] border border-[#102447] focus:border-blue-500 rounded-xl py-2.5 ps-10 pe-4 text-xs sm:text-sm text-white placeholder-slate-500 focus:outline-none transition-colors"
                />
              </div>
            </div>

            {/* Department and Level Filter Chips */}
            <div className="flex flex-wrap items-center justify-between gap-4 mb-10">
              <div className="flex flex-wrap items-center gap-2">
                {[
                  {
                    id: 'all',
                    label: locale === 'ku' ? 'هەموو بەشەکان' : locale === 'ar' ? 'جميع الأقسام' : 'All Departments',
                  },
                  {
                    id: 'leadership',
                    label: locale === 'ku' ? 'سەرکردایەتی' : locale === 'ar' ? 'القيادة' : 'Leadership',
                  },
                  {
                    id: 'engineering',
                    label: locale === 'ku' ? 'ئەندازیاری و کلاود' : locale === 'ar' ? 'الهندسة والسحاب' : 'Engineering',
                  },
                  {
                    id: 'product',
                    label: locale === 'ku' ? 'بەرهەم' : locale === 'ar' ? 'المنتجات' : 'Product',
                  },
                  {
                    id: 'operations',
                    label: locale === 'ku' ? 'کارگێڕی' : locale === 'ar' ? 'العمليات' : 'Operations',
                  },
                ].map((dept) => (
                  <button
                    key={dept.id}
                    onClick={() => setSelectedDept(dept.id)}
                    className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all ${
                      selectedDept === dept.id
                        ? 'bg-blue-600 text-white shadow-md shadow-blue-600/30'
                        : 'bg-[#0B172E] text-slate-400 hover:text-white border border-[#102447]'
                    }`}
                  >
                    {dept.label}
                  </button>
                ))}
              </div>

              <div className="flex items-center gap-2">
                <Filter className="w-3.5 h-3.5 text-slate-400" />
                <select
                  value={selectedLevel}
                  onChange={(e) => setSelectedLevel(e.target.value)}
                  className="bg-[#0B172E] border border-[#102447] text-slate-300 text-xs rounded-xl py-1.5 px-3 focus:outline-none focus:border-blue-500"
                >
                  <option value="all">
                    {locale === 'ku' ? 'هەموو ئاستەکان' : locale === 'ar' ? 'جميع المستويات' : 'All Levels'}
                  </option>
                  <option value="executive">
                    {locale === 'ku' ? 'ئاستی جێبەجێکار (Executive)' : locale === 'ar' ? 'مستوى تنفيذي' : 'Executive'}
                  </option>
                  <option value="senior">
                    {locale === 'ku' ? 'ئاستی باڵا (Senior)' : locale === 'ar' ? 'مستوى أول' : 'Senior'}
                  </option>
                  <option value="mid">
                    {locale === 'ku' ? 'ئاستی ناوەند (Mid)' : locale === 'ar' ? 'مستوى متوسط' : 'Mid Level'}
                  </option>
                </select>
              </div>
            </div>

            {/* Jobs List */}
            {filteredJobs.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                {filteredJobs.map((job) => (
                  <JobShareCard key={job.id} job={job} locale={locale} />
                ))}
              </div>
            ) : (
              <div className="text-center py-16 bg-[#0B172E] border border-[#102447] rounded-3xl p-8 max-w-xl mx-auto">
                <Briefcase className="w-12 h-12 text-slate-600 mx-auto mb-4" />
                <p className="text-slate-300 text-sm mb-4">
                  {locale === 'ku'
                    ? 'هیچ هەلی کارێک نەدۆزرایەوە بەپێی فلتەرەکانت.'
                    : locale === 'ar'
                    ? 'لم يتم العثور على وظائف مطابقة.'
                    : 'No roles matched your filters.'}
                </p>
                <button
                  onClick={() => {
                    setSelectedDept('all');
                    setSelectedLevel('all');
                    setSearchQuery('');
                  }}
                  className="px-5 py-2 rounded-xl bg-blue-600 text-white text-xs font-semibold hover:bg-blue-500 transition-colors"
                >
                  {locale === 'ku' ? 'پاککردنەوەی فلتەرەکان' : locale === 'ar' ? 'إعادة التعيين' : 'Reset Filters'}
                </button>
              </div>
            )}
          </div>
        </section>

        {/* EARLY STAGE ADVANTAGES */}
        <section className="py-16 lg:py-20 bg-[#081226] border-b border-[#102447]">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-semibold uppercase tracking-wider mb-3">
                <Award className="w-3.5 h-3.5" />
                <span>
                  {locale === 'ku'
                    ? 'بەرژەوەندییەکانی قۆناغی سەرەتایی'
                    : locale === 'ar'
                    ? 'مميزات المرحلة المبكرة'
                    : 'Early Stage Advantages'}
                </span>
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight">
                {locale === 'ku'
                  ? 'بۆچی ئێستا پەیوەستبوون لە هەموو کات گرنگترە؟'
                  : locale === 'ar'
                  ? 'لماذا يعد الانضمام الآن هو التوقيت المثالي؟'
                  : 'Why Joining Now Offers Unprecedented Upside'}
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
              {/* Advantage 1 */}
              <div className="bg-[#0B172E] border border-[#102447] rounded-2xl p-6 sm:p-7">
                <h3 className="text-lg font-bold text-white mb-2 flex items-center gap-2">
                  <span>📊</span>
                  <span>{locale === 'ku' ? 'پشکی زیاتر لە کۆمپانیا' : locale === 'ar' ? 'نسبة أسهم أكبر' : 'Substantial Equity Ownership'}</span>
                </h3>
                <p className="text-sm text-slate-300 leading-relaxed">
                  {locale === 'ku'
                    ? 'لە قۆناغی سەرەتادا، پشکی خاوەندارێتی لە کۆمپانیا بەرزترە. تۆ ژمارە #٥٠ نیت، بەڵکوو ژمارە #٣یت و هاوشانی دامەزرێنەر کار دەکەیت.'
                    : locale === 'ar'
                    ? 'في مراحل التأسيس المبكرة، تكون حصص الملكية أكبر تأثيراً وقيمة. أنت لست الموظف رقم 50، بل الشريك رقم 3.'
                    : 'In early founding stages, your equity stake is substantial. You are not employee #50; you are co-builder #3 shaping the enterprise.'}
                </p>
              </div>

              {/* Advantage 2 */}
              <div className="bg-[#0B172E] border border-[#102447] rounded-2xl p-6 sm:p-7">
                <h3 className="text-lg font-bold text-white mb-2 flex items-center gap-2">
                  <span>🎯</span>
                  <span>{locale === 'ku' ? 'پەیامی نیشتمانیی ڕوون' : locale === 'ar' ? 'رسالة وطنية واضحة' : 'Clear Sovereign Mission'}</span>
                </h3>
                <p className="text-sm text-slate-300 leading-relaxed">
                  {locale === 'ku'
                    ? 'سەروەریی تەکنۆلۆژی بۆ عێراق تەنیا کارێک نییە، بەڵکوو پەیامێکی نیشتمانیی مەزنە کە داهاتووی دیجیتاڵیی نەوەکان دەپارێزێت.'
                    : locale === 'ar'
                    ? 'السيادة التكنولوجية للعراق ليست مجرد وظيفة روتينية، بل رسالة وطنية سامية لحماية استقلال الفضاء الرقمي للأجيال.'
                    : 'Sovereign tech for Iraq is not just another job; it is a historic national mission to anchor civic independence.'}
                </p>
              </div>

              {/* Advantage 3 */}
              <div className="bg-[#0B172E] border border-[#102447] rounded-2xl p-6 sm:p-7">
                <h3 className="text-lg font-bold text-white mb-2 flex items-center gap-2">
                  <span>🤝</span>
                  <span>{locale === 'ku' ? 'دەسەڵاتی بڕیاردان و سەرکردایەتی' : locale === 'ar' ? 'صوت حقيقي في القيادة' : 'Co-founder Autonomy & Voice'}</span>
                </h3>
                <p className="text-sm text-slate-300 leading-relaxed">
                  {locale === 'ku'
                    ? 'تۆ فەرمانبەر نیت، بەڵکوو بنیاتنەری هاوبەشیت. بڕیارەکانت لە تەلارسازیی سیستەم و ئاراستەی کۆمپانیا یەکلاکەرەوەن.'
                    : locale === 'ar'
                    ? 'أنت لست مرؤوساً، بل شريك مؤسس كامل الصلاحية. قراراتك تصنع معمارية الأنظمة وتحدد بوصلة الشركة.'
                    : 'You are not subordinate; you are a co-founder. Your strategic decisions define architectures and institutional roadmaps.'}
                </p>
              </div>

              {/* Advantage 4 */}
              <div className="bg-[#0B172E] border border-[#102447] rounded-2xl p-6 sm:p-7">
                <h3 className="text-lg font-bold text-white mb-2 flex items-center gap-2">
                  <span>💰</span>
                  <span>{locale === 'ku' ? 'دوای سەرمایەگێڕان' : locale === 'ar' ? 'ما بعد التمويل' : 'Post-Funding Security'}</span>
                </h3>
                <p className="text-sm text-slate-300 leading-relaxed">
                  {careersT.postFundingNote?.[lang]}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* WHO WE SEEK */}
        <section className="py-16 lg:py-20 bg-[#060D1A] border-b border-[#102447]">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight">
                {locale === 'ku'
                  ? 'ئێمە بەدوای کێدا دەگەڕێین؟'
                  : locale === 'ar'
                  ? 'من هم الشركاء الذين نبحث عنهم؟'
                  : 'Who We Are Looking For'}
              </h2>
              <p className="mt-3 text-slate-400 text-sm sm:text-base">
                {locale === 'ku'
                  ? 'تایبەتمەندییە سەرەکییەکانی ئەو کەسانەی لە قۆناغی سەرەتادا لەگەڵمان هاوبەش دەبن'
                  : locale === 'ar'
                  ? 'الصفات الأساسية لشركائنا المؤسسين في مرحلة الانطلاق'
                  : 'Key attributes of the co-builders who thrive in our early venture cohort'}
              </p>
            </div>

            <div className="bg-[#0B172E] border border-[#102447] rounded-3xl p-6 sm:p-10 shadow-xl">
              <ul className="space-y-6">
                <li className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center shrink-0 mt-0.5">
                    <CheckCircle2 className="w-5 h-5 text-emerald-400" />
                  </div>
                  <div>
                    <h4 className="font-bold text-white text-base">
                      {locale === 'ku' ? 'پسپۆڕ و بێباک' : locale === 'ar' ? 'طموح وموهوب' : 'Ambitious & Talented Builders'}
                    </h4>
                    <p className="text-slate-300 text-sm mt-1 leading-relaxed">
                      {locale === 'ku'
                        ? 'کەسانێک کە بتوانن لە سفرەوە و لەناو ئاڵۆزییەکاندا سیستەمی بەهێز بنیاد بنێن.'
                        : locale === 'ar'
                        ? 'أصحاب شغف هندسي قادرون على بناء حلول معقدة ومتكاملة من نقطة الصفر.'
                        : 'Engineers and strategists who relish building enduring systems from ground zero.'}
                    </p>
                  </div>
                </li>

                <li className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-blue-500/10 border border-blue-500/30 flex items-center justify-center shrink-0 mt-0.5">
                    <CheckCircle2 className="w-5 h-5 text-blue-400" />
                  </div>
                  <div>
                    <h4 className="font-bold text-white text-base">
                      {locale === 'ku' ? 'هەستی نیشتمانپەروەری' : locale === 'ar' ? 'وطنيون مخلصون' : 'Patriotic Civic Technologists'}
                    </h4>
                    <p className="text-slate-300 text-sm mt-1 leading-relaxed">
                      {locale === 'ku'
                        ? 'دەیانەوێت بگەڕێنەوە یان لە ناوخۆوە سەروەریی تەکنۆلۆژی بۆ عێراق بنیاد بنێن.'
                        : locale === 'ar'
                        ? 'راغبون بإخلاص في تكريس خبراتهم لبناء سيادة تكنولوجية حقيقية للعراق.'
                        : 'Dedicated to returning value to Iraq and cementing long-term institutional independence.'}
                    </p>
                  </div>
                </li>

                <li className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-purple-500/10 border border-purple-500/30 flex items-center justify-center shrink-0 mt-0.5">
                    <CheckCircle2 className="w-5 h-5 text-purple-400" />
                  </div>
                  <div>
                    <h4 className="font-bold text-white text-base">
                      {locale === 'ku' ? 'ئەزموونی سەلمێنراو' : locale === 'ar' ? 'خبرة وسجل إنجازات' : 'Proven Track Record'}
                    </h4>
                    <p className="text-slate-300 text-sm mt-1 leading-relaxed">
                      {locale === 'ku'
                        ? 'خاوەنی ئەزموونی دەوڵەمەند یان دەستکەوتی بەرچاو لە سیستەمە گەورەکان و دابەشکراوەکان.'
                        : locale === 'ar'
                        ? 'خبرة معمقة وسجل مثبت في قيادة الأنظمة الموزعة وإدارة المعماريات الحساسة.'
                        : 'Deep operational background in mission-critical distributed systems or enterprise delivery.'}
                    </p>
                  </div>
                </li>

                <li className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-amber-500/10 border border-amber-500/30 flex items-center justify-center shrink-0 mt-0.5">
                    <CheckCircle2 className="w-5 h-5 text-amber-400" />
                  </div>
                  <div>
                    <h4 className="font-bold text-white text-base">
                      {locale === 'ku' ? 'نەرمیی قۆناغی سەرەتا' : locale === 'ar' ? 'مرونة المرحلة المبكرة' : 'Early-Stage Flexibility'}
                    </h4>
                    <p className="text-slate-300 text-sm mt-1 leading-relaxed">
                      {locale === 'ku'
                        ? 'تێگەیشتن لە هاوبەشیی پشک لەم قۆناغەدا، و پابەندبوونی تەواو لەگەڵ پاداشتی شایستە دوای سەرمایە.'
                        : locale === 'ar'
                        ? 'مرونة واعية بالتعويض بالأسهم حالياً، والالتزام المؤسسي الكامل مع استحقاقات مجزية بعد التمويل.'
                        : 'Flexible on salary today with equity partnership, moving to top salaries post-funding.'}
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* FINAL CTA */}
        <section className="py-16 lg:py-24 bg-[#081226] border-t border-[#102447] text-center">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4 tracking-tight">
              {locale === 'ku'
                ? 'ئامادەیت بۆ بنیاتنانی سەروەریی تەکنۆلۆژی؟'
                : locale === 'ar'
                ? 'هل أنت مستعد لبناء السيادة التكنولوجية؟'
                : 'Ready for Tech Sovereignty?'}
            </h2>
            <p className="text-slate-300 text-base sm:text-lg mb-8 max-w-2xl mx-auto leading-relaxed">
              {careersT.earlyStageNote?.[lang]}
            </p>

            <a
              href="mailto:careers@idggov.tech?subject=Co-founder%20Partner%20Application"
              className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white px-9 py-4 rounded-xl font-bold text-base transition-all shadow-xl shadow-blue-600/30 hover:shadow-blue-600/50"
            >
              <Mail className="w-5 h-5 text-amber-400" />
              <span>{careersT.ctaButton?.[lang] || 'Apply as Co-founder / Partner'}</span>
              <ArrowIcon className="w-4 h-4" />
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
