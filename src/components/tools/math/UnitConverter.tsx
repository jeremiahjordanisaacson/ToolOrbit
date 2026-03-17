"use client";

import { useState, useMemo, useCallback } from "react";
import { useToolUI } from "@/lib/i18n/ToolUIContext";

type Category =
  | "Length"
  | "Weight"
  | "Temperature"
  | "Volume"
  | "Speed"
  | "Area"
  | "Time"
  | "Digital Storage";

interface UnitDef {
  label: string;
  toBase: number; // multiply by this to get to base unit
}

// All non-temperature categories convert via: value * fromUnit.toBase / toUnit.toBase
const unitData: Record<Category, UnitDef[]> = {
  Length: [
    { label: "mm", toBase: 0.001 },
    { label: "cm", toBase: 0.01 },
    { label: "m", toBase: 1 },
    { label: "km", toBase: 1000 },
    { label: "in", toBase: 0.0254 },
    { label: "ft", toBase: 0.3048 },
    { label: "yd", toBase: 0.9144 },
    { label: "mi", toBase: 1609.344 },
  ],
  Weight: [
    { label: "mg", toBase: 0.001 },
    { label: "g", toBase: 1 },
    { label: "kg", toBase: 1000 },
    { label: "metric ton", toBase: 1_000_000 },
    { label: "oz", toBase: 28.3495 },
    { label: "lb", toBase: 453.592 },
    { label: "US ton", toBase: 907_184.74 },
  ],
  Temperature: [
    { label: "Celsius", toBase: 0 },
    { label: "Fahrenheit", toBase: 0 },
    { label: "Kelvin", toBase: 0 },
  ],
  Volume: [
    { label: "mL", toBase: 1 },
    { label: "L", toBase: 1000 },
    { label: "gallon", toBase: 3785.41 },
    { label: "quart", toBase: 946.353 },
    { label: "pint", toBase: 473.176 },
    { label: "cup", toBase: 236.588 },
    { label: "fl oz", toBase: 29.5735 },
    { label: "tbsp", toBase: 14.7868 },
    { label: "tsp", toBase: 4.92892 },
  ],
  Speed: [
    { label: "m/s", toBase: 1 },
    { label: "km/h", toBase: 1 / 3.6 },
    { label: "mph", toBase: 0.44704 },
    { label: "knots", toBase: 0.514444 },
    { label: "ft/s", toBase: 0.3048 },
  ],
  Area: [
    { label: "mm²", toBase: 1e-6 },
    { label: "cm²", toBase: 1e-4 },
    { label: "m²", toBase: 1 },
    { label: "km²", toBase: 1e6 },
    { label: "in²", toBase: 0.00064516 },
    { label: "ft²", toBase: 0.092903 },
    { label: "yd²", toBase: 0.836127 },
    { label: "acre", toBase: 4046.86 },
    { label: "hectare", toBase: 10000 },
  ],
  Time: [
    { label: "ms", toBase: 0.001 },
    { label: "second", toBase: 1 },
    { label: "minute", toBase: 60 },
    { label: "hour", toBase: 3600 },
    { label: "day", toBase: 86400 },
    { label: "week", toBase: 604800 },
    { label: "month (30d)", toBase: 2_592_000 },
    { label: "year (365d)", toBase: 31_536_000 },
  ],
  "Digital Storage": [
    { label: "bit", toBase: 1 / 8 },
    { label: "byte", toBase: 1 },
    { label: "KB", toBase: 1024 },
    { label: "MB", toBase: 1024 ** 2 },
    { label: "GB", toBase: 1024 ** 3 },
    { label: "TB", toBase: 1024 ** 4 },
    { label: "PB", toBase: 1024 ** 5 },
  ],
};

const categories = Object.keys(unitData) as Category[];

function convertTemperature(
  value: number,
  from: string,
  to: string,
): number {
  if (from === to) return value;

  // Convert to Celsius first
  let celsius: number;
  switch (from) {
    case "Fahrenheit":
      celsius = (value - 32) * (5 / 9);
      break;
    case "Kelvin":
      celsius = value - 273.15;
      break;
    default:
      celsius = value;
  }

  // Convert from Celsius to target
  switch (to) {
    case "Fahrenheit":
      return celsius * (9 / 5) + 32;
    case "Kelvin":
      return celsius + 273.15;
    default:
      return celsius;
  }
}

function formatResult(value: number): string {
  if (value === 0) return "0";
  if (!Number.isFinite(value)) return "—";

  const abs = Math.abs(value);

  // Use scientific notation for very large or very small values
  if (abs >= 1e12 || (abs > 0 && abs < 1e-6)) {
    return value.toPrecision(6);
  }

  // Format to up to 6 significant digits, then strip trailing zeros
  const formatted = parseFloat(value.toPrecision(6));
  return formatted.toLocaleString("en-US", { maximumFractionDigits: 10 });
}

export default function UnitConverter() {
  const t = useToolUI();

  const categoryLabels: Record<Category, string> = {
    Length: t.length,
    Weight: t.weightCat,
    Temperature: t.temperatureCat,
    Volume: t.volumeCat,
    Speed: t.speedCat,
    Area: t.areaCat,
    Time: t.timeCat,
    "Digital Storage": t.digitalStorageCat,
  };

  const [category, setCategory] = useState<Category>("Length");
  const [fromIdx, setFromIdx] = useState(0);
  const [toIdx, setToIdx] = useState(2); // default: mm → m for Length
  const [inputValue, setInputValue] = useState("");

  const units = unitData[category];

  const handleCategoryChange = useCallback((cat: Category) => {
    setCategory(cat);
    setFromIdx(0);
    setToIdx(Math.min(2, unitData[cat].length - 1));
    setInputValue("");
  }, []);

  const handleSwap = useCallback(() => {
    setFromIdx((prev) => {
      const oldTo = toIdx;
      setToIdx(prev);
      return oldTo;
    });
  }, [toIdx]);

  const result = useMemo(() => {
    const num = parseFloat(inputValue);
    if (inputValue === "" || isNaN(num)) return null;

    const from = units[fromIdx];
    const to = units[toIdx];

    if (category === "Temperature") {
      return convertTemperature(num, from.label, to.label);
    }

    return (num * from.toBase) / to.toBase;
  }, [inputValue, units, fromIdx, toIdx, category]);

  return (
    <div className="mx-auto w-full max-w-xl">
      <div className="rounded-2xl border border-gray-200 bg-white shadow-lg dark:border-gray-700 dark:bg-gray-900">
        {/* Header */}
        <div className="border-b border-gray-200 px-6 py-5 dark:border-gray-700">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100">
            Unit Converter
          </h2>
          <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
            Convert between units across {categories.length} categories
          </p>
        </div>

        <div className="space-y-5 px-6 py-5">
          {/* Category selector */}
          <div>
            <label
              htmlFor="uc-category"
              className="mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-300"
            >
              Category
            </label>
            <select
              id="uc-category"
              aria-label="Conversion category"
              value={category}
              onChange={(e) => handleCategoryChange(e.target.value as Category)}
              className="w-full rounded-lg border border-gray-300 bg-gray-50 px-3 py-2.5 text-sm text-gray-900 transition focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/30 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-100"
            >
              {categories.map((cat) => (
                <option key={cat} value={cat}>
                  {categoryLabels[cat]}
                </option>
              ))}
            </select>
          </div>

          {/* Value input */}
          <div>
            <label
              htmlFor="uc-value"
              className="mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-300"
            >
              Value
            </label>
            <input
              id="uc-value"
              type="number"
              aria-label="Value to convert"
              placeholder={t.enterValue}
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              className="w-full rounded-lg border border-gray-300 bg-gray-50 px-3 py-2.5 text-sm text-gray-900 tabular-nums transition focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/30 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-100"
            />
          </div>

          {/* Unit selectors with swap */}
          <div className="flex items-end gap-2">
            <div className="min-w-0 flex-1">
              <label
                htmlFor="uc-from"
                className="mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-300"
              >
                From
              </label>
              <select
                id="uc-from"
                aria-label="Source unit"
                value={fromIdx}
                onChange={(e) => setFromIdx(Number(e.target.value))}
                className="w-full rounded-lg border border-gray-300 bg-gray-50 px-3 py-2.5 text-sm text-gray-900 transition focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/30 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-100"
              >
                {units.map((u, i) => (
                  <option key={u.label} value={i}>
                    {u.label}
                  </option>
                ))}
              </select>
            </div>

            <button
              type="button"
              onClick={handleSwap}
              aria-label="Swap source and target units"
              title={t.swap}
              className="mb-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-gray-300 bg-white text-gray-600 transition hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500/30 active:scale-95 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-100"
            >
              <span className="text-lg leading-none">↔</span>
            </button>

            <div className="min-w-0 flex-1">
              <label
                htmlFor="uc-to"
                className="mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-300"
              >
                To
              </label>
              <select
                id="uc-to"
                aria-label="Target unit"
                value={toIdx}
                onChange={(e) => setToIdx(Number(e.target.value))}
                className="w-full rounded-lg border border-gray-300 bg-gray-50 px-3 py-2.5 text-sm text-gray-900 transition focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/30 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-100"
              >
                {units.map((u, i) => (
                  <option key={u.label} value={i}>
                    {u.label}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Result display */}
          <div
            className="rounded-lg border border-gray-200 bg-gradient-to-br from-blue-50 to-indigo-50 p-4 dark:border-gray-700 dark:from-blue-950/40 dark:to-indigo-950/40"
            role="status"
            aria-live="polite"
            aria-label="Conversion result"
          >
            {result !== null ? (
              <div className="space-y-1">
                <p className="text-xs font-medium uppercase tracking-wider text-gray-500 dark:text-gray-400">
                  Result
                </p>
                <p className="break-all text-2xl font-bold tabular-nums text-gray-900 dark:text-gray-100">
                  {formatResult(result)}
                  <span className="ml-2 text-base font-medium text-gray-500 dark:text-gray-400">
                    {units[toIdx].label}
                  </span>
                </p>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  {inputValue} {units[fromIdx].label} ={" "}
                  {formatResult(result)} {units[toIdx].label}
                </p>
              </div>
            ) : (
              <p className="text-center text-sm text-gray-400 dark:text-gray-500">
                Enter a value to see the conversion
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
