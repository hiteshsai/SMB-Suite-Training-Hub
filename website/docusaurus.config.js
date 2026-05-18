// @ts-check

import {themes as prismThemes} from 'prism-react-renderer';

const siteBaseUrl = '/SMB-Suite-Training-Hub/';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Microsoft SMB Suite Training Hub',
  tagline: 'The deployment toolkit for Microsoft SMB partners. Go from customer conversation to configured tenant \u2014 with interactive tools, automation scripts, and ready-to-use assets.',
  url: 'https://hiteshsai.github.io',
  baseUrl: siteBaseUrl,
  favicon: 'img/favicon.svg',
  organizationName: 'hiteshsai',
  projectName: 'SMB-Suite-Training-Hub',
  onBrokenLinks: 'throw',
  onBrokenAnchors: 'ignore',
  headTags: [
    {
      tagName: 'script',
      attributes: { type: 'text/javascript' },
      innerHTML: `
        (function(c,l,a,r,i,t,y){
          c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
          t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
          y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
        })(window, document, "clarity", "script", "wq3qbsq3ho");
      `,
    },
    {
      tagName: 'script',
      attributes: { type: 'text/javascript' },
      innerHTML: `
        document.addEventListener('click', function(e) {
          var link = e.target.closest('a[href]');
          if (!link) return;
          var href = link.getAttribute('href');
          if (href && /\\.(pdf|pptx?)$/i.test(href)) {
            var name = href.split('/').pop();
            if (typeof clarity === 'function') {
              clarity('event', 'download');
              clarity('set', 'download_file', name);
            }
          }
        });
      `,
    },
  ],
  markdown: {
    hooks: {
      onBrokenMarkdownLinks: 'warn',
    },
  },
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },
  themes: [
    [
      '@easyops-cn/docusaurus-search-local',
      /** @type {import("@easyops-cn/docusaurus-search-local").PluginOptions} */
      ({
        hashed: true,
        language: ['en'],
        indexBlog: false,
        highlightSearchTermsOnTargetPage: true,
        explicitSearchResultPath: true,
      }),
    ],
  ],
  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
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
      announcementBar: {
        id: 'welcome_orientation',
        content: `\uD83D\uDC4B New here? Start with <a href="${siteBaseUrl}docs/data-security/getting-started"><strong>Data Security</strong></a> \u2014 our first fully built pillar.`,
        backgroundColor: '#106ebe',
        textColor: '#fff',
        isCloseable: true,
      },
      navbar: {
        title: 'SMB Suite - Training Hub',
        logo: {
          alt: 'SMB Suite Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            to: '/',
            label: 'Home',
            position: 'left',
            activeBaseRegex: '^/SMB-Suite-Training-Hub/?$',
          },
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Security SMB Tool Kit',
          },
          {
            href: 'https://aka.ms/smbsecurityguide',
            label: 'SMB Security Guide',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Home',
                to: '/',
              },
              {
                label: 'Security SMB Tool Kit',
                to: '/docs/data-security/getting-started',
              },
              {
                label: 'SMB Security Guide',
                href: 'https://aka.ms/smbsecurityguide',
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
              {
                label: 'SMB Security Partner Hub',
                href: 'https://microsoftpartners.microsoft.com/Microsoft-Security-Partners/Grow-SMB-Security/',
              },
            ],
          },
          {
            title: 'Feedback',
            items: [
              {
                label: 'Report an issue',
                href: 'https://github.com/hiteshsai/SMB-Suite-Training-Hub/issues/new',
              },
              {
                label: 'Suggest an improvement',
                href: 'https://github.com/hiteshsai/SMB-Suite-Training-Hub/issues/new?labels=enhancement',
              },
            ],
          },
        ],
        copyright: `Built for Microsoft SMB partners \u2014 \u00A9 ${new Date().getFullYear()}`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
