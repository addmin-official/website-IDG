'use client';

import React from 'react';
import Link from 'next/link';

export default function NotFound() {
  return (
    <div
      dir="rtl"
      className="min-h-screen bg-slate-900 text-white flex flex-col items-center justify-center p-6 text-center"
      id="not-found-page"
    >
      <div className="max-w-md w-full bg-slate-800 p-8 rounded-2xl border border-slate-700 shadow-2xl">
        <h1 className="text-6xl font-extrabold text-blue-400 mb-4">٤٠٤</h1>
        <h2 className="text-2xl font-bold mb-3">پەڕەکە نەدۆزرایەوە</h2>
        <p className="text-sm text-slate-300 mb-6 leading-relaxed">
          ئەم پەڕەیەی بەدوایدا دەگەڕێیت لە سیستەمی دەروازەی دیجیتاڵیی عێراق (IDG) بوونی نییە یان گوێزراوەتەوە.
        </p>
        <Link
          href="/ku"
          className="inline-block bg-blue-600 hover:bg-blue-700 text-white text-sm font-bold py-3 px-6 rounded-lg transition"
          id="btn-back-home"
        >
          گەڕانەوە بۆ پەڕەی سەرەکی
        </Link>
      </div>
    </div>
  );
}
