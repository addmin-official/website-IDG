'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { JobPosting } from '@/lib/job-postings';
import { getShareUrls } from '@/lib/share-utils';
import { useLocale } from '@/lib/locale-context';
import {
  MapPin,
  Briefcase,
  CheckCircle2,
  Share2,
  Linkedin,
  Twitter,
  Mail,
  Copy,
  Check,
  ArrowRight,
  ArrowLeft,
  DollarSign,
  Award,
} from 'lucide-react';

interface JobShareCardProps {
  job: JobPosting;
  locale: string;
}

export default function JobShareCard({ job, locale }: JobShareCardProps) {
  const { isRtl } = useLocale();
  const ArrowIcon = isRtl ? ArrowLeft : ArrowRight;

  const [copied, setCopied] = useState(false);
  const [shareMenuOpen, setShareMenuOpen] = useState(false);

  const getTitle = () => {
    if (locale === 'ku') return job.titleKu || job.title;
    if (locale === 'ar') return job.titleAr || job.title;
    return job.title;
  };

  const getDescription = () => {
    if (locale === 'ku') return job.descriptionKu || job.description;
    if (locale === 'ar') return job.descriptionAr || job.description;
    return job.description;
  };

  const getResponsibilities = () => {
    if (locale === 'ku') return job.responsibilitiesKu || job.responsibilities;
    if (locale === 'ar') return job.responsibilitiesAr || job.responsibilities;
    return job.responsibilities;
  };

  const getSkills = () => {
    if (locale === 'ku') return job.skillsKu || job.skills;
    if (locale === 'ar') return job.skillsAr || job.skills;
    return job.skills;
  };

  const labels = {
    ku: {
      responsibilities: 'بەرپرسیارێتییە سەرەکییەکان:',
      requiredSkills: 'شارەزاییە داواکراوەکان:',
      applyNow: 'پێشکەشکردنی داواکاری',
      shareJob: 'هاوبەشکردن',
      copiedText: 'لینکی هەلی کار کۆپی کرا!',
      copyLink: 'کۆپیکردنی لینک',
      shareLinkedIn: 'هاوبەشکردن لە LinkedIn',
      shareX: 'هاوبەشکردن لە X',
      emailColleague: 'ئیمەیڵ بۆ هاوڕێیەک',
      levelText: job.level === 'executive' ? 'ئاستی جێبەجێکار' : job.level === 'senior' ? 'ئاستی باڵا' : 'ئاستی ناوەند',
    },
    ar: {
      responsibilities: 'المسؤوليات الرئيسية:',
      requiredSkills: 'المهارات المطلوبة:',
      applyNow: 'التقديم على الوظيفة',
      shareJob: 'مشاركة الفرصة',
      copiedText: 'تم نسخ الرابط بنجاح!',
      copyLink: 'نسخ الرابط',
      shareLinkedIn: 'مشاركة على LinkedIn',
      shareX: 'مشاركة على X',
      emailColleague: 'إرسال لصديق عبر الإيميل',
      levelText: job.level === 'executive' ? 'مستوى تنفيذي' : job.level === 'senior' ? 'مستوى أول' : 'مستوى متوسط',
    },
    en: {
      responsibilities: 'Key Responsibilities:',
      requiredSkills: 'Required Skills:',
      applyNow: 'Apply for Position',
      shareJob: 'Share',
      copiedText: 'Link copied to clipboard!',
      copyLink: 'Copy Link',
      shareLinkedIn: 'Share on LinkedIn',
      shareX: 'Share on X',
      emailColleague: 'Email to colleague',
      levelText: job.level === 'executive' ? 'Executive' : job.level === 'senior' ? 'Senior Level' : 'Mid Level',
    },
  }[locale === 'ar' || locale === 'en' ? locale : 'ku'];

  const shareUrls = getShareUrls(job, locale);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(shareUrls.copy);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      // Fallback
    }
  };

  return (
    <div className="bg-[#0B172E] border border-[#102447] rounded-2xl overflow-hidden hover:border-blue-500/50 hover:shadow-2xl hover:shadow-blue-900/10 transition-all duration-300 flex flex-col justify-between group">
      {/* Top Banner Accent */}
      <div className="h-1.5 w-full bg-gradient-to-r from-blue-600 via-indigo-500 to-sky-400 opacity-70 group-hover:opacity-100 transition-opacity" />

      <div className="p-6 sm:p-7 flex-1 flex flex-col">
        {/* Header Badges */}
        <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
          <div className="flex flex-wrap items-center gap-2">
            <span className="px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-blue-500/10 text-blue-400 border border-blue-500/20">
              {job.department}
            </span>
            <span className="px-2.5 py-0.5 rounded-full text-xs font-medium bg-[#060D1A] text-slate-300 border border-[#102447]">
              {labels.levelText}
            </span>
          </div>

          {/* Quick Share Menu Trigger */}
          <div className="relative">
            <button
              onClick={() => setShareMenuOpen(!shareMenuOpen)}
              className="p-2 rounded-xl bg-[#060D1A] border border-[#102447] text-slate-400 hover:text-white hover:border-blue-500/40 transition-colors flex items-center gap-1.5 text-xs font-medium"
              aria-label="Share Job"
            >
              <Share2 className="w-3.5 h-3.5" />
              <span>{labels.shareJob}</span>
            </button>

            {/* Share Popover */}
            {shareMenuOpen && (
              <div className="absolute top-full end-0 mt-2 w-52 bg-[#060D1A] border border-[#102447] rounded-xl shadow-2xl p-2 z-30">
                <button
                  onClick={handleCopy}
                  className="w-full flex items-center gap-2 px-3 py-2 rounded-lg text-xs text-slate-300 hover:bg-[#102447] hover:text-white transition-colors text-start"
                >
                  {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copied ? labels.copiedText : labels.copyLink}</span>
                </button>
                <a
                  href={shareUrls.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center gap-2 px-3 py-2 rounded-lg text-xs text-slate-300 hover:bg-[#102447] hover:text-blue-400 transition-colors"
                >
                  <Linkedin className="w-3.5 h-3.5 text-blue-400" />
                  <span>{labels.shareLinkedIn}</span>
                </a>
                <a
                  href={shareUrls.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center gap-2 px-3 py-2 rounded-lg text-xs text-slate-300 hover:bg-[#102447] hover:text-sky-400 transition-colors"
                >
                  <Twitter className="w-3.5 h-3.5 text-sky-400" />
                  <span>{labels.shareX}</span>
                </a>
                <a
                  href={shareUrls.email}
                  className="w-full flex items-center gap-2 px-3 py-2 rounded-lg text-xs text-slate-300 hover:bg-[#102447] hover:text-emerald-400 transition-colors"
                >
                  <Mail className="w-3.5 h-3.5 text-emerald-400" />
                  <span>{labels.emailColleague}</span>
                </a>
              </div>
            )}
          </div>
        </div>

        {/* Title */}
        <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors">
          <Link href={`/${locale}/careers/${job.id}`}>
            {getTitle()}
          </Link>
        </h3>

        {/* Location & Equity Compensation Metadata */}
        <div className="flex flex-wrap items-center gap-3 text-xs sm:text-sm text-slate-400 mt-2.5">
          <div className="flex items-center gap-1.5">
            <MapPin className="w-4 h-4 text-slate-500 shrink-0" />
            <span>{job.location}</span>
          </div>
          <div className="flex items-center gap-1.5 text-amber-400 font-medium bg-amber-500/10 px-2.5 py-0.5 rounded-full border border-amber-500/20 text-xs">
            <Award className="w-3.5 h-3.5 shrink-0" />
            <span>
              {locale === 'ku'
                ? 'پشک (Equity) + مووچە دوای سەرمایە'
                : locale === 'ar'
                ? 'حصص (Equity) + راتب بعد التمويل'
                : 'Equity + Post-Funding Salary'}
            </span>
          </div>
        </div>

        {/* Description */}
        <p className="mt-3 text-xs sm:text-sm text-slate-300 leading-relaxed line-clamp-3">
          {getDescription()}
        </p>

        {/* Responsibilities Preview */}
        <div className="mt-4 pt-4 border-t border-[#102447]/60">
          <div className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2">
            {labels.responsibilities}
          </div>
          <ul className="space-y-1.5">
            {getResponsibilities().slice(0, 3).map((item, idx) => (
              <li key={idx} className="flex items-start gap-2 text-xs text-slate-300">
                <CheckCircle2 className="w-3.5 h-3.5 text-blue-400 shrink-0 mt-0.5" />
                <span className="line-clamp-1">{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Skills Pills */}
        <div className="mt-4 pt-3 border-t border-[#102447]/60">
          <div className="text-[11px] font-semibold uppercase tracking-wider text-slate-400 mb-2">
            {labels.requiredSkills}
          </div>
          <div className="flex flex-wrap gap-1.5">
            {getSkills().slice(0, 4).map((skill, idx) => (
              <span
                key={idx}
                className="px-2.5 py-1 rounded-md text-[11px] font-medium bg-[#060D1A] border border-[#102447] text-blue-300"
              >
                {skill}
              </span>
            ))}
            {getSkills().length > 4 && (
              <span className="px-2 py-1 rounded-md text-[11px] font-medium bg-[#060D1A] text-slate-500">
                +{getSkills().length - 4}
              </span>
            )}
          </div>
        </div>
      </div>

      {/* Card Footer: Share & Apply */}
      <div className="px-6 py-4 bg-[#060D1A]/80 border-t border-[#102447] flex items-center justify-between gap-3">
        {/* Social Share Icons Inline */}
        <div className="flex items-center gap-1.5">
          <a
            href={shareUrls.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Share on LinkedIn"
            className="w-8 h-8 rounded-lg bg-[#0B172E] border border-[#102447] flex items-center justify-center text-slate-400 hover:text-blue-400 hover:border-blue-500/30 transition-colors"
          >
            <Linkedin className="w-3.5 h-3.5" />
          </a>
          <a
            href={shareUrls.twitter}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Share on X"
            className="w-8 h-8 rounded-lg bg-[#0B172E] border border-[#102447] flex items-center justify-center text-slate-400 hover:text-sky-400 hover:border-sky-500/30 transition-colors"
          >
            <Twitter className="w-3.5 h-3.5" />
          </a>
          <button
            onClick={handleCopy}
            aria-label="Copy Link"
            className="w-8 h-8 rounded-lg bg-[#0B172E] border border-[#102447] flex items-center justify-center text-slate-400 hover:text-emerald-400 hover:border-emerald-500/30 transition-colors relative"
          >
            {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
          </button>
        </div>

        {/* Apply Button */}
        <Link
          href={`/${locale}/careers/${job.id}`}
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs sm:text-sm font-semibold transition-all shadow-md shadow-blue-600/20"
        >
          <Briefcase className="w-3.5 h-3.5" />
          <span>{labels.applyNow}</span>
          <ArrowIcon className="w-3.5 h-3.5" />
        </Link>
      </div>
    </div>
  );
}
