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

const suites = [
  {
    title: 'Microsoft 365 Business Premium',
    icon: '\uD83D\uDEE1\uFE0F',
    status: 'coming-soon',
    description: 'The all-in-one productivity and security foundation for SMBs \u2014 identity, device management, threat protection, and information protection in one license.',
    highlights: ['Azure AD P1 & Conditional Access', 'Intune MDM/MAM & Autopilot', 'Defender for Business', 'Basic sensitivity labels & DLP'],
    cta: null,
  },
  {
    title: 'Purview Suite for Business Premium',
    icon: '\uD83D\uDD12',
    status: 'available',
    description: 'Advanced data security and compliance capabilities that extend Business Premium \u2014 auto-labeling, endpoint DLP, eDiscovery, insider risk, and more.',
    highlights: ['Sensitivity labels & auto-labeling', 'Advanced DLP (endpoint + Teams)', 'Data lifecycle & retention', 'eDiscovery Premium'],
    cta: { label: 'Deploy Purview \u2192', link: '/docs/purview-suite' },
  },
  {
    title: 'Defender Suite for Business Premium',
    icon: '\u2694\uFE0F',
    status: 'coming-soon',
    description: 'Deeper threat protection with automated investigation, attack simulation, cloud app governance, and identity threat detection.',
    highlights: ['Defender for Office 365 P2', 'Defender for Identity', 'Defender for Cloud Apps', 'Automated investigation & response'],
    cta: null,
  },
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
          <Link className={styles.heroPrimary} to="/docs/purview-suite">
            Start with Purview
          </Link>
          <Link className={styles.heroSecondary} to="/docs/intro">
            Browse all resources &rarr;
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

function Suites() {
  return (
    <section className={styles.sectionAlt} id="suites">
      <div className={styles.container}>
        <h2 className={styles.sectionTitle}>Product suites</h2>
        <p className={styles.sectionSub}>Deployment content organized by suite. Start with what&apos;s available &mdash; more is on the way.</p>
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

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout title={siteConfig.title} description={siteConfig.tagline}>
      <Hero />
      <main>
        <ValueProp />
        <Suites />
      </main>
    </Layout>
  );
}
