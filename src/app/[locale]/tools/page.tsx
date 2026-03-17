import { Metadata } from "next";
import { siteConfig } from "@/lib/data/site";
import { allTools } from "@/lib/data/tools-all";
import { categories } from "@/lib/data/categories";
import { locales } from "@/lib/i18n/config";
import { getDict, Locale } from "@/lib/i18n";
import { getCategoryTranslation } from "@/lib/i18n/category-translations";
import ToolCard from "@/components/shared/ToolCard";
import Link from "next/link";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const dict = await getDict(locale as Locale);
  const url = `${siteConfig.url}/${locale}/tools/`;
  return {
    title: dict.allToolsMetaTitle,
    description: dict.allToolsMetaDescription,
    alternates: {
      canonical: url,
      languages: Object.fromEntries(
        locales.map((l) => [l, `${siteConfig.url}/${l}/tools/`])
      ),
    },
    openGraph: {
      title: dict.allToolsMetaTitle,
      description: dict.allToolsMetaDescription,
      url,
      siteName: "ToolOrbit",
      locale: locale,
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: dict.allToolsMetaTitle,
      description: dict.allToolsMetaDescription,
    },
  };
}

export default async function AllToolsPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const dict = await getDict(locale as Locale);
  return (
    <div className="mx-auto max-w-6xl px-6 py-12">
      <div className="mb-10">
        <h1 className="mb-2 text-2xl font-extrabold tracking-tight text-surface-900 sm:text-3xl">
          {dict.navAllTools}
        </h1>
        <p className="max-w-2xl text-base leading-relaxed text-surface-500">
          Browse our complete collection of {allTools.length} free online tools.
          Every tool runs in your browser — no signup required.
        </p>
      </div>

      {categories.map((cat) => {
        const tools = allTools.filter((t) => t.categorySlug === cat.slug);
        return (
          <section key={cat.slug} className="mb-14">
            <div className="mb-4 flex items-baseline justify-between border-b border-surface-200 pb-3">
              <h2 className="flex items-center gap-2 text-lg font-bold tracking-tight text-surface-900">
                <span>{cat.icon}</span>
                {getCategoryTranslation(cat.slug, locale as Locale).name}
              </h2>
              <Link
                href={`/${locale}/categories/${cat.slug}/`}
                className="text-sm font-medium text-primary-600 hover:text-primary-800"
              >
                {dict.viewCategory} →
              </Link>
            </div>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {tools.map((tool) => (
                <ToolCard key={tool.slug} tool={tool} locale={locale} useTool={dict.useTool} />
              ))}
            </div>
          </section>
        );
      })}
    </div>
  );
}
