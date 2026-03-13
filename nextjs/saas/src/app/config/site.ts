export const siteConfig = {
  name: "Acme",
  description: "The modern SaaS platform for teams.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
} as const;
