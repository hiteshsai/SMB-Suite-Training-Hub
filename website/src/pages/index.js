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

function Pillars() {
  return (
    <section className={styles.sectionAlt} id="pillars">
      <div className={styles.container}>
        <h2 className={styles.sectionTitle}>Security Tool Kit</h2>
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

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout title={siteConfig.title} description={siteConfig.tagline}>
      <Hero />
      <main>
        <ValueProp />
        <Pillars />
      </main>
    </Layout>
  );
}
