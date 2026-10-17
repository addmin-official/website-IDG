'use client';

import React, { useState, useMemo } from 'react';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Breadcrumbs from '@/components/Breadcrumbs';
import TeamHero from '@/components/TeamHero';
import LeadershipSection from '@/components/LeadershipSection';
import TeamMemberCard from '@/components/TeamMemberCard';
import { getTeamMembers, Department, TeamMember } from '@/lib/team-data';
import { translations, Language } from '@/lib/translations';
import { useLocale } from '@/lib/locale-context';
import { Users, Briefcase, Mail, ArrowRight, ArrowLeft, ShieldCheck, Sparkles } from 'lucide-react';

interface TeamClientProps {
  locale: string;
}

export default function TeamClient({ locale }: TeamClientProps) {
  const { isRtl } = useLocale();
  const ArrowIcon = isRtl ? ArrowLeft : ArrowRight;

  const lang: Language = locale === 'ar' || locale === 'en' ? locale : 'ku';
  const tData = translations[lang] || translations.ku;
  const teamT = tData.team || {
    title: 'تیمی ئێمە',
    subtitle: 'سەرکردایەتی و ئەندازیارانی پشتی سەروەریی دیجیتاڵی.',
    leadership: 'دەستەی سەرکردایەتی',
    leadershipDesc: 'بنیاتنەران و سەرکردە جێبەجێکارەکان.',
    coreTeam: 'تیمی سەرەکی و ئەندازیاری',
    coreTeamDesc: 'کادیرانی باڵای ئەندازیاری و بەرهەمهێنان.',
    joinUs: 'بەشداربە لە گەشتەکەمان',
    joinUsDesc: 'دەرفەت بۆ دروستکردنی کاریگەری لە داهاتووی عێراق.',
    viewPositions: 'دەرفەتە کراوەکان',
    departments: {
      all: 'هەموو بەشەکان',
      leadership: 'سەرکردایەتی',
      engineering: 'ئەندازیاری و ژێرخان',
      product: 'بەرهەم و دیزاین',
      operations: 'کارگێڕی و هاوبەشی',
      communications: 'پەیوەندییەکان',
    },
    labels: {
      bio: 'کورتەی ژیاننامە',
      expertise: 'بوارەکانی پسپۆڕی',
      connect: 'پەیوەندی',
      viewProfile: 'بینینی پرۆفایل',
      backToTeam: 'گەڕانەوە بۆ لیستی تیم',
      keyFocus: 'تەرکیزی سەرەکی',
      achievements: 'دەستکەوتە سەرەکییەکان',
    },
  };

  const allMembers = useMemo(() => getTeamMembers(locale), [locale]);
  const leaders = useMemo(() => allMembers.filter((m) => m.role === 'leadership'), [allMembers]);
  const coreMembers = useMemo(() => allMembers.filter((m) => m.role === 'core'), [allMembers]);

  const [activeDept, setActiveDept] = useState<'all' | Department>('all');

  const filteredCoreMembers = useMemo(() => {
    if (activeDept === 'all') return coreMembers;
    return coreMembers.filter((m) => m.department === activeDept);
  }, [coreMembers, activeDept]);

  const departmentsList: Array<{ id: 'all' | Department; label: string }> = [
    { id: 'all', label: teamT.departments.all },
    { id: 'engineering', label: teamT.departments.engineering },
    { id: 'product', label: teamT.departments.product },
    { id: 'operations', label: teamT.departments.operations },
    { id: 'communications', label: teamT.departments.communications },
  ];

  const content = {
    ku: {
      breadcrumb: 'تیمی ئێمە',
      coreTeamHeading: 'تیمی سەرەکی و کادری ئەندازیاری',
      coreTeamSub: 'پسپۆڕانی تەلارسازی، ئاسایشی زانیاری، دیزاین و گەشەپێدانی بەرهەمە نیشتمانییەکان.',
      cultureBadge: 'کەلتووری کارکردنی سەروەر',
      cultureTitle: 'ئەندازیاری لە پێناو سەروەریی نیشتمانیدا',
      cultureDesc:
        'لە دەروازەی دیجیتاڵیی عێراق (IDG)، ئێمە تەنیا کۆد نانووسین و ڕووکار دروست ناکەین؛ بەڵکو ژێرخانی بڕیاردان و داتای نیشتمان بونیاد دەنێین. هەموو ئەندامێکی تیمەکەمان بە دیسپلینی ئەندازیاری و باوەڕی نەگۆڕ بە سەروەریی تەکنۆلۆژی هەنگاو دەنێت.',
      joinTitle: 'ئامادەیت ببیتە بەشێک لەم ئەرکە نیشتمانییە؟',
      joinDesc:
        'ئێمە هەمیشە بەدوای بلیمەتە تەکنیکییەکان و تەلارسازانی داهاتوودا دەگەڕێین کە دەیانەوێت کاریگەرییەکی بەردەوام لەسەر پێکهاتەی دیجیتاڵیی عێراق جێبهێڵن.',
      openRolesBtn: 'بینینی دەرفەتە کارپێدراوەکان',
      contactBtn: 'پەیوەندی لەگەڵ دەستەی دامەزراندن',
    },
    ar: {
      breadcrumb: 'فريق العمل',
      coreTeamHeading: 'الفريق الأساسي والكوادر الهندسية التخصصية',
      coreTeamSub: 'معماريو النظم، خبراء أمن المعلومات، مهندسو البنية التحتية، ومصممو الحلول الوطنية.',
      cultureBadge: 'ثقافة العمل السيادية',
      cultureTitle: 'هندسة متقدمة في خدمة الاستقلال الرقمي',
      cultureDesc:
        'في بوابة العراق الرقمية (IDG)، لا نكتفي بتطوير البرمجيات والواجهات؛ بل نؤسس البنية التحتية للسيادة الرقمية وحفظ البيانات الوطنية. يعمل كل عضو في فريقنا بانضباط هندسي عالٍ والتزام راسخ بالصالح العام وبناء القدرة الذاتية.',
      joinTitle: 'هل أنت مستعد للمساهمة في هذه المهمة الوطنية؟',
      joinDesc:
        'نبحث دائماً عن الكفاءات الهندسية الاستثنائية والباحثين في الأمن السيبراني الذين يتطلعون لترك بصمة دائمة في التحول التكنولوجي للعراق.',
      openRolesBtn: 'استعراض الوظائف الشاغرة',
      contactBtn: 'التواصل مع قسم المواهب',
    },
    en: {
      breadcrumb: 'Our Team',
      coreTeamHeading: 'Core Engineering & Specialized Practitioners',
      coreTeamSub: 'Systems architects, cybersecurity analysts, infrastructure leads, and civic design technologists.',
      cultureBadge: 'Sovereign Institutional Culture',
      cultureTitle: 'Engineering in Service of National Capability',
      cultureDesc:
        'At Iraq Digital Gateway (IDG), we do not simply write code or build interfaces; we establish the critical operating systems and data repositories that underpin national resilience. Every team member operates with engineering rigor and an unwavering commitment to technological self-reliance.',
      joinTitle: 'Ready to Build Enduring Institutional Infrastructure?',
      joinDesc:
        'We are continually seeking world-class software engineers, infrastructure architects, and civic product leaders driven to leave an indelible mark on Iraq’s digital transformation.',
      openRolesBtn: 'Explore Open Positions',
      contactBtn: 'Contact Talent & Recruitment',
    },
  }[locale === 'ar' || locale === 'en' ? locale : 'ku'];

  return (
    <div className="min-h-screen bg-[#060D1A] text-white flex flex-col">
      <Navbar />

      <main className="flex-1">
        {/* Breadcrumbs */}
        <div className="bg-[#0B172E]/40 border-b border-[#102447]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
            <Breadcrumbs
              items={[
                { label: content.breadcrumb, href: `/${locale}/team` },
              ]}
            />
          </div>
        </div>

        {/* Hero Section */}
        <TeamHero locale={locale} />

        {/* Leadership Section */}
        <LeadershipSection leaders={leaders} locale={locale} />

        {/* Core Team Section */}
        <section id="core-team" className="py-16 lg:py-24 bg-[#081226] border-t border-[#102447] relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Header */}
            <div className="text-center max-w-3xl mx-auto mb-12">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-semibold uppercase tracking-wider mb-3">
                <Users className="w-3.5 h-3.5" />
                <span>{teamT.coreTeam}</span>
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight">
                {content.coreTeamHeading}
              </h2>
              <p className="mt-4 text-sm sm:text-base text-slate-300">
                {content.coreTeamSub}
              </p>
            </div>

            {/* Department Filter Tabs */}
            <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
              {departmentsList.map((dept) => {
                const isActive = activeDept === dept.id;
                return (
                  <button
                    key={dept.id}
                    onClick={() => setActiveDept(dept.id)}
                    className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all ${
                      isActive
                        ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/30 font-semibold'
                        : 'bg-[#0B172E] text-slate-400 hover:text-white hover:bg-[#102447] border border-[#102447]'
                    }`}
                  >
                    {dept.label}
                  </button>
                );
              })}
            </div>

            {/* Members Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {filteredCoreMembers.map((member) => (
                <TeamMemberCard key={member.id} member={member} locale={locale} />
              ))}
            </div>
          </div>
        </section>

        {/* Culture & Sovereign Philosophy Callout */}
        <section className="py-16 bg-[#060D1A] border-t border-[#102447] relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-gradient-to-br from-[#0B172E] to-[#102447] border border-blue-500/30 rounded-3xl p-8 sm:p-12 relative overflow-hidden shadow-2xl">
              <div className="absolute top-0 end-0 w-80 h-80 bg-blue-500/10 blur-[100px] rounded-full pointer-events-none" />

              <div className="max-w-3xl">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/20 text-blue-300 text-xs font-semibold mb-4 border border-blue-400/30">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  <span>{content.cultureBadge}</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                  {content.cultureTitle}
                </h3>
                <p className="mt-4 text-base sm:text-lg text-slate-200 leading-relaxed">
                  {content.cultureDesc}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Join Us / Careers CTA */}
        <section className="py-16 lg:py-24 bg-[#081226] border-t border-[#102447]">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold uppercase tracking-wider mb-4">
              <Sparkles className="w-3.5 h-3.5" />
              <span>{teamT.joinUs}</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              {content.joinTitle}
            </h2>

            <p className="mt-4 text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
              {content.joinDesc}
            </p>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <Link
                href={`/${locale}/careers`}
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold text-sm transition-all shadow-xl shadow-blue-600/30"
              >
                <Briefcase className="w-4 h-4" />
                <span>{content.openRolesBtn}</span>
                <ArrowIcon className="w-4 h-4" />
              </Link>
              <Link
                href={`/${locale}/contact`}
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-[#0B172E] hover:bg-[#102447] text-slate-200 hover:text-white font-semibold text-sm border border-[#102447] transition-all"
              >
                <Mail className="w-4 h-4" />
                <span>{content.contactBtn}</span>
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
