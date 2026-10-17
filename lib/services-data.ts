export interface ServiceItem {
  id: string;
  slug: string;
  iconName: 'Server' | 'Shield' | 'Fingerprint' | 'Brain' | 'GraduationCap' | 'Rocket';
  badge: {
    ku: string;
    ar: string;
    en: string;
  };
  title: {
    ku: string;
    ar: string;
    en: string;
  };
  subtitle: {
    ku: string;
    ar: string;
    en: string;
  };
  description: {
    ku: string;
    ar: string;
    en: string;
  };
  features: {
    ku: string[];
    ar: string[];
    en: string[];
  };
  highlights: {
    ku: { label: string; value: string }[];
    ar: { label: string; value: string }[];
    en: { label: string; value: string }[];
  };
  fullContent: {
    ku: string;
    ar: string;
    en: string;
  };
}

export const SERVICES_LIST: ServiceItem[] = [
  // ─────────────────────────────────────────────────────────────
  // 1. Government Infrastructure Platform
  // ─────────────────────────────────────────────────────────────
  {
    id: 'gov-infra',
    slug: 'government-infrastructure-platform',
    iconName: 'Server',
    badge: {
      ku: 'ژێرخانی نیشتمانی • Sovereign Cloud',
      ar: 'البنية الحكومية • السحابة السيادية',
      en: 'National Infrastructure • Sovereign Cloud',
    },
    title: {
      ku: 'پلاتفۆرمی بنیادی حکومەت',
      ar: 'منصة بنية الحكومة الأساسية',
      en: 'Government Infrastructure Platform',
    },
    subtitle: {
      ku: 'پلاتفۆرمی سحابیی پارێزراو بۆ پرۆسە حکومییەکان و داتای نیشتمانی',
      ar: 'منصة سحابية متقدمة لعمليات الحكومة وحماية البيانات الوطنية',
      en: 'Enterprise-grade sovereign cloud platform for government operations',
    },
    description: {
      ku: 'ژێرخانێکی سحابیی سەروەر بە بەرزترین ستانداردەکانی ئاسایش، بەردەوامیی کارکردنی ٩٩.٩٨٪ و هێشتنەوەی تەواوی داتای حکومەت لەناو خاکی عێراقدا بەپێی یاساکانی پاراستنی زانیاری.',
      ar: 'منصة سحابية سيادية مصممة خصيصاً للعمليات الحكومية، بنسبة جاهزية 99.98% وتوطين كامل للبيانات داخل الأراضي العراقية وفق ضوابط الأمن القومي وسياسات الحوكمة.',
      en: 'Enterprise-grade sovereign cloud platform for government operations with 99.98% uptime SLA, strict domestic data residency, and NSA-grade multi-tier encryption complying with Iraqi laws.',
    },
    features: {
      ku: [
        'گەیاندنی خزمەتگوزارییە دیجیتاڵییەکان (Digital Service Delivery)',
        'دەروازەی یەکگرتووی هاووڵاتیان (Citizen Portal)',
        'سیستەمی بەڕێوەبردنی بەڵگەنامە و ئەرشیف (Document Management)',
        'ئۆتۆمەیشنی پرۆسە و هاتوچۆی مامەڵەکان (Workflow Automation)',
        'داشبۆردی شیاری و داتای ڕاستەوخۆ (Real-time Analytics)',
      ],
      ar: [
        'بوابة تقديم الخدمات الرقمية الحكومية (Digital Service Delivery)',
        'بوابة المواطن الموحدة للخدمات العامة (Citizen Portal)',
        'إدارة الوثائق والأرشفة الرقمية الآمنة (Document Management)',
        'أتمتة الإجراءات والتدفقات الإدارية (Workflow Automation)',
        'لوحات تحليلات ومؤشرات الأداء اللحظية (Real-time Analytics)',
      ],
      en: [
        'Unified digital public service delivery engine',
        'Centralized citizen authentication & self-service portal',
        'Secure sovereign document & records management system',
        'Multi-agency workflow automation & audit trails',
        'Real-time operational business intelligence & analytics',
      ],
    },
    highlights: {
      ku: [
        { label: 'سەقامگیریی کارکردن (SLA)', value: '٩٩.٩٨٪' },
        { label: 'شوێنی داتا', value: 'سەروەری لەناو عێراق' },
        { label: 'ئاستی تشفیر', value: 'NSA / AES-256' },
        { label: 'کاتی وەڵامدانەوە', value: '< ٥٠ ملیچرکە' },
      ],
      ar: [
        { label: 'نسبة الاستمرارية (SLA)', value: '99.98%' },
        { label: 'توطين البيانات', value: 'سيادة داخل العراق' },
        { label: 'مستوى التشفير', value: 'NSA / AES-256' },
        { label: 'زمن الاستجابة', value: '< 50ms' },
      ],
      en: [
        { label: 'Uptime SLA', value: '99.98%' },
        { label: 'Data Residency', value: '100% In-Country' },
        { label: 'Encryption', value: 'NSA / AES-256' },
        { label: 'Latency', value: '< 50ms local' },
      ],
    },
    fullContent: {
      ku: `## تەلارسازیی پلاتفۆرمی بنیادی حکومەت

پلاتفۆرمی بنیادی حکومەتی IDG ڕێکارێکی بنەڕەتییە بۆ بەستنەوەی سەرجەم وەزارەت و دەستە فەرمییەکان بە تۆڕێکی پەیوەندی و ژێرخانێکی نەپچڕاو.

### پێکهاتە سەرەکییەکان:
1. **ناوەندی داتای نیشتمانی (National Data Center Stack):** بونیادنراو لەسەر ڕەقەکاڵای پیشەسازی و دابەشکراو لەنێوان ناوەندە پارێزراوەکانی هەولێر و بەغدا بە تەلارسازیی Active-Active.
2. **پەنجەرەی مامەڵەی هاووڵاتی (Single Citizen Window):** کەمکردنەوەی بیرۆکراسی بە شێوازێک کە هاووڵاتی بە یەک هەژماری پشتڕاستکراو بتوانێت سەرجەم مامەڵە حکومییەکانی جێبەجێ بکات.
3. **تۆماری گشتی و بەڵگەنامەی دژەساختەکاری:** بەکارهێنانی مۆری ئەلیکترۆنی و بەڵگەی نەگۆڕ بۆ دەستەبەرکردنی ڕەسەنایەتی سەرجەم نووسراوەکان.`,
      ar: `## معمارية منصة بنية الحكومة الأساسية

تمثل منصة بنية الحكومة الأساسية من IDG الركيزة التقنية الكبرى لربط الوزارات والهيئات الحكومية العراقية ضمن شبكة موحدة وعالية الاعتمادية.

### المكونات الهيكلية للمنصة:
1. **مراكز البيانات الوطنية الموزعة:** بنية سحابية هجينة تعمل بنموذج Active-Active بين بغداد وأربيل لضمان عدم انقطاع الخدمات تحت أي ظرف.
2. **بوابة المواطن الموحدة:** تقليص الدورة المستندية وتمكين المواطن من إنجاز معاملاته الرسمية من خلال هوية رقمية موحدة.
3. **الأرشفة والتوثيق السيادي غير القابل للتلاعب:** اعتماد التوقيع الإلكتروني المشفر والأختام الرقمية السيادية لضمان صحة كافة الوثائق الحكومية.`,
      en: `## Architecture of the Government Infrastructure Platform

The IDG Government Infrastructure Platform serves as the foundational backbone interconnecting Iraqi ministries, regional directorates, and public authorities through high-assurance transactional pipelines.

### Key Architectural Pillars:
1. **Distributed National Data Center Stack:** Built on carrier-neutral, Active-Active infrastructure deployed within sovereign Iraqi facilities in Baghdad and Erbil.
2. **Citizen Self-Service Gateways:** Consolidating multi-agency public services into a streamlined, high-throughput digital interface requiring zero manual paper handoffs.
3. **Tamper-Evident Records & Document Management:** Enforcing cryptographic timestamping and verifiable digital signatures across institutional decrees, land records, and civil documents.`,
    },
  },

  // ─────────────────────────────────────────────────────────────
  // 2. Cybersecurity & Threat Defense
  // ─────────────────────────────────────────────────────────────
  {
    id: 'cyber-sec',
    slug: 'cybersecurity-threat-defense',
    iconName: 'Shield',
    badge: {
      ku: 'ئاسایشی سایبەری • Zero-Trust Defense',
      ar: 'الأمن السيبراني • حماية انعدام الثقة',
      en: 'Cybersecurity • Zero-Trust Defense',
    },
    title: {
      ku: 'ئاسایشی سایبەری و بەرگریی دیجیتاڵی',
      ar: 'الأمن السيبراني والدفاع ضد التهديدات',
      en: 'Cybersecurity & Threat Defense',
    },
    subtitle: {
      ku: 'چاودێریی ٢٤/٧، دۆزینەوەی هەڕەشەکان، و وەڵامدانەوەی خێرای ڕووداوە ئەمنییەکان',
      ar: 'مراقبة أمنية على مدار الساعة، رصد التهديدات، والاستجابة الفورية للحوادث',
      en: '24/7 monitoring, sovereign SOC, and institutional threat intelligence',
    },
    description: {
      ku: 'سیستەمێکی پێشکەوتووی پاراستنی ئەمنییەتی دیجیتاڵی بە تەلارسازیی Zero-Trust بۆ پاراستنی ژێرخانە هەستیارەکانی عێراق لە هێرشی ئەلیکترۆنی، سپام و دزەکردنی داتا.',
      ar: 'منظومة دفاع سيبراني متقدمة تعمل على مدار الساعة بنموذج انعدام الثقة (Zero-Trust)، مجهزة بفرق استجابة فورية لحماية البنى التحتية الحيوية من الهجمات والاختراقات.',
      en: 'Continuous 24/7 threat intelligence, active SOC monitoring, institutional penetration testing, and rapid incident response engineered to neutralize advanced cyber threats across Iraqi assets.',
    },
    features: {
      ku: [
        'ناوەندی چاودێریی ئۆپەراسیۆنی ئەمنی ٢٤/٧ (Sovereign SOC)',
        'شیاری و دۆزینەوەی خێرای ڤایرۆس و باجەواڵە (Malware Analysis)',
        'بەرگریی بەهێز لە هێرشەکانی پەکخستن (DDoS Protection)',
        'تاقیکردنەوەی دزەکردن و هەڵسەنگاندنی کەلێنەکان (Penetration Testing)',
        'ڕاهێنانی ستاف لەسەر هۆشیاریی ئاسایشی سایبەری (Security Awareness)',
      ],
      ar: [
        'مركز العمليات الأمنية السيادية على مدار الساعة (Sovereign SOC)',
        'تحليل البرمجيات الخبيثة ورصد التهديدات المتقدمة (Malware Analysis)',
        'الحماية الهجينة من هجمات حجب الخدمة (DDoS Defense)',
        'اختبارات الاختراق وتقييم الثغرات الدورية (Penetration Testing)',
        'برامج تدريب وتأهيل الكوادر على اليقظة السيبرانية (Security Training)',
      ],
      en: [
        '24/7 Sovereign Security Operations Center (SOC)',
        'Real-time automated anomaly & advanced malware detection',
        'Carrier-grade multi-layer DDoS mitigation infrastructure',
        'Continuous vulnerability assessment & red-team penetration testing',
        'Institutional cyber defense training and threat simulation labs',
      ],
    },
    highlights: {
      ku: [
        { label: 'چاودێری', value: '٢٤/٧/٣٦٥ بەردەوام' },
        { label: 'کاتی وەڵامدانەوەی ڕووداو', value: '< ١٥ خولەک' },
        { label: 'بەرگری DDoS', value: 'زیاتر لە ٢ تێرابایت/چ' },
        { label: 'مۆدێلی ئەمنی', value: 'Zero-Trust Architecture' },
      ],
      ar: [
        { label: 'زمن المراقبة', value: '24/7/365 مستمر' },
        { label: 'الاستجابة للحوادث', value: '< 15 دقيقة' },
        { label: 'صد هجمات DDoS', value: 'سعة تفوق 2 Tbps' },
        { label: 'النموذج الأمني', value: 'انعدام الثقة الكامل' },
      ],
      en: [
        { label: 'Operational Coverage', value: '24/7/365 Continuous' },
        { label: 'Incident Response', value: '< 15 min SLA' },
        { label: 'DDoS Capacity', value: '2+ Tbps Mitigation' },
        { label: 'Security Model', value: 'Strict Zero-Trust' },
      ],
    },
    fullContent: {
      ku: `## ئاسایشی سایبەری و پاراستنی ژێرخانی سەروەر

لە کاتێکدا هەڕەشە ئەلیکترۆنییەکان لە جیهاندا ئاڵۆزتر دەبن، عێراق پێویستی بە قەڵغانێکی سایبەریی نیشتمانییە کە پشتبەستوو نەبێت بە کۆنتڕۆڵی لایەنی دەرەکی.

### ستوونە سەرەکییەکان:
1. **ناوەندی ئۆپەراسیۆنی ئەمنی خۆماڵی (National SOC):** چاودێریکردنی چرکە بە چرکەی هاتووچۆی داتا و پووچەڵکردنەوەی هێرشەکان پێش ئەوەی بگەنە سەر بنکەدراوەکان.
2. **پشکنینی بەردەوامی کەلێنەکان:** ئەنجامدانی هێرشی تاقیکاریی کۆنتڕۆڵکراو (Ethical Hacking) بۆ دۆزینەوەی خاڵە لاوازەکان پێش ئەوەی ناحەزان پێیان بزانن.
3. **پابەندبوون بە ستانداردەکانی ISO 27001:** جێبەجێکردنی گشت کۆنتڕۆڵە نێودەوڵەتییەکان بۆ پاراستنی زانیارییە دارایی و نهێنییەکان.`,
      ar: `## الأمن السيبراني وحماية البنية التحتية السيادية

مع تصاعد وتيرة الهجمات الإلكترونية العابرة للحدود، تقدم IDG مظلة أمنية سيادية تضمن حماية متقدمة غير خاضعة لأي شروط خارجية.

### مرتكزات المنظومة الدفاعية:
1. **مركز العمليات السيادي (SOC):** رصد استباقي لكافة الثغرات وتحليل حركة البيانات المشبوهة على مدار الساعة بأحدث تقنيات الذكاء الاصطناعي.
2. **فريق الاستجابة السريعة (CSIRT):** جاهزية ميدانية للتدخل السريع واحتواء الحوادث الأمنية وعزل الأنظمة المتأثرة دون تعطيل المرافق الحيوية.
3. **الامتثال لمعايير ISO 27001 و NIST:** تطبيق أعلى الأطر التنظيمية الصارمة لضمان موثوقية المؤسسات وسرية سجلاتها.`,
      en: `## Sovereign Threat Intelligence and Critical Infrastructure Defense

In an era of sophisticated state-sponsored and criminal cyber intrusions, IDG provides a sovereign defense perimeter ensuring total data integrity without external dependency.

### Operational Methodology:
1. **Automated Threat Detection:** Ingesting millions of telemetry events per second across national conduits to isolate malicious signatures instantly.
2. **Rapid Incident Containment:** Automated quarantine protocols ensuring compromised endpoints cannot pivot laterally into core databases.
3. **Full Compliance Architecture:** Complete alignment with NIST SP 800-53 and ISO/IEC 27001 standards governing institutional data custody.`,
    },
  },

  // ─────────────────────────────────────────────────────────────
  // 3. Digital Identity & Authentication
  // ─────────────────────────────────────────────────────────────
  {
    id: 'digital-id',
    slug: 'digital-identity-authentication',
    iconName: 'Fingerprint',
    badge: {
      ku: 'ناسنامەی نیشتمانی • National e-ID',
      ar: 'الهوية الوطنية • التوثيق الرقمي',
      en: 'National e-ID • Identity Fabric',
    },
    title: {
      ku: 'ناسنامەی دیجیتاڵی و پشتڕاستکردنەوە',
      ar: 'الهوية الرقمية والمصادقة السيادية',
      en: 'Digital Identity & Authentication',
    },
    subtitle: {
      ku: 'سیستەمی ناسنامەی ئەلیکترۆنیی سەلامەت بۆ هاووڵاتیان، بانکەکان، و حکومەت',
      ar: 'نظام موحد وآمن للهوية الرقمية للمواطنين والقطاع المالي والحكومي',
      en: 'Secure sovereign digital identity fabric for citizens, banks, and enterprises',
    },
    description: {
      ku: 'پلاتفۆرمی نیشتمانیی ناسنامەی دیجیتاڵی بە بەکارهێنانی داتای بایۆمەتری، جزدانی مۆبایل، واژۆی ئەلیکترۆنی، و پرۆتۆکۆڵی Zero-Knowledge بۆ دڵنیابوون لە پاراستنی تەواوی نهێنییەکان.',
      ar: 'نظام وطني متكامل لإدارة الهوية الرقمية، يدعم البصمة البايومترية، التوقيع الرقمي المعتمد قانونياً، والمحفظة الرقمية للمواطن بما يضمن أعلى درجات الخصوصية والأمان.',
      en: 'Unified national digital ID and sovereign authentication engine featuring biometric validation, mobile digital wallets, legally-binding electronic signatures, and zero-knowledge privacy proofs.',
    },
    features: {
      ku: [
        'سیستەمی ناسنامەی دیجیتاڵیی نیشتمانی (National e-ID)',
        'پلاتفۆرمی واژۆی ئەلیکترۆنیی یاسایی (E-Signature Engine)',
        'پشتڕاستکردنەوەی کەسایەتی بۆ بانکەکان (e-KYC & AML)',
        'پاراستنی نهێنی بە بەڵگەی سفری زانیاری (Zero-Knowledge Proofs)',
        'پشتڕاستکردنەوەی فرەهەنگاوی پارێزراو (Multi-Factor Authentication)',
      ],
      ar: [
        'منظومة الهوية الوطنية الرقمية الموحدة (National e-ID)',
        'منصة التوقيع الإلكتروني الملزم قانونياً (E-Signature Engine)',
        'التحقق المالي ومكافحة غسيل الأموال الرقمي (e-KYC / AML)',
        'إثباتات الخصوصية دون كشف البيانات (Zero-Knowledge Proofs)',
        'المصادقة متعددة العوامل عبر الهواتف الذكية (MFA / Biometrics)',
      ],
      en: [
        'Sovereign National e-ID & Citizen Single-Sign-On framework',
        'Legally-enforceable digital signature and document sealing API',
        'Instant financial-grade digital e-KYC and AML compliance',
        'Zero-Knowledge cryptographic verification preserving citizen privacy',
        'Hardware-backed multi-factor and biometric authentication standards',
      ],
    },
    highlights: {
      ku: [
        { label: 'بڕوانامە', value: 'واژۆی باوەڕپێکراوی یاسایی' },
        { label: 'خێرایی پشکنین', value: '< ٢ چرکە' },
        { label: 'پاراستنی تایبەتمەندی', value: 'Zero-Knowledge Proofs' },
        { label: 'هاوئاهەنگی', value: 'FIDO2 / WebAuthn' },
      ],
      ar: [
        { label: 'الحجية القانونية', value: 'توقيع إلكتروني معتمد' },
        { label: 'سرعة التحقق', value: '< 2 ثانية' },
        { label: 'حماية الخصوصية', value: 'Zero-Knowledge Cryptography' },
        { label: 'معايير التوافق', value: 'FIDO2 / WebAuthn' },
      ],
      en: [
        { label: 'Legal Validity', value: 'Court-admissible e-Signature' },
        { label: 'Verification Speed', value: '< 2.0s real-time' },
        { label: 'Privacy Protocol', value: 'Zero-Knowledge Cryptography' },
        { label: 'Standards', value: 'FIDO2 / WebAuthn certified' },
      ],
    },
    fullContent: {
      ku: `## ناسنامەی دیجیتاڵی: کلیلێک بۆ دەستڕاگەیشتنی خێرا و پارێزراو

ناسنامەی دیجیتاڵی بنەمای هەموو ئابوورییەکی مۆدێرنە. لە عێراق، بەکارهێنانی کارتی نیشتمانی و داتای بایۆمەتری بەشێوەیەکی دیجیتاڵ دەبێتە هۆی بنبڕکردنی ساختەکاری و کەمکردنەوەی کاتی مامەڵەکان.

### تایبەتمەندییە تەکنیکییەکان:
1. **جزدانی مۆبایلی هاووڵاتی (Citizen Digital Wallet):** هەڵگرتنی بەڵگەنامە فەرمییەکان وەک مۆڵەتی شۆفێری، کارتی نیشتمانی و بڕوانامەی زانکۆ لەناو مۆبایل بە تشفیری ئاستی بەرز.
2. **واژۆی دیجیتاڵیی فەرمی:** بەستنەوەی سەرجەم گرێبەست و مامەڵە داراییەکان بە واژۆی دیجیتاڵی کە لە دادگاکاندا بەهای تەواوی یاسایی هەیە.
3. **e-KYC بۆ کەرتی بانکی:** کەمکردنەوەی کاتی کردنەوەی هەژماری بانکی لە چەند رۆژەوە بۆ چەند خولەکێک لەڕێگەی پشتڕاستکردنەوەی خێرا.`,
      ar: `## منظومة الهوية الرقمية والتوثيق السيادي

تعد الهوية الرقمية الركن الأساسي لبناء اقتصاد رقمي موثوق. تعمل منصة IDG على تحويل الوثائق الثبوتية إلى هويات رقمية آمنة يمكن التحقق منها فورياً دون الحاجة إلى المستندات الورقية.

### المحاور التقنية للمنظومة:
1. **المحفظة الرقمية للمواطن:** تمكين المواطن من حمل وثائقه الرسمية ورخصه وبطاقاته الموحدة مشفرة داخل هاتفه الذكي.
2. **التوقيع الرقمي المعتمد:** توفير منصة توقيع للمؤسسات والشركات تتمتع بالحجية القانونية الكاملة أمام القضاء والجهات الرسمية.
3. **التحقق اللحظي للبنوك (e-KYC):** فتح الحسابات المصرفية وإجراء المعاملات المالية الآمنة في دقائق معدودة مع الامتثال لضوابط البنك المركزي.`,
      en: `## Sovereign Digital Identity: Enabling Iraq's Frictionless Economy

A dependable digital identity framework is the prerequisite for all modern economic activity. IDG’s identity fabric links state registers with secure consumer wallets, eliminating identity fraud.

### Key Functional Capabilities:
1. **Citizen Mobile ID Wallet:** Secure smartphone enclave hosting verified credentials, driver's licenses, and institutional accreditations with zero paper replication.
2. **Cryptographic e-Signatures:** Legally admissible signature infrastructure enabling secure execution of government contracts, deeds, and commercial agreements.
3. **Automated Banking Onboarding (e-KYC):** Reducing bank account provisioning times from weeks to minutes while ensuring full compliance with Central Bank AML mandates.`,
    },
  },

  // ─────────────────────────────────────────────────────────────
  // 4. AI & Intelligence Services
  // ─────────────────────────────────────────────────────────────
  {
    id: 'ai-intel',
    slug: 'ai-intelligence-services',
    iconName: 'Brain',
    badge: {
      ku: 'ژیریی دەستکرد • Applied AI & ML',
      ar: 'الذكاء الاصطناعي • حلول البيانات',
      en: 'Applied AI & ML • Sovereign Intelligence',
    },
    title: {
      ku: 'ژیریی دەستکرد و خزمەتگوزاریی زیرەک',
      ar: 'الذكاء الاصطناعي والخدمات الذكية',
      en: 'AI & Intelligence Services',
    },
    subtitle: {
      ku: 'مۆدێلە پێشکەوتووەکانی فێربوونی مەکینە، شیکاریی داتای گەورە، و ئۆتۆمەیشن',
      ar: 'نماذج التعلم الآلي المتقدمة، تحليلات البيانات الضخمة، والأتمتة الذكية',
      en: 'Domain-adapted machine learning, big data analytics, and operational automation',
    },
    description: {
      ku: 'خزمەتگوزارییەکانی ژیریی دەستکردی نیشتمانی (AI Gate) بە بەکارهێنانی مۆدێلی زمانیی گونجێندراو، شیکاریی پێشبینیکەر، دۆزینەوەی ساختەکاری لە گومرگ و باج، و بەدیجیتاڵیکردنی بڕیارە ئیدارییەکان.',
      ar: 'خدمات الذكاء الاصطناعي السيادي (منصة AI Gate) لتحليل البيانات الضخمة، كشف الاحتيال، التنبؤ باتجاهات التجارة، وأتمتة اتخاذ القرار المؤسسي بالأدلة الواقعية.',
      en: 'Sovereign applied machine learning platforms (including AI Gate Iraq) providing domain-adapted language processing, predictive analytics, automated fraud detection, and evidence-grounded institutional decision pipelines.',
    },
    features: {
      ku: [
        'شیکاری و دەرهێنانی زانیاری لە داتای گەورە (Big Data Insights)',
        'دۆزینەوەی ساختەکاریی دارایی و گومرگی (Fraud & Anomaly Detection)',
        'سیستەمی وەڵامدانەوەی زیرەک و چاتبۆتی حکومی (Sovereign Chatbots)',
        'مۆدێلی پێشبینیکردنی ئابووری و بازرگانی (Predictive Modeling)',
        'چارەسەری تایبەتی فێربوونی مەکینە بۆ دامەزراوەکان (Custom ML Pipelines)',
      ],
      ar: [
        'تحليلات واستخراج الأنماط من البيانات الضخمة (Big Data Analytics)',
        'كشف التهرب والاحتيال المالي والكمركي (Fraud Detection)',
        'المساعدات الذكية وأتمتة الاستجابة الحكومية (Sovereign LLMs)',
        'نماذج التنبؤ بالتدفقات التجارية والمالية (Forecasting Models)',
        'بناء خوارزميات مخصصة للمؤسسات الوطنية (Custom ML Pipelines)',
      ],
      en: [
        'Big data ingestion and automated intelligence generation',
        'Custom fraud, tariff anomaly, and tax evasion detection models',
        'Sovereign conversational agents and administrative automation LLMs',
        'Predictive economic forecasting & supply chain optimization models',
        'Secure on-premises machine learning training and fine-tuning pipelines',
      ],
    },
    highlights: {
      ku: [
        { label: 'پلاتفۆرمی کارپێکردن', value: 'AI Gate Iraq' },
        { label: 'پاراستنی مۆدێل', value: '١٠٠٪ لەناو عێراق ڕاهێنراو' },
        { label: 'زمانی پشتگیریکراو', value: 'کوردی، عەرەبی، ئینگلیزی' },
        { label: 'دۆزینەوەی ساختەکاری', value: '٩٨.٤٪ وردبینی' },
      ],
      ar: [
        { label: 'المنصة المشغلة', value: 'بوابة AI Gate العراق' },
        { label: 'أمان النماذج', value: 'تدريب محلي 100% داخل العراق' },
        { label: 'اللغات المدعومة', value: 'العربية، الكردية، الإنجليزية' },
        { label: 'دقة رصد الاحتيال', value: '98.4% دقة تشغيلية' },
      ],
      en: [
        { label: 'Underlying Engine', value: 'AI Gate Iraq Platform' },
        { label: 'Model Sovereignty', value: '100% Hosted & Trained Locally' },
        { label: 'Languages', value: 'Kurdish, Arabic, English' },
        { label: 'Anomaly Accuracy', value: '98.4% field precision' },
      ],
    },
    fullContent: {
      ku: `## ژیریی دەستکرد بۆ خزمەتی حوکمڕانیی سەروەر

ژیریی دەستکرد لە IDG تەنیا تیۆری نییە؛ بەڵکو کەرەستەیەکی مەیدانییە بۆ بەرزکردنەوەی توانای بەرهەمهێنان و نەهێشتنی بەفیڕۆچوونی سامانە گشتییەکان.

### کایەکانی بەکارهێنان:
1. **پشکنینی گومرگ و دەروازەکان (INSW AI):** بەکارهێنانی خوارزمی زیرەک بۆ پشکنینی ڕاستەوخۆی وێنەی سکانەرەکان و بەڵگەنامە بارکراوەکان بۆ دۆزینەوەی هەر ساختەکارییەک لە ماوەی چەند چرکەیەکدا.
2. **پێشبینیکردنی پێداویستییە دەرمانسازی و خۆراکییەکان:** شیکردنەوەی ئاماری کڕین و هاتوچۆی کەلوپەل بۆ دەستنیشانکردنی پێشوەختەی هەر کەمییەک لە بازاڕدا.
3. **مۆدێلی زمانیی کوردی و عەرەبی:** دارشتنی مۆدێلی تایبەت بە زاراوە یاسایی و کارگێڕییەکانی عێراق بە پاراستنی تەواوی نهێنییەکان.`,
      ar: `## الذكاء الاصطناعي في خدمة الحوكمة الرشيدة

لا يقتصر الذكاء الاصطناعي في IDG على البحوث النظرية، بل يترجم إلى حلول ميدانية تعزز الإنتاجية وتحمي المال العام.

### مجالات التطبيق الاستراتيجي:
1. **أتمتة الفحص الكمركي والتجاري (AI Gate):** تحليل بيانات المنافذ الحدودية ومقارنة الوثائق التجارية بدقة تفوق 98% لمنع التهرب وتسهيل التجارة المشروعة.
2. **التنبؤ بسلاسل الإمداد الوطنية:** تحليل تدفقات السلع والمواد الغذائية والدوائية لتفادي الأزمات اللوجستية مسبقاً.
3. **النماذج اللغوية المتخصصة:** تدريب نماذج تفهم البيئة القانونية والإدارية العراقية باللهجات واللغات الرسمية دون إرسال البيانات لخوادم أجنبية.`,
      en: `## Applied Artificial Intelligence: Powering Autonomous Governance

At IDG, machine learning is engineered to solve acute institutional challenges, automate repetitive casework, and detect anomalies across massive transactional datasets.

### Primary Deployment Scenarios:
1. **Cross-Border Trade Anomaly Detection:** Real-time cross-referencing of customs manifests, tariff codes, and valuation databases to identify evasion patterns instantly.
2. **Macroeconomic Logistics Forecasting:** Predicting essential commodity supplies, port throughput, and transit congestion to support state policy formulation.
3. **Sovereign Localized Language Models:** Fine-tuned LLMs trained on Iraqi administrative terminology, laws, and procurement guidelines operating in strictly isolated air-gapped enclaves.`,
    },
  },

  // ─────────────────────────────────────────────────────────────
  // 5. ZaNa Academy — Digital Education Platform
  // ─────────────────────────────────────────────────────────────
  {
    id: 'zana-academy',
    slug: 'zana-academy-digital-education',
    iconName: 'GraduationCap',
    badge: {
      ku: 'پەروەردەی دیجیتاڵی • ZaNa Academy',
      ar: 'التعليم الرقمي • أكاديمية زانا',
      en: 'Digital Education • ZaNa Academy',
    },
    title: {
      ku: 'ئەکادیمیای ZaNa بۆ پەروەردەی دیجیتاڵی',
      ar: 'أكاديمية زانا للتعليم والتدريب الرقمي',
      en: 'ZaNa Academy — Digital Education Platform',
    },
    subtitle: {
      ku: 'پلاتفۆرمی پێگەیاندنی نەوەی داهاتووی ئەندازیاران و سەرکردەکانی تەکنەلۆژیا لە عێراق',
      ar: 'منصة تأهيل الجيل القادم من المهندسين وقادة التكنولوجيا والابتكار في العراق',
      en: 'Comprehensive capacity building platform cultivating next-generation Iraqi engineers',
    },
    description: {
      ku: 'پرۆگرامی ئەکادیمیای ZaNa بریتییە لە ڕاهێنانی پراکتیکی لەسەر سۆفتوێر، ژیریی دەستکرد، ئاسایشی سایبەری، و کارسازی لەڕێگەی وانەی ڕاستەوخۆ، تاقیگەی کردارەکی، و دامەزراندنی دەرچووان.',
      ar: 'ذراع IDG التعليمي والتأهيلي، يقدم مناهج عملية في هندسة البرمجيات، الذكاء الاصطناعي، الأمن السيبراني، وريادة الأعمال، مع توفير فرص عمل للمتميزين.',
      en: 'Comprehensive technical learning platform closing Iraq’s talent gap with production-grade engineering courses, immersive coding labs, industry certifications, and direct employment pathways.',
    },
    features: {
      ku: [
        'خولی پێشکەوتوو لە تەکنەلۆژیا، حوکمڕانی و کارسازی (Advanced Tech Courses)',
        'بڕوانامەی دانپێدانراوی نێودەوڵەتی و دامەزراوەیی (Accredited Certifications)',
        'تاقیگەی کارلێکپێکەری کۆدنوسین و تاقیکردنەوە (Interactive Coding Labs)',
        'بەرنامەی ڕێنوێنی لەلایەن ئەندازیارانی باڵا (Expert Mentorship)',
        'هاوکاریکردن لە دامەزراندنی دەرچووان لە پڕۆژەکانی IDG (Direct Job Placement)',
      ],
      ar: [
        'برامج تدريبية متقدمة في هندسة البرمجيات والحوكمة (Tech & Governance Courses)',
        'شهادات معتمدة وفق المعايير التقنية الدولية (Accredited Certifications)',
        'مختبرات برمجية تفاعلية ومشاريع حية (Interactive Coding Labs)',
        'إشراف وتوجيه مباشر من كبار مهندسي الأنظمة (Expert Mentorship)',
        'برامج توظيف وربط الخريجين بسوق العمل وشركات IDG (Job Placement)',
      ],
      en: [
        'Production-grade curricula spanning cloud, AI, and systems architecture',
        'Industry-recognized sovereign credentials and competency certificates',
        'Hands-on sandbox coding labs connected to real-world staging pipelines',
        'Direct mentorship from veteran staff software and security architects',
        'Guaranteed placement pipelines within IDG subsidiaries and national enterprises',
      ],
    },
    highlights: {
      ku: [
        { label: 'ژمارەی قوتابیانی ڕاهێنراو', value: '٥٠٠+ ئەندازیار' },
        { label: 'ڕێژەی دامەزراندن', value: '٨٧٪ لە کەرتی تەکنەلۆژیا' },
        { label: 'پڕۆژەی ڕاستەقینە', value: '١٠٠٪ فێربوونی کردارەکی' },
        { label: 'ناوەندەکان', value: 'هەولێر، بەغدا، ئۆنلاین' },
      ],
      ar: [
        { label: 'الكوادر المدربة', value: 'أكثر من 500 مهندس' },
        { label: 'نسبة التوظيف', value: '87% في كبرى الشركات' },
        { label: 'المشاريع التطبيقية', value: '100% تدريب عملي' },
        { label: 'المراكز', value: 'أربيل، بغداد، ومنصة عن بعد' },
      ],
      en: [
        { label: 'Engineers Trained', value: '500+ professionals' },
        { label: 'Placement Rate', value: '87% within 6 months' },
        { label: 'Curriculum Model', value: '100% Production projects' },
        { label: 'Locations', value: 'Erbil, Baghdad & Virtual' },
      ],
    },
    fullContent: {
      ku: `## ئەکادیمیای ZaNa: دروستکردنی سەرمایەی مرۆیی نیشتمانی

پێشکەوتنی تەکنەلۆژی بەبێ کادری لێهاتووی خۆماڵی مەحاڵە. ئەکادیمیای ZaNa کار لەسەر ئەوە دەکات کە دەرچووانی زانکۆکانی عێراق لە ئاستی تیۆرییەوە بگۆڕێت بۆ ئەندازیاری ئاست بەرز.

### میتۆدی فێربوون لە ZaNa:
1. **فێربوون بە بەرهەمهێنان:** فێرخوازان کۆد بۆ خزمەتگوزارییە ڕاستەقینەکان دەنووسن؛ فێری شێوازی تاقیکردنەوە، گەیاندنی بەردەوام (CI/CD)، و چاکسازی دەبن.
2. **تەرکیز لەسەر سەروەریی دیجیتاڵی:** تێگەیشتن لە بنەماکانی Zero-Trust، پاراستنی داتا و ئاسایشی کۆگا لە ناوخۆی وڵات.
3. **پردی پەڕینەوە بۆ بازاڕی کار:** هاوبەشی لەگەڵ کۆمپانیا گەورەکانی کەرتی تایبەت و کەرتی گشتی بۆ وەرگرتنی ڕاستەوخۆی دەرچووانی ئەکادیمیا.`,
      ar: `## أكاديمية زانا: الاستثمار في رأس المال البشري العراقي

السيادة التكنولوجية لا تتحقق باستيراد البرمجيات، بل بتأهيل عقول وطنية قادرة على ابتكارها وإدارتها. تسعى أكاديمية زانا إلى تحويل المعرفة الأكاديمية إلى خبرات برمجية وهندسية جاهزة للإنتاج.

### المنهجية التعليمية في زانا:
1. **التعلم القائم على المشاريع:** يعمل الطلاب في بيئات محاكاة لمشاريع وطنية كبرى ويكتسبون خبرة العمل في فرق تطوير رشيقة (Agile).
2. **التركيز على مهارات السيادة والأمن:** إتقان هندسة السحابة، التشفير المتقدم، والتعامل مع قواعد البيانات السيادية.
3. **مسارات التوظيف المباشر:** ربط المتدربين بفرص عمل نوعية داخل شركات IDG والشركاء المؤسسيين في بغداد وأربيل.`,
      en: `## ZaNa Academy: Cultivating Sovereign Software Engineering Prowess

Sovereign digital systems cannot be sustained without sovereign talent. ZaNa Academy bridges the gap between university computer science education and production-grade software engineering.

### Pedagogical Distinctives:
1. **Production-Driven Immersion:** Students build, test, and deploy microservices under the scrutiny of senior technical architects using modern toolchains.
2. **Deep Focus on Security & Resilience:** Instilling habits of zero-trust architecture, automated regression testing, and cryptographic verification from day one.
3. **Accelerated Enterprise Placement:** Graduates step directly into high-impact roles across IDG subsidiaries, ministries, and leading enterprise engineering centers.`,
    },
  },

  // ─────────────────────────────────────────────────────────────
  // 6. Venture Studio & Incubation
  // ─────────────────────────────────────────────────────────────
  {
    id: 'venture-studio',
    slug: 'venture-studio-incubation',
    iconName: 'Rocket',
    badge: {
      ku: 'ستۆدیۆی وەبەرهێنان • Venture Studio',
      ar: 'استوديو المشاريع • حاضنة الابتكار',
      en: 'Venture Studio • Institutional Incubation',
    },
    title: {
      ku: 'ستۆدیۆی وەبەرهێنان و دامەزراندنی پڕۆژە',
      ar: 'استوديو المشاريع والتطوير المؤسسي',
      en: 'Venture Studio & Incubation',
    },
    subtitle: {
      ku: 'بەرنامەی پاڵپشتی و گەشەپێدانی پڕۆژە تەکنەلۆژییە ستراتیژییەکانی عێراق',
      ar: 'برنامج تأسيس وتسريع المشاريع التقنية الاستراتيجية ذات الأثر الوطني',
      en: 'Institutional venture incubation accelerating sovereign Iraqi tech enterprises',
    },
    description: {
      ku: 'ستۆدیۆی وەبەرهێنانی IDG سەرمایە، تەلارسازیی تەکنیکی، پشتیوانیی یاسایی و تۆڕی پەیوەندییە حکومی و بازرگانییەکان بۆ ستارتئەپ و پڕۆژە نوێیەکان دابین دەکات بۆ دروستکردنی کۆمپانیای سەربەخۆ.',
      ar: 'يوفر استوديو مشاريع IDG رأس المال الاستثماري، التأسيس التقني والقانوني، والوصول إلى الشبكات المؤسسية للشركات التقنية الناشئة لضمان نموها وريادتها.',
      en: 'Accelerating mission-critical Iraqi technology ventures by providing up to $100K in milestone seed capital, senior architectural governance, legal infrastructure, and verified market access.',
    },
    features: {
      ku: [
        'پشتڕاستکردنەوەی بیرۆکە و لێکۆڵینەوەی مەیدانی (Idea Validation & Feasibility)',
        'پەرەپێدانی بەرهەم و تەلارسازیی تەکنیکی (Co-Engineering & MVP Build)',
        'دابینکردنی سەرمایەی دەستپێک تا ١٠٠ هەزار دۆلار (Seed Capital Funding)',
        'پشتیوانیی تەواوی یاسایی، کۆنترۆڵ و پاراستنی مافی بیرۆکە (Legal & Regulatory)',
        'بەستنەوە بە بازاڕی حکومی و دامەزراوە گەورەکان (Enterprise & Gov Access)',
      ],
      ar: [
        'التحقق من جدوى الأفكار ونماذج الأعمال (Idea Validation)',
        'بناء النماذج الأولية والهندسة المشتركة (Product Development & MVP)',
        'تمويل مرحلي أولي يصل إلى 100,000 دولار (Seed Capital)',
        'الدعم القانوني والتنظيمي وحماية الملكية الفكرية (Legal & IP Protection)',
        'فتح قنوات الشراكة مع الوزارات والشركات الكبرى (Market & Gov Access)',
      ],
      en: [
        'Institutional feasibility validation and market problem discovery',
        'Co-engineering, systems architecture, and rapid MVP production',
        'Milestone-gated seed capital investment up to $100,000',
        'Sovereign regulatory structuring and intellectual property shielding',
        'Direct procurement and integration pipelines into major state & private institutions',
      ],
    },
    highlights: {
      ku: [
        { label: 'سەرمایەی سەرەتایی', value: 'تا ١٠٠،٠٠٠ دۆلار' },
        { label: 'پڕۆژەی دروستکراو', value: '٦+ کۆمپانیای سەربەخۆ' },
        { label: 'ڕێژەی سەرکەوتن', value: 'سەروو ٨٥٪ بەردەوامی' },
        { label: 'تۆڕی کارکردن', value: 'کەرتی بانکی، بازرگانی، حکومی' },
      ],
      ar: [
        { label: 'التمويل الأولي', value: 'يصل إلى 100,000 دولار' },
        { label: 'المشاريع المحتضنة', value: 'أكثر من 6 شركات مستقلة' },
        { label: 'نسبة الاستدامة', value: 'تفوق 85% نجاح تجاري' },
        { label: 'الشبكة المؤسسية', value: 'القطاع المالي، اللوجستي، الحكومي' },
      ],
      en: [
        { label: 'Seed Deployment', value: 'Up to $100,000 USD' },
        { label: 'Ventures Launched', value: '6+ Autonomous Spinouts' },
        { label: 'Commercial Viability', value: '> 85% Multi-year survival' },
        { label: 'Ecosystem Reach', value: 'Finance, Trade, State agencies' },
      ],
    },
    fullContent: {
      ku: `## مۆدێلی Venture Studio لە خزمەت بنیاتنانی ئابووریی سەروەر

ستۆدیۆی وەبەرهێنان بریتییە لە شێوازێکی هاوچەرخ کە تیایدا کۆمپانیای دایک (IDG) تەنیا پارە نادات؛ بەڵکو تەواوی تیم و ئەندازیاری و ژێرخانی خۆی دەخاتەگەڕ تا بیرۆکەیەک دەبێتە کۆمپانیایەکی قازانجدار و سەقامگیر.

### قۆناغەکانی گەشەکردن:
1. **دەستنیشانکردنی کێشە نیشتمانییەکان:** ئێمە پڕۆژە لەسەر خەیاڵ دروست ناکەین، بەڵکو دەست دەخەینە سەر ئەو کێشانەی کە بانکەکان، وەزارەتەکان یان کەرتی بازرگانی ساڵانە ملیۆنان دۆلاریان تێدا بەفیڕۆ دەچێت.
2. **دروستکردنی بەرهەم بە خێرایی باڵا:** تیمی تەکنیکیی IDG پرۆتۆتایپی سەرەتایی دەخاتەگەڕ بە بەکارهێنانی ژێرخانی پارێزراوی خۆمان.
3. **بەستنەوە بە بازاڕی ڕاستەقینە:** وەک پردێک کار دەکەین تا پڕۆژەکە یەکەمین گرێبەستی گەورەی لەگەڵ کەرتی گشتی یان تایبەتدا واژۆ بکات.`,
      ar: `## نموذج استوديو المشاريع: بناء اقتصاد وطني منتج

يختلف استوديو المشاريع (Venture Studio) عن الحاضنات التقليدية؛ فنحن في IDG لا نكتفي بتقديم التمويل، بل نشارك في كتابة الكود البرمجي، وتأسيس الهيكل القانوني، وتوفير العملاء الأوائل من خلال شبكتنا المؤسسية.

### مراحل العمل في استوديو IDG:
1. **اقتناص الفرص المؤسسية:** التركيز على حل المعضلات الحقيقية التي تواجه التجارة والمصارف والخدمات اللوجستية في العراق.
2. **الهندسة والإنتاج السريع:** تسخير البنية التحتية السحابية وأطر الأمان الخاصة بـ IDG لإطلاق المنتجات في أشهر معدودة.
3. **التوسع والاستقلالية:** تحويل المشروع إلى شركة وطنية قائمة بذاتها تخلق فرص عمل نوعية للشباب العراقي.`,
      en: `## The Institutional Venture Studio: Engineering Autonomous Enterprises

Unlike passive venture funds or surface-level incubators, IDG’s Venture Studio provides hands-on engineering, regulatory clearance, and enterprise customer discovery to build scalable, sovereign companies from the ground up.

### The Studio Lifecycle:
1. **Systemic Problem Discovery:** Identifying acute operational friction in customs, identity, digital payments, and logistics across Iraq.
2. **Co-Engineering & Sovereign Infrastructure Deployment:** Leveraging IDG’s shared cloud, security, and identity backbones to deploy MVPs with minimal technical debt.
3. **Institutional Scale & Spin-Out:** Transitioning incubated platforms into autonomous, self-sustaining corporate entities with long-term sovereign ownership.`,
    },
  },
];

// Helper to look up a service by slug or localized slug
export function getServiceBySlug(slug: string): ServiceItem | undefined {
  // Strip trailing -ku, -ar, -en if present
  const baseSlug = slug.replace(/-(ku|ar|en)$/, '');
  return SERVICES_LIST.find((s) => s.slug === baseSlug || s.slug === slug);
}
