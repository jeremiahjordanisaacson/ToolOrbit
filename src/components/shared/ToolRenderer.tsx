"use client";

import { getToolComponent } from "@/components/tools";
import { getToolBySlug } from "@/lib/data/tools-all";
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
}

export default function ToolRenderer({ slug }: ToolRendererProps) {
  const tool = getToolBySlug(slug);

  if (tool?.template && templateComponents[tool.template]) {
    const TemplateComponent = templateComponents[tool.template];
    return <TemplateComponent config={tool.templateConfig || {}} />;
  }

  const CustomComponent = getToolComponent(slug);
  return <CustomComponent />;
}
