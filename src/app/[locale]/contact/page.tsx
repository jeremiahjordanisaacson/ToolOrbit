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
    "Contact Us | ToolOrbit",
    "Get in touch with the ToolOrbit team. Report bugs, request features, or send feedback about our free online tools.",
    `/${locale}/contact/`
  );
}

export default async function ContactPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  return (
    <div className="mx-auto max-w-3xl px-4 py-12">
      <h1 className="mb-6 text-3xl font-bold text-gray-900">Contact Us</h1>

      <div className="space-y-6 text-gray-600 leading-relaxed">
        <p>
          We&apos;d love to hear from you. Whether you have a feature request,
          found a bug, or just want to say hello, here&apos;s how to reach us.
        </p>

        <div className="rounded-xl bg-white p-6 shadow-sm">
          <h2 className="mb-4 text-lg font-semibold text-gray-900">
            Get in Touch
          </h2>
          <div className="space-y-4">
            <div>
              <h3 className="font-medium text-gray-800">Feature Requests</h3>
              <p className="text-gray-600">
                Want to see a new tool on {siteConfig.name}? We&apos;re always
                looking to add useful tools. A contact form is coming soon.
              </p>
            </div>
            <div>
              <h3 className="font-medium text-gray-800">Bug Reports</h3>
              <p className="text-gray-600">
                Found something broken? Please note the tool name, your
                browser, and what happened. We&apos;re working on adding a
                proper feedback form.
              </p>
            </div>
            <div>
              <h3 className="font-medium text-gray-800">General Inquiries</h3>
              <p className="text-gray-600">
                For business inquiries, partnerships, or other questions,
                a contact form will be available here shortly.
              </p>
            </div>
          </div>
        </div>

        <p className="text-sm text-gray-500">
          We aim to respond to all inquiries within 48 hours. Please be
          patient as we are a small team.
        </p>
      </div>
    </div>
  );
}
