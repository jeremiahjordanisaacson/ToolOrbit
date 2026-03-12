export const siteConfig = {
  name: "ToolOrbit",
  tagline: "Free Online Tools for Everyday Tasks",
  description:
    "ToolOrbit offers hundreds of free online tools for text editing, development, math, and more. Fast, private, and no signup required.",
  url: "https://toolorbit.com",
  locale: "en_US",
  twitter: "@toolorbit",
  themeColor: "#4f46e5",
} as const;

export type SiteConfig = typeof siteConfig;
