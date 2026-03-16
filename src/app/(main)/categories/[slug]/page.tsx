import { notFound } from "next/navigation";
import { Metadata } from "next";
import { categories, getCategoryBySlug } from "@/lib/data/categories";
import { getToolsByCategory } from "@/lib/data/tools-all";
import { generateCategoryMetadata } from "@/lib/seo/metadata";
import {
  generateBreadcrumbSchema,
  generateCategoryBreadcrumbs,
} from "@/lib/seo/schema";
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
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const category = getCategoryBySlug(slug);
  if (!category) return {};
  return generateCategoryMetadata(category);
}

export default async function CategoryPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const category = getCategoryBySlug(slug);
  if (!category) notFound();

  const tools = getToolsByCategory(slug);
  const breadcrumbs = generateCategoryBreadcrumbs(category);

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
            { label: "Home", href: "/" },
            { label: category.name },
          ]}
        />

        <h1 className="mb-3 text-3xl font-bold text-gray-900 md:text-4xl">
          {category.headline}
        </h1>
        <p className="mb-8 text-lg text-gray-600">{category.intro}</p>

        <AdSlot slot="top" className="mb-6 h-20" />

        <div className="mb-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {tools.map((tool) => (
            <ToolCard key={tool.slug} tool={tool} />
          ))}
        </div>

        <AdSlot slot="bottom" className="mb-8 h-24" />

        {/* Category guide link */}
        <div className="rounded-xl bg-white p-6 shadow-sm">
          <h2 className="mb-2 text-lg font-semibold text-gray-900">
            Learn More
          </h2>
          <p className="mb-3 text-gray-600">
            Read our comprehensive guide to get the most out of these tools.
          </p>
          <Link
            href={`/guides/${category.slug}/`}
            className="inline-block rounded-lg bg-primary-600 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-primary-700"
          >
            Read the {category.name} Guide →
          </Link>
        </div>
      </div>
    </>
  );
}
