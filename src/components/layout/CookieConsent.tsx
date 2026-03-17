"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { getDictSync } from "@/lib/i18n/get-dict-sync";
import { Locale, locales } from "@/lib/i18n/config";

type ConsentState = "pending" | "accepted" | "rejected";

function detectLocale(): Locale {
  if (typeof window === "undefined") return "en";
  const path = window.location.pathname;
  const segment = path.split("/")[1];
  if (segment && locales.includes(segment as Locale)) return segment as Locale;
  return "en";
}

export default function CookieConsent() {
  const [consent, setConsent] = useState<ConsentState>("pending");
  const [visible, setVisible] = useState(false);
  const [locale, setLocale] = useState<Locale>("en");

  useEffect(() => {
    setLocale(detectLocale());
    const stored = localStorage.getItem("toolorbit_cookie_consent");
    if (stored === "accepted" || stored === "rejected") {
      setConsent(stored);
    } else {
      const timer = setTimeout(() => setVisible(true), 1000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("toolorbit_cookie_consent", "accepted");
    setConsent("accepted");
    setVisible(false);
  };

  const handleReject = () => {
    localStorage.setItem("toolorbit_cookie_consent", "rejected");
    setConsent("rejected");
    setVisible(false);
  };

  if (consent !== "pending" || !visible) return null;

  const dict = getDictSync(locale);

  return (
    <div
      role="dialog"
      aria-label="Cookie consent"
      className="fixed inset-x-0 bottom-0 z-50 animate-[slideUp_0.3s_ease-out] border-t border-surface-200 bg-white/95 backdrop-blur-sm"
    >
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 px-6 py-4 sm:flex-row sm:justify-between">
        <p className="text-sm text-surface-600">
          {dict.cookieMessage}{" "}
          <Link href={`/${locale}/privacy/`} className="font-medium text-primary-600 hover:underline">
            {dict.footerPrivacy}
          </Link>
        </p>
        <div className="flex shrink-0 gap-3">
          <button
            onClick={handleReject}
            className="rounded-lg border border-surface-300 bg-white px-4 py-2 text-sm font-medium text-surface-700 transition-colors hover:bg-surface-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2"
          >
            {dict.cookieReject}
          </button>
          <button
            onClick={handleAccept}
            className="rounded-lg bg-primary-600 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-primary-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2"
          >
            {dict.cookieAccept}
          </button>
        </div>
      </div>
    </div>
  );
}
