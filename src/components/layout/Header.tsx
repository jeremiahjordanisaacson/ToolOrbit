"use client";

import Link from "next/link";
import { useState } from "react";
import { categories } from "@/lib/data/categories";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-gray-200 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/80">
      <nav
        className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3"
        aria-label="Main navigation"
      >
        <Link
          href="/"
          className="flex items-center gap-2 text-xl font-bold text-primary-700"
          aria-label="ToolOrbit Home"
        >
          <span aria-hidden="true">🛠️</span>
          <span>ToolOrbit</span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden items-center gap-6 md:flex">
          {categories.map((cat) => (
            <Link
              key={cat.slug}
              href={`/categories/${cat.slug}/`}
              className="text-sm font-medium text-gray-600 transition-colors hover:text-primary-700"
            >
              {cat.name}
            </Link>
          ))}
          <Link
            href="/tools/"
            className="text-sm font-medium text-gray-600 transition-colors hover:text-primary-700"
          >
            All Tools
          </Link>
          <Link
            href="/search/"
            className="rounded-lg bg-primary-50 px-3 py-1.5 text-sm font-medium text-primary-700 transition-colors hover:bg-primary-100"
            aria-label="Search tools"
          >
            🔍 Search
          </Link>
        </div>

        {/* Mobile menu button */}
        <button
          className="rounded-lg p-2 text-gray-600 transition-colors hover:bg-gray-100 md:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
        >
          <svg
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            aria-hidden="true"
          >
            {menuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            )}
          </svg>
        </button>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div
          id="mobile-menu"
          className="border-t border-gray-200 bg-white px-4 py-3 md:hidden"
        >
          <div className="flex flex-col gap-2">
            {categories.map((cat) => (
              <Link
                key={cat.slug}
                href={`/categories/${cat.slug}/`}
                className="rounded-lg px-3 py-2 text-sm font-medium text-gray-600 transition-colors hover:bg-gray-50 hover:text-primary-700"
                onClick={() => setMenuOpen(false)}
              >
                <span className="mr-2">{cat.icon}</span>
                {cat.name}
              </Link>
            ))}
            <Link
              href="/tools/"
              className="rounded-lg px-3 py-2 text-sm font-medium text-gray-600 transition-colors hover:bg-gray-50 hover:text-primary-700"
              onClick={() => setMenuOpen(false)}
            >
              All Tools
            </Link>
            <Link
              href="/search/"
              className="rounded-lg px-3 py-2 text-sm font-medium text-primary-700 transition-colors hover:bg-primary-50"
              onClick={() => setMenuOpen(false)}
            >
              🔍 Search Tools
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
