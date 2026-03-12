"use client";

import { useState, useCallback } from "react";

function getSecureRandomBool(): boolean {
  const array = new Uint8Array(1);
  crypto.getRandomValues(array);
  // Use the least significant bit for fairness
  return (array[0] & 1) === 1;
}

interface FlipStats {
  total: number;
  heads: number;
  tails: number;
}

export default function CoinFlip() {
  const [coinCount, setCoinCount] = useState(1);
  const [results, setResults] = useState<boolean[]>([]);
  const [flipping, setFlipping] = useState(false);
  const [stats, setStats] = useState<FlipStats>({ total: 0, heads: 0, tails: 0 });
  const [animationKey, setAnimationKey] = useState(0);

  const flip = useCallback(() => {
    setFlipping(true);
    setAnimationKey((k) => k + 1);

    setTimeout(() => {
      const flips = Array.from({ length: coinCount }, () => getSecureRandomBool());
      setResults(flips);

      const headsCount = flips.filter((f) => f).length;
      const tailsCount = flips.length - headsCount;

      setStats((prev) => ({
        total: prev.total + flips.length,
        heads: prev.heads + headsCount,
        tails: prev.tails + tailsCount,
      }));

      setFlipping(false);
    }, 700);
  }, [coinCount]);

  const resetHistory = () => {
    setStats({ total: 0, heads: 0, tails: 0 });
    setResults([]);
  };

  const headsPct =
    stats.total > 0 ? ((stats.heads / stats.total) * 100).toFixed(1) : "0.0";
  const tailsPct =
    stats.total > 0 ? ((stats.tails / stats.total) * 100).toFixed(1) : "0.0";

  return (
    <div className="space-y-6">
      {/* Coin count */}
      <div>
        <label
          htmlFor="coin-count"
          className="block text-sm font-medium text-gray-700 mb-1"
        >
          Number of Coins (1–10)
        </label>
        <input
          id="coin-count"
          type="number"
          min={1}
          max={10}
          value={coinCount}
          onChange={(e) =>
            setCoinCount(Math.min(10, Math.max(1, Number(e.target.value))))
          }
          className="w-32 rounded-lg border border-gray-300 px-3 py-2 text-gray-900 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
        />
      </div>

      {/* Flip button */}
      <button
        onClick={flip}
        disabled={flipping}
        className="px-10 py-4 bg-primary-600 text-white font-semibold text-lg rounded-full hover:bg-primary-700 transition-colors disabled:opacity-60 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 shadow-md hover:shadow-lg"
      >
        {flipping ? "Flipping…" : "🪙 Flip"}
      </button>

      {/* Results */}
      {results.length > 0 && (
        <div className="flex flex-wrap gap-4">
          {results.map((isHeads, i) => (
            <div
              key={`${animationKey}-${i}`}
              className="flex flex-col items-center gap-2"
              style={{ animation: "coin-flip 0.6s ease-out" }}
            >
              <div
                className={`flex items-center justify-center w-20 h-20 rounded-full border-4 font-bold text-lg shadow-md ${
                  isHeads
                    ? "bg-amber-100 border-amber-400 text-amber-800"
                    : "bg-slate-100 border-slate-400 text-slate-800"
                }`}
              >
                {isHeads ? "H" : "T"}
              </div>
              <span
                className={`text-sm font-semibold ${
                  isHeads ? "text-amber-700" : "text-slate-700"
                }`}
              >
                {isHeads ? "Heads" : "Tails"}
              </span>
            </div>
          ))}
        </div>
      )}

      {/* Summary for multi-coin */}
      {results.length > 1 && !flipping && (
        <div className="flex gap-6 text-sm bg-gray-50 rounded-lg px-4 py-3">
          <span className="text-amber-700 font-medium">
            Heads: {results.filter((r) => r).length}
          </span>
          <span className="text-slate-700 font-medium">
            Tails: {results.filter((r) => !r).length}
          </span>
        </div>
      )}

      {/* Stats */}
      {stats.total > 0 && (
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <h3 className="text-sm font-semibold text-gray-700">Statistics</h3>
            <button
              onClick={resetHistory}
              className="text-sm text-red-600 hover:text-red-700 transition-colors focus:outline-none focus:underline"
            >
              Reset
            </button>
          </div>

          <div className="bg-gray-50 rounded-xl p-4 space-y-3">
            <p className="text-sm text-gray-600">
              Total Flips:{" "}
              <strong className="text-gray-900">{stats.total}</strong>
            </p>

            {/* Heads bar */}
            <div className="space-y-1">
              <div className="flex justify-between text-sm">
                <span className="text-amber-700 font-medium">
                  Heads: {stats.heads}
                </span>
                <span className="text-gray-500">{headsPct}%</span>
              </div>
              <div className="h-3 bg-gray-200 rounded-full overflow-hidden">
                <div
                  className="h-full bg-amber-400 rounded-full transition-all duration-500"
                  style={{ width: `${headsPct}%` }}
                  role="progressbar"
                  aria-valuenow={stats.heads}
                  aria-valuemin={0}
                  aria-valuemax={stats.total}
                  aria-label={`Heads: ${headsPct}%`}
                />
              </div>
            </div>

            {/* Tails bar */}
            <div className="space-y-1">
              <div className="flex justify-between text-sm">
                <span className="text-slate-700 font-medium">
                  Tails: {stats.tails}
                </span>
                <span className="text-gray-500">{tailsPct}%</span>
              </div>
              <div className="h-3 bg-gray-200 rounded-full overflow-hidden">
                <div
                  className="h-full bg-slate-400 rounded-full transition-all duration-500"
                  style={{ width: `${tailsPct}%` }}
                  role="progressbar"
                  aria-valuenow={stats.tails}
                  aria-valuemin={0}
                  aria-valuemax={stats.total}
                  aria-label={`Tails: ${tailsPct}%`}
                />
              </div>
            </div>
          </div>
        </div>
      )}

      <style>{`
        @keyframes coin-flip {
          0% { transform: rotateY(0deg) scale(0.8); opacity: 0.3; }
          50% { transform: rotateY(180deg) scale(1.05); opacity: 0.7; }
          100% { transform: rotateY(360deg) scale(1); opacity: 1; }
        }
      `}</style>
    </div>
  );
}
