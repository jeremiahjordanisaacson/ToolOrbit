"use client";

import { createContext, useContext } from "react";

export interface ToolUILabels {
  copy: string;
  copied: string;
  generate: string;
  calculate: string;
  convert: string;
  clear: string;
  reset: string;
  swap: string;
  enterValue: string;
  result: string;
  enterValuesToCalculate: string;
  formula: string;
  commonValues: string;
  calculationError: string;
  invalidInput: string;
  download: string;
  paste: string;
  input: string;
  output: string;
  format: string;
  minify: string;
  encode: string;
  decode: string;
  flip: string;
  roll: string;
  pick: string;
  heads: string;
  tails: string;
  history: string;
  clearHistory: string;
  length: string;
  uppercase: string;
  lowercase: string;
  numbers: string;
  symbols: string;
  strength: string;
  weak: string;
  fair: string;
  strong: string;
  veryStrong: string;
  quantity: string;
  allBases: string;
  commonConversions: string;

  // Date & Time
  startDate: string;
  endDate: string;
  date: string;
  years: string;
  months: string;
  days: string;
  totalDays: string;
  totalWeeks: string;
  totalMonths: string;
  month: string;
  year: string;
  selectMonth: string;
  enterYear: string;
  numberOfDays: string;
  numberOfMonths: string;
  numberOfYears: string;
  isoWeek: string;
  dayOfYear: string;
  dayOfWeek: string;
  businessDays: string;
  excludesWeekends: string;
  leapYearCheck: string;
  isLeapYear: string;
  isNotLeapYear: string;
  nextLeapYear: string;
  daysInMonth: string;

  // Month names
  january: string;
  february: string;
  march: string;
  april: string;
  may: string;
  june: string;
  july: string;
  august: string;
  september: string;
  october: string;
  november: string;
  december: string;

  // Day names
  sunday: string;
  monday: string;
  tuesday: string;
  wednesday: string;
  thursday: string;
  friday: string;
  saturday: string;

  // Age Calculator
  nextBirthdayIn: string;
  bornOn: string;
  dateOfBirth: string;

  // Coin Flip
  numberOfCoins: string;
  flipping: string;
  statistics: string;
  totalFlips: string;

  // Dice Roller
  diceType: string;
  numberOfDice: string;
  rolling: string;
  rollHistory: string;
  total: string;

  // Percentage Calculator
  percentageCalculator: string;
  whatIsXPercentOfY: string;
  xIsWhatPercentOfY: string;
  percentChange: string;
  percentage: string;
  number: string;
  part: string;
  whole: string;
  oldValue: string;
  newValue: string;
  increase: string;
  decrease: string;

  // Text tool stats
  characters: string;
  words: string;
  sentences: string;
  paragraphs: string;
  lines: string;
  charsWithSpaces: string;
  charsNoSpaces: string;
  readingTime: string;
  totalLines: string;
  uniqueLines: string;
  duplicatesRemoved: string;

  // Text tool modes
  reverseCharacters: string;
  reverseWords: string;
  reverseLines: string;
  shuffleMode: string;
  trimSpaces: string;
  collapseSpaces: string;
  removeTabs: string;
  removeBlankLines: string;
  titleCase: string;
  sentenceCase: string;
  excludeAmbiguous: string;

  // BMI categories
  underweight: string;
  normal: string;
  overweight: string;
  obeseLabel: string;

  // Compound interest frequencies
  annually: string;
  semiAnnually: string;
  quarterlyLabel: string;
  monthlyLabel: string;
  dailyLabel: string;

  // Number bases
  binaryBase: string;
  octalBase: string;
  decimalBase: string;
  hexBase: string;

  // Unit converter categories
  weightCat: string;
  temperatureCat: string;
  volumeCat: string;
  speedCat: string;
  areaCat: string;
  timeCat: string;
  digitalStorageCat: string;

  // Date calculator remaining
  isInFuture: string;
  hasPassed: string;
  thatsToday: string;
  since: string;

  // Random tools
  enterNamesPrompt: string;
  enterOptionsPrompt: string;
  copyAll: string;

  // Placeholders
  enterTextHere: string;
  enterTextToConvert: string;
  pasteTextHere: string;

  // Error messages
  invalidBinary: string;
  invalidHex: string;
  invalidCsv: string;
  invalidJson: string;
  validJson: string;
  inputEmpty: string;
  encodingError: string;
  invalidBase64: string;
  parseError: string;

  // Currency symbol per locale
  currencySymbol: string;

  // Date calculator extras
  targetDate: string;
  pastDate: string;

  // Tip calculator
  tipAmount: string;
  totalWithTip: string;
  perPerson: string;

  // BMI
  yourBmi: string;

  // Random tools extras
  allowDuplicates: string;
  removePickedFromList: string;

  // JWT Decoder
  jwtHeader: string;
  jwtPayload: string;
  noExpiration: string;
  expired: string;
  validUntil: string;
}

const defaultLabels: ToolUILabels = {
  copy: "Copy",
  copied: "Copied!",
  generate: "Generate",
  calculate: "Calculate",
  convert: "Convert",
  clear: "Clear",
  reset: "Reset",
  swap: "Swap",
  enterValue: "Enter value",
  result: "Result",
  enterValuesToCalculate: "Enter values to calculate",
  formula: "Formula",
  commonValues: "Common Values",
  calculationError: "Calculation error",
  invalidInput: "Invalid input",
  download: "Download",
  paste: "Paste",
  input: "Input",
  output: "Output",
  format: "Format",
  minify: "Minify",
  encode: "Encode",
  decode: "Decode",
  flip: "Flip",
  roll: "Roll",
  pick: "Pick",
  heads: "Heads",
  tails: "Tails",
  history: "History",
  clearHistory: "Clear History",
  length: "Length",
  uppercase: "Uppercase",
  lowercase: "Lowercase",
  numbers: "Numbers",
  symbols: "Symbols",
  strength: "Strength",
  weak: "Weak",
  fair: "Fair",
  strong: "Strong",
  veryStrong: "Very Strong",
  quantity: "Quantity",
  allBases: "All Bases",
  commonConversions: "Common Conversions",

  // Date & Time
  startDate: "Start Date",
  endDate: "End Date",
  date: "Date",
  years: "Years",
  months: "Months",
  days: "Days",
  totalDays: "Total Days",
  totalWeeks: "Total Weeks",
  totalMonths: "Total Months",
  month: "Month",
  year: "Year",
  selectMonth: "Select month",
  enterYear: "Enter year",
  numberOfDays: "Number of days",
  numberOfMonths: "Number of months",
  numberOfYears: "Number of years",
  isoWeek: "ISO Week",
  dayOfYear: "Day of Year",
  dayOfWeek: "Day of Week",
  businessDays: "business days",
  excludesWeekends: "Excludes weekends (Saturday & Sunday)",
  leapYearCheck: "Leap Year Check",
  isLeapYear: "is a leap year",
  isNotLeapYear: "is NOT a leap year",
  nextLeapYear: "Next leap year",
  daysInMonth: "Days in Month",

  // Month names
  january: "January",
  february: "February",
  march: "March",
  april: "April",
  may: "May",
  june: "June",
  july: "July",
  august: "August",
  september: "September",
  october: "October",
  november: "November",
  december: "December",

  // Day names
  sunday: "Sunday",
  monday: "Monday",
  tuesday: "Tuesday",
  wednesday: "Wednesday",
  thursday: "Thursday",
  friday: "Friday",
  saturday: "Saturday",

  // Age Calculator
  nextBirthdayIn: "Next Birthday In",
  bornOn: "Born On",
  dateOfBirth: "Date of Birth",

  // Coin Flip
  numberOfCoins: "Number of Coins",
  flipping: "Flipping…",
  statistics: "Statistics",
  totalFlips: "Total Flips",

  // Dice Roller
  diceType: "Dice Type",
  numberOfDice: "Number of Dice",
  rolling: "Rolling…",
  rollHistory: "Roll History",
  total: "Total",

  // Percentage Calculator
  percentageCalculator: "Percentage Calculator",
  whatIsXPercentOfY: "What is X% of Y?",
  xIsWhatPercentOfY: "X is what % of Y?",
  percentChange: "% Change from X to Y",
  percentage: "Percentage",
  number: "Number",
  part: "Part",
  whole: "Whole",
  oldValue: "Old Value",
  newValue: "New Value",
  increase: "Increase",
  decrease: "Decrease",

  // Text tool stats
  characters: "Characters",
  words: "Words",
  sentences: "Sentences",
  paragraphs: "Paragraphs",
  lines: "Lines",
  charsWithSpaces: "Chars (with spaces)",
  charsNoSpaces: "Chars (no spaces)",
  readingTime: "Reading time",
  totalLines: "Total lines",
  uniqueLines: "Unique lines",
  duplicatesRemoved: "Duplicates removed",

  // Text tool modes
  reverseCharacters: "Reverse characters",
  reverseWords: "Reverse words",
  reverseLines: "Reverse lines",
  shuffleMode: "Shuffle",
  trimSpaces: "Trim leading/trailing spaces per line",
  collapseSpaces: "Collapse multiple spaces to single",
  removeTabs: "Remove tabs",
  removeBlankLines: "Remove blank lines",
  titleCase: "Title Case",
  sentenceCase: "Sentence case",
  excludeAmbiguous: "Exclude ambiguous (0OlI1)",

  // BMI categories
  underweight: "Underweight",
  normal: "Normal",
  overweight: "Overweight",
  obeseLabel: "Obese",

  // Compound interest frequencies
  annually: "Annually",
  semiAnnually: "Semi-Annually",
  quarterlyLabel: "Quarterly",
  monthlyLabel: "Monthly",
  dailyLabel: "Daily",

  // Number bases
  binaryBase: "Binary",
  octalBase: "Octal",
  decimalBase: "Decimal",
  hexBase: "Hex",

  // Unit converter categories
  weightCat: "Weight",
  temperatureCat: "Temperature",
  volumeCat: "Volume",
  speedCat: "Speed",
  areaCat: "Area",
  timeCat: "Time",
  digitalStorageCat: "Digital Storage",

  // Date calculator remaining
  isInFuture: "is in the future",
  hasPassed: "has passed",
  thatsToday: "That's today!",
  since: "Since",

  // Random tools
  enterNamesPrompt: "Enter names above (comma or newline separated)",
  enterOptionsPrompt: "Enter options above (comma or newline separated)",
  copyAll: "Copy All",

  // Placeholders
  enterTextHere: "Type or paste your text here…",
  enterTextToConvert: "Enter text to convert...",
  pasteTextHere: "Paste text here...",

  // Error messages
  invalidBinary: "Invalid binary input",
  invalidHex: "Invalid hex input",
  invalidCsv: "Invalid CSV input",
  invalidJson: "Invalid JSON",
  validJson: "Valid JSON",
  inputEmpty: "Input is empty",
  encodingError: "Encoding error",
  invalidBase64: "Invalid Base64",
  parseError: "Parse error",

  // Currency symbol per locale
  currencySymbol: "$",

  // Date calculator extras
  targetDate: "Target Date",
  pastDate: "Past Date",

  // Tip calculator
  tipAmount: "Tip Amount",
  totalWithTip: "Total with Tip",
  perPerson: "Per Person",

  // BMI
  yourBmi: "Your BMI",

  // Random tools extras
  allowDuplicates: "Allow duplicates",
  removePickedFromList: "Remove picked from list",

  // JWT Decoder
  jwtHeader: "Header",
  jwtPayload: "Payload",
  noExpiration: "No expiration",
  expired: "Expired",
  validUntil: "Valid until",
};

const ToolUIContext = createContext<ToolUILabels>(defaultLabels);

export function useToolUI(): ToolUILabels {
  return useContext(ToolUIContext);
}

export function ToolUIProvider({
  labels,
  children,
}: {
  labels: ToolUILabels;
  children: React.ReactNode;
}) {
  return (
    <ToolUIContext.Provider value={labels}>{children}</ToolUIContext.Provider>
  );
}
