"use client";

import { useState, useCallback } from "react";
import { useToolUI } from "@/lib/i18n/ToolUIContext";

function CopyButton({ text, label }: { text: string; label?: string }) {
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
      aria-label={label ?? ui.copy}
      className="rounded-lg border border-gray-300 bg-white px-2.5 py-1 text-xs font-medium text-gray-600 transition-colors hover:border-primary-300 hover:text-primary-700"
    >
      {copied ? "✓" : ui.copy}
    </button>
  );
}

export default function UuidGenerator() {
  const ui = useToolUI();
  const [uuids, setUuids] = useState<string[]>([]);
  const [quantity, setQuantity] = useState(1);
  const [uppercase, setUppercase] = useState(false);

  const generate = useCallback(() => {
    const results: string[] = [];
    for (let i = 0; i < quantity; i++) {
      const id = crypto.randomUUID();
      results.push(uppercase ? id.toUpperCase() : id);
    }
    setUuids(results);
  }, [quantity, uppercase]);

  const allText = uuids.join("\n");

  return (
    <div className="mx-auto max-w-4xl space-y-6">
      <div className="flex flex-wrap items-end gap-4">
        <div>
          <label
            htmlFor="uuid-qty"
            className="mb-2 block text-sm font-semibold text-gray-700"
          >
            {ui.quantity}
          </label>
          <input
            id="uuid-qty"
            type="number"
            min={1}
            max={50}
            value={quantity}
            onChange={(e) =>
              setQuantity(Math.max(1, Math.min(50, Number(e.target.value) || 1)))
            }
            className="w-24 rounded-xl border border-gray-300 bg-white px-4 py-2.5 text-sm shadow-sm focus:border-primary-400 focus:outline-none focus:ring-2 focus:ring-primary-200"
          />
        </div>

        <label className="flex items-center gap-2 pb-1">
          <input
            type="checkbox"
            checked={uppercase}
            onChange={(e) => {
              setUppercase(e.target.checked);
              if (uuids.length > 0) {
                setUuids((prev) =>
                  prev.map((u) =>
                    e.target.checked ? u.toUpperCase() : u.toLowerCase()
                  )
                );
              }
            }}
            className="h-4 w-4 rounded border-gray-300 text-primary-700 focus:ring-primary-200"
          />
          <span className="text-sm font-medium text-gray-700">{ui.uppercase}</span>
        </label>

        <button
          type="button"
          onClick={generate}
          className="rounded-xl bg-primary-700 px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-primary-600"
        >
          {ui.generate}
        </button>
      </div>

      {uuids.length > 0 && (
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <h3 className="text-sm font-semibold text-gray-700">
              Generated UUID{uuids.length > 1 ? "s" : ""} ({uuids.length})
            </h3>
            {uuids.length > 1 && <CopyButton text={allText} label="Copy all UUIDs" />}
          </div>

          <ul className="space-y-2" aria-label="Generated UUIDs">
            {uuids.map((uuid, i) => (
              <li
                key={i}
                className="flex items-center justify-between rounded-lg border border-gray-200 bg-gray-50 px-4 py-2.5"
              >
                <code className="select-all break-all font-mono text-sm text-gray-800">
                  {uuid}
                </code>
                <CopyButton text={uuid} label={`Copy UUID ${i + 1}`} />
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
