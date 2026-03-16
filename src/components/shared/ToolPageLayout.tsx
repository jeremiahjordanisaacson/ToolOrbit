import { Tool, getRelatedTools } from "@/lib/data/tools-all";
import { getCategoryBySlug } from "@/lib/data/categories";
import {
  generateBreadcrumbSchema,
  generateFAQSchema,
  generateToolSchema,
  generateToolBreadcrumbs,
} from "@/lib/seo/schema";
import Breadcrumb from "@/components/layout/Breadcrumb";
import AdSlot from "@/components/layout/AdSlot";
import FAQSection from "./FAQSection";
import HowToUse from "./HowToUse";
import RelatedTools from "./RelatedTools";

interface ToolPageLayoutProps {
  tool: Tool;
  children: React.ReactNode;
}

export default function ToolPageLayout({ tool, children }: ToolPageLayoutProps) {
  const category = getCategoryBySlug(tool.categorySlug);
  const relatedTools = getRelatedTools(tool);
  const breadcrumbItems = category
    ? generateToolBreadcrumbs(tool, category)
    : [];

  return (
    <>
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(generateToolSchema(tool)),
        }}
      />
      {breadcrumbItems.length > 0 && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(generateBreadcrumbSchema(breadcrumbItems)),
          }}
        />
      )}
      {tool.faqs.length > 0 && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(generateFAQSchema(tool.faqs)),
          }}
        />
      )}

      <div className="mx-auto max-w-4xl px-4 py-8">
        {/* Breadcrumb */}
        {category && (
          <Breadcrumb
            items={[
              { label: "Home", href: "/" },
              {
                label: category.name,
                href: `/categories/${category.slug}/`,
              },
              { label: tool.name },
            ]}
          />
        )}

        {/* SEO headline & intro */}
        <h1 className="mb-3 text-3xl font-bold text-gray-900 md:text-4xl">
          {tool.headline}
        </h1>
        <p className="mb-8 text-lg text-gray-600">{tool.intro}</p>

        {/* Ad slot: top */}
        <AdSlot slot="top" className="mb-6 h-20" />

        {/* The interactive tool */}
        <section
          aria-label={`${tool.name} tool`}
          className="mb-10 rounded-xl border border-gray-200 bg-white p-6 shadow-sm"
        >
          {children}
        </section>

        {/* Example */}
        {tool.exampleInput && (
          <section className="mb-10">
            <h2 className="mb-3 text-xl font-semibold text-gray-900">
              Example
            </h2>
            <div className="rounded-lg bg-gray-50 p-4">
              <div className="mb-2">
                <span className="text-sm font-medium text-gray-500">
                  Input:
                </span>
                <code className="ml-2 rounded bg-white px-2 py-1 text-sm text-gray-800">
                  {tool.exampleInput}
                </code>
              </div>
              {tool.exampleOutput && (
                <div>
                  <span className="text-sm font-medium text-gray-500">
                    Output:
                  </span>
                  <code className="ml-2 rounded bg-white px-2 py-1 text-sm text-gray-800">
                    {tool.exampleOutput}
                  </code>
                </div>
              )}
            </div>
          </section>
        )}

        {/* How to Use */}
        {tool.howToUse.length > 0 && (
          <HowToUse steps={tool.howToUse} toolName={tool.name} />
        )}

        {/* Ad slot: in-content */}
        <AdSlot slot="in-content" className="my-8 h-20" />

        {/* FAQs */}
        {tool.faqs.length > 0 && <FAQSection faqs={tool.faqs} />}

        {/* Related Tools */}
        {relatedTools.length > 0 && <RelatedTools tools={relatedTools} />}

        {/* Ad slot: bottom */}
        <AdSlot slot="bottom" className="mt-8 h-24" />
      </div>
    </>
  );
}
