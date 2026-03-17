"use client";

import { useState } from "react";
import { useToolUI } from "@/lib/i18n/ToolUIContext";

type SortMode = "az" | "za" | "num-asc" | "num-desc" | "random";

export default function TextSorter() {
  const ui = useToolUI();
  const [input, setInput] = useState("");
  const [sortMode, setSortMode] = useState<SortMode>("az");
  const [caseSensitive, setCaseSensitive] = useState(false);
  const [copied, setCopied] = useState(false);

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  const sortLines = (): string => {
    if (!input.trim()) return "";
    const lines = input.split("\n").filter((l) => l.trim().length > 0);

    switch (sortMode) {
      case "az":
        lines.sort((a, b) => {
          const va = caseSensitive ? a : a.toLowerCase();
          const vb = caseSensitive ? b : b.toLowerCase();
          return va.localeCompare(vb);
        });
        break;
      case "za":
        lines.sort((a, b) => {
          const va = caseSensitive ? a : a.toLowerCase();
          const vb = caseSensitive ? b : b.toLowerCase();
          return vb.localeCompare(va);
        });
        break;
      case "num-asc":
        lines.sort((a, b) => {
          const na = parseFloat(a) || 0;
          const nb = parseFloat(b) || 0;
          return na - nb;
        });
        break;
      case "num-desc":
        lines.sort((a, b) => {
          const na = parseFloat(a) || 0;
          const nb = parseFloat(b) || 0;
          return nb - na;
        });
        break;
      case "random":
        for (let i = lines.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [lines[i], lines[j]] = [lines[j], lines[i]];
        }
        break;
    }

    return lines.join("\n");
  };

  const output = sortLines();

  const sortOptions: { mode: SortMode; label: string }[] = [
    { mode: "az", label: "A → Z" },
    { mode: "za", label: "Z → A" },
    { mode: "num-asc", label: "0 → 9" },
    { mode: "num-desc", label: "9 → 0" },
    { mode: "random", label: ui.shuffleMode },
  ];

  return (
    <div className="mx-auto w-full max-w-3xl space-y-6">
      <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
        Text Sorter
      </h2>

      <div className="space-y-2">
        <label
          htmlFor="sorter-input"
          className="block text-sm font-medium text-gray-700 dark:text-gray-300"
        >
          Input text (one item per line)
        </label>
        <textarea
          id="sorter-input"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder={ui.pasteTextHere}
          rows={8}
          className="w-full resize-y rounded-lg border border-gray-300 bg-white p-4 font-mono text-sm text-gray-900 placeholder-gray-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-900 dark:text-white dark:placeholder-gray-500"
          aria-label="Input text for sorting"
        />
      </div>

      <div className="flex flex-wrap items-center gap-3 rounded-lg border border-gray-200 bg-white p-4 dark:border-gray-700 dark:bg-gray-800">
        {sortOptions.map((opt) => (
          <button
            key={opt.mode}
            onClick={() => setSortMode(opt.mode)}
            className={`rounded-md border px-3 py-1.5 text-sm font-medium transition ${
              sortMode === opt.mode
                ? "border-blue-600 bg-blue-600 text-white"
                : "border-gray-300 bg-white text-gray-700 hover:bg-gray-50 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-600"
            }`}
            aria-label={`Sort ${opt.label}`}
          >
            {opt.label}
          </button>
        ))}
        <div className="mx-2 hidden h-6 border-l border-gray-300 dark:border-gray-600 sm:block" />
        <label className="flex items-center gap-2 text-sm text-gray-700 dark:text-gray-300">
          <input
            type="checkbox"
            checked={caseSensitive}
            onChange={(e) => setCaseSensitive(e.target.checked)}
            className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
          />
          Case-sensitive
        </label>
      </div>

      <div className="space-y-2">
        <div className="flex items-center justify-between">
          <label
            htmlFor="sorter-output"
            className="block text-sm font-medium text-gray-700 dark:text-gray-300"
          >
            Output
          </label>
          <button
            onClick={() => copyToClipboard(output)}
            disabled={!output}
            className="rounded-md bg-blue-600 px-3 py-1 text-sm text-white transition hover:bg-blue-700 disabled:opacity-40"
            aria-label={ui.copy}
          >
            {copied ? ui.copied : ui.copy}
          </button>
        </div>
        <textarea
          id="sorter-output"
          value={output}
          readOnly
          rows={8}
          className="w-full resize-y rounded-lg border border-gray-200 bg-gray-50 p-4 font-mono text-sm text-gray-900 dark:border-gray-700 dark:bg-gray-800 dark:text-white"
          aria-label="Sorted text output"
        />
      </div>
    </div>
  );
}
