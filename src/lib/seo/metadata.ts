import { Metadata } from "next";
import { siteConfig } from "@/lib/data/site";
import { Tool } from "@/lib/data/tools-all";
import { Category } from "@/lib/data/categories";
import { locales, defaultLocale, Locale } from "@/lib/i18n/config";
import { translateTool } from "@/lib/i18n/translate-tools";
import { getCategoryTranslation } from "@/lib/i18n/category-translations";

function hreflangAlternates(path: string): Record<string, string> {
  return Object.fromEntries(
    locales.map((l) => [l, `${siteConfig.url}/${l}${path}`])
  );
}

export function generateToolMetadata(tool: Tool, locale: string = defaultLocale): Metadata {
  const url = `${siteConfig.url}/${locale}/tools/${tool.slug}/`;
  const translation = translateTool(tool, locale as Locale);
  return {
    title: translation.title,
    description: translation.description,
    keywords: tool.keywords,
    alternates: {
      canonical: url,
      languages: hreflangAlternates(`/tools/${tool.slug}/`),
    },
    openGraph: {
      title: translation.title,
      description: translation.description,
      url,
      siteName: siteConfig.name,
      locale: locale,
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: translation.title,
      description: translation.description,
      site: siteConfig.twitter,
    },
    robots: { index: true, follow: true },
  };
}

export function generateCategoryMetadata(category: Category, locale: string = defaultLocale): Metadata {
  const url = `${siteConfig.url}/${locale}/categories/${category.slug}/`;
  const catTranslation = getCategoryTranslation(category.slug, locale as Locale);
  const title = `${catTranslation.headline} | ToolOrbit`;
  const description = catTranslation.intro;
  return {
    title,
    description,
    alternates: {
      canonical: url,
      languages: hreflangAlternates(`/categories/${category.slug}/`),
    },
    openGraph: {
      title,
      description,
      url,
      siteName: siteConfig.name,
      locale: locale,
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      site: siteConfig.twitter,
    },
    robots: { index: true, follow: true },
  };
}

export function generateGuideMetadata(category: Category, locale: string = defaultLocale): Metadata {
  const url = `${siteConfig.url}/${locale}/guides/${category.slug}/`;
  const catTranslation = getCategoryTranslation(category.slug, locale as Locale);
  const title = `${catTranslation.headline} — Guide | ToolOrbit`;
  const description = catTranslation.intro;
  return {
    title,
    description,
    alternates: {
      canonical: url,
      languages: hreflangAlternates(`/guides/${category.slug}/`),
    },
    openGraph: {
      title,
      description,
      url,
      siteName: siteConfig.name,
      locale: locale,
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      site: siteConfig.twitter,
    },
    robots: { index: true, follow: true },
  };
}

export function generatePageMetadata(
  title: string,
  description: string,
  path: string,
  locale?: string
): Metadata {
  const url = `${siteConfig.url}${path}`;
  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
      siteName: siteConfig.name,
      locale: locale || defaultLocale,
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      site: siteConfig.twitter,
    },
    robots: { index: true, follow: true },
  };
}
