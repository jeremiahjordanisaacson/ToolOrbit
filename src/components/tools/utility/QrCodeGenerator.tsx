"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import QRCode from "qrcode";

type QRSize = "small" | "medium" | "large";

const SIZE_MAP: Record<QRSize, number> = {
  small: 200,
  medium: 300,
  large: 500,
};

export default function QrCodeGenerator() {
  const [text, setText] = useState("");
  const [size, setSize] = useState<QRSize>("medium");
  const [error, setError] = useState("");
  const [generated, setGenerated] = useState(false);
  const [copied, setCopied] = useState(false);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const generateQR = useCallback(async () => {
    setError("");
    setCopied(false);

    const trimmed = text.trim();
    if (!trimmed) {
      setError("Please enter text or a URL.");
      setGenerated(false);
      return;
    }

    try {
      const canvas = canvasRef.current;
      if (!canvas) return;

      await QRCode.toCanvas(canvas, trimmed, {
        width: SIZE_MAP[size],
        margin: 2,
        color: {
          dark: "#1e1b4b",
          light: "#ffffff",
        },
        errorCorrectionLevel: "M",
      });

      setGenerated(true);
    } catch (err) {
      const message =
        err instanceof Error ? err.message : "Failed to generate QR code.";
      setError(message);
      setGenerated(false);
    }
  }, [text, size]);

  // Auto-regenerate when size changes and there's existing content
  useEffect(() => {
    if (generated && text.trim()) {
      generateQR();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [size]);

  const downloadPNG = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const link = document.createElement("a");
    link.download = "qrcode.png";
    link.href = canvas.toDataURL("image/png");
    link.click();
  };

  const copyToClipboard = async () => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    try {
      const blob = await new Promise<Blob | null>((resolve) =>
        canvas.toBlob(resolve, "image/png")
      );
      if (blob) {
        await navigator.clipboard.write([
          new ClipboardItem({ "image/png": blob }),
        ]);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      }
    } catch {
      setError("Failed to copy image to clipboard.");
    }
  };

  return (
    <div className="space-y-6">
      {/* Text input */}
      <div>
        <label
          htmlFor="qr-text"
          className="block text-sm font-medium text-gray-700 mb-1"
        >
          Text or URL
        </label>
        <textarea
          id="qr-text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          rows={3}
          placeholder="https://example.com"
          className="w-full rounded-lg border border-gray-300 px-3 py-2 text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
        />
      </div>

      {/* Size selector */}
      <div>
        <span className="block text-sm font-medium text-gray-700 mb-2">
          Size
        </span>
        <div className="flex gap-2" role="radiogroup" aria-label="QR code size">
          {(["small", "medium", "large"] as QRSize[]).map((s) => (
            <button
              key={s}
              role="radio"
              aria-checked={size === s}
              onClick={() => setSize(s)}
              className={`px-4 py-2 rounded-lg text-sm font-medium capitalize transition-colors focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 ${
                size === s
                  ? "bg-primary-600 text-white shadow-sm"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              {s} ({SIZE_MAP[s]}px)
            </button>
          ))}
        </div>
      </div>

      {/* Generate button */}
      <button
        onClick={generateQR}
        className="px-6 py-2.5 bg-primary-600 text-white font-medium rounded-lg hover:bg-primary-700 transition-colors focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2"
      >
        Generate QR Code
      </button>

      {error && (
        <p className="text-red-600 text-sm" role="alert">
          {error}
        </p>
      )}

      {/* Canvas — always mounted so the ref stays stable */}
      <div
        className={`flex flex-col items-center gap-4 ${
          generated ? "" : "hidden"
        }`}
      >
        <div className="bg-white rounded-xl border border-gray-200 p-4 shadow-sm inline-block">
          <canvas ref={canvasRef} aria-label="Generated QR code" />
        </div>

        <div className="flex gap-3 flex-wrap">
          <button
            onClick={downloadPNG}
            className="px-4 py-2.5 border border-gray-300 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2"
          >
            📥 Download PNG
          </button>
          <button
            onClick={copyToClipboard}
            className="px-4 py-2.5 border border-gray-300 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2"
          >
            {copied ? "✓ Copied!" : "📋 Copy Image"}
          </button>
        </div>
      </div>

      {/* Empty state */}
      {!generated && !error && (
        <div className="flex items-center justify-center h-48 bg-gray-50 border-2 border-dashed border-gray-200 rounded-xl">
          <p className="text-gray-400 text-sm">
            Enter text and click Generate to create a QR code
          </p>
        </div>
      )}
    </div>
  );
}
