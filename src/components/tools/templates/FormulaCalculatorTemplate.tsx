"use client";

import { useState, useCallback } from "react";
import { usePathname } from "next/navigation";
import { useToolUI } from "@/lib/i18n/ToolUIContext";
import { translateFormulaLabel, getEnterPrefix, getSelectPlaceholder } from "@/lib/i18n/formula-label-translations";
import { Locale } from "@/lib/i18n/config";
const formulas: Record<string, (values: Record<string, number | string>) => number | string> = {
  // Geometry
  "circle-area": (v) => Math.PI * +v.radius * +v.radius,
  "circle-circumference": (v) => 2 * Math.PI * +v.radius,
  "triangle-area": (v) => 0.5 * +v.base * +v.height,
  "rectangle-area": (v) => +v.length * +v.width,
  "rectangle-perimeter": (v) => 2 * (+v.length + +v.width),
  "sphere-volume": (v) => (4 / 3) * Math.PI * Math.pow(+v.radius, 3),
  "sphere-surface": (v) => 4 * Math.PI * +v.radius * +v.radius,
  "sphere-surface-area": (v) => 4 * Math.PI * +v.radius * +v.radius,
  "cylinder-volume": (v) => Math.PI * +v.radius * +v.radius * +v.height,
  "cone-volume": (v) => (1 / 3) * Math.PI * +v.radius * +v.radius * +v.height,
  "trapezoid-area": (v) => 0.5 * (+v.sideA + +v.sideB) * +v.height,
  "parallelogram-area": (v) => +v.base * +v.height,
  "ellipse-area": (v) => Math.PI * +v.semiMajor * +v.semiMinor,
  "cube-volume": (v) => Math.pow(+v.side, 3),
  "cube-surface": (v) => 6 * +v.side * +v.side,
  "pythagorean": (v) => Math.sqrt(+v.a * +v.a + +v.b * +v.b),
  "pythagorean-theorem": (v) => Math.sqrt(+v.sideA * +v.sideA + +v.sideB * +v.sideB),
  "diagonal": (v) => Math.sqrt(+v.length * +v.length + +v.width * +v.width),

  // Math
  "quadratic": (v) => {
    const a = +v.a, b = +v.b, c = +v.c;
    const d = b * b - 4 * a * c;
    if (d < 0) return "No real roots";
    const x1 = (-b + Math.sqrt(d)) / (2 * a);
    const x2 = (-b - Math.sqrt(d)) / (2 * a);
    return x1 === x2 ? `x = ${x1.toFixed(4)}` : `x₁ = ${x1.toFixed(4)}, x₂ = ${x2.toFixed(4)}`;
  },
  "gcd": (v) => {
    let a = Math.abs(+v.a), b = Math.abs(+v.b);
    while (b) { [a, b] = [b, a % b]; }
    return a;
  },
  "lcm": (v) => {
    let a = Math.abs(+v.a), b = Math.abs(+v.b);
    let g = a, t2 = b;
    while (t2) { [g, t2] = [t2, g % t2]; }
    return (a * b) / g;
  },
  "factorial": (v) => {
    const n = Math.min(+v.n, 170);
    let r = 1;
    for (let i = 2; i <= n; i++) r *= i;
    return r;
  },
  "fibonacci": (v) => {
    const n = +v.n;
    if (n <= 1) return n;
    let a = 0, b = 1;
    for (let i = 2; i <= n; i++) { [a, b] = [b, a + b]; }
    return b;
  },
  "prime-check": (v) => {
    const n = Math.floor(+v.n);
    if (n < 2) return "Not prime";
    for (let i = 2; i <= Math.sqrt(n); i++) { if (n % i === 0) return `Not prime (divisible by ${i})`; }
    return `${n} is prime`;
  },
  "square-root": (v) => Math.sqrt(+v.n),
  "cube-root": (v) => Math.cbrt(+v.n),
  "exponent": (v) => Math.pow(+v.base, +v.exponent),
  "logarithm": (v) => Math.log(+v.number) / Math.log(+v.base),
  "modulo": (v) => +v.a % +v.b,
  "average": (v) => {
    const nums = String(v.values).split(",").map(Number).filter(n => !isNaN(n));
    return nums.length ? nums.reduce((a, b) => a + b, 0) / nums.length : 0;
  },
  "mean": (v) => {
    const nums = String(v.values).split(",").map(Number).filter(n => !isNaN(n));
    return nums.length ? nums.reduce((a, b) => a + b, 0) / nums.length : 0;
  },
  "median": (v) => {
    const nums = String(v.values).split(",").map(Number).filter(n => !isNaN(n)).sort((a, b) => a - b);
    if (!nums.length) return 0;
    const mid = Math.floor(nums.length / 2);
    return nums.length % 2 ? nums[mid] : (nums[mid - 1] + nums[mid]) / 2;
  },
  "std-dev": (v) => {
    const nums = String(v.values).split(",").map(Number).filter(n => !isNaN(n));
    if (nums.length < 2) return 0;
    const mean = nums.reduce((a, b) => a + b, 0) / nums.length;
    const variance = nums.reduce((sum, x) => sum + (x - mean) ** 2, 0) / nums.length;
    return Math.sqrt(variance);
  },
  "ratio": (v) => (+v.b * +v.c) / +v.a,
  "scientific-notation": (v) => {
    const n = +String(v.number);
    return isNaN(n) ? "Invalid number" : n.toExponential();
  },
  "combination": (v) => {
    const n = +v.n, r = +v.r;
    let result = 1;
    for (let i = 0; i < r; i++) result = result * (n - i) / (i + 1);
    return Math.round(result);
  },
  "permutation": (v) => {
    const n = +v.n, r = +v.r;
    let result = 1;
    for (let i = 0; i < r; i++) result *= (n - i);
    return result;
  },

  // Finance
  "simple-interest": (v) => +v.principal * (+v.rate / 100) * +v.years,
  "compound-interest": (v) =>
    +v.principal * Math.pow(1 + +v.rate / 100 / +v.n, +v.n * +v.years) - +v.principal,
  "discount": (v) => +v.price * (1 - +v.discount / 100),
  "markup": (v) => +v.cost * (1 + +v.markup / 100),
  "margin": (v) => ((+v.price - +v.cost) / +v.price) * 100,
  "sales-tax": (v) => +v.price * (1 + +v.tax / 100),
  "vat": (v) => +v.price * (1 + +v.vat / 100),
  "roi": (v) => ((+v.gain - +v.cost) / +v.cost) * 100,
  "profit": (v) => +v.revenue - +v.costs,
  "break-even": (v) => +v.fixedCosts / (+v.price - +v.variableCost),
  "hourly-to-salary": (v) => +v.hourlyRate * +v.hoursPerWeek * 52,
  "salary-to-hourly": (v) => +v.salary / (+v.hoursPerWeek * 52),
  "overtime": (v) => { const ot = Math.max(+v.hours - 40, 0); return ot * +v.rate * 1.5; },
  "inflation": (v) => +v.amount * Math.pow(1 + +v.rate / 100, +v.years),
  "future-value": (v) => +v.presentValue * Math.pow(1 + +v.rate / 100, +v.years),
  "present-value": (v) => +v.futureValue / Math.pow(1 + +v.rate / 100, +v.years),
  "savings-goal": (v) => { const r = +v.rate / 100 / 12; const n = +v.months; return r > 0 ? (+v.goal * r) / (Math.pow(1 + r, n) - 1) : +v.goal / n; },
  "rule-of-72": (v) => 72 / +v.rate,
  "percent-increase": (v) => ((+v.newVal - +v.original) / +v.original) * 100,
  "percent-decrease": (v) => ((+v.original - +v.newVal) / +v.original) * 100,
  "fuel-cost": (v) => (+v.distance / +v.mpg) * +v.price,
  "paint": (v) => { const wallArea = 2 * (+v.length + +v.width) * +v.height; return (wallArea * +v.coats) / 350; },
  "concrete": (v) => (+v.length * +v.width * (+v.depth / 12)) / 27,
  "electricity-cost": (v) => (+v.watts * +v.hours * +v.days) / 1000 * +v.rate,
  "ohms-law": (v) => {
    if (+v.voltage && +v.current) return `R = ${(+v.voltage / +v.current).toFixed(4)} Ω`;
    if (+v.voltage && +v.resistance) return `I = ${(+v.voltage / +v.resistance).toFixed(4)} A`;
    if (+v.current && +v.resistance) return `V = ${(+v.current * +v.resistance).toFixed(4)} V`;
    return "Enter any two values";
  },
  "download-time": (v) => { const seconds = (+v.fileSize * 8) / +v.speed; return seconds < 60 ? `${seconds.toFixed(1)} seconds` : `${(seconds / 60).toFixed(1)} minutes`; },

  // Health
  "bmi-metric": (v) => +v.weight / ((+v.height / 100) * (+v.height / 100)),
  "bmr": (v) => +v.gender === 1 ? 88.362 + 13.397 * +v.weight + 4.799 * +v.height - 5.677 * +v.age : 447.593 + 9.247 * +v.weight + 3.098 * +v.height - 4.33 * +v.age,
  "bmr-male": (v) => 88.362 + 13.397 * +v.weight + 4.799 * +v.height - 5.677 * +v.age,
  "bmr-female": (v) => 447.593 + 9.247 * +v.weight + 3.098 * +v.height - 4.33 * +v.age,
  "tdee": (v) => +v.bmr * +v.activity,
  "calorie": (v) => { const bmr = +v.gender === 1 ? 88.362 + 13.397 * +v.weight + 4.799 * +v.height - 5.677 * +v.age : 447.593 + 9.247 * +v.weight + 3.098 * +v.height - 4.33 * +v.age; return bmr * +v.activity; },
  "ideal-weight": (v) => { const h = +v.height; return `${(22 * (h / 100) * (h / 100)).toFixed(1)} kg (BMI 22)`; },
  "body-fat": (v) => { const bmi = +v.weight / ((+v.height / 100) ** 2); return (1.2 * bmi + 0.23 * +v.age - 10.8 * +v.gender - 5.4); },
  "water-intake": (v) => +v.weight * 0.033,
  "protein": (v) => +v.weight * +v.activity,
  "macro": (v) => { const cal = +v.calories; const p = cal * 0.3 / 4; const f = cal * 0.25 / 9; const c = cal * 0.45 / 4; return `Protein: ${p.toFixed(0)}g, Fat: ${f.toFixed(0)}g, Carbs: ${c.toFixed(0)}g`; },
  "pace": (v) => +v.time / +v.distance,
  "speed-from-distance": (v) => +v.distance / +v.time,
  "running-speed": (v) => +v.distance / +v.time,
  "walking-calories": (v) => +v.weight * 0.035 * +v.time,
  "steps-to-distance": (v) => (+v.steps * 0.762) / 1000,
  "heart-rate-zones": (v) => { const max = 220 - +v.age; return `Zone 1: ${Math.round(max * 0.5)}-${Math.round(max * 0.6)}, Zone 2: ${Math.round(max * 0.6)}-${Math.round(max * 0.7)}, Zone 3: ${Math.round(max * 0.7)}-${Math.round(max * 0.8)}, Zone 4: ${Math.round(max * 0.8)}-${Math.round(max * 0.9)}, Zone 5: ${Math.round(max * 0.9)}-${max}`; },

  // Education
  "weighted-grade": (v) => { const s = String(v.scores).split(",").map(Number); const w = String(v.weights).split(",").map(Number); if (s.length !== w.length) return "Mismatched counts"; const totalW = w.reduce((a, b) => a + b, 0); return s.reduce((sum, sc, i) => sum + sc * w[i], 0) / totalW; },
  "gpa": (v) => { const g = String(v.grades).split(",").map(Number); const c = String(v.credits).split(",").map(Number); const total = c.reduce((a, b) => a + b, 0); return g.reduce((sum, gr, i) => sum + gr * c[i], 0) / total; },
  "final-grade": (v) => (+v.desired - +v.current * (1 - +v.weight / 100)) / (+v.weight / 100),
  "test-score": (v) => (+v.correct / +v.total) * 100,
  "letter-grade": (v) => { const p = +v.percentage; if (p >= 93) return "A"; if (p >= 90) return "A-"; if (p >= 87) return "B+"; if (p >= 83) return "B"; if (p >= 80) return "B-"; if (p >= 77) return "C+"; if (p >= 73) return "C"; if (p >= 70) return "C-"; if (p >= 67) return "D+"; if (p >= 63) return "D"; if (p >= 60) return "D-"; return "F"; },

  // CSS/Dev
  "px-to-rem": (v) => +v.px / +v.base,
  "rem-to-px": (v) => +v.rem * +v.base,
  "aspect-ratio": (v) => { const g = gcd(+v.width, +v.height); return `${+v.width / g}:${+v.height / g}`; },
  "ppi": (v) => Math.sqrt(+v.widthPx * +v.widthPx + +v.heightPx * +v.heightPx) / +v.diagonal,

  // General
  "percentage": (v) => (+v.part / +v.whole) * 100,
  "percentage-change": (v) => ((+v.newVal - +v.oldVal) / +v.oldVal) * 100,
  "tip": (v) => +v.bill * (+v.tip / 100),
};

function gcd(a: number, b: number): number {
  a = Math.abs(a); b = Math.abs(b);
  while (b) { [a, b] = [b, a % b]; }
  return a;
}

interface FieldConfig {
  id: string;
  label: string;
  type: "number" | "select" | "text";
  default?: number;
  options?: Array<{ label: string; value: string }>;
  step?: number;
  min?: number;
  max?: number;
  suffix?: string;
}

// Detect if a suffix indicates currency
function isCurrencySuffix(suffix?: string): boolean {
  if (!suffix) return false;
  return /^\$|USD|€|£|¥|R\$|₩|₹/.test(suffix.trim());
}

// Detect if a field likely holds a monetary value
function isMoneyField(field: FieldConfig, resultSuffix?: string): boolean {
  const label = field.label.toLowerCase();
  const moneyKeywords = ["salary", "price", "cost", "amount", "income", "revenue", "investment", "principal", "value", "budget", "payment", "bill", "loan", "rate", "wage", "gain", "goal"];
  if (moneyKeywords.some(k => label.includes(k))) return true;
  if (field.suffix && isCurrencySuffix(field.suffix)) return true;
  if (field.step === 0.01) return true;
  return false;
}

// Format number with commas
function formatWithCommas(value: string): string {
  const num = value.replace(/[^0-9.\-]/g, "");
  const parts = num.split(".");
  parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  return parts.join(".");
}

// Strip commas for calculation
function stripCommas(value: string): string {
  return value.replace(/,/g, "");
}

// Format result based on suffix
function formatResult(raw: number, resultSuffix?: string): string {
  if (isCurrencySuffix(resultSuffix)) {
    return raw.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 });
  }
  if (Number.isInteger(raw)) {
    return raw.toLocaleString("en-US");
  }
  // For non-currency, use reasonable precision
  const abs = Math.abs(raw);
  if (abs >= 1000) return raw.toLocaleString("en-US", { maximumFractionDigits: 2 });
  if (abs >= 1) return raw.toLocaleString("en-US", { maximumFractionDigits: 4 });
  return raw.toPrecision(6);
}

// Input component that shows commas for large numbers and $ for money fields
function MoneyAwareInput({
  field,
  value,
  onChange,
  resultSuffix,
  locale,
  currencySymbol,
}: {
  field: FieldConfig;
  value: string;
  onChange: (val: string) => void;
  resultSuffix?: string;
  locale: Locale;
  currencySymbol: string;
}) {
  const isMoney = isMoneyField(field, resultSuffix);
  const isText = field.type === "text";

  const tl = (label: string) => translateFormulaLabel(label, locale);
  const placeholderText = `${getEnterPrefix(locale)} ${tl(field.label)}`;

  // For text fields, just render a plain text input
  if (isText) {
    return (
      <input
        id={`field-${field.id}`}
        type="text"
        inputMode="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholderText}
        aria-label={tl(field.label)}
        className="w-full rounded-lg border border-gray-300 bg-gray-50 px-3 py-2.5 text-sm text-gray-900 transition focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/30"
      />
    );
  }

  // For number fields that hold money or large values, show formatted display
  if (isMoney) {
    const displayValue = value ? formatWithCommas(value) : "";
    return (
      <div className="relative">
        <span className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-sm text-gray-400">{currencySymbol}</span>
        <input
          id={`field-${field.id}`}
          type="text"
          inputMode="decimal"
          value={displayValue}
          onChange={(e) => {
            const raw = e.target.value.replace(/[^0-9.\-]/g, "");
            onChange(raw);
          }}
          placeholder={placeholderText}
          aria-label={tl(field.label)}
          className="w-full rounded-lg border border-gray-300 bg-gray-50 py-2.5 pl-7 pr-3 text-sm text-gray-900 transition focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/30"
        />
      </div>
    );
  }

  // Standard number input — still format with commas for large numbers
  const numVal = parseFloat(value);
  const showFormatted = !isNaN(numVal) && Math.abs(numVal) >= 1000 && !value.endsWith(".");
  const displayValue = showFormatted ? formatWithCommas(value) : value;

  return (
    <input
      id={`field-${field.id}`}
      type="text"
      inputMode="decimal"
      value={displayValue}
      onChange={(e) => {
        const raw = e.target.value.replace(/[^0-9.\-]/g, "");
        onChange(raw);
      }}
      placeholder={placeholderText}
      aria-label={tl(field.label)}
      className="w-full rounded-lg border border-gray-300 bg-gray-50 px-3 py-2.5 text-sm text-gray-900 transition focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/30"
    />
  );
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

  const ui = useToolUI();
  const pathname = usePathname();
  const locale = (pathname?.split("/")[1] || "en") as Locale;
  const tl = (label: string) => translateFormulaLabel(label, locale);

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
      const numVals: Record<string, number | string> = {};
      for (const f of fields) {
        numVals[f.id] = f.type === "text" ? values[f.id] : parseFloat(stripCommas(values[f.id]));
      }
      const raw = formulaFn(numVals);
      if (typeof raw === "string") {
        result = raw;
      } else if (Number.isFinite(raw)) {
        result = formatResult(raw, resultSuffix);
      } else {
        result = ui.invalidInput;
      }
    } catch {
      result = ui.calculationError;
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
                  {tl(field.label)}
                  {field.suffix && (
                    <span className="ml-1 text-xs text-gray-500">
                      ({field.suffix})
                    </span>
                  )}
                </label>
                {field.type === "select" && field.options ? (
                  <select
                    id={`field-${field.id}`}
                    value={values[field.id] ?? ""}
                    onChange={(e) => updateValue(field.id, e.target.value)}
                    aria-label={tl(field.label)}
                    className="w-full rounded-lg border border-gray-300 bg-gray-50 px-3 py-2.5 text-sm text-gray-900 transition focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/30 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-100"
                  >
                    <option value="">{getSelectPlaceholder(locale)}</option>
                    {field.options.map((opt) => (
                      <option key={opt.value} value={opt.value}>
                        {opt.label}
                      </option>
                    ))}
                  </select>
                ) : (
                  <MoneyAwareInput
                    field={field}
                    value={values[field.id] ?? ""}
                    onChange={(val) => updateValue(field.id, val)}
                    resultSuffix={resultSuffix}
                    locale={locale}
                    currencySymbol={ui.currencySymbol}
                  />
                )}
              </div>
            ))}
          </div>

          {/* Result */}
          <div className="rounded-lg border border-gray-200 bg-gradient-to-br from-blue-50 to-indigo-50 p-5 dark:border-gray-700 dark:from-blue-950/40 dark:to-indigo-950/40" aria-live="polite" aria-atomic="true">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs font-semibold uppercase tracking-wide text-gray-500 dark:text-gray-400">
                  {tl(resultLabel)}
                </p>
                <p className="mt-1 text-2xl font-bold text-gray-900 dark:text-white">
                  {result ?? (
                    <span className="text-base font-normal text-gray-400">
                      {ui.enterValuesToCalculate}
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
                aria-label={ui.copy}
                className="rounded-md bg-blue-600 px-3 py-2 text-sm text-white transition hover:bg-blue-700 disabled:opacity-40"
              >
                {copied ? "✓" : ui.copy}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
