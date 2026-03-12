import { MetadataRoute } from "next";
import { allTools } from "@/lib/data/tools";
import { categories } from "@/lib/data/categories";
import { siteConfig } from "@/lib/data/site";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = siteConfig.url;

  const staticPages: MetadataRoute.Sitemap = [
    { url: `${baseUrl}/`, changeFrequency: "weekly", priority: 1.0 },
    { url: `${baseUrl}/tools/`, changeFrequency: "weekly", priority: 0.9 },
    { url: `${baseUrl}/search/`, changeFrequency: "monthly", priority: 0.5 },
    { url: `${baseUrl}/about/`, changeFrequency: "monthly", priority: 0.4 },
    { url: `${baseUrl}/contact/`, changeFrequency: "monthly", priority: 0.3 },
    { url: `${baseUrl}/privacy/`, changeFrequency: "monthly", priority: 0.2 },
    { url: `${baseUrl}/terms/`, changeFrequency: "monthly", priority: 0.2 },
    { url: `${baseUrl}/disclaimer/`, changeFrequency: "monthly", priority: 0.2 },
  ];

  const categoryPages: MetadataRoute.Sitemap = categories.map((cat) => ({
    url: `${baseUrl}/categories/${cat.slug}/`,
    changeFrequency: "weekly" as const,
    priority: 0.8,
  }));

  const guidePages: MetadataRoute.Sitemap = categories.map((cat) => ({
    url: `${baseUrl}/guides/${cat.slug}/`,
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  const toolPages: MetadataRoute.Sitemap = allTools.map((tool) => ({
    url: `${baseUrl}/tools/${tool.slug}/`,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [...staticPages, ...categoryPages, ...guidePages, ...toolPages];
}
