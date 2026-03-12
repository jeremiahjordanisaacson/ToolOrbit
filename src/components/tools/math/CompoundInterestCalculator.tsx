"use client";

import { useState, useMemo } from "react";

interface YearlyBreakdown {
  year: number;
  balance: number;
  contributions: number;
  interestEarned: number;
}

type CompoundingFrequency = 1 | 2 | 4 | 12 | 365;

const COMPOUNDING_OPTIONS: { label: string; value: CompoundingFrequency }[] = [
  { label: "Annually", value: 1 },
  { label: "Semi-Annually", value: 2 },
  { label: "Quarterly", value: 4 },
  { label: "Monthly", value: 12 },
  { label: "Daily", value: 365 },
];

function formatCurrency(value: number): string {
  return `$${value.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
}

function calculateCompoundInterest(
  principal: number,
  annualRate: number,
  years: number,
  n: CompoundingFrequency,
  monthlyContribution: number
): { finalAmount: number; totalContributions: number; totalInterest: number; yearly: YearlyBreakdown[] } {
  const r = annualRate / 100;
  const pmt = monthlyContribution;
  const yearly: YearlyBreakdown[] = [];

  for (let year = 1; year <= years; year++) {
    const nt = n * year;
    const growthFactor = Math.pow(1 + r / n, nt);

    // A = P(1 + r/n)^(nt) + PMT_per_period × [((1 + r/n)^(nt) - 1) / (r/n)]
    let balance: number;
    if (r === 0) {
      balance = principal + pmt * 12 * year;
    } else {
      const pmtPerPeriod = (pmt * 12) / n;
      balance = principal * growthFactor + pmtPerPeriod * ((growthFactor - 1) / (r / n));
    }

    const contributions = principal + pmt * 12 * year;
    const interestEarned = balance - contributions;

    yearly.push({ year, balance, contributions, interestEarned });
  }

  const last = yearly[yearly.length - 1];
  const finalAmount = last?.balance ?? principal;
  const totalContributions = last?.contributions ?? principal;
  const totalInterest = last?.interestEarned ?? 0;

  return { finalAmount, totalContributions, totalInterest, yearly };
}

export default function CompoundInterestCalculator() {
  const [principal, setPrincipal] = useState<string>("10000");
  const [rate, setRate] = useState<string>("7");
  const [years, setYears] = useState<string>("10");
  const [frequency, setFrequency] = useState<CompoundingFrequency>(12);
  const [monthlyContribution, setMonthlyContribution] = useState<string>("0");

  const parsedPrincipal = Math.max(0, parseFloat(principal) || 0);
  const parsedRate = Math.max(0, parseFloat(rate) || 0);
  const parsedYears = Math.max(0, Math.floor(parseFloat(years) || 0));
  const parsedMonthly = Math.max(0, parseFloat(monthlyContribution) || 0);

  const results = useMemo(() => {
    if (parsedYears === 0) return null;
    return calculateCompoundInterest(parsedPrincipal, parsedRate, parsedYears, frequency, parsedMonthly);
  }, [parsedPrincipal, parsedRate, parsedYears, frequency, parsedMonthly]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-950 p-4 sm:p-6 lg:p-8">
      <div className="mx-auto max-w-4xl space-y-6">
        {/* Header */}
        <div className="text-center">
          <h1 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
            Compound Interest Calculator
          </h1>
          <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">
            See how your investments grow over time with compound interest.
          </p>
        </div>

        {/* Input Card */}
        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-800">
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {/* Principal */}
            <div className="flex flex-col gap-1.5">
              <label
                htmlFor="principal"
                className="text-sm font-medium text-slate-700 dark:text-slate-300"
              >
                Principal Amount ($)
              </label>
              <input
                id="principal"
                type="number"
                min="0"
                step="100"
                value={principal}
                onChange={(e) => setPrincipal(e.target.value)}
                aria-label="Principal amount in dollars"
                className="rounded-lg border border-slate-300 bg-slate-50 px-3 py-2.5 text-sm text-slate-900 transition focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20 dark:border-slate-600 dark:bg-slate-700 dark:text-white dark:focus:border-blue-400"
                placeholder="10000"
              />
            </div>

            {/* Annual Rate */}
            <div className="flex flex-col gap-1.5">
              <label
                htmlFor="rate"
                className="text-sm font-medium text-slate-700 dark:text-slate-300"
              >
                Annual Interest Rate (%)
              </label>
              <input
                id="rate"
                type="number"
                min="0"
                max="100"
                step="0.1"
                value={rate}
                onChange={(e) => setRate(e.target.value)}
                aria-label="Annual interest rate as a percentage"
                className="rounded-lg border border-slate-300 bg-slate-50 px-3 py-2.5 text-sm text-slate-900 transition focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20 dark:border-slate-600 dark:bg-slate-700 dark:text-white dark:focus:border-blue-400"
                placeholder="7"
              />
            </div>

            {/* Years */}
            <div className="flex flex-col gap-1.5">
              <label
                htmlFor="years"
                className="text-sm font-medium text-slate-700 dark:text-slate-300"
              >
                Number of Years
              </label>
              <input
                id="years"
                type="number"
                min="1"
                max="100"
                step="1"
                value={years}
                onChange={(e) => setYears(e.target.value)}
                aria-label="Investment duration in years"
                className="rounded-lg border border-slate-300 bg-slate-50 px-3 py-2.5 text-sm text-slate-900 transition focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20 dark:border-slate-600 dark:bg-slate-700 dark:text-white dark:focus:border-blue-400"
                placeholder="10"
              />
            </div>

            {/* Compounding Frequency */}
            <div className="flex flex-col gap-1.5">
              <label
                htmlFor="frequency"
                className="text-sm font-medium text-slate-700 dark:text-slate-300"
              >
                Compounding Frequency
              </label>
              <select
                id="frequency"
                value={frequency}
                onChange={(e) => setFrequency(Number(e.target.value) as CompoundingFrequency)}
                aria-label="Compounding frequency"
                className="rounded-lg border border-slate-300 bg-slate-50 px-3 py-2.5 text-sm text-slate-900 transition focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20 dark:border-slate-600 dark:bg-slate-700 dark:text-white dark:focus:border-blue-400"
              >
                {COMPOUNDING_OPTIONS.map((opt) => (
                  <option key={opt.value} value={opt.value}>
                    {opt.label} ({opt.value}x/year)
                  </option>
                ))}
              </select>
            </div>

            {/* Monthly Contribution */}
            <div className="flex flex-col gap-1.5">
              <label
                htmlFor="monthly"
                className="text-sm font-medium text-slate-700 dark:text-slate-300"
              >
                Monthly Contribution ($)
              </label>
              <input
                id="monthly"
                type="number"
                min="0"
                step="50"
                value={monthlyContribution}
                onChange={(e) => setMonthlyContribution(e.target.value)}
                aria-label="Monthly contribution amount in dollars"
                className="rounded-lg border border-slate-300 bg-slate-50 px-3 py-2.5 text-sm text-slate-900 transition focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20 dark:border-slate-600 dark:bg-slate-700 dark:text-white dark:focus:border-blue-400"
                placeholder="0"
              />
            </div>
          </div>
        </div>

        {/* Results Summary */}
        {results && (
          <div className="grid gap-4 sm:grid-cols-3">
            <div className="rounded-2xl border border-emerald-200 bg-emerald-50 p-5 shadow-sm dark:border-emerald-800 dark:bg-emerald-950/40">
              <p className="text-xs font-semibold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">
                Final Amount
              </p>
              <p className="mt-1 text-2xl font-bold text-emerald-700 dark:text-emerald-300">
                {formatCurrency(results.finalAmount)}
              </p>
            </div>
            <div className="rounded-2xl border border-blue-200 bg-blue-50 p-5 shadow-sm dark:border-blue-800 dark:bg-blue-950/40">
              <p className="text-xs font-semibold uppercase tracking-wider text-blue-600 dark:text-blue-400">
                Total Contributions
              </p>
              <p className="mt-1 text-2xl font-bold text-blue-700 dark:text-blue-300">
                {formatCurrency(results.totalContributions)}
              </p>
            </div>
            <div className="rounded-2xl border border-violet-200 bg-violet-50 p-5 shadow-sm dark:border-violet-800 dark:bg-violet-950/40">
              <p className="text-xs font-semibold uppercase tracking-wider text-violet-600 dark:text-violet-400">
                Total Interest Earned
              </p>
              <p className="mt-1 text-2xl font-bold text-violet-700 dark:text-violet-300">
                {formatCurrency(results.totalInterest)}
              </p>
            </div>
          </div>
        )}

        {/* Year-by-Year Table */}
        {results && results.yearly.length > 0 && (
          <div className="rounded-2xl border border-slate-200 bg-white shadow-sm dark:border-slate-700 dark:bg-slate-800">
            <div className="px-6 py-4 border-b border-slate-200 dark:border-slate-700">
              <h2 className="text-lg font-semibold text-slate-900 dark:text-white">
                Year-by-Year Growth
              </h2>
            </div>
            <div className="max-h-[28rem] overflow-auto">
              <table className="w-full text-sm" aria-label="Year-by-year compound interest breakdown">
                <thead className="sticky top-0 bg-slate-50 dark:bg-slate-700/80">
                  <tr>
                    <th className="px-6 py-3 text-left font-semibold text-slate-600 dark:text-slate-300">
                      Year
                    </th>
                    <th className="px-6 py-3 text-right font-semibold text-slate-600 dark:text-slate-300">
                      Balance
                    </th>
                    <th className="px-6 py-3 text-right font-semibold text-slate-600 dark:text-slate-300">
                      Contributions
                    </th>
                    <th className="px-6 py-3 text-right font-semibold text-slate-600 dark:text-slate-300">
                      Interest Earned
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 dark:divide-slate-700">
                  {results.yearly.map((row) => (
                    <tr
                      key={row.year}
                      className="transition-colors hover:bg-slate-50 dark:hover:bg-slate-700/40"
                    >
                      <td className="px-6 py-3 font-medium text-slate-900 dark:text-white">
                        {row.year}
                      </td>
                      <td className="px-6 py-3 text-right tabular-nums text-slate-700 dark:text-slate-300">
                        {formatCurrency(row.balance)}
                      </td>
                      <td className="px-6 py-3 text-right tabular-nums text-slate-700 dark:text-slate-300">
                        {formatCurrency(row.contributions)}
                      </td>
                      <td className="px-6 py-3 text-right tabular-nums text-slate-700 dark:text-slate-300">
                        {formatCurrency(row.interestEarned)}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* Empty state */}
        {!results && (
          <div className="rounded-2xl border border-dashed border-slate-300 bg-white/50 py-12 text-center dark:border-slate-600 dark:bg-slate-800/50">
            <p className="text-sm text-slate-500 dark:text-slate-400">
              Enter a valid number of years to see your projection.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
