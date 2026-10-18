'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Breadcrumbs from '@/components/Breadcrumbs';
import { TeamMember, getTeamMembers } from '@/lib/team-data';
import { useLocale } from '@/lib/locale-context';
import {
  Linkedin,
  Twitter,
  Mail,
  ArrowRight,
  ArrowLeft,
  Award,
  CheckCircle2,
  Briefcase,
  Layers,
  ChevronRight,
  ChevronLeft,
} from 'lucide-react';

interface MemberClientProps {
  member: TeamMember;
  locale: string;
}

export default function MemberClient({ member, locale }: MemberClientProps) {
  const { isRtl } = useLocale();
  const ArrowIcon = isRtl ? ArrowLeft : ArrowRight;
  const ChevronBack = isRtl ? ChevronRight : ChevronLeft;

  const getName = () => {
    if (locale === 'ku') return member.nameKu || member.name;
    if (locale === 'ar') return member.nameAr || member.name;
    return member.name;
  };

  const getPosition = () => {
    if (locale === 'ku') return member.positionKu || member.position;
    if (locale === 'ar') return member.positionAr || member.position;
    return member.position;
  };

  const getBioParagraphs = () => {
    if (locale === 'ku' && member.fullBioKu) return member.fullBioKu;
    if (locale === 'ar' && member.fullBioAr) return member.fullBioAr;
    if (member.fullBio) return member.fullBio;
    if (locale === 'ku' && member.bioKu) return [member.bioKu];
    if (locale === 'ar' && member.bioAr) return [member.bioAr];
    return member.bio ? [member.bio] : [];
  };

  const getBackground = () => {
    if (locale === 'ku' && member.backgroundKu) return member.backgroundKu;
    if (locale === 'ar' && member.backgroundAr) return member.backgroundAr;
    return member.background;
  };

  const getAchievements = () => {
    if (locale === 'ku' && member.achievementsKu) return member.achievementsKu;
    if (locale === 'ar' && member.achievementsAr) return member.achievementsAr;
    return member.achievements || [];
  };

  const content = {
    ku: {
      teamBreadcrumb: 'تیمی ئێمە',
      backBtn: 'گەڕانەوە بۆ لیستی تیم',
      bioHeading: 'دیدگا و بەرپرسیارێتییە سەرەکییەکان',
      backgroundHeading: 'پێشینەی ئەندازیاری و ئەکادیمی',
      achievementsHeading: 'دەستکەوت و دەستپێشخەرییە نیشتمانییەکان',
      expertiseHeading: 'بوارەکانی پسپۆڕی و تەکنەلۆژیا',
      relatedHeading: 'سەرکردایەتی و تیم',
      joinHeading: 'دەتەوێت لەگەڵ دەستەی IDG کار بکەیت؟',
      joinBtn: 'دەرفەتەکانی کارکردن لە IDG',
    },
    ar: {
      teamBreadcrumb: 'فريق العمل',
      backBtn: 'العودة إلى دليل الفريق',
      bioHeading: 'الرؤية والمسؤوليات الاستراتيجية',
      backgroundHeading: 'الخلفية الأكاديمية والمهنية',
      achievementsHeading: 'أبرز الإنجازات والمبادرات الوطنية',
      expertiseHeading: 'مجالات الخبرة والتخصص',
      relatedHeading: 'القيادة وفريق العمل',
      joinHeading: 'هل ترغب بالعمل مع فريق IDG؟',
      joinBtn: 'استعراض الوظائف الشاغرة',
    },
    en: {
      teamBreadcrumb: 'Our Team',
      backBtn: 'Back to Team Directory',
      bioHeading: 'Vision & Strategic Perspectives',
      backgroundHeading: 'Academic & Professional Pedigree',
      achievementsHeading: 'Key National Achievements & Initiatives',
      expertiseHeading: 'Areas of Technical Expertise',
      relatedHeading: 'Leadership & Team',
      joinHeading: 'Want to Work Alongside Our Team?',
      joinBtn: 'Explore Careers at IDG',
    },
  }[locale === 'ar' || locale === 'en' ? locale : 'ku'];

  const allMembers = getTeamMembers(locale);
  const otherMembers = allMembers.filter((m) => m.id !== member.id && m.status === 'filled').slice(0, 3);
  const achievements = getAchievements();
  const background = getBackground();
  const bioParagraphs = getBioParagraphs();

  return (
    <div className="min-h-screen bg-[#060D1A] text-white flex flex-col">
      <Navbar />

      <main className="flex-1">
        {/* Breadcrumbs Bar */}
        <div className="bg-[#0B172E]/40 border-b border-[#102447]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center justify-between">
            <Breadcrumbs
              items={[
                { label: content.teamBreadcrumb, href: `/${locale}/team` },
                { label: getName() || '', href: `/${locale}/team/${member.slug || member.id}` },
              ]}
            />
            <Link
              href={`/${locale}/team`}
              className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-medium text-slate-400 hover:text-white transition-colors"
            >
              <ChevronBack className="w-4 h-4" />
              <span>{content.backBtn}</span>
            </Link>
          </div>
        </div>

        {/* Member Profile Hero */}
        <section className="py-12 lg:py-20 relative overflow-hidden border-b border-[#102447]">
          <div className="absolute top-1/3 start-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-blue-600/10 blur-[120px] rounded-full pointer-events-none" />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
              {/* Profile Card & Avatar */}
              <div className="lg:col-span-4 bg-[#0B172E] border border-[#102447] rounded-3xl p-6 sm:p-8 flex flex-col items-center text-center shadow-xl">
                <div className="relative w-44 h-44 sm:w-52 sm:h-52 rounded-2xl overflow-hidden bg-[#060D1A] border-4 border-[#102447] shadow-inner mb-6">
                  <Image
                    src={member.image || '/images/team/mustafa-jalal.svg'}
                    alt={getName() || ''}
                    fill
                    sizes="(max-width: 768px) 176px, 208px"
                    className="object-cover"
                    priority
                  />
                </div>

                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-semibold uppercase tracking-wider mb-2">
                  <Award className="w-3.5 h-3.5" />
                  <span>{member.section === 'leadership' ? 'Executive Leadership' : member.section}</span>
                </div>

                <h1 className="text-2xl sm:text-3xl font-extrabold text-white mt-2">
                  {getName()}
                </h1>
                <div className="text-sm font-semibold text-blue-400 mt-1">
                  {getPosition()}
                </div>
                <div className="text-xs text-slate-400 mt-0.5">
                  {member.position}
                </div>

                {/* Direct Connect Buttons */}
                <div className="mt-6 w-full pt-6 border-t border-[#102447] flex flex-col gap-2.5">
                  {member.email && (
                    <a
                      href={`mailto:${member.email}`}
                      className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-medium text-xs transition-colors shadow-md shadow-blue-600/20"
                    >
                      <Mail className="w-3.5 h-3.5" />
                      <span>{member.email}</span>
                    </a>
                  )}

                  <div className="flex items-center justify-center gap-2 mt-1">
                    {member.linkedIn && (
                      <a
                        href={member.linkedIn}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="LinkedIn"
                        className="w-9 h-9 rounded-xl bg-[#060D1A] border border-[#102447] flex items-center justify-center text-slate-300 hover:text-blue-400 hover:border-blue-500/30 transition-colors"
                      >
                        <Linkedin className="w-4 h-4" />
                      </a>
                    )}
                    {member.twitter && (
                      <a
                        href={member.twitter}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Twitter / X"
                        className="w-9 h-9 rounded-xl bg-[#060D1A] border border-[#102447] flex items-center justify-center text-slate-300 hover:text-sky-400 hover:border-sky-500/30 transition-colors"
                      >
                        <Twitter className="w-4 h-4" />
                      </a>
                    )}
                  </div>
                </div>
              </div>

              {/* Bio & Details Column */}
              <div className="lg:col-span-8 space-y-8">
                {/* Full Bio */}
                <div className="bg-[#0B172E] border border-[#102447] rounded-3xl p-6 sm:p-8">
                  <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                    <Briefcase className="w-5 h-5 text-blue-400" />
                    <span>{content.bioHeading}</span>
                  </h2>
                  <div className="space-y-4 text-slate-300 text-sm sm:text-base leading-relaxed">
                    {bioParagraphs.map((paragraph, idx) => (
                      <p key={idx}>{paragraph}</p>
                    ))}
                  </div>
                </div>

                {/* Background & Pedigree */}
                {background && (
                  <div className="bg-[#0B172E] border border-[#102447] rounded-3xl p-6 sm:p-8">
                    <h2 className="text-xl font-bold text-white mb-3 flex items-center gap-2">
                      <Layers className="w-5 h-5 text-blue-400" />
                      <span>{content.backgroundHeading}</span>
                    </h2>
                    <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                      {background}
                    </p>
                  </div>
                )}

                {/* Achievements */}
                {achievements.length > 0 && (
                  <div className="bg-[#0B172E] border border-[#102447] rounded-3xl p-6 sm:p-8">
                    <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                      <Award className="w-5 h-5 text-emerald-400" />
                      <span>{content.achievementsHeading}</span>
                    </h2>
                    <ul className="space-y-3">
                      {achievements.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-3 text-slate-300 text-sm sm:text-base">
                          <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Areas of Expertise */}
                {member.expertise && member.expertise.length > 0 && (
                  <div className="bg-[#0B172E] border border-[#102447] rounded-3xl p-6 sm:p-8">
                    <h2 className="text-xl font-bold text-white mb-4">
                      {content.expertiseHeading}
                    </h2>
                    <div className="flex flex-wrap gap-2.5">
                      {member.expertise.map((tag, idx) => (
                        <span
                          key={idx}
                          className="px-4 py-2 rounded-xl text-xs sm:text-sm font-medium bg-[#060D1A] border border-[#102447] text-blue-300 hover:border-blue-500/40 transition-colors"
                        >
                          #{tag}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* Other Members / Leadership */}
        {otherMembers.length > 0 && (
          <section className="py-16 bg-[#081226] border-b border-[#102447]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex items-center justify-between mb-8">
                <h2 className="text-xl sm:text-2xl font-bold text-white">
                  {content.relatedHeading}
                </h2>
                <Link
                  href={`/${locale}/team`}
                  className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-blue-400 hover:text-blue-300"
                >
                  <span>{content.teamBreadcrumb}</span>
                  <ArrowIcon className="w-4 h-4" />
                </Link>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {otherMembers.map((rel) => (
                  <Link
                    key={rel.id}
                    href={`/${locale}/team/${rel.slug || rel.id}`}
                    className="bg-[#0B172E] border border-[#102447] rounded-2xl p-5 hover:border-blue-500/40 hover:shadow-lg transition-all flex items-center gap-4 group"
                  >
                    <div className="relative w-14 h-14 rounded-xl overflow-hidden bg-[#060D1A] border border-[#102447] shrink-0">
                      <Image
                        src={rel.image || '/images/team/mustafa-jalal.svg'}
                        alt={rel.name || ''}
                        fill
                        sizes="56px"
                        className="object-cover group-hover:scale-105 transition-transform"
                      />
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className="text-sm font-bold text-white group-hover:text-blue-400 transition-colors truncate">
                        {rel.name}
                      </div>
                      <div className="text-xs text-blue-400/90 truncate mt-0.5">
                        {rel.position}
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Careers CTA */}
        <section className="py-14 bg-[#060D1A]">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h3 className="text-2xl font-bold text-white mb-3">{content.joinHeading}</h3>
            <Link
              href={`/${locale}/careers`}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold text-sm transition-all shadow-lg shadow-blue-600/30 mt-3"
            >
              <span>{content.joinBtn}</span>
              <ArrowIcon className="w-4 h-4" />
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
