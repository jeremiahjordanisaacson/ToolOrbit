import { Metadata } from "next";
import { generatePageMetadata } from "@/lib/seo/metadata";
import SearchBar from "@/components/shared/SearchBar";
import SearchPageClient from "./SearchPageClient";

export const metadata: Metadata = generatePageMetadata(
  "Search Tools | ToolOrbit",
  "Search across all free online tools on ToolOrbit. Find text tools, developer tools, calculators, converters, and more.",
  "/search/"
);

export default function SearchPage() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-12">
      <h1 className="mb-2 text-2xl font-extrabold tracking-tight text-surface-900 sm:text-3xl">
        Search Tools
      </h1>
      <p className="mb-8 text-base leading-relaxed text-surface-500">
        Find the perfect tool for your task. Search across all tools and
        categories.
      </p>
      <SearchPageClient />
    </div>
  );
}
