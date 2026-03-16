"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { searchTools, SearchResult } from "@/lib/search";

export default function SearchBar() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<SearchResult[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const wrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (query.length > 0) {
      setResults(searchTools(query).slice(0, 8));
      setIsOpen(true);
    } else {
      setResults([]);
      setIsOpen(false);
    }
  }, [query]);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        wrapperRef.current &&
        !wrapperRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div ref={wrapperRef} className="relative w-full max-w-xl">
      <label htmlFor="search-input" className="sr-only">
        Search tools
      </label>
      <div className="relative">
        <svg
          className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-surface-400"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
        </svg>
        <input
          id="search-input"
          type="search"
          placeholder="Search tools (e.g. JSON formatter, word counter)..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onFocus={() => query.length > 0 && setIsOpen(true)}
          className="w-full rounded-xl border border-surface-200 bg-white py-3.5 pl-11 pr-4 text-sm text-surface-900 shadow-sm transition-all placeholder:text-surface-400 focus:border-primary-400 focus:outline-none focus:ring-2 focus:ring-primary-100"
          autoComplete="off"
        />
      </div>
      {isOpen && results.length > 0 && (
        <ul
          className="absolute left-0 right-0 top-full z-50 mt-1.5 max-h-80 overflow-y-auto rounded-xl border border-surface-200 bg-white py-1.5 shadow-lg"
          role="listbox"
        >
          {results.map((result) => (
            <li key={result.slug} role="option" aria-selected={false}>
              <Link
                href={result.url}
                className="flex items-center gap-3 px-4 py-2.5 transition-colors hover:bg-primary-50"
                onClick={() => {
                  setIsOpen(false);
                  setQuery("");
                }}
              >
                <span className="text-xs font-semibold uppercase tracking-wider text-surface-400">
                  {result.type}
                </span>
                <span className="text-sm font-medium text-surface-800">{result.name}</span>
              </Link>
            </li>
          ))}
        </ul>
      )}
      {isOpen && query.length > 0 && results.length === 0 && (
        <div className="absolute left-0 right-0 top-full z-50 mt-1.5 rounded-xl border border-surface-200 bg-white px-4 py-6 text-center text-sm text-surface-500 shadow-lg">
          No tools found for &quot;{query}&quot;
        </div>
      )}
    </div>
  );
}
