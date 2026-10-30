const fs = require('fs');
const path = require('path');
const PDFDocument = require('pdfkit');

const OUT_DIR = path.join(__dirname, '..', 'public', 'documents');
const FONT_REGULAR = path.join(__dirname, '..', 'public', 'fonts', 'Amiri-Regular.ttf');
const FONT_BOLD = path.join(__dirname, '..', 'public', 'fonts', 'Amiri-Bold.ttf');

if (!fs.existsSync(OUT_DIR)) {
  fs.mkdirSync(OUT_DIR, { recursive: true });
}

// Advanced Tokenizer for mixed RTL/LTR texts
function tokenizeBidi(text) {
  const regex = /(\([^)]+\)|[A-Za-z0-9_.\-\/]+|[\u0600-\u06FF\u0750-\u077F\uFB50-\uFDFF\uFE70-\uFEFF]+|[^\s\w\(\)]+)/g;
  return text.match(regex) || text.split(/\s+/).filter(Boolean);
}

// Helpers for RTL wrapping
function wrapRtlParagraph(doc, text, maxWidth) {
  const words = tokenizeBidi(text);
  const lines = [];
  let currentWords = [];
  let currentWidth = 0;
  const spaceWidth = doc.widthOfString(' ');

  for (const word of words) {
    const wordWidth = doc.widthOfString(word);
    if (currentWords.length > 0 && currentWidth + spaceWidth + wordWidth > maxWidth) {
      lines.push(currentWords.reverse().join(' '));
      currentWords = [word];
      currentWidth = wordWidth;
    } else {
      currentWords.push(word);
      currentWidth += (currentWords.length > 1 ? spaceWidth : 0) + wordWidth;
    }
  }
  if (currentWords.length > 0) {
    lines.push(currentWords.reverse().join(' '));
  }
  return lines;
}

function drawRtlText(doc, text, x, y, width, options = {}) {
  const lines = wrapRtlParagraph(doc, text, width);
  let curY = y;
  const lineGap = options.lineGap || 4;
  const lineHeight = doc.currentLineHeight() + lineGap;
  for (const line of lines) {
    if (curY > 760) {
      doc.addPage();
      curY = 60;
    }
    doc.text(line, x, curY, { width: width, align: 'right' });
    curY += lineHeight;
  }
  return curY;
}

function shapeRtlLine(text) {
  const tokens = tokenizeBidi(text);
  return tokens.reverse().join(' ');
}

// Draw official header banner
function drawHeader(doc, lang, ref, title, category) {
  // Top sovereign bar
  doc.rect(0, 0, 595.28, 48).fill('#0B172E');
  doc.rect(0, 48, 595.28, 3).fill('#10B981'); // Emerald accent

  doc.font('AmiriBold').fontSize(11).fillColor('#FFFFFF');
  if (lang === 'ku') {
    doc.text(shapeRtlLine('کۆماری عێراق - دەروازەی دیجیتاڵیی عێراق (IDG)'), 40, 16, { align: 'right', width: 515 });
    doc.font('Amiri').fontSize(9).fillColor('#94A3B8');
    doc.text(shapeRtlLine('بەڵگەنامەی فەرمیی ئەندازیاری و سەروەریی نیشتمانی'), 40, 30, { align: 'right', width: 515 });
  } else if (lang === 'ar') {
    doc.text(shapeRtlLine('جمهورية العراق - بوابة العراق الرقمية السيادية (IDG)'), 40, 16, { align: 'right', width: 515 });
    doc.font('Amiri').fontSize(9).fillColor('#94A3B8');
    doc.text(shapeRtlLine('وثيقة رسمية معتمدة للمعمارية التكنولوجية والسيادة الرقمية'), 40, 30, { align: 'right', width: 515 });
  } else {
    doc.text('REPUBLIC OF IRAQ - IRAQ DIGITAL GATEWAY (IDG)', 40, 16, { align: 'left' });
    doc.font('Amiri').fontSize(9).fillColor('#94A3B8');
    doc.text('Official Sovereign Blueprint & Governance Repository', 40, 30, { align: 'left' });
  }

  // Document metadata box
  doc.rect(40, 68, 515.28, 54).fill('#F8FAFC').stroke('#CBD5E1');
  
  if (lang === 'ku') {
    doc.font('AmiriBold').fontSize(10).fillColor('#0F172A');
    doc.text(shapeRtlLine(`کۆدی بەڵگەنامە: ${ref}`), 50, 78, { align: 'right', width: 495 });
    doc.font('Amiri').fontSize(9).fillColor('#475569');
    doc.text(shapeRtlLine(`پۆلێن: ${category} | ئاستی ئاسایش: باوەڕپێکراوی نیشتمانی | بەروار: 2026`), 50, 96, { align: 'right', width: 495 });
  } else if (lang === 'ar') {
    doc.font('AmiriBold').fontSize(10).fillColor('#0F172A');
    doc.text(shapeRtlLine(`رمز الوثيقة: ${ref}`), 50, 78, { align: 'right', width: 495 });
    doc.font('Amiri').fontSize(9).fillColor('#475569');
    doc.text(shapeRtlLine(`التصنيف: ${category} | مستوى الأمان: وثيقة سيادية معتمدة | التاريخ: 2026`), 50, 96, { align: 'right', width: 495 });
  } else {
    doc.font('AmiriBold').fontSize(10).fillColor('#0F172A');
    doc.text(`DOCUMENT REF: ${ref}`, 55, 78, { align: 'left' });
    doc.font('Amiri').fontSize(9).fillColor('#475569');
    doc.text(`Category: ${category}  |  Classification: Sovereign Official  |  Release Year: 2026`, 55, 96, { align: 'left' });
  }
}

// Draw footer on all pages
function drawFooter(doc, lang, ref) {
  const pageRange = doc.bufferedPageRange();
  for (let i = pageRange.start; i < pageRange.start + pageRange.count; i++) {
    doc.switchToPage(i);
    doc.rect(40, 790, 515.28, 1).fill('#E2E8F0');
    doc.font('Amiri').fontSize(8).fillColor('#64748B');
    if (lang === 'ku') {
      doc.text(shapeRtlLine(`لاپەڕە ${i + 1} لە ${pageRange.count} - IDG Sovereign Documentation`), 40, 800, { align: 'right', width: 515.28 });
      doc.text(`REF: ${ref}`, 40, 800, { align: 'left' });
    } else if (lang === 'ar') {
      doc.text(shapeRtlLine(`صفحة ${i + 1} من ${pageRange.count} - وثائق بوابة العراق الرقمية السيادية`), 40, 800, { align: 'right', width: 515.28 });
      doc.text(`REF: ${ref}`, 40, 800, { align: 'left' });
    } else {
      doc.text(`Page ${i + 1} of ${pageRange.count} - Iraq Digital Gateway Sovereign Archive`, 40, 800, { align: 'left' });
      doc.text(`REF: ${ref}`, 40, 800, { align: 'right', width: 515.28 });
    }
  }
}

// Generate a single PDF
function generatePdf({ id, lang, title, category, ref, sections }) {
  return new Promise((resolve, reject) => {
    const filename = `${id}-${lang}.pdf`;
    const filePath = path.join(OUT_DIR, filename);
    const writeStream = fs.createWriteStream(filePath);

    const doc = new PDFDocument({
      size: 'A4',
      margin: 40,
      bufferPages: true,
      info: {
        Title: title,
        Author: 'Iraq Digital Gateway (IDG)',
        Subject: `${ref} - Official Sovereign Document`,
        Keywords: `Iraq, Sovereign, ${category}, ${ref}, IDG`,
      },
    });

    doc.registerFont('AmiriBold', FONT_BOLD);
    doc.registerFont('Amiri', FONT_REGULAR);

    doc.pipe(writeStream);

    drawHeader(doc, lang, ref, title, category);

    let curY = 138;

    // Document Title
    doc.font('AmiriBold').fontSize(16).fillColor('#060D1A');
    if (lang === 'ku' || lang === 'ar') {
      curY = drawRtlText(doc, title, 40, curY, 515, { lineGap: 4 });
    } else {
      doc.text(title, 40, curY, { width: 515, align: 'left' });
      curY += doc.heightOfString(title, { width: 515 }) + 8;
    }
    curY += 8;

    // Divider line
    doc.rect(40, curY, 515.28, 1.5).fill('#10B981');
    curY += 16;

    // Render sections
    for (const section of sections) {
      if (curY > 700) {
        doc.addPage();
        curY = 60;
      }

      // Section Heading
      doc.font('AmiriBold').fontSize(13).fillColor('#0F172A');
      if (lang === 'ku' || lang === 'ar') {
        curY = drawRtlText(doc, section.heading, 40, curY, 515, { lineGap: 3 });
      } else {
        doc.text(section.heading, 40, curY, { width: 515, align: 'left' });
        curY += doc.heightOfString(section.heading, { width: 515 }) + 4;
      }
      curY += 4;

      // Section Content
      doc.font('Amiri').fontSize(10.5).fillColor('#334155');
      if (lang === 'ku' || lang === 'ar') {
        curY = drawRtlText(doc, section.content, 40, curY, 515, { lineGap: 5 });
      } else {
        doc.text(section.content, 40, curY, { width: 515, align: 'left', lineGap: 4 });
        curY += doc.heightOfString(section.content, { width: 515, lineGap: 4 }) + 8;
      }
      curY += 12;

      // Bullet points if available
      if (section.points && section.points.length > 0) {
        for (const pt of section.points) {
          if (curY > 730) {
            doc.addPage();
            curY = 60;
          }
          doc.font('Amiri').fontSize(10).fillColor('#1E293B');
          if (lang === 'ku' || lang === 'ar') {
            const bulletText = `• ${pt}`;
            curY = drawRtlText(doc, bulletText, 50, curY, 495, { lineGap: 4 });
          } else {
            const bulletText = `•  ${pt}`;
            doc.text(bulletText, 55, curY, { width: 490, align: 'left', lineGap: 3 });
            curY += doc.heightOfString(bulletText, { width: 490, lineGap: 3 }) + 4;
          }
          curY += 3;
        }
        curY += 10;
      }
    }

    // Official Stamp / Certification block
    if (curY > 660) {
      doc.addPage();
      curY = 80;
    }
    curY += 15;
    doc.rect(40, curY, 515.28, 62).fill('#F1F5F9').stroke('#94A3B8');
    doc.font('AmiriBold').fontSize(10).fillColor('#060D1A');
    if (lang === 'ku') {
      doc.text(shapeRtlLine('بڕوانامەی سەروەریی داتا و ستانداردی فەرمی'), 50, curY + 12, { align: 'right', width: 495 });
      doc.font('Amiri').fontSize(8.5).fillColor('#475569');
      doc.text(shapeRtlLine('ئەم بەڵگەنامەیە لەلایەن دەستەی ئەندازیاری و بەڕێوەبەرایەتی باڵای IDG پەسەند کراوە و جێبەجێکردنی لە تەواوی یەکە تەکنەلۆژییەکان پابەندکەرە.'), 50, curY + 28, { align: 'right', width: 495 });
    } else if (lang === 'ar') {
      doc.text(shapeRtlLine('شهادة الاعتماد المؤسسي والسيادة التكنولوجية'), 50, curY + 12, { align: 'right', width: 495 });
      doc.font('Amiri').fontSize(8.5).fillColor('#475569');
      doc.text(shapeRtlLine('تمت المصادقة على هذه الوثيقة من قبل الهيئة الهندسية ومجلس الإدارة لمجموعة IDG، وتعتبر ملزمة لكافة الأنظمة والمؤسسات المرتبطة.'), 50, curY + 28, { align: 'right', width: 495 });
    } else {
      doc.text('SOVEREIGN CERTIFICATION & INSTITUTIONAL SEAL', 55, curY + 12, { align: 'left' });
      doc.font('Amiri').fontSize(8.5).fillColor('#475569');
      doc.text('This document is formally ratified by the IDG Engineering Council and Governance Directorate. Full technical adherence is mandatory across all connected platforms.', 55, curY + 28, { align: 'left', width: 485 });
    }

    drawFooter(doc, lang, ref);
    doc.end();

    writeStream.on('finish', () => {
      // Also write legacy fallback without language code for English
      if (lang === 'en') {
        const legacyPath = path.join(OUT_DIR, `${id}.pdf`);
        fs.copyFileSync(filePath, legacyPath);
      }
      resolve(filePath);
    });
    writeStream.on('error', reject);
  });
}

// Data definitions
const GUIDES_DATA = [
  {
    id: 'guide-blueprint',
    ref: 'IDG-ARCH-2026-V2',
    titles: {
      ku: 'ڕێبەری تەلارسازیی سەروەریی IDG (Sovereign Architecture Blueprint)',
      ar: 'مخطط المعمارية التكنولوجية السيادية لمجموعة IDG',
      en: 'IDG Sovereign Architecture Blueprint & Standards',
    },
    categories: {
      ku: 'تەلارسازیی سیستم',
      ar: 'المعمارية المؤسسية',
      en: 'System Architecture',
    },
    sections: {
      ku: [
        {
          heading: '١. پوختەی جێبەجێکردن و بنەماکانی سەروەریی دیجیتاڵی',
          content: 'ئەم بەڵگەنامە فەرمییە مۆدێلی ئەندازیاری و بنەماکانی ژێرخانی سەروەریی دیجیتاڵیی عێراق ڕوون دەکاتەوە. تەلارسازییەکە لەسەر بنەمای مایکرۆسێرڤیسی دابەشکراو، کۆنتەینەرسازی پارێزراو لە ناوخۆی وڵات، و پەیوەندییە شفرەکراوەکان بنیاد نراوە بۆ ئەوەی ڕێگری لە هەر چەشنە دەستوەردان یان پشتبەستنێکی دەرەکی بکرێت.',
          points: [
            'جیاکردنەوەی ژینگەی داتای دەوڵەت لە تۆڕە گشتییەکان و بەکارهێنانی فایروۆڵی نیشتمانی.',
            'جێبەجێکردنی مۆدێلی Zero-Trust لە هەموو چینەکانی پەیوەندی و پێناسەکردنی خاوەندارێتی.',
            'کۆنتڕۆڵکردنی ناوەندی لە ڕێگەی دەستەی باڵای سەروەریی زانیاریی عێراق.',
          ],
        },
        {
          heading: '٢. تەلارسازیی ژێرخان و مۆدێلی سەنتەری داتای فرەناوچەیی',
          content: 'ژێرخانی IDG لە سێ سەنتەری داتای سەروەریی پلە چوار (Tier-IV) لە بەغدا، هەولێر و بەسڕە پێکدێت کە بە تۆڕی ڕیشاڵی نوریی نیشتمانیی پارێزراو بەیەکەوە بەستراونەتەوە.',
          points: [
            'سیستەمی چالاک-چالاک (Active-Active) بە کاتی کارکردنی 99.999% بەبێ هیچ خاڵێکی شکستی تاکەکەسی.',
            'شفرەکردنی هێڵەکانی پەیوەندی بە پڕۆتۆکۆڵی نیشتمانیی AES-256-GCM لەگەڵ کلیلەکانی ناوخۆیی.',
            'پاشەکەوتکردنی سات بە ساتی داتاکان (Continuous Replication) بە ڕێژەی لەدەستچوونی داتای سفر (RPO=0).',
          ],
        },
        {
          heading: '٣. بەڕێوەبردنی کلیلی ئەمنی و سەربەخۆیی تەکنەلۆژی',
          content: 'هەموو کلیلی شفرەکردنەکان لەناو یەکەی پاراستنی عەتادیی نیشتمانی (HSM FIPS 140-3) بەرهەم دەهێنرێن و بە هیچ شێوەیەک نانێردرێنە سەر هیچ سێرڤەرێکی کلاودی دەرەکی.',
        },
      ],
      ar: [
        {
          heading: '١. الملخص التنفيذي وأسس السيادة التكنولوجية',
          content: 'توثق هذه الوثيقة الرسمية المعمارية الهندسية الشاملة للبنية التحتية التكنولوجية السيادية لجمهورية العراق، بالاعتماد على الخدمات المصغرة المعزولة، الحوسبة السحابية الوطنية، ومبدأ انعدام الثقة (Zero-Trust) لضمان الاستقلالية التامة عن التبعية للخدمات الخارجية.',
          points: [
            'عزل شبكات البيانات الحكومية الحساسة كلياً عن شبكات الإنترنت العامة.',
            'تطبيق نموذج انعدام الثقة (Zero-Trust) على مستوى كافة واجهات الربط والأجهزة المؤسسية.',
            'الإشراف السيادي الموحد من خلال الهيئة الوطنية لإدارة وتأمين البيانات الحكومية.',
          ],
        },
        {
          heading: '٢. البنية التحتية ومراكز البيانات الوطنية الموزعة',
          content: 'تعتمد بنية IDG على ثلاثة مراكز بيانات سيادية مطابقة للمعيار الدولي (Tier-IV) في بغداد وأربيل والبصرة، متصلة بشبكة ألياف ضوئية مؤمنة ومستقلة تماماً.',
          points: [
            'تشغيل الأنظمة بنمط الفعالية المزدوجة (Active-Active) بمعدل جاهزية 99.999% ودون نقطة فشل مفردة.',
            'تشفير كافة مسارات البيانات عبر بروتوكول AES-256-GCM مع مفاتيح سيادية داخلية.',
            'مزامنة البيانات اللحظية بمعدل فقدان بيانات معدوم (RPO=0) وزمن استرجاع قياسي (RTO < 5s).',
          ],
        },
        {
          heading: '٣. إدارة مفاتيح التشفير والحوكمة السيادية',
          content: 'يتم توليد وإدارة كافة مفاتيح التشفير الحكومية عبر وحدات أمان عتادية وطنية (HSM FIPS 140-3)، مع حظر استضافة المفاتيح أو معالجة التواقيع في السحابات العامة الدولية.',
        },
      ],
      en: [
        {
          heading: '1. Executive Summary & Sovereign Foundations',
          content: 'This official document codifies the holistic architectural blueprint for the Republic of Iraq Digital Gateway (IDG). The architecture enforces sovereign data boundaries, distributed microservices, air-gapped secure enclaves, and strict Zero-Trust cybersecurity controls.',
          points: [
            'Complete isolation of mission-critical government networks from public cloud attack vectors.',
            'Implementation of comprehensive Zero-Trust Architecture across all microservice layers.',
            'Centralized sovereign cryptographic ownership under national oversight.',
          ],
        },
        {
          heading: '2. Multi-Region Sovereign Data Center Grid',
          content: 'The IDG core infrastructure operates across three domestic Tier-IV data centers located in Baghdad, Erbil, and Basra, interconnected via private sovereign dark fiber rings.',
          points: [
            'Active-Active geo-distributed clustering achieving 99.999% availability.',
            'Hardware-enforced line-rate encryption utilizing AES-256-GCM authenticated ciphers.',
            'Zero Recovery Point Objective (RPO=0) synchronous database replication.',
          ],
        },
        {
          heading: '3. Cryptographic Governance & Hardware Security Modules',
          content: 'All cryptographic root keys are generated and securely stored within sovereign National Hardware Security Modules (HSMs) certified to FIPS 140-3 Level 4 standards.',
        },
      ],
    },
  },
  {
    id: 'guide-data-governance',
    ref: 'IDG-GOV-DATA-2026',
    titles: {
      ku: 'میساقی حوکمڕانی و پۆلێنکردنی داتای نیشتمانی',
      ar: 'ميثاق حوكمة وتصنيف البيانات الوطنية العراقية',
      en: 'National Data Governance & Classification Charter',
    },
    categories: {
      ku: 'حوکمڕانی و یاسا',
      ar: 'الحوكمة والسياسات',
      en: 'Data Governance',
    },
    sections: {
      ku: [
        {
          heading: '١. مەبەست و چوارچێوەی یاسایی سەروەریی داتا',
          content: 'ئەم میساقە چوارچێوەی یاسایی و ڕێساکانی بەڕێوەبردنی داتای سەروەری دیاری دەکات. تەواوی داتای هاووڵاتیان، تۆمارە دارایییەکان، و زانیارییە ئابوورییەکانی عێراق بە سامانی نیشتمانی دادەنرێن و خاوەندارێتییان ناکرێت بگوازرێتەوە بۆ هیچ لایەنێکی دەرەکی.',
          points: [
            'قەدەغەکردنی هەڵگرتنی داتای هەستیار لە دەرەوەی سنورە جوگرافییەکانی عێراق بەپێی دەستوور.',
            'پابەندکردنی گشت وەزارەت و دەستەکان بە ستانداردە یەکگرتووەکانی IDG.',
            'سەپاندنی سزای یاسایی لەسەر هەر پێشێلکارییەکی پاراستنی نهێنی و دزەپێکردنی داتا.',
          ],
        },
        {
          heading: '٢. ئاستەکانی پۆلێنکردنی داتای نیشتمانی',
          content: 'هەموو زانیارییەک پێش پرۆسێسکردن دەبێت پۆلێن بکرێت بە یەکێک لەم ٤ ئاستە سەرەکییە:',
          points: [
            'ئاستی ١ (گشتی - Public): زانیارییە ئاشکراکان بۆ هاووڵاتیان و ڕاگەیاندنی فەرمی.',
            'ئاستی ٢ (ناوخۆیی - Internal): داتای ئیداری و ڕاپۆرتە گشتییەکانی فەرمانگەکان.',
            'ئاستی ٣ (سنووردار - Restricted): داتای دارایی، بانکی، و ناسنامەی شەخسی هاووڵاتیان.',
            'ئاستی ٤ (نهێنیی باڵا - Top Secret): داتای ئەمنی، بەرگری نیشتمانی، و ژێرخانی سەرەکی دەوڵەت.',
          ],
        },
        {
          heading: '٣. مافی هاووڵاتیان و شەفافیەتی لێپرسینەوە',
          content: 'هاووڵاتیان مافی تەواویان هەیە لە پاراستنی تایبەتمەندی و زانینی شێوازی بەکارهێنانی زانیارییە شەخسییەکانیان بەپێی یاسای نیشتمانی.',
        },
      ],
      ar: [
        {
          heading: '١. الغاية والإطار التشريعي لسيادة البيانات',
          content: 'يحدد هذا الميثاق المعايير القانونية والتنظيمية لإدارة وتأمين البيانات السيادية العراقية، معتبراً كافة السجلات المالية، والبيانات الاقتصادية، وسجلات المواطنين ملكية وطنية حصرية لا يجوز نقلها أو معالجتها خارج السيادة القضائية العراقية.',
          points: [
            'الحظر التشريعي المطلق لتخزين البيانات الحساسة في مراكز بيانات تقع خارج الأراضي العراقية.',
            'إلزام كافة الوزارات والمؤسسات الرسمية بتطبيق معايير التصنيف والتشفير الموحدة.',
            'تطبيق أقصى العقوبات القانونية على أي انتهاك للخصوصية أو تسريب للبيانات الوطنية.',
          ],
        },
        {
          heading: '٢. مستويات تصنيف البيانات الوطنية السيادية',
          content: 'تخضع كافة البيانات المتداولة داخل بوابة IDG للتصنيف الإلزامي وفق ٤ مستويات رئيسية:',
          points: [
            'المستوى ١ (عام - Public): البيانات المتاحة للنشر والاطلاع العام دون قيود.',
            'المستوى ٢ (داخلي - Internal): الوثائق التشغيلية والإدارية المتبادلة بين الدوائر الرسمية.',
            'المستوى ٣ (مقيد - Restricted): السجلات المصرفية والمالية وبيانات الهوية الوطنية الموحدة.',
            'المستوى ٤ (سري للغاية - Top Secret): بيانات الأمن الوطني والدفاع والبنية التحتية الحيوية.',
          ],
        },
        {
          heading: '٣. حقوق المواطنين والمساءلة القانونية',
          content: 'يكفل القانون حق المواطن العراقي في حماية بياناته الشخصية، مع توفير سجل تدقيق رقمي غير قابل للتلاعب يرصد أي وصول لتلك السجلات.',
        },
      ],
      en: [
        {
          heading: '1. Legislative Scope & Sovereign Data Mandate',
          content: 'This Charter establishes the binding regulatory and legal framework governing national sovereign data assets. All citizen records, financial data, and economic telemetry are classified as inviolable national property under Iraqi jurisdiction.',
          points: [
            'Absolute constitutional prohibition on transferring sovereign data across foreign territorial boundaries.',
            'Mandatory adherence by all federal ministries to IDG standardized classification schemes.',
            'Strict legal penalties for unauthorized disclosure or cross-border data leakage.',
          ],
        },
        {
          heading: '2. Four-Tier National Classification Matrix',
          content: 'All state information assets are categorized into four standardized tiers:',
          points: [
            'Tier 1 (Public): Unclassified public information, statistical data, and official releases.',
            'Tier 2 (Internal): Inter-agency operational workflows and administrative communications.',
            'Tier 3 (Restricted): Financial, banking, taxation, and citizen identification records.',
            'Tier 4 (Top Secret): National security, critical infrastructure telemetries, and defense data.',
          ],
        },
        {
          heading: '3. Citizen Rights & Immutable Audit Trails',
          content: 'Citizen digital privacy is guaranteed by sovereign law, with immutable cryptographic ledgers recording every data access event.',
        },
      ],
    },
  },
  {
    id: 'guide-iso27001',
    ref: 'IDG-SEC-ISO-27001',
    titles: {
      ku: 'ڕێنمایی جێبەجێکردنی ئاسایشی زانیاری و ستانداردی ISO-27001',
      ar: 'دليل الامتثال لمعايير أمن المعلومات الدولية ISO-27001',
      en: 'Information Security & ISO-27001 Implementation Manual',
    },
    categories: {
      ku: 'ئاسایشی ئەلیکترۆنی',
      ar: 'الأمن السيبراني',
      en: 'Information Security',
    },
    sections: {
      ku: [
        {
          heading: '١. سیستەمی بەڕێوەبردنی ئاسایشی زانیاری (ISMS)',
          content: 'ئەم ڕێنمایییە چۆنیەتی جێبەجێکردنی ستانداردی نێودەوڵەتی ISO/IEC 27001:2022 ڕوون دەکاتەوە لە تەواوی سیستمە ئەلیکترۆنییەکانی IDG بۆ دەستەبەرکردنی متمانەپێکراوی، تەواوێتی داتا، و بەردەوامی خزمەتگوزارییەکان.',
          points: [
            'پێداچوونەوەی ئەمنی بەردەوام و هەڵسەنگاندنی مەترسییەکان بەپێی ستانداردەکان.',
            'کۆنتڕۆڵکردنی ڕێگەپێدانی بەکارهێنەران لەسەر بنەمای کەمترین دەسەڵات (Least Privilege).',
            'پشکنینی کۆدی پڕۆگرامەکان بە ئامرازی SAST و DAST پێش بڵاوکردنەوەی لە ژینگەی بەرهەمهێناندا.',
          ],
        },
        {
          heading: '٢. وەڵامدانەوەی ڕووداوە ئەمنییەکان و چاودێری ٢٤/٧',
          content: 'ناوەندی ئۆپەراسیۆنە ئەمنییەکانی IDG (SOC) بەردەوام چاودێری تەواوی جوڵەی تۆڕ دەکات لە ڕێگەی سیستمەکانی ژیریی دەستکردی نیشتمانی.',
          points: [
            'دۆزینەوەی سەرپێچییە ئەمنییەکان لە ماوەی کەمتر لە ٦٠ چرکەدا.',
            'جیاکردنەوەی خۆکارانەی هەر ڕاڕەو یان سێرڤەرێکی گوماناوی بۆ پێشگرتن لە تەشەنەسەندن.',
            'بەدواداچوونی ورد لە ڕێگەی مۆری دیجیتاڵیی بەڵگەکان بۆ لێکۆڵینەوەی دادوەری.',
          ],
        },
        {
          heading: '٣. پلانی بەردەوامیی کار (Business Continuity Plan)',
          content: 'پلانی گشتگیر بۆ ڕووبەڕووبوونەوەی قەیرانەکان و هێرشە سایبەرییەکان بە پاراستنی تەواوی ژێرخانی سەرەکی و دەستپێکردنەوە لە کەمتر لە ٥ خولەکدا.',
        },
      ],
      ar: [
        {
          heading: '١. نظام إدارة أمن المعلومات المؤسسي (ISMS)',
          content: 'يوثق هذا الدليل آليات التطبيق الشامل لمعايير ISO/IEC 27001:2022 المعتمدة دولياً عبر كافة منصات IDG، لضمان السرية، النزاهة، والتوافرية المستمرة للبنية الرقمية العراقية.',
          points: [
            'التقييم الدوري للمخاطر وتطبيق سياسات الحد الأدنى من الصلاحيات (Least Privilege).',
            'الفحص الأمني الصارم للشفرات البرمجية قبل النشر عبر أدوات SAST و DAST المؤتمتة.',
            'التحقق الثنائي والإلزامي عبر مفاتيح الأمان العتادية لكافة المسؤولين والمهندسين.',
          ],
        },
        {
          heading: '٢. مركز العمليات الأمنية (SOC) والاستجابة للحوادث',
          content: 'يعمل مركز العمليات الأمنية التابع لـ IDG على مدار الساعة لرصد وتحليل التهديدات السيبرانية باستخدام خوارزميات الاستشعار المتقدمة.',
          points: [
            'اكتشاف التهديدات والهجمات الموزعة (DDoS) في زمن استجابة يقل عن 60 ثانية.',
            'العزل التلقائي والفوري لأي نقطة نهاية أو خادم يظهر سلوكاً غير مصرح به.',
            'أرشفة سجلات الدخول والأحداث بصيغة مشفرة غير قابلة للتعديل لأغراض التحقيق الجنائي الرقمي.',
          ],
        },
        {
          heading: '٣. خطة استمرارية الأعمال والتعافي من الكوارث',
          content: 'بروتوكولات متقدمة تضمن استمرار الخدمات الحيوية حتى في أصعب الظروف السيبرانية، مع اختبارات محاكاة نصف سنوية للجاهزية التشغيلية.',
        },
      ],
      en: [
        {
          heading: '1. Information Security Management System (ISMS)',
          content: 'This manual establishes the institutional framework for implementing ISO/IEC 27001:2022 controls across all IDG government-facing assets, ensuring confidentiality, integrity, and availability.',
          points: [
            'Continuous threat modeling and enforcement of least-privilege role-based access control (RBAC).',
            'Automated SAST and DAST vulnerability scanning embedded directly into CI/CD release pipelines.',
            'Mandatory multi-factor hardware security key authentication (FIDO2/WebAuthn).',
          ],
        },
        {
          heading: '2. 24/7 Security Operations Center (SOC) & Rapid Incident Response',
          content: 'The IDG Sovereign SOC delivers round-the-clock behavioral threat monitoring, anomaly detection, and automated mitigation.',
          points: [
            'Sub-60 second detection latency for volumetric and zero-day threat patterns.',
            'Automated isolation and quarantining of suspicious network endpoints.',
            'Cryptographically sealed forensic event logs compliant with legal evidentiary standards.',
          ],
        },
        {
          heading: '3. Disaster Recovery & Business Continuity',
          content: 'Resilience architectures tested biannually under simulated catastrophic failure conditions to guarantee uninterrupted national service delivery.',
        },
      ],
    },
  },
  {
    id: 'guide-nsw-spec',
    ref: 'IDG-NSW-INT-09',
    titles: {
      ku: 'تایبەتمەندییە تەکنیکییەکانی پەیوەستبوون بە دەروازەی NSW',
      ar: 'المواصفات الفنية للربط الشبكي بنافذة العراق الموحدة (NSW)',
      en: 'Iraq National Single Window (NSW) Technical Integration Specs',
    },
    categories: {
      ku: 'تایبەتمەندی تەکنیکی',
      ar: 'المواصفات الفنية',
      en: 'Technical Specifications',
    },
    sections: {
      ku: [
        {
          heading: '١. ناساندن و تەلارسازیی بەستنەوە بە پەنجەرەی تاکانە (NSW)',
          content: 'ئەم بەڵگەنامەیە تایبەتمەندییە تەکنیکییەکانی بەستنەوەی بانکە بازرگانییەکان، گومرگەکان، دەستەی دەروازە سنورییەکان، و هێڵە ئاسمانییەکان بە دەروازەی تاکانەی نیشتمانی عێراق (NSW) ڕوون دەکاتەوە بۆ خێراکردنی پرۆسەی بارزگانی و شەفافیەتی دارایی.',
          points: [
            'بەکارهێنانی پڕۆتۆکۆڵی پارێزراوی RESTful JSON لەگەڵ پشتیوانی لە gRPC بۆ مامەڵە خێراکان.',
            'شفرەکردنی دوولایەنەی کەناڵەکان بە بەکارهێنانی بڕوانامەی mTLS لەگەڵ کلیلەکانی ٢٠٤٨-بیت.',
            'ستانداردکردنی پەیامەکان بەپێی پێوەری جیهانیی WCO Data Model v3.10.',
          ],
        },
        {
          heading: '٢. ڕەسەنایەتی، دەسەڵاتدان و واژۆی ئەلیکترۆنی',
          content: 'هەموو داواکارییەکی پەیوەستبوون دەبێت خاوەنی تۆکنی OAuth 2.0 لەگەڵ واژۆی دیجیتاڵیی فەرمی بێت.',
          points: [
            'واژۆکردنی سات بە ساتی بەیاننامە گومرگییەکان بە کلیلەکانی X.509.',
            'پشکنینی بڕوانامەکان لە ڕێگەی پڕۆتۆکۆڵی OCSP بە شێوازی دەستبەجێ.',
            'تۆمارکردنی کۆدی شوناسی هەر مامەڵەیەک (Transaction ID) بۆ ڕێگری لە دووبارەبوونەوە.',
          ],
        },
        {
          heading: '٣. پێوەرەکانی کارایی و پەیماننامەی ئاستی خزمەتگوزاری (SLA)',
          content: 'پێویستە سیستەمی بەستراوە توانای بەڕێوەبردنی لانی کەم ١٠,٠٠٠ مامەڵە لە چرکەیەکدا هەبێت بە کاتی وەڵامدانەوەی کەمتر لە ٢٠٠ میلی چرکە.',
        },
      ],
      ar: [
        {
          heading: '١. مقدمة ومعمارية الربط الشبكي بنافذة العراق الموحدة (NSW)',
          content: 'تحدد هذه الوثيقة المعايير الفنية والبروتوكولية لربط المصارف، الهيئة العامة للجمارك، والمنافذ الحدودية البرية والجوية والبحرية بنافذة العراق الموحدة للتجارة الدولية والجمارك.',
          points: [
            'الاعتماد على واجهات برمجة التطبيقات RESTful JSON وبروتوكول gRPC للتبادل عالي السرعة.',
            'التشفير الثنائي المتبادل للقنوات عبر شهادات mTLS مع مفاتيح RSA 2048-bit.',
            'التوافق التام مع نموذج بيانات منظمة الجمارك العالمية (WCO Data Model v3.10).',
          ],
        },
        {
          heading: '٢. المصادقة، التخويل والتوقيع الإلكتروني السيادي',
          content: 'تخضع كافة المعاملات المتداولة للتحقق عبر رموز وصول OAuth 2.0 المشفرة والتوقيع الرقمي المعتمد.',
          points: [
            'التوقيع الرقمي الإلزامي للبيانات الجمركية باستخدام شهادات X.509 السيادية.',
            'التحقق اللحظي من صلاحية الشهادات عبر بروتوكول OCSP المباشر.',
            'توليد معرف وحيد ومختوم زمنياً لكل معاملة رقمية لمنع تكرار الإرسال.',
          ],
        },
        {
          heading: '٣. مؤشرات الأداء واتفاقية مستوى الخدمة (SLA)',
          content: 'يضمن النظام قدرة معالجة تزيد عن 10,000 معاملة في الثانية مع زمن استجابة لا يتجاوز 200 ميلي ثانية وتوافرية 99.99%.',
        },
      ],
      en: [
        {
          heading: '1. Introduction & Single Window Integration Architecture',
          content: 'This document defines the technical interoperability specifications for integrating commercial banks, customs clearance authorities, and border ports into the Iraq National Single Window (NSW) automated customs and trade network.',
          points: [
            'High-throughput RESTful JSON and gRPC endpoints engineered for sub-200ms transaction settlement.',
            'Mutual Transport Layer Security (mTLS) with 2048-bit sovereign root-signed certificates.',
            'Full compliance with the World Customs Organization (WCO) Data Model v3.10 standard.',
          ],
        },
        {
          heading: '2. Authentication, Authorization & Digital Signatures',
          content: 'Every transactional payload requires OAuth 2.0 bearer authorization and cryptographic non-repudiation seals.',
          points: [
            'X.509 cryptographic digital signing of all clearance declarations and trade declarations.',
            'Real-time certificate revocation checking via high-availability OCSP responders.',
            'Cryptographic idempotency keys preventing duplicate customs submission processing.',
          ],
        },
        {
          heading: '3. Service Level Agreements & High Concurrency Performance',
          content: 'Integration nodes must support sustained throughput of 10,000 transactions per second with 99.99% uptime guarantees.',
        },
      ],
    },
  },
];

async function main() {
  console.log('Building official multi-lingual IDG downloadable PDFs...');
  for (const guide of GUIDES_DATA) {
    for (const lang of ['ku', 'ar', 'en']) {
      const title = guide.titles[lang];
      const category = guide.categories[lang];
      const sections = guide.sections[lang];
      const filePath = await generatePdf({
        id: guide.id,
        lang,
        title,
        category,
        ref: guide.ref,
        sections,
      });
      const stats = fs.statSync(filePath);
      console.log(`✔ Generated ${path.basename(filePath)} (${stats.size} bytes)`);
    }
  }
  console.log('All 12 official PDFs successfully generated in public/documents/');
}

main().catch(err => {
  console.error('Failed to generate official PDFs:', err);
  process.exit(1);
});
