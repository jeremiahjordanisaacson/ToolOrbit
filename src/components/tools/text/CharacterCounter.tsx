"use client";

import { useState } from "react";

export default function CharacterCounter() {
  const [text, setText] = useState("");
  const [copied, setCopied] = useState(false);
  const [limitEnabled, setLimitEnabled] = useState(false);
  const [charLimit, setCharLimit] = useState(280);

  const charsWithSpaces = text.length;
  const charsWithoutSpaces = text.replace(/\s/g, "").length;
  const wordCount = text.trim() ? text.trim().split(/\s+/).length : 0;
  const lineCount = text ? text.split("\n").length : 0;
  const remaining = charLimit - charsWithSpaces;
  const progress = charLimit > 0 ? (charsWithSpaces / charLimit) * 100 : 0;

  const copyToClipboard = (content: string) => {
    navigator.clipboard.writeText(content);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  return (
    <div className="mx-auto w-full max-w-3xl space-y-6">
      <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
        Character Counter
      </h2>

      <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
        {[
          { label: "Chars (with spaces)", value: charsWithSpaces },
          { label: "Chars (no spaces)", value: charsWithoutSpaces },
          { label: "Words", value: wordCount },
          { label: "Lines", value: lineCount },
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

      <div className="rounded-lg border border-gray-200 bg-white p-4 dark:border-gray-700 dark:bg-gray-800">
        <div className="flex items-center gap-4">
          <label className="flex items-center gap-2 text-sm font-medium text-gray-700 dark:text-gray-300">
            <input
              type="checkbox"
              checked={limitEnabled}
              onChange={(e) => setLimitEnabled(e.target.checked)}
              className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
            />
            Enable character limit
          </label>
          {limitEnabled && (
            <div className="flex items-center gap-2">
              <label
                htmlFor="char-limit"
                className="text-sm text-gray-600 dark:text-gray-400"
              >
                Max:
              </label>
              <input
                id="char-limit"
                type="number"
                min={1}
                value={charLimit}
                onChange={(e) =>
                  setCharLimit(Math.max(1, parseInt(e.target.value) || 1))
                }
                className="w-24 rounded border border-gray-300 px-2 py-1 text-sm dark:border-gray-600 dark:bg-gray-900 dark:text-white"
              />
            </div>
          )}
        </div>

        {limitEnabled && (
          <div className="mt-3 space-y-2">
            <div className="flex justify-between text-sm">
              <span className="text-gray-600 dark:text-gray-400">
                {charsWithSpaces} / {charLimit}
              </span>
              <span
                className={`font-medium ${remaining < 0 ? "text-red-600" : remaining < charLimit * 0.1 ? "text-yellow-600" : "text-green-600"}`}
              >
                {remaining >= 0
                  ? `${remaining} remaining`
                  : `${Math.abs(remaining)} over limit`}
              </span>
            </div>
            <div
              className="h-2.5 w-full overflow-hidden rounded-full bg-gray-200 dark:bg-gray-700"
              role="progressbar"
              aria-valuenow={Math.min(progress, 100)}
              aria-valuemin={0}
              aria-valuemax={100}
              aria-label="Character limit progress"
            >
              <div
                className={`h-full rounded-full transition-all ${progress > 100 ? "bg-red-500" : progress > 90 ? "bg-yellow-500" : "bg-blue-600"}`}
                style={{ width: `${Math.min(progress, 100)}%` }}
              />
            </div>
          </div>
        )}
      </div>

      <div className="space-y-2">
        <div className="flex items-center justify-between">
          <label
            htmlFor="char-counter-input"
            className="block text-sm font-medium text-gray-700 dark:text-gray-300"
          >
            Enter your text
          </label>
          <button
            onClick={() => copyToClipboard(text)}
            disabled={!text}
            className="rounded-md bg-blue-600 px-3 py-1 text-sm text-white transition hover:bg-blue-700 disabled:opacity-40"
            aria-label="Copy text to clipboard"
          >
            {copied ? "Copied!" : "Copy to clipboard"}
          </button>
        </div>
        <textarea
          id="char-counter-input"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Start typing or paste your text here..."
          rows={10}
          className="w-full resize-y rounded-lg border border-gray-300 bg-white p-4 text-gray-900 placeholder-gray-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-900 dark:text-white dark:placeholder-gray-500"
          aria-label="Text input for character counting"
        />
      </div>
    </div>
  );
}
