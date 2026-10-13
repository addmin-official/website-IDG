'use client';

import React from 'react';
import { translations, Language } from '@/lib/translations';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Breadcrumbs from '@/components/Breadcrumbs';
import { ShieldCheck, Lock, FileText, ArrowLeft, ArrowRight, Clock, Mail } from 'lucide-react';
import Link from 'next/link';

export default function PrivacyClient({ locale }: { locale: string }) {
  const lang: Language = locale === 'ar' || locale === 'en' ? locale : 'ku';
  const isRtl = lang === 'ku' || lang === 'ar';
  const t = translations[lang] || translations.ku;

  const isKu = lang === 'ku';
  const isAr = lang === 'ar';

  const content = {
    badge: isKu
      ? 'بەڵگەنامەی فەرمیی حوکمڕانی'
      : isAr
      ? 'وثيقة الحوكمة الرسمية'
      : 'Institutional Governance Document',
    title: isKu
      ? 'سیاسەتی پاراستنی نهێنی'
      : isAr
      ? 'سياسة الخصوصية وحماية البيانات'
      : 'Privacy Policy',
    updated: isKu
      ? 'دواین نوێکردنەوە: ٩ی تشرینی یەکەمی ٢٠٢٦'
      : isAr
      ? 'آخر تحديث: ٩ تشرين الأول ٢٠٢٦'
      : 'Last Updated: October 9, 2026',
    intro: isKu
      ? 'دەروازەی دیجیتاڵیی عێراق (IDG) وەک کۆمپانیای دایکی سەروەر پابەندە بە بەرزترین ستانداردەکانی پاراستنی زانیاری، شەفافیەت و پارێزگاری لە نهێنیی بەکارهێنەران و دامەزراوە هاوبەشەکان لە تەواوی خاکی عێراق.'
      : isAr
      ? 'تلتزم بوابة العراق الرقمية (IDG) بصفتها الشركة الأم السيادية بأعلى معايير حماية البيانات والشفافية وصون خصوصية المستخدمين والمؤسسات الشريكة في كافة أنحاء جمهورية العراق.'
      : 'Iraq Digital Gateway (IDG), as the sovereign parent enterprise, is committed to the highest institutional standards of data protection, transparency, and civil privacy across all operational platforms in Iraq.',
    sections: [
      {
        icon: FileText,
        heading: isKu ? '١. ئەو زانیارییانەی کۆیان دەکەینەوە' : isAr ? '١. البيانات التي نجمعها' : '1. Data We Collect',
        desc: isKu
          ? 'ئێمە سیاسەتی کەمترین کۆکردنەوەی پێویست (Data Minimization) پەیڕەو دەکەین:'
          : isAr
          ? 'نتبع سياسة الحد الأدنى الصارم من البيانات لضمان كفاءة الخدمة السيادية:'
          : 'We strictly practice data minimization, limiting collection to explicit institutional operational needs:',
        items: isKu
          ? [
              'زانیاریی پەیوەندی فەرمی: ناو، ئیمەیڵی دامەزراوەیی، ژمارەی پەیوەندی و ناوی دەستە یان وەزارەت.',
              'داتای تەکنیکی سێرڤەر: ناونیشانی IPی پەسەندکراو، جۆری وێبگەڕ، کاتی دەستپێگەیشتن بۆ مەبەستی ئاسایشی تۆڕ.',
              'داتای بەڵگەنامەی بازرگانی و گومرگی: تەنها ئەو داتایانەی کە لەلایەن بەکارهێنەرەوە لە ڕێگەی پلاتفۆرمەکانەوە دەنێردرێن بە مەبەستی فەرمی.',
              'هیچ جۆرە داتایەکی شوێنپێهەڵگرتنی بازرگانی، ڕیکلامی یان چاودێری ڕەفتار کۆناکرێتەوە.',
            ]
          : isAr
          ? [
              'بيانات التواصل المؤسسي: الاسم، البريد الإلكتروني المعتمد، الصفة الوظيفية، والجهة الحكومية أو التجارية.',
              'السجلات التقنية للخوادم: عناوين IP المشفرة، نوع المتصفح، والطوابع الزمنية لأغراض الرصد الأمني ومكافحة التهديدات.',
              'بيانات المعاملات الجمركية واللوجستية: المستندات والبيانات المرفوعة رسمياً لتنفيذ الإجراءات المؤسسية.',
              'لا نجمع أي بيانات تتبع إعلانية أو سلوكية لأطراف ثالثة على الإطلاق.',
            ]
          : [
              'Institutional Contact Data: Full name, official enterprise/governmental email, position, and corporate entity.',
              'Technical Infrastructure Telemetry: Cryptographically hashed IP addresses, browser user-agent, and timestamps strictly for perimeter security auditing.',
              'Operational & Customs Documents: Manifests, declarations, and files deliberately submitted for statutory processing.',
              'Zero third-party advertising, tracking cookies, or commercial behavioral profiling.',
            ],
      },
      {
        icon: Lock,
        heading: isKu ? '٢. چۆنیەتی بەکارهێنانی داتاکان' : isAr ? '٢. كيفية استخدام البيانات' : '2. How We Use Data',
        desc: isKu
          ? 'داتاکانی وەرگیراو تەنها بۆ ئەم مەبەستانە بەکاردەهێنرێن:'
          : isAr
          ? 'تُستخدم البيانات المستلمة حصراً للأغراض المؤسسية التالية:'
          : 'All collected operational data is utilized solely for authorized institutional objectives:',
        items: isKu
          ? [
              'پشتڕاستکردنەوەی شوناسی بەکارهێنەر و جێبەجێکردنی داواکارییە فەرمییەکان.',
              'پاراستنی ئاسایشی ژێرخانی نیشتمانی و بەرگریکردن لە هێرشە سایبەرییەکان.',
              'پەیوەندیکردن لەگەڵ لایەنە پەیوەندیدارەکان بۆ بەدواداچوونی مامەڵەکان بەپێی یاسا.',
              'پەرەپێدانی کوالیتی پلاتفۆرمە سەروەرەکان بەبێ فرۆشتن یان هاوبەشکردنی داتا لەگەڵ هیچ لایەنێکی بازرگانی.',
            ]
          : isAr
          ? [
              'التحقق من الهويات المؤسسية وتنفيذ المعاملات والطلبات المعتمدة.',
              'حماية البنية التحتية الوطنية والرصد الاستباقي للهجمات السيبرانية.',
              'التنسيق الرسمي مع الجهات الحكومية والتنظيمية ذات الصلة بموجب القوانين النافذة.',
              'تطوير وتحسين جودة الأنظمة السيادية دون أي بيع أو مشاركة للبيانات مع جهات تجارية خارجية.',
            ]
          : [
              'Authentication of institutional operators and execution of certified platform transactions.',
              'Zero-Trust boundary validation and national infrastructure cybersecurity defense.',
              'Statutory regulatory coordination with official ministries and port authorities.',
              'Continuous system performance optimization without commercial resale or monetization.',
            ],
      },
      {
        icon: Clock,
        heading: isKu ? '٣. سیاسەتی پاراستن و ڕاگرتنی داتا' : isAr ? '٣. سياسة الاحتفاظ بالبيانات' : '3. Data Retention Policy',
        desc: isKu
          ? 'ئێمە خشتەیەکی ڕوونی کاتیی پەیڕەو دەکەین بۆ پاراستن و سڕینەوەی زانیارییەکان:'
          : isAr
          ? 'نتبع جداول زمنية محددة لحفظ وأرشفة البيانات وفق الضوابط القانونية:'
          : 'We enforce definitive operational retention schedules aligned with national archival regulations:',
        items: isKu
          ? [
              'داتای سەردان و لۆگە سەرەتایییەکان: دوای ٣٠ ڕۆژ بە شێوەیەکی ئۆتۆماتیکی لەناو دەبرێن.',
              'داواکارییەکانی پەیوەندی و فۆڕمەکان: تا کۆتاییهاتنی چارەسەری بابەتەکە دەمێننەوە و پاشان ئەرشیڤ دەکرێن.',
              'داتای مامەڵە فەرمییەکان: بەپێی یاساکانی گومرگ و دارایی عێراق لە داتاسەنتەری ناوخۆیی دەپارێزرێن.',
              'هەموو داتاکان بە ئەلگۆریتمی AES-256 لە کاتی وەستان و بە TLS 1.3 لە کاتی گواستنەوەدا کۆد دەکرێن.',
            ]
          : isAr
          ? [
              'سجلات الوصول المؤقتة: يتم إتلافها تلقائياً بعد مرور ٣٠ يوماً.',
              'بيانات الاستفسارات والطلبات: تُحفظ طيلة فترة المعالجة ثم تُؤرشف بأمان.',
              'سجلات المعاملات الرسمية: تُحفظ وفق متطلبات القوانين الجمركية والمالية العراقية في مراكز بيانات سيادية.',
              'تشفير كامل لكافة البيانات بواسطة معيار AES-256 أثناء الحفظ وTLS 1.3 أثناء النقل.',
            ]
          : [
              'Transient Access Logs: Automatically pruned after 30 days unless subject to active security forensics.',
              'Inquiry & Communications Submissions: Maintained strictly for the lifecycle of the resolution workflow.',
              'Statutory Records: Retained in accordance with Iraqi national auditing and customs statutory mandates.',
              'Universal AES-256 encryption at rest and TLS 1.3 in transit across all endpoints.',
            ],
      },
      {
        icon: ShieldCheck,
        heading: isKu ? '٤. مافەکانی بەکارهێنەر و دامەزراوەکان' : isAr ? '٤. حقوق المستخدمين والمؤسسات' : '4. User & Institutional Rights',
        desc: isKu
          ? 'بەپێی پێوەرە فەرمییەکان، بەکارهێنەران ئەم مافانەیان هەیە:'
          : isAr
          ? 'بموجب الأطر القانونية والمعايير الوطنية، يتمتع المستخدمون بالحقوق التالية:'
          : 'Operating entities retain the following sovereign rights regarding their submitted data:',
        items: isKu
          ? [
              'مافی دەستڕاگەیشتن: داواکردنی کۆپییەک لەو داتایانەی کە لەسەرت تۆمارکراون.',
              'مافی ڕاستکردنەوە: داواکردنی چاککردنی هەر زانیارییەکی هەڵە یان ناتەواو.',
              'مافی سڕینەوە: داواکردنی سڕینەوەی ئەو داتایانەی کە بەپێی یاسا پاراستنیان ئیجباری نییە.',
              'مافی تانەدان لە پرۆسەی مامەڵەکردن بە داتاکان لە ڕێگەی دەستەی یاسایی IDG.',
            ]
          : isAr
          ? [
              'حق الوصول: طلب نسخة معتمدة من البيانات المخزنة والمسجلة باسمكم.',
              'حق التصحيح: تصويب أي بيانات غير دقيقة أو منقوصة فوراً.',
              'حق الحذف: طلب إتلاف البيانات التي لا تلزم القوانين بالاحتفاظ بها.',
              'حق الاعتراض القانوني والتظلم عبر القنوات الاستشارية القانونية لبوابة العراق الرقمية.',
            ]
          : [
              'Right of Access: Request a verified transcript of institutional records held on file.',
              'Right of Rectification: Prompt correction of inaccurate or incomplete documentation.',
              'Right of Erasure: Deletion of records not subject to mandatory statutory retention laws.',
              'Right to Formal Inquiry via IDG legal compliance governance channels.',
            ],
      },
    ],
    contactSection: {
      title: isKu ? 'پەیوەندی لەگەڵ بەرپرسی پاراستنی زانیاری' : isAr ? 'التواصل مع مسؤول حماية البيانات' : 'Data Protection Officer Contact',
      desc: isKu
        ? 'بۆ هەر پرسیارێک یان داواکارییەکی تایبەت بە مافەکانی پاراستنی زانیاری، تکایە ڕاستەوخۆ پەیوەندی بکەن بە:'
        : isAr
        ? 'لأي استفسارات أو طلبات تتعلق بحماية البيانات وممارسة الحقوق القانونية، يرجى التواصل عبر:'
        : 'For any statutory inquiries regarding institutional data protection compliance, reach out directly to:',
      email: 'mustafa@aigateiraq.com',
      entity: 'Iraq Digital Gateway (IDG) — Sovereign Governance Taskforce',
      location: isKu ? 'هەولێر، هەرێمی کوردستان، عێراق' : isAr ? 'أربيل، إقليم كردستان، العراق' : 'Erbil, Kurdistan Region, Iraq',
    },
    backBtn: isKu ? 'گەڕانەوە بۆ پەڕەی سەرەکی' : isAr ? 'العودة للرئيسية' : 'Return to Home',
  };

  return (
    <div dir={isRtl ? 'rtl' : 'ltr'} lang={lang} className="min-h-screen bg-slate-50 text-slate-900">
      <Navbar lang={lang} t={t} onOpenContact={() => {}} />

      <main className="max-w-4xl mx-auto px-4 sm:px-6 py-8 sm:py-12 md:py-16">
        {/* Breadcrumb Navigation */}
        <Breadcrumbs
          items={[
            {
              label: isKu ? 'یاسایی' : isAr ? 'القانونية' : 'Legal',
            },
            {
              label: isKu ? 'پاراستنی نهێنی' : isAr ? 'الخصوصية' : 'Privacy Policy',
            },
          ]}
        />

        {/* Page Header */}
        <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-sm mb-8">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-xs font-bold text-blue-900 mb-3">
            <ShieldCheck className="w-3.5 h-3.5 text-blue-700" />
            <span>{content.badge}</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-2">
            {content.title}
          </h1>
          <p className="text-xs font-mono text-slate-500 mb-4">{content.updated}</p>
          <p className="text-sm sm:text-base text-slate-700 leading-relaxed">{content.intro}</p>
        </div>

        {/* Main Content Sections */}
        <div className="space-y-6">
          {content.sections.map((section, idx) => {
            const Icon = section.icon;
            return (
              <section key={idx} className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-sm">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-9 h-9 rounded-xl bg-slate-900 text-white flex items-center justify-center shrink-0">
                    <Icon className="w-5 h-5 text-blue-400" />
                  </div>
                  <h2 className="text-xl font-bold text-slate-900">{section.heading}</h2>
                </div>
                <p className="text-sm text-slate-600 mb-4 leading-relaxed">{section.desc}</p>
                <ul className="space-y-2.5">
                  {section.items.map((item, iIdx) => (
                    <li key={iIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                      <div className="w-1.5 h-1.5 rounded-full bg-blue-600 shrink-0 mt-2" />
                      <span className="leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </section>
            );
          })}

          {/* Contact Section */}
          <section className="bg-slate-900 text-white rounded-2xl p-6 sm:p-8 border border-slate-800 shadow-md">
            <h2 className="text-lg font-bold text-white mb-2 flex items-center gap-2">
              <Mail className="w-5 h-5 text-blue-400" />
              <span>{content.contactSection.title}</span>
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 mb-4 leading-relaxed">
              {content.contactSection.desc}
            </p>
            <div className="bg-slate-950/80 rounded-xl p-4 border border-slate-800 space-y-1.5 font-mono text-xs">
              <div className="flex items-center gap-2">
                <span className="text-slate-400">Email:</span>
                <a href={`mailto:${content.contactSection.email}`} className="text-blue-400 hover:underline">
                  {content.contactSection.email}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-slate-400">Entity:</span>
                <span className="text-slate-200">{content.contactSection.entity}</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-slate-400">Location:</span>
                <span className="text-slate-200">{content.contactSection.location}</span>
              </div>
            </div>
          </section>
        </div>
      </main>

      <Footer t={t} isRtl={isRtl} onOpenContact={() => {}} />
    </div>
  );
}
