"use client";

import { useState, useMemo } from "react";

interface AgeResult {
  years: number;
  months: number;
  days: number;
  totalDays: number;
  totalWeeks: number;
  totalMonths: number;
  nextBirthdayDays: number;
  dayOfWeekBorn: string;
}

const DAYS_OF_WEEK = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

function parseDateInput(value: string): Date | null {
  const [year, month, day] = value.split("-").map(Number);
  if (!year || !month || !day) return null;
  const date = new Date(year, month - 1, day);
  if (
    date.getFullYear() !== year ||
    date.getMonth() !== month - 1 ||
    date.getDate() !== day
  ) {
    return null;
  }
  return date;
}

function getDaysInMonth(year: number, month: number): number {
  return new Date(year, month + 1, 0).getDate();
}

function calculateAge(dob: Date, end: Date): AgeResult | null {
  if (dob > end) return null;

  const dayOfWeekBorn = DAYS_OF_WEEK[dob.getDay()];

  // Years, months, days breakdown
  let years = end.getFullYear() - dob.getFullYear();
  let months = end.getMonth() - dob.getMonth();
  let days = end.getDate() - dob.getDate();

  if (days < 0) {
    months -= 1;
    const prevMonth = new Date(end.getFullYear(), end.getMonth(), 0);
    days += prevMonth.getDate();
  }

  if (months < 0) {
    years -= 1;
    months += 12;
  }

  // Total days via UTC to avoid DST issues
  const utcDob = Date.UTC(dob.getFullYear(), dob.getMonth(), dob.getDate());
  const utcEnd = Date.UTC(end.getFullYear(), end.getMonth(), end.getDate());
  const totalDays = Math.floor((utcEnd - utcDob) / (1000 * 60 * 60 * 24));
  const totalWeeks = Math.floor(totalDays / 7);

  // Total months
  const totalMonths = years * 12 + months;

  // Next birthday countdown from end date
  let nextBirthday = new Date(
    end.getFullYear(),
    dob.getMonth(),
    dob.getDate()
  );

  // Handle Feb 29 birthdays in non-leap years
  if (dob.getMonth() === 1 && dob.getDate() === 29) {
    const targetYear =
      nextBirthday <= end ? end.getFullYear() + 1 : end.getFullYear();
    let y = targetYear;
    while (getDaysInMonth(y, 1) < 29) y++;
    nextBirthday = new Date(y, 1, 29);
  } else if (nextBirthday <= end) {
    nextBirthday = new Date(
      end.getFullYear() + 1,
      dob.getMonth(),
      dob.getDate()
    );
  }

  const utcNext = Date.UTC(
    nextBirthday.getFullYear(),
    nextBirthday.getMonth(),
    nextBirthday.getDate()
  );
  const nextBirthdayDays = Math.floor(
    (utcNext - utcEnd) / (1000 * 60 * 60 * 24)
  );

  return {
    years,
    months,
    days,
    totalDays,
    totalWeeks,
    totalMonths,
    nextBirthdayDays,
    dayOfWeekBorn,
  };
}

function StatCard({
  label,
  value,
  accent = false,
}: {
  label: string;
  value: string | number;
  accent?: boolean;
}) {
  return (
    <div
      className={`rounded-xl border p-4 text-center transition-shadow hover:shadow-md ${
        accent
          ? "border-primary-200 bg-primary-50"
          : "border-gray-200 bg-white"
      }`}
    >
      <p
        className={`text-2xl font-bold ${accent ? "text-primary-700" : "text-gray-900"}`}
      >
        {value}
      </p>
      <p className="mt-1 text-sm font-medium text-gray-500">{label}</p>
    </div>
  );
}

export default function AgeCalculator() {
  const [dobInput, setDobInput] = useState("");
  const [endInput, setEndInput] = useState("");

  const todayStr = useMemo(() => {
    const now = new Date();
    const y = now.getFullYear();
    const m = String(now.getMonth() + 1).padStart(2, "0");
    const d = String(now.getDate()).padStart(2, "0");
    return `${y}-${m}-${d}`;
  }, []);

  const result = useMemo(() => {
    const dob = parseDateInput(dobInput);
    if (!dob) return null;

    const end = endInput ? parseDateInput(endInput) : parseDateInput(todayStr);
    if (!end) return null;

    return calculateAge(dob, end);
  }, [dobInput, endInput, todayStr]);

  const formatNumber = (n: number) => n.toLocaleString();

  return (
    <div className="space-y-6">
      {/* Date inputs */}
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label
            htmlFor="dob"
            className="mb-1 block text-sm font-medium text-gray-700"
          >
            Date of Birth
          </label>
          <input
            id="dob"
            type="date"
            value={dobInput}
            max={endInput || todayStr}
            onChange={(e) => setDobInput(e.target.value)}
            aria-label="Date of birth"
            className="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-gray-900 shadow-sm transition-colors focus:border-primary-400 focus:outline-none focus:ring-2 focus:ring-primary-200"
          />
        </div>

        <div>
          <label
            htmlFor="end-date"
            className="mb-1 block text-sm font-medium text-gray-700"
          >
            End Date{" "}
            <span className="font-normal text-gray-400">(optional)</span>
          </label>
          <input
            id="end-date"
            type="date"
            value={endInput}
            min={dobInput}
            placeholder={todayStr}
            onChange={(e) => setEndInput(e.target.value)}
            aria-label="End date, defaults to today"
            className="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-gray-900 shadow-sm transition-colors focus:border-primary-400 focus:outline-none focus:ring-2 focus:ring-primary-200"
          />
          {!endInput && dobInput && (
            <p className="mt-1 text-xs text-gray-400">
              Defaults to today ({todayStr})
            </p>
          )}
        </div>
      </div>

      {/* Results */}
      {result && (
        <div className="space-y-6">
          {/* Primary age display */}
          <div className="rounded-xl border border-primary-200 bg-gradient-to-br from-primary-50 to-white p-6 text-center shadow-sm">
            <p className="mb-1 text-sm font-medium tracking-wide text-primary-600 uppercase">
              Age
            </p>
            <p className="text-3xl font-bold text-gray-900 md:text-4xl">
              {result.years}{" "}
              <span className="text-lg font-medium text-gray-500">
                {result.years === 1 ? "year" : "years"}
              </span>
              {", "}
              {result.months}{" "}
              <span className="text-lg font-medium text-gray-500">
                {result.months === 1 ? "month" : "months"}
              </span>
              {", "}
              {result.days}{" "}
              <span className="text-lg font-medium text-gray-500">
                {result.days === 1 ? "day" : "days"}
              </span>
            </p>
          </div>

          {/* Stats grid */}
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            <StatCard
              label="Total Days"
              value={formatNumber(result.totalDays)}
            />
            <StatCard
              label="Total Weeks"
              value={formatNumber(result.totalWeeks)}
            />
            <StatCard
              label="Total Months"
              value={formatNumber(result.totalMonths)}
            />
            <StatCard
              label="Next Birthday In"
              value={`${formatNumber(result.nextBirthdayDays)} day${result.nextBirthdayDays === 1 ? "" : "s"}`}
              accent
            />
            <StatCard
              label="Born On"
              value={result.dayOfWeekBorn}
              accent
            />
          </div>
        </div>
      )}

      {/* Empty state */}
      {!dobInput && (
        <div className="rounded-xl border border-dashed border-gray-300 px-6 py-12 text-center">
          <p className="text-gray-400">
            Enter your date of birth to calculate your age.
          </p>
        </div>
      )}

      {/* Error: DOB after end date */}
      {dobInput && !result && parseDateInput(dobInput) && (
        <div className="rounded-xl border border-red-200 bg-red-50 px-6 py-4 text-center text-sm text-red-600">
          The date of birth must be before the end date.
        </div>
      )}
    </div>
  );
}
