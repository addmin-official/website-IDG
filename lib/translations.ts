export type Language = 'ku' | 'ar' | 'en';

export interface TranslationData {
  companyName: string;
  parentBadge: string;
  tagline: string;
  nav: {
    home: string;
    about: string;
    services: string;
    portfolio: string;
    philosophy: string;
    governance: string;
    stakeholders: string;
    vision: string;
    careers: string;
    team: string;
    contact: string;
    faq: string;
    blog: string;
    insights: string;
    news: string;
  };
  home: {
    impactiqBannerTitle: string;
    impactiqBannerCta: string;
  };
  hero: {
    headline: string;
    subhead: string;
    exploreBtn: string;
    visionBtn: string;
    stats: {
      stat1Label: string;
      stat1Val: string;
      stat2Label: string;
      stat2Val: string;
      stat3Label: string;
      stat3Val: string;
    };
  };
  purpose: {
    heading: string;
    subheading: string;
    pillars: Array<{
      title: string;
      desc: string;
    }>;
  };
  philosophy: {
    heading: string;
    subheading: string;
    items: Array<{
      title: string;
      desc: string;
    }>;
  };
  zaNaUrl?: string;
  portfolio: {
    headerTitle: string;
    headerDesc: string;
    heading: string;
    subheading: string;
    visitWebsiteBtn: string;
    governanceNote: string;
    cardInspectPrompt: string;
    openExternalPlatform: string;
    standalonePlatforms: string;
    schoolsStudentsAudience: string;
    zaNaUrl?: string;
    modalLabels: {
      overview: string;
      detailedDescription: string;
      provenProblem: string;
      accountableOwner: string;
      keyFeatures: string;
      targetAudience: string;
      technologies: string;
      systemMockup: string;
      provenImpact: string;
      visitLiveSite: string;
      close: string;
      governedBy: string;
      operationalStatus: string;
      sovereignNotice: string;
    };
    products: Array<{
      id: string;
      numBadge: string;
      title: string;
      subtitle: string;
      problem?: string;
      owner?: string;
      description: string;
      detailedDescription?: string;
      keyFeatures?: string[];
      targetAudience?: string[];
      technologies?: string[];
      impact?: string;
      status: string;
      url?: string;
      mockupType?: 'aigate' | 'zana' | 'greenbelt' | 'nsw';
      code?: string;
      name?: string;
      tagline?: string;
      badge?: string;
      features?: string[];
      link?: string;
      external?: boolean;
      ctaType?: 'internal' | 'external';
      externalUrl?: string;
      audience?: string;
    }>;
    impactIQ?: {
      code: string;
      name: string;
      tagline: string;
      description: string;
      status: string;
      badge: string;
      features: string[];
      link: string;
      external: boolean;
      ctaType: string;
    };
    zanaAcademy?: {
      code: string;
      name: string;
      tagline: string;
      description: string;
      status: string;
      badge: string;
      externalUrl: string;
      external: boolean;
      ctaType: string;
      audience: string;
    };
    nsw: {
      badge: string;
      fullTitle: string;
      title: string;
      subtitle: string;
      problem: string;
      architecture: string;
      description?: string;
      detailedDescription: string;
      keyFeatures: string[];
      targetAudience: string[];
      technologies: string[];
      owner: string;
      impact: string;
      mockupType: 'nsw';
    };
  };
  governance: {
    heroTitle: string;
    heroDesc: string;
    valuesTitle: string;
    values: Array<{
      title: string;
      desc: string;
    }>;
    architectureTitle: string;
    tableHeaders: {
      domain: string;
      principle: string;
      mechanism: string;
    };
    domains: Array<{
      domain: string;
      principle: string;
      mechanism: string;
    }>;
    caseStudiesHeading: string;
    caseStudiesSubheading: string;
    heading: string;
    subheading: string;
    frameworkTitle: string;
    cases: Array<{
      id: string;
      title: string;
      category: string;
      context: string;
      evidence: string;
      decision: string;
      impact: string;
      risk: string;
      nextStep: string;
    }>;
  };
  stakeholders: {
    heroTitle: string;
    heroDesc: string;
    items: Array<{
      icon: string;
      title: string;
      desc: string;
      actionText: string;
    }>;
    rulesTitle: string;
    rulesDesc: string;
    heading: string;
    subheading: string;
    sectors: Array<{
      title: string;
      mandate: string;
      outcomes: string[];
    }>;
  };
  vision: {
    heading: string;
    subheading: string;
    phases: Array<{
      era: string;
      title: string;
      target: string;
      focus: string;
    }>;
  };
  contactModal: {
    title: string;
    subtitle: string;
    nameLabel: string;
    entityLabel: string;
    sectorLabel: string;
    inquiryTypeLabel: string;
    messageLabel: string;
    submitBtn: string;
    successTitle: string;
    successMsg: string;
    closeBtn: string;
    sectorOptions: string[];
    inquiryOptions: string[];
  };
  about: {
    heading: string;
    subheading: string;
    badge: string;
    missionTitle: string;
    missionDesc: string;
    visionTitle: string;
    visionDesc: string;
    coreValuesTitle: string;
    coreValuesSubtitle: string;
    coreValuesList: Array<{
      label: string;
      text: string;
    }>;
    coreValues: Array<{
      title: string;
      desc: string;
      badge: string;
    }>;
    transformationTitle: string;
    transformationDesc: string;
    transformationStages: Array<{
      step: string;
      title: string;
      subtitle: string;
      desc: string;
      outcome: string;
    }>;
  };
  careers: {
    badge: string;
    heading: string;
    subheading: string;
    cultureTitle: string;
    cultureDesc: string;
    culturePillars: Array<{
      title: string;
      desc: string;
    }>;
    openingsTitle: string;
    openingsSubheading: string;
    openings: Array<{
      id: string;
      title: string;
      dept: string;
      location: string;
      type: string;
      summary: string;
      responsibilities: string[];
      requirements: string[];
    }>;
    applyTitle: string;
    applyDesc: string;
    form: {
      positionLabel: string;
      generalPositionOption: string;
      fullNameLabel: string;
      fullNamePlaceholder: string;
      emailLabel: string;
      emailPlaceholder: string;
      phoneLabel: string;
      phonePlaceholder: string;
      portfolioLabel: string;
      portfolioPlaceholder: string;
      resumeLabel: string;
      resumePlaceholder: string;
      coverNoteLabel: string;
      coverNotePlaceholder: string;
      submitBtn: string;
      submittingBtn: string;
      successTitle: string;
      successMsg: string;
      resetBtn: string;
    };
    banner?: Record<Language, string>;
    compensation?: Record<Language, string>;
    ctaButton?: Record<Language, string>;
    earlyStageNote?: Record<Language, string>;
    postFundingNote?: Record<Language, string>;
  };
  contactSection: {
    badge: string;
    heading: string;
    subheading: string;
    introText: string;
    partnershipNote: string;
    hqLabel: string;
    hqValue: string;
    emailLabel: string;
    emailValue: string;
    hoursLabel: string;
    hoursValue: string;
    channelsTitle: string;
    channelsDesc: string;
    form: {
      nameLabel: string;
      namePlaceholder: string;
      emailLabel: string;
      emailPlaceholder: string;
      subjectLabel: string;
      subjectPlaceholder: string;
      messageLabel: string;
      messagePlaceholder: string;
      submitBtn: string;
      submittingBtn: string;
      successTitle: string;
      successMsg: string;
      resetBtn: string;
    };
  };
  faq: {
    badge: string;
    heading: string;
    subheading: string;
    searchPlaceholder: string;
    allCategory: string;
    categories: {
      governance: string;
      infrastructure: string;
      products: string;
      partnerships: string;
    };
    items: Array<{
      id: string;
      category: 'governance' | 'infrastructure' | 'products' | 'partnerships';
      question: string;
      answer: string;
      highlights?: string[];
    }>;
    stillHaveQuestions: string;
    supportDesc: string;
    contactBtn: string;
  };
  backToTop: string;
  footer: {
    rights: string;
    parentDesc: string;
    links: {
      about: string;
      principles: string;
      governance: string;
      careers: string;
      contact: string;
      security: string;
      faq: string;
    };
    newsletter: {
      title: string;
      description: string;
      placeholder: string;
      submitBtn: string;
      submittingBtn: string;
      successTitle: string;
      successMsg: string;
      notice: string;
      invalidEmail: string;
    };
  };
  help?: {
    tutorials: {
      title: string;
      subtitle: string;
      items: Array<{
        id: string;
        duration: string;
        badge: string;
        title: string;
        description: string;
        videoUrl: string;
      }>;
    };
  };
  team?: {
    title: string;
    subtitle: string;
    leadership: string;
    leadershipDesc: string;
    coreTeam: string;
    coreTeamDesc: string;
    joinUs: string;
    joinUsDesc: string;
    viewPositions: string;
    departments: {
      all: string;
      leadership: string;
      engineering: string;
      product: string;
      operations: string;
      communications: string;
    };
    labels: {
      bio: string;
      expertise: string;
      connect: string;
      viewProfile: string;
      backToTeam: string;
      keyFocus: string;
      achievements: string;
    };
  };
}

export const translations: Record<Language, TranslationData> = {
  // REVIEW: ku-native — verify naturalness
  ku: {
    companyName: 'دەروازەی دیجیتاڵیی عێراق (IDG)',
    parentBadge: 'کۆمپانیای دایک و ستۆدیۆی وەبەرهێنان',
    tagline: 'گۆڕینی ئاڵۆزییەکان بۆ توانایەکی دامەزراوەیی متمانەپێکراو',
    nav: {
      home: 'سەرەکی',
      about: 'دەربارەی ئێمە',
      services: 'خزمەتگوزارییەکان',
      portfolio: 'پۆرتفۆلیۆ و بەرهەمەکان',
      philosophy: 'فەلسەفەی کارکردن',
      governance: 'حوکمڕانی و دیسپلین',
      stakeholders: 'لایەنە ئامانجدارەکان',
      vision: 'دیدگای ٢٠٣٥',
      careers: 'هەلی کار',
      team: 'تیمی ئێمە',
      contact: 'پەیوەندیی فەرمی',
      faq: 'پرسیارە باوەکان',
      blog: 'بلۆگ',
      insights: 'تێڕوانینەکان',
      news: 'هەواڵەکان',
    },
    home: {
      impactiqBannerTitle: '⭐ نوێ: ImpactIQ لایڤە — پێوانەکردنی سەروەرانەی کاریگەریی نیشتمانی',
      impactiqBannerCta: 'بینینی بەرهەم',
    },
    hero: {
      headline: 'ئاڵۆزی دەگۆڕین بۆ توانایەکی کارپێکردنی متمانەپێکراو.',
      subhead:
        'دەروازەی دیجیتاڵیی عێراق (IDG) کۆمپانیایەکی دایکی سەربەخۆی عێراقییە، کە ستراتیژ، حوکمڕانی، داتا و زیرەکیی دەستکرد لەناو سیستەمگەلێکی کارپێکردنی پارێزراودا یەکدەخات. ڕوون لە حوکمڕانیدا، کارلێککار لە تەلارسازیدا، بەرپرسیار لە جێبەجێکردندا، و بونیادنراو بۆ مانەوە.',
      exploreBtn: 'ئاشنابوون بە پۆرتفۆلیۆ',
      visionBtn: 'دیدگای ٢٠٣٥',
      stats: {
        stat1Label: 'خاوەندارێتی و سەروەری',
        stat1Val: '١٠٠٪ عێراقی',
        stat2Label: 'مۆدێلی دامەزراوەیی',
        stat2Val: 'کۆمپانیای دایک',
        stat3Label: 'بنەمای تەلارسازی',
        stat3Val: 'سەروەریی داتا و ئاسایش',
      },
    },
    purpose: {
      heading: 'پڕکردنەوەی جیاوازیی نێوان ئامانجی ستراتیژی و توانای کارپێکردن',
      subheading:
        'عێراق خاوەنی سەرمایە و بەهرەیە. (IDG) بوونی هەیە بۆ داڕشتنەوەی دەسەڵات، داتا، و خزمەتگوزارییەکان بە جۆرێک کە دامەزراوەکان بتوانن بە شێوەیەکی متمانەپێکراوتر کاربکەن.',
      pillars: [
        {
          title: 'هاوسەنگی',
          desc: 'پەیوەستکردنی لایەنە پارچەپارچەبووەکان و زانیارییەکان لە ناو سیستمێکی تێگەیشتووی یەکگرتوودا.',
        },
        {
          title: 'توانا',
          desc: 'دروستکردنی توانای تەکنیکی و دامەزراوەیی پێویست بۆ بەرزکردنەوەی بەرهەمداری و خۆبژێویی کارپێکردن.',
        },
        {
          title: 'متمانە',
          desc: 'چاندنی ئاسایش، بەرپرسیارێتیی یاسایی و شەفافیەت لە ناو دیزاین و گەیاندنی سیستەمەکاندا.',
        },
        {
          title: 'بەردەوامی',
          desc: 'دڵنیابوون لە مانەوەی زانیاری و تەلارسازی لە سەرووی پڕۆژە و گۆڕانکارییە کاتییەکانەوە.',
        },
      ],
    },
    philosophy: {
      heading: 'فەلسەفەی بەرهەمەکانمان',
      subheading:
        'هەموو بەرهەمێک لەژێر چەتری IDG بە پێوەرە توندەکانی سەروەری، بەرپرسیارێتی و بەڵگەی کارپێکردن دیزاین دەکرێت.',
      items: [
        {
          title: 'کاریگەریی نیشتمانی',
          desc: 'پێشینە دەدەین بەو کێشانەی چارەسەرکردنیان توانای دامەزراوەیی و ئابووری بەرز دەکاتەوە.',
        },
        {
          title: 'توانای فراوانبوون',
          desc: 'نەخشەسازی بۆ گەشەکردن لەسەر ئاستی کەرتی جیاواز و دەسەڵاتەکان دەکەین.',
        },
        {
          title: 'ئاسایش و خۆڕاگری',
          desc: 'لەکاتی دیزایندا، دەسەڵاتەکان کەم دەکەینەوە و نەخشەی بەردەوامی دادەنێین.',
        },
        {
          title: 'هاوکاریی سیستەمەکان',
          desc: 'ڕووکارە بەبەڵگەکراوەکان و یەکخستنی لەسەر بنەمای ستانداردەکان بەکاردەهێنین.',
        },
      ],
    },
    portfolio: {
      headerTitle: 'پۆرتفۆلیۆ و تەلارسازی کۆرپۆرەیتی',
      headerDesc:
        'دەروازەی دیجیتاڵیی عێراق (IDG) کۆمپانیای دایکی هەمیشەیی و براندی سەرەکییە. بەرهەمەکان سامانی پۆرتفۆلیۆن کە لەلایەن IDG حوکمڕانی دەکرێن، بەڵام ناسنامەی بازاڕی سەربەخۆی خۆیان هەیە.',
      heading: 'سامانە حوکمڕانیکراوەکانی پۆرتفۆلیۆ',
      subheading:
        'دەروازەی دیجیتاڵیی عێراق (IDG) کۆمپانیای دایکی هەمیشەیی و براندی سەرەکییە. بەرهەمەکان سامانی پۆرتفۆلیۆن کە لەلایەن IDG حوکمڕانی دەکرێن، بەڵام ناسنامەی کارپێکردنی تایبەت بە خۆیان هەیە.',
      visitWebsiteBtn: 'سەردانی وێبسایت ➔',
      openExternalPlatform: 'کردنەوەی پلاتفۆرمی سەربەخۆ',
      standalonePlatforms: 'پلاتفۆرمە سەربەخۆکان',
      schoolsStudentsAudience: 'بۆ قوتابخانە و قوتابیان',
      zaNaUrl: 'https://zana.idggov.tech',
      impactIQ: {
        code: 'IDG-PRD-004',
        name: 'ImpactIQ',
        tagline: 'پێوانەکردنی سەروەرانەی کاریگەریی نیشتمانی',
        description: 'ژێرخانێکی سەروەرانەی شیکاری و پێوانەکردنی کاریگەری (MEAL Engine) بە مۆدێلی ژیریی دەستکردی نیشتمانی، کە بە گەرەنتی مانەوەی ١٠٠٪ی داتا لە ناوخۆی وڵات، بڕیاردان لە پێشبینی نادڵنیاوە دەگۆڕێت بۆ زانستی بەڵگەنەویستی.',
        status: 'active',
        badge: 'Strategic Initiative',
        features: ['AI Predictive Impact Scoring', 'Immutable Audit Trails', '100% Sovereign Hosting', 'Sovereign NLP Reporting'],
        link: '/products/impactiq',
        external: false,
        ctaType: 'internal',
      },
      zanaAcademy: {
        code: 'IDG-PRD-002',
        name: 'ZaNa Academy',
        tagline: 'پلاتفۆرمی سەربەخۆی فێرکردنی K-12',
        description: 'پلاتفۆرمێکی سەربەخۆ و تەواو جیاواز بۆ قوتابخانە و قوتابیان — سیستەمی فێرکردنی K-12 بە زمانی کوردی، لەگەڵ مامۆستایان، پڕۆگرامەکان، و ئەنجامدانی فێربوون. ئەم بەرهەمە پلاتفۆرمێکی سەر بە خۆیەتی و لە ماڵپەڕی سەرەکی IDG جیاکراوەتەوە.',
        status: 'external',
        badge: 'منالپلاتفۆرمی سەربەخۆ',
        externalUrl: 'https://zana.idggov.tech',
        external: true,
        ctaType: 'external',
        audience: 'قوتابخانەکان • قوتابیان • مامۆستایان • دایک و باوکان',
      },
      governanceNote:
        'سەرنج: هەر بەرهەمێک خاوەنی کەسایەتیی بازاڕیی خۆیەتی، بەڵام خاوەندارێتیی داتا، ئاسایش و ئاراستەی ستراتیژی ١٠٠٪ لەژێر حوکمڕانیی سەروەریی IDG دایە.',
      cardInspectPrompt: 'کلیک بکە بۆ بینینی دۆسیەی تەلارسازی و مۆک-ئەپ',
      modalLabels: {
        overview: 'پوختەی تەلارسازیی بەرهەم',
        detailedDescription: 'شیکاریی کارپێکردن و چارەسەری دامەزراوەیی',
        provenProblem: 'کێشەی سەلمێنراو (Proven Problem)',
        accountableOwner: 'دەستە و خاوەنی بەرپرسیار (Accountable Authority)',
        keyFeatures: 'تایبەتمەندییە سەرەکییەکان (Key Features)',
        targetAudience: 'لایەنە سودمەند و ئامانجدارەکان (Target Audience)',
        technologies: 'تەکنەلۆژیاکانی بەکارهێنراو (Tech Stack)',
        systemMockup: 'مۆک-ئەپی کارلێککاری ڕووکاری سیستم',
        provenImpact: 'کاریگەریی نیشتمانیی سەلمێنراو',
        visitLiveSite: 'سەردانی وێبسایتی فەرمیی بەرهەم',
        close: 'داخستن',
        governedBy: 'حوکمڕانیکراو لەژێر دەسەڵاتی IDG',
        operationalStatus: 'باری کارپێکردن',
        sovereignNotice: 'سەرجەم داتا و ڕێڕەوەکانی بڕیاردان بەپێی ستانداردی سەروەریی نیشتمانی لە ناوخۆی عێراق دەمێننەوە.',
      },
      products: [
        {
          id: 'aigate',
          numBadge: 'بەرهەمی ٠٠١',
          code: 'IDG-PRD-001',
          name: 'AI Gate Iraq',
          title: 'AI Gate Iraq',
          subtitle: 'دەروازەی زیرەکیی دەستکردی عێراق',
          tagline: 'دەروازەی زیرەکیی دەستکردی عێراق',
          problem: 'پارچەپارچەبوونی بڕیاردانی کارگێڕی و نەبوونی سیستەمی شیکاریی سەلمێنراو لە دامەزراوەکاندا.',
          owner: 'دەستەی شیکاری و بڕیاردانی بەڵگەمەند (IDG Analytics Directorate)',
          description:
            'یەکەم بەرهەمی حوکمڕانیکراو لە کۆمەڵەپۆلی IDG. پلاتفۆرمێک بۆ دابینکردنی شیکاری و بڕیاردانی سەلمێنراو لەژێر دەسەڵاتی دیاریکراوی مرۆییدا.',
          detailedDescription:
            'پلاتفۆرمی AI Gate Iraq ژێرخانێکی حوکمڕانیکراوی ژیریی دەستکردی کارپێکراوە کە تایبەت بۆ بەڕێوەبردنی بڕیارە ئاڵۆزەکان و شیکاریی بەڵگەمەند لە دامەزراوە حکومی و کۆمپانیا گەورەکان دیزاین کراوە. سیستەمەکە تەواوی پێداویستییەکانی سەروەریی داتا بەپێی یاساکانی دەوڵەت دابین دەکات بە جێگیرکردنی مۆدێلەکان لەسەر ڕاژەکارە ناوخۆییەکان بەبێ ناردنەدەرەوەی زانیاری بۆ دەرەوەی عێراق. کارایی سەرەکی لە دەوری پشکنینی خۆکاری بەڵگەنامە، شیکاریی بەراوردکاری، و چاودێریی مرۆیی لە بڕیارداندا (Human-in-the-Loop) دەخولێتەوە تا هیچ بڕیارێکی هەڵە دەرنەچێت.',
          keyFeatures: [
            'شیکاریی بەڵگەمەندی بڕیارە کارگێڕییەکان لەژێر چاودێریی توندی مرۆیی',
            'خوێندنەوەی بەڵگەنامە و ناسینەوەی نووسین (OCR) بە زمانی کوردی و عەرەبی بە دڵنیایی ٩٩.٤٪',
            'پاراستنی تەواوی داتا لەناو سنووری عێراق لەسەر ژێرخانی سەربەخۆ',
            'تۆماری وردبینیی نەگۆڕ و دەستکارینەکراو (Immutable Audit Hash)',
          ],
          targetAudience: [
            'وەزارەتەکان و دەستە فەرمییەکانی حکومەت',
            'بانکەکان و دامەزراوە دارایی و وردبینییەکان',
            'کۆمپانیا گەورەکان و دەستەکانی تەندروستی و لۆجستی',
          ],
          technologies: [
            'Next.js 15 App Router',
            'Python FastAPI Core',
            'Fine-Tuned KurdoArabic LLM',
            'PostgreSQL & pgvector',
            'Docker Air-Gapped Cluster',
            'mTLS & Zero-Trust Architecture',
          ],
          impact: 'کەمکردنەوەی هەڵەی کارگێڕی، خێراکردنی ئامادەکردنی بڕیارە ئاڵۆزەکان بە بەڵگەی سەلمێنراو بە ڕێژەی ٦٥٪.',
          status: 'کارپێکراو و چالاک لەژێر حوکمڕانیی IDG',
          url: 'https://aigate.iq',
          link: '/products/aigate',
          external: false,
          ctaType: 'internal',
          mockupType: 'aigate',
        },
        {
          id: 'zana',
          numBadge: 'بەرهەمی ٠٠٢',
          code: 'IDG-PRD-002',
          name: 'ZaNa Academy',
          title: 'ZaNa Academy',
          subtitle: 'پلاتفۆرمی سەربەخۆی فێرکردنی K-12',
          tagline: 'پلاتفۆرمی سەربەخۆی فێرکردنی K-12',
          problem:
            'قوتابی زۆر جار پرسیار ناکات چونکە شەرم دەکات لە بەرامبەر هاوپۆلەکانی. دایک و باوک ناتوانن یارمەتی بدەن لە وانەکاندا. مامۆستا ناتوانێت چاودێری هەر قوتابییەک بکات بە جیاوازی. پرسیارەکان بێ وەڵام دەمێننەوە.',
          owner: 'IDG Human Capital Division',
          description:
            'پلاتفۆرمێکی سەربەخۆ و تەواو جیاواز بۆ قوتابخانە و قوتابیان — سیستەمی فێرکردنی K-12 بە زمانی کوردی، لەگەڵ مامۆستایان، پڕۆگرامەکان، و ئەنجامدانی فێربوون. ئەم بەرهەمە پلاتفۆرمێکی سەر بە خۆیەتی و لە ماڵپەڕی سەرەکی IDG جیاکراوەتەوە.',
          detailedDescription:
            'پلاتفۆرمی فێربوونی زیرەک و مامۆستای ژیریی دەستکرد کە بۆ قوتابیانی کوردی دروست کراوە. کتێبی فەرمی بە کوردیی سۆرانی دەخوێنێتەوە، وەڵامی پرسیارەکان دەداتەوە لە کتێبی فەرمی، ڕاپۆرتی دایک و باوک ئامادە دەکات، و ئاستی فێربوون بەپێی هەر قوتابی گونجاو دەکات.',
          keyFeatures: [
            'چوونەژوورەوە — Firebase Auth بۆ قوتابی و ئادمین',
            'ژیریی دەستکرد — وەڵامی پرسیار لە کتێبی فەرمی',
            'ناوەڕۆکی کوردی — کیمیا پۆلی ١٢ (٣٧١ لاپەڕە)',
            'سیستەمی پاراستن — ٣ چین: UI + Route + Server',
            'تۆمارکردنی پێشکەوتن — D1 + Firebase',
            'ڕاپۆرتی دایک و باوک — بۆ چاودێریکردن',
          ],
          targetAudience: [
            'قوتابیان — دەتوانن هەر کاتێک پرسیار بکەن',
            'دایک و باوک — ڕاپۆرتی سادە و ڕوون',
            'مامۆستایان — کام قوتابی پێویستی بە یارمەتی زیاترە',
          ],
          technologies: [
            'React + TypeScript',
            'Firebase Auth',
            'Gemini File API',
            'Cloudflare D1',
            'UI + Route + Server',
          ],
          impact:
            'یەکەم هاوڕێی ژیری خوێندنی کوردی کە فێربوون بۆ هەر قوتابییەک بە شێوەیەکی دادپەروەرانە ڕێکدەخات.',
          status: 'external',
          badge: 'منالپلاتفۆرمی سەربەخۆ',
          externalUrl: 'https://zana.idggov.tech',
          external: true,
          ctaType: 'external',
          audience: 'قوتابخانەکان • قوتابیان • مامۆستایان • دایک و باوکان',
          url: 'https://zana.idggov.tech',
          link: 'https://zana.idggov.tech',
          mockupType: 'zana',
        },
        {
          id: 'greenbelt',
          numBadge: 'بەرهەمی ٠٠٣',
          code: 'IDG-PRD-003',
          name: 'Green Belt',
          title: 'Green Belt',
          subtitle: 'پشتێنی سەوز',
          tagline: 'پشتێنی سەوز',
          problem: 'بەفیڕۆچوونی زۆری پاشماوەی خۆراک، کەمیی داتای چاودێریی ژینگەیی و نەبوونی ژێرخانی ئابووری بازنەیی.',
          owner: 'کۆنسۆڵخانەی ژینگە و تەلارسازیی بازنەیی (IDG Circular Economy Core)',
          description:
            'پلاتفۆرمی ئابووری بازنەیی زیرەک بۆ کۆکردنەوەی پاشماوەی خۆراک، کۆمپۆستکردن، چاودێریکردنی ژینگە، و بەدواداچوونی کاریگەرییەکانی دارەکان.',
          detailedDescription:
            'پڕۆژەی پشتێنی سەوز (Green Belt) پلاتفۆرمێکی ئابووریی بازنەیی زیرەکە کە شێوازی مامەڵەکردن لەگەڵ پاشماوەی خۆراک و سامانی ژینگەیی لە عێراق دەگۆڕێت. لە ڕێگەی تۆڕێکی سەروەری هەستەوەری لۆکاڵی (IoT)، بەستەرە جوگرافییەکان، و چاودێریی مانگی دەستکردەوە، سیستەمەکە بەردەوام چاودێریی ڕێژەی کۆکردنەوەی پاشماوەی ئەندامی، قۆناغەکانی گۆڕینی بۆ کۆمپۆستی بەپیت، و تەندروستیی سەدان هەزار درەختی چێنراوی پشتێنی سەوزی بەغدا و شارەکان دەکات.',
          keyFeatures: [
            'بەدواداچوونی ئۆتۆماتیکی سووڕی کۆکردنەوەی پاشماوەی خۆراک و بەفیڕۆچوون',
            'سیستەمی هەستەوەری IoT بۆ چاودێریی گەرمی، شێداری و خێرایی کۆمپۆست',
            'نەخشەی جوگرافیی زیندووی پشتێنی سەوز و ڕێژەی ژیانی درەختەکان',
            'پێوانەی ڕزگارکردنی کاربۆن (CO2 Offset) و بەرهەمی خاکی بەپیتی نیشتمانی',
          ],
          targetAudience: [
            'شارەوانییەکان و دەستەی باڵای پاراستنی ژینگە لە عێراق',
            'کەرتی کشتوکاڵ، باخەوانەکان و کێڵگە پیشەسازییەکان',
            'ڕێکخراوەکانی پەرەپێدانی بەردەوامی و ئابووریی سەوز',
          ],
          technologies: [
            'Edge IoT Telemetry Nodes',
            'GIS & PostGIS Spatial Engine',
            'MQTT Real-Time Broker',
            'TimescaleDB Sensor Logging',
            'Satellite Vegetation Analysis',
            'REST API Integration Gateway',
          ],
          impact: 'گۆڕینی هەزاران تەن لە پاشماوە بۆ سەرچاوەی بەسوود، چاندنی زیاتر لە ١٢٠،٠٠٠ درەخت و تۆمارکردنی داتای سەوزی نیشتمانی.',
          status: 'جێبەجێکردنی مەیدانیی بەردەوام',
          url: 'https://greenbelt.iq',
          link: '/products/greenbelt',
          external: false,
          ctaType: 'internal',
          mockupType: 'greenbelt',
        },
        {
          id: 'impactiq',
          numBadge: 'بەرهەمی ٠٠٤',
          code: 'IDG-PRD-004',
          name: 'ImpactIQ',
          title: 'ImpactIQ',
          subtitle: 'پێوانەکردنی سەروەرانەی کاریگەریی نیشتمانی',
          tagline: 'پێوانەکردنی سەروەرانەی کاریگەریی نیشتمانی',
          problem: 'نەبوونی پێوانەکردنی زانستی بۆ کاریگەریی پڕۆژە نیشتمانییەکان، پشت بەستن بە هەڵسەنگاندنی نادڵنیا و نەبوونی شەفافیەتی لێپرسینەوە.',
          owner: 'دەستەی سەروەریی شیکاری و پێوانەکردنی کاریگەری (IDG MEAL Directorate)',
          description:
            'ژێرخانێکی سەروەرانەی شیکاری و پێوانەکردنی کاریگەری (MEAL Engine) بە مۆدێلی ژیریی دەستکردی نیشتمانی، کە بە گەرەنتی مانەوەی ١٠٠٪ی داتا لە ناوخۆی وڵات، بڕیاردان لە پێشبینی نادڵنیاوە دەگۆڕێت بۆ زانستی بەڵگەنەویستی.',
          detailedDescription:
            'پلاتفۆرمی ImpactIQ ژێرخانێکی سەروەرانەی شیکاری و هەڵسەنگاندنی بەردەوامە (Monitoring, Evaluation, Accountability, and Learning - MEAL Engine) کە بە مۆدێلی ژیریی دەستکردی نیشتمانی کاردەکات. بە گەرەنتی مانەوەی ١٠٠٪ی داتا لە ناوخۆی وڵات لەژێر ستانداردی ISO 27001، هەموو داتا و پڕۆسەی بڕیاردانی کارگێڕی دەگۆڕێت بۆ زانستێکی بەڵگەنەویست کە وردبینی و شەفافیەتی تەواوی هەیە.',
          features: [
            'AI Predictive Impact Scoring',
            'Immutable Audit Trails',
            '100% Sovereign Hosting',
            'Sovereign NLP Reporting',
          ],
          keyFeatures: [
            'AI Predictive Impact Scoring — خەمڵاندنی پێشبینیکراوی کاریگەریی پڕۆژەکان بە ژیریی دەستکرد',
            'Immutable Audit Trails — تۆماری وردبینیی نەگۆڕ و بەڵگەمەند بە تەکنەلۆژیای Cryptographic Hash',
            '100% Sovereign Hosting — میوانداریکردنی سەروەرانەی تەواوی داتاکان لە ناوخۆی عێراق',
            'Sovereign NLP Reporting — ڕاپۆرتسازیی پێشکەوتووی خۆکار بە زمانەکانی کوردی و عەرەبی',
          ],
          targetAudience: [
            'وەزارەتەکان و دەستە باڵاکانی سەرپەرشتیاری پڕۆژە نیشتمانییەکان',
            'ڕێکخراوە نێودەوڵەتییەکان و ئاژانسەکانی گەشەپێدان',
            'دامەزراوە داراییەکان و سندووقەکانی وەبەرهێنانی سەروەری',
          ],
          technologies: [
            'Sovereign Fine-Tuned NLP Models',
            'PostgreSQL & TimescaleDB',
            'Cryptographic Hash Ledger',
            'FastAPI & Next.js 15 App Router',
            'Air-Gapped Sovereign Infrastructure',
          ],
          impact: 'گۆڕینی بڕیاردان لە پێشبینی نادیارەوە بۆ شیکاریی بەڵگەنەویست بە گەرەنتی مانەوەی ١٠٠٪ی داتا لە عێراق.',
          status: 'active',
          badge: 'Strategic Initiative',
          link: '/products/impactiq',
          external: false,
          ctaType: 'internal',
          url: '/products/impactiq',
          mockupType: 'aigate',
        },
        {
          code: 'IDG-PRD-005',
          id: 'gatewayai',
          name: 'Gateway AI',
          title: 'Gateway AI',
          subtitle: 'هۆشمەندی سنوور و گومرک',
          numBadge: '5️⃣',
          tagline: 'دەروازەی زیرەکی نیشتمانی — هۆشمەندی سنوور و گومرک',
          description: 'سیستەمی زیرەکی نیشتمانی بۆ بەڕێوەبردنی سنووری و گومرک، پێکدەنێت لەگەڵ AI Gate Iraq، ڕێگاشاری سنوور، بیرۆکەی دیجیتاڵی نیشتمانی و تەکنەلۆژیای زیرەکی. پاڵپشتی ١٠٠% مانەوەی داتاکان لە ناوخۆی وڵات لە بنەی ISO 27001.',
          status: 'active',
          badge: 'پێشەنگای ستراتیژی',
          features: [
            'مۆتۆری سکۆرینگی ریسکی AI',
            'دیدی کۆمپیوتەری و AI شێنزا',
            'جووتەی دیجیتاڵی سنووری',
            'دەقی بیرۆکەی نەگۆڕاو (ISO 27001)',
            'هاوکاری گومرکی فێدراڵی-هلێمی',
            'تێبینی تێڕانووسی ڕاستەقینە',
            'پەنجەرەی یەکتا بۆ کاسیری'
          ],
          link: '/ku/products/gateway-ai',
          external: false,
          ctaType: 'internal'
        },
      ],
      nsw: {
        badge: 'دەستپێشخەریی ستراتیژیی نیشتمانی — وەشان ١.٠',
        fullTitle: '🇮🇶 پەنجەرەی نیشتمانی بۆ بازرگانی — عێراق (Iraq NSW)',
        title: 'پەنجەرەی نیشتمانی بۆ بازرگانی — عێراق',
        subtitle: 'National Single Window for Trade — Iraq',
        problem: 'پارچەپارچەبوونی سیستەمی گومرگ، نەبوونی پێکەوەبەستنی داتا لەنێوان دەروازە سنورییەکان، کاتی پاکتاوی درێژخایەن (٤٨ کاتژمێر)، بەرزیی تێچووی هەر ڕاگەیاندن (١،٠٠٠ دۆلار)، ڕەوایی کەمی گومرگ (١٠٪)، و بەفیڕۆچوونی داهاتی گشتی.',
        architecture: 'پەنجەرەی نیشتمانی بۆ بازرگانی — عێراق (Iraq NSW) پلاتفۆرمێکی سەروەریی نیشتمانییە بۆ یەکخستنی دەروازە سنورییەکان، گومرگ، بانکەکان و دەستە ڕێکخەرەکان. ئامانجی: کەمکردنەوەی کاتی پاکتاو لە ٤٨ کاتژمێرەوە بۆ ٧ کاتژمێر، کەمکردنەوەی تێچوو لە ١،٠٠٠ دۆلارەوە بۆ ٤٠٠ دۆلار، و بەرزکردنەوەی شەفافیەت لە ١٠٪ بۆ ٩٠٪+.',
        description: 'پەنجەرەی نیشتمانی بۆ بازرگانی — عێراق (Iraq NSW) پلاتفۆرمێکی سەروەریی نیشتمانییە بۆ یەکخستنی دەروازە سنورییەکان، گومرگ، بانکەکان و دەستە ڕێکخەرەکان.',
        detailedDescription: 'Iraq NSW سیستەمێکی نیشتمانیی یەکگرتووە کە دەروازە سنورییە وشکانی، دەریایی و ئاسمانییەکانی عێراق پێکەوە دەبەستێت. بودجەی گشتی: ١٨٠ ملیۆن دۆلار | ماوە: ١٨ مانگ | گەڕانەوەی وەبەرهێنان (ROI): ٤٢٠٪ (ساڵی سێیەم).',
        keyFeatures: [
          'کەمکردنەوەی کاتی پاکتاوی گومرگی لە ٤٨ کاتژمێرەوە بۆ ٧ کاتژمێر',
          'کەمکردنەوەی تێچووی هەر ڕاگەیاندن لە ١،٠٠٠ دۆلارەوە بۆ ٤٠٠ دۆلار (٦٠٪ کەمتر)',
          'بەرزکردنەوەی شەفافیەت لە ١٠٪ بۆ ٩٠٪+',
          'کەمکردنەوەی گەندەڵی لە ٤٠٪ بۆ ٠٪',
          'پێکەوەبەستنی ١٠ دەروازەی سنوری + هەرێمی کوردستان',
          'دۆزینەوەی ساختەکاری بە AI/ML — ٧٠٪ → ٩٠٪',
          'پشتڕاستکردنەوەی بەڵگەنامە بە OCR و LayoutLMv3',
          'نەخشەی Offline Mode بۆ دەروازەکان بەبێ ئینتەرنێت',
        ],
        targetAudience: [
          'دەستەی گشتی گومرگ و دەروازە سنورییەکان',
          'وەزارەتی بازرگانی، گواستنەوە، تەندروستی، کشتوکاڵ',
          'بانکی ناوەندی عێراق (CBI) و بانکە بازرگانییەکان',
          'کۆمپانیاکانی هاوردە، هەناردە، و کەشتیوانی',
          'هەرێمی کوردستان — دەستەی گومرگی سەربەخۆ',
        ],
        technologies: [
          'Go (Golang) + Python/FastAPI',
          'React.js + Next.js + RTL Support',
          'PostgreSQL + Firestore + BigQuery',
          'Kubernetes + Google Cloud Platform',
          'Vertex AI + TensorFlow/PyTorch',
          'Zero-Trust Security + OCR',
          'gRPC + REST API + Pub/Sub',
          'LayoutLMv3 + Dialogflow CX',
        ],
        owner: 'دەستەی تەلارسازیی سیستەمە نیشتمانییەکان — IDG',
        impact: 'کەمکردنەوەی کاتی پاکتاو بە ٨٥٪، کەمکردنەوەی تێچوو بە ٦٠٪، بەرزکردنەوەی شەفافیەت بە ٩x، کەمکردنەوەی گەندەڵی بۆ ٠٪ — گەڕانەوەی وەبەرهێنان (ROI) بە ڕێژەی ٤٢٠٪ لە ساڵی سێیەم.',
        mockupType: 'nsw',
      },
    },
    governance: {
      heroTitle: 'حوکمڕانی و بەها سەرەکییەکان',
      heroDesc:
        'متمانە بەبێ حوکمڕانی تەنها دروشمێکە. لە دەروازەی دیجیتاڵیی عێراق (IDG)، ئێمە دیسپلینی کارکردن، شەفافیەت، و بڕیاردانی بەبەڵگەکراو یەکدەخەین بۆ دروستکردنی دامەزراوەیەکی بەردەوام کە لە سەرووی پشتبەستن بە تاکەکانەوە کاردەکات.',
      valuesTitle: 'بەها نەگۆڕەکانمان',
      values: [
        {
          title: 'بەرپرسیارێتی نیشتمانی 🇮🇶',
          desc: 'توانای دامەزراوەیی و ئابووریی درێژخایەنی عێراق وەک بەرپرسیارێتییەک دەبینین. بڕیارەکانمان بەدەر لە داهاتی دەستبەجێ، لەسەر بنەمای گرنگیی نیشتمانی هەڵدەسەنگێنین.',
        },
        {
          title: 'دەستپاکی لە بنەڕەتدا ⚖️',
          desc: 'دەبێت دەستپاکی لە ناو هاندانەکان، داتا، گرێبەستەکان و پەیوەندییەکاندا بچەسپێنرێت. ئێمە ڕاستییە گرنگەکان ئاشکرا دەکەین و ناکۆکییەکان بە زوویی دەخەینە ڕوو.',
        },
        {
          title: 'بەڵگە پێش گریمانە 📊',
          desc: 'بڕیاری ستراتیژی و بەرهەم لەگەڵ مەرجی پشتگیریکراو دەستپێدەکەن. ڕاستییەکان لە بۆچوونەکان جیا دەکەینەوە و کاتێک بەڵگەکان دەگۆڕێن، ڕێڕەو دەگۆڕین.',
        },
        {
          title: 'ئاسایش و سەروەری 🔒',
          desc: 'متمانە پشتبەستووە بە حوکمڕانی داتای بەرپرسیارێتانە. کەمترین مۆڵەت بەکاردەهێنین و مەترسییەکانی فرۆشیار و دادگا بە وردی دەسەنگێنین.',
        },
        {
          title: 'خاوەندارێتی درێژخایەن ⏳',
          desc: 'بەرپرسیارێتیی تەواوی تەمەنی هەر سیستم و پابەندبوونێک لەئەستۆ دەگرین. لە سەرەتاوە نەخشەسازی بۆ چاککردنەوە، ڕادەستکردن و لەکارخستنی بەرپرسیارانە دەکەین.',
        },
        {
          title: 'مرۆڤ-تەوەر 👥',
          desc: 'تەکنەلۆژیا دەبێت ڕێز لە ماف و دەرفەتەکانی خەڵک بگرێت. هەردەم پێداچوونەوەی مرۆیی بۆ بڕیارە چارەنووسسازەکانی زیرەکیی دەستکرد دابین دەکەین.',
        },
      ],
      architectureTitle: 'پێکهاتەی حوکمڕانیی کۆرپۆرەیتی',
      tableHeaders: {
        domain: 'بواری حوکمڕانی',
        principle: 'بنەما',
        mechanism: 'میکانیزمی پێویست',
      },
      domains: [
        {
          domain: 'بڕیاردان',
          principle: 'دەسەڵات شوێنی گرنگی، شارەزایی، مەترسی و لێپرسینەوە دەکەوێت.',
          mechanism: 'ماتریکسی مافەکانی بڕیاردان، تۆماری نووسراوی بڕیار، و ڕێکخەری پێداچوونەوە.',
        },
        {
          domain: 'بەرپرسیارێتی',
          principle: 'هەموو ئەنجامێکی گرنگ خاوەنێکی بەرپرسیاری تەنهای هەیە.',
          mechanism: 'خاوەنی ناودار، ئامانج، کاتی کۆتایی، و بەڵگەی تەواوبوون.',
        },
        {
          domain: 'شەفافیەت',
          principle: 'لایەنە پەیوەندیدارەکان زانیاریی ورد وەردەگرن بۆ کارکردن و چاودێریکردن.',
          mechanism: 'ڕاپۆرتکردنی حوکمڕانیکراو، شوێنپێهەڵگرتنی وردبینی، و ئاشکراکردنی تێکچوون.',
        },
        {
          domain: 'ئاسایش و داتا',
          principle: 'سیستەم و داتای هەستیار وەک سامانی متمانەی کۆرپۆرەیتی حوکمڕانی دەکرێن.',
          mechanism: 'پۆلێنکردنی داتا، کەمترین دەسەڵات، و کۆنتڕۆڵی مەترسییەکانی دابینکەر.',
        },
      ],
      caseStudiesHeading: 'شیکاریی کەیسە کردارییەکان (Institutional Case Studies)',
      caseStudiesSubheading:
        'هەموو بڕیارێکی تەکنیکی بەپێی زنجیرەیەکی توندی بەڵگەمەند هەڵدەسەنگێندرێت: بارودۆخ -> بەڵگە -> بڕیار -> کاریگەری -> مەترسی -> هەنگاوی داهاتوو.',
      heading: 'حوکمڕانی و دیسپلینی کۆرپۆرەیتی',
      subheading:
        'هەموو بڕیارێکی تەکنیکی بەپێی زنجیرەیەکی توندی بەڵگەمەند هەڵدەسەنگێندرێت: بارودۆخ -> بەڵگە -> بڕیار -> کاریگەری -> مەترسی -> هەنگاوی داهاتوو.',
      frameworkTitle: 'نموونەی کەیسە حوکمڕانیکراوەکانی IDG',
      cases: [
        {
          id: 'data-sov',
          title: 'سەروەریی داتای نیشتمانی و هەوری لۆکاڵی',
          category: 'ژێرخان و یاسا',
          context: 'پارچەپارچەبوونی هەڵگرتنی داتای هەستیاری دامەزراوەیی لە سێرڤەری دەرەکیی نەپارێزراودا.',
          evidence: 'زیاتر لە ٧٠٪ی خزمەتگوزارییە کۆنەکان لەژێر هیچ پەیماننامەیەکی سەروەریی داتای لۆکاڵیدا کار ناکەن.',
          decision: 'دامەزراندنی مەرجی حوکمڕانی: هەموو بەرهەمەکانی ژێر IDG دەبێت لە ناوخۆی سنووری خاکی عێراق داتاکانیان بنکەدار بکەن.',
          impact: 'دڵنیابوونەوە لە سەروەریی تەواوی دەوڵەت بەسەر زانیارییە ستراتیژییەکاندا.',
          risk: 'تێچووی سەرەتایی لە بنیاتنانی سێرڤەری متمانەپێکراوی ناوخۆیی.',
          nextStep: 'فەرمیکردنی پرۆتۆکۆلی کۆدکردنی سەرانسەری لە سەرتاسەری پۆرتفۆلیۆدا.',
        },
        {
          id: 'ai-oversight',
          title: 'حوکمڕانیی ژیریی دەستکرد لە ژێر بڕیاری مرۆڤدا',
          category: 'بڕیاردانی ئەلگۆریتمی',
          context: 'پشتپێبەستنی کۆرە بە مۆدێلە دەرەکییەکان دەبێتە هۆی هەڵەی شیکاری بەهۆی لەبەرچاونەگرتنی تایبەتمەندیی کولتووری و یاسایی عێراق.',
          evidence: 'مۆدێلە گشتییەکان لە دەرەوەی عێراق دەستنیشانی وردی ڕێکارە کارگێڕییەکانی دەوڵەت ناکەن.',
          decision: 'قەدەغەکردنی هەر بڕیارێکی ئۆتۆماتیکی بێ پشکنینی مرۆیی (Human-in-the-loop) لە تەواوی مۆدیولەکانی AI Gate Iraq.',
          impact: 'ڕێگریکردن لە هەر دەرەنجامێکی نادروست و بەرزکردنەوەی متمانەی بەرپرسانی بڕیاردەر.',
          risk: 'کەمێک کاتی پێداچوونەوە زیاد دەکات.',
          nextStep: 'بڵاوکردنەوەی ڕێبەری لێپرسینەوەی ئەلگۆریتمی بۆ هەموو تیمەکانی گەشەپێدان.',
        },
        {
          id: 'interop',
          title: 'پێکەوەبەستنی کراوە و کەمکردنەوەی کەلێنی پەیوەندی',
          category: 'تەلارسازیی تەکنیکی',
          context: 'دروستکردنی سیستەمی داخراو (Vendor Lock-in) وایکردووە دامەزراوەکان نەتوانن داتا لەگەڵ یەکتر ئاڵوگۆڕ بکەن.',
          evidence: 'پێویستی بە دووبارە داخڵکردنەوەی دەستیی داتاکان لە نێوان وەزارەت و فەرمانگەکاندا.',
          decision: 'سەپاندنی ستانداردی کراوەی OpenAPI و ڕێکخستنی میمۆریی داتا بەپێی مۆدێلی یەکگرتووی نیشتمانی.',
          impact: 'کەمکردنەوەی تێچووی پەیوەستکردنەوە بە ڕێژەی بەرچاو و خێراکردنی خزمەتگوزارییەکان.',
          risk: 'پێویستی بە هەماهەنگیی تەکنیکیی بەردەوام لەگەڵ بەشە پەیوەندیدارەکان.',
          nextStep: 'ڕاگەیاندنی بەڵگەنامەی تەلارسازیی یەکگرتووی IDG بە کەرتی گشتی.',
        },
      ],
    },
    stakeholders: {
      heroTitle: 'لایەنە ئامانجدارەکان و هاوبەشییەکان',
      heroDesc:
        '(IDG) خزمەتی لایەنە جیاوازەکان دەکات لە ڕێگەی پەیوەندییەکەوە کە لەگەڵ ڕۆڵی هەریەکەیاندا دەگونجێت. هاوبەشییەکانمان لەسەر بنەمای گونجاویی ستراتیژی، بەهای هاوبەش و بەڵگەی سەلمێنراو بونیاد دەنێین.',
      items: [
        {
          icon: '🏛️',
          title: 'حکومەت',
          desc: 'هاوبەشی ستراتیژی بۆ گۆڕانکاری و خزمەتگوزاریی گشتی. ئامانجمان بەرزکردنەوەی توانای دامەزراوەیی، لێپرسینەوە، هاوکاریی سیستەمەکان و سەروەریی نیشتمانییە.',
          actionText: 'داواکردنی کۆبوونەوەی ستراتیژی ←',
        },
        {
          icon: '🏢',
          title: 'کەرتی تایبەت',
          desc: 'پلاتفۆرم و بازاڕی متمانەپێکراو. یارمەتی کۆمپانیاکان دەدەین بۆ بەرهەمهێنان، مامەڵەی شەفاف، دەستڕاگەیشتن بە بازاڕ و ژیریی کارپێکردن.',
          actionText: 'ئاشنابوون بە چارەسەرەکان ←',
        },
        {
          icon: '📈',
          title: 'سەرمایەگوزاران',
          desc: 'لۆژیکی پۆرتفۆلیۆی دیسپلینکراو. دابینکردنی ئابوورییەکی متمانەپێکراو، مەترسیی شەفاف، و دروستکردنی بەهای درێژخایەن لە بازاڕی عێراقدا.',
          actionText: 'بینینی ماتریکسی وەبەرهێنان ←',
        },
        {
          icon: '🎓',
          title: 'زانکۆکان و توێژینەوە',
          desc: 'بەستەرێکی بەهێز لەنێوان زانیاری و پێداویستییە نیشتمانییەکان. بەرهەمهێنانی توێژینەوەی بەکارهاتوو، ستانداردی هاوبەش و گەشەپێدانی بەهرە.',
          actionText: 'پرۆگرامەکانی توێژینەوە ←',
        },
        {
          icon: '🌍',
          title: 'ڕێکخراوە نێودەوڵەتییەکان',
          desc: 'بەرنامەی خاوەندارێتی ناوخۆیی و گەیاندنی بەرپرسیارانە. کاردەکەین بۆ یارمەتیی تەکنیکی، ستاندارد و توانای دامەزراوەیی سەلمێنراو.',
          actionText: 'هاوبەشییەکانی گەشەپێدان ←',
        },
        {
          icon: '👥',
          title: 'هاووڵاتیان و کۆمەڵگە',
          desc: 'ئەزموونی دیجیتاڵی بەسوود و پارێزراو. مسۆگەرکردنی سیستەمی دەستڕاگەیشتوو، مافە پارێزراوەکان، و بەشداریکردنی شەفاف بۆ خاوەن مافەکان.',
          actionText: 'پێوەرەکانی متمانە ←',
        },
      ],
      rulesTitle: 'یاسای هاوبەشییەکانی IDG',
      rulesDesc:
        'کۆمپانیاکە بە سەربەخۆیی و بێلایەنی دەمێنێتەوە. هەر بانگەشەیەکی دۆخی یاسایی، پشتگیری، یان کارکردن لەگەڵ لایەنەکاندا پێویستی بە بەڵگەی سەردەم و ڕێککەوتنی نووسراو هەیە. ئێمە هاوبەشییەکان لەسەر بنەمای مەترسییەکان، گواستنەوەی تواناکان و بەردەوامیی درێژخایەن هەڵدەسەنگێنین.',
      heading: 'لایەنە ئامانجدارەکان و کایەکانی جێبەجێکردن',
      subheading:
        'IDG هاوبەشی دامەزراوە ستراتیژییەکانە بۆ گۆڕینی کەلێنە کارپێکردنەکان بۆ توانایەکی پیشەیی و خاوەن بەرپرسیارێتی.',
      sectors: [
        {
          title: 'دامەزراوەکانی کەرتی گشتی و وەزارەتەکان',
          mandate: 'بەرزکردنەوەی توانای بەڕێوەبردن و بەدیجیتاڵکردنی سەروەرانەی داتاکان.',
          outcomes: [
            'سیستەمی بڕیاردانی بەڵگەمەند و دیسپلینکراو',
            'پەیوەستکردنی پەنجەرەی یەکگرتووی نیشتمانی',
            'سەروەری و پاراستنی بەڵگەنامە و داتای هەستیار',
          ],
        },
        {
          title: 'کەرتی دارایی و بانکداری',
          mandate: 'دروستکردنی متمانەی ئاسایش و شەفافیەت لە گۆڕینەوەی داتا و ڕاپۆرتە داراییەکاندا.',
          outcomes: [
            'تەلارسازیی پارێزراوی کارپێکردنی هاوبەش',
            'چاودێریی مەترسی لە ڕێگەی مۆدێلی شیکاریی سەلمێنراو',
            'پابەندبوون بە مەرجە نیشتمانی و نێودەوڵەتییەکان',
          ],
        },
        {
          title: 'ژێرخانی بازرگانی، گواستنەوە و پیشەسازی',
          mandate: 'سەرپەرشتیکردنی ئاڵوگۆڕی بازرگانیی مۆدێرن و یەکخستنی زنجیرەی دابینکردن.',
          outcomes: [
            'خێراکردنی مامەڵەکانی سنور و گومرگ (Iraq NSW)',
            'بەدواداچوونی زیرەکی بارنامە و کەلوپەل',
            'دابینکردنی شەفافیەتی تەواوی داهات',
          ],
        },
        {
          title: 'دەستپێشخەریی ژینگەیی و ئابووریی نیشتمانی',
          mandate: 'پاراستنی سەرمایەی سروشتی لە ڕێگەی مۆدێلی ئابووری بازنەیی و داتای ڕاستەقینە.',
          outcomes: [
            'چاودێریکردنی مەیدانیی کاریگەریی ژینگە (Green Belt)',
            'کەمکردنەوەی بەفیڕۆدانی خۆراک و پاشماوەکان',
            'دروستکردنی دەرفەتی کاری سەوز و پیشەیی',
          ],
        },
      ],
    },
    vision: {
      heading: 'دیدگای ٢٠٣٥: توانای دامەزراوەیی سەربەخۆ',
      subheading:
        'نەخشەڕێگایەکی هەنگاو بە هەنگاو کە لە بەڵگەی واقعیی ئێستاوە دەستپێدەکات بەرەو سەروەریی تەواوی تەکنەلۆژی بۆ دەوڵەتی عێراق.',
      phases: [
        {
          era: '٢٠٢٤ - ٢٠٢٦',
          title: 'قۆناغی یەکەم: چەسپاندنی بنەماکان و سەروەریی داتا',
          target: 'دامەزراندنی پرۆتۆکۆلی حوکمڕانیی یەکگرتوو',
          focus: 'چالاککردنی سامانەکانی پۆرتفۆلیۆ (AI Gate, ZaNa, Green Belt) و بنیاتنانی ژێرخانی سەروەرانەی داتای ناوخۆ.',
        },
        {
          era: '٢٠٢٦ - ٢٠٣٠',
          title: 'قۆناغی دووەم: پێکەوەبەستنی فراوان و پەنجەرەی نیشتمانی',
          target: 'تەواوکردنی پێکەوەبەستنی کەرتی بازرگانی و دارایی',
          focus: 'بڵاوکردنەوەی Iraq NSW بە تەواوی و بەستنەوەی بانکەکان و دەروازە سنورییەکان لە ژێر یەک تۆڕی نیشتمانیدا.',
        },
        {
          era: '٢٠٣٠ - ٢٠٣٥',
          title: 'قۆناغی سێیەم: خۆبژێویی تەکنەلۆژی و هەناردەکردنی توانا',
          target: 'کۆتاییهێنان بە کەلێنی متمانە و وابەستەیی دەرەکی',
          focus: 'گۆڕینی عێراق لە وڵاتێکی بەکاربەری تەکنەلۆژیاوە بۆ ناوەندێکی خاوەن سەروەریی بەهێزی کارپێکردن و پێشەنگی ژیریی دەستکردی دیسپلینکراو.',
        },
      ],
    },
    contactModal: {
      title: 'پەیوەندیی دامەزراوەیی لەگەڵ IDG',
      subtitle:
        'دەروازەی دیجیتاڵیی عێراق تەنها بەدواداچوون بۆ داواکارییە فەرمییەکانی پەیوەست بە حوکمڕانی، وەبەرهێنان و یەکگرتنی سیستەمەکان دەکات.',
      nameLabel: 'ناوی تەواوی بەرپرسیار',
      entityLabel: 'ناوی دامەزراوە / کۆمپانیا',
      sectorLabel: 'کەرتی پەیوەندیدار',
      inquiryTypeLabel: 'بابەتی پەیوەندی',
      messageLabel: 'پوختەی کێشەی سەلمێنراو یان داواکاری',
      submitBtn: 'ناردنی داواکاریی فەرمی',
      successTitle: 'داواکارییەکەت بە سەرکەوتوویی تۆمارکرا',
      successMsg: 'تیمی حوکمڕانیی IDG دوای لێکۆڵینەوە لە بەڵگە و کێشە دیاریکراوەکە لە کەمترین ماوەی کارپێکردندا پەیوەندیت پێوە دەکات.',
      closeBtn: 'داخستن',
      sectorOptions: [
        'دامەزراوەی کەرتی گشتی / حکومی',
        'بانک و دامەزراوەی دارایی',
        'کەرتی بازرگانی و گواستنەوە',
        'کەرتی ژینگە و کشتوکاڵ',
        'ناوەندی ئەکادیمی و توێژینەوە',
      ],
      inquiryOptions: [
        'هاوبەشیی ستراتیژی لەگەڵ IDG',
        'داواکاریی بەکارهێنانی AI Gate Iraq',
        'ڕێککەوتنی ڕاهێنان لە ئەکادیمیای زانا (ZaNa Academy)',
        'پڕۆژەی بەردەوامی لەگەڵ Green Belt',
        'هەماهەنگی لە پەنجەرەی نیشتمانی (Iraq NSW)',
      ],
    },
    about: {
      badge: 'دەربارەی دامەزراوەکە • About IDG',
      heading: 'دەربارەی دەروازەی دیجیتاڵیی عێراق (IDG)',
      subheading:
        'کۆمپانیای دایکی سەربەخۆ و ستۆدیۆی وەبەرهێنانی تەکنەلۆژی: گۆڕینی ئاڵۆزییە دامەزراوەییەکان بۆ توانای کارپێکردنی متمانەپێکراو بۆ عێراق.',
      missionTitle: 'ئەرکی سەرەکیمان 🎯',
      missionDesc:
        'بنیاتنانی تواناکانی دامەزراوەیی، تەکنەلۆجی و مرۆیی لە ڕێگەی گۆڕینی کێشە بونیادییەکان بۆ سیستەمی بەرهەمهێنان و ژیریی دەستکردی بەرپرسیار.',
      visionTitle: 'دیدگای ٢٠٣٥ 👁️',
      visionDesc:
        'تا ساڵی ٢٠٣٥، دەبینە دامەزراوەیەکی سەربەخۆی بەردەوام کە یارمەتیدەرە لە پەیوەستترکردن و زیرەکترکردنی سیستەمە گشتی و تایبەتەکان. زانیارییە ستراتیژییەکان دەپارێزین و ڕاستییە خۆجێییەکان دەگۆڕین بۆ توانایەکی نێودەوڵەتی.',
      coreValuesTitle: 'بەها نەگۆڕەکانمان:',
      coreValuesSubtitle: 'چوار بنەمای نەگۆڕ کە ڕێنمایی هەموو بڕیار، تەلارسازی، هاوبەشی و پڕۆژەیەکی IDG دەکەن:',
      coreValuesList: [
        {
          label: 'بەرپرسیارێتی نیشتمانی:',
          text: ' بڕیارەکان بەدەر لە داهاتی دەستبەجێ هەڵدەسەنگێنین.',
        },
        {
          label: 'بەڵگە پێش گریمانە:',
          text: ' ستراتیژ لەگەڵ مەرجی پشتگیریکراو دەستپێدەکات.',
        },
        {
          label: 'ئاسایش و سەروەری:',
          text: ' متمانە پشتبەستووە بە حوکمڕانی داتای بەرپرسیارێتانە.',
        },
      ],
      coreValues: [
        {
          badge: 'سەروەری و بەرپرسیارێتی',
          title: 'بەرپرسیارێتیی نیشتمانی و پاراستنی سەروەری',
          desc: 'پێشخستنی بەرژەوەندیی درێژخایەنی عێراق و سەروەریی تەواوی داتای نیشتمانی بەسەر قازانجی کورتخایەندا. هەموو کۆد و داتایەک لە ناوخۆی عێراق خاوەندارێتی دەکرێت.',
        },
        {
          badge: 'دیسپلین و ڕاستی',
          title: 'بەڵگە و حەقیقەت پێش گریمانە',
          desc: 'بڕیاردان و تەلارسازیی سیستەمەکان تەنها لەسەر بنەمای داتای مەیدانی، بەڵگەی سەلمێنراو، و لێپرسینەوەی حیساباتی دەبێت نەک گریمانەی تیۆری.',
        },
        {
          badge: 'دەستپاکی و ڕوونی',
          title: 'دەستپاکی لە بنەڕەتدا (Integrity by Design)',
          desc: 'بەستەری بەرنامەسازیی کراوە (OpenAPI)، تۆماری نەگۆڕ، و ئاسایشی بێبەخشین. ئێمە ڕێگە لە مۆنۆپۆل و چارەسەری داخراوی بەستراو بە لایەنی دەرەکی دەگرین.',
        },
        {
          badge: 'بەردەوامی و گەشە',
          title: 'خاوەندارێتی و تواناسازیی بەردەوام',
          desc: 'دروستکردنی توانای ناوخۆیی و ڕادەستکردنی تەواوی زانست بە کادری عێراقی، بە شێوازێک کە سیستەمەکان بۆ دەیان ساڵ بەردەوام بن.',
        },
      ],
      transformationTitle: 'چۆن ئاڵۆزی دەگۆڕین بۆ توانایەکی کارپێکردنی متمانەپێکراو؟',
      transformationDesc:
        'عێراق خاوەنی سەرچاوەی دەوڵەمەند و توانای مرۆیی بەرزە، بەڵام ڕووبەڕووی دابڕانی سیستمەکان، مامەڵەی کاغەزی، و بیرۆکراسیی ئاڵۆز دەبێتەوە. میتۆدۆلۆژیای ئەندازیاریی IDG ئەم ئاڵۆزییە دەکاتە توانای بەردەوام لە چوار قۆناغی لۆژیکیدا:',
      transformationStages: [
        {
          step: '٠١',
          title: 'شیکردنەوە و هەڵوەشاندنەوەی کەلێنەکان',
          subtitle: 'ناساندنی وردی کێشە سەلمێنراوەکان',
          desc: 'دیاریکردنی هۆکارە بنەڕەتییەکانی خاوی، گرژییە کارپێکردنەکان، و دابڕانی داتا لەنێوان لایەنە پەیوەندیدارەکاندا لەسەر بنەمای داتای ڕاستەقینە.',
          outcome: 'دۆکیومێنتکردنی ئاشکرای نەخشەی کار و ئاستەنگەکان',
        },
        {
          step: '٠٢',
          title: 'تەلارسازیی سەروەرانەی سیستەمەکان',
          subtitle: 'ستانداردی کراوە و میمۆریی یەکگرتوو',
          desc: 'داڕشتنی پرۆتۆکۆلی پارێزراو، کۆنتڕۆڵی ڕێگەپێدانی ئاست-بەرز، و هاوئاهەنگکردنی داتا بە ستانداردی OpenAPI بەبێ قۆرخکاریی سیستەمی.',
          outcome: 'ژێرخانێکی پارێزراو، مۆدیولار و پشکنراو',
        },
        {
          step: '٠٣',
          title: 'خستنەگەڕی پلاتفۆرمی کارپێکردن',
          subtitle: 'بەرهەمە ستراتیژییەکانی نێو پۆرتفۆلیۆ',
          desc: 'جێبەجێکردنی سیستەمە بەهێزەکان وەک پەنجەرەی نیشتمانیی سنورەکان (Iraq NSW)، بەستەری ژیریی دەستکرد (AI Gate Iraq)، و شیکاریی کارپێکردن.',
          outcome: 'سڕینەوەی مامەڵەی کاغەزی و دەستپێکردنی خێرایی دیجیتاڵی',
        },
        {
          step: '٠٤',
          title: 'دامەزراندنی توانای نیشتمانیی بەردەوام',
          subtitle: 'خاوەندارێتی و متمانەی هەمیشەیی',
          desc: 'ڕاهێنانی کادیر و پسپۆڕانی عێراقی، چاودێریی پێوەرەکانی سەلامەتی و کارایی، و پاراستنی گەشەی سیستمەکان لەسەرووی گۆڕانکارییە کاتییەکان.',
          outcome: 'دەسەڵاتی دامەزراوەیی سەربەخۆ بۆ دەوڵەت و بازاڕ',
        },
      ],
    },
    careers: {
      badge: 'دەرفەتی کارکردن • Careers at IDG',
      heading: 'هەلی کار و بەشداریکردن لە بنیاتنانی عێراق',
      subheading:
        'بەشداربە لە داڕشتنی ژێرخانی دیجیتاڵی و سەروەریی تەکنەلۆژیی عێراق. ئێمە ئەندازیار، توێژەر، و سەرکردەی تەکنیکی خاوەن دیسپلین کۆدەکەینەوە.',
      cultureTitle: 'کەلتووری کارکردن لە دەروازەی دیجیتاڵیی عێراق',
      cultureDesc:
        'لە IDG، کارکردن تەنها وەزیفەیەکی ئاسایی نییە، بەڵکو بەرپرسیارێتییەکی مێژوویی و نیشتمانییە. ئێمە شوێنێکمان دروستکردووە کە ئاستی ئەندازیاریی بەرز، متمانە، و خاوەندارێتیی ڕاستەقینە پێوەری سەرەکین.',
      culturePillars: [
        {
          title: 'بەرپرسیارێتیی بەرز و کاریگەریی مەیدانی',
          desc: 'هەر سیستم یان مۆدیولێک دروستی دەکەیت، ڕاستەوخۆ کار دەکاتە سەر ئاسانکاریی ژیانی ملیۆنان هاووڵاتی، شەفافیەتی دارایی، یان خێرایی بازرگانیی عێراق.',
        },
        {
          title: 'دیسپلینی ئەندازیاری و ستانداردی جیهانی',
          desc: 'ئێمە سازش لەسەر کوالیتی کۆد، ئاسایشی داتا، یان نەبوونی قۆرخکاری ناکەین. سیستەمەکان بە ستانداردی نێودەوڵەتی بەڵام بە پێداویستیی عێراق دادەڕێژین.',
        },
        {
          title: 'متمانە، سەلامەتیی فکری و ڕەخنەی بنیاتنەر',
          desc: 'دیالۆگی ڕاستگۆیانە لەسەر کێشە تەکنیکییەکان هاندەدرێت. بڕیارەکان لەسەر بنەمای بەڵگە و شایستەیین، نەک پلەبەندیی بیرۆکراتی.',
        },
        {
          title: 'وەبەرهێنان لە بەهرەی نیشتمانیی عێراق',
          desc: 'ئامانجی گەورەمان ڕاهێنان و پێگەیاندنی نەوەیەکی نوێیە لە تەلارسازانی سۆفتوێر، زانایانی داتا، و پسپۆڕانی ئاسایش لە ناوخۆی عێراقدا.',
        },
      ],
      openingsTitle: 'هەلە کارییە بەردەستەکان (Open Positions)',
      openingsSubheading: 'ئەگەر ئامادەیت تواناکانت بخەیتە خزمەت پرۆژە نیشتمانییەکان، سەیری پێگە کراوەکانمان بکە:',
      openings: [
        {
          id: 'senior-sys-architect',
          title: 'تەلارسازی باڵای سیستەمە بەربڵاوەکان (Senior Distributed Systems Architect)',
          dept: 'ئەندازیاریی ژێرخان و داتا',
          location: 'بەغداد / بەشێوەی تێکەڵ (Hybrid)',
          type: 'تەواوکات (Full-time)',
          summary: 'دیزاینکردن و سەرپەرشتیکردنی تەلارسازیی APIـیە سەروەرەکان و سیستەمی بەرزی بەردەستبوون بۆ پلاتفۆرمە نیشتمانییەکان.',
          responsibilities: [
            'داڕشتنی ژێرخانی سەروەری داتا و مایکرۆسێرڤسی خێرا بە ستانداردەکانی OpenAPI',
            'دڵنیابوونەوە لە تێپەڕبوونی ملیۆنان تراکشن بە کەمترین تاخیربوون و بەرزترین پاوەربەندی',
            'پشکنینی کۆد و دیزاینکردنی ڕێساکانی بەستنەوەی سیستەمە دێرینەکان بە پلاتفۆرمی نوێ',
          ],
          requirements: [
            'ئەزموونی سەلمێنراو لە سیستەمە بەربڵاوەکان (Go, Rust, TypeScript یان Java)',
            'شارەزایی لە کلاودی ناوخۆیی، Kubernetes، و تەکنەلۆژیاکانی پەیامگەیاندنی خێرا (Kafka/NATS)',
            'شارەزایی لە مۆدێلەکانی شیکردنەوەی داتا و ستانداردەکانی ئاسایشی زانیاری',
          ],
        },
        {
          id: 'security-lead',
          title: 'سەرپەرشتیاری ئاسایشی زانیاری و سەروەریی داتا (Cybersecurity & Data Sovereignty Lead)',
          dept: 'ئاسایش و دڵنیایی کارپێکردن',
          location: 'بەغداد',
          type: 'تەواوکات (Full-time)',
          summary: 'سەرپەرشتیکردنی تەواوی پرۆتۆکۆلەکانی پاراستنی داتای نیشتمانی، مۆدێلی Zero-Trust و تاقیکردنەوەی دزەکردن.',
          responsibilities: [
            'داڕشتنی چوارچێوەی ئاسایشی داتا و کلیلەکانی ڕەمزاندن لە ناوەندە داتاکانی عێراقدا',
            'بەڕێوەبردنی تیمی وەڵامدانەوەی ڕووداوە ئەلیکترۆنییەکان (Incident Response)',
            'پشکنینی ئاسایشی ئەپڵیکەیشنەکان (SAST/DAST) و ڕاهێنانی ئەندازیاران',
          ],
          requirements: [
            'ئەزموونی کەمترین ٥ ساڵ لە ئاسایشی سایبەری و پاراستنی ژێرخانی هەستیار',
            'بڕوانامەی دانپێدانراوی وەک CISSP، OSCP، یان هاوتاکانی',
            'ئاشنایی تەواو بە یاساکانی سەروەریی داتا و پاراستنی زانیاریی کەسی',
          ],
        },
        {
          id: 'institutional-pm',
          title: 'بەڕێوەبەری بەرهەمی دامەزراوەیی (Institutional Product Manager - Public Sector)',
          dept: 'بەڕێوەبردنی بەرهەم و ستراتیژ',
          location: 'بەغداد / هەولێر',
          type: 'تەواوکات (Full-time)',
          summary: 'پردی پەیوەندیی تەکنیکی و کارگێڕی لەنێوان وەزارەتەکان، دامەزراوە بازرگانییەکان، و تیمە ئەندازیارییەکانی IDG.',
          responsibilities: [
            'وەرگێڕانی داواکارییە بیرۆکراتییە ئاڵۆزەکان بۆ تایبەتمەندییە تەکنیکییە ڕوونەکان',
            'بەڕێوەبردنی نەخشەی ڕێگای بەرهەم بۆ پرۆژەکانی وەک پەنجەرەی یەکگرتووی سنورەکان (NSW)',
            'پێوانەکردنی بەردەوامی کاتی جێبەجێکردن و ئاسانکاری بۆ بەکارهێنەرانی کۆتایی',
          ],
          requirements: [
            'ئەزموونی کارکردن لەسەر بەرهەمە دیجیتاڵییە قەبارە گەورەکان یان سیستەمی حکومی',
            'توانای پەیوەندیکردنی بەهێز بە زمانی کوردی، عەرەبی، و ئینگلیزی',
            'تێگەیشتنی قووڵ لە پرۆسەکانی لۆجستی، دارایی یان خزمەتگوزارییە گشتییەکان',
          ],
        },
        {
          id: 'ai-nlp-engineer',
          title: 'ئەندازیاری توێژینەوەی زیرەکی دەستکرد و زمان (AI & NLP Research Engineer)',
          dept: 'لێکۆڵینەوە و ژیریی دەستکرد (AI Gate)',
          location: 'تێکەڵ (Hybrid)',
          type: 'تەواوکات (Full-time)',
          summary: 'گەشەپێدانی مۆدێلە زمانەوانییە تایبەتەکانی کوردی و عەرەبی بۆ دەرهێنانی داتای فەرمی و شیکاریی بەڵگەنامە حکومییەکان.',
          responsibilities: [
            'ڕاهێنانی مۆدێلەکانی فێربوونی قووڵ لەسەر کۆکراوەی داتای کوردی (سۆرانی/بادینی) و عەرەبیی عێراقی',
            'دروستکردنی سیستەمی پشکنینی خۆکاری بەڵگەنامە بازرگانی و گومرگییەکان',
            'پەیڕەوکردنی پرەنسیپەکانی ڕوونکردنەوەی بڕیاری ژیریی دەستکرد و بێلایەنیی داتا',
          ],
          requirements: [
            'شارەزایی لە PyTorch، HuggingFace، و مۆدێلەکانی Transformer و LLM',
            'ئەزموون لە پاککردنەوە و دەستنیشانکردنی داتای دەقی نائاسایی و پەڕاوی فەرمی',
            'بڕوانامەی پەیوەندیدار لە زانستی کۆمپیوتەر، بیرکاری، یان زمانەوانیی کۆمپیوتەری',
          ],
        },
        {
          id: 'trade-ops-analyst',
          title: 'شیکەرەوەی کارپێکردن و پەنجەرەی سنورەکان (Cross-Border Operations & Single Window Analyst)',
          dept: 'کارپێکردن و دەروازە بازرگانییەکان (Iraq NSW)',
          location: 'بەسرە / بەغداد',
          type: 'تەواوکات (Full-time)',
          summary: 'شیکردنەوەی خێرایی مامەڵەکانی گومرگ و دەروازە ئاوی و وشکانییەکان و دڵنیابوونەوە لە کەمبوونەوەی گرژی لە دەروازەکان.',
          responsibilities: [
            'بەدواداچوونی نەخشەی ڕێڕەوی بار و بەڵگەنامە گومرگییەکان لە مەنفەزە سەرەکییەکاندا',
            'دەستنیشانکردنی کێشە و ڕێگرییە مەیدانییەکان و ناردنی پێشنیاری تەکنیکی بۆ تیمەکان',
            'پشتیوانیکردنی کۆمپانیاکانی گواستنەوە لە تێپەڕبوون بە سیستەمی دیجیتاڵی',
          ],
          requirements: [
            'شارەزایی لە زنجیرەی دابینکردن، پرۆسەی گومرگی، یان لۆجستی نێودەوڵەتی',
            'توانای لێکۆڵینەوەی مەیدانی و کارکردن لەگەڵ تیمی فرەپسپۆڕ',
            'شارەزایی لە شیکردنەوەی داتای سەرەتایی بە ئامرازە ستانداردەکان',
          ],
        },
      ],
      applyTitle: 'پێشکەشکردنی داواکاری و سیڤی (Submit Application)',
      applyDesc:
        'دەتوانیت بۆ هەریەک لەم هەلە کارییانەی سەرەوە یان وەک داواکارییەکی گشتی (General Application) سیڤییەکەت بنێریت. تیمی سەرچاوە مرۆییەکانی IDG بەوردی هەڵسەنگاندن دەکەن.',
      form: {
        positionLabel: 'پێگەی دیاریکراو بۆ داواکاری',
        generalPositionOption: 'داواکاریی گشتی بۆ بەهرەمەندان (General Talent Application)',
        fullNameLabel: 'ناوی چواری و نازناو',
        fullNamePlaceholder: 'ناوی تەواوت وەک لە ناسنامەدا هاتووە',
        emailLabel: 'ئیمەیڵی پەیوەندیکردن',
        emailPlaceholder: 'you@example.com',
        phoneLabel: 'ژمارەی مۆبایل',
        phonePlaceholder: '+964 7XX XXX XXXX',
        portfolioLabel: 'بەستەری پڕۆفایلی پیشەیی (LinkedIn / GitHub / Portfolio)',
        portfolioPlaceholder: 'https://linkedin.com/in/yourprofile',
        resumeLabel: 'هاوپێچکردنی سیڤی (CV / Resume)',
        resumePlaceholder: 'فایلی PDF یان Word (تا 10 مێگابایت)',
        coverNoteLabel: 'نامەی پاڵنەر یان پوختەی ئەزموون (Motivation / Summary)',
        coverNotePlaceholder: 'بۆچی دەتەوێت لەگەڵ IDG کار بکەیت و چۆن دەتوانیت بەشداری بکەیت لە دروستکردنی سیستەمەکان؟',
        submitBtn: 'ناردنی داواکاریی دامەزراندن',
        submittingBtn: 'لە جێبەجێکردندایە...',
        successTitle: 'داواکارییەکەت بە سەرکەوتوویی وەرگیرا',
        successMsg: 'سوپاس بۆ پێشکەشکردن. تیمی سەرچاوە مرۆییەکانی IDG دوای لێکۆڵینەوە لە پڕۆفایلەکەت، لە ئەگەری گونجاوی پەیوەندیت پێوە دەکەن.',
        resetBtn: 'پێشکەشکردنی داواکارییەکی تر',
      },
      banner: {
        ku: '⚠️ تێبینی گرنگ: ئێمە ئێستا لە قۆناغی سەرەتایی پێش-وەبەرهێنانداین (Pre-Seed). ئەم پۆستانە دوای تەواوبوونی خولی سەرمایە (Seed Round) دەبنە خاوەن مووچەی کێبڕکێکار. ئێستا ئێمە بۆ هاوبەشی ستراتیژی و ڕێککەوتنی پشک (Equity Partnership) و هاودامەزرێنەر پێشوازی دەکەین.',
        ar: '⚠️ ملاحظة مهمة: نحن حالياً في مرحلة التأسيس المبكرة (Pre-Seed). ستتم توظيف هذه المناصب برواتب تنافسية بعد جولة التمويل. نحن نرحب حالياً بالشراكة الاستراتيجية ونظام الحصص (Equity Partnership) والشركاء المؤسسين.',
        en: '⚠️ Important Note: We are currently in early-stage pre-seed. These roles will convert to competitive salaries post-funding. We currently welcome strategic co-founders and equity-based partnerships.',
      },
      compensation: {
        ku: 'پشک (Equity) + مووچەی کێبڕکێکار دوای دابینکردنی سەرمایە',
        ar: 'حصص (Equity) + راتب تنافسي بعد جولة التمويل',
        en: 'Equity + Competitive Salary Post-Funding',
      },
      ctaButton: {
        ku: 'ڕێککەوتن وەک بنیاتنەری هاوبەش',
        ar: 'التقديم كشريك مؤسس',
        en: 'Apply as Co-founder / Partner',
      },
      earlyStageNote: {
        ku: 'دەرفەتێکی دەگمەن بۆ ئەوەی ببیتە بەشێک لە دروستکردنی ژێرخانی دیجیتاڵی نیشتمانی لە قۆناغی سفرەوە.',
        ar: 'فرصة نادرة لتكون جزءاً من بناء البنية التحتية الرقمية الوطنية من نقطة الصفر.',
        en: 'A rare opportunity to build national digital infrastructure from ground zero.',
      },
      postFundingNote: {
        ku: 'هەموو ئەندامانی سەرەتایی خاوەنی پشکی فەرمی دەبن لە کۆمپانیا لەگەڵ گرێبەستی یاسایی پارێزراو.',
        ar: 'يحصل جميع الأعضاء الأوائل على حصص ملكية موثقة قانونياً في الشركة.',
        en: 'All early core contributors receive legal equity vesting agreements.',
      },
    },
    contactSection: {
      badge: 'پەیوەندیی دامەزراوەیی • Institutional Channel',
      heading: 'پەیوەندیمان پێوە بکەن (Contact Us)',
      subheading:
        'دەروازەی پەیوەندیی فەرمی بۆ گفتوگۆی ستراتیژی، هاوبەشیی تەکنیکی، و پرسیارە دامەزراوەییەکان.',
      introText:
        'ئێمە پێشوازی لە پەیوەندیی وەزارەتەکان، دەستە سەربەخۆکان، بانکەکان، کۆمپانیاکانی کەرتی تایبەت، ناوەندە ئەکادیمییەکان و نوێنەرانی تەکنەلۆژیا دەکەین. فۆرمی خوارەوە پڕبکەرەوە بۆ دەستپێکردنی پەیوەندییەکی فەرمی و بەڵگەمەند.',
      partnershipNote:
        'هەموو پەیوەندییەک لەسەر بنەمای پێداویستیی ڕاستەقینەی مەیدانی، بێلایەنیی دامەزراوەیی و پاراستنی سەروەریی نیشتمانی هەڵدەسەنگێنرێت.',
      hqLabel: 'بارەگای سەرەکی',
      hqValue: 'بەغداد، عێراق • ناوچەی کارسازی و بازرگانی',
      emailLabel: 'ئیمەیڵی فەرمیی پەیوەندی',
      emailValue: 'contact@idggov.tech',
      hoursLabel: 'کاتی وەڵامدانەوە',
      hoursValue: 'یەک ڕۆژی کارکردن (یەکشەممە تا پێنجشەممە، ٨:٣٠ تا ١٦:٣٠)',
      channelsTitle: 'کەناڵە تایبەتمەندەکانی پەیوەندی',
      channelsDesc: 'بۆ بابەتە پەیوەندیدارەکان بە پۆرتفۆلیۆ، گومرگ یان ژیریی دەستکرد دەتوانن لە بابەتی فۆرمەکەدا دیاری بکەن.',
      form: {
        nameLabel: 'ناو و ناونیشانی کەسی پەیوەندیکار',
        namePlaceholder: 'ناوی تەواو، فەرمانگە یان کۆمپانیا',
        emailLabel: 'ناونیشانی ئیمەیڵی فەرمی',
        emailPlaceholder: 'name@institution.gov.iq یان name@company.iq',
        subjectLabel: 'بابەتی پەیوەندی',
        subjectPlaceholder: 'پوختەی بابەت (هاوبەشی، کێشەی تەکنیکی، داواکاریی فەرمی)',
        messageLabel: 'پەیام و ڕوونکردنەوەی داواکاری یان دەرفەتی هاوبەشی',
        messagePlaceholder: 'تکایە زانیاری لەسەر کێشەی سەلمێنراو یان دەرفەتی هاوبەشیی پێشنیازکراو بنووسە...',
        submitBtn: 'ناردنی پەیام',
        submittingBtn: 'لە ناردندایە...',
        successTitle: 'پەیامەکەت گەیشت',
        successMsg: 'سوپاس بۆ پەیوەندیکردنت. تیمی حوکمڕانیی IDG بەزوویی پێداچوونەوە دەکات و پەیوەندیت پێوە دەکاتەوە.',
        resetBtn: 'ناردنی پەیامێکی تر',
      },
    },
    faq: {
      badge: 'پرسیارە باوەکان و ڕوونکردنەوەی حوکمڕانی',
      heading: 'پرسیارە باوەکانی لایەنە پەیوەندیدارەکان',
      subheading:
        'ڕوونکردنەوەی فەرمی و بەڵگەدار دەربارەی حوکمڕانی، ژێرخانی دیجیتاڵی، سەروەریی داتا، و تەلارسازیی پۆرتفۆلیۆی بەرهەمەکانی دەروازەی دیجیتاڵیی عێراق (IDG).',
      searchPlaceholder: 'گەڕان لە پرسەکانی حوکمڕانی، داتا، بەرهەمەکان یان هاوبەشییەکان...',
      allCategory: 'هەموو پرسەکان',
      categories: {
        governance: 'حوکمڕانی و کۆمپانیای دایک',
        infrastructure: 'ژێرخان و سەروەریی داتا',
        products: 'پۆرتفۆلیۆ و بەرهەمەکان (NSW)',
        partnerships: 'مۆدێلی هاوبەشی و جێبەجێکردن',
      },
      items: [
        {
          id: 'faq-1',
          category: 'governance',
          question: 'ڕۆڵی IDG وەک کۆمپانیای دایک چییە بەراورد بە بەرهەمەکانی وەک AI Gate Iraq و ئەکادیمیای زانا (ZaNa Academy)؟',
          answer:
            'IDG کۆمپانیای دایک و ستۆدیۆی سەروەریی وەبەرهێنانی تەکنەلۆژییە. بەرهەمەکانی وەک "AI Gate Iraq" (بەرهەمی ٠٠١)، "ئەکادیمیای زانا (ZaNa Academy)"، و "Green Belt" بەرهەمی تایبەتمەندن لەژێر بەڕێوەبردن و حوکمڕانیی ڕاستەوخۆی IDG. بەرهەمەکان قەوارەی سەربەخۆ نین، بەڵکو میکانیزمی تەکنەلۆژین بۆ جێبەجێکردنی ئەرکە ستراتیژییەکان لەژێر ستانداردە یەکگرتووەکانی IDG.',
          highlights: ['کۆمپانیای دایک و ستۆدیۆی وەبەرهێنان', 'حوکمڕانیی یەکگرتوو', 'یەکپارچەیی تەلارسازی'],
        },
        {
          id: 'faq-2',
          category: 'infrastructure',
          question: 'چۆن IDG ئاسایش و سەروەریی داتای دامەزراوەیی لە ناوخۆی عێراق مسۆگەر دەکات؟',
          answer:
            'تەواوی کۆگاکردن، پڕۆسێسکردن و شیتاڵکردنی داتای هەستیار لەناو سەنتەرەکانی داتای سەروەر لە ناوخۆی عێراق ئەنجام دەدرێت. ئێمە ڕێگریی تەواو لە هەناردەکردنی داتا بۆ دەرەوە دەکەین لە ڕێگەی تەلارسازیی Zero-Trust، کۆدکردنی دوولایەنەی پێشکەوتوو (AES-256)، و تۆماری audit trailـی نەگۆڕ. هیچ داتایەکی دامەزراوەیی عێراقی ناخرێتە بەردەست سێرڤەری گشتیی بیانی.',
          highlights: ['سەروەریی ناوخۆیی داتا', 'پرۆتۆکۆڵی Zero-Trust', 'کۆدکردنی بەرزترین ئاست'],
        },
        {
          id: 'faq-3',
          category: 'products',
          question: 'پەنجەرەی نیشتمانی عێراق بۆ بازرگانی (Iraq NSW) چییە و چۆن کارکردنی دەروازە سنورییەکان دەگۆڕێت؟',
          answer:
            'Iraq NSW دەستپێشخەرییەکی ستراتیژیی حوکمڕانیکراوە لەلایەن IDG بۆ یەکخستنی تەواوی بەستەرەکانی گومرگ، بەندەرەکان، وەزارەتە پەیوەندیدارەکان و بانکی ناوەندی لە یەک پلاتفۆرمی کارپێکردندا. ئەم سیستەمە کاتی ترانزێت و پاکتاوی کاڵا لە چەندین هەفتەوە کەم دەکاتەوە بۆ خوار ٤٨ کاتژمێر و شەفافیەتی تەواو بۆ داهاتی گشتی دەستەبەر دەکات.',
          highlights: ['یەکخستنی دەروازە سنورییەکان', 'کەمکردنەوەی کات بۆ خوار ٤٨ کاتژمێر', 'شەفافیەتی داهاتی گشتی'],
        },
        {
          id: 'faq-4',
          category: 'infrastructure',
          question: 'فەلسەفەی IDG بۆ جێبەجێکردنی ژیریی دەستکرد (Applied AI) لە کەرتی دامەزراوەییدا چییە؟',
          answer:
            'ئێمە ژیریی دەستکرد وەک ترێند یان بانگەشەی کاتی بەکارناهێنین؛ بەڵکو وەک ژیریی دەستکردی کارپێکراو (Applied AI) لەسەر کێشەی حەقیقی و سەلمێنراو دایدەمەزرێنین. مۆدێلەکانمان تایبەتمەندن بە شیتاڵکردنی وردی زمانەکانی کوردی و عەرەبی لە بەڵگەنامە یاسایی و کارگێڕییەکان و دۆزینەوەی ئۆتۆماتیکیی ناتەبایییە دارایییەکان.',
          highlights: ['چارەسەری کێشەی سەلمێنراو', 'تایبەتمەند بە زمانی کوردی و عەرەبی', 'ڕەتکردنەوەی ترێندی کاتی'],
        },
        {
          id: 'faq-5',
          category: 'governance',
          question: 'میکانیزمی "خاوەنی بەرپرسیار" (Accountable Owner) لە پڕۆژەکانی IDG چۆن پیادە دەکرێت؟',
          answer:
            'هیچ چارەسەرێکی تەکنەلۆژی دەستپێناکرێت تاوەکو کێشەی سەلمێنراو و خاوەنی بەرپرسیار دیاری نەکرێت. هەر پڕۆژەیەک دەبێت خاوەنێکی ڕوونی هەبێت کە بەرپرسیار بێت لە دەرئەنجام، ئاسایشی زانیاری، و بەردەوامیی کارپێکردن بەپێی ستانداردە دامەزراوەیییەکان.',
          highlights: ['بەرپرسیارێتیی ڕوون', 'کێشەی سەلمێنراو پێش تەکنەلۆژیا', 'پێوەری پێوانەکراوی سەرکەوتن'],
        },
        {
          id: 'faq-6',
          category: 'partnerships',
          question: 'چۆن دەزگاکانی حکومەت یان کەرتی تایبەت دەتوانن هاوبەشی لەگەڵ IDG دەستپێبکەن؟',
          answer:
            'هاوبەشی لەگەڵ IDG لە ڕێگەی شیکاریی کەلێنە دامەزراوەییەکان و داواکاریی فەرمی دەستپێدەکات. ئێمە کار لەسەر بنەمای هاوبەشیی ستراتیژی (PPP) و بنیاتنانی توانای درێژخایەن دەکەین بە مەرجی گواستنەوەی تەواوی مەعریفە و زانست بۆ کادیر و تیمە ناوخۆیییەکان، نەک بەستنەوەیان بە سیستەمی دەرەکی.',
          highlights: ['گواستنەوەی تەواوی مەعریفە', 'هاوبەشیی درێژخایەن (PPP)', 'سەروەریی کادیری نیشتمانی'],
        },
      ],
      stillHaveQuestions: 'پرسیاری زیاترت هەیە دەربارەی حوکمڕانی یان پۆرتفۆلیۆ؟',
      supportDesc: 'تیمی پەیوەندییە فەرمییەکانی IDG ئامادەیە بۆ وەڵامدانەوەی پێداویستییە دامەزراوەیییەکان.',
      contactBtn: 'پەیوەندیی فەرمی لەگەڵ تیمی حوکمڕانی',
    },
    backToTop: 'گەڕانەوە بۆ سەرەوە',
    footer: {
      rights: '© ٢٠٢٦ دەروازەی دیجیتاڵیی عێراق (IDG). مافی خاوەندارێتیی پۆرتفۆلیۆ پارێزراوە.',
      parentDesc:
        'IDG کۆمپانیایەکی دایکی سەربەخۆیە و پێشەنگی گۆڕینی ئاڵۆزییەکانە بۆ توانایەکی دامەزراوەیی لە عێراقدا لە ڕێگەی حوکمڕانی، داتا، و تەکنەلۆژیای پارێزراو.',
      links: {
        about: 'دەربارەی ئێمە',
        principles: 'بنەماکانی کۆمپانیا',
        governance: 'حوکمڕانیی دارایی و داتا',
        careers: 'هەلی کار',
        contact: 'پەیوەندیی فەرمی',
        security: 'سەروەریی زانیاری و ئاسایش',
        faq: 'پرسیارە باوەکان',
      },
      newsletter: {
        title: 'ناوەندی زانیاری و نوێکارییە خولییەکان',
        description:
          'ئیمەیڵی دامەزراوەیی خۆت تۆمار بکە بۆ وەرگرتنی ڕاپۆرتە فەرمییەکان، شیارییە ستراتیژییەکان، و پێشکەوتنەکانی ژێرخانی دیجیتاڵیی IDG.',
        placeholder: 'ئیمەیڵی فەرمیی دامەزراوەکەت (نموونە: name@institution.gov.iq)',
        submitBtn: 'بەشداریکردن لە نوێکارییەکان',
        submittingBtn: 'تۆمارکردنی ئیمەیڵ...',
        successTitle: 'بە سەرکەوتوویی تۆمار کرا',
        successMsg: 'سوپاس، ئیمەیڵی دامەزراوەییەکەت تۆمار کرا. پوختەی ڕاپۆرتە ستراتیژییەکان و نوێکارییە خولییەکان دەنێردرێنە ناونیشانەکەت.',
        notice: 'تێبینی: ئەم کەناڵە تەنها بۆ ئیمەیڵە فەرمی و دامەزراوەیییەکان بەردەستە و بە تەواوی پارێزراوە.',
        invalidEmail: 'تکایە ئیمەیڵێکی دامەزراوەیی دروست بنووسە.',
      },
    },
    help: {
      tutorials: {
        title: 'ڕاهێنان و فێرکارییەکان',
        subtitle: 'فێرکارییە ڤیدیۆییەکانی چۆنیەتی کارکردن لەگەڵ سیستەمەکان و ڕێنمایی ڕاهێنانی ئەندازیاران.',
        items: [
          {
            id: 'intro',
            duration: '14:20',
            badge: 'ناساندن',
            title: 'ناساندنی تەلارسازیی سەروەریی دیجیتاڵی لە عێراق',
            description: 'ڕوونکردنەوەی فەلسەفەی کارکردن، بنەکانی پۆرتفۆلیۆ، و ئەرکی سەرەکی لە IDG.',
            videoUrl: 'https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ',
          },
          {
            id: 'nsw',
            duration: '09:45',
            badge: 'پلاتفۆرم',
            title: 'چۆنیەتی بەکارهێنانی دەروازەی NSW بۆ گومرگ و دەروازەکان',
            description: 'فێرکارییەکی هەنگاو بە هەنگاو بۆ دامەزراوە هاوبەشە بازرگانییەکان.',
            videoUrl: 'https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ',
          },
          {
            id: 'ai-oversight',
            duration: '11:10',
            badge: 'ژیریی دەستکرد',
            title: 'پێوەرەکانی شەفافیەت و چاودێریی مرۆیی لە مۆدێلەکانی AI',
            description: 'شیکردنەوەی چوارچێوەی بەڵگەنەویستی و بەرپرسیارێتیی ئەندازیاری لە IDG.',
            videoUrl: 'https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ',
          },
        ],
      },
    },
    team: {
      title: 'تیمی ئێمە',
      subtitle: 'سەرکردایەتیی لێهاتوو و ئەندازیارانی پێشەنگ لە بونیادنانی سەروەریی دیجیتاڵیی عێراق.',
      leadership: 'دەستەی سەرکردایەتی و بەڕێوەبردن',
      leadershipDesc: 'بنیاتنەران و سەرکردە جێبەجێکارەکان کە ستراتیژی تەکنەلۆژیای نیشتمانی ڕابەرایەتی دەکەن.',
      coreTeam: 'تیمی سەرەکی و ئەندازیاری',
      coreTeamDesc: 'کادیرانی باڵای ئەندازیاریی سۆفتوێر، ئاسایشی سایبەری، ژێرخان و بەرهەمهێنان.',
      joinUs: 'بەشداربە لە گەشتەکەمان',
      joinUsDesc: 'ئایا دەتەوێت کاریگەرییەکی مانادار لە داهاتووی دیجیتاڵیی عێراقدا دروست بکەیت؟',
      viewPositions: 'بینینی دەرفەتە کراوەکان',
      departments: {
        all: 'هەموو بەشەکان',
        leadership: 'سەرکردایەتی',
        engineering: 'ئەندازیاری و ژێرخان',
        product: 'بەرهەم و دیزاین',
        operations: 'کارگێڕی و هاوبەشی',
        communications: 'پەیوەندییەکان',
      },
      labels: {
        bio: 'کورتەی ژیاننامە',
        expertise: 'بوارەکانی پسپۆڕی',
        connect: 'پەیوەندی و تۆڕە کۆمەڵایەتییەکان',
        viewProfile: 'بینینی پرۆفایل',
        backToTeam: 'گەڕانەوە بۆ لیستی تیم',
        keyFocus: 'تەرکیزی سەرەکی',
        achievements: 'دەستکەوتە سەرەکییەکان',
      },
    },
  },
  // REVIEW: ar-native — verify naturalness
  ar: {
    companyName: 'بوابة العراق الرقمية (IDG)',
    parentBadge: 'الشركة الأم واستوديو المشاريع التكنولوجية',
    tagline: 'تحويل التعقيد إلى قدرة مؤسسية موثوقة',
    nav: {
      home: 'الرئيسية',
      about: 'من نحن',
      services: 'الخدمات',
      portfolio: 'المحفظة والمنتجات',
      philosophy: 'فلسفة العمل',
      governance: 'الحوكمة والانضباط',
      stakeholders: 'الجهات المستهدفة',
      vision: 'رؤية ٢٠٣٥',
      careers: 'الوظائف',
      team: 'فريقنا',
      contact: 'التواصل الرسمي',
      faq: 'الأسئلة الشائعة',
      blog: 'المدونة',
      insights: 'الرؤى والتحليلات',
      news: 'الأخبار',
    },
    home: {
      impactiqBannerTitle: '⭐ جديد: منصة ImpactIQ متاحة الآن — قياس الأثر الوطني السيادي',
      impactiqBannerCta: 'عرض المنتج',
    },
    hero: {
      headline: 'نحوّل التعقيد إلى قدرة تشغيلية موثوقة.',
      subhead:
        'بوابة العراق الرقمية (IDG) هي شركة أم عراقية سيادية، تدمج الاستراتيجية، الحوكمة، البيانات، والذكاء الاصطناعي ضمن منظومات تشغيلية آمنة. واضحة في الحوكمة، متفاعلة في البنية المعمارية، مسؤولة في التنفيذ، ومبنية للاستدامة.',
      exploreBtn: 'استعراض المحفظة',
      visionBtn: 'رؤية ٢٠٣٥',
      stats: {
        stat1Label: 'الملكية والسيادة',
        stat1Val: '١٠٠٪ عراقية',
        stat2Label: 'النموذج المؤسسي',
        stat2Val: 'الشركة الأم',
        stat3Label: 'أساس البنية التحتية',
        stat3Val: 'سيادة البيانات والأمن',
      },
    },
    purpose: {
      heading: 'ردم الفجوة بين الهدف الاستراتيجي والقدرة التشغيلية',
      subheading:
        'يمتلك العراق رأس المال والمواهب. وُجدت (IDG) لإعادة هيكلة الصلاحيات، البيانات، والخدمات لتمكين المؤسسات من العمل بأعلى درجات الموثوقية.',
      pillars: [
        {
          title: 'التناغم',
          desc: 'ربط الأطراف المجزأة والمعلومات المشتتة داخل منظومة متماسكة ومفهومة.',
        },
        {
          title: 'القدرة',
          desc: 'بناء القدرة التقنية والمؤسسية اللازمة لرفع الكفاءة والاستقلال التشغيلي.',
        },
        {
          title: 'الثقة',
          desc: 'غرس الأمان، والمسؤولية القانونية، والشفافية في تصميم الأنظمة وتسليمها.',
        },
        {
          title: 'الاستدامة',
          desc: 'ضمان بقاء المعرفة والبنية التحتية مستمرة فوق المشاريع الفردية والتقلبات المؤقتة.',
        },
      ],
    },
    philosophy: {
      heading: 'فلسفة منتجاتنا',
      subheading:
        'يتم تصميم كل منتج تحت مظلة IDG وفق معايير صارمة للسيادة والمسؤولية والأدلة التشغيلية.',
      items: [
        {
          title: 'الأثر الوطني',
          desc: 'نمنح الأولوية للمشاكل المؤسسية التي يعزز حلها القدرة الاقتصادية والسيادة الرقمية للبلاد.',
        },
        {
          title: 'القابلية للتوسع',
          desc: 'نخطط للنمو والتوسع عبر مختلف القطاعات والهيئات الإدارية في عموم العراق.',
        },
        {
          title: 'الأمان والمرونة',
          desc: 'أثناء التصميم، نحدد الصلاحيات بدقة (Least Privilege) ونضع خطط استمرارية التشغيل.',
        },
        {
          title: 'التكامل التشغيلي',
          desc: 'نعتمد الواجهات الموثقة (Documented APIs) والمعايير الصناعية المفتوحة لضمان الربط السريع.',
        },
      ],
    },
    portfolio: {
      headerTitle: 'المحفظة الاستثمارية والهندسة المؤسسية',
      headerDesc:
        'بوابة العراق الرقمية (IDG) هي الشركة الأم الدائمة والعلامة السيادية. منتجات المحفظة هي أصول خاضعة لإدارة IDG، ولكن لكل منها هوية سوقية وتشغيلية مستقلة.',
      heading: 'أصول المحفظة الخاضعة للحوكمة',
      subheading:
        'بوابة العراق الرقمية (IDG) هي الشركة الأم الدائمة والعلامة التجارية السيادية. المنتجات هي أصول المحفظة المحكومة من قبل IDG وتتمتع بهوية تشغيلية مستقلة في السوق.',
      visitWebsiteBtn: 'زيارة الموقع ➔',
      openExternalPlatform: 'فتح المنصة المستقلة',
      standalonePlatforms: 'المنصات المستقلة',
      schoolsStudentsAudience: 'للمدارس والطلاب',
      zaNaUrl: 'https://zana.idggov.tech',
      impactIQ: {
        code: 'IDG-PRD-004',
        name: 'ImpactIQ',
        tagline: 'قياس الأثر الوطني السيادي الحقيقي',
        description: 'بنية تحتية سيادية لتحليل وقياس الأثر التنموي (MEAL Engine) تعتمد على الذكاء الاصطناعي الوطني، بضمان ١٠٠٪ لبقاء البيانات داخل العراق، لتحويل القرار من التقدير إلى علم الأدلة الرقمية الدقيقة.',
        status: 'active',
        badge: 'مبادرة استراتيجية',
        features: ['التقييم التنبؤي للأثر', 'سجلات التدقيق غير القابلة للتعديل', 'استضافة سيادية ١٠٠٪', 'محرك التقارير السيادي'],
        link: '/ar/products/impactiq',
        external: false,
        ctaType: 'internal',
      },
      zanaAcademy: {
        code: 'IDG-PRD-002',
        name: 'ZaNa Academy',
        tagline: 'منصة مستقلة للتعليم K-12',
        description: 'منصة مستقلة بالكامل لمدارس وطلاب — نظام تعليمي K-12 باللغة الكردية، مع المعلمين والمناهج وتتبع التعلّم. هذا المنتج منصة قائمة بذاتها ومنفصلة عن موقع IDG الرئيسي.',
        status: 'external',
        badge: 'منصة مستقلة',
        externalUrl: 'https://zana.idggov.tech',
        external: true,
        ctaType: 'external',
        audience: 'المدارس • الطلاب • المعلمون • أولياء الأمور',
      },
      governanceNote:
        'ملاحظة: يتمتع كل منتج بهويته السوقية الخاصة، بينما تبقى ملكية البيانات والأمن والتوجه الاستراتيجي خاضعة بنسبة ١٠٠٪ لحوكمة IDG السيادية.',
      cardInspectPrompt: 'انقر لمعاينة الملف المعماري والمجسم التفاعلي',
      modalLabels: {
        overview: 'نظرة عامة على البنية المعمارية',
        detailedDescription: 'التحليل التشغيلي والحل المؤسسي',
        provenProblem: 'المشكلة المثبتة (Proven Problem)',
        accountableOwner: 'الجهة المسؤولة والمحاسبة (Accountable Authority)',
        keyFeatures: 'الميزات والمواصفات الأساسية (Key Features)',
        targetAudience: 'الجهات المستهدفة والمستفيدة (Target Audience)',
        technologies: 'حزمة التقنيات المستخدمة (Tech Stack)',
        systemMockup: 'المجسم التفاعلي لواجهة النظام',
        provenImpact: 'الأثر الوطني المحقق',
        visitLiveSite: 'زيارة البوابة الرسمية للمنتج',
        close: 'إغلاق',
        governedBy: 'خاضع لحوكمة وسيادة IDG',
        operationalStatus: 'الحالة التشغيلية',
        sovereignNotice: 'جميع البيانات ومسارات اتخاذ القرار محصورة داخل خوادم سيادية محلية في جمهورية العراق.',
      },
      products: [
        {
          id: 'aigate',
          numBadge: 'المنتج ٠٠١',
          code: 'IDG-PRD-001',
          name: 'AI Gate Iraq',
          title: 'AI Gate Iraq',
          subtitle: 'بوابة الذكاء الاصطناعي للعراق',
          tagline: 'بوابة الذكاء الاصطناعي للعراق',
          problem: 'تجزؤ اتخاذ القرار الإداري وغياب منظومة تحليلات مثبتة بالأدلة في المؤسسات.',
          owner: 'مديرية التحليلات واتخاذ القرار بالأدلة (IDG Analytics Directorate)',
          description:
            'مبادرة الذكاء الاصطناعي للتحليل واتخاذ القرار المثبت بالأدلة تحت الإشراف البشري المحدد. النظام يبقي الإنسان في قلب اتخاذ القرار مع ضمان التدقيق الشامل.',
          detailedDescription:
            'منظومة AI Gate Iraq هي بنية تحتية محكومة للذكاء الاصطناعي التطبيقي، مصممة لإدارة القرارات المركبة وتدقيق الأدلة الإدارية في الوزارات والكيانات الكبرى. تضمن المنظومة السيادة الرقمية الكاملة عبر استضافة وتدريب النماذج محلياً داخل مراكز بيانات آمنة في العراق دون نقل للبيانات عبر الحدود. تتركز القدرات حول الاستخلاص الآلي للبيانات من الوثائق الرسمية، والمطابقة والتدقيق الجنائي للقرارات، مع بقاء الإقرار النهائي محصوراً بالمسؤول البشري حصراً.',
          keyFeatures: [
            'تحليل القرارات الإدارية بالأدلة الرقمية مع إلزامية المصادقة البشرية',
            'محرك قراءة وتدقيق الوثائق (OCR) ثنائي اللغة (عربي/كردي) بدقة ٩٩.٤٪',
            'استضافة محلية كاملة للنماذج داخل العراق بعزل تام (Air-Gapped)',
            'سجل تدقيق رقمي غير قابل للتلاعب مشفر بسلسلة البصمات (Audit Hash)',
          ],
          targetAudience: [
            'الوزارات والهيئات الحكومية والمؤسسات السيادية',
            'المصارف، البنك المركزي، والمؤسسات المالية والرقابية',
            'المؤسسات الصحية، شركات النقل، وإدارات العقود العامة',
          ],
          technologies: [
            'Next.js 15 App Router',
            'Python FastAPI Core',
            'Fine-Tuned KurdoArabic LLM',
            'PostgreSQL & pgvector',
            'Docker Air-Gapped Cluster',
            'mTLS & Zero-Trust Architecture',
          ],
          impact: 'تقليص الأخطاء الإدارية وتسريع صياغة القرارات المعقدة ببيانات مؤكدة بنسبة ٦٥٪.',
          status: 'قيد التشغيل الفعلي تحت حوكمة IDG',
          url: 'https://aigate.iq',
          link: '/ar/products/aigate',
          external: false,
          ctaType: 'internal',
          mockupType: 'aigate',
        },
        {
          id: 'zana',
          numBadge: 'المنتج ٠٠٢',
          code: 'IDG-PRD-002',
          name: 'ZaNa Academy',
          title: 'ZaNa Academy',
          subtitle: 'منصة مستقلة للتعليم K-12',
          tagline: 'منصة مستقلة للتعليم K-12',
          problem:
            'غالباً ما يتردد الطالب في طرح الأسئلة بسبب الخجل أمام زملائه. لا يستطيع أولياء الأمور تقديم المساعدة في الدروس. لا يستطيع المعلم متابعة كل طالب بشكل فردي. تبقى التساؤلات دون إجابات دقيقة.',
          owner: 'IDG Human Capital Division',
          description:
            'منصة مستقلة بالكامل لمدارس وطلاب — نظام تعليمي K-12 باللغة الكردية، مع المعلمين والمناهج وتتبع التعلّم. هذا المنتج منصة قائمة بذاتها ومنفصلة عن موقع IDG الرئيسي.',
          detailedDescription:
            'منصة تعلم ذكية ومعلم معزز بالذكاء الاصطناعي موجه لطلاب المدارس الكردية. تقرأ المناهج والكتب المعتمدة بالكردية السورانية، وتجيب عن الأسئلة بدقة من المصدر الرسمي، وتُعد تقارير دورية لأولياء الأمور، وتكيف وتيرة ومستوى التعلم لكل طالب.',
          keyFeatures: [
            'تسجيل الدخول — Firebase Auth للطلاب والإدارة',
            'الذكاء الاصطناعي — إجابة الأسئلة حصرياً من الكتب الرسمية',
            'محتوى منهجي كردي — كيمياء الصف ١٢ (٣٧١ صفحة)',
            'نظام حماية أمني — ٣ طبقات: UI + Route + Server',
            'تتبع التقدم — حفظ عبر D1 + Firebase',
            'تقارير أولياء الأمور — للمتابعة والإشراف الدوري',
          ],
          targetAudience: [
            'الطلاب — إمكانية طرح الأسئلة في أي وقت دون تردد',
            'أولياء الأمور — تقارير مبسطة وواضحة لمتابعة الأداء',
            'المعلمون — معرفة الطلاب الذين يحتاجون لدعم إضافي',
          ],
          technologies: [
            'React + TypeScript',
            'Firebase Auth',
            'Gemini File API',
            'Cloudflare D1',
            'UI + Route + Server',
          ],
          impact:
            'أول رفيق ذكي للتعليم الكردي يضمن تعليماً عادلاً ومكيفاً لكل طالب.',
          status: 'external',
          badge: 'منصة مستقلة',
          externalUrl: 'https://zana.idggov.tech',
          external: true,
          ctaType: 'external',
          audience: 'المدارس • الطلاب • المعلمون • أولياء الأمور',
          url: 'https://zana.idggov.tech',
          link: 'https://zana.idggov.tech',
          mockupType: 'zana',
        },
        {
          id: 'greenbelt',
          numBadge: 'المنتج ٠٠٣',
          code: 'IDG-PRD-003',
          name: 'Green Belt',
          title: 'Green Belt',
          subtitle: 'الحزام الأخضر',
          tagline: 'الحزام الأخضر',
          problem: 'هدر كميات هائلة من مخلفات الطعام وغياب الرصد البيئي الدقيق وضعف بنية الاقتصاد الدائري.',
          owner: 'نواة الاقتصاد الدائري والاستدامة (IDG Circular Economy Core)',
          description:
            'منصة ذكية للاقتصاد الدائري لجمع مخلفات الطعام، والتحويل إلى سماد، والمراقبة البيئية، وتتبع آثار التشجير بالبيانات الحية.',
          detailedDescription:
            'مشروع الحزام الأخضر (Green Belt) هو منصة متكاملة للاقتصاد الدائري والحلول البيئية الذكية في العراق. توظف المنظومة أجهزة استشعار إنترنت الأشياء (IoT) والخرائط الجغرافية والتحليل الفضائي لتتبع عمليات فرز وجمع المخلفات العضوية، وتحويلها إلى سماد عضوي معتمد، ومراقبة مؤشرات الرطوبة والحيوية لأكثر من ١٢٠ ألف شجرة في أحزمة المدن الخضراء للحد من التصحر والعواصف الترابية.',
          keyFeatures: [
            'نظام تتبع لوجستي آلي لدورات جمع المخلفات العضوية من المؤسسات والمطاعم',
            'شبكة مجسات بيئية (IoT) لقياس درجات الحرارة والرطوبة في مراحل التخمير',
            'خريطة جغرافية حية لمراقبة سلامة الأشجار المزروعة ومعدلات بقائها',
            'حساب دقيق لنسب عزل الكربون (CO2 Offset) وإنتاج الأسمدة الحيوية',
          ],
          targetAudience: [
            'أمانة بغداد والبلديات ومجالس المحافظات في عموم العراق',
            'وزارة البيئة، وزارة الزراعة، والمشاتل والمزارع الإنتاجية',
            'المؤسسات الدولية الداعمة لمشاريع مواجهة التغير المناخي',
          ],
          technologies: [
            'Edge IoT Telemetry Nodes',
            'GIS & PostGIS Spatial Engine',
            'MQTT Real-Time Broker',
            'TimescaleDB Sensor Logging',
            'Satellite Vegetation Analysis',
            'REST API Integration Gateway',
          ],
          impact: 'تحويل أطنان النفايات إلى موارد حيوية وتوثيق البيانات البيئية الوطنية وزراعة ١٢٠ ألف شجرة.',
          status: 'تنفيذ ميداني مستمر',
          url: 'https://greenbelt.iq',
          link: '/ar/products/greenbelt',
          external: false,
          ctaType: 'internal',
          mockupType: 'greenbelt',
        },
        {
          id: 'impactiq',
          numBadge: 'المنتج ٠٠٤',
          code: 'IDG-PRD-004',
          name: 'ImpactIQ',
          title: 'ImpactIQ',
          subtitle: 'قياس الأثر الوطني السيادي الحقيقي',
          tagline: 'قياس الأثر الوطني السيادي الحقيقي',
          problem: 'غياب القياس العلمي الموثق لأثر المشاريع التنموية والاعتماد على التقديرات غير الدقيقة مع ضعف المساءلة.',
          owner: 'مديرية قياس الأثر والتقييم المؤسسي السيادي (IDG MEAL Directorate)',
          description:
            'بنية تحتية سيادية لتحليل وقياس الأثر التنموي (MEAL Engine) تعتمد على الذكاء الاصطناعي الوطني، بضمان ١٠٠٪ لبقاء البيانات داخل العراق، لتحويل القرار من التقدير إلى علم الأدلة الرقمية الدقيقة.',
          detailedDescription:
            'منظومة ImpactIQ هي بنية تحتية وطنية متقدمة للرصد والتقييم والمساءلة والتعلم (MEAL Engine) معززة بالذكاء الاصطناعي السيادي. تضمن استضافة محلية كاملة للبيانات داخل جمهورية العراق بنسبة ١٠٠٪ وفق معايير ISO 27001، لتحويل القرارات الإدارية والاستثمارية إلى علم أدلة موثق غير قابل للتشكيك.',
          features: [
            'التقييم التنبؤي للأثر',
            'سجلات التدقيق غير القابلة للتعديل',
            'استضافة سيادية ١٠٠٪',
            'محرك التقارير السيادي',
          ],
          keyFeatures: [
            'التقييم التنبؤي للأثر (AI Predictive Impact Scoring)',
            'سجلات التدقيق غير القابلة للتعديل (Immutable Audit Trails)',
            'استضافة سيادية ١٠٠٪ داخل العراق (100% Sovereign Hosting)',
            'محرك التقارير السيادي باللغتين العربية والكردية (Sovereign NLP Reporting)',
          ],
          targetAudience: [
            'الوزارات والهيئات الحكومية المعنية بالمشاريع التنموية الكبرى',
            'المنظمات الدولية ووكالات التنمية والتمويل الإنمائي',
            'المؤسسات المالية والصناديق السيادية الاستثمارية',
          ],
          technologies: [
            'Sovereign Fine-Tuned NLP Models',
            'PostgreSQL & TimescaleDB',
            'Cryptographic Hash Ledger',
            'FastAPI & Next.js 15 App Router',
            'Air-Gapped Sovereign Infrastructure',
          ],
          impact: 'تحويل اتخاذ القرار من التقدير إلى علم الأدلة الرقمية الدقيقة مع بقاء البيانات داخل العراق ١٠٠٪.',
          status: 'active',
          badge: 'مبادرة استراتيجية',
          link: '/ar/products/impactiq',
          external: false,
          ctaType: 'internal',
          url: '/ar/products/impactiq',
          mockupType: 'aigate',
        },
        {
          code: 'IDG-PRD-005',
          id: 'gatewayai',
          name: 'Gateway AI',
          title: 'Gateway AI',
          subtitle: 'ذكاء الحدود والجمارك',
          numBadge: '5️⃣',
          tagline: 'البوابة الذكية الوطنية — ذكاء الحدود والجمارك',
          description: 'نظام ذكي وطني لإدارة الحدود والجمارك، يتكامل مع Gateway AI Iraq، والممرات الحدودية، والهوية الرقمية الوطنية، وتقنيات الذكاء الاصطناعي. يضمن 100% إقامة البيانات داخل الحدود الوطنية وفقاً لمعايير ISO 27001.',
          status: 'active',
          badge: 'مبادرة استراتيجية',
          features: [
            'محرك تقييم المخاطر بالذكاء الاصطناعي',
            'الرؤية الحاسوبية والذكاء الاصطناعي للأشعة',
            'التوأم الرقمي للمنافذ الحدودية',
            'سجل تدقيق غير قابل للتعديل (ISO 27001)',
            'التوافق الجمركي الفيدرالي-الإقليمي',
            'المراقبة والتقارير في الوقت الفعلي',
            'نافذة موحدة للتجار'
          ],
          link: '/ar/products/gateway-ai',
          external: false,
          ctaType: 'internal'
        },
      ],
      nsw: {
        badge: 'مبادرة استراتيجية وطنية — إصدار ١.٠',
        fullTitle: '🇮🇶 نافذة العراق الوطنية الموحدة للتجارة (Iraq NSW)',
        title: 'نافذة العراق الوطنية الموحدة للتجارة',
        subtitle: 'National Single Window for Trade — Iraq',
        problem: 'تجزؤ الأنظمة الجمركية، وغياب تكامل البيانات بين المنافذ الحدودية، وطول زمن التخليص (٤٨ ساعة)، وارتفاع تكلفة البيان الواحد (١,٠٠٠ دولار)، وضعف الشفافية الجمركية (١٠٪)، وهدر الإيرادات العامة.',
        architecture: 'نافذة العراق الوطنية الموحدة للتجارة (Iraq NSW) هي منصة سيادية لتوحيد المنافذ الحدودية والجمارك والمصارف والجهات التنظيمية. الهدف: تقليص زمن التخليص من ٤٨ ساعة إلى ٧ ساعات، وخفض التكلفة من ١,٠٠٠ دولار إلى ٤٠٠ دولار، ورفع الشفافية من ١٠٪ إلى أكثر من ٩٠٪.',
        description: 'نافذة العراق الوطنية الموحدة للتجارة (Iraq NSW) هي منصة سيادية لتوحيد المنافذ الحدودية والجمارك والمصارف والجهات التنظيمية.',
        detailedDescription: 'Iraq NSW هو نظام وطني موحد يربط كافة المنافذ الحدودية البرية والبحرية والجوية في العراق. الميزانية الإجمالية: ١٨٠ مليون دولار | المدة: ١٨ شهراً | العائد الاستثماري (ROI): ٤٢٠٪ (السنة الثالثة).',
        keyFeatures: [
          'تقليص زمن التخليص الجمركي من ٤٨ ساعة إلى ٧ ساعات (أسرع بنسبة ٨٥٪)',
          'خفض تكلفة البيان من ١,٠٠٠ دولار إلى ٤٠٠ دولار (أرخص بنسبة ٦٠٪)',
          'رفع نسبة الشفافية من ١٠٪ إلى أكثر من ٩٠٪',
          'خفض نسبة الفساد من ٤٠٪ إلى ٠٪',
          'تكامل موحد: ١٠ منافذ حدودية + إقليم كردستان',
          'كشف الاحتيال بالذكاء الاصطناعي (AI/ML) بنسبة ٧٠٪ ← ٩٠٪',
          'التحقق من الوثائق عبر تقنيات OCR وLayoutLMv3',
          'وضع العمل دون اتصال (Offline Mode) للمنافذ النائية',
        ],
        targetAudience: [
          'الهيئة العامة للجمارك وهيئة المنافذ الحدودية',
          'وزارات التجارة، النقل، الصحة، والزراعة',
          'البنك المركزي العراقي (CBI) والمصارف التجارية',
          'شركات الاستيراد والتصدير والخطوط الملاحية',
          'إقليم كردستان — الهيئة الجمركية الإقليمية',
        ],
        technologies: [
          'Go (Golang) + Python/FastAPI',
          'React.js + Next.js + RTL Support',
          'PostgreSQL + Firestore + BigQuery',
          'Kubernetes + Google Cloud Platform',
          'Vertex AI + TensorFlow/PyTorch',
          'Zero-Trust Security + OCR',
          'gRPC + REST API + Pub/Sub',
          'LayoutLMv3 + Dialogflow CX',
        ],
        owner: 'هيئة هندسة الأنظمة الوطنية — IDG',
        impact: 'تسريع التخليص بنسبة ٨٥٪، وخفض التكاليف بنسبة ٦٠٪، ومضاعفة الشفافية ٩ مرات، وخفض الفساد إلى ٠٪ — عائد استثماري ٤٢٠٪ في السنة الثالثة.',
        mockupType: 'nsw',
      },
    },
    governance: {
      heroTitle: 'الحوكمة والقيم الأساسية',
      heroDesc:
        'الثقة بدون حوكمة مجرد شعار. في بوابة العراق الرقمية (IDG)، نوحد انضباط العمل، والشفافية، وصنع القرار المدعوم بالأدلة لبناء مؤسسة مستدامة تتجاوز الاعتماد على الأفراد.',
      valuesTitle: 'قيمنا الراسخة',
      values: [
        {
          title: 'المسؤولية الوطنية 🇮🇶',
          desc: 'نرى تعزيز القدرات المؤسسية والاقتصادية للعراق على المدى الطويل كمسؤولية عليا. نقيم قراراتنا بناءً على الأثر الوطني بدلاً من العوائد اللحظية.',
        },
        {
          title: 'النزاهة في الصميم ⚖️',
          desc: 'يجب ترسيخ النزاهة في الحوافز والبيانات والعقود والعلاقات. نكشف الحقائق الجوهرية ونعالج تضارب المصالح مبكراً وبشفافية.',
        },
        {
          title: 'الدليل قبل الافتراض 📊',
          desc: 'تبدأ القرارات الاستراتيجية والمنتجات مع فرضيات مدعومة بالبيانات. نفصل الحقائق عن الآراء، ونعدل مسارنا عند تغير الأدلة.',
        },
        {
          title: 'الأمن والسيادة 🔒',
          desc: 'تعتمد الثقة على حوكمة البيانات بمسؤولية. نطبق مبدأ الحد الأدنى من الصلاحيات وندقق مخاطر الموردين والاختصاصات القضائية بحزم.',
        },
        {
          title: 'الملكية طويلة الأجل ⏳',
          desc: 'نتحمل مسؤولية دورة الحياة الكاملة لكل نظام والتزام. نخطط منذ البداية للصيانة، والتسليم، وإيقاف التشغيل بمسؤولية مؤسسية.',
        },
        {
          title: 'محورية الإنسان 👥',
          desc: 'يجب أن تحترم التكنولوجيا حقوق الناس وفرصهم. نضمن دائماً مراجعة بشرية للقرارات المصيرية المدعومة بالذكاء الاصطناعي.',
        },
      ],
      architectureTitle: 'هيكلية الحوكمة المؤسسية',
      tableHeaders: {
        domain: 'مجال الحوكمة',
        principle: 'المبدأ',
        mechanism: 'الآلية المطلوبة',
      },
      domains: [
        {
          domain: 'اتخاذ القرار',
          principle: 'تتبع السلطة الأهمية المؤسسية، والخبرة، والمخاطر، والمساءلة.',
          mechanism: 'مصفوفة حقوق القرار، وسجل القرارات المكتوب، وتعيين جدول المراجعة الدورية.',
        },
        {
          domain: 'المسؤولية والمساءلة',
          principle: 'كل نتيجة جوهرية لها مسؤول مباشر واحد ومحدد.',
          mechanism: 'مالك محدد بالاسم، وهدف واضح، وموعد نهائي ملزم، وأدلة إنجاز موثقة.',
        },
        {
          domain: 'الشفافية',
          principle: 'يتلقى أصحاب المصلحة معلومات دقيقة وموثوقة للتشغيل والرقابة.',
          mechanism: 'تقارير الحوكمة المجدولة، وسجلات التدقيق غير القابلة للتعديل، والإفصاح الفوري عن الحوادث.',
        },
        {
          domain: 'الأمن والبيانات',
          principle: 'تُدار الأنظمة والبيانات الحساسة كأصول سيادية لموثوقية الشركة.',
          mechanism: 'تصنيف البيانات، وتطبيق الحد الأدنى من الصلاحيات (Least Privilege)، وضوابط مخاطر الموردين.',
        },
      ],
      caseStudiesHeading: 'دراسات الحالة المؤسسية (Institutional Case Studies)',
      caseStudiesSubheading:
        'يتم تقييم كل قرار تقني عبر تسلسل إثبات صارم: السياق -> الدليل -> القرار -> الأثر -> المخاطرة -> الخطوة التالية.',
      heading: 'الحوكمة والانضباط المؤسسي',
      subheading:
        'يتم تقييم كل قرار تقني عبر تسلسل إثبات صارم: السياق -> الدليل -> القرار -> الأثر -> المخاطرة -> الخطوة التالية.',
      frameworkTitle: 'سجلات الحوكمة التنفيذية لشركة IDG',
      cases: [
        {
          id: 'data-sov',
          title: 'سيادة البيانات الوطنية والسحابة المحلية',
          category: 'البنية التحتية والتشريعات',
          context: 'تشتت تخزين البيانات المؤسسية الحساسة في خوادم خارجية غير خاضعة للسيادة.',
          evidence: 'أكثر من ٧٠٪ من الأنظمة التقليدية تعمل دون اتفاقيات سيادة بيانات محلية صارمة.',
          decision: 'إلزام جميع منتجات ومبادرات IDG بتوطين وحفظ البيانات بالكامل داخل الحدود الجغرافية للعراق.',
          impact: 'ضمان السيادة الكاملة للدولة على المعلومات الاستراتيجية والأمنية.',
          risk: 'تكاليف تشغيلية أولية لإنشاء خوادم محلية معتمدة.',
          nextStep: 'تطبيق بروتوكول التشفير الشامل والمراقبة اللحظية في كافة أصول المحفظة.',
        },
        {
          id: 'ai-oversight',
          title: 'حوكمة الذكاء الاصطناعي تحت القرار البشري المباشر',
          category: 'اتخاذ القرار الخوارزمي',
          context: 'الاعتماد العشوائي على نماذج الذكاء الاصطناعي الخارجية يسبب أخطاء تحليلية لتجاهلها السياق العراقي.',
          evidence: 'النماذج العالمية المفتوحة تفتقر لفهم دقيق للوائح والإجراءات الإدارية العراقية.',
          decision: 'حظر أي قرار مؤتمت دون تدقيق بشري مباشر (Human-in-the-loop) في جميع وحدات AI Gate Iraq.',
          impact: 'منع القرارات الخاطئة وتعزيز ثقة القيادات وصناع القرار.',
          risk: 'زيادة طفيفة في زمن المراجعة والتدقيق الإداري.',
          nextStep: 'إصدار دليل المساءلة الخوارزمية لجميع فرق البحث والتطوير.',
        },
        {
          id: 'interop',
          title: 'التكامل المفتوح والحد من احتكار التقنية',
          category: 'الهندسة البرمجية',
          context: 'بناء أنظمة مغلقة ومحتكرة أعاق قدرة المؤسسات على تبادل البيانات بشكل مرن.',
          evidence: 'الاضطرار لإعادة الإدخال اليدوي للمعلومات بين الوزارات والمصالح الحكومية.',
          decision: 'فرض معايير OpenAPI المفتوحة وتوحيد نماذج البيانات المشتركة عبر أصول المحفظة.',
          impact: 'خفض كلفة الربط التقني بنسبة كبيرة وتسريع المعاملات المشتركة.',
          risk: 'الحاجة لتنسيق فني مستمر مع الكوادر المختلفة.',
          nextStep: 'نشر وثيقة المعمارية الموحدة لشركة IDG وإتاحتها للقطاع العام.',
        },
      ],
    },
    stakeholders: {
      heroTitle: 'الجهات المستهدفة والشراكات الاستراتيجية',
      heroDesc:
        'تخدم بوابة العراق الرقمية (IDG) مختلف الأطراف من خلال مشاركة تتناسب مع دور ومسؤولية كل جهة. نبني شراكاتنا على أساس التوافق الاستراتيجي، والقيمة المشتركة، والأدلة المثبتة.',
      items: [
        {
          icon: '🏛️',
          title: 'الحكومة',
          desc: 'شراكة استراتيجية للتحول والخدمة العامة. نهدف إلى تعزيز القدرة المؤسسية، والمساءلة، وقابلية التشغيل البيني للأنظمة، والسيادة الوطنية.',
          actionText: 'طلب اجتماع استراتيجي ←',
        },
        {
          icon: '🏢',
          title: 'القطاع الخاص',
          desc: 'منصات وأسواق موثوقة. نساعد الشركات على تعزيز الإنتاجية، والمعاملات الشفافة، وتسهيل الوصول إلى الأسواق، واستثمار الذكاء التشغيلي.',
          actionText: 'التعرف على الحلول المؤسسية ←',
        },
        {
          icon: '📈',
          title: 'المستثمرون',
          desc: 'منطق المحفظة الاستثمارية المنضبط. توفير جدوى اقتصادية موثوقة، وإدارة شفافة للمخاطر، وبناء قيمة تنموية مستدامة في السوق العراقي.',
          actionText: 'عرض مصفوفة الاستثمار ←',
        },
        {
          icon: '🎓',
          title: 'الجامعات ومراكز الأبحاث',
          desc: 'رابط وثيق ومستدام بين المعرفة الأكاديمية والاحتياجات الوطنية. إنتاج أبحاث تطبيقية، وتطوير معايير مشتركة، وتنمية المواهب الوطنية.',
          actionText: 'برامج البحث والتطوير ←',
        },
        {
          icon: '🌍',
          title: 'المنظمات الدولية',
          desc: 'برامج تعزيز الملكية المحلية والتسليم المسؤول. نعمل لتقديم الدعم الفني، وتطبيق المعايير الدولية، وبناء قدرات مؤسسية معتمدة.',
          actionText: 'شراكات التنمية الدولية ←',
        },
        {
          icon: '👥',
          title: 'المواطنون والمجتمع',
          desc: 'تجارب رقمية ذات جدوى اقتصادية ومحمية قانونياً. ضمان سهولة الوصول، وصون الحقوق الرقمية، والمشاركة الشفافة لجميع المستفيدين.',
          actionText: 'مؤشرات ومعايير الموثوقية ←',
        },
      ],
      rulesTitle: 'قواعد ومعايير شراكات IDG',
      rulesDesc:
        'تحافظ الشركة على استقلاليتها وحيادها المؤسسي الكامل. يتطلب أي إعلان عن وضع قانوني أو تأييد أو تعامل رسمي وجود أدلة معاصرة سارية واتفاقيات خطية موثقة. نقيّم الشراكات وفق معايير إدارة المخاطر، ونقل القدرات المعرفية، والاستدامة طويلة الأجل.',
      heading: 'الجهات المستهدفة والقطاعات الحيوية',
      subheading:
        'تعمل IDG كشريك استراتيجي للمؤسسات الوطنية لتحويل التحديات التشغيلية إلى كفاءة مهنية مسؤولة.',
      sectors: [
        {
          title: 'المؤسسات الحكومية والوزارات',
          mandate: 'تعزيز الكفاءة الإدارية والتحول الرقمي السيادي للبيانات.',
          outcomes: [
            'أنظمة لاتخاذ القرارات المبنية على الأدلة والبيانات الحقيقية',
            'التكامل مع النافذة الوطنية الموحدة',
            'حماية الوثائق والبيانات السيادية من التسريب',
          ],
        },
        {
          title: 'القطاع المصرفي والمالي',
          mandate: 'بناء الثقة والأمان والشفافية في حركة البيانات والتقارير المالية.',
          outcomes: [
            'معمارية آمنة للتكامل المالي المشترك',
            'إدارة المخاطر عبر نماذج تحليلية مثبتة',
            'الامتثال الكامل للمعايير الرقابية الوطنية والدولية',
          ],
        },
        {
          title: 'قطاع التجارة واللوجستيات والموانئ',
          mandate: 'تنظيم التبادل التجاري وتحديث سلاسل الإمداد الوطنية.',
          outcomes: [
            'تسريع الإجراءات الجمركية والمنافذ (Iraq NSW)',
            'تتبع الشحنات والسلع بالبيانات المؤتمتة',
            'تعظيم الإيرادات وحمايتها من الهدر',
          ],
        },
        {
          title: 'المبادرات البيئية والاقتصاد الدائري',
          mandate: 'صون الموارد الطبيعية عبر الاقتصاد الدائري والبيانات الميدانية.',
          outcomes: [
            'الرصد اللحظي للأثر البيئي ومكافحة التصحر (Green Belt)',
            'إعادة تدوير مخلفات الطعام وتحويلها لأسمدة عالية الجودة',
            'خلق فرص عمل مهنية خضراء في المدن',
          ],
        },
      ],
    },
    vision: {
      heading: 'رؤية ٢٠٣٥: السيادة والقدرة المؤسسية الكاملة',
      subheading:
        'خريطة طريق متدرجة تنطلق من الواقع الملموس نحو تحقيق السيادة التكنولوجية الكاملة للدولة العراقية.',
      phases: [
        {
          era: '٢٠٢٤ - ٢٠٢٦',
          title: 'المرحلة الأولى: ترسيخ الأسس وسيادة البيانات',
          target: 'إرساء بروتوكولات الحوكمة الموحدة وتوطين البيانات',
          focus: 'تفعيل أصول المحفظة (AI Gate, ZaNa, Green Belt) وبناء بنية السحابة السيادية داخل العراق.',
        },
        {
          era: '٢٠٢٦ - ٢٠٣٠',
          title: 'المرحلة الثانية: الربط الشامل والنافذة الوطنية',
          target: 'استكمال تكامل القطاعات المالية والتجارية',
          focus: 'تشغيل النافذة الوطنية الواحدة (Iraq NSW) وربط الجمارك والمصارف في شبكة موحدة وآمنة.',
        },
        {
          era: '٢٠٣٠ - ٢٠٣٥',
          title: 'المرحلة الثالثة: الاكتفاء الذاتي والريادة الإقليمية',
          target: 'إنهاء التبعية التقنية وتصدير الكفاءات',
          focus: 'تحويل العراق من مستهلك للحلول الرقمية إلى مركز سيادي للتقنيات المتقدمة والذكاء الاصطناعي المنضبط.',
        },
      ],
    },
    contactModal: {
      title: 'التواصل المؤسسي مع IDG',
      subtitle:
        'تتعامل بوابة العراق الرقمية حصراً مع الطلبات الرسمية المتعلقة بالحوكمة، الشراكات الاستراتيجية، وتكامل الأنظمة.',
      nameLabel: 'الاسم الكامل للمسؤول',
      entityLabel: 'اسم المؤسسة / الهيئة',
      sectorLabel: 'القطاع المعني',
      inquiryTypeLabel: 'موضوع التواصل',
      messageLabel: 'ملخص المشكلة المثبتة أو الطلب المؤسسي',
      submitBtn: 'إرسال الطلب الرسمي',
      successTitle: 'تم تسجيل طلبكم بنجاح',
      successMsg: 'سيقوم فريق حوكمة IDG بدراسة المعطيات والتواصل معكم عبر القنوات الرسمية خلال أقصر مدة تشغيلية.',
      closeBtn: 'إغلاق',
      sectorOptions: [
        'المؤسسات الحكومية والوزارات',
        'القطاع المصرفي والمالي',
        'قطاع التجارة والنقل',
        'القطاع البيئي والزراعي',
        'الجامعات والمراكز البحثية',
      ],
      inquiryOptions: [
        'شراكة استراتيجية مع IDG',
        'طلب اعتماد AI Gate Iraq',
        'اتفاقية تدريب وتأهيل مع أكاديمية زانا (ZaNa Academy)',
        'مشروع استدامة مع Green Belt',
        'التنسيق في النافذة الوطنية (Iraq NSW)',
      ],
    },
    about: {
      badge: 'عن المؤسسة • About IDG',
      heading: 'عن بوابة العراق الرقمية (IDG)',
      subheading:
        'الشركة الأم السيادية واستوديو المشاريع التكنولوجية: تحويل التعقيد المؤسسي إلى قدرة تشغيلية موثوقة ومستدامة للعراق.',
      missionTitle: 'مهمتنا الأساسية 🎯',
      missionDesc:
        'بناء القدرات المؤسسية والتكنولوجية والبشرية من خلال تحويل المشكلات الهيكلية إلى أنظمة إنتاج وذكاء اصطناعي مسؤول.',
      visionTitle: 'رؤية ٢٠٣٥ 👁️',
      visionDesc:
        'بحلول عام ٢٠٣٥، سنصبح مؤسسة مستقلة ومستدامة تسهم في جعل الأنظمة العامة والخاصة أكثر ترابطاً وذكاءً. نحمي البيانات الاستراتيجية ونحوّل الواقع المحلي إلى قدرة تنافسية دولية.',
      coreValuesTitle: 'قيمنا الثابتة:',
      coreValuesSubtitle: 'أربعة مبادئ حاكمة توجّه كافة قراراتنا المعمارية، شراكاتنا المؤسسية، ومشاريعنا التكنولوجية:',
      coreValuesList: [
        {
          label: 'المسؤولية الوطنية:',
          text: ' نقيّم القرارات بعيداً عن الإيراد الفوري على أساس الأثر الوطني المستدام.',
        },
        {
          label: 'الدليل قبل الافتراض:',
          text: ' تبدأ الاستراتيجية وتطوير المنتجات بشروط مدعومة بالبيانات الواقعية.',
        },
        {
          label: 'الأمان والسيادة:',
          text: ' الثقة قائمة على الحوكمة المسؤولة للبيانات والسيادة الرقمية المحلية.',
        },
      ],
      coreValues: [
        {
          badge: 'السيادة والمسؤولية',
          title: 'المسؤولية الوطنية وصون السيادة',
          desc: 'تقديم المصلحة الاستراتيجية للعراق وسيادة البيانات الوطنية على الأرباح الآنية. كافة الشيفرات البرمجية والبيانات تخضع لملكية وإشراف محلي داخل الحدود.',
        },
        {
          badge: 'الانضباط والواقعية',
          title: 'الأدلة والحقائق قبل الافتراضات',
          desc: 'صنع القرارات وتصميم المعمارية يستند حصراً إلى البيانات الميدانية والنتائج المثبتة والمساءلة الحسابية، بعيداً عن الشعارات النظرية غير المختبرة.',
        },
        {
          badge: 'النزاهة والوضوح',
          title: 'النزاهة عبر التصميم (Integrity by Design)',
          desc: 'اعتماد واجهات برمجية قياسية (OpenAPI)، وسجلات غير قابلة للتلاعب، وأمن صارم لمنع الاحتكار والارتهان لمزودي الخدمات المنغلقين.',
        },
        {
          badge: 'الاستدامة والتمكين',
          title: 'الملكية المستمرة وبناء القدرات',
          desc: 'نقل المعرفة الشاملة وتدريب الكوادر العراقية لضمان استمرارية وإدارة المنظومات على المدى الطويل بمعزل عن التغيرات العابرة.',
        },
      ],
      transformationTitle: 'كيف نحول التعقيد إلى قدرة تشغيلية موثوقة؟',
      transformationDesc:
        'يمتلك العراق طاقات بشرية وموارد حيوية، لكنه يواجه تشتت المنظومات، المعاملات الورقية، والبيروقراطية المتشابكة. تقوم منهجية IDG الهندسية بتحويل هذا التعقيد إلى حلول متينة عبر أربع مراحل منضبطة:',
      transformationStages: [
        {
          step: '٠١',
          title: 'تفكيك الفجوات التشغيلية',
          subtitle: 'تشخيص دقيق للمشاكل المثبتة ميدانياً',
          desc: 'تحديد الجذور الحقيقية للبطء، والاحتكاك الإجرائي، وانعزال البيانات بين المؤسسات بالاعتماد على التحليل الواقعي للعمليات.',
          outcome: 'توثيق شامل ومحدد لمسارات العمل ومكامن الخلل',
        },
        {
          step: '٠٢',
          title: 'تصميم المعمارية السيادية',
          subtitle: 'معايير مفتوحة وذاكرة بيانات موحدة',
          desc: 'هندسة بروتوكولات مؤمنة، وصلاحيات دقيقة، ومواءمة تبادل البيانات بمعايير OpenAPI لمنع الارتهان التقني والحلول الاحتكارية.',
          outcome: 'بنية تحتية موثوقة، معيارية، وقابلة للتدقيق',
        },
        {
          step: '٠٣',
          title: 'إطلاق المنصات التشغيلية',
          subtitle: 'أصول المحفظة الاستراتيجية لـ IDG',
          desc: 'نشر وتشغيل الأنظمة المتخصصة كالنافذة الوطنية الموحدة (Iraq NSW)، وبوابة الذكاء الاصطناعي (AI Gate Iraq)، وأدوات التحليل التشغيلي.',
          outcome: 'أتمتة شاملة تنهي المعاملات الورقية وتطلق السرعة الرقمية',
        },
        {
          step: '٠٤',
          title: 'ترسيخ القدرة المؤسسية الوطنية',
          subtitle: 'ملكية تشغيلية دائمة ومستقلة',
          desc: 'تدريب وتأهيل الكفاءات العراقية، ومراقبة مؤشرات الاستقرار والجودة، وتأمين نمو الأنظمة لتخدم الأجيال القادمة.',
          outcome: 'تمكين مؤسسي متكامل ومستدام للدولة والأسواق',
        },
      ],
    },
    careers: {
      badge: 'الانضمام إلينا • Careers at IDG',
      heading: 'فرص العمل والمساهمة في بناء البنية التحتية للعراق',
      subheading:
        'انضم إلى فريق بناء السيادة التكنولوجية والمنظومات الوطنية. نبحث عن مهندسين وباحثين ورواد تقنيين يمتلكون الشغف والانضباط لإحداث فارق حقيقي.',
      cultureTitle: 'بيئة وثقافة العمل في IDG',
      cultureDesc:
        'العمل في IDG يتجاوز الوظيفة التقليدية؛ إنه التزام وطني بمستقبل العراق. نوفر بيئة ترتكز على الجدارة، الصدق التقني، والتميز الهندسي الشامل.',
      culturePillars: [
        {
          title: 'مسؤولية استثنائية وأثر مباشر',
          desc: 'كل نظام تصممه أو تشرف عليه يمس حياة الملايين من المواطنين، ويعزز الشفافية المالية، ويسرّع التجارة الوطنية بصورة ملموسة.',
        },
        {
          title: 'انضباط هندسي ومعايير عالمية',
          desc: 'لا مساومة على جودة الكود، أمن المعلومات، أو منع الاحتكار. نصمم حلولنا وفق أرقى الممارسات العالمية وبما يلائم بيئتنا الوطنية.',
        },
        {
          title: 'أمان فكري ونقد بنّاء',
          desc: 'نشجع الحوار التقني الصريح؛ القرارات تُبنى على البيانات والأدلة المقنعة وليس على التسلسل البيروقراطي.',
        },
        {
          title: 'الاستثمار في العقول العراقية',
          desc: 'هدفنا الأساسي هو رعاية وتأهيل جيل متميز من معماري البرمجيات، وعلماء البيانات، وخبراء الأمن السيبراني داخل العراق.',
        },
      ],
      openingsTitle: 'الوظائف الشاغرة حالياً (Current Openings)',
      openingsSubheading: 'إذا كنت مستعداً لتسخير خبراتك للمشاريع الوطنية الكبرى، استعرض الوظائف المتاحة:',
      openings: [
        {
          id: 'senior-sys-architect',
          title: 'معماري نظم موزعة أول (Senior Distributed Systems Architect)',
          dept: 'هندسة البنية التحتية والبيانات',
          location: 'بغداد / نظام هجين (Hybrid)',
          type: 'دوام كامل (Full-time)',
          summary: 'قيادة تصميم وهندسة واجهات برمجة التطبيقات والمنظومات السيادية عالية التوافر وملايين العمليات المتزامنة.',
          responsibilities: [
            'بناء بنية الخدمات المصغرة فائقة السرعة الملتزمة بمعايير OpenAPI',
            'ضمان استيعاب ملايين العمليات اليومية بأعلى استقرار وأدنى زمن استجابة',
            'مراجعة المعمارية البرمجية ووضع خطط ربط المنظومات القائمة بالمنصات الحديثة',
          ],
          requirements: [
            'خبرة متقدمة في هندسة النظم الموزعة (Go, Rust, TypeScript, Java)',
            'إتقان تقنيات Kubernetes، السحابة المحلية، ومنصات التراسل اللحظي (Kafka/NATS)',
            'فهم عميق لمعايير حماية وسلامة البيانات الوطنية',
          ],
        },
        {
          id: 'security-lead',
          title: 'مسؤول أمن المعلومات وسيادة البيانات (Cybersecurity & Data Sovereignty Lead)',
          dept: 'الأمن السيبراني والمطابقة',
          location: 'بغداد',
          type: 'دوام كامل (Full-time)',
          summary: 'إدارة أطر الحماية ومنظومات الثقة المعدومة (Zero-Trust) واختبارات الاختراق لحماية الأصول الرقمية للبلاد.',
          responsibilities: [
            'تطبيق استراتيجيات التشفير الشامل وإدارة المفاتيح داخل مراكز البيانات المحلية',
            'قيادة فرق الاستجابة للحوادث السيبرانية وإجراء الفحوص الدورية (SAST/DAST)',
            'تدريب المطورين على ممارسات البرمجة الآمنة والمعايير الصارمة',
          ],
          requirements: [
            'خبرة لا تقل عن ٥ سنوات في الأمن السيبراني للبنى التحتية الحساسة',
            'شهادات معتمدة مثل CISSP، OSCP، أو ما يعادلها',
            'إلمام دقيق بالقوانين والتشريعات المتعلقة بحماية البيانات الوطنية والخصوصية',
          ],
        },
        {
          id: 'institutional-pm',
          title: 'مدير منتجات مؤسسية - القطاع العام (Institutional Product Manager - Public Sector)',
          dept: 'إدارة المنتجات والاستراتيجية',
          location: 'بغداد / أربيل',
          type: 'دوام كامل (Full-time)',
          summary: 'الربط الوثيق بين المتطلبات الحكومية والتشريعية والفرق الهندسية لتطوير بوابات رقمية فعالة.',
          responsibilities: [
            'ترجمة الإجراءات واللوائح الحكومية إلى مواصفات فنية دقيقة ومنطقية',
            'إدارة خارطة طريق مشاريع استراتيجية مثل النافذة الوطنية الموحدة (Iraq NSW)',
            'قياس رضا المستخدمين النهائيين وتقليص أزمنة المعاملات باستمرار',
          ],
          requirements: [
            'خبرة عملية في إدارة المنتجات الرقمية الكبرى أو مشاريع التحول الحكومي',
            'مهارات تواصل استثنائية باللغات العربية والكردية والإنجليزية',
            'فهم متعمق للعمليات اللوجستية، الجمركية، والخدمات المالية',
          ],
        },
        {
          id: 'ai-nlp-engineer',
          title: 'مهندس أبحاث ذكاء اصطناعي ومعالجة لغات (AI & NLP Research Engineer)',
          dept: 'أبحاث الذكاء الاصطناعي (AI Gate)',
          location: 'نظام هجين (Hybrid)',
          type: 'دوام كامل (Full-time)',
          summary: 'تدريب وتطوير نماذج معالجة اللغات الطبيعية الخاصة باللهجات واللغات العراقية للوثائق الرسمية والقانونية.',
          responsibilities: [
            'تطوير وتدريب النماذج اللغوية المتخصصة في العربية والكردية (السورانية والبهدينية)',
            'بناء أنظمة ذكية للتعرف الآلي واستخراج البيانات من الوثائق الجمركية والتجارية',
            'الالتزام الصارم بشفافية القرارات الناتجة عن نماذج الذكاء الاصطناعي وخلوها من التحيز',
          ],
          requirements: [
            'خبرة متقدمة في PyTorch، HuggingFace، وتقنيات Transformers و LLMs',
            'سجل مثبت في معالجة واستخلاص النصوص غير المنظمة من السجلات الرسمية',
            'درجة أكاديمية في علوم الحاسوب، الذكاء الاصطناعي، أو الرياضيات',
          ],
        },
        {
          id: 'trade-ops-analyst',
          title: 'محلل عمليات النافذة الموحدة والمنافذ الحدودية (Cross-Border Operations Analyst)',
          dept: 'العمليات والمنافذ التجارية (Iraq NSW)',
          location: 'البصرة / بغداد',
          type: 'دوام كامل (Full-time)',
          summary: 'تحليل ومتابعة حركة الشحنات وتخليص البضائع عبر المنافذ البحرية والبرية والجوية لتقليص أزمنة الانتظار.',
          responsibilities: [
            'رسم ومتابعة تدفق البضائع والمعاملات الجمركية في المنافذ الرئيسية',
            'رصد المعوقات الميدانية واقتراح تحسينات إجرائية ورقمية عاجلة',
            'دعم شركات النقل والتخليص في استخدام المنصة الرقمية الموحدة',
          ],
          requirements: [
            'خلفية متينة في سلاسل الإمداد، العمليات الجمركية، أو الخدمات اللوجستية',
            'قدرة على العمل الميداني والتفاعل الإيجابي مع فرق العمل المتعددة',
            'مهارة في استخدام أدوات تحليل البيانات لتقديم تقارير دورية دقيقة',
          ],
        },
      ],
      applyTitle: 'تقديم طلب التوظيف والسيرة الذاتية (Submit Application)',
      applyDesc:
        'يمكنكم التقديم على إحدى الوظائف الشاغرة أعلاه أو إرسال طلب عام (General Application) للانضمام إلى قاعدة بيانات الكفاءات لدى IDG:',
      form: {
        positionLabel: 'الوظيفة المراد التقديم عليها',
        generalPositionOption: 'طلب عام للمواهب والكفاءات (General Talent Application)',
        fullNameLabel: 'الاسم الرباعي واللقب',
        fullNamePlaceholder: 'الاسم الكامل كما هو مدون في الهوية الرسمية',
        emailLabel: 'البريد الإلكتروني المهني',
        emailPlaceholder: 'you@example.com',
        phoneLabel: 'رقم الهاتف المحمول',
        phonePlaceholder: '+964 7XX XXX XXXX',
        portfolioLabel: 'رابط الملف الشخصي (LinkedIn / GitHub / Portfolio)',
        portfolioPlaceholder: 'https://linkedin.com/in/yourprofile',
        resumeLabel: 'إرفاق السيرة الذاتية (CV / Resume)',
        resumePlaceholder: 'ملف بصيغة PDF أو Word (الحد الأقصى 10 ميغابايت)',
        coverNoteLabel: 'رسالة الدوافع أو نبذة عن الخبرات (Motivation / Summary)',
        coverNotePlaceholder: 'لماذا ترغب بالانضمام إلى IDG وكيف ترى مساهمتك في بناء الأنظمة الوطنية؟',
        submitBtn: 'إرسال طلب التوظيف',
        submittingBtn: 'جاري المعالجة...',
        successTitle: 'تم استلام طلبكم بنجاح',
        successMsg: 'شكراً لاهتمامكم بالعمل معنا. سيقوم فريق الموارد البشرية في IDG بمراجعة ملفكم والتواصل معكم في حال توفر الشروط المطلوبة.',
        resetBtn: 'تقديم طلب إضافي',
      },
      banner: {
        ku: '⚠️ تێبینی گرنگ: ئێمە ئێستا لە قۆناغی سەرەتایی پێش-وەبەرهێنانداین (Pre-Seed). ئەم پۆستانە دوای تەواوبوونی خولی سەرمایە (Seed Round) دەبنە خاوەن مووچەی کێبڕکێکار. ئێستا ئێمە بۆ هاوبەشی ستراتیژی و ڕێککەوتنی پشک (Equity Partnership) و هاودامەزرێنەر پێشوازی دەکەین.',
        ar: '⚠️ ملاحظة مهمة: نحن حالياً في مرحلة التأسيس المبكرة (Pre-Seed). ستتم توظيف هذه المناصب برواتب تنافسية بعد جولة التمويل. نحن نرحب حالياً بالشراكة الاستراتيجية ونظام الحصص (Equity Partnership) والشركاء المؤسسين.',
        en: '⚠️ Important Note: We are currently in early-stage pre-seed. These roles will convert to competitive salaries post-funding. We currently welcome strategic co-founders and equity-based partnerships.',
      },
      compensation: {
        ku: 'پشک (Equity) + مووچەی کێبڕکێکار دوای دابینکردنی سەرمایە',
        ar: 'حصص (Equity) + راتب تنافسي بعد جولة التمويل',
        en: 'Equity + Competitive Salary Post-Funding',
      },
      ctaButton: {
        ku: 'ڕێککەوتن وەک بنیاتنەری هاوبەش',
        ar: 'التقديم كشريك مؤسس',
        en: 'Apply as Co-founder / Partner',
      },
      earlyStageNote: {
        ku: 'دەرفەتێکی دەگمەن بۆ ئەوەی ببیتە بەشێک لە دروستکردنی ژێرخانی دیجیتاڵی نیشتمانی لە قۆناغی سفرەوە.',
        ar: 'فرصة نادرة لتكون جزءاً من بناء البنية التحتية الرقمية الوطنية من نقطة الصفر.',
        en: 'A rare opportunity to build national digital infrastructure from ground zero.',
      },
      postFundingNote: {
        ku: 'هەموو ئەندامانی سەرەتایی خاوەنی پشکی فەرمی دەبن لە کۆمپانیا لەگەڵ گرێبەستی یاسایی پارێزراو.',
        ar: 'يحصل جميع الأعضاء الأوائل على حصص ملكية موثقة قانونياً في الشركة.',
        en: 'All early core contributors receive legal equity vesting agreements.',
      },
    },
    contactSection: {
      badge: 'التواصل المؤسسي • Institutional Channel',
      heading: 'تواصلوا معنا (Contact Us)',
      subheading:
        'البوابة الرسمية للمحادثات الاستراتيجية، الشراكات التقنية، والاستفسارات المؤسسية المتخصصة.',
      introText:
        'نرحب بالتواصل المباشر مع الوزارات والجهات الحكومية، المصارف، شركات القطاع الخاص، المؤسسات الأكاديمية، والشركاء الدوليين. يرجى ملء النموذج أدناه لبدء حوار رسمي مدعوم بالأدلة والشفافية.',
      partnershipNote:
        'تُقيّم جميع الطلبات بناءً على الاحتياج الميداني المثبت، والحياد المؤسسي، وصون السيادة الوطنية.',
      hqLabel: 'المقر الرئيسي',
      hqValue: 'بغداد، العراق • مجمع الأعمال والتجارة',
      emailLabel: 'البريد الإلكتروني الرسمي',
      emailValue: 'contact@idggov.tech',
      hoursLabel: 'أوقات العمل والاستجابة',
      hoursValue: 'يوم عمل واحد (الأحد إلى الخميس، من ٨:٣٠ صباحاً حتى ٤:٣٠ مساءً)',
      channelsTitle: 'قنوات التواصل المخصصة',
      channelsDesc: 'يمكنكم تحديد طبيعة الطلب أو الشراكة المقترحة بوضوح ضمن موضوع الرسالة لتوجيهها للجهة المعنية.',
      form: {
        nameLabel: 'اسم الشخص أو الجهة المعنية',
        namePlaceholder: 'الاسم الكامل، المؤسسة أو الشركة',
        emailLabel: 'عنوان البريد الإلكتروني الرسمي',
        emailPlaceholder: 'name@institution.gov.iq أو name@company.iq',
        subjectLabel: 'موضوع التواصل',
        subjectPlaceholder: 'ملخص الموضوع (شراكة استراتيجية، استفسار تقني، طلب تعاون)',
        messageLabel: 'الرسالة وتفاصيل الطلب أو فرصة التعاون',
        messagePlaceholder: 'يرجى تقديم نبذة عن المشكلة المثبتة أو مقترح الشراكة...',
        submitBtn: 'إرسال الرسالة',
        submittingBtn: 'جاري الإرسال...',
        successTitle: 'تم إرسال رسالتكم بنجاح',
        successMsg: 'شكراً لتواصلكم معنا. سيقوم فريق حوكمة IDG بدراسة الموضوع والتواصل معكم في أقرب وقت.',
        resetBtn: 'إرسال رسالة أخرى',
      },
    },
    faq: {
      badge: 'الأسئلة الشائعة وتوضيحات الحوكمة',
      heading: 'الأسئلة الشائعة للجهات المعنية',
      subheading:
        'توضيحات رسمية قائمة على الأدلة حول الحوكمة، البنية التحتية الرقمية، سيادة البيانات، وهندسة محفظة مشاريع بوابة العراق الرقمية (IDG).',
      searchPlaceholder: 'البحث في مواضيع الحوكمة، البيانات، المنتجات أو الشراكات...',
      allCategory: 'جميع الأسئلة',
      categories: {
        governance: 'الحوكمة والشركة الأم',
        infrastructure: 'البنية التحتية وسيادة البيانات',
        products: 'المحفظة والمنتجات (NSW)',
        partnerships: 'نموذج الشراكات والتنفيذ',
      },
      items: [
        {
          id: 'faq-1',
          category: 'governance',
          question: 'ما هو دور IDG كشركة أم مقارنة بمنتجات مثل AI Gate Iraq وأكاديمية زانا (ZaNa Academy)؟',
          answer:
            'IDG هي الشركة الأم السيادية واستوديو المشاريع التكنولوجية. المنتجات مثل "AI Gate Iraq" (المنتج 001)، و"أكاديمية زانا (ZaNa Academy)"، و"Green Belt" هي منتجات متخصصة خاضعة لحوكمة وإشراف IDG المباشر. المنتجات ليست كيانات مستقلة بل أدوات تقنية لتنفيذ أهداف المحفظة وفق معايير الحوكمة الموحدة لـ IDG.',
          highlights: ['الشركة الأم واستوديو المشاريع', 'حوكمة مؤسسية موحدة', 'تكامل معماري سيادي'],
        },
        {
          id: 'faq-2',
          category: 'infrastructure',
          question: 'كيف تضمن IDG أمن وسيادة البيانات المؤسسية داخل العراق؟',
          answer:
            'يتم تخزين ومعالجة وتحليل جميع البيانات الحساسة داخل مراكز بيانات سيادية ضمن الحدود الجغرافية للعراق. نمنع تسريب البيانات خارجياً عبر معمارية Zero-Trust والتشفير المزدوج المتقدم (AES-256) وسجلات التدقيق غير القابلة للتعديل. لا تتم مشاركة أي بيانات مؤسسية عراقية مع خوادم عامة خارجية.',
          highlights: ['سيادة البيانات محلياً', 'بروتوكول Zero-Trust', 'تشفير بمستويات سيادية'],
        },
        {
          id: 'faq-3',
          category: 'products',
          question: 'ما هي نافذة العراق الموحدة للتجارة (Iraq NSW) وكيف تغير كفاءة المنافذ الحدودية؟',
          answer:
            'Iraq NSW هي مبادرة استراتيجية خاضعة لحوكمة IDG لربط وتوحيد الجمارك، الموانئ، الوزارات المعنية، والبنك المركزي في منصة تشغيلية واحدة. تعمل على تقليص زمن التخليص الجمركي ونقل البضائع من أسابيع إلى أقل من 48 ساعة مع ضمان الشفافية الكاملة للإيرادات العامة.',
          highlights: ['توحيد المنافذ الحدودية', 'تقليص الزمن لأقل من 48 ساعة', 'شفافية الإيرادات العامة'],
        },
        {
          id: 'faq-4',
          category: 'infrastructure',
          question: 'ما هي فلسفة IDG لتطبيق الذكاء الاصطناعي (Applied AI) في القطاع المؤسسي؟',
          answer:
            'نرفض استخدام الذكاء الاصطناعي كشعارات تسويقية عابرة؛ بل نطبقه كذكاء اصطناعي تطبيقي (Applied AI) موجه لحل مشكلات حقيقية ومثبتة. تتميز نماذجنا بالمعالجة اللغوية الدقيقة للغتين الكردية والعربية في الوثائق القانونية والتنظيمية، والكشف الآلي عن التناقضات المالية في المنافذ.',
          highlights: ['حلول لمشكلات مثبتة', 'معالجة دقيقة للغتين الكردية والعربية', 'رفض الموضة التقنية العابرة'],
        },
        {
          id: 'faq-5',
          category: 'governance',
          question: 'كيف يتم تطبيق آلية "المالك المسؤول" (Accountable Owner) في مشاريع IDG؟',
          answer:
            'لا يُطلق أي حل تقني قبل تحديد المشكلة المثبتة والمالك المسؤول عنها بدقة داخل الهيكل التنظيمي. كل مشروع له مسؤول محدد يضمن تحقيق النتائج والأمن والاستمرارية التشغيلية وفق مؤشرات أداء موثقة ومعتمدة.',
          highlights: ['مسؤولية واضحة ومباشرة', 'المشكلة المثبتة قبل التقنية', 'معايير أداء قابلة للقياس'],
        },
        {
          id: 'faq-6',
          category: 'partnerships',
          question: 'كيف يمكن للمؤسسات الحكومية والخاصة بدء شراكة استراتيجية مع IDG؟',
          answer:
            'تبدأ الشراكة مع IDG عبر دراسة الفجوات المؤسسية والطلب الرسمي. نعمل على نموذج الشراكات الاستراتيجية (PPP) وبناء القدرات طويلة الأجل مع اشتراط النقل الكامل للمعرفة والتكنولوجيا إلى الكوادر والفرق الوطنية.',
          highlights: ['نقل كامل للمعرفة', 'شراكات استراتيجية طويلة الأجل', 'سيادة الكفاءات الوطنية'],
        },
      ],
      stillHaveQuestions: 'هل لديك استفسارات إضافية حول الحوكمة أو المحفظة؟',
      supportDesc: 'فريق التواصل المؤسسي في IDG جاهز للإجابة وتلبية المتطلبات الاستراتيجية.',
      contactBtn: 'التواصل الرسمي مع فريق الحوكمة',
    },
    backToTop: 'العودة للأعلى',
    footer: {
      rights: '© ٢٠٢٦ بوابة العراق الرقمية (IDG). جميع حقوق المحفظة محفوظة.',
      parentDesc:
        'IDG هي الشركة الأم السيادية الرائدة في تحويل التشتت والتعقيد إلى قدرة مؤسسية موثوقة في العراق عبر الحوكمة، البيانات، والتقنيات الآمنة.',
      links: {
        about: 'من نحن',
        principles: 'مبادئ الشركة',
        governance: 'حوكمة البيانات والمالية',
        careers: 'الوظائف',
        contact: 'التواصل الرسمي',
        security: 'سيادة البيانات والأمن',
        faq: 'الأسئلة الشائعة',
      },
      newsletter: {
        title: 'مركز المعلومات والتحديثات الدورية',
        description:
          'سجّل بريدك الإلكتروني المؤسسي لتلقي أحدث التقارير الاستراتيجية والتحليلات وتحديثات البنية التحتية الرقمية من IDG.',
        placeholder: 'البريد الإلكتروني المؤسسي (مثال: name@institution.gov.iq)',
        submitBtn: 'الاشتراك في التحديثات',
        submittingBtn: 'جارٍ تسجيل البريد...',
        successTitle: 'تم التسجيل بنجاح',
        successMsg: 'شكراً لك، تم تسجيل بريدك المؤسسي بنجاح. سيتم إرسال التقارير الاستراتيجية والتحديثات الدورية إلى عنوانك.',
        notice: 'ملاحظة: هذه القناة مخصصة للجهات المؤسسية والرسمية ومحمية وفق أعلى معايير الخصوصية.',
        invalidEmail: 'يرجى إدخال عنوان بريد إلكتروني مؤسسي صالح.',
      },
    },
    help: {
      tutorials: {
        title: 'التدريب والدروس التعليمية',
        subtitle: 'مقاطع فيديو توضيحية لكيفية العمل مع الأنظمة وإرشادات التدريب.',
        items: [
          {
            id: 'intro',
            duration: '14:20',
            badge: 'مقدمة',
            title: 'تعريف بالبنية السيادية الرقمية في العراق',
            description: 'شرح فلسفة العمل، أساسيات المحفظة، والمسؤوليات الرئيسية في IDG.',
            videoUrl: 'https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ',
          },
          {
            id: 'nsw',
            duration: '09:45',
            badge: 'المنصات',
            title: 'كيفية تشغيل نافذة العراق الموحدة للجمارك والمنافذ',
            description: 'دليل عملي للمؤسسات الحكومية والشركاء التجاريين لاستكمال المعاملات.',
            videoUrl: 'https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ',
          },
          {
            id: 'ai-oversight',
            duration: '11:10',
            badge: 'الذكاء الاصطناعي',
            title: 'معايير الشفافية والرقابة البشرية في نماذج الذكاء الاصطناعي',
            description: 'تفصيل آليات التدقيق وسلسلة الأدلة البرمجية في المنظومة الوطنية.',
            videoUrl: 'https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ',
          },
        ],
      },
    },
    team: {
      title: 'فريقنا',
      subtitle: 'نخبة من القيادات الهندسية والخبراء المتفانين في إرساء السيادة الرقمية للعراق.',
      leadership: 'الإدارة التنفيذية والقيادة',
      leadershipDesc: 'المؤسسون والقادة التنفيذيون الذين يقودون استراتيجية التكنولوجيا الوطنية.',
      coreTeam: 'الفريق الأساسي والكوادر الهندسية',
      coreTeamDesc: 'خبراء متمرسون في هندسة البرمجيات، الأمن السيبراني، البنية السحابية وإدارة المنتجات.',
      joinUs: 'انضم إلى مسيرتنا',
      joinUsDesc: 'هل ترغب في ترك أثر حقيقي وملموس في صياغة مستقبل العراق الرقمي؟',
      viewPositions: 'استعراض الفرص الوظيفية',
      departments: {
        all: 'جميع الأقسام',
        leadership: 'القيادة التنفيذية',
        engineering: 'الهندسة والبنية التحتية',
        product: 'المنتجات والتصميم',
        operations: 'العمليات والشراكات',
        communications: 'الاتصال والإعلام',
      },
      labels: {
        bio: 'نبذة شخصية',
        expertise: 'مجالات الخبرة',
        connect: 'التواصل والشبكات المهنية',
        viewProfile: 'عرض الملف التعريفي',
        backToTeam: 'العودة إلى دليل الفريق',
        keyFocus: 'مجال التركيز الأساسي',
        achievements: 'أبرز الإنجازات',
      },
    },
  },
  en: {
    companyName: 'Iraq Digital Gateway (IDG)',
    parentBadge: 'Sovereign Parent Company & Venture Studio',
    tagline: 'Transforming fragmentation into reliable institutional capability',
    nav: {
      home: 'Home',
      about: 'About Us',
      services: 'Services',
      portfolio: 'Portfolio & Products',
      philosophy: 'Philosophy',
      governance: 'Governance & Discipline',
      stakeholders: 'Target Stakeholders',
      vision: 'Vision 2035',
      careers: 'Careers',
      team: 'Our Team',
      contact: 'Contact Us',
      faq: 'FAQ',
      blog: 'Blog',
      insights: 'Insights',
      news: 'News',
    },
    home: {
      impactiqBannerTitle: '⭐ NEW: ImpactIQ is live — Sovereign National Impact Measurement',
      impactiqBannerCta: 'Explore Product',
    },
    hero: {
      headline: 'Transforming complexity into reliable operational capability.',
      subhead:
        'Iraq Digital Gateway (IDG) is a sovereign Iraqi parent company that unifies strategy, governance, data, and artificial intelligence into secure operating systems. Clear in governance, interoperable in architecture, accountable in execution, and built to endure.',
      exploreBtn: 'Explore Portfolio',
      visionBtn: 'Vision 2035',
      stats: {
        stat1Label: 'Ownership & Sovereignty',
        stat1Val: '100% Iraqi',
        stat2Label: 'Corporate Model',
        stat2Val: 'Parent Venture Studio',
        stat3Label: 'Architectural Anchor',
        stat3Val: 'Data Sovereignty & Security',
      },
    },
    purpose: {
      heading: 'Bridging the Gap Between Strategic Intent and Operational Capability',
      subheading:
        'Iraq possesses capital and talent. IDG exists to restructure authority, data, and services so institutions can operate with verified reliability.',
      pillars: [
        {
          title: 'Alignment',
          desc: 'Connecting fragmented stakeholders and information into an integrated, coherent operating system.',
        },
        {
          title: 'Capability',
          desc: 'Building necessary technical and institutional capability to achieve operational autonomy and productivity.',
        },
        {
          title: 'Trust',
          desc: 'Embedding security, legal accountability, and transparency directly into design and delivery.',
        },
        {
          title: 'Continuity',
          desc: 'Ensuring knowledge and institutional architecture endure beyond isolated projects and temporary shifts.',
        },
      ],
    },
    philosophy: {
      heading: 'Our Product Philosophy',
      subheading:
        'Every governed asset under IDG is architected to stringent standards of sovereignty, accountability, and operational evidence.',
      items: [
        {
          title: 'National Impact',
          desc: 'We prioritize verified institutional challenges whose resolution elevates sovereign capability and economic output.',
        },
        {
          title: 'Scalability',
          desc: 'We architect for expansion across multiple sectors and administrative jurisdictions across Iraq.',
        },
        {
          title: 'Security & Resilience',
          desc: 'We enforce least privilege by design and formulate continuity plans for uninterrupted operational uptime.',
        },
        {
          title: 'Interoperability',
          desc: 'We mandate documented APIs and open standards to facilitate seamless inter-system integration.',
        },
      ],
    },
    portfolio: {
      headerTitle: 'Corporate Portfolio & Systems Architecture',
      headerDesc:
        'Iraq Digital Gateway (IDG) is the perpetual parent company and sovereign brand. Portfolio products are governed assets held by IDG, each with an independent market and operational identity.',
      heading: 'Governed Portfolio Assets',
      subheading:
        'Iraq Digital Gateway (IDG) is the perpetual parent company and sovereign brand. Portfolio products are governed assets held by IDG, each with an independent market and operational identity.',
      visitWebsiteBtn: 'Visit Website ➔',
      openExternalPlatform: 'Open External Platform',
      standalonePlatforms: 'Standalone Platforms',
      schoolsStudentsAudience: 'For Schools & Students',
      zaNaUrl: 'https://zana.idggov.tech',
      impactIQ: {
        code: 'IDG-PRD-004',
        name: 'ImpactIQ',
        tagline: 'Measuring True National Impact',
        description:
          'A sovereign impact measurement and analytics platform (MEAL Engine) powered by sovereign AI, enforcing 100% in-country data residency under ISO 27001 — transforming administrative oversight into an empirical, auditable science.',
        status: 'active',
        badge: 'Strategic Initiative',
        features: [
          'AI Predictive Impact Scoring',
          'Immutable Audit Trails',
          '100% Sovereign Hosting',
          'Sovereign NLP Reporting',
        ],
        link: '/en/products/impactiq',
        external: false,
        ctaType: 'internal',
      },
      zanaAcademy: {
        code: 'IDG-PRD-002',
        name: 'ZaNa Academy',
        tagline: 'Standalone K-12 Sovereign Learning Platform',
        description:
          'A fully independent platform for schools and students — a Kurdish K-12 learning system with teachers, curricula, and progress tracking. This product is a standalone platform completely separated from the main IDG corporate website.',
        status: 'external',
        badge: 'Standalone Platform',
        externalUrl: 'https://zana.idggov.tech',
        external: true,
        ctaType: 'external',
        audience: 'Schools • Students • Teachers • Parents',
      },
      governanceNote:
        'Governance Notice: Each product maintains its distinct market identity, while data ownership, security architecture, and strategic direction remain 100% governed by IDG.',
      cardInspectPrompt: 'Click to inspect architectural dossier & system mock-up',
      modalLabels: {
        overview: 'Architectural Overview',
        detailedDescription: 'Operational Analysis & Institutional Solution',
        provenProblem: 'Proven Problem',
        accountableOwner: 'Accountable Authority',
        keyFeatures: 'Key Features & Capabilities',
        targetAudience: 'Target Audience & Beneficiaries',
        technologies: 'Technologies & Architecture Stack',
        systemMockup: 'Interactive System Interface Mock-up',
        provenImpact: 'Verified Institutional Impact',
        visitLiveSite: 'Visit Official Product Portal',
        close: 'Close',
        governedBy: 'Governed under IDG Sovereign Authority',
        operationalStatus: 'Operational Status',
        sovereignNotice: 'All telemetry, data repositories, and critical decision logic are held strictly within sovereign Iraqi on-premise infrastructure.',
      },
      products: [
        {
          id: 'aigate',
          numBadge: 'Product 001',
          code: 'IDG-PRD-001',
          name: 'AI Gate Iraq',
          title: 'AI Gate Iraq',
          subtitle: 'Applied AI & Sovereign Analytics Gateway',
          tagline: 'Applied AI & Sovereign Analytics Gateway',
          problem: 'Fragmented administrative decision-making and lack of evidence-grounded analytics across institutions.',
          owner: 'Evidence & Analytics Directorate (IDG Central Governance)',
          description:
            'Applied artificial intelligence initiative for verified analytics and decision-making under human-in-the-loop authority. Ensures auditability and transparency in public and corporate decisions.',
          detailedDescription:
            'AI Gate Iraq is a governed applied artificial intelligence platform engineered to facilitate high-stakes administrative determinations and verify empirical evidence across ministerial bodies and enterprise organizations. It enforces 100% national data sovereignty by executing fine-tuned models exclusively on sovereign on-premises infrastructure within the Republic of Iraq without cross-border telemetry. Core workflows encompass bilingual Arabic/Kurdish OCR extraction, automated multi-source compliance reconciliation, and an immutable cryptographic audit ledger—with final sign-off strictly reserved for human authorities.',
          keyFeatures: [
            'Evidence-grounded decision recommendation with mandatory human verification locks',
            'Bilingual Kurdish (Sorani) & Arabic document processing with 99.4% OCR precision',
            'Full air-gapped sovereign deployment within Iraqi national data centers',
            'Cryptographic hash chain recording an immutable audit trail for every query',
          ],
          targetAudience: [
            'Government ministries, regulatory commissions, and sovereign agencies',
            'Central Bank of Iraq, state commercial banks, and financial auditors',
            'State-owned enterprises, public health authorities, and logistics bodies',
          ],
          technologies: [
            'Next.js 15 App Router',
            'Python FastAPI Core',
            'Fine-Tuned KurdoArabic LLM',
            'PostgreSQL & pgvector',
            'Docker Air-Gapped Cluster',
            'mTLS & Zero-Trust Architecture',
          ],
          impact: 'Mitigates administrative error and accelerates high-stakes decisions through empirically grounded evidence by 65%.',
          status: 'Active & Governed by IDG',
          url: 'https://aigate.iq',
          link: '/en/products/aigate',
          external: false,
          ctaType: 'internal',
          mockupType: 'aigate',
        },
        {
          id: 'zana',
          numBadge: 'Product 002',
          code: 'IDG-PRD-002',
          name: 'ZaNa Academy',
          title: 'ZaNa Academy',
          subtitle: 'Standalone K-12 Sovereign Learning Platform',
          tagline: 'Standalone K-12 Sovereign Learning Platform',
          problem:
            'Students avoid asking questions out of shyness. Parents cannot help with lessons. Teachers cannot track every student individually. Questions remain unanswered.',
          owner: 'IDG Human Capital Division',
          description:
            'A fully independent platform for schools and students — a Kurdish K-12 learning system with teachers, curricula, and progress tracking. This product is a standalone platform completely separated from the main IDG corporate website.',
          detailedDescription:
            'An intelligent learning platform and AI tutor built for Kurdish students. It reads the official textbook in Kurdish Sorani, answers questions from the official source, generates parent reports, and adapts the learning pace to each student.',
          keyFeatures: [
            'Firebase Auth — student and admin login',
            'AI tutor — answers from the official textbook',
            'Kurdish content — Chemistry Grade 12 (371 pages)',
            'Security system — 3 layers: UI + Route + Server',
            'Progress tracking — D1 + Firebase',
            'Parent reports — for monitoring',
          ],
          targetAudience: [
            'Students — can ask anytime',
            'Parents — simple, clear reports',
            'Teachers — identify who needs help',
          ],
          technologies: [
            'React + TypeScript',
            'Firebase Auth',
            'Gemini File API',
            'Cloudflare D1',
            'UI + Route + Server',
          ],
          impact:
            'The first Kurdish AI learning companion delivering fair, adaptive education for every student.',
          status: 'external',
          badge: 'Standalone Platform',
          externalUrl: 'https://zana.idggov.tech',
          external: true,
          ctaType: 'external',
          audience: 'Schools • Students • Teachers • Parents',
          url: 'https://zana.idggov.tech',
          link: 'https://zana.idggov.tech',
          mockupType: 'zana',
        },
        {
          id: 'greenbelt',
          numBadge: 'Product 003',
          code: 'IDG-PRD-003',
          name: 'Green Belt',
          title: 'Green Belt',
          subtitle: 'Smart Circular Economy & Eco-Sovereignty',
          tagline: 'Smart Circular Economy & Eco-Sovereignty',
          problem: 'High municipal organic waste volume, insufficient environmental monitoring data, and lack of circular economy infrastructure.',
          owner: 'Circular Economy & Environmental Systems Core (IDG Sustainability Unit)',
          description:
            'Smart circular economy platform for organic food waste diversion, localized composting, environmental sensing, and verified real-time tree monitoring.',
          detailedDescription:
            'Green Belt is a circular economy and eco-sovereignty telemetry system structured to transform organic food waste management and environmental monitoring in Iraq. By deploying IoT sensor networks, spatial GIS analysis, and satellite remote sensing, Green Belt orchestrates localized waste collection pipelines, tracks biological composting maturation, and monitors the vitality of over 120,000 trees across Baghdad’s protective green belts to combat desertification and dust storms.',
          keyFeatures: [
            'Automated logistics tracking for organic food waste pickup from enterprises and institutions',
            'Real-time IoT telemetry monitoring compost core temperatures, aeration, and moisture',
            'Geospatial survival map monitoring tree canopy density and municipal irrigation health',
            'Auditable metric tracking for metric tons diverted, compost produced, and CO2 offset',
          ],
          targetAudience: [
            'Baghdad Municipality (Amanat Baghdad) and provincial municipal councils',
            'Ministry of Environment, Ministry of Agriculture, and agricultural cooperatives',
            'International environmental partners and sustainable development funds',
          ],
          technologies: [
            'Edge IoT Telemetry Nodes',
            'GIS & PostGIS Spatial Engine',
            'MQTT Real-Time Broker',
            'TimescaleDB Sensor Logging',
            'Satellite Vegetation Analysis',
            'REST API Integration Gateway',
          ],
          impact: 'Diverts tons of organic waste into sovereign compost resources with auditable environmental data and 120,000+ trees tracked.',
          status: 'Active Field Operations',
          url: 'https://greenbelt.iq',
          link: '/en/products/greenbelt',
          external: false,
          ctaType: 'internal',
          mockupType: 'greenbelt',
        },
        {
          id: 'impactiq',
          numBadge: 'Product 004',
          code: 'IDG-PRD-004',
          name: 'ImpactIQ',
          title: 'ImpactIQ',
          subtitle: 'Measuring True National Impact',
          tagline: 'Measuring True National Impact',
          problem: 'Absence of empirical impact measurement for national projects, reliance on imprecise estimates, and lack of auditable accountability.',
          owner: 'Sovereign MEAL & Institutional Evaluation Directorate (IDG Core)',
          description:
            'A sovereign impact measurement and analytics platform (MEAL Engine) powered by sovereign AI, enforcing 100% in-country data residency under ISO 27001 — transforming administrative oversight into an empirical, auditable science.',
          detailedDescription:
            'ImpactIQ is a national sovereign Monitoring, Evaluation, Accountability, and Learning platform (MEAL Engine) powered by sovereign intelligence. It mandates 100% in-country data residency under ISO 27001 guidelines to transform public sector oversight, municipal resource allocation, and development projects into an empirical, auditable science.',
          features: [
            'AI Predictive Impact Scoring',
            'Immutable Audit Trails',
            '100% Sovereign Hosting',
            'Sovereign NLP Reporting',
          ],
          keyFeatures: [
            'AI Predictive Impact Scoring — Empirical forecasting of project outcomes and socio-economic ROI',
            'Immutable Audit Trails — Cryptographic ledger ensuring tamper-proof compliance evidence',
            '100% Sovereign Hosting — Air-gapped on-premise execution strictly inside Iraqi borders',
            'Sovereign NLP Reporting — Multilingual Kurdish, Arabic, and English automated institutional reports',
          ],
          targetAudience: [
            'Government ministries and high commissions overseeing major development programs',
            'International development partners and multilateral development agencies',
            'Sovereign wealth funds and state investment entities',
          ],
          technologies: [
            'Sovereign Fine-Tuned NLP Models',
            'PostgreSQL & TimescaleDB',
            'Cryptographic Hash Ledger',
            'FastAPI & Next.js 15 App Router',
            'Air-Gapped Sovereign Infrastructure',
          ],
          impact: 'Transforms institutional decision-making into an auditable science with 100% in-country sovereign data residency.',
          status: 'active',
          badge: 'Strategic Initiative',
          link: '/en/products/impactiq',
          external: false,
          ctaType: 'internal',
          url: '/en/products/impactiq',
          mockupType: 'aigate',
        },
        {
          code: 'IDG-PRD-005',
          id: 'gatewayai',
          name: 'Gateway AI',
          title: 'Gateway AI',
          subtitle: 'Customs & Border Intelligence',
          numBadge: '5️⃣',
          tagline: 'The Sovereign Intelligent Gateway — Customs & Border Intelligence',
          description: 'National intelligent system for customs and border management, integrated with AI Gate Iraq, border corridors, national digital identity, and advanced AI technologies. Guarantees 100% in-country data residency compliant with ISO 27001 standards.',
          status: 'active',
          badge: 'Strategic Initiative',
          features: [
            'AI Risk Scoring Engine',
            'Computer Vision & X-Ray AI',
            'Border Crossing Digital Twin',
            'Immutable Audit Ledger (ISO 27001)',
            'Federal-Regional Customs Alignment',
            'Real-Time Monitoring & Reporting',
            'Unified Window for Traders'
          ],
          link: '/en/products/gateway-ai',
          external: false,
          ctaType: 'internal'
        },
      ],
      nsw: {
        badge: 'Strategic National Initiative — v1.0',
        fullTitle: '🇮🇶 Iraq National Single Window for Trade (Iraq NSW)',
        title: 'Iraq National Single Window for Trade',
        subtitle: 'National Single Window for Trade — Iraq',
        problem: 'Fragmented customs systems, no data integration between border crossings, long clearance times (48 hours), high cost per declaration ($1,000), low customs transparency (10%), and public revenue leakage.',
        architecture: 'Iraq NSW is a sovereign platform unifying border crossings, customs, banks and regulators. Goal: reduce clearance time from 48 hours to 7 hours, reduce cost from $1,000 to $400, and increase transparency from 10% to 90%+.',
        description: 'Iraq NSW is a sovereign platform unifying border crossings, customs, banks and regulators.',
        detailedDescription: 'Iraq NSW is a unified national system connecting all terrestrial, maritime and aerial border crossings of Iraq. Total budget: $180M | Timeline: 18 months | ROI: 420% (Year 3).',
        keyFeatures: [
          'Clearance time: 48 hours → 7 hours',
          'Cost per declaration: $1,000 → $400 (60% less)',
          'Transparency: 10% → 90%+',
          'Corruption reduction: 40% → 0%',
          'Unified integration: 10 borders + KRG',
          'AI/ML fraud detection: 70% → 90%',
          'OCR + LayoutLMv3 document validation',
          'Offline mode for borders without internet',
        ],
        targetAudience: [
          'General Customs Authority & Border Crossings',
          'Ministries of Trade, Transport, Health, Agriculture',
          'Central Bank of Iraq (CBI) & commercial banks',
          'Importers, exporters & shipping companies',
          'Kurdistan Region — KRG Customs',
        ],
        technologies: [
          'Go (Golang) + Python/FastAPI',
          'React.js + Next.js + RTL Support',
          'PostgreSQL + Firestore + BigQuery',
          'Kubernetes + Google Cloud Platform',
          'Vertex AI + TensorFlow/PyTorch',
          'Zero-Trust Security + OCR',
          'gRPC + REST API + Pub/Sub',
          'LayoutLMv3 + Dialogflow CX',
        ],
        owner: 'National Systems Architecture Taskforce — IDG',
        impact: '85% faster clearance, 60% lower cost, 9x transparency improvement, corruption reduced to 0% — ROI 420% by Year 3.',
        mockupType: 'nsw',
      },
    },
    governance: {
      heroTitle: 'Corporate Governance & Core Values',
      heroDesc:
        'Trust without governance is merely a slogan. At Iraq Digital Gateway (IDG), we unite operational discipline, transparency, and evidence-based decision-making to build a resilient institution that operates beyond reliance on individuals.',
      valuesTitle: 'Our Unchanging Values',
      values: [
        {
          title: 'National Responsibility 🇮🇶',
          desc: 'We view Iraq’s long-term institutional and economic capacity as a profound duty. We evaluate decisions based on national impact rather than immediate short-term returns.',
        },
        {
          title: 'Integrity by Design ⚖️',
          desc: 'Integrity must be embedded within incentives, data, contracts, and partnerships. We disclose material truths and surface conflicts proactively.',
        },
        {
          title: 'Evidence Before Assumptions 📊',
          desc: 'Strategic and product decisions begin with supported premises. We distinguish facts from opinions, adjusting our trajectory when evidence evolves.',
        },
        {
          title: 'Security & Sovereignty 🔒',
          desc: 'Trust depends on responsible data governance. We enforce least privilege access and rigorously audit vendor and jurisdictional risks.',
        },
        {
          title: 'Long-Term Ownership ⏳',
          desc: 'We accept lifecycle accountability for every system and commitment. We design from day one for continuous maintenance, orderly handover, and graceful decommissioning.',
        },
        {
          title: 'Human-Centric 👥',
          desc: 'Technology must respect human rights, dignity, and opportunities. We strictly maintain human review for all consequential AI-driven decisions.',
        },
      ],
      architectureTitle: 'Corporate Governance Architecture',
      tableHeaders: {
        domain: 'Governance Domain',
        principle: 'Principle',
        mechanism: 'Required Mechanism',
      },
      domains: [
        {
          domain: 'Decision-Making',
          principle: 'Authority follows materiality, domain expertise, risk exposure, and accountability.',
          mechanism: 'Decision rights matrix, written decision logs, and formalized review schedules.',
        },
        {
          domain: 'Accountability',
          principle: 'Every material outcome has a single accountable owner.',
          mechanism: 'Named owner, explicit objective, binding milestone deadline, and documented evidence of completion.',
        },
        {
          domain: 'Transparency',
          principle: 'Stakeholders receive rigorous, reliable information to operate and oversee.',
          mechanism: 'Governed reporting cadence, immutable audit trails, and mandatory incident disclosure.',
        },
        {
          domain: 'Security & Data',
          principle: 'Systems and sensitive data are governed as sovereign institutional trust assets.',
          mechanism: 'Data classification tiers, least privilege enforcement, and rigorous third-party risk controls.',
        },
      ],
      caseStudiesHeading: 'Institutional Case Studies & Evidence Chains',
      caseStudiesSubheading:
        'Every technical decision is evaluated through a strict evidence chain: Context -> Evidence -> Decision -> Impact -> Risk -> Next Step.',
      heading: 'Corporate Governance & Discipline',
      subheading:
        'Every technical decision is evaluated through a strict evidence chain: Context -> Evidence -> Decision -> Impact -> Risk -> Next Step.',
      frameworkTitle: 'Executive Governance Records (IDG Decisions)',
      cases: [
        {
          id: 'data-sov',
          title: 'National Data Sovereignty & Local Cloud Mandate',
          category: 'Infrastructure & Compliance',
          context: 'Sensitive institutional records distributed across insecure, off-shore foreign cloud hosts.',
          evidence: 'Over 70% of legacy public interfaces operate without binding local data sovereignty agreements.',
          decision: 'Mandate strict local residency: all data processed by IDG portfolio assets must be hosted within Iraqi soil.',
          impact: 'Secures full sovereign state jurisdiction over national strategic and economic data.',
          risk: 'Higher initial capital expenditure in establishing certified on-soil compute nodes.',
          nextStep: 'Enforce end-to-end sovereign encryption protocols across all production APIs.',
        },
        {
          id: 'ai-oversight',
          title: 'Applied AI Governance Under Direct Human Authority',
          category: 'Algorithmic Decision-Making',
          context: 'Unregulated deployment of foreign AI models introduces hallucination risk and cultural disconnect.',
          evidence: 'Generic international models lack domain precision regarding Iraqi administrative law and procedures.',
          decision: 'Prohibit autonomous final determinations without explicit human-in-the-loop sign-off across AI Gate Iraq modules.',
          impact: 'Prevents procedural malpractice and bolsters institutional trust in applied intelligence.',
          risk: 'Adds minor operational review time to automated pipelines.',
          nextStep: 'Publish the IDG Algorithmic Accountability Charter for all engineering units.',
        },
        {
          id: 'interop',
          title: 'Open Interoperability & Elimination of Vendor Lock-In',
          category: 'Software Architecture',
          context: 'Proprietary vendor silos prevent inter-agency communication and create permanent cost dependency.',
          evidence: 'Manual re-entry of duplicate forms across adjacent ministries and state banks.',
          decision: 'Enforce OpenAPI standards and unified national domain schemas across all IDG products.',
          impact: 'Dramatically reduces system integration expenses and accelerates public transaction velocity.',
          risk: 'Requires continuous technical coordination across disparate stakeholder teams.',
          nextStep: 'Release the IDG Public Interoperability Blueprint to institutional partners.',
        },
      ],
    },
    stakeholders: {
      heroTitle: 'Target Stakeholders & Partnerships',
      heroDesc:
        'Iraq Digital Gateway (IDG) serves diverse stakeholders through disciplined engagement tailored to each entity’s institutional role. We establish partnerships founded on strategic alignment, shared value, and verified empirical evidence.',
      items: [
        {
          icon: '🏛️',
          title: 'Government',
          desc: 'Strategic partnership for state modernization and public service. We aim to elevate institutional capacity, accountability, system interoperability, and sovereign national resilience.',
          actionText: 'Request Strategic Briefing →',
        },
        {
          icon: '🏢',
          title: 'Private Sector',
          desc: 'Trusted infrastructure platforms and transparent marketplaces. We equip enterprises with productivity tools, auditable transactions, market access, and operational intelligence.',
          actionText: 'Explore Enterprise Solutions →',
        },
        {
          icon: '📈',
          title: 'Investors',
          desc: 'Disciplined portfolio logic. Delivering predictable unit economics, transparent risk exposure, and durable long-term value creation in the Iraqi market.',
          actionText: 'View Investment Matrix →',
        },
        {
          icon: '🎓',
          title: 'Universities & Research',
          desc: 'A robust bridge between academic research and national priorities. Co-developing applied research, open data standards, and elite local engineering talent.',
          actionText: 'Research & Academic Programs →',
        },
        {
          icon: '🌍',
          title: 'International Organizations',
          desc: 'Local institutional ownership and responsible program delivery. Collaborating on verified technical assistance, international standards, and durable institutional capacity.',
          actionText: 'Development Partnerships →',
        },
        {
          icon: '👥',
          title: 'Citizens & Community',
          desc: 'High-utility, secure digital experiences. Guaranteeing universally accessible public services, preserved civil rights, and transparent inclusion for all stakeholders.',
          actionText: 'Trust & Integrity Metrics →',
        },
      ],
      rulesTitle: 'IDG Partnership Rules & Governance',
      rulesDesc:
        'The company maintains strict operational independence and institutional neutrality. Any assertion of legal status, formal endorsement, or joint engagement requires contemporary empirical evidence and executed written agreements. We rigorously evaluate all partnerships against risk boundaries, knowledge transfer, and perpetual sustainability.',
      heading: 'Target Stakeholders & Operational Sectors',
      subheading:
        'IDG acts as a sovereign institutional partner, translating operational friction into structured, accountable capability.',
      sectors: [
        {
          title: 'Public Sector Ministries & Authorities',
          mandate: 'Elevate governance capacity and achieve sovereign digital transformation.',
          outcomes: [
            'Evidence-grounded, disciplined decision-making systems',
            'Seamless integration with the National Single Window',
            'Sovereign protection and encryption of sensitive public records',
          ],
        },
        {
          title: 'Banking & Financial Institutions',
          mandate: 'Instill trust, cryptographic security, and transparency across financial transactions.',
          outcomes: [
            'Resilient interoperable financial architecture',
            'Automated risk management via verified empirical models',
            'Full compliance with national regulatory and anti-money laundering standards',
          ],
        },
        {
          title: 'Trade, Transport & Port Logistics',
          mandate: 'Modernize cross-border commerce and eliminate supply chain friction.',
          outcomes: [
            'Accelerated customs processing via Iraq NSW',
            'End-to-end verified tracking of cargo manifests',
            'Complete auditability and elimination of revenue diversion',
          ],
        },
        {
          title: 'Environmental & Circular Economy Initiatives',
          mandate: 'Preserve natural capital through circular infrastructure and field telemetry.',
          outcomes: [
            'Real-time ecological impact telemetry (Green Belt)',
            'Diversion of municipal food waste into high-grade organic resources',
            'Creation of skilled, high-value green employment',
          ],
        },
      ],
    },
    vision: {
      heading: 'Vision 2035: Sovereign Institutional Autonomy',
      subheading:
        'A phased, evidence-grounded strategic roadmap advancing Iraq from present structural friction to total technological sovereignty.',
      phases: [
        {
          era: '2024 - 2026',
          title: 'Phase I: Foundations & Data Sovereignty',
          target: 'Establish unified governance protocols and on-soil data residency',
          focus: 'Deploy core portfolio assets (AI Gate, ZaNa, Green Belt) and solidify sovereign Iraqi infrastructure.',
        },
        {
          era: '2026 - 2030',
          title: 'Phase II: National Scale & Single Window Integration',
          target: 'Unify commercial, banking, and border clearance systems',
          focus: 'Achieve nationwide operational rollout of Iraq NSW, linking ports, customs, and banks into one resilient network.',
        },
        {
          era: '2030 - 2035',
          title: 'Phase III: Technological Autonomy & Regional Leadership',
          target: 'Eliminate technological dependency and export proven institutional systems',
          focus: 'Transform Iraq from a digital consumer into a sovereign regional center of applied AI and enterprise infrastructure.',
        },
      ],
    },
    contactModal: {
      title: 'Institutional Inquiry with IDG',
      subtitle:
        'Iraq Digital Gateway exclusively addresses formal inquiries pertaining to institutional governance, strategic partnerships, and systems integration.',
      nameLabel: 'Full Name of Official / Lead',
      entityLabel: 'Organization / Ministry / Enterprise',
      sectorLabel: 'Sector',
      inquiryTypeLabel: 'Nature of Inquiry',
      messageLabel: 'Summary of Proven Problem or Institutional Scope',
      submitBtn: 'Submit Formal Inquiry',
      successTitle: 'Inquiry Successfully Recorded',
      successMsg: 'The IDG Governance Taskforce will evaluate the verified parameters and contact you through formal channels within standard operational timelines.',
      closeBtn: 'Dismiss',
      sectorOptions: [
        'Government Ministry / Public Authority',
        'Banking & Financial Institution',
        'Trade, Logistics & Customs',
        'Environmental & Agricultural Sector',
        'Academic & Research Institution',
      ],
      inquiryOptions: [
        'Strategic Partnership with IDG',
        'AI Gate Iraq Institutional Deployment',
        'ZaNa Academy Talent Program',
        'Green Belt Sustainability Project',
        'Iraq NSW Coordination & Integration',
      ],
    },
    about: {
      badge: 'About IDG • Institutional Scope',
      heading: 'About Iraq Digital Gateway (IDG)',
      subheading:
        'Sovereign Parent Company & Venture Studio: Transforming institutional complexity into dependable operational capability for Iraq.',
      missionTitle: 'Our Core Mission 🎯',
      missionDesc:
        'Building institutional, technological, and human capabilities by transforming structural problems into production-grade systems and responsible artificial intelligence.',
      visionTitle: 'Vision 2035 👁️',
      visionDesc:
        'By 2035, we will be an enduring, sovereign institution that makes public and private systems more interconnected and intelligent. We protect strategic data and transform local realities into international capabilities.',
      coreValuesTitle: 'Our Invariant Values:',
      coreValuesSubtitle: 'Three invariant principles that steer every architectural choice, institutional partnership, and venture within IDG:',
      coreValuesList: [
        {
          label: 'National Responsibility:',
          text: ' We evaluate decisions beyond immediate revenue based on enduring national impact.',
        },
        {
          label: 'Evidence Before Assumptions:',
          text: ' Strategy and engineering begin with verified, field-grounded conditions.',
        },
        {
          label: 'Security & Sovereignty:',
          text: ' Institutional trust rests on responsible data governance and domestic sovereignty.',
        },
      ],
      coreValues: [
        {
          badge: 'Sovereignty & Duty',
          title: 'National Stewardship & Data Sovereignty',
          desc: 'Prioritizing Iraq’s long-term institutional resilience and sovereign data residency over transient commercial opportunism. All core IP and operational data remain anchored domestically.',
        },
        {
          badge: 'Discipline & Truth',
          title: 'Evidence Before Assumptions',
          desc: 'System design and governance decisions are strictly informed by verified field metrics, audit-grade logs, and quantifiable economic impact rather than speculative hypotheses.',
        },
        {
          badge: 'Transparency & Openness',
          title: 'Integrity by Design & Open Interoperability',
          desc: 'Enforcing open standard APIs (OpenAPI), immutable transaction records, and zero vendor lock-in to eradicate corruption opportunities and institutional silos.',
        },
        {
          badge: 'Stewardship & Endurance',
          title: 'Perpetual Ownership & Capacity Transfer',
          desc: 'Building enduring institutional capacity through rigorous knowledge transfer and local talent incubation, ensuring platforms survive leadership transitions.',
        },
      ],
      transformationTitle: 'How We Transform Complexity into Reliable Capabilities',
      transformationDesc:
        'Iraq possesses abundant resources and ambitious human capital, yet confronts siloed architectures, paper-bound bureaucracy, and fragmented data. IDG’s engineering discipline converts this complexity into dependable capabilities across four systematic phases:',
      transformationStages: [
        {
          step: '01',
          title: 'Deconstruct Friction & Root Causes',
          subtitle: 'Empirical diagnosis of verified operational barriers',
          desc: 'Identifying underlying systemic bottlenecks, fragmented inter-agency handoffs, and archaic manual steps with granular field telemetry.',
          outcome: 'Auditable structural diagnosis and process dependency map',
        },
        {
          step: '02',
          title: 'Architect Sovereign Digital Backbones',
          subtitle: 'Open standards and unified institutional memory',
          desc: 'Drafting resilient microservices protocols, strict role-based access controls, and OpenAPI interoperability specifications that resist vendor lock-in.',
          outcome: 'Hardened, modular, and fully inspectable software architecture',
        },
        {
          step: '03',
          title: 'Deploy Production-Grade Platforms',
          subtitle: 'Strategic execution through IDG Portfolio Assets',
          desc: 'Shipping mission-critical platforms such as the Iraq National Single Window (Iraq NSW), AI Gate Iraq sovereign gateway, and automated reconciliation systems.',
          outcome: 'Elimination of paper workflows and activation of real-time velocity',
        },
        {
          step: '04',
          title: 'Cultivate Perpetual National Capability',
          subtitle: 'Long-term operational mastery and sovereignty',
          desc: 'Training Iraqi engineers and operators, running continuous SLA audits, and anchoring institutional knowledge within domestic institutions.',
          outcome: 'Autonomous, dependable digital self-reliance for Iraq',
        },
      ],
    },
    careers: {
      badge: 'Work With Us • Careers at IDG',
      heading: 'Careers & National Infrastructure Building',
      subheading:
        'Join the vanguard architecting Iraq’s sovereign digital future. We bring together disciplined engineers, researchers, and operational leaders driven to build lasting public capabilities.',
      cultureTitle: 'Work Culture at Iraq Digital Gateway',
      cultureDesc:
        'At IDG, our work is not merely a corporate tenure—it is a generational responsibility to Iraq’s future. We cultivate a meritocratic environment centered on deep craftsmanship, psychological safety, and uncompromised execution.',
      culturePillars: [
        {
          title: 'High Agency & National Impact',
          desc: 'Every system or interface you deploy directly touches millions of citizens, unlocks billions in trade velocity, and bolsters fiscal transparency.',
        },
        {
          title: 'Uncompromising Engineering Discipline',
          desc: 'We never compromise on software quality, cryptographic guarantees, or data integrity. We build to international apex standards adapted to Iraq’s unique realities.',
        },
        {
          title: 'Psychological Safety & Rigorous Debate',
          desc: 'Transparent, evidence-based critique is valued over bureaucratic hierarchy. The best technical argument with empirical data wins every time.',
        },
        {
          title: 'Domestic Talent Incubation',
          desc: 'We are committed to grooming Iraq’s next generation of elite systems architects, security researchers, and high-velocity engineering leaders.',
        },
      ],
      openingsTitle: 'Current Career Opportunities',
      openingsSubheading: 'If you are prepared to dedicate your talents to mission-critical sovereign infrastructure, explore our open positions:',
      openings: [
        {
          id: 'senior-sys-architect',
          title: 'Senior Distributed Systems Architect',
          dept: 'Core Infrastructure & Data Fabrics',
          location: 'Baghdad / Hybrid',
          type: 'Full-time',
          summary: 'Lead the architecture and implementation of sovereign, high-throughput APIs and fault-tolerant transactional backbones for national public platforms.',
          responsibilities: [
            'Architect sovereign data fabric and microservices backbones following OpenAPI specifications',
            'Ensure sub-second latency and zero-data-loss guarantees across millions of daily transactions',
            'Conduct rigorous code reviews and devise inter-agency protocol adapters for legacy systems',
          ],
          requirements: [
            'Proven track record with high-throughput distributed systems in Go, Rust, TypeScript, or Java',
            'Deep fluency in Kubernetes, on-premise cloud fabrics, and event-driven architectures (Kafka/NATS)',
            'Comprehensive understanding of relational correctness and data sovereignty boundaries',
          ],
        },
        {
          id: 'security-lead',
          title: 'Cybersecurity & Data Sovereignty Lead',
          dept: 'Information Security & Compliance',
          location: 'Baghdad',
          type: 'Full-time',
          summary: 'Direct national data residency protocols, zero-trust cryptographic architectures, and proactive red-teaming across all governed ventures.',
          responsibilities: [
            'Implement end-to-end encryption frameworks and sovereign HSM key management protocols',
            'Direct active incident response exercises, vulnerability assessments, and automated SAST/DAST audits',
            'Enforce secure coding guidelines across all IDG portfolio engineering teams',
          ],
          requirements: [
            'Minimum 5 years in production cybersecurity protecting mission-critical enterprise systems',
            'Industry certifications such as CISSP, OSCP, or equivalent empirical credentials',
            'Familiarity with national cybersecurity frameworks and sovereign data storage mandates',
          ],
        },
        {
          id: 'institutional-pm',
          title: 'Institutional Product Manager - Public Sector',
          dept: 'Product Strategy & Execution',
          location: 'Baghdad / Erbil',
          type: 'Full-time',
          summary: 'Serve as the strategic bridge translating ministerial requirements and regulatory standards into pristine technical specifications and roadmaps.',
          responsibilities: [
            'Deconstruct complex bureaucratic regulations into clear, auditable technical requirements',
            'Manage product milestones for flagship sovereign initiatives including Iraq NSW',
            'Quantify transaction completion rates, end-user latency, and user satisfaction metrics',
          ],
          requirements: [
            'Experience steering large-scale digital transformation or enterprise software programs',
            'Bilingual or trilingual communication skills (Arabic, Kurdish, English)',
            'Grounded understanding of cross-border trade, public finance, or municipal workflows',
          ],
        },
        {
          id: 'ai-nlp-engineer',
          title: 'AI & NLP Research Engineer',
          dept: 'Applied AI Research (AI Gate Iraq)',
          location: 'Hybrid',
          type: 'Full-time',
          summary: 'Train domain-adapted Kurdish and Arabic language models for automated document parsing, customs classification, and regulatory compliance.',
          responsibilities: [
            'Fine-tune deep learning models on Kurdish (Sorani/Badini) and Iraqi Arabic institutional corpora',
            'Develop automated structured data extraction pipelines for commercial and customs documentation',
            'Guarantee model explainability, deterministic outputs, and auditable reasoning chains',
          ],
          requirements: [
            'Hands-on expertise with PyTorch, HuggingFace, transformer architectures, and LLM optimization',
            'Demonstrated experience processing unstructured multi-lingual government and commercial text',
            'Advanced degree in Computer Science, Machine Learning, Computational Linguistics, or related field',
          ],
        },
        {
          id: 'trade-ops-analyst',
          title: 'Cross-Border Operations & Single Window Analyst',
          dept: 'Trade Infrastructure (Iraq NSW)',
          location: 'Basra / Baghdad',
          type: 'Full-time',
          summary: 'Analyze physical and digital freight clearance velocity at seaports, dry ports, and border crossings to eradicate clearance bottlenecks.',
          responsibilities: [
            'Track logistics velocity, customs clearance timelines, and manifest reconciliation metrics',
            'Identify on-the-ground points of friction and submit technical remediation requirements',
            'Support freight forwarders, shipping agents, and customs brokers in platform onboarding',
          ],
          requirements: [
            'Background in international trade, supply chain management, or customs brokerage operations',
            'Strong field analytical skills and comfort interfacing with multi-disciplinary stakeholders',
            'Fluency in data analysis tools for generating operational KPI intelligence',
          ],
        },
      ],
      applyTitle: 'Submit Application & Resume',
      applyDesc:
        'Submit your application for a specific role listed above or submit a General Talent Application to be considered for upcoming technical initiatives:',
      form: {
        positionLabel: 'Target Position',
        generalPositionOption: 'General Talent Application (All Disciplines)',
        fullNameLabel: 'Full Legal Name',
        fullNamePlaceholder: 'First Middle Last Name',
        emailLabel: 'Email Address',
        emailPlaceholder: 'you@example.com',
        phoneLabel: 'Phone Number',
        phonePlaceholder: '+964 7XX XXX XXXX',
        portfolioLabel: 'Professional Profile URL (LinkedIn / GitHub / Portfolio)',
        portfolioPlaceholder: 'https://linkedin.com/in/yourprofile',
        resumeLabel: 'Attach Resume / CV',
        resumePlaceholder: 'PDF or Word format (max 10MB)',
        coverNoteLabel: 'Statement of Motivation / Executive Summary',
        coverNotePlaceholder: 'Why do you want to build with IDG, and how will your expertise strengthen Iraq’s sovereign capabilities?',
        submitBtn: 'Submit Application',
        submittingBtn: 'Submitting...',
        successTitle: 'Application Successfully Received',
        successMsg: 'Thank you for your interest in building with IDG. Our talent acquisition committee will review your credentials and reach out if there is an alignment.',
        resetBtn: 'Submit Another Application',
      },
      banner: {
        ku: '⚠️ تێبینی گرنگ: ئێمە ئێستا لە قۆناغی سەرەتایی پێش-وەبەرهێنانداین (Pre-Seed). ئەم پۆستانە دوای تەواوبوونی خولی سەرمایە (Seed Round) دەبنە خاوەن مووچەی کێبڕکێکار. ئێستا ئێمە بۆ هاوبەشی ستراتیژی و ڕێککەوتنی پشک (Equity Partnership) و هاودامەزرێنەر پێشوازی دەکەین.',
        ar: '⚠️ ملاحظة مهمة: نحن حالياً في مرحلة التأسيس المبكرة (Pre-Seed). ستتم توظيف هذه المناصب برواتب تنافسية بعد جولة التمويل. نحن نرحب حالياً بالشراكة الاستراتيجية ونظام الحصص (Equity Partnership) والشركاء المؤسسين.',
        en: '⚠️ Important Note: We are currently in early-stage pre-seed. These roles will convert to competitive salaries post-funding. We currently welcome strategic co-founders and equity-based partnerships.',
      },
      compensation: {
        ku: 'پشک (Equity) + مووچەی کێبڕکێکار دوای دابینکردنی سەرمایە',
        ar: 'حصص (Equity) + راتب تنافسي بعد جولة التمويل',
        en: 'Equity + Competitive Salary Post-Funding',
      },
      ctaButton: {
        ku: 'ڕێککەوتن وەک بنیاتنەری هاوبەش',
        ar: 'التقديم كشريك مؤسس',
        en: 'Apply as Co-founder / Partner',
      },
      earlyStageNote: {
        ku: 'دەرفەتێکی دەگمەن بۆ ئەوەی ببیتە بەشێک لە دروستکردنی ژێرخانی دیجیتاڵی نیشتمانی لە قۆناغی سفرەوە.',
        ar: 'فرصة نادرة لتكون جزءاً من بناء البنية التحتية الرقمية الوطنية من نقطة الصفر.',
        en: 'A rare opportunity to build national digital infrastructure from ground zero.',
      },
      postFundingNote: {
        ku: 'هەموو ئەندامانی سەرەتایی خاوەنی پشکی فەرمی دەبن لە کۆمپانیا لەگەڵ گرێبەستی یاسایی پارێزراو.',
        ar: 'يحصل جميع الأعضاء الأوائل على حصص ملكية موثقة قانونياً في الشركة.',
        en: 'All early core contributors receive legal equity vesting agreements.',
      },
    },
    contactSection: {
      badge: 'Institutional Channel • Formal Inquiries',
      heading: 'Contact Us',
      subheading:
        'Direct gateway for sovereign partnerships, technical collaboration, and formal institutional inquiries.',
      introText:
        'We welcome strategic engagement with government ministries, public authorities, financial institutions, private sector leaders, and academic research institutions. Please complete the form below to initiate a formal, evidence-backed dialogue with IDG leadership.',
      partnershipNote:
        'All inquiries are evaluated against proven field necessity, institutional neutrality, and long-term national sovereignty.',
      hqLabel: 'Corporate Headquarters',
      hqValue: 'Baghdad, Iraq • Commercial & Technology District',
      emailLabel: 'Official Institutional Email',
      emailValue: 'contact@idggov.tech',
      hoursLabel: 'Standard Operational Response',
      hoursValue: 'Within 24 business hours (Sunday to Thursday, 8:30 AM to 4:30 PM)',
      channelsTitle: 'Specialized Engagement Tracks',
      channelsDesc: 'You may specify your area of interest (strategic partnership, Iraq NSW integration, AI Gate deployment) in the subject field.',
      form: {
        nameLabel: 'Full Name & Institutional Title',
        namePlaceholder: 'Full name, entity or company',
        emailLabel: 'Official Institutional Email Address',
        emailPlaceholder: 'name@institution.gov.iq or name@company.iq',
        subjectLabel: 'Subject of Inquiry',
        subjectPlaceholder: 'Summary (Strategic Partnership, Technical Inquiry, System Integration)',
        messageLabel: 'Message & Context of Inquiry or Partnership Opportunity',
        messagePlaceholder: 'Please describe the verified challenge or partnership opportunity you wish to explore...',
        submitBtn: 'Send Message',
        submittingBtn: 'Transmitting...',
        successTitle: 'Message Transmitted Successfully',
        successMsg: 'Thank you for contacting IDG. Our Governance Taskforce has logged your inquiry and will respond through official channels.',
        resetBtn: 'Send Another Message',
      },
    },
    faq: {
      badge: 'Frequently Asked Questions & Governance Briefs',
      heading: 'Stakeholder Frequently Asked Questions',
      subheading:
        'Official, evidence-led clarifications on corporate governance, sovereign digital infrastructure, data privacy, and portfolio architecture at Iraq Digital Gateway (IDG).',
      searchPlaceholder: 'Search governance, infrastructure, products, or partnership inquiries...',
      allCategory: 'All Inquiries',
      categories: {
        governance: 'Governance & Parent Company',
        infrastructure: 'Infrastructure & Data Sovereignty',
        products: 'Portfolio & Products (NSW)',
        partnerships: 'Partnership Models & Delivery',
      },
      items: [
        {
          id: 'faq-1',
          category: 'governance',
          question: 'What is IDG’s role as the sovereign parent company relative to products like AI Gate Iraq and ZaNa Academy?',
          answer:
            'IDG is the sovereign parent technology company and venture studio. Portfolio products such as "AI Gate Iraq" (Product 001), "ZaNa Academy", and "Green Belt" are dedicated portfolio assets governed directly by IDG. Products are never standalone parent entities; they operate as specialized technical platforms advancing national institutional capability under IDG’s unified architecture and sovereign oversight.',
          highlights: ['Sovereign Parent & Venture Studio', 'Governed Portfolio Assets', 'Unified Architecture'],
        },
        {
          id: 'faq-2',
          category: 'infrastructure',
          question: 'How does IDG guarantee institutional cybersecurity and data sovereignty within Iraq?',
          answer:
            'All sensitive institutional data is hosted, processed, and maintained inside sovereign data centers within Iraq’s national borders. Cross-border data leakage is strictly barred using Zero-Trust network architecture, AES-256 dual encryption, and immutable audit trails compliant with ISO 27001 standards. No national institutional records are ever exposed to external public clouds.',
          highlights: ['In-Country Data Hosting', 'Zero-Trust Protocol', 'Sovereign Cryptographic Standards'],
        },
        {
          id: 'faq-3',
          category: 'products',
          question: 'What is the Iraq National Single Window (Iraq NSW) and how does it transform trade corridors?',
          answer:
            'Iraq NSW is a strategic digital initiative governed by IDG to interconnect customs, maritime ports, land border terminals, regulatory ministries, and the Central Bank within a single interoperable environment. It compresses container clearance cycles from weeks to under 48 hours while enforcing total revenue transparency and eliminating paper tampering.',
          highlights: ['Unified Border Corridors', 'Under 48-Hour Clearance', 'Public Revenue Transparency'],
        },
        {
          id: 'faq-4',
          category: 'infrastructure',
          question: 'What is IDG’s philosophy on deploying Applied AI in Iraqi institutional sectors?',
          answer:
            'IDG explicitly rejects speculative AI hype and short-term marketing trends. We deploy Applied AI engineered around verified problems: fine-tuned Kurdish (Sorani) and Arabic natural language models for complex regulatory records, and automated algorithmic auditing of manifest discrepancies across border corridors.',
          highlights: ['Proven Problem Formulation', 'Kurdish & Arabic Natural Language Tuning', 'No Speculative Hype'],
        },
        {
          id: 'faq-5',
          category: 'governance',
          question: 'How is the "Accountable Owner" principle enforced across IDG initiatives?',
          answer:
            'No technical solution is authorized without first identifying a documented problem and a designated accountable owner. Every initiative has a named executive responsible for operational impact, security enforcement, and long-term continuity measured against quantifiable governance KPIs.',
          highlights: ['Designated Accountable Owner', 'Evidence Precedes Solutions', 'Measurable Impact Metrics'],
        },
        {
          id: 'faq-6',
          category: 'partnerships',
          question: 'How can governmental and private entities initiate a strategic partnership with IDG?',
          answer:
            'Partnerships initiate through rigorous institutional gap assessments and formal inter-agency protocols. We structure public-private partnerships (PPP) focused on long-term capacity building, with mandatory knowledge transfer ensuring national talent retains full operational sovereignty without external vendor lock-in.',
          highlights: ['Full Knowledge Transfer', 'Long-Term Public-Private Partnerships', 'Sovereign National Talent'],
        },
      ],
      stillHaveQuestions: 'Have further questions on governance or digital infrastructure?',
      supportDesc: 'IDG’s Governance and Institutional Relations taskforce is available to address formal stakeholder inquiries.',
      contactBtn: 'Contact Governance Taskforce',
    },
    backToTop: 'Back to Top',
    footer: {
      rights: '© 2026 Iraq Digital Gateway (IDG). All portfolio rights reserved.',
      parentDesc:
        'IDG is the sovereign parent company and venture studio dedicated to transforming fragmentation into reliable institutional capability in Iraq through governance, data, and secure applied technology.',
      links: {
        about: 'About Us',
        principles: 'Corporate Blueprint',
        governance: 'Financial & Data Governance',
        careers: 'Careers',
        contact: 'Contact Us',
        security: 'Data Sovereignty & Security',
        faq: 'FAQ',
      },
      newsletter: {
        title: 'Institutional Briefs & Periodic Updates',
        description:
          'Subscribe your institutional email to receive periodic IDG governance reports, strategic briefs, and digital infrastructure milestones.',
        placeholder: 'Institutional email address (e.g. name@entity.gov.iq)',
        submitBtn: 'Subscribe to Updates',
        submittingBtn: 'Registering Email...',
        successTitle: 'Successfully Registered',
        successMsg: 'Thank you. Your institutional address has been recorded. Periodic executive briefs will be dispatched to this inbox.',
        notice: 'Note: Exclusively intended for official and institutional stakeholders under strict privacy governance.',
        invalidEmail: 'Please enter a valid institutional email address.',
      },
    },
    help: {
      tutorials: {
        title: 'Training & Tutorials',
        subtitle: 'Video guides on working with systems and technical training instructions.',
        items: [
          {
            id: 'intro',
            duration: '14:20',
            badge: 'Introduction',
            title: 'Introduction to Sovereign Digital Architecture in Iraq',
            description: 'Overview of work philosophy, portfolio fundamentals, and core engineering missions at IDG.',
            videoUrl: 'https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ',
          },
          {
            id: 'nsw',
            duration: '09:45',
            badge: 'Platform',
            title: 'Operating the Iraq National Single Window (NSW) Platform',
            description: 'Step-by-step practical guide for institutional trade stakeholders and customs operations.',
            videoUrl: 'https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ',
          },
          {
            id: 'ai-oversight',
            duration: '11:10',
            badge: 'AI Governance',
            title: 'Human Oversight & Auditability in Applied AI Systems',
            description: 'Deep dive into evidence chains, audit logs, and human accountability in sovereign AI.',
            videoUrl: 'https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ',
          },
        ],
      },
    },
    team: {
      title: 'Our Team',
      subtitle: 'Dedicated leaders and engineering pioneers establishing Iraq’s digital sovereignty.',
      leadership: 'Executive Leadership',
      leadershipDesc: 'Founders and C-level executives directing national technology strategy and institutional architecture.',
      coreTeam: 'Core Engineering & Specialized Team',
      coreTeamDesc: 'Senior specialists across systems architecture, cybersecurity, cloud infrastructure, and product execution.',
      joinUs: 'Join Our Mission',
      joinUsDesc: 'Interested in making a profound, enduring impact on Iraq’s sovereign digital future?',
      viewPositions: 'View Open Positions',
      departments: {
        all: 'All Departments',
        leadership: 'Leadership',
        engineering: 'Engineering & Infrastructure',
        product: 'Product & Design',
        operations: 'Operations & Partnerships',
        communications: 'Communications',
      },
      labels: {
        bio: 'Biography',
        expertise: 'Areas of Expertise',
        connect: 'Connect & Socials',
        viewProfile: 'View Profile',
        backToTeam: 'Back to Team Directory',
        keyFocus: 'Key Strategic Focus',
        achievements: 'Notable Achievements',
      },
    },
  },
};
