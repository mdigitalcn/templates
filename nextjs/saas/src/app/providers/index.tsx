"use client";

import type { ReactNode } from "react";
import { QueryProvider } from "./query-provider";

export function Providers({ children }: { children: ReactNode }) {
  return (
    <QueryProvider>
      {/* Add ThemeProvider, SessionProvider, etc. here */}
      {children}
    </QueryProvider>
  );
}
