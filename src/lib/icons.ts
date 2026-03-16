import {
  Type,
  Code,
  Calculator,
  ArrowLeftRight,
  Lock,
  Dice5,
  Calendar,
  Hash,
  Heart,
  GraduationCap,
  DollarSign,
  Wrench,
} from "lucide-react";
import { ComponentType } from "react";

// Map category slugs to Lucide icons
const categoryIcons: Record<string, ComponentType<{ className?: string }>> = {
  "text-tools": Type,
  "developer-tools": Code,
  "math-and-conversion-tools": Calculator,
  "unit-converters": ArrowLeftRight,
  "encoding-tools": Lock,
  "random-and-utility-tools": Dice5,
  "date-and-time-tools": Calendar,
  "number-converters": Hash,
  "health-and-fitness-tools": Heart,
  "education-tools": GraduationCap,
  "finance-calculators": DollarSign,
};

// Map tool templates to Lucide icons
const templateIcons: Record<string, ComponentType<{ className?: string }>> = {
  "pair-converter": ArrowLeftRight,
  "text-transform": Type,
  "formula-calculator": Calculator,
  "number-base": Hash,
  "random-generator": Dice5,
  "date-calculator": Calendar,
};

export function getCategoryIcon(
  categorySlug: string
): ComponentType<{ className?: string }> {
  return categoryIcons[categorySlug] || Wrench;
}

export function getToolIcon(
  template?: string,
  categorySlug?: string
): ComponentType<{ className?: string }> {
  if (template && templateIcons[template]) return templateIcons[template];
  if (categorySlug && categoryIcons[categorySlug])
    return categoryIcons[categorySlug];
  return Wrench;
}
