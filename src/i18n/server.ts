// src/i18n/server.ts
import { createI18nServer } from 'next-international/server';

export const { getI18n, getScopedI18n, getCurrentLocale, getStaticParams } = createI18nServer({
  en: () => import('./dictionaries/en'),
  id: () => import('./dictionaries/id'),
});
