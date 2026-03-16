"use client";

import { useState, useCallback } from "react";

/* ─── Helpers ─── */
function toDateStr(d: Date): string {
  return d.toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

function parseDate(s: string): Date | null {
  if (!s) return null;
  const d = new Date(s + "T00:00:00");
  return isNaN(d.getTime()) ? null : d;
}

function isLeapYear(y: number): boolean {
  return (y % 4 === 0 && y % 100 !== 0) || y % 400 === 0;
}

function daysInMonth(month: number, year: number): number {
  return new Date(year, month, 0).getDate();
}

function getISOWeek(d: Date): number {
  const tmp = new Date(d.getTime());
  tmp.setHours(0, 0, 0, 0);
  tmp.setDate(tmp.getDate() + 3 - ((tmp.getDay() + 6) % 7));
  const week1 = new Date(tmp.getFullYear(), 0, 4);
  return (
    1 +
    Math.round(
      ((tmp.getTime() - week1.getTime()) / 86400000 -
        3 +
        ((week1.getDay() + 6) % 7)) /
        7
    )
  );
}

function getDayOfYear(d: Date): number {
  const start = new Date(d.getFullYear(), 0, 0);
  const diff = d.getTime() - start.getTime();
  return Math.floor(diff / 86400000);
}

function countBusinessDays(start: Date, end: Date): number {
  let count = 0;
  const current = new Date(start);
  const endTime = end.getTime();
  const direction = current.getTime() <= endTime ? 1 : -1;
  if (direction === -1) return countBusinessDays(end, start);

  while (current.getTime() <= endTime) {
    const day = current.getDay();
    if (day !== 0 && day !== 6) count++;
    current.setDate(current.getDate() + 1);
  }
  return count;
}

function dateDiff(a: Date, b: Date) {
  const start = a < b ? a : b;
  const end = a < b ? b : a;

  const totalMs = end.getTime() - start.getTime();
  const totalDays = Math.floor(totalMs / 86400000);
  const totalWeeks = Math.floor(totalDays / 7);

  let years = end.getFullYear() - start.getFullYear();
  let months = end.getMonth() - start.getMonth();
  let days = end.getDate() - start.getDate();

  if (days < 0) {
    months--;
    days += daysInMonth(end.getMonth() || 12, end.getFullYear());
  }
  if (months < 0) {
    years--;
    months += 12;
  }

  return { years, months, days, totalDays, totalWeeks };
}

/* ─── Calculator Components ─── */
interface CalcProps {
  copied: boolean;
  onCopy: (text: string) => void;
}

function DateDifference({ copied, onCopy }: CalcProps) {
  const [date1, setDate1] = useState("");
  const [date2, setDate2] = useState("");

  const d1 = parseDate(date1);
  const d2 = parseDate(date2);
  const result = d1 && d2 ? dateDiff(d1, d2) : null;

  return (
    <div className="space-y-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="dd-start" className="mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-300">Start Date</label>
          <input id="dd-start" type="date" value={date1} onChange={(e) => setDate1(e.target.value)} aria-label="Start date" className="w-full rounded-lg border border-gray-300 bg-gray-50 px-3 py-2.5 text-sm text-gray-900 transition focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/30 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-100" />
        </div>
        <div>
          <label htmlFor="dd-end" className="mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-300">End Date</label>
          <input id="dd-end" type="date" value={date2} onChange={(e) => setDate2(e.target.value)} aria-label="End date" className="w-full rounded-lg border border-gray-300 bg-gray-50 px-3 py-2.5 text-sm text-gray-900 transition focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/30 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-100" />
        </div>
      </div>
      {result && (
        <ResultBox onCopy={onCopy} copied={copied} text={`${result.years}y ${result.months}m ${result.days}d (${result.totalDays} total days)`}>
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
            <Stat label="Years" value={result.years} />
            <Stat label="Months" value={result.months} />
            <Stat label="Days" value={result.days} />
            <Stat label="Total Days" value={result.totalDays} />
            <Stat label="Total Weeks" value={result.totalWeeks} />
          </div>
        </ResultBox>
      )}
    </div>
  );
}

function AddSubDays({ mode, copied, onCopy }: CalcProps & { mode: "add" | "subtract" }) {
  const [date, setDate] = useState("");
  const [days, setDays] = useState("");
  const d = parseDate(date);
  const n = parseInt(days);

  let result: Date | null = null;
  if (d && !isNaN(n)) {
    result = new Date(d);
    result.setDate(result.getDate() + (mode === "add" ? n : -n));
  }

  return (
    <div className="space-y-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="asd-date" className="mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-300">Date</label>
          <input id="asd-date" type="date" value={date} onChange={(e) => setDate(e.target.value)} aria-label="Date" className="w-full rounded-lg border border-gray-300 bg-gray-50 px-3 py-2.5 text-sm text-gray-900 transition focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/30 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-100" />
        </div>
        <div>
          <label htmlFor="asd-days" className="mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-300">Days</label>
          <input id="asd-days" type="number" min={0} value={days} onChange={(e) => setDays(e.target.value)} placeholder="Number of days" aria-label="Number of days" className="w-full rounded-lg border border-gray-300 bg-gray-50 px-3 py-2.5 text-sm text-gray-900 transition focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/30 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-100" />
        </div>
      </div>
      {result && (
        <ResultBox onCopy={onCopy} copied={copied} text={toDateStr(result)}>
          <p className="text-lg font-semibold text-gray-900 dark:text-white">{toDateStr(result)}</p>
        </ResultBox>
      )}
    </div>
  );
}

function AddMonths({ copied, onCopy }: CalcProps) {
  const [date, setDate] = useState("");
  const [months, setMonths] = useState("");
  const d = parseDate(date);
  const n = parseInt(months);

  let result: Date | null = null;
  if (d && !isNaN(n)) {
    result = new Date(d);
    result.setMonth(result.getMonth() + n);
  }

  return (
    <div className="space-y-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="am-date" className="mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-300">Date</label>
          <input id="am-date" type="date" value={date} onChange={(e) => setDate(e.target.value)} aria-label="Date" className="w-full rounded-lg border border-gray-300 bg-gray-50 px-3 py-2.5 text-sm text-gray-900 transition focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/30 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-100" />
        </div>
        <div>
          <label htmlFor="am-months" className="mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-300">Months</label>
          <input id="am-months" type="number" value={months} onChange={(e) => setMonths(e.target.value)} placeholder="Number of months" aria-label="Number of months" className="w-full rounded-lg border border-gray-300 bg-gray-50 px-3 py-2.5 text-sm text-gray-900 transition focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/30 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-100" />
        </div>
      </div>
      {result && (
        <ResultBox onCopy={onCopy} copied={copied} text={toDateStr(result)}>
          <p className="text-lg font-semibold text-gray-900 dark:text-white">{toDateStr(result)}</p>
        </ResultBox>
      )}
    </div>
  );
}

function AddYears({ copied, onCopy }: CalcProps) {
  const [date, setDate] = useState("");
  const [years, setYears] = useState("");
  const d = parseDate(date);
  const n = parseInt(years);

  let result: Date | null = null;
  if (d && !isNaN(n)) {
    result = new Date(d);
    result.setFullYear(result.getFullYear() + n);
  }

  return (
    <div className="space-y-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="ay-date" className="mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-300">Date</label>
          <input id="ay-date" type="date" value={date} onChange={(e) => setDate(e.target.value)} aria-label="Date" className="w-full rounded-lg border border-gray-300 bg-gray-50 px-3 py-2.5 text-sm text-gray-900 transition focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/30 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-100" />
        </div>
        <div>
          <label htmlFor="ay-years" className="mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-300">Years</label>
          <input id="ay-years" type="number" value={years} onChange={(e) => setYears(e.target.value)} placeholder="Number of years" aria-label="Number of years" className="w-full rounded-lg border border-gray-300 bg-gray-50 px-3 py-2.5 text-sm text-gray-900 transition focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/30 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-100" />
        </div>
      </div>
      {result && (
        <ResultBox onCopy={onCopy} copied={copied} text={toDateStr(result)}>
          <p className="text-lg font-semibold text-gray-900 dark:text-white">{toDateStr(result)}</p>
        </ResultBox>
      )}
    </div>
  );
}

function WeekNumber({ copied, onCopy }: CalcProps) {
  const [date, setDate] = useState("");
  const d = parseDate(date);
  const week = d ? getISOWeek(d) : null;

  return (
    <div className="space-y-4">
      <div>
        <label htmlFor="wn-date" className="mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-300">Date</label>
        <input id="wn-date" type="date" value={date} onChange={(e) => setDate(e.target.value)} aria-label="Date" className="w-full rounded-lg border border-gray-300 bg-gray-50 px-3 py-2.5 text-sm text-gray-900 transition focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/30 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-100 sm:max-w-xs" />
      </div>
      {week !== null && (
        <ResultBox onCopy={onCopy} copied={copied} text={`Week ${week}`}>
          <p className="text-lg font-semibold text-gray-900 dark:text-white">ISO Week {week}</p>
        </ResultBox>
      )}
    </div>
  );
}

function DayOfYear({ copied, onCopy }: CalcProps) {
  const [date, setDate] = useState("");
  const d = parseDate(date);
  const day = d ? getDayOfYear(d) : null;

  return (
    <div className="space-y-4">
      <div>
        <label htmlFor="doy-date" className="mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-300">Date</label>
        <input id="doy-date" type="date" value={date} onChange={(e) => setDate(e.target.value)} aria-label="Date" className="w-full rounded-lg border border-gray-300 bg-gray-50 px-3 py-2.5 text-sm text-gray-900 transition focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/30 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-100 sm:max-w-xs" />
      </div>
      {day !== null && (
        <ResultBox onCopy={onCopy} copied={copied} text={`Day ${day} of ${d!.getFullYear()}`}>
          <p className="text-lg font-semibold text-gray-900 dark:text-white">Day {day} of {d!.getFullYear()}</p>
          <p className="text-sm text-gray-500 dark:text-gray-400">{365 - day + (isLeapYear(d!.getFullYear()) ? 1 : 0)} days remaining in the year</p>
        </ResultBox>
      )}
    </div>
  );
}

function DayOfWeek({ copied, onCopy }: CalcProps) {
  const [date, setDate] = useState("");
  const d = parseDate(date);
  const dayName = d ? d.toLocaleDateString("en-US", { weekday: "long" }) : null;

  return (
    <div className="space-y-4">
      <div>
        <label htmlFor="dow-date" className="mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-300">Date</label>
        <input id="dow-date" type="date" value={date} onChange={(e) => setDate(e.target.value)} aria-label="Date" className="w-full rounded-lg border border-gray-300 bg-gray-50 px-3 py-2.5 text-sm text-gray-900 transition focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/30 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-100 sm:max-w-xs" />
      </div>
      {dayName && (
        <ResultBox onCopy={onCopy} copied={copied} text={dayName}>
          <p className="text-2xl font-bold text-gray-900 dark:text-white">{dayName}</p>
        </ResultBox>
      )}
    </div>
  );
}

function LeapYearCheck({ copied, onCopy }: CalcProps) {
  const [year, setYear] = useState("");
  const y = parseInt(year);
  const valid = !isNaN(y) && y > 0;
  const leap = valid ? isLeapYear(y) : null;

  let nextLeap: number | null = null;
  if (valid) {
    let ny = y + 1;
    while (!isLeapYear(ny)) ny++;
    nextLeap = ny;
  }

  return (
    <div className="space-y-4">
      <div>
        <label htmlFor="ly-year" className="mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-300">Year</label>
        <input id="ly-year" type="number" min={1} value={year} onChange={(e) => setYear(e.target.value)} placeholder="Enter year" aria-label="Year" className="w-full rounded-lg border border-gray-300 bg-gray-50 px-3 py-2.5 text-sm text-gray-900 transition focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/30 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-100 sm:max-w-xs" />
      </div>
      {leap !== null && (
        <ResultBox onCopy={onCopy} copied={copied} text={leap ? `${y} is a leap year` : `${y} is not a leap year`}>
          <p className={`text-lg font-semibold ${leap ? "text-green-600 dark:text-green-400" : "text-red-600 dark:text-red-400"}`}>
            {y} is {leap ? "" : "not "}a leap year
          </p>
          {nextLeap && (
            <p className="text-sm text-gray-500 dark:text-gray-400">Next leap year: {nextLeap}</p>
          )}
        </ResultBox>
      )}
    </div>
  );
}

function DaysInMonthCalc({ copied, onCopy }: CalcProps) {
  const [month, setMonth] = useState("");
  const [year, setYear] = useState("");
  const m = parseInt(month);
  const y = parseInt(year);
  const valid = !isNaN(m) && !isNaN(y) && m >= 1 && m <= 12 && y > 0;
  const days = valid ? daysInMonth(m, y) : null;

  return (
    <div className="space-y-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="dim-month" className="mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-300">Month</label>
          <select id="dim-month" value={month} onChange={(e) => setMonth(e.target.value)} aria-label="Month" className="w-full rounded-lg border border-gray-300 bg-gray-50 px-3 py-2.5 text-sm text-gray-900 transition focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/30 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-100">
            <option value="">Select month</option>
            {["January","February","March","April","May","June","July","August","September","October","November","December"].map((name, i) => (
              <option key={i} value={i + 1}>{name}</option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="dim-year" className="mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-300">Year</label>
          <input id="dim-year" type="number" min={1} value={year} onChange={(e) => setYear(e.target.value)} placeholder="Enter year" aria-label="Year" className="w-full rounded-lg border border-gray-300 bg-gray-50 px-3 py-2.5 text-sm text-gray-900 transition focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/30 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-100" />
        </div>
      </div>
      {days !== null && (
        <ResultBox onCopy={onCopy} copied={copied} text={`${days} days`}>
          <p className="text-lg font-semibold text-gray-900 dark:text-white">{days} days</p>
        </ResultBox>
      )}
    </div>
  );
}

function BusinessDays({ copied, onCopy }: CalcProps) {
  const [date1, setDate1] = useState("");
  const [date2, setDate2] = useState("");
  const d1 = parseDate(date1);
  const d2 = parseDate(date2);
  const count = d1 && d2 ? countBusinessDays(d1, d2) : null;

  return (
    <div className="space-y-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="bd-start" className="mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-300">Start Date</label>
          <input id="bd-start" type="date" value={date1} onChange={(e) => setDate1(e.target.value)} aria-label="Start date" className="w-full rounded-lg border border-gray-300 bg-gray-50 px-3 py-2.5 text-sm text-gray-900 transition focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/30 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-100" />
        </div>
        <div>
          <label htmlFor="bd-end" className="mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-300">End Date</label>
          <input id="bd-end" type="date" value={date2} onChange={(e) => setDate2(e.target.value)} aria-label="End date" className="w-full rounded-lg border border-gray-300 bg-gray-50 px-3 py-2.5 text-sm text-gray-900 transition focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/30 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-100" />
        </div>
      </div>
      {count !== null && (
        <ResultBox onCopy={onCopy} copied={copied} text={`${count} business days`}>
          <p className="text-lg font-semibold text-gray-900 dark:text-white">{count} business days</p>
          <p className="text-sm text-gray-500 dark:text-gray-400">Excludes weekends (Saturday & Sunday)</p>
        </ResultBox>
      )}
    </div>
  );
}

function DaysUntil({ copied, onCopy }: CalcProps) {
  const [date, setDate] = useState("");
  const d = parseDate(date);
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  let diff: number | null = null;
  if (d) {
    diff = Math.ceil((d.getTime() - today.getTime()) / 86400000);
  }

  return (
    <div className="space-y-4">
      <div>
        <label htmlFor="du-date" className="mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-300">Target Date</label>
        <input id="du-date" type="date" value={date} onChange={(e) => setDate(e.target.value)} aria-label="Target date" className="w-full rounded-lg border border-gray-300 bg-gray-50 px-3 py-2.5 text-sm text-gray-900 transition focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/30 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-100 sm:max-w-xs" />
      </div>
      {diff !== null && (
        <ResultBox onCopy={onCopy} copied={copied} text={`${Math.abs(diff)} days ${diff >= 0 ? "until" : "ago"}`}>
          <p className="text-2xl font-bold text-gray-900 dark:text-white">{Math.abs(diff)} days</p>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            {diff > 0 ? `${toDateStr(d!)} is in the future` : diff < 0 ? `${toDateStr(d!)} has passed` : "That's today!"}
          </p>
        </ResultBox>
      )}
    </div>
  );
}

function DaysSince({ copied, onCopy }: CalcProps) {
  const [date, setDate] = useState("");
  const d = parseDate(date);
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  let diff: number | null = null;
  if (d) {
    diff = Math.floor((today.getTime() - d.getTime()) / 86400000);
  }

  return (
    <div className="space-y-4">
      <div>
        <label htmlFor="ds-date" className="mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-300">Past Date</label>
        <input id="ds-date" type="date" value={date} onChange={(e) => setDate(e.target.value)} aria-label="Past date" className="w-full rounded-lg border border-gray-300 bg-gray-50 px-3 py-2.5 text-sm text-gray-900 transition focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/30 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-100 sm:max-w-xs" />
      </div>
      {diff !== null && (
        <ResultBox onCopy={onCopy} copied={copied} text={`${Math.abs(diff)} days ${diff >= 0 ? "since" : "until"}`}>
          <p className="text-2xl font-bold text-gray-900 dark:text-white">{Math.abs(diff)} days</p>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            {diff > 0 ? `Since ${toDateStr(d!)}` : diff < 0 ? `${toDateStr(d!)} is in the future` : "That's today!"}
          </p>
        </ResultBox>
      )}
    </div>
  );
}

/* ─── Shared UI ─── */
function Stat({ label, value }: { label: string; value: number }) {
  return (
    <div className="text-center">
      <p className="text-2xl font-bold text-gray-900 dark:text-white">{value}</p>
      <p className="text-xs text-gray-500 dark:text-gray-400">{label}</p>
    </div>
  );
}

function ResultBox({
  children,
  onCopy,
  copied,
  text,
}: {
  children: React.ReactNode;
  onCopy: (t: string) => void;
  copied: boolean;
  text: string;
}) {
  return (
    <div className="rounded-lg border border-gray-200 bg-gradient-to-br from-blue-50 to-indigo-50 p-5 dark:border-gray-700 dark:from-blue-950/40 dark:to-indigo-950/40" aria-live="polite" aria-atomic="true">
      <div className="flex items-start justify-between gap-3">
        <div className="flex-1">{children}</div>
        <button
          onClick={() => onCopy(text)}
          aria-label="Copy result"
          className="shrink-0 rounded-md bg-blue-600 px-3 py-2 text-sm text-white transition hover:bg-blue-700"
        >
          {copied ? "✓" : "Copy"}
        </button>
      </div>
    </div>
  );
}

/* ─── Calculator Map ─── */
const calculatorMap: Record<string, React.ComponentType<CalcProps & Record<string, unknown>>> = {
  "date-difference": DateDifference,
  "add-days": (props: CalcProps) => <AddSubDays {...props} mode="add" />,
  "subtract-days": (props: CalcProps) => <AddSubDays {...props} mode="subtract" />,
  "add-months": AddMonths,
  "add-years": AddYears,
  "week-number": WeekNumber,
  "day-of-year": DayOfYear,
  "day-of-week": DayOfWeek,
  "leap-year": LeapYearCheck,
  "days-in-month": DaysInMonthCalc,
  "business-days": BusinessDays,
  "days-until": DaysUntil,
  "days-since": DaysSince,
};

/* ─── Main Component ─── */
export default function DateCalculatorTemplate({
  config,
}: {
  config: Record<string, unknown>;
}) {
  const { calculatorId } = config as { calculatorId: string };
  const [copied, setCopied] = useState(false);

  const handleCopy = useCallback(async (text: string) => {
    await navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  }, []);

  const Calculator = calculatorMap[calculatorId];

  return (
    <div className="mx-auto w-full max-w-xl space-y-6">
      <div className="rounded-2xl border border-gray-200 bg-white shadow-lg dark:border-gray-700 dark:bg-gray-900">
        <div className="px-6 py-5">
          {!Calculator ? (
            <div
              className="rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700 dark:border-red-800 dark:bg-red-950/30 dark:text-red-400"
              role="alert"
            >
              Calculator &quot;{calculatorId}&quot; not found. Available:{" "}
              {Object.keys(calculatorMap).join(", ")}
            </div>
          ) : (
            <Calculator copied={copied} onCopy={handleCopy} />
          )}
        </div>
      </div>
    </div>
  );
}
