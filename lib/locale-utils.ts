import { Language } from '@/lib/translations';

export const LOCALES: readonly Language[] = ['ku', 'ar', 'en'] as const;
export const DEFAULT_LOCALE: Language = 'ku';

export function isValidLocale(value: string | undefined): value is Language {
  return value === 'ku' || value === 'ar' || value === 'en';
}

export function getDirection(locale: Language): 'rtl' | 'ltr' {
  return locale === 'ku' || locale === 'ar' ? 'rtl' : 'ltr';
}

export function isRtlLocale(locale: Language): boolean {
  return locale === 'ku' || locale === 'ar';
}
