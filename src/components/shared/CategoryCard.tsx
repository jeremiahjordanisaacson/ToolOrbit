import Link from "next/link";
import { Category } from "@/lib/data/categories";
import { getToolsByCategory } from "@/lib/data/tools-all";

interface CategoryCardProps {
  category: Category;
  locale?: string;
  toolsLabel?: string;
}

export default function CategoryCard({ category, locale, toolsLabel }: CategoryCardProps) {
  const toolCount = getToolsByCategory(category.slug).length;
  const prefix = locale ? `/${locale}` : "";

  return (
    <Link
      href={`${prefix}/categories/${category.slug}/`}
      className="group flex flex-col rounded-xl border border-surface-200 bg-white p-6 transition-all hover:border-primary-200 hover:shadow-md hover:shadow-primary-100/50"
    >
      <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary-50 text-2xl transition-transform group-hover:scale-110">
        {category.icon}
      </div>
      <h3 className="mb-1 text-base font-semibold text-surface-900 group-hover:text-primary-600">
        {category.name}
      </h3>
      <p className="mb-4 line-clamp-2 text-sm leading-relaxed text-surface-500">
        {category.intro}
      </p>
      <span className="mt-auto text-xs font-semibold tracking-wide text-primary-600">
        {toolCount} {(toolsLabel || "TOOLS").toUpperCase()} →
      </span>
    </Link>
  );
}
