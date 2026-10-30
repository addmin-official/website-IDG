'use client';

import React, { useEffect, useState, useRef } from 'react';
import {
  X,
  Play,
  Pause,
  RotateCcw,
  ShieldCheck,
  CheckCircle2,
  Server,
  Layers,
  Terminal,
  ExternalLink,
  Tv,
  Cpu,
  Clock,
  Sparkles,
} from 'lucide-react';

export interface VideoModalProps {
  isOpen: boolean;
  onClose: () => void;
  videoUrl: string;
  title: string;
  id?: string;
  badge?: string;
  duration?: string;
  description?: string;
  lang?: 'ku' | 'ar' | 'en';
}

interface Chapter {
  timestamp: string;
  seconds: number;
  title: string;
  subtitle: string;
  details: string[];
}

export default function VideoModal({
  isOpen,
  onClose,
  videoUrl,
  title,
  id = 'intro',
  badge = 'فێرکاری',
  duration = '12:00',
  description,
  lang = 'ku',
}: VideoModalProps) {
  const [activeTab, setActiveTab] = useState<'video' | 'interactive'>('video');
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentStepIndex, setCurrentStepIndex] = useState(0);
  const [playbackSeconds, setPlaybackSeconds] = useState(0);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const isRtl = lang === 'ku' || lang === 'ar';

  // Specific tailored interactive chapters for each tutorial
  const getTutorialChapters = (): Chapter[] => {
    if (id === 'nsw') {
      return [
        {
          timestamp: '00:00',
          seconds: 0,
          title: lang === 'ku' ? '١. بەستنەوەی مانیفێستی دەروازە بازرگانییەکان' : lang === 'ar' ? '١. ربط المنافيست التجاري للموانئ' : '1. Commercial Port Manifest Ingestion',
          subtitle: lang === 'ku' ? 'دەروازەی بەندەری ئوم قەسر و ئیبراهیم خەلیل بە یەک تۆڕ دەبەسترێنەوە.' : lang === 'ar' ? 'ربط موانئ أم قصر ومعبر إبراهيم الخليل بشبكة موحدة.' : 'Interconnecting Umm Qasr Port and land terminals into a unified network.',
          details: [
            lang === 'ku' ? 'وەرگرتنی بەیاننامەی باری کەشتی و بارهەڵگر بە شێوەی دیجیتاڵی پێش گەیشتن (Pre-arrival).' : lang === 'ar' ? 'استلام بيانات الشحنات إلكترونياً قبل وصولها إلى المنفذ.' : 'Receiving pre-arrival cargo manifests digitally before port docking.',
            lang === 'ku' ? 'سڕینەوەی مامەڵەی کاغەزی و دەستکاریپێکردنی مانیفێست بە تەواوی.' : lang === 'ar' ? 'القضاء التام على التداول الورقي والتلاعب بالمنافيست.' : 'Elimination of paper handling and manifest tampering.',
            lang === 'ku' ? 'پشکنینی کۆدی گومرگی HS بە شێوەی خۆکار لە ناوەندی داتا.' : lang === 'ar' ? 'المطابقة الآلية لرموز التعرفة الجمركية (HS Code).' : 'Automated HS code tariff verification at sovereign edge nodes.',
          ],
        },
        {
          timestamp: '02:45',
          seconds: 165,
          title: lang === 'ku' ? '٢. بەیاننامەی گومرگی لە ASYCUDA World' : lang === 'ar' ? '٢. المعاملة الجمركية عبر أتمتة ASYCUDA' : '2. Customs Declaration via ASYCUDA World',
          subtitle: lang === 'ku' ? 'تەواوکردنی ڕێکارە یاسایی و داراییەکانی گومرگ بەبێ وەستان لە سەرە.' : lang === 'ar' ? 'إنجاز الإجراءات التنظيمية والمالية بدقة تشغيلية كاملة.' : 'Processing regulatory and customs filings with zero queue delays.',
          details: [
            lang === 'ku' ? 'پشکنینی بەڵگەنامەی ڕەسەنایەتی و مۆڵەتی هاوردەکردن لە یەک پەنجەرەوە.' : lang === 'ar' ? 'تدقيق وثائق المنشأ وإجازات الاستيراد عبر نافذة موحدة.' : 'Single-window verification of certificate of origin and import permits.',
            lang === 'ku' ? 'هەڵسەنگاندنی ئاستی مەترسی لە ڕێڕەوی سەوز، زەرد، و سوور بە ئەلگۆریتم.' : lang === 'ar' ? 'تحديد مسارات التخليص (أخضر، أصفر، أحمر) بنظام إدارة المخاطر.' : 'Risk-based channel routing (Green, Yellow, Red) via rule engine.',
            lang === 'ku' ? 'کەمکردنەوەی ماوەی پێداچوونەوە لە چەند هەفتەیەکەوە بۆ کەمتر لە ٤٨ کاتژمێر.' : lang === 'ar' ? 'تقليص زمن المراجعة من أسابيع إلى أقل من ٤٨ ساعة.' : 'Compression of clearance timelines from weeks to under 48 hours.',
          ],
        },
        {
          timestamp: '05:30',
          seconds: 330,
          title: lang === 'ku' ? '٣. پارەدانی ئەلیکترۆنی و بەستنەوە بە بانکی ناوەندی (CBI)' : lang === 'ar' ? '٣. التسوية المالية الآلية مع البنك المركزي' : '3. Electronic Settlement via Central Bank (CBI)',
          subtitle: lang === 'ku' ? 'پارەی باج و ڕسوومات ڕاستەوخۆ دەچێتە خەزێنەی دەوڵەت بە سیستەمی RTGS.' : lang === 'ar' ? 'تحويل الرسوم والضرائب لخزينة الدولة عبر نظام التسوية الإجمالي.' : 'Instant transfer of tariffs and duties to state treasury via RTGS.',
          details: [
            lang === 'ku' ? 'بەستنەوەی بانکە بازرگانییەکان بە دەروازەی پارەدانی نیشتمانی.' : lang === 'ar' ? 'ربط المصارف التجارية ببوابة الدفع الوطنية المعتمدة.' : 'Connecting licensed commercial banks to sovereign payment gateway.',
            lang === 'ku' ? 'دەرکردنی پسوولەی ئەلیکترۆنیی کۆتایی بە واژۆی دیجیتاڵیی پارێزراو.' : lang === 'ar' ? 'إصدار وصولات الاستيفاء الإلكترونية المشفرة وغير القابلة للتعديل.' : 'Issuing cryptographically signed, immutable digital receipts.',
            lang === 'ku' ? 'شەفافیەتی تەواو لە کۆکردنەوەی داهاتە نا-نەوتییەکانی عێراق.' : lang === 'ar' ? 'شفافية كاملة وموثوقة لتعظيم الإيرادات غير النفطية للدولة.' : 'Complete transparency and accountability in non-oil revenue collection.',
          ],
        },
        {
          timestamp: '08:15',
          seconds: 495,
          title: lang === 'ku' ? '٤. مۆڵەتی دەربازبوون و چوونەدەروەی بار لە دەروازەکان' : lang === 'ar' ? '٤. إصدار إذن الخروج ومغادرة البضائع' : '4. Digital Release Clearance & Gate Out',
          subtitle: lang === 'ku' ? 'کۆتاییهێنان بە قۆناغی پشکنین و ئازادکردنی بارهەڵگر لە دەروازەی سنووری.' : lang === 'ar' ? 'إتمام التحقق وخروج الشاحنة من البوابة الجمركية بأمان.' : 'Final gate verification and instant container terminal exit.',
          details: [
            lang === 'ku' ? 'خوێندنەوەی کۆدی QR لە دەروازەی کۆتایی لە ڕێگەی تابلێتی ئەفسەری گومرگ.' : lang === 'ar' ? 'مسح رمز الاستجابة السريعة (QR) عبر أجهزة التحقق الميدانية.' : 'Instant QR verification via handheld border inspection units.',
            lang === 'ku' ? 'تۆمارکردنی کاتی تەواوبوون لە لۆگی نیشتمانی بۆ ڕێگریکردن لە دووبارەبوونەوە.' : lang === 'ar' ? 'تسجيل توقيت الخروج الفعلي لمنع أي استخدام مكرر للوثيقة.' : 'Timestamp logging in national immutable ledger to prevent reuse.',
            lang === 'ku' ? 'ڕاپۆرتی کارپێکردنی ڕاستەوخۆ بۆ بەڕێوەبەرایەتی گشتیی گومرگ و دەروازەکان.' : lang === 'ar' ? 'مزامنة لوحة المتابعة التشغيلية مع هيئة المنافذ الحدودية والجمارك.' : 'Real-time operational dashboard sync with General Directorate of Customs.',
          ],
        },
      ];
    }

    if (id === 'ai-oversight') {
      return [
        {
          timestamp: '00:00',
          seconds: 0,
          title: lang === 'ku' ? '١. چوارچێوەی "مرۆڤ لە چەقی بڕیاردان" (Human-in-the-Loop)' : lang === 'ar' ? '١. مبدأ "الإشراف البشري في مركز القرار"' : '1. Human-in-the-Loop Governance Framework',
          subtitle: lang === 'ku' ? 'ژیریی دەستکرد تەنها هاوکارە لە شییکردنەوە، بڕیاری کۆتایی لە دەستی ئەفسەرە.' : lang === 'ar' ? 'الذكاء الاصطناعي أداة تدقيق داعمة والقرار الحاسم بيد المسؤول.' : 'AI serves strictly as an analytical tool; final authority rests with humans.',
          details: [
            lang === 'ku' ? 'دیاریکردنی سنوری بڕیاردانی خۆکار بۆ کێشە کەم-مەترسییەکان.' : lang === 'ar' ? 'تحديد حدود الأتمتة للمهام التشغيلية منخفضة المخاطر فقط.' : 'Strict autonomy bounding confined to low-risk administrative workflows.',
            lang === 'ku' ? 'پێویستی بە ڕەزامەندیی ئەندازیار یان لێکۆڵەر بۆ هەر گومانێکی جیاوازی.' : lang === 'ar' ? 'اشتراط موافقة المهندس أو المدقق لأي حالة اشتباه يتم رصدها.' : 'Mandatory sign-off from human inspectors for flagged discrepancies.',
            lang === 'ku' ? 'ڕەتکردنەوەی هەر سیستمێکی کۆد کە ڕوونکردنەوەی لۆجیکی نەبێت (Explainable AI).' : lang === 'ar' ? 'اعتماد الذكاء الاصطناعي القابل للتفسير حصراً ورفض الأنظمة المغلقة.' : 'Enforcement of Explainable AI (XAI) rejecting black-box decisions.',
          ],
        },
        {
          timestamp: '03:15',
          seconds: 195,
          title: lang === 'ku' ? '٢. مۆدێلی ناوخۆیی بۆ دەقی کوردی و عەرەبی' : lang === 'ar' ? '٢. النماذج اللغوية السيادية للوثائق القانونية' : '2. In-Country Sovereign Kurdish & Arabic NLP Models',
          subtitle: lang === 'ku' ? 'ڕاهێنراو لەسەر تۆمارە یاسایی و کارگێڕییەکانی عێراق بە پارێزراوی تەواو.' : lang === 'ar' ? 'نماذج مدربة على المصطلحات الإدارية والقانونية العراقية داخل البلاد.' : 'Custom models tuned strictly on sovereign Iraqi legal and regulatory texts.',
          details: [
            lang === 'ku' ? 'پڕۆسێسکردنی تەواوی داتاکان لە داتاسەنتەری ناوخۆیی بەبێ دەرچوون لە وڵات.' : lang === 'ar' ? 'معالجة البيانات داخل مراكز الحوسبة الوطنية دون مغادرة الحدود.' : '100% on-premise execution with zero cross-border data leakage.',
            lang === 'ku' ? 'تێگەیشتن لە زاراوە تایبەتەکانی گومرگ، بانک، و حوکمڕانی بە سۆرانی و عەرەبی.' : lang === 'ar' ? 'فهم عميق للمصطلحات الجمركية والمصرفية باللغتين العربية والكردية.' : 'Domain-adapted comprehension of institutional customs & banking nomenclature.',
            lang === 'ku' ? 'پاراستنی ڕێژەی سەرکەوتنی زیاتر لە ٩٩.٤٪ لە دەرهێنانی داتای مانیفێست.' : lang === 'ar' ? 'دقة تتجاوز ٩٩.٤٪ في استخلاص البيانات وتدقيق المنافيست.' : 'Exceeding 99.4% accuracy in manifest entity extraction and schema parsing.',
          ],
        },
        {
          timestamp: '06:40',
          seconds: 400,
          title: lang === 'ku' ? '٣. ئاشکراکردنی فێڵ و دەستکاریکردنی نرخی کەلوپەل' : lang === 'ar' ? '٣. كشف التلاعب السعري والتحايل التجاري' : '3. Manifest Discrepancy & Valuation Audit Engine',
          subtitle: lang === 'ku' ? 'بەراوردکردنی نرخی ڕاگەیەندراو بە نرخی جیهانی و خشتەی پێوانەیی IDG.' : lang === 'ar' ? 'مقارنة الأسعار المصرحة بالمؤشرات العالمية المعتمدة لحظياً.' : 'Cross-referencing declared values against international commodity baselines.',
          details: [
            lang === 'ku' ? 'ئاڵای سوور (Red Flag) لە کاتی کەمکردنەوەی نایاسایی نرخی کەلوپەل بۆ باجدزین.' : lang === 'ar' ? 'إطلاق تنبيه فوري عند خفض القيمة المصرحة للتهرب الضريبي.' : 'Automated red-flag generation on undervaluation and tariff evasion.',
            lang === 'ku' ? 'دەستنیشانکردنی کێشی نادروست و جیاوازیی قەبارەی کۆنتێنەر بە ئەلگۆریتم.' : lang === 'ar' ? 'رصد فروقات الوزن والحجم المشبوهة للحاويات قبل الفحص.' : 'Detecting weight anomalies and manifest mismatches prior to physical devanning.',
            lang === 'ku' ? 'پاراستنی سەرمایەی گشتی و بەرزکردنەوەی دادپەروەریی بازرگانی.' : lang === 'ar' ? 'حماية المال العام وتعزيز بيئة المنافسة التجارية العادلة.' : 'Protecting public revenue and enforcing level-playing-field commerce.',
          ],
        },
        {
          timestamp: '09:20',
          seconds: 560,
          title: lang === 'ku' ? '٤. لۆگی کۆتایی نەگۆڕ (Immutable Audit Trail)' : lang === 'ar' ? '٤. سجل التدقيق المشفر غير القابل للحذف' : '4. Cryptographic Immutable Audit Trail',
          subtitle: lang === 'ku' ? 'هەموو پێشنیارێکی AI و هەموو پەسەندکردنێکی مرۆڤ بۆ هەمیشە تۆمار دەکرێت.' : lang === 'ar' ? 'توثيق كل مقترح ذكي وكل اعتماد بشري في سجل رقمي دائم.' : 'Every AI recommendation and human verification is permanently hashed.',
          details: [
            lang === 'ku' ? 'تۆمارکردنی SHA-256 Hash بۆ هەر گۆڕانکارییەک لە سیستەمدا.' : lang === 'ar' ? 'تشفير سجلات التدقيق باستخدام خوارزميات SHA-256 المتسلسلة.' : 'SHA-256 cryptographic chaining across all ledger modifications.',
            lang === 'ku' ? 'دەسەڵاتی پشکنینی پاشوەختە بۆ دەستەی دەستپاکی و دیوانی چاودێری دارایی.' : lang === 'ar' ? 'إتاحة تدقيق رجعي كامل لهيئة النزاهة وديوان الرقابة المالية.' : 'Full post-audit capabilities for Supreme Audit Board and Integrity Commission.',
            lang === 'ku' ? 'نەمانی بەرپرسیاریەتی نادیار: کێ، کەی، و بۆچی ئەم کارە ئەنجام دراوە.' : lang === 'ar' ? 'مساءلة قانونية واضحة وموثقة: من ومتى ولماذا تمت الموافقة.' : 'Clear evidentiary chain: identity, timestamp, and justification for every act.',
          ],
        },
      ];
    }

    // Default: intro / sovereign digital architecture
    return [
      {
        timestamp: '00:00',
        seconds: 0,
        title: lang === 'ku' ? '١. دیدگای سەروەریی تەکنەلۆژی لە عێراق' : lang === 'ar' ? '١. رؤية السيادة التقنية الوطنية في العراق' : '1. Sovereign Technological Vision for Iraq',
        subtitle: lang === 'ku' ? 'گۆڕینی کێشە بونیادییەکان بۆ سیستەمی بەرهەمهێنەر لەژێر چەتری IDG.' : lang === 'ar' ? 'تحويل التحديات الهيكلية إلى حلول تشغيلية مستدامة تحت مظلة IDG.' : 'Transforming structural friction into reliable operational capability.',
        details: [
          lang === 'ku' ? 'کۆتاییهێنان بە وابەستەیی بە نەرمەکاڵای بیانی کە کلیل و داتاکانی لە دەرەوەن.' : lang === 'ar' ? 'إنهاء التبعية للحلول الخارجية المحتكرة للبيانات والمفاتيح البرمجية.' : 'Ending dependency on foreign software vendors holding Iraqi keys and data.',
          lang === 'ku' ? 'دامەزراندنی پرەنسیپی خاوەندارێتی تەواوی کۆد و سیستەم لە ناوخۆی عێراقدا.' : lang === 'ar' ? 'ترسيخ مبدأ الملكية السيادية الكاملة للشيفرات البرمجية والأنظمة.' : 'Establishing sovereign IP ownership and local operational control.',
          lang === 'ku' ? 'ستۆدیۆی وەبەرهێنانی سەروەری: کۆکردنەوەی توانای ئەندازیارانی عێراقی.' : lang === 'ar' ? 'استوديو استثماري سيادي: تمكين الكفاءات الهندسية العراقية الوطنية.' : 'Sovereign venture studio model: activating top-tier Iraqi engineering talent.',
        ],
      },
      {
        timestamp: '04:10',
        seconds: 250,
        title: lang === 'ku' ? '٢. قەڵغانی سێ بەشەیی داتاسەنتەری ناوخۆیی' : lang === 'ar' ? '٢. الدرع الثلاثي لمراكز البيانات السيادية' : '2. Sovereign Data Center Tier Architecture',
        subtitle: lang === 'ku' ? 'کۆگاکردن و پڕۆسێسکردنی هەموو داتایەکی هەستیار لە ناو خاکی نیشتماندا.' : lang === 'ar' ? 'استضافة ومعالجة البيانات الحساسة حصراً داخل الحدود الجغرافية للبلاد.' : 'Hosting and processing sensitive institutional data strictly within national borders.',
        details: [
          lang === 'ku' ? 'دابەشکردنی ناوەندەکان بەسەر ناوچەی ناوەڕاست، باکوور، و باشوور بۆ بەردەوامی (High Availability).' : lang === 'ar' ? 'توزيع مراكز الاستضافة جغرافياً لضمان استمرارية الأعمال والاستدامة.' : 'Geographic active-active topology across central, northern, and southern nodes.',
          lang === 'ku' ? 'ڕێگریکردنی ڕەها لە دەرچوونی هەر بایتێک بۆ دەرەوەی عێراق.' : lang === 'ar' ? 'حظر تقني وقانوني صارم لأي تسريب أو عبور للبيانات خارج العراق.' : 'Strict technical and legal perimeter barring cross-border data leakage.',
          lang === 'ku' ? 'پەیڕەوکردنی ستانداردەکانی ISO 27001 و چوارچێوەی ئاسایشی نیشتمانی.' : lang === 'ar' ? 'الالتزام بمعايير ISO 27001 وأعلى محددات الأمن السيبراني السيادي.' : 'Full compliance with ISO 27001 and national cyber sovereignty mandates.',
        ],
      },
      {
        timestamp: '08:20',
        seconds: 500,
        title: lang === 'ku' ? '٣. پرۆتۆکۆڵی Zero-Trust و کلیلە نانیشتمانییەکان' : lang === 'ar' ? '٣. بروتوكول انعدام الثقة (Zero-Trust) والتشفير السيادي' : '3. Zero-Trust Security Protocol & Sovereign HSM',
        subtitle: lang === 'ku' ? 'هیچ داواکارییەک متمانەی پێناکرێت تاوەکو بە شێوەی ڕەقەکاڵایی نەسەلمێنرێت.' : lang === 'ar' ? 'لا ثقة ضمنية بأي طلب حتى يتم التحقق التشفيري المعتمد.' : 'Never trust, always verify: hardware-backed cryptographic identity.',
        details: [
          lang === 'ku' ? 'کلیلەکانی تەشفیر (AES-256) لە ژێر چاودێری ماژوولی HSM ناوخۆییدایە.' : lang === 'ar' ? 'حفظ المفاتيح في وحدات تشفير أجهزة صلبة (HSM) تدار محلياً.' : 'Cryptographic key custody managed in sovereign Hardware Security Modules (HSM).',
          lang === 'ku' ? 'جیاکردنەوەی تەواوی تۆڕی حکومی لە تۆڕی ئینتەرنێتی گشتی (Air-Gapped Core).' : lang === 'ar' ? 'عزل البنية الأساسية الحساسة عن شبكة الإنترنت العامة بالكامل.' : 'Air-gapped core architecture shielding foundational public registries.',
          lang === 'ku' ? 'بەردەوامیی کارکردنی تەواو تەنانەت لە کاتی پچڕانی پەیوەندی دەرەکی.' : lang === 'ar' ? 'استقلالية تشغيلية تامة تضمن استمرار الخدمات عند انقطاع الكابلات الدولية.' : 'Autonomous survivability during international internet blackouts or cable cuts.',
        ],
      },
      {
        timestamp: '11:45',
        seconds: 705,
        title: lang === 'ku' ? '٤. چوارچێوەی حوکمڕانیی ئەندازیاری و گەشەپێدان' : lang === 'ar' ? '٤. حوكمة التطوير الهندسي وديمومة الكفاءة' : '4. Engineering Governance & Operational Continuity',
        subtitle: lang === 'ku' ? 'پەروەردەکردنی نەوەی داهاتووی تەلارسازانی سیستەمی عێراق لە ZaNa Academy.' : lang === 'ar' ? 'تأهيل الجيل القادم من مهندسي الأنظمة السيادية عبر أكاديمية زانا.' : 'Training the next generation of sovereign system architects via ZaNa Academy.',
        details: [
          lang === 'ku' ? 'گواستنەوەی زانستی تەواو (Knowledge Transfer) بۆ کادیرانی وەزارەت و دامەزراوەکان.' : lang === 'ar' ? 'نقل كامل للمعرفة التقنية لفرق العمل الوطنية في الوزارات والهيئات.' : 'Mandatory operational knowledge transfer to institutional engineering staff.',
          lang === 'ku' ? 'پەیڕەوکردنی چاکسازیی بەردەوام و کۆد بە شێوەی مۆدیولار و سەرچاوەکراوە بۆ دەوڵەت.' : lang === 'ar' ? 'بناء أنظمة معيارية ومفتوحة للمؤسسات الوطنية لمنع الاحتكار.' : 'Modular, open-architecture core for state agencies to prevent vendor lock-in.',
          lang === 'ku' ? 'عێراق وەک سەنتەرێکی بەهێزی تەکنەلۆژی بۆ سەردەمی نوێی ئابووری دیجیتاڵی.' : lang === 'ar' ? 'ترسيخ مكانة العراق كقوة تقنية إقليمية موثوقة في الاقتصاد الرقمي.' : 'Positioning Iraq as a sovereign technology hub in the regional digital economy.',
        ],
      },
    ];
  };

  const chapters = getTutorialChapters();

  // Modal lifecycle & escape key
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleEsc);
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleEsc);
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isOpen, onClose]);

  // Interactive masterclass playback simulation timer
  useEffect(() => {
    if (isPlaying && activeTab === 'interactive') {
      timerRef.current = setInterval(() => {
        setPlaybackSeconds((prev) => {
          const next = prev + 1;
          const nextIdx = chapters.findIndex((c, i) => {
            const nextCh = chapters[i + 1];
            return next >= c.seconds && (!nextCh || next < nextCh.seconds);
          });
          if (nextIdx !== -1 && nextIdx !== currentStepIndex) {
            setCurrentStepIndex(nextIdx);
          }
          if (next >= 860) {
            setIsPlaying(false);
            return 0;
          }
          return next;
        });
      }, 1000);
    } else {
      if (timerRef.current) clearInterval(timerRef.current);
    }
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isPlaying, activeTab, currentStepIndex, chapters]);

  const seekToChapter = (index: number) => {
    setCurrentStepIndex(index);
    setPlaybackSeconds(chapters[index].seconds);
  };

  const formatSeconds = (sec: number) => {
    const m = Math.floor(sec / 60);
    const s = sec % 60;
    return `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
  };

  if (!isOpen) return null;

  // Build clean embed URL with parameters
  const embedUrl = videoUrl.includes('?')
    ? `${videoUrl}&autoplay=1&rel=0&modestbranding=1`
    : `${videoUrl}?autoplay=1&rel=0&modestbranding=1`;

  const currentChapter = chapters[currentStepIndex] || chapters[0];

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 bg-slate-950/85 backdrop-blur-md transition-all animate-fadeIn"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      dir={isRtl ? 'rtl' : 'ltr'}
    >
      <div
        className="bg-[#0B172E] border border-[#193B73] rounded-3xl max-w-4xl w-full relative shadow-2xl overflow-hidden flex flex-col max-h-[92vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Header */}
        <div className="p-4 sm:p-5 border-b border-[#142A52] flex items-center justify-between bg-[#081226]/80">
          <div className="flex items-center gap-3">
            <span className="px-2.5 py-1 bg-[#102447] text-amber-400 font-bold text-xs rounded-lg border border-[#1E4382]">
              {badge}
            </span>
            <div className="flex items-center gap-1.5 text-xs text-slate-400 font-mono">
              <Clock className="w-3.5 h-3.5 text-blue-400" />
              <span>{duration}</span>
            </div>
            <div className="hidden sm:flex items-center gap-1.5 text-xs text-emerald-400 bg-emerald-950/40 px-2 py-0.5 rounded border border-emerald-800/40">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>IDG Engineering Academy</span>
            </div>
          </div>

          <div className="flex items-center gap-2">
            {/* View Switcher Tabs */}
            <div className="flex items-center bg-[#060D1A] p-1 rounded-xl border border-[#142A52]">
              <button
                type="button"
                onClick={() => {
                  setActiveTab('video');
                  setIsPlaying(false);
                }}
                className={`flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-medium transition-all ${
                  activeTab === 'video'
                    ? 'bg-[#1D5BD8] text-white shadow-md'
                    : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                <Tv className="w-3.5 h-3.5" />
                <span>{lang === 'ku' ? 'پەخشی ڤیدیۆ' : lang === 'ar' ? 'مشغل الفيديو' : 'Video Player'}</span>
              </button>

              <button
                type="button"
                onClick={() => {
                  setActiveTab('interactive');
                  setIsPlaying(true);
                }}
                className={`flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-medium transition-all ${
                  activeTab === 'interactive'
                    ? 'bg-[#1D5BD8] text-white shadow-md'
                    : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                <Cpu className="w-3.5 h-3.5" />
                <span>{lang === 'ku' ? 'شیکاریی تەلارسازی' : lang === 'ar' ? 'التحليل المعماري' : 'Interactive Studio'}</span>
              </button>
            </div>

            <button
              onClick={onClose}
              className="text-slate-400 hover:text-white p-2 rounded-xl hover:bg-[#142A52] transition-colors cursor-pointer"
              aria-label="Close"
              id="btn-close-video-modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Modal Title Banner */}
        <div className="px-5 py-3 bg-[#060D1A]/60 border-b border-[#142A52] flex flex-col sm:flex-row sm:items-center justify-between gap-2">
          <h3 id="video-modal-title" className="text-white font-bold text-sm sm:text-base leading-snug">
            {title}
          </h3>
          {description && (
            <p className="text-xs text-slate-400 truncate max-w-md hidden md:block">
              {description}
            </p>
          )}
        </div>

        {/* Main Content Area */}
        <div className="flex-1 overflow-y-auto">
          {activeTab === 'video' ? (
            /* TAB 1: Real Iframe Video Player with Security Allowance and Institutional Fallback */
            <div className="flex flex-col bg-black">
              <div className="relative aspect-video w-full bg-slate-950 flex items-center justify-center">
                <iframe
                  src={embedUrl}
                  className="w-full h-full border-0 absolute inset-0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  title={title}
                  loading="eager"
                  referrerPolicy="strict-origin-when-cross-origin"
                />
              </div>

              {/* Informative Institutional Fallback Banner below Video */}
              <div className="p-4 bg-[#081226] border-t border-[#142A52] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs">
                <div className="flex items-center gap-2 text-slate-300">
                  <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>
                    {lang === 'ku'
                      ? 'ئەم فێرکارییە بە ستانداردەکانی IDG Academy پەخش دەکرێت.'
                      : lang === 'ar'
                      ? 'يتم بث هذا الدرس وفق المعايير المعتمدة لأكاديمية IDG.'
                      : 'Streamed according to verified IDG Academy technical training standards.'}
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={() => {
                      setActiveTab('interactive');
                      setIsPlaying(true);
                    }}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#102447] hover:bg-[#193B73] text-sky-400 hover:text-white border border-[#1E4382] transition-colors cursor-pointer font-medium"
                  >
                    <Layers className="w-3.5 h-3.5" />
                    <span>
                      {lang === 'ku'
                        ? 'شیکاریی تەلارسازیی ئەندازیاری'
                        : lang === 'ar'
                        ? 'الانتقال للشرح المعماري التفاعلي'
                        : 'Explore Architecture Simulator'}
                    </span>
                  </button>

                  <a
                    href={videoUrl.replace('/embed/', '/watch?v=')}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-[#142A52] transition-colors"
                  >
                    <ExternalLink className="w-3.5 h-3.5" />
                    <span>{lang === 'ku' ? 'لە سەرچاوە' : lang === 'ar' ? 'المصدر' : 'Source'}</span>
                  </a>
                </div>
              </div>
            </div>
          ) : (
            /* TAB 2: Full Sovereign Interactive Studio & Visualizer Masterclass */
            <div className="p-5 sm:p-6 space-y-6 bg-[#0B172E]">
              {/* Interactive Player Screen / Visualizer Stage */}
              <div className="bg-[#060D1A] border border-[#193B73] rounded-2xl p-5 sm:p-6 shadow-inner relative overflow-hidden">
                <div className="flex items-center justify-between mb-4 pb-3 border-b border-[#142A52]">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
                    <span className="text-xs font-mono font-bold text-emerald-400 uppercase tracking-wider">
                      {lang === 'ku' ? 'قۆناغی کارپێکردن' : lang === 'ar' ? 'المرحلة التشغيلية' : 'Operational Stage'}
                    </span>
                    <span className="text-xs text-slate-500 font-mono">
                      [{currentStepIndex + 1}/{chapters.length}]
                    </span>
                  </div>

                  <div className="flex items-center gap-2 text-xs font-mono text-sky-400 bg-sky-950/40 px-3 py-1 rounded-full border border-sky-800/40">
                    <Clock className="w-3.5 h-3.5" />
                    <span>{formatSeconds(playbackSeconds)}</span>
                    <span className="text-slate-500">/</span>
                    <span className="text-slate-400">{duration}</span>
                  </div>
                </div>

                {/* Animated Chapter Presentation */}
                <div className="min-h-[160px] flex flex-col justify-center space-y-3">
                  <div className="inline-flex items-center gap-2 text-amber-400 text-xs font-semibold">
                    <Sparkles className="w-4 h-4" />
                    <span>{currentChapter.timestamp}</span>
                  </div>
                  <h4 className="text-lg sm:text-xl font-bold text-white tracking-tight leading-snug">
                    {currentChapter.title}
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-2xl">
                    {currentChapter.subtitle}
                  </p>
                </div>

                {/* Key Points in Stage */}
                <div className="mt-4 pt-4 border-t border-[#142A52] grid grid-cols-1 md:grid-cols-3 gap-3">
                  {currentChapter.details.map((detail, idx) => (
                    <div
                      key={idx}
                      className="p-3 bg-[#0B172E] border border-[#142A52] rounded-xl flex items-start gap-2.5 text-xs text-slate-300"
                    >
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span className="leading-relaxed">{detail}</span>
                    </div>
                  ))}
                </div>

                {/* Scrubbing & Controls Bar */}
                <div className="mt-5 pt-4 border-t border-[#142A52] flex items-center justify-between gap-4">
                  <div className="flex items-center gap-2">
                    <button
                      type="button"
                      onClick={() => setIsPlaying(!isPlaying)}
                      className="p-2.5 bg-[#1D5BD8] hover:bg-[#2563EB] text-white rounded-xl shadow-lg transition-transform active:scale-95 cursor-pointer"
                      aria-label={isPlaying ? 'Pause' : 'Play'}
                    >
                      {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4 ms-0.5" />}
                    </button>

                    <button
                      type="button"
                      onClick={() => {
                        seekToChapter(0);
                        setIsPlaying(true);
                      }}
                      className="p-2.5 bg-[#102447] hover:bg-[#193B73] text-slate-300 hover:text-white rounded-xl border border-[#1E4382] transition-colors cursor-pointer"
                      title={lang === 'ku' ? 'دەستپێکردنەوە لە سەرەتا' : 'Restart'}
                    >
                      <RotateCcw className="w-4 h-4" />
                    </button>
                  </div>

                  {/* Visual Timeline Scrub Bar */}
                  <div className="flex-1 flex items-center gap-1.5">
                    {chapters.map((ch, idx) => {
                      const isActive = currentStepIndex === idx;
                      const isPast = currentStepIndex > idx;
                      return (
                        <button
                          key={ch.timestamp}
                          type="button"
                          onClick={() => seekToChapter(idx)}
                          className={`flex-1 h-2 rounded-full transition-all cursor-pointer ${
                            isActive
                              ? 'bg-[#1D5BD8] ring-2 ring-[#60A5FA]/40'
                              : isPast
                              ? 'bg-emerald-500'
                              : 'bg-[#142A52] hover:bg-[#1E4382]'
                          }`}
                          title={`${ch.timestamp} - ${ch.title}`}
                        />
                      );
                    })}
                  </div>

                  <span className="text-xs text-slate-400 font-mono hidden sm:inline">
                    {Math.round((playbackSeconds / 860) * 100)}%
                  </span>
                </div>
              </div>

              {/* Chapters Navigator Grid */}
              <div>
                <h5 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3 flex items-center gap-2">
                  <Terminal className="w-3.5 h-3.5 text-blue-400" />
                  <span>
                    {lang === 'ku' ? 'بەشەکانی فێرکارییەکە' : lang === 'ar' ? 'فصول الدورة التدريبية' : 'Tutorial Curriculum Chapters'}
                  </span>
                </h5>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {chapters.map((ch, idx) => {
                    const isSelected = currentStepIndex === idx;
                    return (
                      <div
                        key={ch.timestamp}
                        onClick={() => seekToChapter(idx)}
                        className={`p-3.5 rounded-xl border transition-all cursor-pointer flex items-start gap-3 ${
                          isSelected
                            ? 'bg-[#102447] border-[#1D5BD8] text-white shadow-md'
                            : 'bg-[#060D1A]/60 border-[#142A52] text-slate-400 hover:border-[#1E4382] hover:text-slate-200'
                        }`}
                      >
                        <div
                          className={`w-7 h-7 rounded-lg flex items-center justify-center text-xs font-mono font-bold shrink-0 ${
                            isSelected
                              ? 'bg-[#1D5BD8] text-white'
                              : 'bg-[#0B172E] text-slate-500 border border-[#142A52]'
                          }`}
                        >
                          {idx + 1}
                        </div>
                        <div className="min-w-0">
                          <div className="flex items-center gap-2">
                            <span className="text-[11px] font-mono text-amber-400">{ch.timestamp}</span>
                          </div>
                          <p className="text-xs font-bold truncate mt-0.5 text-slate-200">
                            {ch.title}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Modal Footer info */}
        <div className="p-3.5 sm:p-4 bg-[#081226] border-t border-[#142A52] flex items-center justify-between text-xs text-slate-500">
          <div className="flex items-center gap-2">
            <Server className="w-3.5 h-3.5 text-blue-400" />
            <span>IDG Sovereign Enterprise Network • Republic of Iraq</span>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="px-4 py-1.5 rounded-lg bg-[#102447] hover:bg-[#193B73] text-slate-200 transition-colors font-medium cursor-pointer"
          >
            {lang === 'ku' ? 'داخستن' : lang === 'ar' ? 'إغلاق' : 'Close'}
          </button>
        </div>
      </div>
    </div>
  );
}
