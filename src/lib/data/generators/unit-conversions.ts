import { Tool } from "../tools";

// ---------------------------------------------------------------------------
// Unit definition types
// ---------------------------------------------------------------------------

interface UnitDef {
  slug: string;
  name: string;
  abbr: string;
  toBase: number;
}

interface UnitCategory {
  name: string;
  baseUnit: string;
  units: UnitDef[];
}

// ---------------------------------------------------------------------------
// Unit categories with conversion factors (toBase = factor to base unit)
// ---------------------------------------------------------------------------

const unitCategories: UnitCategory[] = [
  {
    name: "Length",
    baseUnit: "meters",
    units: [
      { slug: "millimeters", name: "Millimeters", abbr: "mm", toBase: 0.001 },
      { slug: "centimeters", name: "Centimeters", abbr: "cm", toBase: 0.01 },
      { slug: "meters", name: "Meters", abbr: "m", toBase: 1 },
      { slug: "kilometers", name: "Kilometers", abbr: "km", toBase: 1000 },
      { slug: "inches", name: "Inches", abbr: "in", toBase: 0.0254 },
      { slug: "feet", name: "Feet", abbr: "ft", toBase: 0.3048 },
      { slug: "yards", name: "Yards", abbr: "yd", toBase: 0.9144 },
      { slug: "miles", name: "Miles", abbr: "mi", toBase: 1609.344 },
      {
        slug: "nautical-miles",
        name: "Nautical Miles",
        abbr: "nmi",
        toBase: 1852,
      },
    ],
  },
  {
    name: "Weight",
    baseUnit: "grams",
    units: [
      { slug: "milligrams", name: "Milligrams", abbr: "mg", toBase: 0.001 },
      { slug: "grams", name: "Grams", abbr: "g", toBase: 1 },
      { slug: "kilograms", name: "Kilograms", abbr: "kg", toBase: 1000 },
      {
        slug: "metric-tons",
        name: "Metric Tons",
        abbr: "t",
        toBase: 1000000,
      },
      { slug: "ounces", name: "Ounces", abbr: "oz", toBase: 28.3495 },
      { slug: "pounds", name: "Pounds", abbr: "lb", toBase: 453.592 },
      { slug: "stones", name: "Stones", abbr: "st", toBase: 6350.29 },
    ],
  },
  {
    name: "Volume",
    baseUnit: "liters",
    units: [
      { slug: "milliliters", name: "Milliliters", abbr: "ml", toBase: 0.001 },
      { slug: "liters", name: "Liters", abbr: "l", toBase: 1 },
      {
        slug: "cubic-meters",
        name: "Cubic Meters",
        abbr: "m³",
        toBase: 1000,
      },
      {
        slug: "teaspoons",
        name: "Teaspoons",
        abbr: "tsp",
        toBase: 0.00492892,
      },
      {
        slug: "tablespoons",
        name: "Tablespoons",
        abbr: "tbsp",
        toBase: 0.0147868,
      },
      {
        slug: "fluid-ounces",
        name: "Fluid Ounces",
        abbr: "fl oz",
        toBase: 0.0295735,
      },
      { slug: "cups", name: "Cups", abbr: "cup", toBase: 0.236588 },
      { slug: "pints", name: "Pints", abbr: "pt", toBase: 0.473176 },
      { slug: "quarts", name: "Quarts", abbr: "qt", toBase: 0.946353 },
      { slug: "gallons", name: "Gallons", abbr: "gal", toBase: 3.78541 },
    ],
  },
  {
    name: "Area",
    baseUnit: "square meters",
    units: [
      {
        slug: "square-millimeters",
        name: "Square Millimeters",
        abbr: "mm²",
        toBase: 0.000001,
      },
      {
        slug: "square-centimeters",
        name: "Square Centimeters",
        abbr: "cm²",
        toBase: 0.0001,
      },
      {
        slug: "square-meters",
        name: "Square Meters",
        abbr: "m²",
        toBase: 1,
      },
      {
        slug: "square-kilometers",
        name: "Square Kilometers",
        abbr: "km²",
        toBase: 1000000,
      },
      {
        slug: "square-inches",
        name: "Square Inches",
        abbr: "in²",
        toBase: 0.00064516,
      },
      {
        slug: "square-feet",
        name: "Square Feet",
        abbr: "ft²",
        toBase: 0.092903,
      },
      {
        slug: "square-yards",
        name: "Square Yards",
        abbr: "yd²",
        toBase: 0.836127,
      },
      { slug: "acres", name: "Acres", abbr: "ac", toBase: 4046.86 },
      { slug: "hectares", name: "Hectares", abbr: "ha", toBase: 10000 },
    ],
  },
  {
    name: "Speed",
    baseUnit: "meters per second",
    units: [
      {
        slug: "meters-per-second",
        name: "Meters per Second",
        abbr: "m/s",
        toBase: 1,
      },
      {
        slug: "kilometers-per-hour",
        name: "Kilometers per Hour",
        abbr: "km/h",
        toBase: 0.277778,
      },
      {
        slug: "miles-per-hour",
        name: "Miles per Hour",
        abbr: "mph",
        toBase: 0.44704,
      },
      { slug: "knots", name: "Knots", abbr: "kn", toBase: 0.514444 },
      {
        slug: "feet-per-second",
        name: "Feet per Second",
        abbr: "ft/s",
        toBase: 0.3048,
      },
    ],
  },
  {
    name: "Digital Storage",
    baseUnit: "bytes",
    units: [
      { slug: "bits", name: "Bits", abbr: "bit", toBase: 0.125 },
      { slug: "bytes", name: "Bytes", abbr: "B", toBase: 1 },
      { slug: "kilobytes", name: "Kilobytes", abbr: "KB", toBase: 1024 },
      { slug: "megabytes", name: "Megabytes", abbr: "MB", toBase: 1048576 },
      {
        slug: "gigabytes",
        name: "Gigabytes",
        abbr: "GB",
        toBase: 1073741824,
      },
      {
        slug: "terabytes",
        name: "Terabytes",
        abbr: "TB",
        toBase: 1099511627776,
      },
    ],
  },
  {
    name: "Time",
    baseUnit: "seconds",
    units: [
      {
        slug: "milliseconds",
        name: "Milliseconds",
        abbr: "ms",
        toBase: 0.001,
      },
      { slug: "seconds", name: "Seconds", abbr: "s", toBase: 1 },
      { slug: "minutes", name: "Minutes", abbr: "min", toBase: 60 },
      { slug: "hours", name: "Hours", abbr: "hr", toBase: 3600 },
      { slug: "days", name: "Days", abbr: "day", toBase: 86400 },
      { slug: "weeks", name: "Weeks", abbr: "wk", toBase: 604800 },
    ],
  },
  {
    name: "Pressure",
    baseUnit: "pascals",
    units: [
      { slug: "pascals", name: "Pascals", abbr: "Pa", toBase: 1 },
      { slug: "kilopascals", name: "Kilopascals", abbr: "kPa", toBase: 1000 },
      { slug: "bar", name: "Bar", abbr: "bar", toBase: 100000 },
      { slug: "psi", name: "PSI", abbr: "psi", toBase: 6894.76 },
      {
        slug: "atmospheres",
        name: "Atmospheres",
        abbr: "atm",
        toBase: 101325,
      },
    ],
  },
  {
    name: "Energy",
    baseUnit: "joules",
    units: [
      { slug: "joules", name: "Joules", abbr: "J", toBase: 1 },
      { slug: "kilojoules", name: "Kilojoules", abbr: "kJ", toBase: 1000 },
      { slug: "calories", name: "Calories", abbr: "cal", toBase: 4.184 },
      {
        slug: "kilocalories",
        name: "Kilocalories",
        abbr: "kcal",
        toBase: 4184,
      },
      { slug: "watt-hours", name: "Watt-Hours", abbr: "Wh", toBase: 3600 },
      {
        slug: "kilowatt-hours",
        name: "Kilowatt-Hours",
        abbr: "kWh",
        toBase: 3600000,
      },
      { slug: "btu", name: "BTU", abbr: "BTU", toBase: 1055.06 },
    ],
  },
];

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

function formatFactor(value: number): string {
  if (Number.isInteger(value)) return value.toString();
  const precise = parseFloat(value.toPrecision(6));
  // Avoid scientific notation for display
  if (Math.abs(precise) >= 1e-6 && Math.abs(precise) < 1e15) {
    const decimals = Math.max(
      0,
      -Math.floor(Math.log10(Math.abs(precise))) + 5,
    );
    return parseFloat(precise.toFixed(decimals)).toString();
  }
  return precise.toPrecision(6);
}

function generateTitle(
  fromName: string,
  toName: string,
  fromAbbr: string,
  toAbbr: string,
): string {
  const full = `Convert ${fromName} to ${toName} — Free ${fromAbbr} to ${toAbbr} Converter | ToolOrbit`;
  if (full.length <= 65) return full;

  const medium = `${fromName} to ${toName} — ${fromAbbr} to ${toAbbr} Converter | ToolOrbit`;
  if (medium.length <= 65) return medium;

  const short = `${fromName} to ${toName} Converter | ToolOrbit`;
  if (short.length <= 65) return short;

  return `${fromAbbr} to ${toAbbr} Converter | ToolOrbit`;
}

function generateDescription(
  fromName: string,
  toName: string,
  fromAbbr: string,
  toAbbr: string,
): string {
  const full = `Convert ${fromName.toLowerCase()} (${fromAbbr}) to ${toName.toLowerCase()} (${toAbbr}) instantly. Free online converter with formula, examples, and conversion table.`;
  if (full.length <= 160) return full;

  return `Convert ${fromAbbr} to ${toAbbr} instantly. Free online converter with formula, examples, and conversion table.`;
}

function buildRelatedSlugs(
  from: UnitDef,
  to: UnitDef,
  units: UnitDef[],
): string[] {
  const related: string[] = [];

  // Reverse conversion is always related
  related.push(`${to.slug}-to-${from.slug}`);

  // Other conversions from the same source unit
  for (const other of units) {
    if (related.length >= 4) break;
    if (other.slug !== from.slug && other.slug !== to.slug) {
      related.push(`${from.slug}-to-${other.slug}`);
    }
  }

  return related.slice(0, 4);
}

function generateTool(
  from: UnitDef,
  to: UnitDef,
  units: UnitDef[],
): Tool {
  const factor = from.toBase / to.toBase;
  const factorStr = formatFactor(factor);
  const fromLower = from.name.toLowerCase();
  const toLower = to.name.toLowerCase();

  return {
    slug: `${from.slug}-to-${to.slug}`,
    name: `${from.name} to ${to.name} Converter`,
    title: generateTitle(from.name, to.name, from.abbr, to.abbr),
    description: generateDescription(from.name, to.name, from.abbr, to.abbr),
    headline: `Convert ${from.name} to ${to.name}`,
    intro: `Enter a value in ${fromLower} to instantly convert to ${toLower}. See the conversion formula, a table of common values, and copy the result.`,
    categorySlug: "unit-converters",
    keywords: [
      `${fromLower} to ${toLower}`,
      `convert ${fromLower} to ${toLower}`,
      `${from.abbr} to ${to.abbr}`,
      `${fromLower} to ${toLower} converter`,
    ],
    faqs: [
      {
        question: `How many ${toLower} in one ${from.slug.replace(/-/g, " ")}?`,
        answer: `There are ${factorStr} ${toLower} in one ${from.slug.replace(/-/g, " ")} (1 ${from.abbr} = ${factorStr} ${to.abbr}).`,
      },
      {
        question: `What is the formula to convert ${fromLower} to ${toLower}?`,
        answer: `Multiply the value in ${fromLower} by ${factorStr}. Formula: ${to.name} = ${from.name} × ${factorStr}.`,
      },
      {
        question: "Is the converter accurate?",
        answer:
          "Yes, this converter uses precise conversion factors and is suitable for everyday calculations, academic work, and professional use.",
      },
    ],
    howToUse: [
      `Enter the value in ${fromLower} you want to convert.`,
      `The result in ${toLower} is displayed instantly.`,
      "Copy the result or swap the units to convert in the opposite direction.",
    ],
    relatedSlugs: buildRelatedSlugs(from, to, units),
    template: "pair-converter",
    templateConfig: {
      fromUnit: from.name,
      toUnit: to.name,
      fromAbbr: from.abbr,
      toAbbr: to.abbr,
      factor,
      formula: `${to.name} = ${from.name} × ${factorStr}`,
    },
  };
}

// ---------------------------------------------------------------------------
// Generate all unit conversion tools
// ---------------------------------------------------------------------------

const generatedUnitTools: Tool[] = [];
const slugSet = new Set<string>();

for (const category of unitCategories) {
  const { units } = category;
  for (const from of units) {
    for (const to of units) {
      if (from.slug === to.slug) continue;

      const tool = generateTool(from, to, units);

      if (!slugSet.has(tool.slug)) {
        slugSet.add(tool.slug);
        generatedUnitTools.push(tool);
      }
    }
  }
}

// ---------------------------------------------------------------------------
// Exports
// ---------------------------------------------------------------------------

export { generatedUnitTools };
export const unitToolCount = generatedUnitTools.length;
