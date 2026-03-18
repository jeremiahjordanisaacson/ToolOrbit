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

const PRESET_TIPS = [10, 15, 18, 20, 25] as const;

function formatCurrency(amount: number): string {
  return "$" + amount.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 });
}

export default function TipCalculator() {
  const t = useToolUI();
  const [billAmount, setBillAmount] = useState<string>("");
  const [tipPercent, setTipPercent] = useState<number | null>(18);
  const [customTip, setCustomTip] = useState<string>("");
  const [people, setPeople] = useState<string>("1");

  const bill = parseFloat(billAmount) || 0;
  const tip = tipPercent ?? (parseFloat(customTip) || 0);
  const numPeople = Math.max(1, parseInt(people) || 1);

  const tipAmount = bill * (tip / 100);
  const total = bill + tipAmount;
  const perPerson = total / numPeople;

  function selectPreset(percent: number) {
    setTipPercent(percent);
    setCustomTip("");
  }

  function handleCustomTipChange(value: string) {
    setCustomTip(value);
    setTipPercent(null);
  }

  return (
    <div className="mx-auto max-w-lg px-4">
      <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
        <h2 className="mb-6 text-2xl font-semibold text-gray-900">
          Tip Calculator
        </h2>

        {/* Bill Amount */}
        <div className="mb-5">
          <label
            htmlFor="bill-amount"
            className="mb-1.5 block text-sm font-medium text-gray-700"
          >
            Bill Amount
          </label>
          <div className="relative">
            <span className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400">
              $
            </span>
            <input
              id="bill-amount"
              type="text"
              inputMode="decimal"
              placeholder="0.00"
              value={fmtNumber(billAmount)}
              onChange={(e) => setBillAmount(stripFmt(e.target.value))}
              aria-label="Bill amount in dollars"
              className="w-full rounded-xl border border-gray-300 py-3 pl-8 pr-4 text-gray-900 placeholder:text-gray-400 focus:border-primary-700 focus:outline-none focus:ring-2 focus:ring-primary-200"
            />
          </div>
        </div>

        {/* Tip Percentage */}
        <div className="mb-5">
          <label className="mb-1.5 block text-sm font-medium text-gray-700">
            Tip Percentage
          </label>
          <div className="grid grid-cols-3 gap-2 sm:grid-cols-5">
            {PRESET_TIPS.map((pct) => (
              <button
                key={pct}
                type="button"
                onClick={() => selectPreset(pct)}
                aria-label={`${pct} percent tip`}
                aria-pressed={tipPercent === pct}
                className={`rounded-lg px-3 py-2.5 text-sm font-medium transition-colors ${
                  tipPercent === pct
                    ? "bg-primary-700 text-white shadow-sm"
                    : "border border-gray-300 bg-white text-gray-700 hover:border-primary-300 hover:bg-primary-50 hover:text-primary-700"
                }`}
              >
                {pct}%
              </button>
            ))}
          </div>
          <div className="mt-2">
            <div className="relative">
              <input
                id="custom-tip"
                type="number"
                min="0"
                step="1"
                placeholder={t.customPercent}
                value={customTip}
                onChange={(e) => handleCustomTipChange(e.target.value)}
                aria-label="Custom tip percentage"
                className={`w-full rounded-xl border py-3 pl-4 pr-8 text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-200 ${
                  tipPercent === null && customTip
                    ? "border-primary-700 focus:border-primary-700"
                    : "border-gray-300 focus:border-primary-700"
                }`}
              />
              <span className="pointer-events-none absolute right-3.5 top-1/2 -translate-y-1/2 text-gray-400">
                %
              </span>
            </div>
          </div>
        </div>

        {/* Number of People */}
        <div className="mb-6">
          <label
            htmlFor="num-people"
            className="mb-1.5 block text-sm font-medium text-gray-700"
          >
            Split Between
          </label>
          <div className="relative">
            <input
              id="num-people"
              type="number"
              min="1"
              step="1"
              value={people}
              onChange={(e) => setPeople(e.target.value)}
              aria-label="Number of people to split the bill"
              className="w-full rounded-xl border border-gray-300 py-3 pl-4 pr-16 text-gray-900 placeholder:text-gray-400 focus:border-primary-700 focus:outline-none focus:ring-2 focus:ring-primary-200"
            />
            <span className="pointer-events-none absolute right-3.5 top-1/2 -translate-y-1/2 text-sm text-gray-400">
              {numPeople === 1 ? t.person : t.people}
            </span>
          </div>
        </div>

        {/* Results */}
        <div className="rounded-xl bg-gray-50 p-5">
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-600">{t.tipAmount}</span>
              <span className="text-lg font-semibold text-gray-900">
                {formatCurrency(tipAmount)}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-600">{t.totalWithTip}</span>
              <span className="text-lg font-semibold text-gray-900">
                {formatCurrency(total)}
              </span>
            </div>
            {numPeople > 1 && (
              <div className="border-t border-gray-200 pt-3">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-gray-700">
                    {t.perPerson}
                  </span>
                  <span className="text-xl font-bold text-primary-700">
                    {formatCurrency(perPerson)}
                  </span>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
