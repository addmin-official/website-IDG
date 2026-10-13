'use client';

export interface Shortcut {
  keys: string;
  description: {
    ku: string;
    ar: string;
    en: string;
  };
  action: string;
  category: 'navigation' | 'action' | 'search';
}

export const SHORTCUTS: Shortcut[] = [
  // Navigation
  { keys: 'g h', description: { ku: 'سەرەکی', ar: 'الرئيسية', en: 'Home' }, action: 'navigate-home', category: 'navigation' },
  { keys: 'g a', description: { ku: 'دەربارە', ar: 'من نحن', en: 'About' }, action: 'navigate-about', category: 'navigation' },
  { keys: 'g p', description: { ku: 'پۆرتفۆلیۆ', ar: 'المحفظة', en: 'Portfolio' }, action: 'navigate-portfolio', category: 'navigation' },
  { keys: 'g g', description: { ku: 'حوکمڕانی', ar: 'الحوكمة', en: 'Governance' }, action: 'navigate-governance', category: 'navigation' },
  { keys: 'g c', description: { ku: 'پەیوەندی', ar: 'التواصل', en: 'Contact' }, action: 'navigate-contact', category: 'navigation' },
  { keys: 'g ?', description: { ku: 'ناوەندی هاوکاری', ar: 'مركز المساعدة', en: 'Help' }, action: 'navigate-help', category: 'navigation' },

  // Actions
  { keys: 'k', description: { ku: 'گەڕانی خێرا', ar: 'بحث سريع', en: 'Quick search' }, action: 'open-search', category: 'search' },
  { keys: 'l', description: { ku: 'گۆڕینی زمان', ar: 'تغيير اللغة', en: 'Toggle language' }, action: 'toggle-language', category: 'action' },
  { keys: 't', description: { ku: 'ڕووکاری تاریک/ڕووناک', ar: 'التبديل بين الألوان', en: 'Toggle theme' }, action: 'toggle-theme', category: 'action' },
  { keys: '?', description: { ku: 'ڕێنمایی کلیلەکان', ar: 'اختصارات لوحة المفاتيح', en: 'Show shortcuts' }, action: 'show-shortcuts', category: 'action' },
  { keys: 'Esc', description: { ku: 'داخستن', ar: 'إغلاق', en: 'Close' }, action: 'close', category: 'action' },

  // Expert navigation
  { keys: 'Shift + ?', description: { ku: 'ناوەندی هاوکاری', ar: 'مركز المساعدة', en: 'Help Center' }, action: 'navigate-help', category: 'navigation' },
];
