import { Metadata } from "next";
import { generatePageMetadata } from "@/lib/seo/metadata";
import { siteConfig } from "@/lib/data/site";

export const metadata: Metadata = generatePageMetadata(
  "Contact Us | ToolOrbit",
  "Get in touch with the ToolOrbit team. Report bugs, request features, or send feedback about our free online tools.",
  "/contact/"
);

export default function ContactPage() {
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
              <h3 className="font-medium text-gray-800">Email</h3>
              <p className="text-gray-600">
                contact@toolorbit.com
              </p>
            </div>
            <div>
              <h3 className="font-medium text-gray-800">Feature Requests</h3>
              <p className="text-gray-600">
                Want to see a new tool on {siteConfig.name}? Send us an email
                with your idea and we&apos;ll consider adding it.
              </p>
            </div>
            <div>
              <h3 className="font-medium text-gray-800">Bug Reports</h3>
              <p className="text-gray-600">
                Found something broken? Please include the tool name, your
                browser, and what happened. Screenshots help.
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
