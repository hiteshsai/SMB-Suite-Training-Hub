---
applyTo: "website/docs/**/*.md"
description: "Conventions for writing Docusaurus markdown docs in the SMB Suite Training Hub. Use when creating or editing documentation pages."
---

# Documentation Content Instructions

- Every `.md` file must start with YAML frontmatter containing `sidebar_position` and `title`.
- Use `slug: /` only on the root `intro.md` — no other page should set a custom slug unless explicitly requested.
- Use heading level `# H1` once at the top matching the `title`, then `## H2` and below for sections.
- Prefer tables for structured comparisons (licensing, asset catalogs, POC scope).
- Link to Microsoft Learn docs for official product information — do not duplicate official content.
- Use relative paths for cross-doc links: `[Business Premium](../Licensing/business-premium.md)`.
- Keep partner-facing language: actionable, outcome-oriented, concise.
- When referencing NPF assets, include status, audience, and source location fields per [CONTRIBUTING.md](../../CONTRIBUTING.md).
