import { Metadata } from "next";
import { generatePageMetadata } from "@/lib/seo/metadata";
import { siteConfig } from "@/lib/data/site";

export const metadata: Metadata = generatePageMetadata(
  "Privacy Policy | ToolOrbit",
  "Read the ToolOrbit privacy policy. Learn how we handle your data — spoiler: your data never leaves your browser.",
  "/privacy/"
);

export default function PrivacyPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-12">
      <h1 className="mb-6 text-3xl font-bold text-gray-900">Privacy Policy</h1>
      <p className="mb-6 text-sm text-gray-500">
        Last updated: March 2026
      </p>

      <div className="space-y-6 text-gray-600 leading-relaxed">
        <h2 className="text-xl font-semibold text-gray-900">Overview</h2>
        <p>
          {siteConfig.name} is committed to protecting your privacy. This
          Privacy Policy explains how we handle information when you use our
          website and tools.
        </p>
        <p>
          <strong>The short version:</strong> All tools on {siteConfig.name}{" "}
          run entirely in your browser. We do not collect, store, or transmit
          any data you enter into our tools.
        </p>

        <h2 className="text-xl font-semibold text-gray-900">
          Data You Enter Into Tools
        </h2>
        <p>
          All text, numbers, and other data you enter into any tool on{" "}
          {siteConfig.name} is processed entirely within your web browser using
          JavaScript. This data is never sent to our servers or any third-party
          servers. When you close the browser tab, your data is gone.
        </p>

        <h2 className="text-xl font-semibold text-gray-900">
          Information We May Collect
        </h2>
        <p>
          We may collect anonymous, aggregated usage data to understand how our
          tools are used and to improve the site. This may include:
        </p>
        <ul className="list-inside list-disc space-y-1">
          <li>Pages visited (anonymized)</li>
          <li>Browser type and operating system</li>
          <li>Referring website</li>
          <li>Country of origin (derived from IP, not stored)</li>
        </ul>
        <p>
          We do not use cookies for tracking. If we implement analytics in the
          future, we will use a privacy-respecting analytics service that does
          not use cookies and does not track individuals.
        </p>

        <h2 className="text-xl font-semibold text-gray-900">
          Third-Party Services
        </h2>
        <p>
          Our site may use the following third-party services:
        </p>
        <ul className="list-inside list-disc space-y-1">
          <li>
            <strong>Hosting:</strong> Microsoft Azure Static Web Apps for
            serving the website.
          </li>
          <li>
            <strong>Fonts:</strong> Google Fonts for web typography, subject to{" "}
            <a
              href="https://policies.google.com/privacy"
              className="text-primary-600 hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              Google&apos;s Privacy Policy
            </a>
            .
          </li>
        </ul>

        <h2 className="text-xl font-semibold text-gray-900">Advertising</h2>
        <p>
          We may display advertisements on the site in the future. If we do,
          this privacy policy will be updated to describe any data collection
          by advertising partners.
        </p>

        <h2 className="text-xl font-semibold text-gray-900">
          Children&apos;s Privacy
        </h2>
        <p>
          Our services are not directed to individuals under 13. We do not
          knowingly collect personal information from children.
        </p>

        <h2 className="text-xl font-semibold text-gray-900">
          Changes to This Policy
        </h2>
        <p>
          We may update this Privacy Policy from time to time. Changes will be
          posted on this page with an updated date.
        </p>

        <h2 className="text-xl font-semibold text-gray-900">Contact</h2>
        <p>
          Questions about this policy? Email us at contact@toolorbit.com.
        </p>
      </div>
    </div>
  );
}
