import type { LinguiConfig } from "@lingui/conf";

const config: LinguiConfig = {
  locales: ["en", "ru", "uz"],
  pseudoLocale: "pseudo",
  sourceLocale: "en",
  fallbackLocales: {
    default: "uz",
  },
  catalogs: [
    {
      path: "locales/{locale}",
      include: ["src"],
    },
  ],
};

export default config;
