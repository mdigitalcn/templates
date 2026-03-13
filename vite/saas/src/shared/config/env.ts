export const env = {
  SITE_URL: import.meta.env.VITE_SITE_URL ?? "http://localhost:5173",
  STRIPE_PUBLISHABLE_KEY: import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY ?? "",
} as const;
