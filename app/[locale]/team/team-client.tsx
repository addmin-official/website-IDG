'use client';

import React from 'react';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Breadcrumbs from '@/components/Breadcrumbs';
import TeamHero from '@/components/TeamHero';
import TeamMemberCard from '@/components/TeamMemberCard';
import { getTeamMembers } from '@/lib/team-data';
import { useLocale } from '@/lib/locale-context';
import { Briefcase, ArrowRight, ArrowLeft, ShieldCheck, Sparkles, Terminal, Layers, Users } from 'lucide-react';

interface TeamClientProps {
  locale: string;
}

export default function TeamClient({ locale }: TeamClientProps) {
  const { isRtl } = useLocale();
  const ArrowIcon = isRtl ? ArrowLeft : ArrowRight;

  const members = getTeamMembers(locale);

  // Group by sections
  const leadership = members.filter((m) => m.section === 'leadership');
  const engineering = members.filter((m) => m.section === 'engineering');
  const product = members.filter((m) => m.section === 'product');
  const operations = members.filter((m) => m.section === 'operations');

  const content = {
    ku: {
      breadcrumb: 'تیمی ئێمە',
      leadershipTitle: 'سەرکردایەتیی جێبەجێکار',
      leadershipSubtitle: 'بنیاتنەران و سەرکردە جێبەجێکارەکان کە ستراتیژی تەکنەلۆژیای نیشتمانی ڕابەرایەتی دەکەن.',
      engineeringTitle: 'تیمی ئەندازیاری و ژێرخان',
      engineeringSubtitle: 'تەلارسازانی باکێند، کلاودی سەروەر، ئاسایشی سایبەری، و فرۆنتێند.',
      productTitle: 'تیمی بەرهەم و دیزاین (Product & Design)',
      productSubtitle: 'بەڕێوەبەرانی بەرهەمە دیجیتاڵییەکان و دیزاینەرانی ئەزموونی بەکارهێنەر.',
      operationsTitle: 'تیمی کارگێڕی و هاوبەشییە ستراتیژییەکان',
      operationsSubtitle: 'بەڕێوەبردنی ئۆپەراسیۆنە دامەزراوەییەکان، حوکمڕانیی داتا، و گەشەپێدانی بەهرەکان.',
      joinTitle: 'بە IDG پەیوەست بە!',
      joinSubtitle:
        'ئێمە بەردەوام بەدوای بلیمەتە تەکنیکییەکان و تەلارسازانی داهاتوودا دەگەڕێین کە دەیانەوێت کاریگەرییەکی بەردەوام لەسەر پێکهاتەی دیجیتاڵیی عێراق جێبهێڵن.',
      viewCareersBtn: 'بچۆ بۆ دەرفەتە کراوەکان',
      contactBtn: 'پەیوەندی لەگەڵ دەستەی دامەزراندن',
      hiringNotice: 'دەرفەتە کراوەکان بەردەوام نوێ دەکرێنەوە بۆ پێشوازیکردن لە کادیرە لێهاتووەکانی عێراق.',
    },
    ar: {
      breadcrumb: 'فريق العمل',
      leadershipTitle: 'القيادة التنفيذية والمجلس الاستراتيجي',
      leadershipSubtitle: 'المؤسسون والقادة التنفيذيون الذين يقودون استراتيجية التكنولوجيا الوطنية.',
      engineeringTitle: 'فريق الهندسة والبنية التحتية',
      engineeringSubtitle: 'معماريو النظم الخلفية، السحابة السيادية، الأمن السيبراني، وهندسة الواجهات.',
      productTitle: 'فريق المنتج والتصميم (Product & Design)',
      productSubtitle: 'مديرو المنتجات الرقمية ومصممو تجربة المستخدم ونظم التصميم المؤسسي.',
      operationsTitle: 'فريق العمليات والشراكات الاستراتيجية',
      operationsSubtitle: 'إدارة العمليات المؤسسية، حوكمة البيانات، واستقطاب وتطوير الكفاءات الوطنية.',
      joinTitle: 'انضم إلى بوابة العراق الرقمية (IDG)!',
      joinSubtitle:
        'نحن نبحث باستمرار عن كفاءات هندسية استثنائية وباحثين في أمن النظم للمساهمة في بناء بنية تحتية رقمية سيادية للعراق.',
      viewCareersBtn: 'عرض الوظائف الشاغرة',
      contactBtn: 'التواصل مع قسم التوظيف',
      hiringNotice: 'نعلن عن الشواغر الوظيفية باستمرار لاستقطاب الكفاءات الوطنية المتميزة.',
    },
    en: {
      breadcrumb: 'Our Team',
      leadershipTitle: 'Executive Leadership',
      leadershipSubtitle: 'Founders and C-level executives directing sovereign national technology strategy.',
      engineeringTitle: 'Engineering & Infrastructure Team',
      engineeringSubtitle: 'Systems architects, sovereign cloud engineers, cybersecurity specialists, and frontend leads.',
      productTitle: 'Product & Design Team',
      productSubtitle: 'Civic product managers, design systems architects, and user experience practitioners.',
      operationsTitle: 'Operations & Strategic Partnerships',
      operationsSubtitle: 'Institutional operations, sovereign data governance, and talent acquisition.',
      joinTitle: 'Join the Architects of Digital Sovereignty!',
      joinSubtitle:
        'We are continually seeking exceptional software engineers, security researchers, and systems thinkers driven to build enduring capability for Iraq.',
      viewCareersBtn: 'View Open Positions',
      contactBtn: 'Contact Talent Acquisition',
      hiringNotice: 'Positions are continuously updated to welcome distinguished national talent.',
    },
  }[locale === 'ar' || locale === 'en' ? locale : 'ku'];

  return (
    <div className="min-h-screen bg-[#060D1A] text-white flex flex-col">
      <Navbar />

      <main className="flex-1">
        {/* Breadcrumbs */}
        <div className="bg-[#0B172E]/40 border-b border-[#102447]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
            <Breadcrumbs items={[{ label: content.breadcrumb, href: `/${locale}/team` }]} />
          </div>
        </div>

        {/* Hero Section */}
        <TeamHero locale={locale} />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-20">
          {/* SECTION 1: LEADERSHIP */}
          <section id="leadership" className="scroll-mt-24">
            <div className="mb-8 border-b border-[#102447] pb-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-semibold uppercase tracking-wider mb-2">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>Executive</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                {content.leadershipTitle}
              </h2>
              <p className="mt-1 text-sm sm:text-base text-slate-400">
                {content.leadershipSubtitle}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {leadership.map((member) => (
                <TeamMemberCard key={member.id} member={member} locale={locale} />
              ))}
            </div>
          </section>

          {/* SECTION 2: ENGINEERING */}
          <section id="engineering" className="scroll-mt-24">
            <div className="mb-8 border-b border-[#102447] pb-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold uppercase tracking-wider mb-2">
                <Terminal className="w-3.5 h-3.5" />
                <span>Technology</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                {content.engineeringTitle}
              </h2>
              <p className="mt-1 text-sm sm:text-base text-slate-400">
                {content.engineeringSubtitle}
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {engineering.map((member) => (
                <TeamMemberCard key={member.id} member={member} locale={locale} />
              ))}
            </div>
          </section>

          {/* SECTION 3: PRODUCT */}
          <section id="product" className="scroll-mt-24">
            <div className="mb-8 border-b border-[#102447] pb-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-semibold uppercase tracking-wider mb-2">
                <Layers className="w-3.5 h-3.5" />
                <span>Product & UX</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                {content.productTitle}
              </h2>
              <p className="mt-1 text-sm sm:text-base text-slate-400">
                {content.productSubtitle}
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {product.map((member) => (
                <TeamMemberCard key={member.id} member={member} locale={locale} />
              ))}
            </div>
          </section>

          {/* SECTION 4: OPERATIONS */}
          <section id="operations" className="scroll-mt-24">
            <div className="mb-8 border-b border-[#102447] pb-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-semibold uppercase tracking-wider mb-2">
                <Users className="w-3.5 h-3.5" />
                <span>Operations</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                {content.operationsTitle}
              </h2>
              <p className="mt-1 text-sm sm:text-base text-slate-400">
                {content.operationsSubtitle}
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {operations.map((member) => (
                <TeamMemberCard key={member.id} member={member} locale={locale} />
              ))}
            </div>
          </section>

          {/* JOIN US / CAREERS CTA */}
          <section className="bg-gradient-to-br from-[#0B172E] to-[#102447] border border-blue-500/30 rounded-3xl p-8 sm:p-14 text-center relative overflow-hidden shadow-2xl">
            <div className="absolute top-0 end-0 w-96 h-96 bg-blue-600/10 blur-[120px] rounded-full pointer-events-none" />

            <div className="max-w-3xl mx-auto relative z-10">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold uppercase tracking-wider mb-4">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Careers</span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                {content.joinTitle}
              </h2>

              <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
                {content.joinSubtitle}
              </p>

              <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
                <Link
                  href={`/${locale}/careers`}
                  className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold text-sm transition-all shadow-xl shadow-blue-600/30"
                >
                  <Briefcase className="w-4 h-4" />
                  <span>{content.viewCareersBtn}</span>
                  <ArrowIcon className="w-4 h-4" />
                </Link>

                <Link
                  href={`/${locale}/contact`}
                  className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-[#060D1A] hover:bg-[#0B172E] text-slate-200 hover:text-white font-semibold text-sm border border-[#102447] transition-all"
                >
                  <span>{content.contactBtn}</span>
                </Link>
              </div>

              <p className="mt-5 text-xs text-slate-400">
                {content.hiringNotice}
              </p>
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}
