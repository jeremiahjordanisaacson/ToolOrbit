"use client";

import { useState } from "react";
import { useToolUI } from "@/lib/i18n/ToolUIContext";

export default function SlugGenerator() {
  const ui = useToolUI();
  const [input, setInput] = useState("");
  const [separator, setSeparator] = useState<"-" | "_">("-");
  const [lowercase, setLowercase] = useState(true);
  const [copied, setCopied] = useState(false);

  const generateSlug = (text: string): string => {
    let slug = text
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .replace(/[^\w\s-]/g, "")
      .trim()
      .replace(/[\s_-]+/g, separator);

    if (lowercase) slug = slug.toLowerCase();
    return slug;
  };

  const slug = generateSlug(input);

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  return (
    <div className="mx-auto w-full max-w-3xl space-y-6">
      <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
        Slug Generator
      </h2>

      <div className="space-y-2">
        <label
          htmlFor="slug-input"
          className="block text-sm font-medium text-gray-700 dark:text-gray-300"
        >
          Enter text
        </label>
        <input
          id="slug-input"
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder={ui.enterTextHere}
          className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-gray-900 placeholder-gray-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-900 dark:text-white dark:placeholder-gray-500"
          aria-label="Text input for slug generation"
        />
      </div>

      <div className="flex flex-wrap gap-4 rounded-lg border border-gray-200 bg-white p-4 dark:border-gray-700 dark:bg-gray-800">
        <fieldset className="flex items-center gap-3">
          <legend className="text-sm font-medium text-gray-700 dark:text-gray-300">
            Separator
          </legend>
          <label className="flex items-center gap-1.5 text-sm text-gray-700 dark:text-gray-300">
            <input
              type="radio"
              name="separator"
              value="-"
              checked={separator === "-"}
              onChange={() => setSeparator("-")}
              className="h-4 w-4 text-blue-600 focus:ring-blue-500"
            />
            Hyphen (-)
          </label>
          <label className="flex items-center gap-1.5 text-sm text-gray-700 dark:text-gray-300">
            <input
              type="radio"
              name="separator"
              value="_"
              checked={separator === "_"}
              onChange={() => setSeparator("_")}
              className="h-4 w-4 text-blue-600 focus:ring-blue-500"
            />
            Underscore (_)
          </label>
        </fieldset>
        <label className="flex items-center gap-2 text-sm text-gray-700 dark:text-gray-300">
          <input
            type="checkbox"
            checked={lowercase}
            onChange={(e) => setLowercase(e.target.checked)}
            className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
          />
          Lowercase
        </label>
      </div>

      <div className="space-y-2">
        <div className="flex items-center justify-between">
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
            Generated slug
          </label>
          <button
            onClick={() => copyToClipboard(slug)}
            disabled={!slug}
            className="rounded-md bg-blue-600 px-3 py-1 text-sm text-white transition hover:bg-blue-700 disabled:opacity-40"
            aria-label={ui.copy}
          >
            {copied ? ui.copied : ui.copy}
          </button>
        </div>
        <div className="rounded-lg border border-gray-200 bg-gray-50 p-4 dark:border-gray-700 dark:bg-gray-800">
          <code className="block break-all text-lg text-gray-900 dark:text-white">
            {slug || (
              <span className="text-gray-400 dark:text-gray-500">
                your-slug-will-appear-here
              </span>
            )}
          </code>
        </div>
      </div>
    </div>
  );
}
