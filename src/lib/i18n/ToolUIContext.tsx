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
