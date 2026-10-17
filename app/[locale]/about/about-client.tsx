'use client';

import React, { useState } from 'react';
import dynamic from 'next/dynamic';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Breadcrumbs from '@/components/Breadcrumbs';
import AboutHero from '@/components/AboutHero';
import MissionVision from '@/components/MissionVision';
import ValuesGrid from '@/components/ValuesGrid';
import Timeline from '@/components/Timeline';
import RelatedPages from '@/components/RelatedPages';
import { translations, Language } from '@/lib/translations';
import { useLocale } from '@/lib/locale-context';
import {
  Users,
  Building,
  Activity,
  Award,
  ArrowRight,
  ArrowLeft,
  Mail,
  Briefcase,
} from 'lucide-react';

const ContactModal = dynamic(() => import('@/components/ContactModal'), {
  ssr: false,
});

interface AboutClientProps {
  locale: string;
}

export default function AboutClient({ locale }: AboutClientProps) {
  const [isContactOpen, setIsContactOpen] = useState(false);
  const { isRtl } = useLocale();
  const ArrowIcon = isRtl ? ArrowLeft : ArrowRight;

  const lang: Language = locale === 'ar' || locale === 'en' ? locale : 'ku';
  const tData = translations[lang] || translations.ku;

  const content = {
    ku: {
      breadcrumb: 'دەربارەی ئێمە',
      stats: [
        { label: 'پلاتفۆرم و پڕۆژەی سەروەر', value: '١٢+', icon: Building },
        { label: 'دامەزراوە و هاوبەشی ستراتیژی', value: '٤٥+', icon: Users },
        { label: 'بەردەوامیی سیستەم و سەقامگیری', value: '٩٩.٩٨٪', icon: Activity },
        { label: 'کادری عێراقی لە ڕاهێناندا', value: '٥٠٠+', icon: Award },
      ],
      teamTitle: 'دەستەی بەڕێوەبردن و ئەندازیاری',
      teamSubtitle: 'سەرکردایەتییەکی لێهاتوو بە دیدگایەکی سەربەخۆ بۆ داهاتووی تەکنەلۆژیای عێراق.',
      teamDesc:
        'لە دەروازەی دیجیتاڵیی عێراق (IDG)، تیمی ئێمە لە پسپۆڕانی باڵای تەلارسازیی سۆفتوێر، ئاسایشی سایبەری، یاسای داتا، و ستراتیژیستە دامەزراوەییەکان پێکدێت کە پابەندن بە بونیادنانی سیستەمێکی متمانەپێکراو.',
      teamCta: 'پەیوەندیکردن بە دەستەی بەڕێوەبردن',
      careersCta: 'دەرفەتەکانی کارکردن لە IDG',
    },
    ar: {
      breadcrumb: 'من نحن',
      stats: [
        { label: 'منصات ومشاريع سيادية', value: '12+', icon: Building },
        { label: 'مؤسسات وشركاء استراتيجيون', value: '45+', icon: Users },
        { label: 'نسبة الاستمرارية التشغيلية SLA', value: '99.98%', icon: Activity },
        { label: 'كوادر عراقية قيد التأهيل', value: '500+', icon: Award },
      ],
      teamTitle: 'الفريق التنفيذي والقيادة الهندسية',
      teamSubtitle: 'نخبة من الكفاءات الوطنية المتخصصة في هندسة السيادة الرقمية.',
      teamDesc:
        'تضم بوابة العراق الرقمية (IDG) مهندسين استشاريين، خبراء في الأمن السيبراني ونموذج Zero-Trust، ومطوري ذكاء اصطناعي يعملون بتفانٍ على صياغة المنظومات الرقمية الآمنة لخدمة الصالح العام.',
      teamCta: 'التواصل مع الإدارة',
      careersCta: 'فرص الانضمام للفريق',
    },
    en: {
      breadcrumb: 'About Us',
      stats: [
        { label: 'Sovereign Platforms & Deployments', value: '12+', icon: Building },
        { label: 'Strategic Institutional Partners', value: '45+', icon: Users },
        { label: 'Mission-Critical SLA Uptime', value: '99.98%', icon: Activity },
        { label: 'Iraqi Engineers in Academy Pipeline', value: '500+', icon: Award },
      ],
      teamTitle: 'Leadership & Engineering Capacity',
      teamSubtitle: 'Sovereign architecture guided by seasoned institutional strategists.',
      teamDesc:
        'IDG brings together top software systems architects, zero-trust security engineers, data sovereignty legal specialists, and operational leaders united by a singular commitment: delivering uncompromised technological capability to Iraq.',
      teamCta: 'Connect with Executive Team',
      careersCta: 'Explore Careers at IDG',
    },
  };

  const t = content[locale as 'ku' | 'ar' | 'en'] || content.ku;

  const relatedPages = [
    {
      href: `/${locale}/portfolio`,
      title: locale === 'ku' ? 'پۆرتفۆلیۆ و بەرهەمەکان' : locale === 'ar' ? 'محفظة المنتجات السيادية' : 'Portfolio & Platforms',
      description: locale === 'ku' ? 'سیستەمە پێشکەوتووەکانی وەک AI Gate، INSW، و ZaNa Academy.' : locale === 'ar' ? 'استعراض المنظومات المؤسسية ومنصات الذكاء الاصطناعي.' : 'Explore sovereign assets including AI Gate Iraq, INSW, and ZaNa.',
    },
    {
      href: `/${locale}/governance`,
      title: locale === 'ku' ? 'حوکمڕانی و شەفافیەت' : locale === 'ar' ? 'الحوكمة والمساءلة' : 'Governance Framework',
      description: locale === 'ku' ? 'ماتریکسی بەرپرسیارێتی و بنەمای خاوەنی بەرپرسیار (Accountable Owner).' : locale === 'ar' ? 'مصفوفة الحوكمة ومبدأ الجهة المسؤولة بالاسم.' : 'Institutional accountability framework and measurable KPIs.',
    },
    {
      href: `/${locale}/careers`,
      title: locale === 'ku' ? 'دەرفەتی کار لە IDG' : locale === 'ar' ? 'الوظائف والفرص' : 'Careers & Fellowship',
      description: locale === 'ku' ? 'بەشداربە لە بونیادنانی مێژووی تەکنەلۆژیای نیشتمان لەگەڵ ئەندازیارانی IDG.' : locale === 'ar' ? 'انضم إلى نخبة المهندسين المساهمين في صياغة المستقبل الرقمي الوطني.' : 'Join high-conviction engineering teams building national infrastructure.',
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
        <AboutHero
          locale={locale}
          isRtl={isRtl}
          onOpenContact={() => setIsContactOpen(true)}
        />

        {/* 2. Institutional Statistics Bar */}
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

        {/* 3. Mission & Vision */}
        <MissionVision locale={locale} />

        {/* 4. Core Values Grid (6 Values) */}
        <ValuesGrid locale={locale} />

        {/* 5. Historical Timeline */}
        <Timeline locale={locale} />

        {/* 6. Team & Leadership Intro */}
        <section className="py-16 sm:py-24 bg-[#060D1A] border-b border-[#102447]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-[#0B172E] border border-[#102447] rounded-3xl p-8 sm:p-12 md:p-14 shadow-2xl flex flex-col lg:flex-row items-center justify-between gap-8">
              <div className="max-w-2xl">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#102447] border border-[#193B73] text-xs font-semibold text-blue-400 mb-4">
                  <Users className="w-3.5 h-3.5" />
                  <span>IDG Institutional Team</span>
                </div>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white mb-4">
                  {t.teamTitle}
                </h2>
                <p className="text-xs sm:text-sm font-semibold text-blue-400 mb-3">
                  {t.teamSubtitle}
                </p>
                <p className="text-xs sm:text-base text-slate-300 leading-relaxed font-normal">
                  {t.teamDesc}
                </p>
              </div>

              <div className="flex flex-col sm:flex-row lg:flex-col gap-3 w-full lg:w-auto shrink-0">
                <button
                  type="button"
                  onClick={() => setIsContactOpen(true)}
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-[#2563EB] hover:bg-blue-600 text-white font-bold text-xs sm:text-sm transition-colors cursor-pointer"
                >
                  <Mail className="w-4 h-4" />
                  <span>{t.teamCta}</span>
                  <ArrowIcon className="w-4 h-4" />
                </button>

                <Link
                  href={`/${locale}/careers`}
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-[#102447] hover:bg-[#193B73] border border-[#193B73] text-slate-200 hover:text-white font-semibold text-xs sm:text-sm transition-colors"
                >
                  <Briefcase className="w-4 h-4 text-blue-400" />
                  <span>{t.careersCta}</span>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* 7. Related Pages Navigation */}
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
