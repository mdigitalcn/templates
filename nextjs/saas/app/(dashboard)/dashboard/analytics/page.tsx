import type { Metadata } from "next";
import { AnalyticsPage } from "@/src/views/analytics";

export const metadata: Metadata = { title: "Analytics" };

export default function AnalyticsRoute() {
  return <AnalyticsPage />;
}
