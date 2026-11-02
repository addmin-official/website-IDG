'use client';

import React, { useState, useMemo } from 'react';
import Link from 'next/link';
import {
  ShieldCheck,
  Search,
  ExternalLink,
  ArrowRight,
  ArrowLeft,
  Cpu,
  BarChart3,
  Network,
  GraduationCap,
  Trees,
  Sparkles,
  Layers,
  CheckCircle2,
  Clock,
  Server,
  Lock,
} from 'lucide-react';

interface ProductItem {
  id: string;
  ref: string;
  category: 'ai' | 'trade' | 'economy' | 'environment' | 'education';
  categoryLabel: { ku: string; ar: string; en: string };
  status: { ku: string; ar: string; en: string };
  badgeColor: string;
  title: { ku: string; ar: string; en: string };
  tagline: { ku: string; ar: string; en: string };
  description: { ku: string; ar: string; en: string };
  metrics: { label: { ku: string; ar: string; en: string }; value: string }[];
  primaryLink: string;
  isExternal?: boolean;
  secondaryLink?: string;
  secondaryLabel?: { ku: string; ar: string; en: string };
  icon: React.ComponentType<{ className?: string }>;
}

const PRODUCTS_DATA: ProductItem[] = [
  {
    id: 'gateway-ai',
    ref: 'IDG-PRD-005',
    category: 'trade',
    categoryLabel: {
      ku: 'بازرگانی و سنوور',
      ar: 'التجارة والحدود',
      en: 'Trade & Customs',
    },
    status: {
      ku: 'سەروەریی نیشتمانی / چالاک',
      ar: 'سيادي وطني / نشط',
      en: 'Sovereign Core / Active',
    },
    badgeColor: 'border-emerald-500/40 bg-emerald-500/10 text-emerald-400',
    title: {
      ku: 'Gateway AI — هۆشمەندی سنوور و گومرگ',
      ar: 'Gateway AI — ذكاء الحدود والجمارك السيادية',
      en: 'Gateway AI — Customs & Border Intelligence',
    },
    tagline: {
      ku: 'پلاتفۆرمی خاڵبەندی پێشبینیکراوی مەترسی و ئازادکردنی خێرای کەلوپەل بە مۆدێلی کەناڵی سەوز',
      ar: 'منظومة تقييم المخاطر التنبؤية والإفراج الجمركي الفوري عبر القناة الخضراء',
      en: 'Predictive cargo risk scoring and automated green-channel customs clearance',
    },
    description: {
      ku: 'پلاتفۆرمێکی نیشتمانییە بۆ بەستنەوەی دەروازە سنوورییەکانی فیدراڵ و هەرێم لە ڕێگەی دەفتەرێکی تۆماری سەروەریی دەستکاریپێنەکراو، بینینی کۆمپیوتەری بۆ تیشکی ئێکس، و ڕێگری لە خۆدزینەوە لە باج بەپێی بڕیاری ٣٤٥ی ئەنجومەنی وەزیران.',
      ar: 'منصة استراتيجية لتوحيد المنافذ الجمركية الاتحادية والإقليمية عبر سجل رقمي موحد، وتحليل الأشعة السينية بالرؤية الحاسوبية، والحد من التهرب الضريبي وفق القرار الحكومي رقم 345.',
      en: 'Unified national customs platform bridging federal and regional border checkpoints with immutable distributed ledgers, automated X-ray computer vision, and predictive fiscal protection.',
    },
    metrics: [
      { label: { ku: 'کاتی پاکتاوی بار', ar: 'زمن التخليص', en: 'Dwell Time' }, value: '< 24 Hours' },
      { label: { ku: 'دروستی خاڵبەندی', ar: 'دقة التنبؤ', en: 'Accuracy' }, value: '99.4%' },
      { label: { ku: 'پێوەری جیهانی', ar: 'المعيار الدولي', en: 'Compliance' }, value: 'WCO SAFE' },
    ],
    primaryLink: '/products/gateway-ai',
    icon: Cpu,
  },
  {
    id: 'impactiq',
    ref: 'IDG-PRD-004',
    category: 'economy',
    categoryLabel: {
      ku: 'شیتاڵکاریی ئابووری',
      ar: 'التحليل الاقتصادي',
      en: 'Economic Intelligence',
    },
    status: {
      ku: 'پلاتفۆرمی چالاک',
      ar: 'منصة معتمدة',
      en: 'Certified Active',
    },
    badgeColor: 'border-sky-500/40 bg-sky-500/10 text-sky-400',
    title: {
      ku: 'ImpactIQ — مۆدێلی هەڵسەنگاندنی کاریگەری',
      ar: 'ImpactIQ — نمذجة وقياس الأثر الاستراتيجي',
      en: 'ImpactIQ — Strategic Impact Modeling',
    },
    tagline: {
      ku: 'سیستەمی ژیریی خەمڵاندنی کاریگەریی وەبەرهێنان و سیاسەتە گشتییەکان بە پێوەری نێودەوڵەتی',
      ar: 'منظومة قياس أثر الاستثمارات العامة والسياسات الاقتصادية بالمعايير التجريبية',
      en: 'Empirical socio-economic impact modeling and public policy evaluation engine',
    },
    description: {
      ku: 'مۆدێلێکی داتابنەمای بڕیاردانە بۆ دامەزراوە حکومییەکان و سندوقە وەبەرهێنانە نیشتمانییەکان تا بزانن هەر دۆلارێک لە کوێ زۆرترین گەشەی بەردەوام و هەلی کار دروست دەکات.',
      ar: 'محرك تحليلي متقدم يتيح للجهات الحكومية وصناديق التنمية قياس العائد التنموي والاجتماعي الدقيق لكل استثمار وفق نماذج المحاكاة الاقتصادية القياسية.',
      en: 'Data-driven econometric decision platform for state funds and ministries to forecast, monitor, and optimize long-term economic return on public capital deployments.',
    },
    metrics: [
      { label: { ku: 'مۆدێلی پێشبینی', ar: 'نماذج المحاكاة', en: 'Models' }, value: '50+ Sectors' },
      { label: { ku: 'خێرایی شیکاری', ar: 'سرعة التحليل', en: 'Latency' }, value: '< 200ms' },
      { label: { ku: 'سەروەریی داتا', ar: 'سيادة البيانات', en: 'Residency' }, value: '100% Domestic' },
    ],
    primaryLink: '/products/impactiq',
    icon: BarChart3,
  },
  {
    id: 'economic-knowledge-graph',
    ref: 'IDG-PRD-003',
    category: 'economy',
    categoryLabel: {
      ku: 'ژێرخانی داتا',
      ar: 'البنية المعرفية',
      en: 'Knowledge Matrix',
    },
    status: {
      ku: 'ژێرخانی سەرەکی',
      ar: 'بنية تحتية مركزية',
      en: 'Core Infrastructure',
    },
    badgeColor: 'border-cyan-500/40 bg-cyan-500/10 text-cyan-400',
    title: {
      ku: 'گرافی زانیاریی ئابووریی نیشتمانی',
      ar: 'الرسم البياني المعرفي للاقتصاد الوطني',
      en: 'Economic Knowledge Graph (EKG)',
    },
    tagline: {
      ku: 'تۆڕی پێکەوەبەستنی داتای بانکەکان، کۆمپانیاکان، گومرگ و داهاتە گشتییەکان',
      ar: 'شبكة الربط الدلالي بين المصارف، الشركات، الجمارك، وسلاسل التوريد الوطنية',
      en: 'High-dimensional semantic knowledge graph linking commercial registries, supply chains, and fiscal telemetry',
    },
    description: {
      ku: 'گرافێکی زەبەلاحی داتایییە کە پەیوەندییە بازرگانییەکان، هاوردە، هەناردە، و زنجیرەکانی دابینکردنی عێراق شیتاڵ دەکات بۆ ڕێگری لە قۆرخکاری و بەهێزکردنی پیشەسازیی ناوخۆ.',
      ar: 'قاعدة بيانات دلالية تشابكية توفر رؤية شاملة وتفاعلية حول حركة الأسواق والقطاعات الإنتاجية، مع اكتشاف نقاط الضعف وفرص الاستثمار المحلي في كافة المحافظات.',
      en: 'Large-scale semantic ontology mapping trade flows, business registrations, taxation nodes, and industrial networks to illuminate supply-chain bottlenecks and investment synergies.',
    },
    metrics: [
      { label: { ku: 'گرێ کوێرەکان', ar: 'العُقد والكيانات', en: 'Entities' }, value: '2.4M+ Nodes' },
      { label: { ku: 'پەیوەندییەکان', ar: 'الروابط والعلاقات', en: 'Edges' }, value: '18M+ Edges' },
      { label: { ku: 'نوێبوونەوە', ar: 'التحديث', en: 'Update' }, value: 'Real-Time' },
    ],
    primaryLink: '/products/economic-knowledge-graph',
    icon: Network,
  },
  {
    id: 'zana-academy',
    ref: 'IDG-PRD-002',
    category: 'education',
    categoryLabel: {
      ku: 'پەروەردە و مرۆیی',
      ar: 'التعليم وبناء القدرات',
      en: 'Education & Capability',
    },
    status: {
      ku: 'پلاتفۆرمی نیشتمانی / تاقیگەی زانستی',
      ar: 'منظومة وطنية / مختبرات علمية',
      en: 'National EdTech & Virtual Labs',
    },
    badgeColor: 'border-amber-500/40 bg-amber-500/10 text-amber-400',
    title: {
      ku: 'ZaNa Academy — ئەکادیمیای زانا',
      ar: 'أكاديمية زانا — ZaNa Academy',
      en: 'ZaNa Academy — Intelligent Learning Platform',
    },
    tagline: {
      ku: 'پلاتفۆرمی فێربوونی ژیر، تاقیگەی مەجازی فیزیایی و کیمیایی، و مەنهەجی ستانداردی وەزارەتی پەروەردە',
      ar: 'المنصة التعليمية التكيفية الذكية، المختبرات الافتراضية، ومنهاج وزارة التربية المعتمد',
      en: 'Adaptive AI-powered curriculum, virtual chemistry/physics laboratories, and national talent stewardship',
    },
    description: {
      ku: 'پلاتفۆرمێکی نیشتمانییە بۆ قوتابیانی پۆلی ٩ تا ١٢ بە مەنهەجی فەرمیی کوردی، عەرەبی و ئینگلیزی، لەگەڵ تاقیگەی کارلێکی ماددە کیمیایییەکان و ڕاهێنانی ئەندازیارانی گەنج بۆ سیستمە سەروەرییەکان.',
      ar: 'منظومة تعليمية تفاعلية شاملة لمناهج وزارة التربية، تتيح للطلاب إجراء التجارب العلمية المعقدة في مختبرات افتراضية ثلاثية الأبعاد، وتأهيل الكفاءات الوطنية لإدارة الأنظمة السيادية.',
      en: 'National interactive STEM platform providing official curriculum pathways (grades 9-12), high-fidelity virtual science simulations, and specialized engineering residency bootcamps.',
    },
    metrics: [
      { label: { ku: 'مەنهەجی خوێندن', ar: 'المناهج المعتمدة', en: 'Curriculum' }, value: 'Grades 9-12' },
      { label: { ku: 'تاقیگەی مەجازی', ar: 'المختبرات', en: 'Virtual Labs' }, value: '30+ Simulators' },
      { label: { ku: 'زمانەکان', ar: 'اللغات', en: 'Languages' }, value: 'KU • AR • EN' },
    ],
    primaryLink: 'https://zana.idggov.tech',
    isExternal: true,
    secondaryLink: 'https://zana.idggov.tech',
    secondaryLabel: { ku: 'پلاتفۆرمی لایڤ', ar: 'المنصة المباشرة', en: 'Live Platform' },
    icon: GraduationCap,
  },
  {
    id: 'green-belt',
    ref: 'IDG-PRD-001',
    category: 'environment',
    categoryLabel: {
      ku: 'ژینگە و ئاووهەوا',
      ar: 'البيئة والمناخ',
      en: 'Ecological Intelligence',
    },
    status: {
      ku: 'چاودێری نیشتمانی / چالاک',
      ar: 'رصد بيئي وطني / نشط',
      en: 'Sovereign Ecological Core',
    },
    badgeColor: 'border-emerald-500/40 bg-emerald-500/10 text-emerald-400',
    title: {
      ku: 'Green Belt — پلاتفۆرمی پشتێنەی سەوز',
      ar: 'Green Belt — المنصة الوطنية للحزام الأخضر',
      en: 'Green Belt — National Ecological Platform',
    },
    tagline: {
      ku: 'چاودێری مانگی دەستکرد، بەرەنگاربوونەوەی بیابانبوون، و بەڕێوەبردنی سەرچاوەکانی ئاوی عێراق',
      ar: 'المراقبة الفضائية بالأقمار الصناعية، مكافحة التصحر، وإدارة الموارد المائية وحزام الغطاء النباتي',
      en: 'Satellite-driven ecological monitoring, anti-desertification telemetry, and water conservation intelligence',
    },
    description: {
      ku: 'پلاتفۆرمی چاودێری ڕووبەری سەوزایی عێراق لە ڕێگەی وێنەی مانگە دەستکردەکان و هەستەوەرەکانی ناوچەیی، بۆ دیاریکردنی ناوچەکانی بیابانبوون، تەندروستی خاک، و پێشکەوتنی دارچاندنی نیشتمانی.',
      ar: 'نظام جيومكاني متكامل لتحليل مؤشرات الغطاء النباتي (NDVI) ومراقبة مستويات الجفاف عبر العراق، موجهاً جهود التشجير الوطني ومشاريع استصلاح الأراضي الزراعية.',
      en: 'Geospatial remote-sensing platform utilizing multi-spectral satellite imagery and IoT soil sensors to track afforestation corridors, vegetation health indices, and water stress nationwide.',
    },
    metrics: [
      { label: { ku: 'ڕووبەری چاودێری', ar: 'مساحة التغطية', en: 'Area' }, value: '438K+ km²' },
      { label: { ku: 'مانگی دەستکرد', ar: 'التحديث الفضائي', en: 'Satellite' }, value: 'Sentinel & Landsat' },
      { label: { ku: 'مەودای چاودێری', ar: 'دقة الرصد', en: 'Resolution' }, value: '10m Multi-Band' },
    ],
    primaryLink: 'https://greenbelt.idggov.tech',
    isExternal: true,
    secondaryLink: 'https://greenbelt.idggov.tech/dashboard',
    secondaryLabel: { ku: 'داشبۆردی لایڤ', ar: 'لوحة التحكم', en: 'Live Dashboard' },
    icon: Trees,
  },
  {
    id: 'aigate-iraq',
    ref: 'IDG-PRD-006',
    category: 'ai',
    categoryLabel: {
      ku: 'ژیریی دەستکرد',
      ar: 'الذكاء الاصطناعي',
      en: 'Applied AI',
    },
    status: {
      ku: 'مۆدێلی زمانیی سەروەری',
      ar: 'نماذج لغوية تأسيسية',
      en: 'Sovereign LLM Core',
    },
    badgeColor: 'border-purple-500/40 bg-purple-500/10 text-purple-400',
    title: {
      ku: 'aiGate Iraq — مۆدێلی زمانیی نیشتمانی',
      ar: 'aiGate Iraq — النماذج التأسيسية الوطنية',
      en: 'aiGate Iraq — Sovereign Foundation LLM',
    },
    tagline: {
      ku: 'مۆدێلی ژیریی دەستکرد بە شێوەزاری سۆرانی، بادینی، و عەرەبیی عێراقی لەژێر چاودێریی مرۆیی',
      ar: 'نماذج ذكاء اصطناعي سيادية مصممة خصيصاً للهجات العراقية واللغة الكردية تحت إشراف وطني',
      en: 'Specialized enterprise LLMs trained for Sorani, Badini, and Iraqi Arabic under domestic sovereign oversight',
    },
    description: {
      ku: 'سیستمێکی ژیریی دەستکردی سەربەخۆیە کە هەموو داتاکانی لەناوخۆی عێراق لەژێر چاودێریی دەسەڵاتی دادوەری و ئاسایشی نیشتمانی دەمێنێتەوە، بێ هیچ ناردنێکی داتا بۆ کلاودی بیانی.',
      ar: 'بنية حوسبية فائقة لمعالجة اللغات الطبيعية الوطنية، توفر استجابة فورية وآمنة للقطاعات القانونية والمالية والإدارية دون أي تسريب للبيانات خارج الحدود.',
      en: 'Sovereign natural language platform engineered specifically for local administrative, legal, and banking dialects, guaranteeing 100% data residency and cryptographic confinement.',
    },
    metrics: [
      { label: { ku: 'مۆدێلی ڕاهێنراو', ar: 'حجم النماذج', en: 'Parameters' }, value: 'Multi-Billion LLM' },
      { label: { ku: 'زمان و شێوەزار', ar: 'اللهجات المدعومة', en: 'Dialects' }, value: 'CKB • AR-IQ • EN' },
      { label: { ku: 'سەروەری', ar: 'السيادة', en: 'Residency' }, value: '100% On-Premise' },
    ],
    primaryLink: 'https://www.aigateiraq.com',
    isExternal: true,
    icon: Sparkles,
  },
  {
    id: 'iraq-nsw',
    ref: 'IDG-PRD-007',
    category: 'trade',
    categoryLabel: {
      ku: 'بازرگانی و گومرگ',
      ar: 'التجارة الدولية',
      en: 'Trade & Customs',
    },
    status: {
      ku: 'پڕۆتۆکۆڵی پەیوەستبوون',
      ar: 'بروتوكول الربط الموحد',
      en: 'Integration Specs',
    },
    badgeColor: 'border-blue-500/40 bg-blue-500/10 text-blue-400',
    title: {
      ku: 'Iraq National Single Window (NSW)',
      ar: 'نافذة العراق الوطنية الموحدة (NSW)',
      en: 'Iraq National Single Window (NSW)',
    },
    tagline: {
      ku: 'پەنجەرەی یەکگرتووی نیشتمانی بۆ مامەڵەی گومرگی، مۆڵەتی هاوردە، و پارەدانی ئەلیکترۆنی',
      ar: 'المنظومة الرقمية الموحدة لتسهيل التجارة الدولية، التخليص الجمركي، والدفع المالي السيادي',
      en: 'Unified single-window customs architecture, trade permit approvals, and automated clearing integration',
    },
    description: {
      ku: 'پڕۆتۆکۆڵ و ژێرخانی پەیوەستبوونی سەرجەم وەزارەتەکان، بانکەکان، و دەستەی گشتیی گومرگ بۆ ئەنجامدانی تەواوی کاروبارە بازرگانییەکان لە یەک دەروازەی ئەلیکترۆنی پارێزراودا.',
      ar: 'المعمارية المؤسسية للربط الشبكي الشامل بين الوزارات المعنية، المصارف التجارية، وموانئ ومنافذ التصدير والاستيراد لتقليص البيروقراطية وتسريع حركة التجارة.',
      en: 'Comprehensive inter-ministerial digital architecture connecting customs, port authorities, commercial banks, and inspection agencies into a single, cohesive clearing nexus.',
    },
    metrics: [
      { label: { ku: 'پەیوەستبوون', ar: 'جهات الربط', en: 'Entities' }, value: '38 Ministries & Banks' },
      { label: { ku: 'ستانداردی API', ar: 'معيار الربط', en: 'Protocol' }, value: 'mTLS + gRPC' },
      { label: { ku: 'ڕێبەری فەرمی', ar: 'الدليل الفني', en: 'Manual' }, value: 'IDG-NSW-INT-09' },
    ],
    primaryLink: '/help#downloads',
    icon: Layers,
  },
];

export default function ProductsClient({ locale }: { locale: string }) {
  const lang = (locale === 'ar' || locale === 'en' ? locale : 'ku') as 'ku' | 'ar' | 'en';
  const isRtl = lang === 'ku' || lang === 'ar';
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const ArrowIcon = isRtl ? ArrowLeft : ArrowRight;

  const categories = [
    { id: 'all', label: { ku: 'هەموو بەرهەمەکان', ar: 'كافة المنظومات', en: 'All Products' } },
    { id: 'trade', label: { ku: 'بازرگانی و سنوور', ar: 'التجارة والحدود', en: 'Trade & Customs' } },
    { id: 'ai', label: { ku: 'ژیریی دەستکرد', ar: 'الذكاء الاصطناعي', en: 'Artificial Intelligence' } },
    { id: 'economy', label: { ku: 'شیتاڵکاریی ئابووری', ar: 'التحليل الاقتصادي', en: 'Economic Data' } },
    { id: 'environment', label: { ku: 'ژینگە و کشتوکاڵ', ar: 'البيئة والمناخ', en: 'Ecological Intelligence' } },
    { id: 'education', label: { ku: 'پەروەردە و مرۆیی', ar: 'التعليم والكفاءات', en: 'Education & Talent' } },
  ];

  const filteredProducts = useMemo(() => {
    let list = PRODUCTS_DATA;
    if (activeCategory !== 'all') {
      list = list.filter((item) => item.category === activeCategory);
    }
    const q = searchQuery.trim().toLowerCase();
    if (!q) return list;

    return list.filter((item) => {
      const matchTitle = Object.values(item.title).some((t) => t.toLowerCase().includes(q));
      const matchDesc = Object.values(item.description).some((d) => d.toLowerCase().includes(q));
      const matchTag = Object.values(item.tagline).some((tag) => tag.toLowerCase().includes(q));
      const matchRef = item.ref.toLowerCase().includes(q);
      return matchTitle || matchDesc || matchTag || matchRef;
    });
  }, [activeCategory, searchQuery]);

  return (
    <div className={`min-h-screen bg-[#060D1A] text-slate-200 ${isRtl ? 'rtl' : 'ltr'}`} dir={isRtl ? 'rtl' : 'ltr'}>
      {/* Hero Header */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[#0B172E] via-[#081226] to-[#060D1A] border-b border-[#102447] py-14 sm:py-20">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-emerald-500/10 via-transparent to-transparent pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-mono font-semibold mb-4">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>IDG SOVEREIGN PORTFOLIO DIRECTORY 2026</span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-4 leading-tight">
            {lang === 'ku'
              ? 'بەرهەمە نیشتمانی و پلاتفۆرمە سەروەرییەکان'
              : lang === 'ar'
              ? 'المنظومات والمنتجات السيادية الوطنية'
              : 'Sovereign National Platforms & Enterprise Products'}
          </h1>

          <p className="text-base sm:text-lg text-slate-300 max-w-3xl leading-relaxed">
            {lang === 'ku'
              ? 'ژێرخانی دیجیتاڵیی پارێزراو بۆ خزمەتگوزارییە حکومییەکان، بەڕێوەبردنی گومرگ و دەروازە سنورییەکان، مۆدێلی زانیاریی ئابووری، و پێشخستنی توانستی زانستیی عێراق.'
              : lang === 'ar'
              ? 'البنى التحتية التكنولوجية المستقلة لحوكمة التجارة الدولية، إدارة المنافذ الجمركية، نمذجة الاقتصاد الوطني، وتمكين الكفاءات الرقمية الوطنية لجمهورية العراق.'
              : 'Enterprise-grade sovereign technologies engineered to protect national data borders, streamline international customs clearance, model economic velocity, and empower domestic talent.'}
          </p>

          {/* Quick Metrics Bar */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-8 pt-8 border-t border-[#102447]/80">
            <div className="p-3 bg-[#0B172E]/60 border border-[#102447] rounded-xl">
              <div className="text-emerald-400 font-bold text-lg sm:text-xl font-mono">100%</div>
              <div className="text-slate-400 text-xs">
                {lang === 'ku' ? 'سەروەریی خاکی داتا' : lang === 'ar' ? 'توطين البيانات' : 'Data Sovereignty'}
              </div>
            </div>
            <div className="p-3 bg-[#0B172E]/60 border border-[#102447] rounded-xl">
              <div className="text-sky-400 font-bold text-lg sm:text-xl font-mono">Tier-IV</div>
              <div className="text-slate-400 text-xs">
                {lang === 'ku' ? 'سەنتەری داتای نیشتمانی' : lang === 'ar' ? 'مراكز بيانات موزعة' : 'Multi-Region Datacenter'}
              </div>
            </div>
            <div className="p-3 bg-[#0B172E]/60 border border-[#102447] rounded-xl">
              <div className="text-amber-400 font-bold text-lg sm:text-xl font-mono">Zero-Trust</div>
              <div className="text-slate-400 text-xs">
                {lang === 'ku' ? 'تەلارسازیی ئاسایش' : lang === 'ar' ? 'معمارية أمنية صارمة' : 'Security Model'}
              </div>
            </div>
            <div className="p-3 bg-[#0B172E]/60 border border-[#102447] rounded-xl">
              <div className="text-purple-400 font-bold text-lg sm:text-xl font-mono">&lt; 50ms</div>
              <div className="text-slate-400 text-xs">
                {lang === 'ku' ? 'خێرایی مایکرۆسێرڤس' : lang === 'ar' ? 'زمن استجابة الشبكة' : 'Microservice Latency'}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Filter and Search Bar */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-[#102447]">
          {/* Category Tabs */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 md:pb-0 scrollbar-thin">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-3.5 py-1.5 rounded-lg text-xs sm:text-sm font-semibold transition-all whitespace-nowrap cursor-pointer ${
                  activeCategory === cat.id
                    ? 'bg-emerald-500 text-white shadow-lg shadow-emerald-500/20'
                    : 'bg-[#0B172E] text-slate-300 hover:text-white hover:bg-[#102447] border border-[#102447]'
                }`}
              >
                {cat.label[lang]}
              </button>
            ))}
          </div>

          {/* Search Box */}
          <div className="relative w-full md:w-72">
            <Search className="absolute start-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={
                lang === 'ku' ? 'گەڕان بەدوای بەرهەم یان کۆد...' : lang === 'ar' ? 'ابحث عن منتج أو رمز...' : 'Search products or refs...'
              }
              className="w-full ps-9 pe-4 py-2 bg-[#0B172E] border border-[#102447] rounded-xl text-xs sm:text-sm text-white placeholder-slate-400 focus:outline-none focus:border-emerald-500 transition-colors"
            />
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-8">
          {filteredProducts.map((prod) => {
            const Icon = prod.icon;
            const primaryHref = prod.primaryLink.startsWith('http')
              ? prod.primaryLink
              : `/${lang}${prod.primaryLink}`;

            return (
              <div
                key={prod.id}
                className="bg-[#0B172E] border border-[#102447] hover:border-emerald-500/40 rounded-2xl p-6 flex flex-col justify-between transition-all duration-300 hover:shadow-xl hover:shadow-black/50 group"
              >
                <div>
                  {/* Top Bar: Icon, Ref, Status Badge */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 rounded-xl bg-[#102447]/70 border border-[#193B73]/50 flex items-center justify-center text-emerald-400 group-hover:scale-105 transition-transform">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-[11px] font-mono text-slate-400 px-2 py-0.5 rounded bg-[#060D1A] border border-[#102447]">
                        {prod.ref}
                      </span>
                      <span className={`text-[10px] font-semibold px-2 py-0.5 rounded border ${prod.badgeColor}`}>
                        {prod.status[lang]}
                      </span>
                    </div>
                  </div>

                  {/* Title & Tagline */}
                  <h3 className="text-lg font-bold text-white mb-1.5 group-hover:text-emerald-300 transition-colors">
                    {prod.title[lang]}
                  </h3>
                  <p className="text-xs font-medium text-emerald-400/90 mb-3 leading-snug">
                    {prod.tagline[lang]}
                  </p>

                  {/* Description */}
                  <p className="text-xs text-slate-300/90 leading-relaxed mb-5">
                    {prod.description[lang]}
                  </p>

                  {/* Metrics Pills */}
                  <div className="grid grid-cols-3 gap-2 p-2.5 bg-[#060D1A]/70 rounded-xl border border-[#102447]/60 mb-5">
                    {prod.metrics.map((m, idx) => (
                      <div key={idx} className="text-center">
                        <div className="text-[10px] text-slate-400 truncate">{m.label[lang]}</div>
                        <div className="text-xs font-bold text-slate-200 font-mono mt-0.5 truncate">{m.value}</div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Actions Row */}
                <div className="pt-4 border-t border-[#102447] flex items-center justify-between gap-3">
                  {prod.secondaryLink ? (
                    <a
                      href={prod.secondaryLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs text-slate-400 hover:text-white transition-colors underline flex items-center gap-1"
                    >
                      <span>{prod.secondaryLabel ? prod.secondaryLabel[lang] : 'Mirror'}</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  ) : (
                    <span className="text-[11px] text-slate-500 font-medium">
                      {prod.categoryLabel[lang]}
                    </span>
                  )}

                  {prod.isExternal ? (
                    <a
                      href={primaryHref}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-bold bg-[#102447] hover:bg-emerald-600 text-white transition-colors cursor-pointer group-hover:bg-emerald-600"
                    >
                      <span>{lang === 'ku' ? 'سەردانی پلاتفۆرم' : lang === 'ar' ? 'دخول المنصة' : 'Open Platform'}</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  ) : (
                    <Link
                      href={primaryHref}
                      className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-bold bg-emerald-600 hover:bg-emerald-500 text-white transition-colors cursor-pointer"
                    >
                      <span>{lang === 'ku' ? 'ناساندنی ورد' : lang === 'ar' ? 'التفاصيل الكاملة' : 'Explore Platform'}</span>
                      <ArrowIcon className="w-3.5 h-3.5" />
                    </Link>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Empty State */}
        {filteredProducts.length === 0 && (
          <div className="py-16 text-center bg-[#0B172E] rounded-2xl border border-[#102447] mt-8">
            <Search className="w-8 h-8 text-slate-500 mx-auto mb-3" />
            <p className="text-slate-300 font-medium text-sm">
              {lang === 'ku'
                ? 'هیچ بەرهەمێک نەدۆزرایەوە بەپێی گەڕانەکەت.'
                : lang === 'ar'
                ? 'لم يتم العثور على أي منظومة تطابق معايير البحث.'
                : 'No products found matching your search query.'}
            </p>
          </div>
        )}
      </section>

      {/* Institutional Architecture & Security Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 border-t border-[#102447] mt-12">
        <div className="bg-gradient-to-r from-[#0B172E] via-[#0D1C38] to-[#0B172E] border border-[#102447] rounded-3xl p-8 sm:p-12 relative overflow-hidden">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-semibold mb-4">
              <Lock className="w-3.5 h-3.5" />
              <span>{lang === 'ku' ? 'تەلارسازیی سەروەریی نیشتمانی' : lang === 'ar' ? 'السيادة التقنية الشاملة' : 'Sovereign Architecture'}</span>
            </div>

            <h2 className="text-2xl sm:text-3xl font-extrabold text-white mb-4">
              {lang === 'ku'
                ? 'پاراستنی سەروەریی خاکی داتا لە تەواوی بەرهەمەکاندا'
                : lang === 'ar'
                ? 'الضمانات السيادية وتوطين البيانات في كافة المنظومات'
                : 'Uncompromising Data Residency Across All Product Deployments'}
            </h2>

            <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-6">
              {lang === 'ku'
                ? 'هەموو بەرهەم و پلاتفۆرمەکانی دەروازەی دیجیتاڵیی عێراق (IDG) لەسەر سێرڤەر و داتاسەنتەری پلە چواری ناوخۆی وڵات کاردەکەن. هیچ داتایەکی هاووڵاتیان، گومرگ یان ئابووری بۆ سێرڤەری دەرەکی ناگوازرێتەوە بەپێی میساقی نیشتمانی IDG-GOV-DATA-2026.'
                : lang === 'ar'
                ? 'تعمل كافة منتجات ومنظومات بوابة العراق الرقمية على خوادم ومراكز بيانات وطنية مصنفة Tier-IV داخل الحدود العراقية، بما يضمن عدم تسريب أي بيانات حكومية أو مالية إلى الخارج وفق ميثاق حوكمة البيانات IDG-GOV-DATA-2026.'
                : 'All IDG platforms and digital assets are natively anchored to domestic Tier-IV sovereign datacenters in Baghdad, Erbil, and Basra, strictly prohibiting unauthorized cross-border metadata egress pursuant to the National Data Governance Charter.'}
            </p>

            <div className="flex flex-wrap gap-4 items-center">
              <Link
                href={`/${lang}/portfolio`}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs sm:text-sm transition-colors cursor-pointer"
              >
                <span>{lang === 'ku' ? 'بینینی پۆرتفۆلیۆی تەواو' : lang === 'ar' ? 'استعراض المحفظة الشاملة' : 'Explore Portfolio'}</span>
                <ArrowIcon className="w-4 h-4" />
              </Link>
              <Link
                href={`/${lang}/help`}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#102447] hover:bg-[#193B73] text-slate-200 font-bold text-xs sm:text-sm transition-colors border border-slate-700 cursor-pointer"
              >
                <span>{lang === 'ku' ? 'ڕێبەرە فەرمییەکان (PDF)' : lang === 'ar' ? 'الوثائق والأدلة الرسمية' : 'Official Blueprints (PDF)'}</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
