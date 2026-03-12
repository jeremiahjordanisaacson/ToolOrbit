"use client";

import { useState } from "react";

interface CleanOptions {
  trimLines: boolean;
  collapseSpaces: boolean;
  removeTabs: boolean;
  removeBlankLines: boolean;
}

export default function WhitespaceCleaner() {
  const [input, setInput] = useState("");
  const [options, setOptions] = useState<CleanOptions>({
    trimLines: true,
    collapseSpaces: true,
    removeTabs: false,
    removeBlankLines: false,
  });
  const [copied, setCopied] = useState(false);

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  const toggleOption = (key: keyof CleanOptions) => {
    setOptions((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const cleanText = (): string => {
    if (!input) return "";
    let lines = input.split("\n");

    if (options.removeTabs) {
      lines = lines.map((l) => l.replace(/\t/g, " "));
    }

    if (options.trimLines) {
      lines = lines.map((l) => l.trim());
    }

    if (options.collapseSpaces) {
      lines = lines.map((l) => l.replace(/ {2,}/g, " "));
    }

    if (options.removeBlankLines) {
      lines = lines.filter((l) => l.trim().length > 0);
    }

    return lines.join("\n");
  };

  const output = cleanText();

  const checkboxOptions: { key: keyof CleanOptions; label: string }[] = [
    { key: "trimLines", label: "Trim leading/trailing spaces per line" },
    { key: "collapseSpaces", label: "Collapse multiple spaces to single" },
    { key: "removeTabs", label: "Remove tabs" },
    { key: "removeBlankLines", label: "Remove blank lines" },
  ];

  return (
    <div className="mx-auto w-full max-w-3xl space-y-6">
      <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
        Whitespace Cleaner
      </h2>

      <div className="space-y-2">
        <label
          htmlFor="whitespace-input"
          className="block text-sm font-medium text-gray-700 dark:text-gray-300"
        >
          Input text
        </label>
        <textarea
          id="whitespace-input"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Paste messy text here..."
          rows={8}
          className="w-full resize-y rounded-lg border border-gray-300 bg-white p-4 font-mono text-sm text-gray-900 placeholder-gray-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-900 dark:text-white dark:placeholder-gray-500"
          aria-label="Input text for whitespace cleaning"
        />
      </div>

      <fieldset className="rounded-lg border border-gray-200 bg-white p-4 dark:border-gray-700 dark:bg-gray-800">
        <legend className="px-2 text-sm font-medium text-gray-700 dark:text-gray-300">
          Cleaning options
        </legend>
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
          {checkboxOptions.map((opt) => (
            <label
              key={opt.key}
              className="flex items-center gap-2 text-sm text-gray-700 dark:text-gray-300"
            >
              <input
                type="checkbox"
                checked={options[opt.key]}
                onChange={() => toggleOption(opt.key)}
                className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
              />
              {opt.label}
            </label>
          ))}
        </div>
      </fieldset>

      <div className="space-y-2">
        <div className="flex items-center justify-between">
          <label
            htmlFor="whitespace-output"
            className="block text-sm font-medium text-gray-700 dark:text-gray-300"
          >
            Output
          </label>
          <button
            onClick={() => copyToClipboard(output)}
            disabled={!output}
            className="rounded-md bg-blue-600 px-3 py-1 text-sm text-white transition hover:bg-blue-700 disabled:opacity-40"
            aria-label="Copy cleaned text to clipboard"
          >
            {copied ? "Copied!" : "Copy to clipboard"}
          </button>
        </div>
        <textarea
          id="whitespace-output"
          value={output}
          readOnly
          rows={8}
          className="w-full resize-y rounded-lg border border-gray-200 bg-gray-50 p-4 font-mono text-sm text-gray-900 dark:border-gray-700 dark:bg-gray-800 dark:text-white"
          aria-label="Cleaned text output"
        />
      </div>
    </div>
  );
}
