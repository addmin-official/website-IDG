'use client';

import React, { useState, useRef } from 'react';
import { TranslationData } from '@/lib/translations';
import { useIsMounted } from '@/lib/useIsMounted';
import { CheckCircle2, Upload, FileCheck, X, AlertCircle } from 'lucide-react';
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
    setResumeFile(file);
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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName.trim() || !email.trim() || !selectedRole) {
      setErrorMessage(isKurdish ? 'تکایە هەموو خانە پێویستەکان پڕبکەرەوە.' : 'Please fill all required fields.');
      return;
    }
    if (!resumeFile) {
      setErrorMessage(isKurdish ? 'تکایە فایلی سیڤی (PDF) دابنێ.' : 'Please attach your CV in PDF format.');
      return;
    }

    setIsSubmitting(true);
    setErrorMessage('');

    try {
      const formData = new FormData();
      formData.append('name', fullName.trim());
      formData.append('email', email.trim());
      formData.append('position', selectedRole);
      formData.append('coverNote', coverNote.trim());
      formData.append('cv', resumeFile);

      const result = await submitCareerApplication(formData);
      if (result.success && result.applicationId) {
        setAppId(result.applicationId);
        setIsSubmitted(true);
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
    setErrorMessage('');
    setIsSubmitted(false);
  };

  return (
    <section
      className="py-20 bg-slate-900 text-white"
      dir={isRtl ? 'rtl' : 'ltr'}
      id="careers"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-4xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6" id="careers-heading">
            {content.title}
          </h2>
          <p
            className={`text-lg text-slate-300 leading-relaxed ${
              isRtl ? 'border-r-4 pr-4' : 'border-l-4 pl-4'
            } border-blue-500`}
            id="careers-intro"
          >
            {content.intro}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start" id="careers-grid">
          {/* Open Roles */}
          <div className="space-y-6" id="careers-roles-container">
            <h3 className="text-2xl font-bold mb-6" id="careers-roles-title">
              {content.rolesTitle}
            </h3>

            {/* Role 1 */}
            <div
              onClick={() => setSelectedRole(content.role1Option)}
              className={`bg-slate-800 p-6 rounded-xl border transition cursor-pointer ${
                selectedRole === content.role1Option
                  ? 'border-blue-400 bg-slate-800/90 ring-1 ring-blue-400'
                  : 'border-transparent hover:border-blue-400'
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
              className={`bg-slate-800 p-6 rounded-xl border transition cursor-pointer ${
                selectedRole === content.role2Option
                  ? 'border-blue-400 bg-slate-800/90 ring-1 ring-blue-400'
                  : 'border-transparent hover:border-blue-400'
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
          <div className="bg-white text-slate-900 p-8 rounded-2xl shadow-xl" id="careers-form-container">
            <h3 className="text-2xl font-bold mb-6 text-slate-900" id="careers-form-title">
              {content.formTitle}
            </h3>

            {!isMounted ? (
              <div className="space-y-4 py-2" id="careers-form-skeleton">
                <div className="h-12 bg-slate-100 rounded-lg animate-pulse" />
                <div className="h-12 bg-slate-100 rounded-lg animate-pulse" />
                <div className="h-12 bg-slate-100 rounded-lg animate-pulse" />
                <div className="h-24 bg-slate-100 rounded-lg animate-pulse" />
                <div className="h-16 bg-slate-100 rounded-lg animate-pulse" />
                <div className="h-12 bg-blue-100 rounded-lg animate-pulse" />
              </div>
            ) : isSubmitted ? (
              <div className="bg-slate-50 p-6 rounded-xl border border-emerald-200 text-center" id="career-submit-success">
                <div className="w-12 h-12 bg-emerald-100 text-emerald-700 rounded-full flex items-center justify-center mx-auto mb-3">
                  <CheckCircle2 className="w-7 h-7" />
                </div>
                <h4 className="text-lg font-bold text-slate-900 mb-1">{content.successTitle}</h4>
                <p className="text-xs text-slate-600 mb-4">{content.successDesc}</p>
                <div className="bg-white p-3 rounded-lg border border-slate-200 text-xs font-mono text-slate-700 mb-5">
                  ID: {appId}
                </div>
                <button
                  type="button"
                  onClick={handleReset}
                  className="px-5 py-2.5 bg-slate-900 text-white rounded-lg text-xs font-bold hover:bg-slate-800 transition"
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
                <input
                  type="text"
                  name="name"
                  required
                  suppressHydrationWarning
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  placeholder={content.namePlaceholder}
                  className="w-full p-3 rounded-lg border border-slate-200 bg-slate-50 text-slate-900 focus:bg-white focus:border-blue-500 outline-hidden text-sm"
                  id="career-input-name"
                />

                <input
                  type="email"
                  name="email"
                  required
                  suppressHydrationWarning
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder={content.emailPlaceholder}
                  className="w-full p-3 rounded-lg border border-slate-200 bg-slate-50 text-slate-900 focus:bg-white focus:border-blue-500 outline-hidden text-sm"
                  id="career-input-email"
                />

                <select
                  name="position"
                  required
                  suppressHydrationWarning
                  value={selectedRole}
                  onChange={(e) => setSelectedRole(e.target.value)}
                  className="w-full p-3 rounded-lg border border-slate-200 bg-slate-50 text-slate-700 focus:bg-white focus:border-blue-500 outline-hidden text-sm"
                  id="career-select-role"
                >
                  <option value="">{content.rolePlaceholder}</option>
                  <option value={content.role1Option}>{content.role1Option}</option>
                  <option value={content.role2Option}>{content.role2Option}</option>
                </select>

                <textarea
                  name="coverNote"
                  suppressHydrationWarning
                  value={coverNote}
                  onChange={(e) => setCoverNote(e.target.value)}
                  placeholder={content.coverPlaceholder}
                  rows={4}
                  className="w-full p-3 rounded-lg border border-slate-200 bg-slate-50 text-slate-900 focus:bg-white focus:border-blue-500 outline-hidden text-sm leading-relaxed"
                  id="career-textarea-cover"
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
                  onClick={() => fileInputRef.current?.click()}
                  onDragOver={(e) => e.preventDefault()}
                  onDrop={handleFileDrop}
                  className="border-2 border-dashed border-slate-300 p-4 rounded-lg text-center text-sm text-slate-500 hover:border-blue-500 hover:bg-blue-50/50 transition cursor-pointer"
                  id="career-upload-dropzone"
                >
                  {resumeFile ? (
                    <div className="flex items-center justify-between text-xs text-blue-700 bg-blue-50 px-3 py-1.5 rounded">
                      <span className="flex items-center gap-1.5 font-medium truncate">
                        <FileCheck className="w-4 h-4 shrink-0" />
                        {resumeFile.name}
                      </span>
                      <button
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          setResumeFile(null);
                        }}
                        className="text-slate-400 hover:text-slate-600 p-0.5"
                      >
                        <X className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  ) : (
                    <span>{content.cvText}</span>
                  )}
                </div>

                {errorMessage && (
                  <div className="flex items-center gap-2 p-3 bg-red-50 border border-red-200 text-red-700 text-xs rounded-lg" id="career-error-alert">
                    <AlertCircle className="w-4 h-4 shrink-0" />
                    <span>{errorMessage}</span>
                  </div>
                )}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  suppressHydrationWarning
                  className="w-full bg-blue-600 text-white font-bold py-3 rounded-lg hover:bg-blue-700 transition cursor-pointer shadow-sm disabled:opacity-50"
                  id="btn-submit-career-app"
                >
                  {isSubmitting ? '...' : content.submitBtn}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
