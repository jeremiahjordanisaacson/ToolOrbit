"use client";

import { useState, useCallback } from "react";
import { useToolUI } from "@/lib/i18n/ToolUIContext";
const MORSE_MAP: Record<string, string> = {
  A: ".-", B: "-...", C: "-.-.", D: "-..", E: ".", F: "..-.", G: "--.",
  H: "....", I: "..", J: ".---", K: "-.-", L: ".-..", M: "--", N: "-.",
  O: "---", P: ".--.", Q: "--.-", R: ".-.", S: "...", T: "-", U: "..-",
  V: "...-", W: ".--", X: "-..-", Y: "-.--", Z: "--..",
  "0": "-----", "1": ".----", "2": "..---", "3": "...--", "4": "....-",
  "5": ".....", "6": "-....", "7": "--...", "8": "---..", "9": "----.",
  ".": ".-.-.-", ",": "--..--", "?": "..--..", "'": ".----.", "!": "-.-.--",
  "/": "-..-.", "(": "-.--.", ")": "-.--.-", "&": ".-...", ":": "---...",
  ";": "-.-.-.", "=": "-...-", "+": ".-.-.", "-": "-....-", "_": "..--.-",
  '"': ".-..-.", "$": "...-..-", "@": ".--.-.",
};
const REVERSE_MORSE: Record<string, string> = {};
for (const [k, v] of Object.entries(MORSE_MAP)) REVERSE_MORSE[v] = k;

/* ─── Unicode Maps ─── */
const UPSIDE_DOWN_MAP: Record<string, string> = {
  a: "ɐ", b: "q", c: "ɔ", d: "p", e: "ǝ", f: "ɟ", g: "ƃ", h: "ɥ",
  i: "ᴉ", j: "ɾ", k: "ʞ", l: "l", m: "ɯ", n: "u", o: "o", p: "d",
  q: "b", r: "ɹ", s: "s", t: "ʇ", u: "n", v: "ʌ", w: "ʍ", x: "x",
  y: "ʎ", z: "z", A: "∀", B: "q", C: "Ɔ", D: "p", E: "Ǝ", F: "Ⅎ",
  G: "⅁", H: "H", I: "I", J: "ſ", K: "ʞ", L: "˥", M: "W", N: "N",
  O: "O", P: "Ԁ", Q: "Q", R: "ɹ", S: "S", T: "⊥", U: "∩", V: "Λ",
  W: "M", X: "X", Y: "⅄", Z: "Z", "1": "Ɩ", "2": "ᄅ", "3": "Ɛ",
  "4": "ㄣ", "5": "ϛ", "6": "9", "7": "ㄥ", "8": "8", "9": "6", "0": "0",
  ".": "˙", ",": "'", "?": "¿", "!": "¡", "'": ",", '"': ",,",
  "(": ")", ")": "(", "[": "]", "]": "[", "{": "}", "}": "{",
  "<": ">", ">": "<", "&": "⅋", "_": "‾",
};

const BOLD_MAP: Record<string, string> = {};
const ITALIC_MAP: Record<string, string> = {};
const SMALL_CAPS_MAP: Record<string, string> = {};
const SUPERSCRIPT_MAP: Record<string, string> = {};
const SUBSCRIPT_MAP: Record<string, string> = {};
const FULLWIDTH_MAP: Record<string, string> = {};
const BUBBLE_MAP: Record<string, string> = {};

(() => {
  const boldUpper = 0x1d400, boldLower = 0x1d41a, boldDigit = 0x1d7ce;
  const italicUpper = 0x1d434, italicLower = 0x1d44e;
  for (let i = 0; i < 26; i++) {
    const u = String.fromCharCode(65 + i), l = String.fromCharCode(97 + i);
    BOLD_MAP[u] = String.fromCodePoint(boldUpper + i);
    BOLD_MAP[l] = String.fromCodePoint(boldLower + i);
    ITALIC_MAP[u] = String.fromCodePoint(italicUpper + i);
    ITALIC_MAP[l] = i === 7 ? "ℎ" : String.fromCodePoint(italicLower + i);
    BUBBLE_MAP[u] = String.fromCodePoint(0x24b6 + i);
    BUBBLE_MAP[l] = String.fromCodePoint(0x24d0 + i);
  }
  for (let i = 0; i < 10; i++) {
    const d = String(i);
    BOLD_MAP[d] = String.fromCodePoint(boldDigit + i);
    BUBBLE_MAP[d] = i === 0 ? "⓪" : String.fromCodePoint(0x2460 + i - 1);
  }

  const sc = "ᴀʙᴄᴅᴇꜰɢʜɪᴊᴋʟᴍɴᴏᴘǫʀꜱᴛᴜᴠᴡxʏᴢ";
  for (let i = 0; i < 26; i++) {
    SMALL_CAPS_MAP[String.fromCharCode(97 + i)] = sc[i];
    SMALL_CAPS_MAP[String.fromCharCode(65 + i)] = sc[i];
  }

  const supMap = "⁰¹²³⁴⁵⁶⁷⁸⁹";
  const supLetters: Record<string, string> = {
    a: "ᵃ", b: "ᵇ", c: "ᶜ", d: "ᵈ", e: "ᵉ", f: "ᶠ", g: "ᵍ", h: "ʰ",
    i: "ⁱ", j: "ʲ", k: "ᵏ", l: "ˡ", m: "ᵐ", n: "ⁿ", o: "ᵒ", p: "ᵖ",
    r: "ʳ", s: "ˢ", t: "ᵗ", u: "ᵘ", v: "ᵛ", w: "ʷ", x: "ˣ", y: "ʸ",
    z: "ᶻ",
  };
  for (let i = 0; i < 10; i++) SUPERSCRIPT_MAP[String(i)] = supMap[i];
  Object.assign(SUPERSCRIPT_MAP, supLetters);

  const subDigits = "₀₁₂₃₄₅₆₇₈₉";
  const subLetters: Record<string, string> = {
    a: "ₐ", e: "ₑ", h: "ₕ", i: "ᵢ", j: "ⱼ", k: "ₖ", l: "ₗ", m: "ₘ",
    n: "ₙ", o: "ₒ", p: "ₚ", r: "ᵣ", s: "ₛ", t: "ₜ", u: "ᵤ", v: "ᵥ",
    x: "ₓ",
  };
  for (let i = 0; i < 10; i++) SUBSCRIPT_MAP[String(i)] = subDigits[i];
  Object.assign(SUBSCRIPT_MAP, subLetters);

  for (let i = 33; i <= 126; i++) {
    FULLWIDTH_MAP[String.fromCharCode(i)] = String.fromCharCode(i - 33 + 0xff01);
  }
  FULLWIDTH_MAP[" "] = "\u3000";
})();

function mapChars(text: string, map: Record<string, string>): string {
  return text.split("").map((c) => map[c] ?? c).join("");
}

/* ─── Lorem Ipsum ─── */
const LOREM = [
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.",
];

/* ─── Number to Words ─── */
function numberToWords(n: number): string {
  if (n === 0) return "zero";
  if (!Number.isFinite(n)) return "invalid number";
  const isNeg = n < 0;
  n = Math.abs(Math.floor(n));

  const ones = ["", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine",
    "ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen",
    "seventeen", "eighteen", "nineteen"];
  const tens = ["", "", "twenty", "thirty", "forty", "fifty", "sixty", "seventy", "eighty", "ninety"];
  const scales = ["", "thousand", "million", "billion", "trillion"];

  function chunk(num: number): string {
    if (num === 0) return "";
    if (num < 20) return ones[num];
    if (num < 100) return tens[Math.floor(num / 10)] + (num % 10 ? "-" + ones[num % 10] : "");
    return ones[Math.floor(num / 100)] + " hundred" + (num % 100 ? " and " + chunk(num % 100) : "");
  }

  const parts: string[] = [];
  let scaleIdx = 0;
  while (n > 0) {
    const rem = n % 1000;
    if (rem) parts.unshift(chunk(rem) + (scales[scaleIdx] ? " " + scales[scaleIdx] : ""));
    n = Math.floor(n / 1000);
    scaleIdx++;
  }
  return (isNeg ? "negative " : "") + parts.join(", ");
}

/* ─── Transforms Registry ─── */
const transforms: Record<string, (input: string) => string> = {
  "text-to-binary": (s) =>
    s.split("").map((c) => c.charCodeAt(0).toString(2).padStart(8, "0")).join(" "),

  "binary-to-text": (s) => {
    try {
      return s.trim().split(/\s+/).map((b) => String.fromCharCode(parseInt(b, 2))).join("");
    } catch { return "Invalid binary input"; }
  },

  "text-to-hex": (s) =>
    s.split("").map((c) => c.charCodeAt(0).toString(16).padStart(2, "0")).join(" "),

  "hex-to-text": (s) => {
    try {
      return s.trim().split(/\s+/).map((h) => String.fromCharCode(parseInt(h, 16))).join("");
    } catch { return "Invalid hex input"; }
  },

  "text-to-ascii": (s) =>
    s.split("").map((c) => c.charCodeAt(0).toString()).join(" "),

  "rot13": (s) =>
    s.replace(/[a-zA-Z]/g, (c) => {
      const base = c <= "Z" ? 65 : 97;
      return String.fromCharCode(((c.charCodeAt(0) - base + 13) % 26) + base);
    }),

  "morse-encode": (s) =>
    s.toUpperCase().split("").map((c) => (c === " " ? "/" : MORSE_MAP[c] ?? c)).join(" "),

  "morse-decode": (s) =>
    s.trim().split(/\s+/).map((code) => (code === "/" ? " " : REVERSE_MORSE[code] ?? code)).join(""),

  "upside-down": (s) =>
    s.split("").map((c) => UPSIDE_DOWN_MAP[c] ?? c).reverse().join(""),

  "strikethrough": (s) =>
    s.split("").map((c) => c + "\u0336").join(""),

  "bold-unicode": (s) => mapChars(s, BOLD_MAP),
  "italic-unicode": (s) => mapChars(s, ITALIC_MAP),
  "small-text": (s) => mapChars(s, SMALL_CAPS_MAP),
  "superscript": (s) => mapChars(s, SUPERSCRIPT_MAP),
  "subscript": (s) => mapChars(s, SUBSCRIPT_MAP),
  "wide-text": (s) => mapChars(s, FULLWIDTH_MAP),
  "bubble-text": (s) => mapChars(s, BUBBLE_MAP),

  "reverse-each-word": (s) =>
    s.split(/(\s+)/).map((w, i) => (i % 2 === 0 ? w.split("").reverse().join("") : w)).join(""),

  "shuffle-words": (s) => {
    const words = s.split(/\s+/);
    for (let i = words.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [words[i], words[j]] = [words[j], words[i]];
    }
    return words.join(" ");
  },

  "shuffle-lines": (s) => {
    const lines = s.split("\n");
    for (let i = lines.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [lines[i], lines[j]] = [lines[j], lines[i]];
    }
    return lines.join("\n");
  },

  "add-line-numbers": (s) =>
    s.split("\n").map((line, i) => `${i + 1}. ${line}`).join("\n"),

  "remove-empty-lines": (s) =>
    s.split("\n").filter((line) => line.trim()).join("\n"),

  "remove-html-tags": (s) => s.replace(/<[^>]*>/g, ""),

  "remove-accents": (s) => s.normalize("NFD").replace(/[\u0300-\u036f]/g, ""),

  "remove-punctuation": (s) => s.replace(/[^\w\s]/g, ""),

  "extract-emails": (s) => {
    const emails = s.match(/[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/g);
    return emails ? emails.join("\n") : "No emails found";
  },

  "extract-urls": (s) => {
    const urls = s.match(/https?:\/\/[^\s<>"{}|\\^`[\]]+/g);
    return urls ? urls.join("\n") : "No URLs found";
  },

  "extract-numbers": (s) => {
    const nums = s.match(/-?\d+\.?\d*/g);
    return nums ? nums.join("\n") : "No numbers found";
  },

  "tab-to-spaces": (s) => s.replace(/\t/g, "    "),
  "spaces-to-tab": (s) => s.replace(/ {4}/g, "\t"),

  "lorem-ipsum": () => LOREM.join("\n\n"),

  "count-vowels": (s) => {
    const vowels: Record<string, number> = { a: 0, e: 0, i: 0, o: 0, u: 0 };
    for (const c of s.toLowerCase()) if (c in vowels) vowels[c]++;
    const total = Object.values(vowels).reduce((a, b) => a + b, 0);
    return `Total vowels: ${total}\n${Object.entries(vowels).map(([k, v]) => `  ${k}: ${v}`).join("\n")}`;
  },

  "count-consonants": (s) => {
    const count = (s.match(/[bcdfghjklmnpqrstvwxyz]/gi) || []).length;
    return `Total consonants: ${count}`;
  },

  "letter-frequency": (s) => {
    const freq: Record<string, number> = {};
    for (const c of s.toLowerCase()) if (/[a-z]/.test(c)) freq[c] = (freq[c] || 0) + 1;
    return Object.entries(freq)
      .sort((a, b) => b[1] - a[1])
      .map(([ch, n]) => `${ch}: ${n}`)
      .join("\n") || "No letters found";
  },

  "word-frequency": (s) => {
    const freq: Record<string, number> = {};
    for (const w of s.toLowerCase().split(/\s+/).filter(Boolean)) freq[w] = (freq[w] || 0) + 1;
    return Object.entries(freq)
      .sort((a, b) => b[1] - a[1])
      .map(([w, n]) => `${w}: ${n}`)
      .join("\n") || "No words found";
  },

  "text-repeat": (s) => `${s}\n${s}\n${s}`,

  "text-statistics": (s) => {
    const chars = s.length;
    const words = s.split(/\s+/).filter(Boolean);
    const wordCount = words.length;
    const sentences = (s.match(/[.!?]+/g) || []).length || (s.trim() ? 1 : 0);
    const avgWordLen = wordCount ? (words.reduce((a, w) => a + w.length, 0) / wordCount).toFixed(1) : "0";
    const unique = new Set(words.map((w) => w.toLowerCase())).size;
    return [
      `Characters: ${chars}`,
      `Words: ${wordCount}`,
      `Sentences: ${sentences}`,
      `Avg word length: ${avgWordLen}`,
      `Unique words: ${unique}`,
    ].join("\n");
  },

  "number-to-words": (s) => {
    const n = parseFloat(s.trim());
    if (isNaN(n)) return "Please enter a valid number";
    return numberToWords(n);
  },

  "pig-latin": (s) =>
    s.split(/(\s+)/).map((w, i) => {
      if (i % 2 !== 0) return w;
      if (!w) return w;
      const m = w.match(/^([^aeiouAEIOU]*)(.*)/);
      if (!m) return w;
      if (!m[1]) return w + "yay";
      return m[2] + m[1].toLowerCase() + "ay";
    }).join(""),

  "csv-to-json": (s) => {
    try {
      const lines = s.trim().split("\n");
      if (lines.length < 2) return "Need at least a header row and one data row";
      const headers = lines[0].split(",").map((h) => h.trim());
      const data = lines.slice(1).map((line) => {
        const vals = line.split(",").map((v) => v.trim());
        const obj: Record<string, string> = {};
        headers.forEach((h, i) => (obj[h] = vals[i] ?? ""));
        return obj;
      });
      return JSON.stringify(data, null, 2);
    } catch { return "Invalid CSV input"; }
  },

  "json-to-csv": (s) => {
    try {
      const data = JSON.parse(s);
      if (!Array.isArray(data) || data.length === 0) return "Input must be a non-empty JSON array";
      const headers = Object.keys(data[0]);
      const rows = data.map((obj: Record<string, unknown>) =>
        headers.map((h) => {
          const val = String(obj[h] ?? "");
          return val.includes(",") ? `"${val}"` : val;
        }).join(",")
      );
      return [headers.join(","), ...rows].join("\n");
    } catch { return "Invalid JSON input"; }
  },

  "markdown-to-html": (s) =>
    s
      .replace(/^### (.+)$/gm, "<h3>$1</h3>")
      .replace(/^## (.+)$/gm, "<h2>$1</h2>")
      .replace(/^# (.+)$/gm, "<h1>$1</h1>")
      .replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>")
      .replace(/\*(.+?)\*/g, "<em>$1</em>")
      .replace(/`(.+?)`/g, "<code>$1</code>")
      .replace(/^\- (.+)$/gm, "<li>$1</li>")
      .replace(/^\> (.+)$/gm, "<blockquote>$1</blockquote>")
      .replace(/\[(.+?)\]\((.+?)\)/g, '<a href="$2">$1</a>')
      .replace(/\n{2,}/g, "\n<br/>\n"),

  // --- Extra transforms for generated tools ---
  "to-uppercase": (input) => input.toUpperCase(),
  "to-lowercase": (input) => input.toLowerCase(),
  "to-title-case": (input) =>
    input.replace(/\w\S*/g, (w) => w.charAt(0).toUpperCase() + w.slice(1).toLowerCase()),
  "to-sentence-case": (input) =>
    input.toLowerCase().replace(/(^\s*|[.!?]\s+)([a-z])/g, (_, p, c) => p + c.toUpperCase()),
  "alternate-case": (input) =>
    [...input].map((c, i) => (i % 2 === 0 ? c.toLowerCase() : c.toUpperCase())).join(""),
  "camelcase-to-text": (input) =>
    input.replace(/([a-z])([A-Z])/g, "$1 $2").toLowerCase(),
  "snakecase-to-text": (input) =>
    input.replace(/_/g, " "),
  "sort-by-length": (input) =>
    input.split("\n").sort((a, b) => a.length - b.length).join("\n"),
  "add-prefix": (input) =>
    input.split("\n").map((line) => "> " + line).join("\n"),
  "add-suffix": (input) =>
    input.split("\n").map((line) => line + ";").join("\n"),
  "nato-phonetic": (input) => {
    const NATO: Record<string, string> = {
      A:"Alpha",B:"Bravo",C:"Charlie",D:"Delta",E:"Echo",F:"Foxtrot",G:"Golf",
      H:"Hotel",I:"India",J:"Juliet",K:"Kilo",L:"Lima",M:"Mike",N:"November",
      O:"Oscar",P:"Papa",Q:"Quebec",R:"Romeo",S:"Sierra",T:"Tango",U:"Uniform",
      V:"Victor",W:"Whiskey",X:"Xray",Y:"Yankee",Z:"Zulu",
      "0":"Zero","1":"One","2":"Two","3":"Three","4":"Four",
      "5":"Five","6":"Six","7":"Seven","8":"Eight","9":"Nine",
    };
    return [...input.toUpperCase()].map((c) => NATO[c] || c).join(" ");
  },
  "text-to-base64": (input) => {
    try { return btoa(unescape(encodeURIComponent(input))); } catch { return "Encoding error"; }
  },
  "base64-to-text": (input) => {
    try { return decodeURIComponent(escape(atob(input.trim()))); } catch { return "Invalid Base64"; }
  },
  "json-escape": (input) => JSON.stringify(input).slice(1, -1),
  "json-unescape": (input) => {
    try { return JSON.parse(`"${input}"`); } catch { return "Invalid escaped string"; }
  },
  "xml-escape": (input) =>
    input.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&apos;"),
  "regex-escape": (input) =>
    input.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"),
  "invisible-chars": (input) => {
    const map: Record<number, string> = { 0x200B:"ZWSP", 0x200C:"ZWNJ", 0x200D:"ZWJ", 0xFEFF:"BOM", 0x00A0:"NBSP", 0x00AD:"SHY", 0x2060:"WJ" };
    let found = 0;
    const result = [...input].map((c) => {
      const code = c.codePointAt(0) || 0;
      const name = map[code];
      if (name) { found++; return `[${name} U+${code.toString(16).padStart(4,"0").toUpperCase()}]`; }
      return c;
    }).join("");
    return found > 0 ? `Found ${found} invisible character(s):\n${result}` : "No invisible characters found.";
  },
  "tsv-to-csv": (input) =>
    input.split("\n").map((line) => line.split("\t").map((cell) => cell.includes(",") ? `"${cell}"` : cell).join(",")).join("\n"),
  "csv-column-count": (input) => {
    const lines = input.trim().split("\n");
    if (lines.length === 0) return "No data";
    const cols = lines[0].split(",").length;
    return `Columns: ${cols}\nRows: ${lines.length}\nHeader: ${lines[0]}`;
  },
  "yaml-to-json": (input) => {
    try {
      const obj: Record<string, string> = {};
      input.split("\n").forEach((line) => {
        const m = line.match(/^(\s*)([^:#]+):\s*(.*)$/);
        if (m) obj[m[2].trim()] = m[3].trim();
      });
      return JSON.stringify(obj, null, 2);
    } catch { return "Parse error"; }
  },
  "json-to-yaml": (input) => {
    try {
      const obj = JSON.parse(input);
      return Object.entries(obj).map(([k, v]) => `${k}: ${typeof v === "object" ? JSON.stringify(v) : v}`).join("\n");
    } catch { return "Invalid JSON"; }
  },
};

export default function TextTransformTemplate({
  config,
}: {
  config: Record<string, unknown>;
}) {
  const {
    transformId,
    placeholder,
    inputLabel,
    outputLabel,
  } = config as {
    transformId: string;
    placeholder?: string;
    inputLabel?: string;
    outputLabel?: string;
  };

  const [input, setInput] = useState("");
  const [copied, setCopied] = useState(false);
  const ui = useToolUI();

  const actualPlaceholder = placeholder || ui.enterTextHere;
  const actualInputLabel = inputLabel || ui.input;
  const actualOutputLabel = outputLabel || ui.output;

  const transformFn = transforms[transformId];
  const output = transformFn ? (input || transformId === "lorem-ipsum" ? transformFn(input) : "") : null;
  const hasError = !transformFn;

  const handleCopy = useCallback(async () => {
    if (!output) return;
    await navigator.clipboard.writeText(output);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  }, [output]);

  return (
    <div className="mx-auto w-full max-w-2xl space-y-4">
      <div className="rounded-2xl border border-gray-200 bg-white shadow-lg dark:border-gray-700 dark:bg-gray-900">
        <div className="px-6 py-5 space-y-4">
          {hasError && (
            <div
              className="rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700 dark:border-red-800 dark:bg-red-950/30 dark:text-red-400"
              role="alert"
            >
              Transform &quot;{transformId}&quot; not found. Available:{" "}
              {Object.keys(transforms).join(", ")}
            </div>
          )}

          {/* Input */}
          <div>
            <label
              htmlFor="text-input"
              className="mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-300"
            >
              {actualInputLabel}
            </label>
            <textarea
              id="text-input"
              rows={6}
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder={actualPlaceholder}
              aria-label={actualInputLabel}
              className="w-full resize-y rounded-lg border border-gray-300 bg-white p-4 text-sm text-gray-900 placeholder-gray-400 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/30 dark:border-gray-600 dark:bg-gray-800 dark:text-white dark:placeholder-gray-500"
            />
          </div>

          {/* Output */}
          <div>
            <div className="mb-1.5 flex items-center justify-between">
              <label
                htmlFor="text-output"
                className="text-sm font-medium text-gray-700 dark:text-gray-300"
              >
                {actualOutputLabel}
              </label>
              <button
                onClick={handleCopy}
                disabled={!output}
                aria-label={ui.copy}
                className="rounded-md bg-blue-600 px-3 py-1 text-sm text-white transition hover:bg-blue-700 disabled:opacity-40"
              >
                {copied ? `✓ ${ui.copied}` : ui.copy}
              </button>
            </div>
            <textarea
              id="text-output"
              rows={6}
              readOnly
              value={output ?? ""}
              aria-label={actualOutputLabel}
              aria-live="polite"
              className="w-full resize-y rounded-lg border border-gray-200 bg-gray-50 p-4 font-mono text-sm text-gray-900 dark:border-gray-700 dark:bg-gray-800 dark:text-white"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
