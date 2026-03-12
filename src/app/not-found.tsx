import Link from "next/link";
import { generatePageMetadata } from "@/lib/seo/metadata";

export const metadata = generatePageMetadata(
  "Page Not Found | ToolOrbit",
  "The page you are looking for does not exist. Browse our collection of free online tools.",
  "/404/"
);

export default function NotFound() {
  return (
    <div className="mx-auto flex max-w-2xl flex-col items-center px-4 py-24 text-center">
      <h1 className="mb-4 text-6xl font-bold text-gray-300">404</h1>
      <h2 className="mb-3 text-2xl font-bold text-gray-900">Page Not Found</h2>
      <p className="mb-8 text-gray-600">
        The page you&apos;re looking for doesn&apos;t exist or has been moved.
      </p>
      <div className="flex gap-4">
        <Link
          href="/"
          className="rounded-lg bg-primary-600 px-5 py-2.5 font-medium text-white transition-colors hover:bg-primary-700"
        >
          Go Home
        </Link>
        <Link
          href="/tools/"
          className="rounded-lg border border-gray-300 bg-white px-5 py-2.5 font-medium text-gray-700 transition-colors hover:bg-gray-50"
        >
          Browse Tools
        </Link>
      </div>
    </div>
  );
}
