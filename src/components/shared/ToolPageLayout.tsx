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
import type { UIDictionary } from "@/lib/i18n";
import type { ToolTranslation } from "@/lib/i18n";

interface ToolPageLayoutProps {
  tool: Tool;
  children: React.ReactNode;
  locale?: string;
  dict?: UIDictionary;
  translation?: ToolTranslation;
}

export default function ToolPageLayout({ tool, children, locale, dict, translation }: ToolPageLayoutProps) {
  const category = getCategoryBySlug(tool.categorySlug);
  const relatedTools = getRelatedTools(tool);
  const breadcrumbItems = category
    ? generateToolBreadcrumbs(tool, category)
    : [];
  const prefix = locale ? `/${locale}` : "";
  const headline = translation?.headline || tool.headline;
  const intro = translation?.intro || tool.intro;
  const faqs = translation?.faqs || tool.faqs;
  const howToUse = translation?.howToUse || tool.howToUse;

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

      <div className="mx-auto max-w-4xl px-4 py-10 sm:px-6">
        {/* Breadcrumb */}
        {category && (
          <Breadcrumb
            items={[
              { label: dict?.home || "Home", href: `${prefix}/` },
              { label: category.name, href: `${prefix}/categories/${category.slug}/` },
              { label: tool.name },
            ]}
          />
        )}

        {/* SEO headline & intro */}
        <h1 className="mb-3 text-2xl font-bold tracking-tight text-surface-900 sm:text-3xl">
          {headline}
        </h1>
        <p className="mb-8 max-w-2xl text-base leading-relaxed text-surface-500">
          {intro}
        </p>

        <AdSlot slot="top" className="mb-6 h-20" />

        {/* The interactive tool */}
        <section
          aria-label={`${tool.name} tool`}
          className="mb-12 overflow-hidden rounded-2xl border border-surface-200 bg-white shadow-sm"
        >
          <div className="border-l-[3px] border-primary-500 p-6 sm:p-8">
            {children}
          </div>
        </section>

        {/* Example */}
        {tool.exampleInput && (
          <section className="mb-10">
            <h2 className="mb-3 text-lg font-semibold text-surface-900">
              {dict?.example || "Example"}
            </h2>
            <div className="rounded-xl border border-surface-200 bg-surface-50 p-5">
              <div className="mb-2 flex items-start gap-3">
                <span className="shrink-0 text-xs font-semibold uppercase tracking-wider text-surface-500">
                  {dict?.exampleInput || "Input"}
                </span>
                <code className="font-mono text-sm text-surface-700">
                  {tool.exampleInput}
                </code>
              </div>
              {tool.exampleOutput && (
                <div className="flex items-start gap-3">
                  <span className="shrink-0 text-xs font-semibold uppercase tracking-wider text-surface-500">
                    {dict?.exampleOutput || "Output"}
                  </span>
                  <code className="font-mono text-sm text-surface-700">
                    {tool.exampleOutput}
                  </code>
                </div>
              )}
            </div>
          </section>
        )}

        {/* How to Use */}
        {howToUse.length > 0 && (
          <HowToUse steps={howToUse} toolName={tool.name} title={dict?.howToUse} />
        )}

        <AdSlot slot="in-content" className="my-8 h-20" />

        {/* FAQs */}
        {faqs.length > 0 && <FAQSection faqs={faqs} title={dict?.faq} />}

        {/* Related Tools */}
        {relatedTools.length > 0 && <RelatedTools tools={relatedTools} locale={locale} title={dict?.relatedTools} />}

        <AdSlot slot="bottom" className="mt-8 h-24" />
      </div>
    </>
  );
}
