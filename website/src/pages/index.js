import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './index.module.css';

const valueProps = [
  {
    icon: '\uD83D\uDCCA',
    title: 'Not another pitch deck hub',
    description: 'The partner portal has market data and GTM slides. This site picks up where that stops \u2014 with tools that actually configure customer tenants.',
  },
  {
    icon: '\uD83D\uDEE0\uFE0F',
    title: 'Tools that do the work',
    description: 'Generate a Statement of Work, design a label taxonomy, and deploy policies with a PowerShell script \u2014 all from one place.',
  },
  {
    icon: '\uD83D\uDCC4',
    title: 'Assets you can hand to customers',
    description: 'Industry one-pagers, deployment guides, and security checklists ready to share \u2014 no reformatting required.',
  },
];

const pillars = [
  {
    title: 'Identity & Access Protection',
    icon: '\uD83D\uDD11',
    status: 'coming-soon',
    description: 'Secure how users sign in and access resources \u2014 Conditional Access, MFA, and identity threat detection.',
    link: null,
  },
  {
    title: 'Endpoint Protection',
    icon: '\uD83D\uDCBB',
    status: 'coming-soon',
    description: 'Protect devices with Defender for Business, attack surface reduction, and device compliance policies.',
    link: null,
  },
  {
    title: 'Email & Apps Protection',
    icon: '\uD83D\uDCE7',
    status: 'coming-soon',
    description: 'Stop phishing and malware with Safe Attachments, Safe Links, and anti-phishing policies.',
    link: null,
  },
  {
    title: 'Data Security',
    icon: '\uD83D\uDD12',
    status: 'available',
    description: 'Classify, label, and protect sensitive data with MIP and DLP \u2014 across email, SharePoint, OneDrive, Teams, and endpoints.',
    link: '/docs/data-security/getting-started',
  },
  {
    title: 'Cloud Apps Security',
    icon: '\u2601\uFE0F',
    status: 'coming-soon',
    description: 'Discover shadow IT, govern SaaS apps, and control sessions with Defender for Cloud Apps.',
    link: null,
  },
];

const deploymentGuides = [
  {
    bundle: 'Business Premium + Defender Suite',
    guides: [
      { label: 'Identity Protection Deployment Guide for Small Business', url: 'https://microsoftpartners.microsoft.com/Microsoft-Security-Partners/News-and-Events/?Topic=small+and+medium%E2%80%91sized+business+%28smb%29#resource-catalog' },
      { label: 'Device Management Deployment Guide for Small Business', url: 'https://microsoftpartners.microsoft.com/Microsoft-Security-Partners/News-and-Events/?Topic=small+and+medium%E2%80%91sized+business+%28smb%29#resource-catalog' },
      { label: 'Device Security Deployment Guide for Small Business', url: 'https://microsoftpartners.microsoft.com/Microsoft-Security-Partners/News-and-Events/?Topic=small+and+medium%E2%80%91sized+business+%28smb%29#resource-catalog' },
      { label: 'Email & App + Collaboration Deployment Guide for Small Business', url: 'https://microsoftpartners.microsoft.com/Microsoft-Security-Partners/News-and-Events/?Topic=small+and+medium%E2%80%91sized+business+%28smb%29#resource-catalog' },
      { label: 'SaaS Security Deployment Guide for Small Business', url: 'https://microsoftpartners.microsoft.com/Microsoft-Security-Partners/News-and-Events/?Topic=small+and+medium%E2%80%91sized+business+%28smb%29#resource-catalog' },
    ],
  },
  {
    bundle: 'Business Premium + Purview Suite',
    guides: [
      { label: 'Data Security Deployment Guide for Small Business', url: 'https://microsoftpartners.microsoft.com/Microsoft-Security-Partners/News-and-Events/?Topic=small+and+medium%E2%80%91sized+business+%28smb%29#resource-catalog' },
    ],
  },
];

const partnerResources = [
  { label: 'Grow your SMB security practice \u2014 SMB Security Partner Hub', url: 'https://microsoftpartners.microsoft.com/Microsoft-Security-Partners/Grow-SMB-Security/' },
  { label: 'Microsoft Multi-tenant Management resource guide', url: 'https://aka.ms/intunemultitenant' },
];

const sourceReferences = [
  { label: 'Set up information protection in Microsoft 365 Business Premium', url: 'https://learn.microsoft.com/microsoft-365/admin/security-and-compliance/m365bp-information-protection?view=o365-worldwide' },
  { label: 'Add Microsoft Defender Suite for Business Premium to your subscription', url: 'https://learn.microsoft.com/microsoft-365/admin/security-and-compliance/add-defender-suite-business-premium?view=o365-worldwide' },
  { label: 'Security, privacy, and compliance in Microsoft 365 Business Premium', url: 'https://learn.microsoft.com/microsoft-365/business-premium/m365bp-security-privacy-compliance?view=o365-worldwide' },
  { label: 'Partner Center: Purview Suite for Business Premium promotion', url: 'https://learn.microsoft.com/partner-center/announcements/2026-april#extended-promotion-on-microsoft-purview-suite-for-microsoft-365-business-premium' },
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
          <Link className={styles.heroPrimary} to="/docs/data-security/getting-started">
            Start with Data Security
          </Link>
          <Link className={styles.heroSecondary} to="#deployment-guides">
            Browse deployment guides &rarr;
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
        <p className={styles.sectionSub}>A hands-on deployment toolkit for Microsoft partners. The <a href="https://microsoftpartners.microsoft.com/Microsoft-Security-Partners/Grow-SMB-Security/" target="_blank" rel="noopener noreferrer">partner portal</a> helps you understand the opportunity &mdash; this site helps you execute it.</p>
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

function SecurityGuideCallout() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.calloutCard}>
          <h2 className={styles.calloutTitle}>Start with the SMB Security Guide</h2>
          <p className={styles.calloutBody}>
            A guide for securing small and medium business environments with Microsoft 365 and Microsoft Defender. Covers identity, device, email, and data protection in a phased, prioritized approach &mdash; giving partners and IT admins a clear foundation to build on. Start here, then use the SMB Suite training assets to accelerate and scale your deployment.
          </p>
          <a className={styles.calloutLink} href="https://aka.ms/smbsecurityguide" target="_blank" rel="noopener noreferrer">
            aka.ms/smbsecurityguide &rarr;
          </a>
        </div>
      </div>
    </section>
  );
}

function Pillars() {
  return (
    <section className={styles.sectionAlt} id="pillars">
      <div className={styles.container}>
        <h2 className={styles.sectionTitle}>Security SMB Tool Kit</h2>
        <p className={styles.sectionSub}>Deployment content organized by capability. Start with what&apos;s available &mdash; more pillars are on the way.</p>
        <div className={styles.pillarGrid}>
          {pillars.map((pillar) => {
            const inner = (
              <>
                <div className={styles.suiteHeader}>
                  <span className={styles.suiteIcon}>{pillar.icon}</span>
                  {pillar.status === 'coming-soon' && (
                    <span className={styles.suiteBadge}>Coming soon</span>
                  )}
                  {pillar.status === 'available' && (
                    <span className={styles.suiteBadgeAvailable}>Available now</span>
                  )}
                </div>
                <h3>{pillar.title}</h3>
                <p>{pillar.description}</p>
                {pillar.link ? (
                  <span className={styles.suiteCta}>Get started &rarr;</span>
                ) : (
                  <span className={styles.suiteCtaDisabled}>Assets coming soon</span>
                )}
              </>
            );

            return pillar.link ? (
              <Link key={pillar.title} className={`${styles.suiteCard} ${styles.pillarLink}`} to={pillar.link}>
                {inner}
              </Link>
            ) : (
              <div key={pillar.title} className={`${styles.suiteCard} ${styles.suiteComingSoon}`}>
                {inner}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function DeploymentGuides() {
  return (
    <section className={styles.section} id="deployment-guides">
      <div className={styles.container}>
        <h2 className={styles.sectionTitle}>Step-by-step deployment guides</h2>
        <p className={styles.sectionSub}>Official partner-built deployment guides for SMB customers, organized by suite bundle.</p>
        <div className={styles.bundleGrid}>
          {deploymentGuides.map((bundle) => (
            <div key={bundle.bundle} className={styles.bundleCard}>
              <h3>{bundle.bundle}</h3>
              <ul className={styles.linkList}>
                {bundle.guides.map((g) => (
                  <li key={g.label}>
                    <a href={g.url} target="_blank" rel="noopener noreferrer">{g.label}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ResourcesAndReferences() {
  return (
    <section className={styles.sectionAlt}>
      <div className={styles.container}>
        <div className={styles.referencesGrid}>
          <div>
            <h2 className={styles.subsectionTitle}>Partner resources</h2>
            <ul className={styles.linkList}>
              {partnerResources.map((r) => (
                <li key={r.label}>
                  <a href={r.url} target="_blank" rel="noopener noreferrer">{r.label}</a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className={styles.subsectionTitle}>Source references</h2>
            <ul className={styles.linkList}>
              {sourceReferences.map((r) => (
                <li key={r.label}>
                  <a href={r.url} target="_blank" rel="noopener noreferrer">{r.label}</a>
                </li>
              ))}
            </ul>
          </div>
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
        <SecurityGuideCallout />
        <Pillars />
        <DeploymentGuides />
        <ResourcesAndReferences />
      </main>
    </Layout>
  );
}
