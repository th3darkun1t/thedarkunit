const CONFIG = {
  // profile setting (required)
  profile: {
    name: "0perator",
    image: "/tduavatar.png", 
    role: "",
    bio: "From the Depths of Darkness",
    email: "0perator@thedarkunit.com",
    linkedin: "the-dark-unit",
    twitter: "th3darkun1t",
    github: "",
    instagram: "",
  },
  
    projects: [
    {
      name: `thedarkunit`,
      href: "",
    },
  ],
  
  // blog setting (required)
  blog: {
    title: "THE DARK UNIT",
    description: "Welcome to The Dark Unit!",
    theme: "auto", // ['light', 'dark', 'auto']
  },

  // CONFIG configration (required)
  link: "https://thedarkunit.com",
  since: 2023, // If leave this empty, current year will be used.
  lang: "en-US", // ['en-US', 'zh-CN', 'zh-HK', 'zh-TW', 'ja-JP', 'es-ES', 'ko-KR']
  ogImageGenerateURL: "", // The link to generate OG image, don't end with a slash
  seo: {
    keywords: ["Malware", "ThreatIntel", "Blog"],
  },

  // notion configuration (required)
  notionConfig: {
    pageId: process.env.NOTION_PAGE_ID,
  },

  // plugin configuration (optional)
  googleAnalytics: {
    enable: false,
    config: {
      measurementId: process.env.NEXT_PUBLIC_GOOGLE_MEASUREMENT_ID || "",
    },
  },
  googleSearchConsole: {
    enable: false,
    config: {
      siteVerification: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION || "",
    },
  },
  utterances: {
    enable: false,
    config: {
      repo: "th3darkun1t/thedarkunit",
      "issue-term": "og:title",
      label: "💬 Utterances",
    },
  },
  cusdis: {
    enable: false,
    config: {
      host: "https://cusdis.com",
      appid: "", // Embed Code -> data-app-id value
    },
  },
  isProd: process.env.VERCEL_ENV === "production", // distinguish between development and production environment (ref: https://vercel.com/docs/environment-variables#system-environment-variables)
}

module.exports = { CONFIG }
