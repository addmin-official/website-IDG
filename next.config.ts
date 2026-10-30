import type { NextConfig } from 'next';

const cspHeader = [
  "default-src 'self'",
  "script-src 'self' 'strict-dynamic' https: 'unsafe-inline'",
  "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
  "img-src 'self' blob: data: https://www.idggov.tech https://www.aigateiraq.com https:",
  "font-src 'self' data: https://fonts.gstatic.com",
  "connect-src 'self' https://www.idggov.tech https://www.aigateiraq.com https://fonts.googleapis.com https://fonts.gstatic.com https://vitals.vercel-insights.com https://www.google.com https://*.google.com https://www.google-analytics.com https://analytics.google.com https://*.google-analytics.com https://stats.g.doubleclick.net https://*.youtube.com https://*.googlevideo.com",
  "frame-src 'self' https://www.google.com https://recaptcha.google.com https://www.googletagmanager.com https://www.youtube.com https://www.youtube-nocookie.com https://youtube.com https://player.vimeo.com",
  "media-src 'self' blob: data: https:",
  "object-src 'none'",
  "base-uri 'self'",
  "form-action 'self'",
  "frame-ancestors 'none'",
  "upgrade-insecure-requests",
].join('; ');

const nextConfig: NextConfig = {
  distDir: '.next',
  reactStrictMode: true,
  poweredByHeader: false,
  productionBrowserSourceMaps: false,
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: false,
  },
  images: {
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'picsum.photos',
        port: '',
        pathname: '/**',
      },
    ],
  },
  compress: true,
  async redirects() {
    return [
      {
        source: '/:locale(zana|zana-academy|products/zana)',
        destination: 'https://zana.idggov.tech',
        permanent: true,
      },
      {
        source: '/:locale(ku|ar|en)?/products/greenbelt',
        destination: 'https://green-belt-platform.web.app/',
        permanent: false,
      },
      {
        source: '/:locale(ku|ar|en)?/greenbelt',
        destination: 'https://green-belt-platform.web.app/',
        permanent: false,
      },
    ];
  },
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'Content-Security-Policy',
            value: cspHeader,
          },
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=63072000; includeSubDomains; preload',
          },
          { key: 'X-Frame-Options', value: 'DENY' },
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'X-XSS-Protection', value: '1; mode=block' },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin',
          },
          {
            key: 'Permissions-Policy',
            value: 'camera=(), microphone=(), geolocation=(), browsing-topics=()',
          },
          {
            key: 'Cross-Origin-Opener-Policy',
            value: 'same-origin',
          },
          {
            key: 'Cross-Origin-Resource-Policy',
            value: 'cross-origin',
          },
        ],
      },
      {
        source: '/assets/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      {
        source: '/:path*.(ico|png|jpg|jpeg|svg|webp|avif|woff|woff2)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
    ];
  },
};

export default nextConfig;
