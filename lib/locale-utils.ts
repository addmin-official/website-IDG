import { Language } from './translations';

export const LOCALES: Language[] = ['ku', 'ar', 'en'];
export const DEFAULT_LOCALE: Language = 'ku';

export function isValidLocale(locale: string): locale is Language {
  return LOCALES.includes(locale as Language);
}

export function getLocaleDirection(locale: Language): 'rtl' | 'ltr' {
  return locale === 'ku' || locale === 'ar' ? 'rtl' : 'ltr';
}
