// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'سامانه راسخ',
  tagline: 'راهنمای سئو و رسانه‌های اجتماعی',
  url: 'https://your-docusaurus-test-site.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'مرکز علوم شناختی صدرا', // Usually your GitHub org/user name.
  projectName: 'ابزار تحلیلی', // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'fa',
    locales: ['en', 'fa'],
    path: 'i18n',
    localeConfigs: {
      en: {
        label: 'English',
        direction: 'ltr',
        htmlLang: 'en-US',
        calendar: 'gregory',
        path: 'en',
      },
      fa: {
        label: 'فارسی',
        direction: 'rtl',
        htmlLang: 'fa-IR',
        calendar: 'persian',
        path: 'fa',
      },
    },
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          //editUrl:
          //  'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          blogSidebarTitle: 'تمامی پست‌ها',
          blogSidebarCount: 'ALL',
          blogTitle: "Sadra-Rasekh",
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          //editUrl:
          //  'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'راسخ',
        logo: {
          alt: 'لوگو ابزار تحلیلی',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: 'سئو سایت',
          },
          {to: '/blog', label: 'رسانه‌های اجتماعی', position: 'left'},
          {
            href: 'https://zil.ink/saeed_aliverdi',
            label: 'Saeed',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'سایت',
            items: [
              {
                label: 'سئو و بهینه‌سازی',
                to: '/docs/intro',
              },
              {
                label: 'سئو داخلی',
                to: '/docs/SEO/سئو%20داخلی%20سایت/onpage-seo',
              },              {
                label: 'سئو فنی',
                to: '/docs/SEO/Technical-SEO/',
              },              {
                label: 'سئو خارجی',
                to: '/docs/SEO/سئو%20خارجی%20سایت/offpage-seo',
              },
            ],
          },
          {
            title: 'رسانه‌های اجتماعی',
            items: [
              {
                label: 'توییتر',
                to: '/blog',
              },
              {
                label: 'اینستاگرام',
                href: '/blog',
              },
            ],
          },
          {
            title: 'ابزارهای تحلیل',
            items: [
              {
                label: 'تحلیل سئو',
                href: 'https://stackoverflow.com/questions/tagged/docusaurus',
              },
              {
                label: 'تحلیل توییتر',
                href: 'https://discordapp.com/invite/docusaurus',
              },
              {
                label: 'تحلیل اینستاگرام',
                href: 'https://twitter.com/docusaurus',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Saeed Aliverdikhani`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
