import type { Metadata } from 'next';
import './globals.css';

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
    <html lang="ku" dir="rtl" suppressHydrationWarning>
      <body
        className="antialiased bg-slate-50 text-slate-900 selection:bg-blue-600 selection:text-white"
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
      </body>
    </html>
  );
}
