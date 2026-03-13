export const env = {
  SITE_URL: import.meta.env.VITE_SITE_URL ?? "http://localhost:5173",
} as const;
