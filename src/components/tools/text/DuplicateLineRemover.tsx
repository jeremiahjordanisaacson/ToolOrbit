"use client";

import { useState } from "react";

export default function DuplicateLineRemover() {
  const [input, setInput] = useState("");
  const [caseSensitive, setCaseSensitive] = useState(true);
  const [trimWhitespace, setTrimWhitespace] = useState(true);
  const [copied, setCopied] = useState(false);

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  const lines = input ? input.split("\n") : [];
  const totalLines = lines.length;

  const seen = new Set<string>();
  const uniqueLines: string[] = [];

  for (const line of lines) {
    let key = trimWhitespace ? line.trim() : line;
    if (!caseSensitive) key = key.toLowerCase();
    if (!seen.has(key)) {
      seen.add(key);
      uniqueLines.push(trimWhitespace ? line.trim() : line);
    }
  }

  const output = uniqueLines.join("\n");
  const uniqueCount = uniqueLines.length;
  const duplicatesRemoved = totalLines - uniqueCount;

  return (
    <div className="mx-auto w-full max-w-3xl space-y-6">
      <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
        Duplicate Line Remover
      </h2>

      <div className="grid grid-cols-3 gap-3">
        {[
          { label: "Total lines", value: totalLines },
          { label: "Unique lines", value: uniqueCount },
          { label: "Duplicates removed", value: duplicatesRemoved },
        ].map((stat) => (
          <div
            key={stat.label}
            className="rounded-lg border border-gray-200 bg-white p-4 text-center dark:border-gray-700 dark:bg-gray-800"
          >
            <p className="text-2xl font-semibold text-blue-600 dark:text-blue-400">
              {stat.value}
            </p>
            <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">
              {stat.label}
            </p>
          </div>
        ))}
      </div>

      <div className="space-y-2">
        <label
          htmlFor="dedup-input"
          className="block text-sm font-medium text-gray-700 dark:text-gray-300"
        >
          Input text
        </label>
        <textarea
          id="dedup-input"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Paste lines of text (one per line)..."
          rows={8}
          className="w-full resize-y rounded-lg border border-gray-300 bg-white p-4 font-mono text-sm text-gray-900 placeholder-gray-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-900 dark:text-white dark:placeholder-gray-500"
          aria-label="Input text with potential duplicate lines"
        />
      </div>

      <div className="flex flex-wrap gap-4 rounded-lg border border-gray-200 bg-white p-4 dark:border-gray-700 dark:bg-gray-800">
        <label className="flex items-center gap-2 text-sm text-gray-700 dark:text-gray-300">
          <input
            type="checkbox"
            checked={caseSensitive}
            onChange={(e) => setCaseSensitive(e.target.checked)}
            className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
          />
          Case-sensitive
        </label>
        <label className="flex items-center gap-2 text-sm text-gray-700 dark:text-gray-300">
          <input
            type="checkbox"
            checked={trimWhitespace}
            onChange={(e) => setTrimWhitespace(e.target.checked)}
            className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
          />
          Trim whitespace
        </label>
      </div>

      <div className="space-y-2">
        <div className="flex items-center justify-between">
          <label
            htmlFor="dedup-output"
            className="block text-sm font-medium text-gray-700 dark:text-gray-300"
          >
            Output
          </label>
          <button
            onClick={() => copyToClipboard(output)}
            disabled={!output}
            className="rounded-md bg-blue-600 px-3 py-1 text-sm text-white transition hover:bg-blue-700 disabled:opacity-40"
            aria-label="Copy output to clipboard"
          >
            {copied ? "Copied!" : "Copy to clipboard"}
          </button>
        </div>
        <textarea
          id="dedup-output"
          value={output}
          readOnly
          rows={8}
          className="w-full resize-y rounded-lg border border-gray-200 bg-gray-50 p-4 font-mono text-sm text-gray-900 dark:border-gray-700 dark:bg-gray-800 dark:text-white"
          aria-label="Deduplicated text output"
        />
      </div>
    </div>
  );
}
