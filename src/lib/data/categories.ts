export interface Category {
  slug: string;
  name: string;
  title: string;
  description: string;
  headline: string;
  intro: string;
  icon: string;
  guideTitle: string;
  guideDescription: string;
  guideContent: string;
}

export const categories: Category[] = [
  {
    slug: "text-tools",
    name: "Text Tools",
    title: "Free Online Text Tools — Edit, Clean & Transform Text | ToolOrbit",
    description:
      "Use free online text tools to count words, change case, remove duplicates, clean whitespace, generate slugs, and more. No signup needed.",
    headline: "Free Online Text Tools",
    intro:
      "Edit, clean, and transform text instantly with our collection of free online text utilities. Every tool runs in your browser — no data leaves your device.",
    icon: "📝",
    guideTitle: "The Complete Guide to Online Text Tools | ToolOrbit",
    guideDescription:
      "Learn how to use free online text tools to count words, change case, remove duplicates, and more. Practical tips and use cases for writers, students, and developers.",
    guideContent: `## Why Use Online Text Tools?

Whether you're a writer polishing a manuscript, a student checking word counts, or a developer cleaning data, text tools save hours of manual work.

### Common Use Cases

- **Word and character counting** — Meet strict word limits for essays, articles, meta descriptions, and social media posts.
- **Case conversion** — Instantly convert text to uppercase, lowercase, title case, or sentence case without retyping.
- **Removing duplicates** — Clean up lists by removing repeated lines in a single click.
- **Slug generation** — Create URL-friendly slugs from any title or phrase for blogs and CMS platforms.
- **Whitespace cleaning** — Strip extra spaces, tabs, and trailing whitespace from code or pasted content.

### Tips for Getting the Most Out of Text Tools

1. **Paste and go** — Most tools work instantly when you paste text. No accounts or downloads required.
2. **Chain tools together** — Clean whitespace first, then remove duplicates, then sort. Build a mini pipeline.
3. **Use keyboard shortcuts** — Select all (Ctrl+A), copy (Ctrl+C), and paste (Ctrl+V) to move text in and out quickly.
4. **Bookmark your favorites** — Keep the tools you use daily one click away.`,
  },
  {
    slug: "developer-tools",
    name: "Developer Tools",
    title:
      "Free Online Developer Tools — JSON, Base64, JWT, Regex & More | ToolOrbit",
    description:
      "Free online developer utilities for JSON formatting, Base64 encoding, JWT decoding, regex testing, hash generation, and more. Fast and private.",
    headline: "Free Online Developer Tools",
    intro:
      "Format, encode, decode, and test with our suite of free developer tools. Everything runs client-side — your data never leaves the browser.",
    icon: "💻",
    guideTitle: "The Complete Guide to Online Developer Tools | ToolOrbit",
    guideDescription:
      "Learn how to use free online developer tools for JSON formatting, Base64 encoding, JWT decoding, and more. Essential utilities for every developer.",
    guideContent: `## Why Use Online Developer Tools?

Online developer tools provide instant access to utilities you need every day without installing anything. They're perfect for quick tasks during debugging, API testing, or data transformation.

### Common Use Cases

- **JSON formatting** — Validate and pretty-print JSON responses from APIs for easier reading and debugging.
- **Base64 encoding/decoding** — Convert binary data, images, or strings to and from Base64 for embedding in code or APIs.
- **JWT decoding** — Inspect JSON Web Tokens to verify claims, expiration dates, and signatures during auth debugging.
- **Regex testing** — Build and test regular expressions with real-time matching and capture group highlighting.
- **Hash generation** — Generate SHA-256, SHA-1, and other hashes for verifying file integrity or building security features.

### Tips for Developers

1. **Bookmark frequently used tools** — Keep JSON formatter and Base64 encoder one click away.
2. **Use for quick debugging** — Paste an API response to instantly see if it's valid JSON.
3. **Verify data integrity** — Use hash generators to compare checksums before and after file transfers.
4. **Test regex patterns** — Build patterns incrementally and test with real sample data.`,
  },
  {
    slug: "math-and-conversion-tools",
    name: "Math & Conversion Tools",
    title:
      "Free Online Calculators & Unit Converters | ToolOrbit",
    description:
      "Free online calculators and unit converters for percentages, BMI, loans, compound interest, length, weight, temperature, and more.",
    headline: "Free Online Calculators & Converters",
    intro:
      "Calculate percentages, convert units, estimate loan payments, and more with our free online math tools. Instant results with no signup required.",
    icon: "🔢",
    guideTitle: "The Complete Guide to Online Calculators & Converters | ToolOrbit",
    guideDescription:
      "Learn how to use free online calculators and unit converters for percentages, BMI, loans, interest, and unit conversions. Practical examples included.",
    guideContent: `## Why Use Online Calculators?

Online calculators give you instant, accurate answers without searching for formulas or opening a spreadsheet. They're ideal for quick calculations during everyday decisions.

### Common Use Cases

- **Percentage calculations** — Figure out discounts, tax amounts, tips, and grade percentages in seconds.
- **BMI calculation** — Check your Body Mass Index using your height and weight for health tracking.
- **Loan payments** — Estimate monthly mortgage or car loan payments before committing.
- **Compound interest** — See how investments grow over time with different rates and compounding periods.
- **Unit conversions** — Convert between metric and imperial units for length, weight, and temperature.

### Tips for Accurate Calculations

1. **Double-check your inputs** — A misplaced decimal can significantly change results.
2. **Understand the formula** — Each calculator shows what it computes so you know what the numbers mean.
3. **Use for planning** — Run loan and interest calculators with different scenarios to compare options.
4. **Bookmark converters** — If you regularly convert between units, keep the converter one click away.`,
  },
  {
    slug: "random-and-utility-tools",
    name: "Random & Utility Tools",
    title:
      "Free Online Random Generators & Utility Tools | ToolOrbit",
    description:
      "Free random number generators, dice rollers, coin flippers, name pickers, and QR code generators. Fast, fun, and free online tools.",
    headline: "Free Random Generators & Utility Tools",
    intro:
      "Generate random numbers, roll dice, flip coins, pick names, and create QR codes with our free online utility tools. Perfect for games, decisions, and quick tasks.",
    icon: "🎲",
    guideTitle:
      "The Complete Guide to Random Generators & Utility Tools | ToolOrbit",
    guideDescription:
      "Learn how to use free online random generators and utility tools for games, decisions, classroom activities, and more.",
    guideContent: `## Why Use Random Generators?

Random generators are useful for far more than games. Teachers use name pickers for fair classroom participation, developers use UUID generators for unique identifiers, and teams use dice rollers for sprint planning.

### Common Use Cases

- **Random number generation** — Generate random numbers within any range for games, raffles, or simulations.
- **Dice rolling** — Roll one or more dice with different face counts for tabletop games or decision making.
- **Coin flipping** — Make binary decisions fairly with a virtual coin flip.
- **Name picking** — Select random names from a list for raffles, team assignments, or classroom activities.
- **QR code generation** — Create QR codes for URLs, text, or contact information to share digitally or in print.

### Tips for Using These Tools

1. **Use for fair decisions** — When you need an unbiased choice, random generators remove human bias.
2. **Classroom and team activities** — Name pickers make group selection fun and fair.
3. **QR codes for sharing** — Generate QR codes for your website, Wi-Fi password, or event details.
4. **Game night essentials** — Dice rollers and coin flippers work when you've lost the physical versions.`,
  },
];

export function getCategoryBySlug(slug: string): Category | undefined {
  return categories.find((c) => c.slug === slug);
}

export function getAllCategorySlugs(): string[] {
  return categories.map((c) => c.slug);
}
