'use client';

import React from 'react';
import { useLocale } from '@/lib/locale-context';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Scale, CheckCircle2, AlertOctagon, FileCheck, ArrowLeft, ArrowRight, ShieldCheck, Mail } from 'lucide-react';
import Link from 'next/link';

export default function TermsPage() {
  const { lang, isRtl, t } = useLocale();

  const isKu = lang === 'ku';
  const isAr = lang === 'ar';

  const content = {
    badge: isKu
      ? 'بەڵگەنامەی یاسایی فەرمی'
      : isAr
      ? 'وثيقة قانونية ملزمة'
      : 'Binding Statutory Agreement',
    title: isKu
      ? 'مەرجەکانی بەکارهێنان'
      : isAr
      ? 'شروط الخدمة والاستخدام'
      : 'Terms of Service',
    updated: isKu
      ? 'دواین نوێکردنەوە: ٩ی تشرینی یەکەمی ٢٠٢٦'
      : isAr
      ? 'آخر تحديث: ٩ تشرين الأول ٢٠٢٦'
      : 'Last Updated: October 9, 2026',
    intro: isKu
      ? 'ئەم بەڵگەنامەیە مەرج و ڕێساکانی دەستڕاگەیشتن و بەکارهێنانی سەرجەم پلاتفۆرمەکان، خزمەتگوزارییەکان، و ژێرخانە تەکنۆلۆژییەکانی سەر بە دەروازەی دیجیتاڵیی عێراق (IDG) ڕێکدەخات.'
      : isAr
      ? 'تحدد هذه الوثيقة الشروط والالتزامات القانونية الحاكمة للوصول إلى واستخدام كافة منصات وأنظمة وخدمات البنية التحتية التابعة لبوابة العراق الرقمية (IDG).'
      : 'These Terms of Service establish the statutory conditions, obligations, and standards governing institutional and individual access to all digital platforms and infrastructure engineered by Iraq Digital Gateway (IDG).',
    sections: [
      {
        icon: CheckCircle2,
        heading: isKu ? '١. قبوڵکردنی مەرجەکان' : isAr ? '١. قبول الشروط والأحكام' : '1. Acceptance of Terms',
        desc: isKu
          ? 'بەکارهێنانی هەر یەک لە پلاتفۆرمەکانی IDG بە مانای پەسەندکردنی تەواوی ئەم مەرجانەیە:'
          : isAr
          ? 'يُعد الوصول إلى أي من منصات IDG إقراراً صريحاً بالالتزام الكامل بهذه الشروط:'
          : 'Accessing or utilizing any IDG software infrastructure constitutes unreserved institutional agreement to these terms:',
        items: isKu
          ? [
              'دەستپێگەیشتن بە خزمەتگوزارییەکان بەڵگەیە لەسەر پابەندبوون بە یاسا بەرکارەکانی کۆماری عێراق و هەرێمی کوردستان.',
              'ئەگەر بەکارهێنەر لەگەڵ هەر بەشێکی ئەم مەرجانەدا هاوڕا نەبێت، دەبێت دەستبەجێ بەکارهێنانی سیستەمەکە ڕابگرێت.',
              'دامەزراوە حکومی و بازرگانییەکان بەرپرسن لە ڕەفتاری ئەو بەکارهێنەرانەی کە بە ناوی ئەوانەوە دەستگەیشتنیان پێدراوە.',
            ]
          : isAr
          ? [
              'يخضع استخدام المنصات للقوانين الاتحادية لجمهورية العراق والتشريعات النافذة في إقليم كردستان.',
              'في حال عدم الموافقة على أي بند، يتعين على المستخدم التوقف الفوري عن استخدام الأنظمة.',
              'تتحمل المؤسسات والشركات المسؤولية القانونية الكاملة عن أنشطة الحسابات المصرح لها بالدخول.',
            ]
          : [
              'System access is strictly governed by the federal laws of the Republic of Iraq and applicable Kurdistan Regional Government legislation.',
              'If an entity does not consent to these statutory terms, system access must terminate immediately.',
              'Enterprise and ministry accounts are legally responsible for all transactions executed under their certified access tokens.',
            ],
      },
      {
        icon: Scale,
        heading: isKu ? '٢. بەکارهێنانی ڕێگەپێدراو و سنووردارکردنەکان' : isAr ? '٢. الاستخدام المصرح به والمحظورات' : '2. Permitted Use & Restrictions',
        desc: isKu
          ? 'تەنها ئەو چالاکییانە ڕێگەپێدراون کە لە چوارچێوەی ئەرک و یاسادا بن:'
          : isAr
          ? 'يُقتصر الاستخدام على الأنشطة المشروعة والأغراض المؤسسية المصرح بها:'
          : 'Infrastructure usage is strictly restricted to certified institutional workflows:',
        items: isKu
          ? [
              'قەدەغەیە هەر هەوڵێک بۆ دزەکردن، ئەنجامدانی هێرشی Penetration Testing بەبێ مۆڵەتی نووسراوی IDG.',
              'قەدەغەیە ئەنجامدانی ئەندازیاریی پێچەوانە (Reverse Engineering) یان دەرهێنانی کۆدی سەرچاوەی سیستەمەکان.',
              'قەدەغەیە بەکارهێنانی سکریپت و ڕۆبۆت بۆ دەرهێنانی داتای گشتی بە شێوەی نایاسایی (Scraping).',
              'بەکارهێنەر دەبێت پارێزگاری لە نهێنی وشەی تێپەڕ و کلیلەکانی ڕێگەپێدانی ئەلیکترۆنی بکات.',
            ]
          : isAr
          ? [
              'يُحظر منعاً باتاً أي محاولة لاختراق الأنظمة أو إجراء اختبارات الاختراق دون إذن خطي مسبق.',
              'يُمنع إجراء الهندسة العكسية (Reverse Engineering) أو تفكيك الأكواد البرمجية للأنظمة السيادية.',
              'يحظر استخدام أي أدوات تجريف آلي للبيانات (Automated Scraping) دون ترخيص مؤسسي صريح.',
              'يتحمل المستخدمون واجب الحفاظ على سرية مفاتيح الأمان والشهادات الرقمية الممنوحة لهم.',
            ]
          : [
              'Prohibition of unauthorized security testing, penetration probing, or stress attacks without prior written mandate.',
              'Strict prohibition of reverse engineering, decompiling, or disassembling sovereign codebase assets.',
              'Prohibition of automated data scraping, harvesting, or bulk programmatic extraction.',
              'Mandatory protection and hardware isolation of issued cryptographic authentication credentials.',
            ],
      },
      {
        icon: ShieldCheck,
        heading: isKu ? '٣. خاوەندارێتیی هزری و سەروەریی پلاتفۆرم' : isAr ? '٣. الملكية الفكرية والسيادة التقنية' : '3. Intellectual Property & Sovereignty',
        desc: isKu
          ? 'تەواوی مافە دارایی و مەعنەوییەکانی پلاتفۆرمەکان پارێزراون:'
          : isAr
          ? 'تخضع كافة أصول المنصة ومخرجاتها الهندسية للحماية الفكرية والسيادية:'
          : 'All digital architectures, source code, and institutional designs remain sovereign proprietary assets:',
        items: isKu
          ? [
              'هەموو کۆدەکانی سەرچاوە، تەلارسازییە ئەندازیارییەکان، لۆگۆ و ناوی بەرهەمەکان (AI Gate Iraq, ZaNa Academy, Green Belt, Iraq NSW) خاوەندارێتی تایبەتی IDGن.',
              'بەخشینی مۆڵەتی بەکارهێنان بە مانای گواستنەوەی خاوەندارێتی نییە.',
              'داتاکانی سەروەری کە لەلایەن وەزارەتەکانەوە دەنێردرێن، موڵکی دەوڵەتی عێراقن و لەلایەن IDG پارێزراون.',
            ]
          : isAr
          ? [
              'كافة الأكواد البرمجية والمعماريات والعلامات التجارية لمنتجات IDG مملوكة حصرياً للشركة الأم.',
              'منح تراخيص الاستخدام المؤسسي لا ينقل أي حق من حقوق الملكية الفكرية بأي شكل.',
              'البيانات الرسمية والسيادية المودعة من قبل الوزارات تبقى ملكاً خالصاً للدولة العراقية وتحت حماية IDG.',
            ]
          : [
              'All software source code, systems architectures, branding, and marks belong exclusively to IDG.',
              'Granting institutional access licenses conveys zero transfer of underlying intellectual property.',
              'Sovereign regulatory data deposited by government ministries remains the exclusive property of the state, safeguarded by IDG.',
            ],
      },
      {
        icon: AlertOctagon,
        heading: isKu ? '٤. سنووردارکردنی بەرپرسیارێتی و یاسای دادوەری' : isAr ? '٤. حدود المسؤولية والقانون الحاكم' : '4. Liability Limitations & Governing Law',
        desc: isKu
          ? 'چوارچێوەی دادوەری و سنووری بەرپرسیارێتی یاسایی بەم شێوەیەیە:'
          : isAr
          ? 'تُحدد المسؤوليات القانونية والمرجعية القضائية وفق الآتي:'
          : 'Statutory limitations of liability and jurisdictional sovereignty are established as follows:',
        items: isKu
          ? [
              'IDG هەموو هەوڵێکی تەکنیکی دەدات بۆ گەرەنتیکردنی کارکردنی ٩٩.٩٩٪ی سیستەمەکان، بەڵام بەرپرسیار نییە لە دەرئەنجامەکانی پچڕانی هێڵی ئینتەرنێتی گشتی دەرەوەی کۆنترۆڵ.',
              'هەر ناکۆکییەکی یاسایی تەنها لە دادگاکانی عێراق و هەرێمی کوردستان یەکلا دەکرێتەوە.',
              'ئەم مەرجانە بەپێی یاساکانی بازرگانی و ئەلیکترۆنیی کۆماری عێراق لێکدەدرێنەوە.',
            ]
          : isAr
          ? [
              'تبذل IDG أقصى جهودها الهندسية لضمان جاهزية ٩٩.٩٩٪، وتُعفى من المسؤولية عن انقطاعات شبكات الاتصالات العامة الخارجة عن السيطرة.',
              'تختص المحاكم العراقية المختصة ومحاكم إقليم كردستان حصراً بالفصل في أي نزاع ينشأ عن هذه الشروط.',
              'تُفسر هذه الشروط وتُنفذ بموجب القوانين التجارية والإلكترونية النافذة في جمهورية العراق.',
            ]
          : [
              'IDG deploys institutional-grade engineering targeting 99.99% availability, but disclaims liability for upstream telecommunication interruptions outside sovereign perimeter control.',
              'Exclusive jurisdiction for any legal disputes resides with the courts of the Republic of Iraq and the Kurdistan Region.',
              'These terms are interpreted strictly in accordance with sovereign Iraqi commercial and electronic transaction jurisprudence.',
            ],
      },
    ],
    contactSection: {
      title: isKu ? 'پەیوەندی لەگەڵ بەشی یاسایی' : isAr ? 'التواصل مع الشؤون القانونية' : 'Legal Affairs Contact',
      desc: isKu
        ? 'بۆ هەر پرسێکی یاسایی، گرێبەستی دامەزراوەیی، یان داواکاریی فەرمی تکایە پەیوەندی بکەن بە:'
        : isAr
        ? 'لأي استفسارات قانونية أو استشارات تعاقدية مؤسسية، يرجى التوجيه إلى:'
        : 'For formal institutional inquiries regarding regulatory compliance, contracts, or terms:',
      email: 'mustafa@aigateiraq.com',
      entity: 'Iraq Digital Gateway (IDG) — Office of the General Counsel',
      location: isKu ? 'هەولێر، هەرێمی کوردستان، عێراق' : isAr ? 'أربيل، إقليم كردستان، العراق' : 'Erbil, Kurdistan Region, Iraq',
    },
    backBtn: isKu ? 'گەڕانەوە بۆ پەڕەی سەرەکی' : isAr ? 'العودة للرئيسية' : 'Return to Home',
  };

  return (
    <div dir={isRtl ? 'rtl' : 'ltr'} lang={lang} className="min-h-screen bg-slate-50 text-slate-900">
      <Navbar lang={lang} t={t} onOpenContact={() => {}} />

      <main className="max-w-4xl mx-auto px-4 sm:px-6 py-12 pt-28">
        {/* Breadcrumb / Back Link */}
        <div className="mb-6">
          <Link
            href={`/${lang}`}
            className="inline-flex items-center gap-2 text-xs font-semibold text-slate-500 hover:text-blue-700 transition"
          >
            {isRtl ? <ArrowRight className="w-4 h-4" /> : <ArrowLeft className="w-4 h-4" />}
            <span>{content.backBtn}</span>
          </Link>
        </div>

        {/* Page Header */}
        <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-sm mb-8">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-xs font-bold text-blue-900 mb-3">
            <Scale className="w-3.5 h-3.5 text-blue-700" />
            <span>{content.badge}</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-2">
            {content.title}
          </h1>
          <p className="text-xs font-mono text-slate-500 mb-4">{content.updated}</p>
          <p className="text-sm sm:text-base text-slate-700 leading-relaxed">{content.intro}</p>
        </div>

        {/* Sections */}
        <div className="space-y-6">
          {content.sections.map((section, idx) => {
            const Icon = section.icon;
            return (
              <section key={idx} className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-sm">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-9 h-9 rounded-xl bg-slate-900 text-white flex items-center justify-center shrink-0">
                    <Icon className="w-5 h-5 text-blue-400" />
                  </div>
                  <h2 className="text-xl font-bold text-slate-900">{section.heading}</h2>
                </div>
                <p className="text-sm text-slate-600 mb-4 leading-relaxed">{section.desc}</p>
                <ul className="space-y-2.5">
                  {section.items.map((item, iIdx) => (
                    <li key={iIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                      <div className="w-1.5 h-1.5 rounded-full bg-blue-600 shrink-0 mt-2" />
                      <span className="leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </section>
            );
          })}

          {/* Contact Section */}
          <section className="bg-slate-900 text-white rounded-2xl p-6 sm:p-8 border border-slate-800 shadow-md">
            <h2 className="text-lg font-bold text-white mb-2 flex items-center gap-2">
              <Mail className="w-5 h-5 text-blue-400" />
              <span>{content.contactSection.title}</span>
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 mb-4 leading-relaxed">
              {content.contactSection.desc}
            </p>
            <div className="bg-slate-950/80 rounded-xl p-4 border border-slate-800 space-y-1.5 font-mono text-xs">
              <div className="flex items-center gap-2">
                <span className="text-slate-400">Email:</span>
                <a href={`mailto:${content.contactSection.email}`} className="text-blue-400 hover:underline">
                  {content.contactSection.email}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-slate-400">Entity:</span>
                <span className="text-slate-200">{content.contactSection.entity}</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-slate-400">Location:</span>
                <span className="text-slate-200">{content.contactSection.location}</span>
              </div>
            </div>
          </section>
        </div>
      </main>

      <Footer t={t} isRtl={isRtl} onOpenContact={() => {}} />
    </div>
  );
}
