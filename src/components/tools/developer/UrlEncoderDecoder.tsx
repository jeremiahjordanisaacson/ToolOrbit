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

export default function UrlEncoderDecoder() {
  const ui = useToolUI();
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const [error, setError] = useState("");

  const handleEncode = useCallback(() => {
    setError("");
    try {
      setOutput(encodeURIComponent(input));
    } catch {
      setError(ui.encodingError);
      setOutput("");
    }
  }, [input]);

  const handleEncodeFullUrl = useCallback(() => {
    setError("");
    try {
      setOutput(encodeURI(input));
    } catch {
      setError(ui.encodingError);
      setOutput("");
    }
  }, [input]);

  const handleDecode = useCallback(() => {
    setError("");
    try {
      setOutput(decodeURIComponent(input));
    } catch {
      setError(ui.invalidInput);
      setOutput("");
    }
  }, [input]);

  return (
    <div className="mx-auto max-w-4xl space-y-6">
      <div>
        <label
          htmlFor="url-input"
          className="mb-2 block text-sm font-semibold text-gray-700"
        >
          Input
        </label>
        <textarea
          id="url-input"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder={ui.enterTextHere}
          rows={5}
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
          Encode Component
        </button>
        <button
          type="button"
          onClick={handleEncodeFullUrl}
          className="rounded-xl border border-primary-700 bg-white px-5 py-2.5 text-sm font-semibold text-primary-700 shadow-sm transition-colors hover:bg-primary-50"
        >
          Encode Full URL
        </button>
        <button
          type="button"
          onClick={handleDecode}
          className="rounded-xl border border-gray-300 bg-white px-5 py-2.5 text-sm font-semibold text-gray-700 shadow-sm transition-colors hover:border-primary-300 hover:text-primary-700"
        >
          {ui.decode}
        </button>
      </div>

      <p className="text-xs text-gray-500">
        <strong>Encode Component</strong> uses <code>encodeURIComponent</code>{" "}
        (encodes everything).{" "}
        <strong>Encode Full URL</strong> uses <code>encodeURI</code> (preserves
        URL structure characters like <code>:/?#[]@!$&apos;()*+,;=</code>).
      </p>

      {error && (
        <p role="alert" className="text-sm font-medium text-red-600">
          ✗ {error}
        </p>
      )}

      {output && (
        <div>
          <div className="mb-2 flex items-center justify-between">
            <label
              htmlFor="url-output"
              className="text-sm font-semibold text-gray-700"
            >
              Output
            </label>
            <CopyButton text={output} />
          </div>
          <textarea
            id="url-output"
            value={output}
            readOnly
            rows={5}
            className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 font-mono text-sm shadow-sm focus:border-primary-400 focus:outline-none focus:ring-2 focus:ring-primary-200"
          />
        </div>
      )}
    </div>
  );
}
