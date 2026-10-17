export type TeamRole = 'leadership' | 'core';
export type Department = 'leadership' | 'engineering' | 'product' | 'operations' | 'communications';

export interface TeamMember {
  id: string;
  slug: string;
  name: string;
  nameEn: string;
  title: string;
  titleEn: string;
  role: TeamRole;
  department: Department;
  bio: string;
  fullBio: string[];
  background: string;
  achievements: string[];
  expertise: string[];
  image: string;
  initials: string;
  social: {
    linkedin?: string;
    twitter?: string;
    github?: string;
    email?: string;
  };
  featured?: boolean;
}

export const teamMembers: Record<'ku' | 'ar' | 'en', TeamMember[]> = {
  ku: [
    // LEADERSHIP
    {
      id: 'mustafa-jalal',
      slug: 'mustafa-jalal',
      name: 'مستەفا جەلال مستەفا خۆشناو',
      nameEn: 'Mustafa Jalal Mustafa Khoshnaw',
      title: 'بنیاتنەر و بەڕێوەبەری جێبەجێکار (CEO)',
      titleEn: 'Founder & Chief Executive Officer',
      role: 'leadership',
      department: 'leadership',
      bio: 'سەرکردەیەکی خاوەن دیدگا بە زیاتر لە ١٥ ساڵ ئەزموون لە ڕابەرایەتیکردنی گۆڕانکاریی دیجیتاڵی، بنیاتنەری IDG بە ئامانجی هێنانی سەروەریی تەکنۆلۆژی بۆ عێراق.',
      fullBio: [
        'مستەفا جەلال مستەفا خۆشناو وەک بنیاتنەر و سەرۆکی جێبەجێکاری دەروازەی دیجیتاڵیی عێراق (IDG)، کار لەسەر داڕشتنەوەی پێکهاتەی دیجیتاڵی و سیستەمە سەروەرەکانی عێراق دەکات. بە پێشینەیەکی فراوان لە ئەندازیاریی نەرمەکاڵا و ڕاوێژکاری ستراتیژی بۆ کەرتی گشتی، چوارچێوەیەکی تۆکمەی بۆ تەکنەلۆژیای نیشتمانی بونیاد ناوە.',
        'لە ژێر سەرپەرشتی ئەودا، IDG لە ستۆدیۆیەکی داهێنانەوە گەشەی کرد بۆ کۆمپانیایەکی دایکی سەروەر کە سەرپەرشتی ١٢+ پلاتفۆرمی نیشتمانی و ژێرخانی پاشەکەوتی داتای خاوەن متمانە دەکات. فەلسەفەی کارکردنی ئەو لەسەر بنەمای بەهێزکردنی سەروەریی داتای عێراق و کۆتاییهێنان بە بەستراوەیی دەرەکییە.',
        'ئەو ڕاوێژکاری باڵای چەندین دەستپێشخەریی مۆدێرنیزەکردنی سیستەمی بانکی، حکومەتی ئەلیکترۆنی، و ئاسایشی سایبەری بووە لە سەرانسەری عێراق و هەرێمی کوردستان.'
      ],
      background: 'ئەندازیاری نەرمەکاڵا، دامەزرێنەری پڕۆژەی تەکنەلۆژی، و ڕاوێژکاری حوکمڕانیی دیجیتاڵی بۆ پڕۆژە نیشتمانییەکان.',
      achievements: [
        'دامەزراندنی دەروازەی دیجیتاڵیی عێراق (IDG) وەک کۆمپانیای دایکی سەروەر',
        'ڕابەرایەتیکردنی تەلارسازیی ناسنامەی دیجیتاڵیی یەکگرتووی نیشتمانی',
        'داڕشتنی ستانداردی حوکمڕانی داتای سەروەر لەسەر ئاستی عێراق',
        'دەستپێشخەریی ئەکادیمیای زانا بۆ پێگەیاندنی زیاتر لە ٥٠٠ ئەندازیاری عێراقی'
      ],
      expertise: ['سەرکردایەتیی ستراتیژی', 'سەروەریی دیجیتاڵی', 'تەلارسازیی GovTech', 'حوکمڕانیی داتا', 'ستۆدیۆی وەبەرهێنان'],
      image: '/images/team/mustafa-jalal.svg',
      initials: 'MK',
      social: {
        linkedin: 'https://linkedin.com/in/mustafajalal',
        twitter: 'https://x.com/mustafajalal',
        email: 'mustafa@idggov.tech',
      },
      featured: true,
    },
    {
      id: 'alan-rezan',
      slug: 'alan-rezan',
      name: 'د. ئالان ڕێزان',
      nameEn: 'Dr. Alan Rezan',
      title: 'سەرۆکی جێبەجێکاری تەکنەلۆژیا (CTO)',
      titleEn: 'Chief Technology Officer',
      role: 'leadership',
      department: 'leadership',
      bio: 'سەرپەرشتیاری تەواوی ژێرخانی تەکنەلۆژیا، کلاودی سەروەر، سیستەمی زیرەکیی دەستکرد و تەلارسازیی پارێزراوی Zero-Trust.',
      fullBio: [
        'د. ئالان ڕێزان خاوەنی بڕوانامەی دکتۆرایە لە سیستەمە دابەشکراوەکان و پاراستنی زانیاری. بە زیاتر لە ١٤ ساڵ ئەزموون لە ڕابەرایەتی تەکنیکی پڕۆژە زەبەلاحەکان، سەرپەرشتی تەواوی ئۆپەراسیۆنە ئەندازیارییەکانی IDG دەکات.',
        'ڕۆڵی سەرەکی دەگێڕێت لە داڕشتنی ناوەندەکانی داتای ناوخۆیی و گەرەنتیکردنی کەمترین کاتی وەستانی سیستەم (99.98% SLA) و پەرەپێدانی مۆدێلە نیشتمانییەکانی ژیریی دەستکرد بۆ خزمەتگوزارییە حکومییەکان.'
      ],
      background: 'دکتۆرا لە سیستەمە دابەشکراوەکان، ئەندازیاری باڵای ژێرخانی کلاود و ئاسایشی زانیاری.',
      achievements: [
        'جێبەجێکردنی تەلارسازیی دابەشکراوی بەرگەگری بەرز بۆ سیستەمی بانکی',
        'سەرپەرشتیکردنی بنیاتنانی کلاودی نیشتمانی لە ناوەندەکانی داتای عێراق',
        'بەدەستهێنانی بڕوانامەی ستانداردی نێودەوڵەتی ISO 27001 بۆ ژێرخانی IDG'
      ],
      expertise: ['تەلارسازیی کلاود', 'سیستەمی دابەشکراو', 'Zero-Trust Security', 'فێربوونی ئامێر (AI/ML)', 'پاشەکەوتی سەروەر'],
      image: '/images/team/alan-rezan.svg',
      initials: 'AR',
      social: {
        linkedin: 'https://linkedin.com/in/alanrezan',
        github: 'https://github.com/alanrezan',
        email: 'alan@idggov.tech',
      },
      featured: true,
    },
    {
      id: 'dalia-farhad',
      slug: 'dalia-farhad',
      name: 'دالیا فەرهاد',
      nameEn: 'Dalia Farhad',
      title: 'سەرۆکی جێبەجێکاری کارگێڕی (COO)',
      titleEn: 'Chief Operating Officer',
      role: 'leadership',
      department: 'leadership',
      bio: 'بەڕێوەبەری ئۆپەراسیۆنە کارگێڕییەکان، هەماهەنگیی دامەزراوەیی لەگەڵ کەرتی گشتی، و پەرەپێدانی هاوبەشییە ستراتیژییە نیشتمانییەکان.',
      fullBio: [
        'دالیا فەرهاد ڕابەرایەتی کارە ئۆپەراسیۆنی و کارگێڕییەکانی دەروازەی دیجیتاڵیی عێراق دەکات، بە تیشکخستنە سەر خێرایی جێبەجێکردن، هاوسەنگی دامەزراوەیی و پاراستنی بەرزترین ئاستی ڕوونبینی و حوکمڕانی.',
        'خاوەنی ماستەرە لە بەڕێوەبردنی ستراتیژی و زیاتر لە ١١ ساڵ ئەزموونی لە هاوئاهەنگکردنی وەزارەتەکان، فەرمانگە پەیوەندیدارەکان و کەرتی تایبەتدا هەیە بۆ بەدیهێنانی گۆڕانکاریی بێ کێشە.'
      ],
      background: 'ماستەر لە بەڕێوەبردنی کارگێڕی (MBA)، پسپۆڕی بەڕێوەبردنی گۆڕانکاریی ڕێکخراوەیی و پڕۆژە نیشتمانییەکان.',
      achievements: [
        'بەستنەوەی هاوبەشیی ستراتیژی لەگەڵ زیاتر لە ٤٥ دامەزراوەی گشتی و تایبەت',
        'کەمکردنەوەی کاتی دەستپێکردنی پڕۆژە نوێیەکان بە ڕێژەی ٤٠٪',
        'دامەزراندنی چوارچێوەی بەدواداچوونی KPI بۆ تەواوی پلاتفۆرمەکان'
      ],
      expertise: ['ئۆپەراسیۆنی دامەزراوەیی', 'هاوبەشیی ستراتیژی', 'بەڕێوەبردنی گۆڕانکاری', 'حوکمڕانیی کارگێڕی', 'ڕێککەوتنی ئاستی خزمەتگوزاری'],
      image: '/images/team/dalia-farhad.svg',
      initials: 'DF',
      social: {
        linkedin: 'https://linkedin.com/in/daliafarhad',
        email: 'dalia@idggov.tech',
      },
      featured: true,
    },
    {
      id: 'zana-othman',
      slug: 'zana-othman',
      name: 'زانا عوسمان',
      nameEn: 'Zana Othman',
      title: 'سەرۆکی داهێنان و پێشخستنی وەبەرهێنان (CIO)',
      titleEn: 'Chief Innovation Officer & Head of Studio',
      role: 'leadership',
      department: 'leadership',
      bio: 'ڕابەری دەستپێشخەرییەکانی ئەکادیمیای زانا و ستۆدیۆی وەبەرهێنان بۆ گەشەپێدانی توانای گەنجان و کادرە تەکنیکییەکانی داهاتوو.',
      fullBio: [
        'زانا عوسمان سەرپەرشتی دەستپێشخەرییەکانی ئەکادیمیای زانا و ستۆدیۆی وەبەرهێنانی تەکنەلۆژی دەکات لە IDG. سەرنجی سەرەکی لەسەر بەهێزکردنی توانای گەنجانی عێراقە لە ڕێگەی ڕاهێنانی ئەندازیاری و خێراکردنی کارسازە تەکنۆلۆژییەکان.',
        'بە ئەزموونێکی دەوڵەمەند لە ژینگەی کارسازی و پەروەردەی تەکنیکی، پڕۆگرامگەلێکی داڕشتووە کە بە شێوەیەکی ڕاستەوخۆ دەستی کاری نیشتمانی دەبەستێتەوە بە بەرهەمە دیجیتاڵییە سەروەرەکانەوە.'
      ],
      background: 'کارسازی تەکنەلۆژی، ڕاهێنەری نێودەوڵەتی، و بەڕێوەبەری ئەکادیمیای پێشەنگی پرۆگرامسازی.',
      achievements: [
        'ڕاهێنانی زیاتر لە ٥٠٠ گەنج لە بوارەکانی سۆفتوێر و زیرەکیی دەستکرد',
        'بەرهەمهێنانی ١٠+ کۆمپانیای دەرکەوتوو لە ستۆدیۆی وەبەرهێنانی IDG',
        'داڕشتنی پڕۆگرامی نیشتمانی بۆ ڕاهێنانی زانکۆکان لە بواری کلاود'
      ],
      expertise: ['ستۆدیۆی وەبەرهێنان', 'پەروەردەی تەکنەلۆژی (EdTech)', 'کارسازی و داهێنان', 'ڕاهێنانی کادری نیشتمانی', 'ستراتیژی وەبەرهێنان'],
      image: '/images/team/zana-othman.svg',
      initials: 'ZO',
      social: {
        linkedin: 'https://linkedin.com/in/zanaothman',
        twitter: 'https://x.com/zanaothman',
        email: 'zana@idggov.tech',
      },
      featured: true,
    },

    // CORE TEAM
    {
      id: 'kardo-sleman',
      slug: 'kardo-sleman',
      name: 'کاردۆ سلێمان',
      nameEn: 'Kardo Sleman',
      title: 'تەلارسازی باڵای باکێند و سیستەمەکان',
      titleEn: 'Lead Backend & Systems Architect',
      role: 'core',
      department: 'engineering',
      bio: 'تەلارسازی سیستەمە گەورەکانی باکێند لەسەر بنەمای مایکرۆسێرڤس و داتابەیسی سەروەر بە زمانەکانی Go و Rust.',
      fullBio: [
        'کاردۆ سەرپەرشتی تەلارسازی باکێندی هەموو پلاتفۆرمە سەرەکییەکانی IDG دەکات. گرنگی تایبەت دەدات بە شێوازی پەیوەندی پارێزراوی API و ڕەچاوکردنی خێرایی و پاراستنی زانیارییە نیشتمانییەکان.'
      ],
      background: 'ئەندازیاری باڵای نەرمەکاڵا بە ٨ ساڵ ئەزموون لە سیستەمە دارایی و بانکییەکان.',
      achievements: ['داڕشتنی بزوێنەری خێرای خزمەتگوزارییە بانکییەکان', 'کەمکردنەوەی کاتی وەڵامدانەوەی API بە ڕێژەی ٦٥٪'],
      expertise: ['Go', 'Rust', 'PostgreSQL', 'Microservices Architecture', 'High-Throughput APIs'],
      image: '/images/team/kardo-sleman.svg',
      initials: 'KS',
      social: {
        linkedin: 'https://linkedin.com/in/kardosleman',
        github: 'https://github.com/kardosleman',
        email: 'kardo@idggov.tech',
      },
    },
    {
      id: 'naza-karim',
      slug: 'naza-karim',
      name: 'نـازە کەریم',
      nameEn: 'Naza Karim',
      title: 'ئەندازیاری باڵای فرۆنتێند و تەکنەلۆژیای دیزاین',
      titleEn: 'Principal Frontend Engineer',
      role: 'core',
      department: 'engineering',
      bio: 'سەرپەرشتیاری تیمی ڕووکاری بەکارهێنەر، پسپۆڕ لە شێوازی فرەزمانی (RTL/LTR) و ستانداردەکانی پێڕاگەیشتن.',
      fullBio: [
        'نازە پسپۆڕە لە Next.js، دیزاین سیستەمی کۆمپانیا و ئەزموونی وەڵامدەرەوەی خێرا. ئەو ڕووکارێکی یەکگرتوو و مۆدێرن بۆ هەموو پلاتفۆرمەکانی IDG دابین دەکات.'
      ],
      background: 'ئەندازیاری کۆمپیوتەر، پسپۆڕی تەلارسازی فرۆنتێند بە ٧ ساڵ ئەزموون.',
      achievements: ['بنیاتنانی سیستەمی یەکگرتووی کۆمپۆنێنتەکانی IDG', 'بەدەستهێنانی ئاستی ١٠٠٪ لە تێستەکانی ئەدای وێب'],
      expertise: ['Next.js / React', 'TypeScript', 'Design Systems', 'RTL Optimization', 'Web Accessibility'],
      image: '/images/team/naza-karim.svg',
      initials: 'NK',
      social: {
        linkedin: 'https://linkedin.com/in/nazakarim',
        github: 'https://github.com/nazakarim',
        email: 'naza@idggov.tech',
      },
    },
    {
      id: 'hewa-azad',
      slug: 'hewa-azad',
      name: 'هێوا ئازاد',
      nameEn: 'Hewa Azad',
      title: 'ئەندازیاری باڵای دێڤئۆپس و ژێرخانی سەروەر',
      titleEn: 'Lead DevOps & Sovereign Infrastructure Engineer',
      role: 'core',
      department: 'engineering',
      bio: 'شارەزا لە تەلارسازیی Kubernetes، کڵاستەرە ناوخۆییەکان و ئۆتۆماتیککردنی زنجیرەی CI/CD لە کلاودی نیشتمانیدا.',
      fullBio: [
        'هێوا گرەرنتی بەردەوامی بێ پچڕانی ژێرخانی IDG دەکات. پسپۆڕە لە دامەزراندنی ناوەندەکانی داتا بە ستانداردی Tier-IV و بەڕێوەبردنی سیستەمی پاراستن لە کاتی لەکارکەوتن.'
      ],
      background: 'ئەندازیاری تۆڕ و کلاود، خاوەنی بڕوانامەی CKA و RHCE.',
      achievements: ['ئۆتۆماتیککردنی تەواوی پرۆسەی Deploy', 'پاراستنی ٩٩.٩٨٪ بەردەوامی لە ماوەی دوو ساڵی ڕابردوودا'],
      expertise: ['Kubernetes', 'Docker', 'Terraform', 'Bare-Metal Clusters', 'CI/CD Pipelines'],
      image: '/images/team/hewa-azad.svg',
      initials: 'HA',
      social: {
        linkedin: 'https://linkedin.com/in/hewaazad',
        github: 'https://github.com/hewaazad',
        email: 'hewa@idggov.tech',
      },
    },
    {
      id: 'rayyan-tariq',
      slug: 'rayyan-tariq',
      name: 'ڕەیان تاریق',
      nameEn: 'Rayyan Tariq',
      title: 'سەرپەرشتیاری ئاسایشی زانیاری و بەرگریی هەڕەشەکان',
      titleEn: 'Information Security & Threat Defense Specialist',
      role: 'core',
      department: 'engineering',
      bio: 'بەڕێوەبەری ئۆپەراسیۆنەکانی ناوەندی ئاسایشی سایبەری (SOC)، دۆزینەوەی هەڕەشەکان و مۆدێلی پاراستنی کریپتۆگرافی.',
      fullBio: [
        'ڕەیان چاودێری ٢٤/٧ی هەموو لێشاوەکانی داتای سیستەمەکە دەکات. بەرپرسیارە لە پاراستنی دەروازەکان بەرامبەر بە هێرشە پێشکەوتووەکان و جێبەجێکردنی ستانداردە سەروەرەکان.'
      ],
      background: 'پسپۆڕی ئاسایشی سایبەری، خاوەنی بڕوانامەکانی CISSP و CEH.',
      achievements: ['پوچەڵکردنەوەی زیاتر لە ملیۆنێک هەوڵی دزەکردن بۆ ناو تۆڕی نیشتمانی', 'دانانی سیستەمی پێشوەختەی ئاگادارکردنەوە'],
      expertise: ['SOC Operations', 'Zero-Trust Protocol', 'Cryptography', 'Penetration Testing', 'Incident Response'],
      image: '/images/team/rayyan-tariq.svg',
      initials: 'RT',
      social: {
        linkedin: 'https://linkedin.com/in/rayyantariq',
        email: 'rayyan@idggov.tech',
      },
    },
    {
      id: 'sakar-omer',
      slug: 'sakar-omer',
      name: 'ساکار عومەر',
      nameEn: 'Sakar Omer',
      title: 'بەڕێوەبەری سەرەکی بەرهەمە دیجیتاڵییەکان',
      titleEn: 'Principal Product Manager',
      role: 'core',
      department: 'product',
      bio: 'سەرپەرشتیاری پلانی ستراتیژی بەرهەمەکان، گۆڕینی پێداویستییە دامەزراوەییە ئاڵۆزەکان بۆ ئەزموونێکی کارای بەکارهێنەر.',
      fullBio: [
        'ساکار پەیوەندی نێوان لایەنە پەیوەندیدارە حکومییەکان و تیمە ئەندازیارییەکان ڕێکدەخات بۆ دڵنیابوون لەوەی بەرهەمەکان وەڵامدەرەوەی تەواوی پێداویستییە هاوچەرخەکانن.'
      ],
      background: 'بەڕێوەبەری بەرهەم بە ٦ ساڵ ئەزموون لە خزمەتگوزارییە دیجیتاڵییەکانی GovTech و FinTech.',
      achievements: ['سەرکەوتووانە بەگەڕخستنی پلاتفۆرمی خزمەتگوزارییە حکومییەکان', 'زیادکردنی ڕەزامەندی هاووڵاتیان بۆ ٩٢٪'],
      expertise: ['Product Strategy', 'GovTech Workflows', 'Roadmap Planning', 'Agile Leadership', 'User Research'],
      image: '/images/team/sakar-omer.svg',
      initials: 'SO',
      social: {
        linkedin: 'https://linkedin.com/in/sakaromer',
        email: 'sakar@idggov.tech',
      },
    },
    {
      id: 'lana-bakhtiyar',
      slug: 'lana-bakhtiyar',
      name: 'لانە بەختیار',
      nameEn: 'Lana Bakhtiyar',
      title: 'تەلارسازی دیزاین و ئەزموونی بەکارهێنەر (UX/UI)',
      titleEn: 'Senior UX/UI & Design Systems Architect',
      role: 'core',
      department: 'product',
      bio: 'داڕێژەری تەلارسازیی بینراوی پلاتفۆرمەکان، بە گرنگیدان بە سادەیی کارپێکردن، تایپۆگرافی عەرەبی و کوردی، و دەستڕاگەیشتن.',
      fullBio: [
        'لانە دڵنیایی دەدات لەوەی کە هەموو بەکارهێنەرێکی عێراقی دەتوانێت بە ئاسانی و بە ڕێزەوە مامەڵە لەگەڵ خزمەتگوزارییە حکومی و دیجیتاڵییەکان بکات.'
      ],
      background: 'دیزاینەری باڵای UX، لێکۆڵەری ڕەفتاری بەکارهێنەر لەگەڵ ئەزموون لە ڕێکخراوە جیهانییەکان.',
      achievements: ['داڕشتنی ڕێبەری دیزاینی نیشتمانی بۆ شاشە دیجیتاڵییەکان', 'ڕەچاوکردنی ستانداردی دەستڕاگەیشتنی WCAG 2.1 AAA'],
      expertise: ['Design Systems', 'Figma', 'Bilingual Typography', 'Accessibility (WCAG)', 'Interaction Design'],
      image: '/images/team/lana-bakhtiyar.svg',
      initials: 'LB',
      social: {
        linkedin: 'https://linkedin.com/in/lanabakhtiyar',
        email: 'lana@idggov.tech',
      },
    },
    {
      id: 'ahmad-al-bayati',
      slug: 'ahmad-al-bayati',
      name: 'ئەحمەد بەیاتی',
      nameEn: 'Ahmad Al-Bayati',
      title: 'بەڕێوەبەری هاوبەشییە دامەزراوەییەکان و حوکمڕانی',
      titleEn: 'Institutional Partnerships & Governance Lead',
      role: 'core',
      department: 'operations',
      bio: 'سەرپەرشتیاری یاسایی و هاوئاهەنگیکار لەگەڵ لایەنە ڕێکخەرەکان بۆ دڵنیابوون لە جێبەجێکردنی یاساکانی سەروەریی داتا.',
      fullBio: [
        'ئەحمەد خاوەنی ئەزموونێکی دەوڵەمەندە لە سیاسەتی گشتی و چوارچێوە یاساییەکانی داتا و تەکنەلۆژیا، کاردەکات بۆ بەهێزکردنی پەیوەندییە دامەزراوەییەکان.'
      ],
      background: 'یاساناس و پسپۆڕی حوکمڕانی داتا بە ٩ ساڵ ئەزموون لە کەرتی پەیوەندییەکان و سیاسەتی گشتی.',
      achievements: ['نووسینەوەی چوارچێوەی یاسایی پاراستنی زانیارییە کەسییەکان', 'ئەنجامدانی ڕێککەوتننامەی کاری هاوبەش لەگەڵ زانکۆکان'],
      expertise: ['Regulatory Compliance', 'Data Sovereignty Laws', 'Public Affairs', 'Institutional Governance'],
      image: '/images/team/ahmad-al-bayati.svg',
      initials: 'AB',
      social: {
        linkedin: 'https://linkedin.com/in/ahmadalbayati',
        email: 'ahmad@idggov.tech',
      },
    },
    {
      id: 'sara-hassan',
      slug: 'sara-hassan',
      name: 'سارا حەسەن',
      nameEn: 'Sara Hassan',
      title: 'سەرپەرشتیاری گەشەپێدانی سەرچاوە مرۆییەکان و بەهرەکان',
      titleEn: 'Head of People & Talent Acquisition',
      role: 'core',
      department: 'operations',
      bio: 'ڕابەری دۆزینەوە و پێگەیاندنی لێهاتووە تەکنیکییە عێراقییەکان، بنیاتنانی ژینگەیەکی لەباری داهێنەرانە بۆ کادرەکان.',
      fullBio: [
        'سارا بەرپرسیارە لە دەستنیشانکردنی بلیمەتە تەکنیکییەکان و دروستکردنی کەشێکی کاری هاندەر کە تێیدا داهێنان و سەروەریی نیشتمانی ببنە بەهای ڕۆژانە.'
      ],
      background: 'ماستەر لە سەرچاوە مرۆییەکان، ڕاوێژکاری دامەزراندنی کادیرانی تەکنیکی بە ٨ ساڵ ئەزموون.',
      achievements: ['زیادکردنی ڕێژەی بەشداریکردنی خانمان لە تیمی ئەندازیاریدا بۆ ٤٠٪', 'دامەزراندنی بەرنامەی فێرکاری ناوخۆیی'],
      expertise: ['Technical Recruiting', 'Culture Building', 'Talent Development', 'HR Analytics'],
      image: '/images/team/sara-hassan.svg',
      initials: 'SH',
      social: {
        linkedin: 'https://linkedin.com/in/sarahassan',
        email: 'sara@idggov.tech',
      },
    },
    {
      id: 'diyar-mahmoud',
      slug: 'diyar-mahmoud',
      name: 'دیار مەحموود',
      nameEn: 'Diyar Mahmoud',
      title: 'سەرپەرشتیاری پەیوەندییە گشتییەکان و ڕاگەیاندن',
      titleEn: 'Head of Communications & Public Engagement',
      role: 'core',
      department: 'communications',
      bio: 'ڕابەری گەیاندنی پەیامی سەروەریی دیجیتاڵی، بەڕێوەبردنی پێگەی دەزگایی IDG لە ناوەندە میدیایی و پیشەگەرییەکاندا.',
      fullBio: [
        'دیار بەرپرسیارە لە داڕشتنی گوتاری گشتی دەروازەی دیجیتاڵیی عێراق و ناساندنی پرۆژە نیشتمانییەکان بە کۆمەڵگەی ناوخۆیی و نێودەوڵەتی.'
      ],
      background: 'ڕۆژنامەنووس و بەڕێوەبەری پەیوەندییە گشتییەکان لە دەزگا باڵاکانی میدیا بە ٧ ساڵ ئەزموون.',
      achievements: ['بەڕێوەبردنی کەمپەینی نیشتمانی بۆ هۆشیاری ئاسایشی دیجیتاڵی', 'بڵاوکردنەوەی ڕاپۆرتی ساڵانەی سەروەری تەکنەلۆژی'],
      expertise: ['Strategic Communications', 'Public Engagement', 'Content Strategy', 'Brand Governance'],
      image: '/images/team/diyar-mahmoud.svg',
      initials: 'DM',
      social: {
        linkedin: 'https://linkedin.com/in/diyarmahmoud',
        twitter: 'https://x.com/diyarmahmoud',
        email: 'diyar@idggov.tech',
      },
    },
  ],

  ar: [
    // LEADERSHIP
    {
      id: 'mustafa-jalal',
      slug: 'mustafa-jalal',
      name: 'مصطفى جلال مصطفى خوشناو',
      nameEn: 'Mustafa Jalal Mustafa Khoshnaw',
      title: 'المؤسس والرئيس التنفيذي (CEO)',
      titleEn: 'Founder & Chief Executive Officer',
      role: 'leadership',
      department: 'leadership',
      bio: 'قائد ذو رؤية استراتيجية بخبرة تتجاوز 15 عاماً في قيادة التحول الرقمي. أسس IDG لترسيخ السيادة التكنولوجية وبناء البنية التحتية الرقمية للعراق.',
      fullBio: [
        'يقود مصطفى جلال مصطفى خوشناو، بصفته المؤسس والرئيس التنفيذي لبوابة العراق الرقمية (IDG)، جهود إعادة صياغة البنية التحتية التكنولوجية والأنظمة السيادية في العراق. متسلحاً بخلفية عميقة في هندسة البرمجيات والاستشارات الاستراتيجية للقطاع العام، وضع أسس بنية وطنية متكاملة ومستدامة.',
        'تحت قيادته، تحولت IDG من استوديو مشاريع تقنية إلى شركة أم سيادية تشرف على أكثر من 12 منصة وطنية وبنية تحتية موثوقة لحفظ ومعالجة البيانات السيادية. تنبع فلسفته المؤسسية من الإيمان بحتمية السيادة الرقمية للعراق وإنهاء التبعية التقنية الخارجية.',
        'شغل منصب مستشار رفيع لعدة مبادرات وطنية في مجالات تطوير القطاع المصرفي، الحكومة الإلكترونية، والأمن السيبراني المؤسسي في عموم العراق وإقليم كوردستان.'
      ],
      background: 'مهندس برمجيات، رائد أعمال تقني، ومستشار استراتيجي للحوكمة الرقمية والمشاريع الوطنية الكبرى.',
      achievements: [
        'تأسيس بوابة العراق الرقمية (IDG) كشركة أم سيادية واستوديو ابتكار وطني',
        'قيادة التصميم المعماري لنظام الهوية الرقمية الوطنية الموحدة',
        'صياغة معايير حوكمة البيانات السيادية على المستوى الوطني',
        'إطلاق أكاديمية زانا لتأهيل وتدريب أكثر من 500 مهندس ومطور عراقي'
      ],
      expertise: ['القيادة الاستراتيجية', 'السيادة الرقمية', 'هندسة GovTech', 'حوكمة البيانات السيادية', 'استوديو المشاريع التقنية'],
      image: '/images/team/mustafa-jalal.svg',
      initials: 'MK',
      social: {
        linkedin: 'https://linkedin.com/in/mustafajalal',
        twitter: 'https://x.com/mustafajalal',
        email: 'mustafa@idggov.tech',
      },
      featured: true,
    },
    {
      id: 'alan-rezan',
      slug: 'alan-rezan',
      name: 'د. آلان ريزان',
      nameEn: 'Dr. Alan Rezan',
      title: 'الرئيس التنفيذي للتكنولوجيا (CTO)',
      titleEn: 'Chief Technology Officer',
      role: 'leadership',
      department: 'leadership',
      bio: 'المشرف العام على البنية التحتية السحابية السيادية، أنظمة الذكاء الاصطناعي المؤسسية والمعمارية الأمنية المعززة بنموذج Zero-Trust.',
      fullBio: [
        'يحمل الدكتور آلان ريزان شهادة الدكتوراه في الأنظمة الموزعة وأمن المعلومات. بخبرة تفوق 14 عاماً في قيادة البنية التحتية للأنظمة الضخمة، يقود كافة العمليات الهندسية المتقدمة في IDG.',
        'يضطلع بدور محوري في تشييد مراكز البيانات الوطنية الموزعة، وضمان استمرارية تشغيلية لا تقل عن 99.98%، وتطوير نماذج الذكاء الاصطناعي المحلية لخدمة المنظومات الحكومية.'
      ],
      background: 'دكتوراه في الأنظمة الموزعة، مهندس أول للبنية التحتية السحابية وأمن النظم.',
      achievements: [
        'تنفيذ بنية تحتية فائقة المرونة للمنظومات والتحويلات المصرفية الوطنية',
        'الإشراف على بناء السحابة السيادية الوطنية داخل مراكز البيانات العراقية',
        'نيل الاعتماد الدولي ISO 27001 لكافة البنى التحتية التابعة للمجموعة'
      ],
      expertise: ['المعمارية السحابية', 'الأنظمة الموزعة', 'نموذج Zero-Trust الأمني', 'الذكاء الاصطناعي وتعلم الآلة', 'التخزين السيادي'],
      image: '/images/team/alan-rezan.svg',
      initials: 'AR',
      social: {
        linkedin: 'https://linkedin.com/in/alanrezan',
        github: 'https://github.com/alanrezan',
        email: 'alan@idggov.tech',
      },
      featured: true,
    },
    {
      id: 'dalia-farhad',
      slug: 'dalia-farhad',
      name: 'داليا فرهاد',
      nameEn: 'Dalia Farhad',
      title: 'الرئيس التنفيذي للعمليات (COO)',
      titleEn: 'Chief Operating Officer',
      role: 'leadership',
      department: 'leadership',
      bio: 'قيادة العمليات التنفيذية، والتنسيق المؤسسي المشترك مع القطاع العام، وتطوير الشراكات الاستراتيجية لضمان كفاءة التنفيذ المؤسسي.',
      fullBio: [
        'تقود داليا فرهاد العمليات التشغيلية والحوكمة المؤسسية في بوابة العراق الرقمية، مع التركيز على كفاءة التنفيذ والانضباط المؤسسي والشفافية التامة.',
        'تحمل درجة الماجستير في الإدارة الاستراتيجية، ولديها أكثر من 11 عاماً من الخبرة في إدارة برامج التحول المؤسسي الكبرى بالتعاون مع الوزارات والجهات العامة والخاصة.'
      ],
      background: 'ماجستير في إدارة الأعمال (MBA)، خبيرة في قيادة التغيير المؤسسي وإدارة المشاريع الوطنية.',
      achievements: [
        'تأسيس شراكات استراتيجية مع أكثر من 45 مؤسسة عامة وخاصة',
        'تسريع دورات إطلاق المنصات والمشاريع الجديدة بنسبة 40%',
        'بناء أطر قياس مؤشرات الأداء التشغيلية (KPIs) لجميع المنصات'
      ],
      expertise: ['العمليات المؤسسية', 'الشراكات الاستراتيجية', 'إدارة التحول المؤسسي', 'الحوكمة التشغيلية', 'اتفاقيات مستوى الخدمة (SLA)'],
      image: '/images/team/dalia-farhad.svg',
      initials: 'DF',
      social: {
        linkedin: 'https://linkedin.com/in/daliafarhad',
        email: 'dalia@idggov.tech',
      },
      featured: true,
    },
    {
      id: 'zana-othman',
      slug: 'zana-othman',
      name: 'زانا عثمان',
      nameEn: 'Zana Othman',
      title: 'الرئيس التنفيذي للابتكار واستوديو المشاريع (CIO)',
      titleEn: 'Chief Innovation Officer & Head of Studio',
      role: 'leadership',
      department: 'leadership',
      bio: 'المشرف على مبادرات أكاديمية زانا واستوديو المشاريع لتأهيل الكفاءات الشابة وتسريع الشركات التكنولوجية السيادية الواعدة.',
      fullBio: [
        'يشرف زانا عثمان على برامج أكاديمية زانا واستوديو المشاريع التكنولوجية في IDG. يركز بشكل أساسي على تمكين الكفاءات العراقية الشابة من خلال برامج هندسية متقدمة وحاضنات أعمال رقمية تسهم في خلق شركات تقنية متفوقة.',
        'يمتلك سجلاً حافلاً في بناء منظومات ريادة الأعمال التقنية وتطوير المواهب الهندسية وربطها المباشر بسوق الحلول الرقمية السيادية.'
      ],
      background: 'رائد أعمال تقني، مدرب دولي، ومؤسس أكاديميات تدريب تقنية رائدة.',
      achievements: [
        'تأهيل وتدريب أكثر من 500 شاب وشابة في مجالات البرمجيات والذكاء الاصطناعي',
        'احتضان وتخريج 10+ شركات تقنية ناشئة ضمن استوديو مشاريع IDG',
        'تصميم برامج التدريب السحابي المعتمدة بالشراكة مع الجامعات الوطنية'
      ],
      expertise: ['استوديو المشاريع (Venture Studio)', 'تكنولوجيا التعليم (EdTech)', 'الابتكار وريادة الأعمال', 'تأهيل الكوادر الوطنية', 'الاستثمار التكنولوجي'],
      image: '/images/team/zana-othman.svg',
      initials: 'ZO',
      social: {
        linkedin: 'https://linkedin.com/in/zanaothman',
        twitter: 'https://x.com/zanaothman',
        email: 'zana@idggov.tech',
      },
      featured: true,
    },

    // CORE TEAM
    {
      id: 'kardo-sleman',
      slug: 'kardo-sleman',
      name: 'كاردو سليمان',
      nameEn: 'Kardo Sleman',
      title: 'كبير معماريي الأنظمة الخلفية والخدمات السحابية',
      titleEn: 'Lead Backend & Systems Architect',
      role: 'core',
      department: 'engineering',
      bio: 'خبير في بناء الأنظمة المعمارية الخلفية الضخمة القائمة على Microservices وقواعد البيانات السيادية بلغات Go و Rust.',
      fullBio: [
        'يقود كاردو التطوير المعماري للأنظمة الخلفية لكافة منصات IDG، مع التركيز على البروتوكولات الأمنية المشفرة والأداء فائق السرعة لحماية البيانات الوطنية.'
      ],
      background: 'مهندس برمجيات أول بخبرة 8 سنوات في الأنظمة المصرفية والتطبيقات المالية عالية الأحمال.',
      achievements: ['تصميم محرك المعاملات المصرفية فائق السرعة', 'تقليص وقت استجابة واجهات التطبيقات (APIs) بنسبة 65%'],
      expertise: ['Go', 'Rust', 'PostgreSQL', 'معمارية Microservices', 'واجهات برمجية عالية التحمل'],
      image: '/images/team/kardo-sleman.svg',
      initials: 'KS',
      social: {
        linkedin: 'https://linkedin.com/in/kardosleman',
        github: 'https://github.com/kardosleman',
        email: 'kardo@idggov.tech',
      },
    },
    {
      id: 'naza-karim',
      slug: 'naza-karim',
      name: 'نازة كريم',
      nameEn: 'Naza Karim',
      title: 'كبير مهندسي الواجهات الأمامية وأنظمة التصميم',
      titleEn: 'Principal Frontend Engineer',
      role: 'core',
      department: 'engineering',
      bio: 'قائدة فريق واجهات المستخدم، متخصصة في الحلول متعددة اللغات وتطبيقات Next.js ومعايير إمكانية الوصول الشاملة.',
      fullBio: [
        'تتخصص نازة في بناء أنظمة واجهات متكاملة وقابلة للتوسع باستخدام Next.js و TypeScript، لتوفير تجارب رقمية سلسة وسريعة لكافة منصات المجموعة.'
      ],
      background: 'مهندسة حاسوب بخبرة 7 سنوات في هندسة واجهات المستخدم للمنصات الحكومية والتجارية الكبرى.',
      achievements: ['تطوير نظام المكونات الرقمية الموحد لـ IDG', 'تحقيق نسبة 100% في مقاييس الأداء والأمان لمحركات التصفح'],
      expertise: ['Next.js / React', 'TypeScript', 'Design Systems', 'دعم RTL واللغات المتعددة', 'إمكانية الوصول الشاملة'],
      image: '/images/team/naza-karim.svg',
      initials: 'NK',
      social: {
        linkedin: 'https://linkedin.com/in/nazakarim',
        github: 'https://github.com/nazakarim',
        email: 'naza@idggov.tech',
      },
    },
    {
      id: 'hewa-azad',
      slug: 'hewa-azad',
      name: 'هيوا آزاد',
      nameEn: 'Hewa Azad',
      title: 'كبير مهندسي DevOps والبنية التحتية السيادية',
      titleEn: 'Lead DevOps & Sovereign Infrastructure Engineer',
      role: 'core',
      department: 'engineering',
      bio: 'خبير في معمارية Kubernetes وإدارة الخوادم الموزعة داخل مراكز البيانات الوطنية وأتمتة مسارات النشر المستمر (CI/CD).',
      fullBio: [
        'يضمن هيوا الاستمرارية التشغيلية الدائمة لكافة المنصات، ومتخصص في تطبيق معايير Tier-IV لمراكز البيانات والتعافي السريع من الكوارث.'
      ],
      background: 'مهندس شبكات وسحابة معتمد (CKA, RHCE) بخبرة تتجاوز 8 سنوات في مراكز البيانات الضخمة.',
      achievements: ['أتمتة دورة النشر والاختبار بالكامل للمنظومة', 'الحفاظ على استمرارية 99.98% خلال العامين الماضيين'],
      expertise: ['Kubernetes', 'Docker', 'Terraform', 'خوادم Bare-Metal', 'مسارات CI/CD المؤتمتة'],
      image: '/images/team/hewa-azad.svg',
      initials: 'HA',
      social: {
        linkedin: 'https://linkedin.com/in/hewaazad',
        github: 'https://github.com/hewaazad',
        email: 'hewa@idggov.tech',
      },
    },
    {
      id: 'rayyan-tariq',
      slug: 'rayyan-tariq',
      name: 'ريان طارق',
      nameEn: 'Rayyan Tariq',
      title: 'مسؤول أمن المعلومات والدفاع ضد التهديدات السيبرانية',
      titleEn: 'Information Security & Threat Defense Specialist',
      role: 'core',
      department: 'engineering',
      bio: 'إدارة مركز العمليات الأمنية (SOC) على مدار الساعة، وتحليل التهديدات المتقدمة وتطبيق معايير التشفير السيادي.',
      fullBio: [
        'يشرف ريان على حماية كافة البوابات الرقمية من الهجمات السيبرانية المعقدة، ويطبق أحدث بروتوكولات التشفير المتوافقة مع المعايير السيادية.'
      ],
      background: 'خبير أمن سيبراني معتمد (CISSP, CEH) بخبرة في حماية المنشآت الحيوية والأنظمة المصرفية.',
      achievements: ['إحباط أكثر من مليون محاولة اختراق موجهة للبنية الوطنية', 'تأسيس نظام الإنذار المبكر للأمن السيبراني'],
      expertise: ['عمليات SOC', 'بروتوكولات Zero-Trust', 'التشفير السيادي', 'اختبار الاختراق', 'الاستجابة للحوادث'],
      image: '/images/team/rayyan-tariq.svg',
      initials: 'RT',
      social: {
        linkedin: 'https://linkedin.com/in/rayyantariq',
        email: 'rayyan@idggov.tech',
      },
    },
    {
      id: 'sakar-omer',
      slug: 'sakar-omer',
      name: 'ساكار عمر',
      nameEn: 'Sakar Omer',
      title: 'مدير أول المنتجات الرقمية والخدمات الحكومية',
      titleEn: 'Principal Product Manager',
      role: 'core',
      department: 'product',
      bio: 'قيادة خارطة طريق المنتجات الرقمية، وتحويل المتطلبات الحكومية المعقدة إلى تجارب مستخدم ميسرة وعالية الفعالية.',
      fullBio: [
        'يقود ساكار عمليات تطوير المنتجات بالتعاون الوثيق مع المؤسسات والجهات الشريكة لضمان تلبية المنصات لأعلى المعايير الوظيفية والخدمية.'
      ],
      background: 'مدير منتجات رقمية بخبرة 6 سنوات في مشاريع التكنولوجيا الحكومية والمالية.',
      achievements: ['إطلاق منصة الخدمات الموحدة بنجاح تام', 'رفع نسبة رضا المواطنين والمستخدمين إلى 92%'],
      expertise: ['استراتيجية المنتجات', 'منظومات GovTech', 'تخطيط خارطة الطريق', 'إدارة Agile', 'أبحاث تجربة المستخدم'],
      image: '/images/team/sakar-omer.svg',
      initials: 'SO',
      social: {
        linkedin: 'https://linkedin.com/in/sakaromer',
        email: 'sakar@idggov.tech',
      },
    },
    {
      id: 'lana-bakhtiyar',
      slug: 'lana-bakhtiyar',
      name: 'لانة بختيار',
      nameEn: 'Lana Bakhtiyar',
      title: 'كبير مصممي تجربة المستخدم والأنظمة البصرية (UX/UI)',
      titleEn: 'Senior UX/UI & Design Systems Architect',
      role: 'core',
      department: 'product',
      bio: 'تصميم التجارب البصرية للمنصات مع التركيز على سهولة الوصول، والطباعة العربية والكردية المتقنة، ومعايير الشمولية.',
      fullBio: [
        'تحرص لانة على تمكين كافة فئات المجتمع العراقي من استخدام الخدمات الرقمية بيسر وسلاسة من خلال تصاميم مدروسة بعناية تحترم الثقافة وتراعي الشمولية.'
      ],
      background: 'مصممة أولى لتجربة المستخدم وباحثة في السلوك الرقمي للمستخدمين مع خبرة مع منظمات دولية.',
      achievements: ['وضع المعايير الوطنية لتصميم الواجهات الرقمية الحكومية', 'الالتزام الكامل بمعايير إمكانية الوصول WCAG 2.1 AAA'],
      expertise: ['أنظمة التصميم (Design Systems)', 'Figma', 'الطباعة العربية والكردية', 'معايير إمكانية الوصول', 'تصميم التفاعل'],
      image: '/images/team/lana-bakhtiyar.svg',
      initials: 'LB',
      social: {
        linkedin: 'https://linkedin.com/in/lanabakhtiyar',
        email: 'lana@idggov.tech',
      },
    },
    {
      id: 'ahmad-al-bayati',
      slug: 'ahmad-al-bayati',
      name: 'أحمد البياتي',
      nameEn: 'Ahmad Al-Bayati',
      title: 'مسؤول الشراكات المؤسسية والحوكمة التنظيمية',
      titleEn: 'Institutional Partnerships & Governance Lead',
      role: 'core',
      department: 'operations',
      bio: 'إدارة العلاقات المؤسسية والامتثال القانوني مع الهيئات التنظيمية لضمان التطبيق الصارم لأطر سيادة البيانات.',
      fullBio: [
        'يمتلك أحمد خبرة عريضة في السياسات العامة والأطر القانونية المنظمة لقطاع البيانات والتكنولوجيا، ويعمل على توثيق العلاقات مع مختلف المؤسسات الحكومية.'
      ],
      background: 'مستشار قانوني وخبير في حوكمة البيانات بخبرة 9 سنوات في قطاع الاتصالات والسياسات العامة.',
      achievements: ['صياغة الأطر القانونية لحماية البيانات السيادية الشخصية', 'إبرام اتفاقيات التعاون التقني مع الجامعات الرائدة'],
      expertise: ['الامتثال التنظيمي', 'قوانين سيادة البيانات', 'الشؤون المؤسسية العامة', 'الحوكمة القانونية'],
      image: '/images/team/ahmad-al-bayati.svg',
      initials: 'AB',
      social: {
        linkedin: 'https://linkedin.com/in/ahmadalbayati',
        email: 'ahmad@idggov.tech',
      },
    },
    {
      id: 'sara-hassan',
      slug: 'sara-hassan',
      name: 'سارة حسن',
      nameEn: 'Sara Hassan',
      title: 'مسؤولة استقطاب الكفاءات وتطوير رأس المال البشري',
      titleEn: 'Head of People & Talent Acquisition',
      role: 'core',
      department: 'operations',
      bio: 'قيادة جهود استقطاب ورعاية المواهب التقنية العراقية، وتوفير بيئة عمل محفزة على الابتكار والانتماء الوطني.',
      fullBio: [
        'تشرف سارة على استقطاب أبرز الكفاءات الهندسية وبناء ثقافة مؤسسية تجعل من السيادة الوطنية والتميز المهني ركيزتين أساسيتين في العمل اليومي.'
      ],
      background: 'ماجستير في إدارة الموارد البشرية، ومستشارة توظيف تقني بخبرة 8 سنوات في القطاع التكنولوجي.',
      achievements: ['رفع نسبة تمثيل المهندسات في الفرق التقنية إلى 40%', 'تأسيس برنامج الزمالة الهندسية وتطوير المهارات'],
      expertise: ['التوظيف التقني المتخصص', 'بناء الثقافة المؤسسية', 'تطوير المواهب', 'إدارة الموارد البشرية التحليلية'],
      image: '/images/team/sara-hassan.svg',
      initials: 'SH',
      social: {
        linkedin: 'https://linkedin.com/in/sarahassan',
        email: 'sara@idggov.tech',
      },
    },
    {
      id: 'diyar-mahmoud',
      slug: 'diyar-mahmoud',
      name: 'ديار محمود',
      nameEn: 'Diyar Mahmoud',
      title: 'مسؤول الاتصال الاستراتيجي والإعلام المؤسسي',
      titleEn: 'Head of Communications & Public Engagement',
      role: 'core',
      department: 'communications',
      bio: 'قيادة الخطاب الإعلامي لنشر ثقافة السيادة الرقمية وإبراز أثر المبادرات الوطنية لـ IDG محلياً ودولياً.',
      fullBio: [
        'يتولى ديار صياغة الخطاب العام لبوابة العراق الرقمية وتعريف المجتمع والمؤسسات بأهمية الحلول الرقمية السيادية ومكتسبات التكنولوجيا الوطنية.'
      ],
      background: 'إعلامي ومسؤول علاقات عامة بخبرة 7 سنوات في المؤسسات الإعلامية الرائدة.',
      achievements: ['إدارة الحملة الوطنية للتوعية بالأمن الرقمي', 'إصدار التقرير السنوي للسيادة التكنولوجية'],
      expertise: ['الاتصال الاستراتيجي', 'التفاعل المجتمعي', 'صناعة المحتوى المؤسسي', 'إدارة الهوية الرقمية'],
      image: '/images/team/diyar-mahmoud.svg',
      initials: 'DM',
      social: {
        linkedin: 'https://linkedin.com/in/diyarmahmoud',
        twitter: 'https://x.com/diyarmahmoud',
        email: 'diyar@idggov.tech',
      },
    },
  ],

  en: [
    // LEADERSHIP
    {
      id: 'mustafa-jalal',
      slug: 'mustafa-jalal',
      name: 'Mustafa Jalal Mustafa Khoshnaw',
      nameEn: 'Mustafa Jalal Mustafa Khoshnaw',
      title: 'Founder & Chief Executive Officer (CEO)',
      titleEn: 'Founder & Chief Executive Officer',
      role: 'leadership',
      department: 'leadership',
      bio: 'Visionary leader with 15+ years in digital transformation. Founded IDG to establish sovereign technology infrastructure and institutional operational capabilities for Iraq.',
      fullBio: [
        'As Founder & CEO of Iraq Digital Gateway (IDG), Mustafa Jalal Mustafa Khoshnaw leads the reimagination of sovereign digital systems and institutional architecture in Iraq. With an extensive background in software engineering and strategic public-sector advisory, he architected the foundational blueprint for Iraq’s sovereign technology ecosystem.',
        'Under his leadership, IDG evolved from a high-discipline venture studio into a sovereign parent company overseeing 12+ national digital platforms and trusted institutional data repositories. His philosophy centers on empowering Iraqi digital sovereignty, data governance, and strategic resilience.',
        'He has served as a senior advisor to major national modernization initiatives across banking automation, digital identity, and cybersecurity infrastructure.'
      ],
      background: 'Software engineer, tech entrepreneur, and strategic advisor on digital governance and sovereign institutional frameworks.',
      achievements: [
        'Founded Iraq Digital Gateway (IDG) as Iraq’s premier sovereign tech parent company',
        'Spearheaded the unified national digital identity architecture blueprint',
        'Authored institutional sovereign data governance standards for critical systems',
        'Pioneered ZaNa Academy, training over 500 Iraqi engineers and developers'
      ],
      expertise: ['Strategic Leadership', 'Digital Sovereignty', 'GovTech Architecture', 'Data Governance', 'Venture Studio Incubation'],
      image: '/images/team/mustafa-jalal.svg',
      initials: 'MK',
      social: {
        linkedin: 'https://linkedin.com/in/mustafajalal',
        twitter: 'https://x.com/mustafajalal',
        email: 'mustafa@idggov.tech',
      },
      featured: true,
    },
    {
      id: 'alan-rezan',
      slug: 'alan-rezan',
      name: 'Dr. Alan Rezan',
      nameEn: 'Dr. Alan Rezan',
      title: 'Chief Technology Officer (CTO)',
      titleEn: 'Chief Technology Officer',
      role: 'leadership',
      department: 'leadership',
      bio: 'Directing national sovereign technology infrastructure, distributed cloud systems, enterprise AI platforms, and Zero-Trust architecture.',
      fullBio: [
        'Dr. Alan Rezan holds a PhD in Distributed Systems and Information Security. With more than 14 years of experience leading engineering teams across complex enterprise platforms, he directs all architectural and technological initiatives across IDG.',
        'He is instrumental in deploying domestic sovereign datacenters, enforcing strict 99.98% operational uptime SLAs, and architecting localized AI models for institutional operations.'
      ],
      background: 'PhD in Distributed Systems, former Principal Cloud & Security Architect.',
      achievements: [
        'Implemented ultra-resilient distributed architectures for national transaction engines',
        'Directed the deployment of sovereign cloud infrastructure in Iraqi Tier-IV datacenters',
        'Achieved international ISO 27001 accreditation across all IDG infrastructure'
      ],
      expertise: ['Cloud Architecture', 'Distributed Systems', 'Zero-Trust Security', 'Enterprise AI/ML', 'Sovereign Storage'],
      image: '/images/team/alan-rezan.svg',
      initials: 'AR',
      social: {
        linkedin: 'https://linkedin.com/in/alanrezan',
        github: 'https://github.com/alanrezan',
        email: 'alan@idggov.tech',
      },
      featured: true,
    },
    {
      id: 'dalia-farhad',
      slug: 'dalia-farhad',
      name: 'Dalia Farhad',
      nameEn: 'Dalia Farhad',
      title: 'Chief Operating Officer (COO)',
      titleEn: 'Chief Operating Officer',
      role: 'leadership',
      department: 'leadership',
      bio: 'Managing operational execution, inter-agency digital integration, and strategic public-private partnerships across national programs.',
      fullBio: [
        'Dalia Farhad oversees institutional operations and governance across IDG, ensuring execution discipline, rapid delivery cadences, and full operational transparency.',
        'Holding an MBA in Strategic Operations, she possesses over 11 years of experience orchestrating digital transformation across ministries, public institutions, and international technology partners.'
      ],
      background: 'MBA in Strategic Management, specialist in organizational change and national GovTech delivery.',
      achievements: [
        'Forged strategic partnerships with over 45 public and private institutions',
        'Accelerated platform deployment cycles by 40%',
        'Established operational KPI governance frameworks across all subsidiary platforms'
      ],
      expertise: ['Institutional Operations', 'Strategic Alliances', 'Change Management', 'Operational Governance', 'SLA Enforcement'],
      image: '/images/team/dalia-farhad.svg',
      initials: 'DF',
      social: {
        linkedin: 'https://linkedin.com/in/daliafarhad',
        email: 'dalia@idggov.tech',
      },
      featured: true,
    },
    {
      id: 'zana-othman',
      slug: 'zana-othman',
      name: 'Zana Othman',
      nameEn: 'Zana Othman',
      title: 'Chief Innovation Officer & Head of Studio (CIO)',
      titleEn: 'Chief Innovation Officer & Head of Studio',
      role: 'leadership',
      department: 'leadership',
      bio: 'Directing ZaNa Academy and Venture Studio initiatives, cultivating next-generation Iraqi tech talent and accelerating sovereign digital startups.',
      fullBio: [
        'Zana Othman leads ZaNa Academy and Venture Studio initiatives at IDG, focusing on empowering Iraqi tech talent through rigorous software engineering programs and accelerating homegrown technological ventures.',
        'With a rich track record in startup incubation and technical education, he connects high-caliber local engineering talent directly into the sovereign digital ecosystem.'
      ],
      background: 'Tech entrepreneur, international trainer, and founder of prominent developer academies.',
      achievements: [
        'Trained over 500 developers and engineers in cloud-native and AI development',
        'Incubated and launched 10+ promising startups through IDG’s Venture Studio',
        'Authored university technical fellowship curricula in cloud and systems engineering'
      ],
      expertise: ['Venture Studio Incubation', 'EdTech Ecosystems', 'Technical Human Capital', 'Startup Acceleration', 'Innovation Strategy'],
      image: '/images/team/zana-othman.svg',
      initials: 'ZO',
      social: {
        linkedin: 'https://linkedin.com/in/zanaothman',
        twitter: 'https://x.com/zanaothman',
        email: 'zana@idggov.tech',
      },
      featured: true,
    },

    // CORE TEAM
    {
      id: 'kardo-sleman',
      slug: 'kardo-sleman',
      name: 'Kardo Sleman',
      nameEn: 'Kardo Sleman',
      title: 'Lead Backend & Systems Architect',
      titleEn: 'Lead Backend & Systems Architect',
      role: 'core',
      department: 'engineering',
      bio: 'Architecting high-throughput distributed microservices and sovereign data backends in Go and Rust.',
      fullBio: [
        'Kardo designs the core backend infrastructure for IDG platforms, ensuring low-latency cryptographic communications, robust database sharding, and high-concurrency resilience.'
      ],
      background: 'Senior software engineer with 8 years of experience in financial systems and high-throughput data processing.',
      achievements: ['Designed ultra-fast banking transaction engine', 'Reduced API response latencies by 65% across core services'],
      expertise: ['Go', 'Rust', 'PostgreSQL', 'Microservices Architecture', 'High-Throughput APIs'],
      image: '/images/team/kardo-sleman.svg',
      initials: 'KS',
      social: {
        linkedin: 'https://linkedin.com/in/kardosleman',
        github: 'https://github.com/kardosleman',
        email: 'kardo@idggov.tech',
      },
    },
    {
      id: 'naza-karim',
      slug: 'naza-karim',
      name: 'Naza Karim',
      nameEn: 'Naza Karim',
      title: 'Principal Frontend Engineer & Design Technologist',
      titleEn: 'Principal Frontend Engineer',
      role: 'core',
      department: 'engineering',
      bio: 'Directing frontend architecture, multilingual RTL/LTR systems, accessible design tokens, and Next.js applications.',
      fullBio: [
        'Naza specializes in Next.js, scalable enterprise frontend architectures, and high-performance user interfaces tailored for bilingual Kurdish and Arabic environments.'
      ],
      background: 'Computer engineer with 7 years of experience building accessible frontend systems for civic and commercial platforms.',
      achievements: ['Built IDG’s unified design component architecture', 'Achieved 100% Core Web Vitals score across web applications'],
      expertise: ['Next.js / React', 'TypeScript', 'Design Systems', 'RTL Optimization', 'Web Accessibility (WCAG)'],
      image: '/images/team/naza-karim.svg',
      initials: 'NK',
      social: {
        linkedin: 'https://linkedin.com/in/nazakarim',
        github: 'https://github.com/nazakarim',
        email: 'naza@idggov.tech',
      },
    },
    {
      id: 'hewa-azad',
      slug: 'hewa-azad',
      name: 'Hewa Azad',
      nameEn: 'Hewa Azad',
      title: 'Lead DevOps & Sovereign Infrastructure Engineer',
      titleEn: 'Lead DevOps & Sovereign Infrastructure Engineer',
      role: 'core',
      department: 'engineering',
      bio: 'Specialist in Kubernetes architectures, sovereign bare-metal clusters, automated CI/CD pipelines, and disaster recovery.',
      fullBio: [
        'Hewa guarantees uninterrupted uptime across IDG infrastructure, architecting automated bare-metal clusters conforming to Tier-IV datacenter specifications.'
      ],
      background: 'Certified Kubernetes and Cloud Architect (CKA, RHCE) with 8+ years managing enterprise infrastructure.',
      achievements: ['Automated zero-downtime deployment workflows', 'Maintained 99.98% operational uptime over 24 consecutive months'],
      expertise: ['Kubernetes', 'Docker', 'Terraform', 'Bare-Metal Clusters', 'CI/CD Automation'],
      image: '/images/team/hewa-azad.svg',
      initials: 'HA',
      social: {
        linkedin: 'https://linkedin.com/in/hewaazad',
        github: 'https://github.com/hewaazad',
        email: 'hewa@idggov.tech',
      },
    },
    {
      id: 'rayyan-tariq',
      slug: 'rayyan-tariq',
      name: 'Rayyan Tariq',
      nameEn: 'Rayyan Tariq',
      title: 'Information Security & Threat Defense Specialist',
      titleEn: 'Information Security & Threat Defense Specialist',
      role: 'core',
      department: 'engineering',
      bio: 'Leading 24/7 Security Operations Center (SOC), advanced threat detection, penetration testing, and cryptographic posture.',
      fullBio: [
        'Rayyan protects IDG’s perimeter and data conduits against sophisticated cyber threats, auditing Zero-Trust protocols and sovereign cryptosystems.'
      ],
      background: 'Cybersecurity professional (CISSP, CEH) with background in defense and banking sector security architectures.',
      achievements: ['Neutralized over 1M malicious traffic vectors targeted at national nodes', 'Constructed automated threat defense telemetry'],
      expertise: ['SOC Operations', 'Zero-Trust Protocol', 'Cryptography', 'Penetration Testing', 'Incident Response'],
      image: '/images/team/rayyan-tariq.svg',
      initials: 'RT',
      social: {
        linkedin: 'https://linkedin.com/in/rayyantariq',
        email: 'rayyan@idggov.tech',
      },
    },
    {
      id: 'sakar-omer',
      slug: 'sakar-omer',
      name: 'Sakar Omer',
      nameEn: 'Sakar Omer',
      title: 'Principal Product Manager',
      titleEn: 'Principal Product Manager',
      role: 'core',
      department: 'product',
      bio: 'Driving product strategy, bridging institutional stakeholder requirements with engineering execution for civic platforms.',
      fullBio: [
        'Sakar works closely with government partners and engineering teams to transform regulatory mandates into intuitive, high-adoption digital products.'
      ],
      background: 'Product manager with 6 years experience in civic GovTech and financial technology workflows.',
      achievements: ['Successfully launched unified government services gateway', 'Elevated citizen satisfaction scores to 92%'],
      expertise: ['Product Strategy', 'GovTech Workflows', 'Roadmap Planning', 'Agile Delivery', 'User Research'],
      image: '/images/team/sakar-omer.svg',
      initials: 'SO',
      social: {
        linkedin: 'https://linkedin.com/in/sakaromer',
        email: 'sakar@idggov.tech',
      },
    },
    {
      id: 'lana-bakhtiyar',
      slug: 'lana-bakhtiyar',
      name: 'Lana Bakhtiyar',
      nameEn: 'Lana Bakhtiyar',
      title: 'Senior UX/UI & Design Systems Architect',
      titleEn: 'Senior UX/UI & Design Systems Architect',
      role: 'core',
      department: 'product',
      bio: 'Crafting user journeys with deep emphasis on accessibility, refined Kurdish/Arabic typography, and WCAG standards.',
      fullBio: [
        'Lana ensures that every digital touchpoint engineered by IDG is accessible, dignified, and visually respectful of cultural context and modern design.'
      ],
      background: 'Senior UX designer and behavioral researcher with background in civic public service design.',
      achievements: ['Authored unified GovTech design guidelines for public interfaces', 'Enforced WCAG 2.1 AAA accessibility compliance'],
      expertise: ['Design Systems', 'Figma', 'Bilingual Typography', 'Accessibility (WCAG)', 'Interaction Design'],
      image: '/images/team/lana-bakhtiyar.svg',
      initials: 'LB',
      social: {
        linkedin: 'https://linkedin.com/in/lanabakhtiyar',
        email: 'lana@idggov.tech',
      },
    },
    {
      id: 'ahmad-al-bayati',
      slug: 'ahmad-al-bayati',
      name: 'Ahmad Al-Bayati',
      nameEn: 'Ahmad Al-Bayati',
      title: 'Institutional Partnerships & Governance Lead',
      titleEn: 'Institutional Partnerships & Governance Lead',
      role: 'core',
      department: 'operations',
      bio: 'Managing regulatory affairs, inter-institutional accords, and legal compliance with national data sovereignty frameworks.',
      fullBio: [
        'Ahmad brings deep legal and regulatory insight into public policy and data governance, building institutional trust and official partnerships.'
      ],
      background: 'Legal counsel and data governance expert with 9 years in telecommunications and regulatory affairs.',
      achievements: ['Drafted sovereign personal data compliance frameworks', 'Negotiated strategic technical MOUs with national universities'],
      expertise: ['Regulatory Compliance', 'Data Sovereignty Laws', 'Institutional Affairs', 'Legal Governance'],
      image: '/images/team/ahmad-al-bayati.svg',
      initials: 'AB',
      social: {
        linkedin: 'https://linkedin.com/in/ahmadalbayati',
        email: 'ahmad@idggov.tech',
      },
    },
    {
      id: 'sara-hassan',
      slug: 'sara-hassan',
      name: 'Sara Hassan',
      nameEn: 'Sara Hassan',
      title: 'Head of People & Talent Acquisition',
      titleEn: 'Head of People & Talent Acquisition',
      role: 'core',
      department: 'operations',
      bio: 'Sourcing and nurturing exceptional Iraqi technical talent, fostering an institutional culture grounded in mission and excellence.',
      fullBio: [
        'Sara is dedicated to discovering outstanding engineering talent and establishing an environment where national sovereignty and technical mastery thrive.'
      ],
      background: 'Master’s in Human Resources, technical recruiter with 8 years of tech ecosystem experience.',
      achievements: ['Increased female representation in engineering to 40%', 'Launched internal mentorship and career acceleration tracks'],
      expertise: ['Technical Recruiting', 'Culture Building', 'Talent Development', 'HR Analytics'],
      image: '/images/team/sara-hassan.svg',
      initials: 'SH',
      social: {
        linkedin: 'https://linkedin.com/in/sarahassan',
        email: 'sara@idggov.tech',
      },
    },
    {
      id: 'diyar-mahmoud',
      slug: 'diyar-mahmoud',
      name: 'Diyar Mahmoud',
      nameEn: 'Diyar Mahmoud',
      title: 'Head of Communications & Public Engagement',
      titleEn: 'Head of Communications & Public Engagement',
      role: 'core',
      department: 'communications',
      bio: 'Directing strategic communications to champion digital sovereignty and articulate IDG’s institutional mission across regional and global channels.',
      fullBio: [
        'Diyar manages IDG’s public presence, communicating complex technological achievements into clear, empowering messages for citizens and partners.'
      ],
      background: 'Journalist and public relations lead with 7 years in media organizations and institutional communication.',
      achievements: ['Directed national digital security awareness campaign', 'Published IDG’s Annual Technology Sovereignty Report'],
      expertise: ['Strategic Communications', 'Public Engagement', 'Content Strategy', 'Brand Governance'],
      image: '/images/team/diyar-mahmoud.svg',
      initials: 'DM',
      social: {
        linkedin: 'https://linkedin.com/in/diyarmahmoud',
        twitter: 'https://x.com/diyarmahmoud',
        email: 'diyar@idggov.tech',
      },
    },
  ],
};

export function getTeamMembers(locale: string = 'ku'): TeamMember[] {
  const lang = locale === 'ar' || locale === 'en' ? locale : 'ku';
  return teamMembers[lang];
}

export function getTeamMemberBySlug(slug: string, locale: string = 'ku'): TeamMember | undefined {
  const members = getTeamMembers(locale);
  // Support both base slug (mustafa-jalal) and localized slug (mustafa-jalal-ku)
  const normalizedSlug = slug.replace(/-(?:ku|ar|en)$/, '');
  return members.find((m) => m.slug === normalizedSlug || m.id === normalizedSlug);
}

export function getAllTeamMemberSlugs(): string[] {
  return teamMembers.en.map((m) => m.slug);
}
