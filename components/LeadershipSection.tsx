'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Linkedin, Twitter, Github, Mail, Award, CheckCircle2, ArrowRight, ArrowLeft } from 'lucide-react';
import { TeamMember } from '@/lib/team-data';
import { useLocale } from '@/lib/locale-context';

interface LeadershipSectionProps {
  leaders: TeamMember[];
  locale: string;
}

export default function LeadershipSection({ leaders, locale }: LeadershipSectionProps) {
  const { isRtl } = useLocale();
  const ArrowIcon = isRtl ? ArrowLeft : ArrowRight;

  const labels = {
    ku: {
      sectionBadge: 'دەستەی جێبەجێکاری و سەرکردایەتی',
      title: 'سەرکردایەتییەکی لێهاتوو بۆ داهاتووی عێراق',
      subtitle:
        'دامەزرێنەران و سەرکردە جێبەجێکارەکان کە خاوەن دیدگایەکی نیشتمانین بۆ بنیاتنانی ژێرخانی سەروەری دیجیتاڵی.',
      achievements: 'دەستکەوتە سەرەکییەکان:',
      background: 'پێشینە و باکگراوند:',
      fullProfile: 'پڕۆفایلی تەواو و لێکۆڵینەوەکان',
    },
    ar: {
      sectionBadge: 'المجلس التنفيذي والقيادة المؤسسية',
      title: 'قيادة وطنية متمرسة لصياغة المستقبل الرقمي',
      subtitle:
        'المؤسسون والقادة التنفيذيون الملتزمون بترسيخ السيادة الرقمية وبناء القدرة المؤسسية الوطنية طويلة الأمد.',
      achievements: 'أبرز الإنجازات والمسؤوليات:',
      background: 'الخلفية المهنية والأكاديمية:',
      fullProfile: 'الملف التعريفي الكامل',
    },
    en: {
      sectionBadge: 'Executive Council & Leadership',
      title: 'Pioneering Leadership for Iraq’s Digital Sovereignty',
      subtitle:
        'Founders and C-level executives dedicated to building sovereign digital infrastructure and institutional resilience.',
      achievements: 'Key Achievements & Responsibilities:',
      background: 'Professional & Academic Pedigree:',
      fullProfile: 'View Full Executive Profile',
    },
  }[locale === 'ar' || locale === 'en' ? locale : 'ku'];

  return (
    <section id="leadership" className="py-16 lg:py-24 bg-[#060D1A] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-semibold uppercase tracking-wider mb-3">
            <Award className="w-3.5 h-3.5" />
            <span>{labels.sectionBadge}</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight">
            {labels.title}
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed">
            {labels.subtitle}
          </p>
        </div>

        {/* Leaders List */}
        <div className="space-y-12">
          {leaders.map((leader, index) => {
            const isReversed = index % 2 === 1;

            return (
              <div
                key={leader.id}
                className="bg-[#0B172E] border border-[#102447] rounded-3xl p-6 sm:p-8 lg:p-10 hover:border-blue-500/40 transition-all duration-300 shadow-2xl shadow-black/40 relative overflow-hidden group"
              >
                {/* Background Glow */}
                <div className="absolute top-0 end-0 w-96 h-96 bg-blue-600/5 blur-3xl rounded-full pointer-events-none" />

                <div
                  className={`grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center ${
                    isReversed ? 'lg:flex-row-reverse' : ''
                  }`}
                >
                  {/* Avatar / Portrait Column */}
                  <div className={`lg:col-span-4 flex flex-col items-center ${isReversed ? 'lg:order-2' : ''}`}>
                    <div className="relative w-48 h-48 sm:w-56 sm:h-56 lg:w-64 lg:h-64 rounded-3xl overflow-hidden bg-[#060D1A] border-4 border-[#102447] group-hover:border-blue-500/50 transition-colors shadow-2xl">
                      <Image
                        src={leader.image}
                        alt={leader.name}
                        fill
                        sizes="(max-width: 768px) 224px, 256px"
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                        priority={index === 0}
                      />
                    </div>

                    {/* Social Channels */}
                    <div className="flex items-center gap-3 mt-6">
                      {leader.social.linkedin && (
                        <a
                          href={leader.social.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`${leader.name} LinkedIn`}
                          className="w-10 h-10 rounded-xl bg-[#060D1A] border border-[#102447] flex items-center justify-center text-slate-300 hover:text-blue-400 hover:border-blue-500/40 transition-all shadow-sm"
                        >
                          <Linkedin className="w-4 h-4" />
                        </a>
                      )}
                      {leader.social.twitter && (
                        <a
                          href={leader.social.twitter}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`${leader.name} Twitter / X`}
                          className="w-10 h-10 rounded-xl bg-[#060D1A] border border-[#102447] flex items-center justify-center text-slate-300 hover:text-sky-400 hover:border-sky-500/40 transition-all shadow-sm"
                        >
                          <Twitter className="w-4 h-4" />
                        </a>
                      )}
                      {leader.social.github && (
                        <a
                          href={leader.social.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`${leader.name} GitHub`}
                          className="w-10 h-10 rounded-xl bg-[#060D1A] border border-[#102447] flex items-center justify-center text-slate-300 hover:text-white hover:border-slate-500/40 transition-all shadow-sm"
                        >
                          <Github className="w-4 h-4" />
                        </a>
                      )}
                      {leader.social.email && (
                        <a
                          href={`mailto:${leader.social.email}`}
                          aria-label={`Email ${leader.name}`}
                          className="w-10 h-10 rounded-xl bg-[#060D1A] border border-[#102447] flex items-center justify-center text-slate-300 hover:text-emerald-400 hover:border-emerald-500/40 transition-all shadow-sm"
                        >
                          <Mail className="w-4 h-4" />
                        </a>
                      )}
                    </div>
                  </div>

                  {/* Details Column */}
                  <div className={`lg:col-span-8 ${isReversed ? 'lg:order-1' : ''}`}>
                    <div className="flex flex-wrap items-center gap-3">
                      <span className="px-3 py-1 rounded-md text-xs font-semibold uppercase tracking-wider bg-blue-500/10 text-blue-400 border border-blue-500/20">
                        {leader.titleEn}
                      </span>
                      <span className="text-xs text-slate-500 font-mono">
                        IDG Sovereign Council
                      </span>
                    </div>

                    <h3 className="text-2xl sm:text-3xl font-bold text-white mt-3">
                      <Link
                        href={`/${locale}/team/${leader.slug}`}
                        className="hover:text-blue-400 transition-colors"
                      >
                        {leader.name}
                      </Link>
                    </h3>
                    <div className="text-sm sm:text-base font-semibold text-blue-400 mt-1">
                      {leader.title}
                    </div>

                    <p className="mt-4 text-sm sm:text-base text-slate-300 leading-relaxed font-normal">
                      {leader.bio}
                    </p>

                    {/* Background Summary */}
                    <div className="mt-5 p-4 rounded-xl bg-[#060D1A]/80 border border-[#102447]">
                      <div className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-1">
                        {labels.background}
                      </div>
                      <div className="text-xs sm:text-sm text-slate-300">
                        {leader.background}
                      </div>
                    </div>

                    {/* Key Achievements */}
                    {leader.achievements && leader.achievements.length > 0 && (
                      <div className="mt-5">
                        <div className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2">
                          {labels.achievements}
                        </div>
                        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                          {leader.achievements.map((item, idx) => (
                            <li key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-slate-300">
                              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {/* Expertise Tags & Profile Link */}
                    <div className="mt-6 pt-5 border-t border-[#102447] flex flex-wrap items-center justify-between gap-4">
                      <div className="flex flex-wrap gap-2">
                        {leader.expertise.map((tag, idx) => (
                          <span
                            key={idx}
                            className="px-3 py-1 rounded-lg text-xs font-medium bg-[#060D1A] border border-[#102447] text-slate-300"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      <Link
                        href={`/${locale}/team/${leader.slug}`}
                        className="inline-flex items-center gap-2 text-sm font-semibold text-blue-400 hover:text-blue-300 transition-colors group/link"
                      >
                        <span>{labels.fullProfile}</span>
                        <ArrowIcon className="w-4 h-4 group-hover/link:translate-x-1 rtl:group-hover/link:-translate-x-1 transition-transform" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
