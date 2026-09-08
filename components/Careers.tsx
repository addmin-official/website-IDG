'use client';

import React, { useState, useRef } from 'react';
import { TranslationData } from '@/lib/translations';
import { useIsMounted } from '@/lib/useIsMounted';
import {
  Briefcase,
  Building2,
  MapPin,
  Clock,
  ChevronDown,
  ChevronUp,
  Upload,
  FileCheck,
  CheckCircle2,
  Sparkles,
  ArrowRight,
  ArrowLeft,
  X,
  FileText,
} from 'lucide-react';

interface CareersProps {
  t: TranslationData;
  isRtl?: boolean;
}

export default function Careers({ t, isRtl = true }: CareersProps) {
  const c = t.careers;
  const ArrowIcon = isRtl ? ArrowLeft : ArrowRight;

  const isMounted = useIsMounted();

  // Selected or expanded job opening
  const [expandedJobId, setExpandedJobId] = useState<string | null>(c.openings[0]?.id || null);

  // Application Form State
  const [selectedPosition, setSelectedPosition] = useState<string>(c.openings[0]?.title || 'General');
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [portfolioUrl, setPortfolioUrl] = useState('');
  const [coverNote, setCoverNote] = useState('');
  const [resumeFile, setResumeFile] = useState<File | null>(null);

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submissionId, setSubmissionId] = useState<string>('');

  const formRef = useRef<HTMLDivElement | null>(null);
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const handleSelectJobToApply = (jobTitle: string) => {
    setSelectedPosition(jobTitle);
    if (formRef.current) {
      formRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setResumeFile(e.target.files[0]);
    }
  };

  const handleFileDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      setResumeFile(e.dataTransfer.files[0]);
    }
  };

  const handleSubmitApplication = (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName.trim() || !email.trim()) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setSubmissionId(`IDG-APP-${Math.floor(100000 + Math.random() * 900000)}`);
    }, 1200);
  };

  const handleResetForm = () => {
    setFullName('');
    setEmail('');
    setPhone('');
    setPortfolioUrl('');
    setCoverNote('');
    setResumeFile(null);
    setIsSubmitted(false);
  };

  return (
    <section className="py-20 md:py-28 bg-slate-50 border-b border-slate-200" id="careers">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-4xl mx-auto text-center mb-16 md:mb-20">
          <div
            className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-800 bg-blue-100/80 px-3 py-1.5 rounded-full border border-blue-200 mb-4"
            id="careers-badge"
          >
            <Briefcase className="w-3.5 h-3.5 text-blue-700" />
            <span>{c.badge}</span>
          </div>
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight mb-6"
            id="careers-heading"
          >
            {c.heading}
          </h2>
          <p
            className="text-base sm:text-lg lg:text-xl text-slate-600 leading-relaxed font-normal max-w-3xl mx-auto"
            id="careers-subheading"
          >
            {c.subheading}
          </p>
        </div>

        {/* Culture Section */}
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-200 shadow-sm mb-16 md:mb-24" id="careers-culture-card">
          <div className="max-w-3xl mb-10">
            <span className="text-xs font-bold text-blue-700 uppercase tracking-widest block mb-2">
              Engineering Culture
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-4" id="careers-culture-title">
              {c.cultureTitle}
            </h3>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed" id="careers-culture-desc">
              {c.cultureDesc}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6" id="careers-pillars-grid">
            {c.culturePillars.map((pillar, idx) => (
              <div
                key={idx}
                className="bg-slate-50 rounded-2xl p-6 border border-slate-200/90 flex flex-col justify-between hover:border-slate-300 transition"
                id={`career-pillar-${idx}`}
              >
                <div>
                  <div className="w-8 h-8 rounded-lg bg-blue-50 text-blue-800 flex items-center justify-center font-bold text-xs mb-4">
                    0{idx + 1}
                  </div>
                  <h4 className="text-base font-bold text-slate-900 mb-2 leading-snug" id={`career-pillar-title-${idx}`}>
                    {pillar.title}
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed" id={`career-pillar-desc-${idx}`}>
                    {pillar.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Current Job Openings */}
        <div className="mb-20 md:mb-28" id="careers-openings-section">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
            <div>
              <div className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">
                <Building2 className="w-4 h-4 text-blue-600" />
                <span>Active Requisitions</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900" id="careers-openings-title">
                {c.openingsTitle}
              </h3>
              <p className="text-sm text-slate-600 mt-1" id="careers-openings-subheading">
                {c.openingsSubheading}
              </p>
            </div>
            <div className="text-xs text-slate-500 font-semibold bg-white border border-slate-200 px-3.5 py-2 rounded-xl shrink-0">
              {c.openings.length} Positions Available
            </div>
          </div>

          <div className="space-y-4" id="careers-openings-list">
            {c.openings.map((job) => {
              const isExpanded = expandedJobId === job.id;
              return (
                <div
                  key={job.id}
                  className={`bg-white rounded-2xl border transition-all duration-200 overflow-hidden ${
                    isExpanded ? 'border-blue-400 shadow-md ring-1 ring-blue-200' : 'border-slate-200 hover:border-slate-300 shadow-sm'
                  }`}
                  id={`job-item-${job.id}`}
                >
                  {/* Job Header Summary */}
                  <div
                    className="p-6 sm:p-7 flex flex-col md:flex-row md:items-center justify-between gap-4 cursor-pointer select-none"
                    onClick={() => setExpandedJobId(isExpanded ? null : job.id)}
                    id={`job-header-${job.id}`}
                  >
                    <div className="space-y-2">
                      <div className="flex flex-wrap items-center gap-2">
                        <span className="text-xs font-bold text-blue-800 bg-blue-50 px-2.5 py-0.5 rounded-md border border-blue-100">
                          {job.dept}
                        </span>
                        <span className="text-xs text-slate-500 flex items-center gap-1">
                          <MapPin className="w-3.5 h-3.5 text-slate-400" />
                          {job.location}
                        </span>
                        <span className="text-xs text-slate-500 flex items-center gap-1">
                          <Clock className="w-3.5 h-3.5 text-slate-400" />
                          {job.type}
                        </span>
                      </div>
                      <h4 className="text-lg sm:text-xl font-bold text-slate-900 leading-snug">
                        {job.title}
                      </h4>
                      <p className="text-xs sm:text-sm text-slate-600 max-w-3xl line-clamp-2">
                        {job.summary}
                      </p>
                    </div>

                    <div className="flex items-center gap-3 shrink-0 pt-2 md:pt-0">
                      <button
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          handleSelectJobToApply(job.title);
                        }}
                        className="px-4 py-2 bg-blue-800 hover:bg-blue-700 text-white rounded-xl text-xs font-bold transition flex items-center gap-1.5 cursor-pointer"
                        id={`btn-apply-job-${job.id}`}
                      >
                        <span>Apply</span>
                        <ArrowIcon className="w-3.5 h-3.5" />
                      </button>
                      <button
                        type="button"
                        className="p-2 text-slate-400 hover:text-slate-600 rounded-lg hover:bg-slate-100 transition"
                        aria-label="Toggle details"
                        id={`btn-toggle-job-${job.id}`}
                      >
                        {isExpanded ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                      </button>
                    </div>
                  </div>

                  {/* Expanded Details */}
                  {isExpanded && (
                    <div className="px-6 pb-7 sm:px-7 pt-2 border-t border-slate-100 bg-slate-50/50" id={`job-details-${job.id}`}>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
                        {/* Responsibilities */}
                        <div>
                          <h5 className="text-xs font-bold uppercase tracking-wider text-slate-700 mb-3 flex items-center gap-1.5">
                            <Sparkles className="w-3.5 h-3.5 text-blue-600" />
                            <span>Key Responsibilities</span>
                          </h5>
                          <ul className="space-y-2">
                            {job.responsibilities.map((resp, rIdx) => (
                              <li key={rIdx} className="text-xs sm:text-sm text-slate-600 flex items-start gap-2">
                                <span className="w-1.5 h-1.5 rounded-full bg-blue-600 mt-1.5 shrink-0" />
                                <span>{resp}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Requirements */}
                        <div>
                          <h5 className="text-xs font-bold uppercase tracking-wider text-slate-700 mb-3 flex items-center gap-1.5">
                            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                            <span>Qualifications & Expertise</span>
                          </h5>
                          <ul className="space-y-2">
                            {job.requirements.map((req, qIdx) => (
                              <li key={qIdx} className="text-xs sm:text-sm text-slate-600 flex items-start gap-2">
                                <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 mt-1.5 shrink-0" />
                                <span>{req}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>

                      <div className="mt-6 pt-4 border-t border-slate-200 flex items-center justify-between">
                        <span className="text-xs text-slate-500">
                          IDG adheres to merit-based national engineering excellence.
                        </span>
                        <button
                          type="button"
                          onClick={() => handleSelectJobToApply(job.title)}
                          className="text-xs font-bold text-blue-800 hover:text-blue-900 inline-flex items-center gap-1 underline underline-offset-4 cursor-pointer"
                          id={`link-apply-job-${job.id}`}
                        >
                          <span>Open application form for this position</span>
                          <ArrowIcon className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Application Submission Form */}
        <div ref={formRef} className="max-w-3xl mx-auto" id="careers-apply-form-container">
          <div className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-200 shadow-md">
            
            <div className="text-center mb-8">
              <span className="text-xs font-bold text-blue-800 uppercase tracking-widest bg-blue-50 px-3 py-1 rounded-md border border-blue-100">
                Application Gateway
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-3 mb-2" id="careers-apply-title">
                {c.applyTitle}
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 max-w-xl mx-auto" id="careers-apply-desc">
                {c.applyDesc}
              </p>
            </div>

            {!isMounted ? (
              <div className="space-y-5 py-4" id="careers-form-skeleton">
                <div className="h-12 bg-slate-100 rounded-xl animate-pulse" />
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="h-10 bg-slate-100 rounded-xl animate-pulse" />
                  <div className="h-10 bg-slate-100 rounded-xl animate-pulse" />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="h-10 bg-slate-100 rounded-xl animate-pulse" />
                  <div className="h-10 bg-slate-100 rounded-xl animate-pulse" />
                </div>
                <div className="h-24 bg-slate-100 rounded-xl animate-pulse" />
                <div className="h-24 bg-slate-100 rounded-xl animate-pulse" />
                <div className="h-12 bg-slate-200 rounded-xl animate-pulse" />
              </div>
            ) : isSubmitted ? (
              <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-8 text-center" id="career-submit-success">
                <div className="w-14 h-14 bg-emerald-100 text-emerald-700 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h4 className="text-xl font-bold text-emerald-950 mb-2" id="career-success-title">
                  {c.form.successTitle}
                </h4>
                <p className="text-xs sm:text-sm text-emerald-800 leading-relaxed max-w-md mx-auto mb-4" id="career-success-msg">
                  {c.form.successMsg}
                </p>
                <div className="inline-block bg-white border border-emerald-200 rounded-lg px-3 py-1.5 text-xs font-mono text-emerald-900 font-bold mb-6">
                  Reference: {submissionId}
                </div>
                <div>
                  <button
                    type="button"
                    onClick={handleResetForm}
                    className="px-5 py-2.5 bg-emerald-700 hover:bg-emerald-800 text-white rounded-xl text-xs font-bold transition cursor-pointer"
                    id="btn-career-reset"
                  >
                    {c.form.resetBtn}
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmitApplication} className="space-y-5" id="form-career-application" suppressHydrationWarning>
                
                {/* Target Position Selection */}
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1.5" htmlFor="select-position">
                    {c.form.positionLabel}
                  </label>
                  <select
                    id="select-position"
                    suppressHydrationWarning
                    value={selectedPosition}
                    onChange={(e) => setSelectedPosition(e.target.value)}
                    className="w-full bg-slate-50 border border-slate-300 rounded-xl px-4 py-3 text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:bg-white transition"
                  >
                    <option value="General">{c.form.generalPositionOption}</option>
                    {c.openings.map((job) => (
                      <option key={job.id} value={job.title}>
                        {job.title} ({job.dept})
                      </option>
                    ))}
                  </select>
                </div>

                {/* Name and Email */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1.5" htmlFor="input-applicant-name">
                      {c.form.fullNameLabel} <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="input-applicant-name"
                      type="text"
                      required
                      suppressHydrationWarning
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      placeholder={c.form.fullNamePlaceholder}
                      className="w-full bg-slate-50 border border-slate-300 rounded-xl px-4 py-2.5 text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:bg-white transition"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1.5" htmlFor="input-applicant-email">
                      {c.form.emailLabel} <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="input-applicant-email"
                      type="email"
                      required
                      suppressHydrationWarning
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder={c.form.emailPlaceholder}
                      className="w-full bg-slate-50 border border-slate-300 rounded-xl px-4 py-2.5 text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:bg-white transition"
                    />
                  </div>
                </div>

                {/* Phone & Portfolio */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1.5" htmlFor="input-applicant-phone">
                      {c.form.phoneLabel}
                    </label>
                    <input
                      id="input-applicant-phone"
                      type="tel"
                      suppressHydrationWarning
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder={c.form.phonePlaceholder}
                      className="w-full bg-slate-50 border border-slate-300 rounded-xl px-4 py-2.5 text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:bg-white transition font-mono text-xs"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1.5" htmlFor="input-applicant-portfolio">
                      {c.form.portfolioLabel}
                    </label>
                    <input
                      id="input-applicant-portfolio"
                      type="url"
                      suppressHydrationWarning
                      value={portfolioUrl}
                      onChange={(e) => setPortfolioUrl(e.target.value)}
                      placeholder={c.form.portfolioPlaceholder}
                      className="w-full bg-slate-50 border border-slate-300 rounded-xl px-4 py-2.5 text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:bg-white transition text-xs"
                    />
                  </div>
                </div>

                {/* Resume Upload Box (Supporting Click & Drag and Drop) */}
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1.5">
                    {c.form.resumeLabel} <span className="text-red-500">*</span>
                  </label>
                  <input
                    ref={fileInputRef}
                    id="input-resume-file"
                    type="file"
                    suppressHydrationWarning
                    accept=".pdf,.doc,.docx"
                    onChange={handleFileChange}
                    className="hidden"
                  />

                  {resumeFile ? (
                    <div className="bg-blue-50/70 border border-blue-200 rounded-xl p-4 flex items-center justify-between" id="resume-selected-preview">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-lg bg-blue-600 text-white flex items-center justify-center shrink-0">
                          <FileText className="w-5 h-5" />
                        </div>
                        <div>
                          <div className="text-xs font-bold text-slate-900 truncate max-w-[200px] sm:max-w-xs">
                            {resumeFile.name}
                          </div>
                          <div className="text-[11px] text-slate-500 font-mono">
                            {(resumeFile.size / 1024).toFixed(1)} KB
                          </div>
                        </div>
                      </div>
                      <button
                        type="button"
                        onClick={() => setResumeFile(null)}
                        className="p-1.5 text-slate-400 hover:text-red-600 rounded-lg hover:bg-slate-100 transition"
                        title="Remove file"
                        id="btn-remove-resume"
                      >
                        <X className="w-4 h-4" />
                      </button>
                    </div>
                  ) : (
                    <div
                      onDragOver={(e) => e.preventDefault()}
                      onDrop={handleFileDrop}
                      onClick={() => fileInputRef.current?.click()}
                      className="border-2 border-dashed border-slate-300 hover:border-blue-500 bg-slate-50/60 hover:bg-blue-50/30 rounded-2xl p-6 text-center cursor-pointer transition select-none"
                      id="resume-dropzone"
                    >
                      <div className="w-10 h-10 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center mx-auto mb-2">
                        <Upload className="w-5 h-5" />
                      </div>
                      <div className="text-xs font-bold text-slate-800 mb-1">
                        Click to browse or drag and drop your resume here
                      </div>
                      <div className="text-[11px] text-slate-500">
                        {c.form.resumePlaceholder}
                      </div>
                    </div>
                  )}
                </div>

                {/* Cover Note / Motivation */}
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1.5" htmlFor="textarea-cover-note">
                    {c.form.coverNoteLabel}
                  </label>
                  <textarea
                    id="textarea-cover-note"
                    rows={4}
                    suppressHydrationWarning
                    value={coverNote}
                    onChange={(e) => setCoverNote(e.target.value)}
                    placeholder={c.form.coverNotePlaceholder}
                    className="w-full bg-slate-50 border border-slate-300 rounded-xl p-3.5 text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:bg-white transition resize-none"
                  />
                </div>

                {/* Submit Action */}
                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    suppressHydrationWarning
                    className="w-full py-3.5 px-6 bg-slate-900 hover:bg-blue-800 text-white rounded-xl text-sm font-bold transition flex items-center justify-center gap-2 cursor-pointer shadow-sm disabled:opacity-50"
                    id="btn-submit-career-app"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        <span>{c.form.submittingBtn}</span>
                      </>
                    ) : (
                      <>
                        <span>{c.form.submitBtn}</span>
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
    </section>
  );
}
