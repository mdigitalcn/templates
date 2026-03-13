export const siteConfig = {
  name: "Acme",
  description: "The modern platform for building better products.",
  url: import.meta.env.VITE_SITE_URL ?? "http://localhost:5173",
} as const;
