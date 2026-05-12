import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './index.module.css';

const valueProps = [
  {
    icon: '�',
    title: 'Not another pitch deck hub',
    description: 'The partner portal has market data and GTM slides. This site picks up where that stops — with tools that actually configure customer tenants.',
  },
  {
    icon: '🛠️',
    title: 'Tools that do the work',
    description: 'Generate a Statement of Work, design a label taxonomy, and deploy policies with a PowerShell script — all from one place.',
  },
  {
    icon: '📄',
    title: 'Assets you can hand to customers',
    description: 'Industry one-pagers, deployment guides, and security checklists ready to share — no reformatting required.',
  },
];

const suites = [
  {
    title: 'Microsoft 365 Business Premium',
    icon: '🛡️',
    status: 'coming-soon',
    description: 'The all-in-one productivity and security foundation for SMBs — identity, device management, threat protection, and information protection in one license.',
    highlights: ['Azure AD P1 & Conditional Access', 'Intune MDM/MAM & Autopilot', 'Defender for Business', 'Basic sensitivity labels & DLP'],
    cta: null,
  },
  {
    title: 'Purview Suite for Business Premium',
    icon: '🔒',
    status: 'available',
    description: 'Advanced data security and compliance capabilities that extend Business Premium — auto-labeling, endpoint DLP, eDiscovery, insider risk, and more.',
    highlights: ['Sensitivity labels & auto-labeling', 'Advanced DLP (endpoint + Teams)', 'Data lifecycle & retention', 'eDiscovery Premium'],
    cta: { label: 'Explore Purview assets →', link: '/docs/Assets/Partner-Assets/asset-catalog' },
  },
  {
    title: 'Defender Suite for Business Premium',
    icon: '⚔️',
    status: 'coming-soon',
    description: 'Deeper threat protection with automated investigation, attack simulation, cloud app governance, and identity threat detection.',
    highlights: ['Defender for Office 365 P2', 'Defender for Identity', 'Defender for Cloud Apps', 'Automated investigation & response'],
    cta: null,
  },
];

const tools = [
  {
    title: 'MIP SOW Generator',
    description: 'Configure customer-specific settings and generate a ready-to-send Statement of Work template.',
    link: 'https://aka.ms/SOW-Generator',
    icon: '📋',
    external: true,
  },
  {
    title: 'Guided Labeling Assistant',
    description: 'Walk through Microsoft Purview sensitivity label setup with industry-specific examples and audit-ready plans.',
    link: 'https://aka.ms/MIP-Labeling-Assistant',
    icon: '🏷️',
    external: true,
  },
  {
    title: 'PowerShell Deployment Script',
    description: 'Automate MIP deployment in customer tenants — sensitivity labels, DLP policies, retention, and tenant settings.',
    link: 'https://aka.ms/Deploy-Scripts',
    icon: '⚡',
    external: true,
  },
];

const industries = [
  { name: 'Consumer Goods', file: '/pdf/Consumer_Goods_SMB_Purview_One_Pager.pdf' },
  { name: 'Financial Services', file: '/pdf/Financial_Services_Insurance_SMB_Purview_One_Pager.pdf' },
  { name: 'Healthcare', file: '/pdf/Healthcare_SMB_Purview_One_Pager.pdf' },
  { name: 'Manufacturing', file: '/pdf/Manufacturing_Distribution_SMB_Purview_One_Pager.pdf' },
  { name: 'Professional Services', file: '/pdf/Professional_Services_SMB_Purview_One_Pager.pdf' },
];

const steps = [
  { number: '1', title: 'Pick your industry', description: 'Download the one-pager for your customer\'s vertical.', link: '#industries' },
  { number: '2', title: 'Design the labels', description: 'Use the Labeling Assistant to build a sensitivity label taxonomy.', link: 'https://aka.ms/MIP-Labeling-Assistant' },
  { number: '3', title: 'Generate the SOW', description: 'Create a customer-ready Statement of Work.', link: 'https://aka.ms/SOW-Generator' },
  { number: '4', title: 'Deploy', description: 'Run the PowerShell script to configure the tenant.', link: 'https://aka.ms/Deploy-Scripts' },
];

function Hero() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={styles.hero}>
      <div className={styles.heroInner}>
        <h1 className={styles.heroTitle}>{siteConfig.title}</h1>
        <p className={styles.heroSubtitle}>{siteConfig.tagline}</p>
        <p className={styles.heroAudience}>Built for Microsoft CSP partners, managed service providers, and solution integrators selling Microsoft 365 Business Premium security to SMB customers.</p>
        <div className={styles.heroButtons}>
          <Link className={styles.heroPrimary} to="#getting-started">
            Start deploying
          </Link>
          <Link className={styles.heroSecondary} to="/docs/intro">
            Browse all assets →
          </Link>
        </div>
      </div>
    </header>
  );
}

function ValueProp() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.sectionTitle}>What is this site?</h2>
        <p className={styles.sectionSub}>A hands-on deployment toolkit for Microsoft partners. The <a href="https://microsoftpartners.microsoft.com/Microsoft-Security-Partners/Grow-SMB-Security/" target="_blank" rel="noopener noreferrer">partner portal</a> helps you understand the opportunity — this site helps you execute it.</p>
        <div className={styles.valuePropGrid}>
          {valueProps.map((vp) => (
            <div key={vp.title} className={styles.valuePropCard}>
              <span className={styles.valuePropIcon}>{vp.icon}</span>
              <h3>{vp.title}</h3>
              <p>{vp.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Suites() {
  return (
    <section className={styles.sectionAlt} id="suites">
      <div className={styles.container}>
        <h2 className={styles.sectionTitle}>Product suites</h2>
        <p className={styles.sectionSub}>Training content and partner assets organized by suite. Start with what's available — more is on the way.</p>
        <div className={styles.suiteGrid}>
          {suites.map((suite) => (
            <div key={suite.title} className={`${styles.suiteCard} ${suite.status === 'coming-soon' ? styles.suiteComingSoon : ''}`}>
              <div className={styles.suiteHeader}>
                <span className={styles.suiteIcon}>{suite.icon}</span>
                {suite.status === 'coming-soon' && (
                  <span className={styles.suiteBadge}>Coming soon</span>
                )}
                {suite.status === 'available' && (
                  <span className={styles.suiteBadgeAvailable}>Available now</span>
                )}
              </div>
              <h3>{suite.title}</h3>
              <p>{suite.description}</p>
              <ul className={styles.suiteHighlights}>
                {suite.highlights.map((h) => (
                  <li key={h}>{h}</li>
                ))}
              </ul>
              {suite.cta ? (
                <Link className={styles.suiteCta} to={suite.cta.link}>{suite.cta.label}</Link>
              ) : (
                <span className={styles.suiteCtaDisabled}>Assets coming soon</span>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ToolCard({ title, description, link, icon, external }) {
  const props = external ? { href: link, target: '_blank', rel: 'noopener noreferrer' } : { href: link };
  return (
    <a className={styles.toolCard} {...props}>
      <span className={styles.toolIcon}>{icon}</span>
      <h3>{title}</h3>
      <p>{description}</p>
      <span className={styles.toolLaunch}>Launch →</span>
    </a>
  );
}

function Tools() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.sectionTitle}>Purview deployment tools</h2>
        <p className={styles.sectionSub}>Interactive tools for the Purview Suite motion — launch directly, no install required.</p>
        <div className={styles.toolGrid}>
          {tools.map((tool) => (
            <ToolCard key={tool.title} {...tool} />
          ))}
        </div>
      </div>
    </section>
  );
}

function Industries() {
  return (
    <section className={styles.sectionAlt} id="industries">
      <div className={styles.container}>
        <h2 className={styles.sectionTitle}>Industry one-pagers</h2>
        <p className={styles.sectionSub}>MIP label recommendations tailored to your customer's vertical.</p>
        <div className={styles.industryGrid}>
          {industries.map((ind) => (
            <a key={ind.name} className={styles.industryCard} href={ind.file} target="_blank" rel="noopener noreferrer">
              <span className={styles.industryName}>{ind.name}</span>
              <span className={styles.industryDl}>Download PDF ↓</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

function GettingStarted() {
  return (
    <section className={styles.section} id="getting-started">
      <div className={styles.container}>
        <h2 className={styles.sectionTitle}>Getting started</h2>
        <p className={styles.sectionSub}>Four steps from discovery to deployment.</p>
        <div className={styles.stepsGrid}>
          {steps.map((step) => (
            <a key={step.number} className={styles.stepCard} href={step.link} target={step.link.startsWith('http') ? '_blank' : undefined} rel={step.link.startsWith('http') ? 'noopener noreferrer' : undefined}>
              <span className={styles.stepNumber}>{step.number}</span>
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

function AdditionalResources() {
  return (
    <section className={styles.sectionAlt}>
      <div className={styles.container}>
        <h2 className={styles.sectionTitle}>Additional resources</h2>
        <div className={styles.resourceGrid}>
          <a className={styles.resourceCard} href="/pdf/SMB-Security-Guide.docx">
            <strong>SMB Security Guide</strong>
            <span>Comprehensive partner guide covering conversation framework, label taxonomy, DLP, Defender Suite, and Purview Suite positioning.</span>
            <span className={styles.toolLaunch}>Download DOCX ↓</span>
          </a>
          <a className={styles.resourceCard} href="/pdf/Data-Security-Deployment-Guide-SMB.pptx">
            <strong>Data Security Deployment Guide</strong>
            <span>End-to-end deployment guide for Business Premium security, compliance, and data protection.</span>
            <span className={styles.toolLaunch}>Download PPTX ↓</span>
          </a>
          <a className={styles.resourceCard} href="/pdf/Quick-Guide-Copilot-CLI-v2.pdf" target="_blank" rel="noopener noreferrer">
            <strong>GitHub Copilot CLI Guide</strong>
            <span>Set up Copilot CLI with the Microsoft Learn MCP Server for natural-language M365 doc queries.</span>
            <span className={styles.toolLaunch}>Download PDF ↓</span>
          </a>
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout title={siteConfig.title} description={siteConfig.tagline}>
      <Hero />
      <main>
        <ValueProp />
        <Suites />
        <Tools />
        <Industries />
        <GettingStarted />
        <AdditionalResources />
      </main>
    </Layout>
  );
}
