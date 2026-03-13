export const siteConfig = {
  name: "Acme Store",
  description: "The modern e-commerce platform.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
} as const;
