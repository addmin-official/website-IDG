'use client';

import React, { useState, useRef, useEffect } from 'react';
import { TranslationData } from '@/lib/translations';
import { useIsMounted } from '@/lib/useIsMounted';
import { CheckCircle2, Upload, FileCheck, X, AlertCircle, Loader2, Send, HelpCircle } from 'lucide-react';
import { InlineStatus, ProgressBar } from '@/components/ui/LoadingStates';
import { ValidatedInput, ValidatedTextarea } from '@/components/ui/ValidatedInput';
import { submitCareerApplication } from '@/infrastructure/actions/careers';

interface CareersProps {
  t?: TranslationData;
  isRtl?: boolean;
}

export default function Careers({ t, isRtl = true }: CareersProps) {
  const isMounted = useIsMounted();

  // Selected role state
  const [selectedRole, setSelectedRole] = useState('');
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [coverNote, setCoverNote] = useState('');
  const [resumeFile, setResumeFile] = useState<File | null>(null);

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [appId, setAppId] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [uploadProgress, setUploadProgress] = useState(0);
  const [isUploading, setIsUploading] = useState(false);
  const [uploadFileName, setUploadFileName] = useState('');
  const [uploadFileSize, setUploadFileSize] = useState('');

  const fileInputRef = useRef<HTMLInputElement | null>(null);

  // Determine language content (defaults strictly to Kurdish user request)
  const isKurdish = !t || t.contactSection?.form?.submitBtn === 'ناردنی پەیام';
  const isArabic = t?.contactSection?.form?.submitBtn === 'إرسال الرسالة';

  const content = {
    title: isArabic
      ? 'العمل في IDG 💼'
      : !isKurdish
      ? 'Careers at IDG 💼'
      : 'کارکردن لە IDG 💼',
    intro: isArabic
      ? 'في IDG، لا نقدّم مجرد فرص عمل، بل نبني قدرة وطنية مستدامة. بيئة عملنا ترتكز على انضباط هندسي صارم، أمان نفسي، وهدف تأهيل الكفاءات المحلية. نبحث عن أولئك المستعدين لتحمل مسؤولية التحول الرقمي للعراق.'
      : !isKurdish
      ? 'At IDG, we do not merely offer jobs; we forge enduring sovereign capability. Our work culture is grounded in rigorous engineering discipline, psychological safety, and domestic talent stewardship. We seek professionals prepared to shoulder the institutional transformation of Iraq.'
      : 'لە IDG، ئێمە تەنها هەلی کار پێشکەش ناکەین، بەڵکو توانای نیشتمانی بونیاد دەنێین. ژینگەی کارکردنمان پشتئەستوورە بە دیسپلینێکی ئەندازیاریی توندوتۆڵ، ئاسایشی دەروونی، و ئامانجی پێگەیاندنی بەهرەی ناوخۆیی. بەدوای ئەو کەسانەدا دەگەڕێین کە ئامادەن بەرپرسیارێتیی گۆڕانی دیجیتاڵیی عێراق لەئەستۆ بگرن.',
    rolesTitle: isArabic ? 'المواقع المتاحة حالياً' : !isKurdish ? 'Current Open Roles' : 'پێگەکانی ئێستا',
    role1: {
      title: isArabic
        ? 'مهندس أبحاث الذكاء الاصطناعي (AI & NLP)'
        : !isKurdish
        ? 'AI & NLP Research Engineer'
        : 'ئەندازیاری توێژینەوەی ژیریی دەستکرد (AI & NLP)',
      desc: isArabic
        ? 'تطوير النماذج اللغوية وتحليل البيانات تحت السيادة والرقابة البشرية.'
        : !isKurdish
        ? 'Developing localized language models and data analytics under firm human supervision.'
        : 'گەشەپێدانی مۆدێلی زمانەوانی و شیکاری داتا لەژێر دەسەڵاتی مرۆییدا.',
    },
    role2: {
      title: isArabic
        ? 'قائد الأمن السيبراني وسيادة البيانات'
        : !isKurdish
        ? 'Cybersecurity & Data Sovereignty Lead'
        : 'ڕابەری ئاسایشی ئەلیکترۆنی و سەروەریی داتا',
      desc: isArabic
        ? 'تصميم المعمارية المحمية ونمذجة التهديدات لمنصاتنا الوطنية.'
        : !isKurdish
        ? 'Architecting zero-trust perimeter defense and threat modeling for sovereign platforms.'
        : 'داڕشتنی تەلارسازیی پارێزراو و مۆدێلکردنی هەڕەشەکان بۆ پلاتفۆرمەکانمان.',
    },
    formTitle: isArabic ? 'تقديم طلب التوظيف' : !isKurdish ? 'Submit Application' : 'پێشکەشکردنی داواکاری',
    namePlaceholder: isArabic ? 'الاسم الثلاثي' : !isKurdish ? 'Full Name' : 'ناوی سیانی',
    emailPlaceholder: isArabic ? 'البريد الإلكتروني الرسمي' : !isKurdish ? 'Official Email Address' : 'ئیمەیڵی فەرمی',
    rolePlaceholder: isArabic ? 'اختر الدور المستهدف...' : !isKurdish ? 'Select target role...' : 'ڕۆڵی مەبەستدار هەڵبژێرە...',
    role1Option: isArabic
      ? 'مهندس أبحاث الذكاء الاصطناعي'
      : !isKurdish
      ? 'AI & NLP Research Engineer'
      : 'ئەندازیاری توێژینەوەی ژیریی دەستکرد',
    role2Option: isArabic
      ? 'قائد الأمن السيبراني'
      : !isKurdish
      ? 'Cybersecurity & Data Sovereignty Lead'
      : 'ڕابەری ئاسایشی ئەلیکترۆنی',
    coverPlaceholder: isArabic
      ? 'ملاحظة التحفيز (Cover Note): لماذا ترغب في المشاركة بالتحول الرقمي للعراق؟'
      : !isKurdish
      ? 'Cover Note: Why do you want to contribute to the digital transformation of Iraq?'
      : 'تێبینیی هاندان (Cover Note): بۆچی دەتەوێت بەشداری لە گۆڕانی دیجیتاڵیی عێراق بکەیت؟',
    cvText: isArabic
      ? 'أفلت سيرتك الذاتية هنا (PDF) 📎'
      : !isKurdish
      ? 'Drop your resume here (PDF) 📎'
      : 'سیڤییەکەت لێرە دابنێ (PDF) 📎',
    submitBtn: isArabic ? 'إرسال الطلب' : !isKurdish ? 'Submit Application' : 'ناردنی داواکاری',
    successTitle: isArabic
      ? 'تم تسجيل طلبك بنجاح'
      : !isKurdish
      ? 'Application Received'
      : 'داواکارییەکەت بە سەرکەوتوویی تۆمارکرا',
    successDesc: isArabic
      ? 'شكراً لاهتمامك بالانضمام إلى IDG. سيقوم فريق الموارد البشرية والحوكمة بمراجعة ملفك.'
      : !isKurdish
      ? 'Thank you for your interest in IDG. Our team will review your application.'
      : 'سوپاس بۆ پێشکەشکردن. تیمی سەرچاوە مرۆییەکان و حوکمڕانیی IDG بە وردی پێداچوونەوە بە فایلەکەتدا دەکەن.',
    resetBtn: isArabic
      ? 'تقديم طلب آخر'
      : !isKurdish
      ? 'Submit Another Application'
      : 'پێشکەشکردنی داواکارییەکی تر',
  };

  const formatBytes = (bytes: number) => {
    if (bytes < 1024) return `${bytes} B`;
    if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
    return `${(bytes / (1024 * 1024)).toFixed(2)} MB`;
  };

  const validateAndSetFile = (file: File) => {
    if (file.type !== 'application/pdf') {
      setErrorMessage(isKurdish ? 'تەنها فایلی PDF قبوڵکراوە.' : 'Only PDF files are accepted.');
      return false;
    }
    if (file.size > 5 * 1024 * 1024) {
      setErrorMessage(isKurdish ? 'قەبارەی فایلەکە نابێت لە 5MB زیاتر بێت.' : 'File size cannot exceed 5MB.');
      return false;
    }
    setErrorMessage('');
    setUploadFileName(file.name);
    setUploadFileSize(formatBytes(file.size));
    setIsUploading(true);
    setUploadProgress(15);

    let current = 15;
    const interval = setInterval(() => {
      current += 25;
      if (current >= 100) {
        clearInterval(interval);
        setUploadProgress(100);
        setTimeout(() => {
          setIsUploading(false);
          setResumeFile(file);
        }, 150);
      } else {
        setUploadProgress(current);
      }
    }, 70);
    return true;
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      validateAndSetFile(e.target.files[0]);
    }
  };

  const handleFileDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      validateAndSetFile(e.dataTransfer.files[0]);
    }
  };

  const [showConfirmModal, setShowConfirmModal] = useState(false);

  // Restore draft from sessionStorage on mount
  useEffect(() => {
    try {
      const saved = sessionStorage.getItem('idg-careers-draft');
      if (saved) {
        const data = JSON.parse(saved);
        if (data.fullName) setFullName(data.fullName);
        if (data.email) setEmail(data.email);
        if (data.selectedRole) setSelectedRole(data.selectedRole);
        if (data.coverNote) setCoverNote(data.coverNote);
      }
    } catch {}
  }, []);

  // Save draft to sessionStorage as user types
  useEffect(() => {
    if (!isSubmitted) {
      try {
        sessionStorage.setItem(
          'idg-careers-draft',
          JSON.stringify({ fullName, email, selectedRole, coverNote })
        );
      } catch {}
    }
  }, [fullName, email, selectedRole, coverNote, isSubmitted]);

  const isValidEmail = (val: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val.trim());

  const isFormValid =
    fullName.trim().length >= 2 &&
    isValidEmail(email) &&
    Boolean(selectedRole) &&
    Boolean(resumeFile) &&
    !isUploading;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!isFormValid) {
      if (!fullName.trim() || fullName.trim().length < 2) {
        setErrorMessage(isKurdish ? 'ناو دەبێت لانیکەم ٢ پیت بێت.' : 'Name must be at least 2 characters.');
        return;
      }
      if (!isValidEmail(email)) {
        setErrorMessage(isKurdish ? 'تکایە ئیمەیڵێکی دروست بنووسە.' : 'Please enter a valid email address.');
        return;
      }
      if (!selectedRole) {
        setErrorMessage(isKurdish ? 'تکایە پۆستی داواکراو دیاریبکە.' : 'Please select a position.');
        return;
      }
      if (!resumeFile) {
        setErrorMessage(isKurdish ? 'تکایە فایلی سیڤی (PDF) دابنێ.' : 'Please attach your CV in PDF format.');
        return;
      }
      return;
    }
    setErrorMessage('');
    setShowConfirmModal(true);
  };

  const executeSubmit = async () => {
    setShowConfirmModal(false);
    setIsSubmitting(true);
    setErrorMessage('');

    try {
      const formData = new FormData();
      formData.append('name', fullName.trim());
      formData.append('email', email.trim());
      formData.append('position', selectedRole);
      formData.append('coverNote', coverNote.trim());
      formData.append('cv', resumeFile!);

      const result = await submitCareerApplication(formData);
      if (result.success && result.applicationId) {
        setAppId(result.applicationId);
        setIsSubmitted(true);
        try {
          sessionStorage.removeItem('idg-careers-draft');
        } catch {}
      } else if (result.error) {
        setErrorMessage(result.error);
      }
    } catch {
      setErrorMessage(
        isKurdish
          ? 'هەڵەیەک لە پەیوەندیکردن بە ڕاژەکار ڕوویدا، تکایە دووبارە هەوڵبدەرەوە.'
          : 'Failed to submit application. Please try again.'
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleReset = () => {
    setFullName('');
    setEmail('');
    setSelectedRole('');
    setCoverNote('');
    setResumeFile(null);
    setUploadProgress(0);
    setIsUploading(false);
    setUploadFileName('');
    setUploadFileSize('');
    setErrorMessage('');
    setIsSubmitted(false);
    setShowConfirmModal(false);
    try {
      sessionStorage.removeItem('idg-careers-draft');
    } catch {}
  };

  return (
    <section
      className="py-20 bg-[#060D1A] text-slate-100 w-full overflow-hidden"
      dir={isRtl ? 'rtl' : 'ltr'}
      id="careers"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-4xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-slate-100" id="careers-heading">
            {content.title}
          </h2>
          <p
            className="text-lg text-slate-300 leading-relaxed border-s-4 ps-4 border-[#1D5BD8]"
            id="careers-intro"
          >
            {content.intro}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start" id="careers-grid">
          {/* Open Roles */}
          <div className="space-y-6" id="careers-roles-container">
            <h3 className="text-2xl font-bold mb-6 text-slate-100" id="careers-roles-title">
              {content.rolesTitle}
            </h3>

            {/* Role 1 */}
            <div
              onClick={() => setSelectedRole(content.role1Option)}
              className={`p-6 rounded-xl border transition cursor-pointer ${
                selectedRole === content.role1Option
                  ? 'border-[#1D5BD8] bg-[#102447] ring-1 ring-[#1D5BD8]'
                  : 'bg-[#0B172E] border-[#102447] hover:border-[#1D5BD8]'
              }`}
              id="career-role-card-1"
            >
              <h4 className="text-xl font-bold text-blue-400 mb-2" id="career-role-title-1">
                {content.role1.title}
              </h4>
              <p className="text-sm text-slate-400 leading-relaxed" id="career-role-desc-1">
                {content.role1.desc}
              </p>
            </div>

            {/* Role 2 */}
            <div
              onClick={() => setSelectedRole(content.role2Option)}
              className={`p-6 rounded-xl border transition cursor-pointer ${
                selectedRole === content.role2Option
                  ? 'border-[#1D5BD8] bg-[#102447] ring-1 ring-[#1D5BD8]'
                  : 'bg-[#0B172E] border-[#102447] hover:border-[#1D5BD8]'
              }`}
              id="career-role-card-2"
            >
              <h4 className="text-xl font-bold text-blue-400 mb-2" id="career-role-title-2">
                {content.role2.title}
              </h4>
              <p className="text-sm text-slate-400 leading-relaxed" id="career-role-desc-2">
                {content.role2.desc}
              </p>
            </div>
          </div>

          {/* Application Form */}
          <div className="bg-[#0B172E] text-slate-100 p-6 sm:p-8 rounded-2xl shadow-xl border border-[#102447] w-full max-w-full overflow-hidden" id="careers-form-container">
            <h3 className="text-2xl font-bold mb-6 text-slate-100" id="careers-form-title">
              {content.formTitle}
            </h3>

            {!isMounted ? (
              <div className="space-y-4 py-2" id="careers-form-skeleton">
                <div className="h-12 bg-[#102447] rounded-lg animate-pulse" />
                <div className="h-12 bg-[#102447] rounded-lg animate-pulse" />
                <div className="h-12 bg-[#102447] rounded-lg animate-pulse" />
                <div className="h-24 bg-[#102447] rounded-lg animate-pulse" />
                <div className="h-16 bg-[#102447] rounded-lg animate-pulse" />
                <div className="h-12 bg-[#193B73] rounded-lg animate-pulse" />
              </div>
            ) : isSubmitted ? (
              <div className="bg-[#0B172E] p-6 rounded-xl border border-[#059669]/40 text-center" id="career-submit-success">
                <div className="w-12 h-12 bg-[#052e16] border border-[#059669]/40 text-[#059669] rounded-full flex items-center justify-center mx-auto mb-3">
                  <CheckCircle2 className="w-7 h-7" />
                </div>
                <h4 className="text-lg font-bold text-slate-100 mb-1">{content.successTitle}</h4>
                <p className="text-xs text-slate-400 mb-4">{content.successDesc}</p>
                <div className="bg-[#060D1A] p-3 rounded-lg border border-[#102447] text-xs font-mono text-slate-300 mb-5">
                  ID: {appId}
                </div>
                <button
                  type="button"
                  onClick={handleReset}
                  className="px-5 py-2.5 bg-[#1D5BD8] hover:bg-blue-600 text-white rounded-lg text-xs font-bold transition cursor-pointer"
                  id="btn-career-reset"
                >
                  {content.resetBtn}
                </button>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="space-y-4"
                id="careers-form"
                suppressHydrationWarning
              >
                {isSubmitting && (
                  <div className="p-3 rounded-lg bg-amber-500/10 border border-amber-500/30">
                    <InlineStatus
                      status="loading"
                      loadingLabel={
                        isKurdish
                          ? 'داواکارییەکەت لەگەڵ سیڤی دەنێردرێت بۆ ڕاژەکار...'
                          : isArabic
                          ? 'جاري إرسال طلب التوظيف والسيرة الذاتية...'
                          : 'Submitting application and CV to secure server...'
                      }
                    />
                  </div>
                )}

                <ValidatedInput
                  id="career-input-name"
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
                  id="career-input-email"
                  name="email"
                  type="email"
                  value={email}
                  onChange={setEmail}
                  placeholder={content.emailPlaceholder}
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

                <select
                  name="position"
                  required
                  suppressHydrationWarning
                  value={selectedRole}
                  onChange={(e) => setSelectedRole(e.target.value)}
                  className="w-full p-3 rounded-lg border border-[#102447] bg-[#0B172E] text-slate-100 focus:bg-[#102447] focus:border-[#1D5BD8] outline-hidden text-sm"
                  id="career-select-role"
                >
                  <option value="" className="bg-[#0B172E] text-slate-400">{content.rolePlaceholder}</option>
                  <option value={content.role1Option} className="bg-[#0B172E] text-slate-100">{content.role1Option}</option>
                  <option value={content.role2Option} className="bg-[#0B172E] text-slate-100">{content.role2Option}</option>
                </select>

                <ValidatedTextarea
                  id="career-textarea-cover"
                  name="coverNote"
                  rows={4}
                  value={coverNote}
                  onChange={setCoverNote}
                  placeholder={content.coverPlaceholder}
                  maxLength={500}
                  showCharCount={true}
                  suppressHydrationWarning
                />

                {/* CV File Upload */}
                <input
                  type="file"
                  name="cv"
                  ref={fileInputRef}
                  onChange={handleFileChange}
                  accept="application/pdf,.pdf"
                  className="hidden"
                  id="career-file-input"
                />
                <div
                  onClick={() => !isUploading && fileInputRef.current?.click()}
                  onDragOver={(e) => e.preventDefault()}
                  onDrop={handleFileDrop}
                  className="border-2 border-dashed border-[#102447] hover:border-[#1D5BD8] hover:bg-[#102447]/30 p-4 rounded-lg text-center text-sm text-slate-400 transition cursor-pointer"
                  id="career-upload-dropzone"
                >
                  {isUploading ? (
                    <div className="space-y-2 py-1 text-xs">
                      <div className="flex items-center justify-between text-blue-300">
                        <span className="flex items-center gap-1.5 font-medium truncate">
                          <Loader2 className="w-3.5 h-3.5 animate-spin shrink-0 text-[#19C7FF]" />
                          <span>
                            {isKurdish
                              ? 'بارکردنی فایلی PDF...'
                              : isArabic
                              ? 'جاري رفع ملف PDF...'
                              : 'Uploading PDF...'}
                          </span>
                          <span className="text-slate-400 font-mono">({uploadFileName} • {uploadFileSize})</span>
                        </span>
                        <span className="font-mono text-[#19C7FF]">{uploadProgress}%</span>
                      </div>
                      <ProgressBar value={uploadProgress} showLabel={false} />
                    </div>
                  ) : resumeFile ? (
                    <div className="flex items-center justify-between text-xs text-blue-300 bg-[#102447] px-3 py-1.5 rounded border border-[#193B73]">
                      <span className="flex items-center gap-1.5 font-medium truncate">
                        <FileCheck className="w-4 h-4 shrink-0 text-emerald-400" />
                        <span className="truncate">{resumeFile.name}</span>
                        <span className="text-slate-400 text-[11px] font-mono">({uploadFileSize || formatBytes(resumeFile.size)})</span>
                      </span>
                      <button
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          setResumeFile(null);
                          setUploadProgress(0);
                        }}
                        className="text-slate-400 hover:text-slate-200 p-0.5 cursor-pointer"
                      >
                        <X className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  ) : (
                    <span>{content.cvText}</span>
                  )}
                </div>

                {errorMessage && (
                  <div className="flex items-center gap-2 p-3 bg-[#450a0a] border border-[#DC2626]/40 text-[#DC2626] text-xs rounded-lg" id="career-error-alert">
                    <AlertCircle className="w-4 h-4 shrink-0" />
                    <span>{errorMessage}</span>
                  </div>
                )}

                <button
                  type="submit"
                  disabled={isSubmitting || isUploading || !isFormValid}
                  suppressHydrationWarning
                  className="w-full bg-[#1D5BD8] hover:bg-blue-600 text-white font-bold py-3 rounded-lg transition inline-flex items-center justify-center gap-2 cursor-pointer shadow-sm disabled:opacity-50"
                  id="btn-submit-career-app"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      <span>{isKurdish ? 'لە ناردندایە...' : isArabic ? 'جاري الإرسال...' : 'Sending...'}</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>{content.submitBtn}</span>
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>

      {/* Confirmation Dialog before submitting */}
      {showConfirmModal && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-xs"
          role="dialog"
          aria-modal="true"
        >
          <div
            className="bg-[#0B172E] border border-[#193B73] rounded-2xl max-w-md w-full p-6 shadow-2xl text-slate-100 space-y-4"
            dir={isRtl ? 'rtl' : 'ltr'}
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-blue-500/20 text-[#19C7FF] flex items-center justify-center shrink-0">
                <HelpCircle className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-bold text-base text-slate-100">
                  {isKurdish
                    ? 'دڵنیایت لە ناردنی داواکارییەکە؟'
                    : isArabic
                    ? 'هل أنت متأكد من إرسال الطلب؟'
                    : 'Confirm Application Submission'}
                </h4>
                <p className="text-xs text-slate-400">
                  {isKurdish
                    ? 'دەتوانیت هێشتا پێداچوونەوەی بۆ بکەیت یان بەردەوام بیت.'
                    : isArabic
                    ? 'يمكنك مراجعة البيانات أو المتابعة.'
                    : 'Are you sure? You can still edit your submission before sending.'}
                </p>
              </div>
            </div>

            <div className="bg-[#060D1A] p-3 rounded-lg border border-[#102447] text-xs space-y-1.5 font-mono text-slate-300">
              <div className="truncate"><span className="text-slate-500">Name:</span> {fullName}</div>
              <div className="truncate"><span className="text-slate-500">Email:</span> {email}</div>
              <div className="truncate"><span className="text-slate-500">Role:</span> {selectedRole}</div>
              <div className="truncate"><span className="text-slate-500">CV:</span> {resumeFile?.name} ({uploadFileSize})</div>
            </div>

            <div className="flex items-center justify-end gap-2.5 pt-2">
              <button
                type="button"
                onClick={() => setShowConfirmModal(false)}
                className="px-4 py-2 text-xs font-semibold text-slate-300 hover:text-white bg-[#102447] hover:bg-[#193B73] rounded-lg transition cursor-pointer"
                id="btn-cancel-career-confirm"
              >
                {isKurdish ? 'پێداچوونەوە و گەڕانەوە' : isArabic ? 'تعديل البيانات' : 'Cancel & Edit'}
              </button>
              <button
                type="button"
                onClick={executeSubmit}
                className="px-5 py-2 text-xs font-bold text-white bg-[#1D5BD8] hover:bg-blue-600 rounded-lg transition inline-flex items-center gap-2 cursor-pointer shadow-sm"
                id="btn-confirm-career-submit"
              >
                <Send className="w-3.5 h-3.5" />
                <span>{isKurdish ? 'ناردنی کۆتایی' : isArabic ? 'تأكيد الإرسال' : 'Confirm & Submit'}</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
