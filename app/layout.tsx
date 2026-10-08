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
        {children}
      </body>
    </html>
  );
}
