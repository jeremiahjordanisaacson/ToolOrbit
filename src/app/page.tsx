import Link from "next/link";
import { categories } from "@/lib/data/categories";
import { allTools, getToolsByCategory } from "@/lib/data/tools-all";
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

export default function HomePage() {
  const popularTools = popularToolSlugs
    .map((slug) => allTools.find((t) => t.slug === slug))
    .filter(Boolean);

  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-b from-primary-50 to-gray-50 pb-16 pt-12 md:pb-20 md:pt-16">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <h1 className="mb-4 text-4xl font-bold text-gray-900 md:text-5xl">
            Free Online Tools for{" "}
            <span className="text-primary-600">Everyday Tasks</span>
          </h1>
          <p className="mx-auto mb-8 max-w-2xl text-lg text-gray-600">
            ToolOrbit offers {allTools.length}+ free online tools for text
            editing, development, calculations, and more. Everything runs in
            your browser — fast, private, and no signup required.
          </p>
          <SearchBar />
        </div>
      </section>

      <div className="mx-auto max-w-6xl px-4 py-12">
        {/* Popular Tools */}
        <section className="mb-16">
          <div className="mb-6 flex items-center justify-between">
            <h2 className="text-2xl font-bold text-gray-900">
              Popular Tools
            </h2>
            <Link
              href="/tools/"
              className="text-sm font-medium text-primary-600 transition-colors hover:text-primary-800"
            >
              View all tools →
            </Link>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {popularTools.map(
              (tool) => tool && <ToolCard key={tool.slug} tool={tool} />
            )}
          </div>
        </section>

        {/* Categories */}
        <section className="mb-16">
          <h2 className="mb-6 text-2xl font-bold text-gray-900">
            Browse by Category
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {categories.map((cat) => (
              <CategoryCard key={cat.slug} category={cat} />
            ))}
          </div>
        </section>

        {/* All categories with tools */}
        {categories.map((cat) => {
          const tools = getToolsByCategory(cat.slug);
          return (
            <section key={cat.slug} className="mb-12">
              <div className="mb-4 flex items-center justify-between">
                <h2 className="text-xl font-bold text-gray-900">
                  {cat.icon} {cat.name}
                </h2>
                <Link
                  href={`/categories/${cat.slug}/`}
                  className="text-sm font-medium text-primary-600 transition-colors hover:text-primary-800"
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

        {/* SEO content */}
        <section className="mx-auto max-w-3xl rounded-xl bg-white p-8 shadow-sm">
          <h2 className="mb-4 text-2xl font-bold text-gray-900">
            What is ToolOrbit?
          </h2>
          <div className="space-y-4 text-gray-600">
            <p>
              ToolOrbit is a free collection of online tools designed to help
              you work faster and smarter. Whether you need to count words for
              an essay, format JSON for an API response, calculate a loan
              payment, or generate a strong password, we have a tool for that.
            </p>
            <p>
              Every tool on ToolOrbit runs entirely in your browser. Your data
              never leaves your device, so you can use our tools with complete
              confidence that your information stays private. No accounts, no
              uploads, no tracking.
            </p>
            <p>
              Our tools are organized into four main categories:{" "}
              <Link
                href="/categories/text-tools/"
                className="text-primary-600 hover:underline"
              >
                Text Tools
              </Link>{" "}
              for writing and editing,{" "}
              <Link
                href="/categories/developer-tools/"
                className="text-primary-600 hover:underline"
              >
                Developer Tools
              </Link>{" "}
              for coding and debugging,{" "}
              <Link
                href="/categories/math-and-conversion-tools/"
                className="text-primary-600 hover:underline"
              >
                Math &amp; Conversion Tools
              </Link>{" "}
              for calculations and unit conversions, and{" "}
              <Link
                href="/categories/random-and-utility-tools/"
                className="text-primary-600 hover:underline"
              >
                Random &amp; Utility Tools
              </Link>{" "}
              for generators and everyday helpers.
            </p>
          </div>
        </section>
      </div>
    </>
  );
}
