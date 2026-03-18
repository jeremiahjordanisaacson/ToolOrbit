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

type UnitSystem = "metric" | "imperial";

interface BmiCategory {
  label: string;
  color: string;
  bgColor: string;
  textColor: string;
}

function getBmiCategory(bmi: number, labels: { underweight: string; normal: string; overweight: string; obeseLabel: string }): BmiCategory {
  if (bmi < 18.5) {
    return {
      label: labels.underweight,
      color: "#3b82f6",
      bgColor: "bg-blue-50",
      textColor: "text-blue-700",
    };
  }
  if (bmi < 25) {
    return {
      label: labels.normal,
      color: "#22c55e",
      bgColor: "bg-green-50",
      textColor: "text-green-700",
    };
  }
  if (bmi < 30) {
    return {
      label: labels.overweight,
      color: "#f59e0b",
      bgColor: "bg-amber-50",
      textColor: "text-amber-700",
    };
  }
  return {
    label: labels.obeseLabel,
    color: "#ef4444",
    bgColor: "bg-red-50",
    textColor: "text-red-700",
  };
}

function clamp(value: number, min: number, max: number): number {
  return Math.min(Math.max(value, min), max);
}

const SCALE_MIN = 10;
const SCALE_MAX = 40;

export default function BmiCalculator() {
  const t = useToolUI();
  const [unit, setUnit] = useState<UnitSystem>("metric");
  const [weight, setWeight] = useState("");
  const [heightCm, setHeightCm] = useState("");
  const [heightFt, setHeightFt] = useState("");
  const [heightIn, setHeightIn] = useState("");

  const calculateBmi = (): number | null => {
    const w = parseFloat(weight);
    if (!w || w <= 0) return null;

    if (unit === "metric") {
      const cm = parseFloat(heightCm);
      if (!cm || cm <= 0) return null;
      const m = cm / 100;
      return w / (m * m);
    }

    const ft = parseFloat(heightFt) || 0;
    const inches = parseFloat(heightIn) || 0;
    const totalInches = ft * 12 + inches;
    if (totalInches <= 0) return null;
    return (w * 703) / (totalInches * totalInches);
  };

  const bmi = calculateBmi();
  const category = bmi !== null ? getBmiCategory(bmi, t) : null;
  const markerPercent =
    bmi !== null
      ? ((clamp(bmi, SCALE_MIN, SCALE_MAX) - SCALE_MIN) /
          (SCALE_MAX - SCALE_MIN)) *
        100
      : null;

  const handleUnitToggle = () => {
    setUnit((prev) => (prev === "metric" ? "imperial" : "metric"));
    setWeight("");
    setHeightCm("");
    setHeightFt("");
    setHeightIn("");
  };

  return (
    <div className="mx-auto w-full max-w-lg">
      <div className="rounded-2xl border border-gray-200 bg-white shadow-sm">
        {/* Header */}
        <div className="border-b border-gray-100 px-6 pt-6 pb-5">
          <h2 className="text-xl font-semibold text-gray-900">
            BMI Calculator
          </h2>
          <p className="mt-1 text-sm text-gray-500">
            Calculate your Body Mass Index
          </p>
        </div>

        <div className="space-y-5 px-6 py-5">
          {/* Unit Toggle */}
          <div className="flex items-center justify-between">
            <span className="text-sm font-medium text-gray-700">
              Unit System
            </span>
            <button
              type="button"
              onClick={handleUnitToggle}
              className="relative inline-flex h-9 w-44 shrink-0 cursor-pointer items-center rounded-lg border border-gray-200 bg-gray-100 p-0.5 transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-600"
              role="switch"
              aria-checked={unit === "imperial"}
              aria-label={`Switch to ${unit === "metric" ? "imperial" : "metric"} units`}
            >
              <span
                className={`absolute left-0.5 h-8 w-[calc(50%-2px)] rounded-md bg-white shadow-sm transition-transform duration-200 ${
                  unit === "imperial" ? "translate-x-full" : "translate-x-0"
                }`}
              />
              <span
                className={`relative z-10 flex-1 text-center text-sm font-medium transition-colors ${
                  unit === "metric" ? "text-gray-900" : "text-gray-500"
                }`}
              >
                Metric
              </span>
              <span
                className={`relative z-10 flex-1 text-center text-sm font-medium transition-colors ${
                  unit === "imperial" ? "text-gray-900" : "text-gray-500"
                }`}
              >
                Imperial
              </span>
            </button>
          </div>

          {/* Weight Input */}
          <div>
            <label
              htmlFor="bmi-weight"
              className="mb-1.5 block text-sm font-medium text-gray-700"
            >
              Weight ({unit === "metric" ? "kg" : "lbs"})
            </label>
            <input
              id="bmi-weight"
              type="text"
              inputMode="decimal"
              value={fmtNumber(weight)}
              onChange={(e) => setWeight(stripFmt(e.target.value))}
              placeholder={unit === "metric" ? "e.g. 70" : "e.g. 154"}
              aria-label={`Weight in ${unit === "metric" ? "kilograms" : "pounds"}`}
              className="w-full rounded-lg border border-gray-300 bg-white px-3.5 py-2.5 text-sm text-gray-900 placeholder-gray-400 shadow-sm transition-colors focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 focus:outline-none"
            />
          </div>

          {/* Height Input(s) */}
          {unit === "metric" ? (
            <div>
              <label
                htmlFor="bmi-height-cm"
                className="mb-1.5 block text-sm font-medium text-gray-700"
              >
                Height (cm)
              </label>
              <input
                id="bmi-height-cm"
                type="number"
                min="0"
                step="0.1"
                value={heightCm}
                onChange={(e) => setHeightCm(e.target.value)}
                placeholder="e.g. 175"
                aria-label="Height in centimeters"
                className="w-full rounded-lg border border-gray-300 bg-white px-3.5 py-2.5 text-sm text-gray-900 placeholder-gray-400 shadow-sm transition-colors focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 focus:outline-none"
              />
            </div>
          ) : (
            <div>
              <span className="mb-1.5 block text-sm font-medium text-gray-700">
                Height
              </span>
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label htmlFor="bmi-height-ft" className="sr-only">
                    Feet
                  </label>
                  <div className="relative">
                    <input
                      id="bmi-height-ft"
                      type="number"
                      min="0"
                      step="1"
                      value={heightFt}
                      onChange={(e) => setHeightFt(e.target.value)}
                      placeholder="5"
                      aria-label="Height feet"
                      className="w-full rounded-lg border border-gray-300 bg-white px-3.5 py-2.5 pr-10 text-sm text-gray-900 placeholder-gray-400 shadow-sm transition-colors focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 focus:outline-none"
                    />
                    <span className="pointer-events-none absolute right-3.5 top-1/2 -translate-y-1/2 text-sm text-gray-400">
                      ft
                    </span>
                  </div>
                </div>
                <div>
                  <label htmlFor="bmi-height-in" className="sr-only">
                    Inches
                  </label>
                  <div className="relative">
                    <input
                      id="bmi-height-in"
                      type="number"
                      min="0"
                      max="11"
                      step="1"
                      value={heightIn}
                      onChange={(e) => setHeightIn(e.target.value)}
                      placeholder="10"
                      aria-label="Height inches"
                      className="w-full rounded-lg border border-gray-300 bg-white px-3.5 py-2.5 pr-10 text-sm text-gray-900 placeholder-gray-400 shadow-sm transition-colors focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 focus:outline-none"
                    />
                    <span className="pointer-events-none absolute right-3.5 top-1/2 -translate-y-1/2 text-sm text-gray-400">
                      in
                    </span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Results */}
          {bmi !== null && category !== null && markerPercent !== null && (
            <div className="space-y-4 rounded-xl border border-gray-100 bg-gray-50 p-5">
              {/* BMI Value & Category */}
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-500">{t.yourBmi}</p>
                  <p className="text-3xl font-bold text-gray-900">
                    {bmi.toFixed(1)}
                  </p>
                </div>
                <span
                  className={`rounded-full px-3.5 py-1.5 text-sm font-semibold ${category.bgColor} ${category.textColor}`}
                >
                  {category.label}
                </span>
              </div>

              {/* BMI Scale Bar */}
              <div
                role="img"
                aria-label={`BMI scale showing your BMI of ${bmi.toFixed(1)} in the ${category.label} range`}
              >
                <div className="relative h-3 w-full overflow-hidden rounded-full">
                  <div
                    className="absolute inset-0 rounded-full"
                    style={{
                      background:
                        "linear-gradient(to right, #3b82f6 0%, #22c55e 28%, #22c55e 50%, #f59e0b 66%, #ef4444 100%)",
                    }}
                  />
                </div>

                {/* Marker */}
                <div className="relative mt-0.5 h-5">
                  <div
                    className="absolute -translate-x-1/2 transition-all duration-300"
                    style={{ left: `${markerPercent}%` }}
                  >
                    <div
                      className="mx-auto h-3 w-0.5 rounded-full"
                      style={{ backgroundColor: category.color }}
                    />
                    <div
                      className="mx-auto h-2 w-2 rounded-full border-2 border-white shadow-sm"
                      style={{ backgroundColor: category.color }}
                    />
                  </div>
                </div>

                {/* Scale Labels */}
                <div className="mt-0.5 flex justify-between text-[11px] text-gray-400">
                  <span>10</span>
                  <span>18.5</span>
                  <span>25</span>
                  <span>30</span>
                  <span>40</span>
                </div>
              </div>

              {/* Category Legend */}
              <div className="grid grid-cols-2 gap-x-4 gap-y-1.5 pt-1 text-xs">
                <div className="flex items-center gap-1.5">
                  <span className="inline-block h-2.5 w-2.5 rounded-full bg-blue-500" />
                  <span className="text-gray-600">
                    {t.underweight}{" "}
                    <span className="text-gray-400">&lt; 18.5</span>
                  </span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="inline-block h-2.5 w-2.5 rounded-full bg-green-500" />
                  <span className="text-gray-600">
                    {t.normal}{" "}
                    <span className="text-gray-400">18.5 – 24.9</span>
                  </span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="inline-block h-2.5 w-2.5 rounded-full bg-amber-500" />
                  <span className="text-gray-600">
                    {t.overweight}{" "}
                    <span className="text-gray-400">25 – 29.9</span>
                  </span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="inline-block h-2.5 w-2.5 rounded-full bg-red-500" />
                  <span className="text-gray-600">
                    {t.obeseLabel} <span className="text-gray-400">≥ 30</span>
                  </span>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
