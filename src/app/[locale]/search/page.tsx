import { Metadata } from "next";
import { generatePageMetadata } from "@/lib/seo/metadata";
import { getDict, Locale } from "@/lib/i18n";
import SearchPageClient from "./SearchPageClient";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  return generatePageMetadata(
    "Search Tools | ToolOrbit",
    "Search across all free online tools on ToolOrbit. Find text tools, developer tools, calculators, converters, and more.",
    `/${locale}/search/`
  );
}

export default async function SearchPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const dict = await getDict(locale as Locale);
  return (
    <div className="mx-auto max-w-3xl px-6 py-12">
      <h1 className="mb-2 text-2xl font-extrabold tracking-tight text-surface-900 sm:text-3xl">
        {dict.searchTitle}
      </h1>
      <p className="mb-8 text-base leading-relaxed text-surface-500">
        Find the perfect tool for your task. Search across all tools and
        categories.
      </p>
      <SearchPageClient locale={locale} labels={{ placeholder: dict.searchPlaceholder, browseAll: dict.browseTools }} />
    </div>
  );
}
