import type { Metadata } from 'next';
import { Noto_Kufi_Arabic, Inter } from 'next/font/google';
import { Analytics } from '@vercel/analytics/next';
import './globals.css';

const notoKufi = Noto_Kufi_Arabic({
  subsets: ['arabic'],
  weight: ['400', '600', '700', '900'],
  display: 'swap',
  variable: '--font-ku',
});

const inter = Inter({
  subsets: ['latin'],
  weight: ['500', '700', '900'],
  display: 'swap',
  variable: '--font-en',
});

export const metadata: Metadata = {
  title: 'Iraq Digital Gateway (IDG)',
  description:
    'Sovereign parent company for governance, data, applied AI, and secure institutional infrastructure in Iraq.',
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
        className="antialiased"
        suppressHydrationWarning
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Corporation',
              '@id': 'https://idg.iq/#corporation',
              name: 'Iraq Digital Gateway',
              alternateName: [
                'IDG',
                'دەروازەی دیجیتاڵیی عێراق',
                'بوابة العراق الرقمية',
              ],
              url: 'https://idg.iq',
              logo: 'https://idg.iq/assets/brand/idg-emblem.png',
              founder: {
                '@type': 'Person',
                name: 'Mustafa Jalal Mustafa Khoshnaw',
              },
              foundingLocation: {
                '@type': 'Place',
                name: 'Erbil, Kurdistan Region, Iraq',
              },
              description:
                'Sovereign parent technology company and institutional venture studio engineering digital infrastructure and applied AI for Iraq.',
              knowsAbout: [
                'Sovereign Digital Infrastructure',
                'Iraq National Single Window',
                'Applied Artificial Intelligence',
                'Data Sovereignty',
                'Zero-Trust Architecture',
              ],
            }),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'WebSite',
              '@id': 'https://idg.iq/#website',
              url: 'https://idg.iq',
              name: 'Iraq Digital Gateway (IDG)',
              inLanguage: ['ku', 'ar', 'en'],
              publisher: { '@id': 'https://idg.iq/#corporation' },
            }),
          }}
        />
        {children}
        <Analytics />
      </body>
    </html>
  );
}
