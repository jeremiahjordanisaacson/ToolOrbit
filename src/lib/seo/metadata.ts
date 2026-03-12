import { Metadata } from "next";
import { siteConfig } from "@/lib/data/site";
import { Tool } from "@/lib/data/tools";
import { Category } from "@/lib/data/categories";

export function generateToolMetadata(tool: Tool): Metadata {
  const url = `${siteConfig.url}/tools/${tool.slug}/`;
  return {
    title: tool.title,
    description: tool.description,
    keywords: tool.keywords,
    alternates: { canonical: url },
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

export function generateCategoryMetadata(category: Category): Metadata {
  const url = `${siteConfig.url}/categories/${category.slug}/`;
  return {
    title: category.title,
    description: category.description,
    alternates: { canonical: url },
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

export function generateGuideMetadata(category: Category): Metadata {
  const url = `${siteConfig.url}/guides/${category.slug}/`;
  return {
    title: category.guideTitle,
    description: category.guideDescription,
    alternates: { canonical: url },
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
