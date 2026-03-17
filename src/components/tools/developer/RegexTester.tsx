"use client";

import { useState, useCallback, useMemo } from "react";
import { useToolUI } from "@/lib/i18n/ToolUIContext";

interface MatchInfo {
  index: number;
  match: string;
  groups: string[];
}

export default function RegexTester() {
  const t = useToolUI();
  const [pattern, setPattern] = useState("");
  const [flags, setFlags] = useState({ g: true, i: false, m: false, s: false, u: false });
  const [testString, setTestString] = useState("");

  const flagString = useMemo(
    () =>
      Object.entries(flags)
        .filter(([, v]) => v)
        .map(([k]) => k)
        .join(""),
    [flags]
  );

  const toggleFlag = useCallback((flag: string) => {
    setFlags((prev) => ({ ...prev, [flag]: !prev[flag as keyof typeof prev] }));
  }, []);

  const { matches, highlighted, regexError } = useMemo(() => {
    if (!pattern || !testString) return { matches: [] as MatchInfo[], highlighted: "", regexError: "" };

    let regex: RegExp;
    try {
      regex = new RegExp(pattern, flagString);
    } catch (e) {
      return { matches: [] as MatchInfo[], highlighted: "", regexError: e instanceof Error ? e.message : "Invalid regex" };
    }

    const found: MatchInfo[] = [];
    let result: RegExpExecArray | null;

    if (flagString.includes("g")) {
      while ((result = regex.exec(testString)) !== null) {
        found.push({
          index: result.index,
          match: result[0],
          groups: result.slice(1),
        });
        if (result[0].length === 0) regex.lastIndex++;
      }
    } else {
      result = regex.exec(testString);
      if (result) {
        found.push({
          index: result.index,
          match: result[0],
          groups: result.slice(1),
        });
      }
    }

    // Build highlighted string
    let html = "";
    let lastIndex = 0;
    for (const m of found) {
      html += escapeHtml(testString.slice(lastIndex, m.index));
      html += `<mark class="rounded bg-yellow-200 px-0.5 text-gray-900">${escapeHtml(m.match)}</mark>`;
      lastIndex = m.index + m.match.length;
    }
    html += escapeHtml(testString.slice(lastIndex));

    return { matches: found, highlighted: html, regexError: "" };
  }, [pattern, flagString, testString]);

  // Derive error from memo result instead of calling setState in useMemo
  const error = regexError;

  const hasGroups = matches.some((m) => m.groups.length > 0);

  return (
    <div className="mx-auto max-w-4xl space-y-6">
      {/* Pattern input */}
      <div>
        <label
          htmlFor="regex-pattern"
          className="mb-2 block text-sm font-semibold text-gray-700"
        >
          Regular Expression
        </label>
        <div className="flex items-center gap-2">
          <span className="text-lg text-gray-400">/</span>
          <input
            id="regex-pattern"
            type="text"
            value={pattern}
            onChange={(e) => setPattern(e.target.value)}
            placeholder="pattern"
            className="flex-1 rounded-xl border border-gray-300 bg-white px-4 py-2.5 font-mono text-sm shadow-sm focus:border-primary-400 focus:outline-none focus:ring-2 focus:ring-primary-200"
            spellCheck={false}
          />
          <span className="text-lg text-gray-400">/{flagString}</span>
        </div>
      </div>

      {/* Flags */}
      <fieldset>
        <legend className="mb-2 text-sm font-semibold text-gray-700">
          Flags
        </legend>
        <div className="flex flex-wrap gap-3">
          {(["g", "i", "m", "s", "u"] as const).map((f) => (
            <label
              key={f}
              className="flex items-center gap-1.5 text-sm font-medium text-gray-700"
            >
              <input
                type="checkbox"
                checked={flags[f]}
                onChange={() => toggleFlag(f)}
                className="h-4 w-4 rounded border-gray-300 text-primary-700 focus:ring-primary-200"
              />
              <span className="font-mono">{f}</span>
              <span className="text-xs text-gray-500">
                ({
                  { g: "global", i: "ignore case", m: "multiline", s: "dotAll", u: "unicode" }[f]
                })
              </span>
            </label>
          ))}
        </div>
      </fieldset>

      {/* Test string */}
      <div>
        <label
          htmlFor="regex-test"
          className="mb-2 block text-sm font-semibold text-gray-700"
        >
          Test String
        </label>
        <textarea
          id="regex-test"
          value={testString}
          onChange={(e) => setTestString(e.target.value)}
          placeholder={t.enterTextHere}
          rows={5}
          className="w-full rounded-xl border border-gray-300 bg-white px-4 py-3 font-mono text-sm shadow-sm focus:border-primary-400 focus:outline-none focus:ring-2 focus:ring-primary-200"
          spellCheck={false}
        />
      </div>

      {error && (
        <p role="alert" className="text-sm font-medium text-red-600">
          ✗ {error}
        </p>
      )}

      {/* Results */}
      {pattern && testString && !error && (
        <>
          <div className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm">
            <div className="mb-3 flex items-center justify-between">
              <h3 className="text-sm font-semibold text-gray-700">
                Matches
              </h3>
              <span className="rounded-full bg-primary-50 px-3 py-1 text-xs font-semibold text-primary-700">
                {matches.length} match{matches.length !== 1 ? "es" : ""}
              </span>
            </div>
            <div
              className="whitespace-pre-wrap break-all rounded-lg bg-gray-50 p-4 font-mono text-sm leading-relaxed text-gray-700"
              dangerouslySetInnerHTML={{ __html: highlighted || escapeHtml(testString) }}
            />
          </div>

          {/* Capture groups table */}
          {hasGroups && (
            <div className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm">
              <h3 className="mb-3 text-sm font-semibold text-gray-700">
                Capture Groups
              </h3>
              <div className="overflow-x-auto">
                <table className="w-full text-left text-sm">
                  <thead>
                    <tr className="border-b border-gray-200">
                      <th className="px-3 py-2 text-xs font-semibold text-gray-500">
                        #
                      </th>
                      <th className="px-3 py-2 text-xs font-semibold text-gray-500">
                        Full Match
                      </th>
                      {Array.from(
                        {
                          length: Math.max(
                            ...matches.map((m) => m.groups.length)
                          ),
                        },
                        (_, i) => (
                          <th
                            key={i}
                            className="px-3 py-2 text-xs font-semibold text-gray-500"
                          >
                            Group {i + 1}
                          </th>
                        )
                      )}
                    </tr>
                  </thead>
                  <tbody>
                    {matches.map((m, i) => (
                      <tr key={i} className="border-b border-gray-100">
                        <td className="px-3 py-2 font-mono text-gray-500">
                          {i + 1}
                        </td>
                        <td className="px-3 py-2 font-mono text-gray-800">
                          {m.match}
                        </td>
                        {m.groups.map((g, gi) => (
                          <td
                            key={gi}
                            className="px-3 py-2 font-mono text-gray-800"
                          >
                            {g ?? <span className="text-gray-400">—</span>}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}
        </>
      )}
    </div>
  );
}

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}
