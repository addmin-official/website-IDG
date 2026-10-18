export interface JobPosting {
  id: string;
  title: string;
  titleKu: string;
  titleAr: string;

  description: string;
  descriptionKu: string;
  descriptionAr: string;

  responsibilities: string[];
  responsibilitiesKu: string[];
  responsibilitiesAr: string[];

  skills: string[];
  skillsKu: string[];
  skillsAr: string[];

  preferredSkills?: string[];

  level: 'entry' | 'mid' | 'senior' | 'executive';
  location: string;
  salary?: {
    min: number;
    max: number;
    currency: string;
  };

  department: 'engineering' | 'product' | 'operations' | 'leadership';
  category: 'leadership' | 'engineering' | 'product' | 'operations';
}

export const rawJobPostings: JobPosting[] = [
  // ==========================================
  // LEADERSHIP POSITIONS
  // ==========================================
  {
    id: 'cto',
    title: 'Chief Technology Officer (CTO)',
    titleKu: 'سەرۆکی جێبەجێکاری تەکنەلۆژیا (CTO)',
    titleAr: 'الرئيس التنفيذي للتكنولوجيا (CTO)',
    description:
      'Lead all technical strategy, sovereign cloud deployments, distributed systems, and enterprise Zero-Trust architectures across IDG subsidiary platforms.',
    descriptionKu:
      'ڕابەرایەتیکردنی سەرجەم ستراتیژییە تەکنیکییەکان، کلاودی سەروەر، سیستەمە دابەشکراوەکان، و تەلارسازیی Zero-Trust لە سەرجەم پلاتفۆرمەکانی IDG.',
    descriptionAr:
      'قيادة الاستراتيجية التكنولوجية الوطنية، البنية السحابية السيادية، الأنظمة الموزعة، وهندسة الأمان بنموذج Zero-Trust لكافة منصات المجموعة.',
    responsibilities: [
      'Direct national technology strategy, cloud infrastructure, and distributed computing',
      'Architect highly resilient systems maintaining 99.98% operational uptime SLA',
      'Oversee engineering recruitment, architectural governance, and code auditing',
      'Enforce international ISO 27001 standards and domestic data sovereignty rules',
    ],
    responsibilitiesKu: [
      'ڕابەرایەتیکردنی ستراتیژی تەکنەلۆژیای نیشتمانی و ژێرخانی کلاود',
      'داڕشتنی تەلارسازیی بەرگەگری بەرز بە بەردەوامیی ٩٩.٩٨٪ SLA',
      'سەرپەرشتیکردنی دامەزراندن و پەرەپێدانی تیمی ئەندازیاری نیشتمانی',
      'جێبەجێکردنی ستانداردە نێودەوڵەتییەکان و یاساکانی سەروەریی داتا',
    ],
    responsibilitiesAr: [
      'توجيه الاستراتيجية التكنولوجية الشاملة والبنى السحابية والأنظمة الموزعة',
      'تصميم بنى معمارية فائقة المرونة تضمن استمرارية تشغيلية لا تقل عن 99.98%',
      'الإشراف على استقطاب وتوجيه الكوادر الهندسية وتدقيق المعماريات البرمجية',
      'تطبيق أعلى المعايير الدولية ISO 27001 وضوابط سيادة البيانات الوطنية',
    ],
    skills: ['Distributed Systems', 'Cloud Architecture', 'Zero-Trust Security', 'Go / Rust', 'Kubernetes'],
    skillsKu: ['سیستەمی دابەشکراو', 'تەلارسازی کلاود', 'ئاسایشی Zero-Trust', 'Go / Rust', 'Kubernetes'],
    skillsAr: ['الأنظمة الموزعة', 'المعمارية السحابية', 'أمان Zero-Trust', 'Go / Rust', 'Kubernetes'],
    preferredSkills: ['High-Throughput Banking Engines', 'National PKI Infrastructure', 'AI/ML Pipelines'],
    level: 'executive',
    location: 'Baghdad / Erbil, Iraq (Hybrid / Remote OK)',
    
    department: 'leadership',
    category: 'leadership',
  },
  {
    id: 'coo',
    title: 'Chief Operating Officer (COO)',
    titleKu: 'سەرۆکی جێبەجێکاری کارگێڕی (COO)',
    titleAr: 'الرئيس التنفيذي للعمليات (COO)',
    description:
      'Manage operational execution, inter-agency institutional relationships, and program delivery cadences across the digital gateway ecosystem.',
    descriptionKu:
      'بەڕێوەبردنی ئۆپەراسیۆنە کارگێڕییەکان، هەماهەنگی لەگەڵ دامەزراوە حکومی و تایبەتەکان، و گەرەنتیکردنی خێرایی جێبەجێکردنی پڕۆژە نیشتمانییەکان.',
    descriptionAr:
      'إدارة العمليات التشغيلية والحوكمة المؤسسية المشتركة مع القطاع العام وضمان الانضباط التنفيذي لمشاريع البوابة الرقمية.',
    responsibilities: [
      'Orchestrate operational discipline and KPIs across all engineering squads',
      'Cultivate public-private partnerships and institutional accords',
      'Scale operational resilience, vendor relations, and procurement standards',
      'Maintain full executive transparency and delivery metrics for the leadership council',
    ],
    responsibilitiesKu: [
      'ڕێکخستنی دیسپلینی کارگێڕی و پێوەرەکانی KPI بۆ سەرجەم تیمەکان',
      'بەستنی هاوبەشیی ستراتیژی لەگەڵ کەرتی گشتی و دامەزراوە نیشتمانییەکان',
      'پەرەپێدانی بەردەوامیی کارگێڕی و ستانداردەکانی دابینکردن',
      'پێشکەشکردنی ڕاپۆرتی شەفافی کارگێڕی بۆ دەستەی سەرکردایەتی',
    ],
    responsibilitiesAr: [
      'ضبط العمليات التنفيذية ومؤشرات الأداء (KPIs) لكافة فرق العمل',
      'بناء وتوثيق الشراكات الاستراتيجية مع الوزارات والمؤسسات العامة والخاصة',
      'تعزيز كفاءة التوريد والحوكمة التشغيلية وإدارة المخاطر المؤسسية',
      'تقديم تقارير الشفافية والمتابعة التنفيذية الدورية لمجلس الإدارة',
    ],
    skills: ['Operations Strategy', 'GovTech Delivery', 'Strategic Partnerships', 'Change Management', 'KPI Governance'],
    skillsKu: ['ستراتیژی کارگێڕی', 'پڕۆژەکانی GovTech', 'هاوبەشیی ستراتیژی', 'بەڕێوەبردنی گۆڕانکاری', 'حوکمڕانیی KPI'],
    skillsAr: ['استراتيجية العمليات', 'مشاريع GovTech', 'الشراكات الاستراتيجية', 'إدارة التحول', 'حوكمة الأداء'],
    preferredSkills: ['Public Sector Modernization', 'Cross-Border Trade Programs', 'Legal Accords'],
    level: 'executive',
    location: 'Baghdad / Erbil, Iraq',
    
    department: 'leadership',
    category: 'leadership',
  },
  {
    id: 'cio',
    title: 'Chief Innovation Officer & Head of Studio (CIO)',
    titleKu: 'سەرۆکی داهێنان و ستۆدیۆی وەبەرهێنان (CIO)',
    titleAr: 'الرئيس التنفيذي للابتكار واستوديو المشاريع (CIO)',
    description:
      'Direct ZaNa Academy programs and the IDG Venture Studio, accelerating homegrown sovereign digital startups and technical human capital.',
    descriptionKu:
      'سەرپەرشتیکردنی پڕۆگرامەکانی ئەکادیمیای زانا و ستۆدیۆی وەبەرهێنانی IDG بۆ پێگەیاندنی بەهرەی گەنجانی عێراق و خێراکردنی کارسازە تەکنۆلۆژییەکان.',
    descriptionAr:
      'قيادة برامج أكاديمية زانا واستوديو المشاريع التقنية لتأهيل الكفاءات العراقية الشابة وتسريع الشركات الناشئة السيادية الواعدة.',
    responsibilities: [
      'Scale ZaNa Academy technical fellowship and engineering apprenticeship programs',
      'Incubate high-impact GovTech and FinTech startups under the IDG Venture Studio',
      'Connect domestic software graduates with sovereign platform missions',
      'Establish technical partnerships with universities and regional tech hubs',
    ],
    responsibilitiesKu: [
      'گەشەپێدانی پڕۆگرامەکانی ئەکادیمیای زانا بۆ ڕاهێنانی ئەندازیارانی گەنج',
      'پێگەیاندنی کۆمپانیا نوێیەکانی بوارەکانی GovTech و FinTech لە ستۆدیۆی IDG',
      'بەستنەوەی دەرچووانی تەکنیکی بە پڕۆژە نیشتمانییە سەروەرەکانەوە',
      'بەستنی پەیوەندی لەگەڵ زانکۆکان و ناوەندە تەکنیکییە هەرێمییەکان',
    ],
    responsibilitiesAr: [
      'توسيع برامج الزمالة الهندسية والتدريب التقني المتقدم لأكاديمية زانا',
      'احتضان وتسريع الشركات التقنية في مجالات GovTech وFinTech ضمن استوديو IDG',
      'دمج المطورين والمهندسين الواعدين في المشاريع السيادية الحيوية',
      'تأسيس شراكات أكاديمية وتقنية مع الجامعات ومراكز الابتكار الإقليمية',
    ],
    skills: ['Venture Building', 'EdTech Systems', 'Talent Incubation', 'Startup Acceleration', 'Ecosystem Strategy'],
    skillsKu: ['ستۆدیۆی وەبەرهێنان', 'پەروەردەی تەکنەلۆژی', 'ڕاهێنانی کادیران', 'خێراکردنی کارسازی', 'ستراتیژی ژینگە'],
    skillsAr: ['استوديو المشاريع', 'تكنولوجيا التعليم', 'تأهيل المواهب', 'تسريع الأعمال', 'استراتيجية المنظومة'],
    preferredSkills: ['Developer Relations', 'Angel Syndicates', 'Curriculum Engineering'],
    level: 'executive',
    location: 'Erbil / Baghdad, Iraq (Hybrid)',
    
    department: 'leadership',
    category: 'leadership',
  },

  // ==========================================
  // ENGINEERING POSITIONS
  // ==========================================
  {
    id: 'eng-lead',
    title: 'Lead Backend & Systems Architect',
    titleKu: 'بەڕێوەبەری تیمی Backend و تەلارسازی سیستەم',
    titleAr: 'رئيس فريق الخادم الخلفي ومعمارية النظم',
    description:
      'Architect robust, ultra-low-latency backend microservices and sovereign databases using Go, Rust, and PostgreSQL for mission-critical national platforms.',
    descriptionKu:
      'داڕشتنی سیستەمە گەورەکانی باکێند لەسەر بنەمای مایکرۆسێرڤس و داتابەیسی سەروەر بە زمانەکانی Go و Rust بۆ پلاتفۆرمە چارەنووسسازەکانی نیشتمان.',
    descriptionAr:
      'تصميم وبناء الأنظمة الخلفية فائقة السرعة وقواعد البيانات السيادية بلغات Go و Rust و PostgreSQL للمنصات الوطنية الحيوية.',
    responsibilities: [
      'Design event-driven, distributed microservice architectures with Go and Rust',
      'Maintain sub-10ms API latency benchmarks across national data queries',
      'Enforce zero-data-loss cryptographic pipelines and PostgreSQL sharding',
      'Mentor senior engineers in concurrent systems design and memory safety',
    ],
    responsibilitiesKu: [
      'دیزاینکردنی مایکرۆسێرڤسە دابەشکراوەکان بە زمانەکانی Go و Rust',
      'پاراستنی کەمترین کاتی وەڵامدانەوەی API (ژێر ١٠ ملی چرکە)',
      'جێبەجێکردنی پاراستنی تەواوی داتا بە کریپتۆگرافی و دابەشکردنی داتابەیس',
      'ڕاهێنانی ئەندازیارانی تیم لەسەر تەلارسازی و پاراستنی میمۆری',
    ],
    responsibilitiesAr: [
      'تصميم معمارية الخدمات المصغرة الموزعة وعالية التزامن باستخدام Go و Rust',
      'تحقيق استجابة للواجهات البرمجية (APIs) تقل عن 10 ميلي ثانية',
      'تطبيق خطوط التشفير السيادي وتقسيم قواعد البيانات PostgreSQL المتقدم',
      'توجيه المهندسين وتدريبهم على تصميم النظم المعقدة وأمان الذاكرة',
    ],
    skills: ['Go', 'Rust', 'PostgreSQL', 'Kafka / NATS', 'Distributed Transactions'],
    skillsKu: ['Go', 'Rust', 'PostgreSQL', 'Kafka / NATS', 'مامەڵەی دابەشکراو'],
    skillsAr: ['Go', 'Rust', 'PostgreSQL', 'Kafka / NATS', 'المعاملات الموزعة'],
    preferredSkills: ['gRPC / Protobuf', 'Redis Cluster', 'Zero-Downtime Migrations'],
    level: 'senior',
    location: 'Erbil / Baghdad / Remote OK',
    
    department: 'engineering',
    category: 'engineering',
  },
  {
    id: 'fe-lead',
    title: 'Principal Frontend Engineer',
    titleKu: 'سەرۆکی ئەندازیاریی ڕووکاری بەکارهێنەر (Frontend)',
    titleAr: 'كبير مهندسي الواجهات الأمامية',
    description:
      'Lead IDG’s web application tier, building performant, accessible bilingual (Kurdish/Arabic RTL & English LTR) design systems in Next.js and TypeScript.',
    descriptionKu:
      'ڕابەرایەتیکردنی تیمی ڕووکاری بەکارهێنەر، دروستکردنی ئەزموونی خێرای فرەزمانی (RTL/LTR) لەسەر Next.js و TypeScript بە بەرزترین ئاستی دەستڕاگەیشتن.',
    descriptionAr:
      'قيادة هندسة واجهات المستخدم لبناء تطبيقات متطورة متعددة اللغات (RTL/LTR) باستخدام Next.js و TypeScript مع الالتزام التام بمعايير الشمولية.',
    responsibilities: [
      'Architect accessible, scalable design token systems and shared component libraries',
      'Ensure 100% Core Web Vitals score across all national public-facing interfaces',
      'Deepen native Kurdish and Arabic typographic rendering and fluid layouts',
      'Collaborate with UX researchers to convert citizen journeys into frictionless UIs',
    ],
    responsibilitiesKu: [
      'داڕشتنی سیستەمی یەکگرتووی کۆمپۆنێنتەکان و دیزاین تۆکنەکان',
      'گەرەنتیکردنی نمرەی ١٠٠٪ لە تێستەکانی خێرایی Core Web Vitals',
      'پەرەپێدانی تایپۆگرافی کوردی و عەرەبی بە شێوازێکی بێ کەموکوڕی',
      'هاوکاریکردن لەگەڵ تیمی UX بۆ گۆڕینی پێداویستییەکان بۆ ڕووکاری مۆدێرن',
    ],
    responsibilitiesAr: [
      'تصميم وبناء مكتبات المكونات الموحدة وأنظمة الرموز البصرية (Design Tokens)',
      'ضمان تحقيق 100% في مقاييس الأداء والأمان الأساسية Core Web Vitals',
      'تحسين معالجة الخطوط والطباعة العربية والكردية والتنسيقات المرنة',
      'التعاون مع باحثي تجربة المستخدم لتحويل العمليات المعقدة إلى واجهات سلسة',
    ],
    skills: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'RTL Optimization', 'WCAG 2.1'],
    skillsKu: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'ڕێکخستنی RTL', 'WCAG 2.1'],
    skillsAr: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'دعم RTL', 'معايير WCAG'],
    preferredSkills: ['Framer Motion', 'State Machines (XState)', 'Automated E2E Testing (Playwright)'],
    level: 'senior',
    location: 'Erbil / Baghdad / Remote OK',
    
    department: 'engineering',
    category: 'engineering',
  },
  {
    id: 'devops-lead',
    title: 'Sovereign Cloud & DevOps Lead',
    titleKu: 'سەرپەرشتیاری کلاودی سەروەر و دێڤئۆپس',
    titleAr: 'مسؤول السحابة السيادية والبنية التحتية DevOps',
    description:
      'Engineer bare-metal Kubernetes clusters, automated zero-downtime CI/CD workflows, and disaster recovery across domestic Tier-IV sovereign datacenters.',
    descriptionKu:
      'ئەندازیاری کڵاستەرەکانی Kubernetes، ئۆتۆماتیککردنی زنجیرەی CI/CD بەبێ وەستان، و بەڕێوەبردنی پاراستنی داتا لە ناوەندەکانی داتای ناوخۆیی عێراق بە ستانداردی Tier-IV.',
    descriptionAr:
      'بناء وإدارة مجموعات Kubernetes على الخوادم المادية، وأتمتة مسارات النشر المستمر (CI/CD)، وضمان التعافي من الكوارث داخل مراكز البيانات الوطنية Tier-IV.',
    responsibilities: [
      'Deploy and operate bare-metal Kubernetes clusters on sovereign Iraqi infrastructure',
      'Automate immutable infrastructure pipelines using Terraform and Ansible',
      'Enforce zero-trust network segmentation and continuous vulnerability scanning',
      'Guarantee 99.98% high availability across multi-datacenter clusters',
    ],
    responsibilitiesKu: [
      'دامەزراندن و کارپێکردنی کڵاستەرەکانی Kubernetes لەسەر ژێرخانی ناوخۆیی عێراق',
      'ئۆتۆماتیککردنی ژێرخان لە ڕێگەی Terraform و Ansible',
      'جێبەجێکردنی پاراستنی تۆڕ و پشکنینی بەردەوامی کێشە ئەمنییەکان',
      'گەرەنتیکردنی ٩٩.٩٨٪ بەردەوامیی کارکردن لە نێوان ناوەندە جیاوازەکانی داتا',
    ],
    responsibilitiesAr: [
      'نشر وتشغيل مجموعات Kubernetes على خوادم مادية داخل البنية التحتية العراقية',
      'أتمتة البنى التحتية الثابتة باستخدام Terraform و Ansible',
      'تطبيق عزل الشبكات بنموذج Zero-Trust والفحص المستمر للثغرات الأمنية',
      'ضمان توافر تشغيلي بنسبة 99.98% عبر مراكز بيانات وطنية موزعة',
    ],
    skills: ['Kubernetes', 'Docker', 'Terraform', 'Bare-Metal', 'CI/CD Pipelines', 'Prometheus / Grafana'],
    skillsKu: ['Kubernetes', 'Docker', 'Terraform', 'سێرڤەری ناوخۆیی', 'زنجیرەی CI/CD', 'چاودێری و مۆنیتەرینگ'],
    skillsAr: ['Kubernetes', 'Docker', 'Terraform', 'خوادم مادية', 'مسارات CI/CD', 'المراقبة والإنذار'],
    preferredSkills: ['Ceph Storage', 'BGP Routing', 'CKA / CKS Certification'],
    level: 'senior',
    location: 'Erbil / Baghdad, Iraq (Hybrid)',
    
    department: 'engineering',
    category: 'engineering',
  },
  {
    id: 'security-lead',
    title: 'Cybersecurity & Threat Defense Specialist',
    titleKu: 'پسپۆڕی ئاسایشی سایبەری و بەرگریی هەڕەشەکان',
    titleAr: 'أخصائي الأمن السيبراني والدفاع ضد التهديدات',
    description:
      'Direct 24/7 Security Operations Center (SOC), proactive penetration testing, cryptography auditing, and threat containment for sovereign portals.',
    descriptionKu:
      'بەڕێوەبردنی ناوەندی ئۆپەراسیۆنە ئەمنییەکان (SOC) بە درێژایی ٢٤ کاتژمێر، پشکنینی پێشوەختەی دزەکردن، و وردبینیکردنی کریپتۆگرافی بۆ دەروازە نیشتمانییەکان.',
    descriptionAr:
      'إدارة مركز العمليات الأمنية (SOC) على مدار الساعة، واختبارات الاختراق الاستباقية، وتدقيق التشفير وحماية البوابات الوطنية من الهجمات المتقدمة.',
    responsibilities: [
      'Monitor, investigate, and neutralize advanced cyber threat vectors in real time',
      'Conduct rigorous penetration testing and source code security audits',
      'Implement sovereign cryptographic standards conforming to national compliance',
      'Lead incident response drills and institutional digital security training',
    ],
    responsibilitiesKu: [
      'چاودێری و پوچەڵکردنەوەی هەڕەشە پێشکەوتووەکان لە کاتی ڕاستەقینەدا',
      'ئەنجامدانی پشکنینی قوڵی دزەکردن و وردبینی لە کۆدی سەرچاوە',
      'جێبەجێکردنی ستانداردەکانی کریپتۆگرافی بەپێی یاسا سەروەرەکان',
      'ڕابەرایەتیکردنی ڕاهێنانی وەڵامدانەوەی خێرای کێشە ئەمنییەکان',
    ],
    responsibilitiesAr: [
      'مراقبة وتحليل التهديدات السيبرانية المتقدمة وإحباطها في الوقت الفعلي',
      'إجراء اختبارات اختراق شاملة وتدقيق أمني دقيق للشيفرات البرمجية',
      'تطبيق معايير التشفير السيادي المتوافقة مع السياسات الوطنية',
      'قيادة عمليات الاستجابة للحوادث والتدريب الأمني المؤسسي',
    ],
    skills: ['SOC Operations', 'Zero-Trust Protocol', 'SIEM / EDR', 'Penetration Testing', 'Cryptography'],
    skillsKu: ['ئۆپەراسیۆنی SOC', 'پڕۆتۆکۆڵی Zero-Trust', 'سیستەمی SIEM', 'پشکنینی دزەکردن', 'کریپتۆگرافی'],
    skillsAr: ['عمليات SOC', 'بروتوكول Zero-Trust', 'أنظمة SIEM', 'اختبار الاختراق', 'التشفير الأمني'],
    preferredSkills: ['CISSP / CEH', 'Reverse Engineering', 'Malware Analysis'],
    level: 'senior',
    location: 'Erbil / Baghdad / Remote OK',
    
    department: 'engineering',
    category: 'engineering',
  },

  // ==========================================
  // PRODUCT & DESIGN POSITIONS
  // ==========================================
  {
    id: 'pm-lead',
    title: 'Principal Product Manager',
    titleKu: 'بەڕێوەبەری سەرەکی بەرهەمە دیجیتاڵییەکان',
    titleAr: 'مدير أول للمنتجات والحلول الرقمية',
    description:
      'Own end-to-end product roadmaps for civic digital gateways, aligning multi-ministry mandates with intuitive, high-adoption citizen interfaces.',
    descriptionKu:
      'بەڕێوەبردنی پلانی ستراتیژی بەرهەمە دیجیتاڵییە حکومییەکان، هاوئاهەنگکردنی یاساکانی وەزارەتەکان لەگەڵ ئەزموونێکی ئاسان و کاریگەر بۆ هاووڵاتیان.',
    descriptionAr:
      'قيادة خارطة طريق المنتجات الرقمية الحكومية، ومواءمة المتطلبات الرسمية مع واجهات استخدام سهلة تضمن أعلى نسب التفاعل والاعتماد المؤسسي.',
    responsibilities: [
      'Define product strategy, KPI metrics, and sprint backlogs for GovTech services',
      'Synthesize stakeholder mandates into actionable user stories and specifications',
      'Conduct regular usability benchmarks with citizens and institutional users',
      'Champion customer-first engineering and measurable national impact',
    ],
    responsibilitiesKu: [
      'دیاریکردنی ستراتیژی بەرهەم و پێوەرەکانی سەرکەوتن بۆ خزمەتگوزارییە حکومییەکان',
      'گۆڕینی پێداویستییە ئاڵۆزەکان بۆ چیرۆکی بەکارهێنەر و ڕێبەری کارکردن',
      'ئەنجامدانی بەردەوامی تێستی ئاسانی کارپێکردن لەگەڵ هاووڵاتیان',
      'گرنگیدان بە ئەزموونی بەکارهێنەر و بەدیهێنانی کاریگەریی ڕاستەقینە',
    ],
    responsibilitiesAr: [
      'صياغة استراتيجية المنتجات وتحديد مؤشرات النجاح وقوائم المهام لمشاريع GovTech',
      'تحويل المتطلبات التنظيمية إلى قصص مستخدم ومواصفات هندسية واضحة',
      'إجراء اختبارات سهولة الاستخدام المنتظمة مع المواطنين والموظفين الحكوميين',
      'ترسيخ ثقافة التركيز على المستخدم النهائي وتحقيق الأثر الوطني الملموس',
    ],
    skills: ['Product Strategy', 'GovTech Workflows', 'Roadmap Planning', 'Agile / Scrum', 'User Research'],
    skillsKu: ['ستراتیژی بەرهەم', 'سیستەمی GovTech', 'پلانی ستراتیژی', 'میتۆدی Agile', 'لێکۆڵینەوەی بەکارهێنەر'],
    skillsAr: ['استراتيجية المنتج', 'منظومات GovTech', 'تخطيط خارطة الطريق', 'إدارة Agile', 'أبحاث المستخدم'],
    preferredSkills: ['FinTech Gateway Experience', 'Data Analytics', 'Regulatory Compliance'],
    level: 'senior',
    location: 'Erbil / Baghdad, Iraq (Hybrid)',
    
    department: 'product',
    category: 'product',
  },
  {
    id: 'ux-lead',
    title: 'Senior UI/UX & Design Systems Architect',
    titleKu: 'تەلارسازی دیزاین و ئەزموونی بەکارهێنەر (UX/UI)',
    titleAr: 'كبير مصممي تجربة المستخدم وأنظمة التصميم',
    description:
      'Shape the visual and interactive identity of sovereign digital platforms with deep mastery of bilingual Kurdish/Arabic typography and accessibility.',
    descriptionKu:
      'داڕشتنی ناسنامەی بینراو و کارلێکی پلاتفۆرمە سەروەرەکان، بە گرنگیدانی تایبەت بە تایپۆگرافی کوردی و عەرەبی و ستانداردە نێودەوڵەتییەکانی پێڕاگەیشتن.',
    descriptionAr:
      'صياغة الهوية البصرية والتفاعلية للمنظومات الرقمية مع الإتقان التام للطباعة العربية والكردية وتطبيق معايير الشمولية العالمية.',
    responsibilities: [
      'Build and maintain IDG’s unified GovTech Figma design system and component library',
      'Conduct ethnographic user research across diverse demographics and devices',
      'Deliver high-fidelity interactive prototypes and documentation for engineers',
      'Enforce strict WCAG 2.1 AAA accessibility compliance on all public screens',
    ],
    responsibilitiesKu: [
      'دروستکردن و بەڕێوەبردنی سیستەمی دیزاینی یەکگرتووی Figma بۆ IDG',
      'ئەنجامدانی لێکۆڵینەوەی مەیدانی لەسەر پێداویستیی چینە جیاوازەکانی کۆمەڵگە',
      'ئامادەکردنی پرۆتۆتایپی کارلێککار و دۆکیومێنتی ڕوون بۆ ئەندازیاران',
      'جێبەجێکردنی ستانداردی دەستڕاگەیشتنی WCAG 2.1 AAA لە هەموو بەشەکاندا',
    ],
    responsibilitiesAr: [
      'تطوير وإدارة نظام التصميم المؤسسي الموحد على Figma ومكتبات المكونات',
      'إجراء أبحاث سلوك وتجربة المستخدم الميدانية لمختلف الفئات المجتمعية',
      'تقديم نماذج أولية تفاعلية عالية الدقة ومواصفات واضحة للمطورين',
      'تطبيق معايير إمكانية الوصول الشاملة WCAG 2.1 AAA في جميع المنصات',
    ],
    skills: ['Figma', 'Design Systems', 'Bilingual Typography', 'Accessibility (WCAG)', 'Prototyping'],
    skillsKu: ['Figma', 'سیستەمی دیزاین', 'تایپۆگرافی فرەزمان', 'دەستڕاگەیشتن (WCAG)', 'پرۆتۆتایپینگ'],
    skillsAr: ['Figma', 'نظم التصميم', 'الطباعة العربية والكردية', 'إمكانية الوصول', 'النماذج التفاعلية'],
    preferredSkills: ['Design Token Automation', 'Micro-Interactions', 'User Testing Software'],
    level: 'senior',
    location: 'Erbil / Baghdad / Remote OK',
    
    department: 'product',
    category: 'product',
  },

  // ==========================================
  // OPERATIONS & PARTNERSHIPS
  // ==========================================
  {
    id: 'partnerships-lead',
    title: 'Institutional Partnerships & Governance Lead',
    titleKu: 'بەڕێوەبەری هاوبەشییە دامەزراوەییەکان و حوکمڕانی',
    titleAr: 'مسؤول الشراكات المؤسسية والحوكمة التنظيمية',
    description:
      'Manage regulatory accords, legal covenants, and institutional stakeholder alignment with national regulators and digital governance councils.',
    descriptionKu:
      'بەڕێوەبردنی ڕێککەوتننامە یاساییەکان و هەماهەنگیی دامەزراوەیی لەگەڵ لایەنە ڕێکخەرەکان بۆ دڵنیابوون لە جێبەجێکردنی یاساکانی سەروەریی داتا.',
    descriptionAr:
      'إدارة العلاقات التنظيمية والاتفاقيات القانونية والتنسيق المؤسسي مع الهيئات الرسمية لضمان الامتثال التام لأطر سيادة البيانات.',
    responsibilities: [
      'Draft institutional MOUs and data-sharing agreements across government bodies',
      'Ensure strict regulatory compliance with sovereign data residency laws',
      'Facilitate inter-agency technical workshops and operational transitions',
      'Represent IDG at national policy forums and sovereign governance councils',
    ],
    responsibilitiesKu: [
      'نووسینەوەی ڕێککەوتننامەکانی ئاڵوگۆڕی داتا لەگەڵ دامەزراوە فەرمییەکان',
      'دڵنیابوون لە جێبەجێکردنی تەواوی یاساکانی پاراستن و پاشەکەوتکردنی داتای سەروەر',
      'ڕێکخستنی وۆرکشۆپی تەکنیکی و ئاسانکاری بۆ پرۆسەی گواستنەوەی دیجیتاڵی',
      'نوێنەرایەتیکردنی IDG لە کۆڕ و کۆبوونەوە نیشتمانییەکاندا',
    ],
    responsibilitiesAr: [
      'صياغة مذكرات التفاهم واتفاقيات تبادل البيانات السيادية مع المؤسسات الحكومية',
      'ضمان الامتثال الكامل للقوانين واللوائح الوطنية الخاصة بتوطين البيانات',
      'تنظيم ورش العمل الفنية المشتركة وتيسير عمليات التحول الرقمي المؤسسي',
      'تمثيل IDG في المنتديات الاستراتيجية ومجالس الحوكمة الرقمية الوطنية',
    ],
    skills: ['Regulatory Affairs', 'Data Sovereignty Laws', 'Public Policy', 'Contract Negotiation', 'Stakeholder Management'],
    skillsKu: ['یاسای گشتی', 'یاساکانی سەروەریی داتا', 'سیاسەتی گشتی', 'وتووێژی گرێبەستەکان', 'بەڕێوەبردنی لایەنەکان'],
    skillsAr: ['الشؤون التنظيمية', 'قوانين سيادة البيانات', 'السياسات العامة', 'صياغة العقود', 'إدارة العلاقات'],
    preferredSkills: ['Telecommunications Law', 'Cross-Border Privacy Frameworks', 'GovTech Policy'],
    level: 'senior',
    location: 'Baghdad / Erbil, Iraq',
    
    department: 'operations',
    category: 'operations',
  },
  {
    id: 'talent-lead',
    title: 'Head of People & Talent Acquisition',
    titleKu: 'سەرپەرشتیاری گەشەپێدانی سەرچاوە مرۆییەکان و بەهرەکان',
    titleAr: 'مسؤول استقطاب الكفاءات وتطوير رأس المال البشري',
    description:
      'Lead sovereign technical talent sourcing, high-bar engineering hiring cadences, and developer residency culture at IDG.',
    descriptionKu:
      'ڕابەرایەتیکردنی دۆزینەوە و دامەزراندنی لێهاتووە تەکنیکییە باڵاکان، و دروستکردنی کەشێکی کاری هاندەر بۆ پێگەیاندنی بەهرە نیشتمانییەکان.',
    descriptionAr:
      'قيادة جهود استقطاب وتوظيف أبرز الكفاءات الهندسية ورعاية بيئة عمل تحفز الابتكار والانتماء الوطني لدى المطورين.',
    responsibilities: [
      'Source and recruit exceptional software engineers, architects, and product leaders',
      'Oversee technical vetting, engineering rubrics, and inclusive interview processes',
      'Cultivate high-retention culture built on psychological safety and national purpose',
      'Partner with ZaNa Academy to place top fellowship graduates into core squads',
    ],
    responsibilitiesKu: [
      'دۆزینەوە و دامەزراندنی ئەندازیاران و بەڕێوەبەرانی بەهرەمەندی تەکنەلۆژیا',
      'سەرپەرشتیکردنی پرۆسەی تاقیکردنەوە و چاوپێکەوتنی زانستی بۆ دامەزراندن',
      'بنیاتنانی کەلتوورێکی هاندەر لەسەر بنەمای ئاسایشی دەروونی و بەرپرسیارێتی',
      'هاوئاهەنگی لەگەڵ ئەکادیمیای زانا بۆ سوودوەرگرتن لە دەرچووانی لێهاتوو',
    ],
    responsibilitiesAr: [
      'استقطاب وتوظيف نخب المهندسين والمعماريين ومديري المنتجات الرقمية',
      'إدارة مسارات التقييم الفني والمقابلات الهندسية المنضبطة والشفافة',
      'ترسيخ ثقافة مؤسسية تقوم على الأمان النفسي والاعتزاز بالرسالة الوطنية',
      'التعاون مع أكاديمية زانا لدمج خريجي الزمالة المتميزين في الفرق البرمجية',
    ],
    skills: ['Technical Recruiting', 'Talent Strategy', 'Culture Building', 'Engineering Rubrics', 'HR Analytics'],
    skillsKu: ['دامەزراندنی تەکنیکی', 'ستراتیژی بەهرەکان', 'بنیاتنانی کەلتووری کار', 'پێوەرەکانی هەڵسەنگاندن', 'شیکاری HR'],
    skillsAr: ['التوظيف التقني المتخصص', 'استراتيجية المواهب', 'بناء الثقافة المؤسسية', 'أطر التقييم', 'تحليلات الموارد البشرية'],
    preferredSkills: ['Developer Community Engagement', 'Employer Branding', 'Compensation Design'],
    level: 'senior',
    location: 'Erbil / Baghdad, Iraq (Hybrid)',
    
    department: 'operations',
    category: 'operations',
  },
  {
    id: 'comms-lead',
    title: 'Head of Communications & Public Engagement',
    titleKu: 'سەرپەرشتیاری پەیوەندییە گشتییەکان و ڕاگەیاندن',
    titleAr: 'مسؤول الاتصال الاستراتيجي والإعلام المؤسسي',
    description:
      'Articulate Iraq’s digital sovereignty mission across national, regional, and global media, authoring high-impact institutional reports and announcements.',
    descriptionKu:
      'گەیاندنی پەیامی سەروەریی دیجیتاڵیی عێراق بە ناوەندە میدیاییە ناوخۆیی و جیهانییەکان، و نووسینەوەی ڕاپۆرتی ساڵانە و بڵاوکراوە فەرمییەکانی IDG.',
    descriptionAr:
      'صياغة الخطاب الإعلامي لنشر ثقافة السيادة الرقمية وإبراز أثر المبادرات الوطنية لـ IDG عبر المنصات الإعلامية المحلية والدولية.',
    responsibilities: [
      'Draft institutional press releases, policy whitepapers, and annual sovereignty reports',
      'Manage official media inquiries and executive speaking engagements',
      'Lead digital advocacy campaigns on sovereign data protection and civic tech',
      'Maintain unified corporate tone of voice and brand consistency across touchpoints',
    ],
    responsibilitiesKu: [
      'داڕشتنی بەیاننامە فەرمییەکان، لێکۆڵینەوەی ستراتیژی، و ڕاپۆرتی ساڵانە',
      'بەڕێوەبردنی پەیوەندییەکان لەگەڵ دەزگاکانی ڕاگەیاندن و لێدوانی بەرپرسان',
      'سەرپەرشتیکردنی کەمپەینی هۆشیاری سەبارەت بە پاراستنی داتای نیشتمانی',
      'پاراستنی ناسنامە و شێوازی دەربڕینی یەکگرتووی کۆمپانیا لە هەموو بوارەکاندا',
    ],
    responsibilitiesAr: [
      'صياغة البيانات الرسمية والأوراق الاستراتيجية والتقارير السنوية للسيادة التقنية',
      'إدارة العلاقات الإعلامية الرسمية والمشاركات التنفيذية في المؤتمرات',
      'قيادة الحملات التوعوية الرقمية حول حماية البيانات والحلول المدنية الوطنية',
      'ضمان اتساق الخطاب المؤسسي والهوية البصرية في جميع قنوات التواصل',
    ],
    skills: ['Strategic Communications', 'Public Affairs', 'Content Strategy', 'Media Relations', 'Brand Governance'],
    skillsKu: ['پەیوەندیی ستراتیژی', 'کاروباری گشتی', 'ستراتیژی ناوەڕۆک', 'پەیوەندی میدیا', 'حوکمڕانیی براند'],
    skillsAr: ['الاتصال الاستراتيجي', 'الشؤون العامة', 'استراتيجية المحتوى', 'العلاقات الإعلامية', 'حوكمة الهوية'],
    preferredSkills: ['GovTech Journalism', 'Crisis Communications', 'Multilingual Publishing'],
    level: 'senior',
    location: 'Baghdad / Erbil, Iraq (Hybrid)',
    
    department: 'operations',
    category: 'operations',
  },
];

export const jobPostings: Record<'ku' | 'ar' | 'en', JobPosting[]> = {
  ku: rawJobPostings,
  ar: rawJobPostings,
  en: rawJobPostings,
};

export function getJobPostings(locale: string = 'ku'): JobPosting[] {
  const lang = locale === 'ar' || locale === 'en' ? locale : 'ku';
  return jobPostings[lang];
}

export function getJobPostingById(id: string, locale: string = 'ku'): JobPosting | undefined {
  const jobs = getJobPostings(locale);
  const normalizedId = id.replace(/-(?:ku|ar|en)$/, '');
  return jobs.find((j) => j.id === normalizedId);
}

export function getAllJobPostingIds(): string[] {
  return rawJobPostings.map((j) => j.id);
}
