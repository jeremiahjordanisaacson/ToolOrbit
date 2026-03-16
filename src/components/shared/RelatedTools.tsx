import Link from "next/link";
import { Tool } from "@/lib/data/tools-all";

interface RelatedToolsProps {
  tools: Tool[];
}

export default function RelatedTools({ tools }: RelatedToolsProps) {
  return (
    <section className="mb-10">
      <h2 className="mb-4 text-lg font-semibold text-surface-900">
        Related Tools
      </h2>
      <div className="grid gap-2 sm:grid-cols-2">
        {tools.map((tool) => (
          <Link
            key={tool.slug}
            href={`/tools/${tool.slug}/`}
            className="group flex items-center gap-3 rounded-lg border border-surface-200 bg-white px-4 py-3 transition-all hover:border-primary-200 hover:bg-primary-50/30"
          >
            <span className="text-sm font-medium text-surface-800 group-hover:text-primary-600">
              {tool.name}
            </span>
            <svg className="ml-auto h-4 w-4 text-surface-300 transition-transform group-hover:translate-x-0.5 group-hover:text-primary-400" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
            </svg>
          </Link>
        ))}
      </div>
    </section>
  );
}
