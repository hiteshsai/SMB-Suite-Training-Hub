---
sidebar_position: 2
title: Deploy MIP
---

# Deploy Microsoft Information Protection (MIP)

Microsoft Information Protection (MIP) is the foundation of data security in Microsoft 365 — enabling organizations to **classify and protect data at scale using sensitivity labels**.

In a Secure by Default deployment model, protection is applied **automatically**, not manually. Labels are configured once and **applied by default across files, emails, and containers**, reducing reliance on end-user decisions and minimizing oversharing risk. [Learn more about Secure by Default →](https://learn.microsoft.com/purview/deploymentmodels/depmod-secure-by-default-intro)

This approach shifts the model from *"when should users protect data?"* to *"when should protection be adjusted or removed?"* — accelerating adoption while maintaining strong governance.

Use the toolkit assets in this section to design, configure, and deploy a labeling strategy that establishes a **baseline of protection across your Microsoft 365 environment**.

## MIP deployment toolkit

| Toolkit | Type | Use Stage | What it does | How to use it | Who should use it | Link |
| --- | --- | --- | --- | --- | --- | --- |
| Guided Labeling Assistant | Browser-based web tool; outputs PDF, CSV & JSON | Decide | 6-step decision tree for defining Purview sensitivity labels with Secure by Default set and HIPAA/PCI-DSS/GDPR overlays. Runs locally. | Open in browser → walk decision tree with customer → export PDF/CSV → hand off to deployment. | SMB owners, IT decision-makers, partner consultants scoping a labeling effort | [Launch](https://aka.ms/MIP-Labeling-Assistant) |
| PowerShell Deployment Script | GitHub repo (open-source PowerShell script) | Deploy | Automation that turns a label plan (CSV) into a configured tenant. Secure by Default label set; validated by Purview product team. Repeatable across tenants. | Pull latest from GitHub → run with `-WhatIf` → review changes → apply to tenant. | Partner IT admins and Microsoft consultants deploying Purview labels in customer tenants | [Launch](https://aka.ms/Deploy-Scripts) |
| Industry One-Pagers (x5) | PDF documents (one per vertical) | Position | DEFEND-aligned guidance for Healthcare, Financial Services, Manufacturing, Consumer Goods, and Professional Services. Includes TAM data, 8-label model, regulatory considerations, and partner checklist. | Use as a vertical-specific opener — walk into the customer with a brief tailored to their industry. | SMB partners positioning MIP to regulated verticals | See downloads below |
| MIP SOW Generator | Web tool (form-based); outputs customer-ready Word doc | Sell | Generates a Statement of Work in minutes. Covers Foundation to Premium tiers, aligned with PSA SOW templates. Standardizes deliverables across partners. | Fill form with customer scope → generate SOW → tweak pricing → send to customer. | Partner sellers and account managers scoping Purview engagements with SMB customers | [Launch](https://aka.ms/SOW-Generator) |
| Copilot CLI Quick Guide | PDF document | Enable | Reference guide with setup, prompts, and examples for using GitHub Copilot CLI as an AI assistant on M365/Purview questions. Reusable across workloads. | Keep open during customer calls — answer licensing and compliance questions at AI speed. Try live examples same-day. | All SMB partners — sellers, architects, technical specialists working M365 motions | [Download](/pdf/Quick-Guide-Copilot-CLI-v2.pdf) |

## Industry one-pagers

MIP label recommendations tailored to your customer's vertical. Download and share directly.

| Industry | Download |
| --- | --- |
| Consumer Goods | [Consumer Goods One-Pager](/pdf/Consumer_Goods_SMB_Purview_One_Pager.pdf) |
| Financial Services & Insurance | [Financial Services One-Pager](/pdf/Financial_Services_Insurance_SMB_Purview_One_Pager.pdf) |
| Healthcare | [Healthcare One-Pager](/pdf/Healthcare_SMB_Purview_One_Pager.pdf) |
| Manufacturing & Distribution | [Manufacturing One-Pager](/pdf/Manufacturing_Distribution_SMB_Purview_One_Pager.pdf) |
| Professional Services | [Professional Services One-Pager](/pdf/Professional_Services_SMB_Purview_One_Pager.pdf) |

## Four steps from discovery to deployment

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

**Prerequisites:**

- PowerShell 7+
- Exchange Online Management module
- Microsoft Online SharePoint module
- Tenant admin credentials (or GDAP partner delegation)

**Quick start:**

```powershell
.\Deploy-PurviewBestPractice.ps1 -TenantAdminUpn admin@contoso.onmicrosoft.com
```

Use `-WhatIf` to preview changes without applying them.

## What's next

- Continue to [Deploy DLP](./dlp.md) to layer data loss prevention policies on top of your labels.
- See the [Data Security overview](./getting-started.md) for the full partner deployment approach.
