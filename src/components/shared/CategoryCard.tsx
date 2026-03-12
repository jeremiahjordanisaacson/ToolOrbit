import Link from "next/link";
import { Category } from "@/lib/data/categories";
import { getToolsByCategory } from "@/lib/data/tools";

interface CategoryCardProps {
  category: Category;
}

export default function CategoryCard({ category }: CategoryCardProps) {
  const toolCount = getToolsByCategory(category.slug).length;

  return (
    <Link
      href={`/categories/${category.slug}/`}
      className="group flex flex-col rounded-xl border border-gray-200 bg-white p-6 transition-all hover:border-primary-300 hover:shadow-md"
    >
      <span className="mb-3 text-3xl" aria-hidden="true">
        {category.icon}
      </span>
      <h3 className="mb-1 text-lg font-semibold text-gray-900 group-hover:text-primary-700">
        {category.name}
      </h3>
      <p className="mb-3 text-sm text-gray-500">{category.intro}</p>
      <span className="mt-auto text-xs font-medium text-primary-600">
        {toolCount} tools →
      </span>
    </Link>
  );
}
