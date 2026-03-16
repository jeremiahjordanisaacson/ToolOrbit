import { Tool, allTools as coreTools } from "./tools";
import { generatedUnitTools } from "./generators/unit-conversions";
import { generatedTextTools } from "./generators/text-tools-generated";
import { generatedCalculatorTools } from "./generators/calculators-generated";
import { generatedMiscTools } from "./generators/misc-tools-generated";
import { generatedExtraTools } from "./generators/extra-tools-generated";

export type { Tool };
export type { FAQ } from "./tools";

const allToolsCombined: Tool[] = [
  ...coreTools,
  ...generatedUnitTools,
  ...generatedTextTools,
  ...generatedCalculatorTools,
  ...generatedMiscTools,
  ...generatedExtraTools,
];

// Deduplicate by slug (core tools take priority)
const seen = new Set<string>();
export const allTools: Tool[] = [];
for (const tool of allToolsCombined) {
  if (!seen.has(tool.slug)) {
    seen.add(tool.slug);
    allTools.push(tool);
  }
}

export function getToolBySlug(slug: string): Tool | undefined {
  return allTools.find((t) => t.slug === slug);
}

export function getToolsByCategory(categorySlug: string): Tool[] {
  return allTools.filter((t) => t.categorySlug === categorySlug);
}

export function getAllToolSlugs(): string[] {
  return allTools.map((t) => t.slug);
}

export function getRelatedTools(tool: Tool): Tool[] {
  return tool.relatedSlugs
    .map((slug) => getToolBySlug(slug))
    .filter((t): t is Tool => t !== undefined)
    .slice(0, 6);
}

export const toolCount = allTools.length;
