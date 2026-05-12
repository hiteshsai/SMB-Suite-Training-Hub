const { Document, Packer, Paragraph, TextRun, Table, TableRow, TableCell,
        Header, Footer, AlignmentType, LevelFormat, ExternalHyperlink,
        HeadingLevel, BorderStyle, WidthType, ShadingType,
        PageNumber, PageBreak } = require('docx');
const fs = require('fs');

const border = { style: BorderStyle.SINGLE, size: 1, color: "CCCCCC" };
const borders = { top: border, bottom: border, left: border, right: border };
const cellMargins = { top: 80, bottom: 80, left: 120, right: 120 };

function headerCell(text, width) {
  return new TableCell({
    borders,
    width: { size: width, type: WidthType.DXA },
    shading: { fill: "106EBE", type: ShadingType.CLEAR },
    margins: cellMargins,
    children: [new Paragraph({ children: [new TextRun({ text, bold: true, color: "FFFFFF", font: "Arial", size: 20 })] })],
  });
}

function cell(text, width) {
  return new TableCell({
    borders,
    width: { size: width, type: WidthType.DXA },
    margins: cellMargins,
    children: [new Paragraph({ children: [new TextRun({ text, font: "Arial", size: 20 })] })],
  });
}

function heading(text, level) {
  return new Paragraph({ heading: level, children: [new TextRun({ text, font: "Arial" })] });
}

function para(text) {
  return new Paragraph({ spacing: { after: 120 }, children: [new TextRun({ text, font: "Arial", size: 22 })] });
}

function bulletItem(text, ref) {
  return new Paragraph({
    numbering: { reference: ref, level: 0 },
    spacing: { after: 60 },
    children: [new TextRun({ text, font: "Arial", size: 22 })],
  });
}

function link(label, url) {
  return new Paragraph({
    spacing: { after: 120 },
    children: [new ExternalHyperlink({
      children: [new TextRun({ text: label, style: "Hyperlink", font: "Arial", size: 22 })],
      link: url,
    })],
  });
}

const doc = new Document({
  styles: {
    default: { document: { run: { font: "Arial", size: 22 } } },
    paragraphStyles: [
      { id: "Heading1", name: "Heading 1", basedOn: "Normal", next: "Normal", quickFormat: true,
        run: { size: 36, bold: true, font: "Arial", color: "106EBE" },
        paragraph: { spacing: { before: 360, after: 200 }, outlineLevel: 0 } },
      { id: "Heading2", name: "Heading 2", basedOn: "Normal", next: "Normal", quickFormat: true,
        run: { size: 28, bold: true, font: "Arial", color: "0A4574" },
        paragraph: { spacing: { before: 240, after: 160 }, outlineLevel: 1 } },
      { id: "Heading3", name: "Heading 3", basedOn: "Normal", next: "Normal", quickFormat: true,
        run: { size: 24, bold: true, font: "Arial", color: "333333" },
        paragraph: { spacing: { before: 200, after: 120 }, outlineLevel: 2 } },
    ],
  },
  numbering: {
    config: [
      { reference: "bullets", levels: [{ level: 0, format: LevelFormat.BULLET, text: "\u2022", alignment: AlignmentType.LEFT,
          style: { paragraph: { indent: { left: 720, hanging: 360 } } } }] },
      { reference: "numbers", levels: [{ level: 0, format: LevelFormat.DECIMAL, text: "%1.", alignment: AlignmentType.LEFT,
          style: { paragraph: { indent: { left: 720, hanging: 360 } } } }] },
    ],
  },
  sections: [
    // --- COVER PAGE ---
    {
      properties: {
        page: {
          size: { width: 12240, height: 15840 },
          margin: { top: 1440, right: 1440, bottom: 1440, left: 1440 },
        },
      },
      headers: {
        default: new Header({
          children: [new Paragraph({
            alignment: AlignmentType.RIGHT,
            children: [new TextRun({ text: "Microsoft SMB Suite — Partner Guide", italics: true, font: "Arial", size: 18, color: "888888" })],
          })],
        }),
      },
      footers: {
        default: new Footer({
          children: [new Paragraph({
            alignment: AlignmentType.CENTER,
            children: [new TextRun({ text: "Page ", font: "Arial", size: 18 }), new TextRun({ children: [PageNumber.CURRENT], font: "Arial", size: 18 })],
          })],
        }),
      },
      children: [
        new Paragraph({ spacing: { before: 3000 } }),
        new Paragraph({
          alignment: AlignmentType.CENTER,
          children: [new TextRun({ text: "SMB Security Guide", font: "Arial", size: 52, bold: true, color: "106EBE" })],
        }),
        new Paragraph({
          alignment: AlignmentType.CENTER,
          spacing: { before: 200, after: 400 },
          children: [new TextRun({ text: "Partner enablement guide for positioning, scoping, and deploying\nMicrosoft 365 Business Premium security for SMB customers", font: "Arial", size: 26, color: "555555" })],
        }),
        new Paragraph({
          alignment: AlignmentType.CENTER,
          spacing: { before: 600 },
          children: [new TextRun({ text: "Microsoft SMB Suite Training Hub", font: "Arial", size: 22, color: "888888" })],
        }),
        new Paragraph({
          alignment: AlignmentType.CENTER,
          spacing: { before: 100 },
          children: [new TextRun({ text: "Last updated: May 2026", font: "Arial", size: 22, color: "888888" })],
        }),
        new Paragraph({ children: [new PageBreak()] }),

        // --- SECTION 1: WHY BUSINESS PREMIUM ---
        heading("1. Why Microsoft 365 Business Premium?", HeadingLevel.HEADING_1),
        para("Microsoft 365 Business Premium is the all-in-one productivity and security foundation for businesses with up to 300 users. It bundles identity protection, device management, threat protection, and information protection into a single per-user license — eliminating the need for SMBs to buy and manage separate point solutions."),

        heading("What's included", HeadingLevel.HEADING_2),
        new Table({
          width: { size: 9360, type: WidthType.DXA },
          columnWidths: [3120, 3120, 3120],
          rows: [
            new TableRow({ children: [
              headerCell("Pillar", 3120), headerCell("Key capabilities", 3120), headerCell("Why it matters for SMBs", 3120),
            ]}),
            new TableRow({ children: [
              cell("Identity & Access", 3120),
              cell("Azure AD P1 (Conditional Access, MFA, SSPR)", 3120),
              cell("Blocks 99.9% of compromised-credential attacks", 3120),
            ]}),
            new TableRow({ children: [
              cell("Device Management", 3120),
              cell("Intune (MDM + MAM), Autopilot", 3120),
              cell("Secure BYOD and company devices without on-prem infrastructure", 3120),
            ]}),
            new TableRow({ children: [
              cell("Threat Protection", 3120),
              cell("Defender for Business, Defender for Office 365 P1", 3120),
              cell("Enterprise-grade endpoint + email protection at SMB price", 3120),
            ]}),
            new TableRow({ children: [
              cell("Information Protection", 3120),
              cell("Sensitivity labels, basic DLP, Azure Information Protection P1", 3120),
              cell("Classify and protect sensitive data across M365 workloads", 3120),
            ]}),
          ],
        }),
        new Paragraph({ spacing: { after: 200 } }),

        // --- SECTION 2: SECURITY CONVERSATION FRAMEWORK ---
        heading("2. Leading the Security Conversation", HeadingLevel.HEADING_1),
        para("Partners should frame security discussions around customer pain, not product features. Use these five steps:"),

        new Paragraph({
          numbering: { reference: "numbers", level: 0 },
          spacing: { after: 80 },
          children: [new TextRun({ text: "Anchor on Business Premium", bold: true, font: "Arial", size: 22 }), new TextRun({ text: " — position it as the SMB productivity and security foundation.", font: "Arial", size: 22 })],
        }),
        new Paragraph({
          numbering: { reference: "numbers", level: 0 },
          spacing: { after: 80 },
          children: [new TextRun({ text: "Discover sensitive data", bold: true, font: "Arial", size: 22 }), new TextRun({ text: " — ask where customer, employee, financial, or regulated data is stored and shared.", font: "Arial", size: 22 })],
        }),
        new Paragraph({
          numbering: { reference: "numbers", level: 0 },
          spacing: { after: 80 },
          children: [new TextRun({ text: "Introduce Purview/MIP", bold: true, font: "Arial", size: 22 }), new TextRun({ text: " — a simple way to classify, label, protect, and govern sensitive information.", font: "Arial", size: 22 })],
        }),
        new Paragraph({
          numbering: { reference: "numbers", level: 0 },
          spacing: { after: 80 },
          children: [new TextRun({ text: "Show Defender Suite depth", bold: true, font: "Arial", size: 22 }), new TextRun({ text: " — position the Defender Suite add-on for customers who need deeper threat protection.", font: "Arial", size: 22 })],
        }),
        new Paragraph({
          numbering: { reference: "numbers", level: 0 },
          spacing: { after: 200 },
          children: [new TextRun({ text: "Upsell Purview Suite", bold: true, font: "Arial", size: 22 }), new TextRun({ text: " — for customers with advanced compliance or data security requirements.", font: "Arial", size: 22 })],
        }),

        heading("Discovery questions to ask", HeadingLevel.HEADING_2),
        bulletItem("What sensitive data does the customer handle most often?", "bullets"),
        bulletItem("Where does that data live — email, SharePoint, OneDrive, Teams, devices, or LOB apps?", "bullets"),
        bulletItem("How do users share files externally today?", "bullets"),
        bulletItem("Are there contractual, industry, or regulatory requirements (HIPAA, PCI, GDPR)?", "bullets"),
        bulletItem("Who owns compliance and security decisions?", "bullets"),
        new Paragraph({ spacing: { after: 200 } }),

        // --- SECTION 3: DATA PROTECTION DEPLOYMENT ---
        heading("3. Data Protection Deployment Checklist", HeadingLevel.HEADING_1),
        para("Use this checklist when deploying Microsoft Purview Information Protection (MIP) in a customer tenant."),

        heading("Pre-deployment", HeadingLevel.HEADING_2),
        bulletItem("Verify Microsoft 365 Business Premium licensing is active for all users", "bullets"),
        bulletItem("Enable the unified audit log in the Microsoft Purview compliance portal", "bullets"),
        bulletItem("Enable Azure Information Protection integration for SharePoint and OneDrive", "bullets"),
        bulletItem("Enable sensitivity label co-authoring (if needed for collaboration scenarios)", "bullets"),
        new Paragraph({ spacing: { after: 120 } }),

        heading("Label taxonomy", HeadingLevel.HEADING_2),
        para("Start with a simple taxonomy. Most SMBs need 3–5 labels:"),
        new Table({
          width: { size: 9360, type: WidthType.DXA },
          columnWidths: [2340, 2340, 2340, 2340],
          rows: [
            new TableRow({ children: [
              headerCell("Label", 2340), headerCell("Scope", 2340), headerCell("Protection", 2340), headerCell("When to use", 2340),
            ]}),
            new TableRow({ children: [
              cell("Public", 2340), cell("All workloads", 2340), cell("None (visual marking only)", 2340), cell("Marketing materials, public-facing docs", 2340),
            ]}),
            new TableRow({ children: [
              cell("General", 2340), cell("All workloads", 2340), cell("Header/footer marking", 2340), cell("Day-to-day internal documents", 2340),
            ]}),
            new TableRow({ children: [
              cell("Confidential", 2340), cell("All workloads", 2340), cell("Encryption + restrict to org", 2340), cell("Financial reports, HR data, contracts", 2340),
            ]}),
            new TableRow({ children: [
              cell("Highly Confidential", 2340), cell("All workloads", 2340), cell("Encryption + restrict to named users", 2340), cell("M&A data, trade secrets, legal holds", 2340),
            ]}),
          ],
        }),
        new Paragraph({ spacing: { after: 120 } }),

        heading("DLP policies", HeadingLevel.HEADING_2),
        para("Configure Data Loss Prevention policies for the most common data types:"),
        bulletItem("Credit card numbers — Exchange + SharePoint/OneDrive", "bullets"),
        bulletItem("Social Security Numbers — Exchange + SharePoint/OneDrive", "bullets"),
        bulletItem("Custom sensitive info types matching the customer's data patterns", "bullets"),
        new Paragraph({ spacing: { after: 120 } }),

        heading("Retention policies", HeadingLevel.HEADING_2),
        bulletItem("Exchange: 7-year retention (typical for financial/legal)", "bullets"),
        bulletItem("SharePoint/OneDrive: 5-year retention", "bullets"),
        bulletItem("Teams chat: 3-year retention", "bullets"),
        new Paragraph({ spacing: { after: 200 } }),

        // --- SECTION 4: DEFENDER SUITE ADD-ON ---
        heading("4. Defender Suite for Business Premium", HeadingLevel.HEADING_1),
        para("The Microsoft Defender Suite add-on extends Business Premium with advanced threat protection capabilities:"),

        new Table({
          width: { size: 9360, type: WidthType.DXA },
          columnWidths: [3120, 6240],
          rows: [
            new TableRow({ children: [
              headerCell("Capability", 3120), headerCell("What it adds beyond Business Premium", 6240),
            ]}),
            new TableRow({ children: [
              cell("Defender for Office 365 P2", 3120),
              cell("Automated investigation & response, attack simulation training, threat explorer", 6240),
            ]}),
            new TableRow({ children: [
              cell("Defender for Identity", 3120),
              cell("On-prem Active Directory threat detection (if hybrid)", 6240),
            ]}),
            new TableRow({ children: [
              cell("Defender for Cloud Apps", 3120),
              cell("Shadow IT discovery, app governance, session controls", 6240),
            ]}),
          ],
        }),
        new Paragraph({ spacing: { after: 120 } }),
        para("Position the Defender Suite when the customer has hybrid identity, uses third-party SaaS apps, or needs automated incident response."),

        // --- SECTION 5: PURVIEW SUITE ---
        heading("5. Purview Suite for Business Premium", HeadingLevel.HEADING_1),
        para("Microsoft Purview Suite for Business Premium adds advanced compliance and data governance capabilities on top of the information protection already included in Business Premium:"),
        bulletItem("Advanced sensitivity label auto-labeling (service-side)", "bullets"),
        bulletItem("Advanced DLP (endpoint DLP, Teams DLP, adaptive protection)", "bullets"),
        bulletItem("Data lifecycle management (retention labels, disposition review)", "bullets"),
        bulletItem("eDiscovery (Premium) for legal hold and case management", "bullets"),
        bulletItem("Insider Risk Management (limited)", "bullets"),
        bulletItem("Communication Compliance (limited)", "bullets"),
        new Paragraph({ spacing: { after: 120 } }),
        para("Position the Purview Suite when the customer operates in a regulated industry (healthcare, financial services), handles large volumes of sensitive data, or has active legal/compliance requirements."),
        new Paragraph({ spacing: { after: 200 } }),

        // --- SECTION 6: PARTNER TOOLS ---
        heading("6. Partner Enablement Tools", HeadingLevel.HEADING_1),
        para("The SMB Suite Training Hub provides three interactive tools to streamline the partner workflow:"),

        heading("MIP SOW Generator", HeadingLevel.HEADING_2),
        para("Configure customer-specific settings and generate a ready-to-send Statement of Work template. Access at:"),
        link("aka.ms/SOW-Generator", "https://aka.ms/SOW-Generator"),

        heading("Guided Labeling Assistant", HeadingLevel.HEADING_2),
        para("Walk through sensitivity label setup with industry-specific examples, classification decisions, and audit-ready plan export. Access at:"),
        link("aka.ms/MIP-Labeling-Assistant", "https://aka.ms/MIP-Labeling-Assistant"),

        heading("PowerShell Deployment Script", HeadingLevel.HEADING_2),
        para("Automate MIP deployment in customer tenants — sensitivity labels, DLP policies, retention, and tenant settings. Access at:"),
        link("aka.ms/Deploy-Scripts", "https://aka.ms/Deploy-Scripts"),
        new Paragraph({ spacing: { after: 200 } }),

        // --- SECTION 7: REFERENCES ---
        heading("7. References", HeadingLevel.HEADING_1),
        link("Set up information protection in Microsoft 365 Business Premium", "https://learn.microsoft.com/microsoft-365/admin/security-and-compliance/m365bp-information-protection"),
        link("Add Microsoft Defender Suite for Business Premium", "https://learn.microsoft.com/microsoft-365/admin/security-and-compliance/add-defender-suite-business-premium"),
        link("Security, privacy, and compliance in Business Premium", "https://learn.microsoft.com/microsoft-365/business-premium/m365bp-security-privacy-compliance"),
        link("SMB Suite Training Hub", "https://hiteshsai.github.io/SMB-Suite-Training-Hub/"),
      ],
    },
  ],
});

Packer.toBuffer(doc).then(buffer => {
  const outPath = require('path').join(__dirname, '..', 'static', 'pdf', 'SMB-Security-Guide.docx');
  fs.writeFileSync(outPath, buffer);
  console.log(`Created: ${outPath}`);
});
