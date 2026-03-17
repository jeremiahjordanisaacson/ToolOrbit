"use client";

import { useState, useCallback, useEffect } from "react";
import { useToolUI } from "@/lib/i18n/ToolUIContext";

function CopyButton({ text, label }: { text: string; label?: string }) {
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
      aria-label={label ?? ui.copy}
      className="rounded-lg border border-gray-300 bg-white px-2.5 py-1 text-xs font-medium text-gray-600 transition-colors hover:border-primary-300 hover:text-primary-700"
    >
      {copied ? "✓" : ui.copy}
    </button>
  );
}

// Color conversion utilities
function hexToRgb(hex: string): [number, number, number] | null {
  const m = hex.replace("#", "").match(/^([0-9a-f]{2})([0-9a-f]{2})([0-9a-f]{2})$/i);
  if (!m) return null;
  return [parseInt(m[1], 16), parseInt(m[2], 16), parseInt(m[3], 16)];
}

function rgbToHex(r: number, g: number, b: number): string {
  return (
    "#" +
    [r, g, b].map((c) => Math.max(0, Math.min(255, Math.round(c))).toString(16).padStart(2, "0")).join("")
  );
}

function rgbToHsl(r: number, g: number, b: number): [number, number, number] {
  r /= 255;
  g /= 255;
  b /= 255;
  const max = Math.max(r, g, b),
    min = Math.min(r, g, b);
  const l = (max + min) / 2;
  if (max === min) return [0, 0, Math.round(l * 100)];
  const d = max - min;
  const s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
  let h = 0;
  if (max === r) h = ((g - b) / d + (g < b ? 6 : 0)) / 6;
  else if (max === g) h = ((b - r) / d + 2) / 6;
  else h = ((r - g) / d + 4) / 6;
  return [Math.round(h * 360), Math.round(s * 100), Math.round(l * 100)];
}

function hslToRgb(h: number, s: number, l: number): [number, number, number] {
  h /= 360;
  s /= 100;
  l /= 100;
  if (s === 0) {
    const v = Math.round(l * 255);
    return [v, v, v];
  }
  const hue2rgb = (p: number, q: number, t: number) => {
    if (t < 0) t += 1;
    if (t > 1) t -= 1;
    if (t < 1 / 6) return p + (q - p) * 6 * t;
    if (t < 1 / 2) return q;
    if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6;
    return p;
  };
  const q = l < 0.5 ? l * (1 + s) : l + s - l * s;
  const p = 2 * l - q;
  return [
    Math.round(hue2rgb(p, q, h + 1 / 3) * 255),
    Math.round(hue2rgb(p, q, h) * 255),
    Math.round(hue2rgb(p, q, h - 1 / 3) * 255),
  ];
}

function clamp(v: number, min: number, max: number): number {
  return Math.max(min, Math.min(max, v));
}

export default function ColorConverter() {
  const [hex, setHex] = useState("#3b82f6");
  const [rgb, setRgb] = useState({ r: 59, g: 130, b: 246 });
  const [hsl, setHsl] = useState({ h: 217, s: 91, l: 60 });

  // Prevent circular updates
  const [source, setSource] = useState<"hex" | "rgb" | "hsl" | "picker">("hex");

  const updateFromHex = useCallback((hexVal: string) => {
    const parsed = hexToRgb(hexVal);
    if (parsed) {
      const [r, g, b] = parsed;
      setRgb({ r, g, b });
      const [h, s, l] = rgbToHsl(r, g, b);
      setHsl({ h, s, l });
    }
  }, []);

  const updateFromRgb = useCallback((r: number, g: number, b: number) => {
    r = clamp(r, 0, 255);
    g = clamp(g, 0, 255);
    b = clamp(b, 0, 255);
    setHex(rgbToHex(r, g, b));
    const [h, s, l] = rgbToHsl(r, g, b);
    setHsl({ h, s, l });
  }, []);

  const updateFromHsl = useCallback((h: number, s: number, l: number) => {
    h = clamp(h, 0, 360);
    s = clamp(s, 0, 100);
    l = clamp(l, 0, 100);
    const [r, g, b] = hslToRgb(h, s, l);
    setRgb({ r, g, b });
    setHex(rgbToHex(r, g, b));
  }, []);

  // Sync on mount
  useEffect(() => {
    updateFromHex(hex);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleHexChange = (val: string) => {
    setHex(val);
    setSource("hex");
    if (/^#[0-9a-f]{6}$/i.test(val)) updateFromHex(val);
  };

  const handlePickerChange = (val: string) => {
    setHex(val);
    setSource("picker");
    updateFromHex(val);
  };

  const handleRgbChange = (channel: "r" | "g" | "b", val: string) => {
    const num = val === "" ? 0 : parseInt(val, 10);
    if (isNaN(num)) return;
    const next = { ...rgb, [channel]: clamp(num, 0, 255) };
    setRgb(next);
    setSource("rgb");
    updateFromRgb(next.r, next.g, next.b);
  };

  const handleHslChange = (channel: "h" | "s" | "l", val: string) => {
    const num = val === "" ? 0 : parseInt(val, 10);
    if (isNaN(num)) return;
    const max = channel === "h" ? 360 : 100;
    const next = { ...hsl, [channel]: clamp(num, 0, max) };
    setHsl(next);
    setSource("hsl");
    updateFromHsl(next.h, next.s, next.l);
  };

  const hexCss = hex.toLowerCase();
  const rgbCss = `rgb(${rgb.r}, ${rgb.g}, ${rgb.b})`;
  const hslCss = `hsl(${hsl.h}, ${hsl.s}%, ${hsl.l}%)`;

  return (
    <div className="mx-auto max-w-4xl space-y-6">
      {/* Preview + Picker */}
      <div className="flex flex-wrap items-center gap-6">
        <div
          className="h-24 w-24 shrink-0 rounded-xl border border-gray-300 shadow-sm"
          style={{ backgroundColor: hexCss }}
          aria-label={`Color preview: ${hexCss}`}
        />
        <div>
          <label
            htmlFor="color-picker"
            className="mb-2 block text-sm font-semibold text-gray-700"
          >
            Color Picker
          </label>
          <input
            id="color-picker"
            type="color"
            value={/^#[0-9a-f]{6}$/i.test(hex) ? hex : "#000000"}
            onChange={(e) => handlePickerChange(e.target.value)}
            className="h-10 w-16 cursor-pointer rounded-lg border border-gray-300"
          />
        </div>
      </div>

      {/* HEX */}
      <div className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm">
        <div className="mb-3 flex items-center justify-between">
          <label
            htmlFor="hex-input"
            className="text-sm font-semibold text-gray-700"
          >
            HEX
          </label>
          <CopyButton text={hexCss} />
        </div>
        <input
          id="hex-input"
          type="text"
          value={source === "hex" ? hex : hexCss}
          onChange={(e) => handleHexChange(e.target.value)}
          placeholder="#3b82f6"
          className="w-full rounded-xl border border-gray-300 bg-white px-4 py-2.5 font-mono text-sm shadow-sm focus:border-primary-400 focus:outline-none focus:ring-2 focus:ring-primary-200"
          spellCheck={false}
        />
        <p className="mt-2 font-mono text-xs text-gray-500">CSS: {hexCss}</p>
      </div>

      {/* RGB */}
      <div className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm">
        <div className="mb-3 flex items-center justify-between">
          <span className="text-sm font-semibold text-gray-700">RGB</span>
          <CopyButton text={rgbCss} />
        </div>
        <div className="grid grid-cols-3 gap-3">
          {(["r", "g", "b"] as const).map((ch) => (
            <div key={ch}>
              <label
                htmlFor={`rgb-${ch}`}
                className="mb-1 block text-xs font-medium text-gray-500 uppercase"
              >
                {ch}
              </label>
              <input
                id={`rgb-${ch}`}
                type="number"
                min={0}
                max={255}
                value={rgb[ch]}
                onChange={(e) => handleRgbChange(ch, e.target.value)}
                className="w-full rounded-xl border border-gray-300 bg-white px-4 py-2.5 font-mono text-sm shadow-sm focus:border-primary-400 focus:outline-none focus:ring-2 focus:ring-primary-200"
              />
            </div>
          ))}
        </div>
        <p className="mt-2 font-mono text-xs text-gray-500">CSS: {rgbCss}</p>
      </div>

      {/* HSL */}
      <div className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm">
        <div className="mb-3 flex items-center justify-between">
          <span className="text-sm font-semibold text-gray-700">HSL</span>
          <CopyButton text={hslCss} />
        </div>
        <div className="grid grid-cols-3 gap-3">
          {(["h", "s", "l"] as const).map((ch) => (
            <div key={ch}>
              <label
                htmlFor={`hsl-${ch}`}
                className="mb-1 block text-xs font-medium text-gray-500 uppercase"
              >
                {ch}
                {ch === "h" ? " (°)" : " (%)"}
              </label>
              <input
                id={`hsl-${ch}`}
                type="number"
                min={0}
                max={ch === "h" ? 360 : 100}
                value={hsl[ch]}
                onChange={(e) => handleHslChange(ch, e.target.value)}
                className="w-full rounded-xl border border-gray-300 bg-white px-4 py-2.5 font-mono text-sm shadow-sm focus:border-primary-400 focus:outline-none focus:ring-2 focus:ring-primary-200"
              />
            </div>
          ))}
        </div>
        <p className="mt-2 font-mono text-xs text-gray-500">CSS: {hslCss}</p>
      </div>
    </div>
  );
}
