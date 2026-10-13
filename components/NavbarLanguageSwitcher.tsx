'use client';
import React, { useState, useRef, useEffect } from 'react';
import { Globe, ChevronDown, Check } from 'lucide-react';
import { useRouter, usePathname } from 'next/navigation';
import { useLocale } from '@/lib/locale-context';
import type { Language } from '@/lib/translations';

const LANGUAGES: Array<{ code: Language; label: string; native: string }> = [
  { code: 'ku', label: 'کوردی', native: 'Kurdish' },
  { code: 'ar', label: 'العربية', native: 'Arabic' },
  { code: 'en', label: 'English', native: 'English' },
];

export default function NavbarLanguageSwitcher() {
  const { lang } = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const switchLanguage = (newLang: Language) => {
    const segments = pathname.split('/').filter(Boolean);
    if (segments.length > 0 && ['ku', 'ar', 'en'].includes(segments[0])) {
      segments.shift();
    }
    const newPath = `/${newLang}${segments.length ? '/' + segments.join('/') : ''}`;
    router.push(newPath);
    setOpen(false);
  };

  const current = LANGUAGES.find(l => l.code === lang);

  return (
    <div ref={ref} className="relative">
      <button
        onClick={() => setOpen(!open)}
        aria-expanded={open}
        aria-haspopup="true"
        aria-label="Select language"
        className="flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-semibold text-slate-300 hover:text-white hover:bg-[#102447] transition-colors"
      >
        <Globe className="w-4 h-4" />
        <span className="hidden sm:inline">{current?.label}</span>
        <ChevronDown className={`w-3 h-3 transition-transform ${open ? 'rotate-180' : ''}`} />
      </button>

      {open && (
        <div className="absolute top-full end-0 mt-2 w-40 bg-[#0B172E] border border-[#102447] rounded-xl shadow-2xl shadow-black/40 py-2 z-50">
          {LANGUAGES.map((language) => (
            <button
              key={language.code}
              onClick={() => switchLanguage(language.code)}
              className={`w-full flex items-center justify-between px-4 py-2.5 text-sm transition-colors ${
                lang === language.code
                  ? 'text-[#60A5FA] bg-[#102447] font-bold'
                  : 'text-slate-300 hover:text-white hover:bg-[#102447]'
              }`}
            >
              <span>{language.label}</span>
              {lang === language.code && <Check className="w-4 h-4" />}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
