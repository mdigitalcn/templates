export const siteConfig = {
  name: "Acme Store",
  description: "The modern e-commerce platform.",
  url: import.meta.env.VITE_SITE_URL ?? "http://localhost:5173",
} as const;
