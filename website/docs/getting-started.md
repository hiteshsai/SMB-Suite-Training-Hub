---
sidebar_position: 2
title: Getting Started
---

# Getting started

Four steps from discovery to deployment.

## Step 1 — Pick your industry

Download the one-pager for your customer's vertical to frame the data protection conversation.

| Industry | Download |
| --- | --- |
| Consumer Goods | [Consumer Goods One-Pager](/pdf/Consumer_Goods_SMB_Purview_One_Pager.pdf) |
| Financial Services & Insurance | [Financial Services One-Pager](/pdf/Financial_Services_Insurance_SMB_Purview_One_Pager.pdf) |
| Healthcare | [Healthcare One-Pager](/pdf/Healthcare_SMB_Purview_One_Pager.pdf) |
| Manufacturing & Distribution | [Manufacturing One-Pager](/pdf/Manufacturing_Distribution_SMB_Purview_One_Pager.pdf) |
| Professional Services | [Professional Services One-Pager](/pdf/Professional_Services_SMB_Purview_One_Pager.pdf) |

## Step 2 — Design the labels

Use the [Guided Labeling Assistant](https://aka.ms/MIP-Labeling-Assistant) to build a sensitivity label taxonomy tailored to the customer's industry and data types. The assistant walks through:

- Industry selection and data type identification
- Label-by-label decision flow
- Audit-ready plan export

## Step 3 — Generate the SOW

Use the [MIP SOW Generator](https://aka.ms/SOW-Generator) to create a customer-ready Statement of Work. Configure:

- Customer environment details (users, license, industry)
- Foundation services (labels, DLP, encryption)
- Intermediate and advanced add-ons
- Engagement type and delivery model

## Step 4 — Deploy

Run the [PowerShell Deployment Script](https://aka.ms/Deploy-Scripts) to configure the customer's tenant. The script automates:

- Tenant settings (audit log, AIP/SPO integration, co-authoring)
- Sensitivity label creation and publishing
- DLP policies for Exchange and SharePoint/OneDrive
- Retention policies
- Optional AI governance controls

### Prerequisites

- PowerShell 7+
- Exchange Online Management module
- Microsoft Online SharePoint module
- Tenant admin credentials (or GDAP partner delegation)

### Quick start

```powershell
.\Deploy-PurviewBestPractice.ps1 -TenantAdminUpn admin@contoso.onmicrosoft.com
```

Use `-WhatIf` to preview changes without applying them.

## What's next

- Check the [full asset catalog](./Assets/Partner-Assets/asset-catalog.md) for all available resources.
