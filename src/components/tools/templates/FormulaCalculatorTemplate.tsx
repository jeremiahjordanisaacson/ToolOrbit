"use client";

import { useState, useCallback } from "react";

/* ─── Formulas Registry ─── */
const formulas: Record<string, (values: Record<string, number>) => number | string> = {
  "circle-area": (v) => Math.PI * v.radius * v.radius,
  "circle-circumference": (v) => 2 * Math.PI * v.radius,
  "triangle-area": (v) => 0.5 * v.base * v.height,
  "rectangle-area": (v) => v.length * v.width,
  "sphere-volume": (v) => (4 / 3) * Math.PI * Math.pow(v.radius, 3),
  "sphere-surface": (v) => 4 * Math.PI * v.radius * v.radius,
  "cylinder-volume": (v) => Math.PI * v.radius * v.radius * v.height,
  "cone-volume": (v) => (1 / 3) * Math.PI * v.radius * v.radius * v.height,
  "pythagorean": (v) => Math.sqrt(v.a * v.a + v.b * v.b),
  "quadratic": (v) => {
    const d = v.b * v.b - 4 * v.a * v.c;
    if (d < 0) return "No real roots";
    const x1 = (-v.b + Math.sqrt(d)) / (2 * v.a);
    const x2 = (-v.b - Math.sqrt(d)) / (2 * v.a);
    return `x₁ = ${x1.toFixed(4)}, x₂ = ${x2.toFixed(4)}`;
  },
  "gcd": (v) => {
    let a = Math.abs(v.a), b = Math.abs(v.b);
    while (b) { [a, b] = [b, a % b]; }
    return a;
  },
  "lcm": (v) => {
    let a = Math.abs(v.a), b = Math.abs(v.b);
    let g = a, t = b;
    while (t) { [g, t] = [t, g % t]; }
    return (a * b) / g;
  },
  "factorial": (v) => {
    let r = 1;
    for (let i = 2; i <= v.n; i++) r *= i;
    return r;
  },
  "fibonacci": (v) => {
    if (v.n <= 1) return v.n;
    let a = 0, b = 1;
    for (let i = 2; i <= v.n; i++) { [a, b] = [b, a + b]; }
    return b;
  },
  "simple-interest": (v) => v.principal * (v.rate / 100) * v.years,
  "compound-interest": (v) =>
    v.principal * Math.pow(1 + v.rate / 100 / v.n, v.n * v.years) - v.principal,
  "discount": (v) => v.price * (1 - v.discount / 100),
  "markup": (v) => v.cost * (1 + v.markup / 100),
  "margin": (v) => ((v.price - v.cost) / v.price) * 100,
  "sales-tax": (v) => v.price * (1 + v.tax / 100),
  "roi": (v) => ((v.gain - v.cost) / v.cost) * 100,
  "bmi-metric": (v) => v.weight / ((v.height / 100) * (v.height / 100)),
  "bmr-male": (v) => 88.362 + 13.397 * v.weight + 4.799 * v.height - 5.677 * v.age,
  "bmr-female": (v) => 447.593 + 9.247 * v.weight + 3.098 * v.height - 4.33 * v.age,
  "pace": (v) => v.time / v.distance,
  "speed-from-distance": (v) => v.distance / v.time,
  "hourly-to-salary": (v) => v.rate * v.hours * 52,
  "salary-to-hourly": (v) => v.salary / (v.hours * 52),
  "tip": (v) => v.bill * (v.tip / 100),
  "percentage": (v) => (v.part / v.whole) * 100,
  "percentage-change": (v) => ((v.newVal - v.oldVal) / v.oldVal) * 100,
  "trapezoid-area": (v) => 0.5 * (v.a + v.b) * v.height,
  "ellipse-area": (v) => Math.PI * v.a * v.b,
  "cube-volume": (v) => Math.pow(v.side, 3),
  "cube-surface": (v) => 6 * v.side * v.side,
};

interface FieldConfig {
  id: string;
  label: string;
  type: "number" | "select";
  default?: number;
  options?: Array<{ label: string; value: string }>;
  step?: number;
  min?: number;
  max?: number;
  suffix?: string;
}

export default function FormulaCalculatorTemplate({
  config,
}: {
  config: Record<string, unknown>;
}) {
  const { fields, formulaId, resultLabel, resultSuffix } = config as {
    fields: FieldConfig[];
    formulaId: string;
    resultLabel: string;
    resultSuffix?: string;
  };

  const getInitialValues = useCallback(() => {
    const vals: Record<string, string> = {};
    for (const f of fields) {
      vals[f.id] = f.default !== undefined ? String(f.default) : "";
    }
    return vals;
  }, [fields]);

  const [values, setValues] = useState<Record<string, string>>(getInitialValues);
  const [copied, setCopied] = useState(false);

  const updateValue = (id: string, val: string) => {
    setValues((prev) => ({ ...prev, [id]: val }));
  };

  const formulaFn = formulas[formulaId];
  const allFilled = fields.every((f) => values[f.id] !== "");

  let result: string | null = null;
  if (formulaFn && allFilled) {
    try {
      const numVals: Record<string, number> = {};
      for (const f of fields) numVals[f.id] = parseFloat(values[f.id]);
      const raw = formulaFn(numVals);
      if (typeof raw === "string") {
        result = raw;
      } else if (Number.isFinite(raw)) {
        result = Number.isInteger(raw) ? raw.toLocaleString() : raw.toFixed(4);
      } else {
        result = "Invalid result";
      }
    } catch {
      result = "Calculation error";
    }
  }

  const handleCopy = useCallback(async () => {
    if (!result) return;
    await navigator.clipboard.writeText(result + (resultSuffix ? ` ${resultSuffix}` : ""));
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  }, [result, resultSuffix]);

  return (
    <div className="mx-auto w-full max-w-xl space-y-6">
      <div className="rounded-2xl border border-gray-200 bg-white shadow-lg dark:border-gray-700 dark:bg-gray-900">
        <div className="px-6 py-5 space-y-5">
          {!formulaFn && (
            <div
              className="rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700 dark:border-red-800 dark:bg-red-950/30 dark:text-red-400"
              role="alert"
            >
              Formula &quot;{formulaId}&quot; not found.
            </div>
          )}

          {/* Dynamic Fields */}
          <div className="grid gap-4 sm:grid-cols-2">
            {fields.map((field) => (
              <div key={field.id}>
                <label
                  htmlFor={`field-${field.id}`}
                  className="mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-300"
                >
                  {field.label}
                  {field.suffix && (
                    <span className="ml-1 text-xs text-gray-400">
                      ({field.suffix})
                    </span>
                  )}
                </label>
                {field.type === "select" && field.options ? (
                  <select
                    id={`field-${field.id}`}
                    value={values[field.id] ?? ""}
                    onChange={(e) => updateValue(field.id, e.target.value)}
                    aria-label={field.label}
                    className="w-full rounded-lg border border-gray-300 bg-gray-50 px-3 py-2.5 text-sm text-gray-900 transition focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/30 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-100"
                  >
                    <option value="">Select…</option>
                    {field.options.map((opt) => (
                      <option key={opt.value} value={opt.value}>
                        {opt.label}
                      </option>
                    ))}
                  </select>
                ) : (
                  <input
                    id={`field-${field.id}`}
                    type="number"
                    inputMode="decimal"
                    value={values[field.id] ?? ""}
                    onChange={(e) => updateValue(field.id, e.target.value)}
                    step={field.step}
                    min={field.min}
                    max={field.max}
                    placeholder={`Enter ${field.label.toLowerCase()}`}
                    aria-label={field.label}
                    className="w-full rounded-lg border border-gray-300 bg-gray-50 px-3 py-2.5 text-sm text-gray-900 transition focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/30 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-100"
                  />
                )}
              </div>
            ))}
          </div>

          {/* Result */}
          <div className="rounded-lg border border-gray-200 bg-gradient-to-br from-blue-50 to-indigo-50 p-5 dark:border-gray-700 dark:from-blue-950/40 dark:to-indigo-950/40">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs font-semibold uppercase tracking-wide text-gray-500 dark:text-gray-400">
                  {resultLabel}
                </p>
                <p className="mt-1 text-2xl font-bold text-gray-900 dark:text-white">
                  {result ?? (
                    <span className="text-base font-normal text-gray-400">
                      Enter values to calculate
                    </span>
                  )}
                  {result && resultSuffix && (
                    <span className="ml-1 text-base font-normal text-gray-500">
                      {resultSuffix}
                    </span>
                  )}
                </p>
              </div>
              <button
                onClick={handleCopy}
                disabled={!result}
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
  );
}
