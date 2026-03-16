"use client";

import Link from "next/link";
import { useState } from "react";
import { categories } from "@/lib/data/categories";
import { getDictSync } from "@/lib/i18n/get-dict-sync";
import { locales, localeNames, localeFlags, Locale } from "@/lib/i18n/config";

interface HeaderProps {
  locale?: string;
}

export default function Header({ locale = "en" }: HeaderProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const dict = getDictSync(locale as Locale);
  const prefix = locale === "en" ? "" : `/${locale}`;

  return (
    <header className="sticky top-[3px] z-50 border-b border-surface-200/80 bg-white/95 backdrop-blur-sm">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 h-16" aria-label="Main navigation">
        {/* Logo */}
        <Link href={`${prefix}/`} className="flex items-center gap-2.5 group" aria-label="ToolOrbit Home">
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary-600 text-sm font-bold text-white transition-transform group-hover:scale-105">
            TO
          </span>
          <span className="text-lg font-bold tracking-tight text-surface-900">
            Tool<span className="text-primary-600">Orbit</span>
          </span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden items-center gap-1 md:flex">
          {categories.slice(0, 4).map((cat) => (
            <Link
              key={cat.slug}
              href={`${prefix}/categories/${cat.slug}/`}
              className="relative px-3 py-2 text-[13px] font-medium text-surface-600 hover:text-primary-600 after:absolute after:bottom-0 after:left-3 after:right-3 after:h-[2px] after:origin-left after:scale-x-0 after:bg-primary-500 after:transition-transform hover:after:scale-x-100"
            >
              {cat.name}
            </Link>
          ))}
          <Link
            href={`${prefix}/tools/`}
            className="relative px-3 py-2 text-[13px] font-medium text-surface-600 hover:text-primary-600 after:absolute after:bottom-0 after:left-3 after:right-3 after:h-[2px] after:origin-left after:scale-x-0 after:bg-primary-500 after:transition-transform hover:after:scale-x-100"
          >
            {dict.navAllTools}
          </Link>
          <div className="ml-2 h-5 w-px bg-surface-200" />
          <Link
            href={`${prefix}/search/`}
            className="ml-2 flex h-9 w-9 items-center justify-center rounded-lg text-surface-500 hover:bg-surface-100 hover:text-primary-600"
            aria-label={dict.navSearch}
          >
            <svg className="h-[18px] w-[18px]" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
            </svg>
          </Link>
          {/* Language picker */}
          <div className="relative ml-2">
            <button onClick={() => setLangOpen(!langOpen)} className="flex h-9 items-center gap-1 rounded-lg px-2 text-sm text-surface-600 hover:bg-surface-100">
              <span>{localeFlags[locale as Locale]}</span>
              <span className="text-xs uppercase">{locale}</span>
            </button>
            {langOpen && (
              <div className="absolute right-0 top-full mt-1 z-50 rounded-xl border border-surface-200 bg-white py-1 shadow-lg min-w-[160px]">
                {locales.map((l) => (
                  <a key={l} href={`/${l}/`} className="flex items-center gap-2 px-3 py-2 text-sm hover:bg-surface-50" onClick={() => setLangOpen(false)}>
                    <span>{localeFlags[l]}</span>
                    <span className={l === locale ? "font-medium text-primary-600" : "text-surface-600"}>{localeNames[l]}</span>
                  </a>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Mobile menu button */}
        <button
          className="flex h-9 w-9 items-center justify-center rounded-lg text-surface-600 hover:bg-surface-100 md:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
        >
          <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" aria-hidden="true">
            {menuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            )}
          </svg>
        </button>
      </nav>

      {/* Mobile menu overlay */}
      {menuOpen && (
        <div id="mobile-menu" className="border-t border-surface-200 bg-white px-6 py-4 md:hidden">
          <div className="flex flex-col gap-1">
            {categories.map((cat) => (
              <Link
                key={cat.slug}
                href={`${prefix}/categories/${cat.slug}/`}
                className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium text-surface-700 hover:bg-surface-100 hover:text-primary-600"
                onClick={() => setMenuOpen(false)}
              >
                <span className="text-base">{cat.icon}</span>
                {cat.name}
              </Link>
            ))}
            <div className="my-2 h-px bg-surface-200" />
            <Link href={`${prefix}/tools/`} className="rounded-lg px-3 py-2.5 text-sm font-medium text-surface-700 hover:bg-surface-100 hover:text-primary-600" onClick={() => setMenuOpen(false)}>
              {dict.navAllTools}
            </Link>
            <Link href={`${prefix}/search/`} className="rounded-lg px-3 py-2.5 text-sm font-medium text-primary-600 hover:bg-primary-50" onClick={() => setMenuOpen(false)}>
              🔍 {dict.navSearch}
            </Link>
            {/* Mobile language picker */}
            <div className="my-2 h-px bg-surface-200" />
            <div className="px-3 py-1 text-xs font-semibold uppercase tracking-wider text-surface-500">{dict.navLanguage}</div>
            <div className="grid grid-cols-2 gap-1">
              {locales.map((l) => (
                <a key={l} href={`/${l}/`} className="flex items-center gap-2 rounded-lg px-3 py-2 text-sm hover:bg-surface-50" onClick={() => setMenuOpen(false)}>
                  <span>{localeFlags[l]}</span>
                  <span className={l === locale ? "font-medium text-primary-600" : "text-surface-600"}>{localeNames[l]}</span>
                </a>
              ))}
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
