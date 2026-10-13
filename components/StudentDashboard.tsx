'use client';

import React, { useState } from 'react';
import { Language } from '@/lib/translations';
import {
  GraduationCap,
  BookOpen,
  Sparkles,
  CheckCircle2,
  Clock,
  Target,
  TrendingUp,
  Flame,
  Award,
  ChevronDown,
  ChevronUp,
  Plus,
  Check,
  RotateCcw,
  Calendar,
  Zap,
  BarChart3,
  BrainCircuit,
  Volume2,
  Bookmark,
  ArrowRight,
  ArrowLeft,
  X,
  HelpCircle,
} from 'lucide-react';

interface StudentDashboardProps {
  lang: Language;
  onBackToTutor?: () => void;
  className?: string;
}

interface QuestionItem {
  id: string;
  subject: 'chemistry' | 'math' | 'physics' | 'biology';
  subjectName: { ku: string; ar: string; en: string };
  chapter: { ku: string; ar: string; en: string };
  question: { ku: string; ar: string; en: string };
  studentAnswer: { ku: string; ar: string; en: string };
  correctAnswer: { ku: string; ar: string; en: string };
  isCorrect: boolean;
  explanation: { ku: string; ar: string; en: string };
  textbookPage: number;
  timeAgo: { ku: string; ar: string; en: string };
  confidence: number;
}

interface StudyGoal {
  id: string;
  title: { ku: string; ar: string; en: string };
  subject: string;
  progress: number;
  total: number;
  unit: { ku: string; ar: string; en: string };
  deadline: { ku: string; ar: string; en: string };
  completed: boolean;
  priority: 'high' | 'medium' | 'normal';
}

export default function StudentDashboard({
  lang,
  onBackToTutor,
  className = '',
}: StudentDashboardProps) {
  const isRtl = lang === 'ku' || lang === 'ar';
  const Arrow = isRtl ? ArrowLeft : ArrowRight;

  // Selected Grade Filter
  const [selectedGrade, setSelectedGrade] = useState<'grade12' | 'grade11' | 'grade9'>('grade12');

  // Filter for Questions
  const [questionFilter, setQuestionFilter] = useState<'all' | 'chemistry' | 'math' | 'physics' | 'biology'>('all');
  const [expandedQuestionId, setExpandedQuestionId] = useState<string | null>('q-1');

  // Interactive quick practice question state
  const [practiceAnswer, setPracticeAnswer] = useState<number | null>(null);
  const [practiceSubmitted, setPracticeSubmitted] = useState<boolean>(false);

  // Audio simulation state
  const [playingAudioId, setPlayingAudioId] = useState<string | null>(null);

  // Study Goals state
  const [goals, setGoals] = useState<StudyGoal[]>([
    {
      id: 'g-1',
      title: {
        ku: 'تەواوکردنی بەندی ٤ی کیمیا (کیمیای ئەندامی)',
        ar: 'إتمام الفصل الرابع في الكيمياء (الكيمياء العضوية)',
        en: 'Complete Chapter 4 Chemistry (Organic Chemistry)',
      },
      subject: 'chemistry',
      progress: 18,
      total: 24,
      unit: { ku: 'لاپەڕە', ar: 'صفحة', en: 'pages' },
      deadline: { ku: 'سبەی، ٦:٠٠ ئێوارە', ar: 'غداً، ٦:٠٠ مساءً', en: 'Tomorrow, 6:00 PM' },
      completed: false,
      priority: 'high',
    },
    {
      id: 'g-2',
      title: {
        ku: 'چارەسەرکردنی ٥٠ پرسیاری وزاری بیرکاری (ساڵانی ٢٠٢٠ - ٢٠٢٥)',
        ar: 'حل ٥٠ سؤالاً وزارياً في الرياضيات (أعوام ٢٠٢٠ - ٢٠٢٥)',
        en: 'Solve 50 Ministerial Math Exam Questions (2020 - 2025)',
      },
      subject: 'math',
      progress: 38,
      total: 50,
      unit: { ku: 'پرسیار', ar: 'سؤال', en: 'questions' },
      deadline: { ku: 'پێنجشەممە', ar: 'الخميس', en: 'Thursday' },
      completed: false,
      priority: 'high',
    },
    {
      id: 'g-3',
      title: {
        ku: 'پاراستنی زنجیرەی ڕۆژانەی فێربوون بۆ ١٥ ڕۆژ',
        ar: 'الحفاظ على وتيرة الدراسة اليومية المتواصلة لـ ١٥ يوماً',
        en: 'Maintain 15-day daily learning streak',
      },
      subject: 'general',
      progress: 14,
      total: 15,
      unit: { ku: 'ڕۆژ', ar: 'يوم', en: 'days' },
      deadline: { ku: 'ئەمشەو', ar: 'الليلة', en: 'Tonight' },
      completed: false,
      priority: 'medium',
    },
    {
      id: 'g-4',
      title: {
        ku: 'پێداچوونەوە بە هاوکێشەکانی کارەبا و موگناتیسی فیزیا',
        ar: 'مراجعة قوانين الكهرومغناطيسية في مادة الفيزياء',
        en: 'Review Electromagnetism Formulas in Physics',
      },
      subject: 'physics',
      progress: 12,
      total: 12,
      unit: { ku: 'یاسا', ar: 'قانون', en: 'formulas' },
      deadline: { ku: 'تەواوکراوە', ar: 'مكتمل', en: 'Completed' },
      completed: true,
      priority: 'normal',
    },
  ]);

  // New goal modal / inline state
  const [isAddGoalOpen, setIsAddGoalOpen] = useState(false);
  const [newGoalTitle, setNewGoalTitle] = useState('');
  const [newGoalTotal, setNewGoalTotal] = useState('20');
  const [newGoalDeadline, setNewGoalDeadline] = useState('');

  // Sample Recently Answered Questions
  const initialQuestions: QuestionItem[] = [
    {
      id: 'q-1',
      subject: 'chemistry',
      subjectName: { ku: 'کیمیا', ar: 'الكيمياء', en: 'Chemistry' },
      chapter: {
        ku: 'بەندی ٣: هاوسەنگیی کیمیایی',
        ar: 'الفصل ٣: الاتزان الكيميائي',
        en: 'Chapter 3: Chemical Equilibrium',
      },
      question: {
        ku: 'کاتێک لە کارلێکی هاوسەنگی گازی دا پەستان بەرز دەکرێتەوە، ئاراستەی هاوسەنگی بەرەو کام لایەن لادەدات؟',
        ar: 'عند زيادة الضغط في تفاعل اتزان غازي، إلى أي جهة ينزاح الاتزان الكيميائي؟',
        en: 'When pressure is increased in a gaseous equilibrium system, which direction does the equilibrium shift?',
      },
      studentAnswer: {
        ku: 'بەرەو ئەو لایەنەی کە ژمارەی مۆڵە گازییەکانی کەمترە (پرەنسیپی لوشاتلییە)',
        ar: 'نحو الطرف الذي يحتوي على عدد مولات غازية أقل (مبدأ لوشاتيليه)',
        en: 'Toward the side with fewer moles of gas (Le Chatelier’s principle)',
      },
      correctAnswer: {
        ku: 'بەرەو ئەو لایەنەی کە ژمارەی مۆڵە گازییەکانی کەمترە',
        ar: 'نحو الطرف ذي عدد المولات الغازية الأقل',
        en: 'Toward the side with fewer gas moles',
      },
      isCorrect: true,
      explanation: {
        ku: 'بەپێی پرەنسیپی لوشاتلییە، زیادبوونی پەستان وا لە سیستمەکە دەکات کارلێک بەرەو ئەو لایە ببات کە قەبارە و ژمارەی مۆڵی کەمترە تا کاریگەریی گوشارەکە کەم بکاتەوە.',
        ar: 'وفقاً لقاعدة لوشاتيليه، يؤدي رفع الضغط إلى إزاحة موضع الاتزان نحو الاتجاه الذي يقلل من حجم النظام وعدد المولات لتخفيف أثر الزيادة.',
        en: 'According to Le Chatelier’s principle, an increase in pressure shifts the equilibrium toward the side with fewer gaseous moles to counteract the stress.',
      },
      textbookPage: 83,
      timeAgo: { ku: '١٢ خولەک لەمەوبەر', ar: 'قبل ١٢ دقيقة', en: '12 mins ago' },
      confidence: 99,
    },
    {
      id: 'q-2',
      subject: 'math',
      subjectName: { ku: 'بیرکاری', ar: 'الرياضيات', en: 'Mathematics' },
      chapter: {
        ku: 'بەندی ٥: داتاشراو و لێکەوت',
        ar: 'الفصل ٥: التفاضل والمماس',
        en: 'Chapter 5: Derivatives & Tangents',
      },
      question: {
        ku: 'لێژیی هێڵی لێکەوتی نەخشەی f(x) = x² - 4x + 5 لە خاڵی x = 3 یەکسانە بە چەند؟',
        ar: 'ما هو ميل مماس الدالة f(x) = x² - 4x + 5 عند النقطة x = 3؟',
        en: 'What is the slope of the tangent line to the curve f(x) = x² - 4x + 5 at x = 3?',
      },
      studentAnswer: {
        ku: 'f\'(3) = 2(3) - 4 = 2',
        ar: 'f\'(3) = 2(3) - 4 = 2',
        en: 'f\'(3) = 2(3) - 4 = 2',
      },
      correctAnswer: {
        ku: 'm = 2',
        ar: 'm = 2',
        en: 'm = 2',
      },
      isCorrect: true,
      explanation: {
        ku: 'داتاشراوی نەخشەکە بریتییە لە f\'(x) = 2x - 4. کاتێک x=3 دادەنێین، بەهای لێژایی دەبێتە: 2(3) - 4 = 2.',
        ar: 'مشتقة الدالة هي f\'(x) = 2x - 4. بالتعويض عن x=3، نحصل على الميل: 2(3) - 4 = 2.',
        en: 'The derivative is f\'(x) = 2x - 4. Substituting x=3 gives the slope: 2(3) - 4 = 2.',
      },
      textbookPage: 112,
      timeAgo: { ku: '٤٥ خولەک لەمەوبەر', ar: 'قبل ٤٥ دقيقة', en: '45 mins ago' },
      confidence: 98,
    },
    {
      id: 'q-3',
      subject: 'physics',
      subjectName: { ku: 'فیزیا', ar: 'الفيزياء', en: 'Physics' },
      chapter: {
        ku: 'بەندی ٢: یاسای ئۆم و بەرگری',
        ar: 'الفصل ٢: قانون أوم والمقاومة',
        en: 'Chapter 2: Ohm’s Law & Resistance',
      },
      question: {
        ku: 'ئەگەر درێژیی تەلێکی گەیەنەر دوو هێندە بکرێت بەبێ گۆڕانی ڕووبەری بڕگە، بەرگرییەکەی چی لێدێت؟',
        ar: 'إذا تضاعف طول سلك موصل دون تغيير في مساحة مقطعه العرضي، ماذا يحدث لمقاومته؟',
        en: 'If the length of a conductive wire is doubled without changing its cross-sectional area, what happens to its resistance?',
      },
      studentAnswer: {
        ku: 'بەرگرییەکە دوو هێندە دەبێت (R = ρ·L/A)',
        ar: 'تتضاعف المقاومة للضعف (R = ρ·L/A)',
        en: 'Resistance doubles (R = ρ·L/A)',
      },
      correctAnswer: {
        ku: 'دوو هێندە زیاد دەکات',
        ar: 'تزداد بمقدار الضعف',
        en: 'Doubles proportionally',
      },
      isCorrect: true,
      explanation: {
        ku: 'بەرگری لەگەڵ درێژیی تەل پەیوەندیی ڕاستەوانەی هەیە (R ∝ L)، بۆیە دووهێندەبوونی درێژی دەبێتە هۆی دووهێندەبوونی بەرگری.',
        ar: 'تتناسب المقاومة طردياً مع طول الموصل (R ∝ L)، وبالتالي مضاعفة الطول تؤدي إلى مضاعفة قيمة المقاومة.',
        en: 'Resistance is directly proportional to wire length (R ∝ L), so doubling the length directly doubles the resistance.',
      },
      textbookPage: 64,
      timeAgo: { ku: '٢ کاتژمێر لەمەوبەر', ar: 'قبل ساعتين', en: '2 hours ago' },
      confidence: 97,
    },
    {
      id: 'q-4',
      subject: 'biology',
      subjectName: { ku: 'زیندەزانی', ar: 'علم الأحياء', en: 'Biology' },
      chapter: {
        ku: 'بەندی ٦: بۆماوەزانی و ترشە ناوکییەکان',
        ar: 'الفصل ٦: الوراثة والأحماض النووية',
        en: 'Chapter 6: Genetics & Nucleic Acids',
      },
      question: {
        ku: 'چەند بەستەری هایدرۆجینی لە نێوان ئەدینین (A) و تایمین (T) دا لە گەردی DNA دا دروست دەبێت؟',
        ar: 'كم عدد الروابط الهيدروجينية التي تتكون بين الأدينين (A) والثايمين (T) في جزيء DNA؟',
        en: 'How many hydrogen bonds form between Adenine (A) and Thymine (T) in a DNA double helix?',
      },
      studentAnswer: {
        ku: '٢ بەستەری هایدرۆجینی',
        ar: 'رابطتان هيدروجينيتان',
        en: '2 hydrogen bonds',
      },
      correctAnswer: {
        ku: 'دوو بەستەری هایدرۆجینی (لە کاتێکدا لە نێوان G و C دا سێ بەستەرە)',
        ar: 'رابطتان هيدروجينيتان (بينما بين G و C ثلاث روابط)',
        en: 'Two hydrogen bonds (compared to three between G and C)',
      },
      isCorrect: true,
      explanation: {
        ku: 'بنەمای جووتبوونی گازی ئەدینین و تایمین هەمیشە بە ٢ بەستەری هایدرۆجینی بەیەکەوە دەبەسترێنەوە بەپێی یاسای چێرگاف.',
        ar: 'تتطابق القواعد النيتروجينية A مع T برابطتين هيدروجينيتين فقط وفق قاعدة تشارجاف، مما يمنح الحمض النووي استقراره المزدوج.',
        en: 'Base pairing between Adenine and Thymine is consistently held together by exactly two hydrogen bonds according to Chargaff’s rule.',
      },
      textbookPage: 148,
      timeAgo: { ku: 'دوێنێ', ar: 'أمس', en: 'Yesterday' },
      confidence: 100,
    },
  ];

  // Subject Stats Data
  const subjectStats = [
    {
      name: { ku: 'کیمیا', ar: 'الكيمياء', en: 'Chemistry' },
      color: 'from-purple-500 to-indigo-500',
      bgLight: 'bg-purple-950/40 border-purple-800/60 text-purple-300',
      progress: 84,
      questionsCount: '١٤٢ / ١٧٠',
      accuracy: '٩٦٪',
      gradeText: { ku: 'نایاب', ar: 'ممتاز', en: 'Excellent' },
    },
    {
      name: { ku: 'بیرکاری', ar: 'الرياضيات', en: 'Mathematics' },
      color: 'from-blue-500 to-cyan-500',
      bgLight: 'bg-blue-950/40 border-blue-800/60 text-blue-300',
      progress: 78,
      questionsCount: '١١٨ / ١٥٠',
      accuracy: '٩٢٪',
      gradeText: { ku: 'زۆر باش', ar: 'جيد جداً', en: 'Very Good' },
    },
    {
      name: { ku: 'فیزیا', ar: 'الفيزياء', en: 'Physics' },
      color: 'from-emerald-500 to-teal-500',
      bgLight: 'bg-emerald-950/40 border-emerald-800/60 text-emerald-300',
      progress: 72,
      questionsCount: '٩٤ / ١٣٠',
      accuracy: '٨٩٪',
      gradeText: { ku: 'باش', ar: 'جيد', en: 'Good' },
    },
    {
      name: { ku: 'زیندەزانی', ar: 'علم الأحياء', en: 'Biology' },
      color: 'from-amber-500 to-orange-500',
      bgLight: 'bg-amber-950/40 border-amber-800/60 text-amber-300',
      progress: 89,
      questionsCount: '١٢٨ / ١٤٤',
      accuracy: '٩٧٪',
      gradeText: { ku: 'نایاب', ar: 'ممتاز', en: 'Excellent' },
    },
  ];

  const filteredQuestions =
    questionFilter === 'all'
      ? initialQuestions
      : initialQuestions.filter((q) => q.subject === questionFilter);

  const toggleGoal = (goalId: string) => {
    setGoals((prev) =>
      prev.map((g) => {
        if (g.id === goalId) {
          const nextState = !g.completed;
          return {
            ...g,
            completed: nextState,
            progress: nextState ? g.total : Math.floor(g.total * 0.75),
          };
        }
        return g;
      })
    );
  };

  const handleAddGoal = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newGoalTitle.trim()) return;

    const totalNum = parseInt(newGoalTotal, 10) || 10;
    const newGoal: StudyGoal = {
      id: `g-${Date.now()}`,
      title: {
        ku: newGoalTitle,
        ar: newGoalTitle,
        en: newGoalTitle,
      },
      subject: 'custom',
      progress: 0,
      total: totalNum,
      unit: { ku: 'ئەرک', ar: 'مهمة', en: 'tasks' },
      deadline: {
        ku: newGoalDeadline || 'ئەم هەفتەیە',
        ar: newGoalDeadline || 'هذا الأسبوع',
        en: newGoalDeadline || 'This week',
      },
      completed: false,
      priority: 'high',
    };

    setGoals((prev) => [newGoal, ...prev]);
    setNewGoalTitle('');
    setNewGoalDeadline('');
    setIsAddGoalOpen(false);
  };

  const handleSimulateAudio = (id: string) => {
    if (playingAudioId === id) {
      setPlayingAudioId(null);
    } else {
      setPlayingAudioId(id);
      setTimeout(() => {
        setPlayingAudioId(null);
      }, 4000);
    }
  };

  return (
    <div
      className={`rounded-xl bg-slate-950 border border-slate-800 text-slate-100 p-4 sm:p-6 shadow-2xl font-sans overflow-hidden ${className}`}
      dir={isRtl ? 'rtl' : 'ltr'}
    >
      {/* Top Header Bar */}
      <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-slate-800">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-purple-600 to-blue-500 p-0.5 shadow-md flex items-center justify-center shrink-0">
            <div className="w-full h-full bg-slate-950 rounded-[10px] flex items-center justify-center">
              <GraduationCap className="w-5 h-5 text-purple-400" />
            </div>
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h3 className="text-base sm:text-lg font-bold text-white tracking-tight flex items-center gap-2">
                <span>
                  {lang === 'ku'
                    ? 'پانێڵی زیرەکی چاودێریی قوتابی'
                    : lang === 'ar'
                    ? 'لوحة متابعة الطالب الذكية'
                    : 'Smart Student Dashboard'}
                </span>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-purple-900/50 text-purple-300 border border-purple-800/70">
                  {lang === 'ku' ? 'ئەکادیمیای زانا' : lang === 'ar' ? 'أكاديمية زانا' : 'ZaNa Academy'}
                </span>
              </h3>
            </div>
            <p className="text-xs text-slate-400">
              {lang === 'ku'
                ? 'چاودێریی ڕاستەوخۆی فێربوون، شیکاریی پرسیارەکان و ئامانجەکانی خوێندن'
                : lang === 'ar'
                ? 'متابعة حية للتقدم الدراسي، سجل الإجابات، والأهداف التعليمية'
                : 'Real-time learning telemetry, recent question breakdown, and study targets'}
            </p>
          </div>
        </div>

        {/* Grade Selector & Controls */}
        <div className="flex items-center gap-2">
          {onBackToTutor && (
            <button
              onClick={onBackToTutor}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900 hover:bg-slate-800 border border-slate-700 text-slate-300 text-xs font-medium transition"
            >
              <Arrow className="w-3.5 h-3.5" />
              <span>{lang === 'ku' ? 'گەڕانەوە بۆ مامۆستای زیرەک' : lang === 'ar' ? 'العودة للمُعلم' : 'AI Tutor Workspace'}</span>
            </button>
          )}

          {/* Grade selection pills */}
          <div className="inline-flex p-1 bg-slate-900 rounded-lg border border-slate-800 text-xs font-medium">
            <button
              onClick={() => setSelectedGrade('grade12')}
              className={`px-2.5 py-1 rounded-md transition ${
                selectedGrade === 'grade12'
                  ? 'bg-purple-600 text-white shadow-xs'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              {lang === 'ku' ? '١٢ی زانستی' : lang === 'ar' ? '١٢ علمي' : 'Grade 12'}
            </button>
            <button
              onClick={() => setSelectedGrade('grade11')}
              className={`px-2.5 py-1 rounded-md transition ${
                selectedGrade === 'grade11'
                  ? 'bg-purple-600 text-white shadow-xs'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              {lang === 'ku' ? '١١ی زانستی' : lang === 'ar' ? '١١ علمي' : 'Grade 11'}
            </button>
            <button
              onClick={() => setSelectedGrade('grade9')}
              className={`px-2.5 py-1 rounded-md transition ${
                selectedGrade === 'grade9'
                  ? 'bg-purple-600 text-white shadow-xs'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              {lang === 'ku' ? '٩ی بنەڕەتی' : lang === 'ar' ? '٩ أساسي' : 'Grade 9'}
            </button>
          </div>
        </div>
      </div>

      {/* SECTION 1: REAL-TIME PROGRESS STATISTICS */}
      <div className="my-6">
        <div className="flex items-center justify-between mb-3">
          <span className="text-xs font-bold uppercase tracking-wider text-slate-400 flex items-center gap-1.5">
            <TrendingUp className="w-4 h-4 text-emerald-400" />
            <span>
              {lang === 'ku'
                ? 'ئامارەکانی پێشکەوتنی ڕاستەوخۆ'
                : lang === 'ar'
                ? 'إحصائيات التقدم المباشر'
                : 'Real-Time Progress Statistics'}
            </span>
          </span>
          <span className="inline-flex items-center gap-1.5 text-[11px] font-mono text-emerald-400 bg-emerald-950/60 px-2 py-0.5 rounded border border-emerald-800/80">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>{lang === 'ku' ? 'ڕاستەوخۆ بەستراوەتەوە' : lang === 'ar' ? 'مزامنة حية' : 'LIVE SYNC'}</span>
          </span>
        </div>

        {/* Highlight Cards Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 mb-4">
          {/* Card 1: Study Streak */}
          <div className="bg-slate-900/90 border border-slate-800 rounded-xl p-3.5 relative overflow-hidden group hover:border-amber-500/50 transition">
            <div className="flex items-center justify-between text-xs text-slate-400 mb-1">
              <span>{lang === 'ku' ? 'زنجیرەی بەردەوامی' : lang === 'ar' ? 'أيام الاستمرار' : 'Study Streak'}</span>
              <Flame className="w-4 h-4 text-amber-400 animate-bounce" />
            </div>
            <div className="flex items-baseline gap-2">
              <span className="text-2xl font-extrabold text-amber-400 font-mono">
                {lang === 'ku' ? '١٤' : lang === 'ar' ? '١٤' : '14'}
              </span>
              <span className="text-xs text-slate-400">
                {lang === 'ku' ? 'ڕۆژی بەردەوام' : lang === 'ar' ? 'يوماً متواصلاً' : 'days streak'}
              </span>
            </div>
            <div className="mt-2 text-[10px] text-slate-400 flex items-center justify-between">
              <span>{lang === 'ku' ? 'ئەمشەو تەواو بکە' : lang === 'ar' ? 'حافظ على السلسلة' : 'Complete today'}</span>
              <span className="text-amber-400 font-bold font-mono">+50 XP</span>
            </div>
          </div>

          {/* Card 2: Questions Mastered */}
          <div className="bg-slate-900/90 border border-slate-800 rounded-xl p-3.5 relative overflow-hidden group hover:border-purple-500/50 transition">
            <div className="flex items-center justify-between text-xs text-slate-400 mb-1">
              <span>{lang === 'ku' ? 'پرسیاری ماستەرکراو' : lang === 'ar' ? 'الأسئلة المتقنة' : 'Questions Mastered'}</span>
              <Award className="w-4 h-4 text-purple-400" />
            </div>
            <div className="flex items-baseline gap-2">
              <span className="text-2xl font-extrabold text-purple-400 font-mono">
                {lang === 'ku' ? '٤٨٢' : lang === 'ar' ? '٤٨٢' : '482'}
              </span>
              <span className="text-xs text-slate-400">/ 600</span>
            </div>
            <div className="mt-2 text-[10px] text-slate-400 flex items-center justify-between">
              <span>{lang === 'ku' ? 'ڕێژەی دروستی' : lang === 'ar' ? 'دقة الإجابات' : 'Accuracy'}</span>
              <span className="text-emerald-400 font-bold font-mono">94.2%</span>
            </div>
          </div>

          {/* Card 3: Curriculum Coverage */}
          <div className="bg-slate-900/90 border border-slate-800 rounded-xl p-3.5 relative overflow-hidden group hover:border-blue-500/50 transition">
            <div className="flex items-center justify-between text-xs text-slate-400 mb-1">
              <span>{lang === 'ku' ? 'داپۆشینی پڕۆگرام' : lang === 'ar' ? 'تغطية المنهج' : 'Curriculum Coverage'}</span>
              <BookOpen className="w-4 h-4 text-blue-400" />
            </div>
            <div className="flex items-baseline gap-2">
              <span className="text-2xl font-extrabold text-blue-400 font-mono">
                {lang === 'ku' ? '٨١٪' : lang === 'ar' ? '٨١٪' : '81%'}
              </span>
              <span className="text-xs text-slate-400">
                {lang === 'ku' ? 'کتێبی فەرمی' : lang === 'ar' ? 'الكتب الرسمية' : 'official books'}
              </span>
            </div>
            <div className="mt-2 text-[10px] text-slate-400 flex items-center justify-between">
              <span>{lang === 'ku' ? 'تەواوکراو' : lang === 'ar' ? 'مكتمل' : 'Completed'}</span>
              <span className="text-blue-400 font-bold font-mono">301 / 371 p.</span>
            </div>
          </div>

          {/* Card 4: Study Time Today */}
          <div className="bg-slate-900/90 border border-slate-800 rounded-xl p-3.5 relative overflow-hidden group hover:border-emerald-500/50 transition">
            <div className="flex items-center justify-between text-xs text-slate-400 mb-1">
              <span>{lang === 'ku' ? 'کاتی خوێندنی ئەمڕۆ' : lang === 'ar' ? 'وقت اليوم' : 'Study Time Today'}</span>
              <Clock className="w-4 h-4 text-emerald-400" />
            </div>
            <div className="flex items-baseline gap-2">
              <span className="text-2xl font-extrabold text-emerald-400 font-mono">
                {lang === 'ku' ? '٥٨' : lang === 'ar' ? '٥٨' : '58'}
              </span>
              <span className="text-xs text-slate-400">
                {lang === 'ku' ? 'خولەک' : lang === 'ar' ? 'دقيقة' : 'minutes'}
              </span>
            </div>
            <div className="mt-2 text-[10px] text-slate-400 flex items-center justify-between">
              <span>{lang === 'ku' ? 'ئاست لە هەرێم' : lang === 'ar' ? 'الترتيب' : 'Regional Rank'}</span>
              <span className="text-purple-400 font-bold font-mono">Top 4%</span>
            </div>
          </div>
        </div>

        {/* Subject Breakdown Bars */}
        <div className="bg-slate-900/70 border border-slate-800 rounded-xl p-4">
          <div className="flex items-center justify-between mb-3 text-xs">
            <span className="font-semibold text-slate-300 flex items-center gap-1.5">
              <BarChart3 className="w-4 h-4 text-purple-400" />
              <span>{lang === 'ku' ? 'ئاستی شارەزایی بەپێی بابەتەکان' : lang === 'ar' ? 'مستوى الإتقان بحسب المواد الدراسية' : 'Subject Mastery Progress'}</span>
            </span>
            <span className="text-[11px] text-slate-400 font-mono">
              {lang === 'ku' ? 'پۆلی ١٢ زانستی — وەزارەتی پەروەردە' : lang === 'ar' ? 'الصف ١٢ العلمي — وزارة التربية' : 'Grade 12 Scientific — MoE'}
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {subjectStats.map((sub, idx) => (
              <div key={idx} className="bg-slate-950/80 rounded-lg p-3 border border-slate-800">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-bold text-white">
                    {sub.name[lang] || sub.name.ku}
                  </span>
                  <span className={`text-[10px] px-1.5 py-0.5 rounded font-mono ${sub.bgLight}`}>
                    {sub.accuracy}
                  </span>
                </div>
                <div className="w-full h-2 bg-slate-900 rounded-full overflow-hidden mb-2">
                  <div
                    className={`h-full bg-gradient-to-r ${sub.color} rounded-full transition-all duration-300`}
                    style={{ width: `${sub.progress}%` }}
                  />
                </div>
                <div className="flex justify-between items-center text-[10px] text-slate-400 font-mono">
                  <span>{sub.questionsCount}</span>
                  <span className="text-emerald-400 font-bold">{sub.progress}%</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* SECTION 2 & 3 SPLIT: RECENT QUESTIONS & UPCOMING GOALS */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 my-6">
        {/* RECENTLY ANSWERED QUESTIONS (7 COLS) */}
        <div className="lg:col-span-7 bg-slate-900/80 rounded-xl p-4 sm:p-5 border border-slate-800 flex flex-col justify-between">
          <div>
            <div className="flex flex-wrap items-center justify-between gap-2 mb-4 pb-3 border-b border-slate-800">
              <div className="flex items-center gap-2">
                <div className="p-1.5 rounded-lg bg-purple-950 border border-purple-800 text-purple-400">
                  <BrainCircuit className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs sm:text-sm font-bold text-white">
                    {lang === 'ku'
                      ? 'پرسیارە وەڵامدراوەکانی ئەم دوایییە'
                      : lang === 'ar'
                      ? 'الأسئلة المُجابة مؤخراً'
                      : 'Recently Answered Questions'}
                  </h4>
                  <span className="text-[11px] text-slate-400">
                    {lang === 'ku'
                      ? 'وەڵامەکان ڕاستەوخۆ بە کتێبی فەرمی و مامۆستای زیرەک بەستراونەتەوە'
                      : lang === 'ar'
                      ? 'إجابات موثقة من الكتاب المدرسي الرسمي مع تعليل الذكاء الاصطناعي'
                      : 'Validated against official Kurdish textbooks with AI Tutor reasoning'}
                  </span>
                </div>
              </div>

              {/* Subject Filter Pills */}
              <div className="flex items-center gap-1 text-[11px] font-mono">
                <button
                  onClick={() => setQuestionFilter('all')}
                  className={`px-2 py-1 rounded transition ${
                    questionFilter === 'all'
                      ? 'bg-purple-600 text-white'
                      : 'bg-slate-950 text-slate-400 hover:text-slate-200'
                  }`}
                >
                  {lang === 'ku' ? 'هەموو' : lang === 'ar' ? 'الكل' : 'All'}
                </button>
                <button
                  onClick={() => setQuestionFilter('chemistry')}
                  className={`px-2 py-1 rounded transition ${
                    questionFilter === 'chemistry'
                      ? 'bg-purple-600 text-white'
                      : 'bg-slate-950 text-slate-400 hover:text-slate-200'
                  }`}
                >
                  {lang === 'ku' ? 'کیمیا' : lang === 'ar' ? 'كيمياء' : 'Chem'}
                </button>
                <button
                  onClick={() => setQuestionFilter('math')}
                  className={`px-2 py-1 rounded transition ${
                    questionFilter === 'math'
                      ? 'bg-purple-600 text-white'
                      : 'bg-slate-950 text-slate-400 hover:text-slate-200'
                  }`}
                >
                  {lang === 'ku' ? 'بیرکاری' : lang === 'ar' ? 'رياضيات' : 'Math'}
                </button>
                <button
                  onClick={() => setQuestionFilter('physics')}
                  className={`px-2 py-1 rounded transition ${
                    questionFilter === 'physics'
                      ? 'bg-purple-600 text-white'
                      : 'bg-slate-950 text-slate-400 hover:text-slate-200'
                  }`}
                >
                  {lang === 'ku' ? 'فیزیا' : lang === 'ar' ? 'فيزياء' : 'Phys'}
                </button>
              </div>
            </div>

            {/* Questions List */}
            <div className="space-y-3">
              {filteredQuestions.map((q) => {
                const isExpanded = expandedQuestionId === q.id;
                const isPlaying = playingAudioId === q.id;

                return (
                  <div
                    key={q.id}
                    className="bg-slate-950/90 rounded-lg border border-slate-800/80 hover:border-slate-700 transition overflow-hidden"
                  >
                    {/* Header */}
                    <div
                      onClick={() => setExpandedQuestionId(isExpanded ? null : q.id)}
                      className="p-3 cursor-pointer flex items-start justify-between gap-3 select-none"
                    >
                      <div className="flex-1">
                        <div className="flex flex-wrap items-center gap-2 mb-1.5">
                          <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-purple-950/80 text-purple-300 border border-purple-800/70">
                            {q.subjectName[lang] || q.subjectName.ku}
                          </span>
                          <span className="text-[10px] text-slate-400 font-mono">
                            {q.chapter[lang] || q.chapter.ku}
                          </span>
                          <span className="text-[10px] text-slate-500 font-mono">
                            • {q.timeAgo[lang] || q.timeAgo.ku}
                          </span>
                        </div>

                        <p className="text-xs text-slate-200 font-medium leading-relaxed">
                          {q.question[lang] || q.question.ku}
                        </p>
                      </div>

                      <div className="flex items-center gap-2 shrink-0">
                        <span className="inline-flex items-center gap-1 px-1.5 py-0.5 rounded text-[10px] font-mono bg-emerald-950/70 text-emerald-400 border border-emerald-800/60">
                          <CheckCircle2 className="w-3 h-3" />
                          <span>{q.confidence}%</span>
                        </span>
                        {isExpanded ? (
                          <ChevronUp className="w-4 h-4 text-slate-400" />
                        ) : (
                          <ChevronDown className="w-4 h-4 text-slate-400" />
                        )}
                      </div>
                    </div>

                    {/* Expanded Detail */}
                    {isExpanded && (
                      <div className="px-3 pb-3 pt-1 border-t border-slate-900 bg-slate-900/40 space-y-2.5 text-xs">
                        {/* Student Answer */}
                        <div className="p-2.5 rounded bg-slate-950 border border-slate-800">
                          <div className="flex justify-between items-center text-[10px] text-slate-400 mb-1">
                            <span className="font-semibold text-emerald-400 flex items-center gap-1">
                              <Check className="w-3 h-3" />
                              <span>{lang === 'ku' ? 'وەڵامی تۆماری قوتابی:' : lang === 'ar' ? 'إجابة الطالب المعتمدة:' : 'Student’s Answer:'}</span>
                            </span>
                            <span className="text-emerald-400 font-bold">
                              {lang === 'ku' ? 'دروست ١٠٠٪' : lang === 'ar' ? 'صحيحة ١٠٠٪' : 'Correct 100%'}
                            </span>
                          </div>
                          <p className="text-slate-200 text-xs leading-relaxed">
                            {q.studentAnswer[lang] || q.studentAnswer.ku}
                          </p>
                        </div>

                        {/* AI Tutor Verified Explanation */}
                        <div className="p-2.5 rounded bg-purple-950/30 border border-purple-800/50 space-y-1.5">
                          <div className="flex justify-between items-center text-[10px]">
                            <span className="font-bold text-purple-300 flex items-center gap-1.5">
                              <Sparkles className="w-3.5 h-3.5 text-purple-400" />
                              <span>{lang === 'ku' ? 'شیکردنەوەی مامۆستای زیرەک:' : lang === 'ar' ? 'توضيح المعلم الذكي:' : 'AI Tutor Explanation:'}</span>
                            </span>
                            <span className="font-mono text-purple-300 bg-purple-900/60 px-1.5 py-0.5 rounded text-[10px]">
                              {lang === 'ku' ? `کتێبی فەرمی: ل. ${q.textbookPage}` : lang === 'ar' ? `الكتاب المنهجي: ص ${q.textbookPage}` : `Textbook: P. ${q.textbookPage}`}
                            </span>
                          </div>
                          <p className="text-slate-300 text-xs leading-relaxed">
                            {q.explanation[lang] || q.explanation.ku}
                          </p>

                          {/* Kurdish Audio TTS Simulation */}
                          <div className="pt-1 flex items-center justify-between">
                            <button
                              onClick={() => handleSimulateAudio(q.id)}
                              className={`inline-flex items-center gap-1.5 text-[11px] px-2.5 py-1 rounded transition border ${
                                isPlaying
                                  ? 'bg-purple-600 text-white border-purple-500 animate-pulse'
                                  : 'bg-purple-950/80 hover:bg-purple-900/80 text-purple-200 border-purple-800/80'
                              }`}
                            >
                              <Volume2 className="w-3.5 h-3.5" />
                              <span>
                                {isPlaying
                                  ? lang === 'ku' ? 'دەنگ بە کوردی دەخوێندرێتەوە...' : lang === 'ar' ? 'جاري الاستماع للشرح الصوتي...' : 'Playing Sorani voice explanation...'
                                  : lang === 'ku' ? 'گوێگرتن لە دەنگی مامۆستا بە کوردی' : lang === 'ar' ? 'الاستماع للشرح الصوتي الكردي' : 'Listen to Kurdish Audio Explanation'}
                              </span>
                            </button>
                            <span className="text-[10px] text-slate-500 font-mono">
                              {lang === 'ku' ? 'دەنگی مامۆستای سۆرانی' : lang === 'ar' ? 'صوت سۆراني' : 'Sorani TTS'}
                            </span>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            {/* Interactive Quick Practice Question Widget */}
            <div className="mt-4 p-3.5 rounded-xl bg-gradient-to-r from-purple-950/50 to-slate-950 border border-purple-800/50">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-bold text-purple-300 flex items-center gap-1.5">
                  <HelpCircle className="w-4 h-4 text-purple-400" />
                  <span>{lang === 'ku' ? 'تاقیکردنەوەی خێرای ئێستا' : lang === 'ar' ? 'سؤال تفاعلي سريع' : 'Live Quick Practice Question'}</span>
                </span>
                <span className="text-[10px] font-mono text-emerald-400 bg-emerald-950/60 px-2 py-0.5 rounded border border-emerald-800/60">
                  +10 XP
                </span>
              </div>
              <p className="text-xs text-slate-200 mb-3">
                {lang === 'ku'
                  ? 'ئەگەر پلەی گەرمیی کارلێکێکی گەرمیدەر (Exothermic) بەرز بکرێتەوە، بەهای نەگۆڕی هاوسەنگی (Keq) چی لێدێت؟'
                  : lang === 'ar'
                  ? 'إذا تم رفع درجة حرارة تفاعل طارد للحرارة (Exothermic)، ماذا يحدث لقيمة ثابت الاتزان (Keq)؟'
                  : 'If the temperature of an exothermic reaction is increased, what happens to the equilibrium constant (Keq)?'}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                {[
                  {
                    idx: 0,
                    text: {
                      ku: 'بەهای Keq کەم دەکات',
                      ar: 'تنخفض قيمة Keq',
                      en: 'Keq value decreases',
                    },
                    correct: true,
                  },
                  {
                    idx: 1,
                    text: {
                      ku: 'بەهای Keq زیاد دەکات',
                      ar: 'تزداد قيمة Keq',
                      en: 'Keq value increases',
                    },
                    correct: false,
                  },
                  {
                    idx: 2,
                    text: {
                      ku: 'هیچ ناگۆڕێت',
                      ar: 'تبقى ثابتة دون تغيير',
                      en: 'Remains unchanged',
                    },
                    correct: false,
                  },
                  {
                    idx: 3,
                    text: {
                      ku: 'دەبێتە سفر',
                      ar: 'تصبح صفراً',
                      en: 'Becomes zero',
                    },
                    correct: false,
                  },
                ].map((opt) => (
                  <button
                    key={opt.idx}
                    onClick={() => {
                      setPracticeAnswer(opt.idx);
                      setPracticeSubmitted(true);
                    }}
                    className={`p-2 rounded text-start transition border ${
                      practiceSubmitted && opt.correct
                        ? 'bg-emerald-950/80 border-emerald-500 text-emerald-200'
                        : practiceSubmitted && practiceAnswer === opt.idx && !opt.correct
                        ? 'bg-red-950/80 border-red-500 text-red-200'
                        : practiceAnswer === opt.idx
                        ? 'bg-purple-900/60 border-purple-500 text-white'
                        : 'bg-slate-900/90 border-slate-800 text-slate-300 hover:border-slate-700'
                    }`}
                  >
                    <span className="font-mono text-slate-500 ms-1">
                      {String.fromCharCode(65 + opt.idx)}.
                    </span>{' '}
                    <span>{opt.text[lang] || opt.text.ku}</span>
                  </button>
                ))}
              </div>

              {practiceSubmitted && (
                <div className="mt-3 p-2.5 rounded bg-slate-900 border border-slate-800 text-xs text-slate-300 flex items-center justify-between">
                  <span className="flex items-center gap-1.5 text-emerald-400 font-bold">
                    <CheckCircle2 className="w-4 h-4" />
                    <span>
                      {practiceAnswer === 0
                        ? lang === 'ku' ? 'ئافەرم! وەڵامەکەت تەواوە بەپێی کتێبی کیمیای پۆلی ١٢.' : lang === 'ar' ? 'أحسنت! إجابة صحيحة طبقاً لمنهج الكيمياء.' : 'Correct! Verified by Grade 12 Chemistry curriculum.'
                        : lang === 'ku' ? 'وەڵامی دروست (A) یە: Keq کەم دەکات لە کارلێکی گەرمیدەردا.' : lang === 'ar' ? 'الإجابة الصحيحة هي (A): ينخفض Keq في التفاعل الطارد.' : 'Correct answer is (A): Keq decreases in exothermic reactions.'}
                    </span>
                  </span>
                  <button
                    onClick={() => {
                      setPracticeAnswer(null);
                      setPracticeSubmitted(false);
                    }}
                    className="inline-flex items-center gap-1 text-[11px] text-slate-400 hover:text-white"
                  >
                    <RotateCcw className="w-3 h-3" />
                    <span>{lang === 'ku' ? 'دووبارەکردنەوە' : lang === 'ar' ? 'إعادة' : 'Reset'}</span>
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* UPCOMING STUDY GOALS (5 COLS) */}
        <div className="lg:col-span-5 bg-slate-900/80 rounded-xl p-4 sm:p-5 border border-slate-800 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-4 pb-3 border-b border-slate-800">
              <div className="flex items-center gap-2">
                <div className="p-1.5 rounded-lg bg-emerald-950 border border-emerald-800 text-emerald-400">
                  <Target className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs sm:text-sm font-bold text-white">
                    {lang === 'ku'
                      ? 'ئامانجەکانی خوێندنی داهاتوو'
                      : lang === 'ar'
                      ? 'أهداف المذاكرة القادمة'
                      : 'Upcoming Study Goals'}
                  </h4>
                  <span className="text-[11px] text-slate-400">
                    {lang === 'ku'
                      ? 'بەرنامەی پێداچوونەوە و ئامادەکاری تاقیکردنەوەکان'
                      : lang === 'ar'
                      ? 'جدول المراجعة والتحضير للامتحانات الوزارية'
                      : 'Revision schedule & national exam targets'}
                  </span>
                </div>
              </div>

              <button
                onClick={() => setIsAddGoalOpen(!isAddGoalOpen)}
                className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-purple-600 hover:bg-purple-500 text-white text-xs font-medium transition shadow-xs"
              >
                <Plus className="w-3.5 h-3.5" />
                <span>{lang === 'ku' ? 'ئامانجی نوێ' : lang === 'ar' ? 'هدف جديد' : 'New Goal'}</span>
              </button>
            </div>

            {/* Inline Add Goal Form */}
            {isAddGoalOpen && (
              <form
                onSubmit={handleAddGoal}
                className="mb-4 p-3 rounded-lg bg-slate-950 border border-purple-800/80 space-y-2 text-xs"
              >
                <div className="flex justify-between items-center text-[11px] text-purple-300 font-bold">
                  <span>{lang === 'ku' ? 'دانانی ئامانجی نوێ' : lang === 'ar' ? 'إضافة هدف جديد' : 'Add New Study Target'}</span>
                  <button
                    type="button"
                    onClick={() => setIsAddGoalOpen(false)}
                    className="text-slate-500 hover:text-slate-300"
                  >
                    <X className="w-3.5 h-3.5" />
                  </button>
                </div>
                <input
                  type="text"
                  value={newGoalTitle}
                  onChange={(e) => setNewGoalTitle(e.target.value)}
                  placeholder={
                    lang === 'ku'
                      ? 'ناونیشانی ئامانجەکە (نموونە: خوێندنەوەی بەندی ٣ بیرکاری)'
                      : lang === 'ar'
                      ? 'عنوان الهدف (مثال: مراجعة الفصل ٣ في الرياضيات)'
                      : 'Goal title (e.g. Review Chapter 3 Calculus)'
                  }
                  className="w-full px-2.5 py-1.5 rounded bg-slate-900 border border-slate-700 text-white placeholder-slate-500 text-xs focus:outline-hidden focus:border-purple-500"
                />
                <div className="grid grid-cols-2 gap-2">
                  <input
                    type="text"
                    value={newGoalTotal}
                    onChange={(e) => setNewGoalTotal(e.target.value)}
                    placeholder={lang === 'ku' ? 'ژمارەی ئامانج (نم: ٢٠)' : lang === 'ar' ? 'الكمية (مثال: ٢٠)' : 'Target count (e.g. 20)'}
                    className="px-2 py-1 rounded bg-slate-900 border border-slate-700 text-white text-xs focus:outline-hidden focus:border-purple-500"
                  />
                  <input
                    type="text"
                    value={newGoalDeadline}
                    onChange={(e) => setNewGoalDeadline(e.target.value)}
                    placeholder={lang === 'ku' ? 'کات (نم: سبەی)' : lang === 'ar' ? 'الموعد (مثال: غداً)' : 'Deadline (e.g. Tomorrow)'}
                    className="px-2 py-1 rounded bg-slate-900 border border-slate-700 text-white text-xs focus:outline-hidden focus:border-purple-500"
                  />
                </div>
                <div className="flex justify-end pt-1">
                  <button
                    type="submit"
                    className="px-3 py-1 bg-purple-600 hover:bg-purple-500 text-white rounded text-xs font-semibold"
                  >
                    {lang === 'ku' ? 'زیادکردن' : lang === 'ar' ? 'حفظ الهدف' : 'Save Goal'}
                  </button>
                </div>
              </form>
            )}

            {/* Goals List */}
            <div className="space-y-3">
              {goals.map((goal) => {
                const percent = Math.min(100, Math.round((goal.progress / goal.total) * 100));

                return (
                  <div
                    key={goal.id}
                    className={`p-3 rounded-lg border transition ${
                      goal.completed
                        ? 'bg-slate-950/50 border-emerald-900/50 opacity-80'
                        : 'bg-slate-950 border-slate-800 hover:border-slate-700'
                    }`}
                  >
                    <div className="flex items-start gap-2.5 mb-2">
                      <button
                        onClick={() => toggleGoal(goal.id)}
                        className={`w-5 h-5 rounded flex items-center justify-center shrink-0 mt-0.5 border transition ${
                          goal.completed
                            ? 'bg-emerald-600 border-emerald-500 text-white'
                            : 'bg-slate-900 border-slate-700 hover:border-purple-500 text-transparent'
                        }`}
                        title={lang === 'ku' ? 'گۆڕینی دۆخی تەواوبوون' : lang === 'ar' ? 'تغيير حالة الإنجاز' : 'Toggle Completion'}
                      >
                        <Check className="w-3.5 h-3.5" />
                      </button>

                      <div className="flex-1">
                        <div className="flex items-center justify-between gap-2">
                          <h5
                            className={`text-xs font-bold leading-snug ${
                              goal.completed ? 'line-through text-slate-400' : 'text-slate-100'
                            }`}
                          >
                            {goal.title[lang] || goal.title.ku}
                          </h5>
                          {goal.priority === 'high' && !goal.completed && (
                            <span className="text-[10px] font-mono text-red-400 bg-red-950/60 px-1.5 py-0.2 rounded border border-red-800/80 shrink-0">
                              {lang === 'ku' ? 'گرنگ' : lang === 'ar' ? 'أولوية' : 'High'}
                            </span>
                          )}
                        </div>

                        <div className="flex items-center justify-between text-[11px] text-slate-400 mt-1 font-mono">
                          <span className="flex items-center gap-1">
                            <Calendar className="w-3 h-3 text-slate-500" />
                            <span>{goal.deadline[lang] || goal.deadline.ku}</span>
                          </span>
                          <span>
                            {goal.progress} / {goal.total}{' '}
                            <span className="font-sans text-[10px] text-slate-500">
                              {goal.unit[lang] || goal.unit.ku}
                            </span>
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Progress Bar */}
                    <div className="w-full h-1.5 bg-slate-900 rounded-full overflow-hidden">
                      <div
                        className={`h-full rounded-full transition-all duration-300 ${
                          goal.completed
                            ? 'bg-emerald-500'
                            : percent > 70
                            ? 'bg-purple-500'
                            : 'bg-blue-500'
                        }`}
                        style={{ width: `${percent}%` }}
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Bottom Motivation Box */}
          <div className="mt-4 p-3 rounded-lg bg-purple-950/30 border border-purple-800/50 flex items-center justify-between text-xs">
            <div className="flex items-center gap-2">
              <Zap className="w-4 h-4 text-purple-400 shrink-0" />
              <span className="text-slate-300 text-[11px]">
                {lang === 'ku'
                  ? 'بە گەیشتن بە هەموو ئامانجەکانی هەفتە، هێمای پۆلی ١٢ی باڵا بەدەست بهێنە!'
                  : lang === 'ar'
                  ? 'أكمل جميع أهداف الأسبوع لفتح شارة التفوق المنهجي!'
                  : 'Achieve all weekly targets to earn the MoE Distinction Badge!'}
              </span>
            </div>
            <span className="text-purple-400 font-bold font-mono text-[11px] shrink-0">
              100% IDG
            </span>
          </div>
        </div>
      </div>

      {/* Bottom Status & Sovereignty Notice */}
      <div className="pt-4 border-t border-slate-800 flex flex-wrap items-center justify-between gap-3 text-xs text-slate-400">
        <div className="flex items-center gap-2 font-mono text-[11px]">
          <span className="w-2 h-2 rounded-full bg-emerald-400" />
          <span>
            {lang === 'ku'
              ? 'داتاکانی خوێندنی قوتابی بە تەواوی لە ناوخۆی عێراق و هەرێم پارێزراوە (سەروەری ١٠٠٪)'
              : lang === 'ar'
              ? 'بيانات مسار الطالب محفوظة محلياً داخل البنية التحتية السيادية (IDG Data)'
              : 'Student learning journey stored securely on sovereign local infrastructure'}
          </span>
        </div>
        <div className="flex items-center gap-2 font-mono text-[11px] text-purple-400">
          <Bookmark className="w-3.5 h-3.5" />
          <span>ZANA-K12-DASHBOARD-V2.4</span>
        </div>
      </div>
    </div>
  );
}
