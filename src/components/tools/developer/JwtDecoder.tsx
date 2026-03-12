"use client";

import { useState, useCallback } from "react";

function base64UrlDecode(str: string): string {
  let base64 = str.replace(/-/g, "+").replace(/_/g, "/");
  while (base64.length % 4) base64 += "=";
  const binary = atob(base64);
  const bytes = new Uint8Array(binary.length);
  for (let i = 0; i < binary.length; i++) bytes[i] = binary.charCodeAt(i);
  return new TextDecoder().decode(bytes);
}

function formatJson(obj: unknown): string {
  return JSON.stringify(obj, null, 2);
}

function syntaxHighlight(json: string): string {
  return json.replace(
    /("(?:\\u[\da-fA-F]{4}|\\[^u]|[^"\\])*"(?:\s*:)?|\b(?:true|false|null)\b|-?\d+(?:\.\d*)?(?:[eE][+-]?\d+)?)/g,
    (match) => {
      let cls = "text-orange-600"; // number
      if (/^"/.test(match)) {
        cls = match.endsWith(":") ? "text-primary-700 font-semibold" : "text-green-700";
      } else if (/true|false/.test(match)) {
        cls = "text-blue-600";
      } else if (/null/.test(match)) {
        cls = "text-gray-500";
      }
      return `<span class="${cls}">${match}</span>`;
    }
  );
}

interface DecodedJwt {
  header: Record<string, unknown>;
  payload: Record<string, unknown>;
}

function CopyButton({ text }: { text: string }) {
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
      aria-label="Copy to clipboard"
      className="rounded-lg border border-gray-300 bg-white px-3 py-1.5 text-sm font-medium text-gray-600 transition-colors hover:border-primary-300 hover:text-primary-700"
    >
      {copied ? "✓ Copied" : "Copy"}
    </button>
  );
}

export default function JwtDecoder() {
  const [input, setInput] = useState("");
  const [decoded, setDecoded] = useState<DecodedJwt | null>(null);
  const [error, setError] = useState("");

  const [expStatus, setExpStatus] = useState<{
    label: string;
    color: string;
  } | null>(null);
  const [issuedAt, setIssuedAt] = useState<string | null>(null);

  const computeMeta = useCallback((jwt: DecodedJwt | null) => {
    if (!jwt) {
      setExpStatus(null);
      setIssuedAt(null);
      return;
    }
    const { payload } = jwt;

    if (typeof payload.exp !== "number") {
      setExpStatus({ label: "No expiration", color: "text-gray-500 bg-gray-100" });
    } else {
      const now = Math.floor(Date.now() / 1000);
      if (payload.exp < now) {
        setExpStatus({
          label: `Expired (${new Date(payload.exp * 1000).toLocaleString()})`,
          color: "text-red-700 bg-red-50",
        });
      } else {
        setExpStatus({
          label: `Valid until ${new Date(payload.exp * 1000).toLocaleString()}`,
          color: "text-green-700 bg-green-50",
        });
      }
    }

    setIssuedAt(
      typeof payload.iat === "number"
        ? new Date(payload.iat * 1000).toLocaleString()
        : null
    );
  }, []);

  const handleDecode = useCallback(() => {
    setError("");
    setDecoded(null);

    const token = input.trim();
    if (!token) {
      setError("Please enter a JWT token.");
      return;
    }

    const parts = token.split(".");
    if (parts.length !== 3) {
      setError(
        "Invalid JWT format. A JWT must have exactly 3 parts separated by dots."
      );
      return;
    }

    try {
      const header = JSON.parse(base64UrlDecode(parts[0]));
      const payload = JSON.parse(base64UrlDecode(parts[1]));
      const jwt = { header, payload };
      setDecoded(jwt);
      computeMeta(jwt);
    } catch {
      setError("Failed to decode JWT. The token may be malformed.");
    }
  }, [input, computeMeta]);

  return (
    <div className="mx-auto max-w-4xl space-y-6">
      <div>
        <label
          htmlFor="jwt-input"
          className="mb-2 block text-sm font-semibold text-gray-700"
        >
          JWT Token
        </label>
        <textarea
          id="jwt-input"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIn0.dozjgNryP4J3jVmNHl0w5N_XgL0n3I9PlFUP0THsR8U"
          rows={4}
          className="w-full rounded-xl border border-gray-300 bg-white px-4 py-3 font-mono text-xs shadow-sm focus:border-primary-400 focus:outline-none focus:ring-2 focus:ring-primary-200"
          spellCheck={false}
        />
      </div>

      <div className="flex flex-wrap items-center gap-3">
        <button
          type="button"
          onClick={handleDecode}
          className="rounded-xl bg-primary-700 px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-primary-600"
        >
          Decode
        </button>
      </div>

      <p className="text-xs text-gray-500">
        ⚠ Signature is not verified. This tool only decodes the header and
        payload for inspection purposes.
      </p>

      {error && (
        <p role="alert" className="text-sm font-medium text-red-600">
          ✗ {error}
        </p>
      )}

      {decoded && (
        <div className="space-y-4">
          {(expStatus || issuedAt) && (
            <div className="flex flex-wrap gap-3">
              {expStatus && (
                <span
                  className={`inline-block rounded-lg px-3 py-1.5 text-sm font-medium ${expStatus.color}`}
                >
                  {expStatus.label}
                </span>
              )}
              {issuedAt && (
                <span className="inline-block rounded-lg bg-gray-100 px-3 py-1.5 text-sm font-medium text-gray-600">
                  Issued at: {issuedAt}
                </span>
              )}
            </div>
          )}

          <div className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm">
            <div className="mb-2 flex items-center justify-between">
              <h3 className="text-sm font-semibold text-gray-700">Header</h3>
              <CopyButton text={formatJson(decoded.header)} />
            </div>
            <pre className="overflow-x-auto rounded-lg bg-gray-50 p-4 text-sm leading-relaxed">
              <code
                dangerouslySetInnerHTML={{
                  __html: syntaxHighlight(formatJson(decoded.header)),
                }}
              />
            </pre>
          </div>

          <div className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm">
            <div className="mb-2 flex items-center justify-between">
              <h3 className="text-sm font-semibold text-gray-700">Payload</h3>
              <CopyButton text={formatJson(decoded.payload)} />
            </div>
            <pre className="overflow-x-auto rounded-lg bg-gray-50 p-4 text-sm leading-relaxed">
              <code
                dangerouslySetInnerHTML={{
                  __html: syntaxHighlight(formatJson(decoded.payload)),
                }}
              />
            </pre>
          </div>
        </div>
      )}
    </div>
  );
}
