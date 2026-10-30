'use client';

import React, { useState, useEffect } from 'react';
import { TranslationData } from '@/lib/translations';
import { X, Send, CheckCircle2, ShieldCheck, Loader2, AlertCircle, Copy, Check } from 'lucide-react';
import Button from '@/components/ui/Button';
import { submitContactInquiry } from '@/infrastructure/actions/contact';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
  t: TranslationData;
}

export default function ContactModal({ isOpen, onClose, t }: ContactModalProps) {
  const [name, setName] = useState('');
  const [entity, setEntity] = useState('');
  const [email, setEmail] = useState('');
  const [sector, setSector] = useState(t.contactModal.sectorOptions[0] || '');
  const [inquiryType, setInquiryType] = useState(t.contactModal.inquiryOptions[0] || '');
  const [message, setMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [referenceId, setReferenceId] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setName('');
        setEntity('');
        setEmail('');
        setMessage('');
        setErrorMessage('');
        setReferenceId('');
        setIsSubmitting(false);
        setSubmitted(false);
        onClose();
      }
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !entity.trim() || !email.trim() || !message.trim()) {
      setErrorMessage(
        t.contactSection?.form?.submitBtn === 'إرسال الرسالة'
          ? 'يرجى ملء جميع الحقول المطلوبة بما فيها البريد الإلكتروني.'
          : t.contactSection?.form?.submitBtn === 'Send Message'
          ? 'Please fill in all required fields including your email address.'
          : 'تکایە هەموو خانە پێویستەکان پڕبکەرەوە لەگەڵ ئیمەیڵ.'
      );
      return;
    }

    const isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim());
    if (!isValidEmail) {
      setErrorMessage(
        t.contactSection?.form?.submitBtn === 'إرسال الرسالة'
          ? 'يرجى إدخال بريد إلكتروني صحيح.'
          : t.contactSection?.form?.submitBtn === 'Send Message'
          ? 'Please enter a valid email address.'
          : 'تکایە ناونیشانی ئیمەیڵێکی دروست بنووسە.'
      );
      return;
    }

    setIsSubmitting(true);
    setErrorMessage('');

    let token = '';
    try {
      if (typeof window !== 'undefined' && (window as any).grecaptcha?.enterprise) {
        token = await new Promise<string>((resolve, reject) => {
          (window as any).grecaptcha.enterprise.ready(async () => {
            try {
              const t = await (window as any).grecaptcha.enterprise.execute(
                process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY || '6LcJ3vUtAAAAAGCUj91nNm9PAe08J-Z6y5XPI552',
                { action: 'MODAL_SUBMIT' }
              );
              resolve(t);
            } catch (error) {
              reject(error);
            }
          });
        });
      } else if (typeof window !== 'undefined' && (window as any).grecaptcha) {
        token = await new Promise<string>((resolve, reject) => {
          (window as any).grecaptcha.ready(async () => {
            try {
              const t = await (window as any).grecaptcha.execute(
                process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY || '6LcJ3vUtAAAAAGCUj91nNm9PAe08J-Z6y5XPI552',
                { action: 'MODAL_SUBMIT' }
              );
              resolve(t);
            } catch (error) {
              reject(error);
            }
          });
        });
      }
    } catch {
      // Non-blocking in modal fallback
    }

    try {
      const formData = new FormData();
      formData.append('name', name.trim());
      formData.append('email', email.trim());
      formData.append('subject', `${inquiryType} (${entity.trim()})`);
      formData.append('problem', sector);
      formData.append('message', `[دامەزراوە: ${entity.trim()}]\n[کەرت: ${sector}]\n[بابەت: ${inquiryType}]\n\n${message.trim()}`);
      formData.append('recaptchaToken', token || (process.env.NODE_ENV !== 'production' ? 'TEST_TOKEN' : ''));

      const result = await submitContactInquiry(formData);
      if (result.success) {
        if (result.referenceId) {
          setReferenceId(result.referenceId);
        }
        setSubmitted(true);
      } else {
        setErrorMessage(
          result.error ||
          (t.contactSection?.form?.submitBtn === 'إرسال الرسالة'
            ? 'فشل في إرسال الرسالة. يرجى المحاولة مرة أخرى.'
            : t.contactSection?.form?.submitBtn === 'Send Message'
            ? 'Failed to send message. Please try again.'
            : 'هەڵەیەک لە ناردنی داواکارییەکەدا ڕوویدا. تکایە دووبارە هەوڵ بدەرەوە.')
        );
      }
    } catch {
      setErrorMessage(
        t.contactSection?.form?.submitBtn === 'إرسال الرسالة'
          ? 'حدث خطأ في الاتصال بالخادم. يرجى المحاولة لاحقاً.'
          : t.contactSection?.form?.submitBtn === 'Send Message'
          ? 'Connection error with server. Please try again later.'
          : 'پەیوەندی لەگەڵ ڕاژەکار سەرکەوتوو نەبوو. تکایە دووبارە هەوڵ بدەرەوە.'
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleReset = () => {
    setName('');
    setEntity('');
    setEmail('');
    setMessage('');
    setErrorMessage('');
    setReferenceId('');
    setIsSubmitting(false);
    setSubmitted(false);
    onClose();
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm"
      id="modal-contact"
      onClick={handleReset}
      role="dialog"
      aria-modal="true"
    >
      <div
        className="bg-white rounded-2xl max-w-xl w-full p-6 sm:p-8 border border-slate-200 shadow-2xl relative max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={handleReset}
          className="absolute top-5 end-5 text-slate-400 hover:text-slate-700 p-1.5 rounded-lg hover:bg-slate-100 transition"
          aria-label="Close"
          id="btn-close-contact-modal"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="text-center py-8 space-y-4">
            <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-bold text-slate-900">
              {t.contactModal.successTitle}
            </h3>
            {referenceId && (
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-emerald-50 text-emerald-800 rounded-lg text-xs font-mono font-bold border border-emerald-200 shadow-xs">
                <span>کۆدی بەدواداچوون:</span>
                <span className="text-emerald-950 font-black">{referenceId}</span>
              </div>
            )}
            <p className="text-slate-600 text-sm max-w-md mx-auto leading-relaxed">
              {t.contactModal.successMsg}
            </p>
            <div className="pt-4">
              <Button
                variant="primary"
                size="md"
                onClick={handleReset}
                id="btn-dismiss-success-modal"
              >
                {t.contactModal.closeBtn}
              </Button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4" suppressHydrationWarning>
            <div>
              <div className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-800 bg-blue-50 px-2.5 py-1 rounded border border-blue-200 mb-2">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>Iraq Digital Gateway Institutional Channel</span>
              </div>
              <h3 className="text-2xl font-bold text-slate-900">
                {t.contactModal.title}
              </h3>
              <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                {t.contactModal.subtitle}
              </p>
            </div>

            <div className="space-y-3 pt-2 text-sm">
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1" htmlFor="contact-name">
                  {t.contactModal.nameLabel} *
                </label>
                <input
                  id="contact-name"
                  type="text"
                  required
                  autoComplete="name"
                  spellCheck={false}
                  suppressHydrationWarning
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 focus:outline-hidden focus:ring-2 focus:ring-blue-600 text-slate-900 text-sm"
                  placeholder="ناوی فەرمی و ناونیشانی وەزیفی"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1" htmlFor="contact-entity">
                    {t.contactModal.entityLabel} *
                  </label>
                  <input
                    id="contact-entity"
                    type="text"
                    required
                    autoComplete="organization"
                    spellCheck={false}
                    suppressHydrationWarning
                    value={entity}
                    onChange={(e) => setEntity(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 focus:outline-hidden focus:ring-2 focus:ring-blue-600 text-slate-900 text-sm"
                    placeholder="وەزارەت / دەستە / دامەزراوە"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1" htmlFor="contact-email">
                    {t.contactModal.emailLabel || 'ئیمەیڵی فەرمی بۆ پەیوەندی'} *
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    required
                    autoComplete="email"
                    spellCheck={false}
                    suppressHydrationWarning
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 focus:outline-hidden focus:ring-2 focus:ring-blue-600 text-slate-900 text-sm"
                    placeholder="name@organization.gov.iq"
                    dir="ltr"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1" htmlFor="contact-sector">
                    {t.contactModal.sectorLabel}
                  </label>
                  <select
                    id="contact-sector"
                    suppressHydrationWarning
                    value={sector}
                    onChange={(e) => setSector(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 focus:outline-hidden focus:ring-2 focus:ring-blue-600 text-slate-900 text-xs sm:text-sm bg-white"
                  >
                    {t.contactModal.sectorOptions.map((opt) => (
                      <option key={opt} value={opt}>
                        {opt}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1" htmlFor="contact-inquiry">
                    {t.contactModal.inquiryTypeLabel}
                  </label>
                  <select
                    id="contact-inquiry"
                    suppressHydrationWarning
                    value={inquiryType}
                    onChange={(e) => setInquiryType(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 focus:outline-hidden focus:ring-2 focus:ring-blue-600 text-slate-900 text-xs sm:text-sm bg-white"
                  >
                    {t.contactModal.inquiryOptions.map((opt) => (
                      <option key={opt} value={opt}>
                        {opt}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1" htmlFor="contact-message">
                  {t.contactModal.messageLabel} *
                </label>
                <textarea
                  id="contact-message"
                  required
                  rows={4}
                  spellCheck={false}
                  suppressHydrationWarning
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 focus:outline-hidden focus:ring-2 focus:ring-blue-600 text-slate-900 text-sm"
                  placeholder="ڕوونکردنەوەی کێشە سەلمێنراوەکە و ئامانجی دامەزراوەیی پێویست..."
                />
              </div>
            </div>

            <p className="text-[10px] text-slate-500 my-2 leading-relaxed text-center" id="modal-recaptcha-note">
              {t.contactSection?.form?.submitBtn === 'إرسال الرسالة'
                ? 'هذا الموقع محمي بواسطة reCAPTCHA ويطبق سياسة الخصوصية وشروط الخدمة الخاصة بـ Google.'
                : t.contactSection?.form?.submitBtn === 'Send Message'
                ? 'This site is protected by reCAPTCHA and the Google Privacy Policy and Terms of Service apply.'
                : 'ئەم ماڵپەڕە بە reCAPTCHA پارێزراوە و سیاسەتی تایبەتمەندی و مەرجەکانی بەکارهێنانی Google پەیڕەو دەکات.'}
            </p>

            {errorMessage && (
              <div className="flex items-center gap-2 p-3 bg-red-50 border border-red-200 text-red-600 text-xs rounded-lg mb-4" id="modal-contact-error">
                <AlertCircle className="w-4 h-4 shrink-0" />
                <span>{errorMessage}</span>
              </div>
            )}

            <div className="pt-3 border-t border-slate-200 flex justify-end gap-2">
              <Button
                type="button"
                variant="ghost"
                size="sm"
                onClick={handleReset}
                className="text-slate-600 hover:text-slate-900"
              >
                پاشگەزبوونەوە
              </Button>
              <Button
                type="submit"
                variant="primary"
                size="md"
                loading={isSubmitting}
                disabled={isSubmitting}
                icon={!isSubmitting ? <Send className="w-4 h-4" /> : undefined}
                id="btn-submit-inquiry"
              >
                {isSubmitting ? 'تکایە چاوەڕێبە...' : t.contactModal.submitBtn}
              </Button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
