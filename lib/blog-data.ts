import { BlogPostData } from '@/components/BlogCard';

export const FALLBACK_BLOG_POSTS: BlogPostData[] = [
  // ─── KURDISH (ku) ───
  {
    id: 'ku-1',
    title: 'گەیاندنی تەکنۆلۆژی بۆ عێراق: ڕێڕەوی گۆڕانکاریی نیشتمانی و سەروەریی دیجیتاڵی',
    slug: 'tech-delivery-iraq-ku',
    excerpt: 'پوختەی هەوڵەکانی دەروازەی دیجیتاڵیی عێراق (IDG) بۆ ڕاکێشان و بەنیشتمانیکردنی تەکنەلۆژیای پێشکەوتوو، ڕێکخستنی سیستەمی بەیەکەوەبەستن و پێشخستنی کەرتی گشتی و تایبەت بە ستانداردە جیهانییەکان.',
    content: `## دەستپێک: پێویستیی مێژوویی بە ژێرخانی سەروەر

عێراق لە قۆناغێکی چارەنووسسازدایە بۆ پەرەپێدانی تەکنەلۆژیا و ژێرخانی دیجیتاڵی. بۆ چەندین دەیە، پشتبەستن بە سیستەمی کاغەزی و کەرەستەی دابڕاو بووەتە هۆی دروستبوونی بەربەست لەبەردەم گەشەی ئابووری و خزمەتگوزارییە گشتییەکاندا. دەروازەی دیجیتاڵیی عێراق (IDG) وەک دامەزراوەیەکی سەروەری تەکنەلۆژی هاتۆتە کایەوە تا ئاڵۆزییەکان بگۆڕێت بۆ توانایەکی کارپێکردنی متمانەپێکراو.

### ڕەهەندە سەرەکییەکانی گەیاندنی تەکنەلۆژیا:
1. **ستانداردسازیی نەتەوەیی:** یەکخستنی زمانی پرۆتۆکۆڵەکان لەنێوان گشت وەزارەت و دامەزراوەکان بۆ دڵنیابوون لەوەی داتاکان لەناوخۆی عێراقدا کۆگا و شی دەکرێنەوە.
2. **پەیوەندیی خێرا و سەلامەت:** دروستکردنی کەناڵی پارێزراوی Zero-Trust کە ناهێڵێت هیچ جۆرە دزەکردنێک بۆ سەر بنکەدراوە سەرەکییەکان ڕووبدات.
3. **پەرەپێدانی بەرهەمی خۆماڵی:** هاوردەکردنی تەکنەلۆژیا بەتەنیا بەس نییە، بەڵکو دەبێت ئەندازیارانی عێراقی خۆیان دەستکاری و بەڕێوەبردنی سیستەمەکان بگرنە ئەستۆ.

### دەرەنجام
گەیاندنی تەکنەلۆژیا هەنگاوێکی کورتخایەن نییە؛ بەڵکو پرۆسەیەکی بەردەوامی بنیاتنانەوەی متمانەی گشتی و دەستەبەرکردنی ئاسایشی نەتەوەییە لە سەردەمی دیجیتاڵیدا.`,
    locale: 'ku',
    author: 'IDG Team',
    publishedAt: '2026-10-15T00:00:00.000Z',
    featured: true,
    tags: ['technology', 'digital', 'iraq', 'infrastructure'],
  },
  {
    id: 'ku-2',
    title: 'ئینتەرنێت و دیجیتاڵ بوون لە عێراق: تێپەڕاندنی بەربەستەکان بەرەو خێرایی و متمانە',
    slug: 'internet-digitalization-iraq-ku',
    excerpt: 'لێکۆڵینەوەیەکی ورد لەسەر ئاستەنگەکانی هێڵی ئینتەرنێت، ڕێڕەوەکانی فیبەر ئۆپتیک و چۆنیەتی بونیادنانی ناوەندی داتای خۆجێیی لە سەرتاسەری پارێزگاکانی عێراقدا.',
    content: `## دۆخی ئێستای تۆڕی پەیوەندییەکان لە عێراق

دیجیتاڵبوون بەبێ ژێرخانێکی تۆکمەی ئینتەرنێت تەنیا دروشمێکە. عێراق پێویستی بە تۆڕێکی پەیوەندییە کە بە شێوەیەکی بەردەوام و بە کەمترین دواکەوتن (Low Latency) خزمەتگوزاری پێشکەش بکات.

### هەنگاوە ستراتیژییەکانی بەرەوپێشچوون:
* **فراوانکردنی ڕێڕەوی فایبەر ئۆپتیک:** گەیاندنی ڕیشاڵی بینایی بۆ گشت ناوچەکان و کەمکردنەوەی پشتبەستن بە سیستەمی بێوایەری کۆن.
* **ناوەندی ئاڵوگۆڕی ئینتەرنێتی ناوخۆیی (IXP):** هێشتنەوەی هاتووچۆی داتا ناوخۆییەکان لەناو سنووری وڵات، کە هەم خێرایی بەرز دەکاتەوە و هەم خەرجی کەمدەکاتەوە.
* **پاراستنی ئاسایشی سایبەری:** دابینکردنی دیواری ئاگرین (Firewall)ی پیشەسازی و پاراستنی ژێرخان لە هێرشەکانی ڕەتکردنەوەی خزمەتگوزاری (DDoS).`,
    locale: 'ku',
    author: 'IDG Team',
    publishedAt: '2026-10-14T00:00:00.000Z',
    featured: true,
    tags: ['digital', 'connectivity', 'iraq', 'infrastructure'],
  },
  {
    id: 'ku-3',
    title: 'فێرگە و پەروەردەی دیجیتاڵی: پێگەیاندنی نەوەی داهاتووی تەکنەلۆژیا لە ZaNa Academy',
    slug: 'digital-education-zana-academy-ku',
    excerpt: 'چۆن پرۆگرامی پەروەردەیی ئەکادیمیای ZaNa نەوەیەکی نوێ لە ئەندازیارانی سۆفتوێر، پسپۆڕانی ژیریی دەستکرد و داتاساینس لە عێراق و هەرێمی کوردستان پێدەگەیەنێت.',
    content: `## کەلێنی توانا مرۆییەکان لە کەرتی تەکنەلۆژیای عێراق

یەکێک لە گەورەترین ئاستەنگەکانی بەردەم پەرەپێدانی دیجیتاڵی لە عێراق نەبوونی کادیری ڕاهێنراوە لەسەر تەکنەلۆژیا نوێیەکان. کەرتی زانکۆکان نەیتوانیوە بە تەواوی هاوشانی بازاڕی کاری نێودەوڵەتی بڕوات. لێرەوە بیرۆکەی ئەکادیمیای ZaNa وەک ستۆدیۆی پێگەیاندنی نەوەی داهاتوو سەریهەڵدا.

### ستوونە سەرەکییەکانی پەروەردەی دیجیتاڵی:
1. **فێربوونی پراکتیکی:** خوێندکاران بەشداری لە پرۆژەی ڕاستەقینەی کەرتی گشتی و تایبەت دەکەن.
2. **ژیریی دەستکرد و شیکاریی داتا:** فێرکردنی مۆدێلە پێشکەوتووەکان بۆ ئەوەی بڕیارە ئیدارییەکان بە بەڵگەوە بدرێن.
3. **کولتووری داهێنان و کارسازی:** ڕێنماییکردنی گەنجان بۆ بنیاتنانی ستارتئەپی سەربەخۆ.`,
    locale: 'ku',
    author: 'IDG Team',
    publishedAt: '2026-10-12T00:00:00.000Z',
    featured: false,
    tags: ['education', 'technology', 'digital', 'academy'],
  },
  {
    id: 'ku-4',
    title: 'دەروازەی دیجیتاڵیی عێراق (IDG): مۆدێلی کۆمپانیای دایک و وەبەرهێنانی دامەزراوەیی',
    slug: 'idg-venture-studio-model-ku',
    excerpt: 'ناساندنی پێکهاتەی حوکمڕانیی IDG وەک ستۆدیۆیەکی وەبەرهێنانی سەروەر و کۆمپانیای دایک کە خزمەتگوزاری ژێرخانی نیشتمانی لە هەولێر و بەغدا پەرەپێدەدات.',
    content: `## پێناسەی مۆدێلی Venture Studio لە کەرتی گشتیدا

دەروازەی دیجیتاڵیی عێراق (IDG) کۆمپانیایەکی بازرگانی ئاسایی نییە و سەر بە دامەزراوەی دەرەکی نییە؛ بەڵکو کۆمپانیایەکی دایکی سەروەری نیشتمانییە.

### تایبەتمەندییەکانی مۆدێلی IDG:
* **خاوەندارێتی و سەروەری:** گشت سەرمایە و پڕۆژەکان لە ناوخۆی عێراق خاوەندارێتی دەکرێن.
* **پردی نێوان حکومەت و کەرتی تایبەت:** پڕکردنەوەی کەلێنی نێوان خێرایی کەرتی تایبەت و یاسا و ڕێساکانی کەرتی گشتی.
* **متمانەپێکراوی و بەردەوامی:** بەرهەمهێنانی پلاتفۆرمی نیشتمانی وەک پەنجەرەی یەکگرتووی نیشتمانی (INSW).`,
    locale: 'ku',
    author: 'IDG Team',
    publishedAt: '2026-10-10T00:00:00.000Z',
    featured: true,
    tags: ['governance', 'venture', 'digital', 'iraq'],
  },
  {
    id: 'ku-5',
    title: 'بنچینەی تەکنۆلۆژی و ژێرخانی سەروەر: بۆچی عێراق پێویستی بە داتای پارێزراوە؟',
    slug: 'sovereign-tech-infrastructure-ku',
    excerpt: 'لێکۆڵینەوە لەسەر گرنگی مانەوەی زانیاری و داتای هاووڵاتیان و بازرگانی عێراق لەناو خاکی نیشتماندا و بنەماکانی تەلارسازی Zero-Trust.',
    content: `## پاراستنی داتا وەک ئەرکێکی نیشتمانی

لە سەدەی بیست و یەکەمدا داتا بە نەوتی نوێ دادەنرێت. ناردنی داتای هەستیاری بانکەکان، ناسنامەی هاووڵاتیان و بازرگانی نێودەوڵەتی بۆ سێرڤەری دەرەکی مەترسییەکی گەورەیە بۆ سەر سەروەری وڵات.

### چۆن ژێرخانی سەروەر دەستەبەر دەکرێت؟
1. **داتاسەنتەری خۆجێیی مۆڵەتپێدراو:** بنیاتنانی ناوەندی داتا بە ستانداری جیهانی Tier-3 و Tier-4 لەناو پارێزگاکانی عێراق.
2. **کۆنتڕۆڵی دەسەڵاتەکان (Zero-Trust):** هیچ بەکارهێنەرێک یان سیستەمێک بێ پشتڕاستکردنەوە متمانەی پێناکرێت.
3. **پاراستنی یاسایی و یاسای داتا:** هاوکاریکردن لە داڕشتنی ڕێسای سەروەری داتا و پاراستنی نهێنی تاکەکان.`,
    locale: 'ku',
    author: 'IDG Team',
    publishedAt: '2026-10-08T00:00:00.000Z',
    featured: false,
    tags: ['technology', 'governance', 'iraq', 'digital'],
  },

  // ─── ARABIC (ar) ───
  {
    id: 'ar-1',
    title: 'نقل التكنولوجيا إلى العراق: المسار السيادي للتحول الرقمي الشامل',
    slug: 'tech-delivery-iraq-ar',
    excerpt: 'كيف تعمل بوابة العراق الرقمية (IDG) على توطين التقنيات المتقدمة وربط المؤسسات الحكومية والخاصة بمنظومات رقمية موثوقة وعالية الكفاءة.',
    content: `## المقدمة: حتمية بناء البنية التحتية السيادية

يقف العراق اليوم أمام فرصة تاريخية لإعادة صياغة مشهده الرقمي والتكنولوجي. لعقود طويلة، شكّل الاعتماد على المعاملات الورقية والأنظمة المعزولة عائقاً أمام التنمية الاقتصادية وتطوير الخدمات العامة. تأسست بوابة العراق الرقمية (IDG) لتكون الحاضنة المؤسسية التي تحول هذه التعقيدات إلى قدرات تشغيلية مستدامة.

### المحاور الأساسية لنقل وتوطين التكنولوجيا:
1. **توحيد المعايير الوطنية:** تأسيس لغة برمجية موحدة وبروتوكولات تكامل تضمن معالجة وتخزين البيانات الوطنية داخل الحدود الجغرافية للعراق.
2. **بنية تحتية آمنة قائمة على نموذج انعدام الثقة (Zero-Trust):** حماية الأنظمة المركزية وقواعد البيانات السيادية من أي اختراق أو تسريب معلومات.
3. **بناء الكفاءات العراقية:** تمكين المهندسين العراقيين من إدارة وتطوير وصيانة هذه الأنظمة محلياً.`,
    locale: 'ar',
    author: 'IDG Team',
    publishedAt: '2026-10-15T00:00:00.000Z',
    featured: true,
    tags: ['technology', 'digital', 'iraq', 'infrastructure'],
  },
  {
    id: 'ar-2',
    title: 'الإنترنت والتحول الرقمي في العراق: من التحديات اللوجستية إلى الحلول الموثوقة',
    slug: 'internet-digitalization-iraq-ar',
    excerpt: 'دراسة تحليلية حول واقع شبكات الاتصال في المحافظات العراقية ومسارات توسيع الألياف الضوئية ومراكز تبادل البيانات الوطنية.',
    content: `## واقع شبكات الاتصالات في العراق اليوم

لا يمكن الحديث عن تحول رقمي حقيقي دون وجود شبكة إنترنت سريعة، مستقرة، وبزمن استجابة منخفض.

### مسار التطوير الاستراتيجي:
* **توسيع شبكات الألياف الضوئية (FTTH):** استبدال الوصلات اللاسلكية التقليدية بشبكات ألياف بصرية تضمن سرعات فائقة واعتمادية عالية.
* **إنشاء نقاط تبادل الإنترنت الوطنية (IXP):** إبقاء حركة البيانات المحلية داخل العراق لتقليل التكلفة وتحسين زمن الوصول للأجهزة الحكومية.
* **الأمن السيبراني المؤسسي:** تفعيل جدران الحماية السيادية لحماية البنى التحتية الحيوية من الهجمات الإلكترونية.`,
    locale: 'ar',
    author: 'IDG Team',
    publishedAt: '2026-10-14T00:00:00.000Z',
    featured: true,
    tags: ['digital', 'connectivity', 'iraq', 'governance'],
  },
  {
    id: 'ar-3',
    title: 'أكاديمية زانا (ZaNa): بناء الكفاءات الوطنية وهندسة برمجيات المستقبل',
    slug: 'digital-education-zana-academy-ar',
    excerpt: 'استكشف دور أكاديمية زانا في تدريب وتأهيل جيل جديد من المطورين ومهندسي الذكاء الاصطناعي وعلوم البيانات لخدمة السوق العراقي.',
    content: `## سد الفجوة المهارية في قطاع التكنولوجيا العراقي

تعد ندرة الكفاءات البرمجية المتخصصة في التقنيات الحديثة أحد أبرز التحديات التي تواجه مشاريع الرقمنة في البلاد. جاءت أكاديمية زانا (ZaNa) كذراع تعليمي وتأهيلي تابع لـ IDG لسد هذه الفجوة بصورة عملية ومباشرة.

### ركائز التعليم الرقمي الحديث في زانا:
1. **التعلم عبر المشاريع الحقيقية:** بناء منصات برمجية فعلية تلبي احتياجات الوزارات والمؤسسات المحلية.
2. **الذكاء الاصطناعي التطبيقي:** تعليم هندسة النماذج اللغوية وتحليل البيانات الضخمة لدعم اتخاذ القرار المؤسسي.
3. **ثقافة ريادة الأعمال والابتكار:** إعداد الشباب العراقي لتحويل أفكارهم إلى شركات تقنية ناشئة.`,
    locale: 'ar',
    author: 'IDG Team',
    publishedAt: '2026-10-12T00:00:00.000Z',
    featured: false,
    tags: ['education', 'technology', 'digital', 'academy'],
  },
  {
    id: 'ar-4',
    title: 'بوابة العراق الرقمية (IDG): نموذج الشركة القابضة واستوديو المشاريع السيادي',
    slug: 'idg-venture-studio-model-ar',
    excerpt: 'نظرة معمقة في الهيكل المؤسسي لبوابة العراق الرقمية كشركة أم واستوديو مشاريع تقنية سيادية تعمل في بغداد وأربيل.',
    content: `## مفهوم استوديو المشاريع (Venture Studio) في القطاع العام

ليست بوابة العراق الرقمية شركة تجارية تقليدية ولا تتبع لأي جهات أجنبية؛ بل هي مؤسسة تكنولوجية سيادية تعمل وفق نموذج استوديو المشاريع لبناء وتوسيع الحلول الرقمية المستقلة.

### ميزات نموذج عمل IDG:
* **الملكية والسيادة الوطنية:** تخضع جميع الأصول والمشاريع والبيانات للملكية والتشريعات العراقية بالكامل.
* **الجسر المؤسسي بين القطاعين:** الجمع بين ديناميكية وابتكار القطاع الخاص مع الالتزام بالضوابط التنظيمية والمصلحة العامة للقطاع الحكومي.
* **مشاريع وطنية كبرى:** إطلاق مشاريع كبرى مثل النافذة الوطنية الموحدة للتجارة ومنصة الذكاء الاصطناعي السيادي (AI Gate).`,
    locale: 'ar',
    author: 'IDG Team',
    publishedAt: '2026-10-10T00:00:00.000Z',
    featured: true,
    tags: ['governance', 'venture', 'digital', 'iraq'],
  },
  {
    id: 'ar-5',
    title: 'السيادة الرقمية وتوطين البيانات: الركيزة الأساسية للأمن القومي العراقي',
    slug: 'sovereign-tech-infrastructure-ar',
    excerpt: 'لماذا يعد الحفاظ على البيانات الحكومية والتجارية داخل الأراضي العراقية شرطاً أساسياً لحماية الاستقرار المالي والأمني؟',
    content: `## البيانات كثروة وطنية استراتيجية

في الاقتصاد المعاصر، تعد البيانات بمثابة النفط الرقمي. إن استضافة البيانات الحيوية للمصارف والمواطنين وسجلات التجارة في خوادم خارج البلاد يعرض الأمن الوطني لمخاطر جمّة.

### متطلبات حماية السيادة الرقمية:
1. **مراكز بيانات وطنية معتمدة:** إنشاء مراكز بيانات بمعايير Tier-3 و Tier-4 داخل العراق تضمن استمرارية الأعمال تحت أصعب الظروف.
2. **بروتوكولات الأمان المشددة:** تطبيق ضوابط تشفير متقدمة تمنع أي وصول غير مصرح به للمعلومات الحساسة.
3. **الأطر القانونية والتنظيمية:** صياغة سياسات صارمة لتوطين البيانات وحماية الخصوصية الفردية والمؤسسية.`,
    locale: 'ar',
    author: 'IDG Team',
    publishedAt: '2026-10-08T00:00:00.000Z',
    featured: false,
    tags: ['technology', 'governance', 'iraq', 'digital'],
  },

  // ─── ENGLISH (en) ───
  {
    id: 'en-1',
    title: 'Delivering Sovereign Technology to Iraq: The Architectural Blueprint for National Transformation',
    slug: 'tech-delivery-iraq-en',
    excerpt: 'An overview of Iraq Digital Gateway’s sovereign framework to domesticate high-assurance technologies, modernize government operations, and foster sustainable economic resilience.',
    content: `## Introduction: The Imperative for Sovereign Digital Infrastructure

Iraq stands at an unprecedented juncture in its modernization journey. For decades, dependency on manual paper workflows and fragmented systems has imposed severe friction on economic momentum and public service delivery. Iraq Digital Gateway (IDG) was established as a sovereign technology holding company and venture studio to transform this operational complexity into trusted, scalable capability.

### Strategic Dimensions of Domestic Technology Delivery:
1. **National Standardization:** Establishing unified communication protocols, data schemas, and API integration guidelines across public and private sector entities, ensuring all national records remain securely domiciled within Iraqi borders.
2. **Zero-Trust Security Architecture:** Enforcing strict identity verification, mutual TLS, and continuous validation across every layer of the institutional tech stack to neutralize modern cyber threats.
3. **Local Engineering Capacity:** Technology transfer is incomplete if it merely imports black-box solutions. IDG actively invests in developing Iraqi software engineers and systems architects to operate and iterate national platforms independently.`,
    locale: 'en',
    author: 'IDG Team',
    publishedAt: '2026-10-15T00:00:00.000Z',
    featured: true,
    tags: ['technology', 'digital', 'iraq', 'infrastructure'],
  },
  {
    id: 'en-2',
    title: 'Connectivity and Digital Modernization in Iraq: Overcoming Legacy Infrastructure Friction',
    slug: 'internet-digitalization-iraq-en',
    excerpt: 'Analyzing telecommunications infrastructure across Iraqi governorates, evaluating fiber optic expansion, and establishing local Internet Exchange Points for low-latency systems.',
    content: `## The Current State of Telecommunications in Iraq

True digital transformation cannot materialize without high-throughput, low-latency, and redundant telecommunications infrastructure. Many institutions still struggle with fragmented connectivity and vulnerability to single points of failure.

### The Modernization Roadmap:
* **Fiber-to-the-Home (FTTH) & Enterprise Fiber:** Accelerating the deployment of high-capacity optical fiber networks across major metropolitan areas and strategic transit corridors.
* **National Internet Exchange Points (IXPs):** Keeping domestic traffic within Iraqi borders to slash transit costs, lower packet latency, and reinforce information sovereignty.
* **Critical Infrastructure Resilience:** Hardening telecommunications conduits against physical and cyber disruption through redundant routing protocols.`,
    locale: 'en',
    author: 'IDG Team',
    publishedAt: '2026-10-14T00:00:00.000Z',
    featured: true,
    tags: ['digital', 'connectivity', 'iraq', 'governance'],
  },
  {
    id: 'en-3',
    title: 'ZaNa Academy & Digital Capacity Building: Engineering the Next Generation of Iraqi Talent',
    slug: 'digital-education-zana-academy-en',
    excerpt: 'How ZaNa Academy is closing the national tech skills gap by immersing young developers in practical software engineering, cloud architecture, and applied AI systems.',
    content: `## Addressing the Human Capital Bottleneck in Iraq’s Tech Ecosystem

One of the greatest bottlenecks confronting national modernization is the scarcity of trained technical personnel equipped with modern full-stack, data engineering, and cloud skills. ZaNa Academy serves as IDG’s dedicated educational vehicle to systematically cultivate this talent pool.

### Core Pillars of the ZaNa Curriculum:
1. **Production-Grade Project Immersion:** Students contribute directly to live microservices supporting institutional workflows.
2. **Applied Artificial Intelligence:** Deep instruction in domain-adapted language models, computer vision, and data pipelines to solve tangible logistical bottlenecks.
3. **Ethical Engineering and Security Mindset:** Imbuing every graduate with a zero-trust ethos and a deep appreciation for data privacy.`,
    locale: 'en',
    author: 'IDG Team',
    publishedAt: '2026-10-12T00:00:00.000Z',
    featured: false,
    tags: ['education', 'technology', 'digital', 'academy'],
  },
  {
    id: 'en-4',
    title: 'Iraq Digital Gateway (IDG): The Institutional Holding Company & Sovereign Venture Studio Model',
    slug: 'idg-venture-studio-model-en',
    excerpt: 'Exploring the governance model of IDG as an institutional holding company bridging government requirements with private sector velocity across Baghdad and Erbil.',
    content: `## The Venture Studio Paradigm in Sovereign Infrastructure

Iraq Digital Gateway (IDG) is neither a typical commercial IT vendor nor a foreign subsidiary. It operates as a sovereign holding company and institutional venture studio focused exclusively on foundational national infrastructure.

### Hallmarks of the IDG Model:
* **Uncompromising Data & Asset Sovereignty:** All created intellectual property, codebases, and infrastructure assets are permanently held under sovereign Iraqi ownership.
* **Institutional Bridge:** Melding the agile development velocity of top-tier venture studios with the regulatory rigor required by state institutions and financial regulators.
* **Mission-Critical Flagship Deployments:** Incubation of nationwide initiatives including the Iraq National Single Window (INSW) and the AI Gate national automation platform.`,
    locale: 'en',
    author: 'IDG Team',
    publishedAt: '2026-10-10T00:00:00.000Z',
    featured: true,
    tags: ['governance', 'venture', 'digital', 'iraq'],
  },
  {
    id: 'en-5',
    title: 'Sovereign Digital Infrastructure & Data Residency: Why Iraqi Information Belongs on Iraqi Soil',
    slug: 'sovereign-tech-infrastructure-en',
    excerpt: 'Understanding why domestic data residency, Tier-3/Tier-4 data center facilities, and cryptographic sovereignty are vital for national security and economic independence.',
    content: `## Data as the Strategic Foundation of 21st-Century Governance

In an interconnected global economy, institutional and citizen data represents critical strategic assets. Entrusting banking transactions, customs records, and biometric identities to offshore servers poses profound risks of foreign jurisdictional exposure.

### Building Sovereign Resilience:
1. **Tier-Certified Domestic Data Centers:** Constructing Tier-3 and Tier-4 high-availability facilities located entirely within Iraq, engineered for continuous power and thermal stability.
2. **Cryptographic Autonomy:** Ensuring end-to-end encryption keys are generated and held exclusively by authorized sovereign authorities.
3. **Compliance & Governance Frameworks:** Establishing transparent audit trails and institutional accountability standards aligned with international benchmarks.`,
    locale: 'en',
    author: 'IDG Team',
    publishedAt: '2026-10-08T00:00:00.000Z',
    featured: false,
    tags: ['technology', 'governance', 'iraq', 'digital'],
  },
];

export function getFallbackPost(slug: string): BlogPostData | undefined {
  return FALLBACK_BLOG_POSTS.find((p) => p.slug === slug);
}

export function getFallbackPostsByLocale(locale: string): BlogPostData[] {
  return FALLBACK_BLOG_POSTS.filter((p) => p.locale === locale);
}
