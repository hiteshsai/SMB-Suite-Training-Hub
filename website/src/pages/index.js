import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './index.module.css';

const valueProps = [
  {
    icon: '💬',
    title: 'Frame the conversation',
    description: 'Industry one-pagers and discovery prompts that help you lead with customer pain, not product features.',
  },
  {
    icon: '📐',
    title: 'Scope the engagement',
    description: 'The Labeling Assistant and SOW Generator turn a discovery call into a ready-to-sign Statement of Work.',
  },
  {
    icon: '🚀',
    title: 'Deploy in minutes',
    description: 'PowerShell scripts automate labels, DLP, and retention — so you spend time advising, not clicking.',
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
        <div className={styles.heroButtons}>
          <Link className={styles.heroPrimary} to="/docs/intro">
            Browse assets
          </Link>
          <Link className={styles.heroSecondary} to="#getting-started">
            Getting started →
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
        <h2 className={styles.sectionTitle}>Why this hub?</h2>
        <p className={styles.sectionSub}>This site gives Microsoft partners a single place to prepare, pitch, and deploy data security for SMB customers.</p>
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
        <h2 className={styles.sectionTitle}>Interactive tools</h2>
        <p className={styles.sectionSub}>Launch directly — no install required.</p>
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
        <Tools />
        <Industries />
        <GettingStarted />
        <AdditionalResources />
      </main>
    </Layout>
  );
}
