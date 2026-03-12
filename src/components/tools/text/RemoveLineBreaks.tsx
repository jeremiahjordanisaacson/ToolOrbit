"use client";

import { useState } from "react";

type Mode = "all" | "single";

export default function RemoveLineBreaks() {
  const [input, setInput] = useState("");
  const [mode, setMode] = useState<Mode>("all");
  const [copied, setCopied] = useState(false);

  const processText = (text: string, m: Mode): string => {
    if (!text) return "";
    if (m === "all") {
      return text.replace(/\n+/g, " ").replace(/ {2,}/g, " ");
    }
    // Remove single line breaks but preserve paragraph breaks (double newlines)
    return text
      .replace(/\n{2,}/g, "%%PARAGRAPH%%")
      .replace(/\n/g, " ")
      .replace(/%%PARAGRAPH%%/g, "\n\n")
      .replace(/ {2,}/g, " ");
  };

  const output = processText(input, mode);

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  return (
    <div className="mx-auto w-full max-w-3xl space-y-6">
      <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
        Remove Line Breaks
      </h2>

      <div className="space-y-2">
        <label
          htmlFor="linebreak-input"
          className="block text-sm font-medium text-gray-700 dark:text-gray-300"
        >
          Input text
        </label>
        <textarea
          id="linebreak-input"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Paste text with line breaks..."
          rows={8}
          className="w-full resize-y rounded-lg border border-gray-300 bg-white p-4 text-gray-900 placeholder-gray-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-900 dark:text-white dark:placeholder-gray-500"
          aria-label="Input text with line breaks"
        />
      </div>

      <fieldset className="rounded-lg border border-gray-200 bg-white p-4 dark:border-gray-700 dark:bg-gray-800">
        <legend className="px-2 text-sm font-medium text-gray-700 dark:text-gray-300">
          Mode
        </legend>
        <div className="flex flex-col gap-3 sm:flex-row sm:gap-6">
          <label className="flex items-center gap-2 text-sm text-gray-700 dark:text-gray-300">
            <input
              type="radio"
              name="linebreak-mode"
              value="all"
              checked={mode === "all"}
              onChange={() => setMode("all")}
              className="h-4 w-4 text-blue-600 focus:ring-blue-500"
            />
            Remove all line breaks
          </label>
          <label className="flex items-center gap-2 text-sm text-gray-700 dark:text-gray-300">
            <input
              type="radio"
              name="linebreak-mode"
              value="single"
              checked={mode === "single"}
              onChange={() => setMode("single")}
              className="h-4 w-4 text-blue-600 focus:ring-blue-500"
            />
            Remove single line breaks (preserve paragraphs)
          </label>
        </div>
      </fieldset>

      <div className="space-y-2">
        <div className="flex items-center justify-between">
          <label
            htmlFor="linebreak-output"
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
          id="linebreak-output"
          value={output}
          readOnly
          rows={8}
          className="w-full resize-y rounded-lg border border-gray-200 bg-gray-50 p-4 text-gray-900 dark:border-gray-700 dark:bg-gray-800 dark:text-white"
          aria-label="Text output with line breaks removed"
        />
      </div>
    </div>
  );
}
