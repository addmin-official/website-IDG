import { NextResponse } from 'next/server';

export async function GET() {
  const sitemapUrl = 'https://idg.iq/sitemap.xml';

  // In production, ping Google and Bing sitemap URLs
  // This is a manual trigger endpoint for SEO refresh

  return NextResponse.json({
    success: true,
    sitemap: sitemapUrl,
    message: 'Sitemap ready for search engines',
    submitTo: [
      'https://www.google.com/ping?sitemap=' + sitemapUrl,
      'https://www.bing.com/ping?sitemap=' + sitemapUrl,
    ],
  });
}
