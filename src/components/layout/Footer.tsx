import Link from "next/link";
import { categories } from "@/lib/data/categories";
import { siteConfig } from "@/lib/data/site";

export default function Footer() {
  return (
    <footer className="mt-auto border-t border-gray-200 bg-gray-50">
      <div className="mx-auto max-w-6xl px-4 py-12">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <Link
              href="/"
              className="mb-3 inline-block text-lg font-bold text-primary-700"
            >
              🛠️ {siteConfig.name}
            </Link>
            <p className="text-sm text-gray-500">
              {siteConfig.tagline}. Fast, private, and free.
            </p>
          </div>

          {/* Categories */}
          <div>
            <h3 className="mb-3 text-sm font-semibold text-gray-900">
              Categories
            </h3>
            <ul className="space-y-2">
              {categories.map((cat) => (
                <li key={cat.slug}>
                  <Link
                    href={`/categories/${cat.slug}/`}
                    className="text-sm text-gray-500 transition-colors hover:text-primary-600"
                  >
                    {cat.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="mb-3 text-sm font-semibold text-gray-900">
              Resources
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/tools/"
                  className="text-sm text-gray-500 transition-colors hover:text-primary-600"
                >
                  All Tools
                </Link>
              </li>
              <li>
                <Link
                  href="/search/"
                  className="text-sm text-gray-500 transition-colors hover:text-primary-600"
                >
                  Search
                </Link>
              </li>
              <li>
                <Link
                  href="/about/"
                  className="text-sm text-gray-500 transition-colors hover:text-primary-600"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/contact/"
                  className="text-sm text-gray-500 transition-colors hover:text-primary-600"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="mb-3 text-sm font-semibold text-gray-900">Legal</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/privacy/"
                  className="text-sm text-gray-500 transition-colors hover:text-primary-600"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/terms/"
                  className="text-sm text-gray-500 transition-colors hover:text-primary-600"
                >
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link
                  href="/disclaimer/"
                  className="text-sm text-gray-500 transition-colors hover:text-primary-600"
                >
                  Disclaimer
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-10 border-t border-gray-200 pt-6 text-center">
          <p className="text-sm text-gray-400">
            © {new Date().getFullYear()} {siteConfig.name}. All tools run in
            your browser. Your data stays private.
          </p>
        </div>
      </div>

      {/* Future analytics placeholder */}
      {/* <AnalyticsScript /> */}
    </footer>
  );
}
