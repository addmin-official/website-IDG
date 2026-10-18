import { Metadata } from 'next';

export const SITE_URL = 'https://idggov.tech';
export const SITE_NAME = 'Iraq Digital Gateway (IDG)';

export interface LocaleSEO {
  title: string;
  description: string;
  keywords: string[];
  ogTitle: string;
  ogDescription: string;
}

export const seoConfig: Record<'ku' | 'ar' | 'en', LocaleSEO> = {
  ku: {
    title: 'دەروازەی دیجیتاڵیی عێراق (IDG) — دامەزراوەی سەروەریی تەکنۆلۆژی',
    description:
      'کۆمپانیای سەروەری تەکنەلۆژیای دایک و ستۆدیۆی وەبەرهێنانی دامەزراوەیی بۆ بنیاتنانی ژێرخانی دیجیتاڵیی عێراق و سەروەریی نیشتمانی.',
    keywords: [
      'دەروازەی دیجیتاڵیی عێراق',
      'IDG Iraq',
      'سەروەری تەکنەلۆژی',
      'ژێرخانی دیجیتاڵی عێراق',
      'کوردستان دیجیتاڵ',
      'پەنجەرەی یەکگرتووی سنورەکان',
      'ژیری دەستکردی نیشتمانی',
      'ئەکادیمیای زانا',
    ],
    ogTitle: 'دەروازەی دیجیتاڵیی عێراق (IDG) — بنیاتنانی ژێرخانی دیجیتاڵی نیشتمانی',
    ogDescription:
      'کۆمپانیای سەروەری تەکنەلۆژیای دایک بۆ ژێرخانی کلاود، ئاسایشی داتا و سیستەمە نیشتمانییەکان.',
  },
  ar: {
    title: 'بوابة العراق الرقمية (IDG) — مؤسسة السيادة التكنولوجية',
    description:
      'الشركة التكنولوجية السيادية الأم واستوديو المشاريع المؤسسي لبناء البنية التحتية الرقمية الوطنية وحماية سيادة البيانات في العراق.',
    keywords: [
      'بوابة العراق الرقمية',
      'IDG العراق',
      'السيادة التكنولوجية',
      'البنية التحتية الرقمية للعراق',
      'النافذة الواحدة للتجارة',
      'بوابة الذكاء الاصطناعي',
      'أكاديمية زانا',
      'أمان البيانات السيادية',
    ],
    ogTitle: 'بوابة العراق الرقمية (IDG) — بنية تحتية رقمية سيادية للعراق',
    ogDescription:
      'الشركة الوطنية الأم لهندسة الأنظمة السحابية والحلول المؤسسية وحماية الفضاء الرقمي العراقي.',
  },
  en: {
    title: 'Iraq Digital Gateway (IDG) — Sovereign Technology Institution',
    description:
      "Iraq's sovereign parent technology company and institutional venture studio engineering national digital infrastructure and data sovereignty.",
    keywords: [
      'Iraq Digital Gateway',
      'IDG Iraq',
      'Sovereign Technology Iraq',
      'Iraq Digital Infrastructure',
      'Iraq National Single Window',
      'AI Gate Iraq',
      'ZaNa Academy',
      'Data Sovereignty Iraq',
    ],
    ogTitle: 'Iraq Digital Gateway (IDG) — Sovereign Digital Infrastructure',
    ogDescription:
      "Iraq's sovereign parent technology company and institutional venture studio for public digital assets.",
  },
};

export function generatePageMetadata({
  locale,
  title,
  description,
  path = '',
  image = '/og-image.svg',
}: {
  locale: 'ku' | 'ar' | 'en';
  title?: string;
  description?: string;
  path?: string;
  image?: string;
}): Metadata {
  const base = seoConfig[locale] || seoConfig.en;
  const pageTitle = title ? `${title} | ${SITE_NAME}` : base.title;
  const pageDescription = description || base.description;
  const pageUrl = `${SITE_URL}/${locale}${path ? `/${path.replace(/^\//, '')}` : ''}`;

  return {
    title: pageTitle,
    description: pageDescription,
    keywords: base.keywords,
    metadataBase: new URL(SITE_URL),
    alternates: {
      canonical: pageUrl,
      languages: {
        ku: `${SITE_URL}/ku${path ? `/${path.replace(/^\//, '')}` : ''}`,
        ar: `${SITE_URL}/ar${path ? `/${path.replace(/^\//, '')}` : ''}`,
        en: `${SITE_URL}/en${path ? `/${path.replace(/^\//, '')}` : ''}`,
        'x-default': `${SITE_URL}/en${path ? `/${path.replace(/^\//, '')}` : ''}`,
      },
    },
    openGraph: {
      title: pageTitle,
      description: pageDescription,
      url: pageUrl,
      siteName: SITE_NAME,
      locale: locale === 'ku' ? 'ku_IQ' : locale === 'ar' ? 'ar_IQ' : 'en_US',
      type: 'website',
      images: [
        {
          url: image.startsWith('http') ? image : `${SITE_URL}${image}`,
          width: 1200,
          height: 630,
          alt: SITE_NAME,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: pageTitle,
      description: pageDescription,
      creator: '@idg_iq',
      images: [image.startsWith('http') ? image : `${SITE_URL}${image}`],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
  };
}

export function generateStructuredOrganization(locale: 'ku' | 'ar' | 'en' = 'en') {
  return {
    '@context': 'https://schema.org',
    '@type': 'Corporation',
    '@id': `${SITE_URL}/#corporation`,
    name: 'Iraq Digital Gateway',
    alternateName: [
      'IDG Iraq',
      'دەروازەی دیجیتاڵیی عێراق',
      'بوابة العراق الرقمية',
    ],
    legalName: 'Iraq Digital Gateway',
    description: seoConfig[locale].description,
    url: SITE_URL,
    logo: `${SITE_URL}/assets/brand/idg-emblem.png`,
    foundingDate: '2024',
    foundingLocation: {
      '@type': 'Place',
      name: 'Erbil, Kurdistan Region, Iraq',
    },
    founder: {
      '@type': 'Person',
      name: 'Mustafa Jalal Mustafa Khoshnaw',
      jobTitle: 'Founder & Managing Director',
      sameAs: [
        'https://x.com/idg_iq',
        'https://linkedin.com/company/iraq-digital-gateway',
      ],
    },
    areaServed: {
      '@type': 'Country',
      name: 'Iraq',
    },
    knowsAbout: [
      'Sovereign Digital Infrastructure',
      'Iraq National Single Window',
      'Applied Artificial Intelligence',
      'Data Sovereignty',
      'Zero-Trust Architecture',
    ],
    sameAs: [
      'https://x.com/idg_iq',
      'https://github.com/addmin-official',
      'https://linkedin.com/company/iraq-digital-gateway',
    ],
  };
}
