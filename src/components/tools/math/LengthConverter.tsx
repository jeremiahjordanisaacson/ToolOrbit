"use client";

import { useState, useMemo } from "react";

interface UnitDefinition {
  label: string;
  toMeters: number;
}

const UNITS: Record<string, UnitDefinition> = {
  mm:            { label: "Millimeters (mm)",       toMeters: 0.001 },
  cm:            { label: "Centimeters (cm)",       toMeters: 0.01 },
  m:             { label: "Meters (m)",             toMeters: 1 },
  km:            { label: "Kilometers (km)",        toMeters: 1000 },
  in:            { label: "Inches (in)",            toMeters: 0.0254 },
  ft:            { label: "Feet (ft)",              toMeters: 0.3048 },
  yd:            { label: "Yards (yd)",             toMeters: 0.9144 },
  mi:            { label: "Miles (mi)",             toMeters: 1609.344 },
  "nautical mi": { label: "Nautical Miles (nmi)",  toMeters: 1852 },
};

const UNIT_KEYS = Object.keys(UNITS);

function formatSig(value: number, digits = 6): string {
  if (value === 0) return "0";
  return parseFloat(value.toPrecision(digits)).toString();
}

function buildFormula(
  sourceKey: string,
  targetKey: string,
  inputValue: number,
  result: number,
): string {
  const src = UNITS[sourceKey];
  const tgt = UNITS[targetKey];

  if (sourceKey === targetKey) {
    return `1 ${sourceKey} = 1 ${targetKey} (same unit)`;
  }

  const srcToBase = formatSig(src.toMeters);
  const baseToTgt = formatSig(1 / tgt.toMeters);
  const directFactor = formatSig(src.toMeters / tgt.toMeters);

  const parts: string[] = [];

  if (sourceKey !== "m") {
    parts.push(`1 ${sourceKey} = ${srcToBase} m`);
  }
  if (targetKey !== "m") {
    parts.push(`1 m = ${baseToTgt} ${targetKey}`);
  }

  parts.push(
    `${formatSig(inputValue)} ${sourceKey} = ${formatSig(result)} ${targetKey}`,
  );

  return parts.join(", ");
}

export default function LengthConverter() {
  const [sourceUnit, setSourceUnit] = useState("km");
  const [targetUnit, setTargetUnit] = useState("mi");
  const [inputValue, setInputValue] = useState("1");

  const { result, formula } = useMemo(() => {
    const num = parseFloat(inputValue);
    if (inputValue === "" || isNaN(num)) {
      return { result: null, formula: "" };
    }

    const meters = num * UNITS[sourceUnit].toMeters;
    const converted = meters / UNITS[targetUnit].toMeters;

    return {
      result: converted,
      formula: buildFormula(sourceUnit, targetUnit, num, converted),
    };
  }, [inputValue, sourceUnit, targetUnit]);

  const handleSwap = () => {
    setSourceUnit(targetUnit);
    setTargetUnit(sourceUnit);
  };

  return (
    <div className="flex min-h-[320px] items-center justify-center p-4">
      <div className="w-full max-w-lg rounded-2xl border border-gray-200 bg-white p-6 shadow-lg dark:border-gray-700 dark:bg-gray-900 sm:p-8">
        <h2 className="mb-6 text-center text-2xl font-bold tracking-tight text-gray-900 dark:text-gray-100">
          Length Converter
        </h2>

        {/* Value input */}
        <div className="mb-5">
          <label
            htmlFor="length-value"
            className="mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-300"
          >
            Value
          </label>
          <input
            id="length-value"
            type="number"
            step="any"
            aria-label="Value to convert"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            className="w-full rounded-lg border border-gray-300 bg-gray-50 px-4 py-2.5 text-lg tabular-nums text-gray-900 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-500/30 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-100"
            placeholder="Enter a value"
          />
        </div>

        {/* Unit selectors + swap */}
        <div className="mb-5 flex items-end gap-2">
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
              onChange={(e) => setSourceUnit(e.target.value)}
              className="w-full cursor-pointer rounded-lg border border-gray-300 bg-gray-50 px-3 py-2.5 text-sm text-gray-900 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-500/30 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-100"
            >
              {UNIT_KEYS.map((key) => (
                <option key={key} value={key}>
                  {UNITS[key].label}
                </option>
              ))}
            </select>
          </div>

          {/* Swap button */}
          <button
            type="button"
            onClick={handleSwap}
            aria-label="Swap source and target units"
            className="mb-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-gray-300 bg-white text-lg text-gray-600 shadow-sm transition hover:bg-blue-50 hover:text-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500/40 active:scale-95 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700 dark:hover:text-blue-400"
            title="Swap units"
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
              onChange={(e) => setTargetUnit(e.target.value)}
              className="w-full cursor-pointer rounded-lg border border-gray-300 bg-gray-50 px-3 py-2.5 text-sm text-gray-900 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-500/30 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-100"
            >
              {UNIT_KEYS.map((key) => (
                <option key={key} value={key}>
                  {UNITS[key].label}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Result */}
        <div
          aria-live="polite"
          className="rounded-xl border border-gray-200 bg-gray-50 p-4 text-center dark:border-gray-700 dark:bg-gray-800"
        >
          {result !== null ? (
            <>
              <p className="text-3xl font-semibold tabular-nums text-blue-600 dark:text-blue-400">
                {formatSig(result)}
                <span className="ml-1.5 text-base font-normal text-gray-500 dark:text-gray-400">
                  {UNITS[targetUnit].label}
                </span>
              </p>
              <p className="mt-2 text-xs leading-relaxed text-gray-500 dark:text-gray-400">
                {formula}
              </p>
            </>
          ) : (
            <p className="text-sm text-gray-400 dark:text-gray-500">
              Enter a value to see the conversion
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
