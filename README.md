# Microsoft SMB Suite Training Hub

> Partner enablement hub for SMB security, compliance, and data protection motions across Microsoft 365 Business Premium, Microsoft Defender add-ons, and Microsoft Purview for Business Premium.

**Live site:** [https://hiteshsai.github.io/SMB-Suite-Training-Hub/](https://hiteshsai.github.io/SMB-Suite-Training-Hub/)

This folder is scaffolded in the same style as the Microsoft Entra Suite Training Hub: a docs-first Docusaurus site with a top-level repo structure, GitHub Pages workflow, and partner-ready content areas.

## Current focus

- Microsoft 365 Business Premium as the base SMB suite motion.
- Microsoft Defender Suite for Business Premium as the security add-on motion.
- Microsoft Purview Suite for Business Premium and Microsoft Purview Information Protection (MIP) as the initial compliance/data protection motion.
- SMB partner enablement assets, hosted in this repository.

## Local website

```powershell
Set-Location ".\website"
npm install
npm run start
```

Build the static site with:

```powershell
npm run build
```

## Content map

| Area | Purpose |
| --- | --- |
| `website\docs\Licensing` | Business Premium, Defender Suite add-on, and Purview Suite partner positioning |
| `website\docs\Purview\MIP` | Initial Microsoft Purview Information Protection training hub |
| `website\docs\Assets\NPF-Phase-1` | Partner enablement asset catalog and downloads |
| `website\docs\Partner-Guidance` | Partner conversation flow, discovery, and workshop guidance |
| `website\docs\Scenarios` | Customer scenarios that can become POC-in-a-box modules |

Before publishing publicly, confirm approved repo name, license, and branding.
