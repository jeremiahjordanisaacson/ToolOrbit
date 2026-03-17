import Link from "next/link";
import { generatePageMetadata } from "@/lib/seo/metadata";

export const metadata = generatePageMetadata(
  "Page Not Found | ToolOrbit",
  "The page you are looking for does not exist. Browse our collection of free online tools.",
  "/404/"
);

export default function NotFound() {
  return (
    <div className="mx-auto flex max-w-2xl flex-col items-center px-6 py-28 text-center">
      <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-primary-600">
        Error 404
      </p>
      <h1 className="mb-3 text-3xl font-extrabold tracking-tight text-surface-900 sm:text-4xl">
        Page Not Found
      </h1>
      <p className="mb-10 max-w-md text-base leading-relaxed text-surface-500">
        The page you&apos;re looking for doesn&apos;t exist or has been moved.
      </p>
      <div className="flex gap-4">
        <Link
          href="/"
          className="rounded-xl bg-primary-600 px-6 py-2.5 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-primary-700"
        >
          Go Home
        </Link>
        <Link
          href="/en/tools/"
          className="rounded-xl border border-surface-200 bg-white px-6 py-2.5 text-sm font-semibold text-surface-700 shadow-sm transition-colors hover:bg-surface-50"
        >
          Browse Tools
        </Link>
      </div>
    </div>
  );
}
