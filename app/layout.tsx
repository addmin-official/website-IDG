import React, { Suspense } from 'react';
import type { Metadata, Viewport } from 'next';
import Script from 'next/script';
import { Noto_Kufi_Arabic, Inter } from 'next/font/google';
import { Analytics } from '@vercel/analytics/next';
import { SpeedInsights } from '@vercel/speed-insights/next';
import PageTransitionLoader from '@/components/PageTransitionLoader';
import './globals.css';

const notoKufi = Noto_Kufi_Arabic({
  subsets: ['arabic'],
  weight: ['400', '500', '600', '700', '800', '900'],
  display: 'swap',
  preload: true,
  variable: '--font-ku',
});

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  preload: true,
  variable: '--font-en',
});

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  viewportFit: 'cover',
  themeColor: '#060D1A',
};

const siteUrl = 'https://idggov.tech';

export const metadata: Metadata = {
  title: {
    default: 'Iraq Digital Gateway (IDG) — Sovereign Technology Institution',
    template: '%s | Iraq Digital Gateway (IDG)',
  },
  description:
    "Iraq Digital Gateway (IDG) is Iraq's sovereign parent technology " +
    'company and institutional venture studio. NOT affiliated with IDG ' +
    'Communications or International Data Group.',
  keywords: [
    'Iraq Digital Gateway',
    'IDG Iraq',
    'Sovereign Technology Iraq',
    'Iraq Digital Infrastructure',
    'Erbil Technology',
    'Kurdistan Digital',
    'Iraq National Single Window',
    'AI Gate Iraq',
    'ZaNa Academy',
    'Green Belt Iraq',
  ],
  authors: [{ name: 'Mustafa Jalal Mustafa Khoshnaw' }],
  creator: 'Iraq Digital Gateway (IDG)',
  publisher: 'Iraq Digital Gateway (IDG)',
  metadataBase: new URL(siteUrl),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Iraq Digital Gateway (IDG) — Sovereign Technology Institution',
    description:
      "Iraq's sovereign parent technology company and institutional venture studio for national digital infrastructure.",
    type: 'website',
    url: siteUrl,
    images: [
      {
        url: '/og-image.svg',
        width: 1200,
        height: 630,
        alt: 'Iraq Digital Gateway',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Iraq Digital Gateway (IDG)',
    description:
      "Iraq's sovereign parent technology company. NOT affiliated with International Data Group.",
    images: ['/og-image.svg'],
  },
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION || 'google-site-verification-idg',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="ku"
      dir="rtl"
      className={`${notoKufi.variable} ${inter.variable}`}
      suppressHydrationWarning
    >
      <body
        className="antialiased overflow-x-hidden w-full max-w-full"
        suppressHydrationWarning
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Corporation',
              '@id': `${siteUrl}/#corporation`,
              name: 'Iraq Digital Gateway',
              alternateName: [
                'IDG Iraq',
                'دەروازەی دیجیتاڵیی عێراق',
                'بوابة العراق الرقمية',
              ],
              legalName: 'Iraq Digital Gateway',
              description:
                "Iraq's sovereign parent technology company and institutional venture studio engineering digital infrastructure and applied AI for Iraq.",
              disambiguatingDescription:
                'Iraq Digital Gateway (IDG) is an Iraqi sovereign technology ' +
                'institution. Not to be confused with International Data Group ' +
                '(IDG Inc.), IDG Communications, or IDG Ventures.',
              url: siteUrl,
              logo: `${siteUrl}/assets/brand/idg-emblem.png`,
              foundingDate: '2024',
              foundingLocation: {
                '@type': 'Place',
                name: 'Erbil, Kurdistan Region, Iraq',
              },
              founder: {
                '@type': 'Person',
                name: 'Mustafa Jalal Mustafa Khoshnaw',
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
              slogan: 'Turning complexity into trusted operational capability',
            }),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'WebSite',
              '@id': 'https://idggov.tech/#website',
              url: 'https://idggov.tech',
              name: 'Iraq Digital Gateway (IDG)',
              inLanguage: ['ku', 'ar', 'en'],
              publisher: { '@id': 'https://idggov.tech/#corporation' },
            }),
          }}
        />
        <Suspense fallback={null}>
          <PageTransitionLoader />
        </Suspense>
        {children}
        {process.env.NEXT_PUBLIC_GA_ID && (
          <>
            <Script
              strategy="afterInteractive"
              src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}
            />
            <Script
              id="google-analytics"
              strategy="afterInteractive"
              dangerouslySetInnerHTML={{
                __html: `
                  window.dataLayer = window.dataLayer || [];
                  function gtag(){dataLayer.push(arguments);}
                  gtag('js', new Date());
                  gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}', {
                    page_path: window.location.pathname,
                  });
                `,
              }}
            />
          </>
        )}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
