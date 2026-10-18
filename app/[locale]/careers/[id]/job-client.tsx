'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Breadcrumbs from '@/components/Breadcrumbs';
import { JobPosting, getJobPostings } from '@/lib/job-postings';
import { getShareUrls } from '@/lib/share-utils';
import { useLocale } from '@/lib/locale-context';
import {
  MapPin,
  Briefcase,
  DollarSign,
  CheckCircle2,
  Share2,
  Linkedin,
  Twitter,
  Mail,
  Copy,
  Check,
  ChevronLeft,
  ChevronRight,
  Send,
  Loader2,
  Sparkles,
} from 'lucide-react';

interface JobClientProps {
  job: JobPosting;
  locale: string;
}

export default function JobClient({ job, locale }: JobClientProps) {
  const { isRtl } = useLocale();
  const ChevronBack = isRtl ? ChevronRight : ChevronLeft;

  const [copied, setCopied] = useState(false);
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [linkedInUrl, setLinkedInUrl] = useState('');
  const [coverNote, setCoverNote] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

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
      careersBreadcrumb: 'هەلی کار',
      backBtn: 'گەڕانەوە بۆ لیستی هەلی کارەکان',
      overviewHeading: 'کورتەی پۆست و ڕۆڵ لە IDG',
      responsibilitiesHeading: 'بەرپرسیارێتییە سەرەکییەکان',
      requirementsHeading: 'شارەزایی و پێداویستییە تەکنیکییەکان',
      preferredHeading: 'خاڵە بەهێزکەرەکان (Preferred):',
      shareHeading: 'ئەم هەلی کارە هاوبەش بکە لەگەڵ تۆڕەکەت',
      copyLink: 'کۆپیکردنی لینک',
      copiedText: 'کۆپی کرا!',
      applyHeading: 'پێشکەشکردنی داواکاری بۆ ئەم پێگەیە',
      nameLabel: 'ناوی تەواو *',
      emailLabel: 'ئیمەیڵی فەرمی *',
      phoneLabel: 'ژمارەی مۆبایل',
      linkedinLabel: 'پڕۆفایلی LinkedIn یان پۆرتفۆلیۆ',
      noteLabel: 'کورتە نامەی ناساندن (Cover Note)',
      submitBtn: 'ناردنی داواکاری بۆ ئەم پێگەیە',
      submitting: 'دەنێردرێت...',
      successTitle: 'داواکارییەکەت بە سەرکەوتوویی تۆمارکرا!',
      successDesc:
        'سوپاس بۆ پێشکەشکردنی داواکاریت. تیمی سەرچاوە مرۆییەکانی IDG بە زووترین کات پەیوەندیت پێوە دەکەن.',
      otherRoles: 'پێگە کراوەکانی دیکە',
      levelText: job.level === 'executive' ? 'ئاستی جێبەجێکار' : job.level === 'senior' ? 'ئاستی باڵا' : 'ئاستی ناوەند',
    },
    ar: {
      careersBreadcrumb: 'الوظائف',
      backBtn: 'العودة إلى دليل الشواغر',
      overviewHeading: 'نظرة عامة على الدور ومسؤولياته في IDG',
      responsibilitiesHeading: 'المسؤوليات والواجبات الرئيسية',
      requirementsHeading: 'المهارات والمتطلبات الفنية',
      preferredHeading: 'مهارات إضافية مفضلة:',
      shareHeading: 'شارك هذه الفرصة المهنية مع شبكتك',
      copyLink: 'نسخ الرابط',
      copiedText: 'تم النسخ!',
      applyHeading: 'التقديم المباشر على هذه الوظيفة',
      nameLabel: 'الاسم الكامل *',
      emailLabel: 'البريد الإلكتروني المهني *',
      phoneLabel: 'رقم الهاتف',
      linkedinLabel: 'رابط ملف LinkedIn أو المعرض المهني',
      noteLabel: 'رسالة تمهيدية موجزة',
      submitBtn: 'إرسال طلب التقديم',
      submitting: 'جاري الإرسال...',
      successTitle: 'تم استلام طلب التقديم بنجاح!',
      successDesc:
        'شكراً لاهتمامك بالانضمام إلى بوابة العراق الرقمية. سيقوم فريق استقطاب الكفاءات بمراجعة ملفك والتواصل معك.',
      otherRoles: 'شواغر أخرى متاحة',
      levelText: job.level === 'executive' ? 'مستوى تنفيذي' : job.level === 'senior' ? 'مستوى أول' : 'مستوى متوسط',
    },
    en: {
      careersBreadcrumb: 'Careers',
      backBtn: 'Back to Open Positions',
      overviewHeading: 'Role Overview & Impact at IDG',
      responsibilitiesHeading: 'Key Responsibilities',
      requirementsHeading: 'Technical Requirements & Skills',
      preferredHeading: 'Preferred Background:',
      shareHeading: 'Share This Role with Your Network',
      copyLink: 'Copy Link',
      copiedText: 'Copied!',
      applyHeading: 'Apply for this Position',
      nameLabel: 'Full Name *',
      emailLabel: 'Work / Professional Email *',
      phoneLabel: 'Phone Number',
      linkedinLabel: 'LinkedIn / Portfolio URL',
      noteLabel: 'Brief Introduction / Cover Note',
      submitBtn: 'Submit Application',
      submitting: 'Submitting...',
      successTitle: 'Application Submitted Successfully!',
      successDesc:
        'Thank you for your interest in joining IDG. Our talent acquisition council will review your submission and reach out shortly.',
      otherRoles: 'Other Open Roles at IDG',
      levelText: job.level === 'executive' ? 'Executive' : job.level === 'senior' ? 'Senior Level' : 'Mid Level',
    },
  }[locale === 'ar' || locale === 'en' ? locale : 'ku'];

  const shareUrls = getShareUrls(job, locale);
  const otherJobs = getJobPostings(locale).filter((j) => j.id !== job.id).slice(0, 3);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(shareUrls.copy);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      // Fallback
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName || !email) return;

    setIsSubmitting(true);
    // Simulate high-availability capture
    await new Promise((r) => setTimeout(r, 800));
    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-[#060D1A] text-white flex flex-col">
      <Navbar />

      <main className="flex-1">
        {/* Breadcrumbs Bar */}
        <div className="bg-[#0B172E]/40 border-b border-[#102447]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center justify-between">
            <Breadcrumbs
              items={[
                { label: labels.careersBreadcrumb, href: `/${locale}/careers` },
                { label: getTitle(), href: `/${locale}/careers/${job.id}` },
              ]}
            />
            <Link
              href={`/${locale}/careers`}
              className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-medium text-slate-400 hover:text-white transition-colors"
            >
              <ChevronBack className="w-4 h-4" />
              <span>{labels.backBtn}</span>
            </Link>
          </div>
        </div>

        {/* Hero Section */}
        <section className="py-12 lg:py-16 relative overflow-hidden border-b border-[#102447] bg-[#060D1A]">
          <div className="absolute top-1/4 start-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-blue-600/10 blur-[120px] rounded-full pointer-events-none" />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="flex flex-wrap items-center gap-2.5 mb-4">
              <span className="px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-blue-500/10 text-blue-400 border border-blue-500/20">
                {job.department}
              </span>
              <span className="px-3 py-1 rounded-full text-xs font-medium bg-[#0B172E] text-slate-300 border border-[#102447]">
                {labels.levelText}
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
              {getTitle()}
            </h1>

            <div className="mt-4 flex flex-wrap items-center gap-6 text-sm text-slate-400">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-slate-500 shrink-0" />
                <span>{job.location}</span>
              </div>
              {job.salary && (
                <div className="flex items-center gap-2 text-emerald-400 font-mono font-medium">
                  <DollarSign className="w-4 h-4 shrink-0" />
                  <span>
                    ${(job.salary.min / 1000).toFixed(0)}k – ${(job.salary.max / 1000).toFixed(0)}k {job.salary.currency}
                  </span>
                </div>
              )}
            </div>

            {/* Quick Share Bar */}
            <div className="mt-8 pt-6 border-t border-[#102447] flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <span className="text-xs font-semibold uppercase tracking-wider text-slate-400 flex items-center gap-1.5">
                  <Share2 className="w-4 h-4 text-blue-400" />
                  <span>{labels.shareHeading}</span>
                </span>
              </div>

              <div className="flex flex-wrap items-center gap-2">
                <button
                  onClick={handleCopy}
                  className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-[#0B172E] border border-[#102447] hover:border-blue-500/40 text-xs font-medium text-slate-300 hover:text-white transition-colors"
                >
                  {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copied ? labels.copiedText : labels.copyLink}</span>
                </button>

                <a
                  href={shareUrls.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-[#0B172E] border border-[#102447] hover:border-blue-500/40 text-xs font-medium text-blue-400 transition-colors"
                >
                  <Linkedin className="w-3.5 h-3.5" />
                  <span>LinkedIn</span>
                </a>

                <a
                  href={shareUrls.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-[#0B172E] border border-[#102447] hover:border-sky-500/40 text-xs font-medium text-sky-400 transition-colors"
                >
                  <Twitter className="w-3.5 h-3.5" />
                  <span>X / Twitter</span>
                </a>

                <a
                  href={shareUrls.email}
                  className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-[#0B172E] border border-[#102447] hover:border-emerald-500/40 text-xs font-medium text-emerald-400 transition-colors"
                >
                  <Mail className="w-3.5 h-3.5" />
                  <span>Email</span>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Content & Application Form Section */}
        <section className="py-14 lg:py-20 bg-[#060D1A]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
              {/* Job Specification Column */}
              <div className="lg:col-span-7 space-y-10">
                {/* Overview */}
                <div className="bg-[#0B172E] border border-[#102447] rounded-3xl p-6 sm:p-8">
                  <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                    <Briefcase className="w-5 h-5 text-blue-400" />
                    <span>{labels.overviewHeading}</span>
                  </h2>
                  <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                    {getDescription()}
                  </p>
                </div>

                {/* Key Responsibilities */}
                <div className="bg-[#0B172E] border border-[#102447] rounded-3xl p-6 sm:p-8">
                  <h2 className="text-xl font-bold text-white mb-5 flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-emerald-400" />
                    <span>{labels.responsibilitiesHeading}</span>
                  </h2>
                  <ul className="space-y-3.5">
                    {getResponsibilities().map((item, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-slate-300 text-sm sm:text-base leading-relaxed">
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-1" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Technical Requirements */}
                <div className="bg-[#0B172E] border border-[#102447] rounded-3xl p-6 sm:p-8">
                  <h2 className="text-xl font-bold text-white mb-5">
                    {labels.requirementsHeading}
                  </h2>
                  <div className="flex flex-wrap gap-2.5 mb-6">
                    {getSkills().map((skill, idx) => (
                      <span
                        key={idx}
                        className="px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold bg-[#060D1A] border border-[#102447] text-blue-300 shadow-sm"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>

                  {job.preferredSkills && job.preferredSkills.length > 0 && (
                    <div className="pt-5 border-t border-[#102447]">
                      <div className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-3">
                        {labels.preferredHeading}
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {job.preferredSkills.map((pref, idx) => (
                          <span
                            key={idx}
                            className="px-3 py-1.5 rounded-lg text-xs font-medium bg-[#060D1A] text-slate-300 border border-[#102447]"
                          >
                            + {pref}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/* Direct Application Form Column */}
              <div id="apply-form" className="lg:col-span-5 sticky top-24">
                <div className="bg-[#0B172E] border border-blue-500/30 rounded-3xl p-6 sm:p-8 shadow-2xl relative overflow-hidden">
                  <div className="absolute top-0 end-0 w-64 h-64 bg-blue-500/10 blur-[90px] rounded-full pointer-events-none" />

                  {isSubmitted ? (
                    <div className="text-center py-8">
                      <div className="w-14 h-14 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto mb-4">
                        <CheckCircle2 className="w-7 h-7" />
                      </div>
                      <h3 className="text-xl font-bold text-white mb-2">{labels.successTitle}</h3>
                      <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">{labels.successDesc}</p>
                      <button
                        onClick={() => setIsSubmitted(false)}
                        className="mt-6 px-6 py-2 rounded-xl bg-[#060D1A] border border-[#102447] text-xs font-semibold text-slate-300 hover:text-white"
                      >
                        Submit Another
                      </button>
                    </div>
                  ) : (
                    <div>
                      <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-semibold mb-3">
                        <Sparkles className="w-3.5 h-3.5" />
                        <span>Sovereign Application</span>
                      </div>
                      <h3 className="text-xl font-bold text-white mb-2">{labels.applyHeading}</h3>
                      <p className="text-xs text-slate-400 mb-6">IDG Institutional Talent Protocol</p>

                      <form onSubmit={handleSubmit} className="space-y-4">
                        <div>
                          <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                            {labels.nameLabel}
                          </label>
                          <input
                            type="text"
                            required
                            value={fullName}
                            onChange={(e) => setFullName(e.target.value)}
                            className="w-full bg-[#060D1A] border border-[#102447] focus:border-blue-500 rounded-xl py-2.5 px-3.5 text-xs sm:text-sm text-white placeholder-slate-600 focus:outline-none"
                            placeholder="Mustafa / Ahmed..."
                          />
                        </div>

                        <div>
                          <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                            {labels.emailLabel}
                          </label>
                          <input
                            type="email"
                            required
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full bg-[#060D1A] border border-[#102447] focus:border-blue-500 rounded-xl py-2.5 px-3.5 text-xs sm:text-sm text-white placeholder-slate-600 focus:outline-none"
                            placeholder="name@organization.com"
                          />
                        </div>

                        <div>
                          <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                            {labels.phoneLabel}
                          </label>
                          <input
                            type="tel"
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                            className="w-full bg-[#060D1A] border border-[#102447] focus:border-blue-500 rounded-xl py-2.5 px-3.5 text-xs sm:text-sm text-white placeholder-slate-600 focus:outline-none"
                            placeholder="+964 7..."
                          />
                        </div>

                        <div>
                          <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                            {labels.linkedinLabel}
                          </label>
                          <input
                            type="url"
                            value={linkedInUrl}
                            onChange={(e) => setLinkedInUrl(e.target.value)}
                            className="w-full bg-[#060D1A] border border-[#102447] focus:border-blue-500 rounded-xl py-2.5 px-3.5 text-xs sm:text-sm text-white placeholder-slate-600 focus:outline-none"
                            placeholder="https://linkedin.com/in/..."
                          />
                        </div>

                        <div>
                          <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                            {labels.noteLabel}
                          </label>
                          <textarea
                            rows={3}
                            value={coverNote}
                            onChange={(e) => setCoverNote(e.target.value)}
                            className="w-full bg-[#060D1A] border border-[#102447] focus:border-blue-500 rounded-xl py-2.5 px-3.5 text-xs sm:text-sm text-white placeholder-slate-600 focus:outline-none resize-none"
                            placeholder="Explain why you hold a commitment to sovereign tech..."
                          />
                        </div>

                        <button
                          type="submit"
                          disabled={isSubmitting}
                          className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold text-xs sm:text-sm transition-all shadow-lg shadow-blue-600/30 disabled:opacity-50"
                        >
                          {isSubmitting ? (
                            <>
                              <Loader2 className="w-4 h-4 animate-spin" />
                              <span>{labels.submitting}</span>
                            </>
                          ) : (
                            <>
                              <Send className="w-4 h-4" />
                              <span>{labels.submitBtn}</span>
                            </>
                          )}
                        </button>
                      </form>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Other Open Positions */}
        {otherJobs.length > 0 && (
          <section className="py-16 bg-[#081226] border-t border-[#102447]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex items-center justify-between mb-8">
                <h2 className="text-xl sm:text-2xl font-bold text-white">
                  {labels.otherRoles}
                </h2>
                <Link
                  href={`/${locale}/careers`}
                  className="text-xs sm:text-sm font-semibold text-blue-400 hover:text-blue-300"
                >
                  {labels.careersBreadcrumb}
                </Link>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {otherJobs.map((other) => (
                  <Link
                    key={other.id}
                    href={`/${locale}/careers/${other.id}`}
                    className="bg-[#0B172E] border border-[#102447] rounded-2xl p-5 hover:border-blue-500/40 hover:shadow-lg transition-all group"
                  >
                    <div className="text-xs text-blue-400 font-semibold uppercase tracking-wider mb-1">
                      {other.department}
                    </div>
                    <div className="text-base font-bold text-white group-hover:text-blue-400 transition-colors">
                      {locale === 'ku' ? other.titleKu : locale === 'ar' ? other.titleAr : other.title}
                    </div>
                    <div className="text-xs text-slate-400 mt-2">
                      {other.location}
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}
      </main>

      <Footer />
    </div>
  );
}
