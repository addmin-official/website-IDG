'use client';

import React from 'react';
import { translations, Language } from '@/lib/translations';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Breadcrumbs from '@/components/Breadcrumbs';
import { Database, ShieldCheck, Lock, Server, Cpu, FileCheck2, ArrowLeft, ArrowRight, ShieldAlert, Mail } from 'lucide-react';
import Link from 'next/link';

export default function SovereignDataClient({ locale }: { locale: string }) {
  const lang: Language = locale === 'ar' || locale === 'en' ? locale : 'ku';
  const isRtl = lang === 'ku' || lang === 'ar';
  const t = translations[lang] || translations.ku;

  const isKu = lang === 'ku';
  const isAr = lang === 'ar';

  const content = {
    badge: isKu
      ? 'سەروەریی نیشتمانی — داتای پارێزراو'
      : isAr
      ? 'السيادة الوطنية — توطين البيانات'
      : 'National Sovereignty — Data Residency',
    title: isKu
      ? 'سیاسەتی سەروەریی داتا'
      : isAr
      ? 'سياسة سيادة البيانات الوطنية'
      : 'Sovereign Data Policy',
    updated: isKu
      ? 'دواین نوێکردنەوە: ٩ی تشرینی یەکەمی ٢٠٢٦'
      : isAr
      ? 'آخر تحديث: ٩ تشرين الأول ٢٠٢٦'
      : 'Last Updated: October 9, 2026',
    intro: isKu
      ? 'سەروەریی داتا بەردی بناغەی بوونی دەروازەی دیجیتاڵیی عێراقە (IDG). ئێمە ڕێگریی تەواو دەکەین لە دەرچوونی داتای نیشتمانی لە سنوورەکانی عێراق و گەرەنتیی پاراستنی بەرزترین ئاستی ژێرخانی سەربەخۆ دەکەین بەپێی ستانداردە نێودەوڵەتییەکان.'
      : isAr
      ? 'تُعد سيادة البيانات الركيزة الأساسية لوجود بوابة العراق الرقمية (IDG). نحن نضمن التوطين الكامل للبيانات بنسبة ١٠٠٪ داخل الحدود الوطنية لجمهورية العراق دون أي تمرير أو معالجة عبر خوادم أجنبية خارجية.'
      : 'Data sovereignty represents the immutable foundational pillar of Iraq Digital Gateway (IDG). We mandate 100% in-country data residency, eliminating cross-border data leakage and enforcing institutional autonomy under strict international ISO 27001 standards.',
    sections: [
      {
        icon: Server,
        heading: isKu ? '١. مانەوەی ١٠٠٪ی داتاکان لەناو خاکی عێراق (Data Residency)' : isAr ? '١. توطين البيانات بنسبة ١٠٠٪ داخل العراق' : '1. 100% In-Country Data Residency',
        desc: isKu
          ? 'تەواوی داتای هاووڵاتیان، بازرگانی، گومرگ و وەزارەتەکان لە داتاسەنتەرە ناوخۆیییەکاندا پارێزراون:'
          : isAr
          ? 'تُحفظ وتُعالج كافة السجلات المؤسسية والبيانات الحيوية حصراً ضمن مراكز البيانات السيادية داخل العراق:'
          : 'All institutional records, trade transactions, and citizen telemetry are housed exclusively within sovereign data centers:',
        items: isKu
          ? [
              'سێرڤەرەکانی داتابەیس و پاشەکەوتکردن بە فیزیکی لە داتاسەنتەرە پێشکەوتووەکانی هەولێر و بەغدا جێگیرکراون.',
              'قەدەغەکردنی تەواوی ڕێڕەوکردنی داتای هەستیار بۆ دەرەوەی وڵات لە ڕێگەی فایروۆڵی نیشتمانیی فرەچین.',
              'تەنانەت پشکنینەکانی ژیریی دەستکرد (AI Inference) تەنها لەسەر کلاستەرە ناوخۆیییەکان جێبەجێ دەکرێن.',
              'یەدەگکردنی جوگرافی (Disaster Recovery) لەنێوان گرێیە ناوخۆیییەکانی عێراق بەبێ بەکارهێنانی سێرڤەری دەرەکی.',
            ]
          : isAr
          ? [
              'تتواجد البنية التحتية للخوادم وقواعد البيانات فعلياً في مراكز بيانات سيادية متقدمة في أربيل وبغداد.',
              'حظر قطعي لأي نقل أو توجيه عبر الحدود للبيانات الحساسة بواسطة جدران حماية وطنية متعددة الطبقات.',
              'تتم كافة معالجات ونماذج الذكاء الاصطناعي (AI Inference) محلياً داخل مراكز الحوسبة السيادية.',
              'استراتيجية التعافي من الكوارث (Disaster Recovery) مشفرة وموزعة بين عقد جغرافية عراقية داخلية حصراً.',
            ]
          : [
              'Primary database clusters and storage tiers are physically housed in certified data centers in Erbil and Baghdad.',
              'Zero unauthorized cross-border routing of institutional payload data enforced via stateful boundary inspection.',
              'Applied AI inference and machine learning models execute entirely on local, sovereign hardware nodes.',
              'Geographic disaster recovery is achieved through distributed domestic failover pairs across Iraqi governorates.',
            ],
      },
      {
        icon: Lock,
        heading: isKu ? '٢. تەلارسازیی متمانەی سفر (Zero-Trust Architecture)' : isAr ? '٢. معمارية انعدام الثقة (Zero-Trust)' : '2. Zero-Trust Security Architecture',
        desc: isKu
          ? 'پەیڕەوکردنی پرەنسیپی "هەرگیز متمانە مەکە، هەمیشە پشتڕاست بکەرەوە":'
          : isAr
          ? 'تطبيق صارم لمبدأ "لا تثق بأي طرف، وتحقق دائماً وبشكل مستمر":'
          : 'Universal implementation of the "Never Trust, Always Verify" architectural doctrine:',
        items: isKu
          ? [
              'هەموو پەیوەندییەکی نێوان خزمەتگوزارییەکان بە پرۆتۆکۆڵی mutual TLS (mTLS) کۆد دەکرێت.',
              'دەسەڵاتی دەستڕاگەیشتنی کەمترین (Least-Privilege RBAC) بۆ هەموو کارمەند و سیستەمەکان.',
              'پشتڕاستکردنەوەی فرەهۆکاری پێشکەوتوو (MFA) بە کلیلەکانی ئاسایشی FIDO2/WebAuthn بۆ هەژمارە هەستیارەکان.',
              'چاودێری و لێکۆڵینەوەی بەردەوامی جموجۆڵەکانی ناو تۆڕ بە شێوەی ڕاستەوخۆ (Real-time Anomaly Detection).',
            ]
          : isAr
          ? [
              'تشفير كافة الاتصالات البينية بين الخدمات البرمجية باستخدام بروتوكول mutual TLS (mTLS).',
              'تطبيق مبدأ الصلاحيات الأدنى (Least-Privilege RBAC) على كافة الأنظمة والمشغلين المؤسسيين.',
              'فرض التحقق متعدد العوامل (MFA) باستخدام مفاتيح أمنية مشفرة من طراز FIDO2/WebAuthn للحسابات الحساسة.',
              'رصد سلوكي مستمر ولحظي لكافة حركات الشبكة لاكتشاف الأنماط غير الطبيعية والتصدي لها فوراً.',
            ]
          : [
              'All microservice and edge communications require cryptographic mutual TLS (mTLS) validation.',
              'Strict least-privilege role-based access control (RBAC) across all administrative and operational planes.',
              'Hardware-backed multi-factor authentication (FIDO2/WebAuthn) enforced on all administrative access points.',
              'Continuous continuous telemetry behavioral profiling and automated real-time anomaly isolation.',
            ],
      },
      {
        icon: Cpu,
        heading: isKu ? '٣. ستانداردەکانی کۆدکردن و ئاسایشی بەڵگەنامەکان' : isAr ? '٣. معايير التشفير وأمن الوثائق' : '3. Cryptographic Standards & Encryption',
        desc: isKu
          ? 'بەرزترین پلەی پاراستنی تەکنیکی لەسەر هەموو چینەکانی داتا:'
          : isAr
          ? 'أعلى درجات الحصانة التشفيرية المعتمدة عالمياً لكافة طبقات البيانات:'
          : 'Military-grade cryptographic safeguards applied across all storage and transit conduits:',
        items: isKu
          ? [
              'کۆدکردنی بنکەدراوەکان لە کاتی وەستاندا بە ئەلگۆریتمی سەربازیی AES-256 بە کلیلەکانی HSM تایبەت.',
              'کۆدکردنی هەموو پەیوەندییەکان لە کاتی جوڵەدا بە پشتبەستن بە نوێترین ستانداردەکانی TLS 1.3.',
              'واژۆکردنی دیجیتاڵیی بەڵگەنامە گومرگی و دارایییەکان بە مۆری ئەلیکترۆنیی نەگۆڕ (Immutable Cryptographic Seal).',
              'بەستنەوەی تۆماری مێژوویی مامەڵەکان بە تۆماری هاوشێوەی بێدەستکاریکردن (Tamper-evident Audit Ledger).',
            ]
          : isAr
          ? [
              'تشفير قواعد البيانات في وضع السكون بواسطة معيار AES-256 مع مفاتيح مشفرة عبر أجهزة HSM وطنية.',
              'تشفير فائق لكافة القنوات والبيانات أثناء النقل بالاعتماد حصراً على بروتوكول TLS 1.3.',
              'التوقيع الرقمي للوثائق الجمركية والمالية بختم إلكتروني غير قابل للتزوير أو التعديل.',
              'تدوين كافة الحركات وسجلات التعديل في سجلات مراجعة تدقيقية غير قابلة للتلاعب (Tamper-evident Ledgers).',
            ]
          : [
              'Sovereign database encryption at rest using AES-256 with keys anchored in dedicated hardware security modules (HSMs).',
              'Zero fallback to legacy cipher suites: exclusively TLS 1.3 enforced on all external and internal channels.',
              'Cryptographic digital seals applied to all trade declarations, bills of lading, and official receipts.',
              'Tamper-evident append-only audit ledgers providing irrevocable non-repudiation for state oversight.',
            ],
      },
      {
        icon: FileCheck2,
        heading: isKu ? '٤. پابەندبوون بە ISO 27001 و بەرپەرچدانەوەی ڕووداوەکان' : isAr ? '٤. الامتثال لمعيار ISO 27001 والاستجابة للحوادث' : '4. ISO 27001 Compliance & Incident Response',
        desc: isKu
          ? 'سیستەمێکی بەڕێوەبردنی ئاسایشی زانیاریی نێودەوڵەتی (ISMS):'
          : isAr
          ? 'نظام شامل لإدارة أمن المعلومات (ISMS) وفق الضوابط الدولية والوطنية:'
          : 'Comprehensive Information Security Management System (ISMS) audited against international frameworks:',
        items: isKu
          ? [
              'پابەندبوون بە تەواوی ڕێنمایییەکانی ISO/IEC 27001 بۆ بەڕێوەبردنی ئاسایشی زانیاری.',
              'ناوەندی ئۆپەراسیۆنی ئاسایش (SOC) ٢٤ کاتژمێر کار دەکات بۆ پاراستنی بەردەوامی ژێرخانەکە.',
              'پلانی فەرمیی بەرپەرچدانەوەی خێرا: ئاگادارکردنەوەی دامەزراوە فەرمییەکان لە ماوەی کەمتر لە ١ کاتژمێر لە ئەگەری هەر هەڕەشەیەکدا.',
              'پشکنینی خولیی لاوازییەکان (Vulnerability Assessment) لەلایەن تیمە ئەندازیارییە سەربەخۆکانەوە.',
            ]
          : isAr
          ? [
              'امتثال كامل لمتطلبات المعيار الدولي ISO/IEC 27001 في إدارة أمن المعلومات المؤسسية.',
              'مركز عمليات أمنية (SOC) يعمل على مدار الساعة لرصد وحماية البنية التحتية من أي اختراق.',
              'خطة استجابة استباقية للحوادث: إشعار الجهات الرسمية والتنظيمية خلال أقل من ساعة واحدة عند رصد أي تهديد.',
              'فحوصات دورية وشاملة للثغرات البرمجية والشبكية بواسطة فرق هندسية وطنية مستقلة.',
            ]
          : [
              'Full lifecycle compliance with ISO/IEC 27001 Information Security Management System (ISMS) standards.',
              '24/7/365 Sovereign Security Operations Center (SOC) actively hunting, monitoring, and intercepting anomalous traffic.',
              'Statutory incident response SLA: Mandatory formal stakeholder notification within < 1 hour of validated threat detection.',
              'Quarterly independent third-party vulnerability assessments and continuous red-team defense verification.',
            ],
      },
    ],
    contactSection: {
      title: isKu ? 'ناوەندی ئاسایشی سایبەری و سەروەریی داتا' : isAr ? 'مركز الأمن السيبراني وسيادة البيانات' : 'Sovereign Cybersecurity Taskforce Contact',
      desc: isKu
        ? 'بۆ ڕاپۆرتکردنی هەر تێبینییەکی ئەمنی یان داواکاریی هاوبەشیی ئاسایشی دامەزراوەیی تکایە پەیوەندی بکەن بە:'
        : isAr
        ? 'للإبلاغ عن أي ملاحظات أمنية أو التنسيق المؤسسي المشترك في مجال سيادة البيانات، يرجى التواصل مع:'
        : 'For formal vulnerability disclosures or inter-agency sovereign security coordination:',
      email: 'mustafa@aigateiraq.com',
      entity: 'Iraq Digital Gateway (IDG) — Sovereign Cyber Command',
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
              label: isKu ? 'سەروەریی داتا' : isAr ? 'سيادة البيانات' : 'Sovereign Data',
            },
          ]}
        />

        {/* Page Header */}
        <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-sm mb-8">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-xs font-bold text-blue-900 mb-3">
            <Database className="w-3.5 h-3.5 text-blue-700" />
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
