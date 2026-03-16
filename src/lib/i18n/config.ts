export const defaultLocale = "en" as const;

export const locales = [
  "en", "es", "fr", "de", "pt", "ja", "zh", "ko", "it", "hi",
] as const;

export type Locale = (typeof locales)[number];

export const localeNames: Record<Locale, string> = {
  en: "English",
  es: "Español",
  fr: "Français",
  de: "Deutsch",
  pt: "Português",
  ja: "日本語",
  zh: "中文",
  ko: "한국어",
  it: "Italiano",
  hi: "हिन्दी",
};

export const localeFlags: Record<Locale, string> = {
  en: "🇺🇸",
  es: "🇪🇸",
  fr: "🇫🇷",
  de: "🇩🇪",
  pt: "🇧🇷",
  ja: "🇯🇵",
  zh: "🇨🇳",
  ko: "🇰🇷",
  it: "🇮🇹",
  hi: "🇮🇳",
};

// HTML dir attribute per locale
export const localeDir: Record<Locale, "ltr" | "rtl"> = {
  en: "ltr", es: "ltr", fr: "ltr", de: "ltr", pt: "ltr",
  ja: "ltr", zh: "ltr", ko: "ltr", it: "ltr", hi: "ltr",
};

export function isValidLocale(locale: string): locale is Locale {
  return locales.includes(locale as Locale);
}
