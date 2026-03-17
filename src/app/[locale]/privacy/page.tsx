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
    "Privacy Policy | ToolOrbit",
    "Read the ToolOrbit privacy policy. Learn how we handle your data — spoiler: your data never leaves your browser.",
    `/${locale}/privacy/`
  );
}

export default async function PrivacyPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
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

        <h2 className="text-xl font-semibold text-gray-900">Cookies</h2>
        <p>
          {siteConfig.name} uses only essential cookies required for basic
          site functionality. We do not use tracking cookies, advertising
          cookies, or third-party analytics cookies. The only cookie we
          store is your cookie consent preference.
        </p>
        <p>
          <strong>Essential cookies used:</strong>
        </p>
        <ul className="list-inside list-disc space-y-1">
          <li>
            <strong>toolorbit_cookie_consent</strong> — Stores your cookie
            consent preference (accepted/rejected). Stored in localStorage,
            not as a cookie. No expiry unless cleared manually.
          </li>
        </ul>
        <p>
          Under GDPR, you have the right to withdraw consent at any time
          by clearing your browser&apos;s local storage for this site, or by
          using your browser&apos;s privacy/cookie settings.
        </p>

        <h2 className="text-xl font-semibold text-gray-900">
          Your Rights Under GDPR
        </h2>
        <p>
          If you are located in the European Economic Area (EEA), you have
          the following rights regarding your personal data:
        </p>
        <ul className="list-inside list-disc space-y-1">
          <li><strong>Right of access</strong> — You can request copies of your personal data.</li>
          <li><strong>Right to rectification</strong> — You can request correction of inaccurate data.</li>
          <li><strong>Right to erasure</strong> — You can request deletion of your personal data.</li>
          <li><strong>Right to restrict processing</strong> — You can request we limit how we use your data.</li>
          <li><strong>Right to data portability</strong> — You can request we transfer your data to another organization.</li>
          <li><strong>Right to object</strong> — You can object to our processing of your data.</li>
        </ul>
        <p>
          Since {siteConfig.name} processes all data locally in your browser
          and does not collect or store personal data on our servers, these
          rights are automatically satisfied. No personal data is held by us
          that would need to be accessed, corrected, or deleted.
        </p>
        <p>
          If you have questions about your data rights, contact us at
          contact@toolorbit.com.
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
          Questions about this policy? Visit our{" "}
          <a href={`/${locale}/contact/`} className="text-primary-600 hover:underline">contact page</a>.
        </p>
      </div>
    </div>
  );
}
