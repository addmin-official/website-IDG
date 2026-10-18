import { JobPosting } from './job-postings';
import { TeamMember } from './team-data';

export const DEFAULT_BASE_URL = 'https://idggov.tech';

export function generateJobShareText(job: JobPosting, locale: string): string {
  const isKurdish = locale === 'ku';
  const isArabic = locale === 'ar';

  const title = isKurdish ? job.titleKu : isArabic ? job.titleAr : job.title;
  const level = job.level.toUpperCase();

  if (isKurdish) {
    return `🎯 ئێمە کادری نوێ وەردەگرین!
پۆستی: ${title}
ئاستی: ${level}
شوێن: ${job.location}

بەشداربە لەگەڵ IDG لە بونیادنانی سەروەریی تەکنۆلۆژی بۆ عێراق! 🚀

پێشکەشکردن: ${DEFAULT_BASE_URL}/${locale}/careers/${job.id}`;
  }

  if (isArabic) {
    return `🎯 نعلن عن فتح باب التوظيف!
المنصب: ${title}
المستوى: ${level}
الموقع: ${job.location}

انضم إلى فريق بوابة العراق الرقمية (IDG) لبناء السيادة التكنولوجية للعراق! 🚀

للتقديم الآن: ${DEFAULT_BASE_URL}/${locale}/careers/${job.id}`;
  }

  return `🎯 We're hiring at Iraq Digital Gateway (IDG)!
Position: ${title}
Level: ${level}
Location: ${job.location}

Join IDG & engineer enduring sovereign digital technology for Iraq! 🚀

Apply now: ${DEFAULT_BASE_URL}/${locale}/careers/${job.id}`;
}

export function getShareUrls(job: JobPosting, locale: string, baseUrl: string = DEFAULT_BASE_URL) {
  const text = generateJobShareText(job, locale);
  const jobUrl = `${baseUrl}/${locale}/careers/${job.id}`;

  return {
    linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(jobUrl)}`,
    twitter: `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(jobUrl)}`,
    email: `mailto:?subject=${encodeURIComponent(`${job.title} at IDG`)}&body=${encodeURIComponent(text + '\n\n' + jobUrl)}`,
    copy: jobUrl,
  };
}

export function generateMemberPlaceholderShareText(member: TeamMember, locale: string): string {
  const isKurdish = locale === 'ku';
  const isArabic = locale === 'ar';

  const position = isKurdish ? member.positionKu : isArabic ? member.positionAr : member.position;

  if (isKurdish) {
    return `🎯 IDG بەدوای کادیری نوێ دەگەڕێت بۆ پێگەی: ${position}
بەشداربە لە بونیادنانی ژێرخانی سەروەری دیجیتاڵی عێراق! 🚀
زانیاری زیاتر: ${DEFAULT_BASE_URL}/${locale}/careers`;
  }

  if (isArabic) {
    return `🎯 بوابة العراق الرقمية تبحث عن كفاءات متميزة لشغل منصب: ${position}
انضم إلى مسيرة بناء السيادة الرقمية للعراق! 🚀
تفاصيل الفرصة: ${DEFAULT_BASE_URL}/${locale}/careers`;
  }

  return `🎯 IDG is hiring: ${position}!
Join our team building sovereign digital infrastructure for Iraq. 🚀
Learn more: ${DEFAULT_BASE_URL}/${locale}/careers`;
}

export function getMemberShareUrls(member: TeamMember, locale: string, baseUrl: string = DEFAULT_BASE_URL) {
  const text = generateMemberPlaceholderShareText(member, locale);
  const careersUrl = `${baseUrl}/${locale}/careers`;

  return {
    linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(careersUrl)}`,
    twitter: `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(careersUrl)}`,
    email: `mailto:?subject=${encodeURIComponent(`Hiring: ${member.position} at IDG`)}&body=${encodeURIComponent(text)}`,
    copy: careersUrl,
  };
}
