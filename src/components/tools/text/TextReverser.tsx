"use client";

import { useState } from "react";
import { useToolUI } from "@/lib/i18n/ToolUIContext";

type ReverseMode = "characters" | "words" | "lines";

export default function TextReverser() {
  const ui = useToolUI();
  const [input, setInput] = useState("");
  const [mode, setMode] = useState<ReverseMode>("characters");
  const [copied, setCopied] = useState(false);

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  const reverseText = (): string => {
    if (!input) return "";
    switch (mode) {
      case "characters":
        return input.split("").reverse().join("");
      case "words":
        return input
          .split("\n")
          .map((line) => line.split(/\s+/).reverse().join(" "))
          .join("\n");
      case "lines":
        return input.split("\n").reverse().join("\n");
    }
  };

  const output = reverseText();

  const modeOptions: { value: ReverseMode; label: string }[] = [
    { value: "characters", label: "Reverse characters" },
    { value: "words", label: "Reverse words" },
    { value: "lines", label: "Reverse lines" },
  ];

  return (
    <div className="mx-auto w-full max-w-3xl space-y-6">
      <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
        Text Reverser
      </h2>

      <div className="space-y-2">
        <label
          htmlFor="reverser-input"
          className="block text-sm font-medium text-gray-700 dark:text-gray-300"
        >
          Input text
        </label>
        <textarea
          id="reverser-input"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Enter text to reverse..."
          rows={6}
          className="w-full resize-y rounded-lg border border-gray-300 bg-white p-4 text-gray-900 placeholder-gray-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-900 dark:text-white dark:placeholder-gray-500"
          aria-label="Input text for reversing"
        />
      </div>

      <div className="flex flex-wrap gap-2">
        {modeOptions.map((opt) => (
          <button
            key={opt.value}
            onClick={() => setMode(opt.value)}
            className={`rounded-md border px-4 py-2 text-sm font-medium transition ${
              mode === opt.value
                ? "border-blue-600 bg-blue-600 text-white"
                : "border-gray-300 bg-white text-gray-700 hover:bg-gray-50 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700"
            }`}
            aria-label={opt.label}
          >
            {opt.label}
          </button>
        ))}
      </div>

      <div className="space-y-2">
        <div className="flex items-center justify-between">
          <label
            htmlFor="reverser-output"
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
          id="reverser-output"
          value={output}
          readOnly
          rows={6}
          className="w-full resize-y rounded-lg border border-gray-200 bg-gray-50 p-4 text-gray-900 dark:border-gray-700 dark:bg-gray-800 dark:text-white"
          aria-label="Reversed text output"
        />
      </div>
    </div>
  );
}
