import type {Metadata} from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Iraq Digital Gateway (IDG) | دەروازەی دیجیتاڵیی عێراق',
  description: 'دەروازەی دیجیتاڵیی عێراق (IDG) - کۆمپانیای دایکی سەربەخۆ بۆ حوکمڕانی، داتا، ژیریی دەستکردی کارپێکراو و ژێرخانی پارێزراوی دامەزراوەیی لە عێراق.',
  openGraph: {
    title: 'Iraq Digital Gateway (IDG) | دەروازەی دیجیتاڵیی عێراق',
    description: 'دەروازەی دیجیتاڵیی عێراق (IDG) - کۆمپانیای دایکی سەربەخۆ بۆ حوکمڕانی، داتا، ژیریی دەستکردی کارپێکراو و ژێرخانی پارێزراوی دامەزراوەیی لە عێراق.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Iraq Digital Gateway (IDG) | دەروازەی دیجیتاڵیی عێراق',
    description: 'دەروازەی دیجیتاڵیی عێراق (IDG) - کۆمپانیای دایکی سەربەخۆ بۆ حوکمڕانی، داتا، ژیریی دەستکردی کارپێکراو و ژێرخانی پارێزراوی دامەزراوەیی لە عێراق.',
  },
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="ku" dir="rtl" suppressHydrationWarning>
      <body className="antialiased bg-slate-50 text-slate-900 selection:bg-blue-600 selection:text-white" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}

