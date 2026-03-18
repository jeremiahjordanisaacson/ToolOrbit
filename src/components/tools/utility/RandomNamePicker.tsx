"use client";

import { useState, useCallback, useRef, useEffect } from "react";
import { useToolUI } from "@/lib/i18n/ToolUIContext";

function secureRandomIndex(max: number): number {
  const array = new Uint32Array(1);
  crypto.getRandomValues(array);
  return array[0] % max;
}

interface PickRecord {
  names: string[];
  timestamp: number;
}

export default function RandomNamePicker() {
  const ui = useToolUI();
  const [input, setInput] = useState("");
  const [pickCount, setPickCount] = useState(1);
  const [picked, setPicked] = useState<string[]>([]);
  const [removePicked, setRemovePicked] = useState(false);
  const [history, setHistory] = useState<PickRecord[]>([]);
  const [animating, setAnimating] = useState(false);
  const [highlightIndex, setHighlightIndex] = useState<number | null>(null);
  const [error, setError] = useState("");
  const [copied, setCopied] = useState(false);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const names = input
    .split("\n")
    .map((n) => n.trim())
    .filter(Boolean);

  useEffect(() => {
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, []);

  const pick = useCallback(() => {
    setError("");
    setCopied(false);

    if (names.length === 0) {
      setError("Please enter at least one name.");
      return;
    }

    if (pickCount > names.length) {
      setError(
        `Cannot pick ${pickCount} from ${names.length} name${names.length === 1 ? "" : "s"}.`
      );
      return;
    }

    // Animate: cycle highlight through names
    setAnimating(true);
    setPicked([]);
    let cycles = 0;
    const totalCycles = 15;

    intervalRef.current = setInterval(() => {
      setHighlightIndex(secureRandomIndex(names.length));
      cycles++;

      if (cycles >= totalCycles) {
        if (intervalRef.current) clearInterval(intervalRef.current);
        setHighlightIndex(null);

        // Perform the actual pick
        const available = [...names];
        const chosen: string[] = [];

        for (let i = 0; i < pickCount; i++) {
          const idx = secureRandomIndex(available.length);
          chosen.push(available[idx]);
          available.splice(idx, 1);
        }

        setPicked(chosen);
        setHistory((prev) =>
          [{ names: chosen, timestamp: Date.now() }, ...prev].slice(0, 20)
        );

        if (removePicked) {
          const remaining = [...names];
          for (const name of chosen) {
            const idx = remaining.indexOf(name);
            if (idx !== -1) remaining.splice(idx, 1);
          }
          setInput(remaining.join("\n"));
        }

        setAnimating(false);
      }
    }, 60);
  }, [names, pickCount, removePicked]);

  const clearAll = () => {
    setInput("");
    setPicked([]);
    setHistory([]);
    setError("");
    setHighlightIndex(null);
  };

  const copyPicked = async () => {
    try {
      await navigator.clipboard.writeText(picked.join(", "));
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      setError("Failed to copy to clipboard.");
    }
  };

  return (
    <div className="space-y-6">
      {/* Name input */}
      <div>
        <label
          htmlFor="name-input"
          className="block text-sm font-medium text-gray-700 mb-1"
        >
          Names (one per line)
        </label>
        <textarea
          id="name-input"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          rows={6}
          placeholder={"Alice\nBob\nCharlie\nDiana\nEve"}
          className="w-full rounded-lg border border-gray-300 px-3 py-2 text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500 font-mono text-sm"
        />
        <p className="mt-1 text-xs text-gray-500">
          {names.length} name{names.length !== 1 ? "s" : ""} entered
        </p>
      </div>

      {/* Name preview with animation highlight */}
      {names.length > 0 && animating && (
        <div className="flex flex-wrap gap-2">
          {names.map((name, i) => (
            <span
              key={i}
              className={`px-3 py-1 rounded-full text-sm font-medium transition-colors ${
                highlightIndex === i
                  ? "bg-primary-600 text-white scale-110"
                  : "bg-gray-100 text-gray-700"
              }`}
            >
              {name}
            </span>
          ))}
        </div>
      )}

      {/* Options row */}
      <div className="flex flex-col sm:flex-row sm:items-end gap-4">
        <div>
          <label
            htmlFor="pick-count"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Number to Pick
          </label>
          <input
            id="pick-count"
            type="number"
            min={1}
            max={names.length || 1}
            value={pickCount}
            onChange={(e) =>
              setPickCount(Math.max(1, Number(e.target.value)))
            }
            className="w-32 rounded-lg border border-gray-300 px-3 py-2 text-gray-900 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
          />
        </div>
        <div className="flex items-center gap-3 pb-1">
          <button
            type="button"
            role="switch"
            aria-checked={removePicked}
            aria-label="Remove picked names from list"
            onClick={() => setRemovePicked((v) => !v)}
            className={`relative inline-flex h-6 w-11 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 ${
              removePicked ? "bg-primary-600" : "bg-gray-300"
            }`}
          >
            <span
              className={`pointer-events-none inline-block h-5 w-5 rounded-full bg-white shadow ring-0 transition-transform ${
                removePicked ? "translate-x-5" : "translate-x-0"
              }`}
            />
          </button>
          <span className="text-sm text-gray-700">{ui.removePickedFromList}</span>
        </div>
      </div>

      {/* Action buttons */}
      <div className="flex items-center gap-3 flex-wrap">
        <button
          onClick={pick}
          disabled={animating || names.length === 0}
          className="px-6 py-2.5 bg-primary-600 text-white font-medium rounded-lg hover:bg-primary-700 transition-colors disabled:opacity-60 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2"
        >
          {animating ? "…" : `🎯 ${ui.pick}`}
        </button>
        <button
          onClick={clearAll}
          className="px-4 py-2.5 border border-gray-300 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2"
        >
          {ui.clear}
        </button>
      </div>

      {error && (
        <p className="text-red-600 text-sm" role="alert">
          {error}
        </p>
      )}

      {/* Picked result */}
      {picked.length > 0 && !animating && (
        <div
          className="space-y-3"
          style={{ animation: "pick-reveal 0.4s ease-out" }}
        >
          <h3 className="text-sm font-semibold text-gray-700">
            🎉 Selected
          </h3>
          <div className="flex flex-wrap gap-3">
            {picked.map((name, i) => (
              <div
                key={i}
                className="px-5 py-3 bg-primary-50 border-2 border-primary-300 rounded-xl text-lg font-bold text-primary-700"
              >
                {name}
              </div>
            ))}
          </div>
          <button
            onClick={copyPicked}
            className="text-sm text-primary-600 hover:text-primary-700 transition-colors focus:outline-none focus:underline"
          >
            {copied ? `✓ ${ui.copied}` : ui.copy}
          </button>
        </div>
      )}

      {/* History */}
      {history.length > 0 && (
        <div className="space-y-3">
          <h3 className="text-sm font-semibold text-gray-700">{ui.history}</h3>
          <div className="space-y-2 max-h-48 overflow-y-auto">
            {history.map((record, i) => (
              <div
                key={record.timestamp + "-" + i}
                className="flex items-center justify-between bg-gray-50 rounded-lg px-4 py-2 text-sm"
              >
                <span className="font-medium text-gray-800">
                  {record.names.join(", ")}
                </span>
                <span className="text-xs text-gray-400 ml-4 shrink-0">
                  {new Date(record.timestamp).toLocaleTimeString()}
                </span>
              </div>
            ))}
          </div>
        </div>
      )}

      <style>{`
        @keyframes pick-reveal {
          0% { transform: translateY(8px); opacity: 0; }
          100% { transform: translateY(0); opacity: 1; }
        }
      `}</style>
    </div>
  );
}
