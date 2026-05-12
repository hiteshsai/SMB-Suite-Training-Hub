---
sidebar_position: 3
title: Purview Suite — Deploy
---

# Purview Suite for Business Premium

Everything you need to take a customer from discovery to a fully configured Purview deployment.

## Interactive tools

Launch directly — no install required.

| Tool | What it does | Launch |
| --- | --- | --- |
| MIP SOW Generator | Configure customer-specific settings and generate a ready-to-send Statement of Work | [Launch](https://aka.ms/SOW-Generator) |
| Guided Labeling Assistant | Walk through sensitivity label setup with industry-specific examples and export an audit-ready plan | [Launch](https://aka.ms/MIP-Labeling-Assistant) |
| PowerShell Deployment Script | Automate MIP deployment — sensitivity labels, DLP policies, retention, and tenant settings | [Launch](https://aka.ms/Deploy-Scripts) |

## Industry one-pagers

MIP label recommendations tailored to your customer's vertical. Download and share directly.

| Industry | Download |
| --- | --- |
| Consumer Goods | [Consumer Goods One-Pager](/pdf/Consumer_Goods_SMB_Purview_One_Pager.pdf) |
| Financial Services & Insurance | [Financial Services One-Pager](/pdf/Financial_Services_Insurance_SMB_Purview_One_Pager.pdf) |
| Healthcare | [Healthcare One-Pager](/pdf/Healthcare_SMB_Purview_One_Pager.pdf) |
| Manufacturing & Distribution | [Manufacturing One-Pager](/pdf/Manufacturing_Distribution_SMB_Purview_One_Pager.pdf) |
| Professional Services | [Professional Services One-Pager](/pdf/Professional_Services_SMB_Purview_One_Pager.pdf) |

## Getting started — four steps

### Step 1 — Pick your industry

Download the one-pager for your customer's vertical to frame the data protection conversation.

### Step 2 — Design the labels

Use the [Guided Labeling Assistant](https://aka.ms/MIP-Labeling-Assistant) to build a sensitivity label taxonomy tailored to the customer's industry and data types. The assistant walks through:

- Industry selection and data type identification
- Label-by-label decision flow
- Audit-ready plan export

### Step 3 — Generate the SOW

Use the [MIP SOW Generator](https://aka.ms/SOW-Generator) to create a customer-ready Statement of Work. Configure:

- Customer environment details (users, license, industry)
- Foundation services (labels, DLP, encryption)
- Intermediate and advanced add-ons
- Engagement type and delivery model

### Step 4 — Deploy

Run the [PowerShell Deployment Script](https://aka.ms/Deploy-Scripts) to configure the customer's tenant. The script automates:

- Tenant settings (audit log, AIP/SPO integration, co-authoring)
- Sensitivity label creation and publishing
- DLP policies for Exchange and SharePoint/OneDrive
- Retention policies
- Optional AI governance controls

**Quick start:**

```powershell
.\Deploy-PurviewBestPractice.ps1 -TenantAdminUpn admin@contoso.onmicrosoft.com
```

Use `-WhatIf` to preview changes without applying them.

## Additional resources

| Resource | Format | Download |
| --- | --- | --- |
| Quick Guide — GitHub Copilot CLI | PDF | [Download](/pdf/Quick-Guide-Copilot-CLI-v2.pdf) |

See the [full asset catalog](./Assets/Partner-Assets/asset-catalog.md) for all available resources.
