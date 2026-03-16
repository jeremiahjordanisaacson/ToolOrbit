import { Tool } from "../tools";

// ---------------------------------------------------------------------------
// Helper for compact tool generation
// ---------------------------------------------------------------------------
function t(
  slug: string, name: string, titleShort: string, desc: string,
  headline: string, intro: string, cat: string, kw: string[],
  faqs: { question: string; answer: string }[], howTo: string[],
  related: string[], template?: string, config?: Record<string, unknown>
): Tool {
  return {
    slug, name, title: `${titleShort} | ToolOrbit`, description: desc,
    headline, intro, categorySlug: cat, keywords: kw, faqs,
    howToUse: howTo, relatedSlugs: related, template, templateConfig: config,
  };
}

// ---------------------------------------------------------------------------
// PAIR CONVERTER GENERATOR
// ---------------------------------------------------------------------------
interface UnitDef { slug: string; name: string; abbr: string; toBase: number }

function genConverters(units: UnitDef[], cat: string): Tool[] {
  const tools: Tool[] = [];
  for (const from of units) {
    for (const to of units) {
      if (from.slug === to.slug) continue;
      const factor = from.toBase / to.toBase;
      const slug = `${from.slug}-to-${to.slug}`;
      tools.push({
        slug,
        name: `${from.name} to ${to.name} Converter`,
        title: `Convert ${from.name} to ${to.name} — Free Converter | ToolOrbit`,
        description: `Convert ${from.name} (${from.abbr}) to ${to.name} (${to.abbr}) instantly. Free online converter with formula and table.`,
        headline: `Convert ${from.name} to ${to.name}`,
        intro: `Enter a value in ${from.name} to convert to ${to.name}. See the formula, common values, and copy your result.`,
        categorySlug: "unit-converters",
        keywords: [`${from.slug} to ${to.slug}`, `convert ${from.name.toLowerCase()} to ${to.name.toLowerCase()}`, `${from.abbr} to ${to.abbr}`, `${from.name.toLowerCase()} ${to.name.toLowerCase()} converter`],
        faqs: [
          { question: `How many ${to.name.toLowerCase()} in one ${from.name.toLowerCase()}?`, answer: `1 ${from.name.toLowerCase()} = ${factor < 0.001 || factor > 99999 ? factor.toExponential(4) : parseFloat(factor.toPrecision(6))} ${to.name.toLowerCase()}.` },
          { question: `What is the conversion formula?`, answer: `${to.name} = ${from.name} × ${parseFloat(factor.toPrecision(6))}` },
          { question: `Is this converter accurate?`, answer: `Yes. Standard conversion factors are used for precise results.` },
        ],
        howToUse: [`Enter a value in ${from.name.toLowerCase()}.`, `See the result in ${to.name.toLowerCase()} instantly.`, `Copy the result or swap direction.`],
        relatedSlugs: units.filter(u => u.slug !== from.slug && u.slug !== to.slug).slice(0, 2).map(u => `${from.slug}-to-${u.slug}`),
        template: "pair-converter",
        templateConfig: { fromUnit: from.name, toUnit: to.name, fromAbbr: from.abbr, toAbbr: to.abbr, factor, formula: `${to.name} = ${from.name} × ${parseFloat(factor.toPrecision(6))}` },
      });
    }
  }
  return tools;
}

// Temperature (specific pairs — can't use factor multiplication)
const temperatureTools: Tool[] = [
  t("celsius-to-fahrenheit", "Celsius to Fahrenheit Converter", "Convert Celsius to Fahrenheit — Free °C to °F Converter", "Convert Celsius to Fahrenheit instantly. Free online temperature converter with formula.", "Convert Celsius to Fahrenheit", "Enter a temperature in Celsius to convert to Fahrenheit. Formula: °F = (°C × 9/5) + 32.", "unit-converters", ["celsius to fahrenheit", "c to f", "°C to °F", "temperature converter"], [{ question: "What is the formula?", answer: "°F = (°C × 9/5) + 32. For example, 100°C = 212°F." }, { question: "What is 0°C in Fahrenheit?", answer: "0°C = 32°F (the freezing point of water)." }, { question: "What is normal body temperature?", answer: "37°C = 98.6°F." }], ["Enter degrees Celsius.", "See Fahrenheit instantly.", "Copy or swap."], ["fahrenheit-to-celsius", "celsius-to-kelvin", "temperature-converter"], "pair-converter", { fromUnit: "Celsius", toUnit: "Fahrenheit", fromAbbr: "°C", toAbbr: "°F", factor: 1.8, formula: "°F = (°C × 9/5) + 32" }),
  t("fahrenheit-to-celsius", "Fahrenheit to Celsius Converter", "Convert Fahrenheit to Celsius — Free °F to °C Converter", "Convert Fahrenheit to Celsius instantly. Free online temperature converter with formula.", "Convert Fahrenheit to Celsius", "Enter a temperature in Fahrenheit to convert to Celsius. Formula: °C = (°F - 32) × 5/9.", "unit-converters", ["fahrenheit to celsius", "f to c", "°F to °C", "temperature converter"], [{ question: "What is the formula?", answer: "°C = (°F - 32) × 5/9. For example, 72°F ≈ 22.2°C." }, { question: "What is 32°F in Celsius?", answer: "32°F = 0°C (the freezing point of water)." }, { question: "What is room temperature?", answer: "About 68-72°F = 20-22°C." }], ["Enter degrees Fahrenheit.", "See Celsius instantly.", "Copy or swap."], ["celsius-to-fahrenheit", "kelvin-to-celsius", "temperature-converter"], "pair-converter", { fromUnit: "Fahrenheit", toUnit: "Celsius", fromAbbr: "°F", toAbbr: "°C", factor: 0.5556, formula: "°C = (°F - 32) × 5/9" }),
  t("celsius-to-kelvin", "Celsius to Kelvin Converter", "Convert Celsius to Kelvin — Free °C to K Converter", "Convert Celsius to Kelvin instantly. Free online temperature converter.", "Convert Celsius to Kelvin", "Enter Celsius to convert to Kelvin. Formula: K = °C + 273.15.", "unit-converters", ["celsius to kelvin", "c to k", "°C to K"], [{ question: "What is the formula?", answer: "K = °C + 273.15" }, { question: "What is 0°C in Kelvin?", answer: "273.15 K." }, { question: "What is absolute zero?", answer: "-273.15°C = 0 K." }], ["Enter Celsius.", "See Kelvin.", "Copy."], ["kelvin-to-celsius", "celsius-to-fahrenheit", "temperature-converter"], "pair-converter", { fromUnit: "Celsius", toUnit: "Kelvin", fromAbbr: "°C", toAbbr: "K", factor: 1, formula: "K = °C + 273.15" }),
  t("kelvin-to-celsius", "Kelvin to Celsius Converter", "Convert Kelvin to Celsius — Free K to °C Converter", "Convert Kelvin to Celsius instantly. Free online temperature converter.", "Convert Kelvin to Celsius", "Enter Kelvin to convert to Celsius. Formula: °C = K - 273.15.", "unit-converters", ["kelvin to celsius", "k to c", "K to °C"], [{ question: "What is the formula?", answer: "°C = K - 273.15" }, { question: "What is 300K in Celsius?", answer: "26.85°C." }, { question: "Can Kelvin be negative?", answer: "No. 0 K is absolute zero, the lowest possible temperature." }], ["Enter Kelvin.", "See Celsius.", "Copy."], ["celsius-to-kelvin", "fahrenheit-to-celsius", "temperature-converter"], "pair-converter", { fromUnit: "Kelvin", toUnit: "Celsius", fromAbbr: "K", toAbbr: "°C", factor: 1, formula: "°C = K - 273.15" }),
  t("fahrenheit-to-kelvin", "Fahrenheit to Kelvin Converter", "Convert Fahrenheit to Kelvin — Free °F to K Converter", "Convert Fahrenheit to Kelvin instantly. Free temperature converter.", "Convert Fahrenheit to Kelvin", "Enter Fahrenheit to convert to Kelvin.", "unit-converters", ["fahrenheit to kelvin", "f to k", "°F to K"], [{ question: "What is the formula?", answer: "K = (°F - 32) × 5/9 + 273.15" }, { question: "What is 32°F in Kelvin?", answer: "273.15 K." }], ["Enter Fahrenheit.", "See Kelvin.", "Copy."], ["kelvin-to-fahrenheit", "celsius-to-kelvin"], "pair-converter", { fromUnit: "Fahrenheit", toUnit: "Kelvin", fromAbbr: "°F", toAbbr: "K", factor: 0.5556, formula: "K = (°F - 32) × 5/9 + 273.15" }),
  t("kelvin-to-fahrenheit", "Kelvin to Fahrenheit Converter", "Convert Kelvin to Fahrenheit — Free K to °F Converter", "Convert Kelvin to Fahrenheit instantly. Free temperature converter.", "Convert Kelvin to Fahrenheit", "Enter Kelvin to convert to Fahrenheit.", "unit-converters", ["kelvin to fahrenheit", "k to f", "K to °F"], [{ question: "What is the formula?", answer: "°F = (K - 273.15) × 9/5 + 32" }, { question: "What is 0K in Fahrenheit?", answer: "-459.67°F (absolute zero)." }], ["Enter Kelvin.", "See Fahrenheit.", "Copy."], ["fahrenheit-to-kelvin", "celsius-to-fahrenheit"], "pair-converter", { fromUnit: "Kelvin", toUnit: "Fahrenheit", fromAbbr: "K", toAbbr: "°F", factor: 1.8, formula: "°F = (K - 273.15) × 9/5 + 32" }),
];

// Cooking / Volume extras
const cookingUnits: UnitDef[] = [
  { slug: "cups", name: "Cups", abbr: "cup", toBase: 236.588 },
  { slug: "tablespoons", name: "Tablespoons", abbr: "tbsp", toBase: 14.7868 },
  { slug: "teaspoons", name: "Teaspoons", abbr: "tsp", toBase: 4.92892 },
  { slug: "fluid-ounces", name: "Fluid Ounces", abbr: "fl oz", toBase: 29.5735 },
  { slug: "pints", name: "Pints", abbr: "pt", toBase: 473.176 },
  { slug: "quarts", name: "Quarts", abbr: "qt", toBase: 946.353 },
  { slug: "gallons", name: "Gallons", abbr: "gal", toBase: 3785.41 },
  { slug: "milliliters", name: "Milliliters", abbr: "ml", toBase: 1 },
  { slug: "liters", name: "Liters", abbr: "l", toBase: 1000 },
];

// Power
const powerUnits: UnitDef[] = [
  { slug: "watts", name: "Watts", abbr: "W", toBase: 1 },
  { slug: "kilowatts", name: "Kilowatts", abbr: "kW", toBase: 1000 },
  { slug: "megawatts", name: "Megawatts", abbr: "MW", toBase: 1000000 },
  { slug: "horsepower", name: "Horsepower", abbr: "hp", toBase: 745.7 },
  { slug: "btu-per-hour", name: "BTU/hour", abbr: "BTU/h", toBase: 0.293071 },
];

// Force
const forceUnits: UnitDef[] = [
  { slug: "newtons", name: "Newtons", abbr: "N", toBase: 1 },
  { slug: "kilonewtons", name: "Kilonewtons", abbr: "kN", toBase: 1000 },
  { slug: "pounds-force", name: "Pounds-force", abbr: "lbf", toBase: 4.44822 },
  { slug: "dynes", name: "Dynes", abbr: "dyn", toBase: 0.00001 },
  { slug: "kilograms-force", name: "Kilograms-force", abbr: "kgf", toBase: 9.80665 },
];

// Angle
const angleUnits: UnitDef[] = [
  { slug: "degrees", name: "Degrees", abbr: "°", toBase: 1 },
  { slug: "radians", name: "Radians", abbr: "rad", toBase: 57.2958 },
  { slug: "gradians", name: "Gradians", abbr: "gon", toBase: 0.9 },
  { slug: "arcminutes", name: "Arcminutes", abbr: "'", toBase: 1 / 60 },
  { slug: "arcseconds", name: "Arcseconds", abbr: '"', toBase: 1 / 3600 },
];

// Data Rate
const dataRateUnits: UnitDef[] = [
  { slug: "bits-per-second", name: "Bits/s", abbr: "bps", toBase: 1 },
  { slug: "kilobits-per-second", name: "Kilobits/s", abbr: "Kbps", toBase: 1000 },
  { slug: "megabits-per-second", name: "Megabits/s", abbr: "Mbps", toBase: 1000000 },
  { slug: "gigabits-per-second", name: "Gigabits/s", abbr: "Gbps", toBase: 1000000000 },
  { slug: "bytes-per-second", name: "Bytes/s", abbr: "B/s", toBase: 8 },
  { slug: "kilobytes-per-second", name: "Kilobytes/s", abbr: "KB/s", toBase: 8000 },
  { slug: "megabytes-per-second", name: "Megabytes/s", abbr: "MB/s", toBase: 8000000 },
];

// Torque
const torqueUnits: UnitDef[] = [
  { slug: "newton-meters", name: "Newton-meters", abbr: "N·m", toBase: 1 },
  { slug: "foot-pounds", name: "Foot-pounds", abbr: "ft·lbf", toBase: 1.35582 },
  { slug: "inch-pounds", name: "Inch-pounds", abbr: "in·lbf", toBase: 0.112985 },
  { slug: "kilogram-meters", name: "Kilogram-meters", abbr: "kgf·m", toBase: 9.80665 },
];

// Frequency
const frequencyUnits: UnitDef[] = [
  { slug: "hertz", name: "Hertz", abbr: "Hz", toBase: 1 },
  { slug: "kilohertz", name: "Kilohertz", abbr: "kHz", toBase: 1000 },
  { slug: "megahertz", name: "Megahertz", abbr: "MHz", toBase: 1000000 },
  { slug: "gigahertz", name: "Gigahertz", abbr: "GHz", toBase: 1000000000 },
  { slug: "rpm", name: "RPM", abbr: "rpm", toBase: 1 / 60 },
];

// Density
const densityUnits: UnitDef[] = [
  { slug: "kg-per-cubic-meter", name: "kg/m³", abbr: "kg/m³", toBase: 1 },
  { slug: "grams-per-ml", name: "Grams/mL", abbr: "g/mL", toBase: 1000 },
  { slug: "kg-per-liter", name: "kg/Liter", abbr: "kg/L", toBase: 1000 },
  { slug: "pounds-per-cubic-foot", name: "lb/ft³", abbr: "lb/ft³", toBase: 16.0185 },
  { slug: "pounds-per-gallon", name: "lb/gallon", abbr: "lb/gal", toBase: 119.826 },
];

// Fuel Economy
const fuelUnits: UnitDef[] = [
  { slug: "miles-per-gallon", name: "Miles/gallon", abbr: "mpg", toBase: 1 },
  { slug: "km-per-liter", name: "Kilometers/liter", abbr: "km/L", toBase: 2.35215 },
  { slug: "liters-per-100km", name: "Liters/100km", abbr: "L/100km", toBase: 0.00425144 },
];

// Luminance
const luminanceUnits: UnitDef[] = [
  { slug: "lumens", name: "Lumens", abbr: "lm", toBase: 1 },
  { slug: "candela", name: "Candela", abbr: "cd", toBase: 12.566 },
  { slug: "lux", name: "Lux", abbr: "lx", toBase: 1 },
  { slug: "foot-candles", name: "Foot-candles", abbr: "fc", toBase: 10.764 },
];

// Electric Current
const currentUnits: UnitDef[] = [
  { slug: "amperes", name: "Amperes", abbr: "A", toBase: 1 },
  { slug: "milliamperes", name: "Milliamperes", abbr: "mA", toBase: 0.001 },
  { slug: "microamperes", name: "Microamperes", abbr: "µA", toBase: 0.000001 },
  { slug: "kiloamperes", name: "Kiloamperes", abbr: "kA", toBase: 1000 },
];

// Voltage
const voltageUnits: UnitDef[] = [
  { slug: "volts", name: "Volts", abbr: "V", toBase: 1 },
  { slug: "millivolts", name: "Millivolts", abbr: "mV", toBase: 0.001 },
  { slug: "kilovolts", name: "Kilovolts", abbr: "kV", toBase: 1000 },
  { slug: "megavolts", name: "Megavolts", abbr: "MV", toBase: 1000000 },
];

// Flow Rate
const flowUnits: UnitDef[] = [
  { slug: "liters-per-minute", name: "Liters/min", abbr: "L/min", toBase: 1 },
  { slug: "liters-per-second", name: "Liters/sec", abbr: "L/s", toBase: 60 },
  { slug: "gallons-per-minute", name: "Gallons/min", abbr: "gpm", toBase: 3.78541 },
  { slug: "cubic-meters-per-hour", name: "m³/hour", abbr: "m³/h", toBase: 16.6667 },
  { slug: "cubic-feet-per-minute", name: "ft³/min", abbr: "cfm", toBase: 28.3168 },
];

// Capacitance
const capacitanceUnits: UnitDef[] = [
  { slug: "farads", name: "Farads", abbr: "F", toBase: 1 },
  { slug: "millifarads", name: "Millifarads", abbr: "mF", toBase: 0.001 },
  { slug: "microfarads", name: "Microfarads", abbr: "µF", toBase: 0.000001 },
  { slug: "nanofarads", name: "Nanofarads", abbr: "nF", toBase: 0.000000001 },
  { slug: "picofarads", name: "Picofarads", abbr: "pF", toBase: 0.000000000001 },
];

// Inductance
const inductanceUnits: UnitDef[] = [
  { slug: "henries", name: "Henries", abbr: "H", toBase: 1 },
  { slug: "millihenries", name: "Millihenries", abbr: "mH", toBase: 0.001 },
  { slug: "microhenries", name: "Microhenries", abbr: "µH", toBase: 0.000001 },
  { slug: "nanohenries", name: "Nanohenries", abbr: "nH", toBase: 0.000000001 },
];

// Resistance
const resistanceUnits: UnitDef[] = [
  { slug: "ohms", name: "Ohms", abbr: "Ω", toBase: 1 },
  { slug: "milliohms", name: "Milliohms", abbr: "mΩ", toBase: 0.001 },
  { slug: "kilohms", name: "Kilohms", abbr: "kΩ", toBase: 1000 },
  { slug: "megohms", name: "Megohms", abbr: "MΩ", toBase: 1000000 },
];

// Magnetic Field
const magneticUnits: UnitDef[] = [
  { slug: "teslas", name: "Teslas", abbr: "T", toBase: 1 },
  { slug: "milliteslas", name: "Milliteslas", abbr: "mT", toBase: 0.001 },
  { slug: "microteslas", name: "Microteslas", abbr: "µT", toBase: 0.000001 },
  { slug: "gauss", name: "Gauss", abbr: "G", toBase: 0.0001 },
];

// Acceleration
const accelerationUnits: UnitDef[] = [
  { slug: "meters-per-second-squared", name: "m/s²", abbr: "m/s²", toBase: 1 },
  { slug: "feet-per-second-squared", name: "ft/s²", abbr: "ft/s²", toBase: 0.3048 },
  { slug: "standard-gravity", name: "Standard gravity", abbr: "g₀", toBase: 9.80665 },
  { slug: "gal-acceleration", name: "Gal", abbr: "Gal", toBase: 0.01 },
];

// Sound Level
const soundUnits: UnitDef[] = [
  { slug: "decibels", name: "Decibels", abbr: "dB", toBase: 1 },
  { slug: "bels", name: "Bels", abbr: "B", toBase: 10 },
  { slug: "nepers", name: "Nepers", abbr: "Np", toBase: 8.686 },
];

// Radiation Dose
const radiationUnits: UnitDef[] = [
  { slug: "sieverts", name: "Sieverts", abbr: "Sv", toBase: 1 },
  { slug: "millisieverts", name: "Millisieverts", abbr: "mSv", toBase: 0.001 },
  { slug: "microsieverts", name: "Microsieverts", abbr: "µSv", toBase: 0.000001 },
  { slug: "rems", name: "Rems", abbr: "rem", toBase: 0.01 },
  { slug: "millirems", name: "Millirems", abbr: "mrem", toBase: 0.00001 },
];

// Concentration
const concentrationUnits: UnitDef[] = [
  { slug: "parts-per-million", name: "Parts per million", abbr: "ppm", toBase: 1 },
  { slug: "parts-per-billion", name: "Parts per billion", abbr: "ppb", toBase: 0.001 },
  { slug: "parts-per-trillion", name: "Parts per trillion", abbr: "ppt", toBase: 0.000001 },
  { slug: "percent-concentration", name: "Percent", abbr: "%", toBase: 10000 },
  { slug: "milligrams-per-liter", name: "mg/L", abbr: "mg/L", toBase: 1 },
];

// ---------------------------------------------------------------------------
// TEXT TRANSFORM TOOLS
// ---------------------------------------------------------------------------
const textTools: Tool[] = [
  t("nato-phonetic-converter", "NATO Phonetic Alphabet Converter", "Free NATO Phonetic Alphabet Converter", "Convert text to NATO phonetic alphabet. Free online tool for clear communication.", "NATO Phonetic Alphabet Converter", "Convert letters to their NATO phonetic alphabet equivalents (A=Alpha, B=Bravo...). Essential for clear radio and phone communication.", "encoding-tools", ["nato phonetic alphabet", "military alphabet", "phonetic alphabet converter"], [{ question: "What is the NATO phonetic alphabet?", answer: "A standardized alphabet where each letter has a designated word (Alpha, Bravo, Charlie...) to avoid confusion in voice communication." }, { question: "Is it the same as the military alphabet?", answer: "Yes. NATO phonetic alphabet and military alphabet refer to the same system." }], ["Enter text.", "See NATO phonetic equivalents.", "Copy the result."], ["morse-code-translator", "text-to-binary", "case-converter"], "text-transform", { transformId: "nato-phonetic" }),
  t("text-to-uppercase", "Text to Uppercase Converter", "Free Online Text to Uppercase Converter", "Convert any text to all UPPERCASE letters instantly. Free online uppercase tool.", "Convert Text to UPPERCASE", "Paste text and instantly convert every letter to uppercase. A quick tool targeting the specific query 'text to uppercase'.", "text-tools", ["text to uppercase", "uppercase converter", "make text uppercase", "all caps converter"], [{ question: "Does it handle special characters?", answer: "Only alphabetic characters are uppercased. Numbers, symbols, and spaces remain unchanged." }, { question: "Does it work with Unicode?", answer: "Yes. Accented characters like é are converted to É." }], ["Paste text.", "All letters are uppercased.", "Copy result."], ["text-to-lowercase", "case-converter", "text-to-title-case"], "text-transform", { transformId: "to-uppercase" }),
  t("text-to-lowercase", "Text to Lowercase Converter", "Free Online Text to Lowercase Converter", "Convert any text to all lowercase letters instantly. Free online lowercase tool.", "Convert Text to lowercase", "Paste text and instantly convert every letter to lowercase.", "text-tools", ["text to lowercase", "lowercase converter", "make text lowercase", "uncapitalize text"], [{ question: "Does it remove formatting?", answer: "It only changes letter case. All other formatting and characters remain the same." }], ["Paste text.", "All letters are lowercased.", "Copy result."], ["text-to-uppercase", "case-converter", "text-to-title-case"], "text-transform", { transformId: "to-lowercase" }),
  t("text-to-title-case", "Title Case Converter", "Free Online Title Case Converter", "Convert text to Title Case where each word is capitalized. Free online title case tool.", "Convert Text to Title Case", "Capitalize the first letter of each word in your text. Perfect for headings, titles, and proper formatting.", "text-tools", ["title case converter", "capitalize each word", "title capitalization", "headline capitalizer"], [{ question: "What is title case?", answer: "Title case capitalizes the first letter of each word. 'hello world' becomes 'Hello World'." }, { question: "Does it handle articles and prepositions?", answer: "This tool capitalizes every word. For AP/Chicago-style title case, manual adjustment may be needed." }], ["Paste text.", "Each word is capitalized.", "Copy."], ["text-to-uppercase", "case-converter", "text-to-sentence-case"], "text-transform", { transformId: "to-title-case" }),
  t("text-to-sentence-case", "Sentence Case Converter", "Free Online Sentence Case Converter", "Convert text to sentence case — capitalize first letter of each sentence. Free online tool.", "Convert Text to Sentence Case", "Capitalize the first letter of each sentence while converting everything else to lowercase.", "text-tools", ["sentence case converter", "capitalize sentences", "sentence capitalization"], [{ question: "What is sentence case?", answer: "Sentence case capitalizes only the first letter of each sentence, like normal writing." }], ["Paste text.", "Sentence case is applied.", "Copy."], ["text-to-title-case", "text-to-uppercase", "case-converter"], "text-transform", { transformId: "to-sentence-case" }),
  t("camelcase-to-text", "camelCase to Text Converter", "Free Online camelCase to Text Converter", "Convert camelCase strings to readable text with spaces. Free developer tool.", "Convert camelCase to Text", "Split camelCase or PascalCase strings into readable words with spaces. Useful for making variable names human-readable.", "developer-tools", ["camelcase to text", "split camelcase", "camelcase converter", "variable name to text"], [{ question: "How does it work?", answer: "It inserts a space before each uppercase letter, then lowercases the result." }], ["Paste camelCase text.", "Readable text appears.", "Copy."], ["case-converter", "slug-generator", "snakecase-to-text"], "text-transform", { transformId: "camelcase-to-text" }),
  t("snakecase-to-text", "snake_case to Text Converter", "Free Online snake_case to Text Converter", "Convert snake_case strings to readable text with spaces. Free developer tool.", "Convert snake_case to Text", "Replace underscores with spaces and format snake_case variable names as readable text.", "developer-tools", ["snake case to text", "convert snake case", "underscore to space"], [{ question: "What is snake_case?", answer: "A naming convention using lowercase words separated by underscores: my_variable_name." }], ["Paste snake_case text.", "Readable text appears.", "Copy."], ["case-converter", "camelcase-to-text", "slug-generator"], "text-transform", { transformId: "snakecase-to-text" }),
  t("add-prefix-to-lines", "Add Prefix to Lines", "Free Online Add Prefix to Lines Tool", "Add a custom prefix to the beginning of each line. Free online text tool.", "Add Prefix to Lines", "Prepend a custom string to the start of every line in your text. Great for adding bullet points, comments, or numbering.", "text-tools", ["add prefix to lines", "prepend to lines", "line prefix tool"], [{ question: "What is a prefix?", answer: "A string added to the beginning of each line, such as '- ' for bullet points or '// ' for code comments." }], ["Enter text.", "Each line gets the prefix.", "Copy."], ["add-suffix-to-lines", "add-line-numbers", "remove-empty-lines"], "text-transform", { transformId: "add-prefix" }),
  t("add-suffix-to-lines", "Add Suffix to Lines", "Free Online Add Suffix to Lines Tool", "Add a custom suffix to the end of each line. Free online text tool.", "Add Suffix to Lines", "Append a custom string to the end of every line in your text.", "text-tools", ["add suffix to lines", "append to lines", "line suffix tool"], [{ question: "What is a suffix?", answer: "A string added to the end of each line, such as a comma, semicolon, or closing tag." }], ["Enter text.", "Each line gets the suffix.", "Copy."], ["add-prefix-to-lines", "add-line-numbers", "remove-empty-lines"], "text-transform", { transformId: "add-suffix" }),
  t("sort-lines-by-length", "Sort Lines by Length", "Free Online Sort Lines by Length Tool", "Sort text lines by their character length. Shortest to longest or reverse. Free online tool.", "Sort Lines by Length", "Sort lines of text by their character count, from shortest to longest (or reverse). Useful for organizing data by string length.", "text-tools", ["sort by length", "sort lines by length", "order by length", "sort text by character count"], [{ question: "How is length measured?", answer: "By character count including spaces." }, { question: "Can I reverse the order?", answer: "The tool sorts shortest first. Reverse the output to get longest first." }], ["Paste text.", "Lines are sorted by length.", "Copy."], ["text-sorter", "duplicate-line-remover", "line-counter"], "text-transform", { transformId: "sort-by-length" }),
  t("json-escape-string", "JSON String Escape Tool", "Free Online JSON String Escape Tool", "Escape special characters in strings for JSON. Handle quotes and backslashes. Free tool.", "JSON String Escape", "Escape special characters (quotes, backslashes, newlines, tabs) in a string to make it safe for JSON embedding.", "developer-tools", ["json escape", "escape string for json", "json string escape", "escape quotes json"], [{ question: "What characters are escaped?", answer: "Double quotes, backslashes, newlines, tabs, and other control characters." }], ["Paste string.", "See escaped version.", "Copy for JSON."], ["json-formatter", "json-unescape-string", "html-entity-encode-decode"], "text-transform", { transformId: "json-escape" }),
  t("json-unescape-string", "JSON String Unescape Tool", "Free Online JSON String Unescape Tool", "Unescape JSON string sequences back to readable text. Free online tool.", "JSON String Unescape", "Convert escaped JSON strings (with \\n, \\\", etc.) back to their readable form.", "developer-tools", ["json unescape", "unescape json string", "decode json escape"], [{ question: "What sequences are unescaped?", answer: "\\n → newline, \\t → tab, \\\" → quote, \\\\ → backslash, and Unicode escapes." }], ["Paste escaped string.", "See readable version.", "Copy."], ["json-escape-string", "json-formatter", "url-encoder-decoder"], "text-transform", { transformId: "json-unescape" }),
  t("html-to-text", "HTML to Plain Text Converter", "Free Online HTML to Plain Text Converter", "Convert HTML to plain text by removing all tags. Free online HTML stripper.", "Convert HTML to Plain Text", "Strip all HTML markup and extract only the text content. Useful for cleaning web content and email HTML.", "developer-tools", ["html to text", "html to plain text", "strip html to text", "convert html to text"], [{ question: "Does it preserve structure?", answer: "Basic structure from line breaks and paragraphs is preserved as newlines." }], ["Paste HTML.", "See plain text.", "Copy."], ["remove-html-tags", "html-entity-encode-decode", "markdown-to-html-converter"], "text-transform", { transformId: "remove-html-tags" }),
  t("text-to-base64", "Text to Base64 Converter", "Free Online Text to Base64 Encoder", "Encode text to Base64 format instantly. Free online text to Base64 tool.", "Text to Base64 Encoder", "Convert any text string to Base64 encoding. Useful for data URIs, API payloads, and encoded content.", "encoding-tools", ["text to base64", "base64 encode text", "string to base64", "encode text base64"], [{ question: "What is Base64?", answer: "A binary-to-text encoding that represents data using 64 ASCII characters." }, { question: "Does it handle Unicode?", answer: "Yes. UTF-8 text is properly encoded." }], ["Enter text.", "See Base64 output.", "Copy."], ["base64-to-text-converter", "base64-encode-decode", "text-to-binary"], "text-transform", { transformId: "text-to-base64" }),
  t("base64-to-text-converter", "Base64 to Text Decoder", "Free Online Base64 to Text Decoder", "Decode Base64 strings back to readable text. Free online Base64 decoder.", "Base64 to Text Decoder", "Paste a Base64 encoded string to decode it back to readable text.", "encoding-tools", ["base64 to text", "decode base64", "base64 decoder", "base64 to string"], [{ question: "What if the Base64 is invalid?", answer: "An error message will be shown if the input isn't valid Base64." }], ["Paste Base64 string.", "See decoded text.", "Copy."], ["text-to-base64", "base64-encode-decode", "binary-to-text"], "text-transform", { transformId: "base64-to-text" }),
  t("xml-escape-string", "XML String Escape Tool", "Free Online XML String Escape Tool", "Escape special characters for XML. Handle <, >, &, quotes. Free online tool.", "XML String Escape", "Escape special XML characters (&, <, >, \", ') to their entity equivalents for safe XML embedding.", "developer-tools", ["xml escape", "escape xml characters", "xml entity encode"], [{ question: "What characters are escaped?", answer: "& → &amp; < → &lt; > → &gt; \" → &quot; ' → &apos;" }], ["Paste text.", "See XML-escaped version.", "Copy."], ["html-entity-encode-decode", "json-escape-string", "url-encoder-decoder"], "text-transform", { transformId: "xml-escape" }),
  t("csv-column-counter", "CSV Column Counter", "Free Online CSV Column Counter", "Count the number of columns in CSV data. Free online CSV analysis tool.", "CSV Column Counter", "Paste CSV data to count the number of columns, rows, and see a preview of the structure.", "developer-tools", ["csv column count", "count csv columns", "csv analyzer", "csv structure"], [{ question: "What delimiter is used?", answer: "Commas by default, which is the standard CSV delimiter." }], ["Paste CSV data.", "See column and row counts.", "Use for data validation."], ["csv-to-json-converter", "json-to-csv-converter", "word-counter"], "text-transform", { transformId: "csv-column-count" }),
  t("tsv-to-csv-converter", "TSV to CSV Converter", "Free Online TSV to CSV Converter", "Convert tab-separated values to comma-separated CSV format. Free online converter.", "Convert TSV to CSV", "Convert tab-separated data to comma-separated CSV format. Simply paste TSV and get CSV output.", "developer-tools", ["tsv to csv", "tab separated to csv", "convert tsv to csv"], [{ question: "What is TSV?", answer: "Tab-Separated Values — a format where columns are separated by tab characters instead of commas." }], ["Paste TSV data.", "See CSV output.", "Copy."], ["csv-to-json-converter", "json-to-csv-converter", "tab-to-spaces-converter"], "text-transform", { transformId: "tsv-to-csv" }),
  t("yaml-to-json-converter", "YAML to JSON Converter", "Free Online YAML to JSON Converter", "Convert YAML to JSON format instantly. Free online YAML to JSON tool for developers.", "Convert YAML to JSON", "Paste YAML markup and convert it to equivalent JSON. Basic YAML structures supported.", "developer-tools", ["yaml to json", "convert yaml to json", "yaml json converter"], [{ question: "What YAML features are supported?", answer: "Basic key-value pairs, nested objects, arrays, strings, numbers, and booleans." }], ["Paste YAML.", "See JSON output.", "Copy."], ["json-formatter", "csv-to-json-converter", "markdown-to-html-converter"], "text-transform", { transformId: "yaml-to-json" }),
  t("json-to-yaml-converter", "JSON to YAML Converter", "Free Online JSON to YAML Converter", "Convert JSON to YAML format instantly. Free online JSON to YAML tool for developers.", "Convert JSON to YAML", "Paste JSON and convert it to clean YAML format.", "developer-tools", ["json to yaml", "convert json to yaml", "json yaml converter"], [{ question: "Is the output valid YAML?", answer: "Yes. The tool produces properly formatted YAML from valid JSON input." }], ["Paste JSON.", "See YAML output.", "Copy."], ["yaml-to-json-converter", "json-formatter", "json-to-csv-converter"], "text-transform", { transformId: "json-to-yaml" }),
  t("regex-escape-tool", "Regex Escape Tool", "Free Online Regex Escape Tool", "Escape special regex characters in a string. Free online regex escaping tool.", "Regex Special Character Escape", "Escape special regex metacharacters (. * + ? ^ $ { } [ ] | ( ) \\) so they match literally in regular expressions.", "developer-tools", ["regex escape", "escape regex characters", "regex metacharacter escape"], [{ question: "What characters are escaped?", answer: "All regex metacharacters: . * + ? ^ $ { } [ ] | ( ) \\ are prefixed with a backslash." }], ["Paste text.", "See regex-escaped version.", "Copy into your regex."], ["regex-tester", "json-escape-string", "url-encoder-decoder"], "text-transform", { transformId: "regex-escape" }),
  t("alternate-case-generator", "Alternate Case Generator", "Free Online aLtErNaTe CaSe Text Generator", "Convert text to alternating case. Free online sarcastic text generator.", "aLtErNaTe CaSe Generator", "Convert text to aLtErNaTiNg CaSe where each character alternates between lower and upper case. The 'sarcastic SpongeBob' meme style.", "text-tools", ["alternate case", "alternating case", "spongebob text", "sarcastic text generator"], [{ question: "What is alternating case?", answer: "Each character alternates between lowercase and uppercase: 'hello' becomes 'hElLo'." }], ["Enter text.", "See alternating case.", "Copy."], ["upside-down-text-generator", "case-converter", "wide-text-generator"], "text-transform", { transformId: "alternate-case" }),
  t("invisible-character-detector", "Invisible Character Detector", "Free Invisible Character & Zero-Width Space Detector", "Detect invisible characters, zero-width spaces, and hidden Unicode in text. Free online tool.", "Invisible Character Detector", "Paste text to find and highlight invisible characters like zero-width spaces, non-breaking spaces, and other hidden Unicode characters.", "text-tools", ["invisible character detector", "zero width space finder", "hidden character detector", "invisible unicode finder"], [{ question: "What invisible characters does it find?", answer: "Zero-width spaces, non-breaking spaces, zero-width joiners/non-joiners, soft hyphens, and other invisible Unicode." }, { question: "Why would I have invisible characters?", answer: "They often sneak in from copy-pasting from websites, PDFs, or word processors and can cause bugs in code." }], ["Paste text.", "Invisible characters are highlighted.", "Remove or keep them."], ["whitespace-cleaner", "remove-html-tags", "character-counter"], "text-transform", { transformId: "invisible-chars" }),
];

// ---------------------------------------------------------------------------
// DEVELOPER TOOLS (formula-calculator and text-transform templates)
// ---------------------------------------------------------------------------
const devTools: Tool[] = [
  t("pixel-to-rem-converter", "Pixel to Rem Converter", "Free Online Pixel to Rem Converter", "Convert pixels to rem units based on root font size. Free CSS unit converter for developers.", "Convert Pixels to Rem", "Convert pixel values to rem units. Default base is 16px. Essential for responsive CSS development.", "developer-tools", ["pixel to rem", "px to rem", "convert pixels to rem", "css rem converter"], [{ question: "What is the default base?", answer: "16px, which is the browser default root font size." }, { question: "How is rem calculated?", answer: "rem = pixels ÷ base font size. So 24px ÷ 16 = 1.5rem." }], ["Enter pixel value.", "See rem equivalent.", "Copy."], ["rem-to-pixel-converter", "color-converter", "css-unit-calculator"], "formula-calculator", { formulaId: "px-to-rem", fields: [{ id: "px", label: "Pixels", type: "number", step: 1 }, { id: "base", label: "Base Font Size (px)", type: "number", step: 1, default: 16 }], resultLabel: "Rem", resultSuffix: "rem" }),
  t("rem-to-pixel-converter", "Rem to Pixel Converter", "Free Online Rem to Pixel Converter", "Convert rem units to pixels based on root font size. Free CSS unit converter.", "Convert Rem to Pixels", "Convert rem values to pixels. Default base is 16px.", "developer-tools", ["rem to pixel", "rem to px", "convert rem to pixels"], [{ question: "How is it calculated?", answer: "pixels = rem × base font size. So 1.5rem × 16 = 24px." }], ["Enter rem value.", "See pixel equivalent.", "Copy."], ["pixel-to-rem-converter", "color-converter", "em-to-px-converter"], "formula-calculator", { formulaId: "rem-to-px", fields: [{ id: "rem", label: "Rem", type: "number", step: 0.1 }, { id: "base", label: "Base Font Size (px)", type: "number", step: 1, default: 16 }], resultLabel: "Pixels", resultSuffix: "px" }),
  t("aspect-ratio-calculator", "Aspect Ratio Calculator", "Free Online Aspect Ratio Calculator", "Calculate aspect ratios, resize dimensions proportionally. Free online aspect ratio tool.", "Aspect Ratio Calculator", "Calculate the aspect ratio of any dimensions, or resize proportionally by entering new width or height.", "developer-tools", ["aspect ratio calculator", "calculate aspect ratio", "image ratio", "screen aspect ratio"], [{ question: "What is aspect ratio?", answer: "The proportional relationship between width and height, expressed as W:H (e.g., 16:9)." }, { question: "What is 16:9?", answer: "The standard widescreen ratio used by most monitors and TVs." }], ["Enter width and height.", "See the aspect ratio.", "Resize proportionally."], ["ppi-calculator", "percentage-calculator", "pixel-to-rem-converter"], "formula-calculator", { formulaId: "aspect-ratio", fields: [{ id: "width", label: "Width", type: "number", step: 1 }, { id: "height", label: "Height", type: "number", step: 1 }], resultLabel: "Aspect Ratio" }),
  t("ppi-calculator", "PPI Calculator", "Free Online PPI/DPI Calculator", "Calculate pixels per inch (PPI) from screen resolution and size. Free PPI calculator.", "PPI Calculator (Pixels Per Inch)", "Calculate the pixel density (PPI) of any screen from its resolution and physical size.", "developer-tools", ["ppi calculator", "pixels per inch", "dpi calculator", "screen pixel density"], [{ question: "What is PPI?", answer: "Pixels Per Inch — a measure of pixel density. Higher PPI means sharper displays." }, { question: "What's a good PPI?", answer: "Above 300 PPI is considered 'Retina' quality where individual pixels are invisible to the eye." }], ["Enter resolution and screen size.", "See PPI value.", "Compare displays."], ["aspect-ratio-calculator", "percentage-calculator", "pixel-to-rem-converter"], "formula-calculator", { formulaId: "ppi", fields: [{ id: "widthPx", label: "Width (pixels)", type: "number", step: 1 }, { id: "heightPx", label: "Height (pixels)", type: "number", step: 1 }, { id: "diagonal", label: "Screen Diagonal (inches)", type: "number", step: 0.1 }], resultLabel: "PPI" }),
  t("download-time-calculator", "Download Time Calculator", "Free Online Download Time Calculator", "Estimate download time based on file size and internet speed. Free online calculator.", "Download Time Calculator", "Calculate how long it will take to download a file based on its size and your connection speed.", "developer-tools", ["download time calculator", "file download time", "transfer time calculator", "download speed calculator"], [{ question: "How is it calculated?", answer: "Time = File size ÷ Download speed. Remember: 1 Byte = 8 bits." }], ["Enter file size.", "Enter connection speed.", "See estimated time."], ["data-transfer-calculator", "bandwidth-calculator", "percentage-calculator"], "formula-calculator", { formulaId: "download-time", fields: [{ id: "fileSize", label: "File Size (MB)", type: "number", step: 1 }, { id: "speed", label: "Speed (Mbps)", type: "number", step: 1 }], resultLabel: "Download Time" }),
  t("electricity-cost-calculator", "Electricity Cost Calculator", "Free Online Electricity Cost Calculator", "Calculate electricity costs from watts, hours, and rate. Free power cost estimator.", "Electricity Cost Calculator", "Estimate the cost of running an electrical device based on its wattage, usage hours, and your electricity rate.", "math-and-conversion-tools", ["electricity cost calculator", "power cost calculator", "energy cost estimator", "electric bill calculator"], [{ question: "How is it calculated?", answer: "Cost = (Watts × Hours per day × Days) ÷ 1000 × Rate per kWh." }], ["Enter device wattage.", "Enter usage hours and rate.", "See the cost."], ["percentage-calculator", "compound-interest-calculator", "unit-converter"], "formula-calculator", { formulaId: "electricity-cost", fields: [{ id: "watts", label: "Wattage (W)", type: "number", step: 1 }, { id: "hours", label: "Hours/Day", type: "number", step: 0.5 }, { id: "days", label: "Days", type: "number", step: 1, default: 30 }, { id: "rate", label: "Rate ($/kWh)", type: "number", step: 0.01, default: 0.12 }], resultLabel: "Cost", resultSuffix: "$" }),
  t("ohms-law-calculator", "Ohm's Law Calculator", "Free Online Ohm's Law Calculator", "Calculate voltage, current, or resistance using Ohm's Law (V=IR). Free electronics calculator.", "Ohm's Law Calculator", "Enter any two of voltage (V), current (I), and resistance (R) to calculate the third using Ohm's Law.", "math-and-conversion-tools", ["ohms law calculator", "voltage calculator", "resistance calculator", "V=IR calculator"], [{ question: "What is Ohm's Law?", answer: "V = I × R, where V is voltage (volts), I is current (amps), and R is resistance (ohms)." }], ["Enter any two values.", "The third is calculated.", "See the result."], ["electricity-cost-calculator", "percentage-calculator", "unit-converter"], "formula-calculator", { formulaId: "ohms-law", fields: [{ id: "voltage", label: "Voltage (V)", type: "number", step: 0.1 }, { id: "current", label: "Current (A)", type: "number", step: 0.01 }, { id: "resistance", label: "Resistance (Ω)", type: "number", step: 0.1 }], resultLabel: "Result" }),
];

// ---------------------------------------------------------------------------
// RANDOM GENERATORS
// ---------------------------------------------------------------------------
const randomTools: Tool[] = [
  t("random-username-generator", "Random Username Generator", "Free Online Random Username Generator", "Generate random usernames for social media and gaming. Free online username generator.", "Random Username Generator", "Generate creative random usernames for social media, gaming, forums, and more. Unique combinations every time.", "random-and-utility-tools", ["random username generator", "username generator", "random name for gaming", "create username"], [{ question: "Are the usernames unique?", answer: "Each generation produces a random combination, making duplicates extremely unlikely." }], ["Click Generate.", "See random usernames.", "Copy your favorite."], ["random-name-picker", "password-generator", "random-word-generator"], "random-generator", { generatorId: "random-username" }),
  t("random-password-phrase-generator", "Random Passphrase Generator", "Free Online Random Passphrase Generator", "Generate secure random passphrases from dictionary words. Free online passphrase tool.", "Random Passphrase Generator", "Generate secure passphrases made of random dictionary words. Easier to remember than random character passwords.", "random-and-utility-tools", ["passphrase generator", "random passphrase", "diceware passphrase", "word password generator"], [{ question: "Is a passphrase secure?", answer: "Yes. A 4-word passphrase has comparable entropy to a 12+ character random password." }], ["Set number of words.", "Click Generate.", "Copy your passphrase."], ["password-generator", "random-word-generator", "uuid-generator"], "random-generator", { generatorId: "random-passphrase" }),
  t("spin-the-wheel", "Spin the Wheel", "Free Online Spin the Wheel — Random Picker", "Spin a virtual wheel to make random selections. Free online decision wheel.", "Spin the Wheel", "Enter options and spin the wheel to make a random selection. Fun and fair way to make decisions.", "random-and-utility-tools", ["spin the wheel", "random wheel", "decision wheel", "wheel spinner"], [{ question: "Is it fair?", answer: "Yes. Each option has an equal chance of being selected using cryptographic randomness." }], ["Enter your options.", "Click Spin.", "See the result."], ["random-name-picker", "coin-flip", "dice-roller", "yes-or-no-generator"], "random-generator", { generatorId: "spin-wheel" }),
  t("lottery-number-generator", "Lottery Number Generator", "Free Online Lottery Number Generator", "Generate random lottery numbers for any lottery format. Free random number picker.", "Lottery Number Generator", "Generate random lottery numbers. Set the range and count to match your local lottery format.", "random-and-utility-tools", ["lottery number generator", "random lottery numbers", "lotto number picker", "lottery picker"], [{ question: "Are the numbers truly random?", answer: "Yes. Generated using the Web Crypto API for cryptographically secure randomness." }, { question: "Can I set custom ranges?", answer: "The tool generates random numbers in a configurable range to match any lottery." }], ["Set number range and count.", "Click Generate.", "See your numbers."], ["random-number-generator", "dice-roller", "coin-flip"], "random-generator", { generatorId: "lottery-numbers" }),
  t("random-quote-generator", "Random Quote Generator", "Free Online Random Quote Generator", "Get random inspirational quotes. Free online quote of the day generator.", "Random Quote Generator", "Generate random inspirational and motivational quotes. Perfect for daily inspiration, social media, or presentations.", "random-and-utility-tools", ["random quote generator", "quote of the day", "inspirational quotes", "random motivation"], [{ question: "Where do the quotes come from?", answer: "A curated collection of famous and inspirational quotes from well-known figures." }], ["Click Generate.", "See a random quote.", "Copy and share."], ["random-word-generator", "random-sentence-generator", "lorem-ipsum-generator"], "random-generator", { generatorId: "random-quote" }),
  t("bingo-number-generator", "Bingo Number Generator", "Free Online Bingo Number Caller", "Generate random bingo numbers 1-75 with call history. Free online bingo caller.", "Bingo Number Generator", "Call random bingo numbers from 1-75 with letter prefix (B-I-N-G-O). Tracks called numbers and history.", "random-and-utility-tools", ["bingo number generator", "bingo caller", "random bingo", "bingo number picker"], [{ question: "What range is used?", answer: "Standard 1-75 bingo range with B(1-15), I(16-30), N(31-45), G(46-60), O(61-75)." }], ["Click Call.", "See the bingo number.", "Track called numbers."], ["random-number-generator", "lottery-number-generator", "dice-roller"], "random-generator", { generatorId: "bingo-caller" }),
  t("random-animal-generator", "Random Animal Generator", "Free Online Random Animal Generator", "Generate random animal names for games, stories, and fun. Free random animal picker.", "Random Animal Generator", "Pick a random animal from a curated list. Great for storytelling prompts, naming games, and classroom activities.", "random-and-utility-tools", ["random animal generator", "random animal picker", "animal randomizer"], [{ question: "How many animals are included?", answer: "Over 100 animals from various categories including mammals, birds, fish, and reptiles." }], ["Click Generate.", "See a random animal.", "Generate more."], ["random-name-picker", "random-word-generator", "random-emoji-generator"], "random-generator", { generatorId: "random-animal" }),
  t("random-country-generator", "Random Country Generator", "Free Online Random Country Generator", "Pick a random country from around the world. Free random country selector.", "Random Country Generator", "Randomly select a country. Great for geography games, travel planning inspiration, and educational activities.", "random-and-utility-tools", ["random country generator", "random country picker", "country randomizer"], [{ question: "Are all countries included?", answer: "The list includes all 195 internationally recognized countries." }], ["Click Generate.", "See a random country.", "Generate more."], ["random-name-picker", "random-word-generator", "spin-the-wheel"], "random-generator", { generatorId: "random-country" }),
];

// ---------------------------------------------------------------------------
// MORE CALCULATORS
// ---------------------------------------------------------------------------
const moreCalcs: Tool[] = [
  t("percentage-increase-calculator", "Percentage Increase Calculator", "Free Online Percentage Increase Calculator", "Calculate the percentage increase from one value to another. Free online tool.", "Percentage Increase Calculator", "Enter an original value and a new value to calculate the percentage increase between them.", "math-and-conversion-tools", ["percentage increase", "calculate percentage increase", "percent increase formula"], [{ question: "What is the formula?", answer: "% Increase = ((New - Original) / Original) × 100" }], ["Enter original value.", "Enter new value.", "See the % increase."], ["percentage-calculator", "percentage-decrease-calculator", "percentage-difference-calculator"], "formula-calculator", { formulaId: "percent-increase", fields: [{ id: "original", label: "Original Value", type: "number" }, { id: "newVal", label: "New Value", type: "number" }], resultLabel: "Percentage Increase", resultSuffix: "%" }),
  t("percentage-decrease-calculator", "Percentage Decrease Calculator", "Free Online Percentage Decrease Calculator", "Calculate the percentage decrease from one value to another. Free online tool.", "Percentage Decrease Calculator", "Enter an original value and a new value to calculate the percentage decrease between them.", "math-and-conversion-tools", ["percentage decrease", "calculate percentage decrease", "percent decrease formula"], [{ question: "What is the formula?", answer: "% Decrease = ((Original - New) / Original) × 100" }], ["Enter original value.", "Enter new value.", "See the % decrease."], ["percentage-calculator", "percentage-increase-calculator", "discount-calculator"], "formula-calculator", { formulaId: "percent-decrease", fields: [{ id: "original", label: "Original Value", type: "number" }, { id: "newVal", label: "New Value", type: "number" }], resultLabel: "Percentage Decrease", resultSuffix: "%" }),
  t("mean-calculator", "Mean Calculator", "Free Online Mean (Average) Calculator", "Calculate the arithmetic mean of a set of numbers. Free online average calculator.", "Mean (Average) Calculator", "Enter a list of numbers to calculate the arithmetic mean. Supports any number of values.", "math-and-conversion-tools", ["mean calculator", "average calculator", "arithmetic mean", "calculate mean"], [{ question: "What is the mean?", answer: "The sum of all values divided by the count of values." }], ["Enter numbers separated by commas.", "See the mean.", "Use for data analysis."], ["median-calculator", "mode-calculator", "standard-deviation-calculator"], "formula-calculator", { formulaId: "mean", fields: [{ id: "values", label: "Values (comma-separated)", type: "number" }], resultLabel: "Mean" }),
  t("median-calculator", "Median Calculator", "Free Online Median Calculator", "Find the median (middle value) of a set of numbers. Free online statistics tool.", "Median Calculator", "Enter numbers to find the median — the middle value when sorted. For even counts, it's the average of the two middle values.", "math-and-conversion-tools", ["median calculator", "find median", "middle value calculator", "statistics median"], [{ question: "What is the median?", answer: "The middle value of a sorted dataset. If there's an even number of values, it's the average of the two middle values." }], ["Enter numbers.", "See the median.", "Use for data analysis."], ["mean-calculator", "mode-calculator", "standard-deviation-calculator"], "formula-calculator", { formulaId: "median", fields: [{ id: "values", label: "Values (comma-separated)", type: "number" }], resultLabel: "Median" }),
  t("standard-deviation-calculator", "Standard Deviation Calculator", "Free Online Standard Deviation Calculator", "Calculate standard deviation for a set of numbers. Free online statistics calculator.", "Standard Deviation Calculator", "Enter numbers to calculate the standard deviation, which measures how spread out the values are from the mean.", "math-and-conversion-tools", ["standard deviation calculator", "calculate std dev", "standard deviation formula", "statistics calculator"], [{ question: "What is standard deviation?", answer: "A measure of how much values vary from the mean. Low SD means values are close to the mean; high SD means they're spread out." }], ["Enter numbers.", "See standard deviation.", "Also see variance."], ["mean-calculator", "variance-calculator", "percentage-calculator"], "formula-calculator", { formulaId: "std-dev", fields: [{ id: "values", label: "Values (comma-separated)", type: "number" }], resultLabel: "Standard Deviation" }),
  t("fuel-cost-calculator", "Fuel Cost Calculator", "Free Online Fuel Cost Calculator", "Calculate fuel cost for a trip based on distance, fuel economy, and gas price. Free calculator.", "Fuel Cost Calculator", "Estimate the fuel cost of a trip by entering the distance, your vehicle's fuel economy, and the price per gallon/liter.", "math-and-conversion-tools", ["fuel cost calculator", "gas cost calculator", "trip fuel cost", "driving cost calculator"], [{ question: "How is it calculated?", answer: "Cost = (Distance / Fuel Economy) × Price per unit of fuel." }], ["Enter trip distance.", "Enter fuel economy and price.", "See total fuel cost."], ["miles-per-gallon-calculator", "percentage-calculator", "tip-calculator"], "formula-calculator", { formulaId: "fuel-cost", fields: [{ id: "distance", label: "Distance (miles)", type: "number" }, { id: "mpg", label: "Fuel Economy (mpg)", type: "number", step: 0.1 }, { id: "price", label: "Price per Gallon ($)", type: "number", step: 0.01 }], resultLabel: "Fuel Cost", resultSuffix: "$" }),
  t("paint-calculator", "Paint Calculator", "Free Online Paint Calculator", "Calculate how much paint you need based on room dimensions. Free painting estimator.", "Paint Calculator", "Enter room dimensions to estimate how many gallons of paint you need. Accounts for doors and windows.", "math-and-conversion-tools", ["paint calculator", "how much paint do I need", "painting calculator", "wall paint estimator"], [{ question: "How is it calculated?", answer: "Total wall area minus openings, divided by coverage per gallon (typically 350-400 sq ft)." }], ["Enter room dimensions.", "Enter number of coats.", "See gallons needed."], ["percentage-calculator", "rectangle-area-calculator", "unit-converter"], "formula-calculator", { formulaId: "paint", fields: [{ id: "length", label: "Room Length (ft)", type: "number" }, { id: "width", label: "Room Width (ft)", type: "number" }, { id: "height", label: "Wall Height (ft)", type: "number", default: 8 }, { id: "coats", label: "Number of Coats", type: "number", default: 2, min: 1 }], resultLabel: "Paint Needed", resultSuffix: "gallons" }),
  t("concrete-calculator", "Concrete Calculator", "Free Online Concrete Calculator", "Calculate how much concrete you need in cubic yards. Free concrete volume estimator.", "Concrete Calculator", "Calculate the volume of concrete needed for slabs, footings, and columns based on dimensions.", "math-and-conversion-tools", ["concrete calculator", "how much concrete", "cubic yards calculator", "concrete volume"], [{ question: "What unit is the result?", answer: "Cubic yards, which is the standard ordering unit for concrete." }], ["Enter length, width, and depth.", "See cubic yards needed.", "Add 10% for waste."], ["rectangle-area-calculator", "unit-converter", "percentage-calculator"], "formula-calculator", { formulaId: "concrete", fields: [{ id: "length", label: "Length (ft)", type: "number" }, { id: "width", label: "Width (ft)", type: "number" }, { id: "depth", label: "Depth (inches)", type: "number", default: 4 }], resultLabel: "Concrete Needed", resultSuffix: "cubic yards" }),
];

// ---------------------------------------------------------------------------
// COMBINE ALL
// ---------------------------------------------------------------------------
const cookingTools = genConverters(cookingUnits, "unit-converters");
const powerTools = genConverters(powerUnits, "unit-converters");
const forceTools = genConverters(forceUnits, "unit-converters");
const angleTools = genConverters(angleUnits, "unit-converters");
const dataRateTools = genConverters(dataRateUnits, "unit-converters");
const torqueTools = genConverters(torqueUnits, "unit-converters");
const frequencyTools = genConverters(frequencyUnits, "unit-converters");
const densityTools = genConverters(densityUnits, "unit-converters");
const fuelTools = genConverters(fuelUnits, "unit-converters");
const luminanceTools = genConverters(luminanceUnits, "unit-converters");
const currentTools = genConverters(currentUnits, "unit-converters");
const voltageTools = genConverters(voltageUnits, "unit-converters");
const flowTools = genConverters(flowUnits, "unit-converters");
const capacitanceTools = genConverters(capacitanceUnits, "unit-converters");
const inductanceTools = genConverters(inductanceUnits, "unit-converters");
const resistanceTools = genConverters(resistanceUnits, "unit-converters");
const magneticTools = genConverters(magneticUnits, "unit-converters");
const accelerationTools = genConverters(accelerationUnits, "unit-converters");
const soundTools = genConverters(soundUnits, "unit-converters");
const radiationTools = genConverters(radiationUnits, "unit-converters");
const concentrationTools = genConverters(concentrationUnits, "unit-converters");

export const generatedExtraTools: Tool[] = [
  ...temperatureTools,
  ...cookingTools,
  ...powerTools,
  ...forceTools,
  ...angleTools,
  ...dataRateTools,
  ...torqueTools,
  ...frequencyTools,
  ...densityTools,
  ...fuelTools,
  ...luminanceTools,
  ...currentTools,
  ...voltageTools,
  ...flowTools,
  ...capacitanceTools,
  ...inductanceTools,
  ...resistanceTools,
  ...magneticTools,
  ...accelerationTools,
  ...soundTools,
  ...radiationTools,
  ...concentrationTools,
  ...textTools,
  ...devTools,
  ...randomTools,
  ...moreCalcs,
];

export const extraToolCount = generatedExtraTools.length;

