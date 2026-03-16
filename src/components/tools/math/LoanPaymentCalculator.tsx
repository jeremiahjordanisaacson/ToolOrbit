"use client";

import { useState, useMemo } from "react";

function fmtNumber(val: string): string {
  const parts = val.replace(/[^0-9.\-]/g, "").split(".");
  parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  return parts.join(".");
}

function stripFmt(val: string): string {
  return val.replace(/,/g, "");
}

interface LoanResult {
  monthlyPayment: number;
  totalPayment: number;
  totalInterest: number;
  principalRatio: number;
  interestRatio: number;
}

function calculateLoan(
  principal: number,
  annualRate: number,
  years: number
): LoanResult | null {
  if (principal <= 0 || annualRate < 0 || years <= 0) return null;

  const n = years * 12;

  if (annualRate === 0) {
    const monthlyPayment = principal / n;
    return {
      monthlyPayment,
      totalPayment: principal,
      totalInterest: 0,
      principalRatio: 1,
      interestRatio: 0,
    };
  }

  const r = annualRate / 100 / 12;
  const compoundFactor = Math.pow(1 + r, n);
  const monthlyPayment = (principal * (r * compoundFactor)) / (compoundFactor - 1);

  if (!isFinite(monthlyPayment)) return null;

  const totalPayment = monthlyPayment * n;
  const totalInterest = totalPayment - principal;

  return {
    monthlyPayment,
    totalPayment,
    totalInterest,
    principalRatio: principal / totalPayment,
    interestRatio: totalInterest / totalPayment,
  };
}

function formatCurrency(value: number): string {
  if (!isFinite(value)) return "—";
  return (
    "$" +
    value.toLocaleString("en-US", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    })
  );
}

export default function LoanPaymentCalculator() {
  const [principal, setPrincipal] = useState<string>("250000");
  const [rate, setRate] = useState<string>("6.5");
  const [years, setYears] = useState<string>("30");

  const principalNum = principal === "" ? NaN : parseFloat(principal);
  const rateNum = rate === "" ? NaN : parseFloat(rate);
  const yearsNum = years === "" ? NaN : parseFloat(years);

  const hasValidInput =
    !isNaN(principalNum) &&
    !isNaN(rateNum) &&
    !isNaN(yearsNum) &&
    principalNum > 0 &&
    rateNum >= 0 &&
    yearsNum > 0;

  const result = useMemo(() => {
    if (!hasValidInput) return null;
    return calculateLoan(principalNum, rateNum, yearsNum);
  }, [hasValidInput, principalNum, rateNum, yearsNum]);

  return (
    <div className="mx-auto w-full max-w-xl">
      <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm dark:border-gray-700 dark:bg-gray-900">
        {/* Header */}
        <div className="px-6 pt-6 pb-4">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
            Loan Payment Calculator
          </h2>
          <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
            Calculate monthly payments, total cost, and interest breakdown
          </p>
        </div>

        {/* Inputs */}
        <div className="space-y-4 px-6 pb-5">
          {/* Loan Amount */}
          <div>
            <label
              htmlFor="loan-principal"
              className="mb-1 block text-sm font-medium text-gray-700 dark:text-gray-300"
            >
              Loan Amount ($)
            </label>
            <div className="relative">
              <span className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-lg font-medium text-gray-400">
                $
              </span>
              <input
                id="loan-principal"
                type="text"
                inputMode="decimal"
                value={fmtNumber(principal)}
                onChange={(e) => setPrincipal(stripFmt(e.target.value))}
                placeholder="250,000"
                aria-label="Loan amount in dollars"
                className="w-full rounded-lg border border-gray-300 bg-white py-3 pr-4 pl-9 text-lg text-gray-900 placeholder-gray-400 transition-colors focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-100 dark:placeholder-gray-500"
              />
            </div>
          </div>

          {/* Annual Interest Rate */}
          <div>
            <label
              htmlFor="loan-rate"
              className="mb-1 block text-sm font-medium text-gray-700 dark:text-gray-300"
            >
              Annual Interest Rate (%)
            </label>
            <div className="relative">
              <input
                id="loan-rate"
                type="number"
                min="0"
                max="100"
                step="0.1"
                value={rate}
                onChange={(e) => setRate(e.target.value)}
                placeholder="6.5"
                aria-label="Annual interest rate as a percentage"
                className="w-full rounded-lg border border-gray-300 bg-white py-3 pr-12 pl-4 text-lg text-gray-900 placeholder-gray-400 transition-colors focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-100 dark:placeholder-gray-500"
              />
              <span className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-lg font-medium text-gray-400">
                %
              </span>
            </div>
          </div>

          {/* Loan Term */}
          <div>
            <label
              htmlFor="loan-term"
              className="mb-1 block text-sm font-medium text-gray-700 dark:text-gray-300"
            >
              Loan Term (years)
            </label>
            <div className="relative">
              <input
                id="loan-term"
                type="number"
                min="1"
                max="50"
                step="1"
                value={years}
                onChange={(e) => setYears(e.target.value)}
                placeholder="30"
                aria-label="Loan term in years"
                className="w-full rounded-lg border border-gray-300 bg-white py-3 pr-16 pl-4 text-lg text-gray-900 placeholder-gray-400 transition-colors focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-100 dark:placeholder-gray-500"
              />
              <span className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-sm font-medium text-gray-400">
                years
              </span>
            </div>
          </div>
        </div>

        {/* Results */}
        <div className="px-6 pb-5" aria-live="polite">
          {result ? (
            <div className="space-y-3">
              <h3 className="text-sm font-medium text-gray-700 dark:text-gray-300">
                Payment Summary
              </h3>

              {/* Monthly Payment — highlighted */}
              <div className="rounded-xl border border-blue-200 bg-blue-50 px-5 py-4 dark:border-blue-800 dark:bg-blue-950/40">
                <p className="text-sm font-medium text-blue-600 dark:text-blue-400">
                  Monthly Payment
                </p>
                <p className="mt-1 text-3xl font-bold tabular-nums text-blue-700 dark:text-blue-300">
                  {formatCurrency(result.monthlyPayment)}
                </p>
              </div>

              {/* Total Payment & Total Interest */}
              <div className="grid grid-cols-2 gap-3">
                <div className="rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 dark:border-gray-700 dark:bg-gray-800">
                  <p className="text-xs font-medium text-gray-500 dark:text-gray-400">
                    Total Payment
                  </p>
                  <p className="mt-1 text-lg font-semibold tabular-nums text-gray-900 dark:text-white">
                    {formatCurrency(result.totalPayment)}
                  </p>
                </div>
                <div className="rounded-xl border border-amber-200 bg-amber-50 px-4 py-3 dark:border-amber-800 dark:bg-amber-950/40">
                  <p className="text-xs font-medium text-amber-600 dark:text-amber-400">
                    Total Interest
                  </p>
                  <p className="mt-1 text-lg font-semibold tabular-nums text-amber-700 dark:text-amber-300">
                    {formatCurrency(result.totalInterest)}
                  </p>
                </div>
              </div>

              {/* Visual Breakdown */}
              <div className="pt-2">
                <h4 className="mb-3 text-sm font-medium text-gray-700 dark:text-gray-300">
                  Cost Breakdown
                </h4>

                {/* Stacked bar */}
                <div
                  className="flex h-8 w-full overflow-hidden rounded-full"
                  role="img"
                  aria-label={`Principal is ${(result.principalRatio * 100).toFixed(1)}% and interest is ${(result.interestRatio * 100).toFixed(1)}% of total payment`}
                >
                  <div
                    className="flex items-center justify-center bg-blue-500 transition-all duration-500 dark:bg-blue-600"
                    style={{ width: `${result.principalRatio * 100}%` }}
                  >
                    {result.principalRatio >= 0.12 && (
                      <span className="truncate px-2 text-xs font-semibold text-white">
                        {(result.principalRatio * 100).toFixed(1)}%
                      </span>
                    )}
                  </div>
                  <div
                    className="flex items-center justify-center bg-amber-400 transition-all duration-500 dark:bg-amber-500"
                    style={{ width: `${result.interestRatio * 100}%` }}
                  >
                    {result.interestRatio >= 0.12 && (
                      <span className="truncate px-2 text-xs font-semibold text-gray-800">
                        {(result.interestRatio * 100).toFixed(1)}%
                      </span>
                    )}
                  </div>
                </div>

                {/* Legend */}
                <div className="mt-3 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm">
                  <div className="flex items-center gap-2">
                    <span className="inline-block h-3 w-3 rounded-full bg-blue-500 dark:bg-blue-600" />
                    <span className="text-gray-600 dark:text-gray-400">
                      Principal
                    </span>
                    <span className="font-semibold tabular-nums text-gray-900 dark:text-white">
                      {formatCurrency(principalNum)}
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="inline-block h-3 w-3 rounded-full bg-amber-400 dark:bg-amber-500" />
                    <span className="text-gray-600 dark:text-gray-400">
                      Interest
                    </span>
                    <span className="font-semibold tabular-nums text-amber-700 dark:text-amber-300">
                      {formatCurrency(result.totalInterest)}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div className="rounded-xl border border-gray-200 bg-gray-50 px-5 py-8 text-center dark:border-gray-700 dark:bg-gray-800">
              <p className="text-sm text-gray-400 dark:text-gray-500">
                Enter valid loan details to see your payment breakdown
              </p>
            </div>
          )}
        </div>

        {/* Formula Reference */}
        <div className="border-t border-gray-100 bg-gray-50 px-6 py-4 dark:border-gray-800 dark:bg-gray-950">
          <h3 className="mb-2 text-xs font-semibold uppercase tracking-wider text-gray-400">
            Formula
          </h3>
          <p className="font-mono text-sm text-gray-600 dark:text-gray-400">
            M = P × [r(1+r)ⁿ] / [(1+r)ⁿ − 1]
          </p>
          <p className="mt-1 text-xs text-gray-400 dark:text-gray-500">
            P = principal · r = monthly rate · n = total payments
          </p>
        </div>
      </div>
    </div>
  );
}
