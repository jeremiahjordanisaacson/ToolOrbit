"use client";

import { useState } from "react";
import { useToolUI } from "@/lib/i18n/ToolUIContext";

function fmtNumber(val: string): string {
  const parts = val.replace(/[^0-9.\-]/g, "").split(".");
  parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  return parts.join(".");
}

function stripFmt(val: string): string {
  return val.replace(/,/g, "");
}

function fmtResult(n: number): string {
  if (!isFinite(n)) return "—";
  if (Number.isInteger(n)) return n.toLocaleString("en-US");
  return n.toLocaleString("en-US", { maximumFractionDigits: 4 });
}

type Tab = "percentOf" | "whatPercent" | "percentChange";

export default function PercentageCalculator() {
  const t = useToolUI();

  const tabs: { key: Tab; label: string }[] = [
    { key: "percentOf", label: t.whatIsXPercentOfY },
    { key: "whatPercent", label: t.xIsWhatPercentOfY },
    { key: "percentChange", label: t.percentChange },
  ];

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
            {t.percentageCalculator}
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
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="percent-input"
                    className="mb-1 block text-sm font-medium text-gray-700 dark:text-gray-300"
                  >
                    {t.percentage} (%)
                  </label>
                  <input
                    id="percent-input"
                    type="text"
                    inputMode="decimal"
                    aria-label="Percentage value"
                    placeholder="e.g. 25"
                    value={fmtNumber(percent)}
                    onChange={(e) => setPercent(stripFmt(e.target.value))}
                    className="w-full rounded-lg border border-gray-300 bg-gray-50 px-4 py-2.5 text-gray-900 placeholder-gray-400 transition focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 focus:outline-none dark:border-gray-600 dark:bg-gray-800 dark:text-gray-100 dark:placeholder-gray-500"
                  />
                </div>
                <div>
                  <label
                    htmlFor="base-number-input"
                    className="mb-1 block text-sm font-medium text-gray-700 dark:text-gray-300"
                  >
                    {t.number}
                  </label>
                  <input
                    id="base-number-input"
                    type="text"
                    inputMode="decimal"
                    aria-label="Base number"
                    placeholder="e.g. 200"
                    value={fmtNumber(baseNumber)}
                    onChange={(e) => setBaseNumber(stripFmt(e.target.value))}
                    className="w-full rounded-lg border border-gray-300 bg-gray-50 px-4 py-2.5 text-gray-900 placeholder-gray-400 transition focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 focus:outline-none dark:border-gray-600 dark:bg-gray-800 dark:text-gray-100 dark:placeholder-gray-500"
                  />
                </div>
              </div>

              <div
                className="rounded-lg bg-gray-50 p-4 dark:bg-gray-800"
                aria-live="polite"
              >
                <span className="text-sm text-gray-500 dark:text-gray-400">{t.result}: </span>
                <span className="text-lg font-semibold text-gray-900 dark:text-gray-100">
                  {percentOfResult !== null ? fmtResult(percentOfResult) : "—"}
                </span>
              </div>
            </div>
          )}

          {/* Mode 2: X is what % of Y? */}
          {activeTab === "whatPercent" && (
            <div id="panel-whatPercent" role="tabpanel" className="space-y-5">
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="part-input"
                    className="mb-1 block text-sm font-medium text-gray-700 dark:text-gray-300"
                  >
                    {t.part}
                  </label>
                  <input
                    id="part-input"
                    type="text"
                    inputMode="decimal"
                    aria-label="Part value"
                    placeholder="e.g. 50"
                    value={fmtNumber(part)}
                    onChange={(e) => setPart(stripFmt(e.target.value))}
                    className="w-full rounded-lg border border-gray-300 bg-gray-50 px-4 py-2.5 text-gray-900 placeholder-gray-400 transition focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 focus:outline-none dark:border-gray-600 dark:bg-gray-800 dark:text-gray-100 dark:placeholder-gray-500"
                  />
                </div>
                <div>
                  <label
                    htmlFor="whole-input"
                    className="mb-1 block text-sm font-medium text-gray-700 dark:text-gray-300"
                  >
                    {t.whole}
                  </label>
                  <input
                    id="whole-input"
                    type="text"
                    inputMode="decimal"
                    aria-label="Whole value"
                    placeholder="e.g. 200"
                    value={fmtNumber(whole)}
                    onChange={(e) => setWhole(stripFmt(e.target.value))}
                    className="w-full rounded-lg border border-gray-300 bg-gray-50 px-4 py-2.5 text-gray-900 placeholder-gray-400 transition focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 focus:outline-none dark:border-gray-600 dark:bg-gray-800 dark:text-gray-100 dark:placeholder-gray-500"
                  />
                </div>
              </div>

              <div
                className="rounded-lg bg-gray-50 p-4 dark:bg-gray-800"
                aria-live="polite"
              >
                <span className="text-sm text-gray-500 dark:text-gray-400">{t.result}: </span>
                <span className="text-lg font-semibold text-gray-900 dark:text-gray-100">
                  {whatPercentResult !== null ? `${fmtResult(whatPercentResult)}%` : "—"}
                </span>
              </div>
            </div>
          )}

          {/* Mode 3: Percentage change from X to Y */}
          {activeTab === "percentChange" && (
            <div id="panel-percentChange" role="tabpanel" className="space-y-5">
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="old-value-input"
                    className="mb-1 block text-sm font-medium text-gray-700 dark:text-gray-300"
                  >
                    {t.oldValue}
                  </label>
                  <input
                    id="old-value-input"
                    type="text"
                    inputMode="decimal"
                    aria-label="Old value"
                    placeholder="e.g. 100"
                    value={fmtNumber(oldValue)}
                    onChange={(e) => setOldValue(stripFmt(e.target.value))}
                    className="w-full rounded-lg border border-gray-300 bg-gray-50 px-4 py-2.5 text-gray-900 placeholder-gray-400 transition focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 focus:outline-none dark:border-gray-600 dark:bg-gray-800 dark:text-gray-100 dark:placeholder-gray-500"
                  />
                </div>
                <div>
                  <label
                    htmlFor="new-value-input"
                    className="mb-1 block text-sm font-medium text-gray-700 dark:text-gray-300"
                  >
                    {t.newValue}
                  </label>
                  <input
                    id="new-value-input"
                    type="text"
                    inputMode="decimal"
                    aria-label="New value"
                    placeholder="e.g. 150"
                    value={fmtNumber(newValue)}
                    onChange={(e) => setNewValue(stripFmt(e.target.value))}
                    className="w-full rounded-lg border border-gray-300 bg-gray-50 px-4 py-2.5 text-gray-900 placeholder-gray-400 transition focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 focus:outline-none dark:border-gray-600 dark:bg-gray-800 dark:text-gray-100 dark:placeholder-gray-500"
                  />
                </div>
              </div>

              <div
                className="rounded-lg bg-gray-50 p-4 dark:bg-gray-800"
                aria-live="polite"
              >
                <span className="text-sm text-gray-500 dark:text-gray-400">{t.result}: </span>
                {percentChangeResult !== null ? (
                  <span
                    className={`text-lg font-semibold ${
                      isIncrease ? "text-green-600 dark:text-green-400" : "text-red-600 dark:text-red-400"
                    }`}
                  >
                    {isIncrease ? "+" : ""}
                    {fmtResult(percentChangeResult)}%{" "}
                    <span className="text-sm font-normal">
                      ({isIncrease ? t.increase : t.decrease})
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
