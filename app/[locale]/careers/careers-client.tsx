'use client';

import React, { useState, useMemo } from 'react';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Breadcrumbs from '@/components/Breadcrumbs';
import JobShareCard from '@/components/JobShareCard';
import { getJobPostings, JobPosting } from '@/lib/job-postings';
import { useLocale } from '@/lib/locale-context';
import {
  Briefcase,
  Search,
  ShieldCheck,
  Award,
  Globe2,
  GraduationCap,
  Cpu,
  Mail,
  ArrowRight,
  ArrowLeft,
  Filter,
} from 'lucide-react';

interface CareersClientProps {
  locale: string;
}

export default function CareersClient({ locale }: CareersClientProps) {
  const { isRtl } = useLocale();
  const ArrowIcon = isRtl ? ArrowLeft : ArrowRight;

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

  const content = {
    ku: {
      breadcrumb: 'هەلی کار',
      heroBadge: 'سەروەریی تەکنۆلۆژی و دەستی کاری نیشتمانی',
      heroTitle: 'بونیادنەری سەروەریی دیجیتاڵیی عێراق بە',
      heroSubtitle:
        'پەیوەستبە بە کۆمەڵەیەکی بەرز لە تەلارسازانی سیستەم، ئەندازیارانی نەرمەکاڵا، و پێشەنگانی تەکنەلۆژیا کە پێکەوە ژێرخانی سەروەری داهاتووی عێراق دادەڕێژن.',
      searchPlaceholder: 'گەڕان بۆ ناونیشانی کار، لێهاتوویی (Go, Kubernetes, Next.js)...',
      allDepts: 'هەموو بەشەکان',
      engineering: 'ئەندازیاری و کلاود',
      product: 'بەرهەم و دیزاین',
      operations: 'کارگێڕی و هاوبەشی',
      leadership: 'سەرکردایەتی',
      allLevels: 'هەموو ئاستەکان',
      seniorLevel: 'ئاستی باڵا (Senior)',
      midLevel: 'ئاستی ناوەند (Mid)',
      execLevel: 'ئاستی جێبەجێکار (Executive)',
      openRolesHeading: 'دەرفەتە کراوەکانی کار لە IDG',
      openRolesCount: `${filteredJobs.length} پێگەی کراوە`,
      noJobsFound: 'هیچ هەلی کارێک نەدۆزرایەوە بەپێی فلتەرەکانت. تکایە دەستکاری گەڕانەکەت بکە.',
      resetFilters: 'پاککردنەوەی فلتەرەکان',
      benefitsBadge: 'بۆچی کارکردن لەگەڵ IDG؟',
      benefitsTitle: 'ژینگەیەکی هاندەر و ئامانجدار بۆ ئەندازیاران',
      benefits: [
        {
          title: 'مووچەی شایستە و پاداشتی پیشەیی',
          desc: 'پاکێجی دارایی پێشبڕکێکار لەگەڵ گەشەی بەردەوامی پیشەیی و پاداشتی پێشکەوتن.',
          icon: Award,
        },
        {
          title: 'ئەرکی سەروەریی نیشتمانی',
          desc: 'بەشداری ڕاستەوخۆ لە دروستکردنی سیستەم و پاراستنی سەروەریی داتای عێراق.',
          icon: ShieldCheck,
        },
        {
          title: 'ژینگەی نەرمی دوورەدەست و تێکەڵ',
          desc: 'تەبایی تەواو لە نێوان کارکردن لە نووسینگە لە هەولێر/بەغداد و کارکردنی دوورەدەست.',
          icon: Globe2,
        },
        {
          title: 'بودجەی فێربوون و ئەکادیمیای زانا',
          desc: 'بەشداری بەردەوام لە خولە نێودەوڵەتییەکان و بڕوانامە باڵاکانی کلاود و ئاسایش.',
          icon: GraduationCap,
        },
        {
          title: 'دیسپلینی ئەندازیاریی مۆدێرن',
          desc: 'تەلارسازی Zero-Trust، زمانەکانی Go و Rust، و کلاودی Kubernetes بەبێ کەمکردنەوە لە کوالێتی.',
          icon: Cpu,
        },
      ],
      spontaneousTitle: 'پۆستەکەت لە لیستەکەدا نابینیت؟',
      spontaneousDesc:
        'ئێمە هەمیشە بەدوای لێهاتووە بێوێنەکاندا دەگەڕێین. ئەگەر خاوەنی پسپۆڕییەکی ئەندازیارییت و دەتوانیت بەشداری لە ئەرکەکەماندا بکەیت، سیڤی خۆت بنێرە.',
      spontaneousBtn: 'پێشکەشکردنی داواکاریی گشتی',
    },
    ar: {
      breadcrumb: 'الوظائف والمسار المهني',
      heroBadge: 'السيادة التكنولوجية والكفاءات الوطنية',
      heroTitle: 'ساهم في بناء البنية التحتية الرقمية السيادية للعراق',
      heroSubtitle:
        'انضم إلى نخبة من مهندسي النظم ومعماريي البرمجيات والباحثين في الأمن السيبراني العاملين على صياغة الحلول الوطنية المستدامة.',
      searchPlaceholder: 'البحث عن مسمى وظيفي أو مهارة (Go, Kubernetes, Next.js)...',
      allDepts: 'جميع الأقسام',
      engineering: 'الهندسة والبنية السحابية',
      product: 'المنتجات والتصميم',
      operations: 'العمليات والشراكات',
      leadership: 'القيادة التنفيذية',
      allLevels: 'جميع المستويات',
      seniorLevel: 'مستوى أول (Senior)',
      midLevel: 'مستوى متوسط (Mid)',
      execLevel: 'مستوى تنفيذي (Executive)',
      openRolesHeading: 'الوظائف والشواغر المتاحة حالياً',
      openRolesCount: `${filteredJobs.length} وظيفة شاغرة`,
      noJobsFound: 'لم يتم العثور على شواغر تطابق معايير البحث. يرجى تعديل الفلاتر.',
      resetFilters: 'إعادة ضبط الفلاتر',
      benefitsBadge: 'لماذا تنضم إلى IDG؟',
      benefitsTitle: 'بيئة هندسية رائدة تدعم التميز والابتكار',
      benefits: [
        {
          title: 'عوائد تنافسية ومسار نمو مستدام',
          desc: 'حزم تعويضات ومكافآت مجزية ترتبط بالتميز الفني والمساهمة في المشاريع الحيوية.',
          icon: Award,
        },
        {
          title: 'رسالة وطنية سيادية ملهمة',
          desc: 'مساهمة مباشرة في حفظ البيانات الوطنية وحماية الفضاء الرقمي للعراق.',
          icon: ShieldCheck,
        },
        {
          title: 'مرونة العمل الهجين والحرية التقنية',
          desc: 'توازن احترافي بين العمل الميداني في بغداد وأربيل والعمل عن بُعد.',
          icon: Globe2,
        },
        {
          title: 'ميزانيات تطوير مهني وزمالة زانا',
          desc: 'رعاية كاملة لنيل الشهادات التخصصية العالمية في الحوسبة السحابية والأمن.',
          icon: GraduationCap,
        },
        {
          title: 'انضباط تقني متقدم',
          desc: 'هندسة بنموذج Zero-Trust، واعتماد لغات Go و Rust وحاويات Kubernetes.',
          icon: Cpu,
        },
      ],
      spontaneousTitle: 'هل لم تجد المسمى المناسب لخبرتك؟',
      spontaneousDesc:
        'نبحث دائماً عن الكفاءات الهندسية الفذة وأصحاب العقول الابتكارية. إذا كنت ترى في نفسك القدرة على المساهمة في مهمتنا، أرسل سيرتك وسنتواصل معك.',
      spontaneousBtn: 'تقديم طلب عام مفتوح',
    },
    en: {
      breadcrumb: 'Careers',
      heroBadge: 'Sovereign Tech & Human Capital',
      heroTitle: 'Engineer the Foundations of Iraq’s Digital Sovereignty',
      heroSubtitle:
        'Join an elite collective of systems architects, security researchers, and civic technologists building enduring institutional capability for Iraq.',
      searchPlaceholder: 'Search job title, skills (Go, Kubernetes, Next.js)...',
      allDepts: 'All Departments',
      engineering: 'Engineering & Cloud',
      product: 'Product & Design',
      operations: 'Operations & Partnerships',
      leadership: 'Leadership',
      allLevels: 'All Levels',
      seniorLevel: 'Senior Level',
      midLevel: 'Mid Level',
      execLevel: 'Executive',
      openRolesHeading: 'Current Open Positions at IDG',
      openRolesCount: `${filteredJobs.length} open roles`,
      noJobsFound: 'No positions matched your search criteria. Please adjust your filters.',
      resetFilters: 'Reset Filters',
      benefitsBadge: 'Why Build with IDG?',
      benefitsTitle: 'An Environment Designed for High-Impact Engineers',
      benefits: [
        {
          title: 'Competitive Compensation',
          desc: 'Top-tier salary benchmarks, performance milestones, and enduring equity paths.',
          icon: Award,
        },
        {
          title: 'Enduring Sovereign Purpose',
          desc: 'Direct responsibility for architecting systems that protect national data and public trust.',
          icon: ShieldCheck,
        },
        {
          title: 'Hybrid & Remote Flexibility',
          desc: 'Thoughtful blend of collaborative workspaces in Baghdad and Erbil with remote-first autonomy.',
          icon: Globe2,
        },
        {
          title: 'Learning Stipends & ZaNa Fellowship',
          desc: 'Sponsored certifications (CKA, CISSP), international tech conferences, and peer masterclasses.',
          icon: GraduationCap,
        },
        {
          title: 'Modern Engineering Stack',
          desc: 'Zero-Trust architectures, Go, Rust, bare-metal Kubernetes, and PostgreSQL at scale.',
          icon: Cpu,
        },
      ],
      spontaneousTitle: 'Don’t See Your Exact Role?',
      spontaneousDesc:
        'We are continually searching for world-class technical minds. If your background aligns with our mission of technological sovereignty, send us your resume.',
      spontaneousBtn: 'Submit Open Application',
    },
  }[locale === 'ar' || locale === 'en' ? locale : 'ku'];

  return (
    <div className="min-h-screen bg-[#060D1A] text-white flex flex-col">
      <Navbar />

      <main className="flex-1">
        {/* Breadcrumbs */}
        <div className="bg-[#0B172E]/40 border-b border-[#102447]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
            <Breadcrumbs items={[{ label: content.breadcrumb, href: `/${locale}/careers` }]} />
          </div>
        </div>

        {/* Hero Section */}
        <section className="relative overflow-hidden pt-12 pb-16 lg:pt-16 lg:pb-24 border-b border-[#102447] bg-[#060D1A]">
          <div className="absolute top-1/3 start-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[320px] bg-blue-600/10 blur-[130px] rounded-full pointer-events-none" />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#0B172E] border border-blue-500/30 text-blue-400 text-xs sm:text-sm font-medium mb-6 shadow-inner">
              <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" />
              <span>{content.heroBadge}</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight max-w-4xl mx-auto leading-tight sm:leading-snug">
              {content.heroTitle}
            </h1>

            <p className="mt-5 text-base sm:text-lg lg:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed font-normal">
              {content.heroSubtitle}
            </p>

            {/* Quick Navigation to Open Positions */}
            <div className="mt-8">
              <a
                href="#open-positions"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold text-sm transition-all shadow-xl shadow-blue-600/30"
              >
                <Briefcase className="w-4 h-4" />
                <span>{content.openRolesHeading}</span>
                <ArrowIcon className="w-4 h-4" />
              </a>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 lg:py-24 bg-[#081226] border-b border-[#102447]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-14">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-semibold uppercase tracking-wider mb-3">
                <Award className="w-3.5 h-3.5" />
                <span>{content.benefitsBadge}</span>
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight">
                {content.benefitsTitle}
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {content.benefits.map((b, idx) => {
                const Icon = b.icon;
                return (
                  <div
                    key={idx}
                    className="bg-[#0B172E] border border-[#102447] rounded-2xl p-6 sm:p-7 hover:border-blue-500/40 transition-colors flex flex-col justify-between"
                  >
                    <div>
                      <div className="w-12 h-12 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 mb-5">
                        <Icon className="w-6 h-6" />
                      </div>
                      <h3 className="text-lg font-bold text-white mb-2">{b.title}</h3>
                      <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">{b.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Open Positions Grid & Filters */}
        <section id="open-positions" className="py-16 lg:py-24 bg-[#060D1A] scroll-mt-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Header */}
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10 pb-6 border-b border-[#102447]">
              <div>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                  {content.openRolesHeading}
                </h2>
                <p className="mt-1 text-sm text-slate-400">
                  {content.openRolesCount}
                </p>
              </div>

              {/* Search Bar */}
              <div className="relative w-full md:w-80">
                <Search className="w-4 h-4 text-slate-400 absolute start-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder={content.searchPlaceholder}
                  className="w-full bg-[#0B172E] border border-[#102447] focus:border-blue-500 rounded-xl py-2.5 ps-10 pe-4 text-xs sm:text-sm text-white placeholder-slate-500 focus:outline-none transition-colors"
                />
              </div>
            </div>

            {/* Department and Level Filter Chips */}
            <div className="flex flex-wrap items-center justify-between gap-4 mb-10">
              {/* Department Filters */}
              <div className="flex flex-wrap items-center gap-2">
                {[
                  { id: 'all', label: content.allDepts },
                  { id: 'leadership', label: content.leadership },
                  { id: 'engineering', label: content.engineering },
                  { id: 'product', label: content.product },
                  { id: 'operations', label: content.operations },
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

              {/* Level Filter Dropdown */}
              <div className="flex items-center gap-2">
                <Filter className="w-3.5 h-3.5 text-slate-400" />
                <select
                  value={selectedLevel}
                  onChange={(e) => setSelectedLevel(e.target.value)}
                  className="bg-[#0B172E] border border-[#102447] text-slate-300 text-xs rounded-xl py-1.5 px-3 focus:outline-none focus:border-blue-500"
                >
                  <option value="all">{content.allLevels}</option>
                  <option value="executive">{content.execLevel}</option>
                  <option value="senior">{content.seniorLevel}</option>
                  <option value="mid">{content.midLevel}</option>
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
                <p className="text-slate-300 text-sm mb-4">{content.noJobsFound}</p>
                <button
                  onClick={() => {
                    setSelectedDept('all');
                    setSelectedLevel('all');
                    setSearchQuery('');
                  }}
                  className="px-5 py-2 rounded-xl bg-blue-600 text-white text-xs font-semibold hover:bg-blue-500 transition-colors"
                >
                  {content.resetFilters}
                </button>
              </div>
            )}
          </div>
        </section>

        {/* Spontaneous / Open Application */}
        <section className="py-16 bg-[#081226] border-t border-[#102447]">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              {content.spontaneousTitle}
            </h3>
            <p className="mt-4 text-sm sm:text-base text-slate-300 max-w-2xl mx-auto leading-relaxed">
              {content.spontaneousDesc}
            </p>
            <div className="mt-8">
              <Link
                href={`/${locale}/contact`}
                className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-semibold text-sm transition-all shadow-xl shadow-blue-600/25"
              >
                <Mail className="w-4 h-4" />
                <span>{content.spontaneousBtn}</span>
                <ArrowIcon className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
