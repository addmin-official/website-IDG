'use client';

import React, { useState } from 'react';
import { TranslationData } from '@/lib/translations';
import { useIsMounted } from '@/lib/useIsMounted';
import {
  Mail,
  MapPin,
  Clock,
  Send,
  CheckCircle2,
  Building2,
  ShieldCheck,
  ArrowRight,
  ArrowLeft,
  Sparkles,
} from 'lucide-react';

interface ContactSectionProps {
  t: TranslationData;
  isRtl?: boolean;
}

export default function ContactSection({ t, isRtl = true }: ContactSectionProps) {
  const cs = t.contactSection;
  const ArrowIcon = isRtl ? ArrowLeft : ArrowRight;

  const isMounted = useIsMounted();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [confirmationCode, setConfirmationCode] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !email.trim() || !message.trim()) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setConfirmationCode(`IDG-INQ-${Math.floor(100000 + Math.random() * 900000)}`);
    }, 1000);
  };

  const handleReset = () => {
    setName('');
    setEmail('');
    setSubject('');
    setMessage('');
    setIsSubmitted(false);
  };

  return (
    <section className="py-20 md:py-28 bg-white border-b border-slate-200" id="contact">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-4xl mx-auto text-center mb-16">
          <div
            className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-800 bg-blue-50 px-3 py-1.5 rounded-full border border-blue-200 mb-4"
            id="contact-badge"
          >
            <ShieldCheck className="w-3.5 h-3.5 text-blue-700" />
            <span>{cs.badge}</span>
          </div>
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight mb-4"
            id="contact-heading"
          >
            {cs.heading}
          </h2>
          <p
            className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed"
            id="contact-subheading"
          >
            {cs.subheading}
          </p>
        </div>

        {/* 2-Column Layout: Left (Introductory Context & Channels) + Right (The Form) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start max-w-6xl mx-auto">
          
          {/* Institutional Info & Brief Introductory Text */}
          <div className="lg:col-span-5 space-y-6" id="contact-info-panel">
            <div className="bg-slate-900 text-white rounded-3xl p-8 sm:p-10 border border-slate-800 shadow-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-48 h-48 bg-blue-600/10 rounded-full blur-2xl pointer-events-none" />
              
              <span className="text-xs font-bold text-blue-400 uppercase tracking-widest block mb-2">
                Official Engagement
              </span>
              <h3 className="text-2xl font-bold text-white mb-4 leading-snug">
                {cs.channelsTitle}
              </h3>
              
              {/* Introductory text explaining that users can reach out for inquiries or partnership opportunities */}
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-6" id="contact-intro-text">
                {cs.introText}
              </p>

              <div className="p-4 bg-slate-800/80 rounded-xl border border-slate-700/80 text-xs text-slate-300 mb-8" id="contact-partnership-note">
                <span className="font-bold text-blue-300 block mb-1">Partnership Criterion:</span>
                {cs.partnershipNote}
              </div>

              {/* Direct Details */}
              <div className="space-y-4 pt-4 border-t border-slate-800 text-xs">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-blue-900/50 text-blue-400 flex items-center justify-center shrink-0 mt-0.5">
                    <Building2 className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-slate-400 block font-medium">{cs.hqLabel}</span>
                    <span className="font-semibold text-slate-100">{cs.hqValue}</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-blue-900/50 text-blue-400 flex items-center justify-center shrink-0 mt-0.5">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-slate-400 block font-medium">{cs.emailLabel}</span>
                    <a href="mailto:contact@idg.iq" className="font-semibold text-blue-300 hover:text-blue-200 transition font-mono">
                      {cs.emailValue}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-blue-900/50 text-blue-400 flex items-center justify-center shrink-0 mt-0.5">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-slate-400 block font-medium">{cs.hoursLabel}</span>
                    <span className="font-semibold text-slate-100">{cs.hoursValue}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* The Contact Us Form */}
          <div className="lg:col-span-7" id="contact-form-panel">
            <div className="bg-slate-50 rounded-3xl p-8 sm:p-10 border border-slate-200 shadow-sm">
              
              {!isMounted ? (
                <div className="space-y-5 py-4" id="contact-form-skeleton">
                  <div className="h-12 bg-slate-200/70 rounded-xl animate-pulse" />
                  <div className="h-12 bg-slate-200/70 rounded-xl animate-pulse" />
                  <div className="h-12 bg-slate-200/70 rounded-xl animate-pulse" />
                  <div className="h-28 bg-slate-200/70 rounded-xl animate-pulse" />
                  <div className="h-12 bg-blue-200/60 rounded-xl animate-pulse" />
                </div>
              ) : isSubmitted ? (
                <div className="bg-white rounded-2xl p-8 border border-emerald-200 text-center" id="contact-submit-success">
                  <div className="w-14 h-14 bg-emerald-100 text-emerald-700 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-2" id="contact-success-title">
                    {cs.form.successTitle}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed max-w-md mx-auto mb-4" id="contact-success-msg">
                    {cs.form.successMsg}
                  </p>
                  <div className="inline-block bg-slate-100 border border-slate-200 rounded-lg px-3 py-1.5 text-xs font-mono text-slate-800 font-bold mb-6">
                    Inquiry Reference: {confirmationCode}
                  </div>
                  <div>
                    <button
                      type="button"
                      onClick={handleReset}
                      className="px-6 py-2.5 bg-blue-800 hover:bg-blue-700 text-white rounded-xl text-xs font-bold transition cursor-pointer"
                      id="btn-contact-reset"
                    >
                      {cs.form.resetBtn}
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5" id="form-contact-inquiry" suppressHydrationWarning>
                  
                  {/* Name Field */}
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1.5" htmlFor="input-contact-name">
                      {cs.form.nameLabel} <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="input-contact-name"
                      type="text"
                      required
                      suppressHydrationWarning
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder={cs.form.namePlaceholder}
                      className="w-full bg-white border border-slate-300 rounded-xl px-4 py-3 text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-600 transition"
                    />
                  </div>

                  {/* Email Field */}
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1.5" htmlFor="input-contact-email">
                      {cs.form.emailLabel} <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="input-contact-email"
                      type="email"
                      required
                      suppressHydrationWarning
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder={cs.form.emailPlaceholder}
                      className="w-full bg-white border border-slate-300 rounded-xl px-4 py-3 text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-600 transition"
                    />
                  </div>

                  {/* Subject Field */}
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1.5" htmlFor="input-contact-subject">
                      {cs.form.subjectLabel} <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="input-contact-subject"
                      type="text"
                      required
                      suppressHydrationWarning
                      value={subject}
                      onChange={(e) => setSubject(e.target.value)}
                      placeholder={cs.form.subjectPlaceholder}
                      className="w-full bg-white border border-slate-300 rounded-xl px-4 py-3 text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-600 transition"
                    />
                  </div>

                  {/* Message Field */}
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1.5" htmlFor="textarea-contact-message">
                      {cs.form.messageLabel} <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      id="textarea-contact-message"
                      rows={5}
                      required
                      suppressHydrationWarning
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder={cs.form.messagePlaceholder}
                      className="w-full bg-white border border-slate-300 rounded-xl p-4 text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-600 transition resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      suppressHydrationWarning
                      className="w-full py-3.5 px-6 bg-blue-800 hover:bg-blue-700 text-white rounded-xl text-sm font-bold transition flex items-center justify-center gap-2 cursor-pointer shadow-sm disabled:opacity-50"
                      id="btn-submit-contact-form"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                          <span>{cs.form.submittingBtn}</span>
                        </>
                      ) : (
                        <>
                          <span>{cs.form.submitBtn}</span>
                          <ArrowIcon className="w-4 h-4" />
                        </>
                      )}
                    </button>
                  </div>

                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
