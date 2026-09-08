'use client';

import React, { useState } from 'react';
import { TranslationData } from '@/lib/translations';
import { ShieldCheck, ChevronDown, ChevronUp } from 'lucide-react';

interface GovernanceProps {
  t: TranslationData;
  isRtl: boolean;
}

export default function Governance({ t, isRtl }: GovernanceProps) {
  const [activeCaseIndex, setActiveCaseIndex] = useState(0);
  const [showCaseStudies, setShowCaseStudies] = useState(true);

  const gov = t.governance;
  const cases = gov.cases || [];
  const currentCase = cases[activeCaseIndex] || cases[0];

  const steps = currentCase
    ? [
        {
          key: 'context',
          label: isRtl ? '١. بارودۆخ (Context)' : '1. Context',
          value: currentCase.context,
          color: 'border-slate-300 bg-slate-50 text-slate-800',
          badgeColor: 'bg-slate-200 text-slate-700',
        },
        {
          key: 'evidence',
          label: isRtl ? '٢. بەڵگە (Evidence)' : '2. Evidence',
          value: currentCase.evidence,
          color: 'border-blue-200 bg-blue-50/60 text-slate-800',
          badgeColor: 'bg-blue-100 text-blue-800',
        },
        {
          key: 'decision',
          label: isRtl ? '٣. بڕیار (Decision)' : '3. Decision',
          value: currentCase.decision,
          color: 'border-emerald-200 bg-emerald-50/60 text-slate-900 font-medium',
          badgeColor: 'bg-emerald-100 text-emerald-800',
        },
        {
          key: 'impact',
          label: isRtl ? '٤. کاریگەری (Impact)' : '4. Impact',
          value: currentCase.impact,
          color: 'border-indigo-200 bg-indigo-50/60 text-slate-800',
          badgeColor: 'bg-indigo-100 text-indigo-800',
        },
        {
          key: 'risk',
          label: isRtl ? '٥. مەترسی و سنووردارکردن (Risk)' : '5. Risk & Mitigation',
          value: currentCase.risk,
          color: 'border-amber-200 bg-amber-50/60 text-slate-800',
          badgeColor: 'bg-amber-100 text-amber-900',
        },
        {
          key: 'nextStep',
          label: isRtl ? '٦. هەنگاوی داهاتوو (Next Step)' : '6. Next Step',
          value: currentCase.nextStep,
          color: 'border-slate-800 bg-slate-900 text-white',
          badgeColor: 'bg-slate-800 text-blue-300',
        },
      ]
    : [];

  return (
    <div
      className="bg-gray-50 text-gray-900 min-h-screen font-sans"
      dir={isRtl ? 'rtl' : 'ltr'}
      id="governance-container"
    >
      {/* Hero Section */}
      <section className="bg-slate-900 text-white py-12 md:py-20" id="governance">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <h1
            className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 leading-tight"
            id="governance-hero-title"
          >
            {gov.heroTitle}
          </h1>
          <p
            className="text-base md:text-lg text-slate-300 max-w-3xl leading-relaxed"
            id="governance-hero-desc"
          >
            {gov.heroDesc}
          </p>
        </div>
      </section>

      {/* Core Values Section */}
      <section
        className="py-12 md:py-20 bg-white border-b border-gray-200"
        id="governance-values-section"
      >
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <h2
            className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 md:mb-12"
            id="governance-values-title"
          >
            {gov.valuesTitle}
          </h2>

          <div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
            id="governance-values-grid"
          >
            {gov.values.map((val, idx) => (
              <div
                key={idx}
                className="p-6 bg-slate-50 rounded-xl border border-slate-100 hover:shadow-md transition"
                id={`gov-value-card-${idx}`}
              >
                <h3 className="text-xl font-bold text-slate-800 mb-3">{val.title}</h3>
                <p className="text-sm md:text-base text-slate-600 leading-relaxed">{val.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Governance Architecture Table */}
      <section className="py-12 md:py-20 bg-gray-50" id="governance-architecture-section">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <h2
            className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 md:mb-12"
            id="governance-architecture-title"
          >
            {gov.architectureTitle}
          </h2>

          <div className="overflow-x-auto shadow-xs rounded-xl border border-gray-200 bg-white">
            <table
              className="min-w-full bg-white rounded-xl overflow-hidden"
              id="governance-architecture-table"
            >
              <thead className="bg-slate-900 text-white">
                <tr>
                  <th
                    className={`py-4 px-6 font-semibold text-sm md:text-base ${
                      isRtl ? 'text-right' : 'text-left'
                    } w-1/5`}
                  >
                    {gov.tableHeaders.domain}
                  </th>
                  <th
                    className={`py-4 px-6 font-semibold text-sm md:text-base ${
                      isRtl ? 'text-right' : 'text-left'
                    } w-2/5`}
                  >
                    {gov.tableHeaders.principle}
                  </th>
                  <th
                    className={`py-4 px-6 font-semibold text-sm md:text-base ${
                      isRtl ? 'text-right' : 'text-left'
                    } w-2/5`}
                  >
                    {gov.tableHeaders.mechanism}
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {gov.domains.map((item, idx) => (
                  <tr
                    key={idx}
                    className="hover:bg-slate-50 transition"
                    id={`gov-domain-row-${idx}`}
                  >
                    <td className="py-4 px-6 font-bold text-slate-800 align-top whitespace-nowrap text-sm md:text-base">
                      {item.domain}
                    </td>
                    <td className="py-4 px-6 text-slate-600 text-sm md:text-base leading-relaxed align-top">
                      {item.principle}
                    </td>
                    <td className="py-4 px-6 text-slate-600 text-sm md:text-base leading-relaxed align-top">
                      {item.mechanism}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Interactive Institutional Case Studies Toggle */}
          {cases.length > 0 && (
            <div className="mt-12 pt-10 border-t border-gray-200" id="governance-case-studies">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
                <div>
                  <div className="inline-flex items-center gap-2 text-xs font-bold text-slate-700 uppercase tracking-widest px-3 py-1 bg-white border border-slate-300 rounded-md mb-2">
                    <ShieldCheck className="w-3.5 h-3.5 text-blue-700" />
                    <span>Evidence-Based Case Dossier</span>
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold text-slate-900">
                    {gov.caseStudiesHeading}
                  </h3>
                  <p className="text-xs md:text-sm text-slate-600 mt-1 max-w-3xl">
                    {gov.caseStudiesSubheading}
                  </p>
                </div>
                <button
                  onClick={() => setShowCaseStudies(!showCaseStudies)}
                  className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-medium bg-white hover:bg-slate-100 border border-slate-300 rounded-lg text-slate-700 transition shrink-0 self-start sm:self-center"
                  id="btn-toggle-cases"
                >
                  {showCaseStudies ? (
                    <>
                      <span>{isRtl ? 'داخستنی کەیسەکان' : 'Collapse Cases'}</span>
                      <ChevronUp className="w-4 h-4" />
                    </>
                  ) : (
                    <>
                      <span>{isRtl ? 'نیشاندانی کەیسەکان' : 'Expand Cases'}</span>
                      <ChevronDown className="w-4 h-4" />
                    </>
                  )}
                </button>
              </div>

              {showCaseStudies && (
                <div className="mt-6 space-y-6">
                  {/* Case selection tabs */}
                  <div className="flex flex-wrap gap-2" id="governance-case-tabs">
                    {cases.map((item, idx) => {
                      const isActive = idx === activeCaseIndex;
                      return (
                        <button
                          key={item.id}
                          onClick={() => setActiveCaseIndex(idx)}
                          className={`text-xs sm:text-sm font-semibold py-2 px-4 rounded-lg border transition-all ${
                            isActive
                              ? 'bg-slate-900 text-white border-slate-900 shadow-xs'
                              : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-50'
                          }`}
                          id={`btn-case-tab-${item.id}`}
                        >
                          <span className="opacity-60 text-xs mr-1 ml-1">{item.category} •</span>
                          <span>{item.title}</span>
                        </button>
                      );
                    })}
                  </div>

                  {/* 6-Stage Corporate Blueprint Chain */}
                  <div
                    className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-2xs"
                    id="governance-case-blueprint"
                  >
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-slate-200 gap-2 mb-6">
                      <div>
                        <span className="text-xs font-bold uppercase tracking-wider text-blue-700 bg-blue-50 px-2.5 py-0.5 rounded border border-blue-100">
                          {currentCase.category}
                        </span>
                        <h4 className="text-lg md:text-xl font-bold text-slate-900 mt-2">
                          {currentCase.title}
                        </h4>
                      </div>
                      <div className="text-xs text-slate-500 font-mono">
                        IDG-GOV-REF-0{activeCaseIndex + 1}
                      </div>
                    </div>

                    <div
                      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
                      id="governance-steps-grid"
                    >
                      {steps.map((step, idx) => (
                        <div
                          key={step.key}
                          className={`p-4 rounded-xl border flex flex-col justify-between ${step.color} shadow-2xs`}
                          id={`gov-step-${step.key}`}
                        >
                          <div>
                            <div className="flex items-center justify-between mb-2">
                              <span
                                className={`text-xs font-bold px-2 py-0.5 rounded ${step.badgeColor}`}
                              >
                                {step.label}
                              </span>
                              <span className="text-xs opacity-50 font-mono">{idx + 1}/6</span>
                            </div>
                            <p className="text-xs sm:text-sm leading-relaxed">{step.value}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
