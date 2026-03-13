export const siteConfig = {
  name: "Acme",
  description: "The modern platform for building better products.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
} as const;
