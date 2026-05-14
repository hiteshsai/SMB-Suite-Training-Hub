# Contributing

Use this structure when adding or updating partner enablement assets:

1. Add reusable training content under `website\docs`.
2. Place approved PDFs and companion downloads under `website\static\pdf` (referenced from docs via `/pdf/<file>.pdf`).
3. Register the asset in the catalog table on `website\docs\data-security\getting-started.md` with audience, format, and source link.
4. Run `npm run build` from `website` before submitting changes.

The partner asset catalog lives inside the Data Security pillar at `website\docs\data-security\getting-started.md`.
