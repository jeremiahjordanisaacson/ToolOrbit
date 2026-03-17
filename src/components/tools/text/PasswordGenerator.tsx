"use client";

import { useState, useCallback } from "react";
import { useToolUI } from "@/lib/i18n/ToolUIContext";

interface GeneratorOptions {
  length: number;
  uppercase: boolean;
  lowercase: boolean;
  numbers: boolean;
  symbols: boolean;
  excludeAmbiguous: boolean;
  quantity: number;
}

const CHARS = {
  uppercase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
  uppercaseSafe: "ABCDEFGHJKMNPQRSTUVWXYZ",
  lowercase: "abcdefghijklmnopqrstuvwxyz",
  lowercaseSafe: "abcdefghjkmnpqrstuvwxyz",
  numbers: "0123456789",
  numbersSafe: "23456789",
  symbols: "!@#$%^&*()_+-=[]{}|;:,.<>?",
};

function getStrength(password: string, ui: { weak: string; fair: string; strong: string; veryStrong: string }): {
  label: string;
  color: string;
  width: string;
} {
  let score = 0;
  if (password.length >= 8) score++;
  if (password.length >= 12) score++;
  if (password.length >= 20) score++;
  if (/[a-z]/.test(password) && /[A-Z]/.test(password)) score++;
  if (/\d/.test(password)) score++;
  if (/[^a-zA-Z0-9]/.test(password)) score++;

  if (score <= 2)
    return { label: ui.weak, color: "bg-red-500", width: "w-1/4" };
  if (score <= 3)
    return { label: ui.fair, color: "bg-yellow-500", width: "w-2/4" };
  if (score <= 4)
    return { label: ui.strong, color: "bg-blue-500", width: "w-3/4" };
  return { label: ui.veryStrong, color: "bg-green-500", width: "w-full" };
}

export default function PasswordGenerator() {
  const ui = useToolUI();
  const [options, setOptions] = useState<GeneratorOptions>({
    length: 16,
    uppercase: true,
    lowercase: true,
    numbers: true,
    symbols: true,
    excludeAmbiguous: false,
    quantity: 1,
  });
  const [passwords, setPasswords] = useState<string[]>([]);
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);
  const [copiedAll, setCopiedAll] = useState(false);

  const generatePassword = useCallback((): string => {
    let charset = "";
    if (options.uppercase)
      charset += options.excludeAmbiguous
        ? CHARS.uppercaseSafe
        : CHARS.uppercase;
    if (options.lowercase)
      charset += options.excludeAmbiguous
        ? CHARS.lowercaseSafe
        : CHARS.lowercase;
    if (options.numbers)
      charset += options.excludeAmbiguous ? CHARS.numbersSafe : CHARS.numbers;
    if (options.symbols) charset += CHARS.symbols;

    if (!charset) return "";

    const array = new Uint32Array(options.length);
    crypto.getRandomValues(array);
    return Array.from(array, (val) => charset[val % charset.length]).join("");
  }, [options]);

  const handleGenerate = () => {
    const newPasswords: string[] = [];
    for (let i = 0; i < options.quantity; i++) {
      newPasswords.push(generatePassword());
    }
    setPasswords(newPasswords);
  };

  const copyToClipboard = (text: string, index: number) => {
    navigator.clipboard.writeText(text);
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 1500);
  };

  const copyAllToClipboard = () => {
    navigator.clipboard.writeText(passwords.join("\n"));
    setCopiedAll(true);
    setTimeout(() => setCopiedAll(false), 1500);
  };

  const toggleOption = (key: keyof GeneratorOptions) => {
    setOptions((prev) => ({
      ...prev,
      [key]: !prev[key as keyof typeof prev],
    }));
  };

  const atLeastOneCharset =
    options.uppercase || options.lowercase || options.numbers || options.symbols;

  return (
    <div className="mx-auto w-full max-w-3xl space-y-6">
      <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
        Password Generator
      </h2>

      <div className="space-y-5 rounded-lg border border-gray-200 bg-white p-5 dark:border-gray-700 dark:bg-gray-800">
        {/* Length slider */}
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <label
              htmlFor="pw-length"
              className="text-sm font-medium text-gray-700 dark:text-gray-300"
            >
              {ui.length}
            </label>
            <span className="rounded bg-gray-100 px-2 py-0.5 text-sm font-mono font-semibold text-gray-900 dark:bg-gray-700 dark:text-white">
              {options.length}
            </span>
          </div>
          <input
            id="pw-length"
            type="range"
            min={8}
            max={128}
            value={options.length}
            onChange={(e) =>
              setOptions((prev) => ({
                ...prev,
                length: parseInt(e.target.value),
              }))
            }
            className="h-2 w-full cursor-pointer appearance-none rounded-lg bg-gray-200 accent-blue-600 dark:bg-gray-700"
            aria-label="Password length"
          />
          <div className="flex justify-between text-xs text-gray-400">
            <span>8</span>
            <span>128</span>
          </div>
        </div>

        {/* Character set toggles */}
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
          {[
            { key: "uppercase" as const, label: `${ui.uppercase} (A-Z)` },
            { key: "lowercase" as const, label: `${ui.lowercase} (a-z)` },
            { key: "numbers" as const, label: `${ui.numbers} (0-9)` },
            { key: "symbols" as const, label: `${ui.symbols} (!@#$...)` },
            {
              key: "excludeAmbiguous" as const,
              label: ui.excludeAmbiguous,
            },
          ].map((opt) => (
            <label
              key={opt.key}
              className="flex items-center gap-2 text-sm text-gray-700 dark:text-gray-300"
            >
              <input
                type="checkbox"
                checked={options[opt.key] as boolean}
                onChange={() => toggleOption(opt.key)}
                className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
              />
              {opt.label}
            </label>
          ))}
        </div>

        {/* Quantity selector */}
        <div className="flex items-center gap-3">
          <label
            htmlFor="pw-quantity"
            className="text-sm font-medium text-gray-700 dark:text-gray-300"
          >
            {ui.quantity}
          </label>
          <select
            id="pw-quantity"
            value={options.quantity}
            onChange={(e) =>
              setOptions((prev) => ({
                ...prev,
                quantity: parseInt(e.target.value),
              }))
            }
            className="rounded border border-gray-300 bg-white px-3 py-1.5 text-sm text-gray-900 dark:border-gray-600 dark:bg-gray-900 dark:text-white"
            aria-label="Number of passwords to generate"
          >
            {[1, 2, 3, 5, 10, 20].map((n) => (
              <option key={n} value={n}>
                {n}
              </option>
            ))}
          </select>
        </div>

        <button
          onClick={handleGenerate}
          disabled={!atLeastOneCharset}
          className="w-full rounded-lg bg-blue-600 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-blue-700 disabled:opacity-40"
          aria-label="Generate passwords"
        >
          {ui.generate}
        </button>
      </div>

      {/* Generated passwords */}
      {passwords.length > 0 && (
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <h3 className="text-sm font-medium text-gray-700 dark:text-gray-300">
              Generated Password{passwords.length > 1 ? "s" : ""}
            </h3>
            {passwords.length > 1 && (
              <button
                onClick={copyAllToClipboard}
                className="rounded-md bg-gray-200 px-3 py-1 text-sm text-gray-700 transition hover:bg-gray-300 dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-600"
                aria-label={ui.copy}
              >
                {copiedAll ? ui.copied : ui.copy}
              </button>
            )}
          </div>

          {passwords.map((pw, i) => {
            const strength = getStrength(pw, ui);
            return (
              <div
                key={i}
                className="rounded-lg border border-gray-200 bg-white p-4 dark:border-gray-700 dark:bg-gray-800"
              >
                <div className="flex items-start gap-3">
                  <code className="flex-1 break-all font-mono text-sm text-gray-900 dark:text-white">
                    {pw}
                  </code>
                  <button
                    onClick={() => copyToClipboard(pw, i)}
                    className="shrink-0 rounded-md bg-blue-600 px-3 py-1 text-sm text-white transition hover:bg-blue-700"
                    aria-label={ui.copy}
                  >
                    {copiedIndex === i ? ui.copied : ui.copy}
                  </button>
                </div>
                <div className="mt-3 space-y-1">
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-gray-500 dark:text-gray-400">
                      {ui.strength}
                    </span>
                    <span
                      className={`font-medium ${
                        strength.label === ui.weak
                          ? "text-red-600"
                          : strength.label === ui.fair
                            ? "text-yellow-600"
                            : strength.label === ui.strong
                              ? "text-blue-600"
                              : "text-green-600"
                      }`}
                    >
                      {strength.label}
                    </span>
                  </div>
                  <div className="h-1.5 w-full overflow-hidden rounded-full bg-gray-200 dark:bg-gray-700">
                    <div
                      className={`h-full rounded-full transition-all ${strength.color} ${strength.width}`}
                    />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
