export type TeamRoleStatus = 'filled' | 'placeholder';
export type TeamSection = 'leadership' | 'engineering' | 'product' | 'operations';

export interface TeamMember {
  id: string;
  slug?: string;
  status: TeamRoleStatus;

  // Filled position
  name?: string;
  nameKu?: string;
  nameAr?: string;

  // Position info
  position: string;
  positionKu: string;
  positionAr: string;

  // Bio (if filled)
  bio?: string;
  bioKu?: string;
  bioAr?: string;
  fullBio?: string[];
  fullBioKu?: string[];
  fullBioAr?: string[];

  // Background and achievements (for filled detail view)
  background?: string;
  backgroundKu?: string;
  backgroundAr?: string;
  achievements?: string[];
  achievementsKu?: string[];
  achievementsAr?: string[];

  // Contact
  email?: string;
  linkedIn?: string;
  twitter?: string;
  github?: string;

  // Image
  image?: string;

  // Expertise
  expertise?: string[];

  // Section
  section: TeamSection;
}

export const rawTeamMembers: TeamMember[] = [
  // ==========================================
  // LEADERSHIP
  // ==========================================
  {
    id: 'mustafa-jalal',
    slug: 'mustafa-jalal',
    status: 'filled',
    name: 'Mustafa Jalal Mustafa Khoshnaw',
    nameKu: 'مستەفا جەلال مستەفا خۆشناو',
    nameAr: 'مصطفى جلال مصطفى خوشناو',

    position: 'Founder & Chief Executive Officer',
    positionKu: 'بنیاتنەری IDG و سەرۆکی جێبەجێکار',
    positionAr: 'مؤسس IDG والرئيس التنفيذي',

    bio: 'Founder & visionary leader. 15+ years in tech and digital transformation. Building sovereign technology for Iraq.',
    bioKu: 'بنیاتنەری ڕۆژنوێن. 15+ ساڵ لە تێکنۆلۆژیا. سەروەری تێکنۆلۆژی بۆ عێراق.',
    bioAr: 'المؤسس والقائد الرؤيتي. 15+ سنة في التكنولوجيا. بناء السيادة التكنولوجية للعراق.',

    fullBio: [
      'Mustafa Jalal Mustafa Khoshnaw leads Iraq Digital Gateway (IDG) as Founder and Chief Executive Officer, pioneering sovereign institutional technology and national data infrastructure.',
      'With over 15 years in software engineering and strategic governance advisory, he architected the blueprint for Iraq’s digital transformation and self-reliant operating systems.',
      'His strategic vision emphasizes national data ownership, Zero-Trust digital architectures, and cultivating exceptional Iraqi engineering leadership.',
    ],
    fullBioKu: [
      'مستەفا جەلال مستەفا خۆشناو وەک بنیاتنەر و سەرۆکی جێبەجێکاری دەروازەی دیجیتاڵیی عێراق (IDG)، کار لەسەر داڕشتنەوەی پێکهاتەی دیجیتاڵی و سیستەمە سەروەرەکانی عێراق دەکات.',
      'بە پێشینەیەکی زیاتر لە ١٥ ساڵ لە ئەندازیاریی نەرمەکاڵا و ڕاوێژکاری ستراتیژی بۆ کەرتی گشتی، چوارچێوەیەکی تۆکمەی بۆ تەکنەلۆژیای نیشتمانی بونیاد ناوە.',
      'فەلسەفەی کارکردنی لەسەر بنەمای بەهێزکردنی سەروەریی داتای نیشتمان، بنبڕکردنی بەستراوەیی دەرەکی، و پێگەیاندنی سەرکردایەتییە ئەندازیارییە عێراقییەکانە.',
    ],
    fullBioAr: [
      'يقود مصطفى جلال مصطفى خوشناو، بصفته المؤسس والرئيس التنفيذي لبوابة العراق الرقمية (IDG)، جهود إعادة صياغة البنية التحتية التكنولوجية والأنظمة السيادية في العراق.',
      'متسلحاً بخبرة تفوق 15 عاماً في هندسة البرمجيات والاستشارات الاستراتيجية للقطاع العام، وضع أسس بنية وطنية متكاملة ومستدامة.',
      'ترتكز رؤيته الاستراتيجية على ترسيخ ملكية البيانات الوطنية، وبناء المعماريات الرقمية القائمة على نموذج Zero-Trust، ورعاية الكفاءات الهندسية العراقية الاستثنائية.',
    ],

    background: 'Software engineer, tech entrepreneur, and strategic advisor on digital governance and sovereign institutional frameworks.',
    backgroundKu: 'ئەندازیاری نەرمەکاڵا، دامەزرێنەری پڕۆژەی تەکنەلۆژی، و ڕاوێژکاری حوکمڕانیی دیجیتاڵی بۆ پڕۆژە نیشتمانییەکان.',
    backgroundAr: 'مهندس برمجيات، رائد أعمال تقني، ومستشار استراتيجي للحوكمة الرقمية والمشاريع الوطنية الكبرى.',

    achievements: [
      'Founded Iraq Digital Gateway (IDG) as Iraq’s sovereign tech parent company',
      'Spearheaded unified national digital identity architecture blueprints',
      'Authored institutional sovereign data governance standards for critical systems',
      'Pioneered ZaNa Academy for national tech talent acceleration',
    ],
    achievementsKu: [
      'دامەزراندنی دەروازەی دیجیتاڵیی عێراق (IDG) وەک کۆمپانیای دایکی سەروەر',
      'ڕابەرایەتیکردنی تەلارسازیی ناسنامەی دیجیتاڵیی یەکگرتووی نیشتمانی',
      'داڕشتنی ستانداردی حوکمڕانی داتای سەروەر لەسەر ئاستی عێراق',
      'دەستپێشخەریی ئەکادیمیای زانا بۆ پێگەیاندنی کادیرانی ئەندازیاری نیشتمانی',
    ],
    achievementsAr: [
      'تأسيس بوابة العراق الرقمية (IDG) كشركة أم سيادية واستوديو ابتكار وطني',
      'قيادة التصميم المعماري لنظام الهوية الرقمية الوطنية الموحدة',
      'صياغة معايير حوكمة البيانات السيادية على المستوى الوطني',
      'إطلاق أكاديمية زانا لتأهيل وتدريب الكفاءات الهندسية الوطنية',
    ],

    email: 'mustafa@idggov.tech',
    linkedIn:
      'https://www.linkedin.com/in/mustafa-jalal-mustafa-13034b273?utm_source=share_via&utm_content=profile&utm_medium=member_ios',
    twitter: 'https://twitter.com/mustafajalaliq',

    image: '/images/team/mustafa-jalal.svg',
    expertise: ['strategic-leadership', 'digital-sovereignty', 'governance-tech', 'visionary'],
    section: 'leadership',
  },

  // PLACEHOLDER: CTO
  {
    id: 'position-cto',
    status: 'placeholder',
    position: 'Chief Technology Officer',
    positionKu: 'سەرۆکی جێبەجێکاری تێکنۆلۆژیا',
    positionAr: 'رئيس التكنولوجيا التنفيذي',
    section: 'leadership',
  },

  // PLACEHOLDER: COO
  {
    id: 'position-coo',
    status: 'placeholder',
    position: 'Chief Operating Officer',
    positionKu: 'سەرۆکی جێبەجێکاری کارگێڕی',
    positionAr: 'رئيس العمليات التنفيذي',
    section: 'leadership',
  },

  // PLACEHOLDER: CIO
  {
    id: 'position-cio',
    status: 'placeholder',
    position: 'Chief Innovation Officer & Head of Studio',
    positionKu: 'سەرۆکی داهێنان و ستۆدیۆی وەبەرهێنان',
    positionAr: 'رئيس الابتكار واستوديو المشاريع',
    section: 'leadership',
  },

  // ==========================================
  // ENGINEERING
  // ==========================================
  {
    id: 'position-eng-lead',
    status: 'placeholder',
    position: 'Lead Backend & Systems Architect',
    positionKu: 'بەڕێوەبەری تیمی Backend و تەلارسازی سیستەم',
    positionAr: 'رئيس فريق الخادم الخلفي ومعمارية النظم',
    section: 'engineering',
  },
  {
    id: 'position-fe-lead',
    status: 'placeholder',
    position: 'Principal Frontend Engineer',
    positionKu: 'سەرۆکی ئەندازیاریی ڕووکاری بەکارهێنەر (Frontend)',
    positionAr: 'كبير مهندسي الواجهات الأمامية',
    section: 'engineering',
  },
  {
    id: 'position-devops',
    status: 'placeholder',
    position: 'Sovereign Cloud & DevOps Lead',
    positionKu: 'سەرپەرشتیاری کلاودی سەروەر و دێڤئۆپس',
    positionAr: 'مسؤول السحابة السيادية والبنية التحتية DevOps',
    section: 'engineering',
  },
  {
    id: 'position-security',
    status: 'placeholder',
    position: 'Cybersecurity & Threat Defense Specialist',
    positionKu: 'پسپۆڕی ئاسایشی سایبەری و بەرگریی هەڕەشەکان',
    positionAr: 'أخصائي الأمن السيبراني والدفاع ضد التهديدات',
    section: 'engineering',
  },

  // ==========================================
  // PRODUCT
  // ==========================================
  {
    id: 'position-pm',
    status: 'placeholder',
    position: 'Principal Product Manager',
    positionKu: 'بەڕێوەبەری سەرەکی بەرهەمە دیجیتاڵییەکان',
    positionAr: 'مدير أول للمنتجات والحلول الرقمية',
    section: 'product',
  },
  {
    id: 'position-ux',
    status: 'placeholder',
    position: 'Senior UI/UX & Design Systems Architect',
    positionKu: 'تەلارسازی دیزاین و ئەزموونی بەکارهێنەر (UX/UI)',
    positionAr: 'كبير مصممي تجربة المستخدم وأنظمة التصميم',
    section: 'product',
  },

  // ==========================================
  // OPERATIONS
  // ==========================================
  {
    id: 'position-partnerships',
    status: 'placeholder',
    position: 'Institutional Partnerships & Governance Lead',
    positionKu: 'بەڕێوەبەری هاوبەشییە دامەزراوەییەکان و حوکمڕانی',
    positionAr: 'مسؤول الشراكات المؤسسية والحوكمة التنظيمية',
    section: 'operations',
  },
  {
    id: 'position-talent',
    status: 'placeholder',
    position: 'Head of People & Talent Acquisition',
    positionKu: 'سەرپەرشتیاری گەشەپێدانی سەرچاوە مرۆییەکان و بەهرەکان',
    positionAr: 'مسؤول استقطاب الكفاءات وتطوير رأس المال البشري',
    section: 'operations',
  },
  {
    id: 'position-comms',
    status: 'placeholder',
    position: 'Head of Communications & Public Engagement',
    positionKu: 'سەرپەرشتیاری پەیوەندییە گشتییەکان و ڕاگەیاندن',
    positionAr: 'مسؤول الاتصال الاستراتيجي والإعلام المؤسسي',
    section: 'operations',
  },
];

export const teamData: Record<'ku' | 'ar' | 'en', TeamMember[]> = {
  ku: rawTeamMembers,
  ar: rawTeamMembers,
  en: rawTeamMembers,
};

export function getTeamMembers(locale: string = 'ku'): TeamMember[] {
  const lang = locale === 'ar' || locale === 'en' ? locale : 'ku';
  return teamData[lang];
}

export function getTeamMemberBySlug(slug: string, locale: string = 'ku'): TeamMember | undefined {
  const members = getTeamMembers(locale);
  const normalizedSlug = slug.replace(/-(?:ku|ar|en)$/, '');
  return members.find(
    (m) =>
      m.status === 'filled' &&
      (m.slug === normalizedSlug || m.id === normalizedSlug)
  );
}

export function getAllTeamMemberSlugs(): string[] {
  return rawTeamMembers
    .filter((m) => m.status === 'filled' && m.slug)
    .map((m) => m.slug as string);
}
