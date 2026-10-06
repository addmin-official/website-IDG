import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

const LOCALES = ['ku', 'ar', 'en'] as const;
type AppLocale = (typeof LOCALES)[number];
const DEFAULT_LOCALE: AppLocale = 'ku';

export function middleware(request: NextRequest) {
  const { pathname, search } = request.nextUrl;

  // If the pathname already starts with /ku, /ar, or /en (or /ku/..., etc.) -> pass through
  const pathnameHasLocale = LOCALES.some(
    (locale) => pathname === `/${locale}` || pathname.startsWith(`/${locale}/`)
  );

  if (pathnameHasLocale) {
    return NextResponse.next();
  }

  // Redirect to default locale ('ku') preserving pathname and query parameters
  const targetPathname = pathname === '/' ? `/${DEFAULT_LOCALE}` : `/${DEFAULT_LOCALE}${pathname}`;
  const redirectUrl = new URL(`${targetPathname}${search}`, request.url);

  return NextResponse.redirect(redirectUrl);
}

export const config = {
  matcher: [
    /*
     * Match all request paths except:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - api routes
     * - static folder
     * - files with extensions (e.g. favicon.ico, .png, .css, .js)
     */
    '/((?!api|_next/static|_next/image|static|favicon.ico|.*\\.[\\w]+$).*)',
  ],
};
