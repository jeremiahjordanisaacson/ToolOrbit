import { allTools } from "@/lib/data/tools";
import { categories } from "@/lib/data/categories";

export interface SearchResult {
  slug: string;
  name: string;
  description: string;
  type: "tool" | "category";
  categorySlug?: string;
  url: string;
}

const searchIndex: SearchResult[] = [
  ...allTools.map((tool) => ({
    slug: tool.slug,
    name: tool.name,
    description: tool.description,
    type: "tool" as const,
    categorySlug: tool.categorySlug,
    url: `/tools/${tool.slug}/`,
  })),
  ...categories.map((cat) => ({
    slug: cat.slug,
    name: cat.name,
    description: cat.description,
    type: "category" as const,
    url: `/categories/${cat.slug}/`,
  })),
];

export function searchTools(query: string): SearchResult[] {
  if (!query.trim()) return [];
  const terms = query.toLowerCase().split(/\s+/);
  return searchIndex
    .map((item) => {
      const text = `${item.name} ${item.description}`.toLowerCase();
      const score = terms.reduce(
        (acc, term) => acc + (text.includes(term) ? 1 : 0),
        0
      );
      return { ...item, score };
    })
    .filter((item) => item.score > 0)
    .sort((a, b) => b.score - a.score);
}

export { searchIndex };
