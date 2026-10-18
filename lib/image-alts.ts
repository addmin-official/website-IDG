export interface ImageAltDictionary {
  [key: string]: {
    ku: string;
    ar: string;
    en: string;
  };
}

export const imageAlts: ImageAltDictionary = {
  logoEmblem: {
    ku: 'لۆگۆی فەرمیی دەروازەی دیجیتاڵیی عێراق (IDG) - هێمای سەروەریی تەکنەلۆژی',
    ar: 'شعار بوابة العراق الرقمية الرسمي (IDG) - رمز السيادة التكنولوجية',
    en: 'Official Emblem of Iraq Digital Gateway (IDG) - Sovereign Technology Institution',
  },
  founderMustafa: {
    ku: 'مستفا جلال مستفا خۆشناو - دامەزرێنەر و بەڕێوەبەری جێبەجێکاری IDG',
    ar: 'مصطفى جلال مصطفى خوشناو - المؤسس والمدير التنفيذي لـ IDG',
    en: 'Mustafa Jalal Mustafa Khoshnaw - Founder & Managing Director of IDG',
  },
  sovereignCloudInfra: {
    ku: 'شیکاریی تەلارسازیی کلاودی سەروەر و پاراستنی داتای نیشتمانی',
    ar: 'مخطط معمارية السحابة السيادية وحماية البيانات الوطنية',
    en: 'Sovereign cloud infrastructure and national data protection architecture',
  },
  nationalSingleWindow: {
    ku: 'پەنجەرەی یەکگرتووی سنورەکان (Iraq NSW) بۆ بەدیجیتاڵکردنی بازرگانی و گومرگ',
    ar: 'النافذة الوطنية الواحدة (Iraq NSW) لأتمتة التجارة والجمارك',
    en: 'Iraq National Single Window (NSW) for trade facilitation and digital customs',
  },
  aiGatePlatform: {
    ku: 'پلاتفۆرمی AI Gate بۆ شیکاریی بەڵگەنامە و مۆدێلە زمانەوانییە نیشتمانییەکان',
    ar: 'منصة AI Gate لمعالجة الوثائق والنماذج اللغوية الوطنية',
    en: 'AI Gate platform for institutional document intelligence and sovereign language models',
  },
  zanaAcademy: {
    ku: 'ئەکادیمیای زانا بۆ پەروەردەکردنی کادری ئەندازیاری و ئاسایشی دیجیتاڵیی عێراق',
    ar: 'أكاديمية زانا لتأهيل الكوادر الهندسية والأمن السيبراني في العراق',
    en: 'ZaNa Academy for advanced engineering training and cyber capability building in Iraq',
  },
  greenBeltInitiative: {
    ku: 'دەستپێشخەریی پشتێنەی سەوز - چاودێریی مانگی دەستکرد بۆ کەشوهەوای عێراق',
    ar: 'مبادرة الحزام الأخضر - رصد فضائي ومراقبة مناخية رقمية للعراق',
    en: 'Green Belt Iraq initiative - satellite monitoring and climate intelligence',
  },
};

export function getImageAlt(key: keyof typeof imageAlts, locale: string = 'en'): string {
  const item = imageAlts[key];
  if (!item) return 'Iraq Digital Gateway (IDG)';
  const lang = locale === 'ku' ? 'ku' : locale === 'ar' ? 'ar' : 'en';
  return item[lang];
}
