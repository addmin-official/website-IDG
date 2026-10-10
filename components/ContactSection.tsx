'use client';

import React, { useState } from 'react';
import { TranslationData } from '@/lib/translations';
import { useIsMounted } from '@/lib/useIsMounted';
import { CheckCircle2, AlertCircle } from 'lucide-react';
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
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName.trim() || !email.trim()) return;

    setIsSubmitting(true);
    setErrorMessage('');

    try {
      const formData = new FormData();
      formData.append('name', fullName.trim());
      formData.append('email', email.trim());
      formData.append('subject', subject.trim());
      formData.append('problem', provenProblem.trim());
      formData.append('message', message.trim());

      const result = await submitContactInquiry(formData);
      if (result.success && result.referenceId) {
        setReferenceId(result.referenceId);
        setIsSubmitted(true);
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

  const handleReset = () => {
    setFullName('');
    setEmail('');
    setSubject('');
    setProvenProblem('');
    setMessage('');
    setErrorMessage('');
    setIsSubmitted(false);
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
            <div>
              <button
                type="button"
                onClick={handleReset}
                className="px-6 py-2.5 bg-[#1D5BD8] hover:bg-blue-600 text-white font-bold rounded-lg text-xs transition cursor-pointer"
                id="btn-contact-reset"
              >
                {content.resetBtn}
              </button>
            </div>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="bg-[#0B172E] p-5 sm:p-8 rounded-2xl shadow-xs border border-[#102447] space-y-6 w-full max-w-full overflow-hidden"
            id="contact-form"
            suppressHydrationWarning
          >
            <div className="grid md:grid-cols-2 gap-6">
              <input
                type="text"
                name="name"
                required
                autoComplete="name"
                spellCheck={false}
                suppressHydrationWarning
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                placeholder={content.namePlaceholder}
                className="w-full p-3 rounded-lg border border-[#102447] bg-[#0B172E] text-slate-100 placeholder-slate-500 focus:bg-[#102447] focus:border-[#1D5BD8] focus:ring-1 focus:ring-[#1D5BD8] outline-hidden text-sm"
                id="contact-input-fullname"
              />
              <input
                type="email"
                name="email"
                required
                autoComplete="email"
                spellCheck={false}
                suppressHydrationWarning
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder={content.emailPlaceholder}
                className="w-full p-3 rounded-lg border border-[#102447] bg-[#0B172E] text-slate-100 placeholder-slate-500 focus:bg-[#102447] focus:border-[#1D5BD8] focus:ring-1 focus:ring-[#1D5BD8] outline-hidden text-sm"
                id="contact-input-email"
              />
            </div>

            <input
              type="text"
              name="subject"
              required
              autoComplete="off"
              spellCheck={false}
              suppressHydrationWarning
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              placeholder={content.subjectPlaceholder}
              className="w-full p-3 rounded-lg border border-[#102447] bg-[#0B172E] text-slate-100 placeholder-slate-500 focus:bg-[#102447] focus:border-[#1D5BD8] focus:ring-1 focus:ring-[#1D5BD8] outline-hidden text-sm"
              id="contact-input-subject"
            />

            {/* The Strategic Field */}
            <div className="bg-[#102447]/60 p-4 rounded-lg border border-[#193B73]" id="contact-strategic-field">
              <label
                htmlFor="contact-input-proven-problem"
                className="block text-sm font-bold text-blue-300 mb-2"
              >
                {content.strategicLabel}
              </label>
              <input
                type="text"
                name="problem"
                required
                autoComplete="off"
                spellCheck={false}
                suppressHydrationWarning
                id="contact-input-proven-problem"
                value={provenProblem}
                onChange={(e) => setProvenProblem(e.target.value)}
                placeholder={content.strategicPlaceholder}
                className="w-full p-3 rounded-lg border border-[#102447] bg-[#0B172E] text-slate-100 placeholder-slate-500 focus:bg-[#102447] focus:border-[#1D5BD8] focus:ring-1 focus:ring-[#1D5BD8] outline-hidden text-sm"
              />
            </div>

            <textarea
              name="message"
              required
              rows={5}
              spellCheck={false}
              suppressHydrationWarning
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder={content.messagePlaceholder}
              className="w-full p-3 rounded-lg border border-[#102447] bg-[#0B172E] text-slate-100 placeholder-slate-500 focus:bg-[#102447] focus:border-[#1D5BD8] focus:ring-1 focus:ring-[#1D5BD8] outline-hidden text-sm leading-relaxed"
              id="contact-textarea-message"
            />

            {errorMessage && (
              <div className="flex items-center gap-2 p-3 bg-[#450a0a] border border-[#DC2626]/40 text-[#DC2626] text-xs rounded-lg" id="contact-error-alert">
                <AlertCircle className="w-4 h-4 shrink-0" />
                <span>{errorMessage}</span>
              </div>
            )}

            <button
              type="submit"
              disabled={isSubmitting}
              suppressHydrationWarning
              className="bg-[#1D5BD8] text-white font-bold py-3 px-8 rounded-lg hover:bg-blue-600 transition w-full md:w-auto cursor-pointer disabled:opacity-50 text-sm shadow-sm"
              id="btn-submit-contact"
            >
              {isSubmitting ? '...' : content.submitBtn}
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
