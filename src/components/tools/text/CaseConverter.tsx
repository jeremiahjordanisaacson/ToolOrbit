"use client";

import { useState } from "react";
import { useToolUI } from "@/lib/i18n/ToolUIContext";

type CaseType =
  | "upper"
  | "lower"
  | "title"
  | "sentence"
  | "toggle"
  | "camel"
  | "pascal"
  | "snake"
  | "kebab";

function toTitleCase(str: string): string {
  return str.replace(
    /\b\w+/g,
    (word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
  );
}

function toSentenceCase(str: string): string {
  return str
    .split(/([.!?]\s*)/)
    .map((segment, i) => {
      if (i % 2 === 0 && segment.length > 0) {
        return segment.charAt(0).toUpperCase() + segment.slice(1).toLowerCase();
      }
      return segment;
    })
    .join("");
}

function toToggleCase(str: string): string {
  return str
    .split("")
    .map((ch) =>
      ch === ch.toUpperCase() ? ch.toLowerCase() : ch.toUpperCase()
    )
    .join("");
}

function splitWords(str: string): string[] {
  return str
    .replace(/([a-z])([A-Z])/g, "$1 $2")
    .replace(/[_\-]+/g, " ")
    .trim()
    .split(/\s+/)
    .filter(Boolean);
}

function toCamelCase(str: string): string {
  const words = splitWords(str);
  return words
    .map((w, i) =>
      i === 0
        ? w.toLowerCase()
        : w.charAt(0).toUpperCase() + w.slice(1).toLowerCase()
    )
    .join("");
}

function toPascalCase(str: string): string {
  const words = splitWords(str);
  return words
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1).toLowerCase())
    .join("");
}

function toSnakeCase(str: string): string {
  return splitWords(str)
    .map((w) => w.toLowerCase())
    .join("_");
}

function toKebabCase(str: string): string {
  return splitWords(str)
    .map((w) => w.toLowerCase())
    .join("-");
}

function convertCase(text: string, caseType: CaseType): string {
  switch (caseType) {
    case "upper":
      return text.toUpperCase();
    case "lower":
      return text.toLowerCase();
    case "title":
      return toTitleCase(text);
    case "sentence":
      return toSentenceCase(text);
    case "toggle":
      return toToggleCase(text);
    case "camel":
      return toCamelCase(text);
    case "pascal":
      return toPascalCase(text);
    case "snake":
      return toSnakeCase(text);
    case "kebab":
      return toKebabCase(text);
  }
}

export default function CaseConverter() {
  const ui = useToolUI();

  const caseOptions: { type: CaseType; label: string }[] = [
    { type: "upper", label: "UPPERCASE" },
    { type: "lower", label: "lowercase" },
    { type: "title", label: ui.titleCase },
    { type: "sentence", label: ui.sentenceCase },
    { type: "toggle", label: "tOGGLE cASE" },
    { type: "camel", label: "camelCase" },
    { type: "pascal", label: "PascalCase" },
    { type: "snake", label: "snake_case" },
    { type: "kebab", label: "kebab-case" },
  ];
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const [activeCase, setActiveCase] = useState<CaseType | null>(null);
  const [copied, setCopied] = useState(false);

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  const handleConvert = (caseType: CaseType) => {
    setActiveCase(caseType);
    setOutput(convertCase(input, caseType));
  };

  return (
    <div className="mx-auto w-full max-w-3xl space-y-6">
      <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
        Case Converter
      </h2>

      <div className="space-y-2">
        <label
          htmlFor="case-input"
          className="block text-sm font-medium text-gray-700 dark:text-gray-300"
        >
          {ui.input}
        </label>
        <textarea
          id="case-input"
          value={input}
          onChange={(e) => {
            setInput(e.target.value);
            if (activeCase) {
              setOutput(convertCase(e.target.value, activeCase));
            }
          }}
          placeholder={ui.enterTextToConvert}
          rows={6}
          className="w-full resize-y rounded-lg border border-gray-300 bg-white p-4 text-gray-900 placeholder-gray-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-900 dark:text-white dark:placeholder-gray-500"
          aria-label="Input text for case conversion"
        />
      </div>

      <div className="flex flex-wrap gap-2">
        {caseOptions.map((opt) => (
          <button
            key={opt.type}
            onClick={() => handleConvert(opt.type)}
            className={`rounded-md border px-3 py-1.5 text-sm font-medium transition ${
              activeCase === opt.type
                ? "border-blue-600 bg-blue-600 text-white"
                : "border-gray-300 bg-white text-gray-700 hover:bg-gray-50 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700"
            }`}
            aria-label={`Convert to ${opt.label}`}
          >
            {opt.label}
          </button>
        ))}
      </div>

      <div className="space-y-2">
        <div className="flex items-center justify-between">
          <label
            htmlFor="case-output"
            className="block text-sm font-medium text-gray-700 dark:text-gray-300"
          >
            {ui.output}
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
          id="case-output"
          value={output}
          readOnly
          rows={6}
          className="w-full resize-y rounded-lg border border-gray-200 bg-gray-50 p-4 text-gray-900 dark:border-gray-700 dark:bg-gray-800 dark:text-white"
          aria-label="Converted text output"
        />
      </div>
    </div>
  );
}
