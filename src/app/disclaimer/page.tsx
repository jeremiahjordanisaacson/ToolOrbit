import { Metadata } from "next";
import { generatePageMetadata } from "@/lib/seo/metadata";
import { siteConfig } from "@/lib/data/site";

export const metadata: Metadata = generatePageMetadata(
  "Disclaimer | ToolOrbit",
  "Read the ToolOrbit disclaimer. Understand the limitations of our free online tools and the accuracy of results.",
  "/disclaimer/"
);

export default function DisclaimerPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-12">
      <h1 className="mb-6 text-3xl font-bold text-gray-900">Disclaimer</h1>
      <p className="mb-6 text-sm text-gray-500">
        Last updated: March 2026
      </p>

      <div className="space-y-6 text-gray-600 leading-relaxed">
        <h2 className="text-xl font-semibold text-gray-900">
          General Disclaimer
        </h2>
        <p>
          The tools and information provided on {siteConfig.name} are for
          general informational and utility purposes only. While we strive to
          provide accurate and useful tools, we make no representations or
          warranties about the completeness, reliability, or accuracy of the
          results.
        </p>

        <h2 className="text-xl font-semibold text-gray-900">
          Not Professional Advice
        </h2>
        <p>
          The tools on this site do not constitute professional advice of any
          kind. Specifically:
        </p>
        <ul className="list-inside list-disc space-y-1">
          <li>
            <strong>Health tools</strong> (like the BMI Calculator) are for
            informational purposes only and should not replace professional
            medical advice.
          </li>
          <li>
            <strong>Financial tools</strong> (like loan and interest
            calculators) provide estimates only and should not be the sole
            basis for financial decisions.
          </li>
          <li>
            <strong>Developer tools</strong> are utilities for convenience.
            Always validate critical outputs independently.
          </li>
          <li>
            <strong>Security tools</strong> (like the password generator) use
            cryptographically secure methods, but we cannot guarantee the
            security of generated passwords in all contexts.
          </li>
        </ul>

        <h2 className="text-xl font-semibold text-gray-900">
          Accuracy of Results
        </h2>
        <p>
          We make every effort to ensure our tools produce accurate results.
          However, due to the nature of browser-based computation, floating
          point arithmetic, and varying browser implementations, results may
          have minor precision differences. For critical applications, always
          verify results independently.
        </p>

        <h2 className="text-xl font-semibold text-gray-900">
          External Links
        </h2>
        <p>
          Our site may contain links to external websites. We are not
          responsible for the content, privacy practices, or accuracy of
          external sites.
        </p>

        <h2 className="text-xl font-semibold text-gray-900">Contact</h2>
        <p>
          If you have concerns about the accuracy of any tool, please contact
          us via our{" "}
          <a href="/contact/" className="text-primary-600 hover:underline">contact page</a>.
        </p>
      </div>
    </div>
  );
}
