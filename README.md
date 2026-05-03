# ToolOrbit

**Free Online Tools for Everyday Tasks** — A production-ready, SEO-first, multilingual utility website built with Next.js, TypeScript, and Tailwind CSS.

🌐 **Live at [www.tool-orbit.com](https://www.tool-orbit.com)**

## Overview

ToolOrbit is a utility website designed to rank for thousands of long-tail Google searches across 10 languages. It offers 989 free, browser-based tools across 11 categories.

All tools run entirely in the browser — no data ever leaves the user's device.

## Architecture

| Layer | Technology |
|-------|-----------|
| Framework | Next.js 16 (App Router) |
| Language | TypeScript |
| Styling | Tailwind CSS v4 |
| Output | Static Export (`output: "export"`) |
| Hosting | GitHub Pages |
| CI/CD | GitHub Actions |
| Languages | 10 (en, es, fr, de, pt, ja, zh, ko, it, hi) |
| Total Pages | 11,214 |
| Analytics | Google Analytics 4 (Consent Mode v2) |
| Security | CodeQL, Dependabot, Secret Scanning, CSP headers |

### Key Design Decisions

- **Static-first**: Every page is statically generated at build time. No server-side rendering needed.
- **Data-driven pages**: Tools, categories, FAQs, and SEO metadata are defined in structured TypeScript config files. Pages are generated programmatically from this data.
- **SEO as first-class concern**: Every page has unique title, meta description, canonical URL, Open Graph tags, Twitter cards, and JSON-LD structured data — all translated per locale.
- **Multilingual by design**: English is the source of truth. Translations are generated from patterns + dictionaries. UI chrome, tool names, descriptions, FAQs, and all tool component UI — everything is translated across all 10 locales. The `ToolUILabels` system (via `useToolUI()` hook) provides 210+ translated UI strings to all 35 tool components, including stat labels, form labels, month/day names, error messages, validation messages, placeholders, BMI categories, number bases, unit converter categories, and more. Formula calculator field labels (115+ labels) are translated at runtime via `formula-label-translations.ts`. Currency symbols are locale-appropriate (`$`, `€`, `¥`, `₩`, `₹`, `R$`). The locale-aware 404 page detects the user's language from the URL path.
- **Client-side tools**: Tool logic runs entirely in the browser using Web APIs (Crypto, SubtleCrypto, Canvas, etc.). No server dependencies.
- **Code-split tools**: Each tool component is dynamically imported, so users only download the code for the tool they're using.
- **GDPR compliant**: Cookie consent banner, privacy policy with GDPR rights section. GA4 scripts only load after explicit user consent.
- **ADA/WCAG 2.1 AA compliant**: Skip navigation, aria-live regions, proper labels, color contrast, keyboard accessible.
- **Security hardened**: All user input HTML-escaped before rendering. Content-Security-Policy headers. No `innerHTML` with unsanitized data.

## SEO Implementation

### Page-Level SEO
- Unique `<title>` and `<meta description>` for every page
- Canonical URLs on all pages
- Open Graph and Twitter Card meta tags
- Robots directives

### Structured Data (JSON-LD)
- `WebSite` schema with SearchAction on every page
- `Organization` schema sitewide
- `WebApplication` schema on each tool page
- `BreadcrumbList` schema on tool and category pages
- `FAQPage` schema on tool pages with FAQs

### Technical SEO
- XML sitemap at `/sitemap.xml` (52 URLs)
- `robots.txt` at `/robots.txt`
- Semantic HTML with proper heading hierarchy
- Descriptive URLs (`/tools/word-counter/`, `/tools/json-formatter/`)
- Internal linking: related tools, category links, breadcrumbs
- Fast page loads (static HTML, code-split JS)
- Accessible (keyboard-friendly, labeled inputs, ARIA where needed)

### Programmatic SEO
- All tool pages generated from `src/lib/data/tools.ts`
- Category pages generated from `src/lib/data/categories.ts`
- Guide pages generated per category
- Adding a new tool = adding a config entry + component

## Project Structure

```
src/
├── app/                          # Next.js App Router pages
│   ├── layout.tsx                # Root layout (header, footer, global SEO)
│   ├── page.tsx                  # Home page
│   ├── sitemap.ts                # XML sitemap generation
│   ├── robots.ts                 # robots.txt generation
│   ├── not-found.tsx             # 404 page
│   ├── tools/
│   │   ├── page.tsx              # All tools index
│   │   └── [slug]/page.tsx       # Individual tool pages
│   ├── categories/[slug]/page.tsx # Category pages
│   ├── guides/[slug]/page.tsx    # Category guide pages
│   ├── search/                   # Search page
│   ├── about/                    # About page
│   ├── contact/                  # Contact page
│   ├── privacy/                  # Privacy policy
│   ├── terms/                    # Terms of service
│   └── disclaimer/               # Disclaimer
├── lib/
│   ├── data/
│   │   ├── tools.ts              # All tool definitions (SEO, FAQs, metadata)
│   │   ├── categories.ts         # Category definitions
│   │   └── site.ts               # Site-wide configuration
│   ├── seo/
│   │   ├── metadata.ts           # Metadata generation helpers
│   │   └── schema.ts             # JSON-LD schema generators
│   ├── search.ts                 # Client-side search index
│   └── i18n/                     # Internationalization system
│       ├── config.ts             # Locale definitions (10 languages)
│       ├── types.ts              # UIDictionary interface
│       ├── ToolUIContext.tsx      # React Context + useToolUI() hook (210+ labels)
│       ├── tool-ui-labels.ts     # Translated UI labels for all locales
│       ├── locales/*.ts          # Per-locale UI string dictionaries
│       ├── tool-name-translations.ts
│       ├── tool-content-translations.ts
│       ├── category-translations.ts
│       └── translate-tools.ts
└── components/
    ├── layout/                   # Header, Footer, Breadcrumb, CookieConsent, GoogleAnalytics
    ├── shared/                   # ToolPageLayout, FAQSection, RelatedTools, etc.
    └── tools/                    # Tool implementations
        ├── index.tsx             # Tool component registry
        ├── text/                 # 10 text tool components
        ├── developer/            # 11 developer tool components
        ├── math/                 # 10 math/conversion tool components
        └── utility/              # 5 utility tool components
```

## How to Run Locally

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# The static output is in the `out/` directory
```

## Deployment

ToolOrbit is deployed to **GitHub Pages** via GitHub Actions. Every push to `main` triggers:

1. `npm ci` + `npm run build` (static export to `out/`)
2. Upload artifact to GitHub Pages
3. Deploy to `www.tool-orbit.com`

The workflow is defined in `.github/workflows/deploy-pages.yml`.

Custom domain DNS is configured via GoDaddy with A records pointing to GitHub Pages IPs and a `www` CNAME to `jeremiahjordanisaacson.github.io`.

## How to Add a New Tool

1. **Define the tool** in `src/lib/data/tools.ts`:
   ```typescript
   {
     slug: "my-new-tool",
     name: "My New Tool",
     title: "Free Online My New Tool | ToolOrbit",
     description: "SEO meta description for the tool.",
     headline: "Free Online My New Tool",
     intro: "Intro paragraph targeting search intent.",
     categorySlug: "text-tools", // existing category slug
     keywords: ["keyword1", "keyword2"],
     faqs: [
       { question: "How does it work?", answer: "Explanation here." }
     ],
     howToUse: ["Step 1", "Step 2", "Step 3"],
     relatedSlugs: ["word-counter", "character-counter"],
   }
   ```

2. **Create the component** in the appropriate category folder:
   ```
   src/components/tools/text/MyNewTool.tsx
   ```
   Must be a `"use client"` component with a default export.

3. **Register it** in `src/components/tools/index.tsx`:
   ```typescript
   "my-new-tool": dynamic(() => import("./text/MyNewTool"), { loading }),
   ```

4. **Build and verify**: `npm run build`

That's it. The tool page, sitemap entry, search index entry, category listing, and all SEO metadata are generated automatically.

## How to Add a New Category

1. **Define the category** in `src/lib/data/categories.ts`
2. Category pages, guide pages, and navigation are generated automatically
3. Create tools that reference the new category slug

## How to Scale to Thousands of Pages

The architecture supports this natively:

1. **Bulk tool definitions**: Add entries to `tools.ts` (or split into multiple data files and merge)
2. **Template components**: Many tools share similar patterns (input → transform → output). Create reusable template components for common patterns
3. **JSON data files**: For extreme scale, load tool definitions from JSON files or a CMS at build time
4. **Build performance**: Next.js handles thousands of static pages efficiently with parallel workers
5. **Incremental approach**: Add tools in batches, each adding to the sitemap automatically

## Current Tool Count: 989

| Category | Count |
|----------|-------|
| Text Tools | ~60 tools (word counter, case converter, unicode generators, text analysis...) |
| Developer Tools | ~60 tools (JSON, Base64, JWT, regex, color, code formatters...) |
| Math & Conversion | ~40 tools (calculators, geometry, statistics...) |
| Finance Calculators | ~20 tools (interest, ROI, salary, savings...) |
| Unit Converters | ~750 tools (length, weight, volume, area, speed, power, energy, temperature, cooking, electrical, and more) |
| Number Converters | ~15 tools (binary, hex, octal, decimal, Roman) |
| Encoding Tools | ~15 tools (binary, hex, Morse, ROT13, NATO phonetic...) |
| Date & Time Tools | ~15 tools (date difference, add days, week number, leap year...) |
| Health & Fitness | ~15 tools (BMR, TDEE, calories, macros, pace...) |
| Education Tools | ~5 tools (GPA, grades, test scores...) |
| Random & Utility | ~30 tools (dice, coins, names, colors, teams, QR codes...) |

## Analytics

ToolOrbit uses **Google Analytics 4** with **Consent Mode v2**:

- GA4 scripts **only load after the user accepts cookies**
- Consent defaults to `analytics_storage: 'denied'` (no scripts, no pings)
- When a user clicks "Accept", the gtag.js script loads and consent upgrades to `'granted'`
- If the user rejects cookies, no GA4 code executes at all
- Compatible with static export (no server-side dependencies)

## Security

- **CodeQL** scans on every push and PR (JavaScript/TypeScript)
- **Dependabot** alerts for dependency vulnerabilities
- **Secret scanning** with push protection enabled
- **Private vulnerability reporting** enabled — report issues via the Security tab
- **CSP headers** restrict script and resource loading
- **XSS prevention** — all user input is HTML-escaped before rendering

See [SECURITY.md](SECURITY.md) for the full security policy.

## Known Limitations

- Markdown Preview uses a basic inline parser; consider `marked` or `remark` for full GFM support
- MD5 hash uses a basic inline implementation; SHA algorithms use the native Web Crypto API
- No dark mode (could be added with Tailwind's `dark:` variant)
- Static content pages (privacy, terms, about, contact, disclaimer) have locale-routed versions under `/[locale]/` but the `(main)` English-only copies still exist
- No real ad network integration yet (placeholder slots in layout)

## License

Copyright © 2026 Jeremiah Isaacson. All rights reserved.

This source code is publicly visible for transparency and educational purposes only. It is **not** open source. See [LICENSE](LICENSE) for details.
