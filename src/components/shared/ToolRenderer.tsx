"use client";

import { getToolComponent } from "@/components/tools";
import { getToolBySlug } from "@/lib/data/tools-all";
import { ToolUIProvider } from "@/lib/i18n/ToolUIContext";
import { getToolUILabels } from "@/lib/i18n/tool-ui-labels";
import { Locale } from "@/lib/i18n/config";
import dynamic from "next/dynamic";
import { ComponentType } from "react";

const templateComponents: Record<string, ComponentType<{ config: Record<string, unknown> }>> = {
  "pair-converter": dynamic(() => import("@/components/tools/templates/PairConverterTemplate")),
  "text-transform": dynamic(() => import("@/components/tools/templates/TextTransformTemplate")),
  "formula-calculator": dynamic(() => import("@/components/tools/templates/FormulaCalculatorTemplate")),
  "number-base": dynamic(() => import("@/components/tools/templates/NumberBaseTemplate")),
  "random-generator": dynamic(() => import("@/components/tools/templates/RandomGeneratorTemplate")),
  "date-calculator": dynamic(() => import("@/components/tools/templates/DateCalculatorTemplate")),
};

interface ToolRendererProps {
  slug: string;
  locale?: string;
}

export default function ToolRenderer({ slug, locale = "en" }: ToolRendererProps) {
  const tool = getToolBySlug(slug);
  const labels = getToolUILabels((locale || "en") as Locale);

  if (tool?.template && templateComponents[tool.template]) {
    const TemplateComponent = templateComponents[tool.template];
    return (
      <ToolUIProvider labels={labels}>
        <TemplateComponent config={tool.templateConfig || {}} />
      </ToolUIProvider>
    );
  }

  const CustomComponent = getToolComponent(slug);
  return (
    <ToolUIProvider labels={labels}>
      <CustomComponent />
    </ToolUIProvider>
  );
}
