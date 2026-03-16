import { Locale, defaultLocale } from "./config";
import { UIDictionary } from "./types";

// Lazy-load dictionaries to avoid bundling all languages in every page
const dictionaries: Record<Locale, () => Promise<UIDictionary>> = {
  en: () => import("./locales/en").then((m) => m.default),
  es: () => import("./locales/es").then((m) => m.default),
  fr: () => import("./locales/fr").then((m) => m.default),
  de: () => import("./locales/de").then((m) => m.default),
  pt: () => import("./locales/pt").then((m) => m.default),
  ja: () => import("./locales/ja").then((m) => m.default),
  zh: () => import("./locales/zh").then((m) => m.default),
  ko: () => import("./locales/ko").then((m) => m.default),
  it: () => import("./locales/it").then((m) => m.default),
  hi: () => import("./locales/hi").then((m) => m.default),
};

// Synchronous imports for static generation
import en from "./locales/en";
const syncDictionaries: Partial<Record<Locale, UIDictionary>> = { en };

let loadedDictionaries: Partial<Record<Locale, UIDictionary>> = { en };

export async function getDictionary(locale: Locale): Promise<UIDictionary> {
  if (loadedDictionaries[locale]) return loadedDictionaries[locale]!;
  const dict = await dictionaries[locale]();
  loadedDictionaries[locale] = dict;
  return dict;
}

// Synchronous getter for static generation contexts
export function getDictionarySync(locale: Locale): UIDictionary {
  return syncDictionaries[locale] || en;
}

// Get the dictionary, falling back to English for missing keys
export async function getDict(locale: Locale): Promise<UIDictionary> {
  if (locale === defaultLocale) return en;
  const dict = await getDictionary(locale);
  // Proxy that falls back to English for missing keys
  return new Proxy(dict, {
    get(target, prop: string) {
      return (target as unknown as Record<string, string>)[prop] ||
        (en as unknown as Record<string, string>)[prop] ||
        prop;
    },
  });
}
