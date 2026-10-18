'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Linkedin, Twitter, Mail, ArrowRight, ArrowLeft, Search, Briefcase } from 'lucide-react';
import { TeamMember } from '@/lib/team-data';
import { useLocale } from '@/lib/locale-context';

interface TeamMemberCardProps {
  member: TeamMember;
  locale: string;
}

export default function TeamMemberCard({ member, locale }: TeamMemberCardProps) {
  const { isRtl } = useLocale();
  const ArrowIcon = isRtl ? ArrowLeft : ArrowRight;

  const getName = () => {
    if (member.status === 'filled') {
      if (locale === 'ku') return member.nameKu || member.name;
      if (locale === 'ar') return member.nameAr || member.name;
      return member.name;
    }
    return null;
  };

  const getPosition = () => {
    if (locale === 'ku') return member.positionKu || member.position;
    if (locale === 'ar') return member.positionAr || member.position;
    return member.position;
  };

  const getBio = () => {
    if (member.status === 'filled') {
      if (locale === 'ku') return member.bioKu || member.bio;
      if (locale === 'ar') return member.bioAr || member.bio;
      return member.bio;
    }
    return null;
  };

  const tLabels = {
    ku: {
      openPosition: '📋 شوێنی کراوە بۆ دامەزراندن',
      hiringStatus: 'دەرفەتی کار',
      hiringDesc: 'ئەم پێگەیە لە داهاتووی نزیکدا وەردەگیرێت. ئەگەر ئارەزوومەندیت، سیڤی خۆت بنێرە.',
      sendCv: 'پێشکەشکردنی داواکاری',
      viewProfile: 'پڕۆفایلی تەواو',
    },
    ar: {
      openPosition: '📋 فرصة وظيفية متاحة',
      hiringStatus: 'يبحث عن كفاءة',
      hiringDesc: 'سنعلن عن هذا المنصب قريباً. إذا كنت مهتماً بالانضمام، فتواصل معنا وأرسل سيرتك.',
      sendCv: 'تقديم السيرة الذاتية',
      viewProfile: 'عرض الملف الكامل',
    },
    en: {
      openPosition: '📋 Open Position',
      hiringStatus: 'Hiring Soon',
      hiringDesc: 'We are hiring for this position soon. Interested in sovereign tech? Send your resume.',
      sendCv: 'Apply / Send CV',
      viewProfile: 'View Full Profile',
    },
  }[locale === 'ar' || locale === 'en' ? locale : 'ku'];

  return (
    <div className="bg-[#0B172E] border border-[#102447] rounded-2xl overflow-hidden hover:border-blue-500/50 hover:shadow-2xl hover:shadow-blue-900/10 transition-all duration-300 flex flex-col justify-between">
      {member.status === 'filled' ? (
        // FILLED POSITION (Real Member)
        <>
          {/* Top Banner Accent */}
          <div className="h-1.5 w-full bg-gradient-to-r from-blue-600 via-indigo-500 to-sky-400" />

          <div className="p-6 flex-1 flex flex-col">
            {/* Header: Photo and Socials */}
            <div className="flex items-start justify-between gap-4 mb-4">
              <div className="relative w-20 h-20 rounded-2xl overflow-hidden bg-[#060D1A] border-2 border-[#102447] shrink-0 shadow-inner">
                <Image
                  src={member.image || '/images/team/mustafa-jalal.svg'}
                  alt={getName() || ''}
                  fill
                  sizes="80px"
                  className="object-cover"
                  priority
                />
              </div>

              {/* Social Channels */}
              <div className="flex items-center gap-1.5 pt-1">
                {member.email && (
                  <a
                    href={`mailto:${member.email}`}
                    aria-label="Email"
                    className="w-8 h-8 rounded-lg bg-[#060D1A] border border-[#102447] flex items-center justify-center text-slate-300 hover:text-emerald-400 hover:border-emerald-500/40 transition-colors"
                  >
                    <Mail className="w-4 h-4" />
                  </a>
                )}
                {member.linkedIn && (
                  <a
                    href={member.linkedIn}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn"
                    className="w-8 h-8 rounded-lg bg-[#060D1A] border border-[#102447] flex items-center justify-center text-slate-300 hover:text-blue-400 hover:border-blue-500/40 transition-colors"
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
                    className="w-8 h-8 rounded-lg bg-[#060D1A] border border-[#102447] flex items-center justify-center text-slate-300 hover:text-sky-400 hover:border-sky-500/40 transition-colors"
                  >
                    <Twitter className="w-4 h-4" />
                  </a>
                )}
              </div>
            </div>

            {/* Name & Title */}
            <div>
              <Link
                href={`/${locale}/team/${member.slug || member.id}`}
                className="text-lg font-bold text-white hover:text-blue-400 transition-colors block"
              >
                {getName()}
              </Link>
              <p className="text-xs sm:text-sm font-semibold text-blue-400 mt-1">
                {getPosition()}
              </p>
            </div>

            {/* Bio */}
            <p className="text-slate-300 text-xs sm:text-sm mt-3 leading-relaxed flex-1">
              {getBio()}
            </p>

            {/* Expertise Tags */}
            {member.expertise && member.expertise.length > 0 && (
              <div className="flex flex-wrap gap-1.5 mt-4 pt-3 border-t border-[#102447]/60">
                {member.expertise.map((tag) => (
                  <span
                    key={tag}
                    className="px-2.5 py-1 bg-[#060D1A] border border-[#102447] text-blue-300 text-[11px] font-medium rounded-lg"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            )}
          </div>

          {/* Footer Link */}
          <div className="px-6 py-3 bg-[#060D1A]/60 border-t border-[#102447] flex items-center justify-between">
            <span className="text-[11px] uppercase tracking-wider font-semibold text-slate-500">
              {member.section}
            </span>
            <Link
              href={`/${locale}/team/${member.slug || member.id}`}
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-blue-400 hover:text-blue-300 transition-colors"
            >
              <span>{tLabels.viewProfile}</span>
              <ArrowIcon className="w-3.5 h-3.5" />
            </Link>
          </div>
        </>
      ) : (
        // PLACEHOLDER: Open Position
        <>
          {/* Top Border Amber Accent */}
          <div className="h-1.5 w-full bg-gradient-to-r from-amber-500 via-amber-400 to-yellow-500 opacity-70" />

          {/* Placeholder Visual Box */}
          <div className="w-full h-36 bg-gradient-to-br from-[#060D1A] to-[#0F1E3A] border-b border-[#102447] flex items-center justify-center relative overflow-hidden">
            <div className="absolute inset-0 opacity-[0.04] bg-[radial-gradient(#F59E0B_1px,transparent_1px)] [background-size:16px_16px]" />
            <div className="text-center relative z-10">
              <div className="w-12 h-12 rounded-2xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center mx-auto text-amber-400 mb-2 shadow-inner">
                <Search className="w-6 h-6" />
              </div>
              <p className="text-amber-400/90 text-xs font-semibold tracking-wider uppercase">
                {tLabels.hiringStatus}
              </p>
            </div>
          </div>

          <div className="p-6 flex-1 flex flex-col justify-between">
            <div>
              <p className="text-xs text-amber-400 font-semibold mb-2">
                {tLabels.openPosition}
              </p>

              <h3 className="text-base sm:text-lg font-bold text-white">
                {getPosition()}
              </h3>

              <p className="text-slate-400 text-xs sm:text-sm mt-3 leading-relaxed">
                {tLabels.hiringDesc}
              </p>
            </div>

            <div className="mt-5 pt-4 border-t border-[#102447]/60 space-y-2.5">
              <Link
                href={`/${locale}/careers`}
                className="w-full inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-500 text-white py-2.5 px-4 rounded-xl text-xs sm:text-sm font-semibold transition-all shadow-md shadow-blue-600/20"
              >
                <Briefcase className="w-4 h-4" />
                <span>{tLabels.sendCv}</span>
              </Link>

              {/* Quick Share Buttons */}
              <div className="flex items-center gap-2">
                <a
                  href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(`https://idggov.tech/${locale}/careers`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-1.5 py-2 px-3 rounded-lg bg-[#060D1A] hover:bg-[#102447] text-blue-400 border border-[#102447] text-xs font-medium transition-colors"
                  title="Share on LinkedIn"
                >
                  <Linkedin className="w-3.5 h-3.5" />
                  <span>LinkedIn</span>
                </a>

                <a
                  href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(`We are hiring: ${getPosition()} at IDG! 🚀\nApply now: `)}&url=${encodeURIComponent(`https://idggov.tech/${locale}/careers`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-1.5 py-2 px-3 rounded-lg bg-[#060D1A] hover:bg-[#102447] text-sky-400 border border-[#102447] text-xs font-medium transition-colors"
                  title="Share on X"
                >
                  <Twitter className="w-3.5 h-3.5" />
                  <span>X / Twitter</span>
                </a>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
