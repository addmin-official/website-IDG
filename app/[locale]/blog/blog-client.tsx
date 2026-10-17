'use client';

import React, { useState, useMemo } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Breadcrumbs from '@/components/Breadcrumbs';
import BlogCard, { BlogPostData } from '@/components/BlogCard';
import { useLocale } from '@/lib/locale-context';
import { BookOpen, Search, X, ChevronLeft, ChevronRight } from 'lucide-react';

interface BlogClientProps {
  locale: string;
  posts: BlogPostData[];
}

const POSTS_PER_PAGE = 5;

export default function BlogClient({ locale, posts }: BlogClientProps) {
  const { isRtl } = useLocale();

  const [searchQuery, setSearchQuery] = useState('');
  const [selectedTag, setSelectedTag] = useState<string | null>(null);
  const [currentPage, setCurrentPage] = useState(1);

  // Extract all unique tags
  const allTags = useMemo(() => {
    const tagSet = new Set<string>();
    posts.forEach((p) => {
      p.tags?.forEach((tag) => tagSet.add(tag));
    });
    return Array.from(tagSet);
  }, [posts]);

  // Filter posts based on search query & selected tag
  const filteredPosts = useMemo(() => {
    return posts.filter((post) => {
      const matchesSearch =
        searchQuery.trim() === '' ||
        post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.author.toLowerCase().includes(searchQuery.toLowerCase());

      const matchesTag =
        selectedTag === null || (post.tags && post.tags.includes(selectedTag));

      return matchesSearch && matchesTag;
    });
  }, [posts, searchQuery, selectedTag]);

  // Pagination calculation
  const totalPages = Math.ceil(filteredPosts.length / POSTS_PER_PAGE) || 1;
  const currentSafePage = Math.min(currentPage, totalPages);

  const paginatedPosts = useMemo(() => {
    const startIndex = (currentSafePage - 1) * POSTS_PER_PAGE;
    return filteredPosts.slice(startIndex, startIndex + POSTS_PER_PAGE);
  }, [filteredPosts, currentSafePage]);

  const handleTagClick = (tag: string) => {
    if (selectedTag === tag) {
      setSelectedTag(null);
    } else {
      setSelectedTag(tag);
      setCurrentPage(1);
    }
  };

  const clearFilters = () => {
    setSearchQuery('');
    setSelectedTag(null);
    setCurrentPage(1);
  };

  return (
    <div
      dir={isRtl ? 'rtl' : 'ltr'}
      lang={locale}
      className="min-h-screen bg-[#060D1A] text-slate-100 flex flex-col justify-between overflow-x-hidden w-full max-w-full"
    >
      <Navbar />

      <main id="main-content" className="flex-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 w-full">
        <Breadcrumbs
          items={[
            {
              label: locale === 'ku' ? 'بلۆگ' : locale === 'ar' ? 'المدونة' : 'Blog',
            },
          ]}
        />

        <div className="mt-8 mb-8">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#102447]/60 border border-[#193B73] text-xs font-semibold text-[#60A5FA] mb-4">
            <BookOpen className="w-3.5 h-3.5" />
            <span>
              {locale === 'ku'
                ? 'دیدگا و بڵاوکراوە فەرمییەکان'
                : locale === 'ar'
                ? 'الرؤى والمنشورات الرسمية'
                : 'Official Perspectives & Editorial'}
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-4 tracking-tight">
            {locale === 'ku' ? 'بلۆگ و تێڕوانینەکان' : locale === 'ar' ? 'المدونة والرؤى' : 'Blog & Insights'}
          </h1>
          <p className="text-slate-400 text-sm sm:text-base max-w-2xl leading-relaxed">
            {locale === 'ku'
              ? 'دوایین وتارەکان، تێڕوانینە ستراتیژییەکان، و پێشکەوتنە تەکنەلۆژییەکانی دەروازەی دیجیتاڵیی عێراق لەسەر سەروەریی دیجیتاڵی و سیستەمە متمانەپێکراوەکان.'
              : locale === 'ar'
              ? 'أحدث المقالات والرؤى الاستراتيجية والتطورات التقنية من بوابة العراق الرقمية حول السيادة الرقمية والأنظمة الوطنية الموثوقة.'
              : 'Latest strategic insights, technology analysis, and national digital infrastructure perspectives from Iraq Digital Gateway.'}
          </p>
        </div>

        {/* Search & Tag Filter Bar */}
        <div className="mb-8 p-4 sm:p-5 rounded-2xl bg-[#0B172E] border border-[#102447] flex flex-col gap-4">
          <div className="relative w-full">
            <Search className={`absolute top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 ${isRtl ? 'right-3' : 'left-3'}`} />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => {
                setSearchQuery(e.target.value);
                setCurrentPage(1);
              }}
              placeholder={
                locale === 'ku'
                  ? 'گەڕان بەپێی ناونیشان یان نووسەر...'
                  : locale === 'ar'
                  ? 'البحث حسب العنوان أو الكاتب...'
                  : 'Search articles by title or author...'
              }
              className={`w-full py-2.5 rounded-xl bg-[#060D1A] border border-[#193B73] text-sm text-white placeholder-slate-500 focus:outline-none focus:border-[#2563EB] transition-colors ${
                isRtl ? 'pr-9 pl-9' : 'pl-9 pr-9'
              }`}
            />
            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery('')}
                className={`absolute top-1/2 -translate-y-1/2 p-1 text-slate-400 hover:text-white ${isRtl ? 'left-2.5' : 'right-2.5'}`}
              >
                <X className="w-3.5 h-3.5" />
              </button>
            )}
          </div>

          {allTags.length > 0 && (
            <div className="flex items-center gap-2 flex-wrap">
              <span className="text-xs font-medium text-slate-400 shrink-0">
                {locale === 'ku' ? 'تاگەکان:' : locale === 'ar' ? 'التصنيفات:' : 'Tags:'}
              </span>
              <button
                type="button"
                onClick={() => {
                  setSelectedTag(null);
                  setCurrentPage(1);
                }}
                className={`text-xs px-2.5 py-1 rounded-lg font-medium transition-colors ${
                  selectedTag === null
                    ? 'bg-[#2563EB] text-white'
                    : 'bg-[#102447] text-slate-300 hover:bg-[#193B73] hover:text-white'
                }`}
              >
                {locale === 'ku' ? 'هەموو' : locale === 'ar' ? 'الكل' : 'All'}
              </button>
              {allTags.map((tag) => (
                <button
                  key={tag}
                  type="button"
                  onClick={() => handleTagClick(tag)}
                  className={`text-xs px-2.5 py-1 rounded-lg font-medium transition-colors ${
                    selectedTag === tag
                      ? 'bg-[#2563EB] text-white shadow-sm shadow-[#2563EB]/40'
                      : 'bg-[#102447] text-slate-300 hover:bg-[#193B73] hover:text-white'
                  }`}
                >
                  #{tag}
                </button>
              ))}

              {(selectedTag !== null || searchQuery !== '') && (
                <button
                  type="button"
                  onClick={clearFilters}
                  className="text-xs text-red-400 hover:text-red-300 underline font-medium cursor-pointer ms-auto"
                >
                  {locale === 'ku' ? 'پاککردنەوەی فلتەر' : locale === 'ar' ? 'إعادة ضبط' : 'Reset filters'}
                </button>
              )}
            </div>
          )}
        </div>

        {/* Post Grid */}
        {paginatedPosts.length > 0 ? (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-10">
              {paginatedPosts.map((post) => (
                <BlogCard
                  key={post.id}
                  post={post}
                  locale={locale}
                  isRtl={isRtl}
                  onTagClick={handleTagClick}
                />
              ))}
            </div>

            {/* Pagination Controls */}
            {totalPages > 1 && (
              <div className="flex items-center justify-center gap-2 py-6 border-t border-[#102447]">
                <button
                  type="button"
                  onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
                  disabled={currentSafePage === 1}
                  className="p-2 rounded-lg bg-[#0B172E] border border-[#102447] text-slate-300 hover:text-white hover:border-[#1D5BD8] disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
                  aria-label="Previous Page"
                >
                  {isRtl ? <ChevronRight className="w-4 h-4" /> : <ChevronLeft className="w-4 h-4" />}
                </button>

                {Array.from({ length: totalPages }, (_, idx) => idx + 1).map((pageNum) => (
                  <button
                    key={pageNum}
                    type="button"
                    onClick={() => setCurrentPage(pageNum)}
                    className={`w-9 h-9 rounded-lg font-medium text-xs transition-colors ${
                      currentSafePage === pageNum
                        ? 'bg-[#2563EB] text-white font-bold'
                        : 'bg-[#0B172E] border border-[#102447] text-slate-300 hover:text-white hover:border-[#1D5BD8]'
                    }`}
                  >
                    {pageNum}
                  </button>
                ))}

                <button
                  type="button"
                  onClick={() => setCurrentPage((p) => Math.min(p + 1, totalPages))}
                  disabled={currentSafePage === totalPages}
                  className="p-2 rounded-lg bg-[#0B172E] border border-[#102447] text-slate-300 hover:text-white hover:border-[#1D5BD8] disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
                  aria-label="Next Page"
                >
                  {isRtl ? <ChevronLeft className="w-4 h-4" /> : <ChevronRight className="w-4 h-4" />}
                </button>
              </div>
            )}
          </>
        ) : (
          <div className="rounded-2xl border border-[#102447] bg-[#0B172E]/60 p-8 sm:p-12 text-center">
            <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-[#102447] flex items-center justify-center text-[#60A5FA]">
              <BookOpen className="w-8 h-8" />
            </div>
            <h2 className="text-xl font-bold text-white mb-2">
              {locale === 'ku' ? 'هیچ وتارێک نەدۆزرایەوە' : locale === 'ar' ? 'لم يتم العثور على مقالات' : 'No articles found'}
            </h2>
            <p className="text-sm text-slate-400 max-w-md mx-auto mb-4">
              {locale === 'ku'
                ? 'تکایە فلتەرەکان پاک بکەرەوە یان بە وشەیەکی تر گەڕان ئەنجام بدە.'
                : locale === 'ar'
                ? 'يرجى إعادة ضبط الفلاتر أو المحاولة بكلمات بحث أخرى.'
                : 'Please reset your active filters or try a different search term.'}
            </p>
            {(searchQuery || selectedTag) && (
              <button
                type="button"
                onClick={clearFilters}
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-[#2563EB] text-white text-xs font-semibold hover:bg-blue-600 transition"
              >
                {locale === 'ku' ? 'پاککردنەوەی فلتەر' : locale === 'ar' ? 'إعادة ضبط الفلاتر' : 'Reset filters'}
              </button>
            )}
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
}
