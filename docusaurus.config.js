// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");
const vsdark = require("prism-react-renderer/themes/vsDark");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "react-SliderX",
  tagline: "A highly customizable slider component for React",
  url: "https://your-docusaurus-test-site.com",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "IRadics", // Usually your GitHub org/user name.
  projectName: "react-sliderX", // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: "https://github.com/IRadics/react-sliderx-doc/blob/main/",
        },
        /*
        blog: {
          blogSidebarTitle: "Changelogs",
          blogSidebarCount: "ALL",
          showReadingTime: false,
          blogTitle: "Changelog",
          blogDescription: "SliderX Changelog",
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: "https://github.com/IRadics/react-sliderx-doc/blob/main/",
        },*/
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: "react-SliderX",
        logo: {
          alt: "My Site Logo",
          src: "img/logo.svg",
        },
        items: [
          {
            type: "doc",
            docId: "getStarted",
            position: "left",
            label: "Documentation",
          },
          { to: "/changelogs", label: "Changelogs", position: "left" },
          {
            href: "https://github.com/IRadics/react-sliderx",
            label: "GitHub",
            position: "right",
          },
          {
            href: "https://www.buymeacoffee.com/iradics",
            label: "Buy me a beer",
            position: "left",
            className: "donate",
          },
        ],
      },
      footer: {
        style: "dark",
        links: [
          {
            title: "Menu",
            items: [
              {
                label: "Documentation",
                to: "/docs/getStarted",
              },
              {
                label: "Changelog",
                to: "/changelogs",
              },
            ],
          },
          /*{
            
            title: "Community",
            
            items: [
              {
                label: "Stack Overflow",
                href: "https://stackoverflow.com/questions/tagged/docusaurus",
              },
              {
                label: "Discord",
                href: "https://discordapp.com/invite/docusaurus",
              },
              {
                label: "Twitter",
                href: "https://twitter.com/docusaurus",
              },
            ],
          },*/
          {
            title: "More",
            items: [
              {
                label: "GitHub",
                href: "https://github.com/IRadics/react-sliderx",
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} István Radics. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: vsdark,
      },
      colorMode: {
        defaultMode: "dark",
        disableSwitch: true,
        respectPrefersColorScheme: false,
      },
    }),

  // ...
  plugins: [
    [
      "@docusaurus/plugin-content-blog",
      {
        /**
         * Required for any multi-instance plugin
         */
        id: "changelogs",
        /**
         * URL route for the blog section of your site.
         * *DO NOT* include a trailing slash.
         */
        routeBasePath: "changelogs",
        /**
         * Path to data on filesystem relative to site dir.
         */
        path: "./changelogs",
        blogSidebarTitle: "Changelogs",
        blogSidebarCount: "ALL",
        showReadingTime: false,
        blogTitle: "Changelogsas",
        blogDescription: "SliderX Changelog",
      },
    ],
  ],
};

module.exports = config;
