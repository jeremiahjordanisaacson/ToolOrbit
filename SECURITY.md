# Security Policy

## Reporting a Vulnerability

If you discover a security vulnerability in ToolOrbit, please report it responsibly using GitHub's **private vulnerability reporting** feature:

1. Go to the [Security tab](https://github.com/jeremiahjordanisaacson/ToolOrbit/security)
2. Click **"Report a vulnerability"**
3. Provide a detailed description of the issue

We will acknowledge your report within 48 hours and work on a fix promptly.

## Scope

ToolOrbit is a static site — all tools run entirely in the browser with no server-side processing. The main security concerns are:

- **XSS** via user input in tool components
- **Dependency vulnerabilities** in npm packages
- **Leaked secrets** in source code or build artifacts

## Supported Versions

| Version | Supported |
|---------|-----------|
| Latest (main branch) | ✅ |
| Older commits | ❌ |
