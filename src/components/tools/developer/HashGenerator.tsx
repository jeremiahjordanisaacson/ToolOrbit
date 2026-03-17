"use client";

import { useState, useEffect, useCallback, useRef } from "react";
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

// Inline MD5 implementation
function md5(input: string): string {
  const utf8 = new TextEncoder().encode(input);
  const msg = new Uint8Array(((utf8.length + 8 >> 6) + 1) << 6);
  msg.set(utf8);
  msg[utf8.length] = 0x80;
  const bits = utf8.length * 8;
  const dv = new DataView(msg.buffer);
  dv.setUint32(msg.length - 8, bits & 0xffffffff, true);
  dv.setUint32(msg.length - 4, Math.floor(bits / 0x100000000), true);

  let a0 = 0x67452301, b0 = 0xefcdab89, c0 = 0x98badcfe, d0 = 0x10325476;

  const S = [
    7,12,17,22,7,12,17,22,7,12,17,22,7,12,17,22,
    5,9,14,20,5,9,14,20,5,9,14,20,5,9,14,20,
    4,11,16,23,4,11,16,23,4,11,16,23,4,11,16,23,
    6,10,15,21,6,10,15,21,6,10,15,21,6,10,15,21
  ];
  const K = Array.from({ length: 64 }, (_, i) =>
    (Math.floor(Math.abs(Math.sin(i + 1)) * 0x100000000)) >>> 0
  );

  for (let offset = 0; offset < msg.length; offset += 64) {
    const M = Array.from({ length: 16 }, (_, j) =>
      dv.getUint32(offset + j * 4, true)
    );
    let [A, B, C, D] = [a0, b0, c0, d0];

    for (let i = 0; i < 64; i++) {
      let F: number, g: number;
      if (i < 16) { F = (B & C) | (~B & D); g = i; }
      else if (i < 32) { F = (D & B) | (~D & C); g = (5 * i + 1) % 16; }
      else if (i < 48) { F = B ^ C ^ D; g = (3 * i + 5) % 16; }
      else { F = C ^ (B | ~D); g = (7 * i) % 16; }

      F = (F + A + K[i] + M[g]) >>> 0;
      A = D; D = C; C = B;
      B = (B + ((F << S[i]) | (F >>> (32 - S[i])))) >>> 0;
    }

    a0 = (a0 + A) >>> 0;
    b0 = (b0 + B) >>> 0;
    c0 = (c0 + C) >>> 0;
    d0 = (d0 + D) >>> 0;
  }

  return [a0, b0, c0, d0]
    .map((v) =>
      Array.from({ length: 4 }, (_, i) =>
        ((v >>> (i * 8)) & 0xff).toString(16).padStart(2, "0")
      ).join("")
    )
    .join("");
}

async function webCryptoHash(
  algo: string,
  data: string
): Promise<string> {
  const encoded = new TextEncoder().encode(data);
  const buffer = await crypto.subtle.digest(algo, encoded);
  return Array.from(new Uint8Array(buffer))
    .map((b) => b.toString(16).padStart(2, "0"))
    .join("");
}

interface HashResult {
  label: string;
  value: string;
}

const ALGORITHMS = [
  { label: "MD5", algo: "md5" },
  { label: "SHA-1", algo: "SHA-1" },
  { label: "SHA-256", algo: "SHA-256" },
  { label: "SHA-384", algo: "SHA-384" },
  { label: "SHA-512", algo: "SHA-512" },
] as const;

export default function HashGenerator() {
  const [input, setInput] = useState("");
  const [hashes, setHashes] = useState<HashResult[]>([]);
  const timerRef = useRef<ReturnType<typeof setTimeout>>(undefined);

  const computeHashes = useCallback(async (text: string) => {
    if (!text) {
      setHashes([]);
      return;
    }

    const results: HashResult[] = [];

    // MD5 (sync)
    results.push({ label: "MD5", value: md5(text) });

    // Web Crypto hashes
    const webAlgos = ALGORITHMS.filter((a) => a.algo !== "md5");
    const webResults = await Promise.all(
      webAlgos.map(async (a) => ({
        label: a.label,
        value: await webCryptoHash(a.algo, text),
      }))
    );
    results.push(...webResults);

    setHashes(results);
  }, []);

  // Debounced computation
  useEffect(() => {
    clearTimeout(timerRef.current);
    timerRef.current = setTimeout(() => computeHashes(input), 200);
    return () => clearTimeout(timerRef.current);
  }, [input, computeHashes]);

  return (
    <div className="mx-auto max-w-4xl space-y-6">
      <div>
        <label
          htmlFor="hash-input"
          className="mb-2 block text-sm font-semibold text-gray-700"
        >
          Input
        </label>
        <textarea
          id="hash-input"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Enter text to hash…"
          rows={5}
          className="w-full rounded-xl border border-gray-300 bg-white px-4 py-3 font-mono text-sm shadow-sm focus:border-primary-400 focus:outline-none focus:ring-2 focus:ring-primary-200"
          spellCheck={false}
        />
      </div>

      {hashes.length > 0 && (
        <div className="space-y-2" aria-label="Hash results">
          {hashes.map((h) => (
            <div
              key={h.label}
              className="flex items-start justify-between gap-3 rounded-xl border border-gray-200 bg-white px-4 py-3 shadow-sm"
            >
              <div className="min-w-0 flex-1">
                <span className="text-xs font-semibold text-gray-500">
                  {h.label}
                </span>
                <p className="break-all font-mono text-sm text-gray-800">
                  {h.value}
                </p>
              </div>
              <CopyButton text={h.value} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
