import Link from "next/link";
import { Tool } from "@/lib/data/tools";
import { getCategoryBySlug } from "@/lib/data/categories";

interface RelatedToolsProps {
  tools: Tool[];
}

export default function RelatedTools({ tools }: RelatedToolsProps) {
  return (
    <section className="mb-10">
      <h2 className="mb-4 text-xl font-semibold text-gray-900">
        Related Tools
      </h2>
      <div className="grid gap-3 sm:grid-cols-2">
        {tools.map((tool) => {
          const category = getCategoryBySlug(tool.categorySlug);
          return (
            <Link
              key={tool.slug}
              href={`/tools/${tool.slug}/`}
              className="group rounded-lg border border-gray-200 bg-white p-4 transition-all hover:border-primary-300 hover:shadow-sm"
            >
              <h3 className="font-medium text-gray-900 group-hover:text-primary-700">
                {tool.name}
              </h3>
              {category && (
                <span className="mt-1 inline-block text-xs text-gray-400">
                  {category.icon} {category.name}
                </span>
              )}
            </Link>
          );
        })}
      </div>
    </section>
  );
}
