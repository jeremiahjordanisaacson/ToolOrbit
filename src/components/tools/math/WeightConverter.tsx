"use client";

import { useState, useCallback, useMemo } from "react";

const UNITS = [
  { key: "mg", label: "Milligram (mg)", toGrams: 0.001 },
  { key: "g", label: "Gram (g)", toGrams: 1 },
  { key: "kg", label: "Kilogram (kg)", toGrams: 1000 },
  { key: "metric ton", label: "Metric Ton (t)", toGrams: 1_000_000 },
  { key: "oz", label: "Ounce (oz)", toGrams: 28.3495 },
  { key: "lb", label: "Pound (lb)", toGrams: 453.592 },
  { key: "US ton", label: "US Ton", toGrams: 907_185 },
] as const;

type UnitKey = (typeof UNITS)[number]["key"];

function getUnit(key: UnitKey) {
  return UNITS.find((u) => u.key === key)!;
}

function formatSig(value: number, digits = 6): string {
  if (value === 0) return "0";
  return Number(value.toPrecision(digits)).toString();
}

function buildFormula(
  sourceKey: UnitKey,
  targetKey: UnitKey,
  inputValue: number,
  result: number,
): string {
  if (sourceKey === targetKey) {
    return `1 ${sourceKey} = 1 ${targetKey} (same unit)`;
  }

  const src = getUnit(sourceKey);
  const tgt = getUnit(targetKey);

  const sourceToGrams = formatSig(src.toGrams);
  const gramsToTarget = formatSig(1 / tgt.toGrams);

  const parts: string[] = [];
  parts.push(`1 ${sourceKey} = ${sourceToGrams} g`);
  parts.push(`1 g = ${gramsToTarget} ${targetKey}`);
  parts.push(
    `${formatSig(inputValue)} ${sourceKey} = ${formatSig(result)} ${targetKey}`,
  );

  return parts.join(", ");
}

export default function WeightConverter() {
  const [sourceUnit, setSourceUnit] = useState<UnitKey>("kg");
  const [targetUnit, setTargetUnit] = useState<UnitKey>("lb");
  const [inputValue, setInputValue] = useState<string>("1");

  const handleSwap = useCallback(() => {
    setSourceUnit(targetUnit);
    setTargetUnit(sourceUnit);
  }, [sourceUnit, targetUnit]);

  const { result, formula } = useMemo(() => {
    const numeric = parseFloat(inputValue);
    if (inputValue === "" || isNaN(numeric)) {
      return { result: null, formula: null };
    }
    const src = getUnit(sourceUnit);
    const tgt = getUnit(targetUnit);
    const grams = numeric * src.toGrams;
    const converted = grams / tgt.toGrams;
    return {
      result: converted,
      formula: buildFormula(sourceUnit, targetUnit, numeric, converted),
    };
  }, [inputValue, sourceUnit, targetUnit]);

  return (
    <div className="mx-auto w-full max-w-lg">
      <div className="rounded-2xl border border-gray-200 bg-white shadow-lg dark:border-gray-700 dark:bg-gray-900">
        {/* Header */}
        <div className="border-b border-gray-200 px-6 py-5 dark:border-gray-700">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100">
            Weight Converter
          </h2>
          <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
            Convert between common weight and mass units
          </p>
        </div>

        {/* Body */}
        <div className="space-y-6 px-6 py-6">
          {/* Value input */}
          <div>
            <label
              htmlFor="weight-value"
              className="mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-300"
            >
              Value
            </label>
            <input
              id="weight-value"
              type="number"
              step="any"
              aria-label="Value to convert"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder="Enter a value"
              className="w-full rounded-lg border border-gray-300 bg-gray-50 px-4 py-2.5 text-gray-900 transition focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 focus:outline-none dark:border-gray-600 dark:bg-gray-800 dark:text-gray-100 dark:focus:border-blue-400"
            />
          </div>

          {/* Unit selectors + swap */}
          <div className="flex items-end gap-3">
            {/* Source unit */}
            <div className="flex-1">
              <label
                htmlFor="source-unit"
                className="mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-300"
              >
                From
              </label>
              <select
                id="source-unit"
                aria-label="Source unit"
                value={sourceUnit}
                onChange={(e) => setSourceUnit(e.target.value as UnitKey)}
                className="w-full rounded-lg border border-gray-300 bg-gray-50 px-4 py-2.5 text-gray-900 transition focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 focus:outline-none dark:border-gray-600 dark:bg-gray-800 dark:text-gray-100 dark:focus:border-blue-400"
              >
                {UNITS.map((u) => (
                  <option key={u.key} value={u.key}>
                    {u.label}
                  </option>
                ))}
              </select>
            </div>

            {/* Swap button */}
            <button
              type="button"
              onClick={handleSwap}
              aria-label="Swap source and target units"
              className="mb-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-gray-300 bg-white text-gray-600 transition hover:bg-gray-100 hover:text-gray-900 focus:ring-2 focus:ring-blue-500/20 focus:outline-none active:scale-95 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-100"
            >
              ↔
            </button>

            {/* Target unit */}
            <div className="flex-1">
              <label
                htmlFor="target-unit"
                className="mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-300"
              >
                To
              </label>
              <select
                id="target-unit"
                aria-label="Target unit"
                value={targetUnit}
                onChange={(e) => setTargetUnit(e.target.value as UnitKey)}
                className="w-full rounded-lg border border-gray-300 bg-gray-50 px-4 py-2.5 text-gray-900 transition focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 focus:outline-none dark:border-gray-600 dark:bg-gray-800 dark:text-gray-100 dark:focus:border-blue-400"
              >
                {UNITS.map((u) => (
                  <option key={u.key} value={u.key}>
                    {u.label}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Result */}
          <div
            role="status"
            aria-live="polite"
            className="rounded-lg border border-blue-200 bg-blue-50 px-5 py-4 dark:border-blue-800 dark:bg-blue-950/40"
          >
            <p className="text-sm font-medium text-blue-700 dark:text-blue-300">
              Result
            </p>
            <p className="mt-1 text-2xl font-bold tracking-tight text-blue-900 dark:text-blue-100">
              {result !== null ? (
                <>
                  {formatSig(result)}{" "}
                  <span className="text-base font-medium text-blue-600 dark:text-blue-400">
                    {targetUnit}
                  </span>
                </>
              ) : (
                <span className="text-base font-normal text-blue-400 dark:text-blue-500">
                  Enter a value to convert
                </span>
              )}
            </p>
          </div>

          {/* Formula */}
          {formula && (
            <div className="rounded-lg bg-gray-50 px-4 py-3 dark:bg-gray-800">
              <p className="mb-1 text-xs font-medium tracking-wide text-gray-500 uppercase dark:text-gray-400">
                Conversion formula
              </p>
              <p className="text-sm leading-relaxed text-gray-700 dark:text-gray-300">
                {formula}
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
