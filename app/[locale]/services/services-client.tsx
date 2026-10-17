'use client';

import React, { useState } from 'react';
import dynamic from 'next/dynamic';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Breadcrumbs from '@/components/Breadcrumbs';
import ServicesHero from '@/components/ServicesHero';
import ServiceGrid from '@/components/ServiceGrid';
import RelatedPages from '@/components/RelatedPages';
import { translations, Language } from '@/lib/translations';
import { useLocale } from '@/lib/locale-context';
import {
  Server,
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
  ArrowLeft,
  Activity,
  Layers,
  Database,
  Lock,
  Headphones,
} from 'lucide-react';

const ContactModal = dynamic(() => import('@/components/ContactModal'), {
  ssr: false,
});

interface ServicesClientProps {
  locale: string;
}

export default function ServicesClient({ locale }: ServicesClientProps) {
  const [isContactOpen, setIsContactOpen] = useState(false);
  const { isRtl } = useLocale();
  const ArrowIcon = isRtl ? ArrowLeft : ArrowRight;

  const lang: Language = locale === 'ar' || locale === 'en' ? locale : 'ku';
  const tData = translations[lang] || translations.ku;

  const content = {
    ku: {
      breadcrumb: 'خزمەتگوزارییەکان',
      stats: [
        { label: 'پلاتفۆرمی سەرەکیی سەروەر', value: '٦', icon: Layers },
        { label: 'سەقامگیریی کارکردنی SLA', value: '٩٩.٩٨٪', icon: Activity },
        { label: 'مانەوەی تەواوی داتا', value: '١٠٠٪ ناوخۆ', icon: Database },
        { label: 'مۆدێلی پاراستنی داتا', value: 'Zero-Trust', icon: Lock },
      ],
      complianceTitle: 'تەلارسازیی سەروەر و متمانەپێکراو بۆ دەوڵەت و بانکەکان',
      complianceDesc:
        'هەموو پلاتفۆرم و خزمەتگوزارییەکی IDG بە تەلارسازیی بێبەخشین (Zero-Trust) دادەمەزرێت. خاوەندارێتیی داتاکان، کۆد، کلیلەکانی تشفیر، و بەڕێوەبردن بە تەواوی لە دەستی پسپۆڕانی ناوخۆی عێراقدایە.',
      compliancePoints: [
        'هاوئاهەنگی تەواو لەگەڵ ڕێنماییەکانی بانکی ناوەندیی عێراق (CBI)',
        'پابەندبوون بە ستانداردەکانی ISO/IEC 27001 و NIST SP 800-53',
        'داتاسەنتەری خۆجێیی بە ستانداردی Tier-3 لە عێراق',
        'تۆماری نەگۆڕ و وردبینی بۆ سەرجەم پرۆسەکان',
      ],
      ctaTitle: 'ئامادەیت ژێرخانی دامەزراوەکەت بگوازیتەوە بۆ سەردەمی دیجیتاڵی؟',
      ctaDesc: 'پەیوەندی بە دەستەی تەکنیکیی IDG بکە بۆ ڕاوێژی تەلارسازی و نمایشکردنی ڕاستەوخۆ (Live Demo).',
      ctaButton: 'داواکردنی ڕاوێژ و دیمۆ',
    },
    ar: {
      breadcrumb: 'الخدمات',
      stats: [
        { label: 'منظومات سيادية استراتيجية', value: '6', icon: Layers },
        { label: 'نسبة الاستمرارية SLA', value: '99.98%', icon: Activity },
        { label: 'توطين كامل للبيانات', value: '100% محلي', icon: Database },
        { label: 'نموذج الدفاع السيبراني', value: 'Zero-Trust', icon: Lock },
      ],
      complianceTitle: 'معمارية سيادية موثوقة مصممة للمؤسسات والقطاع المالي',
      complianceDesc:
        'تخضع كافة منصات وحلول IDG لبروتوكولات أمان صارمة تضمن بقاء مفاتيح التشفير، الكود المصدري، وقواعد البيانات تحت السيادة والولاية القضائية العراقية حصراً.',
      compliancePoints: [
        'امتثال تام لضوابط وتعليمات البنك المركزي العراقي (CBI)',
        'تطبيق معايير أمن المعلومات العالمية ISO/IEC 27001 و NIST',
        'مراكز بيانات سيادية Tier-3 داخل بغداد وأربيل',
        'سجلات تدقيق غير قابلة للتعديل لكافة المعاملات الرسمية',
      ],
      ctaTitle: 'هل أنت مستعد لنقل بنيتك التحتية إلى العصر الرقمي الآمن؟',
      ctaDesc: 'تواصل مع الفريق الهندسي لبوابة العراق الرقمية لطلب استشارة معمارية وعرض تجريبي مباشر لأنظمتنا.',
      ctaButton: 'طلب استشارة وعرض تجريبي',
    },
    en: {
      breadcrumb: 'Services',
      stats: [
        { label: 'Flagship Sovereign Platforms', value: '6', icon: Layers },
        { label: 'Operational SLA Uptime', value: '99.98%', icon: Activity },
        { label: 'Data Residency Guarantee', value: '100% In-Country', icon: Database },
        { label: 'Cyber Defense Architecture', value: 'Strict Zero-Trust', icon: Lock },
      ],
      complianceTitle: 'High-Assurance Sovereign Architecture for Enterprise & State',
      complianceDesc:
        'Every IDG platform operates under zero-trust assumptions. All intellectual property, cryptographic keys, databases, and operational logs remain permanently within sovereign Iraqi custody without external backdoors.',
      compliancePoints: [
        'Full compliance with Central Bank of Iraq (CBI) regulatory directives',
        'Hardened alignment with ISO/IEC 27001 and NIST SP 800-53 controls',
        'Tier-3 resilient data center hosting across Erbil and Baghdad facilities',
        'Immutable cryptographic audit trails for all inter-agency transactions',
      ],
      ctaTitle: 'Ready to Modernize Your Institutional Infrastructure?',
      ctaDesc: 'Connect with IDG’s systems engineering team to schedule a technical architecture assessment and live platform demonstration.',
      ctaButton: 'Request Consultation & Demo',
    },
  };

  const t = content[locale as 'ku' | 'ar' | 'en'] || content.ku;

  const relatedPages = [
    {
      href: `/${locale}/portfolio`,
      title: locale === 'ku' ? 'پۆرتفۆلیۆ و بەرهەمەکان' : locale === 'ar' ? 'محفظة المنتجات السيادية' : 'Portfolio & Deployments',
      description: locale === 'ku' ? 'پڕۆژە دەستبەکاربووەکانی وەک INSW و AI Gate.' : locale === 'ar' ? 'استعراض المشاريع الكبرى المنفذة كالنافذة الوطنية الموحدة.' : 'Explore live sovereign flagships including INSW and AI Gate.',
    },
    {
      href: `/${locale}/about`,
      title: locale === 'ku' ? 'دەربارەی ئێمە' : locale === 'ar' ? 'من نحن' : 'About IDG',
      description: locale === 'ku' ? 'مێژوو، ئەرک، دیدگا و شەش بەهای سەرەکیی IDG.' : locale === 'ar' ? 'الرسالة، الرؤية، والقيم الست الحاكمة للمؤسسة.' : 'Foundational mission, vision, and 6 core invariant values.',
    },
    {
      href: `/${locale}/governance`,
      title: locale === 'ku' ? 'حوکمڕانی و شەفافیەت' : locale === 'ar' ? 'الحوكمة والمساءلة' : 'Governance Matrix',
      description: locale === 'ku' ? 'ماتریکسی بەرپرسیارێتی و بنەمای خاوەنی بەرپرسیار (Accountable Owner).' : locale === 'ar' ? 'مصفوفة الحوكمة ومبدأ الجهة المسؤولة بالاسم.' : 'Institutional accountability framework and measurable KPIs.',
    },
  ];

  return (
    <div
      dir={isRtl ? 'rtl' : 'ltr'}
      lang={locale}
      className="min-h-screen bg-[#060D1A] text-slate-100 overflow-x-hidden w-full max-w-full"
    >
      <Navbar t={tData} lang={lang} onOpenContact={() => setIsContactOpen(true)} />

      <main id="main-content">
        {/* Breadcrumbs Navigation */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6">
          <Breadcrumbs
            items={[
              {
                label: t.breadcrumb,
              },
            ]}
          />
        </div>

        {/* 1. Hero Section */}
        <ServicesHero
          locale={locale}
          isRtl={isRtl}
          onOpenContact={() => setIsContactOpen(true)}
        />

        {/* 2. Key Stats Strip */}
        <section className="py-12 bg-[#0B172E]/60 border-b border-[#102447]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
              {t.stats.map((s, idx) => {
                const Icon = s.icon;
                return (
                  <div
                    key={idx}
                    className="p-6 rounded-2xl bg-[#060D1A] border border-[#102447] text-center flex flex-col items-center justify-center hover:border-blue-500/40 transition-colors"
                  >
                    <Icon className="w-5 h-5 text-blue-400 mb-2" />
                    <span className="font-mono text-2xl sm:text-3xl font-black text-white mb-1">
                      {s.value}
                    </span>
                    <span className="text-xs text-slate-400 font-medium">
                      {s.label}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* 3. Main Services Grid (6 Services) */}
        <ServiceGrid locale={locale} isRtl={isRtl} />

        {/* 4. Enterprise Compliance & Security Banner */}
        <section className="py-16 sm:py-24 bg-[#060D1A] border-b border-[#102447]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-[#0B172E] border border-[#102447] rounded-3xl p-8 sm:p-12 md:p-14 shadow-2xl">
              <div className="max-w-3xl mb-8">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#102447] border border-[#193B73] text-xs font-semibold text-blue-400 mb-4">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  <span>Sovereign Security & Compliance</span>
                </div>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white mb-4">
                  {t.complianceTitle}
                </h2>
                <p className="text-xs sm:text-base text-slate-300 leading-relaxed font-normal">
                  {t.complianceDesc}
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-6 border-t border-[#102447]">
                {t.compliancePoints.map((point, idx) => (
                  <div key={idx} className="flex items-start gap-3 p-3 rounded-xl bg-[#060D1A]/80 border border-[#102447]">
                    <CheckCircle2 className="w-5 h-5 text-blue-400 shrink-0 mt-0.5" />
                    <span className="text-xs sm:text-sm text-slate-200 font-medium">{point}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* 5. Contact / Demo Call-To-Action */}
        <section className="py-16 sm:py-20 bg-[#0B172E]/40 border-b border-[#102447]">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-2xl sm:text-4xl font-black text-white mb-4 tracking-tight">
              {t.ctaTitle}
            </h2>
            <p className="text-sm sm:text-base text-slate-400 mb-8 max-w-2xl mx-auto">
              {t.ctaDesc}
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button
                type="button"
                onClick={() => setIsContactOpen(true)}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl bg-[#2563EB] hover:bg-blue-600 text-white font-bold text-sm shadow-lg shadow-blue-600/25 transition-all cursor-pointer"
              >
                <Headphones className="w-4 h-4" />
                <span>{t.ctaButton}</span>
                <ArrowIcon className="w-4 h-4" />
              </button>

              <Link
                href={`/${locale}/contact`}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-[#102447] hover:bg-[#193B73] border border-[#193B73] text-slate-200 hover:text-white font-semibold text-sm transition-all"
              >
                <span>{locale === 'ku' ? 'پەڕەی پەیوەندی' : locale === 'ar' ? 'صفحة التواصل' : 'Contact Channels'}</span>
              </Link>
            </div>
          </div>
        </section>

        {/* 6. Related Pages Navigation */}
        <RelatedPages pages={relatedPages} />
      </main>

      <Footer t={tData} isRtl={isRtl} onOpenContact={() => setIsContactOpen(true)} />

      <ContactModal
        isOpen={isContactOpen}
        onClose={() => setIsContactOpen(false)}
        t={tData}
      />
    </div>
  );
}
