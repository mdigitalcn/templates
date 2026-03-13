import type { Metadata } from "next";
import { OverviewPage } from "@/src/views/overview";

export const metadata: Metadata = { title: "Dashboard" };

export default function DashboardRoute() {
  return <OverviewPage />;
}
