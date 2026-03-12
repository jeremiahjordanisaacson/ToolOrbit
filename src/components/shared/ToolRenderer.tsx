"use client";

import { getToolComponent } from "@/components/tools";

interface ToolRendererProps {
  slug: string;
}

export default function ToolRenderer({ slug }: ToolRendererProps) {
  const ToolComponent = getToolComponent(slug);
  return <ToolComponent />;
}
