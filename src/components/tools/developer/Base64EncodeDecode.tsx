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

function utf8ToBase64(str: string): string {
  const bytes = new TextEncoder().encode(str);
  let binary = "";
  for (const b of bytes) binary += String.fromCharCode(b);
  return btoa(binary);
}

function base64ToUtf8(b64: string): string {
  const binary = atob(b64);
  const bytes = new Uint8Array(binary.length);
  for (let i = 0; i < binary.length; i++) bytes[i] = binary.charCodeAt(i);
  return new TextDecoder().decode(bytes);
}

export default function Base64EncodeDecode() {
  const ui = useToolUI();
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const [error, setError] = useState("");

  const handleEncode = useCallback(() => {
    setError("");
    try {
      setOutput(utf8ToBase64(input));
    } catch {
      setError(ui.encodingError);
      setOutput("");
    }
  }, [input]);

  const handleDecode = useCallback(() => {
    setError("");
    try {
      setOutput(base64ToUtf8(input));
    } catch {
      setError(ui.invalidBase64);
      setOutput("");
    }
  }, [input]);

  return (
    <div className="mx-auto max-w-4xl space-y-6">
      <div>
        <label
          htmlFor="b64-input"
          className="mb-2 block text-sm font-semibold text-gray-700"
        >
          Input
        </label>
        <textarea
          id="b64-input"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder={ui.enterTextHere}
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

      {error && (
        <p role="alert" className="text-sm font-medium text-red-600">
          ✗ {error}
        </p>
      )}

      {output && (
        <div>
          <div className="mb-2 flex items-center justify-between">
            <label
              htmlFor="b64-output"
              className="text-sm font-semibold text-gray-700"
            >
              Output
            </label>
            <CopyButton text={output} />
          </div>
          <textarea
            id="b64-output"
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
