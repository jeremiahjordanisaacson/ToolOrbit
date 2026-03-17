import { Metadata } from "next";
import { generatePageMetadata } from "@/lib/seo/metadata";
import { siteConfig } from "@/lib/data/site";
import Link from "next/link";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  return generatePageMetadata(
    "About ToolOrbit — Free Online Tools for Everyday Tasks",
    "Learn about ToolOrbit, a free collection of online tools for text editing, development, calculations, and more. Privacy-first, fast, and always free.",
    `/${locale}/about/`
  );
}

export default async function AboutPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  return (
    <div className="mx-auto max-w-3xl px-4 py-12">
      <h1 className="mb-6 text-3xl font-bold text-gray-900">
        About {siteConfig.name}
      </h1>

      <div className="space-y-6 text-gray-600 leading-relaxed">
        <p>
          {siteConfig.name} is a free collection of online tools designed to
          make everyday tasks faster and easier. Whether you&apos;re a writer
          counting words, a developer formatting JSON, a student calculating
          percentages, or anyone who needs a quick utility tool —{" "}
          {siteConfig.name} has you covered.
        </p>

        <h2 className="text-xl font-semibold text-gray-900">Our Mission</h2>
        <p>
          We believe simple tools should be free, fast, and private. Too many
          utility websites are cluttered with ads, require signups, or send
          your data to servers. {siteConfig.name} takes a different approach:
        </p>
        <ul className="list-inside list-disc space-y-2">
          <li>
            <strong>Privacy first</strong> — Every tool runs entirely in your
            browser. Your data never leaves your device.
          </li>
          <li>
            <strong>Always free</strong> — No premium tiers, no feature locks,
            no signup required.
          </li>
          <li>
            <strong>Fast and simple</strong> — Clean design, instant results,
            no bloat.
          </li>
          <li>
            <strong>Accessible</strong> — Built to work for everyone, including
            keyboard-only and screen reader users.
          </li>
        </ul>

        <h2 className="text-xl font-semibold text-gray-900">What We Offer</h2>
        <p>
          Our growing collection includes tools for{" "}
          <Link
            href={`/${locale}/categories/text-tools/`}
            className="text-primary-600 hover:underline"
          >
            text editing
          </Link>
          ,{" "}
          <Link
            href={`/${locale}/categories/developer-tools/`}
            className="text-primary-600 hover:underline"
          >
            software development
          </Link>
          ,{" "}
          <Link
            href={`/${locale}/categories/math-and-conversion-tools/`}
            className="text-primary-600 hover:underline"
          >
            math and unit conversion
          </Link>
          , and{" "}
          <Link
            href={`/${locale}/categories/random-and-utility-tools/`}
            className="text-primary-600 hover:underline"
          >
            random generators
          </Link>
          . Each tool is carefully built to be genuinely useful, not just a thin
          wrapper around a basic function.
        </p>

        <h2 className="text-xl font-semibold text-gray-900">Technology</h2>
        <p>
          {siteConfig.name} is built with modern web technology for maximum
          speed and reliability. Our tools use browser-native APIs like the
          Web Crypto API for secure random generation and the SubtleCrypto
          API for hash generation. The site loads fast and works offline once
          loaded.
        </p>

        <h2 className="text-xl font-semibold text-gray-900">Contact</h2>
        <p>
          Have feedback, a tool request, or a bug report? Visit our{" "}
          <Link
            href={`/${locale}/contact/`}
            className="text-primary-600 hover:underline"
          >
            contact page
          </Link>
          .
        </p>
      </div>
    </div>
  );
}
