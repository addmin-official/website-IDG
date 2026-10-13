'use client';

import { useEffect, useState, useCallback } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import { useLocale } from '@/lib/locale-context';
import { Keyboard, X } from 'lucide-react';
import { SHORTCUTS } from '@/lib/keyboard-shortcuts';

export default function KeyboardShortcuts() {
  const router = useRouter();
  const pathname = usePathname();
  const { lang } = useLocale();
  const [showHelp, setShowHelp] = useState(false);
  const [keyBuffer, setKeyBuffer] = useState('');

  // Listen for custom open event (e.g. from navbar or footer)
  useEffect(() => {
    const handleShow = () => setShowHelp(true);
    window.addEventListener('idg:show-shortcuts', handleShow);
    return () => window.removeEventListener('idg:show-shortcuts', handleShow);
  }, []);

  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    // Ignore when typing in input/textarea/select/contentEditable
    const target = e.target as HTMLElement;
    if (target.tagName === 'INPUT' || target.tagName === 'TEXTAREA' || target.tagName === 'SELECT' || target.isContentEditable) {
      // Only handle Escape
      if (e.key === 'Escape') {
        setShowHelp(false);
      }
      return;
    }

    // Show shortcuts modal with ?
    if (e.key === '?' && !e.shiftKey) {
      e.preventDefault();
      setShowHelp(true);
      return;
    }

    // Escape closes
    if (e.key === 'Escape') {
      setShowHelp(false);
      setKeyBuffer('');
      return;
    }

    // Quick search shortcut (k without Cmd/Ctrl can also open command palette)
    if (e.key === 'k' && !e.metaKey && !e.ctrlKey && !e.altKey) {
      e.preventDefault();
      window.dispatchEvent(new CustomEvent('idg:open-search'));
      return;
    }

    // Single key shortcuts: Language cycle
    if (e.key === 'l' && !e.metaKey && !e.ctrlKey && !e.altKey) {
      e.preventDefault();
      const langs = ['ku', 'ar', 'en'];
      const currentIdx = langs.indexOf(lang);
      const nextLang = langs[(currentIdx + 1) % langs.length];
      const segments = pathname.split('/').filter(Boolean);
      if (segments.length > 0 && langs.includes(segments[0])) {
        segments.shift();
      }
      router.push(`/${nextLang}${segments.length ? '/' + segments.join('/') : ''}`);
      return;
    }

    // Two-key sequences (g + letter)
    if (e.key === 'g' && !e.metaKey && !e.ctrlKey && !e.altKey) {
      setKeyBuffer('g');
      setTimeout(() => setKeyBuffer(''), 1500);
      return;
    }

    if (keyBuffer === 'g') {
      const routes: Record<string, string> = {
        h: `/${lang}`,
        a: `/${lang}/about`,
        p: `/${lang}/portfolio`,
        g: `/${lang}/governance`,
        c: `/${lang}/contact`,
        '?': `/${lang}/help`,
      };
      if (routes[e.key]) {
        e.preventDefault();
        router.push(routes[e.key]);
        setKeyBuffer('');
      }
    }
  }, [pathname, lang, keyBuffer, router]);

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleKeyDown]);

  if (!showHelp) return null;

  const categories = {
    navigation: { ku: 'ڕێنمایی', ar: 'التنقل', en: 'Navigation' },
    action: { ku: 'کردارەکان', ar: 'الإجراءات', en: 'Actions' },
    search: { ku: 'گەڕان', ar: 'البحث', en: 'Search' },
  };

  return (
    <div
      className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
      onClick={() => setShowHelp(false)}
      role="dialog"
      aria-modal="true"
      aria-label="Keyboard shortcuts"
    >
      <div
        className="bg-[#0B172E] border border-[#102447] rounded-2xl max-w-2xl w-full max-h-[85vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between p-6 border-b border-[#102447]">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-[#102447] rounded-lg flex items-center justify-center">
              <Keyboard className="w-5 h-5 text-[#60A5FA]" />
            </div>
            <div>
              <h2 className="text-lg font-black text-white">
                {lang === 'ku' ? 'کلیلەکانی ڕێنمایی' : 
                 lang === 'ar' ? 'اختصارات لوحة المفاتيح' : 
                 'Keyboard Shortcuts'}
              </h2>
              <p className="text-xs text-slate-400 mt-0.5">
                {lang === 'ku' ? 'بۆ بەکارهێنەرانی پیشەیی' : 
                 lang === 'ar' ? 'للمستخدمين المحترفين' : 
                 'For power users'}
              </p>
            </div>
          </div>
          <button
            onClick={() => setShowHelp(false)}
            className="w-9 h-9 rounded-lg text-slate-400 hover:text-white hover:bg-[#102447] transition-colors flex items-center justify-center cursor-pointer"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-6 space-y-8">
          {Object.entries(categories).map(([key, label]) => (
            <div key={key}>
              <h3 className="text-xs font-bold uppercase tracking-widest text-[#60A5FA] mb-4">
                {label[lang as keyof typeof label]}
              </h3>
              <div className="space-y-2">
                {SHORTCUTS.filter(s => s.category === key).map((shortcut, idx) => (
                  <div
                    key={idx}
                    className="flex items-center justify-between py-2 px-3 rounded-lg hover:bg-[#102447]/50 transition-colors"
                  >
                    <span className="text-sm text-slate-300">
                      {shortcut.description[lang as keyof typeof shortcut.description]}
                    </span>
                    <div className="flex items-center gap-1">
                      {shortcut.keys.split(' + ').map((k, i) => (
                        <kbd
                          key={i}
                          className="px-2 py-1 bg-[#060D1A] border border-[#102447] rounded text-xs font-mono text-slate-200 min-w-[28px] text-center"
                        >
                          {k}
                        </kbd>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="p-6 border-t border-[#102447] text-center text-xs text-slate-500">
          {lang === 'ku' ? 'کلیلەکان کاردەکەن لە هەموو لاپەڕەکاندا' : 
           lang === 'ar' ? 'الاختصارات تعمل على جميع الصفحات' : 
           'Shortcuts work on all pages'}
        </div>
      </div>
    </div>
  );
}
