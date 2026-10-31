'use client';

import React, { useState } from 'react';
import { translations, Language } from '@/lib/translations';
import Navbar from '@/components/Navbar';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import AIUseDisclosure from '@/components/AIUseDisclosure';
import EvidenceBadge from '@/components/EvidenceBadge';
import Breadcrumbs from '@/components/Breadcrumbs';
import RelatedPages from '@/components/RelatedPages';
import { Handshake, Briefcase, ShieldAlert, Newspaper, Mail, Copy, Check, ArrowUpRight } from 'lucide-react';

export default function ContactClient({ locale }: { locale: string }) {
  const lang: Language = locale === 'ar' || locale === 'en' ? locale : 'ku';
  const isRtl = lang === 'ku' || lang === 'ar';
  const t = translations[lang] || translations.ku;
  const [copiedEmail, setCopiedEmail] = useState<string | null>(null);

  const copyToClipboard = (email: string) => {
    navigator.clipboard.writeText(email);
    setCopiedEmail(email);
    setTimeout(() => setCopiedEmail(null), 2500);
  };

  const departments = [
    {
      id: 'partnerships',
      email: 'partnerships@idggov.tech',
      title: lang === 'ku' ? 'هاوبەشییە ستراتیژی و حکومییەکان' : lang === 'ar' ? 'الشراكات الاستراتيجية والحكومية' : 'Strategic & Government Partnerships',
      desc: lang === 'ku' ? 'پەیوەندیی وەزارەتەکان، کۆمپانیا دەوڵەتییەکان و پڕۆژە نیشتمانییەکان.' : lang === 'ar' ? 'قنوات التنسيق مع الوزارات والمؤسسات السيادية والمشاريع الوطنية.' : 'Ministries, sovereign entities, and institutional projects.',
      icon: Handshake,
      badge: lang === 'ku' ? 'دامەزراوەیی' : lang === 'ar' ? 'مؤسسي' : 'Institutional',
      badgeColor: 'border-blue-500/30 text-blue-400 bg-blue-500/10',
    },
    {
      id: 'careers',
      email: 'careers@idggov.tech',
      title: lang === 'ku' ? 'دامەزراندن و بەهرەمەندەکان' : lang === 'ar' ? 'التوظيف واستقطاب المواهب' : 'Talent Acquisition & Careers',
      desc: lang === 'ku' ? 'ناردنی سیڤی، داواکاریی هاوبەشیی ئەندازیاری و هەلەکانی کار لە IDG.' : lang === 'ar' ? 'استقبال السير الذاتية، برامج زمالة القادة وفرص العمل التقنية.' : 'CV submissions, leadership fellowships, and engineering roles.',
      icon: Briefcase,
      badge: lang === 'ku' ? 'تەکنیکی و HR' : lang === 'ar' ? 'الموارد البشرية' : 'HR & Talent',
      badgeColor: 'border-emerald-500/30 text-emerald-400 bg-emerald-500/10',
    },
    {
      id: 'security',
      email: 'security@idggov.tech',
      title: lang === 'ku' ? 'ئاسایشی سایبەری و سەروەریی داتا' : lang === 'ar' ? 'الأمن السيبراني وسيادة البيانات' : 'Cybersecurity & Sovereign Data',
      desc: lang === 'ku' ? 'ڕاپۆرتکردنی کەموکوڕی و کەلێنی ئەمنی، پرۆتۆکۆلی سەروەریی زانیاری.' : lang === 'ar' ? 'الإبلاغ عن الثغرات الأمنية والامتثال لسيادة البيانات والمعلومات.' : 'Vulnerability disclosure and sovereign data compliance.',
      icon: ShieldAlert,
      badge: lang === 'ku' ? 'نهێنی و ئاسایش' : lang === 'ar' ? 'أمني سري' : 'Security',
      badgeColor: 'border-amber-500/30 text-amber-400 bg-amber-500/10',
    },
    {
      id: 'press',
      email: 'press@idggov.tech',
      title: lang === 'ku' ? 'نووسینگەی ڕۆژنامەوانی و ڕاگەیاندن' : lang === 'ar' ? 'المكتب الصحفي والعلاقات الإعلامية' : 'Press Office & Media Relations',
      desc: lang === 'ku' ? 'چاوپێکەوتنە فەرمییەکان، دەزگاکانی ڕاگەیاندن و بڵاوکراوە ڕۆژنامەوانییەکان.' : lang === 'ar' ? 'الاستفسارات الإعلامية، التصريحات الرسمية والبيانات الصحفية.' : 'Journalist inquiries, official statements, and media briefings.',
      icon: Newspaper,
      badge: lang === 'ku' ? 'میدیا' : lang === 'ar' ? 'إعلام' : 'Media',
      badgeColor: 'border-purple-500/30 text-purple-400 bg-purple-500/10',
    },
    {
      id: 'contact',
      email: 'contact@idggov.tech',
      title: lang === 'ku' ? 'پەیوەندییە گشتییەکان و دیوان' : lang === 'ar' ? 'الاستفسارات العامة والديوان' : 'General Inquiries & Central Desk',
      desc: lang === 'ku' ? 'پرسیارە گشتییەکان، پێشنیارەکان و بەدواداچوونی گشتی بۆ خزمەتگوزارییەکان.' : lang === 'ar' ? 'الأسئلة العامة، المقترحات والمتابعات الإدارية للخدمات.' : 'General inquiries, feedback, and central coordination.',
      icon: Mail,
      badge: lang === 'ku' ? 'گشتی' : lang === 'ar' ? 'عام' : 'General',
      badgeColor: 'border-slate-500/30 text-slate-400 bg-slate-500/10',
    },
  ];

  const relatedPages = [
    {
      href: `/${lang}/about`,
      title: lang === 'ku' ? 'دەربارەی ئێمە' : lang === 'ar' ? 'من نحن' : 'About Us',
      description: lang === 'ku' ? 'تەلارسازی و دیدگای دامەزراندنی IDG لە عێراق.' : lang === 'ar' ? 'المعمارية المؤسسية والتنظيمية لبوابة العراق الرقمية.' : 'Sovereign institutional blueprint and foundation.',
    },
    {
      href: `/${lang}/governance`,
      title: lang === 'ku' ? 'حوکمڕانی و دیسپلین' : lang === 'ar' ? 'مصفوفة الحوكمة' : 'Governance & Escalation',
      description: lang === 'ku' ? 'کەناڵەکانی پەیوەندیی فەرمی و دەستەی چاودێری.' : lang === 'ar' ? 'قنوات التصعيد المؤسسي وضوابط الامتثال السيادي.' : 'Institutional compliance and escalation oversight.',
    },
    {
      href: `/${lang}/faq`,
      title: lang === 'ku' ? 'پرسیارە باوەکان' : lang === 'ar' ? 'الأسئلة الشائعة' : 'FAQ',
      description: lang === 'ku' ? 'وەڵامی پرسیارە گشتی و تەکنیکییە باوەکان پێش پەیوەندیکردن.' : lang === 'ar' ? 'إجابات مباشرة حول الشراكات وآليات العمل المشترك.' : 'Quick answers to common institutional inquiries.',
    },
  ];

  return (
    <div dir={isRtl ? 'rtl' : 'ltr'} lang={lang} className="min-h-screen bg-[#060D1A] text-slate-100 overflow-x-hidden w-full max-w-full">
      <Navbar lang={lang} onLanguageChange={() => {}} t={t} onOpenContact={() => {}} />
      <main id="main-content" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-10">
        <Breadcrumbs
          items={[
            {
              label: lang === 'ku' ? 'پەیوەندی' : lang === 'ar' ? 'تواصل معنا' : 'Contact',
            },
          ]}
        />
        <AIUseDisclosure lang={lang} className="mb-6" />

        {/* SLA Status Bar */}
        <div className="mb-8 flex items-center justify-between flex-wrap gap-2 text-xs text-slate-400 font-mono bg-[#0B172E] p-3 rounded-xl border border-[#102447]">
          <span>
            {lang === 'ku'
              ? 'کاتی وەڵامدانەوەی فەرمی: ٢٤ - ٤٨ کاتژمێری کارکردن'
              : lang === 'ar'
              ? 'وقت الاستجابة الرسمي: ٢٤ - ٤٨ ساعة عمل'
              : 'Official Response Protocol: 24-48 business hours'}
          </span>
          <EvidenceBadge status="verified" lang={lang} source="IDG SLA Protocol 2026" />
        </div>

        {/* Departmental Directory Section */}
        <section aria-labelledby="dept-directory-heading" className="mb-12">
          <div className="mb-6 text-start">
            <h2 id="dept-directory-heading" className="text-xl sm:text-2xl font-bold text-slate-100 tracking-tight">
              {lang === 'ku' ? 'کەناڵە تایبەتمەندەکانی پەیوەندی بە بەشە فەرمییەکان' : lang === 'ar' ? 'القنوات المباشرة للأقسام الرسمية والمؤسسية' : 'Official Departmental Communication Directory'}
            </h2>
            <p className="text-xs sm:text-sm text-slate-400 mt-1">
              {lang === 'ku'
                ? 'بۆ دەستڕاگەیشتنی خێرا، ڕاستەوخۆ لەڕێگەی ئیمەیڵی تایبەتی بەشە پەیوەندیدارەکەوە پەیوەندیمان پێوە بکە:'
                : lang === 'ar'
                ? 'للوصول المباشر، يرجى توجيه استفساركم إلى القسم المختص عبر البريد الإلكتروني الرسمي المخصص:'
                : 'For expedited routing, reach out directly to the dedicated department inbox:'}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {departments.map((dept) => {
              const Icon = dept.icon;
              const isCopied = copiedEmail === dept.email;
              return (
                <div
                  key={dept.id}
                  className="bg-[#0B172E] border border-[#102447] hover:border-[#193B73] rounded-xl p-5 transition-all duration-200 flex flex-col justify-between group"
                >
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-3">
                      <div className="w-10 h-10 rounded-lg bg-[#102447] flex items-center justify-center text-blue-400 group-hover:scale-105 transition-transform">
                        <Icon className="w-5 h-5" />
                      </div>
                      <span className={`text-[10px] font-mono px-2 py-0.5 rounded-full border ${dept.badgeColor}`}>
                        {dept.badge}
                      </span>
                    </div>
                    <h3 className="text-base font-bold text-slate-100 mb-1">
                      {dept.title}
                    </h3>
                    <p className="text-xs text-slate-400 leading-relaxed mb-4">
                      {dept.desc}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-[#102447]/80 flex items-center justify-between gap-2">
                    <a
                      href={`mailto:${dept.email}`}
                      className="font-mono text-xs text-blue-400 hover:text-blue-300 font-medium inline-flex items-center gap-1 transition-colors"
                      title={dept.email}
                    >
                      <span>{dept.email}</span>
                      <ArrowUpRight className="w-3.5 h-3.5 opacity-70" />
                    </a>
                    <button
                      type="button"
                      onClick={() => copyToClipboard(dept.email)}
                      aria-label={`Copy ${dept.email}`}
                      className="text-slate-400 hover:text-slate-200 p-1.5 rounded-md hover:bg-[#102447] transition cursor-pointer"
                      title={lang === 'ku' ? 'کۆپیکردنی ئیمەیڵ' : lang === 'ar' ? 'نسخ البريد' : 'Copy Email'}
                    >
                      {isCopied ? (
                        <Check className="w-4 h-4 text-emerald-400" />
                      ) : (
                        <Copy className="w-4 h-4" />
                      )}
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* Contact Form Section */}
        <section id="governance-escalation" aria-label="Official Contact Form">
          <ContactSection t={t} isRtl={isRtl} />
        </section>

        <RelatedPages pages={relatedPages} />
      </main>
      <Footer t={t} isRtl={isRtl} onOpenContact={() => {}} />
    </div>
  );
}
