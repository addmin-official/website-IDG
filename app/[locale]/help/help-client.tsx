'use client';

import React, { useState, useMemo } from 'react';
import Link from 'next/link';
import dynamic from 'next/dynamic';
import { translations, Language } from '@/lib/translations';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Breadcrumbs from '@/components/Breadcrumbs';
import EmptyState from '@/components/ui/EmptyState';
import {
  BookOpen,
  Search,
  FileDown,
  Video,
  HelpCircle,
  Mail,
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
  ArrowLeft,
  ChevronDown,
  Download,
  ExternalLink,
  Layers,
  Database,
  Lock,
  Cpu,
  Compass,
  Keyboard,
} from 'lucide-react';
import { SHORTCUTS } from '@/lib/keyboard-shortcuts';

const ContactModal = dynamic(() => import('@/components/ContactModal'), {
  ssr: false,
});

const VideoModal = dynamic(() => import('@/components/VideoModal'), {
  ssr: false,
});

interface GlossaryTerm {
  id: string;
  term: Record<Language, string>;
  category: Record<Language, string>;
  definition: Record<Language, string>;
  icon: React.ComponentType<{ className?: string }>;
}

const GLOSSARY_TERMS: GlossaryTerm[] = [
  {
    id: 'data-sovereignty',
    term: {
      ku: 'سەروەریی داتا (Data Sovereignty)',
      ar: 'سيادة البيانات (Data Sovereignty)',
      en: 'Data Sovereignty',
    },
    category: {
      ku: 'ئاسایش و یاسا',
      ar: 'الأمن والتشريعات',
      en: 'Security & Legal',
    },
    definition: {
      ku: 'چەمکی پاراستن و هەڵگرتنی تەواوی داتای هاووڵاتییان و دامەزراوە نیشتمانییەکان لە ناوخۆی سنووری جوگرافیی عێراق و لەژێر دەسەڵاتی دادوەریی ناوخۆییدا بەبێ وابەستەیی بە دەرەوە.',
      ar: 'مبدأ إبقاء كافة البيانات المؤسسية والوطنية وتخزينها حصرياً داخل الحدود الجغرافية للعراق، وخضوعها حصراً للولاية القضائية الوطنية والتشريعات السيادية.',
      en: 'The principle that digital data remains strictly governed by the sovereign jurisdiction, laws, and territorial borders of Iraq, free from foreign extra-territorial dependencies.',
    },
    icon: Database,
  },
  {
    id: 'nsw',
    term: {
      ku: 'دەروازەی نیشتمانیی یەکگرتوو (NSW)',
      ar: 'نافذة العراق الموحدة للتجارة (NSW)',
      en: 'Iraq National Single Window (NSW)',
    },
    category: {
      ku: 'پلاتفۆرمی نیشتمانی',
      ar: 'المنصات الوطنية',
      en: 'National Platforms',
    },
    definition: {
      ku: 'ژێرخانێکی دیجیتاڵیی سەروەرییە کە گشت دەروازە سنورییەکان، گومرگەکان، بانکەکان و کۆمپانیاکانی گواستنەوە دەبەستێتەوە بە سیستمێکی ناوەندیی کاغەزبێژ بۆ ئاسانکاری و چاودێریی بازرگانی.',
      ar: 'بنية تحتية رقمية استراتيجية تربط المنافذ الحدودية، الجمارك، والمؤسسات المصرفية في بيئة لا ورقية متكاملة تسهم في تسريع التجارة وحوكمة الإيرادات.',
      en: 'A unified single-window digital infrastructure connecting customs, borders, and regulatory bodies into an end-to-end paperless trade ecosystem.',
    },
    icon: Layers,
  },
  {
    id: 'ai-gate',
    term: {
      ku: 'دەروازەی ژیریی دەستکرد (AI Gate Iraq)',
      ar: 'بوابة الذكاء الاصطناعي السيادية (AI Gate)',
      en: 'AI Gate Iraq',
    },
    category: {
      ku: 'تەکنەلۆژیای ژیریی دەستکرد',
      ar: 'الذكاء الاصطناعي',
      en: 'Applied AI',
    },
    definition: {
      ku: 'مۆدێلی زمانیی سەربەخۆ بۆ زمانەکانی کوردی و عەرەبی کە ڕاهێنراون لەسەر سەرچاوەی باوەڕپێکراو لەژێر چاودێریی مرۆیی (Human Oversight) و ستانداردی ئاسایشی نیشتمانی.',
      ar: 'نماذج لغوية تأسيسية للغتين الكردية والعربية تعمل وفق ضوابط الإشراف البشري الصارم والحفاظ على الخصوصية دون تسريب البيانات خارج المراكز السيادية.',
      en: 'Sovereign applied AI models natively engineered for Arabic and Kurdish languages under firm human supervision and sovereign privacy guards.',
    },
    icon: Cpu,
  },
  {
    id: 'zero-trust',
    term: {
      ku: 'تەلارسازیی متمانەی سفر (Zero-Trust Architecture)',
      ar: 'معمارية انعدام الثقة (Zero-Trust)',
      en: 'Zero-Trust Architecture',
    },
    category: {
      ku: 'ئاسایشی ئەلیکترۆنی',
      ar: 'الأمن السيبراني',
      en: 'Cybersecurity',
    },
    definition: {
      ku: 'مۆدێلێکی ئەندازیارییە کە لەسەر بنەمای «هەرگیز متمانە مەکە، هەمیشە پشتڕاست بکەرەوە» کار دەکات؛ هەموو پەیوەندییەک و بەکارهێنەرێک بە بەردەوامی دەپشکنرێت تەنانەت لە ناوخۆی تۆڕەکەشدا.',
      ar: 'نموذج أمني يعتمد مبدأ "لا تثق بأحد، وتحقق دائماً"، حيث يخضع كل طلب وصول وكل جهاز لتحقق مستمر وتشفير شامل بغض النظر عن موقعه الشبكي.',
      en: 'A modern security paradigm predicated on "never trust, always verify", enforcing continuous authentication, least-privilege access, and end-to-end cryptographic defense.',
    },
    icon: Lock,
  },
  {
    id: 'accountable-owner',
    term: {
      ku: 'خاوەنی بەرپرسیار (Accountable Owner)',
      ar: 'الجهة المسؤولة الخاضعة للمساءلة (Accountable Owner)',
      en: 'Accountable Owner',
    },
    category: {
      ku: 'حوکمڕانی و شەفافیەت',
      ar: 'الحوكمة والمساءلة',
      en: 'Governance Matrix',
    },
    definition: {
      ku: 'ئەو کەسە دیاریکراوە یان یەکەیەی بەرپرسیارێتی تەواوی یاسایی، ئۆپەراسیۆنی و ئەندازیاری لەئەستۆ دەگرێت بۆ دەرەنجامی هەر سیستم یان بڕیارێکی تەکنەلۆژی لە IDG.',
      ar: 'المسؤول أو الوحدة المؤسسية المحددة بالاسم والمكلفة بتحمل المسؤولية القانونية والهندسية الكاملة عن أداء ونتائج ومخاطر أي نظام تقني تابع للمجموعة.',
      en: 'The designated lead or entity holding singular, non-delegable legal and technical responsibility for the execution, integrity, and risks of a digital asset.',
    },
    icon: ShieldCheck,
  },
  {
    id: 'fellowship',
    term: {
      ku: 'هاوبەشی نیشتمانی (National Fellowship)',
      ar: 'الزمالة الوطنية للابتكار (National Fellowship)',
      en: 'National Fellowship',
    },
    category: {
      ku: 'بەهرە و پێگەیاندن',
      ar: 'الكفاءات الوطنية',
      en: 'Talent Stewardship',
    },
    definition: {
      ku: 'بەرنامەیەکی خولیی توندوتۆڵی ئەندازیارییە بۆ ڕاهێنان و ئامادەکردنی باشترین بەهرە دیجیتاڵییەکانی عێراق و کوردستان بۆ بەڕێوەبردنی سیستمە سەروەرییەکان.',
      ar: 'برنامج تدريبي ونخبوي مكثف يهدف إلى بناء القيادات الهندسية والتقنية المحلية القادرة على تشغيل وإدارة البنى التحتية التكنولوجية الوطنية المستقلة.',
      en: 'An institutional residency track designed to mentor and empower the next generation of domestic Iraqi software engineers and cybersecurity leaders.',
    },
    icon: Compass,
  },
];

interface GuideItem {
  id: string;
  title: Record<Language, string>;
  category: Record<Language, string>;
  size: string;
  pages: number;
  ref: string;
}

const DOWNLOADABLE_GUIDES: GuideItem[] = [
  {
    id: 'guide-blueprint',
    title: {
      ku: 'ڕێبەری تەلارسازیی سەروەریی IDG (Sovereign Architecture Blueprint)',
      ar: 'مخطط المعمارية التكنولوجية السيادية لمجموعة IDG',
      en: 'IDG Sovereign Architecture Blueprint & Standards',
    },
    category: {
      ku: 'تەلارسازیی سیستم',
      ar: 'المعمارية المؤسسية',
      en: 'Architecture',
    },
    size: '12.4 MB',
    pages: 48,
    ref: 'IDG-ARCH-2026-V2',
  },
  {
    id: 'guide-data-governance',
    title: {
      ku: 'میساقی حوکمڕانی و پۆلێنکردنی داتای نیشتمانی',
      ar: 'ميثاق حوكمة وتصنيف البيانات الوطنية العراقية',
      en: 'National Data Governance & Classification Charter',
    },
    category: {
      ku: 'حوکمڕانی و یاسا',
      ar: 'الحوكمة والسياسات',
      en: 'Governance',
    },
    size: '4.8 MB',
    pages: 32,
    ref: 'IDG-GOV-DATA-2026',
  },
  {
    id: 'guide-iso27001',
    title: {
      ku: 'ڕێنمایی جێبەجێکردنی ئاسایشی زانیاری و ستانداردی ISO-27001',
      ar: 'دليل الامتثال لمعايير أمن المعلومات الدولية ISO-27001',
      en: 'Information Security & ISO-27001 Implementation Manual',
    },
    category: {
      ku: 'ئاسایشی ئەلیکترۆنی',
      ar: 'الأمن السيبراني',
      en: 'Security',
    },
    size: '3.2 MB',
    pages: 26,
    ref: 'IDG-SEC-ISO-27001',
  },
  {
    id: 'guide-nsw-spec',
    title: {
      ku: 'تایبەتمەندییە تەکنیکییەکانی پەیوەستبوون بە دەروازەی NSW',
      ar: 'المواصفات الفنية للربط الشبكي بنافذة العراق الموحدة (NSW)',
      en: 'Iraq National Single Window (NSW) Technical Integration Specs',
    },
    category: {
      ku: 'تێکەڵکردنی سیستم',
      ar: 'التكامل التقني',
      en: 'Integration',
    },
    size: '6.1 MB',
    pages: 54,
    ref: 'IDG-NSW-INT-09',
  },
];

export default function HelpClient({ locale }: { locale: string }) {
  const [searchQuery, setSearchQuery] = useState('');
  const [downloadNotice, setDownloadNotice] = useState<string | null>(null);
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [activeFaq, setActiveFaq] = useState<number | null>(null);
  const [selectedVideo, setSelectedVideo] = useState<{ videoUrl: string; title: string } | null>(null);

  const lang: Language = locale === 'ar' || locale === 'en' ? locale : 'ku';
  const isRtl = lang === 'ku' || lang === 'ar';
  const t = translations[lang] || translations.ku;
  const ArrowIcon = isRtl ? ArrowLeft : ArrowRight;

  const filteredGlossary = useMemo(() => {
    const q = searchQuery.trim().toLowerCase();
    if (!q) return GLOSSARY_TERMS;
    return GLOSSARY_TERMS.filter((item) => {
      const matchTerm = Object.values(item.term).some((v) => v.toLowerCase().includes(q));
      const matchDef = Object.values(item.definition).some((v) => v.toLowerCase().includes(q));
      const matchCat = Object.values(item.category).some((v) => v.toLowerCase().includes(q));
      return matchTerm || matchDef || matchCat;
    });
  }, [searchQuery]);

  const filteredGuides = useMemo(() => {
    const q = searchQuery.trim().toLowerCase();
    if (!q) return DOWNLOADABLE_GUIDES;
    return DOWNLOADABLE_GUIDES.filter((item) => {
      const matchTitle = Object.values(item.title).some((v) => v.toLowerCase().includes(q));
      const matchCat = Object.values(item.category).some((v) => v.toLowerCase().includes(q));
      return matchTitle || matchCat || item.ref.toLowerCase().includes(q);
    });
  }, [searchQuery]);

  const handleDownload = (guide: GuideItem) => {
    const notice =
      lang === 'ku'
        ? `داگرتنی «${guide.title[lang]}» دەستیپێکرد (${guide.size})`
        : lang === 'ar'
        ? `بدأ تنزيل «${guide.title[lang]}» (${guide.size})`
        : `Download started: ${guide.title[lang]} (${guide.size})`;
    setDownloadNotice(notice);
    setTimeout(() => {
      setDownloadNotice(null);
    }, 4500);
  };

  const faqItems = [
    {
      q: {
        ku: 'چۆن پەیوەندی بە تیمی سەروەریی داتا یان گەشەپێدەرانی IDG بکەم؟',
        ar: 'كيف يمكن التواصل مع فريق سيادة البيانات أو مطوري IDG؟',
        en: 'How do I contact IDG sovereign data or development teams?',
      },
      a: {
        ku: 'دەتوانیت لە ڕێگەی فۆرمی فەرمی پەیوەندی، ئیمەیڵی دامەزراوەیی خۆت بنێریت، یان سەردانی بەشی پەیوەندییە فەرمییەکان بکەیت.',
        ar: 'يمكنك استخدام نموذج التواصل الرسمي بإدخال بريدك المؤسسي، أو التواصل مباشرة عبر قنوات الدعم المعتمدة.',
        en: 'You can submit an inquiry via our institutional contact desk using your official organizational email.',
      },
    },
    {
      q: {
        ku: 'ئایا ڕێبەرنامە و بەڵگەنامە تەکنیکییەکان پێویستیان بە مۆڵەتی پێشوەختە هەیە؟',
        ar: 'هل تتطلب الوثائق الفنية تصريحاً مسبقاً قبل التنزيل؟',
        en: 'Do technical blueprints require prior clearance for download?',
      },
      a: {
        ku: 'بەڵگەنامە گشتییەکان بۆ سەرجەم وەزارەت و هاوبەشە تەکنەلۆژییەکان کراوەن. بەڵگەنامە تایبەتە سەربازی یان هەستیارەکان لە ڕێگەی کلیلی پارێزراوەوە دەدرێن.',
        ar: 'الوثائق الإرشادية العامة متاحة مباشرة، بينما تتطلب أدلة الربط الحساسة تصريحاً أمنياً عبر المفاتيح المؤسسية.',
        en: 'Public architecture standards are accessible directly, while classified integration keys require institutional authorization.',
      },
    },
  ];

  return (
    <div
      dir={isRtl ? 'rtl' : 'ltr'}
      lang={lang}
      className="min-h-screen bg-[#060D1A] text-slate-100 overflow-x-hidden w-full max-w-full selection:bg-[#1D5BD8] selection:text-white"
    >
      <Navbar
        lang={lang}
        onLanguageChange={() => {}}
        t={t}
        onOpenContact={() => setIsContactOpen(true)}
      />

      <main id="main-content" className="pt-24 pb-20">
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-[#0B172E] to-[#060D1A] border-b border-[#102447] py-14 sm:py-20 px-4 sm:px-6">
          <div className="max-w-5xl mx-auto mb-4">
            <Breadcrumbs
              items={[
                {
                  label: lang === 'ku' ? 'ناوەندی هاوکاری' : lang === 'ar' ? 'مركز المساعدة' : 'Help Center',
                },
              ]}
            />
          </div>
          <div className="max-w-5xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-[#60A5FA] text-xs font-semibold mb-4">
              <BookOpen className="w-3.5 h-3.5" />
              <span>
                {lang === 'ku'
                  ? 'ناوەندی هاوکاری و بەڵگەنامەکان'
                  : lang === 'ar'
                  ? 'مركز المساعدة والتوثيق السيادي'
                  : 'Help Center & Sovereign Documentation'}
              </span>
            </div>

            <h1 className="text-2xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-4">
              {lang === 'ku'
                ? 'چۆن دەتوانین هاوکاریت بکەین؟'
                : lang === 'ar'
                ? 'كيف يمكننا مساعدتك اليوم؟'
                : 'How can we help you today?'}
            </h1>

            <p className="max-w-2xl mx-auto text-sm sm:text-base text-slate-300 leading-relaxed mb-8">
              {lang === 'ku'
                ? 'فەرهەنگی زاراوەکان، ڕێبەرە فەرمییەکان، بەڵگەنامەی دابەزێنراو، و فێرکارییە تەکنیکییەکانی دەروازەی دیجیتاڵیی عێراق (IDG).'
                : lang === 'ar'
                ? 'قاموس المصطلحات، الأدلة الفنية القابلة للتنزيل، والشروحات التوضيحية الخاصة ببوابة العراق الرقمية.'
                : 'Search terms, downloadable whitepapers, video tutorials, and institutional guidance for IDG platforms.'}
            </p>

            {/* Global Search Bar */}
            <div className="max-w-xl mx-auto relative">
              <div className="absolute inset-y-0 start-0 ps-4 flex items-center pointer-events-none text-slate-400">
                <Search className="w-4 h-4" />
              </div>
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder={
                  lang === 'ku'
                    ? 'بگەڕێ لە زاراوەکان، بەڵگەنامەکان، یان فێرکارییەکان...'
                    : lang === 'ar'
                    ? 'ابحث في المصطلحات، الأدلة، أو الفيديوهات...'
                    : 'Search glossary terms, downloadable guides, or tutorials...'
                }
                className="input-base rounded-xl ps-11 pe-10 py-3.5 shadow-lg"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute inset-y-0 end-0 pe-4 flex items-center text-xs text-slate-400 hover:text-white"
                >
                  ✕
                </button>
              )}
            </div>
          </div>
        </section>

        {/* Download notification toast */}
        {downloadNotice && (
          <div className="fixed bottom-6 start-6 end-6 sm:start-auto sm:end-6 sm:max-w-md bg-[#052e16] border border-[#059669] text-white p-4 rounded-xl shadow-2xl z-50 flex items-center gap-3 animate-in fade-in slide-in-from-bottom-4">
            <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
            <div className="text-xs sm:text-sm font-medium">{downloadNotice}</div>
          </div>
        )}

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16 mt-12">
          {/* SECTION 1: Glossary of Terms */}
          <section id="glossary">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-8 border-b border-[#102447] pb-4">
              <div>
                <h2 className="text-xl sm:text-2xl font-bold text-white flex items-center gap-2.5">
                  <BookOpen className="w-5 h-5 text-[#60A5FA]" />
                  <span>
                    {lang === 'ku'
                      ? 'فەرهەنگی زاراوە فەرمییەکانی IDG'
                      : lang === 'ar'
                      ? 'قاموس المصطلحات التكنولوجية المعتمدة'
                      : 'Official IDG Glossary of Terms'}
                  </span>
                </h2>
                <p className="text-xs sm:text-sm text-slate-400 mt-1">
                  {lang === 'ku'
                    ? 'ڕوونکردنەوەی فەرمی بۆ سەرجەم چەمک و زاراوە سەروەرییەکان بەپێی بەڵگەنامەی دامەزراندن.'
                    : lang === 'ar'
                    ? 'التعريفات الدقيقة للمفاهيم التقنية والسيادية الواردة في وثائق المجموعة.'
                    : 'Clear institutional definitions for sovereign digital terminology.'}
                </p>
              </div>
              <span className="text-xs text-slate-400 font-mono self-start sm:self-center">
                {filteredGlossary.length} {lang === 'ku' ? 'زاراوە' : lang === 'ar' ? 'مصطلح' : 'terms'}
              </span>
            </div>

            {filteredGlossary.length === 0 ? (
              <EmptyState
                title={
                  lang === 'ku'
                    ? 'هیچ زاراوەیەک نەدۆزرایەوە'
                    : lang === 'ar'
                    ? 'لم يتم العثور على مصطلحات مطابقة'
                    : 'No matching glossary terms found'
                }
                description={
                  lang === 'ku'
                    ? 'تکایە گەڕانەکەت بگۆڕە یان فلتەرەکان لابەرە بۆ بینینی سەرجەم زاراوەکان.'
                    : lang === 'ar'
                    ? 'يرجى تغيير عبارة البحث لعرض كافة المصطلحات المتاحة.'
                    : 'Try another search term or clear the filter.'
                }
                actionLabel={lang === 'ku' ? 'سڕینەوەی گەڕان' : lang === 'ar' ? 'مسح البحث' : 'Clear search'}
                onAction={() => setSearchQuery('')}
              />
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {filteredGlossary.map((item) => {
                  const Icon = item.icon;
                  return (
                    <div
                      key={item.id}
                      className="bg-[#0B172E] border border-[#102447] hover:border-[#1D5BD8]/50 rounded-2xl p-6 transition-all shadow-sm hover:shadow-lg flex flex-col justify-between"
                    >
                      <div>
                        <div className="flex items-center justify-between mb-4">
                          <span className="text-[11px] font-bold uppercase tracking-wider px-2.5 py-1 bg-[#102447] border border-[#193B73] rounded-md text-[#60A5FA]">
                            {item.category[lang]}
                          </span>
                          <div className="w-8 h-8 rounded-lg bg-[#060D1A] border border-[#102447] flex items-center justify-center text-slate-400">
                            <Icon className="w-4 h-4" />
                          </div>
                        </div>

                        <h3 className="text-base font-bold text-white mb-2 leading-snug">
                          {item.term[lang]}
                        </h3>

                        <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                          {item.definition[lang]}
                        </p>
                      </div>

                      <div className="pt-4 mt-4 border-t border-[#102447] flex items-center justify-between text-[11px] text-slate-500 font-mono">
                        <span>REF: {item.id.toUpperCase()}</span>
                        <span className="text-emerald-400">VERIFIED</span>
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </section>

          {/* SECTION 2: Downloadable Guides (PDFs) */}
          <section id="guides">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-8 border-b border-[#102447] pb-4">
              <div>
                <h2 className="text-xl sm:text-2xl font-bold text-white flex items-center gap-2.5">
                  <FileDown className="w-5 h-5 text-emerald-400" />
                  <span>
                    {lang === 'ku'
                      ? 'بەڵگەنامە و ڕێبەرە فەرمییە دابەزێنراوەکان (PDF)'
                      : lang === 'ar'
                      ? 'الأدلة والوثائق الفنية المعتمدة للتنزيل (PDF)'
                      : 'Official Downloadable Guides & Blueprints (PDF)'}
                  </span>
                </h2>
                <p className="text-xs sm:text-sm text-slate-400 mt-1">
                  {lang === 'ku'
                    ? 'پوختەی بەڵگەنامە ئەندازیارییەکان، میساقی سەروەریی داتا، و ستانداردەکان بە فۆرماتی فەرمی.'
                    : lang === 'ar'
                    ? 'ملفات تفصيلية بصيغة PDF تتضمن معايير المعمارية وسياسات أمن المعلومات.'
                    : 'Downloadable PDF technical architecture standards and governance whitepapers.'}
                </p>
              </div>
            </div>

            {filteredGuides.length === 0 ? (
              <EmptyState
                title={
                  lang === 'ku'
                    ? 'هیچ بەڵگەنامەیەک نەدۆزرایەوە'
                    : lang === 'ar'
                    ? 'لم يتم العثور على وثائق مطابقة'
                    : 'No downloadable guides found'
                }
                description={
                  lang === 'ku'
                    ? 'هیچ ڕێبەرنامەیەک بەم ناوە نییە. دەتوانیت گەڕانەکەت پاک بکەیتەوە.'
                    : lang === 'ar'
                    ? 'يرجى التأكد من اسم الوثيقة أو مسح فلتر البحث.'
                    : 'No documentation matched your query.'
                }
                actionLabel={lang === 'ku' ? 'سڕینەوەی گەڕان' : lang === 'ar' ? 'مسح البحث' : 'Clear search'}
                onAction={() => setSearchQuery('')}
              />
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {filteredGuides.map((guide) => (
                  <div
                    key={guide.id}
                    className="bg-[#0B172E] border border-[#102447] hover:border-emerald-500/40 rounded-2xl p-5 flex flex-col justify-between transition-all"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-3">
                        <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 bg-emerald-950/60 border border-emerald-800/40 text-emerald-400 rounded">
                          {guide.category[lang]}
                        </span>
                        <span className="text-xs font-mono text-slate-400">
                          {guide.ref}
                        </span>
                      </div>

                      <h3 className="text-sm sm:text-base font-bold text-white mb-2 leading-snug">
                        {guide.title[lang]}
                      </h3>

                      <div className="flex items-center gap-3 text-xs text-slate-400 mt-2">
                        <span>{guide.size}</span>
                        <span>•</span>
                        <span>{guide.pages} {lang === 'ku' ? 'لاپەڕە' : lang === 'ar' ? 'صفحة' : 'pages'}</span>
                        <span>•</span>
                        <span className="text-slate-300 font-mono">PDF</span>
                      </div>
                    </div>

                    <div className="pt-4 mt-4 border-t border-[#102447] flex items-center justify-between">
                      <span className="text-[11px] text-slate-500 font-medium">
                        {lang === 'ku' ? 'وەشانی فەرمی' : lang === 'ar' ? 'نسخة رسمية معتمدة' : 'Official release'}
                      </span>
                      <button
                        onClick={() => handleDownload(guide)}
                        className="inline-flex items-center gap-1.5 px-3.5 py-1.5 bg-[#102447] hover:bg-[#193B73] text-emerald-300 text-xs font-bold rounded-lg border border-emerald-500/30 transition-colors cursor-pointer"
                      >
                        <Download className="w-3.5 h-3.5" />
                        <span>{lang === 'ku' ? 'داگرتن' : lang === 'ar' ? 'تنزيل' : 'Download'}</span>
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </section>

          {/* SECTION 3: Video Tutorials */}
          <section id="tutorials">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-8 border-b border-[#102447] pb-4">
              <div>
                <h2 className="text-xl sm:text-2xl font-bold text-white flex items-center gap-2.5">
                  <Video className="w-5 h-5 text-amber-400" />
                  <span>
                    {t.help?.tutorials.title ||
                      (lang === 'ku'
                        ? 'ڕاهێنان و فێرکارییەکان'
                        : lang === 'ar'
                        ? 'التدريب والدروس التعليمية'
                        : 'Training & Tutorials')}
                  </span>
                </h2>
                <p className="text-xs sm:text-sm text-slate-400 mt-1">
                  {t.help?.tutorials.subtitle ||
                    (lang === 'ku'
                      ? 'فێرکارییە ڤیدیۆییەکانی چۆنیەتی کارکردن لەگەڵ سیستەمەکان و ڕێنمایی ڕاهێنانی ئەندازیاران.'
                      : lang === 'ar'
                      ? 'مقاطع فيديو توضيحية لكيفية العمل مع الأنظمة وإرشادات التدريب.'
                      : 'Video guides on working with systems and technical training instructions.')}
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {(t.help?.tutorials?.items || []).map((video) => (
                <div
                  key={video.id}
                  onClick={() => setSelectedVideo({ videoUrl: video.videoUrl, title: video.title })}
                  className="bg-[#0B172E] border border-[#102447] rounded-2xl overflow-hidden flex flex-col group hover:border-[#1D5BD8]/50 transition-all cursor-pointer"
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      setSelectedVideo({ videoUrl: video.videoUrl, title: video.title });
                    }
                  }}
                  aria-label={video.title}
                >
                  {/* Video Mockup Thumbnail */}
                  <div className="relative aspect-video bg-[#060D1A] flex items-center justify-center border-b border-[#102447] group-hover:bg-[#081326] transition-colors">
                    <div className="w-12 h-12 rounded-full bg-[#1D5BD8] text-white flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                      <div className="w-0 h-0 border-y-6 border-y-transparent border-s-10 border-s-white ms-1" />
                    </div>
                    <span className="absolute bottom-2 end-2 bg-black/80 text-white font-mono text-[10px] px-2 py-0.5 rounded">
                      {video.duration}
                    </span>
                    <span className="absolute top-2 start-2 bg-[#102447]/90 text-amber-400 font-bold text-[10px] px-2 py-0.5 rounded border border-[#193B73]">
                      {video.badge}
                    </span>
                  </div>

                  <div className="p-5 flex-1 flex flex-col justify-between">
                    <div>
                      <h3 className="text-sm font-bold text-white mb-2 leading-snug group-hover:text-[#60A5FA] transition-colors">
                        {video.title}
                      </h3>
                      <p className="text-xs text-slate-400 leading-relaxed">
                        {video.description}
                      </p>
                    </div>

                    <div className="pt-4 mt-4 border-t border-[#102447] flex items-center justify-between text-xs text-slate-500">
                      <span>IDG Academy</span>
                      <span className="text-[#60A5FA] font-medium inline-flex items-center gap-1 group-hover:underline">
                        <span>{lang === 'ku' ? 'سەیرکردن' : lang === 'ar' ? 'مشاهدة' : 'Watch'}</span>
                        <ArrowIcon className="w-3 h-3" />
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* SECTION 4: FAQ Highlights & Quick Link */}
          <section id="faq-highlights" className="bg-[#0B172E] border border-[#102447] rounded-2xl p-6 sm:p-8">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
              <div>
                <h2 className="text-lg sm:text-xl font-bold text-white flex items-center gap-2">
                  <HelpCircle className="w-5 h-5 text-blue-400" />
                  <span>
                    {lang === 'ku'
                      ? 'پرسیارە باوەکان (FAQ)'
                      : lang === 'ar'
                      ? 'الأسئلة الشائعة والمعتمدة'
                      : 'Frequently Asked Questions'}
                  </span>
                </h2>
                <p className="text-xs sm:text-sm text-slate-400 mt-1">
                  {lang === 'ku'
                    ? 'وەڵامی ڕوون بۆ پرسیارە گشتییەکانی پەیوەندیدار بە ناوەندی هاوکاری.'
                    : lang === 'ar'
                    ? 'إجابات مباشرة حول سياسات وخدمات البوابة.'
                    : 'Fast answers to frequently asked institutional questions.'}
                </p>
              </div>

              <Link
                href={`/${lang}/faq`}
                className="inline-flex items-center gap-2 px-4 py-2 bg-[#102447] hover:bg-[#193B73] text-white text-xs font-bold rounded-xl border border-[#1D5BD8]/30 transition-colors shrink-0"
              >
                <span>{lang === 'ku' ? 'بینینی هەموو پرسیارەکان' : lang === 'ar' ? 'عرض كافة الأسئلة' : 'View all FAQs'}</span>
                <ArrowIcon className="w-3.5 h-3.5" />
              </Link>
            </div>

            <div className="space-y-3">
              {faqItems.map((item, idx) => (
                <div
                  key={idx}
                  className="bg-[#060D1A] border border-[#102447] rounded-xl overflow-hidden"
                >
                  <button
                    type="button"
                    onClick={() => setActiveFaq(activeFaq === idx ? null : idx)}
                    className="w-full p-4 flex items-center justify-between text-start text-xs sm:text-sm font-bold text-slate-200 hover:text-white transition-colors"
                  >
                    <span>{item.q[lang]}</span>
                    <ChevronDown
                      className={`w-4 h-4 text-slate-400 transition-transform ${
                        activeFaq === idx ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                  {activeFaq === idx && (
                    <div className="px-4 pb-4 text-xs sm:text-sm text-slate-400 leading-relaxed border-t border-[#102447]/50 pt-3">
                      {item.a[lang]}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </section>

          {/* SECTION 4.5: Keyboard Shortcuts Documentation */}
          <section id="keyboard-shortcuts" className="bg-[#0B172E] border border-[#102447] rounded-2xl p-6 sm:p-8">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
              <div>
                <h2 className="text-lg sm:text-xl font-bold text-white flex items-center gap-2">
                  <Keyboard className="w-5 h-5 text-[#60A5FA]" />
                  <span>
                    {lang === 'ku'
                      ? 'کلیلەکانی ڕێنمایی و گەڕانی خێرا'
                      : lang === 'ar'
                      ? 'اختصارات لوحة المفاتيح والوصول السريع'
                      : 'Keyboard Shortcuts & Quick Access'}
                  </span>
                </h2>
                <p className="text-xs sm:text-sm text-slate-400 mt-1">
                  {lang === 'ku'
                    ? 'سیستمی کورتەڕێیەکان بۆ بەکارهێنەرانی پیشەیی و خێراکردنی ئیشوکارەکان لە تەواوی سیستمدا.'
                    : lang === 'ar'
                    ? 'اختصارات لوحة المفاتيح المتقدمة للمستخدمين المحترفين لتسريع التنقل والبحث.'
                    : 'Global accelerators and shortcuts designed for power users and rapid navigation.'}
                </p>
                <p className="text-xs text-slate-500 sm:hidden mt-2">
                  {lang === 'ku' ? 'کلیلەکانی ڕێنمایی تەنها لە کۆمپیوتەردا کاردەکەن' : 
                   lang === 'ar' ? 'اختصارات لوحة المفاتيح متاحة على الحاسوب فقط' : 
                   'Keyboard shortcuts are available on desktop only'}
                </p>
              </div>

              <button
                type="button"
                onClick={() => window.dispatchEvent(new CustomEvent('idg:show-shortcuts'))}
                className="hidden sm:inline-flex items-center gap-2 px-4 py-2 bg-[#102447] hover:bg-[#193B73] text-white text-xs font-bold rounded-xl border border-[#1D5BD8]/30 transition-colors cursor-pointer shrink-0"
              >
                <span>{lang === 'ku' ? 'تاقیکردنەوەی کورتەڕێیەکان' : lang === 'ar' ? 'عرض نافذة الاختصارات' : 'Open Shortcuts Modal'}</span>
                <kbd className="px-1.5 py-0.5 bg-[#060D1A] border border-[#102447] rounded text-[10px] font-mono text-[#60A5FA]">
                  ?
                </kbd>
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Navigation Category */}
              <div className="bg-[#060D1A] border border-[#102447] rounded-xl p-4">
                <h3 className="text-xs font-bold uppercase tracking-wider text-[#60A5FA] mb-3">
                  {lang === 'ku' ? 'ڕێنمایی و گەیشتن' : lang === 'ar' ? 'التنقل' : 'Navigation'}
                </h3>
                <div className="space-y-2.5">
                  {SHORTCUTS.filter(s => s.category === 'navigation').map((shortcut, idx) => (
                    <div key={idx} className="flex items-center justify-between py-1 border-b border-[#102447]/50 last:border-b-0 text-xs">
                      <span className="text-slate-300">
                        {shortcut.description[lang as keyof typeof shortcut.description]}
                      </span>
                      <div className="flex items-center gap-1">
                        {shortcut.keys.split(' + ').map((k, i) => (
                          <kbd
                            key={i}
                            className="px-1.5 py-0.5 bg-[#0B172E] border border-[#102447] rounded font-mono text-[10px] text-slate-200"
                          >
                            {k}
                          </kbd>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Actions Category */}
              <div className="bg-[#060D1A] border border-[#102447] rounded-xl p-4">
                <h3 className="text-xs font-bold uppercase tracking-wider text-emerald-400 mb-3">
                  {lang === 'ku' ? 'کردارەکان' : lang === 'ar' ? 'الإجراءات' : 'Actions'}
                </h3>
                <div className="space-y-2.5">
                  {SHORTCUTS.filter(s => s.category === 'action').map((shortcut, idx) => (
                    <div key={idx} className="flex items-center justify-between py-1 border-b border-[#102447]/50 last:border-b-0 text-xs">
                      <span className="text-slate-300">
                        {shortcut.description[lang as keyof typeof shortcut.description]}
                      </span>
                      <div className="flex items-center gap-1">
                        {shortcut.keys.split(' + ').map((k, i) => (
                          <kbd
                            key={i}
                            className="px-1.5 py-0.5 bg-[#0B172E] border border-[#102447] rounded font-mono text-[10px] text-slate-200"
                          >
                            {k}
                          </kbd>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Search & Quick Command Palette */}
              <div className="bg-[#060D1A] border border-[#102447] rounded-xl p-4">
                <h3 className="text-xs font-bold uppercase tracking-wider text-amber-400 mb-3">
                  {lang === 'ku' ? 'گەڕانی خێرا' : lang === 'ar' ? 'البحث والأوامر' : 'Search & Palette'}
                </h3>
                <div className="space-y-2.5">
                  {SHORTCUTS.filter(s => s.category === 'search').map((shortcut, idx) => (
                    <div key={idx} className="flex items-center justify-between py-1 border-b border-[#102447]/50 last:border-b-0 text-xs">
                      <span className="text-slate-300">
                        {shortcut.description[lang as keyof typeof shortcut.description]}
                      </span>
                      <kbd className="px-1.5 py-0.5 bg-[#0B172E] border border-[#102447] rounded font-mono text-[10px] text-slate-200">
                        {shortcut.keys}
                      </kbd>
                    </div>
                  ))}
                  <div className="flex items-center justify-between py-1 text-xs">
                    <span className="text-slate-300">
                      {lang === 'ku' ? 'پالێتی فەرمانەکان' : lang === 'ar' ? 'لوحة الأوامر' : 'Command Palette'}
                    </span>
                    <kbd className="px-1.5 py-0.5 bg-[#0B172E] border border-[#102447] rounded font-mono text-[10px] text-slate-200">
                      Cmd/Ctrl + K
                    </kbd>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* SECTION 5: Support & Contact Escalation */}
          <section id="support-channels" className="border-t border-[#102447] pt-12">
            <div className="text-center max-w-2xl mx-auto mb-10">
              <h2 className="text-xl sm:text-2xl font-bold text-white mb-2">
                {lang === 'ku'
                  ? 'پێویستت بە هاوکاریی زیاترە؟'
                  : lang === 'ar'
                  ? 'هل تحتاج إلى دعم مباشر ومخصص؟'
                  : 'Need direct institutional assistance?'}
              </h2>
              <p className="text-xs sm:text-sm text-slate-400">
                {lang === 'ku'
                  ? 'تیمە ئەندازیاری و پەیوەندییە فەرمییەکانی IDG ئامادەی پێشوازیکردنن لە داواکارییە فەرمییەکان.'
                  : lang === 'ar'
                  ? 'فرق الدعم الهندسي والعلاقات الحكومية جاهزة لاستقبال طلباتكم الرسمية.'
                  : 'Our engineering leadership and institutional relations desk are available.'}
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="bg-[#0B172E] border border-[#102447] rounded-2xl p-6 text-center">
                <div className="w-10 h-10 rounded-xl bg-[#102447] border border-[#193B73] flex items-center justify-center mx-auto mb-3 text-[#60A5FA]">
                  <Mail className="w-5 h-5" />
                </div>
                <h3 className="text-sm font-bold text-white mb-1">
                  {lang === 'ku' ? 'پەیوەندیی فەرمی' : lang === 'ar' ? 'التواصل الرسمي' : 'Official Desk'}
                </h3>
                <p className="text-xs text-slate-400 mb-4">
                  contact@idg.iq
                </p>
                <button
                  type="button"
                  onClick={() => setIsContactOpen(true)}
                  className="inline-flex items-center gap-1.5 px-4 py-2 bg-[#1D5BD8] hover:bg-blue-600 text-white text-xs font-bold rounded-lg transition-colors cursor-pointer"
                >
                  <span>{lang === 'ku' ? 'ناردنی پەیام' : lang === 'ar' ? 'إرسال رسالة' : 'Send Inquiry'}</span>
                </button>
              </div>

              <div className="bg-[#0B172E] border border-[#102447] rounded-2xl p-6 text-center">
                <div className="w-10 h-10 rounded-xl bg-[#102447] border border-[#193B73] flex items-center justify-center mx-auto mb-3 text-emerald-400">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <h3 className="text-sm font-bold text-white mb-1">
                  {lang === 'ku' ? 'ئاسایش و سیادە' : lang === 'ar' ? 'الأمن والسيادة' : 'Security Escalation'}
                </h3>
                <p className="text-xs text-slate-400 mb-4">
                  security@idg.iq
                </p>
                <Link
                  href={`/${lang}/legal/sovereign-data`}
                  className="inline-flex items-center gap-1.5 px-4 py-2 bg-[#102447] hover:bg-[#193B73] text-slate-200 text-xs font-bold rounded-lg border border-[#102447] transition-colors"
                >
                  <span>{lang === 'ku' ? 'سیاسەتی داتا' : lang === 'ar' ? 'سياسة البيانات' : 'Data Policy'}</span>
                </Link>
              </div>

              <div className="bg-[#0B172E] border border-[#102447] rounded-2xl p-6 text-center">
                <div className="w-10 h-10 rounded-xl bg-[#102447] border border-[#193B73] flex items-center justify-center mx-auto mb-3 text-amber-400">
                  <HelpCircle className="w-5 h-5" />
                </div>
                <h3 className="text-sm font-bold text-white mb-1">
                  {lang === 'ku' ? 'حوکمڕانی و پابەندبوون' : lang === 'ar' ? 'الحوكمة والامتثال' : 'Governance Office'}
                </h3>
                <p className="text-xs text-slate-400 mb-4">
                  governance@idg.iq
                </p>
                <Link
                  href={`/${lang}/governance`}
                  className="inline-flex items-center gap-1.5 px-4 py-2 bg-[#102447] hover:bg-[#193B73] text-slate-200 text-xs font-bold rounded-lg border border-[#102447] transition-colors"
                >
                  <span>{lang === 'ku' ? 'ماتریکسی حوکمڕانی' : lang === 'ar' ? 'مصفوفة الحوكمة' : 'Governance Matrix'}</span>
                </Link>
              </div>
            </div>
          </section>
        </div>
      </main>

      <Footer
        t={t}
        isRtl={isRtl}
        onOpenContact={() => setIsContactOpen(true)}
      />

      <ContactModal
        isOpen={isContactOpen}
        onClose={() => setIsContactOpen(false)}
        t={t}
      />

      <VideoModal
        isOpen={!!selectedVideo}
        onClose={() => setSelectedVideo(null)}
        videoUrl={selectedVideo?.videoUrl || ''}
        title={selectedVideo?.title || ''}
      />
    </div>
  );
}
