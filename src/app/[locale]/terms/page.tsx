import { Metadata } from "next";
import { generatePageMetadata } from "@/lib/seo/metadata";
import { siteConfig } from "@/lib/data/site";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  return generatePageMetadata(
    "Terms of Service | ToolOrbit",
    "Read the ToolOrbit terms of service. Understand the terms governing your use of our free online tools.",
    `/${locale}/terms/`
  );
}

export default async function TermsPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  return (
    <div className="mx-auto max-w-3xl px-4 py-12">
      <h1 className="mb-6 text-3xl font-bold text-gray-900">
        Terms of Service
      </h1>
      <p className="mb-6 text-sm text-gray-500">
        Last updated: March 2026
      </p>

      <div className="space-y-6 text-gray-600 leading-relaxed">
        <h2 className="text-xl font-semibold text-gray-900">
          Acceptance of Terms
        </h2>
        <p>
          By accessing and using {siteConfig.name} (&quot;the Site&quot;), you
          agree to be bound by these Terms of Service. If you do not agree to
          these terms, please do not use the Site.
        </p>

        <h2 className="text-xl font-semibold text-gray-900">
          Description of Service
        </h2>
        <p>
          {siteConfig.name} provides free online utility tools that run in your
          web browser. These tools include text editors, code formatters,
          calculators, converters, and generators. The tools are provided
          &quot;as is&quot; without warranty.
        </p>

        <h2 className="text-xl font-semibold text-gray-900">Use of Tools</h2>
        <p>You may use our tools for any lawful purpose. You agree not to:</p>
        <ul className="list-inside list-disc space-y-1">
          <li>Use the tools for any illegal or unauthorized purpose</li>
          <li>Attempt to disrupt or overload the service</li>
          <li>Copy or redistribute the site&apos;s code without permission</li>
          <li>Use automated systems to access the site in a way that sends more requests than a human could reasonably produce</li>
        </ul>

        <h2 className="text-xl font-semibold text-gray-900">
          No Warranty
        </h2>
        <p>
          The tools on {siteConfig.name} are provided &quot;as is&quot; and
          &quot;as available&quot; without any warranties of any kind, express
          or implied. We do not guarantee that the tools will be error-free,
          accurate, or available at all times.
        </p>

        <h2 className="text-xl font-semibold text-gray-900">
          Limitation of Liability
        </h2>
        <p>
          To the maximum extent permitted by law, {siteConfig.name} and its
          operators shall not be liable for any damages arising from the use
          or inability to use our tools. This includes but is not limited to
          direct, indirect, incidental, consequential, or punitive damages.
        </p>

        <h2 className="text-xl font-semibold text-gray-900">
          Intellectual Property
        </h2>
        <p>
          The content, design, and code of {siteConfig.name} are protected by
          copyright and other intellectual property laws. You may not reproduce,
          distribute, or create derivative works from the site without
          permission.
        </p>

        <h2 className="text-xl font-semibold text-gray-900">
          Changes to Terms
        </h2>
        <p>
          We reserve the right to modify these Terms of Service at any time.
          Changes will be posted on this page with an updated effective date.
          Continued use of the Site after changes constitutes acceptance of the
          revised terms.
        </p>

        <h2 className="text-xl font-semibold text-gray-900">Contact</h2>
        <p>
          Questions about these terms? Visit our{" "}
          <a href={`/${locale}/contact/`} className="text-primary-600 hover:underline">contact page</a>.
        </p>
      </div>
    </div>
  );
}
