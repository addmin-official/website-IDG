import type { Metadata } from 'next';

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
  return children;
}
