"use client";

import { useState } from "react";
import Link from "next/link";
import { searchTools, SearchResult } from "@/lib/search";

export default function SearchPageClient() {
  const [query, setQuery] = useState("");
  const results = query.length > 0 ? searchTools(query) : [];

  return (
    <>
      <label htmlFor="search-page-input" className="sr-only">
        Search tools
      </label>
      <input
        id="search-page-input"
        type="search"
        placeholder="Type to search tools..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="mb-8 w-full rounded-xl border border-gray-300 bg-white px-4 py-3 text-base text-gray-900 shadow-sm transition-all placeholder:text-gray-400 focus:border-primary-400 focus:outline-none focus:ring-2 focus:ring-primary-200"
        autoComplete="off"
        autoFocus
      />

      {query.length > 0 && (
        <p className="mb-4 text-sm text-gray-500">
          {results.length} result{results.length !== 1 ? "s" : ""} for &quot;
          {query}&quot;
        </p>
      )}

      <div className="space-y-3">
        {results.map((result) => (
          <Link
            key={result.slug}
            href={result.url}
            className="block rounded-lg border border-gray-200 bg-white p-4 transition-all hover:border-primary-300 hover:shadow-sm"
          >
            <div className="flex items-center gap-3">
              <span className="rounded-full bg-primary-50 px-2 py-0.5 text-xs font-medium text-primary-700">
                {result.type}
              </span>
              <h2 className="font-semibold text-gray-900">{result.name}</h2>
            </div>
            <p className="mt-1 line-clamp-2 text-sm text-gray-500">
              {result.description}
            </p>
          </Link>
        ))}
      </div>

      {query.length > 0 && results.length === 0 && (
        <div className="py-12 text-center">
          <p className="text-lg text-gray-500">
            No tools found for &quot;{query}&quot;
          </p>
          <p className="mt-2 text-sm text-gray-400">
            Try different keywords or{" "}
            <Link
              href="/tools/"
              className="text-primary-600 hover:underline"
            >
              browse all tools
            </Link>
          </p>
        </div>
      )}
    </>
  );
}
