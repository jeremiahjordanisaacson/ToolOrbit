"use client";

import { useState, useCallback } from "react";
import { useToolUI } from "@/lib/i18n/ToolUIContext";

const DICE_TYPES = [4, 6, 8, 10, 12, 20, 100] as const;
type DiceType = (typeof DICE_TYPES)[number];

interface RollResult {
  diceType: DiceType;
  count: number;
  values: number[];
  total: number;
  timestamp: number;
}

function rollDie(sides: number): number {
  const array = new Uint32Array(1);
  crypto.getRandomValues(array);
  return (array[0] % sides) + 1;
}

export default function DiceRoller() {
  const t = useToolUI();
  const [diceType, setDiceType] = useState<DiceType>(6);
  const [count, setCount] = useState(1);
  const [results, setResults] = useState<number[]>([]);
  const [rolling, setRolling] = useState(false);
  const [history, setHistory] = useState<RollResult[]>([]);

  const roll = useCallback(() => {
    setRolling(true);
    // Brief delay for the animation effect
    setTimeout(() => {
      const values = Array.from({ length: count }, () => rollDie(diceType));
      setResults(values);

      const result: RollResult = {
        diceType,
        count,
        values,
        total: values.reduce((a, b) => a + b, 0),
        timestamp: Date.now(),
      };
      setHistory((prev) => [result, ...prev].slice(0, 10));
      setRolling(false);
    }, 500);
  }, [diceType, count]);

  const total = results.reduce((a, b) => a + b, 0);

  return (
    <div className="space-y-6">
      {/* Dice type selector */}
      <div>
        <span className="block text-sm font-medium text-gray-700 mb-2">
          {t.diceType}
        </span>
        <div className="flex flex-wrap gap-2" role="radiogroup" aria-label="Dice type">
          {DICE_TYPES.map((d) => (
            <button
              key={d}
              role="radio"
              aria-checked={diceType === d}
              onClick={() => setDiceType(d)}
              className={`px-4 py-2 rounded-lg font-medium text-sm transition-colors focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 ${
                diceType === d
                  ? "bg-primary-600 text-white shadow-sm"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              d{d}
            </button>
          ))}
        </div>
      </div>

      {/* Number of dice */}
      <div>
        <label
          htmlFor="dice-count"
          className="block text-sm font-medium text-gray-700 mb-1"
        >
          {`${t.numberOfDice} (1–20)`}
        </label>
        <input
          id="dice-count"
          type="number"
          min={1}
          max={20}
          value={count}
          onChange={(e) =>
            setCount(Math.min(20, Math.max(1, Number(e.target.value))))
          }
          className="w-32 rounded-lg border border-gray-300 px-3 py-2 text-gray-900 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
        />
      </div>

      {/* Roll button */}
      <button
        onClick={roll}
        disabled={rolling}
        className="px-8 py-3 bg-primary-600 text-white font-semibold text-lg rounded-lg hover:bg-primary-700 transition-colors disabled:opacity-60 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2"
      >
        {rolling ? t.rolling : `🎲 ${t.roll}`}
      </button>

      {/* Results */}
      {(results.length > 0 || rolling) && (
        <div className="space-y-3">
          <div className="flex flex-wrap gap-3">
            {(rolling ? Array.from({ length: count }, () => 0) : results).map(
              (v, i) => (
                <div
                  key={i}
                  className="relative flex items-center justify-center w-16 h-16 bg-white border-2 border-primary-300 rounded-xl shadow-sm"
                  style={
                    rolling
                      ? {
                          animation: `dice-shake 0.15s ease-in-out infinite`,
                          animationDelay: `${i * 30}ms`,
                        }
                      : { animation: "dice-pop 0.3s ease-out" }
                  }
                >
                  <span className="text-2xl font-bold text-primary-700 tabular-nums">
                    {rolling ? "?" : v}
                  </span>
                </div>
              )
            )}
          </div>
          {!rolling && results.length > 1 && (
            <p className="text-sm text-gray-600">
              {`${t.total}: `}
              <strong className="text-gray-900 text-lg">{total}</strong>
            </p>
          )}
        </div>
      )}

      {/* History */}
      {history.length > 0 && (
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <h3 className="text-sm font-semibold text-gray-700">
              {t.rollHistory}
            </h3>
            <button
              onClick={() => setHistory([])}
              className="text-sm text-red-600 hover:text-red-700 transition-colors focus:outline-none focus:underline"
            >
              {t.clearHistory}
            </button>
          </div>
          <div className="space-y-2 max-h-64 overflow-y-auto">
            {history.map((r, i) => (
              <div
                key={r.timestamp + "-" + i}
                className="flex items-center justify-between bg-gray-50 rounded-lg px-4 py-2 text-sm"
              >
                <span className="text-gray-600">
                  {r.count}d{r.diceType}:{" "}
                  <span className="font-medium text-gray-800">
                    [{r.values.join(", ")}]
                  </span>
                </span>
                <span className="font-bold text-primary-700 ml-4 shrink-0">
                  = {r.total}
                </span>
              </div>
            ))}
          </div>
        </div>
      )}

      <style>{`
        @keyframes dice-shake {
          0%, 100% { transform: translateX(0) rotate(0deg); }
          25% { transform: translateX(-3px) rotate(-3deg); }
          75% { transform: translateX(3px) rotate(3deg); }
        }
        @keyframes dice-pop {
          0% { transform: scale(0.6); opacity: 0.5; }
          60% { transform: scale(1.1); }
          100% { transform: scale(1); opacity: 1; }
        }
      `}</style>
    </div>
  );
}
