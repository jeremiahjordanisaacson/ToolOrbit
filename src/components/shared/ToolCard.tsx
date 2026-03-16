import Link from "next/link";
import { Tool } from "@/lib/data/tools-all";

interface ToolCardProps {
  tool: Tool;
}

export default function ToolCard({ tool }: ToolCardProps) {
  return (
    <Link
      href={`/tools/${tool.slug}/`}
      className="group flex flex-col rounded-xl border border-gray-200 bg-white p-5 transition-all hover:border-primary-300 hover:shadow-md"
    >
      <h3 className="mb-1 font-semibold text-gray-900 group-hover:text-primary-700">
        {tool.name}
      </h3>
      <p className="line-clamp-2 text-sm text-gray-500">{tool.intro}</p>
    </Link>
  );
}
