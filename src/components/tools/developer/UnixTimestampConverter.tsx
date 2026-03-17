"use client";

import { useState, useCallback, useSyncExternalStore } from "react";
import { useToolUI } from "@/lib/i18n/ToolUIContext";

function CopyButton({ text }: { text: string }) {
  const ui = useToolUI();
  const [copied, setCopied] = useState(false);

  const handleCopy = useCallback(async () => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch {
      /* clipboard not available */
    }
  }, [text]);

  return (
    <button
      type="button"
      onClick={handleCopy}
      aria-label={ui.copy}
      className="rounded-lg border border-gray-300 bg-white px-2.5 py-1 text-xs font-medium text-gray-600 transition-colors hover:border-primary-300 hover:text-primary-700"
    >
      {copied ? "✓" : ui.copy}
    </button>
  );
}

// Subscribe to a clock that ticks every second
let clockListeners: Array<() => void> = [];
let clockInterval: ReturnType<typeof setInterval> | null = null;

function subscribeToClock(listener: () => void) {
  clockListeners.push(listener);
  if (clockListeners.length === 1) {
    clockInterval = setInterval(() => {
      for (const l of clockListeners) l();
    }, 1000);
  }
  return () => {
    clockListeners = clockListeners.filter((l) => l !== listener);
    if (clockListeners.length === 0 && clockInterval) {
      clearInterval(clockInterval);
      clockInterval = null;
    }
  };
}

function getClockSnapshot() {
  return Math.floor(Date.now() / 1000);
}

function getServerClockSnapshot() {
  return 0;
}

function isMilliseconds(ts: number): boolean {
  return ts > 9999999999;
}

function toDateString(date: Date): string {
  const pad = (n: number) => String(n).padStart(2, "0");
  return `${date.getFullYear()}-${pad(date.getMonth() + 1)}-${pad(date.getDate())}T${pad(date.getHours())}:${pad(date.getMinutes())}`;
}

export default function UnixTimestampConverter() {
  const nowSeconds = useSyncExternalStore(subscribeToClock, getClockSnapshot, getServerClockSnapshot);
  const [tsInput, setTsInput] = useState("");
  const [tsResult, setTsResult] = useState<{
    utc: string;
    local: string;
  } | null>(null);
  const [tsError, setTsError] = useState("");

  const [dateInput, setDateInput] = useState("");
  const [dateResult, setDateResult] = useState<{
    seconds: number;
    milliseconds: number;
  } | null>(null);

  const handleTimestampConvert = useCallback(() => {
    setTsError("");
    setTsResult(null);
    const num = Number(tsInput.trim());
    if (!tsInput.trim() || isNaN(num)) {
      setTsError("Please enter a valid number.");
      return;
    }
    const ms = isMilliseconds(num) ? num : num * 1000;
    const date = new Date(ms);
    if (isNaN(date.getTime())) {
      setTsError("Invalid timestamp.");
      return;
    }
    setTsResult({
      utc: date.toUTCString(),
      local: date.toLocaleString(),
    });
  }, [tsInput]);

  const handleDateConvert = useCallback(() => {
    if (!dateInput) return;
    const date = new Date(dateInput);
    if (isNaN(date.getTime())) return;
    const ms = date.getTime();
    setDateResult({
      seconds: Math.floor(ms / 1000),
      milliseconds: ms,
    });
  }, [dateInput]);

  return (
    <div className="mx-auto max-w-4xl space-y-8">
      {/* Current time */}
      <div className="rounded-xl border border-primary-200 bg-primary-50 p-5">
        <p className="mb-1 text-sm font-semibold text-primary-700">
          Current Unix Timestamp
        </p>
        <div className="flex items-center gap-3">
          <span className="font-mono text-2xl font-bold text-gray-900">
            {nowSeconds}
          </span>
          <CopyButton text={String(nowSeconds)} />
        </div>
      </div>

      {/* Timestamp → Date */}
      <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
        <h3 className="mb-4 text-lg font-semibold text-gray-900">
          Timestamp → Date
        </h3>
        <div className="flex flex-wrap items-end gap-3">
          <div className="flex-1">
            <label
              htmlFor="ts-input"
              className="mb-2 block text-sm font-medium text-gray-700"
            >
              Unix Timestamp (auto-detects seconds or milliseconds)
            </label>
            <input
              id="ts-input"
              type="text"
              inputMode="numeric"
              value={tsInput}
              onChange={(e) => setTsInput(e.target.value)}
              placeholder="1700000000"
              className="w-full rounded-xl border border-gray-300 bg-white px-4 py-2.5 font-mono text-sm shadow-sm focus:border-primary-400 focus:outline-none focus:ring-2 focus:ring-primary-200"
            />
          </div>
          <button
            type="button"
            onClick={handleTimestampConvert}
            className="rounded-xl bg-primary-700 px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-primary-600"
          >
            Convert
          </button>
        </div>

        {tsError && (
          <p role="alert" className="mt-3 text-sm font-medium text-red-600">
            ✗ {tsError}
          </p>
        )}

        {tsResult && (
          <div className="mt-4 space-y-2">
            <div className="flex items-center justify-between rounded-lg bg-gray-50 px-4 py-2.5">
              <div>
                <span className="text-xs font-medium text-gray-500">UTC</span>
                <p className="font-mono text-sm text-gray-800">
                  {tsResult.utc}
                </p>
              </div>
              <CopyButton text={tsResult.utc} />
            </div>
            <div className="flex items-center justify-between rounded-lg bg-gray-50 px-4 py-2.5">
              <div>
                <span className="text-xs font-medium text-gray-500">
                  Local
                </span>
                <p className="font-mono text-sm text-gray-800">
                  {tsResult.local}
                </p>
              </div>
              <CopyButton text={tsResult.local} />
            </div>
          </div>
        )}
      </div>

      {/* Date → Timestamp */}
      <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
        <h3 className="mb-4 text-lg font-semibold text-gray-900">
          Date → Timestamp
        </h3>
        <div className="flex flex-wrap items-end gap-3">
          <div className="flex-1">
            <label
              htmlFor="date-input"
              className="mb-2 block text-sm font-medium text-gray-700"
            >
              Date & Time
            </label>
            <input
              id="date-input"
              type="datetime-local"
              value={dateInput}
              onChange={(e) => setDateInput(e.target.value)}
              className="w-full rounded-xl border border-gray-300 bg-white px-4 py-2.5 text-sm shadow-sm focus:border-primary-400 focus:outline-none focus:ring-2 focus:ring-primary-200"
            />
          </div>
          <button
            type="button"
            onClick={handleDateConvert}
            className="rounded-xl bg-primary-700 px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-primary-600"
          >
            Convert
          </button>
          <button
            type="button"
            onClick={() => {
              const now = new Date();
              setDateInput(toDateString(now));
            }}
            className="rounded-xl border border-gray-300 bg-white px-5 py-2.5 text-sm font-semibold text-gray-700 shadow-sm transition-colors hover:border-primary-300 hover:text-primary-700"
          >
            Now
          </button>
        </div>

        {dateResult && (
          <div className="mt-4 space-y-2">
            <div className="flex items-center justify-between rounded-lg bg-gray-50 px-4 py-2.5">
              <div>
                <span className="text-xs font-medium text-gray-500">
                  Seconds
                </span>
                <p className="font-mono text-sm text-gray-800">
                  {dateResult.seconds}
                </p>
              </div>
              <CopyButton text={String(dateResult.seconds)} />
            </div>
            <div className="flex items-center justify-between rounded-lg bg-gray-50 px-4 py-2.5">
              <div>
                <span className="text-xs font-medium text-gray-500">
                  Milliseconds
                </span>
                <p className="font-mono text-sm text-gray-800">
                  {dateResult.milliseconds}
                </p>
              </div>
              <CopyButton text={String(dateResult.milliseconds)} />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
