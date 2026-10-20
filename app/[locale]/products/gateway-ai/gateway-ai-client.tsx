'use client';

import React from 'react';
import { Printer, Shield, ArrowLeft, ArrowRight } from 'lucide-react';
import Link from 'next/link';

interface Section {
  number: string;
  heading: string;
  content?: string;
  items?: string[];
}

interface ProposalContent {
  docCode: string;
  classification: string;
  securityBadge: string;
  title: string;
  subtitle: string;
  sections: Section[];
  ctaNotice: string;
  ctaButton: string;
  backToPortfolio: string;
  printLabel: string;
}

const GATEWAY_AI_CONTENT: Record<'ku' | 'ar' | 'en', ProposalContent> = {
  ku: {
    docCode: 'IDG-PRP-GAI-2026-ENT',
    classification: 'پێشنیاری دەستپێشخەری ستراتیژی نیشتمانی',
    securityBadge: 'فەرمی / پارێزراوی سەروەری نیشتمانی',
    title: 'Gateway AI',
    subtitle: 'دەروازەی زیرەکی نیشتمانی — هۆشمەندی سنوور و گومرگ',
    backToPortfolio: 'گەڕانەوە بۆ پۆرتفۆلیۆ',
    printLabel: 'چاپکردنی بەڵگەنامە',
    ctaNotice: 'بۆ زانیاری زیاتر و داوای سەرمایە:',
    ctaButton: 'partnerships@idggov.tech',
    sections: [
      {
        number: '١',
        heading: 'ناوی پڕۆژە و دروشمی دامەزراوەیی',
        content:
          'ناوی پڕۆژە: Gateway AI\nدرووشم: دەروازەی زیرەکی نیشتمانی — هۆشمەندی سنوور و گومرگ\nکۆدی بەڵگەنامە: IDG-PRP-GAI-2026-ENT\nپۆلێنکردنی ئاسایش: فەرمی / پارێزراوی سەروەری نیشتمانی',
      },
      {
        number: '٢',
        heading: 'پوختەی جێبەجێکار',
        content:
          'Gateway AI پلاتفۆرمێکی نیشتمانی سەروەرییە بۆ دەروازە سنوورییەکان و گومرگ (CBIP)، کە تایبەت دیزاین کراوە بۆ نوێکردنەوە و کۆنترۆڵکردنی بەڕێوەبردنی بار و بازرگانی عێراق [SOURCE REQUIRED]. سیستەمەکە پاڵپشتی دەکرێت بە AI Gate Iraq، بینینی کۆمپیوتەری، و لێواری دەروازەکان. لە ڕێگەی گرێدانی ڕاستەوخۆ لەگەڵ Iraq NSW و دەستەی گشتی گومرگ، خزمەت بە دەسەڵاتدارانی فیدراڵ و هەرێمی کوردستان دەکات لە ڕێگەی دەفتەرێکی تۆماری هاوبەش و نەپچڕاوەوە [SOURCE REQUIRED]. پلاتفۆرمەکە کارە مەیدانییەکان لە پشکنینی دەستییەوە دەگۆڕێت بۆ مۆدێلی ئازادکردنی پێشبینیکراو و لەسەر بنەمای مەترسی [SOURCE REQUIRED].',
      },
      {
        number: '٣',
        heading: 'کێشەی سەلمێنراو',
        items: [
          'دواکەوتنی کاتی پاکتاوی بار: تێکڕای مانەوەی بار لە دەروازە سەرەکییەکان لە نێوان ٧ بۆ ١٥ ڕۆژە [SOURCE REQUIRED].',
          'پەرتەوازەیی داتای فیدراڵ و هەرێم: دەستەی گشتی گومرگ لە بەغدا و بەڕێوەبەرایەتی گومرگی هەرێم لەسەر دوو سیستەمی جیاواز کاردەکەن [SOURCE REQUIRED].',
          'قاچاخچێتی و خۆدزینەوە لە باج: نەبوونی ماتۆڕێکی یەکگرتووی خاڵبەندی مەترسی، هۆکاری کەمکردنەوەی بەهای پسوولەیە [SOURCE REQUIRED].',
          'نەبوونی بینراوی ڕاستەوخۆی کاروانەکان: نەبوونی نموونەی دیجیتاڵی، ANPR، کێشخانەی ئەلیکترۆنی، و شیتاڵکردنی تیشکی ئێکس لە ئیبراهیم خەلیل، فەیش خابوور، ترێبێل، ئوم قەسر، شەلەمچە، مەندەلی، ئەلقائیم، و ڕەبیعە [SOURCE REQUIRED].',
          'کورتهێنانی سەروەری دیجیتاڵی: پێشنیارە بیانییەکان بۆ "پەنجەرەی یەکگرتوو" مەترسی لەسەر داتای ستراتیژی و بایۆمەتری گەشتیاران دروست دەکەن [SOURCE REQUIRED].',
        ],
      },
      {
        number: '٤',
        heading: 'چارەسەری Gateway AI',
        items: [
          'بڕبڕەی پشتی دیجیتاڵی یەکگرتووی فیدراڵ-هەرێم: دەفتەرێکی سەروەری کە نۆدی بەغدا و هەولێر بەیەک دەگرێتەوە [SOURCE REQUIRED].',
          'ماتۆڕی خاڵبەندی مەترسی بە ژیری دەستکرد: پۆلێنکردنی بار بۆ نزم/مامناوەند/بەرز پێش گەیشتن بە دەروازە [SOURCE REQUIRED].',
          'بینینی کۆمپیوتەری و ژیری دەستکرد بۆ تیشکی ئێکس: ناسینەوەی خۆکاری کەلوپەلی قاچاخ و پشکنینی HS-code [SOURCE REQUIRED].',
          'بەیاننامەی ئەلیکترۆنی گومرگی (e-Declaration): فۆرمی سێ-زمانی لەگەڵ OCR و بەراوردکردن لەگەڵ Iraq NSW [SOURCE REQUIRED].',
          'دوانەی دیجیتاڵی دەروازە سنوورییەکان: داشبۆردی جوگرافی لە کاتی ڕاستەقینەدا لەگەڵ ANPR و کێشخانە [SOURCE REQUIRED].',
          'تۆماری دەستکاریپێنەکراو (ISO 27001): تۆمارکردنی کریپتۆگرافی بۆ هەموو ڕاگەیەندراو و بڕیارەکان [SOURCE REQUIRED].',
        ],
      },
      {
        number: '٥',
        heading: 'تایبەتمەندی و توانستە سەرەکییەکان',
        items: [
          'مۆدیۆلی بەڕێوەبردنی بەکارخەری ئابووری ڕێگەپێدراو (AEO) [SOURCE REQUIRED]',
          'دۆزینەوەی پێشبینیکەری قاچاخچێتی و ساختەکاری دارایی [SOURCE REQUIRED]',
          'پشتڕاستکردنەوەی بایۆمەتری گەشتیاران [SOURCE REQUIRED]',
          'ژیری دەستکردی لێوار لەسەر دەروازەکان (Offline-Degraded Mode) [SOURCE REQUIRED]',
          'پرۆسێسکردنی زمانی سروشتی سەروەری (NLP — کوردی، عەرەبی، ئینگلیزی) [SOURCE REQUIRED]',
          'داشبۆردی فەرماندەیی باڵای جێبەجێکار',
          'هەناردەکردنی خۆکاری ئامارەکانی بازرگانی (WTO / UN Comtrade)',
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
          'هاوردەکاران، هەناردەکاران، و کۆمپانیاکانی گواستنەوەی مۆڵەتپێدراو',
          'هاوبەشە بازرگانییە نێودەوڵەتییەکان (WTO، WCO، وڵاتانی دراوسێ)',
        ],
      },
      {
        number: '٧',
        heading: 'کۆمەڵە تەکنەلۆژیا و تەلارسازی سیستەم',
        items: [
          'بەرگی بەکارهێنەر: Next.js 15 / React / TypeScript (RTL/LTR)',
          'مایکرۆسێرڤسەکانی باکئێند: Go + gRPC (<50ms latency) [SOURCE REQUIRED]',
          'بەرگی داتا: PostgreSQL (ACID) + Distributed Time-Series [SOURCE REQUIRED]',
          'بەرگی ژیری دەستکرد: AI Gate Iraq + Computer Vision (X-Ray, ANPR) [SOURCE REQUIRED]',
          'بەرگی لێواری دەروازەکان: Edge Computing (Offline-Degraded) [SOURCE REQUIRED]',
          'ئاسایش: Zero-Trust + AES-256 + TLS 1.3 + HSM + RBAC + ISO 27001 [SOURCE REQUIRED]',
        ],
      },
      {
        number: '٨',
        heading: 'هاوتەریببوونی ستراتیژی لەگەڵ ڕوانگەی ٢٠٣٥',
        items: [
          'یەکگرتوویی و هاوئاهەنگی نیشتمانی (Coherence)',
          'تواناسازی و بونیادنانی مرۆیی (Capability) — بە هاوبەشی لەگەڵ ZaNa Academy [SOURCE REQUIRED]',
          'متمانە و شەفافیەتی نێودەوڵەتی (Trust) — بە پێوانەی ImpactIQ [SOURCE REQUIRED]',
          'بەردەوامی و سەروەری ژێرخان (Continuity)',
        ],
      },
    ],
  },
  ar: {
    docCode: 'IDG-PRP-GAI-2026-ENT',
    classification: 'مقترح مبادرة استراتيجية وطنية',
    securityBadge: 'رسمي / محمي بالسيادة الوطنية',
    title: 'Gateway AI',
    subtitle: 'البوابة الذكية الوطنية — ذكاء الحدود والجمارك',
    backToPortfolio: 'العودة إلى المحفظة',
    printLabel: 'طباعة الوثيقة',
    ctaNotice: 'للمزيد من المعلومات وطلبات الاستثمار والشراكة:',
    ctaButton: 'partnerships@idggov.tech',
    sections: [
      {
        number: '١',
        heading: 'اسم المشروع والولاية الوطنية',
        content:
          'اسم المشروع: Gateway AI\nالشعار المؤسسي: البوابة الذكية الوطنية — ذكاء الحدود والجمارك\nرمز الوثيقة: IDG-PRP-GAI-2026-ENT\nالتصنيف الأمني: رسمي / محمي بالسيادة الوطنية',
      },
      {
        number: '٢',
        heading: 'الملخص التنفيذي',
        content:
          'تُعد منصة Gateway AI منصة سيادية وطنية لذكاء المنافذ الحدودية والجمارك (CBIP)، صُممت خصيصاً لإحداث تحول نوعي في إدارة الشحن التجاري والمنافذ الحدودية في جمهورية العراق [SOURCE REQUIRED]. مدعومة بحزمة AI Gate Iraq والرؤية الحاسوبية ومعالجة الحافة. من خلال التكامل الأصيل مع النافذة الوطنية الموحدة (Iraq NSW) والهيئة العامة للجمارك، تقدم المنصة خدماتها للسلطات الاتحادية والإقليمية عبر سجل رقمي موحد غير قابل للازدواجية [SOURCE REQUIRED]. تحول المنصة العمليات الميدانية من التفتيش اليدوي إلى نموذج الإفراج التنبؤي المبني على المخاطر [SOURCE REQUIRED].',
      },
      {
        number: '٣',
        heading: 'المشكلة المثبتة بالأدلة',
        items: [
          'التأخير الحرج في زمن التخليص: متوسط مكوث الشحنات في المنافذ الرئيسية يتراوح بين ٧ إلى ١٥ يوماً [SOURCE REQUIRED].',
          'تشتت البيانات بين المركز والإقليم: تعمل الهيئة العامة للجمارك في بغداد ومديرية الجمارك في الإقليم على نظامين منفصلين [SOURCE REQUIRED].',
          'التهريب والتهرب الضريبي وتخفيض القيم: غياب محرك تقييم مخاطر موحد يؤدي إلى فاقد إيرادي سنوي كبير [SOURCE REQUIRED].',
          'غياب الرؤية اللحظية للشحنات: افتقار المنافذ إلى التوائم الرقمية، وأنظمة ANPR، والموازين الإلكترونية، وأجهزة الأشعة المتصلة في إبراهيم الخليل، وفيشخابور، وطريبيل، وأم قصر، والشلامجة، ومندلي، والقائم، وربيعة [SOURCE REQUIRED].',
          'عجز السيادة الرقمية: مقترحات الشركات الأجنبية للنافذة الموحدة تعرض البيانات التجارية والبيومترية لمخاطر خروجها خارج البلاد [SOURCE REQUIRED].',
        ],
      },
      {
        number: '٤',
        heading: 'حل Gateway AI المقترح',
        items: [
          'العمود الفقري الرقمي السيادي الموحد: دفتر أستاذ سيادي يربط عُقد بغداد وأربيل بزمن وصول منخفض [SOURCE REQUIRED].',
          'محرك الذكاء الاصطناعي التنبؤي لتقييم المخاطر: تصنيف فوري للشحنات (منخفض/متوسط/عالي) قبل الوصول [SOURCE REQUIRED].',
          'الرؤية الحاسوبية والذكاء الاصطناعي للأشعة السينية: كشف آلي للمواد المهربة ومطابقة بنود التعريفة الجمركية HS-code [SOURCE REQUIRED].',
          'البيان الجمركي الإلكتروني الذكي (e-Declaration): وثيقة موحدة ثلاثية اللغات مدعومة بالتعرف الضوئي OCR [SOURCE REQUIRED].',
          'التوأم الرقمي للمنافذ الحدودية: لوحة تحكم جغرافية لحظية مرتبطة بقراءات ANPR والموازين الذكية [SOURCE REQUIRED].',
          'سجلات التدقيق غير القابلة للتعديل (ISO 27001): تسجيل مشفر لكافة الإقرارات والقرارات الإدارية [SOURCE REQUIRED].',
        ],
      },
      {
        number: '٥',
        heading: 'الخصائص والقدرات الرئيسية',
        items: [
          'وحدة إدارة المشغّل الاقتصادي المعتمد (AEO) [SOURCE REQUIRED]',
          'الكشف التنبؤي عن التهريب والاحتيال الضريبي [SOURCE REQUIRED]',
          'التحقق البيومتري الآمن من المسافرين وطواقم الشحن [SOURCE REQUIRED]',
          'ذكاء الحافة في المنافذ (وضع العمل دون اتصال Offline-Degraded) [SOURCE REQUIRED]',
          'معالجة اللغة الطبيعية السيادية للوثائق (NLP — عربي، كردي، إنجليزي) [SOURCE REQUIRED]',
          'لوحة القيادة التنفيذية الاستراتيجية العليا',
          'التصدير الآلي للإحصائيات التجارية الدولية (معايير WTO / UN Comtrade)',
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
          'المستوردون والمصدرون وشركات الشحن المرخصة',
          'الشركاء التجاريون الدوليون (منظمة التجارة العالمية، منظمة الجمارك العالمية، دول الجوار)',
        ],
      },
      {
        number: '٧',
        heading: 'البنية التحتية والتقنيات',
        items: [
          'طبقة الواجهة الأمامية: Next.js 15 / React / TypeScript (RTL/LTR)',
          'الخدمات المصغرة المتقدمة: Go + gRPC (<50ms) [SOURCE REQUIRED]',
          'طبقة البيانات السيادية: PostgreSQL (ACID) + Distributed Time-Series [SOURCE REQUIRED]',
          'طبقة الذكاء الاصطناعي: AI Gate Iraq + Computer Vision (X-Ray, ANPR) [SOURCE REQUIRED]',
          'طبقة الحافة الميدانية: معالجة محلية مستقلة عند انقطاع الاتصال [SOURCE REQUIRED]',
          'الأمان والامتثال: Zero-Trust + AES-256 + TLS 1.3 + HSM + ISO 27001 [SOURCE REQUIRED]',
        ],
      },
      {
        number: '٨',
        heading: 'المواءمة الاستراتيجية مع رؤية ٢٠٣٥',
        items: [
          'الاتساق والوحدة الوطنية (Coherence)',
          'بناء القدرات والكفاءة البشرية (Capability) — بالتكامل مع أكاديمية زانا ZaNa Academy [SOURCE REQUIRED]',
          'الثقة والمصداقية الدولية (Trust) — بالقياس المعياري عبر ImpactIQ [SOURCE REQUIRED]',
          'الاستدامة والسيادة المستمرة للبنية التحتية (Continuity)',
        ],
      },
    ],
  },
  en: {
    docCode: 'IDG-PRP-GAI-2026-ENT',
    classification: 'National Strategic Initiative Proposal',
    securityBadge: 'Official / Sovereign Restricted',
    title: 'Gateway AI',
    subtitle: 'The Sovereign Intelligent Gateway — Customs & Border Intelligence',
    backToPortfolio: 'Back to Portfolio',
    printLabel: 'Print Document',
    ctaNotice: 'For strategic briefings, technical dossiers, and partnership inquiries:',
    ctaButton: 'partnerships@idggov.tech',
    sections: [
      {
        number: '1',
        heading: 'Project Name & Institutional Mandate',
        content:
          'Project Name: Gateway AI\nInstitutional Tagline: The Sovereign Intelligent Gateway — Customs & Border Intelligence\nDocument Reference: IDG-PRP-GAI-2026-ENT\nSecurity Classification: Official / Sovereign Restricted',
      },
      {
        number: '2',
        heading: 'Executive Summary',
        content:
          'Gateway AI is Iraq\'s sovereign Customs & Border Intelligence Platform (CBIP), engineered specifically to modernize, secure, and govern the transit of commercial cargo across all national border terminals [SOURCE REQUIRED]. Powered by the AI Gate Iraq sovereign stack, high-throughput computer vision, and edge computing nodes. Through native bidirectional synchronization with the Iraq National Single Window (Iraq NSW) and the General Commission of Customs, it unifies federal and regional customs authorities via an immutable, non-duplicative sovereign ledger [SOURCE REQUIRED]. The platform transitions border operations from invasive manual inspections to risk-weighted, predictive green-channel clearances [SOURCE REQUIRED].',
      },
      {
        number: '3',
        heading: 'The Proven Problem',
        items: [
          'Critical Clearance Latency: Dwell time across major border corridors averages 7 to 15 days [SOURCE REQUIRED].',
          'Federal–Regional Data Fragmentation: Federal Customs (Baghdad) and KRG Customs operate disparate administrative systems [SOURCE REQUIRED].',
          'Smuggling, Tariff Evasion & Revenue Leakage: The absence of a unified predictive risk engine results in extensive fiscal loss [SOURCE REQUIRED].',
          'Absence of Real-Time Cargo Visibility: Border crossings lack digital twins, ANPR tracking, telemetry scales, and automated X-ray analysis at Ibrahim Khalil, Fishkhabur, Trebil, Umm Qasr, Shalamcheh, Mandali, Al-Qaim, and Rabia [SOURCE REQUIRED].',
          'Digital Sovereignty Deficit: Foreign proprietary software proposals risk exposing critical trade flows and traveler biometric metadata [SOURCE REQUIRED].',
        ],
      },
      {
        number: '4',
        heading: 'The Gateway AI Solution',
        items: [
          'Unified Federal–Regional Digital Backbone: Sovereign multi-node ledger interconnecting Baghdad and Erbil with low-latency replication [SOURCE REQUIRED].',
          'AI-Driven Predictive Risk Scoring Engine: Automated cargo risk profiling (Low/Medium/High) prior to border arrival [SOURCE REQUIRED].',
          'Computer Vision & X-Ray AI Inspection: Automated anomaly identification, contraband detection, and HS-code verification [SOURCE REQUIRED].',
          'Smart Electronic Customs Declaration (e-Declaration): Tri-lingual standardized forms integrated with sovereign OCR and Iraq NSW [SOURCE REQUIRED].',
          'Border Crossing Digital Twin Infrastructure: Real-time geospatial monitoring interfaced with physical ANPR and weighbridges [SOURCE REQUIRED].',
          'Immutable Audit Ledger (ISO 27001): Cryptographic logging ensuring non-repudiation of all declarations and clearance decisions [SOURCE REQUIRED].',
        ],
      },
      {
        number: '5',
        heading: 'Key Features & Capabilities',
        items: [
          'Authorized Economic Operator (AEO) Tiered Fast-Track Module [SOURCE REQUIRED]',
          'Predictive Fiscal Fraud & Tariff Circumvention Detection [SOURCE REQUIRED]',
          'Biometric Operator & Driver Verification Protocols [SOURCE REQUIRED]',
          'Edge AI at Physical Terminals (Offline-Degraded Mode) [SOURCE REQUIRED]',
          'Sovereign Multilingual Natural Language Processing (Kurdish, Arabic, English) [SOURCE REQUIRED]',
          'Executive Command & Operations Center Dashboard',
          'Automated International Trade Statistics Engine (WTO / UN Comtrade Standards)',
        ],
      },
      {
        number: '6',
        heading: 'Target Audience & Beneficiaries',
        items: [
          'General Commission of Customs (Federal Government)',
          'Kurdistan Region Customs Directorate',
          'Border Ports Commission',
          'Ministry of Trade & Ministry of Transport',
          'Certified Commercial Importers, Exporters, and Forwarders',
          'International Trade Partners (WTO, WCO, Bilateral Trade Corridors)',
        ],
      },
      {
        number: '7',
        heading: 'Tech Stack & Enterprise Architecture',
        items: [
          'User Interface Layer: Next.js 15 / React / TypeScript (Full RTL/LTR Symmetry)',
          'Backend Microservices: Go + gRPC (<50ms inter-service latency) [SOURCE REQUIRED]',
          'Data Persistence Layer: PostgreSQL (ACID) + Distributed Time-Series Engine [SOURCE REQUIRED]',
          'Artificial Intelligence Core: AI Gate Iraq + Computer Vision Models (X-Ray, ANPR) [SOURCE REQUIRED]',
          'Terminal Edge Compute: Containerized Edge Inference Nodes (Air-Gapped Resilient) [SOURCE REQUIRED]',
          'Security Architecture: Zero-Trust + AES-256 + TLS 1.3 + HSM + ISO 27001 [SOURCE REQUIRED]',
        ],
      },
      {
        number: '8',
        heading: 'Strategic Alignment with IDG and Vision 2035',
        items: [
          'National Coherence: Unified taxonomy and non-duplicative cargo oversight nationwide',
          'Institutional Capability: Human capital training powered by ZaNa Academy [SOURCE REQUIRED]',
          'Global Trust & Transparency: Evidence-based socio-economic measurement certified by ImpactIQ [SOURCE REQUIRED]',
          'Operational Continuity: 100% sovereign hosting with zero foreign cloud dependency',
        ],
      },
    ],
  },
};

function renderTextWithSources(text: string) {
  if (!text.includes('[SOURCE REQUIRED]')) return text;
  const parts = text.split('[SOURCE REQUIRED]');
  return (
    <>
      {parts.map((part, idx) => (
        <React.Fragment key={idx}>
          {part}
          {idx < parts.length - 1 && (
            <span className="inline-flex items-center align-middle mx-1.5 px-2 py-0.5 rounded text-[11px] font-mono font-bold bg-rose-500/15 border border-rose-500/40 text-rose-400 select-all tracking-wider">
              [SOURCE REQUIRED]
            </span>
          )}
        </React.Fragment>
      ))}
    </>
  );
}

export default function GatewayAIClient({ locale }: { locale: string }) {
  const isRtl = locale === 'ku' || locale === 'ar';
  const validLang = (locale === 'ku' || locale === 'ar' || locale === 'en' ? locale : 'ku') as 'ku' | 'ar' | 'en';
  const content = GATEWAY_AI_CONTENT[validLang];

  return (
    <div
      className={`min-h-screen bg-[#060D1A] text-slate-200 ${isRtl ? 'rtl' : 'ltr'}`}
      dir={isRtl ? 'rtl' : 'ltr'}
      lang={locale === 'ku' ? 'ckb' : locale}
    >
      {/* Top Navigation Bar */}
      <nav className="bg-[#0B172E]/90 border-b border-[#102447] backdrop-blur sticky top-0 z-30">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <Link
            href={`/${locale}/portfolio`}
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-emerald-400 hover:text-emerald-300 transition-colors"
          >
            {isRtl ? <ArrowRight className="w-4 h-4 rtl:rotate-0" /> : <ArrowLeft className="w-4 h-4" />}
            <span>{content.backToPortfolio}</span>
          </Link>
          <div className="flex items-center gap-3">
            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-semibold">
              <Shield className="w-3.5 h-3.5" />
              <span>{content.securityBadge}</span>
            </span>
            <button
              type="button"
              onClick={() => window.print()}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-[#0B172E] border border-emerald-500/40 text-emerald-300 hover:bg-emerald-500/10 hover:border-emerald-400 text-xs sm:text-sm font-medium transition-colors cursor-pointer"
              title={content.printLabel}
            >
              <Printer className="w-4 h-4" />
              <span className="hidden sm:inline">{content.printLabel}</span>
            </button>
          </div>
        </div>
      </nav>

      {/* Header Banner */}
      <header className="bg-gradient-to-b from-[#0B172E] to-[#060D1A] border-b border-emerald-500/20 py-10 sm:py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center gap-2 mb-3">
            <span className="text-xs uppercase tracking-wider text-emerald-400 font-bold px-2.5 py-1 rounded bg-emerald-500/10 border border-emerald-500/30">
              {content.classification}
            </span>
            <span className="font-mono text-xs text-slate-400 px-2.5 py-1 rounded bg-slate-900/80 border border-slate-800">
              {content.docCode}
            </span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-3">
            {content.title}
          </h1>
          <p className="text-lg sm:text-xl text-emerald-300 font-medium max-w-3xl leading-relaxed">
            {content.subtitle}
          </p>
        </div>
      </header>

      {/* Main 8-Section Proposal */}
      <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14 space-y-10 sm:space-y-12">
        {content.sections.map((section, idx) => (
          <section
            key={idx}
            className="p-5 sm:p-7 md:p-8 rounded-2xl bg-[#0B172E]/70 border border-[#102447] hover:border-emerald-500/40 transition-colors shadow-lg shadow-black/20"
          >
            {/* Section Heading with Emerald Accent Bar */}
            <div className="flex items-center gap-3.5 mb-5 pb-3 border-b border-[#102447]">
              <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-emerald-500/20 border border-emerald-500/50 text-emerald-400 font-bold text-sm shrink-0">
                {section.number}
              </span>
              <div className="h-6 w-1 rounded-full bg-emerald-500 shrink-0" />
              <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                {section.heading}
              </h2>
            </div>

            {/* Paragraph / multi-line content */}
            {section.content && (
              <div className="space-y-2 text-slate-300 text-sm sm:text-base leading-relaxed whitespace-pre-line">
                {renderTextWithSources(section.content)}
              </div>
            )}

            {/* Bullet / itemized list */}
            {section.items && section.items.length > 0 && (
              <ul className="space-y-3.5">
                {section.items.map((item, itemIdx) => (
                  <li key={itemIdx} className="flex items-start gap-3 text-slate-300 text-sm sm:text-base">
                    <span className="text-emerald-400 font-bold shrink-0 mt-0.5">•</span>
                    <span className="leading-relaxed flex-1">
                      {renderTextWithSources(item)}
                    </span>
                  </li>
                ))}
              </ul>
            )}
          </section>
        ))}
      </main>

      {/* CTA Footer */}
      <footer className="bg-[#0B172E] border-t border-emerald-500/30 mt-12 py-10 sm:py-12">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <p className="text-slate-300 text-sm sm:text-base font-medium">
            {content.ctaNotice}
          </p>
          <div>
            <a
              href={`mailto:${content.ctaButton}`}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-emerald-500/20 border border-emerald-500/50 text-emerald-300 hover:bg-emerald-500/30 hover:border-emerald-400 transition-all font-semibold text-sm sm:text-base shadow-lg shadow-emerald-500/10"
            >
              <span>{content.ctaButton}</span>
            </a>
          </div>
          <p className="text-xs text-slate-500 font-mono">
            Iraq Digital Gateway (IDG) • Sovereign Intelligence Platform • ISO 27001
          </p>
        </div>
      </footer>
    </div>
  );
}
