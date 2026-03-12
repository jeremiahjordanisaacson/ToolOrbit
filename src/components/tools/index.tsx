import dynamic from "next/dynamic";
import { ComponentType } from "react";

const loading = () => (
  <div className="flex items-center justify-center py-12 text-gray-500">
    <p>Loading tool...</p>
  </div>
);

const toolComponents: Record<string, ComponentType> = {
  // Text Tools
  "word-counter": dynamic(() => import("./text/WordCounter"), { loading }),
  "character-counter": dynamic(() => import("./text/CharacterCounter"), { loading }),
  "case-converter": dynamic(() => import("./text/CaseConverter"), { loading }),
  "remove-line-breaks": dynamic(() => import("./text/RemoveLineBreaks"), { loading }),
  "duplicate-line-remover": dynamic(() => import("./text/DuplicateLineRemover"), { loading }),
  "slug-generator": dynamic(() => import("./text/SlugGenerator"), { loading }),
  "text-sorter": dynamic(() => import("./text/TextSorter"), { loading }),
  "text-reverser": dynamic(() => import("./text/TextReverser"), { loading }),
  "whitespace-cleaner": dynamic(() => import("./text/WhitespaceCleaner"), { loading }),
  "password-generator": dynamic(() => import("./text/PasswordGenerator"), { loading }),

  // Developer Tools
  "json-formatter": dynamic(() => import("./developer/JsonFormatter"), { loading }),
  "base64-encode-decode": dynamic(() => import("./developer/Base64EncodeDecode"), { loading }),
  "url-encoder-decoder": dynamic(() => import("./developer/UrlEncoderDecoder"), { loading }),
  "jwt-decoder": dynamic(() => import("./developer/JwtDecoder"), { loading }),
  "uuid-generator": dynamic(() => import("./developer/UuidGenerator"), { loading }),
  "unix-timestamp-converter": dynamic(() => import("./developer/UnixTimestampConverter"), { loading }),
  "regex-tester": dynamic(() => import("./developer/RegexTester"), { loading }),
  "html-entity-encode-decode": dynamic(() => import("./developer/HtmlEntityEncodeDecode"), { loading }),
  "markdown-preview": dynamic(() => import("./developer/MarkdownPreview"), { loading }),
  "hash-generator": dynamic(() => import("./developer/HashGenerator"), { loading }),
  "color-converter": dynamic(() => import("./developer/ColorConverter"), { loading }),

  // Math & Conversion Tools
  "percentage-calculator": dynamic(() => import("./math/PercentageCalculator"), { loading }),
  "age-calculator": dynamic(() => import("./math/AgeCalculator"), { loading }),
  "bmi-calculator": dynamic(() => import("./math/BmiCalculator"), { loading }),
  "loan-payment-calculator": dynamic(() => import("./math/LoanPaymentCalculator"), { loading }),
  "compound-interest-calculator": dynamic(() => import("./math/CompoundInterestCalculator"), { loading }),
  "tip-calculator": dynamic(() => import("./math/TipCalculator"), { loading }),
  "unit-converter": dynamic(() => import("./math/UnitConverter"), { loading }),
  "length-converter": dynamic(() => import("./math/LengthConverter"), { loading }),
  "weight-converter": dynamic(() => import("./math/WeightConverter"), { loading }),
  "temperature-converter": dynamic(() => import("./math/TemperatureConverter"), { loading }),

  // Random & Utility Tools
  "random-number-generator": dynamic(() => import("./utility/RandomNumberGenerator"), { loading }),
  "dice-roller": dynamic(() => import("./utility/DiceRoller"), { loading }),
  "coin-flip": dynamic(() => import("./utility/CoinFlip"), { loading }),
  "random-name-picker": dynamic(() => import("./utility/RandomNamePicker"), { loading }),
  "qr-code-generator": dynamic(() => import("./utility/QrCodeGenerator"), { loading }),
};

function FallbackComponent() {
  return (
    <div className="flex items-center justify-center py-12 text-gray-500">
      <p>Tool not found.</p>
    </div>
  );
}

export function getToolComponent(slug: string): ComponentType {
  return toolComponents[slug] || FallbackComponent;
}
