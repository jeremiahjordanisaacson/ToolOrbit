"use client";

import { useState, useCallback } from "react";
import { useToolUI } from "@/lib/i18n/ToolUIContext";

function CopyButton({ text }: { text: string }) {
  const ui = useToolUI();
  const [copied, setCopied] = useState(false);

  const handleCopy = useCallback(async () => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch {
      /* clipboard not available */
    }
  }, [text]);

  return (
    <button
      type="button"
      onClick={handleCopy}
      aria-label={ui.copy}
      className="rounded-lg border border-gray-300 bg-white px-3 py-1.5 text-sm font-medium text-gray-600 transition-colors hover:border-primary-300 hover:text-primary-700"
    >
      {copied ? `✓ ${ui.copied}` : ui.copy}
    </button>
  );
}

const ENTITY_MAP: Record<string, string> = {
  "&": "&amp;",
  "<": "&lt;",
  ">": "&gt;",
  '"': "&quot;",
  "'": "&#39;",
  "/": "&#x2F;",
  "`": "&#x60;",
  "=": "&#x3D;",
};

function encodeHtmlEntities(str: string): string {
  return str.replace(/[&<>"'`=/]/g, (char) => ENTITY_MAP[char] ?? char);
}

function decodeHtmlEntities(str: string): string {
  if (typeof document !== "undefined") {
    const el = document.createElement("textarea");
    el.innerHTML = str;
    return el.value;
  }
  // Fallback for SSR — should not run since this is "use client"
  return str
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&#x2F;/g, "/")
    .replace(/&#x60;/g, "`")
    .replace(/&#x3D;/g, "=");
}

export default function HtmlEntityEncodeDecode() {
  const ui = useToolUI();
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");

  const handleEncode = useCallback(() => {
    setOutput(encodeHtmlEntities(input));
  }, [input]);

  const handleDecode = useCallback(() => {
    setOutput(decodeHtmlEntities(input));
  }, [input]);

  return (
    <div className="mx-auto max-w-4xl space-y-6">
      <div>
        <label
          htmlFor="html-entity-input"
          className="mb-2 block text-sm font-semibold text-gray-700"
        >
          Input
        </label>
        <textarea
          id="html-entity-input"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder='<div class="example">Hello & World</div>'
          rows={6}
          className="w-full rounded-xl border border-gray-300 bg-white px-4 py-3 font-mono text-sm shadow-sm focus:border-primary-400 focus:outline-none focus:ring-2 focus:ring-primary-200"
          spellCheck={false}
        />
      </div>

      <div className="flex flex-wrap items-center gap-3">
        <button
          type="button"
          onClick={handleEncode}
          className="rounded-xl bg-primary-700 px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-primary-600"
        >
          {ui.encode}
        </button>
        <button
          type="button"
          onClick={handleDecode}
          className="rounded-xl border border-gray-300 bg-white px-5 py-2.5 text-sm font-semibold text-gray-700 shadow-sm transition-colors hover:border-primary-300 hover:text-primary-700"
        >
          {ui.decode}
        </button>
      </div>

      {output && (
        <div>
          <div className="mb-2 flex items-center justify-between">
            <label
              htmlFor="html-entity-output"
              className="text-sm font-semibold text-gray-700"
            >
              Output
            </label>
            <CopyButton text={output} />
          </div>
          <textarea
            id="html-entity-output"
            value={output}
            readOnly
            rows={6}
            className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 font-mono text-sm shadow-sm focus:border-primary-400 focus:outline-none focus:ring-2 focus:ring-primary-200"
          />
        </div>
      )}
    </div>
  );
}
