import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  console.log('🌱 Starting database seeding (dev only)...');

  // Seed ContactSubmission sample records
  console.log('Inserting sample ContactSubmission records...');
  await prisma.contactSubmission.createMany({
    data: [
      {
        name: 'Aram Qadir',
        email: 'aram.qadir@example.iq',
        phone: '+964 770 123 4567',
        subject: 'پەیوەندی سەبارەت بە خزمەتگوزارییەکان',
        message: 'سڵاو، دەمەوێت زیاتر بزانم دەربارەی پڕۆژەکانی دەروازەی دیجیتاڵیی عێراق و چۆنیەتی هاوکاری.',
        locale: 'ku',
        status: 'PENDING',
      },
      {
        name: 'Zahra Hassan',
        email: 'zahra.hassan@example.iq',
        phone: '+964 780 987 6543',
        subject: 'استفسار حول البنية التحتية السيادية',
        message: 'مرحباً، نود الاستفسار عن بروتوكولات الأمان السحابية والسيادة الرقمية للبيانات الوطنية.',
        locale: 'ar',
        status: 'REVIEWED',
      },
      {
        name: 'David Miller',
        email: 'david.miller@globalpartners.org',
        phone: '+1 202 555 0192',
        subject: 'Partnership Inquiry for Vision 2035',
        message: 'Hello, our organization is interested in discussing technical collaboration on Vision 2035 digital transformation initiatives.',
        locale: 'en',
        status: 'RESOLVED',
      },
    ],
    skipDuplicates: true,
  });

  // Seed NewsletterSubscriber sample records
  console.log('Inserting sample NewsletterSubscriber records...');
  await prisma.newsletterSubscriber.createMany({
    data: [
      {
        email: 'hewa.tech@gov.krd',
        locale: 'ku',
        status: 'ACTIVE',
      },
      {
        email: 'ali.baghdad@digital.iq',
        locale: 'ar',
        status: 'ACTIVE',
      },
      {
        email: 'researcher@mena-strategy.com',
        locale: 'en',
        status: 'ACTIVE',
      },
    ],
    skipDuplicates: true,
  });

  // Seed PageView sample records
  console.log('Inserting sample PageView records...');
  await prisma.pageView.createMany({
    data: [
      {
        path: '/ku',
        locale: 'ku',
        referrer: 'https://google.iq',
        userAgent: 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7)',
      },
      {
        path: '/ar/vision',
        locale: 'ar',
        referrer: 'https://news.iq',
        userAgent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)',
      },
      {
        path: '/en/about',
        locale: 'en',
        referrer: 'https://linkedin.com',
        userAgent: 'Mozilla/5.0 (iPhone; CPU iPhone OS 17_4 like Mac OS X)',
      },
    ],
    skipDuplicates: true,
  });

  // Seed BlogPost sample records
  console.log('Inserting sample BlogPost records...');
  const blogPosts = [
    {
      title: 'عراق الرقمية: بناء المستقبل التكنولوجي والسيادة الرقمية',
      slug: 'iraq-digital-future-ar',
      excerpt: 'استكشف كيف تعيد بوابة العراق الرقمية (IDG) تعريف البنية التحتية والتحول الرقمي الوطني المستقل.',
      content: 'تُعد بوابة العراق الرقمية ركيزة التحول السيادي من خلال توحيد الحوكمة، البيانات، والذكاء الاصطناعي في منصات وطنية متكاملة ومستقرة، صُممت لتخدم الأجيال القادمة وتعزز استقلالية البنية التحتية التكنولوجية الوطنية.',
      locale: 'ar',
      author: 'Mustafa Khoshnaw',
      publishedAt: new Date('2026-10-15'),
      featured: true,
    },
    {
      title: 'Digital Transformation in Iraq: A Sovereign Architectural Blueprint',
      slug: 'digital-transformation-blueprint-en',
      excerpt: 'How IDG is engineering connected, trusted enterprise systems and high-throughput national digital infrastructure.',
      content: 'Iraq Digital Gateway (IDG) represents an institutional approach to modernizing digital infrastructure. By bridging strategic governance, zero-trust cybersecurity, and institutional venture development, IDG transforms complexity into trusted operational capability across the country.',
      locale: 'en',
      author: 'Mustafa Khoshnaw',
      publishedAt: new Date('2026-10-14'),
      featured: true,
    },
    {
      title: 'سیستمی دیجیتاڵی عێراق: بونیادنانی ژێرخانی سەروەریی تەکنەلۆژیا',
      slug: 'iraqi-digital-system-ku',
      excerpt: 'چۆن دەروازەی دیجیتاڵیی عێراق (IDG) ژێرخانێکی سەروەری متمانەپێکراو بۆ داهاتووی عێراق بونیاد دەنێت.',
      content: 'دەروازەی دیجیتاڵیی عێراق وەک کۆمپانیایەکی دایکی تەکنەلۆژی و ستۆدیۆی وەبەرهێنان، کار لەسەر بەستنەوەی حوکمڕانی دامەزراوەیی، داتای سەروەر و ژیریی دەستکرد دەکات، بە مەبەستی گۆڕینی ئاڵۆزییەکان بۆ توانایەکی بەردەوامی سەقامگیر.',
      locale: 'ku',
      author: 'Mustafa Khoshnaw',
      publishedAt: new Date('2026-10-13'),
      featured: true,
    },
    {
      title: 'تطوير النافذة الوطنية الموحدة: خطوة نحو أتمتة التجارة العراقية',
      slug: 'national-single-window-iraq-ar',
      excerpt: 'نظرة تحليلية على مشروع النافذة الوطنية الموحدة لدعم انسيابية التجارة وتسريع الإجراءات الحكومية.',
      content: 'مشروع النافذة الوطنية الموحدة لتجارة العراق (INSW) يعيد هيكلة العمليات الجمركية واللوجستية من خلال منصة موحدة رقمية تربط كافة المنافذ والوزارات المعنية وفق أعلى معايير الشفافية والأمان.',
      locale: 'ar',
      author: 'IDG Research Team',
      publishedAt: new Date('2026-10-12'),
      featured: false,
    },
    {
      title: 'AI Gate Iraq: Scaling Applied Artificial Intelligence for Public Infrastructure',
      slug: 'ai-gate-iraq-infrastructure-en',
      excerpt: 'Deploying domain-specific language models and sovereign data platforms tailored for institutional automation.',
      content: 'AI Gate provides the foundational pipeline for secure machine learning deployments across Iraqi enterprises and public institutions, guaranteeing that critical data remains within national borders while unlocking state-of-the-art computational efficiencies.',
      locale: 'en',
      author: 'IDG Engineering',
      publishedAt: new Date('2026-10-11'),
      featured: false,
    },
  ];

  for (const post of blogPosts) {
    await prisma.blogPost.upsert({
      where: { slug: post.slug },
      update: post,
      create: post,
    });
  }

  console.log('✅ Seeding completed successfully.');
}

main()
  .catch((e) => {
    console.error('❌ Error during seeding:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
