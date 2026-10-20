'use client';

import React from 'react';
import { Printer } from 'lucide-react';

const GATEWAY_AI_CONTENT = {
  ku: {
    docCode: 'IDG-PRP-GAI-2026-ENT',
    classification: 'دەستپێشخەری نیشتمانی',
    title: 'Gateway AI',
    subtitle: 'دەروازەی زیرەکی نیشتمانی — هۆشمەندی سنوور و گومرک',
    sections: [
      {
        number: '١',
        heading: 'ناوی پڕۆژە و پەیوەندی نیشتمانی',
        content: 'Gateway AI (IDG-PRP-GAI-2026-ENT): سیستەمی زیرەکی نیشتمانی بۆ بەڕێوەبردنی بەهیوپێک لە سنوورەکان و گومرک. پلاتفۆرمەکە بنیاتناکراوە لەسەر AI Gate Iraq stack، بینینی کۆمپیوتەری پێشکەوتوو، و لێواری کۆمپیوتەری. ١٠٠% ماندووتی داتاکان لە ناوخۆی وڵات لە بنەی ISO 27001.',
      },
      {
        number: '٢',
        heading: 'خلاسەی جێبەجێکار',
        content: 'Gateway AI پلاتفۆرمێکی نیشتمانی سەروەری بۆ دەروازە سنوورییەکان و گومرگ (CBIP). دیزاین کراوە بۆ نوێکردنەوە و کۆنترۆڵکردنی بار و بازرگانی عێراق. سیستەمەکە پاڵپشتیکراوە بە AI Gate Iraq، بینینی کۆمپیوتەری، و لێواری دەروازەکان. لە ڕێگەی گرێدانی ڕاستەوخۆ لەگەڵ Iraq NSW و دەستەی گشتی گومرگ، خزمەت بە دەسەڵاتدارانی فیدراڵ و هەرێم دەکات.',
      },
      {
        number: '٣',
        heading: 'مەسەلەی سەلمێنراو',
        items: [
          'دواکەوتنی مەترسیداری کاتی ترانزێت: ٧ بۆ ١٥ ڕۆژ',
          'پەرتەوازەیی داتای فیدراڵ و هەرێم لە سیستەمە جیاواز',
          'قاچاخچێتی و فرتوفێڵی باج و کەمکردنەوەی بەها',
          'نەبوونی بینراوی ڕاستەوخۆی کاروانەکان لە دەروازەکان',
          'کورتهێنانی سەروەری دیجیتاڵی بەهۆی سیستەمە بیانییە',
        ],
      },
      {
        number: '٤',
        heading: 'چارەسەری Gateway AI',
        items: [
          'بڕبڕەی پشتی دیجیتاڵی یەکگرتووی فیدراڵ-هەرێم',
          'ماتۆڕی سکۆرینگی ریسکی پێشبینیکەری بە ژیری دەستکرد',
          'بینینی کۆمپیوتەری و ژیری دەستکرد بۆ تیشکی ئێکس',
          'بەیاننامەی ئەلیکترۆنی گومرگی سێ-زمانی',
          'دوانەی دیجیتاڵی دەروازە سنوورییەکان',
          'تۆماری دەستکاریپێنەکراوی ISO 27001',
        ],
      },
      {
        number: '٥',
        heading: 'تایبەتمەندی و توانستە سەرەکییەکان',
        items: [
          'مۆدیۆلی بەڕێوەبردنی بەکارخەری ئابووری (AEO)',
          'دۆزینەوەی پیشبینیکەری قاچاخچێتی و ساختەکاری',
          'پشتڕاستکردنەوەی بایۆمەتری گەشتیاران',
          'ژیری دەستکردی لێوار لەسەر دەروازەکان',
          'پرۆسێسکردنی زمانی سروشتی سەروەری (NLP)',
          'داشبۆردی فەرماندەیی باڵای جێبەجێکار',
          'هەناردەکردنی خۆکاری ئامارەکانی بازرگانی',
        ],
      },
      {
        number: '٦',
        heading: 'لایەنە سوودمەندەکان',
        items: [
          'دەستەی گشتی گومرگ (حکومەتی فیدراڵ)',
          'بەڕێوەبەرایەتی گشتی گومرگی هەرێمی کوردستان',
          'دەستەی دەروازە سنوورییەکان',
          'وەزارەتی بازرگانی',
          'هاوردەکاران، هەناردەکاران، و شاریەکانی شحن',
          'شاریکانی بازرگانی نێودەوڵەتی',
        ],
      },
      {
        number: '٧',
        heading: 'کۆمەڵە تەکنەلۆژیا و تەلارسازی سیستەم',
        items: [
          'بەرگی بەکارهێنەر: Next.js 15 / React / TypeScript (RTL)',
          'مایکرۆسێرڤسەکانی باکئێند: Go + gRPC (<50ms)',
          'بەرگی داتا: PostgreSQL + Time-Series',
          'بەرگی ژیری دەستکرد: AI Gate Iraq + Computer Vision',
          'بەرگی لێواری دەروازەکان: Edge Computing',
          'ئاسایش: Zero-Trust + ISO 27001 + AES-256',
        ],
      },
      {
        number: '٨',
        heading: 'هاوتەریببوونی ستراتیژی لەگەڵ ڕوانگەی ٢٠٣٥',
        items: [
          'یەکگرتوویی و هاوئاهەنگی نیشتمانی',
          'تواناسازی و بونیادنانی مرۆیی',
          'متمانە و شەفافیەتی نێودەوڵەتی',
          'بەردەوامی و سەروەری ژێرخان',
        ],
      },
    ],
  },
  ar: {
    docCode: 'IDG-PRP-GAI-2026-ENT',
    classification: 'مبادرة استراتيجية وطنية',
    title: 'Gateway AI',
    subtitle: 'البوابة الذكية الوطنية — ذكاء الحدود والجمارك',
    sections: [
      {
        number: '١',
        heading: 'اسم المشروع والولاية الوطنية',
        content: 'Gateway AI (IDG-PRP-GAI-2026-ENT): نظام وطني ذكي سيادي لإدارة الحدود والجمارك. تستند المنصة إلى حزمة الذكاء الاصطناعي السيادي (AI Gate Iraq)، الرؤية الحاسوبية المتقدمة، ومعالجة الحافة. توفر إقامة كاملة للبيانات بنسبة 100% داخل الحدود الوطنية وفقاً لـ ISO 27001.',
      },
      {
        number: '٢',
        heading: 'الملخص التنفيذي',
        content: 'تُعد منصة Gateway AI منصة سيادية وطنية لذكاء المنافذ الحدودية والجمارك. صُممت خصيصاً لإحداث تحول نوعي في إدارة الشحن التجاري والمنافذ. مدعومة بـ AI Gate Iraq، الرؤية الحاسوبية، ومعالجة الحافة. من خلال التكامل الأصيل مع Iraq NSW والهيئة العامة للجمارك، تقدم الخدمات للسلطات الاتحادية والإقليمية.',
      },
      {
        number: '٣',
        heading: 'المشكلة المثبتة بالأدلة',
        items: [
          'التأخير الحرج في زمن التخليص: ٧ إلى ١٥ يوماً',
          'تشتت البيانات بين المركز والإقليم في أنظمة منفصلة',
          'التهريب والتهرب الضريبي وتخفيض القيم',
          'غياب الرؤية اللحظية لحركة الشحن',
          'عجز السيادة الرقمية بسبب الأنظمة الأجنبية',
        ],
      },
      {
        number: '٤',
        heading: 'حل Gateway AI المقترح',
        items: [
          'العمود الفقري الرقمي السيادي الموحد',
          'محرك الذكاء الاصطناعي التنبؤي لتقييم المخاطر',
          'الرؤية الحاسوبية والأشعة السينية',
          'البيان الجمركي الإلكتروني الذكي',
          'التوأم الرقمي للمنافذ الحدودية',
          'سجلات التدقيق غير القابلة للتعديل',
        ],
      },
      {
        number: '٥',
        heading: 'الخصائص والقدرات الرئيسية',
        items: [
          'وحدة إدارة المشغّل الاقتصادي المعتمد (AEO)',
          'الكشف التنبؤي عن التهريب والاحتيال',
          'التحقق البيومتري من المسافرين',
          'ذكاء الحافة في المنافذ',
          'معالجة اللغة الطبيعية السيادية (NLP)',
          'لوحة القيادة التنفيذية العليا',
          'التصدير الآلي للإحصائيات التجارية',
        ],
      },
      {
        number: '٦',
        heading: 'الفئات والجهات المستفيدة',
        items: [
          'الهيئة العامة للجمارك (الحكومة الاتحادية)',
          'مديرية جمارك إقليم كردستان',
          'هيئة المنافذ الحدودية',
          'وزارة التجارة',
          'المستوردون والمصدرون وشركات الشحن',
          'الشركاء التجاريون الدوليون',
        ],
      },
      {
        number: '٧',
        heading: 'البنية التحتية والتقنيات',
        items: [
          'طبقة الواجهة الأمامية: Next.js 15 (RTL)',
          'الخدمات المصغرة: Go + gRPC (<50ms)',
          'طبقة البيانات: PostgreSQL + Time-Series',
          'طبقة الذكاء الاصطناعي: AI Gate Iraq',
          'طبقة الحافة: معالجة محلية بدون اتصال',
          'الأمان: Zero-Trust + ISO 27001 + AES-256',
        ],
      },
      {
        number: '٨',
        heading: 'المواءمة الاستراتيجية مع رؤية ٢٠٣٥',
        items: [
          'الاتساق والوحدة الوطنية',
          'بناء القدرات والكفاءة البشرية',
          'الثقة والمصداقية الدولية',
          'الاستدامة والسيادة المستمرة',
        ],
      },
    ],
  },
  en: {
    docCode: 'IDG-PRP-GAI-2026-ENT',
    classification: 'National Strategic Initiative',
    title: 'Gateway AI',
    subtitle: 'The Sovereign Intelligent Gateway — Customs & Border Intelligence',
    sections: [
      {
        number: '1',
        heading: 'Project Name & National Mandate',
        content: 'Gateway AI (IDG-PRP-GAI-2026-ENT): Iraq\'s flagship sovereign Customs & Border Intelligence Platform (CBIP). Engineered to modernize and secure the management of commercial cargo and border crossings. Powered by AI Gate Iraq stack, computer vision, and edge computing. Guarantees 100% in-country data residency compliant with ISO 27001.',
      },
      {
        number: '2',
        heading: 'Executive Summary',
        content: 'Gateway AI is Iraq\'s sovereign Customs & Border Intelligence Platform. Designed to transform commercial cargo management across all border crossings. Supported by AI Gate Iraq, computer vision, and edge processing. Integrates natively with Iraq NSW and the General Commission of Customs to serve federal and regional authorities.',
      },
      {
        number: '3',
        heading: 'The Proven Problem',
        items: [
          'Critical Clearance Latency: 7 to 15 days average dwell time',
          'Fragmented Federal–Regional Data across disparate systems',
          'Smuggling, Tariff Evasion, and Revenue Leakage',
          'Absence of Real-Time Cargo Visibility at borders',
          'Digital Sovereignty Deficit due to foreign dependencies',
        ],
      },
      {
        number: '4',
        heading: 'The Gateway AI Solution',
        items: [
          'Unified Federal–Regional Digital Backbone',
          'AI-Driven Predictive Risk Scoring Engine',
          'Computer Vision & X-Ray AI Analysis',
          'Smart Electronic Customs Declaration (e-Declaration)',
          'Border Crossing Digital Twin Infrastructure',
          'Immutable Audit Trails (ISO 27001)',
        ],
      },
      {
        number: '5',
        heading: 'Key Features & Capabilities',
        items: [
          'AEO (Authorized Economic Operator) Management',
          'Predictive Smuggling & Fraud Detection',
          'Biometric Traveler Verification',
          'Edge AI at Physical Crossings',
          'Sovereign Natural Language Processing (NLP)',
          'Executive Command Dashboard',
          'Automated Trade Statistics Export',
        ],
      },
      {
        number: '6',
        heading: 'Target Audience & Beneficiaries',
        items: [
          'General Commission of Customs (Federal)',
          'Kurdistan Region Customs Directorate',
          'Border Ports Commission',
          'Ministry of Trade',
          'Licensed Importers, Exporters, Forwarders',
          'International Trade Partners & Organizations',
        ],
      },
      {
        number: '7',
        heading: 'Tech Stack & Enterprise Architecture',
        items: [
          'Frontend Layer: Next.js 15 / React / TypeScript (RTL)',
          'Backend Microservices: Go + gRPC (<50ms latency)',
          'Data Layer: PostgreSQL + Distributed Time-Series',
          'AI/ML Layer: AI Gate Iraq + Computer Vision',
          'Edge Layer: On-premise edge inference nodes',
          'Security: Zero-Trust + ISO 27001 + AES-256',
        ],
      },
      {
        number: '8',
        heading: 'Strategic Alignment with IDG and Vision 2035',
        items: [
          'Coherence: Unified national taxonomy for trade',
          'Capability: Professionalized institutional training',
          'Trust: Tamper-evident cryptographic ledgers',
          'Continuity: 100% sovereign hosting in Iraq',
        ],
      },
    ],
  },
};

export default function GatewayAIClient({ locale }: { locale: string }) {
  const isRtl = locale === 'ku' || locale === 'ar';
  const content = GATEWAY_AI_CONTENT[locale as keyof typeof GATEWAY_AI_CONTENT];

  if (!content) {
    return (
      <div className="min-h-screen bg-[#060D1A] flex items-center justify-center">
        <p className="text-slate-400">Locale not supported</p>
      </div>
    );
  }

  return (
    <div
      className={`min-h-screen bg-[#060D1A] text-slate-200 ${isRtl ? 'rtl' : 'ltr'}`}
      dir={isRtl ? 'rtl' : 'ltr'}
    >
      {/* Header */}
      <div className="bg-[#0B172E] border-b border-emerald-500/20 py-8 md:py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-start gap-4">
            <div className="flex-1">
              <p className="text-xs uppercase tracking-wider text-emerald-400 font-bold mb-2">
                {content.classification}
              </p>
              <p className="font-mono text-sm text-slate-400 mb-4">
                {content.docCode}
              </p>
              <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">
                {content.title}
              </h1>
              <p className="text-lg text-emerald-300">{content.subtitle}</p>
            </div>
            <button
              onClick={() => window.print()}
              className="flex items-center gap-2 px-4 py-2 bg-emerald-500/10 border border-emerald-500/30 rounded-lg text-emerald-400 hover:bg-emerald-500/20 transition flex-shrink-0 mt-2"
              title="Print document"
            >
              <Printer className="w-4 h-4" />
              <span className="text-sm font-medium hidden sm:inline">
                {locale === 'ku' ? 'چاپ' : locale === 'ar' ? 'طباعة' : 'Print'}
              </span>
            </button>
          </div>
        </div>
      </div>

      {/* Content Sections */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 space-y-10 md:space-y-12">
        {content.sections.map((section, idx) => (
          <section key={idx} className="space-y-4">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 bg-emerald-500/20 border border-emerald-500/50 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                <span className="text-emerald-400 font-bold text-base">
                  {section.number}
                </span>
              </div>
              <h2 className="text-xl md:text-2xl font-bold text-white pt-2">
                {section.heading}
              </h2>
            </div>

            {section.content && (
              <p className="text-slate-300 leading-relaxed ml-14 text-sm md:text-base">
                {section.content}
              </p>
            )}

            {section.items && section.items.length > 0 && (
              <ul className="space-y-3 ml-14">
                {section.items.map((item, itemIdx) => (
                  <li
                    key={itemIdx}
                    className="flex gap-3 text-slate-300 text-sm md:text-base"
                  >
                    <span className="text-emerald-400 font-bold flex-shrink-0 mt-0.5">
                      •
                    </span>
                    <span className="leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            )}
          </section>
        ))}
      </div>

      {/* CTA Footer */}
      <div className="bg-[#0B172E] border-t border-emerald-500/20 mt-12 md:mt-16 py-10 md:py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <p className="text-slate-300 text-sm md:text-base">
            {locale === 'ku'
              ? 'بۆ زانیاری زیاتر و داوای سەرمایە:'
              : locale === 'ar'
              ? 'للمزيد من المعلومات ورسالات الاستثمار:'
              : 'For more information and investment inquiries:'}
          </p>
          <a
            href="mailto:partnerships@idggov.tech"
            className="inline-flex items-center gap-2 px-6 py-3 bg-emerald-500/20 border border-emerald-500/50 rounded-lg text-emerald-300 hover:bg-emerald-500/30 hover:border-emerald-400 transition font-semibold text-sm md:text-base"
          >
            partnerships@idggov.tech
          </a>
        </div>
      </div>
    </div>
  );
}
