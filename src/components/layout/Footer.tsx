import Link from "next/link";
import { categories } from "@/lib/data/categories";
import { siteConfig } from "@/lib/data/site";

export default function Footer() {
  return (
    <footer className="mt-auto border-t border-surface-200 bg-surface-50">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid gap-12 md:grid-cols-3">
          {/* Brand */}
          <div className="md:pr-8">
            <Link href="/" className="mb-4 inline-flex items-center gap-2.5 group">
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary-600 text-sm font-bold text-white">
                TO
              </span>
              <span className="text-lg font-bold tracking-tight text-surface-900">
                Tool<span className="text-primary-600">Orbit</span>
              </span>
            </Link>
            <p className="mt-3 text-sm leading-relaxed text-surface-500">
              {siteConfig.tagline}. All tools run entirely in your browser — fast, private, and free.
            </p>
          </div>

          {/* Tool Categories */}
          <div>
            <h3 className="mb-4 text-xs font-semibold uppercase tracking-wider text-surface-500">
              Categories
            </h3>
            <ul className="space-y-2.5">
              {categories.map((cat) => (
                <li key={cat.slug}>
                  <Link
                    href={`/categories/${cat.slug}/`}
                    className="text-sm text-surface-500 hover:text-primary-600"
                  >
                    {cat.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/tools/"
                  className="text-sm font-medium text-surface-600 hover:text-primary-600"
                >
                  All Tools →
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="mb-4 text-xs font-semibold uppercase tracking-wider text-surface-500">
              Company
            </h3>
            <ul className="space-y-2.5">
              <li>
                <Link href="/about/" className="text-sm text-surface-500 hover:text-primary-600">
                  About
                </Link>
              </li>
              <li>
                <Link href="/contact/" className="text-sm text-surface-500 hover:text-primary-600">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/search/" className="text-sm text-surface-500 hover:text-primary-600">
                  Search
                </Link>
              </li>
              <li className="pt-2">
                <span className="block text-xs font-semibold uppercase tracking-wider text-surface-500 mb-2.5">Legal</span>
              </li>
              <li>
                <Link href="/privacy/" className="text-sm text-surface-500 hover:text-primary-600">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms/" className="text-sm text-surface-500 hover:text-primary-600">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="/disclaimer/" className="text-sm text-surface-500 hover:text-primary-600">
                  Disclaimer
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-14 flex flex-col items-center justify-between gap-3 border-t border-surface-200 pt-8 sm:flex-row">
          <p className="text-xs text-surface-500">
            © 2025 {siteConfig.name}. All rights reserved.
          </p>
          <p className="text-xs text-surface-500">
            🔒 Privacy first — your data never leaves your browser.
          </p>
        </div>
      </div>
    </footer>
  );
}
