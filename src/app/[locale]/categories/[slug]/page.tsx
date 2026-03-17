import { notFound } from "next/navigation";
import { Metadata } from "next";
import { categories, getCategoryBySlug } from "@/lib/data/categories";
import { getToolsByCategory } from "@/lib/data/tools-all";
import { generateCategoryMetadata } from "@/lib/seo/metadata";
import {
  generateBreadcrumbSchema,
  generateCategoryBreadcrumbs,
} from "@/lib/seo/schema";
import { getDict, Locale } from "@/lib/i18n";
import { getCategoryTranslation } from "@/lib/i18n/category-translations";
import Breadcrumb from "@/components/layout/Breadcrumb";
import ToolCard from "@/components/shared/ToolCard";
import AdSlot from "@/components/layout/AdSlot";
import Link from "next/link";

export function generateStaticParams() {
  return categories.map((cat) => ({ slug: cat.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}): Promise<Metadata> {
  const { locale, slug } = await params;
  const category = getCategoryBySlug(slug);
  if (!category) return {};
  return generateCategoryMetadata(category, locale);
}

export default async function CategoryPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  const category = getCategoryBySlug(slug);
  if (!category) notFound();

  const dict = await getDict(locale as Locale);
  const tools = getToolsByCategory(slug);
  const breadcrumbs = generateCategoryBreadcrumbs(category);
  const catTranslation = getCategoryTranslation(slug, locale as Locale);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(generateBreadcrumbSchema(breadcrumbs)),
        }}
      />

      <div className="mx-auto max-w-6xl px-4 py-8">
        <Breadcrumb
          items={[
            { label: dict.home, href: `/${locale}/` },
            { label: catTranslation.name },
          ]}
        />

        <h1 className="mb-3 text-3xl font-bold text-gray-900 md:text-4xl">
          {catTranslation.headline}
        </h1>
        <p className="mb-8 text-lg text-gray-600">{catTranslation.intro}</p>

        <AdSlot slot="top" className="mb-6 h-20" />

        <div className="mb-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {tools.map((tool) => (
            <ToolCard key={tool.slug} tool={tool} locale={locale} useTool={dict.useTool} />
          ))}
        </div>

        <AdSlot slot="bottom" className="mb-8 h-24" />

        {/* Category guide link */}
        <div className="rounded-xl bg-white p-6 shadow-sm">
          <h2 className="mb-2 text-lg font-semibold text-gray-900">
            {dict.learnMore}
          </h2>
          <p className="mb-3 text-gray-600">
            Read our comprehensive guide to get the most out of these tools.
          </p>
          <Link
            href={`/${locale}/guides/${category.slug}/`}
            className="inline-block rounded-lg bg-primary-600 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-primary-700"
          >
            {dict.readGuide} →
          </Link>
        </div>
      </div>
    </>
  );
}
