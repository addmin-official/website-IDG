import { GraphNode, GraphLink, Locale } from './types';

export const GRAPH_NODES: GraphNode[] = [
  {
    id: 'umm-qasr',
    label: 'Umm Qasr Port',
    kuLabel: 'بەندەری ئوم قەسر',
    arLabel: 'ميناء أم قصر',
    type: 'port',
    status: 'active',
    description: "Iraq's premier maritime deepwater port handling strategic grain, containerized freight, and southern trade flows.",
    kuDescription: 'گەورەترین بەندەری دەریایی عێراق بۆ هاوردەکردنی دانەوێڵەی ستراتیژی، کەلوپەلی کۆنتێنەر، و بازرگانی دەریایی باشوور.',
    arDescription: 'الميناء البحري الأكبر في العراق لاستقبال الحبوب الاستراتيجية، شحنات الحاويات، والتجارة البحرية الجنوبية.',
  },
  {
    id: 'ibrahim-khalil',
    label: 'Ibrahim Khalil Border Crossing',
    kuLabel: 'دەروازەی ئیبراهیم خەلیل',
    arLabel: 'منفذ إبراهيم الخليل',
    type: 'customs_office',
    status: 'active',
    description: 'Primary northern overland customs terminal connecting Iraq with Turkish and European trade corridors.',
    kuDescription: 'دەروازەی سەرەکی گومرگی وشکانی لە باکوور کە عێراق بە ڕێڕەوە بازرگانییەکانی تورکیا و ئەوروپا دەبەستێتەوە.',
    arDescription: 'المعبر الجمركي البري الرئيسي شمال العراق الذي يربط البلاد مع الممرات التجارية التركية والأوروبية.',
  },
  {
    id: 'trebil-corridor',
    label: 'Trebil Trade Corridor',
    kuLabel: 'ڕێڕەوی ترێبیل',
    arLabel: 'ممر طريبيل البري',
    type: 'corridor',
    status: 'bottleneck',
    description: 'Vital overland arterial trade route connecting Iraq and Jordan, experiencing periodic clearance bottlenecks.',
    kuDescription: 'ڕێڕەوی سەرەکی بازرگانی وشکانی نێوان عێراق و ئوردن، کە ڕووبەڕووی قەرەباڵغی و خاوبوونەوەی پشکنین دەبێتەوە.',
    arDescription: 'الشريان التجاري البري الحيوي الرابط بين العراق والأردن، ويشهد اختناقات وتأخيرات في التخليص الجمركي دورياً.',
  },
  {
    id: 'basra-petroleum',
    label: 'Basra Energy Logistics Hub',
    kuLabel: 'مەڵبەندی نەوتی بەسرە',
    arLabel: 'مركز نفط البصرة',
    type: 'port',
    status: 'active',
    description: 'Southern petroleum logistics and bunkering infrastructure coordinating energy export supply lines.',
    kuDescription: 'ژێرخانی لۆجستی نەوت و دابینکردنی سووتەمەنی دەریایی لە باشوور بۆ ڕێکخستنی هێڵەکانی هەناردەی وزە.',
    arDescription: 'البنية التحتية اللوجستية للنفط وتزويد السفن بالوقود في الجنوب لتنسيق مسارات تصدير الطاقة.',
  },
  {
    id: 'customs-authority',
    label: 'General Commission of Customs',
    kuLabel: 'دەستەی گشتی گومرگ',
    arLabel: 'الهيئة العامة للجمارك',
    type: 'organization',
    status: 'active',
    description: 'Supreme federal regulatory body enforcing tariff policies, anti-smuggling directives, and border compliance.',
    kuDescription: 'دەسەڵاتی باڵای فیدراڵی بۆ جێبەجێکردنی سیاسەتەکانی گومرگ، بەرەنگاربوونەوەی قاچاخ، و یەکخستنی ڕێکارەکان.',
    arDescription: 'السلطة الاتحادية العليا المعنية بإنفاذ التعرفة الجمركية، مكافحة التهريب، وحوكمة المنافذ الحدودية.',
  },
  {
    id: 'grain-reserves',
    label: 'Strategic Grain & Food Reserves',
    kuLabel: 'یەدەگی ئاسایشی خۆراک و دانەوێڵە',
    arLabel: 'احتياطي الحبوب والأمن الغذائي',
    type: 'commodity',
    status: 'active',
    description: 'National network of strategic grain silos and essential food basket reserves underpinning food security.',
    kuDescription: 'تۆڕی نیشتمانی سایلۆکانی دانەوێڵە و یەدەگی ستراتیژی خۆراک بۆ دڵنیابوون لە ئاسایشی خۆراکی هاووڵاتییان.',
    arDescription: 'الشبكة الوطنية لصوامع الحبوب والاحتياطيات الغذائية الاستراتيجية الداعمة لمنظومة الأمن الغذائي والبطاقة التموينية.',
  },
  {
    id: 'iraq-nsw',
    label: 'Iraq National Single Window (NSW)',
    kuLabel: 'پەنجەرەی یەکگرتووی ئەلیکترۆنی (Iraq NSW)',
    arLabel: 'نافذة التبادل التجاري الموحدة (Iraq NSW)',
    type: 'regulation',
    status: 'active',
    description: 'Unified federal digital clearance platform integrating electronic manifests, multi-agency permits, and audits.',
    kuDescription: 'پلاتفۆرمی نیشتمانی یەکگرتووی دیجیتاڵی بۆ پشکنینی مەنەفێست، مۆڵەتە فەرمییەکان، و بەڵگەنامە گومرگییەکان.',
    arDescription: 'المنظومة الرقمية الاتحادية الموحدة لتدقيق المنافيست الإلكتروني، تصاريح الجهات القطاعية، والبيانات الجمركية.',
  },
  {
    id: 'cbi-trade-platform',
    label: 'CBI Trade Financing Platform',
    kuLabel: 'دارایی بازرگانی بانکی ناوەندی (CBI)',
    arLabel: 'منصة تمويل التجارة - البنك المركزي (CBI)',
    type: 'regulation',
    status: 'active',
    description: 'Central Bank of Iraq documentary credit and foreign exchange platform validating legitimate commercial transactions.',
    kuDescription: 'پلاتفۆرمی ئەلیکترۆنی بانکی ناوەندی بۆ پەسەندکردنی حەواڵە و متمانەی دارایی هاوردەکردنی فەرمی.',
    arDescription: 'المنصة الإلكترونية للبنک المركزي العراقي للتحقق من الاعتمادات المستندية وحوالات تمويل التجارة الخارجية.',
  },
];

export const GRAPH_LINKS: GraphLink[] = [
  {
    source: 'umm-qasr',
    target: 'customs-authority',
    label: 'Regulated by',
    kuLabel: 'چاودێریکراو لەلایەن',
    arLabel: 'خاضع لرقابة',
    type: 'regulated_by',
  },
  {
    source: 'ibrahim-khalil',
    target: 'customs-authority',
    label: 'Regulated by',
    kuLabel: 'چاودێریکراو لەلایەن',
    arLabel: 'خاضع لرقابة',
    type: 'regulated_by',
  },
  {
    source: 'trebil-corridor',
    target: 'customs-authority',
    label: 'Regulated by',
    kuLabel: 'چاودێریکراو لەلایەن',
    arLabel: 'خاضع لرقابة',
    type: 'regulated_by',
  },
  {
    source: 'umm-qasr',
    target: 'iraq-nsw',
    label: 'Processes manifests via',
    kuLabel: 'مەنەفێست دەنێرێت بۆ',
    arLabel: 'يرسل المنافيست عبر',
    type: 'depends_on',
  },
  {
    source: 'ibrahim-khalil',
    target: 'iraq-nsw',
    label: 'Synchronizes with',
    kuLabel: 'هاوکات دەکرێت لەگەڵ',
    arLabel: 'يتزامن رقمياً مع',
    type: 'depends_on',
  },
  {
    source: 'umm-qasr',
    target: 'grain-reserves',
    label: 'Discharges wheat into',
    kuLabel: 'دانەوێڵە دەنێرێت بۆ',
    arLabel: 'يفرغ الحبوب إلى',
    type: 'routes_through',
  },
  {
    source: 'trebil-corridor',
    target: 'grain-reserves',
    label: 'Transports dry bulk to',
    kuLabel: 'کاڵای وشک دەگوازێتەوە بۆ',
    arLabel: 'ينقل البضائع الجافة إلى',
    type: 'routes_through',
  },
  {
    source: 'grain-reserves',
    target: 'cbi-trade-platform',
    label: 'Funded through FX letters of credit',
    kuLabel: 'تەمویل دەکرێت لە ڕێگەی',
    arLabel: 'يمول بالاعتمادات عبر',
    type: 'depends_on',
  },
  {
    source: 'basra-petroleum',
    target: 'umm-qasr',
    label: 'Routes marine bunkering via',
    kuLabel: 'خزمەتگوزاری لۆجستی لە ڕێگەی',
    arLabel: 'يمر بالخدمات عبر',
    type: 'routes_through',
  },
  {
    source: 'cbi-trade-platform',
    target: 'iraq-nsw',
    label: 'Cross-verifies import declarations',
    kuLabel: 'پشکنینی هاوبەشی بەڵگەنامە لەگەڵ',
    arLabel: 'يدقق بيانات الاستيراد مع',
    type: 'managed_by',
  },
];

export const NODE_LAYOUT_COORDINATES: Record<string, { x: number; y: number }> = {
  'ibrahim-khalil': { x: 180, y: 170 },
  'trebil-corridor': { x: 200, y: 440 },
  'customs-authority': { x: 500, y: 120 },
  'iraq-nsw': { x: 500, y: 310 },
  'cbi-trade-platform': { x: 500, y: 500 },
  'basra-petroleum': { x: 820, y: 180 },
  'umm-qasr': { x: 800, y: 370 },
  'grain-reserves': { x: 740, y: 530 },
};

export const NODE_TYPE_LABELS: Record<GraphNode['type'], Record<Locale, string>> = {
  port: {
    en: 'Maritime Port',
    ku: 'بەندەری دەریایی',
    ar: 'ميناء بحري',
  },
  customs_office: {
    en: 'Customs Terminal',
    ku: 'دەروازەی گومرگی',
    ar: 'منفذ جمركي',
  },
  corridor: {
    en: 'Trade Corridor',
    ku: 'ڕێڕەوی بازرگانی',
    ar: 'ممر تجاري',
  },
  commodity: {
    en: 'Strategic Commodity',
    ku: 'کاڵای ستراتیژی',
    ar: 'سلعة استراتيجية',
  },
  regulation: {
    en: 'Regulatory Framework',
    ku: 'چوارچێوەی ڕێکخستن',
    ar: 'منظومة تنظيمية',
  },
  organization: {
    en: 'Federal Authority',
    ku: 'دەسەڵاتی فیدراڵی',
    ar: 'سلطة اتحادية',
  },
};

export const NODE_STATUS_LABELS: Record<GraphNode['status'], Record<Locale, string>> = {
  active: {
    en: 'Operational',
    ku: 'چالاک و کارپێکەر',
    ar: 'نشط وتشغيلي',
  },
  bottleneck: {
    en: 'Logistical Bottleneck',
    ku: 'قەرەباڵغی لۆجستی',
    ar: 'عنق زجاجة لوجستي',
  },
  restricted: {
    en: 'Restricted Protocol',
    ku: 'پرۆتۆکۆلی سنووردار',
    ar: 'بروتوكول مقيد',
  },
  offline: {
    en: 'Offline / Maintenance',
    ku: 'لەکارکەوتوو / چاکسازی',
    ar: 'خارج الخدمة / صيانة',
  },
};

export const LINK_TYPE_LABELS: Record<GraphLink['type'], Record<Locale, string>> = {
  depends_on: {
    en: 'Depends On',
    ku: 'پشت بەستوو بە',
    ar: 'يعتمد على',
  },
  routes_through: {
    en: 'Routes Through',
    ku: 'ڕێڕەوە لە ڕێگەی',
    ar: 'يمر عبر',
  },
  regulated_by: {
    en: 'Regulated By',
    ku: 'چاودێریکراو بە',
    ar: 'خاضع لرقابة',
  },
  managed_by: {
    en: 'Cross-Verified With',
    ku: 'پشکنراو لەگەڵ',
    ar: 'متحقق منه مع',
  },
};

export function getNodeLabel(node: GraphNode, locale: Locale): string {
  if (locale === 'ku') return node.kuLabel;
  if (locale === 'ar') return node.arLabel;
  return node.label;
}

export function getNodeDescription(node: GraphNode, locale: Locale): string {
  if (locale === 'ku') return node.kuDescription;
  if (locale === 'ar') return node.arDescription;
  return node.description;
}

export function getLinkLabel(link: GraphLink, locale: Locale): string {
  if (locale === 'ku') return link.kuLabel;
  if (locale === 'ar') return link.arLabel;
  return link.label;
}
