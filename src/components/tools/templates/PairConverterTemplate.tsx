"use client";

import { useState, useCallback } from "react";

const COMMON_VALUES = [1, 5, 10, 25, 50, 100, 250, 500, 1000, 5000];

export default function PairConverterTemplate({
  config,
}: {
  config: Record<string, unknown>;
}) {
  const {
    fromUnit,
    toUnit,
    fromAbbr,
    toAbbr,
    factor,
    formula,
  } = config as {
    fromUnit: string;
    toUnit: string;
    fromAbbr: string;
    toAbbr: string;
    factor: number;
    formula: string;
  };

  const [value, setValue] = useState("");
  const [reversed, setReversed] = useState(false);
  const [copied, setCopied] = useState(false);

  const currentFrom = reversed ? toUnit : fromUnit;
  const currentTo = reversed ? fromUnit : toUnit;
  const currentFromAbbr = reversed ? toAbbr : fromAbbr;
  const currentToAbbr = reversed ? fromAbbr : toAbbr;
  const currentFactor = reversed ? 1 / factor : factor;

  const convert = useCallback(
    (v: number) => v * currentFactor,
    [currentFactor]
  );

  const numValue = parseFloat(value);
  const result = !isNaN(numValue) ? convert(numValue) : null;

  const formatNumber = (n: number) => {
    if (Number.isInteger(n) && Math.abs(n) < 1e15) return n.toLocaleString();
    const fixed = n.toPrecision(10);
    return parseFloat(fixed).toLocaleString(undefined, {
      maximumFractionDigits: 10,
    });
  };

  const handleCopy = useCallback(async () => {
    if (result === null) return;
    await navigator.clipboard.writeText(formatNumber(result));
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  }, [result]);

  const handleSwap = () => {
    setReversed((r) => !r);
    setValue("");
  };

  return (
    <div className="mx-auto w-full max-w-2xl space-y-6">
      {/* Converter Card */}
      <div className="rounded-2xl border border-gray-200 bg-white shadow-lg dark:border-gray-700 dark:bg-gray-900">
        <div className="border-b border-gray-200 px-6 py-5 dark:border-gray-700">
          <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
            {currentFrom} to {currentTo}
          </h2>
          <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
            {formula}
          </p>
        </div>

        <div className="px-6 py-5 space-y-5">
          {/* Input Row */}
          <div className="flex items-end gap-3">
            <div className="flex-1">
              <label
                htmlFor="converter-input"
                className="mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-300"
              >
                {currentFrom} ({currentFromAbbr})
              </label>
              <input
                id="converter-input"
                type="number"
                inputMode="decimal"
                value={value}
                onChange={(e) => setValue(e.target.value)}
                placeholder={`Enter ${currentFrom.toLowerCase()}`}
                aria-label={`Value in ${currentFrom}`}
                className="w-full rounded-lg border border-gray-300 bg-gray-50 px-3 py-2.5 text-sm text-gray-900 transition focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/30 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-100"
              />
            </div>

            {/* Swap Button */}
            <button
              onClick={handleSwap}
              aria-label="Swap conversion direction"
              className="mb-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-gray-300 bg-white text-gray-600 transition hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500/30 active:scale-95 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-100"
            >
              ⇄
            </button>

            <div className="flex-1">
              <label className="mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-300">
                {currentTo} ({currentToAbbr})
              </label>
              <div className="flex items-center gap-2">
                <div className="flex-1 rounded-lg border border-gray-200 bg-gradient-to-br from-blue-50 to-indigo-50 px-3 py-2.5 text-sm font-medium text-gray-900 dark:border-gray-700 dark:from-blue-950/40 dark:to-indigo-950/40 dark:text-gray-100">
                  {result !== null ? formatNumber(result) : "—"}
                </div>
                <button
                  onClick={handleCopy}
                  disabled={result === null}
                  aria-label="Copy result"
                  className="rounded-md bg-blue-600 px-3 py-2 text-sm text-white transition hover:bg-blue-700 disabled:opacity-40"
                >
                  {copied ? "✓" : "Copy"}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Common Values Table */}
      <div className="rounded-2xl border border-gray-200 bg-white shadow-lg dark:border-gray-700 dark:bg-gray-900">
        <div className="border-b border-gray-200 px-6 py-4 dark:border-gray-700">
          <h3 className="text-sm font-semibold text-gray-900 dark:text-white">
            Common Conversions
          </h3>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-gray-100 dark:border-gray-800">
                <th className="px-6 py-3 text-left font-medium text-gray-500 dark:text-gray-400">
                  {currentFrom} ({currentFromAbbr})
                </th>
                <th className="px-6 py-3 text-left font-medium text-gray-500 dark:text-gray-400">
                  {currentTo} ({currentToAbbr})
                </th>
              </tr>
            </thead>
            <tbody>
              {COMMON_VALUES.map((v) => (
                <tr
                  key={v}
                  className="border-b border-gray-50 transition hover:bg-gray-50 dark:border-gray-800/50 dark:hover:bg-gray-800/50"
                >
                  <td className="px-6 py-2.5 font-medium text-gray-900 dark:text-gray-100">
                    {v.toLocaleString()} {currentFromAbbr}
                  </td>
                  <td className="px-6 py-2.5 text-gray-700 dark:text-gray-300">
                    {formatNumber(convert(v))} {currentToAbbr}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
