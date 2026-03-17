"use client";

import { useState } from "react";
import { useToolUI } from "@/lib/i18n/ToolUIContext";

export default function WordCounter() {
  const ui = useToolUI();
  const [text, setText] = useState("");
  const [copied, setCopied] = useState(false);

  const words = text.trim() ? text.trim().split(/\s+/).length : 0;
  const charsWithSpaces = text.length;
  const charsWithoutSpaces = text.replace(/\s/g, "").length;
  const sentences = text.trim()
    ? text.split(/[.!?]+/).filter((s) => s.trim().length > 0).length
    : 0;
  const paragraphs = text.trim()
    ? text.split(/\n\s*\n/).filter((p) => p.trim().length > 0).length
    : 0;
  const readingTimeMinutes = Math.max(1, Math.ceil(words / 200));

  const copyToClipboard = (content: string) => {
    navigator.clipboard.writeText(content);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  const stats = [
    { label: "Words", value: words },
    { label: "Characters (with spaces)", value: charsWithSpaces },
    { label: "Characters (no spaces)", value: charsWithoutSpaces },
    { label: "Sentences", value: sentences },
    { label: "Paragraphs", value: paragraphs },
    { label: "Reading time", value: `${readingTimeMinutes} min` },
  ];

  return (
    <div className="mx-auto w-full max-w-3xl space-y-6">
      <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
        Word Counter
      </h2>

      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
        {stats.map((stat) => (
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
        <div className="flex items-center justify-between">
          <label
            htmlFor="word-counter-input"
            className="block text-sm font-medium text-gray-700 dark:text-gray-300"
          >
            Enter your text
          </label>
          <button
            onClick={() => copyToClipboard(text)}
            disabled={!text}
            className="rounded-md bg-blue-600 px-3 py-1 text-sm text-white transition hover:bg-blue-700 disabled:opacity-40"
            aria-label={ui.copy}
          >
            {copied ? ui.copied : ui.copy}
          </button>
        </div>
        <textarea
          id="word-counter-input"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Start typing or paste your text here..."
          rows={12}
          className="w-full resize-y rounded-lg border border-gray-300 bg-white p-4 text-gray-900 placeholder-gray-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-900 dark:text-white dark:placeholder-gray-500"
          aria-label="Text input for word counting"
        />
      </div>
    </div>
  );
}
