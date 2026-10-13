'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { useLocale } from '@/lib/locale-context';
import { Search, ArrowRight, FileText, Building2, Users, Briefcase, HelpCircle, Newspaper, Shield } from 'lucide-react';

const PAGES = {
  ku: [
    { title: 'سەرەکی', href: '/', icon: Building2 },
    { title: 'دەربارەی ئێمە', href: '/about', icon: Users },
    { title: 'پۆرتفۆلیۆ', href: '/portfolio', icon: FileText },
    { title: 'حوکمڕانی', href: '/governance', icon: Shield },
    { title: 'دیدگای ٢٠٣٥', href: '/vision', icon: Newspaper },
    { title: 'هەلی کار', href: '/careers', icon: Briefcase },
    { title: 'پرسیارە باوەکان', href: '/faq', icon: HelpCircle },
    { title: 'ناوەندی هاوکاری', href: '/help', icon: HelpCircle },
    { title: 'پەیوەندی', href: '/contact', icon: Building2 },
  ],
  ar: [
    { title: 'الرئيسية', href: '/', icon: Building2 },
    { title: 'من نحن', href: '/about', icon: Users },
    { title: 'المحفظة', href: '/portfolio', icon: FileText },
    { title: 'الحوكمة', href: '/governance', icon: Shield },
    { title: 'رؤية 2035', href: '/vision', icon: Newspaper },
    { title: 'الوظائف', href: '/careers', icon: Briefcase },
    { title: 'الأسئلة الشائعة', href: '/faq', icon: HelpCircle },
    { title: 'مركز المساعدة', href: '/help', icon: HelpCircle },
    { title: 'التواصل', href: '/contact', icon: Building2 },
  ],
  en: [
    { title: 'Home', href: '/', icon: Building2 },
    { title: 'About Us', href: '/about', icon: Users },
    { title: 'Portfolio', href: '/portfolio', icon: FileText },
    { title: 'Governance', href: '/governance', icon: Shield },
    { title: 'Vision 2035', href: '/vision', icon: Newspaper },
    { title: 'Careers', href: '/careers', icon: Briefcase },
    { title: 'FAQ', href: '/faq', icon: HelpCircle },
    { title: 'Help Center', href: '/help', icon: HelpCircle },
    { title: 'Contact', href: '/contact', icon: Building2 },
  ],
};

export default function CommandPalette() {
  const router = useRouter();
  const { lang, isRtl } = useLocale();
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState('');

  const pages = PAGES[lang as keyof typeof PAGES] || PAGES.en;
  const filtered = query 
    ? pages.filter(p => p.title.toLowerCase().includes(query.toLowerCase()))
    : pages;

  // Listen for custom open event (e.g. from pressing 'k')
  useEffect(() => {
    const handleOpen = () => setOpen(true);
    window.addEventListener('idg:open-search', handleOpen);
    return () => window.removeEventListener('idg:open-search', handleOpen);
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setOpen(prev => !prev);
      }
      if (e.key === 'Escape' && open) {
        setOpen(false);
        setQuery('');
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [open]);

  const handleSelect = (href: string) => {
    const targetPath = href === '/' ? `/${lang}` : `/${lang}${href}`;
    router.push(targetPath);
    setOpen(false);
    setQuery('');
  };

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[70] flex items-start justify-center p-4 pt-[15vh] bg-black/80 backdrop-blur-sm"
      onClick={() => setOpen(false)}
      role="dialog"
      aria-modal="true"
      aria-label="Quick navigation"
    >
      <div
        className="bg-[#0B172E] border border-[#102447] rounded-2xl max-w-xl w-full shadow-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center gap-3 px-4 py-3 border-b border-[#102447]">
          <Search className="w-5 h-5 text-slate-400" />
          <input
            type="text"
            autoFocus
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder={lang === 'ku' ? 'گەڕان بۆ لاپەڕەکان...' : 
                        lang === 'ar' ? 'ابحث في الصفحات...' : 
                        'Search pages...'}
            className="flex-1 bg-transparent text-slate-100 placeholder-slate-500 text-base focus:outline-none"
            spellCheck={false}
          />
          <kbd className="hidden sm:inline-flex px-2 py-1 bg-[#060D1A] border border-[#102447] rounded text-[10px] font-mono text-slate-400">
            ESC
          </kbd>
        </div>

        <div className="max-h-[400px] overflow-y-auto py-2">
          {filtered.length === 0 ? (
            <div className="px-4 py-8 text-center text-sm text-slate-500">
              {lang === 'ku' ? 'هیچ لاپەڕەیەک نەدۆزرایەوە' : 
               lang === 'ar' ? 'لم يتم العثور على صفحات' : 
               'No pages found'}
            </div>
          ) : (
            filtered.map((page, idx) => {
              const Icon = page.icon;
              return (
                <button
                  key={idx}
                  onClick={() => handleSelect(page.href)}
                  className="w-full flex items-center gap-3 px-4 py-2.5 hover:bg-[#102447] transition-colors text-start group cursor-pointer"
                >
                  <Icon className="w-4 h-4 text-slate-500 group-hover:text-[#60A5FA] transition-colors" />
                  <span className="flex-1 text-sm text-slate-200">{page.title}</span>
                  <ArrowRight className={`w-3.5 h-3.5 text-slate-600 group-hover:text-[#60A5FA] transition-colors ${isRtl ? 'rotate-180' : ''}`} />
                </button>
              );
            })
          )}
        </div>

        <div className="px-4 py-2.5 border-t border-[#102447] flex items-center justify-between text-[10px] text-slate-500">
          <span>
            {lang === 'ku' ? 'کلیلەکانی ڕێنمایی: ؟' : 
             lang === 'ar' ? 'اختصارات: ؟' : 
             'Shortcuts: ?'}
          </span>
          <span className="font-mono">Cmd/Ctrl + K</span>
        </div>
      </div>
    </div>
  );
}
