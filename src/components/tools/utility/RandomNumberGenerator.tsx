"use client";

import { useState, useCallback } from "react";
import { useToolUI } from "@/lib/i18n/ToolUIContext";

function getSecureRandom(min: number, max: number): number {
  const range = max - min + 1;
  const bytesNeeded = Math.ceil(Math.log2(range + 1) / 8) || 1;
  const maxValid = Math.floor(256 ** bytesNeeded / range) * range - 1;
  const array = new Uint8Array(bytesNeeded);

  let value: number;
  do {
    crypto.getRandomValues(array);
    value = array.reduce((acc, byte, i) => acc + byte * 256 ** i, 0);
  } while (value > maxValid);

  return min + (value % range);
}

export default function RandomNumberGenerator() {
  const t = useToolUI();
  const [min, setMin] = useState(1);
  const [max, setMax] = useState(100);
  const [quantity, setQuantity] = useState(1);
  const [allowDuplicates, setAllowDuplicates] = useState(true);
  const [results, setResults] = useState<number[]>([]);
  const [error, setError] = useState("");
  const [copied, setCopied] = useState(false);

  const generate = useCallback(() => {
    setError("");
    setCopied(false);

    if (min >= max) {
      setError("Minimum must be less than maximum.");
      return;
    }

    if (quantity < 1 || quantity > 100) {
      setError("Quantity must be between 1 and 100.");
      return;
    }

    const range = max - min + 1;
    if (!allowDuplicates && quantity > range) {
      setError(
        `Cannot generate ${quantity} unique numbers in range ${min}–${max} (only ${range} possible values).`
      );
      return;
    }

    const nums: number[] = [];
    const seen = new Set<number>();

    while (nums.length < quantity) {
      const n = getSecureRandom(min, max);
      if (!allowDuplicates && seen.has(n)) continue;
      nums.push(n);
      seen.add(n);
    }

    setResults(nums);
  }, [min, max, quantity, allowDuplicates]);

  const copyAll = async () => {
    try {
      await navigator.clipboard.writeText(results.join(", "));
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      setError("Failed to copy to clipboard.");
    }
  };

  const sum = results.reduce((a, b) => a + b, 0);
  const avg = results.length > 0 ? (sum / results.length).toFixed(2) : "0";

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div>
          <label
            htmlFor="rng-min"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Minimum
          </label>
          <input
            id="rng-min"
            type="number"
            value={min}
            onChange={(e) => setMin(Number(e.target.value))}
            className="w-full rounded-lg border border-gray-300 px-3 py-2 text-gray-900 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
          />
        </div>
        <div>
          <label
            htmlFor="rng-max"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Maximum
          </label>
          <input
            id="rng-max"
            type="number"
            value={max}
            onChange={(e) => setMax(Number(e.target.value))}
            className="w-full rounded-lg border border-gray-300 px-3 py-2 text-gray-900 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
          />
        </div>
        <div>
          <label
            htmlFor="rng-qty"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Quantity (max 100)
          </label>
          <input
            id="rng-qty"
            type="number"
            min={1}
            max={100}
            value={quantity}
            onChange={(e) =>
              setQuantity(Math.min(100, Math.max(1, Number(e.target.value))))
            }
            className="w-full rounded-lg border border-gray-300 px-3 py-2 text-gray-900 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
          />
        </div>
      </div>

      <div className="flex items-center gap-3">
        <button
          type="button"
          role="switch"
          aria-checked={allowDuplicates}
          aria-label="Allow duplicates"
          onClick={() => setAllowDuplicates((v) => !v)}
          className={`relative inline-flex h-6 w-11 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 ${
            allowDuplicates ? "bg-primary-600" : "bg-gray-300"
          }`}
        >
          <span
            className={`pointer-events-none inline-block h-5 w-5 rounded-full bg-white shadow ring-0 transition-transform ${
              allowDuplicates ? "translate-x-5" : "translate-x-0"
            }`}
          />
        </button>
        <span className="text-sm text-gray-700">{t.allowDuplicates}</span>
      </div>

      <div className="flex items-center gap-3 flex-wrap">
        <button
          onClick={generate}
          className="px-6 py-2.5 bg-primary-600 text-white font-medium rounded-lg hover:bg-primary-700 transition-colors focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2"
        >
          {t.generate}
        </button>
        {results.length > 0 && (
          <button
            onClick={copyAll}
            className="px-4 py-2.5 border border-gray-300 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2"
          >
            {copied ? `✓ ${t.copied}` : t.copyAll}
          </button>
        )}
      </div>

      {error && (
        <p className="text-red-600 text-sm" role="alert">
          {error}
        </p>
      )}

      {results.length > 0 && (
        <div className="space-y-4">
          <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-5 gap-3">
            {results.map((n, i) => (
              <div
                key={i}
                className="flex items-center justify-center p-4 bg-primary-50 border border-primary-200 rounded-xl text-xl font-bold text-primary-700 tabular-nums"
              >
                {n}
              </div>
            ))}
          </div>
          {results.length > 1 && (
            <div className="flex gap-6 text-sm text-gray-600 bg-gray-50 rounded-lg px-4 py-3">
              <span>
                Sum: <strong className="text-gray-900">{sum}</strong>
              </span>
              <span>
                Average: <strong className="text-gray-900">{avg}</strong>
              </span>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
