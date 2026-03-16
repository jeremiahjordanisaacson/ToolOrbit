export interface FAQ {
  question: string;
  answer: string;
}

export interface Tool {
  slug: string;
  name: string;
  title: string;
  description: string;
  headline: string;
  intro: string;
  categorySlug: string;
  keywords: string[];
  faqs: FAQ[];
  howToUse: string[];
  relatedSlugs: string[];
  exampleInput?: string;
  exampleOutput?: string;
  template?: string;
  templateConfig?: Record<string, unknown>;
}

// ---------------------------------------------------------------------------
// TEXT TOOLS
// ---------------------------------------------------------------------------

const textTools: Tool[] = [
  {
    slug: "word-counter",
    name: "Word Counter",
    title: "Free Online Word Counter — Count Words, Sentences & Paragraphs | ToolOrbit",
    description: "Count words, characters, sentences, and paragraphs instantly. Free online word counter for essays, articles, and social media posts. No signup required.",
    headline: "Free Online Word Counter",
    intro: "Paste or type your text to instantly count words, characters, sentences, and paragraphs. Perfect for meeting word limits on essays, blog posts, and social media.",
    categorySlug: "text-tools",
    keywords: ["word counter", "count words online", "word count tool", "character counter", "free word counter"],
    faqs: [
      { question: "How does the word counter work?", answer: "Paste or type text into the input box. The tool instantly counts words by splitting on whitespace, characters by string length, sentences by punctuation, and paragraphs by blank lines." },
      { question: "Does it count spaces as characters?", answer: "The tool shows both characters with spaces and characters without spaces so you can use whichever metric you need." },
      { question: "Is there a word limit?", answer: "No. The tool runs entirely in your browser and can handle very long documents." },
      { question: "Is my text stored anywhere?", answer: "No. All processing happens locally in your browser. Your text is never sent to a server." },
    ],
    howToUse: [
      "Paste or type your text into the text area.",
      "View the live word, character, sentence, and paragraph counts above the input.",
      "Use the counts to verify you meet your target word limit.",
    ],
    relatedSlugs: ["character-counter", "case-converter", "whitespace-cleaner", "remove-line-breaks"],
    exampleInput: "The quick brown fox jumps over the lazy dog.",
    exampleOutput: "Words: 9 | Characters: 44 | Sentences: 1 | Paragraphs: 1",
  },
  {
    slug: "character-counter",
    name: "Character Counter",
    title: "Free Online Character Counter — Count Characters With & Without Spaces | ToolOrbit",
    description: "Count characters with and without spaces instantly. Free character counter for Twitter, meta descriptions, SMS, and more. No signup required.",
    headline: "Free Online Character Counter",
    intro: "Need to stay within a character limit? Paste your text to see character counts with and without spaces in real time. Ideal for tweets, meta descriptions, and SMS messages.",
    categorySlug: "text-tools",
    keywords: ["character counter", "count characters online", "character count tool", "letter counter"],
    faqs: [
      { question: "What counts as a character?", answer: "Every letter, number, symbol, space, and punctuation mark counts as one character. The tool also shows a count without spaces." },
      { question: "Can I use this for Twitter character limits?", answer: "Yes. Twitter allows 280 characters per tweet. Paste your text to check the count before posting." },
      { question: "Does it handle Unicode characters?", answer: "Yes. Emojis and special characters are counted correctly." },
    ],
    howToUse: [
      "Paste or type your text into the input area.",
      "See the character count update in real time.",
      "Toggle between with-spaces and without-spaces counts as needed.",
    ],
    relatedSlugs: ["word-counter", "case-converter", "whitespace-cleaner"],
    exampleInput: "Hello, World!",
    exampleOutput: "Characters (with spaces): 13 | Characters (without spaces): 12",
  },
  {
    slug: "case-converter",
    name: "Case Converter",
    title: "Free Online Case Converter — Uppercase, Lowercase, Title Case & More | ToolOrbit",
    description: "Convert text to uppercase, lowercase, title case, sentence case, or toggle case instantly. Free online case converter with no signup.",
    headline: "Free Online Case Converter",
    intro: "Transform text between uppercase, lowercase, title case, sentence case, and more with a single click. No need to retype anything.",
    categorySlug: "text-tools",
    keywords: ["case converter", "uppercase converter", "lowercase converter", "title case converter", "change text case"],
    faqs: [
      { question: "What case options are available?", answer: "You can convert to UPPERCASE, lowercase, Title Case, Sentence case, tOGGLE cASE, camelCase, PascalCase, snake_case, and kebab-case." },
      { question: "Does it preserve line breaks?", answer: "Yes. The tool only changes letter casing and preserves all other formatting." },
      { question: "Can I use this for programming?", answer: "Absolutely. The camelCase, PascalCase, snake_case, and kebab-case options are designed for developers." },
    ],
    howToUse: [
      "Paste or type your text into the input area.",
      "Click the desired case button (Uppercase, Lowercase, Title Case, etc.).",
      "Copy the converted text from the output area.",
    ],
    relatedSlugs: ["word-counter", "slug-generator", "text-reverser", "whitespace-cleaner"],
    exampleInput: "the quick brown fox",
    exampleOutput: "Title Case → The Quick Brown Fox",
  },
  {
    slug: "remove-line-breaks",
    name: "Remove Line Breaks",
    title: "Remove Line Breaks Online — Free Text Line Break Remover | ToolOrbit",
    description: "Remove line breaks and join lines into a single paragraph. Free online tool to clean pasted text from PDFs, emails, and documents.",
    headline: "Remove Line Breaks Online",
    intro: "Paste text with unwanted line breaks and get clean, flowing paragraphs. Perfect for fixing text copied from PDFs, emails, and formatted documents.",
    categorySlug: "text-tools",
    keywords: ["remove line breaks", "line break remover", "join lines", "merge lines", "remove newlines"],
    faqs: [
      { question: "What are line breaks?", answer: "Line breaks are invisible characters (newlines) that move text to the next line. They're often introduced when copying from PDFs or formatted documents." },
      { question: "Will this remove paragraph breaks too?", answer: "You can choose to remove all line breaks or only single line breaks while preserving paragraph spacing." },
      { question: "Does it handle Windows and Mac line breaks?", answer: "Yes. The tool handles both \\r\\n (Windows) and \\n (Mac/Linux) line endings." },
    ],
    howToUse: [
      "Paste your text with unwanted line breaks into the input area.",
      "Choose to remove all line breaks or only single line breaks.",
      "Copy the cleaned text from the output area.",
    ],
    relatedSlugs: ["whitespace-cleaner", "duplicate-line-remover", "word-counter"],
    exampleInput: "Hello\nWorld\nThis is\na test",
    exampleOutput: "Hello World This is a test",
  },
  {
    slug: "duplicate-line-remover",
    name: "Duplicate Line Remover",
    title: "Remove Duplicate Lines Online — Free Duplicate Line Remover | ToolOrbit",
    description: "Remove duplicate lines from text instantly. Free online tool to deduplicate lists, clean data, and find unique lines. No signup required.",
    headline: "Remove Duplicate Lines Online",
    intro: "Paste a list or block of text to instantly remove duplicate lines and keep only unique entries. Great for cleaning email lists, data exports, and log files.",
    categorySlug: "text-tools",
    keywords: ["remove duplicate lines", "duplicate line remover", "deduplicate text", "unique lines", "remove duplicates"],
    faqs: [
      { question: "Is the comparison case-sensitive?", answer: "By default yes, but you can toggle case-insensitive matching so 'Hello' and 'hello' are treated as duplicates." },
      { question: "Does it preserve the original order?", answer: "Yes. The first occurrence of each line is kept in its original position." },
      { question: "Can it handle large lists?", answer: "Yes. The tool runs in your browser and can process thousands of lines." },
    ],
    howToUse: [
      "Paste your text with duplicate lines into the input area.",
      "Toggle case sensitivity if needed.",
      "View and copy the deduplicated output.",
    ],
    relatedSlugs: ["text-sorter", "whitespace-cleaner", "remove-line-breaks", "word-counter"],
    exampleInput: "apple\nbanana\napple\ncherry\nbanana",
    exampleOutput: "apple\nbanana\ncherry",
  },
  {
    slug: "slug-generator",
    name: "Slug Generator",
    title: "Free URL Slug Generator — Create SEO-Friendly Slugs | ToolOrbit",
    description: "Generate clean, SEO-friendly URL slugs from any text. Free online slug generator for blogs, CMS platforms, and web development.",
    headline: "Free URL Slug Generator",
    intro: "Turn any title or phrase into a clean, URL-friendly slug. Remove special characters, replace spaces with hyphens, and create SEO-friendly URLs instantly.",
    categorySlug: "text-tools",
    keywords: ["slug generator", "url slug generator", "seo slug", "create slug", "url friendly text"],
    faqs: [
      { question: "What is a slug?", answer: "A slug is the URL-friendly version of a title. For example, 'How to Bake a Cake' becomes 'how-to-bake-a-cake'." },
      { question: "Why are slugs important for SEO?", answer: "Clean, descriptive URLs help search engines understand page content and improve click-through rates in search results." },
      { question: "Does it remove special characters?", answer: "Yes. The tool removes special characters, converts to lowercase, and replaces spaces with hyphens." },
    ],
    howToUse: [
      "Type or paste a title or phrase into the input.",
      "The slug is generated automatically in real time.",
      "Copy the slug for use in your URL.",
    ],
    relatedSlugs: ["case-converter", "url-encoder-decoder", "whitespace-cleaner"],
    exampleInput: "How to Bake a Chocolate Cake!",
    exampleOutput: "how-to-bake-a-chocolate-cake",
  },
  {
    slug: "text-sorter",
    name: "Text Sorter",
    title: "Sort Text Lines Online — Free Alphabetical Text Sorter | ToolOrbit",
    description: "Sort text lines alphabetically, reverse, or numerically. Free online text sorter for lists, data, and more. No signup required.",
    headline: "Sort Text Lines Online",
    intro: "Paste a list of text lines and sort them alphabetically, reverse alphabetically, numerically, or randomly. Perfect for organizing lists and data.",
    categorySlug: "text-tools",
    keywords: ["text sorter", "sort lines", "alphabetical sorter", "sort list online", "line sorter"],
    faqs: [
      { question: "What sort orders are available?", answer: "Alphabetical A–Z, reverse Z–A, numerical (ascending and descending), and random shuffle." },
      { question: "Is sorting case-sensitive?", answer: "You can toggle case-sensitive sorting. By default, it's case-insensitive." },
      { question: "Can it sort numbers?", answer: "Yes. Numerical sort treats each line as a number and sorts accordingly." },
    ],
    howToUse: [
      "Paste your list of lines into the text area.",
      "Select the sort order (A–Z, Z–A, numerical, or random).",
      "Copy the sorted result.",
    ],
    relatedSlugs: ["duplicate-line-remover", "remove-line-breaks", "text-reverser", "whitespace-cleaner"],
  },
  {
    slug: "text-reverser",
    name: "Text Reverser",
    title: "Reverse Text Online — Free Text Reverser Tool | ToolOrbit",
    description: "Reverse text, words, or lines instantly. Free online text reverser for fun, puzzles, and data manipulation. No signup required.",
    headline: "Reverse Text Online",
    intro: "Reverse the characters, words, or lines in your text with a single click. Use it for puzzles, encoding, or just for fun.",
    categorySlug: "text-tools",
    keywords: ["reverse text", "text reverser", "backwards text", "mirror text", "flip text"],
    faqs: [
      { question: "What can I reverse?", answer: "You can reverse the entire string (character by character), reverse the order of words, or reverse the order of lines." },
      { question: "Does it handle Unicode?", answer: "Yes. The tool correctly reverses text including emojis and special characters." },
      { question: "Can I use this for creating mirror text?", answer: "Reversing characters creates mirror text that reads backwards. Great for puzzles and social media posts." },
    ],
    howToUse: [
      "Paste or type text into the input area.",
      "Choose to reverse characters, words, or lines.",
      "Copy the reversed output.",
    ],
    relatedSlugs: ["case-converter", "text-sorter", "word-counter"],
    exampleInput: "Hello World",
    exampleOutput: "dlroW olleH",
  },
  {
    slug: "whitespace-cleaner",
    name: "Whitespace Cleaner",
    title: "Clean Whitespace Online — Remove Extra Spaces & Tabs | ToolOrbit",
    description: "Remove extra spaces, tabs, trailing whitespace, and blank lines from text. Free online whitespace cleaner for code and documents.",
    headline: "Clean Whitespace Online",
    intro: "Strip extra spaces, tabs, leading/trailing whitespace, and blank lines from your text or code. Keep your content clean and consistent.",
    categorySlug: "text-tools",
    keywords: ["whitespace cleaner", "remove extra spaces", "trim whitespace", "clean spaces", "remove tabs"],
    faqs: [
      { question: "What types of whitespace does it clean?", answer: "It removes extra spaces between words, leading and trailing spaces on each line, tab characters, and optionally removes blank lines." },
      { question: "Will it break my code formatting?", answer: "The tool trims excess whitespace while preserving single spaces between words. For code, use the options to control what gets cleaned." },
      { question: "Can it remove all blank lines?", answer: "Yes. Toggle the option to collapse or remove blank lines from your text." },
    ],
    howToUse: [
      "Paste text with extra whitespace into the input area.",
      "Select which types of whitespace to remove.",
      "Copy the cleaned output.",
    ],
    relatedSlugs: ["remove-line-breaks", "duplicate-line-remover", "word-counter", "case-converter"],
  },
  {
    slug: "password-generator",
    name: "Password Generator",
    title: "Free Strong Password Generator — Create Secure Passwords | ToolOrbit",
    description: "Generate strong, random passwords with customizable length and character types. Free online password generator. No data stored.",
    headline: "Free Strong Password Generator",
    intro: "Create strong, random passwords instantly. Customize length, include uppercase, lowercase, numbers, and symbols. All generation happens in your browser — nothing is stored or transmitted.",
    categorySlug: "text-tools",
    keywords: ["password generator", "strong password generator", "random password", "secure password", "generate password online"],
    faqs: [
      { question: "Are the generated passwords truly random?", answer: "Yes. The tool uses the Web Crypto API (crypto.getRandomValues) for cryptographically secure random number generation." },
      { question: "Is my password stored anywhere?", answer: "No. The password is generated entirely in your browser and is never sent to any server." },
      { question: "How long should my password be?", answer: "For strong security, use at least 16 characters with a mix of uppercase, lowercase, numbers, and symbols." },
      { question: "Can I exclude ambiguous characters?", answer: "Yes. You can exclude characters like 0, O, l, 1, I that are easy to confuse." },
    ],
    howToUse: [
      "Set your desired password length using the slider.",
      "Toggle character types: uppercase, lowercase, numbers, symbols.",
      "Click Generate to create a new password.",
      "Click Copy to copy it to your clipboard.",
    ],
    relatedSlugs: ["hash-generator", "uuid-generator", "base64-encode-decode"],
  },
];

// ---------------------------------------------------------------------------
// DEVELOPER TOOLS
// ---------------------------------------------------------------------------

const developerTools: Tool[] = [
  {
    slug: "json-formatter",
    name: "JSON Formatter & Validator",
    title: "Free Online JSON Formatter & Validator — Pretty Print JSON | ToolOrbit",
    description: "Format, validate, and pretty-print JSON data online. Free JSON formatter with syntax highlighting and error detection. No signup required.",
    headline: "Free Online JSON Formatter & Validator",
    intro: "Paste your JSON to instantly format, validate, and pretty-print it with proper indentation. Spot errors quickly with clear validation messages.",
    categorySlug: "developer-tools",
    keywords: ["json formatter", "json validator", "pretty print json", "json beautifier", "format json online"],
    faqs: [
      { question: "What does the JSON formatter do?", answer: "It takes raw or minified JSON and formats it with proper indentation and line breaks for easy reading. It also validates the structure and reports any syntax errors." },
      { question: "Can it minify JSON?", answer: "Yes. You can both pretty-print and minify JSON with a single click." },
      { question: "Does it support large JSON files?", answer: "The tool handles JSON of any reasonable size. Processing happens entirely in your browser." },
      { question: "Is my data secure?", answer: "Yes. All processing is done client-side. Your JSON data never leaves your browser." },
    ],
    howToUse: [
      "Paste your JSON into the input area.",
      "Click Format to pretty-print or Minify to compress.",
      "Validation errors will appear below the input if the JSON is invalid.",
      "Copy the formatted result.",
    ],
    relatedSlugs: ["jwt-decoder", "base64-encode-decode", "html-entity-encode-decode", "url-encoder-decoder"],
    exampleInput: '{"name":"John","age":30,"city":"New York"}',
    exampleOutput: '{\n  "name": "John",\n  "age": 30,\n  "city": "New York"\n}',
  },
  {
    slug: "base64-encode-decode",
    name: "Base64 Encode/Decode",
    title: "Free Online Base64 Encoder & Decoder | ToolOrbit",
    description: "Encode text to Base64 or decode Base64 to text instantly. Free online Base64 tool for developers. No signup required.",
    headline: "Free Online Base64 Encoder & Decoder",
    intro: "Convert text to Base64 encoding or decode Base64 strings back to readable text. Essential for working with APIs, data URIs, and encoded content.",
    categorySlug: "developer-tools",
    keywords: ["base64 encode", "base64 decode", "base64 converter", "base64 online", "encode base64"],
    faqs: [
      { question: "What is Base64 encoding?", answer: "Base64 is a binary-to-text encoding scheme that represents binary data as ASCII characters. It's commonly used for embedding data in URLs, emails, and JSON." },
      { question: "Can it handle UTF-8 text?", answer: "Yes. The tool correctly encodes and decodes UTF-8 text including special characters and emojis." },
      { question: "Is Base64 encryption?", answer: "No. Base64 is an encoding, not encryption. It does not provide security — anyone can decode it." },
    ],
    howToUse: [
      "Paste text or a Base64 string into the input area.",
      "Click Encode to convert to Base64 or Decode to convert back to text.",
      "Copy the result.",
    ],
    relatedSlugs: ["url-encoder-decoder", "html-entity-encode-decode", "json-formatter", "jwt-decoder"],
    exampleInput: "Hello, World!",
    exampleOutput: "SGVsbG8sIFdvcmxkIQ==",
  },
  {
    slug: "url-encoder-decoder",
    name: "URL Encoder/Decoder",
    title: "Free Online URL Encoder & Decoder | ToolOrbit",
    description: "Encode or decode URLs and query strings online. Free URL encoding/decoding tool for developers. Handles special characters correctly.",
    headline: "Free Online URL Encoder & Decoder",
    intro: "Encode special characters in URLs or decode percent-encoded URL strings. Essential for working with query parameters, API calls, and web development.",
    categorySlug: "developer-tools",
    keywords: ["url encoder", "url decoder", "percent encoding", "encode url online", "decode url"],
    faqs: [
      { question: "What is URL encoding?", answer: "URL encoding replaces special characters with percent-encoded equivalents (e.g., space becomes %20) so they can be safely included in URLs." },
      { question: "When do I need URL encoding?", answer: "Use URL encoding when passing special characters in query strings, form data, or any URL component that might contain spaces or symbols." },
      { question: "Does it handle full URLs?", answer: "Yes. You can encode/decode individual strings or full URLs with query parameters." },
    ],
    howToUse: [
      "Paste a URL or text string into the input area.",
      "Click Encode to percent-encode or Decode to convert back.",
      "Copy the result for use in your code or browser.",
    ],
    relatedSlugs: ["base64-encode-decode", "html-entity-encode-decode", "json-formatter", "slug-generator"],
    exampleInput: "hello world & foo=bar",
    exampleOutput: "hello%20world%20%26%20foo%3Dbar",
  },
  {
    slug: "jwt-decoder",
    name: "JWT Decoder",
    title: "Free Online JWT Decoder — Decode JSON Web Tokens | ToolOrbit",
    description: "Decode and inspect JSON Web Tokens (JWT) online. View header, payload, and claims. Free JWT decoder for developers. No signup required.",
    headline: "Free Online JWT Decoder",
    intro: "Paste a JSON Web Token to instantly decode and inspect its header, payload, and claims. Check expiration dates, issuers, and custom claims without any libraries.",
    categorySlug: "developer-tools",
    keywords: ["jwt decoder", "decode jwt", "json web token decoder", "jwt parser", "jwt viewer"],
    faqs: [
      { question: "What is a JWT?", answer: "A JSON Web Token (JWT) is a compact, URL-safe token format used for authentication and information exchange. It consists of a header, payload, and signature." },
      { question: "Does this tool verify the signature?", answer: "This tool decodes and displays the JWT contents but does not verify the cryptographic signature, as that requires the secret key or public key." },
      { question: "Is it safe to paste my JWT here?", answer: "Yes. All decoding happens in your browser. The token is never sent to any server. However, never share production tokens publicly." },
    ],
    howToUse: [
      "Paste your JWT (the long encoded string) into the input area.",
      "The header and payload are decoded and displayed automatically.",
      "Review claims like expiration (exp), issuer (iss), and custom fields.",
    ],
    relatedSlugs: ["json-formatter", "base64-encode-decode", "hash-generator", "uuid-generator"],
    exampleInput: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c",
    exampleOutput: '{ "sub": "1234567890", "name": "John Doe", "iat": 1516239022 }',
  },
  {
    slug: "uuid-generator",
    name: "UUID Generator",
    title: "Free Online UUID Generator — Generate Random UUIDs | ToolOrbit",
    description: "Generate random UUIDs (v4) instantly. Free online UUID generator for developers. Create unique identifiers for databases, APIs, and more.",
    headline: "Free Online UUID Generator",
    intro: "Generate universally unique identifiers (UUID v4) with a single click. Perfect for database primary keys, API identifiers, and tracking IDs.",
    categorySlug: "developer-tools",
    keywords: ["uuid generator", "generate uuid", "uuid v4", "random uuid", "guid generator"],
    faqs: [
      { question: "What is a UUID?", answer: "A UUID (Universally Unique Identifier) is a 128-bit identifier that is practically guaranteed to be unique. The v4 format uses random numbers." },
      { question: "Are UUIDs truly unique?", answer: "UUID v4 uses 122 random bits, making collisions astronomically unlikely. You can safely use them as unique identifiers." },
      { question: "What format are the UUIDs?", answer: "Standard UUID v4 format: xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx where x is a random hex digit and y is one of 8, 9, a, or b." },
    ],
    howToUse: [
      "Click Generate to create a new UUID.",
      "Set the quantity to generate multiple UUIDs at once.",
      "Click Copy to copy to your clipboard.",
    ],
    relatedSlugs: ["password-generator", "hash-generator", "random-number-generator", "json-formatter"],
    exampleOutput: "f47ac10b-58cc-4372-a567-0e02b2c3d479",
  },
  {
    slug: "unix-timestamp-converter",
    name: "Unix Timestamp Converter",
    title: "Free Unix Timestamp Converter — Convert Epoch Time to Date | ToolOrbit",
    description: "Convert Unix timestamps to human-readable dates and vice versa. Free online epoch time converter for developers. Supports seconds and milliseconds.",
    headline: "Free Unix Timestamp Converter",
    intro: "Convert between Unix timestamps (epoch time) and human-readable dates instantly. Supports seconds and milliseconds. See the current timestamp in real time.",
    categorySlug: "developer-tools",
    keywords: ["unix timestamp converter", "epoch converter", "timestamp to date", "unix time", "epoch time converter"],
    faqs: [
      { question: "What is a Unix timestamp?", answer: "A Unix timestamp is the number of seconds that have elapsed since January 1, 1970 00:00:00 UTC (the Unix epoch)." },
      { question: "Does it support milliseconds?", answer: "Yes. The tool automatically detects whether the input is in seconds or milliseconds based on its length." },
      { question: "What timezone is used?", answer: "The tool shows both UTC and your local timezone for easy reference." },
    ],
    howToUse: [
      "Enter a Unix timestamp to convert it to a readable date.",
      "Or enter a date to get the Unix timestamp.",
      "View the current Unix timestamp updating in real time.",
    ],
    relatedSlugs: ["json-formatter", "uuid-generator", "age-calculator", "base64-encode-decode"],
    exampleInput: "1700000000",
    exampleOutput: "Tuesday, November 14, 2023 10:13:20 PM UTC",
  },
  {
    slug: "regex-tester",
    name: "Regex Tester",
    title: "Free Online Regex Tester — Test Regular Expressions | ToolOrbit",
    description: "Test and debug regular expressions in real time. Free online regex tester with match highlighting and capture group display. No signup required.",
    headline: "Free Online Regex Tester",
    intro: "Build and test regular expressions with real-time match highlighting. See matched groups, test against sample text, and debug patterns instantly.",
    categorySlug: "developer-tools",
    keywords: ["regex tester", "regular expression tester", "regex online", "test regex", "regex debugger"],
    faqs: [
      { question: "What regex flavor does this use?", answer: "It uses JavaScript's built-in RegExp engine, which supports most standard regex features including lookaheads, character classes, and quantifiers." },
      { question: "Can I see capture groups?", answer: "Yes. Matched capture groups are displayed separately so you can verify your grouping patterns." },
      { question: "What flags are supported?", answer: "Global (g), case-insensitive (i), multiline (m), dotAll (s), and unicode (u) flags are all supported." },
    ],
    howToUse: [
      "Enter your regex pattern in the pattern input.",
      "Set flags (g, i, m, etc.) as needed.",
      "Enter test text in the text area.",
      "Matches are highlighted in real time.",
    ],
    relatedSlugs: ["json-formatter", "html-entity-encode-decode", "url-encoder-decoder", "slug-generator"],
  },
  {
    slug: "html-entity-encode-decode",
    name: "HTML Entity Encode/Decode",
    title: "Free Online HTML Entity Encoder & Decoder | ToolOrbit",
    description: "Encode special characters to HTML entities or decode HTML entities to text. Free online HTML encoding tool for web developers.",
    headline: "Free Online HTML Entity Encoder & Decoder",
    intro: "Convert special characters to their HTML entity equivalents or decode HTML entities back to readable text. Essential for safely embedding content in HTML.",
    categorySlug: "developer-tools",
    keywords: ["html entity encoder", "html entity decoder", "html entities", "encode html", "decode html entities"],
    faqs: [
      { question: "What are HTML entities?", answer: "HTML entities are special codes that represent characters that have meaning in HTML (like < > & \") or characters not on your keyboard. For example, &amp; represents &." },
      { question: "When should I use HTML encoding?", answer: "Use HTML encoding when displaying user input in web pages to prevent XSS attacks, or when you need to show HTML code as text." },
      { question: "Does it handle all entities?", answer: "Yes. It handles named entities (like &amp;), decimal entities (like &#38;), and hexadecimal entities (like &#x26;)." },
    ],
    howToUse: [
      "Paste text with special characters or HTML entities into the input.",
      "Click Encode to convert to entities or Decode to convert back.",
      "Copy the result for use in your HTML.",
    ],
    relatedSlugs: ["url-encoder-decoder", "base64-encode-decode", "json-formatter", "markdown-preview"],
    exampleInput: '<p class="test">Hello & goodbye</p>',
    exampleOutput: "&lt;p class=&quot;test&quot;&gt;Hello &amp; goodbye&lt;/p&gt;",
  },
  {
    slug: "markdown-preview",
    name: "Markdown Preview",
    title: "Free Online Markdown Preview — Live Markdown Renderer | ToolOrbit",
    description: "Preview Markdown as rendered HTML in real time. Free online Markdown editor and previewer for README files, documentation, and blog posts.",
    headline: "Free Online Markdown Preview",
    intro: "Type or paste Markdown and see it rendered as HTML in real time. Perfect for previewing README files, documentation, blog posts, and GitHub-flavored Markdown.",
    categorySlug: "developer-tools",
    keywords: ["markdown preview", "markdown editor", "markdown to html", "markdown renderer", "live markdown"],
    faqs: [
      { question: "What Markdown syntax is supported?", answer: "Standard Markdown plus common extensions: headings, bold, italic, links, images, code blocks, lists, tables, and blockquotes." },
      { question: "Does it support GitHub-flavored Markdown?", answer: "Yes. Tables, task lists, strikethrough, and fenced code blocks are all supported." },
      { question: "Can I use this for README files?", answer: "Absolutely. Preview your README.md exactly as it will appear on GitHub or npm." },
    ],
    howToUse: [
      "Type or paste Markdown in the left panel.",
      "See the rendered HTML preview in the right panel in real time.",
      "Copy the rendered HTML if needed.",
    ],
    relatedSlugs: ["html-entity-encode-decode", "json-formatter", "slug-generator", "word-counter"],
    exampleInput: "# Hello World\n\nThis is **bold** and this is *italic*.",
  },
  {
    slug: "hash-generator",
    name: "Hash Generator",
    title: "Free Online Hash Generator — MD5, SHA-1, SHA-256 | ToolOrbit",
    description: "Generate MD5, SHA-1, and SHA-256 hashes from text online. Free hash generator for verifying file integrity and security applications.",
    headline: "Free Online Hash Generator",
    intro: "Generate cryptographic hashes from any text. Supports SHA-256, SHA-1, and MD5 algorithms. All hashing happens in your browser using the Web Crypto API.",
    categorySlug: "developer-tools",
    keywords: ["hash generator", "sha256 hash", "md5 hash", "sha1 hash", "generate hash online"],
    faqs: [
      { question: "What hash algorithms are supported?", answer: "SHA-256, SHA-384, SHA-512, SHA-1, and MD5. SHA-256 is recommended for most use cases." },
      { question: "Is hashing the same as encryption?", answer: "No. Hashing is a one-way function — you cannot reverse a hash to get the original text. Encryption is reversible with a key." },
      { question: "Is my data secure?", answer: "Yes. All hashing is done in your browser using the Web Crypto API. No data is sent to any server." },
      { question: "What is MD5 used for?", answer: "MD5 is commonly used for checksum verification. It should not be used for security purposes as it has known vulnerabilities." },
    ],
    howToUse: [
      "Enter or paste text into the input area.",
      "Select the hash algorithm (SHA-256, SHA-1, MD5, etc.).",
      "The hash is generated instantly.",
      "Copy the hash value.",
    ],
    relatedSlugs: ["password-generator", "base64-encode-decode", "uuid-generator", "json-formatter"],
    exampleInput: "Hello, World!",
    exampleOutput: "SHA-256: dffd6021bb2bd5b0af676290809ec3a53191dd81c7f70a4b28688a362182986f",
  },
  {
    slug: "color-converter",
    name: "Color Converter",
    title: "Free Online Color Converter — HEX, RGB, HSL Converter | ToolOrbit",
    description: "Convert colors between HEX, RGB, and HSL formats instantly. Free online color converter with live preview for designers and developers.",
    headline: "Free Online Color Converter (HEX, RGB, HSL)",
    intro: "Convert colors between HEX, RGB, and HSL formats with a live color preview. Enter any color in one format and instantly get the equivalent in all others.",
    categorySlug: "developer-tools",
    keywords: ["color converter", "hex to rgb", "rgb to hex", "hsl to hex", "color format converter"],
    faqs: [
      { question: "What color formats are supported?", answer: "HEX (#FF5733), RGB (rgb(255, 87, 51)), and HSL (hsl(11, 100%, 60%)) with plans to add CMYK and more." },
      { question: "Can I pick a color visually?", answer: "Yes. Use the built-in color picker to select a color and see its values in all formats." },
      { question: "Why would I need to convert colors?", answer: "Different tools and languages use different color formats. CSS often uses HEX, design tools use RGB, and some prefer HSL for easier adjustments." },
    ],
    howToUse: [
      "Enter a color in HEX, RGB, or HSL format.",
      "Or use the color picker to select a color.",
      "See the equivalent values in all formats.",
      "Copy the format you need.",
    ],
    relatedSlugs: ["json-formatter", "css-minifier", "base64-encode-decode"],
  },
];

// ---------------------------------------------------------------------------
// MATH & CONVERSION TOOLS
// ---------------------------------------------------------------------------

const mathTools: Tool[] = [
  {
    slug: "percentage-calculator",
    name: "Percentage Calculator",
    title: "Free Online Percentage Calculator — Calculate Percentages Easily | ToolOrbit",
    description: "Calculate percentages, percentage increase/decrease, and find what percent one number is of another. Free online percentage calculator.",
    headline: "Free Online Percentage Calculator",
    intro: "Solve any percentage problem instantly. Calculate what X% of Y is, find percentage increase or decrease, or determine what percent one number is of another.",
    categorySlug: "math-and-conversion-tools",
    keywords: ["percentage calculator", "calculate percentage", "percent calculator", "percentage increase", "percentage decrease"],
    faqs: [
      { question: "What can this calculator do?", answer: "It solves three types of percentage problems: (1) What is X% of Y? (2) X is what % of Y? (3) What is the percentage change from X to Y?" },
      { question: "How do I calculate a discount?", answer: "Enter the original price and discount percentage. For example, 20% of $50 = $10 discount, making the final price $40." },
      { question: "How is percentage change calculated?", answer: "Percentage change = ((New Value - Old Value) / Old Value) × 100. A positive result means increase; negative means decrease." },
    ],
    howToUse: [
      "Choose the type of calculation you need.",
      "Enter the numbers in the input fields.",
      "See the result calculated instantly.",
    ],
    relatedSlugs: ["tip-calculator", "compound-interest-calculator", "bmi-calculator", "loan-payment-calculator"],
  },
  {
    slug: "age-calculator",
    name: "Age Calculator",
    title: "Free Online Age Calculator — Calculate Exact Age in Years, Months & Days | ToolOrbit",
    description: "Calculate your exact age in years, months, and days from your date of birth. Free online age calculator with upcoming birthday countdown.",
    headline: "Free Online Age Calculator",
    intro: "Enter your date of birth to see your exact age in years, months, and days. Also see days until your next birthday and the day of the week you were born.",
    categorySlug: "math-and-conversion-tools",
    keywords: ["age calculator", "calculate age", "how old am i", "age from date of birth", "birthday calculator"],
    faqs: [
      { question: "How is age calculated?", answer: "The tool calculates the difference between your birth date and today in years, months, and days, accounting for leap years and varying month lengths." },
      { question: "Can I calculate age between two dates?", answer: "Yes. Enter a start date and end date to calculate the duration between any two dates." },
      { question: "Does it account for leap years?", answer: "Yes. The calculation correctly handles leap years and the varying number of days in each month." },
    ],
    howToUse: [
      "Enter your date of birth (or any start date).",
      "Optionally set a custom end date.",
      "View your exact age in years, months, and days.",
    ],
    relatedSlugs: ["unix-timestamp-converter", "percentage-calculator", "bmi-calculator"],
  },
  {
    slug: "bmi-calculator",
    name: "BMI Calculator",
    title: "Free Online BMI Calculator — Calculate Body Mass Index | ToolOrbit",
    description: "Calculate your Body Mass Index (BMI) instantly. Free BMI calculator with weight status categories. Supports metric and imperial units.",
    headline: "Free Online BMI Calculator",
    intro: "Enter your height and weight to calculate your Body Mass Index (BMI) and see where you fall on the standard BMI scale. Supports both metric and imperial units.",
    categorySlug: "math-and-conversion-tools",
    keywords: ["bmi calculator", "body mass index", "calculate bmi", "bmi checker", "weight calculator"],
    faqs: [
      { question: "How is BMI calculated?", answer: "BMI = weight (kg) / height (m)². For imperial units: BMI = (weight (lbs) × 703) / height (inches)²." },
      { question: "What are the BMI categories?", answer: "Underweight: below 18.5 | Normal: 18.5–24.9 | Overweight: 25–29.9 | Obese: 30 and above." },
      { question: "Is BMI a perfect measure of health?", answer: "BMI is a useful screening tool but does not directly measure body fat or account for muscle mass, bone density, or distribution of fat." },
    ],
    howToUse: [
      "Select metric (kg/cm) or imperial (lbs/in) units.",
      "Enter your weight and height.",
      "View your BMI score and weight category.",
    ],
    relatedSlugs: ["percentage-calculator", "age-calculator", "unit-converter", "weight-converter"],
  },
  {
    slug: "loan-payment-calculator",
    name: "Loan Payment Calculator",
    title: "Free Online Loan Payment Calculator — Estimate Monthly Payments | ToolOrbit",
    description: "Calculate monthly loan payments, total interest, and total cost. Free loan calculator for mortgages, car loans, and personal loans.",
    headline: "Free Online Loan Payment Calculator",
    intro: "Estimate your monthly loan payment based on principal amount, interest rate, and loan term. See total interest paid and the full repayment breakdown.",
    categorySlug: "math-and-conversion-tools",
    keywords: ["loan calculator", "loan payment calculator", "mortgage calculator", "monthly payment calculator", "interest calculator"],
    faqs: [
      { question: "How is the monthly payment calculated?", answer: "Using the standard amortization formula: M = P × [r(1+r)^n] / [(1+r)^n – 1], where P is principal, r is monthly rate, and n is number of payments." },
      { question: "Can I use this for mortgages?", answer: "Yes. Enter your home loan amount, annual interest rate, and loan term to estimate monthly mortgage payments." },
      { question: "Does it include taxes and insurance?", answer: "This calculator estimates principal and interest only. Property taxes and insurance are not included." },
    ],
    howToUse: [
      "Enter the loan amount (principal).",
      "Enter the annual interest rate.",
      "Enter the loan term in years.",
      "View the monthly payment, total interest, and total cost.",
    ],
    relatedSlugs: ["compound-interest-calculator", "percentage-calculator", "tip-calculator"],
  },
  {
    slug: "compound-interest-calculator",
    name: "Compound Interest Calculator",
    title: "Free Online Compound Interest Calculator | ToolOrbit",
    description: "Calculate compound interest on savings and investments. See how your money grows over time with different rates and compounding periods.",
    headline: "Free Online Compound Interest Calculator",
    intro: "See how your savings or investments grow over time with compound interest. Adjust principal, rate, compounding frequency, and contributions to plan your financial future.",
    categorySlug: "math-and-conversion-tools",
    keywords: ["compound interest calculator", "compound interest", "investment calculator", "savings calculator", "interest calculator"],
    faqs: [
      { question: "What is compound interest?", answer: "Compound interest is interest earned on both the initial principal and the accumulated interest from previous periods. It makes your money grow faster over time." },
      { question: "What compounding frequencies are available?", answer: "Annual, semi-annual, quarterly, monthly, and daily compounding options are available." },
      { question: "Can I include regular contributions?", answer: "Yes. Add monthly or annual contributions to see how regular saving affects your total balance." },
    ],
    howToUse: [
      "Enter the initial investment (principal).",
      "Enter the annual interest rate.",
      "Set the compounding frequency and time period.",
      "Optionally add regular contributions.",
      "View the projected balance and interest earned.",
    ],
    relatedSlugs: ["loan-payment-calculator", "percentage-calculator", "tip-calculator"],
  },
  {
    slug: "tip-calculator",
    name: "Tip Calculator",
    title: "Free Online Tip Calculator — Calculate Tips & Split Bills | ToolOrbit",
    description: "Calculate tips and split bills easily. Free tip calculator with custom tip percentages and bill splitting for any group size.",
    headline: "Free Online Tip Calculator",
    intro: "Calculate the right tip amount and split the bill evenly among any number of people. Choose from common tip percentages or enter a custom amount.",
    categorySlug: "math-and-conversion-tools",
    keywords: ["tip calculator", "calculate tip", "bill splitter", "restaurant tip", "split bill calculator"],
    faqs: [
      { question: "How much should I tip?", answer: "Common tip percentages are 15% for adequate service, 18% for good service, and 20% or more for excellent service in the US." },
      { question: "Can I split the bill?", answer: "Yes. Enter the number of people and the tool calculates each person's share including tip." },
      { question: "Does it handle custom tip percentages?", answer: "Yes. Use the preset buttons or enter any custom tip percentage." },
    ],
    howToUse: [
      "Enter the bill amount.",
      "Select or enter a tip percentage.",
      "Enter the number of people to split the bill.",
      "View the tip amount, total, and per-person share.",
    ],
    relatedSlugs: ["percentage-calculator", "loan-payment-calculator", "compound-interest-calculator"],
  },
  {
    slug: "unit-converter",
    name: "Unit Converter",
    title: "Free Online Unit Converter — Convert Any Unit | ToolOrbit",
    description: "Convert between hundreds of units across length, weight, temperature, volume, speed, and more. Free universal unit converter.",
    headline: "Free Online Unit Converter",
    intro: "Convert between units of length, weight, temperature, volume, speed, area, and more. A universal converter for everyday and professional use.",
    categorySlug: "math-and-conversion-tools",
    keywords: ["unit converter", "convert units", "measurement converter", "metric converter", "unit conversion"],
    faqs: [
      { question: "What categories of units are supported?", answer: "Length, weight/mass, temperature, volume, speed, area, time, and digital storage." },
      { question: "Does it support metric and imperial?", answer: "Yes. Convert freely between metric, imperial, and US customary units." },
      { question: "How accurate are the conversions?", answer: "Conversions use standard conversion factors and are accurate to many decimal places." },
    ],
    howToUse: [
      "Select the unit category (length, weight, etc.).",
      "Choose the source and target units.",
      "Enter a value to convert.",
      "View the converted result instantly.",
    ],
    relatedSlugs: ["length-converter", "weight-converter", "temperature-converter"],
  },
  {
    slug: "length-converter",
    name: "Length Converter",
    title: "Free Online Length Converter — Convert Meters, Feet, Inches & More | ToolOrbit",
    description: "Convert between length units including meters, feet, inches, centimeters, kilometers, miles, and more. Free online length converter.",
    headline: "Free Online Length Converter",
    intro: "Convert between all common length units instantly. Supports meters, feet, inches, centimeters, millimeters, kilometers, miles, yards, and more.",
    categorySlug: "math-and-conversion-tools",
    keywords: ["length converter", "meters to feet", "feet to meters", "inches to cm", "convert length"],
    faqs: [
      { question: "What length units are supported?", answer: "Millimeters, centimeters, meters, kilometers, inches, feet, yards, miles, nautical miles, and more." },
      { question: "How many feet in a meter?", answer: "1 meter = 3.28084 feet. Use this converter for exact conversions between any units." },
      { question: "Is the conversion exact?", answer: "Yes. Standard conversion factors are used for maximum accuracy." },
    ],
    howToUse: [
      "Select the source unit (e.g., meters).",
      "Select the target unit (e.g., feet).",
      "Enter a value.",
      "See the conversion instantly.",
    ],
    relatedSlugs: ["weight-converter", "temperature-converter", "unit-converter"],
  },
  {
    slug: "weight-converter",
    name: "Weight Converter",
    title: "Free Online Weight Converter — Convert Kilograms, Pounds, Ounces & More | ToolOrbit",
    description: "Convert between weight units including kilograms, pounds, ounces, grams, and tons. Free online weight converter.",
    headline: "Free Online Weight Converter",
    intro: "Convert between kilograms, pounds, ounces, grams, milligrams, metric tons, and more. Instant, accurate weight conversions.",
    categorySlug: "math-and-conversion-tools",
    keywords: ["weight converter", "kg to lbs", "pounds to kilograms", "ounces to grams", "convert weight"],
    faqs: [
      { question: "What weight units are supported?", answer: "Milligrams, grams, kilograms, metric tons, ounces, pounds, and US tons." },
      { question: "How many pounds in a kilogram?", answer: "1 kilogram = 2.20462 pounds. Use this converter for precise conversions." },
      { question: "Is it accurate for cooking measurements?", answer: "Yes. The conversions are precise enough for both cooking and scientific use." },
    ],
    howToUse: [
      "Select the source unit (e.g., kilograms).",
      "Select the target unit (e.g., pounds).",
      "Enter a value.",
      "See the conversion result.",
    ],
    relatedSlugs: ["length-converter", "temperature-converter", "unit-converter", "bmi-calculator"],
  },
  {
    slug: "temperature-converter",
    name: "Temperature Converter",
    title: "Free Online Temperature Converter — Celsius, Fahrenheit, Kelvin | ToolOrbit",
    description: "Convert between Celsius, Fahrenheit, and Kelvin temperatures instantly. Free online temperature converter with conversion formulas.",
    headline: "Free Online Temperature Converter",
    intro: "Convert temperatures between Celsius, Fahrenheit, and Kelvin with a single input. See the conversion formulas and common reference points.",
    categorySlug: "math-and-conversion-tools",
    keywords: ["temperature converter", "celsius to fahrenheit", "fahrenheit to celsius", "kelvin converter", "convert temperature"],
    faqs: [
      { question: "How do you convert Celsius to Fahrenheit?", answer: "°F = (°C × 9/5) + 32. For example, 100°C = 212°F." },
      { question: "How do you convert Fahrenheit to Celsius?", answer: "°C = (°F - 32) × 5/9. For example, 72°F ≈ 22.2°C." },
      { question: "What is Kelvin used for?", answer: "Kelvin is the SI unit for temperature, used primarily in science. 0 K is absolute zero (-273.15°C)." },
    ],
    howToUse: [
      "Enter a temperature value.",
      "Select the source unit (Celsius, Fahrenheit, or Kelvin).",
      "See the converted values in all other units instantly.",
    ],
    relatedSlugs: ["length-converter", "weight-converter", "unit-converter"],
  },
];

// ---------------------------------------------------------------------------
// RANDOM & UTILITY TOOLS
// ---------------------------------------------------------------------------

const utilityTools: Tool[] = [
  {
    slug: "random-number-generator",
    name: "Random Number Generator",
    title: "Free Online Random Number Generator — Generate Random Numbers | ToolOrbit",
    description: "Generate random numbers within any range. Free online random number generator for games, raffles, statistics, and more.",
    headline: "Free Online Random Number Generator",
    intro: "Generate random numbers within any range you specify. Perfect for raffles, games, simulations, and random sampling. Uses cryptographically secure randomness.",
    categorySlug: "random-and-utility-tools",
    keywords: ["random number generator", "random number", "rng", "generate random number", "random picker"],
    faqs: [
      { question: "Are the numbers truly random?", answer: "Yes. The generator uses the Web Crypto API for cryptographically secure random number generation." },
      { question: "Can I generate multiple numbers at once?", answer: "Yes. Set the quantity to generate multiple random numbers in one click." },
      { question: "Can I prevent duplicates?", answer: "Yes. Toggle the 'unique numbers' option to ensure no duplicates in the generated set." },
    ],
    howToUse: [
      "Enter the minimum and maximum values.",
      "Set how many numbers to generate.",
      "Toggle whether duplicates are allowed.",
      "Click Generate.",
    ],
    relatedSlugs: ["dice-roller", "coin-flip", "random-name-picker", "uuid-generator"],
  },
  {
    slug: "dice-roller",
    name: "Dice Roller",
    title: "Free Online Dice Roller — Roll Virtual Dice | ToolOrbit",
    description: "Roll virtual dice online. Choose number of dice and sides (d4, d6, d8, d10, d12, d20). Free dice roller for tabletop games and decisions.",
    headline: "Free Online Dice Roller",
    intro: "Roll one or more virtual dice with customizable face counts. Perfect for tabletop RPGs, board games, and random decision making. Supports d4, d6, d8, d10, d12, d20, and d100.",
    categorySlug: "random-and-utility-tools",
    keywords: ["dice roller", "roll dice online", "virtual dice", "d20 roller", "d6 roller"],
    faqs: [
      { question: "What dice types are available?", answer: "Standard RPG dice: d4, d6, d8, d10, d12, d20, and d100. You can also enter a custom number of sides." },
      { question: "Can I roll multiple dice?", answer: "Yes. Roll up to 20 dice at once and see individual results plus the total." },
      { question: "Is the rolling random?", answer: "Yes. Each roll uses cryptographically secure randomness from the Web Crypto API." },
    ],
    howToUse: [
      "Select the type of die (d4, d6, d8, etc.).",
      "Set the number of dice to roll.",
      "Click Roll.",
      "View individual results and the total.",
    ],
    relatedSlugs: ["random-number-generator", "coin-flip", "random-name-picker"],
  },
  {
    slug: "coin-flip",
    name: "Coin Flip",
    title: "Free Online Coin Flip — Flip a Virtual Coin | ToolOrbit",
    description: "Flip a virtual coin online for heads or tails. Free coin flipper for fair decisions, games, and fun. Track your flip history.",
    headline: "Free Online Coin Flip",
    intro: "Flip a virtual coin for a fair heads-or-tails result. Track your flip history and see running statistics. Perfect for making quick, unbiased decisions.",
    categorySlug: "random-and-utility-tools",
    keywords: ["coin flip", "flip a coin", "heads or tails", "coin flipper", "virtual coin toss"],
    faqs: [
      { question: "Is the flip fair?", answer: "Yes. The result is generated using cryptographically secure randomness, giving exactly 50/50 odds." },
      { question: "Can I flip multiple coins?", answer: "Yes. Set the number of coins to flip them all at once and see the results." },
      { question: "Does it track history?", answer: "Yes. Your flip history is shown so you can see past results and running totals." },
    ],
    howToUse: [
      "Click Flip to toss the coin.",
      "View the result: Heads or Tails.",
      "Check the history for past results and statistics.",
    ],
    relatedSlugs: ["dice-roller", "random-number-generator", "random-name-picker"],
  },
  {
    slug: "random-name-picker",
    name: "Random Name Picker",
    title: "Free Online Random Name Picker — Pick Random Names from a List | ToolOrbit",
    description: "Pick random names from a list for raffles, team assignments, classroom activities, and more. Free online random name picker.",
    headline: "Free Online Random Name Picker",
    intro: "Enter a list of names and let the tool randomly select one or more. Perfect for raffles, classroom participation, team assignments, and giveaways.",
    categorySlug: "random-and-utility-tools",
    keywords: ["random name picker", "name picker", "random selector", "raffle picker", "random chooser"],
    faqs: [
      { question: "How does the picker work?", answer: "Enter names one per line. The tool uses cryptographically secure randomness to select names fairly." },
      { question: "Can I pick more than one name?", answer: "Yes. Set the number of names to pick and they'll be selected randomly without repeats." },
      { question: "Can I remove picked names?", answer: "Yes. Toggle the option to remove picked names from the list so they won't be selected again." },
    ],
    howToUse: [
      "Enter names in the text area, one per line.",
      "Set how many names to pick.",
      "Click Pick to select random names.",
    ],
    relatedSlugs: ["random-number-generator", "dice-roller", "coin-flip"],
    exampleInput: "Alice\nBob\nCharlie\nDiana\nEve",
    exampleOutput: "Selected: Charlie",
  },
  {
    slug: "qr-code-generator",
    name: "QR Code Generator",
    title: "Free Online QR Code Generator — Create QR Codes Instantly | ToolOrbit",
    description: "Generate QR codes for URLs, text, email, phone numbers, and more. Free online QR code generator with download options.",
    headline: "Free Online QR Code Generator",
    intro: "Create QR codes for any text, URL, email address, or phone number. Download as PNG for print or digital use. All generation happens in your browser.",
    categorySlug: "random-and-utility-tools",
    keywords: ["qr code generator", "create qr code", "qr code maker", "free qr code", "generate qr code"],
    faqs: [
      { question: "What can I encode in a QR code?", answer: "Any text, URL, email address, phone number, SMS, Wi-Fi credentials, or vCard contact information." },
      { question: "Can I download the QR code?", answer: "Yes. Download the QR code as a PNG image for use in print materials, websites, or presentations." },
      { question: "Is there a size limit?", answer: "QR codes can encode up to about 4,296 alphanumeric characters, but smaller content produces more easily scannable codes." },
      { question: "Are the QR codes free to use?", answer: "Yes. All QR codes generated are completely free to use for personal and commercial purposes." },
    ],
    howToUse: [
      "Enter the text or URL you want to encode.",
      "The QR code is generated instantly.",
      "Click Download to save the QR code as a PNG image.",
    ],
    relatedSlugs: ["url-encoder-decoder", "base64-encode-decode", "random-number-generator"],
  },
];

// ---------------------------------------------------------------------------
// COMBINED EXPORTS
// ---------------------------------------------------------------------------

export const allTools: Tool[] = [
  ...textTools,
  ...developerTools,
  ...mathTools,
  ...utilityTools,
];

export function getToolBySlug(slug: string): Tool | undefined {
  return allTools.find((t) => t.slug === slug);
}

export function getToolsByCategory(categorySlug: string): Tool[] {
  return allTools.filter((t) => t.categorySlug === categorySlug);
}

export function getAllToolSlugs(): string[] {
  return allTools.map((t) => t.slug);
}

export function getRelatedTools(tool: Tool): Tool[] {
  return tool.relatedSlugs
    .map((slug) => getToolBySlug(slug))
    .filter((t): t is Tool => t !== undefined);
}
