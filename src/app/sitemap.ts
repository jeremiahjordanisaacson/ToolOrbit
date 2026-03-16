import { MetadataRoute } from "next";
import { allTools } from "@/lib/data/tools-all";
import { categories } from "@/lib/data/categories";
import { siteConfig } from "@/lib/data/site";
import { locales } from "@/lib/i18n/config";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = siteConfig.url;
  const entries: MetadataRoute.Sitemap = [];

  for (const locale of locales) {
    const p = `${baseUrl}/${locale}`;

    // Static pages
    entries.push(
      { url: `${p}/`, changeFrequency: "weekly", priority: locale === "en" ? 1.0 : 0.9 },
      { url: `${p}/tools/`, changeFrequency: "weekly", priority: 0.8 },
      { url: `${p}/search/`, changeFrequency: "monthly", priority: 0.4 },
      { url: `${p}/about/`, changeFrequency: "monthly", priority: 0.3 },
      { url: `${p}/contact/`, changeFrequency: "monthly", priority: 0.2 },
      { url: `${p}/privacy/`, changeFrequency: "monthly", priority: 0.2 },
      { url: `${p}/terms/`, changeFrequency: "monthly", priority: 0.2 },
      { url: `${p}/disclaimer/`, changeFrequency: "monthly", priority: 0.2 },
    );

    // Category pages
    for (const cat of categories) {
      entries.push({
        url: `${p}/categories/${cat.slug}/`,
        changeFrequency: "weekly",
        priority: 0.7,
      });
      entries.push({
        url: `${p}/guides/${cat.slug}/`,
        changeFrequency: "monthly",
        priority: 0.5,
      });
    }

    // Tool pages
    for (const tool of allTools) {
      entries.push({
        url: `${p}/tools/${tool.slug}/`,
        changeFrequency: "monthly",
        priority: locale === "en" ? 0.7 : 0.6,
      });
    }
  }

  return entries;
}
