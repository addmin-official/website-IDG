'use client';

import React from 'react';
import { Sparkles } from 'lucide-react';

interface AIUseDisclosureProps {
  lang?: 'ku' | 'ar' | 'en';
  className?: string;
}

const TEXT = {
  ku: {
    title: 'شەفافیەتی ژیریی دەستکرد',
    body: 'ئەم پلاتفۆرمە مۆدێلی ژیریی دەستکرد بەکاردەهێنێت تەنها بۆ شیکاریی بەڵگەنامە و پشتڕاستکردنەوەی سیستەمی. هیچ بڕیارێکی کۆتایی بەبێ پشتڕاستکردنەوەی مرۆیی ناگیرێت.',
  },
  ar: {
    title: 'شفافية الذكاء الاصطناعي',
    body: 'تستخدم هذه المنصة نماذج الذكاء الاصطناعي فقط لتحليل المستندات والتحقق من الأنظمة. لا يتم اتخاذ أي قرار نهائي دون إشراف بشري.',
  },
  en: {
    title: 'AI Transparency',
    body: 'This platform uses AI models strictly for document parsing and system verification. No final decisions are made without human-in-the-loop oversight.',
  },
};

export default function AIUseDisclosure({ lang = 'ku', className = '' }: AIUseDisclosureProps) {
  const t = TEXT[lang];
  return (
    <div className={`flex items-start gap-3 p-3 rounded-xl bg-[#451a03] border border-[#D97706]/40 text-[#D97706] ${className}`}>
      <Sparkles className="w-4 h-4 text-[#D97706] shrink-0 mt-0.5" />
      <div className="text-xs leading-relaxed">
        <strong className="block mb-1 font-bold text-amber-200">{t.title}</strong>
        <span className="text-amber-300/90">{t.body}</span>
      </div>
    </div>
  );
}
