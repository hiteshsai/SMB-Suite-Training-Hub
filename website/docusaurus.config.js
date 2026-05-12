// @ts-check

import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Microsoft SMB Suite',
  tagline: 'Training hub for SMB partner enablement',
  url: 'https://hiteshsai.github.io',
  baseUrl: '/SMB-Suite-Training-Hub/',
  organizationName: 'hiteshsai',
  projectName: 'SMB-Suite-Training-Hub',
  onBrokenLinks: 'throw',
  markdown: {
    hooks: {
      onBrokenMarkdownLinks: 'warn',
    },
  },
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },
  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath: '/',
          sidebarPath: require.resolve('./sidebars.js'),
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],
  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'SMB Suite - Training Hub',
        items: [],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Overview',
                to: '/',
              },
              {
                label: 'Purview MIP',
                to: '/Purview/MIP/features',
              },
              {
                label: 'Partner assets',
                to: '/Assets/Partner-Assets/asset-catalog',
              },
            ],
          },
          {
            title: 'Microsoft resources',
            items: [
              {
                label: 'Business Premium information protection',
                href: 'https://learn.microsoft.com/microsoft-365/admin/security-and-compliance/m365bp-information-protection?view=o365-worldwide',
              },
              {
                label: 'Defender Suite for Business Premium',
                href: 'https://learn.microsoft.com/microsoft-365/admin/security-and-compliance/add-defender-suite-business-premium?view=o365-worldwide',
              },
              {
                label: 'Business Premium security and compliance',
                href: 'https://learn.microsoft.com/microsoft-365/business-premium/m365bp-security-privacy-compliance?view=o365-worldwide',
              },
            ],
          },
        ],
        copyright: `Content scaffold for SMB partner enablement.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
