'use client';

import React, { useState, useEffect } from 'react';
import { TranslationData } from '@/lib/translations';
import { useIsMounted } from '@/lib/useIsMounted';
import { CheckCircle2, AlertCircle, Loader2, Send, RotateCcw } from 'lucide-react';
import { InlineStatus } from '@/components/ui/LoadingStates';
import { ValidatedInput, ValidatedTextarea } from '@/components/ui/ValidatedInput';
import Button from '@/components/ui/Button';
import { submitContactInquiry } from '@/infrastructure/actions/contact';

interface ContactSectionProps {
  t?: TranslationData;
  isRtl?: boolean;
}

export default function ContactSection({ t, isRtl = true }: ContactSectionProps) {
  const isMounted = useIsMounted();

  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [provenProblem, setProvenProblem] = useState('');
  const [message, setMessage] = useState('');

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [referenceId, setReferenceId] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  // Determine language content (defaults strictly to Kurdish user request)
  const isKurdish = !t || t.contactSection?.form?.submitBtn === 'ناردنی پەیام';
  const isArabic = t?.contactSection?.form?.submitBtn === 'إرسال الرسالة';

  const content = {
    title: isArabic
      ? 'التواصل الرسمي ✉️'
      : !isKurdish
      ? 'Official Communication ✉️'
      : 'پەیوەندیی فەرمی ✉️',
    desc: isArabic
      ? 'نرحب بالوزارات، الشركات، والمؤسسات البحثية لبدء حوار استراتيجي مدعوم بالأدلة والمشكلات الواقعية.'
      : !isKurdish
      ? 'We welcome ministries, enterprises, and research institutions to initiate an evidence-grounded dialogue based on proven operational challenges.'
      : 'پێشوازی لە وەزارەتەکان، کۆمپانیاکان، و دامەزراوەکانی توێژینەوە دەکەین بۆ دەستپێکردنی گفتوگۆیەک کە پشتئەستوور بێت بە بەڵگە و کێشەی ڕاستەقینە.',
    namePlaceholder: isArabic
      ? 'الاسم الكامل / اسم المؤسسة'
      : !isKurdish
      ? 'Full Name / Institution Name'
      : 'ناوی تەواو / ناوی دامەزراوە',
    emailPlaceholder: isArabic
      ? 'البريد الإلكتروني الرسمي'
      : !isKurdish
      ? 'Official Email Address'
      : 'ئیمەیڵی فەرمی',
    subjectPlaceholder: isArabic
      ? 'موضوع التواصل (الهدف الاستراتيجي)'
      : !isKurdish
      ? 'Subject of Inquiry (Strategic Purpose)'
      : 'بابەتی پەیوەندی (مەبەستی ستراتیژی)',
    strategicLabel: isArabic
      ? 'المشكلة المثبتة أو النتيجة المقاسة 📊'
      : !isKurdish
      ? 'Proven Problem or Measurable Outcome 📊'
      : 'کێشەی سەلمێنراو یان ئەنجامی پێوانەکراو 📊',
    strategicPlaceholder: isArabic
      ? 'ما هي المشكلة التشغيلية التي تسعى لحلها معنا؟'
      : !isKurdish
      ? 'What operational bottleneck do you intend to resolve together?'
      : 'چ کێشەیەکی کارپێکردن هەیە کە دەتەوێت پێکەوە چارەسەری بکەین؟',
    messagePlaceholder: isArabic
      ? 'مزيد من التفاصيل حول طلبك...'
      : !isKurdish
      ? 'Additional operational details regarding your inquiry...'
      : 'وردەکاریی زیاتر سەبارەت بە داواکارییەکەت...',
    submitBtn: isArabic
      ? 'إرسال الرسالة'
      : !isKurdish
      ? 'Send Message'
      : 'ناردنی پەیام',
    successTitle: isArabic
      ? 'تم استلام رسالتكم الرسمية'
      : !isKurdish
      ? 'Message Successfully Received'
      : 'پەیامەکەت بە سەرکەوتوویی گەیشت',
    successDesc: isArabic
      ? 'شكراً لتواصلكم. سيقوم فريق الحوكمة المؤسسية في IDG بدراسة المشكلة المثبتة والتواصل معكم.'
      : !isKurdish
      ? 'Thank you for contacting IDG. Our institutional governance desk will review your inquiry.'
      : 'سوپاس بۆ پەیوەندیکردنت. تیمی حوکمڕانیی IDG بە پشتبەستن بە بەڵگە و کێشەی دیاریکراو وەڵامتان دەداتەوە.',
    resetBtn: isArabic
      ? 'إرسال رسالة أخرى'
      : !isKurdish
      ? 'Send Another Message'
      : 'ناردنی پەیامێکی تر',
    recaptchaDisclaimer: isArabic 
      ? 'هذا الموقع محمي بواسطة reCAPTCHA ويطبق سياسة الخصوصية وشروط الخدمة الخاصة بـ Google.'
      : !isKurdish
      ? 'This site is protected by reCAPTCHA and the Google Privacy Policy and Terms of Service apply.'
      : 'ئەم ماڵپەڕە بە reCAPTCHA پارێزراوە و سیاسەتی تایبەتمەندی و مەرجەکانی بەکارهێنانی Google پەیڕەو دەکات.',
  };

  const [undoCountdown, setUndoCountdown] = useState(0);

  // Restore draft from sessionStorage on mount
  useEffect(() => {
    try {
      const saved = sessionStorage.getItem('idg-contact-draft');
      if (saved) {
        const data = JSON.parse(saved);
        if (data.fullName) setFullName(data.fullName);
        if (data.email) setEmail(data.email);
        if (data.subject) setSubject(data.subject);
        if (data.provenProblem) setProvenProblem(data.provenProblem);
        if (data.message) setMessage(data.message);
      }
    } catch {}
  }, []);

  // Save draft to sessionStorage as user types
  useEffect(() => {
    if (!isSubmitted) {
      try {
        sessionStorage.setItem(
          'idg-contact-draft',
          JSON.stringify({ fullName, email, subject, provenProblem, message })
        );
      } catch {}
    }
  }, [fullName, email, subject, provenProblem, message, isSubmitted]);

  // Handle undo countdown
  useEffect(() => {
    if (isSubmitted && undoCountdown > 0) {
      const timer = setTimeout(() => {
        setUndoCountdown((c) => c - 1);
      }, 1000);
      return () => clearTimeout(timer);
    } else if (isSubmitted && undoCountdown === 0) {
      try {
        sessionStorage.removeItem('idg-contact-draft');
      } catch {}
    }
  }, [isSubmitted, undoCountdown]);

  const isValidEmail = (val: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val.trim());

  const isFormValid =
    fullName.trim().length >= 2 &&
    isValidEmail(email) &&
    subject.trim().length >= 3 &&
    provenProblem.trim().length >= 5 &&
    message.trim().length >= 10;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!isFormValid || isSubmitting) return;

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
                { action: 'CONTACT_SUBMIT' }
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
                { action: 'CONTACT_SUBMIT' }
              );
              resolve(t);
            } catch (error) {
              reject(error);
            }
          });
        });
      } else {
        throw new Error('reCAPTCHA not loaded');
      }
    } catch {
      setErrorMessage('هەڵەیەک لە سیستەمی پاراستندا ڕوویدا. تکایە دووبارە هەوڵبدەرەوە.');
      setIsSubmitting(false);
      return;
    }

    try {
      const formData = new FormData();
      formData.append('name', fullName.trim());
      formData.append('email', email.trim());
      formData.append('subject', subject.trim());
      formData.append('problem', provenProblem.trim());
      formData.append('message', message.trim());
      formData.append('recaptchaToken', token);

      const result = await submitContactInquiry(formData);
      if (result.success && result.referenceId) {
        setReferenceId(result.referenceId);
        setIsSubmitted(true);
        setUndoCountdown(5);
      } else if (result.error) {
        setErrorMessage(result.error);
      }
    } catch {
      setErrorMessage(
        isKurdish
          ? 'هەڵەیەک لە پەیوەندیکردن بە ڕاژەکار ڕوویدا، تکایە دووبارە هەوڵبدەرەوە.'
          : 'Failed to send inquiry to server. Please try again.'
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleUndo = () => {
    setIsSubmitted(false);
    setReferenceId('');
    setUndoCountdown(0);
  };

  const handleReset = () => {
    setFullName('');
    setEmail('');
    setSubject('');
    setProvenProblem('');
    setMessage('');
    setErrorMessage('');
    setIsSubmitted(false);
    setUndoCountdown(0);
    try {
      sessionStorage.removeItem('idg-contact-draft');
    } catch {}
  };

  return (
    <section
      className="py-20 bg-[#060D1A] w-full overflow-hidden text-slate-100"
      dir={isRtl ? 'rtl' : 'ltr'}
      id="contact"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-100 mb-4" id="contact-heading">
            {content.title}
          </h2>
          <p className="text-slate-400 leading-relaxed max-w-2xl mx-auto" id="contact-desc">
            {content.desc}
          </p>
        </div>

        {!isMounted ? (
          <div className="bg-[#0B172E] p-5 sm:p-8 rounded-2xl shadow-xs border border-[#102447] space-y-6 w-full max-w-full overflow-hidden" id="contact-skeleton">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="h-12 bg-[#102447] rounded-lg animate-pulse" />
              <div className="h-12 bg-[#102447] rounded-lg animate-pulse" />
            </div>
            <div className="h-12 bg-[#102447] rounded-lg animate-pulse" />
            <div className="h-20 bg-[#102447]/70 rounded-lg animate-pulse" />
            <div className="h-32 bg-[#102447] rounded-lg animate-pulse" />
            <div className="h-12 w-36 bg-[#193B73] rounded-lg animate-pulse" />
          </div>
        ) : isSubmitted ? (
          <div className="bg-[#0B172E] p-6 sm:p-10 rounded-2xl shadow-xs border border-[#059669]/40 text-center w-full max-w-full overflow-hidden" id="contact-submit-success">
            <div className="w-14 h-14 bg-[#052e16] border border-[#059669]/40 text-[#059669] rounded-full flex items-center justify-center mx-auto mb-4">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold text-slate-100 mb-2">{content.successTitle}</h3>
            <p className="text-slate-400 text-sm mb-4 max-w-lg mx-auto">{content.successDesc}</p>
            <div className="inline-block bg-[#060D1A] border border-[#102447] text-slate-300 px-4 py-2 rounded-lg font-mono text-xs mb-6">
              Reference: {referenceId}
            </div>
            <div className="flex flex-wrap items-center justify-center gap-3">
              {undoCountdown > 0 && (
                <Button
                  type="button"
                  variant="primary"
                  size="md"
                  onClick={handleUndo}
                  className="bg-amber-500 hover:bg-amber-600 text-slate-950 border-amber-400/50 shadow-sm animate-pulse"
                  icon={<RotateCcw className="w-3.5 h-3.5" />}
                  id="btn-contact-undo"
                >
                  <span>
                    {isKurdish
                      ? `پاشگەزبوونەوە لە ناردن (${undoCountdown} چرکە)`
                      : isArabic
                      ? `التراجع عن الإرسال (${undoCountdown} ثوانٍ)`
                      : `Undo submission (${undoCountdown}s)`}
                  </span>
                </Button>
              )}
              <Button
                type="button"
                variant="primary"
                size="md"
                onClick={handleReset}
                id="btn-contact-reset"
              >
                {content.resetBtn}
              </Button>
            </div>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="bg-[#0B172E] p-5 sm:p-8 rounded-2xl shadow-xs border border-[#102447] space-y-6 w-full max-w-full overflow-hidden"
            id="contact-form"
            suppressHydrationWarning
          >
            {isSubmitting && (
              <div className="p-3 rounded-lg bg-amber-500/10 border border-amber-500/30">
                <InlineStatus
                  status="loading"
                  loadingLabel={
                    isKurdish
                      ? 'پەیامەکەت ئامادە دەکرێت و دەنێردرێت بۆ ڕاژەکار...'
                      : isArabic
                      ? 'جاري تشفير وإرسال الرسالة إلى الخادم...'
                      : 'Encrypting and transmitting inquiry to server...'
                  }
                />
              </div>
            )}

            <div className="grid md:grid-cols-2 gap-6">
              <ValidatedInput
                id="contact-input-fullname"
                name="name"
                value={fullName}
                onChange={setFullName}
                placeholder={content.namePlaceholder}
                validate={(v) =>
                  !v.trim()
                    ? (isKurdish ? 'ناو پێویستە' : isArabic ? 'الاسم مطلوب' : 'Name is required')
                    : v.trim().length < 2
                    ? (isKurdish ? 'ناو دەبێت لانیکەم ٢ پیت بێت' : isArabic ? 'الاسم يجب أن يتكون من حرفين على الأقل' : 'Name must be at least 2 characters')
                    : null
                }
                autoComplete="name"
                suppressHydrationWarning
              />
              <ValidatedInput
                id="contact-input-email"
                name="email"
                type="email"
                value={email}
                onChange={setEmail}
                placeholder={content.emailPlaceholder}
                helperTooltip={
                  isKurdish
                    ? 'ئیمەیڵی فەرمیی دامەزراوە یان ڕێکخراو بۆ پەیوەندییە فەرمییەکان (Institutional Email)'
                    : isArabic
                    ? 'البريد الإلكتروني المؤسسي الرسمي للجهة أو الشركة (Institutional Email)'
                    : 'Official institutional or corporate email address'
                }
                validate={(v) =>
                  !v.trim()
                    ? (isKurdish ? 'ئیمەیڵ پێویستە' : isArabic ? 'البريد الإلكتروني مطلوب' : 'Email is required')
                    : !isValidEmail(v)
                    ? (isKurdish ? 'تکایە ئیمەیڵێکی دروست بنووسە' : isArabic ? 'يرجى إدخال بريد إلكتروني صحيح' : 'Please enter a valid email address')
                    : null
                }
                autoComplete="email"
                suppressHydrationWarning
              />
            </div>

            <ValidatedInput
              id="contact-input-subject"
              name="subject"
              value={subject}
              onChange={setSubject}
              placeholder={content.subjectPlaceholder}
              validate={(v) =>
                !v.trim()
                  ? (isKurdish ? 'بابەت پێویستە' : isArabic ? 'الموضوع مطلوب' : 'Subject is required')
                  : v.trim().length < 3
                  ? (isKurdish ? 'بابەت دەبێت لانیکەم ٣ پیت بێت' : isArabic ? 'الموضوع يجب أن يتكون من ٣ أحرف على الأقل' : 'Subject must be at least 3 characters')
                  : null
              }
              suppressHydrationWarning
            />

            {/* The Strategic Field */}
            <div className="bg-[#102447]/60 p-4 rounded-lg border border-[#193B73]" id="contact-strategic-field">
              <label
                htmlFor="contact-input-proven-problem"
                className="block text-sm font-bold text-blue-300 mb-2"
              >
                {content.strategicLabel}
              </label>
              <ValidatedInput
                id="contact-input-proven-problem"
                name="problem"
                value={provenProblem}
                onChange={setProvenProblem}
                placeholder={content.strategicPlaceholder}
                validate={(v) =>
                  !v.trim()
                    ? (isKurdish ? 'کێشەی سەلمێنراو پێویستە' : isArabic ? 'المشكلة المثبتة مطلوبة' : 'Proven problem is required')
                    : v.trim().length < 5
                    ? (isKurdish ? 'دەبێت لانیکەم ٥ پیت بێت' : isArabic ? 'يجب أن يتكون من ٥ أحرف على الأقل' : 'Must be at least 5 characters')
                    : null
                }
                suppressHydrationWarning
              />
            </div>

            <ValidatedTextarea
              id="contact-textarea-message"
              name="message"
              rows={5}
              value={message}
              onChange={setMessage}
              placeholder={content.messagePlaceholder}
              maxLength={500}
              showCharCount={true}
              validate={(v) =>
                !v.trim()
                  ? (isKurdish ? 'پەیام پێویستە' : isArabic ? 'الرسالة مطلوبة' : 'Message is required')
                  : v.trim().length < 10
                  ? (isKurdish ? 'پەیام دەبێت لانیکەم ١٠ پیت بێت' : isArabic ? 'الرسالة يجب أن تتكون من ١٠ أحرف على الأقل' : 'Message must be at least 10 characters')
                  : null
              }
              suppressHydrationWarning
            />

            {errorMessage && (
              <div className="flex items-center gap-2 p-3 bg-[#450a0a] border border-[#DC2626]/40 text-[#DC2626] text-xs rounded-lg" id="contact-error-alert">
                <AlertCircle className="w-4 h-4 shrink-0" />
                <span>{errorMessage}</span>
              </div>
            )}

            <Button
              type="submit"
              variant="primary"
              size="lg"
              loading={isSubmitting}
              disabled={isSubmitting || !isFormValid}
              suppressHydrationWarning
              className="w-full md:w-auto"
              icon={!isSubmitting ? <Send className="w-4 h-4" /> : undefined}
              id="btn-submit-contact"
            >
              {isSubmitting
                ? (isKurdish ? 'لە ناردندایە...' : isArabic ? 'جاري الإرسال...' : 'Sending...')
                : content.submitBtn}
            </Button>

            <p className="text-[10px] text-slate-500 mt-4 leading-relaxed text-center">
              {content.recaptchaDisclaimer}
            </p>
          </form>
        )}
      </div>
    </section>
  );
}
