export const siteConfig = {
  name: "Acme",
  description: "The modern SaaS platform for teams.",
  url: import.meta.env.VITE_SITE_URL ?? "http://localhost:5173",
} as const;
