"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { getDictSync } from "@/lib/i18n/get-dict-sync";
import { isValidLocale } from "@/lib/i18n/config";

export default function NotFound() {
  const pathname = usePathname();
  const seg = pathname.split("/")[1] || "en";
  const locale = isValidLocale(seg) ? seg : "en";
  const dict = getDictSync(locale);

  return (
    <div className="mx-auto flex max-w-2xl flex-col items-center px-6 py-28 text-center">
      <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-primary-600">
        Error 404
      </p>
      <h1 className="mb-3 text-3xl font-extrabold tracking-tight text-surface-900 sm:text-4xl">
        {dict.notFound}
      </h1>
      <p className="mb-10 max-w-md text-base leading-relaxed text-surface-500">
        {dict.notFoundMessage}
      </p>
      <div className="flex gap-4">
        <Link
          href={`/${locale}/`}
          className="rounded-xl bg-primary-600 px-6 py-2.5 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-primary-700"
        >
          {dict.goHome}
        </Link>
        <Link
          href={`/${locale}/tools/`}
          className="rounded-xl border border-surface-200 bg-white px-6 py-2.5 text-sm font-semibold text-surface-700 shadow-sm transition-colors hover:bg-surface-50"
        >
          {dict.browseTools}
        </Link>
      </div>
    </div>
  );
}
