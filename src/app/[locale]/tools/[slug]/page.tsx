import { notFound } from "next/navigation";
import { Metadata } from "next";
import { allTools, getToolBySlug } from "@/lib/data/tools-all";
import { generateToolMetadata } from "@/lib/seo/metadata";
import ToolPageLayout from "@/components/shared/ToolPageLayout";
import ToolRenderer from "@/components/shared/ToolRenderer";

export function generateStaticParams() {
  return allTools.map((tool) => ({ slug: tool.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}): Promise<Metadata> {
  const { locale, slug } = await params;
  const tool = getToolBySlug(slug);
  if (!tool) return {};
  return generateToolMetadata(tool, locale);
}

export default async function ToolPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { slug } = await params;
  const tool = getToolBySlug(slug);
  if (!tool) notFound();

  return (
    <ToolPageLayout tool={tool}>
      <ToolRenderer slug={tool.slug} />
    </ToolPageLayout>
  );
}
