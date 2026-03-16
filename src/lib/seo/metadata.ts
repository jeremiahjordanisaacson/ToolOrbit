import { Metadata } from "next";
import { siteConfig } from "@/lib/data/site";
import { Tool } from "@/lib/data/tools-all";
import { Category } from "@/lib/data/categories";
import { locales, defaultLocale } from "@/lib/i18n/config";

function hreflangAlternates(path: string): Record<string, string> {
  return Object.fromEntries(
    locales.map((l) => [l, `${siteConfig.url}/${l}${path}`])
  );
}

export function generateToolMetadata(tool: Tool, locale: string = defaultLocale): Metadata {
  const url = `${siteConfig.url}/${locale}/tools/${tool.slug}/`;
  return {
    title: tool.title,
    description: tool.description,
    keywords: tool.keywords,
    alternates: {
      canonical: url,
      languages: hreflangAlternates(`/tools/${tool.slug}/`),
    },
    openGraph: {
      title: tool.title,
      description: tool.description,
      url,
      siteName: siteConfig.name,
      locale: siteConfig.locale,
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: tool.title,
      description: tool.description,
      site: siteConfig.twitter,
    },
    robots: { index: true, follow: true },
  };
}

export function generateCategoryMetadata(category: Category, locale: string = defaultLocale): Metadata {
  const url = `${siteConfig.url}/${locale}/categories/${category.slug}/`;
  return {
    title: category.title,
    description: category.description,
    alternates: {
      canonical: url,
      languages: hreflangAlternates(`/categories/${category.slug}/`),
    },
    openGraph: {
      title: category.title,
      description: category.description,
      url,
      siteName: siteConfig.name,
      locale: siteConfig.locale,
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: category.title,
      description: category.description,
      site: siteConfig.twitter,
    },
    robots: { index: true, follow: true },
  };
}

export function generateGuideMetadata(category: Category, locale: string = defaultLocale): Metadata {
  const url = `${siteConfig.url}/${locale}/guides/${category.slug}/`;
  return {
    title: category.guideTitle,
    description: category.guideDescription,
    alternates: {
      canonical: url,
      languages: hreflangAlternates(`/guides/${category.slug}/`),
    },
    openGraph: {
      title: category.guideTitle,
      description: category.guideDescription,
      url,
      siteName: siteConfig.name,
      locale: siteConfig.locale,
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title: category.guideTitle,
      description: category.guideDescription,
      site: siteConfig.twitter,
    },
    robots: { index: true, follow: true },
  };
}

export function generatePageMetadata(
  title: string,
  description: string,
  path: string
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
      locale: siteConfig.locale,
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
