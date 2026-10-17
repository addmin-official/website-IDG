'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Linkedin, Twitter, Github, Mail, ArrowRight, ArrowLeft } from 'lucide-react';
import { TeamMember } from '@/lib/team-data';
import { useLocale } from '@/lib/locale-context';

interface TeamMemberCardProps {
  member: TeamMember;
  locale: string;
}

export default function TeamMemberCard({ member, locale }: TeamMemberCardProps) {
  const { isRtl } = useLocale();
  const ArrowIcon = isRtl ? ArrowLeft : ArrowRight;

  const viewText = {
    ku: 'پڕۆفایلی تەواو',
    ar: 'الملف التعريفي',
    en: 'View Profile',
  }[locale === 'ar' || locale === 'en' ? locale : 'ku'];

  return (
    <div className="group relative bg-[#0B172E] border border-[#102447] rounded-2xl overflow-hidden hover:border-blue-500/50 hover:shadow-xl hover:shadow-blue-900/10 transition-all duration-300 flex flex-col justify-between">
      {/* Top Banner Accent */}
      <div className="h-1.5 w-full bg-gradient-to-r from-blue-600 via-indigo-500 to-sky-400 opacity-60 group-hover:opacity-100 transition-opacity" />

      <div className="p-6 flex-1 flex flex-col">
        {/* Header with Avatar and Socials */}
        <div className="flex items-start justify-between gap-4 mb-5">
          {/* Avatar */}
          <div className="relative w-20 h-20 rounded-2xl overflow-hidden bg-[#060D1A] border-2 border-[#102447] group-hover:border-blue-500/40 transition-colors shrink-0 shadow-inner">
            <Image
              src={member.image}
              alt={member.name}
              fill
              sizes="80px"
              className="object-cover group-hover:scale-105 transition-transform duration-500"
            />
          </div>

          {/* Social Icons */}
          <div className="flex items-center gap-1.5 pt-1">
            {member.social.linkedin && (
              <a
                href={member.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${member.name} LinkedIn`}
                className="w-8 h-8 rounded-lg bg-[#060D1A] border border-[#102447] flex items-center justify-center text-slate-400 hover:text-blue-400 hover:border-blue-500/30 transition-colors"
              >
                <Linkedin className="w-4 h-4" />
              </a>
            )}
            {member.social.twitter && (
              <a
                href={member.social.twitter}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${member.name} Twitter / X`}
                className="w-8 h-8 rounded-lg bg-[#060D1A] border border-[#102447] flex items-center justify-center text-slate-400 hover:text-sky-400 hover:border-sky-500/30 transition-colors"
              >
                <Twitter className="w-4 h-4" />
              </a>
            )}
            {member.social.github && (
              <a
                href={member.social.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${member.name} GitHub`}
                className="w-8 h-8 rounded-lg bg-[#060D1A] border border-[#102447] flex items-center justify-center text-slate-400 hover:text-white hover:border-slate-500/30 transition-colors"
              >
                <Github className="w-4 h-4" />
              </a>
            )}
            {member.social.email && (
              <a
                href={`mailto:${member.social.email}`}
                aria-label={`Email ${member.name}`}
                className="w-8 h-8 rounded-lg bg-[#060D1A] border border-[#102447] flex items-center justify-center text-slate-400 hover:text-emerald-400 hover:border-emerald-500/30 transition-colors"
              >
                <Mail className="w-4 h-4" />
              </a>
            )}
          </div>
        </div>

        {/* Member Name and Title */}
        <div>
          <Link
            href={`/${locale}/team/${member.slug}`}
            className="text-lg font-bold text-white group-hover:text-blue-400 transition-colors block"
          >
            {member.name}
          </Link>
          <div className="text-xs sm:text-sm font-medium text-blue-400/90 mt-1 leading-snug">
            {member.title}
          </div>
        </div>

        {/* Short Bio */}
        <p className="mt-3 text-xs sm:text-sm text-slate-300 leading-relaxed line-clamp-3 flex-1">
          {member.bio}
        </p>

        {/* Expertise Pills */}
        <div className="mt-4 pt-4 border-t border-[#102447]/60">
          <div className="flex flex-wrap gap-1.5">
            {member.expertise.slice(0, 3).map((skill, idx) => (
              <span
                key={idx}
                className="px-2.5 py-1 rounded-md text-[11px] font-medium bg-[#060D1A] border border-[#102447] text-slate-300"
              >
                {skill}
              </span>
            ))}
            {member.expertise.length > 3 && (
              <span className="px-2 py-1 rounded-md text-[11px] font-medium bg-[#060D1A] text-slate-500">
                +{member.expertise.length - 3}
              </span>
            )}
          </div>
        </div>
      </div>

      {/* Card Footer Link */}
      <div className="px-6 py-3 bg-[#060D1A]/60 border-t border-[#102447] flex items-center justify-between">
        <span className="text-[11px] uppercase tracking-wider font-semibold text-slate-500">
          {member.department}
        </span>
        <Link
          href={`/${locale}/team/${member.slug}`}
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-blue-400 group-hover:text-blue-300 transition-colors"
        >
          <span>{viewText}</span>
          <ArrowIcon className="w-3.5 h-3.5 group-hover:translate-x-0.5 rtl:group-hover:-translate-x-0.5 transition-transform" />
        </Link>
      </div>
    </div>
  );
}
