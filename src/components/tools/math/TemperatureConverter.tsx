"use client";

import { useState } from "react";

type Unit = "C" | "F" | "K";

interface ConversionResult {
  celsius: number;
  fahrenheit: number;
  kelvin: number;
}

const UNIT_LABELS: Record<Unit, string> = {
  C: "Celsius",
  F: "Fahrenheit",
  K: "Kelvin",
};

const UNIT_SYMBOLS: Record<Unit, string> = {
  C: "°C",
  F: "°F",
  K: "K",
};

function convert(value: number, from: Unit): ConversionResult {
  let celsius: number;

  switch (from) {
    case "C":
      celsius = value;
      break;
    case "F":
      celsius = ((value - 32) * 5) / 9;
      break;
    case "K":
      celsius = value - 273.15;
      break;
  }

  return {
    celsius,
    fahrenheit: (celsius * 9) / 5 + 32,
    kelvin: celsius + 273.15,
  };
}

function getTemperatureColor(celsius: number): string {
  if (celsius < 0) return "text-blue-600";
  if (celsius < 15) return "text-cyan-500";
  if (celsius < 25) return "text-green-600";
  if (celsius < 35) return "text-amber-500";
  return "text-red-600";
}

function getTemperatureBg(celsius: number): string {
  if (celsius < 0) return "bg-blue-50 border-blue-200";
  if (celsius < 15) return "bg-cyan-50 border-cyan-200";
  if (celsius < 25) return "bg-green-50 border-green-200";
  if (celsius < 35) return "bg-amber-50 border-amber-200";
  return "bg-red-50 border-red-200";
}

function getFormulas(from: Unit): string[] {
  switch (from) {
    case "C":
      return [
        "°F = (°C × 9/5) + 32",
        "K = °C + 273.15",
      ];
    case "F":
      return [
        "°C = (°F − 32) × 5/9",
        "K = (°F − 32) × 5/9 + 273.15",
      ];
    case "K":
      return [
        "°C = K − 273.15",
        "°F = (K − 273.15) × 9/5 + 32",
      ];
  }
}

function formatValue(value: number): string {
  return value.toFixed(2);
}

export default function TemperatureConverter() {
  const [input, setInput] = useState<string>("0");
  const [unit, setUnit] = useState<Unit>("C");

  const numericValue = input === "" || input === "-" ? NaN : parseFloat(input);
  const hasValue = !isNaN(numericValue);

  const result = hasValue ? convert(numericValue, unit) : null;

  const units: Unit[] = ["C", "F", "K"];

  const resultEntries: { unit: Unit; key: keyof ConversionResult; value: number | null }[] = [
    { unit: "C", key: "celsius", value: result?.celsius ?? null },
    { unit: "F", key: "fahrenheit", value: result?.fahrenheit ?? null },
    { unit: "K", key: "kelvin", value: result?.kelvin ?? null },
  ];

  const colorClass = result ? getTemperatureColor(result.celsius) : "text-gray-400";
  const bgClass = result ? getTemperatureBg(result.celsius) : "bg-gray-50 border-gray-200";

  return (
    <div className="w-full max-w-lg mx-auto">
      <div className="rounded-2xl border border-gray-200 bg-white shadow-sm overflow-hidden">
        {/* Header */}
        <div className="px-6 pt-6 pb-4">
          <h2 className="text-xl font-semibold text-gray-900">
            Temperature Converter
          </h2>
          <p className="mt-1 text-sm text-gray-500">
            Convert between Celsius, Fahrenheit, and Kelvin
          </p>
        </div>

        {/* Unit Toggle */}
        <div className="px-6 pb-4">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Source Unit
          </label>
          <div
            className="inline-flex rounded-lg border border-gray-200 bg-gray-100 p-1"
            role="radiogroup"
            aria-label="Temperature unit"
          >
            {units.map((u) => (
              <button
                key={u}
                type="button"
                role="radio"
                aria-checked={unit === u}
                aria-label={UNIT_LABELS[u]}
                onClick={() => setUnit(u)}
                className={`
                  px-4 py-2 text-sm font-medium rounded-md transition-all duration-150
                  focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-1
                  ${
                    unit === u
                      ? "bg-white text-gray-900 shadow-sm"
                      : "text-gray-500 hover:text-gray-700"
                  }
                `}
              >
                {UNIT_SYMBOLS[u]} {UNIT_LABELS[u]}
              </button>
            ))}
          </div>
        </div>

        {/* Input */}
        <div className="px-6 pb-5">
          <label
            htmlFor="temp-input"
            className="block text-sm font-medium text-gray-700 mb-2"
          >
            Temperature in {UNIT_LABELS[unit]}
          </label>
          <div className="relative">
            <input
              id="temp-input"
              type="number"
              step="any"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Enter temperature"
              aria-label={`Temperature value in ${UNIT_LABELS[unit]}`}
              className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 pr-14 text-lg
                         text-gray-900 placeholder-gray-400
                         focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20
                         transition-colors"
            />
            <span className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 font-medium text-lg pointer-events-none">
              {UNIT_SYMBOLS[unit]}
            </span>
          </div>
        </div>

        {/* Results */}
        <div className="px-6 pb-5">
          <h3 className="text-sm font-medium text-gray-700 mb-3">
            Conversions
          </h3>
          <div className="grid gap-3">
            {resultEntries.map(({ unit: u, value }) => {
              const isSource = u === unit;
              return (
                <div
                  key={u}
                  className={`
                    flex items-center justify-between rounded-xl border px-4 py-3 transition-colors
                    ${hasValue ? bgClass : "bg-gray-50 border-gray-200"}
                    ${isSource ? "ring-2 ring-offset-1 ring-blue-400/50" : ""}
                  `}
                  aria-label={`${UNIT_LABELS[u]} value`}
                >
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-medium text-gray-600">
                      {UNIT_LABELS[u]}
                    </span>
                    {isSource && (
                      <span className="inline-flex items-center rounded-full bg-blue-100 px-2 py-0.5 text-xs font-medium text-blue-700">
                        source
                      </span>
                    )}
                  </div>
                  <span
                    className={`text-xl font-semibold tabular-nums ${
                      hasValue ? colorClass : "text-gray-400"
                    }`}
                  >
                    {hasValue && value !== null
                      ? `${formatValue(value)} ${UNIT_SYMBOLS[u]}`
                      : `— ${UNIT_SYMBOLS[u]}`}
                  </span>
                </div>
              );
            })}
          </div>
        </div>

        {/* Formulas */}
        <div className="border-t border-gray-100 bg-gray-50 px-6 py-4">
          <h3 className="text-xs font-semibold uppercase tracking-wider text-gray-400 mb-2">
            Formulas Used
          </h3>
          <ul className="space-y-1">
            {getFormulas(unit).map((formula) => (
              <li
                key={formula}
                className="text-sm text-gray-600 font-mono"
              >
                {formula}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
