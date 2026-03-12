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
      <input
        id="search-input"
        type="search"
        placeholder="Search tools (e.g. JSON formatter, word counter)..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onFocus={() => query.length > 0 && setIsOpen(true)}
        className="w-full rounded-xl border border-gray-300 bg-white px-4 py-3 text-base text-gray-900 shadow-sm transition-all placeholder:text-gray-400 focus:border-primary-400 focus:outline-none focus:ring-2 focus:ring-primary-200"
        autoComplete="off"
      />
      {isOpen && results.length > 0 && (
        <ul
          className="absolute left-0 right-0 top-full z-50 mt-1 max-h-80 overflow-y-auto rounded-xl border border-gray-200 bg-white py-2 shadow-lg"
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
                <span className="text-xs font-medium uppercase text-gray-400">
                  {result.type}
                </span>
                <span className="font-medium text-gray-800">{result.name}</span>
              </Link>
            </li>
          ))}
        </ul>
      )}
      {isOpen && query.length > 0 && results.length === 0 && (
        <div className="absolute left-0 right-0 top-full z-50 mt-1 rounded-xl border border-gray-200 bg-white px-4 py-6 text-center text-sm text-gray-500 shadow-lg">
          No tools found for &quot;{query}&quot;
        </div>
      )}
    </div>
  );
}
