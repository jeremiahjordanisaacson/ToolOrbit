import Link from "next/link";
import { Metadata } from "next";
import { categories } from "@/lib/data/categories";
import { allTools, getToolsByCategory } from "@/lib/data/tools-all";
import { siteConfig } from "@/lib/data/site";
import { locales } from "@/lib/i18n/config";
import CategoryCard from "@/components/shared/CategoryCard";
import ToolCard from "@/components/shared/ToolCard";
import SearchBar from "@/components/shared/SearchBar";

const popularToolSlugs = [
  "word-counter",
  "json-formatter",
  "password-generator",
  "base64-encode-decode",
  "percentage-calculator",
  "qr-code-generator",
  "uuid-generator",
  "case-converter",
];

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const url = `${siteConfig.url}/${locale}/`;
  return {
    title: `${siteConfig.name} — ${siteConfig.tagline}`,
    description: siteConfig.description,
    alternates: {
      canonical: url,
      languages: Object.fromEntries(
        locales.map((l) => [l, `${siteConfig.url}/${l}/`])
      ),
    },
    openGraph: {
      title: `${siteConfig.name} — ${siteConfig.tagline}`,
      description: siteConfig.description,
      url,
      siteName: siteConfig.name,
      locale: siteConfig.locale,
      type: "website",
    },
  };
}

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const popularTools = popularToolSlugs
    .map((slug) => allTools.find((t) => t.slug === slug))
    .filter(Boolean);

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-surface-200 bg-white">
        <div className="mx-auto max-w-4xl px-6 pb-16 pt-16 text-center sm:pt-20">
          <h1 className="mb-4 text-4xl font-extrabold tracking-tight text-surface-900 sm:text-5xl lg:text-6xl">
            {allTools.length}+ Free Tools.
            <br />
            <span className="text-primary-600">Zero Signups.</span>
          </h1>
          <p className="mx-auto mb-10 max-w-xl text-lg leading-relaxed text-surface-500">
            Text editors, developer utilities, calculators, converters, and more.
            Everything runs in your browser — fast, private, free.
          </p>
          <div className="mx-auto max-w-xl">
            <SearchBar />
          </div>
        </div>
        {/* Subtle grid pattern decoration */}
        <div className="pointer-events-none absolute inset-0 opacity-[0.015]" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0h40v40H0z' fill='none' stroke='%23000' stroke-width='0.5'/%3E%3C/svg%3E\")" }} />
      </section>

      <div className="mx-auto max-w-6xl px-6 py-16">
        {/* Popular Tools */}
        <section className="mb-20">
          <div className="mb-6 flex items-baseline justify-between">
            <h2 className="text-xl font-bold tracking-tight text-surface-900">
              Popular Tools
            </h2>
            <Link
              href="/tools/"
              className="text-sm font-medium text-primary-600 hover:text-primary-800"
            >
              View all →
            </Link>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {popularTools.map(
              (tool) => tool && <ToolCard key={tool.slug} tool={tool} />
            )}
          </div>
        </section>

        {/* Categories */}
        <section className="mb-20">
          <h2 className="mb-6 text-xl font-bold tracking-tight text-surface-900">
            Browse by Category
          </h2>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {categories.slice(0, 8).map((cat) => (
              <CategoryCard key={cat.slug} category={cat} />
            ))}
          </div>
          {categories.length > 8 && (
            <div className="mt-6 text-center">
              <Link href="/tools/" className="text-sm font-medium text-primary-600 hover:text-primary-800">
                View all {categories.length} categories →
              </Link>
            </div>
          )}
        </section>

        {/* Category previews */}
        {categories.slice(0, 4).map((cat) => {
          const tools = getToolsByCategory(cat.slug);
          return (
            <section key={cat.slug} className="mb-14">
              <div className="mb-4 flex items-baseline justify-between">
                <h2 className="flex items-center gap-2 text-lg font-bold text-surface-900">
                  <span>{cat.icon}</span>
                  {cat.name}
                </h2>
                <Link
                  href={`/categories/${cat.slug}/`}
                  className="text-sm font-medium text-primary-600 hover:text-primary-800"
                >
                  View all →
                </Link>
              </div>
              <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                {tools.slice(0, 6).map((tool) => (
                  <ToolCard key={tool.slug} tool={tool} />
                ))}
              </div>
            </section>
          );
        })}

        {/* SEO content block */}
        <section className="mx-auto max-w-3xl rounded-2xl border border-surface-200 bg-white p-8 sm:p-10">
          <h2 className="mb-4 text-xl font-bold text-surface-900">
            What is ToolOrbit?
          </h2>
          <div className="space-y-4 text-sm leading-relaxed text-surface-500">
            <p>
              ToolOrbit is a free collection of {allTools.length}+ online tools designed to help
              you work faster. Whether you need to count words, format JSON,
              calculate a loan payment, or generate a password, we have a tool for that.
            </p>
            <p>
              Every tool runs entirely in your browser. Your data never leaves your device,
              so you can use our tools with complete confidence that your information stays private.
            </p>
            <p>
              Our tools are organized into categories:{" "}
              {categories.slice(0, 4).map((cat, i) => (
                <span key={cat.slug}>
                  {i > 0 && ", "}
                  <Link href={`/categories/${cat.slug}/`} className="text-primary-600 hover:underline">
                    {cat.name}
                  </Link>
                </span>
              ))}
              , and more.
            </p>
          </div>
        </section>
      </div>
    </>
  );
}
