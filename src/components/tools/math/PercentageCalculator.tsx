"use client";

import { useState } from "react";

type Tab = "percentOf" | "whatPercent" | "percentChange";

const tabs: { key: Tab; label: string }[] = [
  { key: "percentOf", label: "What is X% of Y?" },
  { key: "whatPercent", label: "X is what % of Y?" },
  { key: "percentChange", label: "% Change from X to Y" },
];

function fmt(value: number): string {
  if (!isFinite(value)) return "—";
  return value.toFixed(2);
}

export default function PercentageCalculator() {
  const [activeTab, setActiveTab] = useState<Tab>("percentOf");

  // Mode 1: What is X% of Y?
  const [percent, setPercent] = useState("");
  const [baseNumber, setBaseNumber] = useState("");

  // Mode 2: X is what % of Y?
  const [part, setPart] = useState("");
  const [whole, setWhole] = useState("");

  // Mode 3: Percentage change from X to Y
  const [oldValue, setOldValue] = useState("");
  const [newValue, setNewValue] = useState("");

  const percentOfResult =
    percent !== "" && baseNumber !== ""
      ? (parseFloat(percent) / 100) * parseFloat(baseNumber)
      : null;

  const whatPercentResult =
    part !== "" && whole !== "" && parseFloat(whole) !== 0
      ? (parseFloat(part) / parseFloat(whole)) * 100
      : null;

  const percentChangeResult =
    oldValue !== "" && newValue !== "" && parseFloat(oldValue) !== 0
      ? ((parseFloat(newValue) - parseFloat(oldValue)) / Math.abs(parseFloat(oldValue))) * 100
      : null;

  const isIncrease = percentChangeResult !== null && percentChangeResult >= 0;

  return (
    <div className="mx-auto w-full max-w-xl">
      <div className="rounded-2xl border border-gray-200 bg-white shadow-lg dark:border-gray-700 dark:bg-gray-900">
        {/* Header */}
        <div className="border-b border-gray-200 px-6 pt-6 pb-0 dark:border-gray-700">
          <h2 className="mb-4 text-xl font-semibold text-gray-900 dark:text-gray-100">
            Percentage Calculator
          </h2>

          {/* Tabs */}
          <nav className="flex gap-1" role="tablist" aria-label="Calculation mode">
            {tabs.map(({ key, label }) => (
              <button
                key={key}
                role="tab"
                aria-selected={activeTab === key}
                aria-controls={`panel-${key}`}
                className={`rounded-t-lg px-4 py-2 text-sm font-medium transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 ${
                  activeTab === key
                    ? "border-b-2 border-blue-600 bg-blue-50 text-blue-700 dark:bg-blue-950 dark:text-blue-300"
                    : "text-gray-500 hover:bg-gray-100 hover:text-gray-700 dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-gray-200"
                }`}
                onClick={() => setActiveTab(key)}
              >
                {label}
              </button>
            ))}
          </nav>
        </div>

        {/* Panel content */}
        <div className="p-6">
          {/* Mode 1: What is X% of Y? */}
          {activeTab === "percentOf" && (
            <div id="panel-percentOf" role="tabpanel" className="space-y-5">
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Calculate a percentage of a given number.
              </p>

              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="percent-input"
                    className="mb-1 block text-sm font-medium text-gray-700 dark:text-gray-300"
                  >
                    Percentage (%)
                  </label>
                  <input
                    id="percent-input"
                    type="number"
                    step="any"
                    aria-label="Percentage value"
                    placeholder="e.g. 25"
                    value={percent}
                    onChange={(e) => setPercent(e.target.value)}
                    className="w-full rounded-lg border border-gray-300 bg-gray-50 px-4 py-2.5 text-gray-900 placeholder-gray-400 transition focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 focus:outline-none dark:border-gray-600 dark:bg-gray-800 dark:text-gray-100 dark:placeholder-gray-500"
                  />
                </div>
                <div>
                  <label
                    htmlFor="base-number-input"
                    className="mb-1 block text-sm font-medium text-gray-700 dark:text-gray-300"
                  >
                    Number
                  </label>
                  <input
                    id="base-number-input"
                    type="number"
                    step="any"
                    aria-label="Base number"
                    placeholder="e.g. 200"
                    value={baseNumber}
                    onChange={(e) => setBaseNumber(e.target.value)}
                    className="w-full rounded-lg border border-gray-300 bg-gray-50 px-4 py-2.5 text-gray-900 placeholder-gray-400 transition focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 focus:outline-none dark:border-gray-600 dark:bg-gray-800 dark:text-gray-100 dark:placeholder-gray-500"
                  />
                </div>
              </div>

              <div
                className="rounded-lg bg-gray-50 p-4 dark:bg-gray-800"
                aria-live="polite"
              >
                <span className="text-sm text-gray-500 dark:text-gray-400">Result: </span>
                <span className="text-lg font-semibold text-gray-900 dark:text-gray-100">
                  {percentOfResult !== null ? fmt(percentOfResult) : "—"}
                </span>
              </div>
            </div>
          )}

          {/* Mode 2: X is what % of Y? */}
          {activeTab === "whatPercent" && (
            <div id="panel-whatPercent" role="tabpanel" className="space-y-5">
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Find what percentage one number is of another.
              </p>

              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="part-input"
                    className="mb-1 block text-sm font-medium text-gray-700 dark:text-gray-300"
                  >
                    Part
                  </label>
                  <input
                    id="part-input"
                    type="number"
                    step="any"
                    aria-label="Part value"
                    placeholder="e.g. 50"
                    value={part}
                    onChange={(e) => setPart(e.target.value)}
                    className="w-full rounded-lg border border-gray-300 bg-gray-50 px-4 py-2.5 text-gray-900 placeholder-gray-400 transition focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 focus:outline-none dark:border-gray-600 dark:bg-gray-800 dark:text-gray-100 dark:placeholder-gray-500"
                  />
                </div>
                <div>
                  <label
                    htmlFor="whole-input"
                    className="mb-1 block text-sm font-medium text-gray-700 dark:text-gray-300"
                  >
                    Whole
                  </label>
                  <input
                    id="whole-input"
                    type="number"
                    step="any"
                    aria-label="Whole value"
                    placeholder="e.g. 200"
                    value={whole}
                    onChange={(e) => setWhole(e.target.value)}
                    className="w-full rounded-lg border border-gray-300 bg-gray-50 px-4 py-2.5 text-gray-900 placeholder-gray-400 transition focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 focus:outline-none dark:border-gray-600 dark:bg-gray-800 dark:text-gray-100 dark:placeholder-gray-500"
                  />
                </div>
              </div>

              <div
                className="rounded-lg bg-gray-50 p-4 dark:bg-gray-800"
                aria-live="polite"
              >
                <span className="text-sm text-gray-500 dark:text-gray-400">Result: </span>
                <span className="text-lg font-semibold text-gray-900 dark:text-gray-100">
                  {whatPercentResult !== null ? `${fmt(whatPercentResult)}%` : "—"}
                </span>
              </div>
            </div>
          )}

          {/* Mode 3: Percentage change from X to Y */}
          {activeTab === "percentChange" && (
            <div id="panel-percentChange" role="tabpanel" className="space-y-5">
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Calculate the percentage change between two values.
              </p>

              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="old-value-input"
                    className="mb-1 block text-sm font-medium text-gray-700 dark:text-gray-300"
                  >
                    Old Value
                  </label>
                  <input
                    id="old-value-input"
                    type="number"
                    step="any"
                    aria-label="Old value"
                    placeholder="e.g. 100"
                    value={oldValue}
                    onChange={(e) => setOldValue(e.target.value)}
                    className="w-full rounded-lg border border-gray-300 bg-gray-50 px-4 py-2.5 text-gray-900 placeholder-gray-400 transition focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 focus:outline-none dark:border-gray-600 dark:bg-gray-800 dark:text-gray-100 dark:placeholder-gray-500"
                  />
                </div>
                <div>
                  <label
                    htmlFor="new-value-input"
                    className="mb-1 block text-sm font-medium text-gray-700 dark:text-gray-300"
                  >
                    New Value
                  </label>
                  <input
                    id="new-value-input"
                    type="number"
                    step="any"
                    aria-label="New value"
                    placeholder="e.g. 150"
                    value={newValue}
                    onChange={(e) => setNewValue(e.target.value)}
                    className="w-full rounded-lg border border-gray-300 bg-gray-50 px-4 py-2.5 text-gray-900 placeholder-gray-400 transition focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 focus:outline-none dark:border-gray-600 dark:bg-gray-800 dark:text-gray-100 dark:placeholder-gray-500"
                  />
                </div>
              </div>

              <div
                className="rounded-lg bg-gray-50 p-4 dark:bg-gray-800"
                aria-live="polite"
              >
                <span className="text-sm text-gray-500 dark:text-gray-400">Result: </span>
                {percentChangeResult !== null ? (
                  <span
                    className={`text-lg font-semibold ${
                      isIncrease ? "text-green-600 dark:text-green-400" : "text-red-600 dark:text-red-400"
                    }`}
                  >
                    {isIncrease ? "+" : ""}
                    {fmt(percentChangeResult)}%{" "}
                    <span className="text-sm font-normal">
                      ({isIncrease ? "Increase" : "Decrease"})
                    </span>
                  </span>
                ) : (
                  <span className="text-lg font-semibold text-gray-900 dark:text-gray-100">
                    —
                  </span>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
