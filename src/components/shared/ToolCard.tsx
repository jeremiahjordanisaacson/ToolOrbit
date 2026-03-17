import Link from "next/link";
import { Tool } from "@/lib/data/tools-all";
import { getDictSync } from "@/lib/i18n/get-dict-sync";
import { Locale } from "@/lib/i18n/config";
import { getToolName } from "@/lib/i18n/tool-name-translations";
import { translateTool } from "@/lib/i18n/translate-tools";

interface ToolCardProps {
  tool: Tool;
  locale?: string;
  useTool?: string;
}

export default function ToolCard({ tool, locale, useTool }: ToolCardProps) {
  const prefix = locale ? `/${locale}` : "";
  const loc = (locale || "en") as Locale;
  const label = useTool || getDictSync(loc).useTool;
  const translated = loc !== "en" ? translateTool(tool, loc) : null;
  return (
    <Link
      href={`${prefix}/tools/${tool.slug}/`}
      className="group flex flex-col rounded-xl border border-surface-200 bg-white p-5 transition-all hover:border-primary-200 hover:shadow-md hover:shadow-primary-100/50"
    >
      <h3 className="mb-1.5 text-[15px] font-semibold text-surface-900 group-hover:text-primary-600">
        {getToolName(tool.slug, loc) || tool.name}
      </h3>
      <p className="line-clamp-2 text-sm leading-relaxed text-surface-500">
        {translated?.intro || tool.intro}
      </p>
      <span className="mt-3 inline-flex items-center text-xs font-medium text-primary-600 opacity-0 transition-opacity group-hover:opacity-100">
        {label} →
      </span>
    </Link>
  );
}
