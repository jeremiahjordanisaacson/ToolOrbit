import Link from "next/link";
import { categories } from "@/lib/data/categories";
import { siteConfig } from "@/lib/data/site";
import { getDictSync } from "@/lib/i18n/get-dict-sync";
import { Locale } from "@/lib/i18n/config";

interface FooterProps {
  locale?: string;
}

export default function Footer({ locale = "en" }: FooterProps) {
  const dict = getDictSync(locale as Locale);
  const prefix = locale === "en" ? "" : `/${locale}`;

  return (
    <footer className="mt-auto border-t border-surface-200 bg-surface-50">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid gap-12 md:grid-cols-3">
          {/* Brand */}
          <div className="md:pr-8">
            <Link href={`${prefix}/`} className="mb-4 inline-flex items-center gap-2.5 group">
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary-600 text-sm font-bold text-white">
                TO
              </span>
              <span className="text-lg font-bold tracking-tight text-surface-900">
                Tool<span className="text-primary-600">Orbit</span>
              </span>
            </Link>
            <p className="mt-3 text-sm leading-relaxed text-surface-500">
              {dict.siteTagline}
            </p>
          </div>

          {/* Tool Categories */}
          <div>
            <h3 className="mb-4 text-xs font-semibold uppercase tracking-wider text-surface-500">
              {dict.footerCategories}
            </h3>
            <ul className="space-y-2.5">
              {categories.map((cat) => (
                <li key={cat.slug}>
                  <Link
                    href={`${prefix}/categories/${cat.slug}/`}
                    className="text-sm text-surface-500 hover:text-primary-600"
                  >
                    {cat.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href={`${prefix}/tools/`}
                  className="text-sm font-medium text-surface-600 hover:text-primary-600"
                >
                  {dict.navAllTools} →
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="mb-4 text-xs font-semibold uppercase tracking-wider text-surface-500">
              {dict.footerResources}
            </h3>
            <ul className="space-y-2.5">
              <li>
                <Link href={`${prefix}/about/`} className="text-sm text-surface-500 hover:text-primary-600">
                  {dict.aboutUs}
                </Link>
              </li>
              <li>
                <Link href={`${prefix}/contact/`} className="text-sm text-surface-500 hover:text-primary-600">
                  {dict.contactUs}
                </Link>
              </li>
              <li>
                <Link href={`${prefix}/search/`} className="text-sm text-surface-500 hover:text-primary-600">
                  {dict.navSearch}
                </Link>
              </li>
              <li className="pt-2">
                <span className="block text-xs font-semibold uppercase tracking-wider text-surface-500 mb-2.5">{dict.footerLegal}</span>
              </li>
              <li>
                <Link href={`${prefix}/privacy/`} className="text-sm text-surface-500 hover:text-primary-600">
                  {dict.footerPrivacy}
                </Link>
              </li>
              <li>
                <Link href={`${prefix}/terms/`} className="text-sm text-surface-500 hover:text-primary-600">
                  {dict.footerTerms}
                </Link>
              </li>
              <li>
                <Link href={`${prefix}/disclaimer/`} className="text-sm text-surface-500 hover:text-primary-600">
                  {dict.footerDisclaimer}
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-14 flex flex-col items-center justify-between gap-3 border-t border-surface-200 pt-8 sm:flex-row">
          <p className="text-xs text-surface-500">
            {dict.footerCopyright}
          </p>
          <p className="text-xs text-surface-500">
            🔒 {dict.footerPrivacyNote}
          </p>
        </div>
      </div>
    </footer>
  );
}
