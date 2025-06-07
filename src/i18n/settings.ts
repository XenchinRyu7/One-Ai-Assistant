// src/i18n/settings.ts
export const locales = ['en', 'id'] as const;
export const defaultLocale = 'en';
export type Locale = (typeof locales)[number];
