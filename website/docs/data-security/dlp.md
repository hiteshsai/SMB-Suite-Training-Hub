---
sidebar_position: 3
title: Deploy DLP
---

# Deploy Data Loss Prevention (DLP)

Data Loss Prevention (DLP) builds on MIP by **enforcing how sensitive data is shared, accessed, and used across Microsoft 365**.

While MIP defines what data is sensitive, DLP ensures that **data is handled appropriately** — detecting, monitoring, and preventing risky activities across workloads like Exchange, SharePoint, OneDrive, Teams, and endpoints. [Learn more about DLP →](https://learn.microsoft.com/purview/dlp-learn-about-dlp)

Within a Secure by Default approach, DLP policies act as the **enforcement layer**, automatically restricting oversharing and guiding user behavior through policy tips, alerts, and controls.

Use this section to translate data classification into **real, enforceable protections** that reduce data leakage risk while enabling secure collaboration.

## DLP deployment toolkit

The same Data Security tools used for MIP labeling also cover DLP. Use them to design and deploy enforcement policies:

| Toolkit | Type | Use Stage | What it does | How to use it | Link |
| --- | --- | --- | --- | --- | --- |
| Data Security Assistant | Browser-based web tool | Decide | Guided "Configure DLP enforcement" flow covering licensing, scope, posture, notifications, exceptions, and rollout — or run the combined Labeling + DLP flow to reuse your selected label set. | Open in browser → choose the DLP (or combined) workflow → answer context questions → export the policy recommendation. | [Launch](https://aka.ms/DataSecurityAssistant) |
| PowerShell Deployment Script | GitHub repo (open-source PowerShell script) | Deploy | Applies the Microsoft Data Security baseline to a Business Premium tenant, including DLP policies for Exchange and SharePoint/OneDrive, with idempotent runs and a simulation-to-enforcement gate. | Pull latest from GitHub → run with `-WhatIf` → review changes → apply to tenant. | [Launch](https://aka.ms/Deploy-Scripts) |

## What DLP covers

- **Exchange DLP** — Policies for credit card numbers, SSNs, and custom sensitive info types in email
- **SharePoint/OneDrive DLP** — Prevent external sharing of labeled or sensitive documents
- **Teams DLP** — Block sensitive data in chat and channel messages
- **Endpoint DLP** — Control copy, print, and upload of sensitive files on managed devices

:::tip Roll out safely
DLP policies are tenant-wide. Deploy in **simulation mode** first, review matches, then promote to enforcement after a Day-30 gate.
:::

## Prerequisites

Before configuring DLP, complete your MIP label deployment:

- [Deploy MIP](./mip.md) — deploy sensitivity labels first, then layer DLP policies on top

## Resources

- [Learn about data loss prevention](https://learn.microsoft.com/purview/dlp-learn-about-dlp) — Microsoft Learn overview
- [Create and deploy a DLP policy](https://learn.microsoft.com/purview/dlp-create-deploy-policy) — step-by-step guide
