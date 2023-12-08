// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

/** @type {import('@docusaurus/types').Config} */
const config = {
    title: "Hangar",
    tagline: "",
    favicon: "favicon.ico",
    url: "https://hangar.cnrancher.com",
    baseUrl: "/",
    // GitHub pages deployment config.
    organizationName: "cnrancher",
    projectName: "docs-hangar",
    onBrokenLinks: "throw",
    onBrokenMarkdownLinks: "throw",
    onDuplicateRoutes: "warn",
    i18n: {
        defaultLocale: "en",
        locales: [
            "en",
            "zh",
        ],
        localeConfigs: {
            en: {
                htmlLang: "en",
                label: "English",
            },
            zh: {
                htmlLang: "zh-Hans",
                label: "简体中文",
            },
        },
    },
    themeConfig: {
        // image: "",
        colorMode: {
            defaultMode: "dark",
            // Use user preference instead of default mode.
            respectPrefersColorScheme: true,
            // Hides the switch in the navbar.
            disableSwitch: false,
        },
        navbar: {
            hideOnScroll: false,
            title: "Hangar",
            // logo: {
            //     alt: "Hangar Logo",
            //     src: "",
            //     srcDark: "",
            // },
            items: [
                {
                    type: "doc",
                    position: "left",
                    docId: "index",
                    label: "Documents",
                },
                {
                    href: "https://github.com/cnrancher/hangar",
                    label: "GitHub",
                    position: "left",
                },
                {
                    type: "docsVersionDropdown",
                    position: "left",
                    dropdownActiveClassDisabled: true,
                    dropdownItemsAfter: [
                        {
                            type: "html",
                            value: "<hr class='dropdown-separator'>",
                        },
                        {
                            to: "/versions",
                            label: "All Versions",
                        },
                    ],
                },
                {
                    type: "localeDropdown",
                    position: "right",
                    dropdownItemsAfter: [
                        {
                            type: "html",
                            value: "<hr class='dropdown-separator'>",
                        },
                        {
                            href: "https://github.com/cnrancher/docs-hangar/tree/main/i18n/",
                            label: "Help Us Translate",
                        },
                    ],
                },
                {
                    type: "search",
                    position: "right",
                },
            ],
        },
        footer: {
            style: "dark",
            copyright: `Copyright © ${new Date().getFullYear()} SUSE Rancher. All Rights Reserved.`,
        },
        prism: {
            additionalLanguages: [
                "bash",
                "shell-session",
            ],
        },
    },
    presets: [
        [
            "@docusaurus/preset-classic",
            {
                docs: {
                    routeBasePath: "/docs",
                    sidebarPath: require.resolve("./sidebars.js"),
                    showLastUpdateTime: true,
                    editUrl: "https://github.com/cnrancher/docs-hangar/edit/main/",
                    lastVersion: "v1.7",
                    includeCurrentVersion: false,
                    versions: {
                        "v1.7": {
                            label: "v1.7",
                            path: "v1.7",
                            banner: "none",
                        },
                        "v1.6": {
                            label: "v1.6",
                            path: "v1.6",
                            banner: "none",
                        },
                    },
                },
                blog: false, // disable the blog plugin
                theme: {
                    customCss: [
                        require.resolve("./src/css/custom.css"),
                        "./src/theme/prism-dracula.css",
                    ],
                },
            },
        ],
    ],
    plugins: [
        "plugin-image-zoom",
        [
            require.resolve("@easyops-cn/docusaurus-search-local"),
            {
                // `hashed` is recommended as long-term-cache of index file is possible.
                hashed: true,
                // For Docs using Chinese, The `language` is recommended to set to:
                language: ["en", "zh"],
                // When applying `zh` in language, please install `nodejieba` in your project.
                searchResultContextMaxLength: 500,
                searchResultLimits: 64,
                indexPages: true
            },
        ],
    ],
};

export default config;
