'use client';

import React, { useState } from 'react';
import { TranslationData } from '@/lib/translations';
import { X, Send, CheckCircle2, ShieldCheck } from 'lucide-react';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
  t: TranslationData;
}

export default function ContactModal({ isOpen, onClose, t }: ContactModalProps) {
  const [name, setName] = useState('');
  const [entity, setEntity] = useState('');
  const [sector, setSector] = useState(t.contactModal.sectorOptions[0] || '');
  const [inquiryType, setInquiryType] = useState(t.contactModal.inquiryOptions[0] || '');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !entity.trim() || !message.trim()) return;
    setSubmitted(true);
  };

  const handleReset = () => {
    setName('');
    setEntity('');
    setMessage('');
    setSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm" id="modal-contact">
      <div className="bg-white rounded-2xl max-w-xl w-full p-6 sm:p-8 border border-slate-200 shadow-2xl relative max-h-[90vh] overflow-y-auto">
        <button
          onClick={handleReset}
          className="absolute top-5 left-5 text-slate-400 hover:text-slate-700 p-1.5 rounded-lg hover:bg-slate-100 transition"
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
            <p className="text-slate-600 text-sm max-w-md mx-auto leading-relaxed">
              {t.contactModal.successMsg}
            </p>
            <div className="pt-4">
              <button
                onClick={handleReset}
                className="bg-slate-900 hover:bg-slate-800 text-white font-semibold py-2.5 px-8 rounded-lg text-sm transition"
                id="btn-dismiss-success-modal"
              >
                {t.contactModal.closeBtn}
              </button>
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

            <div className="pt-3 border-t border-slate-200 flex justify-end gap-2">
              <button
                type="button"
                onClick={handleReset}
                className="px-4 py-2 text-xs font-medium text-slate-600 hover:text-slate-900"
              >
                پاشگەزبوونەوە
              </button>
              <button
                type="submit"
                className="inline-flex items-center gap-2 bg-blue-700 hover:bg-blue-800 text-white font-semibold py-2.5 px-6 rounded-lg text-xs sm:text-sm transition shadow-xs"
                id="btn-submit-inquiry"
              >
                <Send className="w-4 h-4" />
                <span>{t.contactModal.submitBtn}</span>
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
