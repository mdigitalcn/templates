import type { Metadata } from "next";
import { SellerAnalyticsPage } from "@/src/views/seller-analytics";

export const metadata: Metadata = { title: "Analytics" };

export default function AnalyticsRoute() {
  return <SellerAnalyticsPage />;
}
