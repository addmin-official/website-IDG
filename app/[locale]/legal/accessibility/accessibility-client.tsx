'use client';

import React from 'react';
import { translations, Language } from '@/lib/translations';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Breadcrumbs from '@/components/Breadcrumbs';
import { Eye, CheckCircle2, Keyboard, Monitor, Globe, ArrowLeft, ArrowRight, Sparkles, Mail } from 'lucide-react';
import Link from 'next/link';

export default function AccessibilityClient({ locale }: { locale: string }) {
  const lang: Language = locale === 'ar' || locale === 'en' ? locale : 'ku';
  const isRtl = lang === 'ku' || lang === 'ar';
  const t = translations[lang] || translations.ku;

  const isKu = lang === 'ku';
  const isAr = lang === 'ar';

  const content = {
    badge: isKu
      ? 'دەستڕاگەیشتنی گشتگیر — WCAG 2.2 AA'
      : isAr
      ? 'إمكانية الوصول الشامل — WCAG 2.2 AA'
      : 'Universal Accessibility — WCAG 2.2 AA',
    title: isKu
      ? 'بەیاننامەی دەستڕاگەیشتن'
      : isAr
      ? 'بيان إمكانية الوصول وسهولة الاستخدام'
      : 'Accessibility Statement',
    updated: isKu
      ? 'دواین نوێکردنەوە: ٩ی تشرینی یەکەمی ٢٠٢٦'
      : isAr
      ? 'آخر تحديث: ٩ تشرين الأول ٢٠٢٦'
      : 'Last Updated: October 9, 2026',
    intro: isKu
      ? 'دەروازەی دیجیتاڵیی عێراق (IDG) باوەڕی وایە ژێرخانی دیجیتاڵیی نیشتمانی دەبێت بۆ هەموو هاووڵاتیان و بەرپرسان بەردەست بێت بەبێ جیاوازی، لەوانەش خاوەن پێداویستییە تایبەتەکان، بە پەیڕەوکردنی ڕێنمایییەکانی دەستڕاگەیشتنی وێب (WCAG 2.2 AA).'
      : isAr
      ? 'تؤمن بوابة العراق الرقمية (IDG) بأن البنية التحتية الرقمية الوطنية حق متاح لكافة المواطنين والمؤسسات دون تمييز، بما يشمل ذوي الاحتياجات الخاصة، من خلال الالتزام الصارم بمعايير إمكانية الوصول للويب (WCAG 2.2 AA).'
      : 'Iraq Digital Gateway (IDG) holds that sovereign national digital infrastructure must be universally usable and inclusive for all citizens and operators, including individuals with disabilities, strictly adhering to the Web Content Accessibility Guidelines (WCAG 2.2 Level AA).',
    sections: [
      {
        icon: CheckCircle2,
        heading: isKu ? '١. ئامانجی پابەندبوون بە WCAG 2.2 ئاستی AA' : isAr ? '١. الامتثال لمعايير WCAG 2.2 المستوى AA' : '1. WCAG 2.2 Level AA Compliance Target',
        desc: isKu
          ? 'پلاتفۆرمەکانمان بەپێی چوار بنەمای سەرەکیی دەستڕاگەیشتن دیزاین کراون:'
          : isAr
          ? 'صُممت منصاتنا الرقمية بالاستناد إلى المبادئ الأربعة الجوهرية لإمكانية الوصول:'
          : 'Our platforms are architected to satisfy the four core pillars of digital accessibility:',
        items: isKu
          ? [
              'شایانی هەستپێکردن (Perceivable): ڕەنگ و کۆنتراستی بەهێز (کەمترین ڕێژە 4.5:1 بۆ دەقەکان) و پێشکەشکردنی دەقی جێگرەوە بۆ هەموو پێکهاتە بینراوەکان.',
              'شایانی کارپێکردن (Operable): تەواوی ڕووکارەکان لە ڕێگەی تەختەکلیل (Keyboard)ەوە کار دەکەن بەبێ پێویستی بە ماوس.',
              'شایانی تێگەیشتن (Understandable): داڕشتنی ڕوون و هاوئاهەنگ، فۆرماتی ڕوونی نامەکان و پەیامەکانی هەڵە بە زمانی پاراو.',
              'پتەو (Robust): کۆدکراو بە پێوەرە ستانداردەکانی HTML5 و WAI-ARIA بۆ کارکردنی بێ کێشە لەگەڵ ئامێرە یارمەتیدەرەکان.',
            ]
          : isAr
          ? [
              'قابلية الإدراك (Perceivable): نسب تباين لوني فائقة (بحد أدنى 4.5:1 للنصوص) وتوفير نصوص بديلة لكافة العناصر المرئية.',
              'قابلية التشغيل (Operable): إمكانية تصفح واستخدام كافة الأنظمة والوظائف عبر لوحة المفاتيح بالكامل دون فأرة.',
              'قابلية الفهم (Understandable): هيكلة لغوية واضحة، رسائل توجيهية صريحة، ومعالجة أخطاء بديهية بلغة فصيحة.',
              'المتانة والصلابة (Robust): توافق تام مع معايير WAI-ARIA وHTML5 الدلالية لضمان التوافق السلس مع قارئات الشاشة.',
            ]
          : [
              'Perceivable: High contrast ratios (minimum 4.5:1 for body text) and explicit text alternatives for non-text assets.',
              'Operable: 100% of functional components operable purely via keyboard navigation with visible focus rings.',
              'Understandable: Consistent navigation patterns, predictable interactions, and explicit validation messaging.',
              'Robust: Semantic HTML5 and WAI-ARIA conformance ensuring compatibility with modern assistive technologies.',
            ],
      },
      {
        icon: Globe,
        heading: isKu ? '٢. پشتگیریی فرەزمانی و ئاراستەی تێکست (RTL/LTR)' : isAr ? '٢. الدعم متعدد اللغات واتجاه النصوص (RTL/LTR)' : '2. Multi-Lingual & Bidirectional Layouts',
        desc: isKu
          ? 'تایبەتمەندییە زمانییە ناوخۆیییەکان بە تەواوی ڕەچاو کراون:'
          : isAr
          ? 'مراعاة شاملة للخصوصيات اللغوية والاتجاهية لجميع مكونات المجتمع العراقي:'
          : 'Comprehensive native language integration honoring national linguistic diversity:',
        items: isKu
          ? [
              'پشتگیریی تەواوی کوردیی سۆرانی (ku) بە فۆنت و تایپۆگرافی تایبەت و ئاراستەی ڕاست بۆ چەپ (RTL).',
              'پشتگیریی تەواوی عەرەبی (ar) بە فۆنتی ستانداردی عێراقی و جێبەجێکردنی هاوسەنگی RTL.',
              'پشتگیریی تەواوی ئینگلیزی (en) بۆ پەیوەندییە نێودەوڵەتییەکان بە ئاراستەی چەپ بۆ ڕاست (LTR).',
              'گۆڕینی ڕاستەوخۆ و داینامیکی ئاراستە، سکڕۆڵبار، و پەیامی دەنگی بەپێی زمانی هەڵبژێردراو.',
            ]
          : isAr
          ? [
              'دعم كامل للغة الكردية السورانية (ku) مع ضبط اتجاه RTL وخطوط مخصصة مريحة للقراءة.',
              'دعم كامل ومتقن للغة العربية (ar) مع معايير طباعية مؤسسية واتجاه RTL سلس.',
              'دعم كامل للغة الإنجليزية (en) للتعاملات والشركاء الدوليين مع اتجاه LTR.',
              'تبديل فوري ومتزامن لاتجاه الواجهات وشريط التمرير ومحاذاة القوائم عند تغيير اللغة.',
            ]
          : [
              'Native Kurdish Sorani (`ku`) typography, tailored letter-spacing, and bidirectional RTL layout alignment.',
              'Native Arabic (`ar`) typography using institutional Arabic font hierarchies and native RTL layout mirroring.',
              'English (`en`) international alignment with seamless LTR component inversion.',
              'Dynamic synchronization of document `lang` and `dir` attributes across routing transitions.',
            ],
      },
      {
        icon: Keyboard,
        heading: isKu ? '٣. گەشتکردن بە تەختەکلیل و ئامێرە یارمەتیدەرەکان' : isAr ? '٣. التنقل بلوحة المفاتيح وقارئات الشاشة' : '3. Keyboard Navigation & Assistive Tools',
        desc: isKu
          ? 'تەواوی بەشەکان بۆ بەکارهێنەرانی کەمئەندام ئاسانکراون:'
          : isAr
          ? 'تيسير كامل لتجربة التصفح لمستخدمي التقنيات المساعدة:'
          : 'End-to-end optimizations ensuring seamless assistive technology interoperability:',
        items: isKu
          ? [
              'بەستەری بازدان بۆ ناوەڕۆکی سەرەکی (Skip to Main Content) بۆ کەمکردنەوەی ماندووبوون.',
              'نیشاندەری ڕوونی فوکەس (Focus Indicators) بۆ هەموو دوگمە، فۆڕم و بەستەرەکان.',
              'گونجاندنی تەواو لەگەڵ قارئەکانی شاشە (Screen Readers) وەک NVDA، JAWS، و VoiceOver.',
              'ڕێگری لە داخرانی بەکارهێنەر لەناو مۆداڵ و پەنجەرە کاتییەکان بە کلیلەکانی Tab و Escape.',
            ]
          : isAr
          ? [
              'رابط سريع لتخطي القوائم والانتقال المباشر للمحتوى الرئيسي (Skip to Content).',
              'مؤشرات تركيز بصرية ساطعة ومميزة (Focus Indicators) على كافة الأزرار والروابط.',
              'توافقية هندسية تم اختبارها مع أشهر قارئات الشاشة مثل NVDA وJAWS وVoiceOver.',
              'إمكانية إغلاق النوافذ المنبثقة فوراً عبر مفتاح Escape مع حصر التركيز المنطقي داخل المودال.',
            ]
          : [
              'Skip-to-main-content anchor providing instantaneous navigation past repetitive header landmarks.',
              'Prominent high-visibility focus indicators across all interactive form controls and hyperlinks.',
              'Rigorous screen reader testing and validation against NVDA, JAWS, and Apple VoiceOver.',
              'Modal dialog focus trapping with seamless escape-key dismissal preventing keyboard trapping.',
            ],
      },
      {
        icon: Eye,
        heading: isKu ? '٤. پابەندبوون بە چاکسازیی بەردەوام' : isAr ? '٤. الالتزام بالتحسين الهندسي المستمر' : '4. Continuous Improvement Commitment',
        desc: isKu
          ? 'دەستڕاگەیشتن پرۆسەیەکی بەردەوامە لە دەروازەی دیجیتاڵیی عێراق:'
          : isAr
          ? 'إمكانية الوصول عملية مستمرة ومتطورة في استراتيجية بوابة العراق الرقمية:'
          : 'Accessibility at IDG represents an active, iterative engineering discipline:',
        items: isKu
          ? [
              'ئەنجامدانی پشکنینی ئۆتۆماتیکی مانگانە بە کەرەستەکانی Axe-core و Lighthouse.',
              'پشکنینی دەستیی ئەندازیاری لەلایەن شارەزایانی UX پێش بڵاوکردنەوەی هەر وەشانێکی نوێ.',
              'وەرگرتنی تێبینی و پێشنیارەکانی هاووڵاتیان و کارمەندان بۆ بەرزکردنەوەی کوالیتی پلاتفۆرمەکان.',
            ]
          : isAr
          ? [
              'إجراء فحوصات تدقيقية مؤتمتة شهرياً بواسطة أدوات Axe-core وGoogle Lighthouse.',
              'اختبارات يدوية يقوم بها مهندسو تجربة المستخدم قبل إطلاق أي تحديث أو منصة جديدة.',
              'استقبال الملاحظات البناءة من المواطنين والمؤسسات لتحسين بيئة النفاذ الرقمي.',
            ]
          : [
              'Monthly automated audits leveraging Axe-core and Lighthouse accessibility CI checks.',
              'Manual assistive evaluations conducted prior to each major product version deployment.',
              'Open institutional feedback loop actively resolving citizen-reported accessibility barriers.',
            ],
      },
    ],
    contactSection: {
      title: isKu ? 'ڕاپۆرتکردنی کێشەکانی دەستڕاگەیشتن' : isAr ? 'الإبلاغ عن صعوبات الوصول' : 'Accessibility Support Contact',
      desc: isKu
        ? 'ئەگەر لە کاتی بەکارهێنانی ئەم ماڵپەڕەدا ڕووبەڕووی هەر بەربەستێکی دەستڕاگەیشتن بوویتەوە، تکایە ڕاستەوخۆ ئاگادارمان بکەرەوە لە ڕێگەی:'
        : isAr
        ? 'إذا واجهت أي صعوبة تقنية أو حاجز يعيق وصولك لأي جزء من الموقع، يرجى إبلاغنا فوراً عبر:'
        : 'If you encounter any digital barrier preventing full utilization of our institutional portals:',
      email: 'mustafa@aigateiraq.com',
      entity: 'Iraq Digital Gateway (IDG) — Digital Inclusion & Accessibility Office',
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
              label: isKu ? 'دەستڕاگەیشتن' : isAr ? 'إمكانية الوصول' : 'Accessibility Statement',
            },
          ]}
        />

        {/* Page Header */}
        <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-sm mb-8">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-xs font-bold text-blue-900 mb-3">
            <Eye className="w-3.5 h-3.5 text-blue-700" />
            <span>{content.badge}</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-2">
            {content.title}
          </h1>
          <p className="text-xs font-mono text-slate-500 mb-4">{content.updated}</p>
          <p className="text-sm sm:text-base text-slate-700 leading-relaxed">{content.intro}</p>
        </div>

        {/* Sections */}
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
