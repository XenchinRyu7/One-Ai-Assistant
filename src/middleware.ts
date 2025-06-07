// src/middleware.ts
import { createI18nMiddleware } from 'next-international/middleware';
import { NextRequest } from 'next/server';
import { locales, defaultLocale } from '@/i18n/settings';

const I18nMiddleware = createI18nMiddleware({
  locales,
  defaultLocale,
  urlMappingStrategy: 'rewrite', // Using 'rewrite' to keep URLs cleaner, but 'redirect' can also be used.
});

export function middleware(request: NextRequest) {
  return I18nMiddleware(request);
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico|images|assets|sitemap.xml|robots.txt|.*\\..*).*)'],
};
