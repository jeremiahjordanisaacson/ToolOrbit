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
  {
    slug: "unit-converters",
    name: "Unit Converters",
    title: "Free Online Unit Converters — Convert Any Unit Instantly | ToolOrbit",
    description: "Convert between hundreds of units for length, weight, volume, area, speed, temperature, digital storage, pressure, energy, and time. Free and instant.",
    headline: "Free Online Unit Converters",
    intro: "Convert between any units instantly. Our collection covers length, weight, volume, area, speed, digital storage, pressure, energy, time, and more.",
    icon: "📐",
    guideTitle: "The Complete Guide to Unit Conversion | ToolOrbit",
    guideDescription: "Learn how to convert between units of measurement. Covers length, weight, volume, area, speed, and more with formulas and examples.",
    guideContent: `## Why Use Unit Converters?

Unit conversion is one of the most common everyday math tasks. Whether you're cooking with a recipe from another country, buying materials for a project, or working with international data, unit converters save time and prevent errors.

### Common Use Cases

- **Cooking** — Convert cups to milliliters, ounces to grams, or tablespoons to teaspoons.
- **Travel** — Convert miles to kilometers, Fahrenheit to Celsius, or gallons to liters.
- **Construction** — Convert feet to meters, square feet to square meters, or inches to centimeters.
- **Science** — Convert between SI and imperial units for lab work and research.
- **Technology** — Convert between bytes, kilobytes, megabytes, and gigabytes.

### Tips

1. **Bookmark specific converters** — Instead of a general converter, bookmark the exact conversion you use most often.
2. **Learn key factors** — 1 inch = 2.54 cm, 1 kg = 2.205 lbs, 1 mile = 1.609 km.
3. **Check your units** — Make sure you're converting the right type (e.g., fluid ounces vs weight ounces).`,
  },
  {
    slug: "encoding-tools",
    name: "Encoding & Decoding Tools",
    title: "Free Online Encoding & Decoding Tools | ToolOrbit",
    description: "Encode and decode text in binary, hex, ASCII, Morse code, ROT13, and more. Free online encoding tools for developers and students.",
    headline: "Free Encoding & Decoding Tools",
    intro: "Convert text between different encoding formats including binary, hexadecimal, ASCII, Morse code, ROT13, and more. All conversions run in your browser.",
    icon: "🔐",
    guideTitle: "The Complete Guide to Text Encoding | ToolOrbit",
    guideDescription: "Learn about different text encoding methods including binary, hex, ASCII, Base64, Morse code, and more. Practical examples and use cases.",
    guideContent: `## Understanding Text Encoding

Text encoding is the process of converting human-readable text into a different representation. This is fundamental to how computers store and transmit information.

### Common Encoding Formats

- **Binary** — Represents text as sequences of 0s and 1s. Each character is an 8-bit binary number.
- **Hexadecimal** — Base-16 representation using digits 0-9 and letters A-F. Common in programming.
- **ASCII** — The standard numeric representation of characters used by computers.
- **Morse Code** — Classic dot-and-dash encoding invented for telegraphy.
- **ROT13** — Simple letter substitution cipher that shifts each letter 13 positions.
- **Base64** — Binary-to-text encoding used for embedding data in HTML, emails, and APIs.

### Tips

1. **Encoding is not encryption** — Most encoding formats are easily reversible and provide no security.
2. **Use the right format** — Binary for learning, hex for debugging, Base64 for data transport.
3. **Check for padding** — Some encodings add padding characters that need to be handled correctly.`,
  },
  {
    slug: "finance-calculators",
    name: "Finance Calculators",
    title: "Free Online Finance Calculators — Interest, ROI, Tax & More | ToolOrbit",
    description: "Free financial calculators for interest, ROI, tax, salary, savings, and more. Plan your finances with accurate, instant calculations.",
    headline: "Free Online Finance Calculators",
    intro: "Calculate interest, ROI, taxes, salary conversions, savings goals, and more with our free financial tools. Make smarter money decisions with accurate numbers.",
    icon: "💰",
    guideTitle: "The Complete Guide to Financial Calculators | ToolOrbit",
    guideDescription: "Learn how to use financial calculators for interest, ROI, tax, salary, and savings calculations. Practical tips for managing your money.",
    guideContent: `## Why Use Financial Calculators?

Financial calculators help you make informed decisions about money. Whether you're comparing loan offers, planning savings, or calculating investment returns, having accurate numbers is essential.

### Common Use Cases

- **Loan comparison** — Compare monthly payments and total interest across different loan terms and rates.
- **Investment planning** — See how compound interest grows your money over time.
- **Tax estimation** — Calculate sales tax, VAT, or income tax impacts.
- **Salary planning** — Convert between hourly, weekly, and annual salary figures.
- **Savings goals** — Figure out how much to save monthly to reach your financial targets.

### Tips

1. **Run multiple scenarios** — Change one variable at a time to understand its impact.
2. **Account for inflation** — Use the inflation calculator to see real returns.
3. **Verify independently** — These are estimates; consult a financial advisor for major decisions.`,
  },
  {
    slug: "date-and-time-tools",
    name: "Date & Time Tools",
    title: "Free Online Date & Time Calculators | ToolOrbit",
    description: "Calculate date differences, add days to dates, find week numbers, check leap years, and more. Free online date and time tools.",
    headline: "Free Date & Time Tools",
    intro: "Calculate the difference between dates, add or subtract days, find week numbers, check leap years, and more with our free date and time tools.",
    icon: "📅",
    guideTitle: "The Complete Guide to Date & Time Calculators | ToolOrbit",
    guideDescription: "Learn how to calculate date differences, add days to dates, find week numbers, and more. Practical date and time tools for everyday use.",
    guideContent: `## Why Use Date & Time Tools?

Date calculations come up constantly in planning, project management, travel, and everyday life. Our tools handle the complexity of varying month lengths, leap years, and time zones.

### Common Use Cases

- **Project deadlines** — Calculate how many business days between two dates.
- **Age calculations** — Find exact age in years, months, and days.
- **Event planning** — Count down days until an important date.
- **Scheduling** — Find what date falls N days from today.
- **Record keeping** — Determine the week number or day of the year.

### Tips

1. **Business days exclude weekends** — Use the business days calculator for work-related deadlines.
2. **Leap years matter** — February 29 affects date calculations every 4 years.
3. **Time zones complicate things** — When working across time zones, specify UTC or local time.`,
  },
  {
    slug: "number-converters",
    name: "Number Converters",
    title: "Free Online Number Base Converters — Binary, Hex, Octal, Decimal | ToolOrbit",
    description: "Convert numbers between binary, hexadecimal, octal, decimal, and Roman numerals. Free online number base converters for developers and students.",
    headline: "Free Number Base Converters",
    intro: "Convert numbers between binary, hexadecimal, octal, decimal, and Roman numerals instantly. Essential tools for programming, computer science, and mathematics.",
    icon: "🔢",
    guideTitle: "The Complete Guide to Number Base Conversion | ToolOrbit",
    guideDescription: "Learn how to convert between binary, hexadecimal, octal, and decimal number systems. Essential knowledge for programmers and CS students.",
    guideContent: `## Understanding Number Bases

Computers use binary (base 2), but humans prefer decimal (base 10). Programmers frequently work with hexadecimal (base 16) and octal (base 8) as convenient representations of binary data.

### Number Systems

- **Binary (Base 2)** — Uses only 0 and 1. The native language of computers.
- **Octal (Base 8)** — Uses digits 0-7. Sometimes used in Unix file permissions.
- **Decimal (Base 10)** — Our everyday number system using digits 0-9.
- **Hexadecimal (Base 16)** — Uses 0-9 and A-F. Common in colors (#FF5733) and memory addresses.

### Tips

1. **Hex is compact** — One hex digit represents exactly 4 binary bits.
2. **Prefixes help** — 0b for binary, 0o for octal, 0x for hex in most programming languages.
3. **Practice with small numbers** — Master converting 0-15 between bases and larger numbers become easy.`,
  },
  {
    slug: "health-and-fitness-tools",
    name: "Health & Fitness Tools",
    title: "Free Online Health & Fitness Calculators | ToolOrbit",
    description: "Free health and fitness calculators for BMR, TDEE, calories, macros, ideal weight, body fat, and more. Plan your health goals with accurate tools.",
    headline: "Free Health & Fitness Calculators",
    intro: "Calculate your BMR, daily calories, macros, ideal weight, body fat percentage, and more. Use these tools to support your health and fitness goals.",
    icon: "💪",
    guideTitle: "The Complete Guide to Health & Fitness Calculators | ToolOrbit",
    guideDescription: "Learn how to use health and fitness calculators for BMR, TDEE, calories, macros, and more. Science-based tools for your wellness journey.",
    guideContent: `## Using Health & Fitness Calculators

These calculators use established scientific formulas to help you understand your body's needs. They're a starting point for health planning, not a replacement for professional medical advice.

### Key Metrics

- **BMR** — Basal Metabolic Rate: calories your body burns at rest.
- **TDEE** — Total Daily Energy Expenditure: total calories burned including activity.
- **Macros** — The balance of protein, carbohydrates, and fat in your diet.
- **BMI** — Body Mass Index: a general indicator of healthy weight range.

### Tips

1. **These are estimates** — Individual metabolism varies. Use these as a starting point.
2. **Track and adjust** — Monitor your progress and adjust intake based on real results.
3. **Consult professionals** — For serious health changes, work with a doctor or nutritionist.`,
  },
  {
    slug: "education-tools",
    name: "Education Tools",
    title: "Free Online Education Calculators — GPA, Grades & More | ToolOrbit",
    description: "Free education calculators for GPA, grades, test scores, and academic planning. Essential tools for students and teachers.",
    headline: "Free Education Calculators",
    intro: "Calculate your GPA, final grades, test scores, and more with our free education tools. Designed for students, teachers, and academic planners.",
    icon: "🎓",
    guideTitle: "The Complete Guide to Education Calculators | ToolOrbit",
    guideDescription: "Learn how to calculate GPA, final grades, test scores, and more. Essential academic tools for students at every level.",
    guideContent: `## Education Calculators for Students

Academic calculations can be stressful. Our tools take the guesswork out of GPA calculations, grade predictions, and test score analysis.

### Common Use Cases

- **GPA calculation** — Calculate your cumulative GPA from individual course grades and credits.
- **Final grade planning** — Figure out what score you need on the final to get your desired grade.
- **Test scoring** — Convert raw scores to percentages and letter grades.
- **Weighted averages** — Calculate grades with different assignment weights.

### Tips

1. **Know your grading scale** — Different schools use different scales (4.0, 5.0, percentage).
2. **Plan ahead** — Use the final grade calculator early in the semester to set targets.
3. **Track everything** — Keep a running GPA calculation to stay on top of your academic progress.`,
  },
];

export function getCategoryBySlug(slug: string): Category | undefined {
  return categories.find((c) => c.slug === slug);
}

export function getAllCategorySlugs(): string[] {
  return categories.map((c) => c.slug);
}
