"use client";

import { useState, useCallback } from "react";
import { useToolUI } from "@/lib/i18n/ToolUIContext";

const BASE_CHARS = "0123456789abcdefghijklmnopqrstuvwxyz";

// Roman numeral conversion helpers
function decimalToRoman(num: number): string {
  if (num <= 0 || num > 3999) return "Out of range (1-3999)";
  const vals = [1000,900,500,400,100,90,50,40,10,9,5,4,1];
  const syms = ["M","CM","D","CD","C","XC","L","XL","X","IX","V","IV","I"];
  let result = "";
  for (let i = 0; i < vals.length; i++) {
    while (num >= vals[i]) { result += syms[i]; num -= vals[i]; }
  }
  return result;
}

function romanToDecimal(str: string): number {
  const map: Record<string, number> = { I:1,V:5,X:10,L:50,C:100,D:500,M:1000 };
  let result = 0;
  const s = str.toUpperCase();
  for (let i = 0; i < s.length; i++) {
    const cur = map[s[i]] || 0;
    const next = map[s[i+1]] || 0;
    if (cur < next) { result -= cur; } else { result += cur; }
  }
  return result;
}

function isValidRoman(str: string): boolean {
  return /^[IVXLCDM]+$/i.test(str);
}

function isValidForBase(input: string, base: number | string): boolean {
  if (!input) return true;
  if (base === "roman") return isValidRoman(input);
  const allowed = BASE_CHARS.slice(0, base as number);
  return input.toLowerCase().split("").every((ch) => allowed.includes(ch));
}

function convertBase(
  input: string,
  fromBase: number | string,
  toBase: number | string
): string | null {
  if (!input) return null;
  try {
    // Handle Roman numeral conversions
    if (fromBase === "roman") {
      if (!isValidRoman(input)) return null;
      const decimal = romanToDecimal(input);
      if (toBase === 10 || toBase === "10") return String(decimal);
      return decimal.toString(toBase as number).toUpperCase();
    }
    if (toBase === "roman") {
      const decimal = parseInt(input, fromBase as number);
      if (isNaN(decimal)) return null;
      return decimalToRoman(decimal);
    }
    // Standard base conversion
    const decimal = parseInt(input, fromBase as number);
    if (isNaN(decimal)) return null;
    return decimal.toString(toBase as number).toUpperCase();
  } catch {
    return null;
  }
}

export default function NumberBaseTemplate({
  config,
}: {
  config: Record<string, unknown>;
}) {
  const { fromBase, toBase, fromName, toName } = config as {
    fromBase: number | string;
    toBase: number | string;
    fromName: string;
    toName: string;
  };

  const [input, setInput] = useState("");
  const [copied, setCopied] = useState(false);
  const [error, setError] = useState("");
  const ui = useToolUI();

  const handleInputChange = (val: string) => {
    const cleaned = val.replace(/\s/g, "");
    if (cleaned && !isValidForBase(cleaned, fromBase)) {
      setError(
        fromBase === "roman"
          ? "Invalid character. Allowed: I, V, X, L, C, D, M"
          : `Invalid character for base ${fromBase}. Allowed: ${BASE_CHARS.slice(0, fromBase as number).toUpperCase()}`
      );
    } else {
      setError("");
    }
    setInput(cleaned);
  };

  const result =
    input && !error ? convertBase(input, fromBase, toBase) : null;

  const handleCopy = useCallback(async () => {
    if (!result) return;
    await navigator.clipboard.writeText(result);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  }, [result]);

  const basePrefixMap: Record<string, string> = {
    2: "0b",
    8: "0o",
    16: "0x",
  };

  return (
    <div className="mx-auto w-full max-w-xl space-y-6">
      <div className="rounded-2xl border border-gray-200 bg-white shadow-lg dark:border-gray-700 dark:bg-gray-900">
        <div className="border-b border-gray-200 px-6 py-5 dark:border-gray-700">
          <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
            {fromName} to {toName}
          </h2>
          <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
            Base {fromBase} → Base {toBase}
          </p>
        </div>

        <div className="px-6 py-5 space-y-5">
          {/* Input */}
          <div>
            <label
              htmlFor="base-input"
              className="mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-300"
            >
              {fromName} (Base {fromBase})
            </label>
            <div className="flex items-center gap-2">
              {basePrefixMap[String(fromBase)] && (
                <span className="text-sm font-mono text-gray-400 dark:text-gray-500">
                  {basePrefixMap[String(fromBase)]}
                </span>
              )}
              <input
                id="base-input"
                type="text"
                value={input}
                onChange={(e) => handleInputChange(e.target.value)}
                placeholder={`Enter ${fromName.toLowerCase()} number`}
                aria-label={`${fromName} input`}
                className="w-full rounded-lg border border-gray-300 bg-gray-50 px-3 py-2.5 font-mono text-sm text-gray-900 transition focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/30 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-100"
              />
            </div>
            {error && (
              <p className="mt-1.5 text-xs text-red-600 dark:text-red-400" role="alert">
                {error}
              </p>
            )}
          </div>

          {/* Output */}
          <div>
            <label className="mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-300">
              {toName} (Base {toBase})
            </label>
            <div className="flex items-center gap-2">
              {basePrefixMap[String(toBase)] && (
                <span className="text-sm font-mono text-gray-400 dark:text-gray-500">
                  {basePrefixMap[String(toBase)]}
                </span>
              )}
              <div className="flex-1 rounded-lg border border-gray-200 bg-gradient-to-br from-blue-50 to-indigo-50 px-3 py-2.5 font-mono text-sm font-medium text-gray-900 dark:border-gray-700 dark:from-blue-950/40 dark:to-indigo-950/40 dark:text-gray-100" aria-live="polite" aria-atomic="true">
                {result ?? (input && error ? ui.invalidInput : "—")}
              </div>
              <button
                onClick={handleCopy}
                disabled={!result}
                aria-label="Copy result"
                className="rounded-md bg-blue-600 px-3 py-2 text-sm text-white transition hover:bg-blue-700 disabled:opacity-40"
              >
                {copied ? "✓" : ui.copy}
              </button>
            </div>
          </div>

          {/* Quick Reference */}
          {input && result && (
            <div className="rounded-lg bg-gray-50 p-4 dark:bg-gray-800">
              <h3 className="mb-2 text-xs font-semibold uppercase tracking-wide text-gray-500 dark:text-gray-400">
                {ui.allBases}
              </h3>
              <div className="grid grid-cols-2 gap-2 text-sm">
                {[
                  { name: ui.binaryBase, base: 2 },
                  { name: ui.octalBase, base: 8 },
                  { name: ui.decimalBase, base: 10 },
                  { name: ui.hexBase, base: 16 },
                ].map(({ name, base }) => {
                  const val = convertBase(input, fromBase, base);
                  return (
                    <div
                      key={base}
                      className="flex items-center justify-between rounded-md bg-white px-3 py-2 dark:bg-gray-900"
                    >
                      <span className="text-gray-500 dark:text-gray-400">
                        {name}
                      </span>
                      <span className="font-mono font-medium text-gray-900 dark:text-gray-100">
                        {val ?? "—"}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
