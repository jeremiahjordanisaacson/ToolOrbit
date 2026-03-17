import { siteConfig } from "@/lib/data/site";
import { Tool, FAQ } from "@/lib/data/tools-all";
import { Category } from "@/lib/data/categories";

interface BreadcrumbItem {
  name: string;
  url: string;
}

export function generateBreadcrumbSchema(items: BreadcrumbItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

export function generateFAQSchema(faqs: FAQ[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

export function generateToolSchema(tool: Tool, translatedName?: string, translatedDescription?: string, locale?: string) {
  return {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: translatedName || tool.name,
    description: translatedDescription || tool.description,
    url: `${siteConfig.url}/${locale || "en"}/tools/${tool.slug}/`,
    applicationCategory: "UtilityApplication",
    operatingSystem: "Any",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
    },
    browserRequirements: "Requires JavaScript",
  };
}

export function generateWebSiteSchema(description?: string, locale?: string) {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: siteConfig.name,
    url: siteConfig.url,
    description: description || siteConfig.description,
    potentialAction: {
      "@type": "SearchAction",
      target: `${siteConfig.url}/${locale || "en"}/search/?q={search_term_string}`,
      "query-input": "required name=search_term_string",
    },
  };
}

export function generateOrganizationSchema(description?: string) {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: siteConfig.name,
    url: siteConfig.url,
    description: description || siteConfig.description,
  };
}

export function generateToolBreadcrumbs(
  tool: Tool,
  category: Category
): BreadcrumbItem[] {
  return [
    { name: "Home", url: siteConfig.url },
    {
      name: category.name,
      url: `${siteConfig.url}/categories/${category.slug}/`,
    },
    { name: tool.name, url: `${siteConfig.url}/tools/${tool.slug}/` },
  ];
}

export function generateCategoryBreadcrumbs(
  category: Category
): BreadcrumbItem[] {
  return [
    { name: "Home", url: siteConfig.url },
    {
      name: category.name,
      url: `${siteConfig.url}/categories/${category.slug}/`,
    },
  ];
}
