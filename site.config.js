const CONFIG = {
  // profile setting (required)
  profile: {
    name: "proochles",
    image: "/p_pfp.png", // If you want to create your own notion avatar, check out https://notion-avatar.vercel.app
    role: "management consultant",
    bio: "i'm up, you're down",
    email: "me@proochles.lol",
    x: "proochles",
  },
  projects: [
    {
      name: `BlossomCraft`,
      year: "2021-2024",
      href: "https://blossomcraft.org",
    },
    {
      name: `DEV`,
      year: "2020-2024",
      desciption: "Content/Tag Moderation",
      href: "https://dev.to",
    },
    {
      name: `Tickets`,
      year: "2022-2023",
      href: "https://ticketsbot.net",
    },
  ],
  // blog setting (required)
  blog: {
    title: "proochles.lol",
    description: "welcome to proochles' dungeon!",
    theme: "dark",
  },

  // CONFIG configration (required)
  link: "https://proochles.lol",
  since: 2024, // If leave this empty, current year will be used.
  lang: "en-US", // ['en-US', 'zh-CN', 'zh-HK', 'zh-TW', 'ja-JP', 'es-ES', 'ko-KR']
  ogImageGenerateURL: "https://og-image-korean.vercel.app", // The link to generate OG image, don't end with a slash

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
  naverSearchAdvisor: {
    enable: false,
    config: {
      siteVerification: process.env.NEXT_PUBLIC_NAVER_SITE_VERIFICATION || "",
    },
  },
  utterances: {
    enable: false,
    config: {
      repo: process.env.NEXT_PUBLIC_UTTERANCES_REPO || "",
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
  revalidateTime: 21600 * 7, // revalidate time for [slug], index
}
module.exports = { CONFIG }
