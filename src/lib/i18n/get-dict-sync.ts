import { Locale } from "./config";
import { UIDictionary } from "./types";
import en from "./locales/en";
import es from "./locales/es";
import fr from "./locales/fr";
import de from "./locales/de";
import pt from "./locales/pt";
import ja from "./locales/ja";
import zh from "./locales/zh";
import ko from "./locales/ko";
import it from "./locales/it";
import hi from "./locales/hi";

const dicts: Record<Locale, UIDictionary> = { en, es, fr, de, pt, ja, zh, ko, it, hi };

export function getDictSync(locale: Locale): UIDictionary {
  return dicts[locale] || en;
}
