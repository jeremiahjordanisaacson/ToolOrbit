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

export default function JsonFormatter() {
  const ui = useToolUI();
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const [status, setStatus] = useState<{
    type: "idle" | "valid" | "invalid";
    message?: string;
  }>({ type: "idle" });

  const validate = useCallback(
    (json: string): { valid: boolean; parsed?: unknown; message?: string } => {
      if (!json.trim()) return { valid: false, message: ui.inputEmpty };
      try {
        const parsed = JSON.parse(json);
        return { valid: true, parsed };
      } catch (e) {
        const msg = e instanceof SyntaxError ? e.message : ui.invalidJson;
        return { valid: false, message: msg };
      }
    },
    [ui]
  );

  const handleFormat = useCallback(() => {
    const result = validate(input);
    if (result.valid) {
      setOutput(JSON.stringify(result.parsed, null, 2));
      setStatus({ type: "valid", message: ui.validJson });
    } else {
      setOutput("");
      setStatus({ type: "invalid", message: result.message });
    }
  }, [input, validate, ui]);

  const handleMinify = useCallback(() => {
    const result = validate(input);
    if (result.valid) {
      setOutput(JSON.stringify(result.parsed));
      setStatus({ type: "valid", message: ui.validJson });
    } else {
      setOutput("");
      setStatus({ type: "invalid", message: result.message });
    }
  }, [input, validate, ui]);

  return (
    <div className="mx-auto max-w-4xl space-y-6">
      <div>
        <label
          htmlFor="json-input"
          className="mb-2 block text-sm font-semibold text-gray-700"
        >
          Input JSON
        </label>
        <textarea
          id="json-input"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder='{"key": "value"}'
          rows={10}
          className="w-full rounded-xl border border-gray-300 bg-white px-4 py-3 font-mono text-sm shadow-sm focus:border-primary-400 focus:outline-none focus:ring-2 focus:ring-primary-200"
          spellCheck={false}
        />
      </div>

      <div className="flex flex-wrap items-center gap-3">
        <button
          type="button"
          onClick={handleFormat}
          className="rounded-xl bg-primary-700 px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-primary-600"
        >
          {ui.format}
        </button>
        <button
          type="button"
          onClick={handleMinify}
          className="rounded-xl border border-gray-300 bg-white px-5 py-2.5 text-sm font-semibold text-gray-700 shadow-sm transition-colors hover:border-primary-300 hover:text-primary-700"
        >
          {ui.minify}
        </button>

        {status.type !== "idle" && (
          <span
            role="status"
            className={`text-sm font-medium ${
              status.type === "valid" ? "text-green-600" : "text-red-600"
            }`}
          >
            {status.type === "valid" ? "✓" : "✗"} {status.message}
          </span>
        )}
      </div>

      {output && (
        <div>
          <div className="mb-2 flex items-center justify-between">
            <label
              htmlFor="json-output"
              className="text-sm font-semibold text-gray-700"
            >
              Output
            </label>
            <CopyButton text={output} />
          </div>
          <textarea
            id="json-output"
            value={output}
            readOnly
            rows={10}
            className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 font-mono text-sm shadow-sm focus:border-primary-400 focus:outline-none focus:ring-2 focus:ring-primary-200"
          />
        </div>
      )}
    </div>
  );
}
