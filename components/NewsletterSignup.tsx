'use client';

import React, { useState } from 'react';
import { Mail, CheckCircle2, AlertCircle, Loader2, ArrowRight, ArrowLeft } from 'lucide-react';
import { useLocale } from '@/lib/locale-context';
import { TranslationData } from '@/lib/translations';
import Button from '@/components/ui/Button';

interface NewsletterSignupProps {
  t?: TranslationData;
  isRtl?: boolean;
}

export default function NewsletterSignup({ t, isRtl }: NewsletterSignupProps) {
  const { lang, isRtl: contextIsRtl } = useLocale();
  const rtl = isRtl !== undefined ? isRtl : contextIsRtl;
  const ArrowIcon = rtl ? ArrowLeft : ArrowRight;

  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');
  const [serverMsg, setServerMsg] = useState('');

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const content = {
    title:
      t?.footer?.newsletter?.title ||
      (lang === 'ku'
        ? 'ناوەندی زانیاری و نوێکارییە خولییەکان'
        : lang === 'ar'
        ? 'مركز المعلومات والتحديثات الدورية'
        : 'Institutional Intelligence & Updates'),
    description:
      t?.footer?.newsletter?.description ||
      (lang === 'ku'
        ? 'ئیمەیڵی دامەزراوەیی خۆت تۆمار بکە بۆ وەرگرتنی ڕاپۆرتە فەرمییەکان، شیارییە ستراتیژییەکان، و پێشکەوتنەکانی ژێرخانی دیجیتاڵیی IDG.'
        : lang === 'ar'
        ? 'سجل بريدك المؤسسي لاستلام التقارير الرسمية والتحليلات الاستراتيجية وتحديثات البنية التحتية من IDG.'
        : 'Register your institutional email to receive official intelligence briefs and sovereign infrastructure updates.'),
    placeholder:
      lang === 'ku'
        ? 'ئیمەیڵی دامەزراوەیی (name@institution.gov.iq)'
        : lang === 'ar'
        ? 'البريد المؤسسي (name@institution.gov.iq)'
        : 'Institutional email (name@institution.gov.iq)',
    submitBtn:
      lang === 'ku' ? 'بەشداریکردن لە نوێکارییەکان' : lang === 'ar' ? 'الاشتراك في النشرة' : 'Subscribe to Briefs',
    submittingBtn:
      lang === 'ku' ? 'لە تۆمارکردندایە...' : lang === 'ar' ? 'جاري التسجيل...' : 'Subscribing...',
    successTitle:
      t?.footer?.newsletter?.successTitle ||
      (lang === 'ku'
        ? 'بە سەرکەوتوویی تۆمار کرا'
        : lang === 'ar'
        ? 'تم التسجيل بنجاح'
        : 'Subscription Initiated'),
    successMsg:
      lang === 'ku'
        ? 'سوپاس، ئیمەیڵی دامەزراوەییەکەت تۆمار کرا. نامەی دڵنیابوونەوە (Confirmation Email) بۆ ناونیشانەکەت نێردرا.'
        : lang === 'ar'
        ? 'شكراً لتسجيل بريدكم المؤسسي. تم إرسال رسالة التأكيد (Confirmation Email) إلى بريدكم الإلكتروني.'
        : 'Thank you for subscribing. A confirmation email has been dispatched to your inbox.',
    resetBtn:
      lang === 'ku' ? 'تۆمارکردنی ئیمەیڵێکی تر' : lang === 'ar' ? 'تسجيل بريد إضافي' : 'Register another email',
    notice:
      lang === 'ku'
        ? 'تێبینی: ئەم کەناڵە تەنها بۆ ئیمەیڵە فەرمی و دامەزراوەیییەکان بەردەستە و پارێزراوە.'
        : lang === 'ar'
        ? 'ملاحظة: هذه القناة مخصصة ومحمية للاتصالات المؤسسية الرسمية فقط.'
        : 'Note: Channel reserved and secured for official institutional correspondence.',
    invalidEmail:
      t?.footer?.newsletter?.invalidEmail ||
      (lang === 'ku'
        ? 'تکایە ئیمەیڵێکی فەرمی و دروست بنووسە.'
        : lang === 'ar'
        ? 'يرجى إدخال بريد إلكتروني صحيح ورسمي.'
        : 'Please enter a valid institutional email address.'),
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const cleanEmail = email.trim();

    if (!cleanEmail) return;

    if (!emailRegex.test(cleanEmail)) {
      setErrorMsg(content.invalidEmail);
      return;
    }

    setErrorMsg('');
    setIsSubmitting(true);

    try {
      const response = await fetch('/api/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: cleanEmail, locale: lang }),
      });

      const data = await response.json();

      if (!response.ok || !data.success) {
        setErrorMsg(data.error || 'Failed to complete subscription.');
      } else {
        setIsSubscribed(true);
        if (data.message) setServerMsg(data.message);
      }
    } catch {
      setErrorMsg(
        lang === 'ku'
          ? 'هەڵەیەک لە پەیوەندیکردن بە سێرڤەر ڕوویدا، تکایە دووبارە هەوڵبدەرەوە.'
          : lang === 'ar'
          ? 'حدث خطأ في الاتصال بالخادم، يرجى المحاولة مرة أخرى.'
          : 'Network error communicating with subscription service.'
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleReset = () => {
    setEmail('');
    setIsSubscribed(false);
    setErrorMsg('');
    setServerMsg('');
  };

  return (
    <div className="bg-[#0B172E] border border-[#102447] rounded-2xl p-4 sm:p-5 shadow-lg" id="newsletter-signup-widget">
      <div className="flex items-center gap-2 mb-2">
        <Mail className="w-4 h-4 text-blue-400" />
        <h4 className="text-sm font-bold text-white tracking-wide">{content.title}</h4>
      </div>

      <p className="text-xs text-slate-400 mb-4 leading-relaxed">{content.description}</p>

      {isSubscribed ? (
        <div
          className="bg-blue-950/70 border border-blue-800/80 rounded-xl p-4 text-start animate-in fade-in duration-300"
          id="newsletter-success-box"
        >
          <div className="flex items-center gap-2 text-blue-400 font-bold text-xs mb-1.5">
            <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0" />
            <span>{content.successTitle}</span>
          </div>
          <p className="text-xs text-slate-300 leading-relaxed mb-3">
            {serverMsg || content.successMsg}
          </p>
          <Button
            variant="ghost"
            size="sm"
            onClick={handleReset}
            className="text-[11px] font-semibold text-blue-400 hover:text-blue-300 underline underline-offset-2 p-0 h-auto"
            id="newsletter-reset-btn"
          >
            {content.resetBtn}
          </Button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-2.5" id="newsletter-form">
          <div className="relative">
            <input
              id="newsletter-input-email"
              type="email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                if (errorMsg) setErrorMsg('');
              }}
              placeholder={content.placeholder}
              className="w-full bg-[#060D1A] border border-[#102447] focus:border-blue-500 rounded-lg py-2.5 px-3 text-xs sm:text-sm text-white placeholder-slate-500 focus:outline-none transition-colors"
              required
              disabled={isSubmitting}
            />
          </div>

          {errorMsg && (
            <div className="flex items-center gap-1.5 text-xs text-rose-400" id="newsletter-error-msg">
              <AlertCircle className="w-3.5 h-3.5 shrink-0" />
              <span>{errorMsg}</span>
            </div>
          )}

          <button
            type="submit"
            disabled={isSubmitting || !email.trim()}
            className="inline-flex items-center justify-center font-bold transition-colors focus:outline-none focus:ring-2 focus:ring-[#1D5BD8]/40 disabled:opacity-50 disabled:cursor-not-allowed bg-[#1D5BD8] hover:bg-[#193B73] text-white border border-[#1D5BD8]/40 shadow-sm px-5 py-2.5 text-xs rounded-lg gap-2 w-full cursor-pointer"
            id="newsletter-submit-btn"
          >
            {isSubmitting ? (
              <>
                <Loader2 className="w-3.5 h-3.5 animate-spin" />
                <span>{content.submittingBtn}</span>
              </>
            ) : (
              <>
                <span>{content.submitBtn}</span>
                <ArrowIcon className="w-3.5 h-3.5" />
              </>
            )}
          </button>

          <p className="text-[10px] text-slate-400 pt-1 leading-normal">{content.notice}</p>
        </form>
      )}
    </div>
  );
}
