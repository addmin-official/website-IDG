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
