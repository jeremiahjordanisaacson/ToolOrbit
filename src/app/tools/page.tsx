import { Metadata } from "next";
import { allTools } from "@/lib/data/tools-all";
import { categories } from "@/lib/data/categories";
import { generatePageMetadata } from "@/lib/seo/metadata";
import ToolCard from "@/components/shared/ToolCard";
import Link from "next/link";

export const metadata: Metadata = generatePageMetadata(
  "All Free Online Tools | ToolOrbit",
  "Browse all free online tools on ToolOrbit. Text tools, developer tools, calculators, converters, and more. Fast, private, and no signup required.",
  "/tools/"
);

export default function AllToolsPage() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-12">
      <div className="mb-10">
        <h1 className="mb-2 text-2xl font-extrabold tracking-tight text-surface-900 sm:text-3xl">
          All Free Online Tools
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
                {cat.name}
              </h2>
              <Link
                href={`/categories/${cat.slug}/`}
                className="text-sm font-medium text-primary-600 hover:text-primary-800"
              >
                View category →
              </Link>
            </div>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {tools.map((tool) => (
                <ToolCard key={tool.slug} tool={tool} />
              ))}
            </div>
          </section>
        );
      })}
    </div>
  );
}
