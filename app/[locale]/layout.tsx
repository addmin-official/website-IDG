import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { LocaleProvider } from '@/lib/locale-context';
import { isValidLocale, getDirection, LOCALES } from '@/lib/locale-utils';
import { Language } from '@/lib/translations';
import '../globals.css';

interface LocaleLayoutProps {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}

export async function generateStaticParams() {
  return LOCALES.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;

  if (!isValidLocale(locale)) {
    return {};
  }

  const titles: Record<Language, string> = {
    ku: 'دەروازەی دیجیتاڵیی عێراق (IDG)',
    ar: 'بوابة العراق الرقمية (IDG)',
    en: 'Iraq Digital Gateway (IDG)',
  };

  const descriptions: Record<Language, string> = {
    ku: 'دەروازەی دیجیتاڵیی عێراق (IDG) - کۆمپانیای دایکی سەربەخۆ بۆ حوکمڕانی، داتا، ژیریی دەستکردی کارپێکراو و ژێرخانی پارێزراوی دامەزراوەیی لە عێراق.',
    ar: 'بوابة العراق الرقمية (IDG) - الشركة الأم السيادية للحوكمة، البيانات، الذكاء الاصطناعي التطبيقي، والبنية التحتية الرقمية الآمنة في العراق.',
    en: 'Iraq Digital Gateway (IDG) - Sovereign parent company for governance, data, applied AI, and secure institutional infrastructure in Iraq.',
  };

  const baseUrl = 'https://idg.iq';

  return {
    title: titles[locale],
    description: descriptions[locale],
    alternates: {
      canonical: `${baseUrl}/${locale}`,
      languages: {
        ku: `${baseUrl}/ku`,
        ar: `${baseUrl}/ar`,
        en: `${baseUrl}/en`,
      },
    },
    openGraph: {
      title: titles[locale],
      description: descriptions[locale],
      type: 'website',
      locale: locale === 'ku' ? 'ckb_IQ' : locale === 'ar' ? 'ar_IQ' : 'en_US',
      url: `${baseUrl}/${locale}`,
    },
    twitter: {
      card: 'summary_large_image',
      title: titles[locale],
      description: descriptions[locale],
    },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: LocaleLayoutProps) {
  const { locale } = await params;

  if (!isValidLocale(locale)) {
    notFound();
  }

  const dir = getDirection(locale);

  return (
    <html lang={locale} dir={dir} suppressHydrationWarning>
      <body
        className="antialiased bg-slate-50 text-slate-900 selection:bg-blue-600 selection:text-white"
        suppressHydrationWarning
      >
        <LocaleProvider lang={locale}>{children}</LocaleProvider>
      </body>
    </html>
  );
}
