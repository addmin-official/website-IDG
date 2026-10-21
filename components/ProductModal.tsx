'use client';

import React, { useEffect } from 'react';
import Link from 'next/link';
import dynamic from 'next/dynamic';
import { TranslationData, Language } from '@/lib/translations';
import EvidenceBadge from '@/components/EvidenceBadge';
import DocumentClassification from '@/components/DocumentClassification';
import SovereignBadge from '@/components/SovereignBadge';
import Button from '@/components/ui/Button';

const ProductMockups = dynamic(
  () => import('@/components/ProductMockups'),
  { ssr: false, loading: () => <div className="h-64 bg-[#0B172E] rounded-lg animate-pulse" /> }
);
import {
  X,
  ShieldCheck,
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  Lock,
  Layers,
  Users,
  Cpu,
  Building2,
  FileText,
  Activity,
  Sparkles,
  ExternalLink,
} from 'lucide-react';

interface ProductModalProps {
  productId: string | null;
  isOpen: boolean;
  onClose: () => void;
  t: TranslationData;
  lang: Language;
  isNSW?: boolean;
}

export default function ProductModal({
  productId,
  isOpen,
  onClose,
  t,
  lang,
  isNSW,
}: ProductModalProps) {
  const isRtl = lang === 'ku' || lang === 'ar';
  const labels = t.portfolio.modalLabels;

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
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

  // Render Iraq NSW strategic initiative modal
  if (isNSW) {
    const nsw = t.portfolio.nsw;
    return (
      <div
        className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-950/80 backdrop-blur-md overflow-y-auto"
        onClick={onClose}
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-nsw-title"
      >
        <div
          className="bg-white text-slate-900 rounded-2xl max-w-4xl w-full p-5 sm:p-8 border border-slate-200 shadow-2xl relative my-auto max-h-[92vh] overflow-y-auto"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Close button positioned adaptively */}
          <button
            onClick={onClose}
            className="absolute top-4 end-4 text-slate-400 hover:text-slate-700 hover:bg-slate-100 p-2 rounded-xl transition duration-150 z-10"
            aria-label={labels.close}
          >
            <X className="w-5 h-5" />
          </button>

          {/* Badges */}
          <div className="flex flex-wrap items-center gap-2 mb-3">
            <SovereignBadge label={nsw.badge} variant="primary" size="md" />
            <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-slate-100 border border-slate-200 text-xs font-semibold text-slate-700">
              <ShieldCheck className="w-3.5 h-3.5 text-slate-600" />
              <span>{labels.governedBy}</span>
            </span>
          </div>

          {/* Title and Subtitle */}
          <div className="flex flex-wrap items-center gap-2 mb-1">
            <h2 id="modal-nsw-title" className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              {nsw.title}
            </h2>
            <DocumentClassification level="public" lang={lang} />
          </div>
          <p className="text-xs sm:text-sm font-mono text-slate-500 mb-5">
            {nsw.subtitle}
          </p>

          {/* Sovereign Notice Banner */}
          <div className="mb-6 p-3 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-600 flex items-center gap-2.5">
            <ShieldCheck className="w-4 h-4 text-blue-700 shrink-0" />
            <span>{labels.sovereignNotice}</span>
          </div>

          {/* Interactive System Mock-Up */}
          <div className="mb-6">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-500 flex items-center gap-1.5">
                <Activity className="w-3.5 h-3.5 text-blue-600" />
                <span>{labels.systemMockup}</span>
              </span>
              <span className="text-[11px] font-mono text-slate-400">IDG ARCH-NSW-V3</span>
            </div>
            <ProductMockups type={nsw.mockupType} lang={lang} />
          </div>

          {/* Detailed Operational Description */}
          <div className="mb-6 p-4 sm:p-5 rounded-xl bg-slate-50 border border-slate-200">
            <h3 className="text-sm font-bold text-slate-900 mb-2 flex items-center gap-2">
              <FileText className="w-4 h-4 text-blue-600" />
              <span>{labels.detailedDescription}</span>
            </h3>
            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
              {nsw.detailedDescription}
            </p>
          </div>

          {/* Key Features & Target Audience Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            {/* Key Features */}
            <div className="p-4 rounded-xl border border-slate-200 bg-white">
              <h3 className="text-sm font-bold text-slate-900 mb-3 flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-emerald-600" />
                <span>{labels.keyFeatures}</span>
              </h3>
              <ul className="space-y-2 text-xs sm:text-sm text-slate-700">
                {nsw.keyFeatures.map((feat, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span className="leading-snug">{feat}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Target Audience */}
            <div className="p-4 rounded-xl border border-slate-200 bg-white">
              <h3 className="text-sm font-bold text-slate-900 mb-3 flex items-center gap-2">
                <Users className="w-4 h-4 text-blue-600" />
                <span>{labels.targetAudience}</span>
              </h3>
              <ul className="space-y-2 text-xs sm:text-sm text-slate-700">
                {nsw.targetAudience.map((aud, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-blue-600 shrink-0 mt-2" />
                    <span className="leading-snug">{aud}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Technologies Used */}
          <div className="mb-6 p-4 rounded-xl border border-slate-200 bg-white">
            <h3 className="text-sm font-bold text-slate-900 mb-3 flex items-center gap-2">
              <Cpu className="w-4 h-4 text-purple-600" />
              <span>{labels.technologies}</span>
            </h3>
            <div className="flex flex-wrap gap-2">
              {nsw.technologies.map((tech, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1 bg-slate-100 hover:bg-slate-200 text-slate-800 rounded-lg text-xs font-mono font-medium border border-slate-200/80 transition"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Problem, Owner, and Impact Cards */}
          <div className="space-y-3 mb-6">
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs sm:text-sm">
              <span className="font-bold text-slate-900 block mb-1">
                {labels.provenProblem}:
              </span>
              <p className="text-slate-600 leading-relaxed">{nsw.problem}</p>
            </div>

            <div className="p-4 rounded-xl bg-blue-50/80 border border-blue-200/80 text-xs sm:text-sm">
              <span className="font-bold text-blue-900 block mb-1">
                {labels.accountableOwner}:
              </span>
              <p className="text-blue-800 leading-relaxed">{nsw.owner}</p>
            </div>

            <div className="p-4 rounded-xl bg-emerald-50/80 border border-emerald-200/80 text-xs sm:text-sm">
              <div className="flex items-center justify-between mb-1">
                <span className="font-bold text-emerald-900">
                  {labels.provenImpact}:
                </span>
                <EvidenceBadge status="verified" lang={lang} className="mt-2" />
              </div>
              <p className="text-emerald-800 leading-relaxed font-medium">{nsw.impact}</p>
            </div>
          </div>

          {/* Footer controls */}
          <div className="pt-4 border-t border-slate-200 flex items-center justify-between">
            <span className="text-xs text-slate-500 font-mono">
              Iraq Digital Gateway (IDG) • National Portfolio
            </span>
            <Button
              variant="secondary"
              size="sm"
              onClick={onClose}
            >
              {labels.close}
            </Button>
          </div>
        </div>
      </div>
    );
  }

  // Find targeted product
  const product = t.portfolio.products.find((p) => p.id === productId);
  if (!product) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-950/80 backdrop-blur-md overflow-y-auto"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-product-title"
    >
      <div
        className="bg-white text-slate-900 rounded-2xl max-w-4xl w-full p-5 sm:p-8 border border-slate-200 shadow-2xl relative my-auto max-h-[92vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 end-4 text-slate-400 hover:text-slate-700 hover:bg-slate-100 p-2 rounded-xl transition duration-150 z-10"
          aria-label={labels.close}
        >
          <X className="w-5 h-5" />
        </button>

        {/* Badges */}
        <div className="flex flex-wrap items-center gap-2 mb-3">
          <SovereignBadge label={product.numBadge} variant="primary" size="md" />
          <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-slate-100 border border-slate-200 text-xs font-semibold text-slate-700">
            <ShieldCheck className="w-3.5 h-3.5 text-slate-600" />
            <span>{labels.governedBy}</span>
          </span>
          <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-xs font-semibold text-emerald-800">
            <span className="w-2 h-2 rounded-full bg-emerald-500" />
            <span>{product.status}</span>
          </span>
        </div>

        {/* Title and Subtitle */}
        <div className="flex flex-wrap items-center gap-2 mb-1">
          <h2 id="modal-product-title" className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            {product.title}
          </h2>
          <DocumentClassification level="public" lang={lang} />
        </div>
        <p className="text-xs sm:text-sm font-mono text-slate-500 mb-5">
          {product.subtitle}
        </p>

        {/* Sovereign Notice Banner */}
        <div className="mb-6 p-3 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-600 flex items-center gap-2.5">
          <ShieldCheck className="w-4 h-4 text-blue-700 shrink-0" />
          <span>{labels.sovereignNotice}</span>
        </div>

        {/* Interactive System Mock-Up */}
        {product.id === 'gatewayai' ? (
          <div className="mb-6 p-4 rounded-xl bg-[#060D1A] border border-emerald-500/40 text-white">
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs font-bold uppercase tracking-wider text-emerald-400 flex items-center gap-1.5">
                <Activity className="w-3.5 h-3.5 text-emerald-400" />
                <span>{labels.systemMockup}</span>
              </span>
              <span className="text-[11px] font-mono text-emerald-400/80">IDG-INT-001</span>
            </div>
            <p className="text-xs sm:text-sm text-slate-300 mb-3 leading-relaxed">
              {lang === 'ku'
                ? 'تۆڕی زانیاری ئابووری: نیگارکێشانی کارلێککاری پەیوەندی نێوان بەندەرەکان، دەروازە سنورییەکان، کاڵا ستراتیژییەکان و بڕیارە مەنەفیستیەکان.'
                : lang === 'ar'
                ? 'الشبكة المعرفية الاقتصادية: مخطط تفاعلي يربط الموانئ والمنافذ الجمركية وحركة السلع والسياسات الاتحادية.'
                : 'Economic Knowledge Graph: Interactive network mapping ports, customs terminals, strategic commodities, and federal trade regulations.'}
            </p>
            <Link
              href={`/${lang}/products/economic-knowledge-graph`}
              className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white font-semibold py-2 px-4 rounded-lg text-xs transition"
            >
              <span>
                {lang === 'ku'
                  ? 'کردنەوەی تەلارسازی کارلێککار و تۆڕی زانیاری'
                  : lang === 'ar'
                  ? 'استعراض المخطط التفاعلي والشبكة المعرفية'
                  : 'Open Interactive Knowledge Graph & Architecture'}
              </span>
              <ArrowRight className="w-4 h-4 rtl:rotate-180 shrink-0" />
            </Link>
          </div>
        ) : (
          <div className="mb-6">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-500 flex items-center gap-1.5">
                <Activity className="w-3.5 h-3.5 text-blue-600" />
                <span>{labels.systemMockup}</span>
              </span>
              <span className="text-[11px] font-mono text-slate-400">IDG-PORTAL-SYS</span>
            </div>
            <ProductMockups type={product.mockupType || 'aigate'} lang={lang} />
          </div>
        )}

        {/* Detailed Operational Description */}
        {(product.detailedDescription || product.description) && (
          <div className="mb-6 p-4 sm:p-5 rounded-xl bg-slate-50 border border-slate-200">
            <h3 className="text-sm font-bold text-slate-900 mb-2 flex items-center gap-2">
              <FileText className="w-4 h-4 text-blue-600" />
              <span>{labels.detailedDescription}</span>
            </h3>
            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
              {product.detailedDescription || product.description}
            </p>
          </div>
        )}

        {/* Key Features & Target Audience Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          {/* Key Features */}
          {(product.keyFeatures || product.features) && (
            <div className="p-4 rounded-xl border border-slate-200 bg-white">
              <h3 className="text-sm font-bold text-slate-900 mb-3 flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-emerald-600" />
                <span>{labels.keyFeatures}</span>
              </h3>
              <ul className="space-y-2 text-xs sm:text-sm text-slate-700">
                {(product.keyFeatures || product.features || []).map((feat, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span className="leading-snug">{feat}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Target Audience */}
          {product.targetAudience && product.targetAudience.length > 0 && (
            <div className="p-4 rounded-xl border border-slate-200 bg-white">
              <h3 className="text-sm font-bold text-slate-900 mb-3 flex items-center gap-2">
                <Users className="w-4 h-4 text-blue-600" />
                <span>{labels.targetAudience}</span>
              </h3>
              <ul className="space-y-2 text-xs sm:text-sm text-slate-700">
                {product.targetAudience.map((aud, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-blue-600 shrink-0 mt-2" />
                    <span className="leading-snug">{aud}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        {/* Technologies Used */}
        {product.technologies && product.technologies.length > 0 && (
          <div className="mb-6 p-4 rounded-xl border border-slate-200 bg-white">
            <h3 className="text-sm font-bold text-slate-900 mb-3 flex items-center gap-2">
              <Cpu className="w-4 h-4 text-purple-600" />
              <span>{labels.technologies}</span>
            </h3>
            <div className="flex flex-wrap gap-2">
              {product.technologies.map((tech, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1 bg-slate-100 hover:bg-slate-200 text-slate-800 rounded-lg text-xs font-mono font-medium border border-slate-200/80 transition"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Problem, Owner, and Impact Cards */}
        {(product.problem || product.owner || product.impact) && (
          <div className="space-y-3 mb-6">
            {product.problem && (
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs sm:text-sm">
                <span className="font-bold text-slate-900 block mb-1">
                  {labels.provenProblem}:
                </span>
                <p className="text-slate-600 leading-relaxed">{product.problem}</p>
              </div>
            )}

            {product.owner && (
              <div className="p-4 rounded-xl bg-blue-50/80 border border-blue-200/80 text-xs sm:text-sm">
                <span className="font-bold text-blue-900 block mb-1">
                  {labels.accountableOwner}:
                </span>
                <p className="text-blue-800 leading-relaxed">{product.owner}</p>
              </div>
            )}

            {product.impact && (
              <div className="p-4 rounded-xl bg-emerald-50/80 border border-emerald-200/80 text-xs sm:text-sm">
                <div className="flex items-center justify-between mb-1">
                  <span className="font-bold text-emerald-900">
                    {labels.provenImpact}:
                  </span>
                  <EvidenceBadge status="verified" lang={lang} className="mt-2" />
                </div>
                <p className="text-emerald-800 leading-relaxed font-medium">{product.impact}</p>
              </div>
            )}
          </div>
        )}

        {/* Actions Footer */}
        <div className="pt-4 border-t border-slate-200 flex flex-wrap items-center justify-between gap-3">
          <div className="flex flex-wrap items-center gap-2.5">
            <a
              href={product.link || product.url || '#'}
              target={product.external ? '_blank' : undefined}
              rel={product.external ? 'noopener noreferrer' : undefined}
              className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2.5 px-5 rounded-lg text-xs sm:text-sm transition shadow-sm"
              id="modal-btn-visit-site"
            >
              <span>{lang === 'ku' && product.id === 'greenbelt' ? 'کردنەوە و بینینی وێبسایت' : labels.visitLiveSite}</span>
              <ExternalLink className="w-4 h-4" />
            </a>

            {(product.dashboardUrl || product.id === 'greenbelt') && (
              <a
                href={product.dashboardUrl || 'https://green-belt-platform.web.app/dashboard'}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold py-2.5 px-5 rounded-lg text-xs sm:text-sm transition shadow-sm"
                id="modal-btn-enter-platform"
              >
                <span>{labels.enterPlatform || (lang === 'ku' ? 'چوونە ناو پلاتفۆرم' : lang === 'ar' ? 'الدخول إلى المنصة' : 'Enter Platform')}</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            )}
          </div>

          <Button
            variant="secondary"
            size="md"
            onClick={onClose}
          >
            {labels.close}
          </Button>
        </div>
      </div>
    </div>
  );
}
