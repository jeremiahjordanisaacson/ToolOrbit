import { notFound } from "next/navigation";
import { Metadata } from "next";
import { categories, getCategoryBySlug } from "@/lib/data/categories";
import { getToolsByCategory } from "@/lib/data/tools";
import { generateGuideMetadata } from "@/lib/seo/metadata";
import Breadcrumb from "@/components/layout/Breadcrumb";
import ToolCard from "@/components/shared/ToolCard";
import AdSlot from "@/components/layout/AdSlot";

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
  return generateGuideMetadata(category);
}

export default async function GuidePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const category = getCategoryBySlug(slug);
  if (!category) notFound();

  const tools = getToolsByCategory(slug);

  return (
    <div className="mx-auto max-w-3xl px-4 py-8">
      <Breadcrumb
        items={[
          { label: "Home", href: "/" },
          { label: category.name, href: `/categories/${category.slug}/` },
          { label: "Guide" },
        ]}
      />

      <article>
        <h1 className="mb-6 text-3xl font-bold text-gray-900 md:text-4xl">
          {category.guideTitle.replace(" | ToolOrbit", "")}
        </h1>

        <AdSlot slot="top" className="mb-6 h-20" />

        <div
          className="prose prose-gray max-w-none prose-headings:text-gray-900 prose-a:text-primary-600 prose-a:no-underline hover:prose-a:underline"
          dangerouslySetInnerHTML={{ __html: markdownToHtml(category.guideContent) }}
        />

        <AdSlot slot="in-content" className="my-8 h-20" />

        <section className="mt-10">
          <h2 className="mb-4 text-xl font-bold text-gray-900">
            Try These {category.name}
          </h2>
          <div className="grid gap-3 sm:grid-cols-2">
            {tools.map((tool) => (
              <ToolCard key={tool.slug} tool={tool} />
            ))}
          </div>
        </section>
      </article>
    </div>
  );
}

function markdownToHtml(md: string): string {
  return md
    .replace(/^### (.*$)/gm, '<h3>$1</h3>')
    .replace(/^## (.*$)/gm, '<h2>$1</h2>')
    .replace(/^# (.*$)/gm, '<h1>$1</h1>')
    .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
    .replace(/\*(.*?)\*/g, '<em>$1</em>')
    .replace(/^- (.*$)/gm, '<li>$1</li>')
    .replace(/(<li>.*<\/li>\n?)+/g, '<ul>$&</ul>')
    .replace(/^(\d+)\. (.*$)/gm, '<li>$2</li>')
    .replace(/\n\n/g, '</p><p>')
    .replace(/^(?!<[hulo])/gm, (match) => match ? `<p>${match}` : '')
    .replace(/<p><\/p>/g, '')
    .replace(/<p>(<[hulo])/g, '$1')
    .replace(/(<\/[hulo][l]?>)<\/p>/g, '$1');
}
