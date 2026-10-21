import React from 'react';

export function OrganizationJsonLd({ locale }: { locale: string }) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Iraq Digital Gateway (IDG)',
    alternateName: 'دەروازەی دیجیتاڵیی عێراق',
    url: `https://www.idggov.tech/${locale}`,
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Erbil',
      addressRegion: 'Kurdistan Region',
      addressCountry: 'IQ',
    },
    foundingDate: '2024',
    subOrganization: [
      {
        '@type': 'Organization',
        name: 'AI Gate Iraq',
        url: 'https://www.aigateiraq.com',
        description: 'National AI platform for Iraq',
      },
      {
        '@type': 'SoftwareApplication',
        name: 'ImpactIQ',
        url: 'https://www.idggov.tech/ku/products/impactiq',
      },
      {
        '@type': 'SoftwareApplication',
        name: 'Gateway AI',
        url: 'https://www.idggov.tech/ku/products/gateway-ai',
        description: 'Customs and Border Intelligence Platform',
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
