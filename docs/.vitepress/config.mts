import { defineConfig } from "vitepress";
import { generateSidebar } from "vitepress-sidebar";
import umlPlugin from "markdown-it-plantuml";

const vitepressSidebarOptions = {
  documentRootPath: "/docs",
  useTitleFromFrontmatter: true,
  sortMenusByFrontmatterOrder: true,
  frontmatterOrderDefaultValue: 999,
  includeFolderIndexFile: false,
  useFolderTitleFromIndexFile: true,
  manualSortFileNameByPriority: [
    "intro.md",
    "core-technologies.md",
    "solution.md",
    "get_started.md",
    "guides",
  ],
  includeDotFiles: false,
};

export default defineConfig({
  base: "/didroom-docs/",
  title: "F-L-O CREDENTIAL VERIFICATION",
  description: "Empower your Identity strategy: customize, plug, deploy",
  lang: "en-US",

  lastUpdated: true,
  metaChunk: true,

  head: [
    [
      "script",
      {},
      `window.$crisp=[];window.CRISP_WEBSITE_ID="8dd97823-ddac-401e-991a-7498234e4f00";(function(){d=document;s=d.createElement("script");s.src="https://client.crisp.chat/l.js";s.async=1;d.getElementsByTagName("head")[0].appendChild(s);})();`,
    ],
    [
      "link",
      {
        rel: "icon",
        type: "image/x-icon",
        href: "./public/favicon/favicon.ico",
      },
    ],
  ],

     themeConfig: {
    nav: [
      { text: "Home", link: "/" },
      {
        text: "Guide",
        items: [
          { text: "Wallet App", link: "/guides/wallet/wallet" },
          { text: "Web Verifier", link: "/guides/Verifier/web verifier" },
          { text: "Credential Issuance", link: "/guides/flows/basics" },
          { text: "Microservices", link: "/guides/Orgadmin/microservices" },
          { text: "Sysadmins", link: "/guides/Sysadmin/sysadmin" }
        ]
      },
      { text: "Get started", link: "/get_started" }
    ],
    logo: "/F-L-O%20CREDENTIAL%20VERIFICATION%20(1).webp",
    sidebar: generateSidebar(vitepressSidebarOptions),
    socialLinks: []

    },
    search: {
      provider: "local",
    },
  },
  markdown: {
    config(md) {
      md.use(umlPlugin);
    },
  },
});
